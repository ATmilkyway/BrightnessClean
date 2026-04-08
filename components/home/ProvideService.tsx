import Wrapper1280 from "../1280Wrapper";
import { Separator } from "../ui/separator";
import ProvideServiceCard, { ProvideServiceCardProps } from "./ProvideServiceCard";

import officeCleaningImage from "@/public/office-cleaning.jpg";
import springCleaningImage from "@/public/spring-cleaning.jpg";
import houseCleaningImage from "@/public/house-cleaning.jpg";
import { StaticImageData } from "next/image";

const services: ProvideServiceCardProps[] = [
  {
    title: "Office Cleaning",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: officeCleaningImage,
    href: "/",
    variant: "outline",
  },
  {
    title: "Spring Cleaning",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: springCleaningImage,
    href: "/",
    variant: "fill",
  },
  {
    title: "House Cleaning",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: houseCleaningImage,
    href: "/",
    variant: "outline",
  },
];

const ProvideService = () => {
  return (
    <Wrapper1280>
      <div className="flex flex-col md:flex-row justify-between gap-10 pt-14 pb-11">
        <h2 className="text-4xl md:text-5xl text-[#111D15] font-semibold max-w-xl">
          We Always Provide The Best Service
        </h2>

        <div className="max-w-md">
          <h4 className="text-xl font-semibold pb-3 text-[#111D15]">Services</h4>
          <p className="text-[#666666] leading-relaxed">
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
        </div>
      </div>

      <Separator className="bg-[#83A790] h-px" />

      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ProvideServiceCard  key={service.title} {...service} />
        ))}
      </div>
    </Wrapper1280>
  );
};

export default ProvideService;