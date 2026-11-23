"use client";

import Link from "next/link";
import { Search, ShoppingBag, Smartphone, ShieldCheck, Heart } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCartStore } from "@/lib/cart-store";
import { useEffect, useState } from "react";

export function Header() {
  const totalItems = useCartStore((s) => s.totalItems);
  const openCart = useCartStore((s) => s.openCart);
  const [itemsCount, setItemsCount] = useState(0);

  // Avoid hydration mismatch for client state
  useEffect(() => {
    setItemsCount(totalItems());
  }, [totalItems]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:supports-[backdrop-filter]:bg-zinc-950/75 transition-colors">
      {/* Top Banner: India Specific Trust Callout */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white text-[11px] sm:text-xs font-medium py-1.5 px-3 text-center flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>⚡ <strong>USE CODE: INDIAFIRST</strong> for Extra 10% Off | Free Delivery on orders ₹499+ | Cash on Delivery available</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Smartphone className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-zinc-900 dark:text-zinc-50 leading-none">
              ZAP<span className="text-blue-600 dark:text-blue-400">GEAR</span>
            </span>
            <span className="text-[9px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mt-0.5">
              India&apos;s Mobile Hub
            </span>
          </div>
        </Link>

        {/* Search Bar - Desktop & Tablet */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Search iPhone 16 case, 65W GaN charger, UV tempered glass..."
            className="w-full text-sm pl-10 pr-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400"
          />
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Admin link badge */}
          <Link
            href="/admin"
            className="hidden sm:inline-flex items-center text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium transition"
          >
            Admin Panel
          </Link>

          {/* Theme switcher */}
          <ThemeToggle />

          {/* Wishlist */}
          <button
            aria-label="Wishlist"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors"
          >
            <Heart className="w-4 h-4" />
          </button>

          {/* Cart Icon with Counter */}
          <button
            onClick={() => openCart()}
            aria-label="Cart"
            className="relative flex items-center justify-center h-9 px-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm gap-1.5 shadow-sm transition-transform active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {itemsCount > 0 && (
              <span className="ml-1 bg-white text-blue-600 text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
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
            placeholder="Search phone model, case, or charger..."
            className="w-full text-xs pl-9 pr-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400"
          />
          <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </header>
  );
}
