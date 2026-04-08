import Image from "next/image";
import HeroImage from "@/public/hero-section.jpg";
import Wrapper1280 from "@/components/1280Wrapper";
import Link from "next/link";
import CustomLink from "@/components/CustomLink";

const HeroSection = () => {
  return (
    <div className="relative h-[85vh] ">
      <div>
        <Image src={HeroImage} alt="Hero Image" className="object-cover" fill />
        <div className="h-full w-full bg-[#00000062] absolute inset-0 opacity-50 "></div>
      </div>
      <Wrapper1280>
        <div className="relative top-40">
          <div className="flex flex-col gap-y-3">
            <p className="text-[#FDFFFE] text-xl ">
              Quality cleaning at a fair price.
            </p>
            <h2 className="text-6xl text-[#F8FFFB] max-w-2xl font-bold">
              Specialized, efficient, and thorough cleaning services
            </h2>
            <p className="text-[#F9E7E7] max-w-xl">
              We provide Performing cleaning tasks using the least amount of
              time, energy, and money.
            </p>
          </div>
          <div className="flex pt-14 gap-x-4">
            <CustomLink href={"/"}>Get Start Now</CustomLink>
            <CustomLink href={"/ "} variant="outline">
              View all Services
            </CustomLink>
          </div>
        </div>
      </Wrapper1280>
    </div>
  );
};

export default HeroSection;
