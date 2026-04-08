import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full mx-auto bg-white shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
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
              <h1 className="font-bold text-2xl">Brightness Clean </h1>
              <p className="text-[#4D4D4D] text-sm">
                Cleaning Services company
              </p>
            </div>
          </Link>
        </div>
        <ul className="flex text-[#4D4D4D] space-x-7 items-center">
          <li>
            <Link className="hover:text-[#22B37E] transition" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#22B37E] transition" href={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#22B37E] transition"
              href={"/services"}
            >
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#22B37E] transition" href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
        <Link
          href={"/get-quote"}
          className="bg-[#22B37E] text-white px-4 py-2 rounded hover-[#22b37ee0] transition hover:shadow-md "
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
