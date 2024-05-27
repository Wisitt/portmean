"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { navList } from "@/constants/nav-list";
import { useScrollUp } from "@/hooks/useScrollUp";

const Header = () => {
  const pathname = usePathname();

  const isScrollUp = useScrollUp();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Overlay for Navigation Mobile */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`xl:hidden bg-black/50 z-40 fixed inset-0 h-screen ease-in-out transition-opacity duration-[400ms] ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <header
        style={{
          transform: !isMenuOpen
            ? `translateY(${isScrollUp ? "0" : "-100%"})`
            : "",
        }}
        className="h-[68px] fixed w-full z-50 bg-white px-4 transition-transform duration-800"
      >
        <div className="max-w-[1520px] mx-auto bg-white h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl md:text-3xl xl:text-4xl uppercase font-extrabold text-black">
              meansaimaii
            </h1>
          </Link>
          {/* Navigation PC */}
          <nav className="w-auto hidden xl:flex items-center gap-10 uppercase text-2xl">
            {navList.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className={`${item.href === pathname ? "text-primary font-black" : "text-black"} text-center bg-white duration-200 transition-colors hover:text-[#C2665D]`}
              >
                {item.text}
              </Link>
            ))}
          </nav>
          {/* Navigation Mobile */}
          <nav
            className={`${isMenuOpen ? "max-h-[696px]" : "max-h-0"} ease-in-out duration-[400ms] transition-[max-height] overflow-hidden flex xl:hidden flex-col fixed left-0 top-[68px] w-full items-center uppercase text-2xl`}
          >
            {navList.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`${item.href === pathname ? "text-primary font-black" : "text-black"} text-center bg-white w-full p-6 duration-200 transition-colors hover:text-[#C2665D]`}
              >
                {item.text}
              </Link>
            ))}
          </nav>
          <button
            onClick={handleHamburgerClick}
            className="flex flex-col relative gap-2 xl:hidden"
          >
            <div
              className={`w-8 bg-black h-[3px] rounded transition-transform duration-200 ${isMenuOpen ? "rotate-45 translate-y-[11px]" : "rotate-0"}`}
            />
            <div
              className={`w-8 bg-black h-[3px] rounded  transition-[transform_opacity] duration-200 ${isMenuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"}`}
            />
            <div
              className={`w-8 bg-black h-[3px] rounded transition-transform duration-200 ${isMenuOpen ? "-rotate-45 -translate-y-[11px]" : "rotate-0"}`}
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
