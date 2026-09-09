import "./globals.css";
import "@fontsource-variable/vazirmatn";
import { headers } from "next/headers";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import SiteChrome from "@/components/layout/SiteChrome";
import LocaleProvider from "@/i18n/LocaleProvider";
import { detectLocale, localeDirection } from "@/i18n/config";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/utils/seo";


export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trustence | Boutique Digital Studio",
    template: "%s | Trustence",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "technology",
  authors: [{ name: "Trustence" }],
  creator: "Trustence",
  publisher: "Trustence",
  referrer: "strict-origin-when-cross-origin",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export default async function RootLayout({ children }) {
  const requestHeaders = await headers();
  const locale = detectLocale({
    acceptLanguage: requestHeaders.get("x-trustence-locale") || requestHeaders.get("accept-language"),
  });
  return (
    <html lang={locale} dir={localeDirection(locale)} suppressHydrationWarning>
      <body>
        <LocaleProvider initialLocale={locale}>
          <AnalyticsTracker />
          <SiteChrome>{children}</SiteChrome>
        </LocaleProvider>
      </body>
    </html>
  );
}
