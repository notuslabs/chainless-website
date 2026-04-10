import { PillarTag } from "@/components/blog/pillar-tag";
import { ArticleMeta } from "@/components/blog/article-meta";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface ArticleHeroProps {
  title: string;
  pillar: "sovereignty" | "wealth" | "practical";
  author: string;
  readingTime: number;
  heroImage?: string;
  heroImageAlt?: string;
}

export function ArticleHero({
  title,
  pillar,
  author,
  readingTime,
  heroImage,
  heroImageAlt,
}: ArticleHeroProps) {
  return (
    <section className="bg-dark-500 pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <PillarTag pillar={pillar} />

        <h1 className="font-serif font-normal text-text-primary tracking-[-0.025em] mt-6 text-[clamp(2.25rem,1.7rem+2.2vw,3.5rem)] leading-[1.1]">
          {title}
        </h1>

        <div className="mt-8">
          <ArticleMeta author={author} readingTime={readingTime} />
        </div>

        {heroImage && (
          <div className="mt-10 rounded-[var(--doppelrand-radius-outer)] overflow-hidden aspect-video relative">
            <img
              src={`${BASE}${heroImage}`}
              alt={heroImageAlt ?? title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Dark gradient bottom fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(to top, rgba(28,27,25,0.7) 0%, transparent 100%)",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
