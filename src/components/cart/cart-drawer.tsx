"use client";

import { useCartStore } from "@/lib/cart-store";
import { formatINR } from "@/lib/utils";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice } = useCartStore();
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number | null>(null);
  const [couponError, setCouponError] = useState("");

  if (!isOpen) return null;

  const total = totalPrice();
  const freeShippingThreshold = 499;
  const progressToFreeShipping = Math.min(100, (total / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError("");
    if (couponCode.trim().toUpperCase() === "INDIAFIRST") {
      const discount = Math.round(total * 0.1);
      setAppliedDiscount(discount);
    } else {
      setCouponError("Invalid coupon code. Try 'INDIAFIRST'");
    }
  };

  const finalAmount = total - (appliedDiscount || 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white dark:bg-zinc-950 h-full shadow-2xl flex flex-col z-10 transition-transform animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-100">
              Your Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Meter */}
        <div className="px-5 py-3 bg-blue-50 dark:bg-blue-950/40 border-b border-blue-100 dark:border-blue-900/30">
          <div className="text-xs font-medium text-blue-900 dark:text-blue-200 mb-1.5 flex justify-between">
            {remainingForFreeShipping > 0 ? (
              <span>Add <strong>{formatINR(remainingForFreeShipping)}</strong> more for <strong>FREE Delivery</strong></span>
            ) : (
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">🎉 You unlocked FREE Pan-India Delivery!</span>
            )}
            <span>{Math.round(progressToFreeShipping)}%</span>
          </div>
          <div className="w-full h-1.5 bg-blue-200 dark:bg-blue-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300 rounded-full"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-zinc-500">
              <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-3">
                <Tag className="w-7 h-7 text-zinc-400" />
              </div>
              <p className="font-semibold text-zinc-800 dark:text-zinc-200 text-base">Your bag is empty</p>
              <p className="text-xs text-zinc-500 mt-1 max-w-xs">
                Browse our high-protection cases, UV glass, or 65W fast chargers to get started.
              </p>
              <button
                onClick={closeCart}
                className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 relative group"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0 relative">
                  {/* Fallback image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1">
                      {item.title}
                    </h4>
                    {item.selectedModel && (
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Model: <span className="font-medium text-zinc-700 dark:text-zinc-300">{item.selectedModel}</span>
                      </p>
                    )}
                    <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                      {formatINR(item.price)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden bg-white dark:bg-zinc-800">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-zinc-800 dark:text-zinc-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-zinc-400 hover:text-red-500 p-1 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 space-y-3">
            {/* Coupon Code Box */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon code (INDIAFIRST)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 text-xs px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 uppercase placeholder:normal-case focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <button
                type="submit"
                className="px-3 py-2 text-xs font-bold rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90 transition"
              >
                Apply
              </button>
            </form>
            {couponError && <p className="text-[11px] text-red-500">{couponError}</p>}
            {appliedDiscount && (
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Tag className="w-3 h-3" /> Extra {formatINR(appliedDiscount)} discount applied!
              </p>
            )}

            {/* Bill Summary */}
            <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">{formatINR(total)}</span>
              </div>
              {appliedDiscount && (
                <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                  <span>Coupon Discount</span>
                  <span>-{formatINR(appliedDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>{remainingForFreeShipping === 0 ? <strong className="text-emerald-600">FREE</strong> : "₹49"}</span>
              </div>
              <div className="flex justify-between text-sm font-extrabold text-zinc-900 dark:text-zinc-100 pt-1 border-t border-zinc-200 dark:border-zinc-800">
                <span>Total Amount</span>
                <span>{formatINR(finalAmount + (remainingForFreeShipping === 0 ? 0 : 49))}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-98 transition"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Safe & Secure UPI / Card / COD Checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
