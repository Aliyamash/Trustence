import { getFetch } from "@/utils/fetch";
import { getBlurDataUrl } from "@/utils/helper";
import { ArrowRight, Link } from "lucide-react";
import nahal from '@/public/images/nahal-hero.webp'
import ifund from '@/public/images/ifund-hero.webp'
import panel from '@/public/images/panel3.webp'
import portfolio from '@/public/images/portfolio1.png'
import shahriar from '@/public/images/shahriar.png'
import shopping from '@/public/images/shopping2.webp'
import Image from "next/image";

export default async function Projects() {
 

  return (
    <>
      <section className="mx-16 pb-64">
        <h2 className="text-3xl font-bold text-white mb-6">Our Projects</h2>

      
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-12">
           {/* nahal */}
              <div
                className="group relative bg-zinc-300 w-full max-w-[26rem] h-[18rem] md:h-[20rem] rounded-3xl overflow-hidden shadow-zinc-600 shadow-xl bg-project transition duration-500"
              >
                <Image
                  src={nahal}
                  alt='Professional Service Websites'
                  width="500"
                  height="650"
                  sizes="100vw"
                  className="w-[90%] h-full object-contain mx-auto"
                  placeholder="blur"
                  blurDataURL={getBlurDataUrl()}
                />
                <div className="bg-gray-project backdrop-blur-sm absolute top-0 left-0 right-0 h-full w-full transition duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-col items-center justify-center h-full px-6 text-center space-y-4">
                    <h1 className="text-2xl title font-bold text-white">
                      Professional Service Websites
                    </h1>
                    <p className="text-white text-sm opacity-80 leading-relaxed">
                      Delivering trust and clear user journeys to convert visitors into clients.
                    </p>
                    <a
                      href={`#`}
                      className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1C422B] hover:text-white transition duration-500"
                    >
                      View Project
                      <Link className="ml-2 inline" size={20} />
                    </a>
                  </div>
                </div>
              </div>
           {/* ifundّ */}
              <div
                className="group relative bg-zinc-300 w-full max-w-[26rem] h-[18rem] md:h-[20rem] rounded-3xl overflow-hidden shadow-zinc-600 shadow-xl bg-project transition duration-500"
              >
                <Image
                  src={ifund}
                  alt='Specialized Financial & Stock Market Websites'
                  width="500"
                  height="650"
                  sizes="100vw"
                  className="w-[90%] h-full object-contain mx-auto"
                  placeholder="blur"
                  blurDataURL={getBlurDataUrl()}
                />
                <div className="bg-gray-project backdrop-blur-sm absolute top-0 left-0 right-0 h-full w-full transition duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-col items-center justify-center h-full px-6 text-center space-y-4">
                    <h1 className="text-2xl title font-bold text-white">
                      Specialized Financial & Stock Market Websites
                    </h1>
                    <p className="text-white text-sm opacity-80 leading-relaxed">
                      Focused on transparency, smooth UX, and high security for investors.
                    </p>
                    <a
                      href={`#`}
                      className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1C422B] hover:text-white transition duration-500"
                    >
                      View Project
                      <Link className="ml-2 inline" size={20} />
                    </a>
                  </div>
                </div>
              </div>
           {/* panel */}
              <div
                className="group relative bg-zinc-300 w-full max-w-[26rem] h-[18rem] md:h-[20rem] rounded-3xl overflow-hidden shadow-zinc-600 shadow-xl bg-project transition duration-500"
              >
                <Image
                  src={panel}
                  alt='Advanced Admin Panel Designs'
                  width="500"
                  height="650"
                  sizes="100vw"
                  className="w-[90%] h-full object-contain mx-auto"
                  placeholder="blur"
                  blurDataURL={getBlurDataUrl()}
                />
                <div className="bg-gray-project backdrop-blur-sm absolute top-0 left-0 right-0 h-full w-full transition duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-col items-center justify-center h-full px-6 text-center space-y-4">
                    <h1 className="text-2xl title font-bold text-white">
                      Advanced Admin Panel Designs
                    </h1>
                    <p className="text-white text-sm opacity-80 leading-relaxed">
                      Creating powerful dashboards with intuitive and efficient user experience.
                    </p>
                    <a
                      href={`#`}
                      className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1C422B] hover:text-white transition duration-500"
                    >
                      View Project
                      <Link className="ml-2 inline" size={20} />
                    </a>
                  </div>
                </div>
              </div>
           {/* portfolio */}
              <div
                className="group relative bg-zinc-300 w-full max-w-[26rem] h-[18rem] md:h-[20rem] rounded-3xl overflow-hidden shadow-zinc-600 shadow-xl bg-project transition duration-500"
              >
                <Image
                  src={portfolio}
                  alt='Unique & Professional Portfolio Websites'
                  width="500"
                  height="650"
                  sizes="100vw"
                  className="w-[90%] h-full object-contain mx-auto"
                  placeholder="blur"
                  blurDataURL={getBlurDataUrl()}
                />
                <div className="bg-gray-project backdrop-blur-sm absolute top-0 left-0 right-0 h-full w-full transition duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-col items-center justify-center h-full px-6 text-center space-y-4">
                    <h1 className="text-2xl title font-bold text-white">
                      Unique & Professional Portfolio Websites
                    </h1>
                    <p className="text-white text-sm opacity-80 leading-relaxed">
                      Showcasing creativity and professionalism tailored to individual brands.
                    </p>
                    <a
                      href={`#`}
                      className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1C422B] hover:text-white transition duration-500"
                    >
                      View Project
                      <Link className="ml-2 inline" size={20} />
                    </a>
                  </div>
                </div>
              </div>
           {/* shahriar */}
              <div
                className="group relative bg-zinc-300 w-full max-w-[26rem] h-[18rem] md:h-[20rem] rounded-3xl overflow-hidden shadow-zinc-600 shadow-xl bg-project transition duration-500"
              >
                <Image
                  src={shahriar}
                  alt='Hybrid E-commerce & Portfolio Websites'
                  width="500"
                  height="650"
                  sizes="100vw"
                  className="w-[90%] h-full object-contain mx-auto"
                  placeholder="blur"
                  blurDataURL={getBlurDataUrl()}
                />
                <div className="bg-gray-project backdrop-blur-sm absolute top-0 left-0 right-0 h-full w-full transition duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-col items-center justify-center h-full px-6 text-center space-y-4">
                    <h1 className="text-2xl title font-bold text-white">
                      Hybrid E-commerce & Portfolio Websites
                    </h1>
                    <p className="text-white text-sm opacity-80 leading-relaxed">
                      Blending product showcases with personal branding for maximum impact.
                    </p>
                    <a
                      href={`#`}
                      className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1C422B] hover:text-white transition duration-500"
                    >
                      View Project
                      <Link className="ml-2 inline" size={20} />
                    </a>
                  </div>
                </div>
              </div>
           {/* shopping */}
              <div
                className="group relative bg-zinc-300 w-full max-w-[26rem] h-[18rem] md:h-[20rem] rounded-3xl overflow-hidden shadow-zinc-600 shadow-xl bg-project transition duration-500"
              >
                <Image
                  src={shopping}
                  alt='E-commerce Websites'
                  width="500"
                  height="650"
                  sizes="100vw"
                  className="w-[90%] h-full object-contain mx-auto"
                  placeholder="blur"
                  blurDataURL={getBlurDataUrl()}
                />
                <div className="bg-gray-project backdrop-blur-sm absolute top-0 left-0 right-0 h-full w-full transition duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex flex-col items-center justify-center h-full px-6 text-center space-y-4">
                    <h1 className="text-2xl title font-bold text-white">
                      E-commerce Websites
                    </h1>
                    <p className="text-white text-sm opacity-80 leading-relaxed">
                      Building seamless and engaging online stores that drive sales.
                    </p>
                    <a
                      href={`#`}
                      className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1C422B] hover:text-white transition duration-500"
                    >
                      View Project
                      <Link className="ml-2 inline" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            
          </div>
       
      </section>
    </>
  );
}
