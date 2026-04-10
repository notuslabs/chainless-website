import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

const dictionaries: Record<string, () => Promise<any>> = {
  pt: () => import("../dictionaries/pt.json").then((m) => m.default),
  en: () => import("../dictionaries/en.json").then((m) => m.default),
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: await dictionaries[locale](),
  };
});
