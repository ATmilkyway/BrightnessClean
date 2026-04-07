import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      {/* Logo Section */}
      <div>
        <Image src={logo} alt="Logo" />
        <div>
          <h1>Brightness Clean</h1>
          <h3>Cleaning Services company</h3>
        </div>
      </div>
      {/* Menu Section */}
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <button>Get a Quote</button>
    </nav>
  );
};

export default NavBar;


