import { getServerLocale } from "@/i18n/server";

export default async function WelcomeFaq(){
    const locale = await getServerLocale();
    return (
        <div className=" py-64 bg-fqa">
                <div className="container">
                    <h1 className="title text-3xl lg:text-5xl text-center font-bold text-white mb-8">{locale === "fa" ? "شفافیت برای سرمایه‌گذاری دیجیتال شما" : "Clarity for your digital investment"}</h1>
                    <p className="text-xl lg:text-2xl text-center text-zinc-200">{locale === "fa" ? "پاسخ‌های مستقیم درباره وب‌سایت، نرم‌افزار، اتوماسیون، دامنه، مالکیت، تحویل و همکاری با تراستنس." : "Direct answers about websites, software, automation, scope, ownership, delivery, and working with Trustence."}</p>
                </div>
        </div>
    )
}
