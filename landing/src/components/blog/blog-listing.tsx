"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/motion";
import { PillarFilter } from "./pillar-filter";
import { FeaturedArticle } from "./featured-article";
import { ArticleCard } from "./article-card";
import { Pagination } from "./pagination";
import type { Post } from "@/lib/blog";

const POSTS_PER_PAGE = 9;

const PILLAR_URL_MAP: Record<string, Post["frontmatter"]["pillar"]> = {
  soberania: "sovereignty",
  crescimento: "wealth",
  pratica: "practical",
};

interface BlogListingProps {
  posts: Post[];
}

export function BlogListing({ posts }: BlogListingProps) {
  const t = useTranslations("blog.listing");
  const searchParams = useSearchParams();
  const pillarSlug = searchParams.get("pillar");
  const pageStr = searchParams.get("page");
  const currentPage = Math.max(1, parseInt(pageStr ?? "1", 10) || 1);

  const activePillar = pillarSlug ? PILLAR_URL_MAP[pillarSlug] : null;

  const filteredPosts = activePillar
    ? posts.filter((p) => p.frontmatter.pillar === activePillar)
    : posts;

  const totalCount = filteredPosts.length;
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  // Featured post — only on unfiltered first page
  const featuredPost =
    !activePillar && currentPage === 1
      ? filteredPosts.find(
          (p) => p.frontmatter.featured || p.frontmatter.heroImage
        ) ?? null
      : null;

  const gridPosts = featuredPost
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts;

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = gridPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const basePath = "/blog";

  const filterKey = pillarSlug ?? "all";

  return (
    <>
      {/* Filter */}
      <PillarFilter currentPillar={pillarSlug} />

      {/* Featured article — cinematic, full-width Doppelrand */}
      {featuredPost && (
        <div key={`featured-${filterKey}`} className="pt-12 pb-6">
          <FeaturedArticle post={featuredPost} />
        </div>
      )}

      {/* Article grid */}
      <section
        className="relative mx-auto max-w-[var(--container-content)] px-6 pt-8 pb-4"
        aria-labelledby="articles-heading"
      >
        {/* Subtle atmospheric glow behind the grid */}
        <div
          className="pointer-events-none absolute right-0 top-1/3 h-[300px] w-[400px] rounded-full bg-yellow-600/[0.012] blur-[160px]"
          aria-hidden="true"
        />

        <h2 id="articles-heading" className="sr-only">
          {activePillar ? t("headingCategory") : t("headingAll")}
        </h2>

        {/* Section label — editorial overline before the grid */}
        {paginatedPosts.length > 0 && (
          <FadeUp>
            <div className="mb-8 flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.2em] text-warm-400">
                {activePillar ? t("labelResults") : t("labelLatest")}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-warm-700/50 to-transparent" />
            </div>
          </FadeUp>
        )}

        {/* Empty state */}
        {paginatedPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span
              className="mb-6 font-serif text-[6rem] font-normal leading-none text-yellow-500/[0.06] select-none"
              aria-hidden="true"
            >
              ∅
            </span>
            <p className="text-[18px] font-normal text-warm-300/70">
              {t("emptyState")}
            </p>
            <Link
              href="/blog"
              className="mt-8 inline-flex items-center rounded-xl px-6 py-3 text-[15px] font-medium ring-1 ring-white/[0.10] text-warm-300 transition-all duration-500 ease-[var(--ease-premium)] hover:ring-yellow-500/20 hover:text-yellow-400"
            >
              {t("viewAll")}
            </Link>
          </div>
        )}

        {/* Grid */}
        {paginatedPosts.length > 0 && (
          <StaggerContainer
            key={`grid-${filterKey}-${currentPage}`}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            staggerDelay={0.12}
          >
            {paginatedPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <ArticleCard
                  title={post.frontmatter.title}
                  excerpt={post.frontmatter.excerpt}
                  slug={post.slug}
                  pillar={post.frontmatter.pillar}
                  author={post.frontmatter.author}
                  readingTime={post.readingTime}
                  heroImage={post.frontmatter.heroImage}
                  heroImageAlt={post.frontmatter.heroImageAlt}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </section>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath={basePath}
        pillar={pillarSlug}
      />
    </>
  );
}
