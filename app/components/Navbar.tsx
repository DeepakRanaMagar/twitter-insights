"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../logo.svg";
import Link from "next/link";



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          {/* LOGO HERE */}
          <div className="flex items-center justify-between">
            <Image
              src={logo}
              width={20}
              height={20}
              alt="not found"
              className="rounded-none"
            />
            <p className="text-lg px-2 font-semibold">INSIGHTS NEPAL</p>
          </div>

          <div className="hidden md:flex md:items-center md:justify-end flex-grow">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <Link className="text-black transition" href="/">
                    Home
                  </Link>
                </li>

                <li>
                  {/* FIXME: */}
                    <Link className="text-black transition" href="/about">
                      About
                    </Link>
                </li>

                <li>
                  <Link className="text-black transition" href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="sm:flex sm:gap-4">
              <button className="hover:bg-[#cfc3fb] hover:text-black text-black px-3 py-1 border border-black rounded-none m-2 hidden md:block">
                <Link href={"/dashboard"}>Login With Twitter</Link>
              </button>
            </div>

            <button
              className="hover:bg-[#cfc3fb] hover:text-black text-black px-1 py-1 border border-black rounded-none m-2 md:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="bg-white px-4 py-2 md:hidden">
            <ul className="flex flex-col gap-2 text-md border-t-2 border-black animate-fadeIn">
              <li>
                <Link className="text-black transition" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-black transition" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-black transition" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
