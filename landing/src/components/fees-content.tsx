"use client";

import { FadeUp } from "./motion";

const lastUpdated = "7 de abril de 2026";

const fees = [
  {
    service: "Depósito PIX",
    fee: "Sem taxa",
    free: true,
  },
  {
    service: "Saque PIX",
    fee: "R$ 2,90",
  },
  {
    service: "Swap",
    fee: "0,7%",
    detail: "sobre o valor transacionado",
  },
  {
    service: "Investimento em renda",
    fee: "Sem taxa",
    free: true,
  },
  {
    service: "Pools de Liquidez",
    fee: "0,5%",
    detail: "sobre o valor convertido",
  },
  {
    service: "Transferência de BRZ para wallets externas",
    fee: "0,5%",
    detail: "sobre o valor movimentado",
  },
  {
    service: "Transferência de outras criptos para wallets externas",
    fee: "Sem taxa",
    free: true,
  },
];

export function FeesContent() {
  return (
    <main className="relative bg-dark-500 px-4 pb-32 pt-40">
      <div className="mx-auto max-w-[780px]">
        {/* Header */}
        <FadeUp>
          <p className="text-overline font-semibold uppercase tracking-[0.25em] text-text-secondary">
            Taxas
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-[1.15] tracking-tight text-text-primary md:text-5xl">
            Taxas e custos
          </h1>
          <p className="mt-3 text-small text-text-secondary">
            Última atualização: {lastUpdated}
          </p>
          <div className="mt-8 h-px bg-white/[0.06]" />
        </FadeUp>

        {/* Body */}
        <FadeUp>
          <div className="mt-12 space-y-10 text-[0.9375rem] leading-[1.85] text-text-secondary">
            {/* Intro */}
            <p className="text-pretty">
              Todas as taxas cobradas pela Chainless estão listadas abaixo. Não
              há taxas ocultas nem custos adicionais.
            </p>

            {/* Fee table */}
            <table className="w-full border-collapse">
              <caption className="sr-only">Tabela de taxas da Chainless</caption>
              <thead>
                <tr className="border-b border-warm-700">
                  <th
                    scope="col"
                    className="pb-3 text-left text-xs font-semibold uppercase tracking-[0.1em] text-warm-500"
                  >
                    Operação
                  </th>
                  <th
                    scope="col"
                    className="pb-3 text-right text-xs font-semibold uppercase tracking-[0.1em] text-warm-500"
                  >
                    Taxa
                  </th>
                </tr>
              </thead>
              <tbody>
                {fees.map((row, i) => (
                  <tr
                    key={row.service}
                    className={
                      i < fees.length - 1
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
                Taxa de Gas
              </h2>

              <p className="text-pretty">
                A taxa de gas é um custo cobrado pelas redes blockchain para
                processar e confirmar transações. Ela varia conforme a rede e o
                nível de congestionamento no momento da operação.
              </p>

              <p className="text-pretty">
                A Chainless, por meio de Abstração de Contas, permite que você
                pague a taxa de gas com o próprio token transacionado — sem
                precisar manter tokens nativos como ETH, SOL ou MATIC.
              </p>

              <p className="text-pretty">
                Na prática, a Chainless adianta a taxa de gas e cobra uma margem
                no preço efetivo da transação para cobrir custos operacionais. A
                estimativa é exibida na tela de Detalhes da Transação antes da
                confirmação.
              </p>
            </section>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
