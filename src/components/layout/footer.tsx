import { ShieldCheck, Truck, RefreshCw, Award } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 pb-20 md:pb-8 transition-colors">
      {/* Trust & Guarantee Section */}
      <div className="border-b border-zinc-200 dark:border-zinc-800/80 py-8 bg-zinc-100/50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100">Pan-India Delivery</h4>
              <p className="text-[11px] text-zinc-500">Fast 2-4 day dispatch to 27,000+ pin codes</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100">Cash on Delivery</h4>
              <p className="text-[11px] text-zinc-500">Pay cash or UPI at your doorstep</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100">7-Day Hassle-Free</h4>
              <p className="text-[11px] text-zinc-500">Easy replacement or store credit</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100">100% Genuine Gear</h4>
              <p className="text-[11px] text-zinc-500">Military drop tested & certified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-3">Popular Devices</h5>
          <ul className="space-y-2 text-xs">
            <li><Link href="#" className="hover:text-blue-500">iPhone 16 Pro Max Cases</Link></li>
            <li><Link href="#" className="hover:text-blue-500">Samsung S24 Ultra Glass</Link></li>
            <li><Link href="#" className="hover:text-blue-500">OnePlus 12 Accessories</Link></li>
            <li><Link href="#" className="hover:text-blue-500">iQOO & Vivo Covers</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-3">Shop Categories</h5>
          <ul className="space-y-2 text-xs">
            <li><Link href="#" className="hover:text-blue-500">MagSafe Chargers & Rings</Link></li>
            <li><Link href="#" className="hover:text-blue-500">GaN 65W/100W Fast Adapters</Link></li>
            <li><Link href="#" className="hover:text-blue-500">UV Privacy Tempered Glass</Link></li>
            <li><Link href="#" className="hover:text-blue-500">Car Dashboard Mounts</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-3">Customer Support</h5>
          <ul className="space-y-2 text-xs">
            <li><Link href="#" className="hover:text-blue-500">Track Your Order (Delhivery / Bluedart)</Link></li>
            <li><Link href="#" className="hover:text-blue-500">Return & Replacement Policy</Link></li>
            <li><Link href="#" className="hover:text-blue-500">Shipping & Delivery Timelines</Link></li>
            <li><Link href="#" className="hover:text-blue-500">WhatsApp Support (10 AM - 7 PM)</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-3">Accepted Payments</h5>
          <p className="text-xs mb-3 text-zinc-500">
            UPI (Google Pay, PhonePe, Paytm, BHIM), Credit/Debit Cards, NetBanking & COD.
          </p>
          <div className="flex flex-wrap gap-2 text-[10px] font-semibold">
            <span className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">GPay</span>
            <span className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">PhonePe</span>
            <span className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">Paytm</span>
            <span className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">COD</span>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800 max-w-7xl mx-auto px-4 pt-6 text-center text-xs text-zinc-500">
        © 2026 ZapGear India. All rights reserved. Built for Indian mobile enthusiasts.
      </div>
    </footer>
  );
}
