"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  EASE_PREMIUM,
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "./motion";
import { DoppelrandCard } from "./doppelrand-card";
import { Eyebrow } from "./eyebrow";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* ─────────────────────────────────────────────────────────
 * Token & protocol logo paths — official CoinGecko assets
 * ───────────────────────────────────────────────────────── */

const TOKEN_LOGOS: Record<string, string> = {
  BTC: `${BASE}/tokens/btc.png`,
  wBTC: `${BASE}/tokens/wbtc.png`,
  ETH: `${BASE}/tokens/eth.png`,
  USDC: `${BASE}/tokens/usdc.png`,
  USDT: `${BASE}/tokens/usdt.png`,
  SOL: `${BASE}/tokens/sol.png`,
  PAXG: `${BASE}/tokens/paxg.png`,
};

const PROTOCOL_LOGOS: Record<string, string> = {
  Curve: `${BASE}/tokens/curve.png`,
  Uniswap: `${BASE}/tokens/uniswap.png`,
  Aave: `${BASE}/tokens/aave.png`,
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
    protocol: "Uniswap",
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
    protocol: "Uniswap",
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
          <span className="block text-base font-medium leading-tight text-text-primary/90">
            {pool.pair[0]}/{pool.pair[1]}
          </span>
          <div className="mt-1 flex items-center gap-1.5">
            {protocolLogo && (
              <Image
                src={protocolLogo}
                alt={pool.protocol}
                width={16}
                height={16}
                className="rounded-full"
                style={{ width: 16, height: 16 }}
              />
            )}
            <span className="text-xs tracking-wider text-warm-400/60">
              {pool.protocol}
            </span>
          </div>
        </div>
      </div>

      {/* APY value */}
      <div className="text-right">
        <span
          className={`text-lg font-semibold tabular-nums ${
            isTopPool ? "text-yellow-500" : "text-text-primary/75"
          }`}
          aria-live="off"
          aria-label={`${value.toFixed(1)} porcento ao ano`}
        >
          {value.toFixed(1)}%
        </span>
        <span className="block text-xs text-warm-400/50">
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
      className="relative bg-dark-600 px-4 py-32 md:py-44"
    >
      {/* Atmospheric glows */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-[var(--glow-lg)] w-[var(--glow-lg)] rounded-full bg-yellow-500/[0.02] blur-[var(--glow-blur-lg)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[var(--glow-md)] w-[var(--glow-md)] rounded-full bg-yellow-600/[0.015] blur-[var(--glow-blur-md)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[var(--container-content)]">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <Eyebrow className="mb-5">Rendimentos</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                id="yield-heading"
                className="max-w-[500px] font-serif text-[length:var(--text-section-heading)] font-normal leading-[1.06] tracking-[-0.02em] text-text-primary"
              >
                Seu patrimônio. Seus rendimentos.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[320px] text-small leading-[1.7] text-warm-300/70 md:text-right">
              Estratégias DeFi de grau institucional — simplificadas em um toque, sob sua custódia.
            </p>
          </FadeUp>
        </div>

        {/* ── Product cards — PROTEGER + CRESCER ── */}
        <StaggerContainer className="mt-20 grid gap-5 md:grid-cols-12 md:gap-6">
          {/* ▸ PROTEGER — 5 cols, Kling Bitcoin coin background */}
          <StaggerItem className="md:col-span-5">
            <DoppelrandCard
              className="h-full"
              innerClassName="flex h-full flex-col"
              gradientAngle={165}
            >
              {/* ── Kling Bitcoin coin photograph — shifted down, glassmorphism ── */}
              <div
                className="pointer-events-none absolute inset-x-0 -bottom-0 top-[15%] md:top-[20%]"
                aria-hidden="true"
              >
                <Image
                  src={`${BASE}/bitcoin-coin.png`}
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

              {/* Content — above image */}
              <div className="relative z-[1] flex h-full flex-col p-8 md:p-10">
                <span className="mb-6 text-xs uppercase tracking-[0.2em] text-yellow-500/80">
                  Proteger
                </span>

                <h3 className="mb-8 font-serif text-xl font-normal leading-[1.15] tracking-[-0.01em] text-text-primary md:text-2xl">
                  150+ ativos digitais. Suas chaves.
                </h3>

                {/* Asset categories */}
                <ul className="mt-12 space-y-5">
                  <li className="flex items-center gap-3.5">
                    <div className="flex -space-x-2">
                      <TokenIcon token="BTC" size={28} />
                      <TokenIcon token="ETH" size={28} />
                      <TokenIcon token="SOL" size={28} />
                    </div>
                    <span className="text-base text-text-primary/80">
                      Bitcoin, Ethereum, Solana
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <div className="flex -space-x-2">
                      <TokenIcon token="USDC" size={28} />
                      <TokenIcon token="USDT" size={28} />
                    </div>
                    <span className="text-base text-text-primary/80">
                      Stablecoins em dólar
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <TokenIcon token="PAXG" size={28} />
                    <span className="text-base text-text-primary/80">
                      Ouro tokenizado
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-warm-700/20 text-xs text-warm-300/60">+</span>
                    <span className="text-base text-warm-300/60">
                      150+ tokens globais
                    </span>
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
            </DoppelrandCard>
          </StaggerItem>

          {/* ▸ CRESCER — 7 cols, live pools with official token logos */}
          <StaggerItem className="md:col-span-7">
            <DoppelrandCard
              className="h-full"
              innerClassName="flex h-full flex-col p-8 md:p-10"
              variant="light"
              gradientAngle={155}
            >
              {/* Atmospheric blur */}

              <span className="mb-6 text-xs uppercase tracking-[0.2em] text-yellow-500">
                Crescer
              </span>

              <h3 className="mb-8 font-serif text-xl font-normal leading-[1.15] tracking-[-0.01em] text-text-primary md:text-2xl">
                Rendimento DeFi em um toque.
              </h3>

              {/* ── Live pool list ── */}
              <div
                className="rounded-2xl border border-warm-700/20 bg-warm-800/25 p-5 md:p-6"
                style={{
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.03), inset 0 0 0 1px rgba(255,255,255,0.015)",
                }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-warm-400/60">
                    Pools ativos
                  </span>
                  <div className="flex items-center gap-2">
                    {/* Live pulse dot */}
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                    </span>
                    <span className="text-xs text-warm-400/60">
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
              <p className="mt-5 text-xs leading-relaxed text-warm-400/50">
                Rendimentos variáveis. Riscos de mercado e smart contract aplicáveis.
              </p>
            </DoppelrandCard>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
