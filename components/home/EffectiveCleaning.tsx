import Wrapper1280 from "../1280Wrapper";
import { Separator } from "../ui/separator";

const EffectiveCleaning = () => {
  return (
    <Wrapper1280>
      <div className="flex flex-col md:flex-row justify-between gap-10 pt-14 pb-11">
        <h2 className="text-4xl md:text-5xl text-[#111D15] font-semibold max-w-2xl">
          Effective Cleaning Requires an Expert Cleaning Team
        </h2>

        <div className="max-w-md">
          <h4 className="text-xl font-semibold pb-3 text-[#111D15]">
            Expert Team
          </h4>
          <p className="text-[#666666] leading-relaxed">
            We have professional expert cleaning staff ensuring top-notch
            cleanliness and hygiene for your space.
          </p>
        </div>
      </div>
      <Separator className="bg-[#83A790] h-px" />
    </Wrapper1280>
  );
};

export default EffectiveCleaning;
