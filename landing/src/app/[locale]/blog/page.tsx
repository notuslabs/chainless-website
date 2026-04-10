import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/motion";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogListing } from "@/components/blog/blog-listing";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL, localeUrl, localeAlternates } from "@/lib/urls";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.page" });
  const pageUrl = localeUrl(locale, "/blog");

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: pageUrl,
      languages: localeAlternates({ pt: "/blog", en: "/blog" }),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: pageUrl,
      siteName: "Chainless",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const allPosts = await getAllPosts(locale);

  const pillarCounts = {
    sovereignty: allPosts.filter((p) => p.frontmatter.pillar === "sovereignty").length,
    wealth: allPosts.filter((p) => p.frontmatter.pillar === "wealth").length,
    practical: allPosts.filter((p) => p.frontmatter.pillar === "practical").length,
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-dark-500">
        <BlogHero articleCount={allPosts.length} pillarCounts={pillarCounts} />

        {/* SectionGlow bridge — between hero and content */}
        <div
          className="pointer-events-none relative z-10 -my-16 h-32 w-full md:-my-20 md:h-40"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(255,199,61,0.015) 0%, transparent 70%)",
          }}
        />

        <Suspense fallback={<BlogListingFallback />}>
          <BlogListing posts={allPosts} />
        </Suspense>

        {/* Bottom SectionRule before footer */}
        <div
          className="mx-auto w-full max-w-[var(--container-content)] px-6"
          aria-hidden="true"
        >
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,199,61,0.15) 20%, rgba(255,199,61,0.15) 80%, transparent 100%)",
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

function BlogListingFallback() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-yellow-500/20 border-t-yellow-500" />
    </div>
  );
}
