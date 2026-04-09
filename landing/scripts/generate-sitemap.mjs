#!/usr/bin/env node
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://chainless.app";
const locales = ["pt", "en"];

const influencers = JSON.parse(
  readFileSync(resolve(__dirname, "../src/data/influencers.json"), "utf-8")
);

const staticPages = [
  "",
  "/taxas",
  "/transparencia",
  "/termos-de-uso",
  "/politica-de-privacidade",
  "/politica-aml",
];

const urls = [];

for (const locale of locales) {
  for (const page of staticPages) {
    urls.push(`${SITE_URL}/${locale}${page}`);
  }
  for (const inf of influencers) {
    urls.push(`${SITE_URL}/${locale}/${inf.slug}`);
  }
}

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map((url) => {
    const path = url.replace(`${SITE_URL}/pt`, "").replace(`${SITE_URL}/en`, "");
    const locale = url.startsWith(`${SITE_URL}/pt`) ? "pt" : "en";
    const altLocale = locale === "pt" ? "en" : "pt";
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="${locale === "pt" ? "pt-BR" : "en"}" href="${url}" />
    <xhtml:link rel="alternate" hreflang="${altLocale === "pt" ? "pt-BR" : "en"}" href="${SITE_URL}/${altLocale}${path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/pt${path}" />
  </url>`;
  })
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(__dirname, "../public/sitemap.xml"), sitemap);
console.log(`Sitemap generated with ${urls.length} URLs`);
