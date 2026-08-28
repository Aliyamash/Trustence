// components/Discover.jsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Discover() {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const ctx = gsap.context(() => {

      const split = new SplitText(titleRef.current, { type: " chars , words " });
      const chars = split.chars;

    
      gsap.set([chars, buttonRef.current], {
        y: 100,
        opacity: 0,
        rotationX: -180,
      });

  
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: {
          amount: 2,
          from: "start",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

 
      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

 
      
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#245336] py-64 h-fit overflow-hidden"
    >
      <div className="container">
        <div className="mt-24 md:mt-36">
         
          <h2
            ref={titleRef}
            className="title-discover select-none title text-center md:text-7xl text-5xl text-[#fff8ee]"
          >
            The right digital investment begins with a precise conversation.
          </h2>

         
          <div className="flex overflow-hidden relative font-bold transition-shadow duration-700 text-white hover:text-black hover:shadow-xl hover:shadow-[#658672] p-btn mt-32 items-center bg-btn2 px-8 py-4 mx-auto w-fit rounded-xl anime-btn">
            <div className="transition-all absolute duration-700  top-1.5/3 left-4  z-0 dot bg-white h-1.5 w-1.5 rounded-full"></div>
            <div className="transition-all absolute duration-700  top-1.5/3 right-4  z-0 dot bg-white h-1.5 w-1.5 rounded-full"></div>
            <Link
              className="z-10 text-lg transition-all duration-700"
              href={"/discovery"}>
              Request a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
