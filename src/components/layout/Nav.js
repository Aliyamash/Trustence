import { useState } from "react";
import { Menu, X } from "lucide-react";
import BtnDiscover from "../BtnDiscover";
const { default: Link } = require("next/link");

const NavLinks = () => {
  return (
    <>
 
          <Link href="/">Home</Link>
          <Link  href="/aboutus">About Us</Link>
          <Link  href="/service">Service</Link>
          <Link  href="/contact">Contact Us</Link>
          <Link  href="/faqs">Help</Link>
          <BtnDiscover />
    </>
  );
};
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className=" flex justify-end">
        <div className="animLinks hidden text-zinc-200  text-shadow w-full md:flex justify-between items-center md:gap-8 lg:gap-16">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X className="text-[#658672]" /> : <Menu className="text-[#658672]" />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="mt-6 flex flex-col bg-white text-black p-6 rounded-xl gap-6 items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
};
export default Nav;
