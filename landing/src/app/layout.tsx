import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "optional",
  axes: ["SOFT", "WONK", "opsz"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chainless — Patrimonio Digital Soberano",
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
      className={`${fraunces.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
