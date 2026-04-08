"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem, EASE_PREMIUM } from "./motion";
import { DoppelrandCard } from "./doppelrand-card";

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
      className="relative bg-dark-600 px-4 py-32 md:py-44"
    >
      {/* Atmospheric glows */}
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-[var(--glow-lg)] w-[var(--glow-lg)] rounded-full bg-yellow-500/[0.02] blur-[var(--glow-blur-lg)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[var(--glow-md)] w-[var(--glow-md)] rounded-full bg-yellow-600/[0.015] blur-[var(--glow-blur-md)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[var(--container-content)]">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <StatusBadge />
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                id="credit-heading"
                className="mt-8 max-w-[520px] font-serif text-[length:var(--text-section-heading)] font-normal leading-[1.06] tracking-[-0.02em] text-text-primary"
              >
                Receba dólares sem vender seu Bitcoin.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[320px] text-small leading-[1.7] text-warm-300/70 md:text-right">
              Deposite BTC como garantia e receba crédito em USDC a 3,5% ao
              ano, sem prazo fixo.
            </p>
          </FadeUp>
        </div>

        {/* ── Three-step story cards ── */}
        <StaggerContainer className="mt-20 grid gap-5 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.number}>
              <DoppelrandCard
                className="h-full"
                innerClassName="flex h-full flex-col p-8 md:p-10"
                gradientAngle={165}
              >
                {/* Ghost number watermark */}
                <span
                  className="pointer-events-none absolute right-8 top-6 select-none font-serif text-[72px] font-bold leading-none text-white/[0.025]"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Step label */}
                <span className="mb-8 text-caption uppercase tracking-[0.2em] text-yellow-500/70">
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
                    <span className="block text-lg font-medium tracking-tight text-text-primary">
                      {step.tokenName}
                    </span>
                    <span className="mt-0.5 block text-sm tracking-wider text-warm-300/60">
                      {step.tokenTicker}
                    </span>
                  </div>
                </div>

                {/* Key metric */}
                <div className="mt-auto min-h-[5rem]">
                  <span
                    className={`block text-3xl font-semibold tabular-nums tracking-tight md:text-4xl ${
                      step.metricAccent
                        ? "text-emerald-400"
                        : "text-text-primary/90"
                    }`}
                  >
                    {step.metric}
                  </span>
                  {step.subMetric && (
                    <span className="mt-1 block text-sm text-warm-300/60">
                      {step.subMetric}
                    </span>
                  )}
                  {step.badge && (
                    <span className="mt-2.5 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/[0.07] px-3 py-1 text-caption font-medium text-yellow-500/80">
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
                <p className="mt-4 text-sm leading-relaxed text-warm-300/70">
                  {step.description}
                </p>
              </DoppelrandCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Legal disclaimer ── */}
        <FadeUp delay={0.5}>
          <p className="mt-10 max-w-[680px] text-caption leading-relaxed text-warm-400/40">
            Valores meramente ilustrativos. A taxa de 3,5% a.a. e a
            valorização de +2,4% são estimativas baseadas em desempenho
            passado e condições de mercado. Não constituem promessa nem
            garantia de resultado. Dados atualizados disponíveis no app.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
