import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TransparencyContent } from "@/components/transparency-content";
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
    title: dict.pages.transparencia.title,
    description: dict.pages.transparencia.description,
    alternates: { canonical: `${SITE_URL}/${locale}/transparencia` },
    openGraph: {
      title: dict.pages.transparencia.title,
      description: dict.pages.transparencia.description,
      url: `${SITE_URL}/${locale}/transparencia`,
    },
  };
}

export default async function TransparenciaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  return (
    <>
      <Navbar />
      <TransparencyContent />
      <Footer />
    </>
  );
}
