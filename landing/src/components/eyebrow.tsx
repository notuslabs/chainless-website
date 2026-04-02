import { type ReactNode } from "react";

const glassStyle = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0.03) 100%)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.05)",
} as const;

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-overline font-semibold uppercase tracking-[0.25em] text-yellow-500/90 ${className}`}
      style={glassStyle}
    >
      {children}
    </span>
  );
}
