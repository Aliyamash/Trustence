import { LocateIcon, LocateOffIcon, Mail, Phone } from "lucide-react";
import Form from "./Form";
import { getServerLocale } from "@/i18n/server";

export default async function ContactUs() {
  const locale = await getServerLocale();
  const copy = locale === "fa" ? { eyebrow: "یک گفت‌وگوی مستقیم", title: "از چیزی که می‌سازید برایمان بگویید.", body: "از ایده، چالش یا سیستمی که باید بهتر کار کند بگویید. ما با یک قدم بعدی سنجیده پاسخ می‌دهیم.", location: "سوئیس، اینگن" } : { eyebrow: "A direct conversation", title: "Tell us what you are building.", body: "Share the ambition, the challenge, or the system that should work better. We will respond with a thoughtful next step.", location: "Switzerland · Einigen" };
  return (
    <>
      <div className="bg-[#060e09] py-24 md:py-44 text-white">
        <div className="container">
          <div className="flex flex-col gap-16 lg:gap-8 justify-center lg:justify-around lg:flex-row  ">
            {/* info call */}
            <div>
              <p className="font-semibold">{copy.eyebrow}</p>
              <h2 className="text-5xl font-bold lg:text-7xl -ml-2 my-4">{copy.title}</h2>
              <p className="max-w-lg text-lg leading-8 text-white/65">{copy.body}</p>

          <div className="mt-12">
          <div className="flex gap-8 my-6">
                <Mail />
                <a href="mailto:trustenceagency@gmail.com">trustenceagency@gmail.com</a>
              </div>

              <div className="flex gap-8 my-6">
                <LocateIcon />
                <p>{copy.location}</p>
              </div>
          </div>

            </div>
            {/* form */}
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
