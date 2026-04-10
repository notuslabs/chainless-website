import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PrivacyContent } from "@/components/privacy-content";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { localeUrl } from "@/lib/urls";

export function generateStaticParams() {
  return [{ locale: "pt" }];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "pages.privacidade" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: localeUrl("pt", "/politica-de-privacidade") },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: localeUrl("pt", "/politica-de-privacidade"),
    },
  };
}

export default async function PoliticaDePrivacidadePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <PrivacyContent />
      <Footer />
    </>
  );
}
