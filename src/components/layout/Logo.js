import Image from "next/image";
import Link from "next/link";
import logo from '@/public/images/logo3.webp'
import { useLocale } from "@/i18n/LocaleProvider";

export default function Logo(){
    const { locale } = useLocale();
    return(
        <Link href="/" aria-label={locale === "fa" ? "تراستنس؛ بازگشت به صفحه اصلی" : "Trustence, back to home"} className="group flex shrink-0 items-center gap-3 rounded-xl pe-2 focus-visible:outline-offset-4">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-white/5 bg-white/[.025] transition duration-300 group-hover:border-[#cba792]/25 group-hover:bg-white/[.06]">
                <Image className="h-12 w-12 scale-[1.85] object-contain transition duration-500 group-hover:scale-[1.98]" priority width={48} height={48} sizes="48px" src={logo} alt={locale === "fa" ? "نشان تراستنس" : "Trustence logo"}/>
            </span>
            <span className="hidden leading-none xl:block"><span className="block text-[.68rem] font-bold uppercase tracking-[.24em] text-[#fff8ee]">Trustence</span><span className="mt-1.5 block text-[.58rem] tracking-[.12em] text-white/35">DIGITAL STUDIO</span></span>
        </Link>
    )
}
