// components/TypewriterText.jsx (آپدیت شده برای Word-by-Word + Rise Up)
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from 'gsap/SplitText';
import { useLocale } from '@/i18n/LocaleProvider';

export default function TypewriterText({ text, className, speed = 0.15, delay = 0.5 }) {
  const ref = useRef(null);
  const { locale, isRtl } = useLocale();

  useEffect(() => {
    gsap.registerPlugin(TextPlugin, SplitText);

    const ctx = gsap.context(() => {
      // اول متن رو کامل نشون بده (بدون typewriter)
      gsap.set(ref.current, { text: { value: text } });

      const split = new SplitText(ref.current, { type: locale === "fa" ? "words" : "words,chars" });
      const words = split.words; 
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(words, {
          x: isRtl ? 10 : -10,
          y: 18,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: { amount: Math.max(0.35, speed * words.length), from: isRtl ? "end" : "start" },
          delay,
        });
      });
      return () => media.revert();
    });

    return () => ctx.revert();
  }, [text, speed, delay, locale, isRtl]);

  return <p ref={ref} className={className}>{text}</p>;
}
