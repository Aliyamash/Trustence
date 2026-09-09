import { MoveDown } from "lucide-react";
import Link from "next/link";
import { getServerLocale } from "@/i18n/server";

export default async function HeroDiscovery(){
    const locale = await getServerLocale();
    const copy = locale === "fa" ? { title: "یک گفت‌وگوی دقیق برای پروژه‌ای دیجیتال و بلندپروازانه.", body: "در یک جلسه راهبردی رایگان، هدف را بررسی می‌کنیم، ارزشمندترین فرصت را پیدا می‌کنیم و می‌سنجیم آیا تراستنس شریک مناسبی برای این مسیر است یا نه.", button: "درخواست جلسه" } : { title: "A precise first conversation for an ambitious digital project.", body: "In a complimentary strategy session, we examine the objective, identify the highest-value opportunity, and decide whether Trustence is the right partner for the work.", button: "Request your session" };
    return(
        <div className="bg-transparent py-64">
            <div className="container">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl text-white 2xl:text-7xl font-bold mb-8">{copy.title}</h1>
                    <p className="text-xl md:text-2xl font-bold md:mx-24 mb-24 text-white">{copy.body}</p>
                    <Link href={'#formDiscover'} className="px-8 py-6 bg-green-900 text-lg md:text-xl text-white rounded-full hover:shadow-2xl hover:shadow-green-800 transition duration-500 hover:bg-white hover:text-black">{copy.button} <MoveDown className="inline"/></Link>
                </div>
            </div>
        </div>
    )
}
