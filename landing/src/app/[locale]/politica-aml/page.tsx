import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AmlContent } from "@/components/aml-content";
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
    title: dict.pages.aml.title,
    description: dict.pages.aml.description,
    alternates: { canonical: `${SITE_URL}/${locale}/politica-aml` },
    openGraph: {
      title: dict.pages.aml.title,
      description: dict.pages.aml.description,
      url: `${SITE_URL}/${locale}/politica-aml`,
    },
  };
}

export default async function PoliticaAmlPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <>
      <Navbar />
      <AmlContent />
      <Footer />
    </>
  );
}
