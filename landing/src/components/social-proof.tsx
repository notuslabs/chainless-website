"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const testimonials = [
  {
    quote:
      "Tem várias soluções boas de privacidade além de BTC na LN. Chainless você paga no Pix e adquire stables que circulam fora do controle — zero de custo na aquisição.",
    name: "Renato Amoedo",
    title: "Perito Criminal, Polícia Técnica da Bahia",
    initials: "RA",
    photo: `${BASE}/testimonial-renato.jpg`,
    gradient: "from-yellow-600/40 to-amber-900/60",
  },
  {
    quote:
      "Privacidade, autocustódia e facilidade de uso — a Chainless entrega os três sem compromisso.",
    name: "Mychel Mendes",
    title: "Contador Especializado em Crypto",
    initials: "MM",
    photo: `${BASE}/testimonial-mychel.jpg`,
    gradient: "from-warm-600/40 to-warm-800/60",
  },
  {
    quote:
      "Pools de liquidez com a facilidade que faltava. Finalmente DeFi acessível sem abrir mão do controle.",
    name: "Ramon Cunha",
    title: "Investidor Cripto & Educador DeFi",
    initials: "RC",
    photo: `${BASE}/testimonial-ramon.jpg`,
    gradient: "from-yellow-700/30 to-warm-700/50",
  },
];

/* ── Ping-pong video: plays forward 0→end then reverse end→0, loops ── */
function PingPongVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const directionRef = useRef<"forward" | "reverse">("forward");
  const rafRef = useRef<number>(0);

  const tick = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.readyState < 2) {
      rafRef.current = requestAnimationFrame(tick);
      return;
    }

    if (directionRef.current === "reverse") {
      // Step backward ~16ms worth of time each frame
      video.currentTime = Math.max(0, video.currentTime - 1 / 30);
      if (video.currentTime <= 0.03) {
        directionRef.current = "forward";
        video.currentTime = 0;
        video.play();
      }
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      video.pause();
      directionRef.current = "reverse";
    };

    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("ended", handleEnded);
      cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="auto"
      className={className}
    />
  );
}

/* ── Avatar with graceful fallback to gradient + initials ── */
function Avatar({
  src,
  initials,
  gradient,
  size = 96,
}: {
  src: string;
  initials: string;
  gradient: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {/* Outer glow ring */}
      <div
        className="absolute -inset-[3px] rounded-full opacity-60"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(255,199,61,0.3), rgba(255,199,61,0.05) 50%, rgba(255,199,61,0.3))",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 rounded-full ring-[1.5px] ring-yellow-500/20" />
      <div className="relative h-full w-full overflow-hidden rounded-full">
        {!failed ? (
          <Image
            src={src}
            alt={`Foto de ${initials}`}
            fill
            className="object-cover object-top"
            sizes={`${size}px`}
            onError={() => setFailed(true)}
          />
        ) : null}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${gradient} ${failed ? "opacity-100" : "opacity-0"}`}
        >
          <span
            className="font-semibold tracking-wide text-yellow-500/80"
            style={{ fontSize: size * 0.19 }}
          >
            {initials}
          </span>
        </div>
      </div>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-dark-600 px-4 py-32 md:py-44">
      {/* ── Blurred video background — atmospheric depth ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <PingPongVideo
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/social-proof-bg.mp4`}
          className="absolute left-1/2 top-1/2 h-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-[0.12] blur-[60px] saturate-[0.6]"
        />
        {/* Dark vignette overlay to keep text readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, rgba(24,23,22,0.7) 70%, rgba(24,23,22,0.95) 100%)",
          }}
        />
      </div>

      {/* ── Subtle warm radial highlight ── */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(204,156,0,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-warm-700/25 bg-warm-800/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-500/90 backdrop-blur-sm">
                Quem já se tornou Chainless
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="max-w-[450px] font-serif text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[#FAFAF8]">
                Vozes soberanas.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[300px] text-[15px] leading-[1.7] text-warm-300/60 md:text-right">
              Pessoas que escolheram controle absoluto sobre seu patrimônio
              digital.
            </p>
          </FadeUp>
        </div>

        {/* ── Testimonial cards — 3 equal columns desktop, horizontal scroll mobile ── */}
        <StaggerContainer className="-mx-4 mt-20 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {testimonials.map((t, i) => (
            <StaggerItem
              key={t.name}
              className="w-[85vw] shrink-0 snap-start md:w-auto"
            >
              {/* Doppelrand outer shell */}
              <div className="group h-full rounded-[2.25rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04] backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/[0.08] hover:shadow-ambient-dark">
                <div
                  className="inner-highlight-dark relative flex h-full flex-col overflow-hidden rounded-[calc(2.25rem-0.375rem)] p-8 md:p-10"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(165deg, rgba(42,41,38,0.75) 0%, rgba(28,27,25,0.92) 50%, rgba(24,23,22,0.97) 100%)"
                        : "linear-gradient(155deg, rgba(42,41,38,0.65) 0%, rgba(28,27,25,0.88) 55%, rgba(24,23,22,0.93) 100%)",
                  }}
                >
                  {/* ── Decorative giant quote mark — watermark ── */}
                  <div
                    className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[10rem] font-bold leading-none text-yellow-500/[0.05]"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>

                  {/* ── Subtle inner atmospheric glow ── */}
                  <div
                    className={`pointer-events-none absolute h-[200px] w-[200px] rounded-full blur-[100px] ${
                      i === 0
                        ? "-right-10 -top-10 bg-yellow-500/[0.06]"
                        : i === 1
                          ? "-left-10 bottom-0 bg-yellow-500/[0.04]"
                          : "right-0 top-1/2 bg-yellow-500/[0.03]"
                    }`}
                    aria-hidden="true"
                  />

                  {/* ── Portrait ── */}
                  <div className="mb-8">
                    <Avatar
                      src={t.photo}
                      initials={t.initials}
                      gradient={t.gradient}
                      size={i === 0 ? 104 : 88}
                    />
                  </div>

                  {/* ── Quote ── */}
                  <blockquote
                    className={`pull-quote flex-1 font-serif font-normal italic leading-[1.6] text-[#FAFAF8]/90 ${
                      i === 0 ? "text-lg md:text-xl" : "text-base md:text-lg"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* ── Attribution ── */}
                  <div className="mt-8 border-t border-warm-700/15 pt-6">
                    <p className="text-sm font-semibold tracking-tight text-[#FAFAF8]">
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium tracking-wide text-warm-400/50">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
