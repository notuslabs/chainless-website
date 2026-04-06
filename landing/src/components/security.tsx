"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import {
  Fingerprint,
  Cpu,
  ShareNetwork,
  ArrowCounterClockwise,
  Lock,
  ArrowRight,
} from "@phosphor-icons/react";
import { FadeUp, StaggerContainer, StaggerItem, EASE_PREMIUM } from "./motion";
import { Eyebrow } from "./eyebrow";
import { DoppelrandCard } from "./doppelrand-card";

/* ── Security layer data ── */

const layers: {
  icon: ElementType;
  label: string;
  title: string;
  detail: string;
}[] = [
  {
    icon: Fingerprint,
    label: "Biometria obrigatória",
    title: "Cada transação exige a sua confirmação biométrica.",
    detail: "Verificação no hardware, não por software.",
  },
  {
    icon: Cpu,
    label: "Isolamento no hardware",
    title: "Sua chave privada nunca sai do chip dedicado.",
    detail: "Apple Secure Enclave · Android StrongBox.",
  },
  {
    icon: ShareNetwork,
    label: "Fragmentação criptográfica",
    title: "Ninguém possui sua chave. Nem nós.",
    detail: "Fragmentos criptografados, regenerados continuamente.",
  },
  {
    icon: ArrowCounterClockwise,
    label: "Recuperação integrada",
    title: "Autocustódia sem o risco de perder acesso.",
    detail: "Recuperação via sua conta Google ou Apple — sem seed phrases.",
  },
];


/* ── Animated icon container ── */

function LayerIcon({ icon: Icon, index }: { icon: ElementType; index: number }) {
  return (
    <motion.div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/[0.07]"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.2 + index * 0.1,
        ease: EASE_PREMIUM,
      }}
    >
      <Icon size={26} weight="duotone" className="text-yellow-500/80" />
    </motion.div>
  );
}

/* ── MPC Shard Diagram ── */

function ShardDiagram() {
  return (
    <motion.div
      className="relative mx-auto mt-6 flex h-48 w-full items-center justify-center rounded-2xl border border-warm-700/[0.12] bg-dark-600/80 p-6"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3, ease: EASE_PREMIUM }}
    >
      {/* Connection lines — draw on */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 140"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        {[
          { x1: 58, y1: 40, x2: 100, y2: 70, delay: 0.5 },
          { x1: 142, y1: 40, x2: 100, y2: 70, delay: 0.65 },
          { x1: 100, y1: 108, x2: 100, y2: 70, delay: 0.8 },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke="rgba(255,199,61,0.18)"
            strokeWidth="1"
            strokeDasharray="4 3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: line.delay, ease: EASE_PREMIUM }}
          />
        ))}
      </svg>

      {/* Center lock — with glow ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: EASE_PREMIUM }}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/25 bg-yellow-500/[0.1] shadow-[0_0_20px_rgba(255,199,61,0.12)]">
          <Lock size={22} weight="duotone" className="text-yellow-500/90" />
        </div>
      </motion.div>

      {/* Shard nodes */}
      {[
        { pos: "left-[26%] top-[24%]", opacity: "bg-yellow-500/60", shadow: "shadow-[0_0_14px_rgba(255,199,61,0.35)]", delay: 0.7 },
        { pos: "right-[26%] top-[24%]", opacity: "bg-yellow-500/50", shadow: "shadow-[0_0_14px_rgba(255,199,61,0.25)]", delay: 0.85 },
        { pos: "bottom-[16%] left-1/2 -translate-x-1/2", opacity: "bg-yellow-500/40", shadow: "shadow-[0_0_14px_rgba(255,199,61,0.2)]", delay: 1.0 },
      ].map((node, i) => (
        <motion.div
          key={i}
          className={`shard-pulse-${i + 1} absolute ${node.pos} h-4 w-4 rounded-full ${node.opacity} ${node.shadow}`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 12,
            delay: node.delay,
          }}
        />
      ))}

      {/* Shard labels */}
      {[
        "left-[19%] top-[11%]",
        "right-[19%] top-[11%]",
        "bottom-[5%] left-1/2 -translate-x-1/2",
      ].map((pos, i) => (
        <motion.span
          key={i}
          className={`absolute ${pos} font-mono text-[10px] uppercase tracking-[0.15em] text-yellow-500/30`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 + i * 0.1, ease: EASE_PREMIUM }}
        >
          shard
        </motion.span>
      ))}
    </motion.div>
  );
}

/* ── Security Section ── */

