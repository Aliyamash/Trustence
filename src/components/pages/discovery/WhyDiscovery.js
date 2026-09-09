import { getServerLocale } from "@/i18n/server";

export default async function WhyDiscovery() {
  const locale = await getServerLocale();
  const copy = locale === "fa" ? { title: "شفافیت، پیش از تعیین دامنه.", body: "یک جلسه شناخت مفید باید شما را با تصمیم‌هایی دقیق‌تر تنها بگذارد، نه یک ارائه فروش از پیش آماده.", items: [["🎯", "هدف واقعی را تعریف کنید", "نتیجه مطلوب کسب‌وکار را از فرضیات مربوط به راه‌حل جدا کنید."], ["💡", "از سرمایه‌گذاری محافظت کنید", "پیچیدگی، وابستگی و ریسک‌های قابل اجتناب را پیش از پرهزینه‌شدن شناسایی کنید."], ["🔍", "سیستم درست را پیدا کنید", "ترکیب مناسب وب، نرم‌افزار، اتوماسیون و توانمندی رشد را بررسی کنید."], ["🤝", "همکاری را بسنجید", "پیش از تعهد دو طرف، با شیوه فکرکردن، ارتباط و کار ما آشنا شوید."]] } : { title: "Clarity before scope.", body: "A useful discovery session should leave you with sharper decisions—not a rehearsed sales pitch.", items: [["🎯", "Define the real objective", "Separate the desired business outcome from assumptions about the solution."], ["💡", "Protect the investment", "Identify avoidable complexity, dependencies, and risks before they become expensive."], ["🔍", "Explore the right system", "Consider the right combination of web, software, automation, and growth capability."], ["🤝", "Assess the partnership", "Understand how we think, communicate, and work before either side makes a commitment."]] };
  return (
    <div className="bg-transparent py-44">
      <div className="container">
        <h2 className="text-5xl title font-bold mb-4 text-white">{copy.title}</h2>
        <p className="text-xl font-black text-zinc-300">{copy.body}</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {copy.items.map(([icon, title, body]) => <article key={title} className="p-6 bg-gray-200 rounded-2xl shadow-xl hover:shadow-md transition duration-200"><div className="text-3xl mb-4">{icon}</div><h3 className="text-xl font-semibold mb-2">{title}</h3><p className="text-gray-600 text-base">{body}</p></article>)}
        </div>
      </div>
    </div>
  );
}
