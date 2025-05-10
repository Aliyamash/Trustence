"use client";
import { useState } from "react";
import { items } from "@/components/mainItems";
import CardService from "@/components/CardService";
import BtnsFilter from "@/components/BtnsFilter";

export default function CoreService() {
  const [item, setItem] = useState(items);

  const menuItems = [...new Set(items.map((val) => val.category))];

  const filterItems = (category) => {
    const newItems = items.filter((newval) => newval.category === category);
    setItem(newItems)
  };

  return (
    <>
      <div className="bg-[#060e09] -mt-1 py-44">
        <div className="container">
          <div>
            <div>
              <h1 className="text-white relative font-bold text-4xl md:text-6xl text-center tracking-widest">
                Service Position
                <span className="absolute text-black font-extrabold shadow-green-950 shadow-xl text-sm -top-9 right-0 sm:right-12 md:right-16 lg:right-1/4 lg:-top-9 rotate-12 border-red py-2 px-4 rounded-xl bg-green-400">Essential</span>
              </h1>
            </div>
            <div className="my-16">
              <ul className="flex text-[#46c972] md:font-bold sm:text-xl justify-between sm:justify-center gap-6 md:gap-16">
                <BtnsFilter 
                menuItems={menuItems}
                filterItems={filterItems}
                setItem={setItem}
                 />
              </ul>

              <div className="grid place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-16 mt-24">
                <CardService item={item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
