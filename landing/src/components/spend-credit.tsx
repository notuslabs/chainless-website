"use client";

import { FadeUp } from "./motion";
import { Eyebrow } from "./eyebrow";
import { useMessages } from "next-intl";

export function SpendCredit() {
  const dict = useMessages() as any;
  const t = dict.spend;

  return (
    <section
      id="cartao"
      aria-labelledby="spend-heading"
      className="relative overflow-x-clip bg-black px-6 py-20 md:py-32 lg:py-44"
    >
      {/* Warm yellow atmospheric glows — left side, away from video */}
      <div
        className="pointer-events-none absolute -left-[10%] top-[10%] h-[700px] w-[700px] rounded-full blur-[250px]"
        aria-hidden="true"
        style={{ background: "rgba(255, 199, 61, 0.12)" }}
      />
      <div
        className="pointer-events-none absolute -left-[5%] bottom-[5%] h-[var(--glow-lg)] w-[var(--glow-lg)] rounded-full blur-[var(--glow-blur-lg)]"
        aria-hidden="true"
        style={{ background: "rgba(204, 156, 0, 0.08)" }}
      />

      <div className="mx-auto max-w-[var(--container-content)]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left: Copy column */}
          <FadeUp className="lg:col-span-5">
            {/* Eyebrow */}
            <Eyebrow className="mb-5">{t.eyebrow}</Eyebrow>

            <h2
              id="spend-heading"
              className="font-serif text-[length:var(--text-section-heading)] font-normal leading-[1.06] tracking-[-0.02em] text-text-primary"
            >
              {t.heading}
            </h2>

            <p className="mt-6 max-w-[48ch] text-small leading-[1.7] text-warm-300/70">
              {t.description}
            </p>

            {/* IOF Comparison — glass card */}
            <div
              className="doppelrand-hallmark-narrow mt-12 inline-block rounded-2xl border border-white/[0.08] px-6 pb-7 pt-6 backdrop-blur-md md:mt-16"
              aria-label={t.iofComparison}
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px -4px rgba(0,0,0,0.3)",
              }}
            >
              <p className="text-xs uppercase tracking-wider text-warm-300/60">{t.iofLabel}</p>
              <p className="mt-2 flex items-baseline gap-4">
                <span className="text-2xl tabular-nums tracking-tight text-warm-400/50 line-through decoration-warm-400/30 md:text-3xl">
                  3,5%
                </span>
                <span className="text-sm text-warm-300/50" aria-hidden="true">→</span>
                <span className="text-3xl font-semibold tabular-nums tracking-tight text-yellow-500 md:text-4xl">
                  0%
                </span>
                <span className="text-sm font-medium text-yellow-500/70">
                  {t.viaChainless}
                </span>
              </p>
            </div>

            {/* Card benefits */}
            <ul className="mt-12 space-y-4 md:mt-16">
              {t.benefits.map((point: string) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-base leading-relaxed text-warm-300/70"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-yellow-500/40"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>

          </FadeUp>

          {/* Right: Card hero video */}
          <FadeUp delay={0.15} className="flex justify-center lg:col-span-7">
            <div className="relative w-full max-w-[560px]">
              {/* Video + soft edge fades */}
              <div className="relative">
                <video
                  src={`${process.env.__NEXT_ROUTER_BASEPATH || ""}/card-hero-loop.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-auto w-full"
                />

                {/* Soft edge fades to warm dark — all 4 sides */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[15%]"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to bottom, #000000, transparent)" }}
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[15%]"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to top, #000000, transparent)" }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-[12%]"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to right, #000000, transparent)" }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-[12%]"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to left, #000000, transparent)" }}
                />
              </div>

              {/* Caption */}
              <p className="mt-4 text-center text-sm uppercase tracking-[0.15em] text-warm-300/60">
                {t.caption}
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
