// components/Header.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import Logo from "./Logo";
import Link from "next/link";
import BtnDiscover from "../BtnDiscover";

const NavLinks = ({ onLinkClick }) => {
  const handleClick = () => {
    if (onLinkClick) onLinkClick();
  };

  return (
    <>
      <Link href="/" onClick={handleClick} className="hover:text-[#CBA792] transition">
        Home
      </Link>
      <Link href="/aboutus" onClick={handleClick} className="hover:text-[#CBA792] transition">
        About Us
      </Link>
      <Link href="/service" onClick={handleClick} className="hover:text-[#CBA792] transition">
        Service
      </Link>
      <Link href="/contact" onClick={handleClick} className="hover:text-[#CBA792] transition">
        Contact Us
      </Link>
      <Link href="/projects" onClick={handleClick} className="hover:text-[#CBA792] transition">
        Work
      </Link>
      <div onClick={handleClick}>
        <BtnDiscover />
      </div>
    </>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // انیمیشن ورود هدر از بالا
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  // انیمیشن منوی موبایل (وقتی باز می‌شه)
  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, [isOpen]);

  return (
    <>
      {/* هدر اصلی - کارت گرد و انیمیشنی */}
      <header
        ref={headerRef}
        className="fixed top-4 left-4 right-4 bg-black/80 backdrop-blur-xl rounded-xl shadow-2xl z-50 p-5 "
      >
        <div className="flex justify-between items-center">
          <Logo />

          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-zinc-200 text-shadow">
            <NavLinks />
          </nav>

          <button
            onClick={toggleNavbar}
            className="md:hidden text-[#658672] z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* منوی موبایل - انیمیشن pop-out */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed top-28 left-4 right-4 bg-white text-black p-6 rounded-xl shadow-2xl z-40 flex flex-col gap-5 items-center"
        >
          <NavLinks onLinkClick={closeMenu} />
        </div>
      )}
    </>
  );
}