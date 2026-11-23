import { ArrowRight, Zap, Shield, Sparkles, Star } from "lucide-react";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="py-4 sm:py-6">
      {/* Main Hero Card with Rich Responsive Backdrop */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white shadow-xl border border-slate-800/80">
        {/* Visual Background with subtle depth */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1600&auto=format&fit=crop&q=80"
            alt="Mobile accessories collection"
            className="w-full h-full object-cover object-right sm:object-center opacity-30 dark:opacity-20 scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />
        </div>

        <div className="relative z-10 p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Column: Clear & Friendly Customer Copy */}
          <div className="max-w-xl">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>India&apos;s Favorite Mobile Store</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] mb-3 text-white">
              Give Your Phone the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Style & Protection
              </span>{" "}
              It Deserves.
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-300 mb-6 font-normal leading-relaxed">
              Drop-tested cases, scratch-free glass guards, and super-fast chargers made for Apple, Samsung, OnePlus & more. Delivered to your doorstep in 2 to 4 days.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#device-selector"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-blue-600/30 active:scale-95 flex items-center gap-2"
              >
                <span>Find Accessories for My Phone</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#deals"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition backdrop-blur-sm"
              >
                Explore Deals (Up to 60% Off)
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="mt-8 pt-5 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Drop & Scratch Tested</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Free Shipping Above ₹499</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold text-sm">₹</span>
                <span>Cash on Delivery (COD)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Trending Combo Banner Card */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-amber-400 text-slate-950">
                  Trending This Week
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>4.9 / 5.0</span>
                </div>
              </div>

              {/* Showcase Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80"
                  alt="Trending accessories"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-black/75 text-white backdrop-blur-xs">
                  MagSafe + GaN 65W Combo
                </span>
              </div>

              <div className="text-xs">
                <p className="font-bold text-white text-sm">Everyday Essentials Pack</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Fits iPhone 16 / S24 / OnePlus 12</p>
                <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Special Combo</span>
                    <span className="font-black text-white text-base">₹499 <span className="text-xs font-normal text-slate-400 line-through">₹1,199</span></span>
                  </div>
                  <Link
                    href="#deals"
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition"
                  >
                    View Offer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
