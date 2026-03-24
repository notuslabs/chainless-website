"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem, EASE_PREMIUM } from "./motion";
import { DoppelrandCard } from "./doppelrand-card";

const steps = [
  {
    number: "01",
    title: "Crie sua carteira",
    description:
      "Suas chaves privadas são geradas no seu dispositivo. Chainless nunca as vê, nunca as armazena, nunca tem acesso.",
    icon: WalletIcon,
  },
  {
    number: "02",
    title: "Deposite via Pix",
    description:
      "Transfira reais direto da sua conta bancária. Conversão instantânea para ativos digitais na sua carteira.",
    icon: PixIcon,
  },
  {
    number: "03",
    title: "Veja crescer",
    description:
      "Escolha estratégias DeFi curadas — Aave, Compound, Lido. Ative com um toque e acompanhe seu patrimônio crescer, sob seu controle.",
    icon: StrategyIcon,
  },
  {
    number: "04",
    title: "Gaste globalmente",
    description:
      "Use seu cartão USDC para compras no mundo inteiro. Sem IOF, sem conversões ocultas, sem taxas escondidas.",
    icon: GrowthIcon,
  },
];

/* ── Step illustration SVGs with draw-on animation ── */

function WalletIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16">
      <motion.rect
        x="8" y="20" width="56" height="44" rx="8"
        stroke="currentColor" strokeWidth="1.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE_PREMIUM }}
      />
      <motion.path
        d="M16 20V16a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v4"
        stroke="currentColor" strokeWidth="1.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: EASE_PREMIUM }}
      />
      <motion.circle
        cx="52" cy="42" r="6"
        stroke="var(--color-yellow-500)" strokeWidth="1.5" fill="none"
        initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8, ease: EASE_PREMIUM }}
      />
      <motion.path
        d="M46 42h-8m4 0v6"
        stroke="var(--color-yellow-500)" strokeWidth="1.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.1, ease: EASE_PREMIUM }}
      />
    </svg>
  );
}

function PixIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16">
      <motion.path
        d="M44 8L28 40h12L32 72l24-40H44L52 8z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE_PREMIUM }}
      />
      <motion.path
        d="M44 8L28 40h12L32 72l24-40H44L52 8z"
        fill="var(--color-yellow-500)" fillOpacity="0.08"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.9, ease: EASE_PREMIUM }}
      />
      <motion.circle
        cx="20" cy="24" r="1.5" fill="var(--color-yellow-500)"
        initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 0.5 }}
        viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.4, ease: EASE_PREMIUM }}
      />
      <motion.circle
        cx="62" cy="56" r="1" fill="var(--color-yellow-500)"
        initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 0.4 }}
        viewport={{ once: true }} transition={{ delay: 1.3, duration: 0.4, ease: EASE_PREMIUM }}
      />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16">
      {[
        { x: 10, y: 14, w: 24, h: 20, delay: 0 },
        { x: 40, y: 14, w: 30, h: 20, delay: 0.15 },
        { x: 10, y: 40, w: 30, h: 20, delay: 0.25 },
        { x: 46, y: 40, w: 24, h: 20, delay: 0.35 },
      ].map((block, i) => (
        <motion.rect
          key={i} x={block.x} y={block.y} width={block.w} height={block.h}
          rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + block.delay, ease: EASE_PREMIUM }}
        />
      ))}
      <motion.rect
        x="14" y="18" width="16" height="3" rx="1.5"
        fill="var(--color-yellow-500)"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
        viewport={{ once: true }} style={{ originX: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: EASE_PREMIUM }}
      />
      <motion.circle
        cx="56" cy="50" r="3.5"
        fill="var(--color-yellow-500)" fillOpacity="0.2"
        stroke="var(--color-yellow-500)" strokeWidth="1"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1, ease: EASE_PREMIUM }}
      />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16">
      <motion.path
        d="M8 64C20 60 30 52 40 40s14-20 20-24 12-6 12-4"
        stroke="var(--color-yellow-500)" strokeWidth="2" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE_PREMIUM }}
      />
      <motion.path
        d="M8 64C20 60 30 52 40 40s14-20 20-24 12-6 12-4V72H8z"
        fill="var(--color-yellow-500)" fillOpacity="0.04"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1, ease: EASE_PREMIUM }}
      />
      <motion.circle
        cx="72" cy="12" r="3.5" fill="var(--color-yellow-500)"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 1.2 }}
      />
      <motion.path
        d="M8 72h64M8 16v56"
        stroke="currentColor" strokeWidth="1" strokeOpacity="0.15"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE_PREMIUM }}
      />
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section
      className="relative bg-dark-500 px-4 py-32 md:py-44"
      id="como-funciona"
    >
      {/* Warm gradient wash rising from bottom — transitions toward CTA */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(42,41,38,0.4) 100%)",
        }}
      />

      {/* Atmospheric glow — right side, upper */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[var(--glow-lg)] w-[var(--glow-lg)] rounded-full blur-[var(--glow-blur-lg)]"
        aria-hidden="true"
        style={{ background: "rgba(255, 199, 61, 0.035)" }}
      />

      {/* Left-side glow for depth */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        aria-hidden="true"
        style={{
          height: "400px",
          background: "radial-gradient(ellipse 60% 100% at 30% 100%, rgba(204,156,0,0.025) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-[var(--container-content)]">
        {/* Section header — editorial, with counter */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-warm-700/25 bg-warm-800/30 px-4 py-1.5 text-overline font-semibold uppercase tracking-[0.25em] text-yellow-500/90 backdrop-blur-sm">
                Como funciona
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="max-w-[550px] font-serif text-[length:var(--text-section-heading)] font-normal leading-[1.06] tracking-[-0.03em] text-text-primary">
                Quatro passos para soberania.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[300px] text-small leading-[1.7] text-warm-300/60 md:text-right">
              Da criação da carteira ao rendimento ativo — sem intermediários em nenhum momento.
            </p>
          </FadeUp>
        </div>

        {/* Asymmetric bento — 7/5 top row + 5/7 bottom row */}
        <StaggerContainer className="mt-20 grid gap-5 md:grid-cols-12 md:gap-6">
          {steps.map((step, i) => {
            const colSpan =
              i === 0 ? "md:col-span-7"
              : i === 1 ? "md:col-span-5"
              : i === 2 ? "md:col-span-5"
              : "md:col-span-7";

            return (
              <StaggerItem key={step.number} className={colSpan}>
                <DoppelrandCard
                  className="h-full"
                  innerClassName="flex h-full flex-col p-8 md:p-10"
                  gradientAngle={155 + i * 15}
                >
                  {/* Atmospheric blurred accent — varies position per card */}
                  <div
                    className="pointer-events-none absolute h-[140px] w-[140px] rounded-full bg-yellow-500/[0.04] blur-[70px]"
                    aria-hidden="true"
                    style={{
                      right: i % 2 === 0 ? "-2rem" : "auto",
                      left: i % 2 !== 0 ? "-2rem" : "auto",
                      top: i < 2 ? "-2rem" : "auto",
                      bottom: i >= 2 ? "-2rem" : "auto",
                    }}
                  />
                  {/* Top row: illustration + editorial number */}
                  <div className="flex items-start justify-between">
                    {/* SVG icon */}
                    <div className="text-white/[0.15] transition-colors duration-700 ease-premium group-hover:text-white/[0.3]">
                      <step.icon />
                    </div>
                    {/* Number — editorial serif treatment */}
                    <div className="flex flex-col items-end">
                      <span className="font-serif text-[2.5rem] font-bold leading-none tracking-[-0.04em] text-white/[0.05] transition-colors duration-700 ease-premium group-hover:text-white/[0.08]">
                        {step.number}
                      </span>
                      <motion.div
                        className="mt-2 h-px w-8 bg-yellow-500/25"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        style={{ originX: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3 + i * 0.1,
                          ease: EASE_PREMIUM,
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-lg font-semibold tracking-[-0.01em] text-text-primary md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-warm-300/60">
                    {step.description}
                  </p>

                  {/* Bottom accent — animated gold rule */}
                  <div className="mt-auto pt-8">
                    <motion.div
                      className="h-px w-16 bg-gradient-to-r from-yellow-500/25 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      style={{ originX: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0.5 + i * 0.1,
                        ease: EASE_PREMIUM,
                      }}
                    />
                  </div>
                </DoppelrandCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
