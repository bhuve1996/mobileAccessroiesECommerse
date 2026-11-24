import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PromoBanners() {
  return (
    <section className="py-2.5 sm:py-5 w-full overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Banner 1: MagSafe Case + Glass Combo */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-950 p-4 sm:p-5 text-white border border-blue-800/40 shadow-sm flex items-center justify-between min-h-[120px] sm:min-h-[140px] group">
          <div className="relative z-10 max-w-[65%]">
            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/30 text-blue-300 border border-blue-400/30">
              Bundle & Save
            </span>
            <h3 className="text-sm sm:text-base font-black mt-1.5 leading-snug">
              Case + Glass Combo
            </h3>
            <p className="text-[11px] text-blue-200/80 mt-0.5 line-clamp-1">
              Full protection starting at ₹699.
            </p>
            <Link
              href="#deals"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-lg mt-2.5 transition"
            >
              <span>View Offers</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-slate-800 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80"
              alt="Case and Glass"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Banner 2: Fast Charging & Cables */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-r from-amber-950/90 to-zinc-950 p-4 sm:p-5 text-white border border-amber-800/40 shadow-sm flex items-center justify-between min-h-[120px] sm:min-h-[140px] group">
          <div className="relative z-10 max-w-[65%]">
            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/30 text-amber-300 border border-amber-400/30">
              GaN Fast Charge
            </span>
            <h3 className="text-sm sm:text-base font-black mt-1.5 leading-snug">
              65W & 100W Adapters
            </h3>
            <p className="text-[11px] text-amber-200/80 mt-0.5 line-clamp-1">
              Fast PD charging with 1-yr warranty.
            </p>
            <Link
              href="#deals"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 px-3 py-1.5 rounded-lg mt-2.5 transition"
            >
              <span>Shop Chargers</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-slate-800 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80"
              alt="Fast Chargers"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
