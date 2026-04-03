"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_PREMIUM, FadeUp, StaggerContainer, StaggerItem } from "./motion";
import { Eyebrow } from "./eyebrow";
import { DoppelrandCard } from "./doppelrand-card";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface PhilosophyPillar {
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
    overline: "Não somos uma corretora",
    title: "Nós não temos acesso ao seu patrimônio.",
    description:
      "Corretoras custodiam seus ativos e você depende da solvência delas. A Chainless foi desenhada fora dessa lógica. Seus ativos vivem na blockchain, na sua chave. Não é uma promessa. É a arquitetura.",
    stat: "",
    statLabel: "",
    image: `${BASE}/philosophy-1.jpg`,
    imageAlt: "Detalhe arquitetônico de concreto com luz natural quente",
  },
  {
    overline: "Não somos uma simples carteira",
    title: "Uma plataforma financeira completa, sem complexidade.",
    description:
      "Carteiras tradicionais te entregam 12 palavras e uma promessa: não perca. A Chainless te entrega um app completo: Pix, cartão, rendimento, bitcoin, com recuperação de acesso integrada.",
    stat: "",
    statLabel: "",
    image: `${BASE}/philosophy-2.jpg`,
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
        className="pointer-events-none absolute left-0 top-1/4 h-[var(--glow-lg)] w-[var(--glow-lg)] rounded-full bg-yellow-500/[0.02] blur-[var(--glow-blur-lg)]"
        aria-hidden="true"
      />
      {/* Right-side glow */}
      <div
        className="pointer-events-none absolute right-0 bottom-1/3 h-[var(--glow-md)] w-[var(--glow-md)] rounded-full bg-yellow-600/[0.015] blur-[var(--glow-blur-md)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[var(--container-content)]">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <Eyebrow className="mb-5">Sobre</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                id="philosophy-heading"
                className="max-w-[520px] font-serif text-[length:var(--text-section-heading)] font-normal leading-[1.06] tracking-[-0.02em] text-text-primary"
              >
                Patrimônio digital soberano.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[320px] text-small leading-[1.7] text-warm-300/60 md:text-right">
              Sem a custódia centralizada das corretoras, sem a fricção das carteiras.
            </p>
          </FadeUp>
        </div>

        {/* ── Pillar cards ── */}
        <StaggerContainer className="mt-20 space-y-6">
          {pillars.map((pillar, i) => {
            return (
              <StaggerItem key={pillar.title}>
                <DoppelrandCard
                  gradientAngle={i === 0 ? 165 : 195}
                  variant={i === 0 ? "default" : "light"}
                >
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
                      {/* Overline */}
                      <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-yellow-500/80">
                        {pillar.overline}
                      </span>

                      {/* Title */}
                      <h3 className="mb-5 font-serif text-2xl font-normal leading-[1.1] tracking-[-0.01em] text-text-primary md:text-[1.75rem]">
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="max-w-[42ch] text-small leading-[1.7] text-warm-300/60">
                        {pillar.description}
                      </p>

                      {/* Stat callout */}
                      {pillar.stat && (
                        <div className="mt-10 flex items-end gap-3 border-t border-warm-700/15 pt-8">
                          <span className="text-3xl font-medium tabular-nums tracking-tight text-text-primary md:text-4xl">
                            {pillar.stat}
                          </span>
                          <span className="mb-1 text-sm leading-snug text-warm-400/50">
                            {pillar.statLabel}
                          </span>
                        </div>
                      )}

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
                </DoppelrandCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
