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
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/dictionaries";
import { DictionaryProvider } from "@/components/dictionary-provider";
import { locales } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import "../globals.css";

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
    { path: "../../fonts/Zodiak-Light.woff2", weight: "300", style: "normal" },
    { path: "../../fonts/Zodiak-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/Zodiak-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../fonts/Zodiak-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "../../fonts/Satoshi-Light.woff2", weight: "300", style: "normal" },
    { path: "../../fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
});

const generalSans = localFont({
  variable: "--font-general-sans",
  display: "swap",
  src: [
    { path: "../../fonts/GeneralSans-Light.woff2", weight: "300", style: "normal" },
    { path: "../../fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/GeneralSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const switzer = localFont({
  variable: "--font-switzer",
  display: "swap",
  src: [
    { path: "../../fonts/Switzer-Light.woff2", weight: "300", style: "normal" },
    { path: "../../fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../fonts/Switzer-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const langMap: Record<Locale, string> = { pt: "pt-BR", en: "en" };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const SITE_URL = "https://chainless.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pageUrl = `${SITE_URL}/${locale}`;
  const ogImage = `${SITE_URL}${basePath}/chainless-og.png`;

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: pageUrl,
      languages: {
        "pt-BR": `${SITE_URL}/pt`,
        en: `${SITE_URL}/en`,
        "x-default": `${SITE_URL}/pt`,
      },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: pageUrl,
      siteName: "Chainless",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: dict.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: [ogImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return (
    <html
      lang={langMap[locale]}
      className={`${geist.variable} ${zodiak.variable} ${satoshi.variable} ${generalSans.variable} ${switzer.variable} ${lora.variable} ${playfair.variable} ${cormorant.variable} ${sourceSerif.variable} ${barlow.variable} ${oswald.variable} ${fraunces.variable} antialiased`}
    >
      <body className="noise-overlay">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Chainless",
              legalName: "Notus Labs Ltda.",
              url: SITE_URL,
              logo: `${SITE_URL}${process.env.NEXT_PUBLIC_BASE_PATH || ""}/chainless-icon.png`,
              description:
                locale === "pt"
                  ? "Plataforma de patrimônio digital com autocustódia."
                  : "Self-custody digital wealth platform.",
              foundingLocation: {
                "@type": "Place",
                address: { "@type": "PostalAddress", addressCountry: "BR" },
              },
              sameAs: [
                "https://apps.apple.com/app/chainless",
                "https://play.google.com/store/apps/details?id=app.chainless",
              ],
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-yellow-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-dark-500"
        >
          {locale === "pt" ? "Pular para o conteúdo" : "Skip to content"}
        </a>
        <DictionaryProvider dict={dict} locale={locale}>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}
