export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  count: string;
  tag?: string;
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  models: string[];
}

export interface Product {
  id: string;
  title: string;
  category: string;
  brand: string;
  compatibleModels: string[];
  mrp: number;
  price: number;
  discountPercent: number;
  rating: number;
  reviewsCount: number;
  tag?: "Bestseller" | "Deal of the Day" | "New" | "Trending";
  inStock: boolean;
  stockQty: number;
  image: string;
  features: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "cases-covers",
    name: "Cases & Covers",
    slug: "cases-covers",
    iconName: "Shield",
    count: "450+ styles",
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "tempered-glass",
    name: "Tempered Glass",
    slug: "tempered-glass",
    iconName: "Maximize2",
    count: "9H Edge-to-Edge",
    tag: "High Demand",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "fast-chargers",
    name: "Fast Chargers & GAN",
    slug: "fast-chargers",
    iconName: "Zap",
    count: "Up to 120W",
    tag: "Fast Charging",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "cables",
    name: "Braided Cables",
    slug: "cables",
    iconName: "Cable",
    count: "Type-C & Lightning",
    image: "https://images.unsplash.com/photo-1608248597359-bb5591eb3397?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "magsafe",
    name: "MagSafe & Wireless",
    slug: "magsafe",
    iconName: "Disc",
    count: "Qi2 Compatible",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1622445268462-328659d81643?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "car-accessories",
    name: "Car Mounts & Audio",
    slug: "car-accessories",
    iconName: "Compass",
    count: "Heavy Duty Grip",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
  },
];

export const BRANDS: Brand[] = [
  {
    id: "apple",
    name: "Apple",
    logo: "🍎",
    models: ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15", "iPhone 14", "iPhone 13"],
  },
  {
    id: "samsung",
    name: "Samsung",
    logo: "🪐",
    models: ["Galaxy S25 Ultra", "Galaxy S24 Ultra", "Galaxy S24", "Galaxy S23 FE", "Galaxy A55 5G", "Galaxy Z Fold 6"],
  },
  {
    id: "oneplus",
    name: "OnePlus",
    logo: "➕",
    models: ["OnePlus 13", "OnePlus 12", "OnePlus 12R", "OnePlus Nord 4", "OnePlus Nord CE 4"],
  },
  {
    id: "xiaomi",
    name: "Xiaomi / Redmi",
    logo: "🟠",
    models: ["Xiaomi 14 Ultra", "Redmi Note 13 Pro+", "Redmi Note 13", "POCO X6 Pro 5G", "POCO F6"],
  },
  {
    id: "vivo-iqoo",
    name: "Vivo & iQOO",
    logo: "⚡",
    models: ["iQOO 12 5G", "iQOO Neo 9 Pro", "Vivo X100 Pro", "Vivo V40 Pro 5G", "Vivo T3 5G"],
  },
  {
    id: "realme",
    name: "Realme",
    logo: "🟡",
    models: ["Realme GT 6", "Realme 13 Pro+ 5G", "Realme 12x 5G", "Realme P1 5G"],
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    title: "AeroShield Frosted MagSafe Case with Metallic Buttons",
    category: "cases-covers",
    brand: "Apple",
    compatibleModels: ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 15 Pro Max"],
    mrp: 1499,
    price: 699,
    discountPercent: 53,
    rating: 4.8,
    reviewsCount: 1240,
    tag: "Bestseller",
    inStock: true,
    stockQty: 18,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80",
    features: ["Strong N52 MagSafe Ring", "Anti-Fingerprint Matte", "10ft Drop Certified"],
  },
  {
    id: "prod-2",
    title: "TrueEdge 9H UV Liquid Privacy Tempered Glass (Pack of 2)",
    category: "tempered-glass",
    brand: "Samsung",
    compatibleModels: ["Galaxy S24 Ultra", "Galaxy S23 Ultra", "OnePlus 12"],
    mrp: 1299,
    price: 499,
    discountPercent: 61,
    rating: 4.7,
    reviewsCount: 890,
    tag: "Deal of the Day",
    inStock: true,
    stockQty: 8,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    features: ["Curved Edge Fit", "28° Privacy Shield", "Ultrasonic Fingerprint Support"],
  },
  {
    id: "prod-3",
    title: "VoltPro 65W GaN Dual Type-C + USB-A Super Fast Charger",
    category: "fast-chargers",
    brand: "Universal",
    compatibleModels: ["All Type-C Phones", "MacBook / Laptops"],
    mrp: 2999,
    price: 1399,
    discountPercent: 53,
    rating: 4.9,
    reviewsCount: 2150,
    tag: "Trending",
    inStock: true,
    stockQty: 34,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80",
    features: ["PD 3.0 & PPS 45W Samsung support", "Over-heat Protection", "Compact Foldable Pin"],
  },
  {
    id: "prod-4",
    title: "ArmourWeave 100W Zinc-Alloy Braided Fast Charge Cable (1.5m)",
    category: "cables",
    brand: "Universal",
    compatibleModels: ["All Type-C Phones"],
    mrp: 899,
    price: 349,
    discountPercent: 61,
    rating: 4.6,
    reviewsCount: 640,
    inStock: true,
    stockQty: 52,
    image: "https://images.unsplash.com/photo-1608248597359-bb5591eb3397?w=600&auto=format&fit=crop&q=80",
    features: ["Real-time Wattage Display", "E-Marker Chip", "30,000+ Bend Tested"],
  },
  {
    id: "prod-5",
    title: "MagDrive 15W Qi2 Fast Wireless Car Charger Mount",
    category: "car-accessories",
    brand: "Apple / Samsung",
    compatibleModels: ["iPhone 16/15/14/13/12", "Qi2 Compatible Phones"],
    mrp: 2499,
    price: 1199,
    discountPercent: 52,
    rating: 4.8,
    reviewsCount: 432,
    tag: "Trending",
    inStock: true,
    stockQty: 12,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    features: ["Automatic Clamping / MagSafe", "360° Ball Joint", "Vent & Dashboard Mount"],
  },
  {
    id: "prod-6",
    title: "CrystalClear Dual-Layer Shockproof Case with Camera Stand Ring",
    category: "cases-covers",
    brand: "OnePlus",
    compatibleModels: ["OnePlus 12", "OnePlus 12R", "OnePlus Nord 4"],
    mrp: 1199,
    price: 549,
    discountPercent: 54,
    rating: 4.6,
    reviewsCount: 310,
    tag: "New",
    inStock: false,
    stockQty: 0,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80",
    features: ["Integrated Camera Lens Kickstand", "Anti-Yellowing Coating", "Raised 1.5mm Screen Lip"],
  },
];
