import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const beluga = localFont({
  src: "../public/font/beluga.otf",
  variable: "--font-beluga",
  display: "swap",
});

const articulat = localFont({
  src: [
    { path: "../public/font/ArticulatCF-Thin.otf", weight: "200", style: "normal" },
    { path: "../public/font/ArticulatCF-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/font/ArticulatCF-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/font/ArticulatCF-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/font/ArticulatCF-Heavy.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-articulat",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    <html lang="en">
      <body
        className={`${beluga.variable} ${articulat.variable} ${inter.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
