import { Check } from "lucide-react";
import { getSessionBenefits } from "@/components/OptionsDiscover";
import { getServerLocale } from "@/i18n/server";

export default async function WhatYouGet(){
    const locale = await getServerLocale();
    const sessionBenefits = getSessionBenefits(locale);
    return(
        <div className="bg-transparent py-64">
            <div className="container">
                <h2 className="text-5xl title font-bold text-white">{locale === "fa" ? "این گفت‌وگو قرار است چه چیزهایی را روشن کند؟" : "What the conversation is designed to reveal."}</h2>
                <div className="mt-28">
                    {sessionBenefits.map((benefit) => (
                        <div key={benefit.id} className="my-12">
                        <h2 className="text-2xl font-bold mb-2 text-zinc-100">{benefit.title}</h2>
                        <div className="flex gap-2 items-center">
                        <p className="text-zinc-300 font-bold text-lg">{benefit.subtitle}</p>
                        <Check className="inline-block text-green-400 font-bold icon-check-size "/>
                        </div>
                    </div>
                    ))}


                </div>
            </div>
        </div>
    )
}
