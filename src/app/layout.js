import "./globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import SiteChrome from "@/components/layout/SiteChrome";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "@/utils/seo";


export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trustence | Web Design & Development Agency",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnalyticsTracker />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
