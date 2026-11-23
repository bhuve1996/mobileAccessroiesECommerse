import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export function PincodeChecker() {
  return (
    <section className="py-6 sm:py-8">
      <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-white dark:from-zinc-900 dark:via-zinc-900/60 dark:to-zinc-950 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-md">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Hyper-Local Speed</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-zinc-100">
            Check Express 24-48hr Delivery In Your City
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Same-day / Next-day dispatch to Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune and 27,000+ PIN codes.
          </p>
        </div>

        <div className="w-full md:w-auto flex-1 max-w-sm">
          <div className="flex gap-2">
            <input
              type="text"
              maxLength={6}
              placeholder="Enter 6-digit PIN code (e.g. 110001)"
              className="flex-1 text-xs px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <button className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shrink-0 flex items-center gap-1 shadow-xs transition">
              <span>Check</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Cash on Delivery + Open Box Inspection supported</span>
          </div>
        </div>
      </div>
    </section>
  );
}
