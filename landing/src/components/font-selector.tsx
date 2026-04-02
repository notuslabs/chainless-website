"use client";

import { useState, useEffect, useRef } from "react";

const DISPLAY_FONTS = [
  { id: "zodiak", label: "Zodiak", css: "var(--font-zodiak), Georgia, serif", weights: [300, 400, 700, 800], italic: false },
  { id: "lora", label: "Lora", css: "var(--font-lora), Georgia, serif", weights: [400, 500, 600, 700], italic: true },
  { id: "playfair", label: "Playfair Display", css: "var(--font-playfair), Georgia, serif", weights: [400, 500, 600, 700, 800, 900], italic: true },
  { id: "cormorant", label: "Cormorant Garamond", css: "var(--font-cormorant), Georgia, serif", weights: [300, 400, 500, 600, 700], italic: true },
  { id: "source-serif", label: "Source Serif 4", css: "var(--font-source-serif), Georgia, serif", weights: [200, 300, 400, 500, 600, 700, 800, 900], italic: false },
  { id: "oswald", label: "Oswald", css: "var(--font-oswald), ui-sans-serif, sans-serif", weights: [200, 300, 400, 500, 600, 700], italic: false },
  { id: "fraunces", label: "Fraunces", css: "var(--font-fraunces), Georgia, serif", weights: [300, 400, 500, 600, 700, 800], italic: true },
  { id: "satoshi", label: "Satoshi", css: "var(--font-satoshi), ui-sans-serif, system-ui, sans-serif", weights: [300, 400, 500, 700, 900], italic: false },
] as const;

const BODY_FONTS = [
  { id: "geist", label: "Geist", css: "var(--font-geist), ui-sans-serif, system-ui, sans-serif" },
  { id: "barlow", label: "Barlow", css: "var(--font-barlow), ui-sans-serif, system-ui, sans-serif" },
  { id: "lora-body", label: "Lora", css: "var(--font-lora), Georgia, serif" },
  { id: "source-serif-body", label: "Source Serif 4", css: "var(--font-source-serif), Georgia, serif" },
  { id: "satoshi-body", label: "Satoshi", css: "var(--font-satoshi), ui-sans-serif, system-ui, sans-serif" },
  { id: "general-sans-body", label: "General Sans", css: "var(--font-general-sans), ui-sans-serif, system-ui, sans-serif" },
  { id: "switzer-body", label: "Switzer", css: "var(--font-switzer), ui-sans-serif, system-ui, sans-serif" },
] as const;

const WEIGHT_LABELS: Record<number, string> = {
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black",
};

const STYLE_ID = "font-selector-override";

