import { Link } from "@/i18n/navigation";
import { DoppelrandCard } from "@/components/doppelrand-card";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
import { PillarTag, type Pillar } from "./pillar-tag";
import { ArticleMeta } from "./article-meta";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  slug: string;
  pillar: Pillar;
  author: string;
  readingTime: number;
  heroImage?: string;
  heroImageAlt?: string;
}

export function ArticleCard({
  title,
  excerpt,
  slug,
  pillar,
  author,
  readingTime,
  heroImage,
  heroImageAlt,
}: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <DoppelrandCard variant="article" hover className="h-full">
        <div className="flex h-full flex-col">
          {/* Card image — atmospheric treatment */}
          {heroImage ? (
            <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/10] overflow-hidden rounded-t-[var(--doppelrand-radius-inner)]">
              <img
                src={`${BASE}${heroImage}`}
                alt={heroImageAlt ?? title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Warm tint */}
              <div className="absolute inset-0 bg-dark-500/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-yellow-900/5" />
              {/* Bottom fade into card content */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/2"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(28,27,25,0.85) 100%)",
                }}
              />
              {/* Inner edge refraction */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.03]" />
              {/* Pillar tag floating on image */}
              <div className="absolute bottom-3 left-4">
                <PillarTag pillar={pillar} />
              </div>
            </div>
          ) : (
            /* No image — atmospheric gradient fill with pillar tag */
            <div className="relative -mx-6 -mt-6 mb-5 flex h-32 items-end overflow-hidden rounded-t-[var(--doppelrand-radius-inner)] px-4 pb-3">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 80% at 20% 30%, rgba(255,199,61,0.04) 0%, transparent 70%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-px bg-warm-700/10" />
              <PillarTag pillar={pillar} />
            </div>
          )}

          <h3 className="font-serif text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] font-normal leading-[1.2] tracking-[-0.01em] text-text-primary line-clamp-2">
            {title}
          </h3>

          <p className="mt-3 text-[15px] font-normal leading-[1.6] text-warm-300/60 line-clamp-2">
            {excerpt}
          </p>

          {/* Push meta to bottom */}
          <div className="mt-auto pt-5">
            <div className="mb-4 h-px w-8 bg-gradient-to-r from-yellow-500/20 to-transparent" />
            <ArticleMeta author={author} readingTime={readingTime} />
          </div>
        </div>
      </DoppelrandCard>
    </Link>
  );
}
