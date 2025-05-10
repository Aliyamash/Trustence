import Image from "next/image";
import ali from "@/public/images/ali2.jpg";
import maziar from "@/public/images/maziar.jpg";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Team() {
  return (
    <div className="bg-[#0A1810] py-24 md:py-52 text-white">
      <div className="container">
        <div className="mb-32">
          <p className="font-bold">Together</p>
          <h1 className="text-6xl mt-4 mb-6 title font-bold">Our Team</h1>
          <h2>We stand by our word</h2>
          <h2>Trust us and meet the passionate team behind every project.</h2>
        </div>
        <div className="grid auto-cols-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center gap-24 md:gap-4">
          {/* card */}
          <div>
            {/* image card */}
            <div className="w-80 md:w-[19rem] h-auto mb-4 ">
              <Image
                className="max-h-full max-w-full rounded-2xl object-contain mx-auto shadow-2xl shadow-white"
                src={ali}
              />
            </div>
            {/* title card */}
            <div className="py-2">
              <h1 className="font-bold text-xl">Ali Ashrafi</h1>
              <p className="text-lg">software Engineer</p>
            </div>
            {/* descirption */}
            <p className="w-[80%] my-4">
              He is one of the agency's best programmers, responsible for
              creative design and ideation of special animations.
            </p>
            {/* sosial media */}
            <div className="flex pt-8 gap-8">
              <Link href={"https://www.youtube.com"}>
                <Github className="icon-btn-size" />
              </Link>
              <Link href={"https://www.youtube.com"}>
                <Twitter className="icon-btn-size" />
              </Link>
              <Link href={"https://www.youtube.com"}>
                <Linkedin className="icon-btn-size" />
              </Link>
            </div>
          </div>

          <div>
            {/* image card */}
            <div className="w-80 md:w-[19rem] h-auto mb-4">
              <Image
                className="max-h-full max-w-full rounded-2xl object-contain mx-auto shadow-2xl shadow-[#fff8ee]"
                src={maziar}
              />
            </div>
            {/* title card */}
            <div className="py-2">
              <h1 className="font-bold text-xl">Maziar Dehghani</h1>
              <p className="text-lg">software Engineer</p>
            </div>
            {/* descirption */}
            <p className="w-[80%] my-4">
              The architect of your digital core crafting robust systems with
              precision engineered code and intelligent design.
            </p>
            {/* sosial media */}
            <div className="flex pt-8 gap-8">
              <Link href={"https://www.youtube.com"}>
                <Github className="icon-btn-size" />
              </Link>
              <Link href={"https://www.youtube.com"}>
                <Twitter className="icon-btn-size" />
              </Link>
              <Link href={"https://www.youtube.com"}>
                <Linkedin className="icon-btn-size" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-64">
          <h1 className="text-4xl">We're Hiring!</h1>
          <p className="mb-8 mt-4 text-lg">
            Join our family and become exceptional.
          </p>
          <div className="flex overflow-hidden relative font-bold transition-shadow duration-700 text-white hover:text-black hover:shadow-xl hover:shadow-[#658672] p-btn items-center bg-btn2 px-8 py-4 w-fit rounded-xl">
            <div className="transition-all absolute duration-700 hover:scale-[25rem] top-1.5/3 left-4  z-0 dot bg-white h-1.5 w-1.5 rounded-full"></div>
            <Link
              className="z-10 text-lg transition-all duration-700"
              href={"/discover"}
            >
              Open positions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
