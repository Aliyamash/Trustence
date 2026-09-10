import AdminDashboard from "@/components/admin/AdminDashboard";
import { createMetadata } from "@/utils/seo";

export const metadata = createMetadata({ title: "پنل مدیریت تراستنس", description: "فضای خصوصی مدیریت محتوای تراستنس.", path: "/admin", noIndex: true, locale: "fa" });

export default function AdminPage() {
  return <AdminDashboard />;
}
