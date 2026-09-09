import { HandHeart, Sprout } from "lucide-react";
import Image from "next/image";
import picAbout from '@/public/images/pic-about2.webp';
import { getServerLocale } from "@/i18n/server";

export default async function PeopleAbout() {
  const locale = await getServerLocale();
  const copy = locale === "fa" ? { title: "برای سازمان‌هایی که دیجیتال را یک دارایی کسب‌وکار می‌دانند.", body: "یک حضور دیجیتال قدرتمند باید فراتر از ظاهر حرفه‌ای باشد؛ باید ارزش شما را روشن کند، اصطکاک را کاهش دهد، از تیم پشتیبانی کند و تصمیم درست را برای مشتری طبیعی‌تر سازد.", focus: "تمرکز ما", focusBody: "برای تیم‌هایی که به شفافیت، کیفیت و مالکیت بلندمدت اهمیت می‌دهند، وب‌سایت، پلتفرم و اتوماسیون می‌سازیم.", why: "چرا تراستنس؟", whyBody: "خدمت ممتاز یک نمایش نیست؛ اطمینانی است که از دامنه دقیق، ارتباط محرمانه، تصمیم‌های سنجیده و توجه واقعی به جزئیات به‌وجود می‌آید." } : { title: "Built for organisations that treat digital as a business asset.", body: "A strong digital presence should do more than look polished. It should clarify your value, reduce friction, support your team, and make the right decision feel natural for your customer.", focus: "Our focus", focusBody: "We create websites, platforms, and automations for teams that value clarity, quality, and long-term ownership.", why: "Why choose us", whyBody: "Premium service is not theatre. It is the confidence created by precise scope, discreet communication, considered decisions, and a partner who respects the details." };
  return (
    <div className="bg-[#fff] py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 justify-between lg:items-center">
          {/* icons , title , description */}
          <div className="lg:w-1/2">
            <div className="flex flex-col md:mb-16">
              {/* title */}
              <div>
                <h2 className="title font-bold text-2xl md:text-4xl mb-8">
                  {copy.title}
                </h2>
              </div>
              {/* description */}
              <div>
                <p className="text-xl text-pretty">
                  {copy.body}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row mt-8">
              <div className="mb-4">
                <h3 className="font-bold text-lg  mb-2">{copy.focus} <Sprout className="inline-block icon-btn-size mx-1 -mt-1" /></h3>
                <p className="text">{copy.focusBody}</p>
              </div>

              <div className="mb-4">
                <h3 className="font-bold text-lg  mb-2">{copy.why}<HandHeart className="inline-block icon-btn-size2 mx-1 -mt-1" /></h3>
                <p className="text">{copy.whyBody}</p>
              </div>
            </div>
          </div>


          {/* picture */}
          <div className="mx-auto w-[17rem] sm:w-[20rem] md:w-[25rem] lg:w-[35rem] 2xl:w-[40rem] h-full">
            <Image className="w-full h-full" src={picAbout} alt="Trustence team collaborating" />
          </div>


        </div>
      </div>
    </div>
  );
}
