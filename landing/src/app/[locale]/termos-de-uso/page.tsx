import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TermsContent } from "@/components/terms-content";
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
    title: dict.pages.termos.title,
    description: dict.pages.termos.description,
    alternates: { canonical: `${SITE_URL}/${locale}/termos-de-uso` },
    openGraph: {
      title: dict.pages.termos.title,
      description: dict.pages.termos.description,
      url: `${SITE_URL}/${locale}/termos-de-uso`,
    },
  };
}

export default async function TermosDeUsoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <>
      <Navbar />
      <TermsContent />
      <Footer />
    </>
  );
}
