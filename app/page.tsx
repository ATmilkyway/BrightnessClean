import EffectiveCleaning from "@/components/home/EffectiveCleaning";
import FeedBackSection from "@/components/home/FeedBackSection";
import HeroSection from "@/components/home/HeroSection";
import HighQualitySection from "@/components/home/HighQualitySection";
import PreCleaningSection from "@/components/home/PreCleaningSection";
import PriceSection from "@/components/home/PriceSection";
import ProvideService from "@/components/home/ProvideService";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProvideService />
      <HighQualitySection />
      <EffectiveCleaning />
      <PreCleaningSection />
      <PriceSection />
      <FeedBackSection />
    </div>
  );
};

export default HomePage;
