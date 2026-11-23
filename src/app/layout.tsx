import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { SocialShareWidget } from "@/components/common/social-share-widget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zapgear.in"),
  title: {
    default: "ZapGear India | Best Cases, Screen Protectors & Fast Chargers",
    template: "%s | ZapGear India",
  },
  description:
    "Shop premium drop-tested phone cases, 9H tempered glass, 65W GaN chargers and MagSafe accessories for iPhone, Samsung, OnePlus & more across India with Free Delivery & COD.",
  keywords: [
    "mobile accessories India",
    "iPhone 16 cases",
    "Samsung S24 Ultra tempered glass",
    "65W GaN charger India",
    "MagSafe car mount",
    "OnePlus 12 covers",
    "Cash on delivery phone accessories",
  ],
  authors: [{ name: "ZapGear India" }],
  creator: "ZapGear India",
  publisher: "ZapGear India",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zapgear.in",
    siteName: "ZapGear India",
    title: "ZapGear India | Style & Armour for Your Phone",
    description:
      "Engineered mobile accessories with 10ft drop protection, 9H privacy tempered glass & 65W GaN fast chargers with pan-India Cash on Delivery.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ZapGear India - Mobile Accessories Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZapGear India | Best Mobile Cases, Glass & GaN Chargers",
    description:
      "Drop-tested cases, scratch-free glass guards, and super-fast chargers for Apple, Samsung, OnePlus & more. Free express delivery on orders over ₹499.",
    images: ["/og-image.svg"],
    creator: "@ZapGearIndia",
  },
  alternates: {
    canonical: "https://zapgear.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-[#f8fafc] dark:bg-[#090d16] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col selection:bg-blue-600 selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-2">{children}</main>
          <Footer />
          <BottomNav />
          <CartDrawer />
          <SocialShareWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
