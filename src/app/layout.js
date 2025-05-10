
import Head from "next/head";
import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <title>Trustence</title>
        <meta name="description" content="Where Trust meets innovation" />
        <meta name="keywords" content="Design,develop,programmer,develop sites,brands,Trust,portfolio,customers,discoveries" />
        <meta name="author" content="Trustence" />
        <meta property="og:title" content="Professional web design agency" />
        <meta property="og:description" content="Where Trust meets innovation" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
