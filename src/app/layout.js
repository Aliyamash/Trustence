import "./globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import SiteChrome from "@/components/layout/SiteChrome";


export const metadata = {
  metadataBase: new URL("https://trust-ence.com"),
  title: {
    default: "Trustence | Web Design & Development Agency",
    template: "%s | Trustence",
  },
  description: "Trustence designs and develops fast, thoughtful digital experiences for ambitious brands.",
  keywords:
    "web design agency, web development, Next.js development, branding, digital experiences, Trustence",
  authors: [{ name: "Trustence" }],
  creator: "Trustence",
  publisher: "Trustence",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Trustence",
    title: "Trustence | Web Design & Development Agency",
    description: "Where trust meets innovation. Digital design and development for ambitious brands.",
    images: [{ url: "/android-chrome-512x512.png", width: 512, height: 512, alt: "Trustence" }],
  },
  twitter: {
    card: "summary",
    title: "Trustence | Web Design & Development Agency",
    description: "Where trust meets innovation.",
    images: ["/android-chrome-512x512.png"],
  },
  robots: { index: true, follow: true },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Trustence",
              url: "https://trust-ence.com",
              logo: "https://trust-ence.com/android-chrome-512x512.png",
              description: "Web design and development agency.",
            }),
          }}
        />
        <AnalyticsTracker />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
