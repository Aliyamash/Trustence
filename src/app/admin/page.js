import AdminDashboard from "@/components/admin/AdminDashboard";
import { createMetadata } from "@/utils/seo";

export const metadata = createMetadata({ title: "Trustence Admin", description: "Private Trustence content administration.", path: "/admin", noIndex: true });

export default function AdminPage() {
  return <AdminDashboard />;
}
