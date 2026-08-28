"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronsDown } from "lucide-react";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  const buttonRef = useRef(null);
  const scroll = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    );
    
  }, []);
  return (
    <>
    
      <div className="gradiant-bg lg:py-60 md:py-44 py-40 h-auto">
        <div className="container">
          {/* hero title (nich) */}
          <div className="text-center mb-8 md:mb-20">
            <h1 className="title mt-24 md:text-7xl pb-6 text-pretty text-5xl text-[#CBA792] font-semibold">
              Bespoke Web Design, Development &amp; Automation
            </h1>

            {/* انیمیشن تایپ فقط روی این خط */}
            <TypewriterText
              text="A boutique digital team shaping high-performance websites, custom platforms, and intelligent workflows."
              className="title lightColor font-semibold md:text-4xl text-3xl pb-6 text-pretty"
              speed={0.06}
              delay={1}
            />
          </div>

          {/* discription */}
          <p className="text-xl text-white text-center">
            Considered strategy. Refined execution. Digital systems built to earn attention, confidence, and long-term value.
          </p>

          {/* btns */}

          <div className="my-12 text-center">
            <Link
              ref={buttonRef}
              href="/discovery"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#FFF8EE] px-8 py-3 text-lg font-medium text-[#114422] border-2 hover:border-[#FFF8EE] transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#FFF8EE]/30"
            >
              {/* پس‌زمینه متحرک */}
              <span className="absolute inset-0 bg-[#0a3619] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>

              {/* متن با افکت گلو */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#FFF8EE] flex items-center gap-2">
                Request a Discovery Call
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>

              {/* افکت کلیک (ripple) */}
              <span className="pointer-events-none absolute -inset-4 scale-0 rounded-full bg-white/30 opacity-0 transition-all duration-300 group-active:scale-100 group-active:opacity-100"></span>
            </Link>
          </div>
           <div className="w-fit mx-auto">
            <ChevronsDown ref={scroll} className="icon-hero-size anime-btn transition-all duration-500"/>
           </div>
        </div>
      </div>
    </>
  );
}
