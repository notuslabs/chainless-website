"use client";

import { motion } from "framer-motion";
import { FadeUp } from "./motion";

const lastUpdated = "6 de abril de 2026";

export function TransparencyContent() {
  return (
    <main className="relative bg-surface px-4 pb-32 pt-40">
      <div className="mx-auto max-w-[780px]">
        {/* Header */}
        <FadeUp>
          <p className="text-overline font-semibold uppercase tracking-[0.25em] text-text-secondary-light">
            Enquadramento Regulatório
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-[1.15] tracking-tight text-text-primary-light md:text-5xl">
            Notus Labs Ltda.
          </h1>
          <p className="mt-3 text-small text-text-secondary-light">
            Última atualização: {lastUpdated}
          </p>
          <div className="mt-8 h-px bg-warm-200/60" />
        </FadeUp>

        {/* Body — legal prose */}
        <FadeUp>
          <div className="legal-prose mt-12 space-y-10 text-[0.9375rem] leading-[1.85] text-text-secondary-light">

            {/* 1 — Objeto */}
            <section>
              <h2>1. Objeto e finalidade</h2>
              <p>
                O presente documento tem por objeto descrever o modelo operacional da Notus Labs Ltda., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº [a ser preenchido], com sede em [endereço], bem como fundamentar seu enquadramento regulatório perante o arcabouço normativo instituído pelo Banco Central do Brasil para Prestadores de Serviços de Ativos Virtuais (&ldquo;PSAVs&rdquo;), em especial a Resolução BCB nº 520, de 27 de novembro de 2025.
              </p>
            </section>

            {/* 2 — Marco regulatório */}
            <section>
              <h2>2. Marco regulatório aplicável</h2>
              <p>
                A Resolução BCB nº 520/2025 disciplina a constituição e o funcionamento das sociedades prestadoras de serviços de ativos virtuais, estabelecendo três modalidades de atuação sujeitas a autorização do Banco Central:
              </p>
              <ol>
                <li>
                  <strong>Intermediárias de Ativos Virtuais</strong> &mdash; sociedades cujo objeto social é a intermediação de ativos virtuais por conta de terceiros, incluindo compra, venda, troca, administração de carteiras, subscrição de emissões, exercício de função de agente fiduciário, operações de <em>staking</em> e atuação no mercado de câmbio envolvendo ativos virtuais (arts. 3º a 8º).
                </li>
                <li>
                  <strong>Custodiantes de Ativos Virtuais</strong> &mdash; sociedades cujo objeto social é a guarda e o controle dos instrumentos que permitem ao titular exercer seus direitos sobre os ativos, compreendendo guarda e controle de chaves privadas ou instrumentos equivalentes, registro e conciliação de posições, execução de instruções de movimentação, tratamento de eventos incidentes e administração de dados relevantes (art. 9º).
                </li>
                <li>
                  <strong>Corretoras de Ativos Virtuais</strong> &mdash; sociedades que exercem cumulativamente as atividades de intermediação e custódia (art. 10).
                </li>
              </ol>
            </section>

            {/* 3 — Modelo operacional */}
            <section>
              <h2>3. Modelo operacional da Notus Labs</h2>
              <p>
                A Notus Labs atua exclusivamente como <strong>provedora de infraestrutura tecnológica</strong>, disponibilizando software que permite ao usuário final interagir diretamente com redes blockchain públicas. O modelo operacional compreende dois eixos:
              </p>

              <h3>3.1. Autocustódia integral</h3>
              <p>
                A Notus Labs disponibiliza ao usuário uma carteira digital de autocustódia (<em>self-custody wallet</em>). A geração, o armazenamento e o controle das chaves privadas ocorrem exclusivamente no dispositivo do usuário. A Notus Labs:
              </p>
              <ul>
                <li>Não gera, armazena, recupera nem possui acesso, direto ou indireto, às chaves privadas do usuário;</li>
                <li>Não detém poder de disposição, movimentação ou bloqueio sobre quaisquer ativos virtuais do usuário;</li>
                <li>Não mantém registro de posição, livro-razão interno ou conciliação de saldos em nome do usuário;</li>
                <li>Não executa instruções de movimentação — toda transação é assinada localmente pelo usuário e submetida diretamente à rede blockchain.</li>
              </ul>

              <h3>3.2. Orquestração de interface</h3>
              <p>
                A Notus Labs atua como camada de software (<em>middleware</em>) que conecta o usuário a terceiros, sem participação operacional na execução das transações:
              </p>
              <ul>
                <li>
                  <strong>Operações cripto–cripto:</strong> o usuário interage diretamente com protocolos descentralizados (<em>DeFi</em>) por meio da carteira. A execução ocorre <em>on-chain</em>, sem intermediação, custódia ou contraparte da Notus Labs.
                </li>
                <li>
                  <strong>Operações fiat–cripto:</strong> a interface direciona a transação a parceiro regulado, devidamente autorizado pelo Banco Central, que executa a conversão entre moeda fiduciária e ativo virtual. O fluxo financeiro transita entre o usuário e o parceiro regulado, sem que a Notus Labs figure como parte, contraparte ou intermediária da operação.
                </li>
              </ul>

              <h3>3.3. Modelo de receita</h3>
              <p>
                A receita da Notus Labs é composta exclusivamente por taxas (<em>fees</em>) cobradas pela utilização da interface tecnológica, constituindo remuneração pelo licenciamento de software e prestação de serviço de tecnologia.
              </p>
            </section>

            {/* 4 — Não enquadramento */}
            <section>
              <h2>4. Fundamentação do não enquadramento como PSAV</h2>

              <h3>4.1. Não é Intermediária de Ativos Virtuais</h3>
              <p>
                A Resolução BCB nº 520/2025 define a intermediária como sociedade que realiza compra, venda, troca ou administração de ativos virtuais <em>por conta de terceiros</em>, assumindo papel direto na execução da operação.
              </p>
              <p>
                A Notus Labs não compra, não vende, não troca e não administra ativos virtuais em nome de terceiros. Sua atuação limita-se à disponibilização de tecnologia de interface. A execução das operações é realizada exclusivamente por terceiros: parceiros regulados, no caso de conversões envolvendo moeda fiduciária, e protocolos descentralizados, no caso de operações cripto–cripto.
              </p>
              <p>
                O fluxo financeiro não transita pela Notus Labs. A empresa não participa da liquidação, não detém contas operacionais envolvidas na transação e não assume posição de contraparte em nenhuma etapa.
              </p>

              <h3>4.2. Não é Custodiante de Ativos Virtuais</h3>
              <p>
                O art. 9º da Resolução BCB nº 520/2025 exige, para a configuração da atividade de custódia, que o prestador (i) exerça guarda e controle das chaves privadas ou instrumentos equivalentes; (ii) atenda instruções de movimentação emitidas pelo titular; e (iii) mantenha registros de posição e trate eventos incidentes sobre os ativos.
              </p>
              <p>
                A Notus Labs opera em regime de autocustódia integral. A empresa não possui capacidade técnica, operacional ou jurídica para movimentar, bloquear ou dispor dos ativos do usuário de forma unilateral. Inexiste, portanto, subsunção ao tipo normativo previsto no art. 9º.
              </p>

              <h3>4.3. Não é Corretora de Ativos Virtuais</h3>
              <p>
                Nos termos do art. 10 da Resolução BCB nº 520/2025, a corretora exerce cumulativamente as atividades de intermediação e custódia. Como demonstrado nas seções 4.1 e 4.2, a Notus Labs não realiza nenhuma dessas atividades, razão pela qual o enquadramento como corretora é igualmente inaplicável.
              </p>
            </section>

            {/* 5 — Art. 9, §6º */}
            <section>
              <h2>5. Enquadramento como prestador de serviço de tecnologia (art. 9º, §6º)</h2>
              <p>
                A própria Resolução BCB nº 520/2025 reconhece a figura do prestador de serviço tecnológico contratado. O art. 9º, §6º, prevê expressamente que instituições reguladas podem contratar tecnologia de terceiros, desde que o fornecedor <strong>não detenha qualquer capacidade de afetar a custódia ou o exercício de direitos sobre os ativos virtuais</strong>.
              </p>
              <p>
                A Notus Labs posiciona-se precisamente nesse enquadramento normativo. A comprovação técnica de que a empresa não possui acesso às chaves privadas dos usuários, não pode movimentar seus fundos e não participa da liquidação de operações demonstra, de forma objetiva, que a Notus Labs constitui a <em>tecnologia contratada</em>, e não a instituição regulada.
              </p>
              <p>
                A arquitetura de autocustódia não é uma escolha de produto — é a premissa estrutural que fundamenta o enquadramento regulatório da sociedade.
              </p>
            </section>

            {/* 6 — Obrigações fiscais */}
            <section>
              <h2>6. Obrigações de reporte fiscal</h2>
              <p>
                Em decorrência do modelo operacional descrito, a Notus Labs não realiza reporte de saldos, posições ou operações <em>on-chain</em> dos usuários à Secretaria Especial da Receita Federal do Brasil (&ldquo;RFB&rdquo;).
              </p>
              <p>
                As operações de conversão entre moeda fiduciária e ativos virtuais são reportadas à RFB exclusivamente pelos parceiros regulados que as executam, nos termos da Instrução Normativa RFB nº 1.888/2019 e suas alterações.
              </p>
              <p>
                Em ambiente de finanças descentralizadas (<em>DeFi</em>), a legislação vigente atribui a responsabilidade de declaração ao próprio contribuinte titular dos ativos, conforme orientação da RFB. A Notus Labs não detém os dados necessários para realizar tal reporte, uma vez que não mantém registro de posições ou transações <em>on-chain</em> dos usuários.
              </p>
            </section>

            {/* 7 — Privacidade pós-rampa */}
            <section>
              <h2>7. Ausência de rastreio pós-conversão</h2>
              <p>
                Após a conversão de moeda fiduciária em ativo virtual pelo parceiro regulado e a remessa à carteira de autocustódia do usuário, não há monitoramento, rastreamento ou registro, por parte da Notus Labs ou de seus parceiros, das atividades subsequentes do usuário na blockchain — incluindo, mas não se limitando a, operações de troca (<em>swap</em>), provimento de liquidez (<em>liquidity pools</em>), transferências entre carteiras (<em>bridges</em>) ou interações com protocolos descentralizados.
              </p>
              <p>
                Ressalva-se que redes blockchain são, por natureza, públicas e auditáveis por qualquer pessoa. Essa característica é inerente à tecnologia e independe da atuação da Notus Labs, de seus parceiros ou de qualquer entidade privada.
              </p>
            </section>

            {/* 8 — Evolução regulatória */}
            <section>
              <h2>8. Monitoramento de evolução regulatória</h2>
              <p>
                A Notus Labs mantém acompanhamento ativo das discussões regulatórias conduzidas pelo Banco Central do Brasil, pela Comissão de Valores Mobiliários e pela Secretaria Especial da Receita Federal do Brasil, com apoio de assessoria jurídica especializada.
              </p>
              <p>
                Na hipótese de alteração do arcabouço normativo que venha a impactar o enquadramento regulatório da sociedade ou o funcionamento da tecnologia disponibilizada, a Notus Labs compromete-se a comunicar aos usuários de forma clara, antecipada e transparente, adotando as providências cabíveis para adequação tempestiva.
              </p>
            </section>

            {/* 9 — Disposições finais */}
            <section>
              <h2>9. Disposições finais</h2>
              <p>
                O presente documento possui caráter informativo e não constitui parecer jurídico, aconselhamento regulatório ou recomendação de investimento. As informações aqui contidas refletem o entendimento da Notus Labs sobre seu enquadramento regulatório na data de sua última atualização e podem ser revisadas em função de alterações normativas supervenientes.
              </p>
              <p>
                Para esclarecimentos adicionais, o usuário pode contatar a Notus Labs pelo canal <a href="mailto:legal@chainless.com" className="underline decoration-warm-300/40 underline-offset-4 transition-colors duration-300 hover:text-text-primary-light">legal@chainless.com</a>.
              </p>
            </section>

          </div>
        </FadeUp>
      </div>
    </main>
  );
}
