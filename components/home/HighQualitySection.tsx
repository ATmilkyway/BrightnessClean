import Image from "next/image";
import Wrapper1280 from "../1280Wrapper";
import CustomLink from "../CustomLink";
import qualityImage1 from "@/public/high-quality1.jpg";
import qualityImage2 from "@/public/high-quality2.jpg";
const HighQualitySection = () => {
  return (
    <Wrapper1280>
      <div className="flex flex-col md:flex-row justify-between gap-10 pt-38 pb-40">
        <div className="pt-10 flex flex-col gap-y-4 text-lg ">
          <h4 className="font-normal">Affordable cleaning solutions</h4>
          <h2 className="text-4xl md:text-5xl text-[#111D15] leading-14 font-bold">
            High-Quality and Friendly Services at Fair Prices
          </h2>
          <p className="text-[#666666] leading-relaxed max-w-lg  ">
            We provide comprehensive cleaning services tailored to your needs.
            From residential cleaning services
          </p>
          <div className="pt-8">
            <CustomLink href={"/ "}>Get a Quote</CustomLink>
          </div>
        </div>

        <div className="max-w-md  p-2   relative   w-full">
          <div className="border-10  border-[#22B37E] h-95 w-95 absolute  right-0 -top-10 rounded-4xl overflow-hidden border-l-white border-b-white">
            <Image
              src={qualityImage1}
              alt="High Quality Cleaning"
              className="top-1 object-cover"
              fill
            />
          </div>

          <div className="border-10  border-white w-58 h-66 absolute   bottom-0 top-1/2 rounded-4xl overflow-hidden border-l-[#22B37E] border-b-[#22B37E]">
            <Image
              src={qualityImage2}
              alt="High Quality Cleaning"
              className="top-1 object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </Wrapper1280>
  );
};

export default HighQualitySection;
