import Link from "next/link";
import { getServerLocale } from "@/i18n/server";

export default async function ContactHero() {
    const locale = await getServerLocale();
    const copy = locale === "fa" ? { title: "بیایید درباره قدم بعدی صحبت کنیم", body: "چه به یک وب‌سایت متمایز نیاز داشته باشید، چه یک پلتفرم اختصاصی یا گردش‌کاری هوشمندتر، مسیر را با گفت‌وگویی مستقیم با تیم ما آغاز کنید.", button: "درخواست جلسه آشنایی" } : { title: "Let’s discuss what comes next", body: "Whether you need a distinctive website, a custom digital platform, or a smarter automated workflow, begin with a direct conversation with our team.", button: "Request a discovery call" };
    return (
      <section className="bg-white py-64 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#060e09] mb-6">
            {copy.title}
          </h1>
          <p className="text-lg md:text-xl text-[#1C422B] mb-12">
            {copy.body}
          </p>
          <Link href={'/discovery'} className="bg-[#1C422B] text-white  px-6 md:px-8 md:py-4 py-3 rounded-2xl text-lg hover:bg-[#163320] hover:shadow-xl hover:shadow-green-900 transition duration-500">
            {copy.button}
          </Link>
        </div>
      </section>
    );
  }
