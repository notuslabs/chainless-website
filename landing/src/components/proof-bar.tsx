"use client";

import { FadeUp } from "./motion";
import { AnimatedCounter } from "./animated-counter";

const proof = [
  {
    numericValue: 500,
    prefix: "R$",
    suffix: "M+",
    displayValue: "R$500M+",
    label: "em ativos protegidos",
  },
  {
    numericValue: 12000,
    prefix: "",
    suffix: "+",
    displayValue: "12.000+",
    label: "carteiras soberanas",
  },
  {
    numericValue: 8,
    prefix: "",
    suffix: "",
    displayValue: "8",
    label: "protocolos auditados",
  },
];

export function ProofBar() {
  return (
    <section
      aria-label="Métricas da plataforma"
      className="relative bg-dark-500"
    >
      {/* Full-width hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-warm-700/15" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-warm-700/15" aria-hidden="true" />

      <div className="mx-auto max-w-[var(--container-content)] px-4 md:px-8">
        <FadeUp>
          <dl className="grid grid-cols-3 py-7 md:py-9">
            {proof.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col items-center text-center ${
                  i > 0 ? "border-l border-warm-700/15" : ""
                }`}
              >
                <dd className="font-mono text-xl sm:text-2xl md:text-3xl font-medium text-text-primary tabular-nums tracking-tight">
                  <AnimatedCounter
                    target={item.numericValue}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    duration={2000}
                    ariaLabel={item.displayValue}
                  />
                </dd>
                <dt className="mt-1.5 text-overline sm:text-caption text-warm-400/50 tracking-wide">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}
