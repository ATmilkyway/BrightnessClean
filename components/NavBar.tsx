"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import CustomLink from "./CustomLink";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];
const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full mx-auto bg-white shadow-sm z-50 sticky top-0 ">
      <div className="flex justify-between items-center  py-6 max-w-7xl mx-auto">
        <div className="flex">
          <Link href={"/"} className="flex gap-2">
            <Image
              src={Logo}
              alt="Logo"
              width={44}
              height={48}
              className="block"
            />

            <div>
              <h1 className="font-bold text-2xl text-black">
                Brightness Clean{" "}
              </h1>
              <p className="text-[#4D4D4D] text-sm">
                Cleaning Services company
              </p>
            </div>
          </Link>
        </div>
        <ul className="flex text-[#4D4D4D] space-x-10 items-center font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`transition hover:text-[#22B37E] ${
                  pathname === link.href ? "text-[#22B37E]" : "text-black"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <CustomLink href={"/ "}>Get a Quote</CustomLink>
      </div>
    </nav>
  );
};

export default NavBar;
