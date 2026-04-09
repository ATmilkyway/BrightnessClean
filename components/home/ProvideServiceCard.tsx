import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardAction,
} from "../ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ProvideServiceCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  variant?: "fill" | "outline";
}

const ProvideServiceCard = ({
  title,
  description,
  image,
  href,
  variant = "outline",
}: ProvideServiceCardProps) => {
  return (
    <Card className="relative w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

      <Image
        src={image}
        alt={image.src}
        className="relative z-20 aspect-video w-full object-cover"
      />

      <CardHeader>
        <CardAction></CardAction>

        <CardTitle className="text-[#111D15] text-2xl">{title}</CardTitle>

        <CardDescription className="text-[#666666] text-base leading-relaxed ">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="bg-white border-0">
          <Link
            href={href}
            className={`flex items-center gap-2 px-8 py-3 rounded transition hover:shadow-md  text-base font-medium ${
              variant === "fill"
                ? "bg-[#22B37E] text-white hover:bg-[#22b37ee0]"
                : "bg-white border border-[#666666] text-[#666666] hover:bg-[#22B37EE0] hover:text-white hover:border-transparent"
            }`}
          >
            Book Now <ArrowUpRight />
          </Link>
      </CardFooter>
    </Card>
  );
};

export default ProvideServiceCard;
