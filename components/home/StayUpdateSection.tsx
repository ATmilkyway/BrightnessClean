import Wrapper1280 from "../1280Wrapper";
import { Separator } from "../ui/separator";
import StayUpdateCard from "./StayUpdateCard";

import stayUpdateSection1 from "@/public/stay-update-section1.jpg";
import stayUpdateSection2 from "@/public/stay-update-section2.jpg";
import stayUpdateSection3 from "@/public/stay-update-section3.jpg";

const teamMembers = [
  {
    id: 1,
    title: "JOHN HELTON   JAN 6, 2025",
    description: "Eco-Friendly Cleaning: How We Keep Your Home Green",
    description2:
      "Learn about our commitment to eco-friendly practices. We share the eco-conscious products...",
    image: stayUpdateSection1,
  },
  {
    id: 2,
    title: "Andrew Wilson",
    description: "How to Maintain a Clean Home Between Professional Visits",
    description2:
      "Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...",
    image: stayUpdateSection2,
  },
  {
    id: 3,
    title: "Olivia Martin",
    description: "The Benefits of Regular Professional Cleaning",
    description2:
      "Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...",
    image: stayUpdateSection3,
  },
];

const StayUpdateSection = () => {
  return (
    <Wrapper1280>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 pt-14 pb-11">
        <h2 className="text-4xl md:text-5xl text-[#111D15] font-semibold max-w-xl">
          Stay Updated with Our Tips & Service News!
        </h2>

        <div className="max-w-lg">
          <h4 className="text-xl font-semibold pb-3 text-[#111D15]">
            Our Blog
          </h4>
          <p className="text-[#666666] leading-relaxed">
            We have professional expert cleaning staff ensuring top-notch
            cleanliness and hygiene for your space.
          </p>
        </div>
      </div>

      <Separator className="bg-[#83A790] h-px" />

      {/* Cards */}
      <div className="flex flex-wrap justify-between gap-6 pt-10">
        {teamMembers.map((member) => (
          <StayUpdateCard key={member.id} {...member} />
        ))}
      </div>
    </Wrapper1280>
  );
};

export default StayUpdateSection;