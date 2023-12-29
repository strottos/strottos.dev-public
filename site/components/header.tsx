"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  const handleLinkClick = () => {
    setNavIsOpen(false);
  };

  return (
    <header>
      <div className="bg-header w-screen absolute h-12 lg:h-16 lg:fixed top-0 left-0 z-30">
        <div className="container flex justify-between">
          <div className="flex justify-start">
            <button
              onClick={handleBurgerClick}
              className="hamburger-icon mx-2 mt-2 lg:hidden"
            >
              <div
                className={`hamburger-line ${
                  navIsOpen ? "hamburger-top-closed" : ""
                }`}
              ></div>
              <div
                className={`hamburger-line ${
                  navIsOpen ? "hamburger-mid-closed" : ""
                }`}
              ></div>
              <div
                className={`hamburger-line ${
                  navIsOpen ? "hamburger-btm-closed" : ""
                }`}
              ></div>
            </button>
            <Link href="/" className="lg:ml-4 lg:my-0 my-auto">
              <Image
                src="/images/logo.png"
                width={128}
                height={128}
                className="w-12 h-12 lg:w-16 lg:h-16"
                alt="logo"
              />
            </Link>
            <Link href="/" className="ml-4 my-auto lg:p-b-4">
              <h1 className="font-bold text-lg md:text-2xl text-center">
                Coding, Cloud &amp; Calculations
              </h1>
            </Link>
          </div>
          <nav>
            <div
              className={`absolute top-12 left-0 flex flex-col justify-start p-4 self-end w-full min-w-32 min-h-92 space-y-3 bg-white border-gray border-b-2 lg:relative lg:top-0 lg:flex-row lg:justify-between lg:h-16 lg:space-y-0 lg:m-0 lg:px-8 lg:bg-header ${
                navIsOpen ? "block" : "hidden lg:flex"
              }`}
            >
              <Link href="/" className="mx-4" onClick={handleLinkClick}>
                Home
              </Link>
              <Link href="/posts" className="mx-4" onClick={handleLinkClick}>
                Posts
              </Link>
              <Link href="/about" className="mx-4" onClick={handleLinkClick}>
                About Me
              </Link>
              <Link href="/contact" className="mx-4" onClick={handleLinkClick}>
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
