import EffectiveCleaning from "@/components/home/EffectiveCleaning";
import HeroSection from "@/components/home/HeroSection";
import HighQualitySection from "@/components/home/HighQualitySection";
import ProvideService from "@/components/home/ProvideService";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProvideService />
      <HighQualitySection />
      <EffectiveCleaning />
    </div>
  );
};

export default HomePage;
