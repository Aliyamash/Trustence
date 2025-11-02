// components/TypewriterText.jsx (آپدیت شده برای Word-by-Word + Rise Up)
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from 'gsap/SplitText';

export default function TypewriterText({ text, className, speed = 0.15, delay = 0.5 }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin, SplitText);

    const ctx = gsap.context(() => {
      // اول متن رو کامل نشون بده (بدون typewriter)
      gsap.set(ref.current, { text: { value: text } });

      // Split به کلمات
      const split = new SplitText(ref.current, { type: "words,chars" });
      const words = split.words; 

    
      gsap.from(words, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2, 
        delay: delay,
      });
    });

    return () => ctx.revert();
  }, [text, speed, delay]);

  return <h1 ref={ref} className={className} />;
}