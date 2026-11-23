import { ShieldCheck, Truck, RefreshCw, Award } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#090d16] text-slate-600 dark:text-slate-400 pb-20 md:pb-8 transition-colors">
      {/* Trust & Guarantee Section */}
      <div className="border-b border-slate-200 dark:border-slate-800/80 py-8 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Pan-India Delivery</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Fast 2-4 day dispatch to 27,000+ PIN codes</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Cash on Delivery</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Pay cash or UPI at your doorstep</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">7-Day Replacement</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Easy replacement or refund</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Genuine Gear</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Military-grade drop tested</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-3.5">Popular Devices</h5>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><Link href="#" className="hover:text-blue-500 transition-colors">iPhone 16 Pro Max Cases</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Samsung S24 Ultra Glass</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">OnePlus 12 Accessories</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">iQOO & Vivo Covers</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-3.5">Shop Categories</h5>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><Link href="#" className="hover:text-blue-500 transition-colors">MagSafe Chargers & Rings</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">GaN 65W/100W Fast Adapters</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">UV Privacy Tempered Glass</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Car Dashboard Mounts</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-3.5">Customer Support</h5>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Track Your Order</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Return Policy</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Shipping Information</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">WhatsApp Support</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-3.5">Accepted Payments & Social</h5>
          <p className="text-xs sm:text-sm mb-3 text-slate-500 dark:text-slate-400 leading-relaxed">
            UPI (Google Pay, PhonePe, Paytm), Cards & Cash on Delivery.
          </p>
          <div className="flex flex-wrap gap-2 text-[10px] font-bold mb-4">
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">GPay</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">PhonePe</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">Paytm</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">COD</span>
          </div>

          <p className="text-xs font-bold text-slate-900 dark:text-slate-100 mb-2">Connect With Us</p>
          <div className="flex items-center gap-2 text-xs">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-pink-100 dark:hover:bg-pink-950/40 text-slate-700 dark:text-slate-300 hover:text-pink-600 transition"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
            >
              X / Twitter
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-red-100 dark:hover:bg-red-950/40 text-slate-700 dark:text-slate-300 hover:text-red-600 transition"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-center text-xs text-slate-500">
        © 2026 ZapGear India. All rights reserved.
      </div>
    </footer>
  );
}
