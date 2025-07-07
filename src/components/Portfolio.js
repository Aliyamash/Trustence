import { ChevronRight, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import portfolio from '@/public/images/portfolio1.png'
import shahriarH from '@/public/images/shahriar.png'

export default async function Portfilio() {


  return (
    <div className="bg-[#E9EDEA]">
      <div className="py-24 container">
        <div className="text-center">
          <p className="text-xl font-semibold">Portfolio</p>
          <h1 className="title text-5xl mt-8 mb-6">Our Creative Showcase</h1>
          <p className="text-lg tracking-wide mb-20">
            explore our latest design projects and innovations
          </p>

       
              <div
                className="mx-auto w-full max-w-4xl h-auto rounded-lg mb-24 px-4"
              >
                <div className="relative aspect-[3/1] rounded-xl overflow-hidden shadow-2xl mb-6">
                  <Image
                    src={portfolio}
                    alt="portfolio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
                  />
                </div>
                <div className="text-left">
                  <h2 className="title text-2xl mb-3 text-[#245336] font-semibold">
                    Bringing Pixels to Life with Stunning Animations
                  </h2>
                  <p className="ml-1 mb-6">We craft websites that don’t just look good they move you. Through sleek, purposeful animations and seamless transitions, we turn ordinary interfaces into extraordinary experiences. Each motion tells a story, guiding visitors, sparking curiosity, and keeping them engaged from the very first scroll.</p>
                </div>
                <div className="flex transition duration-500 service-container items-center">
                  <Link
                    className="btn-service pr-1 ml-2 text-lg transition-all duration-500"
                    href={'https://ali-ashrafi.vercel.app/'}
                  >
                    View Project
                  </Link>
                  <ChevronRight className="icon-btn-size transition-all duration-500"/>
                </div>
                
              </div>
              <div
                className="mx-auto w-full max-w-4xl h-auto rounded-lg mb-24 px-4"
              >
                <div className="relative aspect-[3/1] rounded-xl overflow-hidden shadow-2xl mb-6">
                  <Image
                    src={shahriarH}
                    alt="portfolio"
                    fill
                    className="object-cover shadow-2xl shadow-zinc-800"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
                  />
                </div>
                <div className="text-left">
                  <h2 className="title text-2xl mb-3 text-[#245336] font-semibold">
                    Designs That Move and Sell
                  </h2>
                  <p className="ml-1 mb-6">We bring digital experiences to life from sleek portfolios that speak your style to online stores that turn clicks into loyal customers. With fluid animations, intuitive flows, and a sharp eye for detail, we create websites that are not only beautiful, but smart. Whether you're showcasing your craft or selling a product, we make sure every interaction feels intentional and unforgettable.</p>
                </div>
                <div className="flex transition duration-500 service-container items-center">
                  <Link
                    className="btn-service pr-1 ml-2 text-lg transition-all duration-500"
                    href={'https://ali-ashrafi.vercel.app/'}
                  >
                    View Project
                  </Link>
                  <ChevronRight className="icon-btn-size transition-all duration-500"/>
                </div>
                
              </div>  
          

          <div className="flex overflow-hidden relative transition-shadow duration-700 hover:text-white hover:shadow-xl hover:shadow-[#658672] p-btn mt-24 items-center bg-btn px-8 py-4 mx-auto w-fit rounded-xl">
            <div className="transition-all absolute duration-700 top-1.5/3 left-4 z-0 dot bg-[#658672] h-1.5 w-1.5 rounded-full"></div>
            <Link
              className="pr-3 z-10 text-lg transition-all duration-300"
              href={"/projects"}
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
