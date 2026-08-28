import { ChevronRight } from "lucide-react";
import aboutImg from "@/public/images/trustencpic.jpg"
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-[#658672] block"  id="about">
      <div className="container py-12 flex flex-col md:flex-row gap-12 items-center justify-center">
        <div className="text-white md:w-2/3">
          <p className="font-semibold mb-4">The Trustence standard</p>
          <div>
            
            <h2 className="title lightColor md:text-5xl text-3xl text-[#245336] pb-6 text-pretty">
              Quiet confidence, engineered into every detail.
            </h2>
          </div>
          <p className="mb-8 ">
            We combine commercial thinking, restrained design, and dependable
            engineering to create digital experiences that feel unmistakably
            yours. Every decision has a purpose: strengthen perception, simplify
            the journey, and support measurable business value.
          </p>
          <div className="flex flex-col">
            <div className="my-4">
              <h3 className="title text-[#000] mb-2">Discreet by nature</h3>
              <p>
                Clear communication, thoughtful handling of your information,
                and no unnecessary complexity.
              </p>
            </div>
            <div className="my-4">
              <h3 className="title text-[#000] mb-2">From direction to ownership</h3>
              <p>
                One coherent process from first decision to launch, handover,
                and the next stage of growth.
              </p>
            </div>
          </div>
          {/* btns */}
          <div className="flex items-center">
            <Link
              className="transition-all duration-500 mr-4 px-6 py-4 bg-btn rounded-xl"
              href={"/aboutus"}
            >
              About the studio
            </Link>
            <div className="flex items-center hover:text-gray-800">
              <Link
                className="pr-1 hover:pr-3 transition-all duration-500 "
                href={"/discovery"}
              >
                Discuss a project
              </Link>
              <ChevronRight className="transition-all duration-500" />
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src={aboutImg}
            className="w-full h-full aspect-[5/4] rounded-xl shadow-xl"
            alt="Trustence team planning a website design project"
          />
        </div>
      </div>
    </div>
  );
}
