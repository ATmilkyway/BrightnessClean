import Image from "next/image";
import Wrapper1280 from "@/components/1280Wrapper";
import Link from "next/link";
import priceBg from "@/public/price-bg.png";

const pricingPlans = [
  {
    title: "Basic Package",
    features: [
      "Dusting of all surfaces",
      "Sweeping and mopping floors",
      "Vacuuming carpets and rugs",
      "Cleaning of kitchen surfaces",
      "Cleaning of bathroom surfaces",
      "Emptying trash bins",
    ],
  },
  {
    title: "Standard",
    features: [
      "All services in the Basic Package",
      "Detailed dusting",
      "Wiping down of kitchen appliances",
      "Cleaning inside the microwave",
      "Changing bed linens",
      "Spot cleaning walls and doors",
    ],
  },
  {
    title: "Premium",
    features: [
      "All services in the Standard Package",
      "Deep cleaning of kitchen appliances",
      "Baseboards, door frames, & vents",
      "Organization of closets & pantries",
      "Carpet & upholstery spot cleaning",
      "Detailed bathroom cleaning",
    ],
  },
];

const PriceSection = () => {
  return (
    <div className="relative h-[80vh] flex justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={priceBg} alt="Hero Image" className="object-cover" fill />
        <div className="h-full w-full bg-[#22B37E] opacity-90 absolute inset-0"></div>
      </div>

      <Wrapper1280>
        <div className="relative top-30 text-center flex flex-col items-center gap-6">
          {/* Title */}
          <div className="flex flex-col gap-y-3">
            <p className="text-[#FDFFFE] text-xl">Our Pricing</p>
            <h2 className="text-5xl text-[#F8FFFB] font-semibold">
              Choose From Our Lowest
            </h2>
            <h2 className="text-5xl text-[#F8FFFB] font-semibold">
              Plans and Prices
            </h2>
          </div>

          {/* Monthly / Yearly Toggle */}
          <div className="bg-[#F4F5F8] py-2 px-3 flex gap-4 justify-between rounded-full">
            <Link
              href={""}
              className="bg-[#22B37E] py-1.5 px-6 rounded-full text-white"
            >
              Monthly
            </Link>
            <Link
              href={""}
              className="bg-white py-1.5 px-6 rounded-full text-[#111D15]"
            >
              Yearly
            </Link>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-row justify-between mt-10 w-300">
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className="bg-white p-6 relative z-10 max-w-92.5 text-left rounded-lg shadow-lg flex-1 flex flex-col"
              >
                {/* Card Title */}
                <div className="px-4 py-3 bg-[#22B37E] text-white text-center rounded-sm mb-4 hover:bg-[#22b37ee0] mx-4">
                  {plan.title}
                </div>

                {/* Features List */}
                <ul className="list-disc pl-5 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis block">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-12 flex justify-center">
                  <Link
                    href=""
                    className=" px-16 py-3 rounded transition hover:shadow-md text-base font-medium bg-white border border-[#666666] text-[#666666] hover:bg-[#22B37EE0] hover:text-white hover:border-transparent"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper1280>
    </div>
  );
};

export default PriceSection;
