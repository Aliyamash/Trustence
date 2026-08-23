import "./globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import SiteChrome from "@/components/layout/SiteChrome";


export const metadata = {
  title: "Trustence",
  description: "Where Trust meets innovation",
  keywords:
    "Design, develop, programmer, develop sites, brands, Trust, portfolio, customers, discoveries",
  authors: [{ name: "Trustence" }],
  openGraph: {
    title: "Professional web design agency",
    description: "Where Trust meets innovation",
  },
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
