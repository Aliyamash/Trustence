import { useState } from "react";

export default function FilterFaq({ faqItems, filterItems , activeCategory }) {


  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 -mt-16 justify-center">
      {faqItems.map((cat) => {
        const Icon = cat.icon;
 
        const isActive = activeCategory === cat.name
        return (
          <div
            key={cat.name}
            onClick={() => filterItems(cat.name)}
            className={`flex relative flex-col z-50 cursor-pointer justify-between py-2 px-2 sm:py-6 sm:px-8 md:py-12 md:px-20  items-center gap-2 rounded-3xl transition duration-200
              ${isActive ? "text-black bg-white shadow-2xl shadow-[#0c1d13]" : "text-zinc-400 bg-zinc-200 shadow-2xl shadow-[#0d140eb7]"}
            `}
            
            >
              <div className={`absolute h-10 w-10 transition-colors duration-700 bg-white rotate-45 -bottom-4 -z-10
                ${isActive ? "block" : "hidden"}
                `}></div>
            <Icon className={`w-6 h-6 md:w-12 lg:h-12
              ${isActive ? "icon-faq" : ""}
              `} />
            <span className="tracking-widest md:text-xl font-bold select-none
            ">
              {cat.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
