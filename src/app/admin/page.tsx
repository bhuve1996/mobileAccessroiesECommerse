"use client";

import { useState } from "react";
import { FEATURED_PRODUCTS } from "@/data/mock-data";
import { formatINR } from "@/lib/utils";
import { 
  Package, 
  Tag, 
  TrendingUp, 
  Layers, 
  AlertTriangle, 
  Plus, 
  Search, 
  ToggleLeft, 
  ToggleRight,
  Edit3
} from "lucide-react";

export default function AdminPage() {
  const [products, setProducts] = useState(FEATURED_PRODUCTS);
  const [coupons, setCoupons] = useState([
    { code: "INDIAFIRST", discount: "10%", type: "Percentage", minOrder: 499, status: "Active" },
    { code: "FLAT200", discount: "₹200", type: "Flat Off", minOrder: 1199, status: "Active" },
    { code: "DIWALI50", discount: "50%", type: "Percentage", minOrder: 1999, status: "Expired" },
  ]);

  const [activeTab, setActiveTab] = useState<"inventory" | "coupons">("inventory");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStock = (id: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, inStock: !p.inStock, stockQty: !p.inStock ? 20 : 0 } : p
      )
    );
  };

  const updateQuantity = (id: string, delta: number) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const newQty = Math.max(0, p.stockQty + delta);
          return { ...p, stockQty: newQty, inStock: newQty > 0 };
        }
        return p;
      })
    );
  };

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-8 space-y-6">
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-5">
        <div>
          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
            Internal Operations
          </span>
          <h1 className="text-2xl font-black text-zinc-900 dark:text-zinc-50 mt-1">
            Store Management Dashboard
          </h1>
          <p className="text-xs text-zinc-500">
            Update live quantities, toggle Out-of-Stock (OOS), and create coupon codes
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab("inventory")}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition ${
              activeTab === "inventory"
                ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
          >
            Inventory & Stock ({products.length})
          </button>
          <button
            onClick={() => setActiveTab("coupons")}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition ${
              activeTab === "coupons"
                ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
          >
            Coupons & Offers ({coupons.length})
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-xs font-semibold">Total SKUs</span>
            <Package className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-xl font-black text-zinc-900 dark:text-zinc-100">{products.length}</div>
          <div className="text-[10px] text-zinc-400 mt-1">Across 6 Indian phone brands</div>
        </div>

        <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-xs font-semibold">Low Stock / OOS</span>
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-xl font-black text-amber-600">
            {products.filter((p) => p.stockQty < 15).length}
          </div>
          <div className="text-[10px] text-zinc-400 mt-1">Requires re-order</div>
        </div>

        <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-xs font-semibold">Active Coupons</span>
            <Tag className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-xl font-black text-emerald-600">
            {coupons.filter((c) => c.status === "Active").length}
          </div>
          <div className="text-[10px] text-zinc-400 mt-1">E.g. INDIAFIRST promo</div>
        </div>

        <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center justify-between text-zinc-500 mb-2">
            <span className="text-xs font-semibold">Top Selling Brand</span>
            <TrendingUp className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-xl font-black text-zinc-900 dark:text-zinc-100">Apple & Samsung</div>
          <div className="text-[10px] text-zinc-400 mt-1">72% of recent volume</div>
        </div>
      </div>

      {/* Inventory Tab Content */}
      {activeTab === "inventory" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Filter products or brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <button className="w-full sm:w-auto px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs hover:bg-blue-700 transition">
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Product Variant</span>
            </button>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50 dark:bg-zinc-800/60 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Product Details</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Stock Status</th>
                    <th className="py-3 px-4">Live Qty</th>
                    <th className="py-3 px-4 text-right">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt=""
                            className="w-10 h-10 rounded-lg object-cover bg-zinc-100 dark:bg-zinc-800 shrink-0"
                          />
                          <div>
                            <p className="font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1">{p.title}</p>
                            <p className="text-[10px] text-zinc-400">{p.brand} · {p.compatibleModels[0]}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-bold text-zinc-900 dark:text-zinc-100">
                        {formatINR(p.price)}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => toggleStock(p.id)}
                          className="flex items-center gap-1.5 cursor-pointer"
                        >
                          {p.inStock ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> In Stock
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Out of Stock
                            </span>
                          )}
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(p.id, -1)}
                            className="w-6 h-6 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 text-zinc-700 dark:text-zinc-300 font-bold flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-6 text-center font-bold">{p.stockQty}</span>
                          <button
                            onClick={() => updateQuantity(p.id, 1)}
                            className="w-6 h-6 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 text-zinc-700 dark:text-zinc-300 font-bold flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => toggleStock(p.id)}
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                        >
                          {p.inStock ? "Mark OOS" : "Restock"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Coupons Tab Content */}
      {activeTab === "coupons" && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs hover:bg-blue-700 transition">
              <Plus className="w-3.5 h-3.5" />
              <span>Create New Promo Coupon</span>
            </button>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-800/60 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Coupon Code</th>
                  <th className="py-3 px-4">Discount</th>
                  <th className="py-3 px-4">Minimum Cart Value</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {coupons.map((c) => (
                  <tr key={c.code} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/40">
                    <td className="py-3 px-4 font-mono font-bold text-blue-600 dark:text-blue-400">
                      {c.code}
                    </td>
                    <td className="py-3 px-4 font-bold text-zinc-900 dark:text-zinc-100">
                      {c.discount}
                    </td>
                    <td className="py-3 px-4 text-zinc-600 dark:text-zinc-400">
                      {formatINR(c.minOrder)}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                        c.status === "Active"
                          ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                      }`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
