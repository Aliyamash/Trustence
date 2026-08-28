import { useState } from "react";
import { Menu, X } from "lucide-react";
import BtnDiscover from "../BtnDiscover";
import Link from "next/link";

const NavLinks = ({ onLinkClick }) => {
  const handleClick = () => {
    if (onLinkClick) onLinkClick();
  };

  return (
    <>
      <Link href="/" onClick={handleClick}>Home</Link>
      <Link href="/aboutus" onClick={handleClick}>About Us</Link>
      <Link href="/service" onClick={handleClick}>Services</Link>
      <Link href="/contact" onClick={handleClick}>Contact</Link>
      <Link href="/projects" onClick={handleClick}>Work</Link>
      <div onClick={handleClick}>
        <BtnDiscover />
      </div>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
 
      <nav className="fixed top-4 left-4 right-4 bg-black/30 backdrop-blur-md rounded-2xl shadow-2xl z-50 p-2 flex justify-between items-center">
        {/* دسکتاپ */}
        <div className="hidden md:flex w-full justify-between items-center text-zinc-200 text-shadow md:gap-6 lg:gap-12">
          <NavLinks />
        </div>

        {/* موبایل - دکمه همبرگر */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-[#b8e2c9] z-50">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* منوی موبایل - زیر هدر، با فاصله */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-white text-black p-4 rounded-xl shadow-2xl z-40 flex flex-col gap-6 items-center">
          <NavLinks onLinkClick={closeMenu} />
        </div>
      )}
    </>
  );
};

export default Nav;
