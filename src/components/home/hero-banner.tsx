"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
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
    tag: "2026 Collection",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    titleLight: "Style & Armor for",
    titleHighlight: "Your Phone",
    subtitle: "Drop-tested cases, 9H privacy glass, and fast GaN chargers. Pan-India dispatch in 24 hrs.",
    badgeOffer: "10% Off: INDIAFIRST",
    primaryCtaText: "Find My Fit",
    primaryCtaHref: "#device-selector",
    secondaryCtaText: "Deals (Up to 60%)",
    secondaryCtaHref: "#deals",
    bgGradient: "from-slate-950 via-blue-950 to-slate-900",
    bgImage: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1600&auto=format&fit=crop&q=80",
    productCard: {
      title: "MagSafe Armor Combo",
      description: "Matte Case + 9H Glass Fit",
      tag: "Best Value",
      price: "₹699",
      mrp: "₹1,499",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&auto=format&fit=crop&q=80",
    },
  },
  {
    id: "slide-2",
    tag: "Power Hub",
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    titleLight: "Supercharge with",
    titleHighlight: "65W & 100W GaN",
    subtitle: "Samsung 45W PPS and iPhone 16 Fast PD adapters. Compact, cooler, and reliable.",
    badgeOffer: "From ₹899",
    primaryCtaText: "Shop Chargers",
    primaryCtaHref: "#deals",
    secondaryCtaText: "View GaN Gear",
    secondaryCtaHref: "#categories-section",
    bgGradient: "from-zinc-950 via-amber-950/80 to-slate-950",
    bgImage: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1600&auto=format&fit=crop&q=80",
    productCard: {
      title: "VoltPro 65W GaN Dual",
      description: "Type-C PD + USB-A QuickCharge",
      tag: "Fast Charging",
      price: "₹1,399",
      mrp: "₹2,999",
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80",
    },
  },
  {
    id: "slide-3",
    tag: "Daily Commute",
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    titleLight: "Hands-Free with",
    titleHighlight: "MagSafe Car Mounts",
    subtitle: "Strong magnetic lock & 15W Qi2 wireless charging. Stays steady on Indian roads.",
    badgeOffer: "Extra 15% Off",
    primaryCtaText: "Explore Mounts",
    primaryCtaHref: "#categories-section",
    secondaryCtaText: "Device Fit",
    secondaryCtaHref: "#device-selector",
    bgGradient: "from-slate-950 via-emerald-950/70 to-zinc-950",
    bgImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600&auto=format&fit=crop&q=80",
    productCard: {
      title: "MagDrive 15W Qi2 Mount",
      description: "Auto-Grip 360° Vent Fit",
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
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  // Universal Pointer & Touch Swipe Handlers (works with touch, pen, and mouse drags)
  const handlePointerDown = (e: React.PointerEvent) => {
    touchStartX.current = e.clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (touchStartX.current !== null) {
      touchEndX.current = e.clientX;
    }
  };

  const handlePointerUp = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 35; // px

      if (distance > minSwipeDistance) {
        // Swiped Left -> Next slide
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      } else if (distance < -minSwipeDistance) {
        // Swiped Right -> Previous slide
        setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 35;

      if (distance > minSwipeDistance) {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      } else if (distance < -minSwipeDistance) {
        setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  return (
    <section 
      className="py-2 sm:py-4 relative w-full overflow-hidden select-none touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Banner Card Container with Swipe Support */}
      <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br ${slide.bgGradient} text-white shadow-xl border border-slate-800/80 transition-all duration-700 w-full`}>
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={slide.bgImage}
            alt="Hero banner background"
            className="w-full h-full object-cover object-right sm:object-center opacity-25 scale-102 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        </div>

        <div className="relative z-10 p-4 sm:p-7 lg:p-10 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
          {/* Main Content Column: Lean, punchy copy */}
          <div className="max-w-xl">
            {/* Tag & Offer Badge */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[11px] sm:text-xs font-bold backdrop-blur-md ${slide.tagColor}`}>
                <Sparkles className="w-3 h-3" />
                <span>{slide.tag}</span>
              </span>

              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] sm:text-xs font-bold">
                {slide.badgeOffer}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-black tracking-tight leading-tight mb-1.5 sm:mb-2 text-white">
              {slide.titleLight}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                {slide.titleHighlight}
              </span>
            </h1>

            {/* Subtitle: Short, high readability */}
            <p className="text-xs sm:text-sm text-slate-300 mb-3 sm:mb-5 font-normal leading-relaxed line-clamp-2">
              {slide.subtitle}
            </p>

            {/* CTAs: Clean tap targets */}
            <div className="flex items-center gap-2.5">
              <Link
                href={slide.primaryCtaHref}
                className="px-4 sm:px-5 py-2.5 sm:py-3 min-h-[42px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition shadow-md shadow-blue-600/30 active:scale-95 flex items-center justify-center gap-1.5"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={slide.secondaryCtaHref}
                className="px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[42px] rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition backdrop-blur-sm flex items-center justify-center"
              >
                {slide.secondaryCtaText}
              </Link>
            </div>

            {/* Trust Highlights: Concise icons */}
            <div className="mt-3.5 sm:mt-6 pt-3 border-t border-white/15 flex items-center gap-4 text-[11px] sm:text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Drop Tested</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Free Ship ₹499+</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-400 font-black text-xs">₹</span>
                <span>COD Available</span>
              </div>
            </div>
          </div>

          {/* Right Showcase Card: Mobile-optimized row/box */}
          <div className="lg:w-72 shrink-0 w-full mt-1 lg:mt-0">
            <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-xl sm:rounded-2xl p-3 shadow-lg flex lg:flex-col items-center gap-3">
              <div className="w-24 h-24 lg:w-full lg:h-36 rounded-lg overflow-hidden bg-slate-800 shrink-0 relative">
                <img
                  src={slide.productCard.image}
                  alt={slide.productCard.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1.5 left-1.5 text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-400 text-slate-950">
                  {slide.productCard.tag}
                </span>
              </div>

              <div className="flex-1 min-w-0 w-full">
                <p className="font-bold text-white text-xs sm:text-sm truncate">{slide.productCard.title}</p>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">{slide.productCard.description}</p>
                
                <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-black text-white text-sm">
                      {slide.productCard.price}
                    </span>
                    <span className="text-[11px] text-slate-400 line-through">
                      {slide.productCard.mrp}
                    </span>
                  </div>
                  <Link
                    href="#deals"
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Carousel Navigation Arrows (Hidden on mobile to maximize touch canvas and avoid mis-taps) */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 border border-white/20 text-white items-center justify-center transition backdrop-blur-sm cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          aria-label="Next slide"
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 border border-white/20 text-white items-center justify-center transition backdrop-blur-sm cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Mobile & Desktop Slide Indicator Dots (With swipe hint on mobile) */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs">
          {HERO_SLIDES.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide ? "w-5 bg-blue-400" : "w-1.5 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
