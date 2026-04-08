"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { Wallet, Lightning, ChartLineUp, CreditCard } from "@phosphor-icons/react";
import { FadeUp, StaggerContainer, StaggerItem, EASE_PREMIUM } from "./motion";
import { Eyebrow } from "./eyebrow";
import { DoppelrandCard } from "./doppelrand-card";

const steps = [
  {
    number: "01",
    title: "Crie sua carteira",
    description:
      "Suas chaves privadas são geradas no seu dispositivo. Chainless nunca as vê, nunca as armazena, nunca tem acesso.",
    icon: Wallet,
  },
  {
    number: "02",
    title: "Deposite via Pix",
    description:
      "Transfira reais direto da sua conta bancária. Conversão instantânea para ativos digitais na sua carteira.",
    icon: Lightning,
  },
  {
    number: "03",
    title: "Veja crescer",
    description:
      "Escolha estratégias DeFi curadas como Aave, Compound e Lido. Ative com um toque e acompanhe seu patrimônio crescer, sob seu controle.",
    icon: ChartLineUp,
  },
  {
    number: "04",
    title: "Gaste globalmente",
    description:
      "Use seu cartão USDC para compras no mundo inteiro. Sem IOF, sem conversões ocultas, sem taxas escondidas.",
    icon: CreditCard,
  },
];

/* ── Animated icon container — matches security section treatment ── */

function StepIcon({ icon: Icon, index }: { icon: ElementType; index: number }) {
  return (
    <motion.div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/[0.07]"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.1,
        ease: EASE_PREMIUM,
      }}
    >
      <Icon size={26} weight="duotone" className="text-yellow-500/80" />
    </motion.div>
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
              <Eyebrow className="mb-5">Como funciona</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="max-w-[550px] font-serif text-[length:var(--text-section-heading)] font-normal leading-[1.06] tracking-[-0.02em] text-text-primary">
                Quatro passos para soberania.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[300px] text-small leading-[1.7] text-warm-300/60 md:text-right">
              Da criação da carteira ao rendimento ativo. Sem intermediários em nenhum momento.
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
                  {/* Top row: icon + editorial number */}
                  <div className="flex items-start justify-between">
                    {/* Phosphor icon in styled container */}
                    <StepIcon icon={step.icon} index={i} />
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
                  <h3 className="mt-8 font-serif text-lg font-normal tracking-[-0.01em] text-text-primary md:text-xl">
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
