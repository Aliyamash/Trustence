import { ChevronRight } from "lucide-react";
import aboutImg from "@/public/images/trustencpic.jpg"
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-[#658672] block"  id="about">
      <div className="container py-12 flex flex-col md:flex-row gap-12 items-center justify-center">
        <div className="text-white md:w-2/3">
          <p className="font-semibold mb-4">Design</p>
          <div>
            <h1 className="title lightColor md:text-5xl text-3xl  pb-6 text-pretty">
              Where art meets technology
            </h1>
          </div>
          <p className="mb-8">
            We don’t just build websites. we craft digital masterpieces that
            tell your brand’s story, captivate your audience, and drive real
            business growth. Every pixel is placed with purpose, every
            interaction designed to inspire.
          </p>
          <div className="flex flex-col">
            <div className="my-4">
              <h1 className="title lightColor mb-2">Built on trust</h1>
              <p>
                Trust isn’t just a word. it’s the foundation we code into every
                project
              </p>
            </div>
            <div className="my-4">
              <h1 className="title lightColor mb-2">From Sketch to Launch</h1>
              <p>
                Trust isn’t just a word. it’s the foundation we code into every
                project
              </p>
            </div>
          </div>
          {/* btns */}
          <div className="flex items-center">
            <Link
              className="transition-all duration-500 mr-4 px-6 py-4 bg-btn rounded-xl"
              href={"/aboutus"}
            >
              Learn
            </Link>
            <div className="flex items-center hover:text-gray-800">
              <Link
                className="pr-1 hover:pr-3 transition-all duration-500 "
                href={"#"}
              >
                Discover
              </Link>
              <ChevronRight className="transition-all duration-500" />
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src={aboutImg}
            className="w-full h-full aspect-[5/4] rounded-xl shadow-xl"
            alt="service picture"
          />
        </div>
      </div>
    </div>
  );
}
