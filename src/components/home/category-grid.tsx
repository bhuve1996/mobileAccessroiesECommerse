import { CATEGORIES } from "@/data/mock-data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section id="categories-section" className="py-4 sm:py-8 w-full overflow-hidden">
      <div className="flex items-center justify-between mb-3.5 sm:mb-5">
        <div>
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-50 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Top picks for your daily mobile needs
          </p>
        </div>
        <Link
          href="/categories"
          className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors min-h-[44px] items-center"
        >
          <span>View All</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 w-full">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.slug}`}
            className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:shadow-md hover:border-blue-500/50 transition-all flex flex-col"
          >
            {/* Tag Badge: Legible 11px text */}
            {cat.tag && (
              <span className="absolute top-2 left-2 z-10 text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-600 text-white shadow-xs">
                {cat.tag}
              </span>
            )}

            {/* Image container */}
            <div className="w-full h-28 sm:h-36 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-2.5 sm:p-3.5">
              <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                {cat.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {cat.count}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
