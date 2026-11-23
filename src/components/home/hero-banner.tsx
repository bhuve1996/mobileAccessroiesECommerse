"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Zap, Truck } from "lucide-react";
import Link from "next/link";

export interface BannerSlide {
  id: string;
  tag: string;
  tagColor: string;
  titleLight: string;
  titleHighlight: string;
  subtitle: string;
  badgeOffer: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  bgGradient: string;
  bgImage: string;
  productCard: {
    title: string;
    description: string;
    tag: string;
    price: string;
    mrp: string;
    image: string;
  };
}

export const HERO_SLIDES: BannerSlide[] = [
  {
    id: "slide-1",
    tag: "Trending 2026 Collection",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    titleLight: "Give Your Phone the",
    titleHighlight: "Style & Protection",
    subtitle: "Drop-tested cases, scratch-free glass guards, and super-fast chargers made for Apple, Samsung, OnePlus & more. Free express delivery on orders over ₹499.",
    badgeOffer: "Flat 10% Off: INDIAFIRST",
    primaryCtaText: "Find My Phone Fit",
    primaryCtaHref: "#device-selector",
    secondaryCtaText: "Explore Deals (Up to 60% Off)",
    secondaryCtaHref: "#deals",
    bgGradient: "from-slate-950 via-blue-950 to-slate-900",
    bgImage: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1600&auto=format&fit=crop&q=80",
    productCard: {
      title: "Everyday Protection Combo",
      description: "MagSafe Matte Case + 9H Glass Fit",
      tag: "Best Value",
      price: "₹699",
      mrp: "₹1,499",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&auto=format&fit=crop&q=80",
    },
  },
  {
    id: "slide-2",
    tag: "Power & Speed Festival",
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    titleLight: "Supercharge in Minutes with",
    titleHighlight: "65W & 100W GaN",
    subtitle: "Pocket-sized gallium nitride adapters for Samsung 45W Super Fast Charging, iPhone 16 Fast PD, and laptops. Cooler, faster, and reliable.",
    badgeOffer: "Starting at ₹899",
    primaryCtaText: "Shop Fast Chargers",
    primaryCtaHref: "#deals",
    secondaryCtaText: "View GaN Technology",
    secondaryCtaHref: "#categories-section",
    bgGradient: "from-zinc-950 via-amber-950/80 to-slate-950",
    bgImage: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1600&auto=format&fit=crop&q=80",
    productCard: {
      title: "VoltPro 65W GaN Dual Port",
      description: "Type-C PD 3.0 + USB-A QuickCharge",
      tag: "Fast Charging",
      price: "₹1,399",
      mrp: "₹2,999",
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80",
    },
  },
  {
    id: "slide-3",
    tag: "Road Trip & Daily Commute",
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    titleLight: "Hands-Free & Charged with",
    titleHighlight: "MagSafe Car Mounts",
    subtitle: "Heavy-duty air vent & dashboard holders with instant magnetic lock and 15W Qi2 wireless charging. Perfect for navigation on Indian roads.",
    badgeOffer: "Extra 15% Off with Code DRIVE15",
    primaryCtaText: "Explore Car Gear",
    primaryCtaHref: "#categories-section",
    secondaryCtaText: "See Compatibility",
    secondaryCtaHref: "#device-selector",
    bgGradient: "from-slate-950 via-emerald-950/70 to-zinc-950",
    bgImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600&auto=format&fit=crop&q=80",
    productCard: {
      title: "MagDrive 15W Qi2 Mount",
      description: "Automatic Grip & 360° Rotation",
      tag: "Top Rated",
      price: "₹1,199",
      mrp: "₹2,499",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    },
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="py-3 sm:py-5 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Banner Card Container with Smooth Transition */}
      <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${slide.bgGradient} text-white shadow-xl border border-slate-800/80 transition-all duration-700 min-h-[460px] sm:min-h-[420px] flex items-center`}>
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={slide.bgImage}
            alt="Hero banner background"
            className="w-full h-full object-cover object-right sm:object-center opacity-25 scale-102 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        </div>

        <div className="relative z-10 p-6 sm:p-10 lg:p-12 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Content Column */}
          <div className="max-w-xl">
            {/* Top Tag & Discount Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold backdrop-blur-md ${slide.tagColor}`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>{slide.tag}</span>
              </span>

              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                {slide.badgeOffer}
              </span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] mb-3 text-white">
              {slide.titleLight}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                {slide.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 mb-6 font-normal leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={slide.primaryCtaHref}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-blue-600/30 active:scale-95 flex items-center gap-2"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={slide.secondaryCtaHref}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition backdrop-blur-sm"
              >
                {slide.secondaryCtaText}
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-8 pt-5 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Drop & Scratch Tested</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-blue-400" />
                <span>Free Shipping Above ₹499</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-black text-sm">₹</span>
                <span>Cash on Delivery (COD)</span>
              </div>
            </div>
          </div>

          {/* Right Showcase Card */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-amber-400 text-slate-950">
                  {slide.productCard.tag}
                </span>
                <span className="text-[11px] font-bold text-emerald-400">
                  In Stock & Ready to Ship
                </span>
              </div>

              {/* Showcase Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-slate-800">
                <img
                  src={slide.productCard.image}
                  alt={slide.productCard.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-xs">
                <p className="font-bold text-white text-sm line-clamp-1">{slide.productCard.title}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{slide.productCard.description}</p>
                
                <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Special Deal</span>
                    <span className="font-black text-white text-base">
                      {slide.productCard.price}{" "}
                      <span className="text-xs font-normal text-slate-400 line-through">
                        {slide.productCard.mrp}
                      </span>
                    </span>
                  </div>
                  <Link
                    href="#deals"
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-xs"
                  >
                    Grab Deal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-xs">
          {HERO_SLIDES.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-6 bg-blue-400" : "w-1.5 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
