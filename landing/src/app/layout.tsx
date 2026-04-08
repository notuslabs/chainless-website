import type { Metadata } from "next";
import {
  Geist,
  Lora,
  Playfair_Display,
  Cormorant_Garamond,
  Source_Serif_4,
  Barlow,
  Oswald,
  Fraunces,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const zodiak = localFont({
  variable: "--font-zodiak",
  display: "swap",
  src: [
    { path: "../fonts/Zodiak-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Zodiak-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Zodiak-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Zodiak-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "../fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
});

const generalSans = localFont({
  variable: "--font-general-sans",
  display: "swap",
  src: [
    { path: "../fonts/GeneralSans-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/GeneralSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const switzer = localFont({
  variable: "--font-switzer",
  display: "swap",
  src: [
    { path: "../fonts/Switzer-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Switzer-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Chainless | Patrimonio Digital Soberano",
  description:
    "Seu patrimonio cresce. Suas chaves continuam suas. Plataforma de patrimonio digital com autocustodia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${zodiak.variable} ${satoshi.variable} ${generalSans.variable} ${switzer.variable} ${lora.variable} ${playfair.variable} ${cormorant.variable} ${sourceSerif.variable} ${barlow.variable} ${oswald.variable} ${fraunces.variable} antialiased`}
    >
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
