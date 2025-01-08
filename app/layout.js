import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PartsStoreUS",
  description:
    "Enhance the performance of your vehicle with trusted used engines. All our branches operate locally and are supported by leading auto giants, ensuring quality and reliability.",
  keywords:
    "used engines, vehicle engines, performance engines, auto parts, trusted used engines, car repair, engine supplier , second hand engines , legit engines , used engines in usa",
  author: "PartsStoreUS",
  robots: "index, follow", // Tells search engines to index the page and follow links
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/logo.svg" /> {/* Replace with your actual image */}
        <meta property="og:url" content="https://www.partsstoreus.com" /> {/* Replace with your website URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/logo.svg" /> {/* Replace with your actual image */}
        <link rel="icon" href="/favicon.ico" /> {/* Ensure you have a favicon */}
        <title>{metadata.title}</title>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
