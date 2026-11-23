import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export function PincodeChecker() {
  return (
    <section className="py-6 sm:py-8">
      <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="max-w-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold mb-2.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fast Delivery Check</span>
          </div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-50 tracking-tight">
            Check 24-48hr Express Delivery in Your City
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Same-day and next-day dispatch to Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune and 27,000+ PIN codes.
          </p>
        </div>

        <div className="w-full md:w-auto flex-1 max-w-sm">
          <div className="flex gap-2.5">
            <input
              type="text"
              maxLength={6}
              placeholder="Enter 6-digit PIN code (e.g. 110001)"
              className="flex-1 text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            <button className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shrink-0 flex items-center gap-1.5 shadow-sm transition">
              <span>Check</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Cash on Delivery + Doorstep UPI available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
