import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SoftCtaData {
  heading?: string;
  description: string;
}

export interface PostFrontmatter {
  title: string;
  excerpt: string;
  pillar: "sovereignty" | "wealth" | "practical";
  author: string;
  date: string;
  heroImage?: string;
  heroImageAlt?: string;
  featured: boolean;
  faq?: FaqItem[];
  softCta?: SoftCtaData;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: number;
}

export interface PostHeading {
  level: 2 | 3;
  text: string;
  id: string;
}

/**
 * Calculate reading time based on ~220 WPM average.
 */
export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

/**
 * Extract H2/H3 headings from raw MDX content for the table of contents.
 * Generates slug IDs matching rehype-slug output.
 */
export function extractHeadings(content: string): PostHeading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: PostHeading[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/\*\*|__|`/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    headings.push({ level, text, id });
  }

  return headings;
}

/**
 * Read a single MDX post by slug.
 */
export async function getPost(slug: string): Promise<Post> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  return {
    slug,
    frontmatter,
    content,
    readingTime: calculateReadingTime(content),
  };
}

/**
 * Read all MDX posts, sorted by date descending.
 */
export async function getAllPosts(): Promise<Post[]> {
  let files: string[];
  try {
    files = await fs.readdir(POSTS_DIR);
  } catch {
    return [];
  }

  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

  const posts = await Promise.all(
    mdxFiles.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      return getPost(slug);
    })
  );

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

/**
 * Get related posts from the same pillar, excluding the current post.
 */
export async function getRelatedPosts(
  pillar: string,
  currentSlug: string,
  limit = 3
): Promise<Post[]> {
  const all = await getAllPosts();
  return all
    .filter((p) => p.frontmatter.pillar === pillar && p.slug !== currentSlug)
    .slice(0, limit);
}
