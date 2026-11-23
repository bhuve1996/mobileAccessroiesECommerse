"use client";

import Link from "next/link";
import { Search, ShoppingBag, Smartphone, Heart, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCartStore } from "@/lib/cart-store";
import { useEffect, useState } from "react";

export function Header() {
  const totalItems = useCartStore((s) => s.totalItems);
  const openCart = useCartStore((s) => s.openCart);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    setItemsCount(totalItems());
  }, [totalItems]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#090d16]/90 backdrop-blur-md transition-colors">
      {/* Top Banner: India Specific Trust Callout */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 text-white text-[11px] sm:text-xs font-semibold py-2 px-4 text-center tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>USE CODE <span className="bg-white/20 px-1.5 py-0.5 rounded font-black tracking-wider text-amber-200">INDIAFIRST</span> FOR FLAT 10% OFF | FREE DELIVERY ON ₹499+ | CASH ON DELIVERY AVAILABLE</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <Smartphone className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-tight text-slate-900 dark:text-white leading-none">
              ZAP<span className="text-blue-600 dark:text-blue-400">GEAR</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold mt-1">
              India&apos;s Mobile Store
            </span>
          </div>
        </Link>

        {/* Search Bar - Desktop & Tablet */}
        <div className="hidden md:flex flex-1 max-w-lg relative">
          <input
            type="text"
            placeholder="Search phone model, tempered glass, fast charger..."
            className="w-full text-xs sm:text-sm pl-11 pr-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all"
          />
          <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2">
          {/* Admin link badge */}
          <Link
            href="/admin"
            className="hidden sm:inline-flex items-center text-xs px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold transition"
          >
            Admin
          </Link>

          {/* Theme switcher */}
          <ThemeToggle />

          {/* Wishlist */}
          <button
            aria-label="Wishlist"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors"
          >
            <Heart className="w-4 h-4" />
          </button>

          {/* Cart Icon with Counter */}
          <button
            onClick={() => openCart()}
            aria-label="Cart"
            className="relative flex items-center justify-center h-10 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm gap-2 shadow-sm transition-transform active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Bag</span>
            {itemsCount > 0 && (
              <span className="ml-0.5 bg-white text-blue-600 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {itemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Input */}
      <div className="md:hidden px-4 pb-3 pt-1">
        <div className="relative">
          <input
            type="text"
            placeholder="Search iPhone 16 case, S24 glass, 65W charger..."
            className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </header>
  );
}
