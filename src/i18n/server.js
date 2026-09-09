import { headers } from "next/headers";
import { detectLocale } from "./config";

export async function getServerLocale() {
  const requestHeaders = await headers();
  return detectLocale({ acceptLanguage: requestHeaders.get("x-trustence-locale") || requestHeaders.get("accept-language") });
}
