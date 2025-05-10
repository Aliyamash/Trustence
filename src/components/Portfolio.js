import { ChevronRight, Layers } from "lucide-react";
import portfolio1 from '@/public/images/portfolio1.png'
import portfolio2 from '@/public/images/portfolio2.png'
import Image from "next/image";
import Link from "next/link";

export default function Portfilio() {
  return (
    <div className="bg-[#E9EDEA]">
      <div className="py-24 container">
        <div className="text-center">
          <p className="text-xl font-semibold">Portfolio</p>
          <h1 className="title text-5xl mt-8 mb-6">Our Creative Showcase</h1>
          <p className="text-lg tracking-wide mb-20">
            explore our latest design projects and innovations
          </p>

          <div className="mx-auto w-fit h-full rounded-lg mb-24">
            <Image
              src={portfolio1}
              className="rounded-xl  object-contain mx-auto mb-4"
              alt="portfolio"
              width={1000}
              height={300}
            />
            <div className="text-left">
              <h2 className="title text-2xl mb-3 text-[#245336] font-semibold">
                Modern Animated Site
              </h2>
              <p className="ml-1 mb-6">
                ECaptivate users with sleek, interactive animations built using
                GSAP, Three.js & CSS3.
              </p>
            </div>
            <div className="flex transition duration-500 service-container items-center">
              <Link
                className="btn-service pr-1 ml-2 text-lg transition-all duration-500 "
                href={"https://ali-ashrafi.vercel.app/"}
              >
                View Project
              </Link>
              <ChevronRight className="icon-btn-size transition-all duration-500" />
            </div>
          </div>

          <div className="mx-auto w-fit h-full rounded-lg mb-16">
            <Image
              src={portfolio2}
              className="rounded-xl  object-contain mx-auto mb-4"
              alt="portfolio"
              width={1000}
              height={300}
            />
            <div className="text-left ml-6">
              <h2 className="title text-2xl mb-3 text-[#245336] font-semibold">
                Modern E-Commerce and Porfolio Site
              </h2>
              <p className="ml-1 mb-6">
                A sleek e-commerce & portfolio platform to showcase your brand
                and boost sales—perfect for artists, designers, and
                entrepreneurs
              </p>
            </div>
            <div className="flex transition duration-500 service-container items-center ml-6">
              <Link
                className="btn-service pr-1 ml-2 text-lg transition-all duration-500 "
                href={"https://ali-ashrafi.vercel.app/"}
              >
                View Project
              </Link>
              <ChevronRight className="icon-btn-size transition-all duration-500" />
            </div>

            
          </div>

          <div className="flex overflow-hidden relative transition-shadow duration-700 hover:text-white hover:shadow-xl hover:shadow-[#658672] p-btn mt-24 items-center bg-btn px-8 py-4 mx-auto w-fit rounded-xl">
            <div className="transition-all absolute duration-700  top-1.5/3 left-4  z-0 dot bg-[#658672] h-1.5 w-1.5 rounded-full"></div>
              <Link
                className="pr-3 z-10 text-lg transition-all duration-300"
                href={"/portfolio"}
              >
                View all
              </Link>
              <Layers className="icon-btn-size2 z-10" />
            </div>

        </div>
      </div>
    </div>
  );
}
