"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Instagram, Linkedin, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

const links = [["home", "/"], ["about", "/aboutus"], ["services", "/service"], ["work", "/projects"], ["contact", "/contact"]];

export default function Header() {
  const { locale, isRtl } = useLocale();
  const { nav } = getCopy(locale);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const headerRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) gsap.fromTo(headerRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    if (isOpen && panelRef.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) gsap.fromTo(panelRef.current.querySelectorAll("[data-menu-item]"), { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: "power3.out" });
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [isOpen]);

  const active = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header ref={headerRef} className={`fixed inset-x-3 top-3 z-50 mx-auto max-w-[1500px] rounded-[1.35rem] border border-white/10 bg-[#07120c]/88 text-white shadow-2xl shadow-black/15 backdrop-blur-2xl transition-all duration-300 md:inset-x-5 ${compact ? "px-4 py-2 md:px-5" : "px-4 py-3 md:px-6 md:py-4"}`}>
        <div className="flex items-center justify-between gap-5">
          <Logo />
          <nav className="hidden items-center gap-1 text-sm font-semibold md:flex" aria-label={locale === "fa" ? "پیمایش اصلی" : "Primary navigation"}>
            {links.map(([key, href]) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} className={`relative rounded-xl px-3 py-2 transition lg:px-4 ${active(href) ? "bg-white/10 text-[#e6c9b6]" : "text-white/72 hover:bg-white/5 hover:text-white"}`}>{nav[key]}</Link>)}
            <Link href="/discovery" className="ms-2 inline-flex items-center gap-2 rounded-xl bg-[#fff8ee] px-4 py-2.5 font-bold text-[#07120c] transition hover:-translate-y-0.5 hover:bg-white">{nav.call}<ArrowUpRight className={`h-4 w-4 ${isRtl ? "-rotate-90" : ""}`} /></Link>
            <LanguageSwitcher compact />
          </nav>
          <div className="flex items-center gap-2 md:hidden"><LanguageSwitcher compact /><button type="button" onClick={() => setIsOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#e6c9b6]" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isRtl ? "باز و بسته کردن منو" : "Toggle menu"}>{isOpen ? <X /> : <Menu />}</button></div>
        </div>
      </header>

      <div id="mobile-navigation" aria-hidden={!isOpen} className={`fixed inset-0 z-40 bg-[#061009] text-white transition duration-300 md:hidden ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div ref={panelRef} className="flex min-h-full flex-col px-6 pb-8 pt-28">
          <p data-menu-item className="mb-7 text-xs font-bold uppercase tracking-[.22em] text-[#cba792]">Trustence · Digital studio</p>
          <nav className="flex flex-col" aria-label={locale === "fa" ? "منوی موبایل" : "Mobile navigation"}>
            {links.map(([key, href], index) => <Link data-menu-item key={href} href={href} onClick={() => setIsOpen(false)} className={`group flex items-center justify-between border-b border-white/10 py-4 text-3xl font-bold ${active(href) ? "text-[#e6c9b6]" : "text-white"}`}><span>{nav[key]}</span><span className="font-mono text-xs font-normal text-white/35">0{index + 1}</span></Link>)}
          </nav>
          <div data-menu-item className="mt-auto pt-9">
            <Link href="/discovery" onClick={() => setIsOpen(false)} className="flex w-full items-center justify-between rounded-2xl bg-[#fff8ee] px-5 py-4 font-bold text-[#07120c]">{nav.call}<ArrowUpRight className={isRtl ? "-rotate-90" : ""} /></Link>
            <div className="mt-6 flex items-center justify-between gap-3 text-xs text-white/55"><a href="mailto:trustenceagency@gmail.com">trustenceagency@gmail.com</a><div className="flex gap-4"><a aria-label="Instagram" href="https://www.instagram.com/trustence.official/"><Instagram className="h-5 w-5" /></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/trustence-agency-b13a9038a"><Linkedin className="h-5 w-5" /></a></div></div>
          </div>
        </div>
      </div>
    </>
  );
}
