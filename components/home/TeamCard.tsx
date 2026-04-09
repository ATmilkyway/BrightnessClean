import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardAction,
} from "../ui/card";
import Image, { StaticImageData } from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaStar, FaXTwitter } from "react-icons/fa6";

export interface TeamCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  href?: string;
  variant?: "fill" | "outline";
}

const TeamCard = ({
  title,
  description,
  image,
}: TeamCardProps) => {
  return (
    <Card className="relative w-full max-w-sm pt-0 border-none">
      {/* Overlay */}
      <div className="absolute inset-0 z-30 aspect-video bg-green-100/35" />

      {/* Image */}
      <Image
        src={image}
        alt={title}
        className="relative z-20 aspect-video w-full object-cover"
      />

      {/* Content */}
      <CardHeader>
        <CardAction />

        <CardTitle className="text-[#111D15] text-2xl">
          {title}
        </CardTitle>

        {/* Stars */}
        <div className="flex py-2 gap-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color="#FF9800" size={16} />
          ))}
        </div>

        <CardDescription className="text-[#666666] text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Footer */}
      <CardFooter className="bg-white border-0">
        <ul className="flex justify-between gap-x-8">
          <li><FaFacebookF size={18} /></li>
          <li><FaXTwitter size={18} /></li>
          <li><FaInstagram size={18} /></li>
          <li><FaLinkedinIn size={18} /></li>
        </ul>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;