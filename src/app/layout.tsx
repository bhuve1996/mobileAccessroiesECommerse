import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { BottomNav } from "@/components/layout/bottom-nav";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZapGear India | Best Cases, Screen Protectors & Fast Chargers",
  description:
    "Shop premium drop-tested phone cases, 9H tempered glass, 65W GaN chargers and MagSafe accessories for iPhone, Samsung, OnePlus & more across India with Free Delivery & COD.",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
