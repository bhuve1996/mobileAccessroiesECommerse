import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="pt-3 pb-6 sm:py-8">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-800 to-zinc-950 text-white p-6 sm:p-12 shadow-2xl">
        {/* Abstract futuristic background decorations */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>New Gen Protection 2026 Collection</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight sm:leading-none mb-4">
            Engineered Armour for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-200">Flagship Phone.</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-200 mb-6 font-normal leading-relaxed">
            Ultra-slim MagSafe cases, 9H privacy tempered glass & 65W GaN fast chargers with next-day dispatch across India.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#device-selector"
              className="px-5 py-3 rounded-xl bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-100 transition shadow-lg active:scale-95 flex items-center gap-2"
            >
              <span>Find My Phone Fit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#deals"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition backdrop-blur-sm"
            >
              Shop Flash Deals (Up to 60% Off)
            </Link>
          </div>

          {/* Quick bullet points */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-zinc-300">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>10ft Drop Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Free Delivery on ₹499+</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">₹</span>
              <span>Cash on Delivery Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
