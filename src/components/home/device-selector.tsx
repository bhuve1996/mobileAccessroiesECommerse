"use client";

import { useState } from "react";
import { BRANDS } from "@/data/mock-data";
import { Smartphone, CheckCircle, ChevronRight, Sparkles } from "lucide-react";

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
    <section id="device-selector" className="py-6 sm:py-10">
      <div className="rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white shadow-xl relative overflow-hidden border border-zinc-800">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Device Fit Filter</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Select Your Phone for 100% Guaranteed Fit
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
              Choose your brand and model to see exact cases, covers, and screen guards crafted for your phone.
            </p>
          </div>

          <div className="bg-zinc-800/80 px-4 py-2.5 rounded-2xl border border-zinc-700/60 flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Active Filter</p>
              <p className="text-xs font-bold text-white flex items-center gap-1">
                {activeBrandObj.name} · {selectedModel}
              </p>
            </div>
          </div>
        </div>

        {/* Brand Tabs (Horizontally scrollable on mobile) */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {BRANDS.map((brand) => {
            const isSelected = brand.id === selectedBrand;
            return (
              <button
                key={brand.id}
                onClick={() => handleBrandChange(brand.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-102"
                    : "bg-zinc-800/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/40"
                }`}
              >
                <span>{brand.logo}</span>
                <span>{brand.name}</span>
              </button>
            );
          })}
        </div>

        {/* Model Chips */}
        <div className="mt-4 pt-4 border-t border-zinc-800/80">
          <p className="text-xs text-zinc-400 font-medium mb-3">Popular {activeBrandObj.name} Models:</p>
          <div className="flex flex-wrap gap-2">
            {activeBrandObj.models.map((model) => {
              const isSelected = model === selectedModel;
              return (
                <button
                  key={model}
                  onClick={() => handleModelSelect(model)}
                  className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-white text-zinc-950 font-bold shadow-md"
                      : "bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/50"
                  }`}
                >
                  {isSelected && <CheckCircle className="w-3.5 h-3.5 text-blue-600" />}
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
