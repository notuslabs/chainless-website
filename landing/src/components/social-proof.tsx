"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion";
import { Eyebrow } from "./eyebrow";
import { DoppelrandCard } from "./doppelrand-card";
import { useMessages } from "next-intl";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const testimonialMeta = [
  {
    initials: "RA",
    photo: `${BASE}/testimonial-renato.jpg`,
    gradient: "from-yellow-600/40 to-amber-900/60",
  },
  {
    initials: "MM",
    photo: `${BASE}/testimonial-mychel.jpg`,
    gradient: "from-warm-600/40 to-warm-800/60",
  },
  {
    initials: "RC",
    photo: `${BASE}/testimonial-ramon.jpg`,
    gradient: "from-yellow-700/30 to-warm-700/50",
  },
];

/* ── Ping-pong video: plays forward 0→end then reverse end→0, loops ── */
function PingPongVideo({
  sources,
  className,
}: {
  sources: { src: string; type: string }[];
  className?: string;
}) {
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

    // Only run playback + rAF loop while visible — saves battery/GPU off-screen
    let playing = false;
    const start = () => {
      if (playing) return;
      playing = true;
      video.play().catch(() => {});
      rafRef.current = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (!playing) return;
      playing = false;
      video.pause();
      cancelAnimationFrame(rafRef.current);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) start();
          else stop();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(video);

    return () => {
      io.disconnect();
      video.removeEventListener("ended", handleEnded);
      cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="metadata"
      className={className}
    >
      {sources.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
    </video>
  );
}

/* ── Avatar with graceful fallback to gradient + initials ── */
function Avatar({
  src,
  initials,
  alt,
  gradient,
  size = 96,
}: {
  src: string;
  initials: string;
  alt?: string;
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
            alt={alt || `Foto de ${initials}`}
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
  const dict = useMessages() as any;
  const s = dict.socialProof;
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials = s.testimonials.map((t: any, i: number) => ({
    ...t,
    ...testimonialMeta[i],
  }));

  /* Scroll indicator dots — IntersectionObserver with threshold 0.6 (critique fix #3) */
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cards.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6, rootMargin: "0px -10% 0px -10%" }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [testimonials.length]);

  return (
    <section className="relative overflow-hidden bg-dark-600 px-6 py-20 md:py-32 lg:py-44">
      {/* ── Blurred video background — atmospheric depth ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <PingPongVideo
          sources={[
            { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/social-proof-bg.vp9.webm`, type: "video/webm" },
            { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/social-proof-bg.av1.mp4`, type: 'video/mp4; codecs="av01.0.05M.08"' },
          ]}
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

      <div className="relative mx-auto max-w-[var(--container-content)]">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <Eyebrow className="mb-5">{s.eyebrow}</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="max-w-[450px] font-serif text-[length:var(--text-section-heading)] font-normal leading-[1.06] tracking-[-0.02em] text-text-primary">
                {s.heading}
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[300px] text-small leading-[1.7] text-warm-300/70 md:text-right">
              {s.subtitle}
            </p>
          </FadeUp>
        </div>

        {/* ── Testimonial cards — 3 equal columns desktop, horizontal scroll mobile ── */}
        <StaggerContainer aria-label={s.carouselLabel || "Depoimentos de clientes"} className="-mx-6 mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden sm:-mx-4 sm:mt-20 sm:px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {testimonials.map((t: any, i: number) => (
            <StaggerItem
              key={t.name}
              className="w-[78vw] shrink-0 snap-start self-stretch sm:w-[85vw] md:w-auto"
            >
              <div ref={(el: HTMLDivElement | null) => { cardRefs.current[i] = el; }} className="h-full" role="group" aria-label={`${t.name}, ${t.title}`}>
              <DoppelrandCard
                className="h-full backdrop-blur-sm"
                innerClassName="flex h-full flex-col p-6 sm:p-8 md:p-10"
                variant={i === 0 ? "default" : "light"}
                gradientAngle={i === 0 ? 165 : 155}
              >
                {/* ── Decorative giant quote mark — watermark ── */}
                <div
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[10rem] font-bold leading-none text-yellow-500/[0.05]"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                {/* ── Portrait ── */}
                <div className="mb-8">
                  <Avatar
                    src={t.photo}
                    initials={t.initials}
                    alt={`${t.name}, ${t.title}`}
                    gradient={t.gradient}
                    size={88}
                  />
                </div>

                {/* ── Quote ── */}
                <blockquote
                  className="pull-quote flex-1 text-base font-normal italic leading-[1.6] text-text-primary/90 md:text-lg"
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* ── Attribution ── */}
                <div className="mt-8 border-t border-warm-700/15 pt-6">
                  <p className="text-sm font-semibold tracking-tight text-text-primary">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-sm font-medium tracking-wide text-warm-300/60">
                    {t.title}
                  </p>
                </div>
              </DoppelrandCard>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Scroll indicator dots — mobile only ── */}
        <div className="mt-6 flex justify-center gap-2 sm:hidden" aria-hidden="true">
          {testimonials.map((_: any, i: number) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-yellow-500/60"
                  : "w-1.5 bg-warm-500/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
