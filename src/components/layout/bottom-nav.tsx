"use client";

import Link from "next/link";
import { Home, Grid, Search, ShoppingBag, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/lib/cart-store";
import { useEffect, useState } from "react";

export function BottomNav() {
  const pathname = usePathname();
  const totalItems = useCartStore((s) => s.totalItems);
  const openCart = useCartStore((s) => s.openCart);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    setItemsCount(totalItems());
  }, [totalItems]);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Categories", href: "#categories-section", icon: Grid },
    { label: "Select Phone", href: "#device-selector", icon: Search },
    { label: "Account", href: "/account", icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur border-t border-zinc-200 dark:border-zinc-800 pb-safe shadow-lg">
      <div className="grid grid-cols-5 h-14 items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 transition-colors ${
                isActive
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="text-[10px] tracking-tight">{item.label}</span>
            </Link>
          );
        })}

        {/* Cart Trigger in Mobile Bottom Bar */}
        <button
          onClick={() => openCart()}
          className="flex flex-col items-center justify-center py-1 relative text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4 mb-0.5" />
            {itemsCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {itemsCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight">Cart</span>
        </button>
      </div>
    </nav>
  );
}
