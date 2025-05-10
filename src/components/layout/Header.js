"use client";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className=" bg-transparent -mb-28 backdrop-blur-xl md:shadow-xl sticky top-0 z-[50] mx-auto w-full">
      <div className=" px-8 flex flex-wrap py-6 justify-between items-center">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
