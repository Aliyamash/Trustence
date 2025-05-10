import { Check } from "lucide-react";
import { sessionBenefits } from "@/components/OptionsDiscover";

export default function WhatYouGet(){
    return(
        <div className="bg-transparent py-64">
            <div className="container">
                <h1 className="text-5xl title font-bold">What You'll Get in This Session</h1>
                <div className="mt-28">
                    {sessionBenefits.map((benefit) => (
                        <div key={benefit.id} className="my-12">
                        <h2 className="text-2xl font-bold mb-2">{benefit.title}</h2>
                        <div className="flex gap-2 items-center">
                        <p className="text-gray-500 font-bold text-lg">{benefit.subtitle}</p>
                        <Check className="inline text-green-700 font-bold icon-check-size "/>
                        </div>
                    </div>
                    ))}


                </div>
            </div>
        </div>
    )
}