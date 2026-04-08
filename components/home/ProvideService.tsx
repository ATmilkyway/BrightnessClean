import React from "react";
import Wrapper1280 from "../1280Wrapper";
import { Separator } from "../ui/separator";

const ProvideService = () => {
  return (
    <Wrapper1280>
      <div className="flex flex-col md:flex-row justify-between gap-10 pt-14 pb-11">
        <h2 className="text-4xl md:text-5xl text-[#111D15] font-semibold max-w-xl">
          We Always Provide The Best Service
        </h2>

        <div className="max-w-md">
          <h4 className="text-xl font-semibold pb-3">Services</h4>
          <p className="text-[#666666] leading-relaxed">
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
        </div>
      </div>

      <Separator className="bg-[#83A790] h-px" />
    </Wrapper1280>
  );
};

export default ProvideService;