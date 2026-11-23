"use client";

import { Product } from "@/data/mock-data";
import { formatINR } from "@/lib/utils";
import { useCartStore } from "@/lib/cart-store";
import { Star, ShoppingBag, Check } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  selectedModel?: string;
}

export function ProductCard({ product, selectedModel }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      selectedModel: selectedModel || product.compatibleModels[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
      {/* Top Media Container */}
      <div className="relative w-full aspect-square bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
          {product.tag && (
            <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md shadow-xs ${
              product.tag === "Deal of the Day"
                ? "bg-red-600 text-white"
                : product.tag === "Bestseller"
                ? "bg-amber-500 text-white"
                : "bg-blue-600 text-white"
            }`}>
              {product.tag}
            </span>
          )}
          {!product.inStock && (
            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-zinc-800 text-zinc-300">
              Out of Stock
            </span>
          )}
        </div>

        {/* Discount Badge */}
        <span className="absolute top-2.5 right-2.5 z-10 text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-600 text-white shadow-xs">
          {product.discountPercent}% OFF
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info Container */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Compatible Models Indicator */}
          <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1 line-clamp-1">
            {product.brand} · Fits {product.compatibleModels[0]}
          </div>

          <h3 className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">
              <span>{product.rating}</span>
              <Star className="w-2.5 h-2.5 fill-current" />
            </div>
            <span className="text-[10px] text-zinc-400">({product.reviewsCount})</span>
          </div>

          {/* Key bullets */}
          <div className="mt-2 space-y-0.5">
            {product.features.slice(0, 2).map((feat, idx) => (
              <p key={idx} className="text-[10px] text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-blue-500" />
                <span className="line-clamp-1">{feat}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Pricing & Add to Cart button */}
        <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm sm:text-base font-extrabold text-zinc-900 dark:text-zinc-100">
                {formatINR(product.price)}
              </span>
              <span className="text-xs text-zinc-400 line-through">
                {formatINR(product.mrp)}
              </span>
            </div>
            {product.inStock && product.stockQty < 15 && (
              <p className="text-[10px] font-medium text-amber-600 dark:text-amber-400">
                Only {product.stockQty} left!
              </p>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`h-9 px-3 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs ${
              !product.inStock
                ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed"
                : added
                ? "bg-emerald-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white active:scale-95"
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
