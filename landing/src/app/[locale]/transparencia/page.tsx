import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TransparencyContent } from "@/components/transparency-content";
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
  const t = await getTranslations({ locale, namespace: "pages.transparencia" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: localeUrl("pt", "/transparencia") },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: localeUrl("pt", "/transparencia"),
    },
  };
}

export default async function TransparenciaPage({
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
      <TransparencyContent />
      <Footer />
    </>
  );
}
