"use client";

import { FadeUp } from "./motion";
import { useMessages } from "next-intl";

export function FeesContent() {
  const dict = useMessages() as any;
  const t = dict.fees;

  return (
    <main className="relative bg-dark-500 px-4 pb-32 pt-40">
      <div className="mx-auto max-w-[780px]">
        {/* Header */}
        <FadeUp>
          <p className="text-overline font-semibold uppercase tracking-[0.25em] text-text-secondary">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-[1.15] tracking-tight text-text-primary md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-3 text-small text-text-secondary">
            {t.lastUpdated}: {t.lastUpdatedDate}
          </p>
          <div className="mt-8 h-px bg-white/[0.06]" />
        </FadeUp>

        {/* Body */}
        <FadeUp>
          <div className="mt-12 space-y-10 text-[0.9375rem] leading-[1.85] text-text-secondary">
            {/* Intro */}
            <p className="text-pretty">
              {t.intro}
            </p>

            {/* Fee table */}
            <table className="w-full border-collapse">
              <caption className="sr-only">{t.tableCaption}</caption>
              <thead>
                <tr className="border-b border-warm-700">
                  <th
                    scope="col"
                    className="pb-3 text-left text-xs font-semibold uppercase tracking-[0.1em] text-warm-500"
                  >
                    {t.columnOperation}
                  </th>
                  <th
                    scope="col"
                    className="pb-3 text-right text-xs font-semibold uppercase tracking-[0.1em] text-warm-500"
                  >
                    {t.columnFee}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row: any, i: number) => (
                  <tr
                    key={row.service}
                    className={
                      i < t.rows.length - 1
                        ? "border-b border-white/[0.04]"
                        : ""
                    }
                  >
                    <td className="py-3.5 pr-4 align-top text-[0.9375rem] text-text-secondary">
                      {row.service}
                    </td>
                    <td className="py-3.5 text-right align-top tabular-nums text-[0.9375rem]">
                      <span className={row.free ? "text-text-primary" : "text-text-secondary"}>
                        {row.fee}
                      </span>
                      {row.detail && (
                        <span className="mt-0.5 block text-xs text-text-muted">
                          {row.detail}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Gas fee section */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-text-primary">
                {t.gasTitle}
              </h2>

              <p className="text-pretty">{t.gasP1}</p>
              <p className="text-pretty">{t.gasP2}</p>
              <p className="text-pretty">{t.gasP3}</p>
            </section>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
