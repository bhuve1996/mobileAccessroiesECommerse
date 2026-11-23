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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-500/20">
            <Flame className="w-5 h-5 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-red-700 dark:text-red-400">
                Midnight Flash Deals
              </h2>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-red-600 text-white">
                Save Up to 65%
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Limited inventory drops for trending accessories
            </p>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 px-3.5 py-1.5 rounded-xl border border-red-200 dark:border-red-900/60 shadow-xs">
          <Clock className="w-4 h-4 text-red-600 dark:text-red-400" />
          <span className="text-xs font-semibold text-zinc-500">Ends in:</span>
          <div className="flex items-center gap-1 font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
            <span className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
              {String(timeLeft.hours).padStart(2, "0")}h
            </span>
            :
            <span className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
              {String(timeLeft.minutes).padStart(2, "0")}m
            </span>
            :
            <span className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
              {String(timeLeft.seconds).padStart(2, "0")}s
            </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
        {FEATURED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
