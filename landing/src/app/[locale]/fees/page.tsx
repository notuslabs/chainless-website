import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeesContent } from "@/components/fees-content";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { localeUrl, localeAlternates } from "@/lib/urls";

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "pages.taxas" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: localeUrl("en", "/fees"),
      languages: localeAlternates({ pt: "/taxas", en: "/fees" }),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: localeUrl("en", "/fees"),
    },
  };
}

export default async function FeesPage() {
  setRequestLocale("en");

  return (
    <>
      <Navbar />
      <FeesContent />
      <Footer />
    </>
  );
}
