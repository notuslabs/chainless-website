#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://chainless.finance";
const DEFAULT_LOCALE = "pt";

// With localePrefix: "as-needed", the default locale has no URL prefix.
const localePrefix = (locale) => (locale === DEFAULT_LOCALE ? "" : `/${locale}`);
const url = (locale, path) => `${SITE_URL}${localePrefix(locale)}${path}`;

const influencers = JSON.parse(
  readFileSync(resolve(__dirname, "../src/data/influencers.json"), "utf-8")
);

// Per-locale static pages. Legal pages are PT-only. Fees has a localized slug.
const pagesByLocale = {
  pt: ["", "/blog", "/taxas", "/transparencia", "/termos-de-uso", "/politica-de-privacidade", "/politica-aml"],
  en: ["", "/blog", "/fees"],
};

// Blog post slugs per locale, read from content/posts/{locale}/
const postsDir = resolve(__dirname, "../content/posts");
const postsByLocale = {
  pt: readdirSync(resolve(postsDir, "pt"))
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => `/blog/${f.replace(/\.mdx$/, "")}`),
  en: readdirSync(resolve(postsDir, "en"))
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => `/blog/${f.replace(/\.mdx$/, "")}`),
};

// Influencer pages exist for both locales.
const influencerPaths = influencers.map((inf) => `/${inf.slug}`);

// Map a pt-side path to its en-side equivalent (and vice versa) for hreflang.
// Only /taxas <-> /fees differs; everything else shares a slug across locales.
const ptToEn = (p) => (p === "/taxas" ? "/fees" : p);
const enToPt = (p) => (p === "/fees" ? "/taxas" : p);

const entries = [];

// Static pages
for (const locale of ["pt", "en"]) {
  for (const path of pagesByLocale[locale]) {
    const altLocale = locale === "pt" ? "en" : "pt";
    const altPath = locale === "pt" ? ptToEn(path) : enToPt(path);
    const ptPath = locale === "pt" ? path : enToPt(path);
    const hasAlt = pagesByLocale[altLocale].includes(altPath);
    entries.push({
      url: url(locale, path),
      alternates: hasAlt
        ? [
            { hreflang: "pt-BR", href: url("pt", ptPath) },
            { hreflang: "en", href: url("en", ptToEn(ptPath)) },
            { hreflang: "x-default", href: url("pt", ptPath) },
          ]
        : [],
    });
  }
}

// Blog posts — both locales share slug
for (const locale of ["pt", "en"]) {
  for (const path of postsByLocale[locale]) {
    const hasAlt = postsByLocale[locale === "pt" ? "en" : "pt"].includes(path);
    entries.push({
      url: url(locale, path),
      alternates: hasAlt
        ? [
            { hreflang: "pt-BR", href: url("pt", path) },
            { hreflang: "en", href: url("en", path) },
            { hreflang: "x-default", href: url("pt", path) },
          ]
        : [],
    });
  }
}

// Influencer pages — both locales
for (const locale of ["pt", "en"]) {
  for (const path of influencerPaths) {
    entries.push({
      url: url(locale, path),
      alternates: [
        { hreflang: "pt-BR", href: url("pt", path) },
        { hreflang: "en", href: url("en", path) },
        { hreflang: "x-default", href: url("pt", path) },
      ],
    });
  }
}

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${today}</lastmod>${entry.alternates
      .map(
        (alt) =>
          `\n    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`
      )
      .join("")}
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(__dirname, "../public/sitemap.xml"), sitemap);
console.log(`Sitemap generated with ${entries.length} URLs`);
