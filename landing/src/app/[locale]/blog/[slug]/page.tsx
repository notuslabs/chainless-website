import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import {
  getAllPosts,
  getAllSlugs,
  getPost,
  getRelatedPosts,
  extractHeadings,
} from "@/lib/blog";
import type { Post, PostHeading } from "@/lib/blog";

import { ScrollProgress } from "@/components/motion";
import { ArticleHero } from "@/components/blog/article-hero";
import { TldrBox } from "@/components/blog/tldr-box";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { PullQuote } from "@/components/blog/pull-quote";
import { CalloutBox } from "@/components/blog/callout-box";
import { FaqAccordion } from "@/components/blog/faq-accordion";
import { SoftCta } from "@/components/blog/soft-cta";
import { RelatedPosts } from "@/components/blog/related-posts";
import { CTASection } from "@/components/cta-section";
import { BackToTop } from "@/components/blog/back-to-top";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SITE_URL, localeUrl, localeAlternates } from "@/lib/urls";

/* ── Static generation ── */

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map(({ locale, slug }) => ({ locale, slug }));
}

export const dynamicParams = false;

/* ── SEO metadata ── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  let post: Post;

  try {
    post = await getPost(slug, locale);
  } catch {
    return {};
  }

  const { frontmatter } = post;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pageUrl = localeUrl(locale, `/blog/${slug}`);
  const ogImage = frontmatter.heroImage
    ? `${SITE_URL}${basePath}${frontmatter.heroImage}`
    : `${SITE_URL}${basePath}/chainless-og.png`;

  return {
    title: `${frontmatter.title} | Chainless`,
    description: frontmatter.excerpt,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: pageUrl,
      languages: localeAlternates({ pt: `/blog/${slug}`, en: `/blog/${slug}` }),
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      url: pageUrl,
      siteName: "Chainless",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "article",
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: [ogImage],
    },
  };
}

/* ── MDX component mapping ── */

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => <h2 {...props} />,
  h3: (props: React.ComponentProps<"h3">) => <h3 {...props} />,
  blockquote: PullQuote,
  Callout: CalloutBox,
};

/* ── Page component ── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  let post: Post;

  try {
    post = await getPost(slug, locale);
  } catch {
    notFound();
  }

  const { frontmatter, content, readingTime } = post;
  const headings: PostHeading[] = extractHeadings(content);

  const relatedPosts = await getRelatedPosts(
    frontmatter.pillar,
    slug,
    locale,
    3
  );

  /* ── Format date for display ── */
  const displayDate = new Date(frontmatter.date).toLocaleDateString(
    locale === "pt" ? "pt-BR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  /* ── JSON-LD: BlogPosting ── */
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: frontmatter.date,
    author: {
      "@type": "Organization",
      name: frontmatter.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Chainless",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${locale}/blog/${slug}`,
    },
    ...(frontmatter.heroImage && {
      image: `${SITE_URL}${frontmatter.heroImage}`,
    }),
    wordCount: content.trim().split(/\s+/).length,
    timeRequired: `PT${readingTime}M`,
  };

  /* ── JSON-LD: FAQPage (conditional) ── */
  const faqSchema =
    frontmatter.faq && frontmatter.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: frontmatter.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <ScrollProgress />
      <Navbar />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <main id="main-content">
        {/* Hero */}
        <ArticleHero
          title={frontmatter.title}
          pillar={frontmatter.pillar}
          author={frontmatter.author}
          date={displayDate}
          readingTime={readingTime}
          heroImage={frontmatter.heroImage}
          heroImageAlt={frontmatter.heroImageAlt}
        />

        {/* TL;DR */}
        <div className="mx-auto max-w-5xl px-6">
          <TldrBox>
            <p>{frontmatter.excerpt}</p>
          </TldrBox>
        </div>

        {/* Content area — two-column on desktop */}
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex gap-16">
            {/* Article body */}
            <article className="min-w-0 flex-1">
              {/* Mobile TOC */}
              <div className="lg:hidden">
                <TableOfContents headings={headings} />
              </div>

              {/* MDX content */}
              <div className="prose-chainless">
                <MDXRemote
                  source={content}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeSlug],
                    },
                  }}
                />
              </div>

              {/* Soft CTA */}
              {frontmatter.softCta && (
                <SoftCta
                  heading={frontmatter.softCta.heading}
                  description={frontmatter.softCta.description}
                />
              )}

              {/* FAQ Accordion */}
              {frontmatter.faq && frontmatter.faq.length > 0 && (
                <div className="mt-16 mb-12">
                  <FaqAccordion items={frontmatter.faq} />
                </div>
              )}
            </article>

            {/* Desktop sidebar TOC */}
            <div className="hidden lg:block">
              <TableOfContents headings={headings} />
            </div>
          </div>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mx-auto max-w-5xl px-6">
            <RelatedPosts
              posts={relatedPosts.map((p) => ({
                title: p.frontmatter.title,
                excerpt: p.frontmatter.excerpt,
                slug: p.slug,
                pillar: p.frontmatter.pillar,
                author: p.frontmatter.author,
                date: p.frontmatter.date,
                readingTime: p.readingTime,
                heroImage: p.frontmatter.heroImage,
                heroImageAlt: p.frontmatter.heroImageAlt,
              }))}
            />
          </div>
        )}
      </main>

      {/* CTA Section */}
      <CTASection />

      <Footer />

      <BackToTop />
    </>
  );
}
