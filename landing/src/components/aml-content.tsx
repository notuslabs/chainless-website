"use client";

import { FadeUp } from "./motion";

const lastUpdated = "6 de junho de 2024";

export function AmlContent() {
  return (
    <main className="relative bg-dark-500 px-4 pb-32 pt-40">
      <div className="mx-auto max-w-[780px]">
        {/* Header */}
        <FadeUp>
          <p className="text-overline font-semibold uppercase tracking-[0.25em] text-text-secondary">
            Política AML
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-[1.15] tracking-tight text-text-primary md:text-5xl">
            Prevenção e Combate à Lavagem de Dinheiro
          </h1>
          <p className="mt-3 text-small text-text-secondary">
            Última atualização: {lastUpdated}
          </p>
          <div className="mt-8 h-px bg-white/[0.06]" />
        </FadeUp>

        {/* Body — legal prose */}
        <FadeUp>
          <div className="legal-prose mt-12 space-y-10 text-[0.9375rem] leading-[1.85] text-text-secondary">

            {/* 1 — Objetivo */}
            <section>
              <h2>1. Objetivo</h2>
              <p>
                A presente Política tem como objetivo apresentar os princípios, diretrizes e orientações da Chainless para prevenção da utilização de seus produtos e serviços em práticas de lavagem de dinheiro, financiamento do terrorismo e proliferação de armas de destruição em massa, estando em conformidade com as principais leis e regulamentações do tema.
              </p>
            </section>

            {/* 2 — Abrangência */}
            <section>
              <h2>2. Abrangência</h2>
              <p>
                Esta Política se aplica à Chainless e a todas as suas partes interessadas, devendo ser divulgada de forma clara e acessível e deverá ser observada por todos os seus colaboradores, parceiros e prestadores de serviços, independentemente do seu cargo, função ou área de atuação.
              </p>
            </section>

            {/* 3 — Definições */}
            <section>
              <h2>3. Definições</h2>
              <p>
                O crime de lavagem de dinheiro é caracterizado por um conjunto de operações comerciais ou financeiras realizadas com o objetivo de incorporar, na economia, de modo transitório ou permanente, recursos, bens e valores de origem ilícita. A lavagem de dinheiro costuma ser praticada por meio de um processo dinâmico que envolve 3 fases independentes:
              </p>
              <ol>
                <li>
                  <strong>Colocação:</strong> os recursos provenientes de atividades ilícitas são colocados no Sistema Financeiro Nacional por meio de depósitos e compra de bens e instrumentos negociáveis, muitas vezes de alto valor, particularmente de forma fracionada.
                </li>
                <li>
                  <strong>Ocultação / Estruturação:</strong> após a colocação, os recursos costumam ser movimentados de forma eletrônica, preferencialmente para contas anônimas ou abertas em nome de terceiros ou empresas fictícias com o objetivo de dificultar a identificação de sua origem e o seu rastreamento contábil.
                </li>
                <li>
                  <strong>Integração:</strong> os ativos são incorporados formalmente ao Sistema Financeiro Nacional como recursos aparentemente lícitos mediante a realização de investimentos em empreendimentos que sejam capazes de legitimar os valores.
                </li>
              </ol>
              <p>
                O crime de financiamento ao terrorismo consiste em oferecer, receber, obter, guardar, manter em depósito, solicitar, investir ou de qualquer modo contribuir para a obtenção de ativo, bem ou recurso financeiro, com a finalidade de financiar, total ou parcialmente, pessoa, grupo de pessoas, associação, entidade ou organização criminosa que tenha como atividade principal ou secundária a prática dos crimes de terrorismo.
              </p>
              <p>
                A Proliferação de Armas de Destruição em Massa consiste em financiar, de maneira total ou parcial, direta ou indireta, armas nucleares, químicas e biológicas, bem como seus sistemas vetores.
              </p>
            </section>

            {/* 4 — Abordagem baseada em risco */}
            <section>
              <h2>4. Abordagem baseada em risco</h2>
              <p>
                A Política foi elaborada de forma compatível com os perfis de risco:
              </p>
              <ol>
                <li>dos nossos clientes;</li>
                <li>da nossa instituição, incluindo o modelo de negócio e a área geográfica de atuação;</li>
                <li>das operações, transações, produtos e serviços oferecidos;</li>
                <li>das atividades exercidas pelos colaboradores, parceiros e prestadores de serviços.</li>
              </ol>
              <p>
                Resultados desejados:
              </p>
              <ul>
                <li>Evitar que a empresa seja utilizada para Lavagem de Dinheiro, Financiamento ao Terrorismo e Proliferação de Armas de Destruição em Massa</li>
                <li>Garantir que a empresa tome as medidas mais adequadas para gerir os riscos associados à LDFTP</li>
                <li>Estabelecer e manter políticas e procedimentos eficazes e apropriados</li>
                <li>Garantir cumprimento do risco alvo conforme estabelecido na tolerância ao risco</li>
                <li>Realizar a devida diligência em clientes, parceiros e fornecedores</li>
              </ul>
              <p>
                Nossas Políticas são revisadas anualmente ou antes, caso sejam feitas alterações relevantes em nossa estrutura.
              </p>
            </section>

            {/* 5 — Due Diligence */}
            <section>
              <h2>5. Due Diligence</h2>

              <h3>5.1 Due Diligence Simplificada</h3>
              <p>
                A Chainless pode realizar a due diligence simplificada (SDD) quando uma avaliação de risco determinar que o risco de lavagem de dinheiro ou financiamento do terrorismo não é maior do que o normal.
              </p>

              <h3>5.2 Devida Diligência do Cliente</h3>
              <p>
                Para fins de Due Diligence do Cliente (CDD), podemos exigir durante o seu processo de cadastro:
              </p>
              <ul>
                <li>Prova de identidade (selfie, identificação confiável e verificações de atividade)</li>
                <li>Comprovante de endereço (conta de serviços públicos ou documento emitido pelo governo no prazo de 3 meses após a emissão)</li>
              </ul>

              <h3>5.3 Due Diligence Aprimorada</h3>
              <p>
                Aplicamos due diligence aprimorada (EDD) para mitigar atividades ou clientes de maior risco:
              </p>
              <ul>
                <li>O cliente está envolvido em uma ocupação de alto risco</li>
                <li>O cliente está envolvido com uma jurisdição de alto risco (conforme designada pelo GAFI, UE, HMT, ONU, OFAC)</li>
                <li>O valor transacional do cliente excede um limite atribuído</li>
                <li>O padrão de comportamento é suspeito ou não consistente com o uso pretendido do nosso produto pelo cliente</li>
              </ul>
              <p>
                Ao solicitarmos documento de capacidade financeira e/ou origem de fundos, esperamos receber documentos como: contracheque, declaração de imposto de renda, informe de rendimentos, pró-labore, declaração de dividendos, ou demonstrações financeiras (cliente PJ).
              </p>
            </section>

            {/* 6 — Sanções */}
            <section>
              <h2>6. Sanções</h2>
              <p>
                Não temos tolerância ao risco ao embarcar qualquer indivíduo sancionado. Se um cliente existente for sancionado, o relacionamento não poderá ser estabelecido. Consultaremos as principais listas globais de sanções: OFAC, ONU, GAFI, União Europeia, etc.
              </p>
            </section>

            {/* 7 — PEP */}
            <section>
              <h2>7. PEP (Pessoa Exposta Politicamente)</h2>
              <p>
                PEP são indivíduos que exercem ou exerceram algum cargo ou função pública relevante, independentemente de ser no Brasil ou no exterior. A classificação de PEP permanece ativa até 5 anos após o fim do vínculo que o classificou como tal.
              </p>
              <p>Exemplos de cargos considerados como PEP:</p>
              <ul>
                <li>Chefe de Estado</li>
                <li>Chefe de Governo</li>
                <li>Ministro e/ou Vice-Ministro</li>
                <li>Membro do Parlamento ou de Órgão Legislativo Familiar</li>
                <li>Membro do Órgão de Governo de Partido Político</li>
                <li>Membro de um Tribunal Supremo</li>
                <li>Membro de um Tribunal de Contas ou do Conselho de um Banco Central</li>
                <li>Um Embaixador, um Encarregado de Negócios ou um Oficial de Alta Patente das Forças Armadas</li>
                <li>Membro do Órgão da Administração Pública, de Direção ou de Fiscalização de Empresa Pública</li>
                <li>Um Diretor, Vice-Diretor e Membro do Conselho ou Função Equivalente de uma Organização Internacional</li>
              </ul>
              <p>
                Isto se aplica àqueles que: eles próprios são um PEP, são um membro próximo da família, ou são um associado conhecido.
              </p>
              <p>
                Clientes considerados como PEP ou PEP relacionados serão classificados como alto risco e terão suas transações monitoradas constantemente.
              </p>
            </section>

            {/* 8 — UBO */}
            <section>
              <h2>8. Identificação dos Beneficiários Finais (UBO)</h2>
              <p>
                O Ultimate Beneficial Owner (UBO) é a terminologia atribuída aos indivíduos que têm controle executivo de entidades com personalidade jurídica, ou sejam proprietários das mesmas.
              </p>
              <p>
                A Chainless realizará a identificação de todos os beneficiários finais, para os casos de clientes pessoas jurídicas, e realizará todo o processo due diligence aos que possuírem participação acionária igual ou superior a 25%.
              </p>
              <p>
                Nota: é vedado o estabelecimento de relação comercial com clientes pessoas jurídicas aos quais não sejam possíveis a identificação de seus beneficiários finais.
              </p>
            </section>

            {/* 9 — Monitoramento */}
            <section>
              <h2>9. Monitoramento de Transações</h2>
              <p>
                O monitoramento de transações nos permite entender como os clientes estão usando nosso produto. Quando o monitoramento de transações sinaliza uma transação ou padrão de comportamento específico como de alto risco, será investigado para melhor compreensão.
              </p>
              <p>
                Se for confirmada atividade suspeita, esta estará sujeita a escalonamento interno e externo, quando necessário. Quando tal atividade suspeita for detectada, haverá reporte aos órgãos competentes para a devida verificação.
              </p>
              <p>
                Quando estivermos cientes de que um determinado cliente está envolvido em lavagem de dinheiro ou financiamento do terrorismo, enviaremos um Relatório de Atividades Suspeitas (SAR) à autoridade competente.
              </p>
            </section>

            {/* 10 — Treinamentos */}
            <section>
              <h2>10. Treinamentos</h2>
              <p>
                O treinamento adequado de todas as partes interessadas é um componente essencial da nossa abordagem de PLDTP. A aplicação de treinamentos específicos para a temática de PLDFTP é importante para garantir que:
              </p>
              <ul>
                <li>os colaboradores entendam os requisitos desta estrutura</li>
                <li>os colaboradores possam desempenhar suas funções de acordo com a política de PLDFTP</li>
                <li>os colaboradores sejam capazes de identificar indícios de LDFTP</li>
              </ul>
            </section>

            {/* 11 — Mudanças no negócio */}
            <section>
              <h2>11. Mudanças no Negócio</h2>
              <p>
                Garantimos que qualquer nova tecnologia adotada pela empresa seja avaliada e, se necessário, sejam tomadas medidas para mitigar qualquer risco de Lavagem de Dinheiro, Financiamento ao Terrorismo e de Proliferação de Armas de Destruição em Massa.
              </p>
            </section>

            {/* 12 — Disposições finais */}
            <section>
              <h2>12. Disposições Finais</h2>
              <p>
                A presente Política será aprovada pela Alta Gestão da Chainless e entrou em vigor a partir da data 06/06/2024.
              </p>
              <p>
                A Política deverá ser revisada anualmente e/ou sempre que ocorrer mudanças relevantes no modelo de negócio e/ou em regulamentações.
              </p>
              <p>
                Em caso de quaisquer dúvidas e/ou de violações a esta Política, os clientes, parceiros, colaboradores e prestadores de serviços devem entrar em contato com a Chainless através do e-mail <a href="mailto:support@chainless.finance">support@chainless.finance</a>.
              </p>
            </section>

            {/* Histórico */}
            <section>
              <h2>Histórico de Versões</h2>
              <p>
                06/06/2024 &mdash; Versão 1.0 &mdash; Criação da Política de Prevenção e Combate à Lavagem de Dinheiro, ao Financiamento do Terrorismo e da Proliferação de Armas de Destruição em Massa
              </p>
            </section>

          </div>
        </FadeUp>
      </div>
    </main>
  );
}
