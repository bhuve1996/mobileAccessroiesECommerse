"use client";

import { FEATURED_PRODUCTS } from "@/data/mock-data";
import { ProductCard } from "@/components/product/product-card";
import { Flame, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function FlashDeals() {
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="deals" className="py-6 sm:py-8">
      {/* Deals Header with Countdown */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-gradient-to-r from-red-500/10 via-amber-500/10 to-transparent dark:from-red-950/40 dark:via-amber-950/20 dark:to-transparent border border-red-200/80 dark:border-red-900/40 rounded-2xl p-5">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-500/20">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-50">
                Midnight Flash Deals
              </h2>
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-600 text-white shadow-xs">
                Save Up to 65%
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              Limited-time discounts on top trending mobile gear
            </p>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="flex items-center gap-2.5 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200/90 dark:border-slate-800 shadow-xs">
          <Clock className="w-4 h-4 text-red-600 dark:text-red-400" />
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Ends in:</span>
          <div className="flex items-center gap-1 font-mono text-xs font-black text-slate-900 dark:text-slate-100">
            <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800">
              {String(timeLeft.hours).padStart(2, "0")}h
            </span>
            :
            <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800">
              {String(timeLeft.minutes).padStart(2, "0")}m
            </span>
            :
            <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800">
              {String(timeLeft.seconds).padStart(2, "0")}s
            </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {FEATURED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
