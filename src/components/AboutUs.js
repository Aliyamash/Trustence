"use client";

import { ChevronRight } from "lucide-react";
import aboutImg from "@/public/images/trustencpic.jpg"
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

export default function AboutUs() {
  const { locale, isRtl } = useLocale();
  const content = getCopy(locale).home.about;
  return (
    <div className="bg-[#658672] block"  id="about">
      <div className="container py-12 flex flex-col md:flex-row gap-12 items-center justify-center">
        <div className="text-white md:w-2/3">
          <p className="font-semibold mb-4">{content.eyebrow}</p>
          <div>
            
            <h2 className="title lightColor md:text-5xl text-3xl text-[#245336] pb-6 text-pretty">
              {content.title}
            </h2>
          </div>
          <p className="mb-8 ">
            {content.body}
          </p>
          <div className="flex flex-col">
            <div className="my-4">
              <h3 className="title text-[#000] mb-2">{content.point1}</h3>
              <p>{content.point1Body}</p>
            </div>
            <div className="my-4">
              <h3 className="title text-[#000] mb-2">{content.point2}</h3>
              <p>{content.point2Body}</p>
            </div>
          </div>
          {/* btns */}
          <div className="flex items-center">
            <Link
              className="transition-all duration-500 mr-4 px-6 py-4 bg-btn rounded-xl"
              href={"/aboutus"}
            >
              {content.studio}
            </Link>
            <div className="flex items-center hover:text-gray-800">
              <Link
                className="pr-1 hover:pr-3 transition-all duration-500 "
                href={"/discovery"}
              >
                {content.discuss}
              </Link>
              <ChevronRight className={`transition-all duration-500 ${isRtl ? "rotate-180" : ""}`} />
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
