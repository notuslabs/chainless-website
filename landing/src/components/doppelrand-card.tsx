"use client";

import { type ReactNode, type ElementType } from "react";

interface DoppelrandCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "light";
  hover?: boolean;
  gradientAngle?: number;
  as?: ElementType;
}

/**
 * Doppelrand ("double border") card — Chainless's signature surface treatment.
 *
 * Double-shell construction: outer shell containing an inner elevated core,
 * separated by a visible 6px gap. Reframed as "matting in a picture frame."
 *
 * Old Money refinement:
 * - 18px radius (architectural, not pillowy)
 * - No glow orbs (wealth absorbs light)
 * - Gold hallmark accent at inner top edge
 * - Quieter 2-stop gradient
 * - Hover: subtle 1px lift, barely perceptible
 */
export function DoppelrandCard({
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
      className={`group rounded-[1.125rem] bg-white/[0.03] p-1.5 ring-1 ring-white/[0.05] ${
        hover
          ? "transition-all duration-700 ease-premium hover:ring-white/[0.07] hover:-translate-y-px"
          : ""
      } ${className}`}
    >
      <div
        className={`doppelrand-hallmark inner-highlight-dark relative overflow-hidden rounded-[calc(1.125rem-0.375rem)] ${innerClassName}`}
        style={{ background: gradientStyle }}
      >
        {children}
      </div>
    </Component>
  );
}
