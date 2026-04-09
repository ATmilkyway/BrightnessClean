import Wrapper1280 from "../1280Wrapper";
import CustomLink from "../CustomLink";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const KeepInTouch = () => {
  return (
    <Wrapper1280>
      <div className="flex flex-col md:flex-row justify-between gap-10 pt-38 pb-40">
        
        {/* Left Side */}
        <div className="pt-10 flex flex-col gap-y-6 text-lg w-full md:w-1/2 mr-8">
          <h2 className="text-4xl md:text-5xl text-[#111D15] leading-14 font-semibold">
            Find us
          </h2>

          <div className="pt-8 flex flex-col gap-4">
            {/* Phone */}
            <div className="flex gap-4 items-center bg-[#F3F3F3] p-4 rounded-lg">
              <div className="bg-[#22B37E] p-4 rounded-full">
                <PhoneCall color="white" />
              </div>
              <div>
                <p className="text-[#111D15] font-semibold">Call Us</p>
                <p className="text-[#666666] text-base">
                  +(08) 255 201 888
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-center bg-[#F3F3F3] p-4 rounded-lg">
              <div className="bg-[#22B37E] p-4 rounded-full">
                <Mail color="white" />
              </div>
              <div>
                <p className="text-[#111D15] font-semibold">Email Now</p>
                <p className="text-[#666666] text-base">
                  Hello@procleaning.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 items-center bg-[#F3F3F3] p-4 rounded-lg">
              <div className="bg-[#22B37E] p-4 rounded-full">
                <MapPin color="white" />
              </div>
              <div>
                <p className="text-[#111D15] font-semibold">Address</p>
                <p className="text-[#666666] text-base">
                  7510, Brand Tower, New York, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="pt-10 flex flex-col gap-y-4 text-lg w-full md:w-1/2">
          <h4 className="font-normal text-[#666666]">Contact info</h4>

          <h2 className="text-4xl md:text-5xl text-[#111D15] leading-14 font-bold">
            Keep In Touch
          </h2>

          <p className="text-[#666666] leading-relaxed max-w-xl">
            We prioritize responding to your inquiries promptly to ensure you
            receive the assistance you need in a timely manner
          </p>

          {/* Form */}
          <div className="pt-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-[#E5E5E5] bg-transparent py-3 outline-none placeholder:text-[#999]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-[#E5E5E5] bg-transparent py-3 outline-none placeholder:text-[#999]"
            />

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border-b border-[#E5E5E5] bg-transparent py-3 outline-none placeholder:text-[#999] resize-none"
            />

            <div className="pt-4">
              <button className="bg-[#22B37E] text-white px-6 py-3 rounded-sm">
                Sent Massage
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper1280>
  );
};

export default KeepInTouch;