// components/Header.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import Logo from "./Logo";
import Link from "next/link";
import BtnDiscover from "../BtnDiscover";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

const NavLinks = ({ onLinkClick }) => {
  const { locale } = useLocale();
  const { nav } = getCopy(locale);
  const handleClick = () => {
    if (onLinkClick) onLinkClick();
  };

  return (
    <>
      <Link href="/" onClick={handleClick} className="hover:text-[#CBA792] transition">
        {nav.home}
      </Link>
      <Link href="/aboutus" onClick={handleClick} className="hover:text-[#CBA792] transition">
        {nav.about}
      </Link>
      <Link href="/service" onClick={handleClick} className="hover:text-[#CBA792] transition">
        {nav.services}
      </Link>
      <Link href="/contact" onClick={handleClick} className="hover:text-[#CBA792] transition">
        {nav.contact}
      </Link>
      <Link href="/projects" onClick={handleClick} className="hover:text-[#CBA792] transition">
        {nav.work}
      </Link>
      <div onClick={handleClick}>
        <BtnDiscover />
      </div>
    </>
  );
};

export default function Header() {
  const { isRtl } = useLocale();
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
        { x: isRtl ? 36 : -36, y: -16, opacity: 0, scale: 0.97 },
        { x: 0, y: 0, opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" }
      );
    }
  }, [isOpen, isRtl]);

  return (
    <>
      {/* هدر اصلی - کارت گرد و انیمیشنی */}
      <header
        ref={headerRef}
        className="fixed left-4 right-4 top-4 z-50 rounded-2xl border border-white/10 bg-[#07120c]/90 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-4"
      >
        <div className="flex justify-between items-center">
          <Logo />

          <nav className="hidden items-center gap-5 text-sm font-semibold text-zinc-200 text-shadow md:flex lg:gap-8">
            <NavLinks />
            <LanguageSwitcher compact />
          </nav>

          <div className="flex items-center gap-2 md:hidden"><LanguageSwitcher compact /><button onClick={toggleNavbar} className="z-50 grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-[#86a58f]" aria-label={isRtl ? "باز و بسته کردن منو" : "Toggle menu"}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button></div>
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
