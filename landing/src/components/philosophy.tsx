"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lock, Wallet } from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion";

const EASE_PREMIUM = [0.32, 0.72, 0, 1] as const;

interface PhilosophyPillar {
  icon: PhosphorIcon;
  overline: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  image: string;
  imageAlt: string;
}

const pillars: PhilosophyPillar[] = [
  {
    icon: Lock,
    overline: "Soberania dos ativos",
    title: "Ninguém pode congelar seus ativos",
    description:
      "Após a FTX, R$40B+ ficaram presos em custodiantes. Seus ativos vivem na blockchain, controlados pela sua chave. Sem função de congelamento no contrato.",
    stat: "R$40B+",
    statLabel: "presos em custodiantes após FTX",
    image: "/philosophy-1.jpg",
    imageAlt: "Detalhe arquitetônico de concreto com luz natural quente",
  },
  {
    icon: Wallet,
    overline: "Sem intermediários",
    title: "Rendimentos direto na sua carteira",
    description:
      "Yield DeFi flui para você no instante em que é gerado. Sem custódia oculta, sem atrasos, sem repasse.",
    stat: "0",
    statLabel: "intermediários entre você e seu yield",
    image: "/philosophy-2.jpg",
    imageAlt: "Interior com luz natural quente entrando por janelas amplas",
  },
];

export function Philosophy() {
  return (
    <section
      id="sobre"
      aria-labelledby="philosophy-heading"
      className="relative bg-dark-500 px-4 py-32 md:py-44"
    >
      {/* Atmospheric warm wash — left side */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/[0.02] blur-[200px]"
        aria-hidden="true"
      />
      {/* Right-side glow */}
      <div
        className="pointer-events-none absolute right-0 bottom-1/3 h-[400px] w-[400px] rounded-full bg-yellow-600/[0.015] blur-[180px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px]">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-warm-700/25 bg-warm-800/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-500/90 backdrop-blur-sm">
                Sobre
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                id="philosophy-heading"
                className="max-w-[520px] font-serif text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[#FAFAF8]"
              >
                Construído para
                <br />
                <span className="text-warm-300/40">quem exige controle.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[320px] text-[15px] leading-[1.7] text-warm-300/60 md:text-right">
              Cada decisão de arquitetura existe para eliminar intermediários
              entre você e seu patrimônio.
            </p>
          </FadeUp>
        </div>

        {/* ── Pillar cards ── */}
        <StaggerContainer className="mt-20 space-y-6">
          {pillars.map((pillar, i) => {
            const IconComponent = pillar.icon;

            return (
              <StaggerItem key={pillar.title}>
                {/* Doppelrand outer shell */}
                <div className="group rounded-[2.25rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/[0.08] hover:shadow-ambient-dark">
                  {/* Inner core */}
                  <div
                    className="inner-highlight-dark relative overflow-hidden rounded-[calc(2.25rem-0.375rem)]"
                    style={{
                      background: i === 0
                        ? "linear-gradient(165deg, rgba(42,41,38,0.7) 0%, rgba(28,27,25,0.9) 50%, rgba(24,23,22,0.95) 100%)"
                        : "linear-gradient(195deg, rgba(42,41,38,0.6) 0%, rgba(28,27,25,0.85) 55%, rgba(24,23,22,0.9) 100%)",
                    }}
                  >
                    {/* Atmospheric blur inside card */}
                    <div
                      className="pointer-events-none absolute -right-10 top-1/4 h-[220px] w-[220px] rounded-full bg-yellow-500/[0.04] blur-[90px]"
                      aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-12">
                      {/* Image area — always left */}
                      <div className="relative h-[280px] md:col-span-5 md:h-full md:min-h-[420px]">
                        <Image
                          src={pillar.image}
                          alt={pillar.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 42vw"
                        />
                        {/* Dark warm tint */}
                        <div className="absolute inset-0 bg-dark-500/30 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-yellow-900/8" />
                        {/* Inner edge refraction */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
                        {/* Fade into card content on right */}
                        <div
                          className="absolute inset-0 hidden md:block"
                          style={{
                            background:
                              "linear-gradient(to right, transparent 0%, transparent 50%, rgba(28,27,25,0.7) 85%, rgba(28,27,25,0.95) 100%)",
                          }}
                        />
                        {/* Mobile bottom fade */}
                        <div
                          className="absolute inset-x-0 bottom-0 h-24 md:hidden"
                          style={{
                            background:
                              "linear-gradient(to bottom, transparent 0%, rgba(28,27,25,0.9) 100%)",
                          }}
                        />
                      </div>

                      {/* Content area — always right */}
                      <div className="relative flex flex-col justify-center p-8 md:col-span-7 md:p-12 lg:p-16">
                        {/* Icon container */}
                        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-warm-700/25 bg-warm-800/50 transition-all duration-500 group-hover:border-yellow-500/20 group-hover:bg-yellow-500/10">
                          <IconComponent
                            size={20}
                            weight="regular"
                            className="text-warm-400/60 transition-colors duration-500 group-hover:text-yellow-500/80"
                          />
                        </div>

                        {/* Overline */}
                        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-yellow-500/80">
                          {pillar.overline}
                        </span>

                        {/* Title */}
                        <h3 className="mb-5 text-2xl font-semibold leading-[1.1] tracking-tight text-[#FAFAF8] md:text-[1.75rem]">
                          {pillar.title}
                        </h3>

                        {/* Description */}
                        <p className="max-w-[42ch] text-[15px] leading-[1.7] text-warm-300/60">
                          {pillar.description}
                        </p>

                        {/* Stat callout */}
                        <div className="mt-10 flex items-end gap-3 border-t border-warm-700/15 pt-8">
                          <span className="font-mono text-3xl font-medium tabular-nums tracking-tight text-[#FAFAF8] md:text-4xl">
                            {pillar.stat}
                          </span>
                          <span className="mb-1 text-sm leading-snug text-warm-400/50">
                            {pillar.statLabel}
                          </span>
                        </div>

                        {/* Bottom accent hairline */}
                        <motion.div
                          className="mt-8 h-px w-16 bg-gradient-to-r from-yellow-500/25 to-transparent"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          style={{ originX: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: EASE_PREMIUM,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
