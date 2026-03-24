"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./motion";

const EASE_PREMIUM = [0.32, 0.72, 0, 1] as const;

const cardBenefits = [
  "1 USDC = 1 USD no exterior",
  "Até 5% cashback em compras",
  "Pix via BRZ no Brasil",
];

export function SpendCreditLegacy() {
  return (
    <section
      id="dolar"
      aria-labelledby="spend-heading"
      className="relative bg-dark-500 px-4 py-32 md:py-44"
    >
      {/* Atmospheric glows */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/[0.02] blur-[200px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-yellow-600/[0.015] blur-[180px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left: Copy column */}
          <FadeUp className="lg:col-span-6">
            {/* Eyebrow */}
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-warm-700/25 bg-warm-800/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-500/90 backdrop-blur-sm">
              Cartão Chainless
            </span>

            <h2
              id="spend-heading"
              className="max-w-[500px] font-serif text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[#FAFAF8]"
            >
              Compre dólares sem IOF
              <br />
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

          {/* Right: Card visual */}
          <FadeUp delay={0.15} className="flex justify-center lg:col-span-6">
            {/* Doppelrand outer shell */}
            <div className="w-full max-w-[480px] rounded-[2.25rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04]">
              {/* Inner core — card showcase area */}
              <div
                className="inner-highlight-dark relative overflow-hidden rounded-[calc(2.25rem-0.375rem)]"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(42,41,38,0.7) 0%, rgba(28,27,25,0.9) 50%, rgba(24,23,22,0.95) 100%)",
                }}
              >
                {/* Atmospheric blur inside */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full bg-yellow-500/[0.04] blur-[80px]"
                  aria-hidden="true"
                />

                {/* Aspect container for the card visual */}
                <div className="flex aspect-[4/5] flex-col items-center justify-center p-8 md:p-12">
                  {/* The card itself */}
                  <div className="w-full max-w-[320px]">
                    <div
                      className="relative flex aspect-[1.586/1] flex-col justify-between rounded-2xl p-6 shadow-ambient-dark md:p-7"
                      aria-hidden="true"
                      style={{
                        background:
                          "linear-gradient(145deg, rgba(42,41,38,0.9) 0%, rgba(24,23,22,1) 100%)",
                      }}
                    >
                      {/* Gold edge accent */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-yellow-500/10" />

                      {/* Card top row */}
                      <div className="flex items-start justify-between">
                        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-warm-400/60">
                          Chainless
                        </span>
                        <div className="flex items-center gap-1.5">
                          <div className="h-5 w-5 rounded-full bg-yellow-500/60" />
                          <div className="-ml-2.5 h-5 w-5 rounded-full bg-yellow-500/30" />
                        </div>
                      </div>

                      {/* Chip */}
                      <div className="h-7 w-9 rounded-[4px] border border-yellow-500/15 bg-yellow-500/15" />

                      {/* Card bottom row */}
                      <div>
                        <div className="mb-2 font-mono text-sm tabular-nums tracking-[0.2em] text-warm-300/50">
                          •••• •••• •••• 7842
                        </div>
                        <div className="flex items-end justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-warm-400/40">
                            USDC Debit
                          </span>
                          <span className="font-mono text-[10px] text-warm-400/40">
                            Gnosis Pay
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Reflection / shadow beneath */}
                    <div
                      className="mx-auto mt-4 h-6 w-[85%] rounded-[50%] bg-black/20 blur-xl"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Caption */}
                  <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-warm-400/50">
                    Gaste USDC globalmente
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
