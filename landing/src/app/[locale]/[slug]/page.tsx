import type { Metadata } from "next";
import { notFound } from "next/navigation";
import influencers from "@/data/influencers.json";
import { InfluencerPage } from "@/components/influencer-page";
import { getDictionary, hasLocale } from "@/lib/dictionaries";
import { locales } from "@/lib/i18n";

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    influencers.map((i) => ({ locale, slug: i.slug }))
  );
}

const SITE_URL = "https://chainless.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) return {};
  const influencer = influencers.find((i) => i.slug === slug);
  if (!influencer) return {};

  const dict = await getDictionary(locale);
  const title = `${dict.pages.influencer.titlePrefix} ${influencer.name}`;
  const pageUrl = `${SITE_URL}/${locale}/${slug}`;
  return {
    title,
    description: dict.pages.influencer.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description: dict.pages.influencer.description,
      url: pageUrl,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(locale)) notFound();
  const influencer = influencers.find((i) => i.slug === slug);

  if (!influencer) notFound();

  return <InfluencerPage name={influencer.name} code={influencer.code} />;
}
