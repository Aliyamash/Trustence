"use client"

import { useLocale } from "@/i18n/LocaleProvider";

export default function Error({error , reset}){
    const { locale } = useLocale();
    return(
        <>
            <div className="py-64 bg-fqa">
                <div className="container">
                        <h1 className="text-2xl text-center text-white">{locale === "fa" ? "مشکلی پیش آمد. لطفاً دوباره تلاش کنید." : "Something went wrong. Please try again."}</h1>
                        <button className="mt-6 rounded-xl bg-green-700 px-6 py-3 text-white shadow-xl hover:shadow-2xl" onClick={() => reset()}>{locale === "fa" ? "تلاش دوباره" : "Try again"}</button>
                </div>
            </div>
        </>
    )
}
