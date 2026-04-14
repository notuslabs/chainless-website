/**
 * Generates static redirect HTML pages for each influencer slug.
 * These live in public/ so they're available at /bitnada, /amoedo, etc.
 * Each page detects browser language and redirects to /pt/<slug> or /en/<slug>.
 *
 * Run: node scripts/generate-influencer-redirects.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const influencers = JSON.parse(
  readFileSync(join(root, "src/data/influencers.json"), "utf-8")
);

for (const { slug } of influencers) {
  const dir = join(root, "public", slug);
  mkdirSync(dir, { recursive: true });

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8"/>
  <meta http-equiv="refresh" content="0;url=/pt/${slug}"/>
  <script>
    // PT is the default — only redirect to EN if the user's language(s) are explicitly English.
    var langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""]).map(function(x){return (x||"").toLowerCase();});
    var isEnglish = langs.length > 0 && langs.every(function(x){return x.indexOf("en") === 0;});
    var l = isEnglish ? "en" : "pt";
    window.location.replace("/" + l + "/${slug}");
  </script>
</head>
<body></body>
</html>`;

  writeFileSync(join(dir, "index.html"), html);
  console.log(`Generated redirect: /${slug}/`);
}
