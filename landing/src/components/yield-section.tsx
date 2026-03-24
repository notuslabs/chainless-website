"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, TrendUp } from "@phosphor-icons/react";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion";

const EASE_PREMIUM = [0.32, 0.72, 0, 1] as const;

/* ─────────────────────────────────────────────────────────
 * Token & protocol logo paths — official CoinGecko assets
 * ───────────────────────────────────────────────────────── */

const TOKEN_LOGOS: Record<string, string> = {
  BTC: "/tokens/btc.png",
  wBTC: "/tokens/wbtc.png",
  ETH: "/tokens/eth.png",
  USDC: "/tokens/usdc.png",
  USDT: "/tokens/usdt.png",
  SOL: "/tokens/sol.png",
};

const PROTOCOL_LOGOS: Record<string, string> = {
  Curve: "/tokens/curve.png",
  Uniswap: "/tokens/uniswap.png",
  Aave: "/tokens/aave.png",
};

function TokenIcon({
  token,
  size = 30,
}: {
  token: string;
  size?: number;
}) {
  const src = TOKEN_LOGOS[token];
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={token}
      width={size}
      height={size}
      className="shrink-0 rounded-full"
      style={{ width: size, height: size }}
    />
  );
}

/* ─────────────────────────────────────────────────────────
 * Pool data
 * ───────────────────────────────────────────────────────── */

interface Pool {
  pair: [string, string];
  protocol: string;
  apy: number;
  range: string;
}

const pools: Pool[] = [
  {
    pair: ["wBTC", "ETH"],
    protocol: "Curve",
    apy: 42.5,
    range: "30–60%+",
  },
  {
    pair: ["ETH", "USDC"],
    protocol: "Uniswap",
    apy: 18.2,
    range: "12–25%",
  },
  {
    pair: ["USDC", "USDT"],
    protocol: "Aave",
    apy: 4.8,
    range: "3–6%",
  },
];

/* ─────────────────────────────────────────────────────────
 * Live pool APY ticker
 * ───────────────────────────────────────────────────────── */

const PoolTicker = memo(function PoolTicker({
  pool,
  index,
}: {
  pool: Pool;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(pool.apy);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setValue((prev) => {
        const volatility =
          pool.apy > 20 ? 2.5 : pool.apy > 10 ? 1.2 : 0.4;
        const delta = (Math.random() - 0.5) * volatility;
        const next = prev + delta;
        const floor = pool.apy * 0.7;
        const ceiling = pool.apy * 1.3;
        return Math.max(
          floor,
          Math.min(ceiling, parseFloat(next.toFixed(2)))
        );
      });
    }, 3000 + index * 500);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, pool.apy, index]);

  const isTopPool = index === 0;
  const protocolLogo = PROTOCOL_LOGOS[pool.protocol];

  return (
    <div
      className={`flex items-center justify-between py-4 ${
        index < pools.length - 1
          ? "border-b border-warm-700/[0.12]"
          : ""
      }`}
    >
      {/* Token pair with official logos */}
      <div className="flex items-center gap-3.5">
        <div className="relative flex -space-x-2">
          <div className="relative z-[2]">
            <TokenIcon token={pool.pair[0]} size={30} />
          </div>
          <div className="relative z-[1]">
            <TokenIcon token={pool.pair[1]} size={30} />
          </div>
        </div>
        <div>
          <span className="block text-sm font-medium leading-tight text-[#FAFAF8]/85">
            {pool.pair[0]}/{pool.pair[1]}
          </span>
          <div className="mt-0.5 flex items-center gap-1.5">
            {protocolLogo && (
              <Image
                src={protocolLogo}
                alt={pool.protocol}
                width={14}
                height={14}
                className="rounded-full"
                style={{ width: 14, height: 14 }}
              />
            )}
            <span className="font-mono text-[10px] tracking-wider text-warm-400/50">
              {pool.protocol}
            </span>
          </div>
        </div>
      </div>

      {/* APY value */}
      <div className="text-right">
        <span
          className={`font-mono text-lg font-semibold tabular-nums ${
            isTopPool ? "text-yellow-500" : "text-[#FAFAF8]/75"
          }`}
          aria-live="off"
          aria-label={`${value.toFixed(1)} porcento ao ano`}
        >
          {value.toFixed(1)}%
        </span>
        <span className="block font-mono text-[10px] text-warm-400/40">
          {pool.range}
        </span>
      </div>
    </div>
  );
});

