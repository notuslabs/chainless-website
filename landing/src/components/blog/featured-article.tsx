"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
import { DoppelrandCard } from "@/components/doppelrand-card";
import { FadeUp, EASE_PREMIUM } from "@/components/motion";
import { PillarTag } from "./pillar-tag";
import { ArticleMeta } from "./article-meta";
import type { Post } from "@/lib/blog";

interface FeaturedArticleProps {
  post: Post;
  locale?: string;
}

export function FeaturedArticle({ post, locale = "pt" }: FeaturedArticleProps) {
  const { slug, frontmatter, readingTime } = post;
  const { title, excerpt, pillar, author, date, heroImage, heroImageAlt } =
    frontmatter;

  return (
    <div className="relative mx-auto max-w-[var(--container-content)] px-6">
      {/* Atmospheric glow behind featured card */}
      <div
        className="pointer-events-none absolute -top-20 left-1/4 h-[400px] w-[600px] rounded-full bg-yellow-500/[0.018] blur-[180px]"
        aria-hidden="true"
      />

      <FadeUp>
        <Link href={`/${locale}/blog/${slug}`} className="group block">
          <DoppelrandCard variant="default" hover>
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Image area — cinematic treatment like Philosophy cards */}
              {heroImage ? (
                <div className="relative h-[220px] sm:h-[280px] md:col-span-5 md:h-full md:min-h-[380px]">
                  <img
                    src={`${BASE}${heroImage}`}
                    alt={heroImageAlt ?? title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Dark warm tint */}
                  <div className="absolute inset-0 bg-dark-500/30 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-yellow-900/8" />
                  {/* Inner edge refraction */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
                  {/* Fade into content on right */}
                  <div
                    className="absolute inset-0 hidden md:block"
                    style={{
                      background:
                        "linear-gradient(to right, transparent 0%, transparent 50%, rgba(28,27,25,0.7) 85%, rgba(28,27,25,0.95) 100%)",
                    }}
                  />
                  {/* Mobile bottom fade */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24 md:hidden"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 0%, rgba(28,27,25,0.9) 100%)",
                    }}
                  />
                </div>
              ) : (
                /* No image — use atmospheric gradient fill */
                <div className="relative hidden md:col-span-5 md:flex md:items-center md:justify-center md:min-h-[380px]">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 70% at 30% 50%, rgba(255,199,61,0.04) 0%, transparent 70%)",
                    }}
                  />
                  {/* Large serif letter as visual anchor */}
                  <span
                    className="font-serif text-[8rem] font-normal leading-none text-yellow-500/[0.06] select-none"
                    aria-hidden="true"
                  >
                    {title.charAt(0)}
                  </span>
                </div>
              )}

              {/* Content area */}
              <div className="relative flex flex-col justify-center p-6 sm:p-8 md:col-span-7 md:p-12 lg:p-16">
                {/* Overline */}
                <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-yellow-500/80">
                  Em destaque
                </span>

                <PillarTag pillar={pillar} className="mb-5" />

                <h3 className="font-serif text-[clamp(1.375rem,1.1rem+1.2vw,2rem)] font-normal leading-[1.1] tracking-[-0.01em] text-text-primary">
                  {title}
                </h3>

                <p className="mt-4 max-w-[42ch] text-[15px] font-normal leading-[1.7] text-warm-300/70 line-clamp-3">
                  {excerpt}
                </p>

                <ArticleMeta
                  author={author}
                  date={date}
                  readingTime={readingTime}
                  className="mt-6"
                />

                {/* Gold hairline accent */}
                <motion.div
                  className="mt-8 h-px w-16 bg-gradient-to-r from-yellow-500/25 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: EASE_PREMIUM,
                  }}
                />
              </div>
            </div>
          </DoppelrandCard>
        </Link>
      </FadeUp>
    </div>
  );
}
