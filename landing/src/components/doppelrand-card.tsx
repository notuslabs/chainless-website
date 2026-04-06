"use client";

import { type ReactNode, type ElementType } from "react";
import { useCardStyle, type CardStyle } from "./card-style-context";

interface DoppelrandCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "light";
  hover?: boolean;
  gradientAngle?: number;
  as?: ElementType;
}

const CARD_RENDERERS: Record<
  CardStyle,
  (props: DoppelrandCardProps) => ReactNode
> = {
  doppelrand: DoppelrandRenderer,
  "modern-dark": ModernDarkRenderer,
  "minimal-dark": MinimalDarkRenderer,
  luxury: LuxuryRenderer,
  "frosted-glass": FrostedGlassRenderer,
};

/**
 * Card surface — Chainless's configurable card treatment.
 * Renders different visual styles via CardStyleContext.
 */
export function DoppelrandCard(props: DoppelrandCardProps) {
  const cardStyle = useCardStyle();
  const render = CARD_RENDERERS[cardStyle] ?? DoppelrandRenderer;
  return <>{render(props)}</>;
}

/* ═══════════════════════════════════════════════════════
 * DOPPELRAND — double-shell with gap, hallmark, inner highlights
 * ═══════════════════════════════════════════════════════ */
function DoppelrandRenderer({
  children,
  className = "",
  innerClassName = "",
  variant = "default",
  hover = true,
  gradientAngle = 160,
  as: Component = "div",
}: DoppelrandCardProps) {
  const gradientStyle =
    variant === "light"
      ? `linear-gradient(${gradientAngle}deg, rgba(38,37,34,0.75) 0%, rgba(26,25,23,0.92) 100%)`
      : `linear-gradient(${gradientAngle}deg, rgba(38,37,34,0.85) 0%, rgba(26,25,23,0.95) 100%)`;

  return (
    <Component
      className={`group flex flex-col rounded-[1.125rem] bg-white/[0.03] p-1.5 ring-1 ring-white/[0.05] ${
        hover
          ? "transition-all duration-700 ease-premium hover:ring-white/[0.07] hover:-translate-y-px"
          : ""
      } ${className}`}
    >
      <div
        className={`doppelrand-hallmark inner-highlight-dark relative flex-1 overflow-hidden rounded-[calc(1.125rem-0.375rem)] ${innerClassName}`}
        style={{ background: gradientStyle }}
      >
        {children}
      </div>
    </Component>
  );
}

/* ═══════════════════════════════════════════════════════
 * MODERN DARK — Linear/Vercel single-shell, vertical gradient
 * ═══════════════════════════════════════════════════════ */
function ModernDarkRenderer({
  children,
  className = "",
  innerClassName = "",
  variant = "default",
  hover = true,
  gradientAngle = 160,
  as: Component = "div",
}: DoppelrandCardProps) {
  const bgOpacity = variant === "light" ? [0.05, 0.012] : [0.06, 0.015];

  return (
    <Component
      className={`group relative overflow-hidden rounded-2xl ${
        hover
          ? "transition-all duration-700 ease-premium hover:-translate-y-px"
          : ""
      } ${className}`}
      style={{
        background: `linear-gradient(${gradientAngle}deg, rgba(255,255,255,${bgOpacity[0]}) 0%, rgba(255,255,255,${bgOpacity[1]}) 100%)`,
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.04), 0 2px 12px rgba(0,0,0,0.25), 0 8px 32px -8px rgba(0,0,0,0.35)",
      }}
    >
      {/* Inner highlight line at top edge */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.08) 60%, transparent 90%)",
        }}
      />
      <div className={`relative ${innerClassName}`}>{children}</div>
    </Component>
  );
}

/* ═══════════════════════════════════════════════════════
 * MINIMAL DARK — semi-translucent, subtle backdrop-blur, atmospheric
 * ═══════════════════════════════════════════════════════ */
function MinimalDarkRenderer({
  children,
  className = "",
  innerClassName = "",
  variant = "default",
  hover = true,
  as: Component = "div",
}: DoppelrandCardProps) {
  const surfaceAlpha = variant === "light" ? 0.45 : 0.55;

  return (
    <Component
      className={`group relative overflow-hidden rounded-xl ${
        hover
          ? "transition-all duration-700 ease-premium hover:-translate-y-px"
          : ""
      } ${className}`}
      style={{
        background: `rgba(38, 36, 32, ${surfaceAlpha})`,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(255,248,240,0.05)",
        boxShadow: "0 4px 6px rgba(20,19,18,0.4)",
      }}
    >
      <div className={`relative ${innerClassName}`}>{children}</div>
    </Component>
  );
}

/* ═══════════════════════════════════════════════════════
 * LUXURY — zero radius, transparent, top-border gold hairline only
 * ═══════════════════════════════════════════════════════ */
function LuxuryRenderer({
  children,
  className = "",
  innerClassName = "",
  hover = true,
  as: Component = "div",
}: DoppelrandCardProps) {
  return (
    <Component
      className={`group relative ${
        hover
          ? "transition-all duration-700 ease-premium hover:-translate-y-px"
          : ""
      } ${className}`}
      style={{
        borderTop: "1px solid rgba(255, 199, 61, 0.2)",
      }}
    >
      <div className={`relative ${innerClassName}`}>{children}</div>
    </Component>
  );
}

/* ═══════════════════════════════════════════════════════
 * FROSTED GLASS — translucent, backdrop-blur, bright border, specular highlight
 * ═══════════════════════════════════════════════════════ */
function FrostedGlassRenderer({
  children,
  className = "",
  innerClassName = "",
  variant = "default",
  hover = true,
  as: Component = "div",
}: DoppelrandCardProps) {
  const surfaceAlpha = variant === "light" ? 0.04 : 0.05;

  return (
    <Component
      className={`group relative overflow-hidden rounded-2xl ${
        hover
          ? "transition-all duration-700 ease-premium hover:-translate-y-px"
          : ""
      } ${className}`}
      style={{
        background: `linear-gradient(180deg, rgba(255,255,255,${surfaceAlpha}) 0%, rgba(28,27,25,0.6) 100%)`,
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {/* Specular refraction highlight — top-left */}
      <div
        className="pointer-events-none absolute -left-8 -top-8 z-[1] h-32 w-32 rounded-full"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div className={`relative ${innerClassName}`}>{children}</div>
    </Component>
  );
}