/* ═════════════════════════════════════════════════════════
 * YieldSection — Rendimentos
 * ═════════════════════════════════════════════════════════ */

export function YieldSection() {
  return (
    <section
      id="rendimentos"
      aria-labelledby="yield-heading"
      className="relative bg-dark-500 px-4 py-32 md:py-44"
    >
      {/* Atmospheric glows */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/[0.02] blur-[200px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-yellow-600/[0.015] blur-[180px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px]">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-warm-700/25 bg-warm-800/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-500/90 backdrop-blur-sm">
                Rendimentos
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                id="yield-heading"
                className="max-w-[500px] font-serif text-[clamp(2rem,1.5rem+2vw,3.25rem)] font-bold leading-[1.06] tracking-[-0.03em] text-[#FAFAF8]"
              >
                Seu patrimônio.
                <br />
                <span className="text-warm-300/40">Seus rendimentos.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[320px] text-[15px] leading-[1.7] text-warm-300/60 md:text-right">
              De stablecoins em dólar a pools de liquidez — cada rendimento sob
              sua custódia, cada protocolo auditado.
            </p>
          </FadeUp>
        </div>

        {/* ── Product cards — PROTEGER + CRESCER ── */}
        <StaggerContainer className="mt-20 grid gap-5 md:grid-cols-12 md:gap-6">
          {/* ▸ PROTEGER — 5 cols, Kling Bitcoin coin background */}
          <StaggerItem className="md:col-span-5">
            <div className="group h-full rounded-[2.25rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/[0.08] hover:shadow-ambient-dark">
              <div
                className="inner-highlight-dark relative flex h-full flex-col overflow-hidden rounded-[calc(2.25rem-0.375rem)]"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(42,41,38,0.7) 0%, rgba(28,27,25,0.9) 50%, rgba(24,23,22,0.95) 100%)",
                }}
              >
                {/* ── Kling Bitcoin coin photograph — shifted down, glassmorphism ── */}
                <div
                  className="pointer-events-none absolute inset-x-0 -bottom-0 top-[15%] md:top-[20%]"
                  aria-hidden="true"
                >
                  <Image
                    src="/bitcoin-coin.png"
                    alt=""
                    fill
                    className="object-cover object-[center_30%]"
                    sizes="(max-width: 768px) 100vw, 42vw"
                    style={{
                      opacity: 0.3,
                      filter:
                        "saturate(0.5) sepia(0.15) brightness(0.55) blur(6px)",
                    }}
                  />
                </div>
                {/* Glassmorphism overlay — frosted depth */}
                <div
                  className="pointer-events-none absolute inset-0 backdrop-blur-[2px]"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(28,27,25,0.75) 0%, rgba(28,27,25,0.4) 35%, rgba(28,27,25,0.35) 60%, rgba(28,27,25,0.8) 100%)",
                  }}
                />

                {/* Warm atmospheric glow */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-[180px] w-[180px] rounded-full bg-yellow-500/[0.06] blur-[80px]"
                  aria-hidden="true"
                />

                {/* Content — above image */}
                <div className="relative z-[1] flex h-full flex-col p-8 md:p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-warm-700/25 bg-warm-800/50 backdrop-blur-sm transition-all duration-500 group-hover:border-yellow-500/20 group-hover:bg-yellow-500/10">
                      <ShieldCheck
                        size={20}
                        weight="regular"
                        className="text-warm-400/60 transition-colors duration-500 group-hover:text-yellow-500/80"
                      />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-500/80">
                      Proteger
                    </span>
                  </div>

                  <h3 className="mb-6 text-xl font-medium leading-[1.15] tracking-tight text-[#FAFAF8] md:text-2xl">
                    150+ ativos digitais. Sob seu controle absoluto.
                  </h3>

                  <ul className="space-y-4">
                    {/* Token row — with official crypto logos */}
                    <li className="flex items-start gap-3 text-sm leading-relaxed text-warm-300/70">
                      <div className="mt-0.5 flex shrink-0 -space-x-1.5">
                        <TokenIcon token="BTC" size={20} />
                        <TokenIcon token="ETH" size={20} />
                        <TokenIcon token="SOL" size={20} />
                      </div>
                      <span>
                        Bitcoin, Ethereum, Solana e tokens globais
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm leading-relaxed text-warm-300/70">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-yellow-500/40"
                        aria-hidden="true"
                      />
                      Ouro tokenizado — metal precioso sem custódia física
                    </li>
                    <li className="flex items-start gap-3 text-sm leading-relaxed text-warm-300/70">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-yellow-500/40"
                        aria-hidden="true"
                      />
                      Chaves geradas no seu dispositivo. Sempre.
                    </li>
                  </ul>

                  {/* Bottom accent hairline */}
                  <div className="mt-auto pt-8">
                    <motion.div
                      className="h-px w-16 bg-gradient-to-r from-yellow-500/25 to-transparent"
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

          {/* ▸ CRESCER — 7 cols, live pools with official token logos */}
          <StaggerItem className="md:col-span-7">
            <div className="group h-full rounded-[2.25rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-white/[0.08] hover:shadow-ambient-dark">
              <div
                className="inner-highlight-dark relative flex h-full flex-col overflow-hidden rounded-[calc(2.25rem-0.375rem)] p-8 md:p-10"
                style={{
                  background:
                    "linear-gradient(155deg, rgba(42,41,38,0.6) 0%, rgba(28,27,25,0.85) 55%, rgba(24,23,22,0.9) 100%)",
                }}
              >
                {/* Atmospheric blur */}
                <div
                  className="pointer-events-none absolute -left-10 bottom-0 h-[200px] w-[200px] rounded-full bg-yellow-500/[0.05] blur-[90px]"
                  aria-hidden="true"
                />

                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-500/20 bg-yellow-500/10 transition-all duration-500 group-hover:bg-yellow-500/15">
                    <TrendUp
                      size={20}
                      weight="regular"
                      className="text-yellow-500"
                    />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-500">
                    Crescer
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-medium leading-[1.15] tracking-tight text-[#FAFAF8] md:text-2xl">
                  Acesse rendimento DeFi.
                </h3>

                <p className="mb-8 max-w-[44ch] text-sm leading-relaxed text-warm-300/60">
                  Protocolos auditados, retornos transparentes. Em poucos
                  cliques, direto da sua carteira.
                </p>

                {/* ── Live pool list ── */}
                <div
                  className="rounded-2xl border border-warm-700/20 bg-warm-800/25 p-5 md:p-6"
                  style={{
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.03), inset 0 0 0 1px rgba(255,255,255,0.015)",
                  }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-warm-400/50">
                      Pools ativos
                    </span>
                    <div className="flex items-center gap-2">
                      {/* Live pulse dot */}
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                      </span>
                      <span className="text-[11px] text-warm-400/50">
                        APY ao vivo
                      </span>
                    </div>
                  </div>

                  <div aria-label="Pools de liquidez com rendimentos ao vivo">
                    {pools.map((pool, i) => (
                      <PoolTicker
                        key={pool.pair.join("-")}
                        pool={pool}
                        index={i}
                      />
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="mt-5 text-[11px] leading-relaxed text-warm-400/40">
                  Rendimentos variáveis. Riscos de mercado e smart contract
                  aplicáveis.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
