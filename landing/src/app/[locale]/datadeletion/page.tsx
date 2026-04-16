import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DataDeletionContent } from "@/components/data-deletion-content";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { localeUrl, localeAlternates } from "@/lib/urls";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "pages.gestaoDados" });
  const url = localeUrl(locale, "/datadeletion");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
      languages: localeAlternates({ pt: "/datadeletion", en: "/datadeletion" }),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
    },
  };
}

export default async function DataDeletionPage({
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
      <DataDeletionContent />
      <Footer />
    </>
  );
}
