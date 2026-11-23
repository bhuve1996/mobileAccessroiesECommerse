import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import Link from "next/link";

export function PromoBanners() {
  return (
    <section className="py-4 sm:py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Banner 1: MagSafe Case + Glass Combo */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-950 p-6 text-white border border-blue-800/40 shadow-sm flex flex-col justify-between min-h-[170px] group">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 group-hover:opacity-40 transition-opacity">
            <img
              src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80"
              alt="MagSafe Case and Glass"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 max-w-xs">
            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/30 text-blue-300 border border-blue-400/30">
              Bundle & Save
            </span>
            <h3 className="text-lg font-black mt-2 leading-snug">
              Case + Tempered Glass Combo
            </h3>
            <p className="text-xs text-blue-200/80 mt-1">
              Complete 360° protection pack starting at just ₹699.
            </p>
          </div>

          <div className="relative z-10 mt-4">
            <Link
              href="#deals"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-2 rounded-xl shadow-xs transition"
            >
              <span>Explore Combos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Banner 2: Fast Charging & Cables */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-amber-950/90 to-zinc-950 p-6 text-white border border-amber-800/40 shadow-sm flex flex-col justify-between min-h-[170px] group">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 group-hover:opacity-40 transition-opacity">
            <img
              src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80"
              alt="Fast Chargers & Braided Cables"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 max-w-xs">
            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/30 text-amber-300 border border-amber-400/30">
              GaN Fast Charge
            </span>
            <h3 className="text-lg font-black mt-2 leading-snug">
              65W & 100W Super Adapters
            </h3>
            <p className="text-xs text-amber-200/80 mt-1">
              Samsung 45W PPS & iPhone 16 PD fast charge with 1-year warranty.
            </p>
          </div>

          <div className="relative z-10 mt-4">
            <Link
              href="#deals"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 px-3.5 py-2 rounded-xl shadow-xs transition"
            >
              <span>Shop Chargers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
