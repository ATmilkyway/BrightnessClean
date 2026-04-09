import EffectiveCleaning from "@/components/home/EffectiveCleaning";
import FeedBackSection from "@/components/home/FeedBackSection";
import HeroSection from "@/components/home/HeroSection";
import HighQualitySection from "@/components/home/HighQualitySection";
import KeepInTouch from "@/components/home/KeepInTouch";
import PreCleaningSection from "@/components/home/PreCleaningSection";
import PriceSection from "@/components/home/PriceSection";
import ProvideService from "@/components/home/ProvideService";
import StayUpdateSection from "@/components/home/StayUpdateSection";

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
      <StayUpdateSection />
      <KeepInTouch />
    </div>
  );
};

export default HomePage;
