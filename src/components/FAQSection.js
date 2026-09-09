"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

export default function FAQSection(){
    const { locale } = useLocale();
    const content = getCopy(locale).home.faq;
    return(
        <>
        <div className="bg-[#245336] py-44">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-24 justify-between items-center">
                    <div className="text-white">
                        <h2 className="font-bold text-3xl md:text-5xl mb-2">{content.title}</h2>
                        <p className="text-lg ">{content.body}</p>
                    </div>
                    <div>
                        <Link className="bg-[#ffffff42] text-white  px-8 py-6 rounded-2xl text-lg font-bold  hover:shadow-2xl hover:shadow-zinc-950 hover:bg-[#fffffff1] hover:text-black transition duration-500" href={'/faqs'}>
                            {content.button}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
