"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Image src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold  ">Brightness Clean</h1>
              <h3 className="text-sm text-[#4D4D4D]">Cleaning Services company</h3>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center text-gray-700 font-medium">
            <li>
              <Link href="/" className="hover:text-[#22B37E] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#22B37E] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#22B37E] transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#22B37E] transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#22B37E] transition">
                Contact
              </Link>
            </li>
            <li>
              <button className="bg-[#22B37E] text-white px-4 py-2 rounded hover-[#22b37ee0] transition">
                Get a Quote
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-[#22B37E] transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-[#22B37E] transition"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-[#22B37E] transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-[#22B37E] transition"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-[#22B37E] transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <button className="w-full bg-[#22B37E] text-white px-4 py-2 my-2 rounded hover-[#22b37ee0] transition">
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;