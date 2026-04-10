"use client";

import { useRef } from "react";
import { CaretDown } from "@phosphor-icons/react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

function FaqItem({ question, answer }: FaqItem) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <details
      ref={detailsRef}
      className="group border-b border-warm-700/30"
    >
      <summary
        className="flex items-center justify-between py-5 px-0 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
      >
        <span className="font-sans font-medium text-text-primary pr-4 text-[18px]">
          {question}
        </span>
        <CaretDown
          size={16}
          weight="bold"
          className="shrink-0 text-warm-400 transition-transform duration-300 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>

      <div className="pb-5 pt-2">
        <p className="font-sans text-text-primary/75 text-[16px] leading-[1.65]">
          {answer}
        </p>
      </div>
    </details>
  );
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <section>
      <h2 className="font-sans font-semibold text-text-primary mb-8 text-[clamp(1.25rem,1rem+1vw,1.75rem)]">
        Perguntas frequentes
      </h2>

      <div>
        {items.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}
