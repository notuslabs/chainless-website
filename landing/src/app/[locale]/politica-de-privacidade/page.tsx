import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PrivacyContent } from "@/components/privacy-content";
import { getDictionary, hasLocale } from "@/lib/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const SITE_URL = "https://chainless.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: dict.pages.privacidade.title,
    description: dict.pages.privacidade.description,
    alternates: { canonical: `${SITE_URL}/${locale}/politica-de-privacidade` },
    openGraph: {
      title: dict.pages.privacidade.title,
      description: dict.pages.privacidade.description,
      url: `${SITE_URL}/${locale}/politica-de-privacidade`,
    },
  };
}

export default async function PoliticaDePrivacidadePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <>
      <Navbar />
      <PrivacyContent />
      <Footer />
    </>
  );
}
