import { CATEGORIES } from "@/data/mock-data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section id="categories-section" className="py-6 sm:py-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-100 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Top tier accessories built with military-grade resilience
          </p>
        </div>
        <Link
          href="/categories"
          className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
        >
          <span>View All</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.slug}`}
            className="group relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs hover:shadow-md hover:border-blue-500/50 transition-all flex flex-col"
          >
            {/* Tag Badge */}
            {cat.tag && (
              <span className="absolute top-2 left-2 z-10 text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-blue-600 text-white shadow-xs">
                {cat.tag}
              </span>
            )}

            {/* Image container */}
            <div className="w-full h-32 sm:h-36 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-3">
              <h3 className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                {cat.name}
              </h3>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                {cat.count}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
