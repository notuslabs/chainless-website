"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const otherLocale = locale === "pt" ? "en" : "pt";

  const handleSwitch = () => {
    router.replace(pathname, { locale: otherLocale });
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
