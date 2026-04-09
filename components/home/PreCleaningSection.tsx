import Image from "next/image";
import Wrapper1280 from "../1280Wrapper";
import welcome1 from "@/public/welcome1.jpg";
import welcome2 from "@/public/welcome2.jpg";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import CustomLink from "../CustomLink";
import Link from "next/link";

const HighQualitySection = () => {
  return (
    <Wrapper1280>
      <div className="flex justify-between pt-30 pb-40  ">
        <div className="max-w-xl  p-2   relative   w-full">
          <div className="border-10  border-[#22B37E] h-95 w-95 absolute  left-0 top-10 rounded-4xl overflow-hidden border-l-white border-b-white">
            <Image
              src={welcome1}
              alt="High Quality Cleaning"
              className="top-1 object-cover"
              fill
            />
          </div>

          <div className="border-10  border-white w-58 h-66 absolute  right-4  bottom-0 rounded-4xl overflow-hidden border-l-[#22B37E] border-b-[#22B37E]">
            <Image
              src={welcome2}
              alt="High Quality Cleaning"
              className="top-1 object-cover"
              fill
            />
          </div>
        </div>

        <div className="pt-10 flex flex-col gap-y-4 text-lg ">
          <h2 className="text-4xl md:text-5xl text-[#111D15] leading-14 font-bold">
            Welcome To Our
          </h2>
          <h2 className="text-4xl md:text-5xl text-[#111D15] leading-14 font-bold">
            Pro-cleaning Company!
          </h2>
          <p className="text-[#666666] leading-relaxed max-w-lg  ">
            We make your space shine! Professional and reliable cleaning service
            company providing top-notch solutions for homes and businesses.
            Satisfaction guaranteed!"
          </p>
          <div className="flex justify-between gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-y-3">
              <div className="bg-[#F5F4F4] px-8 py-3">
                <p className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#22B37E]">
                    <FaCheck className="text-white text-xs" />
                  </span>
                  Vetted professionals
                </p>
              </div>

              <div className="bg-[#F5F4F4] px-8 py-3">
                <p className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#22B37E]">
                    <FaCheck className="text-white text-xs" />
                  </span>
                  Next day availability
                </p>
              </div>

              <div className="bg-[#F5F4F4] px-8 py-3">
                <p className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#22B37E]">
                    <FaCheck className="text-white text-xs" />
                  </span>
                  Standard cleaning tasks
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-y-3">
              <div className="bg-[#F5F4F4] px-8 py-3">
                <p className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#22B37E]">
                    <FaCheck className="text-white text-xs" />
                  </span>
                  Affordable Prices
                </p>
              </div>

              <div className="bg-[#F5F4F4] px-8 py-3">
                <p className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#22B37E]">
                    <FaCheck className="text-white text-xs" />
                  </span>
                  Best Quality
                </p>
              </div>

              <div className="bg-[#F5F4F4] px-8 py-3">
                <p className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#22B37E]">
                    <FaCheck className="text-white text-xs" />
                  </span>
                  Affordable Prices
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-6 pt-4">
            <CustomLink href={"/ "}>Book Now</CustomLink>
            <div>
              <Link
                href={""}
                className={`flex items-center gap-2 px-8 py-3 rounded transition hover:shadow-md  text-base font-medium ${"bg-white border border-[#666666] text-[#666666] hover:bg-[#22B37EE0] hover:text-white hover:border-transparent"}`}
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper1280>
  );
};

export default HighQualitySection;
