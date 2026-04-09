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

export interface TeamCardProps {
  id?: number;
  title: string;
  description: string;
  description2?: string;
  image: StaticImageData;
  href?: string;
}

const StayUpdateCard = ({
  id,
  title,
  description,
  description2,
  image,
  href,
}: TeamCardProps) => {
  return (
    <Card className="relative w-full max-w-sm pt-0 text-center shadow-none">
      {/* Overlay */}
      <div
        className={`absolute inset-0 z-30 aspect-video ${
          id === 2 ? "bg-green-100/35" : ""
        }`}
      />

      {/* Image */}
      <Image
        src={image}
        alt={title}
        className="relative z-20 aspect-video w-full object-cover"
      />

      {/* Content */}
      <CardHeader>
        <CardAction />
        <CardTitle className="text-[#666666] font-light text-md pt-4">
          {title}
        </CardTitle>
        <CardDescription>
          <div className="text-[#111D15] text-base font-bold px-6">
            {description}
          </div>
          {description2 && (
            <div className="text-[#666666] font-light text-md pt-4 text-base px-4">
              {description2}
            </div>
          )}
        </CardDescription>
      </CardHeader>

      {/* Footer */}
      <CardFooter
        className={`bg-white border-0 flex justify-center mx-8 ${
          id === 2 ? "border-t border-[#83A790]" : ""
        }`}
      >
        <Link
          href={href || "#"}
          className={`${
            id === 2
              ? "text-white bg-[#22B37E] py-3 px-18 rounded-sm"
              : "text-[#666666]"
          }`}
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default StayUpdateCard;