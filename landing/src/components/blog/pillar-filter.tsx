"use client";

import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useCallback } from "react";
import { useTranslations } from "next-intl";

type PillarOption = {
  labelKey: "all" | "sovereignty" | "wealth" | "practical";
  value: string | null;
  activeClass: string;
};

const PILLAR_OPTIONS: PillarOption[] = [
  {
    labelKey: "all",
    value: null,
    activeClass: "bg-white/[0.06] text-text-primary ring-white/[0.10]",
  },
  {
    labelKey: "sovereignty",
    value: "soberania",
    activeClass: "bg-yellow-500/12 text-yellow-400 ring-yellow-500/20",
  },
  {
    labelKey: "wealth",
    value: "crescimento",
    activeClass: "bg-success/12 text-success ring-success/20",
  },
  {
    labelKey: "practical",
    value: "pratica",
    activeClass: "bg-info/12 text-info ring-info/20",
  },
];

interface PillarFilterProps {
  currentPillar?: string | null;
}

export function PillarFilter({ currentPillar }: PillarFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("blog.filter");

  const handleSelect = useCallback(
    (value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("page");

      if (value === null) {
        params.delete("pillar");
      } else {
        params.set("pillar", value);
      }

      const queryString = params.toString();
      router.push(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
    },
    [router, pathname, searchParams]
  );

  return (
    <div className="mx-auto max-w-[var(--container-content)] px-6 py-6">
      <div
        className="flex items-center gap-3 overflow-x-auto scroll-smooth pb-1 snap-x"
        role="tablist"
        aria-label={t("ariaLabel")}
        style={{ scrollbarWidth: "none" }}
      >
        {/* Label */}
        <span className="hidden shrink-0 text-xs uppercase tracking-[0.15em] text-warm-500 md:block">
          {t("labelFilter")}
        </span>
        <span className="hidden h-4 w-px bg-warm-700/50 md:block" aria-hidden="true" />

        {PILLAR_OPTIONS.map((option) => {
          const isActive =
            option.value === null
              ? !currentPillar
              : currentPillar === option.value;

          return (
            <button
              key={option.labelKey}
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelect(option.value)}
              className={[
                "snap-start shrink-0 rounded-xl px-5 py-2 text-xs font-medium ring-1 transition-all duration-500",
                "ease-[var(--ease-premium)] cursor-pointer whitespace-nowrap",
                isActive
                  ? option.activeClass
                  : "ring-white/[0.06] text-warm-500 hover:ring-white/[0.10] hover:text-warm-300",
              ].join(" ")}
            >
              {t(option.labelKey)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
