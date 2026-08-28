'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';


gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export default function HeadAbout() {
  const textBlockRef = useRef(null);

  useEffect(() => {
    const block = textBlockRef.current;
    if (!block) return;

    const p = block.querySelector('p');
    if (!p) return;


    const split = new SplitText(p, {
      type: 'chars , words',
      charsClass: 'char',
    });

 
    split.chars.forEach(char => {
      gsap.set(char, {
        attr: { 'data-content': char.innerHTML },
      });
    });
    

 
    let lastCall = 0;
    const handlePointerMove = (e) => {
      const now = Date.now();
      if (now - lastCall < 16) return;
      lastCall = now;

      split.chars.forEach(char => {
        const rect = char.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          gsap.to(char, {
            overwrite: true,
            duration: 1.2 - dist / 30,
            scrambleText: { 
              text: char.dataset.content,
              chars: '.:.',
              speed: 0.5,
            },
            ease: 'none',
          });
        }
      });
    };

    block.addEventListener('pointermove', handlePointerMove);

    return () => {
      block.removeEventListener('pointermove', handlePointerMove);
      split.revert(); 
    };
  }, []);

  return (
    <div className="bg-[#060e09] py-52 md:py-60">
      <div className="container">
        <div className="flex flex-col items-center justify-between">
          <div className="text-white leading-[1.5] lg:leading-[1.2] text-center md:text-5xl lg:text-7xl title font-bold text-3xl mb-24">
            <h1>Meet the Trustence Web Design Team</h1>
          </div>
          <div ref={textBlockRef} className="text-white text-center font-medium text-pretty sm:w-3/5 my-5">
            <p className="text-lg md:text-xl select-none">
              We bring together strategy, design, development, marketing, and
              visual storytelling to create useful digital experiences. Our
              mission is to earn trust through clear communication, careful
              execution, and measurable business value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
