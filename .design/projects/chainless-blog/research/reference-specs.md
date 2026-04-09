# Reference Specs
> Phase: research | Project: chainless-blog | Generated: 2026-04-08

---

## Next.js 16 App Router Metadata API

The `generateMetadata` function exports metadata for each page dynamically:

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: `${post.title} | Chainless Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [{ url: post.heroImage, width: 1200, height: 630 }],
      locale: "pt_BR",
      siteName: "Chainless",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
    alternates: {
      canonical: `https://chainless.com/blog/${post.slug}`,
    },
  };
}
```

Note: Check `node_modules/next/dist/docs/` for any Next.js 16-specific API changes before implementation (per AGENTS.md instruction).

Source: [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

---

## Article JSON-LD Schema (schema.org/BlogPosting)

Required and recommended properties for the Article page:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "O que e autocustodia e por que ela importa em 2026",
  "description": "Autocustodia cripto significa que so voce controla...",
  "image": "https://chainless.com/blog/images/autocustodia-hero.jpg",
  "datePublished": "2026-03-15T10:00:00-03:00",
  "dateModified": "2026-03-20T14:30:00-03:00",
  "author": {
    "@type": "Person",
    "name": "Equipe Chainless",
    "url": "https://chainless.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Chainless",
    "logo": {
      "@type": "ImageObject",
      "url": "https://chainless.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://chainless.com/blog/autocustodia-cripto"
  },
  "wordCount": 2100,
  "inLanguage": "pt-BR",
  "keywords": ["autocustodia", "cripto", "self-custody", "bitcoin"],
  "articleSection": "Soberania Digital"
}
```

**Required:** headline, author, datePublished, image
**Recommended:** dateModified, publisher, description, mainEntityOfPage
**Optional but valuable:** wordCount, inLanguage, keywords, articleSection

Source: [Google - Article Structured Data](https://developers.google.com/search/docs/appearance/structured-data/article), [schema.org/BlogPosting](https://schema.org/BlogPosting)

---

## FAQPage JSON-LD Schema

Rendered as a separate `<script>` tag alongside the BlogPosting schema:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que e autocustodia cripto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Autocustodia cripto e o modelo em que voce mesmo controla as chaves privadas dos seus ativos digitais, sem depender de uma exchange ou custodiante terceirizado."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferenca entre custodia e autocustodia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Na custodia, uma empresa guarda suas criptomoedas. Na autocustodia, voce controla diretamente suas chaves privadas e seus ativos."
      }
    }
  ]
}
```

**Rules:**
- Only use FAQPage when there is a single, authoritative answer per question (not community Q&A)
- All FAQ content must be visible on the source page (no hidden answers)
- Validate with [Google Rich Results Test](https://search.google.com/test/rich-results)

Source: [Google - FAQ Structured Data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)

---

## Open Graph Protocol for Articles

Required and optional `og:` tags for article type:

```html
<meta property="og:type" content="article" />
<meta property="og:title" content="Article Title" />
<meta property="og:description" content="Article excerpt" />
<meta property="og:image" content="https://chainless.com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Description of image" />
<meta property="og:url" content="https://chainless.com/blog/slug" />
<meta property="og:site_name" content="Chainless" />
<meta property="og:locale" content="pt_BR" />
<meta property="article:published_time" content="2026-03-15T10:00:00-03:00" />
<meta property="article:modified_time" content="2026-03-20T14:30:00-03:00" />
<meta property="article:author" content="https://chainless.com" />
<meta property="article:section" content="Soberania Digital" />
<meta property="article:tag" content="autocustodia" />
```

**Image spec:** 1200x630px (1.91:1 ratio) is the standard for social sharing. Facebook and LinkedIn both display this well. Larger images (2400x1260) are accepted and downscaled.

In Next.js, all of these are set via the `generateMetadata` `openGraph` property — Next.js automatically renders the meta tags.

Source: [Open Graph Protocol](https://ogp.me/)

---

## MDX Library API Reference

### next-mdx-remote (RSC)

```tsx
import { MDXRemote } from "next-mdx-remote/rsc";

// In a Server Component
export default async function Article({ source }) {
  return (
    <MDXRemote
      source={source}           // raw MDX string
      components={components}   // component map
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, rehypePrismPlus],
        },
      }}
    />
  );
}
```

### Remark/Rehype Plugins Needed

| Plugin | Purpose |
|--------|---------|
| `remark-gfm` | Tables, strikethrough, task lists in MDX |
| `rehype-slug` | Auto-generate heading IDs for TOC links |
| `rehype-prism-plus` or `rehype-highlight` | Syntax highlighting for code blocks |

Source: [next-mdx-remote GitHub](https://github.com/hashicorp/next-mdx-remote)

---

## IntersectionObserver API

Core API for TOC scroll tracking:

```ts
const observer = new IntersectionObserver(callback, options);

// Options
{
  root: null,           // viewport
  rootMargin: "-80px 0px -70% 0px",  // top offset for navbar, bottom bias
  threshold: 0          // trigger as soon as any pixel enters
}

// Callback
(entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    entry.isIntersecting  // boolean: is element in viewport?
    entry.target          // the observed element
    entry.boundingClientRect  // element position
    entry.intersectionRatio   // 0-1, how much is visible
  });
}

// Usage
observer.observe(element);
observer.unobserve(element);
observer.disconnect();  // cleanup
```

Browser support: All modern browsers. No polyfill needed for the Chainless target audience (financially sophisticated users with modern devices).

Source: [MDN - IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

## WCAG 2.2 AA Criteria for Long-Form Content

| Criterion | ID | Relevance |
|-----------|-----|-----------|
| Non-text Content | 1.1.1 | Alt text for all article images |
| Info and Relationships | 1.3.1 | Heading hierarchy, landmark regions, table markup |
| Meaningful Sequence | 1.3.2 | DOM order matches visual order |
| Contrast (Minimum) | 1.4.3 | 4.5:1 for body text, 3:1 for large text |
| Resize Text | 1.4.4 | Content readable at 200% zoom |
| Reflow | 1.4.10 | No horizontal scroll at 320px width |
| Non-text Contrast | 1.4.11 | 3:1 for UI components and graphical objects |
| Text Spacing | 1.4.12 | Content adapts to user text spacing overrides |
| Keyboard | 2.1.1 | All interactive elements keyboard accessible |
| Bypass Blocks | 2.4.1 | Skip link, landmark regions |
| Page Titled | 2.4.2 | Unique, descriptive page title |
| Focus Order | 2.4.3 | Logical tab order |
| Link Purpose | 2.4.4 | Link text describes destination |
| Headings and Labels | 2.4.6 | Descriptive headings |
| Focus Visible | 2.4.7 | Visible focus indicator on all interactive elements |
| Focus Appearance | 2.4.13 | Focus indicator meets minimum area/contrast (new in 2.2) |
| Name, Role, Value | 4.1.2 | ARIA attributes on accordion, tabs, TOC |

Source: [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [WebAIM Checklist](https://webaim.org/standards/wcag/checklist)
