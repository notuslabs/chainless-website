import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import influencers from "@/data/influencers.json";
import { InfluencerPage } from "@/components/influencer-page";
import { routing } from "@/i18n/routing";

export const dynamicParams = false;

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
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
  if (!hasLocale(routing.locales, locale)) return {};
  const influencer = influencers.find((i) => i.slug === slug);
  if (!influencer) return {};

  const t = await getTranslations({ locale, namespace: "pages.influencer" });
  const title = `${t("titlePrefix")} ${influencer.name}`;
  const pageUrl = `${SITE_URL}/${locale}/${slug}`;
  return {
    title,
    description: t("description"),
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description: t("description"),
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
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const influencer = influencers.find((i) => i.slug === slug);

  if (!influencer) notFound();

  return <InfluencerPage name={influencer.name} code={influencer.code} />;
}
