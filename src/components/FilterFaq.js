import { useState } from "react";

export default function FilterFaq({ faqItems, filterItems }) {
const [activeHeadFilter , setActiveHeadFilter] = useState()
  setActiveHeadFilter === faqItems.name
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 -mt-16 justify-center">
      {faqItems.map((cat, index) => {
        const Icon = cat.icon;
          
        return (
          <div
            key={index}
            onClick={() => filterItems(cat.name)}
            className={`flex flex-col cursor-pointer  bg-white justify-between text-zinc-400  py-2 px-2 sm:py-6 sm:px-8 md:py-12 md:px-20 shadow-2xl items-center gap-2 rounded-3xl hover:text-black transition duration-500
            ${activeHeadFilter === cat.name  ? "bg-zinc-900 text-white"
    : "bg-white text-zinc-400 hover:text-black"}
            `}
          >
            <Icon className="w-6 h-6 md:w-12 lg:h-12" />
            <span className="tracking-widest md:text-xl font-bold">
              {cat.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
