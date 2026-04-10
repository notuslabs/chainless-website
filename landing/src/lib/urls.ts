import { routing } from "@/i18n/routing";

export const SITE_URL = "https://chainless.finance";

/**
 * Build a canonical absolute URL for a given locale + path.
 * Default locale gets no prefix (as-needed); others get `/<locale>`.
 *
 * `path` should start with `/` (or be `""` for the locale root).
 * Accepts `string` so callers can pass unvalidated route params.
 */
export function localeUrl(locale: string, path: string = ""): string {
  const normalized = path === "/" ? "" : path;
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${normalized}`;
}

/**
 * Build the `languages` map for `alternates.languages` given a per-locale path map.
 * Keys are BCP-47 language tags, plus `x-default` pointing at the default locale.
 */
export function localeAlternates(paths: { pt: string; en: string }): Record<string, string> {
  return {
    "pt-BR": localeUrl("pt", paths.pt),
    en: localeUrl("en", paths.en),
    "x-default": localeUrl(routing.defaultLocale, paths[routing.defaultLocale as "pt" | "en"]),
  };
}
