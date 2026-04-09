"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

type PillarOption = {
  label: string;
  value: string | null;
  activeClass: string;
};

const PILLAR_OPTIONS: PillarOption[] = [
  {
    label: "Todos",
    value: null,
    activeClass: "bg-white/[0.06] text-text-primary ring-white/[0.10]",
  },
  {
    label: "Soberania",
    value: "soberania",
    activeClass: "bg-yellow-500/12 text-yellow-400 ring-yellow-500/20",
  },
  {
    label: "Crescimento",
    value: "crescimento",
    activeClass: "bg-[#3DA66A]/12 text-[#3DA66A] ring-[#3DA66A]/20",
  },
  {
    label: "Prática",
    value: "pratica",
    activeClass: "bg-[#4A90DA]/12 text-[#4A90DA] ring-[#4A90DA]/20",
  },
];

interface PillarFilterProps {
  currentPillar?: string | null;
}

export function PillarFilter({ currentPillar }: PillarFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
        aria-label="Categorias do blog"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Label */}
        <span className="hidden shrink-0 text-xs uppercase tracking-[0.15em] text-warm-500 md:block">
          Filtrar
        </span>
        <span className="hidden h-4 w-px bg-warm-700/50 md:block" aria-hidden="true" />

        {PILLAR_OPTIONS.map((option) => {
          const isActive =
            option.value === null
              ? !currentPillar
              : currentPillar === option.value;

          return (
            <button
              key={option.label}
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelect(option.value)}
              className={[
                "snap-start shrink-0 rounded-full px-5 py-2 text-[13px] font-medium ring-1 transition-all duration-500",
                "ease-[var(--ease-premium)] cursor-pointer whitespace-nowrap",
                isActive
                  ? option.activeClass
                  : "ring-white/[0.06] text-warm-500 hover:ring-white/[0.10] hover:text-warm-300",
              ].join(" ")}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