export function FontSelector() {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState("zodiak");
  const [body, setBody] = useState("geist");
  const [heroWeight, setHeroWeight] = useState(400);
  const [sectionWeight, setSectionWeight] = useState(400);
  const [cardWeight, setCardWeight] = useState(400);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement("style");
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }
    styleRef.current = style;
    return () => {
      style?.remove();
    };
  }, []);

  // Snap weights to nearest available when display font changes
  const currentDisplay = DISPLAY_FONTS.find((f) => f.id === display);
  useEffect(() => {
    if (!currentDisplay) return;
    const snap = (w: number) =>
      currentDisplay.weights.reduce((prev, curr) =>
        Math.abs(curr - w) < Math.abs(prev - w) ? curr : prev
      );
    setHeroWeight((w) => snap(w));
    setSectionWeight((w) => snap(w));
    setCardWeight((w) => snap(w));
  }, [display, currentDisplay]);

  useEffect(() => {
    const d = DISPLAY_FONTS.find((f) => f.id === display);
    const b = BODY_FONTS.find((f) => f.id === body);
    if (!d || !b || !styleRef.current) return;

    styleRef.current.textContent = `
      html {
        --font-serif: ${d.css} !important;
        --font-sans: ${b.css} !important;
      }
      .font-serif {
        font-family: ${d.css} !important;
      }
      body, .font-sans {
        font-family: ${b.css} !important;
      }
      /* Hero — h1 with data attr */
      [data-weight-tier="hero"] {
        font-weight: ${heroWeight} !important;
      }
      /* Section headings — h2.font-serif */
      h2.font-serif {
        font-weight: ${sectionWeight} !important;
      }
      /* Card titles — h3.font-serif */
      h3.font-serif {
        font-weight: ${cardWeight} !important;
      }
    `;
  }, [display, body, heroWeight, sectionWeight, cardWeight]);

  const currentBody = BODY_FONTS.find((f) => f.id === body);
  const weights = currentDisplay?.weights ?? [400];

  function reset() {
    setDisplay("zodiak");
    setBody("geist");
    setHeroWeight(400);
    setSectionWeight(400);
    setCardWeight(400);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Toggle pill */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2.5 rounded-full border border-white/10 bg-dark-500/90 px-4 py-2.5 text-xs font-medium tracking-wide text-warm-300/70 shadow-ambient-dark backdrop-blur-xl transition-all duration-300 ease-premium hover:border-yellow-500/30 hover:text-text-primary"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/70" />
        {currentDisplay?.label} + {currentBody?.label}
      </button>

      {/* Panel */}
      {open && (
        <div className="absolute bottom-14 right-0 w-[340px] overflow-hidden rounded-2xl border border-white/[0.06] bg-dark-500/95 shadow-ambient-dark backdrop-blur-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-400/50">
              Font Pairing
            </span>
            <button
              onClick={reset}
              className="text-[11px] font-medium text-warm-400/40 transition-colors hover:text-yellow-500"
            >
              Reset
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-5">
            {/* Display font */}
            <div className="mb-5">
              <label className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-400/40">
                Display
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {DISPLAY_FONTS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setDisplay(f.id)}
                    className={`rounded-lg px-3 py-2 text-left text-[13px] transition-all duration-200 ${
                      display === f.id
                        ? "bg-yellow-500/10 font-medium text-yellow-500 ring-1 ring-yellow-500/25"
                        : "text-warm-300/60 hover:bg-white/[0.04] hover:text-text-primary"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              {currentDisplay && (
                <div className="mt-2 flex gap-3 text-[10px] tracking-wide text-warm-400/30">
                  <span>Italic: {currentDisplay.italic ? "yes" : "no"}</span>
                </div>
              )}
            </div>

            {/* Body font */}
            <div className="mb-5">
              <label className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-400/40">
                Body
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {BODY_FONTS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setBody(f.id)}
                    className={`rounded-lg px-3 py-2 text-left text-[13px] transition-all duration-200 ${
                      body === f.id
                        ? "bg-yellow-500/10 font-medium text-yellow-500 ring-1 ring-yellow-500/25"
                        : "text-warm-300/60 hover:bg-white/[0.04] hover:text-text-primary"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Weight controls */}
            <div className="mb-5 border-t border-white/[0.06] pt-5">
              <label className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.2em] text-warm-400/40">
                Display Weights
              </label>

              <WeightSlider
                label="Hero"
                value={heroWeight}
                weights={weights}
                onChange={setHeroWeight}
              />
              <WeightSlider
                label="Section"
                value={sectionWeight}
                weights={weights}
                onChange={setSectionWeight}
              />
              <WeightSlider
                label="Card"
                value={cardWeight}
                weights={weights}
                onChange={setCardWeight}
              />
            </div>

            {/* Preview */}
            <div className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-4">
              <p
                className="text-2xl leading-[1.1] tracking-[-0.02em] text-text-primary"
                style={{ fontFamily: currentDisplay?.css, fontWeight: heroWeight }}
              >
                Torne-se Chainless
              </p>
              <p
                className="mt-1.5 text-base leading-[1.1] tracking-[-0.01em] text-warm-300/40"
                style={{ fontFamily: currentDisplay?.css, fontWeight: sectionWeight }}
              >
                Construído para quem exige controle.
              </p>
              <p
                className="mt-3 text-sm leading-[1.6] text-warm-300/60"
                style={{ fontFamily: currentBody?.css }}
              >
                Cresça seu patrimônio com total controle. Suas chaves continuam suas.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WeightSlider({
  label,
  value,
  weights,
  onChange,
}: {
  label: string;
  value: number;
  weights: readonly number[];
  onChange: (w: number) => void;
}) {
  const idx = weights.indexOf(value);

  return (
    <div className="mb-3 last:mb-0">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-[11px] text-warm-300/50">{label}</span>
        <span className="text-[11px] tabular-nums text-warm-400/40">
          {value} {WEIGHT_LABELS[value] ?? ""}
        </span>
      </div>
      <div className="flex gap-1">
        {weights.map((w, i) => (
          <button
            key={w}
            onClick={() => onChange(w)}
            className={`h-1.5 flex-1 rounded-full transition-all duration-200 ${
              i <= idx
                ? "bg-yellow-500/60"
                : "bg-white/[0.06]"
            } hover:bg-yellow-500/40`}
            aria-label={`${label} weight ${w}`}
          />
        ))}
      </div>
    </div>
  );
}
