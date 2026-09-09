import LegalPage from "@/components/LegalPage";
import { getServerLocale } from "@/i18n/server";
import { createMetadata } from "@/utils/seo";

export const metadata = createMetadata({ title: "Privacy Policy", description: "Read the Trustence privacy policy and how website data is handled.", path: "/privacy" });

export default async function PrivacyPolicy() {
  const fa = (await getServerLocale()) === "fa";
  const content = fa ? {
    title: "سیاست حریم خصوصی", updated: "آخرین به‌روزرسانی: ۱۵ آبان ۱۴۰۴", intro: "تراستنس گرداننده trust-ence.com است. این سیاست با مقررات عمومی حفاظت از داده‌ها (GDPR) سازگار است و برای کاربران اتحادیه اروپا و منطقه اقتصادی اروپا کاربرد دارد.",
    sections: [
      { title: "۱. مسئول کنترل داده", body: "تراستنس مسئول کنترل داده‌های شخصی شماست. برای امور حریم خصوصی با privacy@trustenceagency.com تماس بگیرید." },
      { title: "۲. اطلاعاتی که جمع‌آوری می‌کنیم", items: ["داده شخصی: نام، ایمیل، تلفن و اطلاعاتی که در فرم‌ها وارد می‌کنید.", "داده استفاده: صفحات بازدیدشده، منبع ورودی، کشور تقریبی، نوع دستگاه، سیستم‌عامل، مرورگر و شناسه تصادفی نشست.", "IP فقط برای تخمین کشور به‌طور موقت پردازش و سپس حذف می‌شود؛ IP خام، موقعیت دقیق، شهر و مختصات ذخیره نمی‌شوند.", "شناسه نشست فقط برای تفکیک بازدیدها در نشست جاری مرورگر استفاده می‌شود.", "انتخاب زبان در یک کوکی ضروری به‌مدت حداکثر یک سال ذخیره می‌شود تا ترجیح شما حفظ شود."] },
      { title: "۳. مبنای قانونی پردازش", items: ["رضایت برای خبرنامه و کوکی‌های غیرضروری.", "قرارداد برای ارائه خدمات درخواست‌شده.", "منافع مشروع برای تحلیل عملکرد و امنیت سایت با رعایت حقوق شما."] },
      { title: "۴. حقوق شما تحت GDPR", items: ["دسترسی و اصلاح داده‌ها", "حذف داده‌ها و محدودکردن پردازش", "انتقال‌پذیری داده", "اعتراض به پردازش", "پس‌گرفتن رضایت در هر زمان"] },
      { title: "۵. نگهداری و امنیت", body: "داده را فقط تا زمانی که لازم باشد نگه می‌داریم و از رمزنگاری و کنترل دسترسی استفاده می‌کنیم. تشخیص کشور و دستگاه تقریبی است و VPN یا تنظیمات حریم خصوصی می‌تواند دقت را تغییر دهد." },
      { title: "۶. انتقال بین‌المللی", body: "انتقال داده خارج از EEA با بندهای قراردادی استاندارد اتحادیه اروپا یا تصمیم‌های کفایت انجام می‌شود." },
      { title: "۷. شکایت", body: "اگر از پاسخ ما رضایت ندارید، می‌توانید به مرجع حفاظت از داده محل خود شکایت کنید." },
    ], action: "استفاده از حقوق حریم خصوصی",
  } : {
    title: "Privacy policy", updated: "Last updated: November 06, 2025", intro: "Trustence operates trust-ence.com. This policy complies with the General Data Protection Regulation (GDPR) and applies to individuals in the EU and EEA.",
    sections: [
      { title: "1. Data controller", body: "Trustence is responsible for your personal data. Contact privacy@trustenceagency.com for privacy enquiries." },
      { title: "2. Information we collect", items: ["Personal data: name, email, phone, and information submitted through forms.", "Usage data: pages visited, referring page, approximate country, device, operating system, browser, and a random session identifier.", "The IP address is processed briefly to estimate country and then discarded. Raw IPs, precise location, city, and coordinates are not stored.", "A session identifier is used only to distinguish visits during the current browser session.", "Your language preference is stored in an essential cookie for up to one year so the site remembers your choice."] },
      { title: "3. Legal basis", items: ["Consent for newsletter signups and non-essential cookies.", "Contract to provide requested services.", "Legitimate interest for site analytics and security, balanced against your rights."] },
      { title: "4. Your GDPR rights", items: ["Access and rectify your data", "Erase data or restrict processing", "Data portability", "Object to processing", "Withdraw consent at any time"] },
      { title: "5. Retention and security", body: "We retain data only as long as necessary and use encryption and access controls. Country and device detection are approximate; VPNs and privacy settings can affect accuracy." },
      { title: "6. International transfers", body: "Transfers outside the EEA use EU Standard Contractual Clauses or relevant adequacy decisions." },
      { title: "7. Complaints", body: "If you are not satisfied with our response, you may complain to your local data protection authority." },
    ], action: "Exercise your rights",
  };
  return <LegalPage {...content} email="privacy@trustenceagency.com" />;
}
