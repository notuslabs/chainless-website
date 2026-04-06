"use client";

import { FadeUp } from "./motion";
import { AnimatedCounter } from "./animated-counter";

const proof = [
  {
    numericValue: 30000,
    prefix: "",
    suffix: "+",
    displayValue: "30.000+",
    label: "carteiras soberanas",
  },
  {
    numericValue: 300,
    prefix: "R$",
    suffix: "M+",
    displayValue: "R$300M+",
    label: "movimentados",
  },
  {
    numericValue: 100,
    prefix: "",
    suffix: "%",
    displayValue: "100%",
    label: "autocustódia",
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
                <dd className="text-xl sm:text-2xl md:text-3xl font-medium text-text-primary tabular-nums tracking-tight">
                  <AnimatedCounter
                    target={item.numericValue}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    duration={2000}
                    ariaLabel={item.displayValue}
                  />
                </dd>
                <dt className="mt-1.5 text-xs sm:text-sm text-warm-300/60 tracking-wide">
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
