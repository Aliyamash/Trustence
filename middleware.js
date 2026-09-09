import { NextResponse } from "next/server";
import { detectLocale, localeCookie } from "./src/i18n/config";

export function middleware(request) {
  const locale = detectLocale({
    cookie: request.cookies.get(localeCookie)?.value,
    acceptLanguage: request.headers.get("accept-language"),
  });
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-trustence-locale", locale);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  if (!request.cookies.has(localeCookie)) {
    response.cookies.set(localeCookie, locale, { path: "/", maxAge: 31536000, sameSite: "lax" });
  }
  return response;
}

export const config = {
  matcher: ["/((?!admin|api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
