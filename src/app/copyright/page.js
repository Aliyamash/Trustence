import LegalPage from "@/components/LegalPage";
import { getServerLocale } from "@/i18n/server";
import { createMetadata } from "@/utils/seo";

export const metadata = createMetadata({ title: "Copyright Notice", description: "Copyright and intellectual-property information for Trustence website content.", path: "/copyright" });

export default async function CopyrightNotice() {
  const fa = (await getServerLocale()) === "fa";
  const content = fa ? { title: "اطلاعیه حقوق محتوا", updated: "آخرین به‌روزرسانی: ۱۵ آبان ۱۴۰۴", intro: "© ۲۰۲۵ تراستنس. تمام محتوا تحت دستورالعمل حق نشر 2001/29/EC اتحادیه اروپا و قوانین ملی کشورهای عضو محافظت می‌شود.", sections: [{ title: "گزارش نقض حقوق", body: "برای گزارش نقض حق نشر، شرح محتوا، نشانی صفحه، مدرک مالکیت و اطلاعات تماس خود را به copyright@trustenceagency.com ارسال کنید." }], action: "گزارش نقض حقوق" } : { title: "Copyright notice", updated: "Last updated: November 06, 2025", intro: "© 2025 Trustence. All content is protected under EU Copyright Directive 2001/29/EC and the national laws of EU member states.", sections: [{ title: "Reporting infringement", body: "To report copyright infringement, include a description, URL, proof of ownership, and your contact details in an email to copyright@trustenceagency.com." }], action: "Report infringement" };
  return <LegalPage {...content} email="copyright@trustenceagency.com" />;
}
