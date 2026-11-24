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
    <div className="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between w-full">
      {/* Top Media Container */}
      <div className="relative w-full aspect-square bg-slate-100 dark:bg-slate-800 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1 items-start">
          {product.tag && (
            <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs ${
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
            <span className="text-[10px] sm:text-[11px] font-bold uppercase px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-200">
              Out of Stock
            </span>
          )}
        </div>

        {/* Discount Badge */}
        <span className="absolute top-2 right-2 z-10 text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-md bg-emerald-600 text-white shadow-xs">
          {product.discountPercent}% OFF
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info Container */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Compatible Models Indicator */}
          <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 line-clamp-1">
            {product.brand} · Fits {product.compatibleModels[0]}
          </div>

          <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-1.5 sm:mt-2">
            <div className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold">
              <span>{product.rating}</span>
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">({product.reviewsCount})</span>
          </div>

          {/* Key bullets */}
          <div className="mt-2 space-y-1">
            {product.features.slice(0, 2).map((feat, idx) => (
              <p key={idx} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5 leading-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Pricing & Add to Cart button (44px min tap height on mobile) */}
        <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1 sm:gap-1.5">
              <span className="text-sm sm:text-base font-black text-slate-900 dark:text-slate-50">
                {formatINR(product.price)}
              </span>
              <span className="text-xs text-slate-400 line-through">
                {formatINR(product.mrp)}
              </span>
            </div>
            {product.inStock && product.stockQty < 15 && (
              <p className="text-[10px] sm:text-[11px] font-bold text-amber-600 dark:text-amber-400">
                Only {product.stockQty} left!
              </p>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`min-h-[40px] px-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs ${
              !product.inStock
                ? "bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                : added
                ? "bg-emerald-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white active:scale-95"
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
