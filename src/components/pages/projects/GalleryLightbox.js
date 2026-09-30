"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export default function GalleryLightbox({ images, projectTitle, fa = false }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((value) => (value + 1) % images.length);
      if (event.key === "ArrowLeft") setActive((value) => (value - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [active, images.length]);

  return <>
    <div data-motion-group className="grid gap-5 md:grid-cols-2">
      {images.map((image, index) => {
        const caption = image.alt || (fa ? `نمای ${index + 1} از پروژه ${projectTitle}` : `View ${index + 1} from ${projectTitle}`);
        const featured = index === 0 && images.length % 2 === 1;
        return <figure key={image.id || image.path} className={`group ${featured ? "md:col-span-2" : ""}`}>
          <button type="button" onClick={() => setActive(index)} className={`relative block w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1811] text-start shadow-2xl shadow-black/25 ${featured ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/3]"}`} aria-label={fa ? `بزرگ‌نمایی ${caption}` : `Enlarge ${caption}`}>
            <Image src={image.path} alt="" aria-hidden="true" fill sizes="(max-width: 768px) 100vw, 50vw" className="scale-110 object-cover opacity-25 blur-2xl" />
            <div className="absolute inset-3 overflow-hidden rounded-2xl border border-white/10 bg-[#07120c]/55 md:inset-5"><Image src={image.path} alt={caption} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain transition duration-700 group-hover:scale-[1.025]" /></div>
            <span className="absolute end-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#07120c]/70 text-white backdrop-blur transition group-hover:bg-white group-hover:text-[#07120c]"><Expand className="h-4 w-4" /></span>
          </button>
          <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-white/45"><span>{caption}</span><span className="font-mono text-[10px]">{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span></figcaption>
        </figure>;
      })}
    </div>

    {active !== null && <div role="dialog" aria-modal="true" aria-label={fa ? "نمایش بزرگ تصاویر پروژه" : "Project image viewer"} className="fixed inset-0 z-[100] grid place-items-center bg-[#030806]/95 p-4 backdrop-blur-xl md:p-10">
      <button type="button" onClick={() => setActive(null)} className="absolute end-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white" aria-label={fa ? "بستن" : "Close"}><X /></button>
      <div className="relative h-[78vh] w-full max-w-7xl"><Image src={images[active].path} alt={images[active].alt || projectTitle} fill priority sizes="100vw" className="object-contain" /></div>
      <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-5 text-white"><p className="max-w-2xl text-sm text-white/60">{images[active].alt || projectTitle}</p><div className="flex gap-2"><button type="button" onClick={() => setActive((active - 1 + images.length) % images.length)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10" aria-label={fa ? "تصویر قبلی" : "Previous image"}><ChevronLeft className={fa ? "rotate-180" : ""} /></button><button type="button" onClick={() => setActive((active + 1) % images.length)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10" aria-label={fa ? "تصویر بعدی" : "Next image"}><ChevronRight className={fa ? "rotate-180" : ""} /></button></div></div>
    </div>}
  </>;
}
