"use client";

import { useCardStyle, useSetCardStyle, type CardStyle } from "./card-style-context";

const styles: { value: CardStyle; label: string }[] = [
  { value: "doppelrand", label: "Doppelrand" },
  { value: "modern-dark", label: "Modern Dark" },
  { value: "minimal-dark", label: "Minimal Dark" },
  { value: "luxury", label: "Luxury" },
  { value: "frosted-glass", label: "Frosted Glass" },
];

export function CardStyleSwitcher() {
  const current = useCardStyle();
  const setStyle = useSetCardStyle();

  return (
    <div
      className="fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/[0.08] bg-dark-500/90 p-1 backdrop-blur-xl"
      style={{
        boxShadow:
          "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {styles.map((s) => (
        <button
          key={s.value}
          onClick={() => setStyle(s.value)}
          className={`relative rounded-full px-4 py-2 text-[11px] font-medium tracking-wide transition-all duration-300 ${
            current === s.value
              ? "bg-white/[0.1] text-yellow-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
              : "text-warm-400/50 hover:text-warm-300/70"
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
