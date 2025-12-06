import BuyPage from "./buy/page";
import CreatorHeroSection from "./components/CreatorHeroSection";
import Earnings from "./components/Earnings";
import EssentialToolsSection from "./components/EssentialToolsSection";
import TestimonialsSection from "./components/TestimonialsSlider";

export default function Home() {
  return (
    <div className="">
      <BuyPage />
      <CreatorHeroSection />
      <Earnings />
      <TestimonialsSection />
      <EssentialToolsSection />
    </div>
  );
}
