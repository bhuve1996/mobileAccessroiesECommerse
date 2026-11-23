import { HeroBanner } from "@/components/home/hero-banner";
import { DeviceSelector } from "@/components/home/device-selector";
import { CategoryGrid } from "@/components/home/category-grid";
import { FlashDeals } from "@/components/home/flash-deals";
import { PincodeChecker } from "@/components/home/pincode-checker";

export default function Home() {
  return (
    <div className="pb-12">
      <HeroBanner />
      <DeviceSelector />
      <CategoryGrid />
      <FlashDeals />
      <PincodeChecker />
    </div>
  );
}
