import EffectiveCleaning from "@/components/home/EffectiveCleaning";
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
    </div>
  );
};

export default HomePage;
