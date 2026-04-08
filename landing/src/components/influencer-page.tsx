"use client";

import { useState } from "react";
import { FadeUp, TextReveal } from "./motion";
import { MeshGradient } from "./mesh-gradient";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface InfluencerPageProps {
  name: string;
  code: string;
}

/* ── Copy button — gold halo, sentence case, aria-live ── */
function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      aria-live="polite"
      className="w-full rounded-lg bg-yellow-500 py-3 text-sm font-semibold text-dark-500 shadow-[0_4px_24px_rgba(255,199,61,0.15)] transition-all duration-500 ease-premium hover:bg-yellow-400 hover:shadow-[0_4px_40px_rgba(255,199,61,0.25)] active:scale-[0.97]"
    >
      {copied ? "Código copiado" : "Copiar código"}
    </button>
  );
}

export function InfluencerPage({ name, code }: InfluencerPageProps) {
  return (
    <>
      <Navbar />

      <main className="overflow-x-clip">
        {/* ═══ HERO — same structure as main hero.tsx ═══ */}
        <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-dark-500 px-4 py-24 md:py-32 md:px-0">
          {/* Animated mesh gradient */}
          <MeshGradient />

          {/* Cinematic video background */}
          <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
            <video
              autoPlay muted loop playsInline
              className="h-full w-full object-cover"
              style={{ opacity: 0.85, filter: "saturate(0.75) sepia(0.08)", transform: "scaleX(-1)" }}
            >
              <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hero-bg.mp4`} type="video/mp4" />
            </video>
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[45%]"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, rgba(28,27,25,0.6) 40%, rgba(28,27,25,0.95) 70%, #1C1B19 100%)",
              }}
            />
          </div>

          {/* Left vignette */}
          <div
            className="pointer-events-none absolute inset-0 z-[2]"
            aria-hidden="true"
            style={{
              background: "linear-gradient(to right, rgba(10,9,8,0.55) 0%, rgba(10,9,8,0.3) 35%, transparent 65%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-[var(--container-content)] px-4 md:px-8">
            <div className="max-w-[600px]">

              {/* Headline */}
              <FadeUp delay={0.2}>
                <h1
                  data-weight-tier="hero"
                  className="font-serif text-[length:var(--text-hero-heading)] font-normal leading-[1.03] tracking-[-0.02em] text-text-primary"
                  style={{
                    textShadow:
                      "0 0 40px rgba(10,9,8,0.4), 0 0 80px rgba(10,9,8,0.3), 0 0 160px rgba(10,9,8,0.25), 0 0 300px rgba(10,9,8,0.2)",
                  }}
                >
                  <TextReveal delay={0.3}>
                    Torne-se Chainless
                  </TextReveal>
                </h1>
              </FadeUp>

              {/* Subheadline */}
              <FadeUp delay={0.4}>
                <p
                  className="mt-6 ml-[0.3em] max-w-[460px] text-[clamp(1.1rem,1rem+0.45vw,1.25rem)] font-normal leading-[1.7] text-white/90 md:mt-8"
                  style={{
                    textShadow: "0 1px 16px rgba(10,9,8,0.9), 0 2px 40px rgba(10,9,8,0.6)",
                  }}
                >
                  Cresça seu patrimônio com total controle.
                  {" "}Pule a fila de espera com o código de <span className="font-semibold text-yellow-500">{name}</span>.
                </p>
              </FadeUp>

              {/* ── Invite code card + store buttons — same width container ── */}
              <FadeUp delay={0.55}>
                <div className="mt-10 flex flex-col gap-3 md:mt-14 md:inline-flex" id="codigo">
                  {/* Code card — same glass as store buttons */}
                  <div
                    className="rounded-xl px-5 py-4"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.05) 100%)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 12px -4px rgba(0,0,0,0.15)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                    }}
                  >
                    <span className="mb-3 block text-overline font-semibold uppercase tracking-[0.2em] text-warm-300/60">
                      Acesso direto
                    </span>

                    <div className="mb-4 flex items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] py-3">
                      <span className="font-mono text-xl font-medium tracking-[0.2em] text-text-primary md:text-2xl">
                        {code}
                      </span>
                    </div>

                    <CopyButton code={code} />
                  </div>

                  {/* Store buttons — same row width as code card */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://apps.apple.com/br/app/chainless-cripto-com-pix/id6476666418"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Baixar na App Store"
                      className="doppelrand-hallmark-narrow group relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-2xl px-5 py-3.5 transition-all duration-500 ease-premium active:scale-[0.97] sm:gap-3.5 sm:px-6"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.03), 0 4px 20px -4px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.15)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        backdropFilter: "blur(12px) saturate(1.4)",
                        WebkitBackdropFilter: "blur(12px) saturate(1.4)",
                      }}
                    >
                      <div
                        className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-full opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
                      />
                      <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-7 w-7 shrink-0 text-yellow-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="relative flex flex-col">
                        <span className="whitespace-nowrap text-xs font-medium leading-none tracking-wide text-white/70">Disponível na</span>
                        <span className="whitespace-nowrap text-base font-semibold leading-tight text-text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">App Store</span>
                      </div>
                    </a>

                    <a
                      href="https://play.google.com/store/apps/details?id=team.notus.chainless&hl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Baixar no Google Play"
                      className="doppelrand-hallmark-narrow group relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-2xl px-5 py-3.5 transition-all duration-500 ease-premium active:scale-[0.97] sm:gap-3.5 sm:px-6"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.03), 0 4px 20px -4px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.15)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        backdropFilter: "blur(12px) saturate(1.4)",
                        WebkitBackdropFilter: "blur(12px) saturate(1.4)",
                      }}
                    >
                      <div
                        className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-full opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
                      />
                      <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-7 w-7 shrink-0 text-yellow-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                        <path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm.46-.374L14.5 7.5l-2.5 2.5L4.07 1.44zM14.5 16.5L4.07 22.56 12 14.5l2.5 2zm.5-.5l5.4-3.06c.36-.2.6-.56.6-.94s-.24-.74-.6-.94L15 8l-3 4 3 4z"/>
                      </svg>
                      <div className="relative flex flex-col">
                        <span className="whitespace-nowrap text-xs font-medium leading-none tracking-wide text-white/70">Disponível no</span>
                        <span className="whitespace-nowrap text-base font-semibold leading-tight text-text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Google Play</span>
                      </div>
                    </a>
                  </div>
                </div>
              </FadeUp>

              {/* Trust signal strip */}
              <FadeUp delay={0.85}>
                <div
                  className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 md:mt-24"
                  style={{ textShadow: "0 1px 10px rgba(10,9,8,0.9)" }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg font-semibold tabular-nums text-yellow-500/90">30.000+</span>
                    <span className="text-caption font-medium tracking-wide text-white/60">carteiras soberanas</span>
                  </span>
                  <span className="h-4 w-px bg-white/20" />
                  <span className="flex items-center gap-2">
                    <span className="text-lg font-semibold tabular-nums text-yellow-500/90">R$300M+</span>
                    <span className="text-caption font-medium tracking-wide text-white/60">movimentados</span>
                  </span>
                </div>
              </FadeUp>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
