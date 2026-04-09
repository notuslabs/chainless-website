import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeesContent } from "@/components/fees-content";
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
    title: dict.pages.taxas.title,
    description: dict.pages.taxas.description,
    alternates: { canonical: `${SITE_URL}/${locale}/taxas` },
    openGraph: {
      title: dict.pages.taxas.title,
      description: dict.pages.taxas.description,
      url: `${SITE_URL}/${locale}/taxas`,
    },
  };
}

export default async function TaxasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <>
      <Navbar />
      <FeesContent />
      <Footer />
    </>
  );
}
