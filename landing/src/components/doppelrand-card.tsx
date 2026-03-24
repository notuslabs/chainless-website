"use client";

import { type ReactNode, type ElementType } from "react";

interface DoppelrandCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "light";
  hover?: boolean;
  glow?: boolean;
  gradientAngle?: number;
  as?: ElementType;
}

/**
 * Doppelrand ("double border") card — Chainless's signature surface treatment.
 *
 * Double-shell construction: translucent outer shell containing an inner elevated core,
 * separated by a visible 6px gap. Creates a luxury packaging feel.
 *
 * Outer shell: rounded-[2.25rem], bg-white/[0.02], p-1.5, ring-1 ring-white/[0.04]
 * Inner core: rounded-[calc(2.25rem-0.375rem)], gradient background, inner-highlight-dark
 */
export function DoppelrandCard({
  children,
  className = "",
  innerClassName = "",
  variant = "default",
  hover = true,
  glow = false,
  gradientAngle = 145,
  as: Component = "div",
}: DoppelrandCardProps) {
  const gradientStyle =
    variant === "light"
      ? `linear-gradient(${gradientAngle}deg, rgba(42,41,38,0.6) 0%, rgba(28,27,25,0.85) 50%, rgba(24,23,22,0.9) 100%)`
      : `linear-gradient(${gradientAngle}deg, rgba(42,41,38,0.7) 0%, rgba(28,27,25,0.9) 50%, rgba(24,23,22,0.95) 100%)`;

  return (
    <Component
      className={`group rounded-[2.25rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04] ${
        hover
          ? "transition-all duration-700 ease-premium hover:ring-white/[0.08] hover:shadow-ambient-dark"
          : ""
      } ${className}`}
    >
      <div
        className={`inner-highlight-dark relative overflow-hidden rounded-[calc(2.25rem-0.375rem)] ${innerClassName}`}
        style={{ background: gradientStyle }}
      >
        {glow && (
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full bg-yellow-500/[0.04] blur-[90px]"
            aria-hidden="true"
          />
        )}
        {children}
      </div>
    </Component>
  );
}
