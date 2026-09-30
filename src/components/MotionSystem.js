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

    let frame;
    let timer;
    let disposed = false;

    const initialiseMotion = () => {
      // MotionSystem sits next to streamed Server Components. Waiting for the
      // load event and two paint frames prevents GSAP from adding inline
      // styles while React is still hydrating those sibling subtrees.
      timer = window.setTimeout(() => {
        frame = requestAnimationFrame(() => requestAnimationFrame(() => {
          if (disposed) return;
          window.__trustenceMotionContext?.revert();
      const ctx = gsap.context(() => {
        document.querySelectorAll("[data-motion='section']").forEach((element, index) => {
          const variants = [
            { y: 28, x: 0 },
            { y: 18, x: index % 2 ? 18 : -18 },
            { y: 0, x: 0, scale: .985 },
          ];
          gsap.fromTo(element, { ...variants[index % variants.length], opacity: 0 }, { y: 0, x: 0, scale: 1, opacity: 1, duration: 0.72, ease: "power3.out", clearProps: "transform,opacity,willChange", scrollTrigger: { trigger: element, start: "top 90%", once: true } });
        });
        document.querySelectorAll("[data-motion-group]").forEach((group) => {
          gsap.fromTo(Array.from(group.children), { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.58, stagger: 0.065, ease: "power3.out", clearProps: "transform,opacity,willChange", scrollTrigger: { trigger: group, start: "top 88%", once: true } });
        });
      });
      ScrollTrigger.refresh();
      window.__trustenceMotionContext = ctx;
        }));
      }, 120);
    };

    if (document.readyState === "complete") initialiseMotion();
    else window.addEventListener("load", initialiseMotion, { once: true });

    return () => {
      disposed = true;
      window.removeEventListener("load", initialiseMotion);
      window.clearTimeout(timer);
      if (frame) cancelAnimationFrame(frame);
      window.__trustenceMotionContext?.revert();
      delete window.__trustenceMotionContext;
    };
  }, [pathname]);

  return null;
}
