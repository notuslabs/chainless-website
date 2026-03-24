"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion";

const EASE_PREMIUM = [0.32, 0.72, 0, 1] as const;

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* ─────────────────────────────────────────────────────────
 * StatusBadge — "Em breve" pulse indicator
 * ───────────────────────────────────────────────────────── */

function StatusBadge() {
  return (
    <span
      role="status"
      className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1.5 text-xs font-medium text-yellow-500/80"
    >
      <span
        className="h-2 w-2 animate-pulse rounded-full bg-yellow-500"
        aria-hidden="true"
      />
      Em breve
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
 * Step data — the three-beat story
 * ───────────────────────────────────────────────────────── */

const STEPS = [
  {
    number: "01",
    label: "Deposite",
    icon: `${BASE}/tokens/btc.png`,
    tokenName: "Bitcoin",
    tokenTicker: "BTC",
    metric: "1 BTC",
    metricAccent: false,
    badge: null,
    subMetric: null,
    description: "Seus BTC ficam como garantia on-chain, sempre sob sua custódia.",
    glowColor: "bg-yellow-500/[0.05]",
    glowPosition: "-right-10 -top-10",
  },
  {
    number: "02",
    label: "Receba",
    icon: `${BASE}/tokens/usdc.png`,
    tokenName: "USDC",
    tokenTicker: "Dólar digital",
    metric: "$3.000",
    metricAccent: false,
    badge: "3,5% a.a.",
    subMetric: null,
    description: "Receba crédito em dólar digital, instantaneamente.",
    glowColor: "bg-yellow-600/[0.04]",
    glowPosition: "-left-10 -bottom-10",
  },
  {
    number: "03",
    label: "Mantenha",
    icon: `${BASE}/tokens/btc.png`,
    tokenName: "Bitcoin",
    tokenTicker: "Sua garantia",
    metric: "+2,4%",
    metricAccent: true,
    badge: null,
    subMetric: "este mês",
    description: "Seu Bitcoin continua valorizando. Você não vendeu nada.",
    glowColor: "bg-emerald-500/[0.04]",
    glowPosition: "-right-10 bottom-0",
  },
] as const;

/* ═════════════════════════════════════════════════════════
 * BorrowCredit — Empréstimos com BTC
 *
 * Three-step sequential story: Deposit BTC → Borrow USDC
 * → BTC keeps appreciating. Each step is a Doppelrand
 * card. The numbered sequence makes the mechanism clear.
 * ═════════════════════════════════════════════════════════ */

export function BorrowCredit() {
  return (
    <section
      id="credito"
      aria-labelledby="credit-heading"
      className="relative bg-dark-500 px-4 py-32 md:py-44"
    >
      {/* Atmospheric glows */}
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-yellow-500/[0.02] blur-[200px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-yellow-600/[0.015] blur-[180px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px]">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <StatusBadge />
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                id="credit-heading"
                className="mt-8 max-w-[520px] font-serif text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[#FAFAF8]"
              >
                Acesse dólares
                <br />
                <span className="text-warm-300/40">sem vender seu Bitcoin.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[320px] text-[15px] leading-[1.7] text-warm-300/60 md:text-right">
              Deposite BTC como garantia e receba crédito em USDC — a 3,5% ao
              ano, sem prazo fixo.
            </p>
          </FadeUp>
        </div>

        {/* ── Three-step story cards ── */}
        <StaggerContainer className="mt-20 grid gap-5 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="group h-full rounded-[2.25rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/[0.08] hover:shadow-ambient-dark">
                <div
                  className="inner-highlight-dark relative flex h-full flex-col overflow-hidden rounded-[calc(2.25rem-0.375rem)] p-8 md:p-10"
                  style={{
                    background:
                      "linear-gradient(165deg, rgba(42,41,38,0.7) 0%, rgba(28,27,25,0.9) 50%, rgba(24,23,22,0.95) 100%)",
                  }}
                >
                  {/* Atmospheric glow */}
                  <div
                    className={`pointer-events-none absolute ${step.glowPosition} h-[160px] w-[160px] rounded-full ${step.glowColor} blur-[70px]`}
                    aria-hidden="true"
                  />

                  {/* Ghost number watermark */}
                  <span
                    className="pointer-events-none absolute right-8 top-6 select-none font-serif text-[72px] font-bold leading-none text-white/[0.025]"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  {/* Step label */}
                  <span className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-yellow-500/70">
                    {step.label}
                  </span>

                  {/* Token identity */}
                  <div className="mb-8 flex items-center gap-4">
                    <Image
                      src={step.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="shrink-0 rounded-full"
                      style={{ width: 48, height: 48 }}
                    />
                    <div>
                      <span className="block text-lg font-medium tracking-tight text-[#FAFAF8]">
                        {step.tokenName}
                      </span>
                      <span className="mt-0.5 block font-mono text-[11px] tracking-wider text-warm-400/45">
                        {step.tokenTicker}
                      </span>
                    </div>
                  </div>

                  {/* Key metric */}
                  <div className="mt-auto min-h-[5rem]">
                    <span
                      className={`block font-mono text-3xl font-semibold tabular-nums tracking-tight md:text-4xl ${
                        step.metricAccent
                          ? "text-emerald-400"
                          : "text-[#FAFAF8]/90"
                      }`}
                    >
                      {step.metric}
                    </span>
                    {step.subMetric && (
                      <span className="mt-1 block font-mono text-[11px] text-warm-400/45">
                        {step.subMetric}
                      </span>
                    )}
                    {step.badge && (
                      <span className="mt-2.5 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/[0.07] px-3 py-1 font-mono text-[11px] font-medium text-yellow-500/80">
                        {step.badge}
                      </span>
                    )}
                  </div>

                  {/* Animated hairline */}
                  <motion.div
                    className="mt-6 h-px bg-gradient-to-r from-warm-700/20 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    style={{ originX: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.4 + i * 0.1,
                      ease: EASE_PREMIUM,
                    }}
                  />

                  {/* Description */}
                  <p className="mt-4 text-[13px] leading-relaxed text-warm-300/50">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Legal disclaimer ── */}
        <FadeUp delay={0.5}>
          <p className="mt-10 max-w-[680px] text-[11px] leading-relaxed text-warm-400/35">
            Taxas estimadas com base no protocolo Aave e sujeitas a variação de
            mercado. Este serviço não constitui oferta de crédito — trata-se de
            uma integração com protocolo descentralizado de empréstimo.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
