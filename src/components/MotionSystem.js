"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionSystem() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const frame = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        document.querySelectorAll("[data-motion='section']").forEach((element) => {
          gsap.fromTo(element, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
        });
        document.querySelectorAll("[data-motion-group]").forEach((group) => {
          gsap.fromTo(Array.from(group.children), { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: group, start: "top 86%", once: true } });
        });
      });
      ScrollTrigger.refresh();
      window.__trustenceMotionContext = ctx;
    });
    return () => { cancelAnimationFrame(frame); window.__trustenceMotionContext?.revert(); delete window.__trustenceMotionContext; };
  }, [pathname]);

  return null;
}
