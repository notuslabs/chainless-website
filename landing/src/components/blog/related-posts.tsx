import { useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { ArticleCard } from "@/components/blog/article-card";

interface RelatedPost {
  title: string;
  excerpt: string;
  slug: string;
  pillar: "sovereignty" | "wealth" | "practical";
  author: string;
  readingTime: number;
  heroImage?: string;
  heroImageAlt?: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  const t = useTranslations("blog.related");
  if (posts.length === 0) return null;

  return (
    <aside aria-label={t("ariaLabel")} className="py-16">
      <h2 className="font-sans font-semibold text-text-primary mb-8 text-[clamp(1.25rem,1rem+1vw,1.75rem)]">
        {t("heading")}
      </h2>

      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        staggerDelay={0.12}
      >
        {posts.map((post) => (
          <StaggerItem key={post.slug}>
            <ArticleCard
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              pillar={post.pillar}
              author={post.author}
              readingTime={post.readingTime}
              heroImage={post.heroImage}
              heroImageAlt={post.heroImageAlt}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </aside>
  );
}
