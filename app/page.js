import BuyPage from "./buy/page";
import CreatorHeroSection from "./components/CreatorHeroSection";
import Earnings from "./components/Earnings";

export default function Home() {
  return (
    <div className="">
      <BuyPage />
      <CreatorHeroSection />
      <Earnings />
    </div>
  );
}
