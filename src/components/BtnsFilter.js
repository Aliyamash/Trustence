import { items } from "./mainItems";

export default function BtnsFilter({ menuItems , filterItems , setItem }) {
  return (
    <>
      <ul className="flex text-[#46c972] md:font-bold sm:text-xl justify-center flex-wrap gap-6 md:gap-16">
        <li className="hover:text-[#1d462b] cursor-pointer transition duration-300 pb-1 md:pb-2"
        onClick={() => setItem(items)}
        >
          All
        </li>
        {menuItems.map((val , index) => (
            
          <li key={index} className="hover:text-[#1d462b] cursor-pointer transition duration-300 pb-1 md:pb-2"
          onClick={() => filterItems(val)}
          >
            {val}
          </li>
        ))}
      </ul>
    </>
  );
}
