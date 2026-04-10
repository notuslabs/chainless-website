import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getMessages, getTranslations } from "next-intl/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import { routing } from "@/i18n/routing";
import { SITE_URL, localeUrl, localeAlternates } from "@/lib/urls";
import "../globals.css";

const GA_ID = "G-Q9W0X8EHCH";

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

const langMap: Record<string, string> = { pt: "pt-BR", en: "en" };

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "metadata" });
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pageUrl = localeUrl(locale);
  const ogImage = `${SITE_URL}${basePath}/chainless-og.png`;

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: pageUrl,
      languages: localeAlternates({ pt: "", en: "" }),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: pageUrl,
      siteName: "Chainless",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
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
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={langMap[locale]}
      className={`${zodiak.variable} ${switzer.variable} antialiased`}
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
