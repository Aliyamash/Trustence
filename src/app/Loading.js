import Spinner from "@/components/Spinner";
import { getServerLocale } from "@/i18n/server";


export default async function Loading() {
  const locale = await getServerLocale();
  return (
    <div className="min-h-screen bg-[#0A1810] flex items-center justify-center text-white">
      <div className="text-center">
        <Spinner size="w-12 h-12" color="border-t-green-500" />
        <p className="mt-4 text-lg">{locale === "fa" ? "در حال بارگذاری…" : "Loading…"}</p>
      </div>
    </div>
  );
}
