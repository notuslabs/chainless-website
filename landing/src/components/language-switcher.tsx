"use client";

import { useDictionary } from "./dictionary-provider";

export function LanguageSwitcher() {
  const { locale } = useDictionary();
  const otherLocale = locale === "pt" ? "en" : "pt";

  const handleSwitch = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const path = window.location.pathname.replace(basePath, "");
    const newPath = path.replace(`/${locale}`, `/${otherLocale}`);
    window.location.href = `${basePath}${newPath}`;
  };

  return (
    <button
      onClick={handleSwitch}
      className="rounded-lg px-3 py-2 text-caption font-medium text-warm-300/50 transition-all duration-500 ease-premium hover:text-warm-300/80"
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      {otherLocale.toUpperCase()}
    </button>
  );
}
