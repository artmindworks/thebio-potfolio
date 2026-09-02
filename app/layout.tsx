import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const beluga = localFont({
  src: "../public/fonts/beluga.otf",
  variable: "--font-beluga",
  display: "swap",
});

const articulat = localFont({
  src: [
    { path: "../public/fonts/ArticulatCF-Thin.otf", weight: "200", style: "normal" },
    { path: "../public/fonts/ArticulatCF-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/ArticulatCF-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/ArticulatCF-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/ArticulatCF-Heavy.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-articulat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MadebyAMW — Ibrahim Babatunde Orisunbare",
  description:
    "Creative direction and brand strategy from MadebyAMW: full-stack brand development spanning strategy, identity, verbal identity, campaign direction, and system design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${beluga.variable} ${articulat.variable}`}
    >
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
