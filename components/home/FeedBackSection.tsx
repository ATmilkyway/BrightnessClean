import Image from "next/image";
import Wrapper1280 from "../1280Wrapper";
import feedBackImage from "@/public/feedback1.jpg";
import { FaStar } from "react-icons/fa";
import { Card, CardTitle, CardDescription, CardFooter } from "../ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FeedBackSection = () => {
  return (
    <Wrapper1280>
      <div className="flex flex-col md:flex-row justify-between gap-10 pt-20 pb-20">
        {/* Text Section */}
        <div className="pt-10 flex flex-col gap-y-4 text-lg max-w-xl">
          <h2 className="text-4xl md:text-5xl text-[#111D15] font-bold">
            Feedback About Their Experience With Us
          </h2>
          <p className="text-[#666666] leading-relaxed">
            Read testimonials from our satisfied clients. See how our cleaning
            services have made a difference in their lives and homes
          </p>
          <div className="flex gap-x-4 pt-4">
            <div className="border-[#22B37E] text-[#22B37E]  border p-3 rounded-lg">
              <ArrowLeft />
            </div>
            <div className="bg-[#22B37E] text-white border p-3 rounded-lg">
              <ArrowRight />
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <Card className="w-full max-w-2xl rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row bg-white border-none">
          {/* Image */}
          <div className="relative md:w-5/12 w-full    md:h-auto">
            <Image
              src={feedBackImage}
              alt="Robert Fox"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="md:w-7/12 w-full p-6 flex flex-col justify-center gap-4">
            <CardTitle className="text-[#111D15] text-2xl font-semibold">
              Robert Fox
            </CardTitle>
            <p className="text-sm text-[#666666]">Business Man</p>

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color="#FF9800" size={18} />
              ))}
            </div>

            {/* Testimonial Text */}
            <CardDescription className="text-[#666666] text-base leading-relaxed">
              Excellent service! The team was punctual, thorough, and left my
              home sparkling clean. Highly recommend for anyone needing a
              reliable and detailed cleaning service.
            </CardDescription>

            {/* Footer / CTA */}
            <CardFooter className="mt-4 p-0 border-0 bg-white">
              <button className="text-sm text-[#22B37E] font-medium hover:underline">
                Read More
              </button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </Wrapper1280>
  );
};

export default FeedBackSection;
