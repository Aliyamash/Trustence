export const sessionBenefits = [
    {
      id: "1",
      title: "A sharper view of the opportunity",
      subtitle: "We examine your current digital position, operational friction, audience, and the business outcome that matters most."
    },
    {
      id: "2",
      title: "A credible direction",
      subtitle: "We outline the most useful next move and the disciplines it may require—from web and software to automation and visibility."
    },
    {
      id: "3",
      title: "Early scope guidance",
      subtitle: "Where enough information is available, we discuss likely scope, dependencies, investment range, and delivery considerations."
    },
    {
      id: "4",
      title: "Direct answers",
      subtitle: "Ask the practical questions about technology, ownership, communication, risk, and what working together would involve."
    }
  ];

const sessionBenefitsFa = [
  { id: "1", title: "دیدی شفاف‌تر از فرصت پیش رو", subtitle: "جایگاه دیجیتال فعلی، اصطکاک‌های عملیاتی، مخاطب و مهم‌ترین نتیجه کسب‌وکار شما را بررسی می‌کنیم." },
  { id: "2", title: "یک جهت‌گیری قابل اتکا", subtitle: "قدم بعدی مفید و تخصص‌های مورد نیاز آن را مشخص می‌کنیم؛ از وب و نرم‌افزار تا اتوماسیون و دیده‌شدن." },
  { id: "3", title: "راهنمای اولیه برای دامنه کار", subtitle: "اگر اطلاعات کافی باشد، درباره دامنه احتمالی، وابستگی‌ها، بازه سرمایه‌گذاری و ملاحظات اجرا صحبت می‌کنیم." },
  { id: "4", title: "پاسخ‌های مستقیم", subtitle: "پرسش‌های عملی خود درباره فناوری، مالکیت، ارتباط، ریسک و شیوه همکاری را مطرح کنید." },
];

export function getSessionBenefits(locale) { return locale === "fa" ? sessionBenefitsFa : sessionBenefits; }
