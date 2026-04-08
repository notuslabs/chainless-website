import type { Metadata } from "next";
import { notFound } from "next/navigation";
import influencers from "@/data/influencers.json";
import { InfluencerPage } from "@/components/influencer-page";

export const dynamicParams = false;

export async function generateStaticParams() {
  return influencers.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const influencer = influencers.find((i) => i.slug === slug);
  if (!influencer) return {};

  return {
    title: `Chainless | Convite de ${influencer.name}`,
    description:
      "Seu patrimônio cresce. Suas chaves continuam suas. Patrimônio digital soberano com autocustódia.",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const influencer = influencers.find((i) => i.slug === slug);

  if (!influencer) notFound();

  return <InfluencerPage name={influencer.name} code={influencer.code} />;
}
