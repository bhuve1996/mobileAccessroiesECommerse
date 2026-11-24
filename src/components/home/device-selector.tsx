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
    <section id="device-selector" className="py-4 sm:py-8 w-full overflow-hidden">
      <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm transition-colors w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Select Your Phone</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-50 tracking-tight">
              Pick Your Phone for the Perfect Fit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              Choose your brand and model to find cases, covers, and screen guards designed specifically for your phone.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/80 px-3.5 py-2.5 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-2.5 shrink-0 w-fit">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Selected Device</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100 flex items-center gap-1">
                {activeBrandObj.name} · {selectedModel}
              </p>
            </div>
          </div>
        </div>

        {/* Brand Selector Buttons: Horizontal scroll with touch-friendly 44px min-height */}
        <div className="flex gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none w-full -mx-1 px-1">
          {BRANDS.map((brand) => {
            const isSelected = brand.id === selectedBrand;
            return (
              <button
                key={brand.id}
                onClick={() => handleBrandChange(brand.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 sm:py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/50"
                }`}
              >
                <span className="text-sm sm:text-base leading-none">{brand.logo}</span>
                <span>{brand.name}</span>
              </button>
            );
          })}
        </div>

        {/* Compatible Model Chips: Minimum 40px touch targets */}
        <div className="mt-3.5 sm:mt-5 pt-3.5 sm:pt-5 border-t border-slate-200/80 dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-2.5 uppercase tracking-wider">
            Popular {activeBrandObj.name} Models:
          </p>
          <div className="flex flex-wrap gap-2">
            {activeBrandObj.models.map((model) => {
              const isSelected = model === selectedModel;
              return (
                <button
                  key={model}
                  onClick={() => handleModelSelect(model)}
                  className={`text-xs px-3 sm:px-3.5 py-2.5 min-h-[40px] rounded-xl font-semibold transition-all flex items-center gap-1.5 ${
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
