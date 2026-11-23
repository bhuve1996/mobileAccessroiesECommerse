"use client";

import { useState } from "react";
import { BRANDS } from "@/data/mock-data";
import { Smartphone, CheckCircle, Sparkles } from "lucide-react";

interface DeviceSelectorProps {
  onSelectModel?: (brand: string, model: string) => void;
}

export function DeviceSelector({ onSelectModel }: DeviceSelectorProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>(BRANDS[0].id);
  const [selectedModel, setSelectedModel] = useState<string>(BRANDS[0].models[0]);

  const activeBrandObj = BRANDS.find((b) => b.id === selectedBrand) || BRANDS[0];

  const handleBrandChange = (brandId: string) => {
    setSelectedBrand(brandId);
    const newBrandObj = BRANDS.find((b) => b.id === brandId);
    if (newBrandObj && newBrandObj.models.length > 0) {
      setSelectedModel(newBrandObj.models[0]);
      onSelectModel?.(newBrandObj.name, newBrandObj.models[0]);
    }
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    onSelectModel?.(activeBrandObj.name, model);
  };

  return (
    <section id="device-selector" className="py-6 sm:py-8">
      <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Select Your Phone</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-50 tracking-tight">
              Pick Your Phone for the Perfect Fit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Choose your brand and model to find cases, covers, and screen guards designed specifically for your phone.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/80 px-4 py-3 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Selected Device</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100 flex items-center gap-1">
                {activeBrandObj.name} · {selectedModel}
              </p>
            </div>
          </div>
        </div>

        {/* Brand Selector Buttons */}
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {BRANDS.map((brand) => {
            const isSelected = brand.id === selectedBrand;
            return (
              <button
                key={brand.id}
                onClick={() => handleBrandChange(brand.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/50"
                }`}
              >
                <span className="text-base leading-none">{brand.logo}</span>
                <span>{brand.name}</span>
              </button>
            );
          })}
        </div>

        {/* Compatible Model Chips */}
        <div className="mt-5 pt-5 border-t border-slate-200/80 dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-3 uppercase tracking-wider">
            Popular {activeBrandObj.name} Models:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {activeBrandObj.models.map((model) => {
              const isSelected = model === selectedModel;
              return (
                <button
                  key={model}
                  onClick={() => handleModelSelect(model)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold shadow-sm"
                      : "bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50"
                  }`}
                >
                  {isSelected && <CheckCircle className="w-3.5 h-3.5 text-blue-500 dark:text-blue-600" />}
                  <span>{model}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