export function Security() {
  return (
    <section
      id="seguranca"
      aria-labelledby="security-heading"
      className="relative bg-dark-500 px-4 py-32 md:py-44"
    >
      {/* Atmospheric glows */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-[var(--glow-lg)] w-[var(--glow-lg)] rounded-full bg-yellow-500/[0.02] blur-[var(--glow-blur-lg)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/3 right-0 h-[var(--glow-md)] w-[var(--glow-md)] rounded-full bg-yellow-600/[0.015] blur-[var(--glow-blur-md)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[var(--container-content)]">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <Eyebrow className="mb-5">Arquitetura de segurança</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                id="security-heading"
                className="max-w-[520px] font-serif text-[length:var(--text-section-heading)] font-normal leading-[1.06] tracking-[-0.02em] text-text-primary"
              >
                Segurança incomparável.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[340px] text-small leading-[1.7] text-warm-300/70 md:text-right">
              Camadas de proteção que operam em silêncio — para que seu
              patrimônio nunca dependa de confiança.
            </p>
          </FadeUp>
        </div>

        {/* ── 2-column grid: layers + MPC deep-dive ── */}
        <div className="mt-20 grid items-stretch gap-6 md:grid-cols-12">
          {/* Left column: Security layers stack */}
          <div className="flex md:col-span-7">
            <FadeUp delay={0.15} className="flex h-full w-full">
              <DoppelrandCard className="h-full w-full" gradientAngle={165}>
                <StaggerContainer className="p-8 md:p-10" staggerDelay={0.08}>
                  {layers.map((layer, i) => (
                    <StaggerItem key={layer.label}>
                      <div
                        className={`flex items-start gap-5 py-6 ${
                          i === 0 ? "pt-0" : ""
                        } ${
                          i < layers.length - 1
                            ? "border-b border-warm-700/[0.12]"
                            : "pb-0"
                        }`}
                      >
                        {/* Animated icon container — larger */}
                        <LayerIcon icon={layer.icon} index={i} />

                        {/* Content */}
                        <div className="min-w-0 pt-0.5">
                          <span className="block text-caption uppercase tracking-[0.2em] text-yellow-500/70">
                            {layer.label}
                          </span>
                          <p className="mt-1.5 text-base font-medium leading-snug text-text-primary/90">
                            {layer.title}
                          </p>
                          <p className="mt-1 text-sm leading-[1.6] text-warm-300/60">
                            {layer.detail}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}

                  {/* Bottom accent hairline */}
                  <motion.div
                    className="mt-6 h-px w-16 bg-gradient-to-r from-yellow-500/25 to-transparent"
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
                </StaggerContainer>
              </DoppelrandCard>
            </FadeUp>
          </div>

          {/* Right column: MPC deep-dive card */}
          <div className="flex md:col-span-5">
            <FadeUp delay={0.3} className="flex h-full w-full">
              <DoppelrandCard
                className="h-full w-full"
                innerClassName="flex h-full flex-col p-8 md:p-10"
                variant="light"
                gradientAngle={195}
              >
                {/* Overline */}
                <span className="block text-xs uppercase tracking-[0.2em] text-yellow-500/80">
                  Tecnologia MPC
                </span>

                {/* Heading */}
                <h3 className="mt-4 font-serif text-xl font-normal leading-[1.15] tracking-[-0.01em] text-text-primary md:text-2xl">
                  Como o MPC garante que ninguém detém sua chave.
                </h3>

                {/* Body */}
                <p className="mt-4 text-sm leading-relaxed text-warm-300/70">
                  Sua chave é dividida em fragmentos criptografados, distribuídos
                  em locais separados e regenerados continuamente. Ninguém — nem
                  a Chainless — consegue reconstituí-la sozinho.
                </p>

                {/* Shard diagram */}
                <ShardDiagram />

                {/* Trust badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Código aberto",
                    "Zero vulnerabilidades descobertas",
                    "Auditado",
                  ].map((badge) => (
                    <motion.span
                      key={badge}
                      className="rounded-full border border-warm-700/20 bg-warm-800/25 px-3 py-1 text-sm text-warm-300/70"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6, ease: EASE_PREMIUM }}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>

                {/* CTA link */}
                <div className="mt-auto pt-8">
                  <a
                    href="#mpc"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-yellow-500/90 underline decoration-yellow-500/30 underline-offset-4 transition-colors duration-200 hover:text-yellow-500 hover:decoration-yellow-500/60"
                  >
                    Entenda a arquitetura MPC
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </DoppelrandCard>
            </FadeUp>
          </div>
        </div>

      </div>
    </section>
  );
}
