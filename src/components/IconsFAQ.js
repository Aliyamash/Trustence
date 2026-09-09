import { Briefcase, Layout, Handshake, FileText, ShieldCheck } from "lucide-react";

export const categories = [
  { name: "Services", icon: Briefcase },
  { name: "Features", icon: Layout },
  { name: "Support", icon: Handshake },
  { name: "Content", icon: FileText },
  { name: "Security", icon: ShieldCheck },
];

export function getCategories(locale) {
  if (locale !== "fa") return categories;
  return categories.map((category, index) => ({ ...category, name: ["خدمات", "ویژگی‌ها", "پشتیبانی", "محتوا", "امنیت"][index] }));
}
