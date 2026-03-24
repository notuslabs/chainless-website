"use client";

import { FadeUp } from "./motion";

const cardBenefits = [
  "1 USDC = 1 USD no exterior",
  "Até 5% cashback em compras",
  "Pix via BRZ no Brasil",
];

export function SpendCredit() {
  return (
    <section
      id="dolar"
      aria-labelledby="spend-heading"
      className="relative bg-black px-4 py-32 md:py-44"
    >
      {/* Warm yellow atmospheric glows — left side, away from video */}
      <div
        className="pointer-events-none absolute -left-[10%] top-[10%] h-[700px] w-[700px] rounded-full blur-[250px]"
        aria-hidden="true"
        style={{ background: "rgba(255, 199, 61, 0.12)" }}
      />
      <div
        className="pointer-events-none absolute -left-[5%] bottom-[5%] h-[500px] w-[500px] rounded-full blur-[200px]"
        aria-hidden="true"
        style={{ background: "rgba(204, 156, 0, 0.08)" }}
      />

      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left: Copy column */}
          <FadeUp className="lg:col-span-5">
            {/* Eyebrow */}
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-warm-700/25 bg-warm-800/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-500/90 backdrop-blur-sm">
              Cartão Chainless
            </span>

            <h2
              id="spend-heading"
              className="font-serif text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[#FAFAF8]"
            >
              Compre dólares sem IOF{" "}
              <span className="text-warm-300/40">e gaste globalmente.</span>
            </h2>

            <p className="mt-6 max-w-[48ch] text-[15px] leading-[1.7] text-warm-300/60">
              USDC ao câmbio real, sem spread oculto. Após a conversão, os
              ativos são seus — na blockchain, sob sua chave.
            </p>

            {/* IOF Comparison */}
            <dl
              aria-label="Comparação de IOF"
              className="mt-12 flex gap-6 md:mt-16 md:gap-10"
            >
              <div>
                <dt className="mb-2 font-mono text-[11px] uppercase tracking-wider text-warm-400/50">
                  IOF bancário
                </dt>
                <dd className="font-mono text-3xl tabular-nums tracking-tight text-warm-300/40 md:text-4xl">
                  3,5%
                </dd>
              </div>
              <div
                className="w-px self-stretch bg-warm-700/20"
                aria-hidden="true"
              />
              <div>
                <dt className="mb-2 font-mono text-[11px] uppercase tracking-wider text-warm-400/50">
                  IOF via Chainless
                </dt>
                <dd className="font-mono text-3xl font-medium tabular-nums tracking-tight text-[#FAFAF8] md:text-4xl">
                  0%
                </dd>
              </div>
            </dl>

            {/* Card benefits */}
            <ul className="mt-10 space-y-4 md:mt-12">
              {cardBenefits.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-base leading-relaxed text-warm-300/60"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-yellow-500/40"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>

            {/* Status */}
            <div className="mt-10">
              <span
                role="status"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400"
              >
                <span
                  className="h-2 w-2 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                Disponível
              </span>
            </div>
          </FadeUp>

          {/* Right: Card hero video */}
          <FadeUp delay={0.15} className="flex justify-center lg:col-span-7">
            <div className="relative w-full max-w-[560px]">
              {/* Video + soft edge fades */}
              <div className="relative">
                <video
                  src="/card-hero-loop.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-auto w-full"
                />

                {/* Soft edge fades to black — all 4 sides */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[15%]"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to bottom, black, transparent)" }}
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[15%]"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to top, black, transparent)" }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-[12%]"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to right, black, transparent)" }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-[12%]"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to left, black, transparent)" }}
                />
              </div>

              {/* Caption */}
              <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-warm-400/50">
                Gaste USDC globalmente
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
