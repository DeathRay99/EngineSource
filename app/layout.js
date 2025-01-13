import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Head from "next/head";
import GoogleTracker from "./components/GoogleTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Used Car Parts & Engines | PartsStoreUS",
  description:
    "Find quality used engines, transmissions, and other auto parts at PartsStoreUS. Serving the USA with reliable used parts for cars, trucks, and SUVs. Shop now!",
  keywords:
    "used engines, used transmissions, used car parts, auto parts, used auto parts, car parts USA, used truck parts, used SUV parts, engine replacement, transmission repair, auto salvage, recycled auto parts, second hand engines , legit engines , used engines in usa, used Ford parts, used Ford engine, used Chevy parts, used Chevy engine, used Toyota parts, used Toyota engine, used Ford V6 parts, used Ford V6 engine, used Ford V8 parts, used Ford V8 engine, used Ford 4 cylinder parts, used Ford 4 cylinder engine, used Chevy V6 parts, used Chevy V6 engine, used Chevy V8 parts, used Chevy V8 engine, used Chevy 4 cylinder parts, used Chevy 4 cylinder engine, used Toyota V6 parts, used Toyota V6 engine, used Toyota V8 parts, used Toyota V8 engine, used Toyota 4 cylinder parts, used Toyota 4 cylinder engine, used BMW engine, used Audi engine",
  author: "PartsStoreUS",
  robots: "index, follow",
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
        <meta
          property="og:image"
          content="https://www.partsstoreus.com/logo.svg"
        />
        <meta property="og:url" content="https://www.partsstoreus.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://www.partsstoreus.com/logo.svg"
        />
        <link rel="icon" href="/favicon.ico" />{" "}
        {/* Ensure you have a favicon */}
        <title>{metadata.title}</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <GoogleTracker/>
      </body>
    </html>
  );
}
