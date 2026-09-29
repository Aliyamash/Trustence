import Image from "next/image";
import logo from '@/public/images/logo3.webp'
import { useLocale } from "@/i18n/LocaleProvider";

export default function Logo(){
    const { locale } = useLocale();
    return(
        <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl">
            <Image className="h-12 w-12 scale-[1.85] object-contain" priority width={48} height={48} sizes="48px" src={logo} alt={locale === "fa" ? "نشان تراستنس" : "Trustence logo"}/>
        </div>
    )
}
