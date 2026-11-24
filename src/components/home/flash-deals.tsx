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
    <section id="deals" className="py-4 sm:py-6 w-full overflow-hidden">
      {/* Compact Deals Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 bg-gradient-to-r from-red-500/10 via-amber-500/10 to-transparent dark:from-red-950/40 dark:via-amber-950/20 dark:to-transparent border border-red-200/80 dark:border-red-900/40 rounded-xl sm:rounded-2xl p-3 sm:p-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-50">
                Flash Deals
              </h2>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-red-600 text-white shadow-xs">
                Up to 65% Off
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
              Limited-time discounts on trending accessories
            </p>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200/90 dark:border-slate-800 shadow-xs w-fit">
          <Clock className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
          <span className="text-[11px] font-bold text-slate-500">Ends in:</span>
          <div className="flex items-center gap-1 font-mono text-[11px] sm:text-xs font-black text-slate-900 dark:text-slate-100">
            <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
              {String(timeLeft.hours).padStart(2, "0")}h
            </span>
            :
            <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
              {String(timeLeft.minutes).padStart(2, "0")}m
            </span>
            :
            <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
              {String(timeLeft.seconds).padStart(2, "0")}s
            </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full">
        {FEATURED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
