"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCopy } from "@/i18n/copy";

export default function FAQSection({ faqs = [] }){
    const { locale } = useLocale();
    const content = getCopy(locale).home.faq;
    return(
        <>
        <section className="bg-[#245336] py-28 md:py-36" aria-labelledby="home-faq-title">
            <div className="container">
                <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
                    <div className="text-white lg:sticky lg:top-28">
                        <h2 id="home-faq-title" className="font-bold text-3xl md:text-5xl mb-4">{content.title}</h2>
                        <p className="max-w-xl text-lg leading-8 text-white/70">{content.body}</p>
                        <Link className="mt-8 inline-flex rounded-2xl bg-white/10 px-6 py-4 text-base font-bold text-white transition duration-300 hover:bg-white hover:text-[#123321]" href="/faqs">
                            {content.button}
                        </Link>
                    </div>
                    <div className="border-t border-white/20">
                        {faqs.map((faq, index) => (
                            <details key={faq.question} className="group border-b border-white/15 py-2 text-white">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-lg font-bold">
                                    <h3 className="text-lg font-bold leading-7"><span className="me-4 font-mono text-xs text-[#cba792]">0{index + 1}</span>{faq.question}</h3>
                                    <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 text-xl transition group-open:rotate-45">+</span>
                                </summary>
                                <p className="max-w-2xl pb-7 ps-10 leading-8 text-white/65">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
