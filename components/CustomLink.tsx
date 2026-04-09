'use client'
import React, { PropsWithChildren } from "react";
import Link from "next/link";

interface CustomButtonProps extends PropsWithChildren {
  href: string;
  variant?: "fill" | "outline";
  borderColor?: string;
}

const CustomButton = ({
  href,
  children,
  variant = "fill",
  borderColor = "#FFF4F4",
}: CustomButtonProps) => {
  const baseClasses = "px-8 py-3 rounded transition hover:shadow-md font-medium";

  const variantClasses =
    variant === "fill"
      ? "bg-[#22B37E] text-white hover:bg-[#22b37ee0]"
      : `border text-[#FCFFFD] hover:bg-[rgba(255,244,244,0.15)] hover:text-[#FCFFFD]`;

  const style = variant === "outline" ? { borderColor } : {};

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses}`}
      style={style}
    >
      {children}
    </Link>
  );
};

export default CustomButton;