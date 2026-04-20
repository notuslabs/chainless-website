"use client";

import { FadeUp } from "./motion";

const lastUpdated = "28 de outubro de 2025";

export function TermosAdesaoContent() {
  return (
    <main className="relative bg-dark-500 px-4 pb-32 pt-40">
      <div className="mx-auto max-w-[780px]">
        {/* Header */}
        <FadeUp>
          <p className="text-overline font-semibold uppercase tracking-[0.25em] text-text-secondary">
            Termos de Adesão
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-[1.15] tracking-tight text-text-primary md:text-5xl">
            Termos de Adesão ao Programa de Indicação
          </h1>
          <p className="mt-3 text-small text-text-secondary">
            Última atualização: {lastUpdated}
          </p>
          <div className="mt-8 h-px bg-white/[0.06]" />
        </FadeUp>

        {/* Body — legal prose */}
        <FadeUp>
          <div className="legal-prose mt-12 space-y-10 text-[0.9375rem] leading-[1.85] text-text-secondary">

            {/* Introdução */}
            <section>
              <p>
                <strong>Bem-vindo(a) ao Programa de Indicação da Chainless!</strong>
              </p>
              <p>
                Agradecemos por fazer parte da nossa comunidade e contribuir para o crescimento da Chainless. Este Programa foi criado para reconhecer e recompensar os usuários que ajudam a expandir nossa rede, convidando novos participantes para operar cripto com simplicidade e segurança.
              </p>
              <p>
                Ao se tornar um afiliado, você passa a ter acesso a benefícios exclusivos, como o recebimento de comissões em tempo real sempre que os usuários indicados por você realizarem operações que gerem taxas na plataforma.
              </p>
              <p>
                Antes de começar, é importante que você leia atentamente este Termo de Adesão, pois aqui estão descritas todas as regras, direitos e responsabilidades relacionadas à sua participação no Programa. Ao aceitar este documento de forma eletrônica, você confirma sua ciência e concordância com as condições aplicáveis.
              </p>
            </section>

            {/* 1 — Definições */}
            <section>
              <h2>1. Definições</h2>
              <p>
                1.1. Os termos abaixo, quando escritos em negrito e com letra maiúscula, terão as seguintes definições:
              </p>
              <ul>
                <li>
                  (i) <strong>Notus Labs:</strong> empresa desenvolvedora e controladora da Chainless.
                </li>
                <li>
                  (ii) <strong>Afiliado (Referrer):</strong> Usuário participante do Programa que convida novos clientes à plataforma Chainless;
                </li>
                <li>
                  (iii) <strong>Convidado (Referred):</strong> Novo usuário que cria sua conta na Chainless utilizando o código ou link do Afiliado;
                </li>
                <li>
                  (iv) <strong>Ativação:</strong> Momento em que o Convidado conclui seu cadastro e acessa o aplicativo da Chainless pela primeira vez por meio do código de indicação do Afiliado;
                </li>
                <li>
                  (v) <strong>Swap:</strong> Operação de troca entre dois criptoativos realizada dentro da plataforma Chainless, em que o usuário converte um ativo digital em outro de forma direta e automatizada, utilizando a tecnologia blockchain para execução e liquidação da transação.
                </li>
                <li>
                  (vi) <strong>Taxa (Fee):</strong> Valor cobrado pela Chainless sobre cada operação de <em>swap</em> realizada na plataforma, atualmente fixado em <strong>0,7% (zero vírgula sete por cento)</strong> do valor total da operação.
                </li>
              </ul>
            </section>

            {/* 2 — Da Adesão ao Programa */}
            <section>
              <h2>2. Da Adesão ao Programa</h2>
              <p>
                Ao aceitar eletronicamente o presente Termo de Adesão, o Afiliado declara ter lido, compreendido e concordado com todas as condições aqui estabelecidas, aderindo voluntariamente ao Programa de Indicação da Chainless, cuja finalidade é convidar novos usuários para a plataforma e incentivar a realização de operações de swap, mediante o recebimento de comissões sobre as taxas geradas por essas transações.
              </p>
              <p>
                A adesão se formaliza exclusivamente por meio digital, dispensando assinatura física ou envio de documentos adicionais, salvo se expressamente solicitado pela Notus Labs. O aceite eletrônico confere plena validade jurídica ao presente instrumento para todos os fins de direito.
              </p>
              <p>
                O Afiliado reconhece que sua participação no Programa não implica qualquer exclusividade, nem gera vínculo societário, empregatício, associativo ou relação de representação comercial com a Notus Labs, sendo sua atuação limitada ao compartilhamento do link ou código de indicação e ao recebimento das comissões previstas neste Termo.
              </p>
            </section>

            {/* 3 — Das Condições pra Participar do Programa */}
            <section>
              <h2>3. Das Condições pra Participar do Programa</h2>
              <p>
                3.1. Para participar do Programa de Indicações, o <strong>Afiliado</strong> deverá:
              </p>
              <ul>
                <li>(i) Ser usuário cadastrado na plataforma <strong>Chainless</strong>;</li>
                <li>(ii) Possuir uma smart wallet válida e funcional;</li>
                <li>(iii) Aceitar expressamente este Termo por meio eletrônico.</li>
              </ul>
              <p>
                3.2. Serão consideradas válidas apenas as indicações que atenderem cumulativamente aos seguintes requisitos:
              </p>
              <ul>
                <li>(i) O <strong>Convidado</strong> deve se cadastrar utilizando o código de indicação do <strong>Afiliado</strong>;</li>
                <li>(ii) O <strong>Convidado</strong> deve acessar a plataforma pela primeira vez por meio do referido código, configurando sua ativação;</li>
                <li>(iii) O <strong>Convidado</strong> deve realizar operações de swap que gerem fees à Chainless.</li>
              </ul>
              <p>
                3.3. O <strong>Afiliado</strong> não precisa manter atividade constante na plataforma para continuar recebendo comissões.
              </p>
              <p>
                3.4. As recompensas serão automaticamente creditadas sempre que qualquer <strong>Convidado</strong> vinculado ao seu código realizar operações que gerem fees, dentro do prazo estabelecido no item 3.2.
              </p>
              <p>
                3.5. A Chainless reserva-se o direito de anular indicações suspeitas, incluindo, mas não se limitando a: auto convites, uso de múltiplas contas, criação artificial de volume de transações ou qualquer prática fraudulenta.
              </p>
            </section>

            {/* 4 — Comissões */}
            <section>
              <h2>4. Das Comissões</h2>
              <p>
                4.1. O <strong>Afiliado</strong> fará jus ao recebimento de 30% (trinta por cento) das fees efetivamente cobradas pela Chainless sobre as operações de <em>swap</em> realizadas pelos <strong>Convidados</strong> vinculados ao seu código ou link de indicação.
              </p>
              <p>
                4.2. A comissão será calculada com base no ativo que ingressa na operação de swap. Exemplo: em um swap de Ethereum → Chainlink, o cálculo da comissão será realizado sobre o valor em Ethereum, correspondente ao ativo utilizado para o pagamento da fee.
              </p>
              <p>
                4.3. O repasse das comissões ocorrerá em tempo real, de forma automática e imediata, no exato momento da execução on-chain da operação realizada pelo <strong>Convidado</strong>, com transferência direta para a smart wallet previamente informada pelo <strong>Afiliado</strong>.
              </p>
              <p>
                4.4. Todos os cálculos e pagamentos das comissões serão processados de forma inteiramente automática, transparente e rastreável na blockchain, sem necessidade de qualquer intervenção manual ou solicitação adicional por parte do <strong>Afiliado</strong>.
              </p>
              <p>
                4.5. O <strong>Afiliado</strong> reconhece ser o único e exclusivo responsável pela guarda e gestão de seus próprios ativos digitais, incluindo, mas não se limitando à custódia da wallet, segurança de suas chaves, bem como pelo cumprimento de eventuais obrigações fiscais ou tributárias decorrentes do recebimento das comissões.
              </p>
              <p>
                4.6. A Notus Labs não se responsabiliza por perdas, extravios, falhas de custódia, chaves incorretas, acessos indevidos ou qualquer evento relacionado à gestão da wallet do <strong>Afiliado</strong>, exceto se demonstrada falha exclusiva e direta dos sistemas sob controle da <strong>Chainless</strong>.
              </p>
            </section>

            {/* 5 — Vigência, Modificação e Encerramento */}
            <section>
              <h2>5. Da Vigência, Modificação e Encerramento do Programa</h2>
              <p>
                5.1. O Programa de Indicação permanecerá vigente até 01 de dezembro de 2026, podendo ser prorrogado ou ajustado a critério da <strong>Notus Labs</strong>, conforme disposto neste Termo.
              </p>
              <p>
                5.2. Cada <strong>Convidado</strong> indicado dentro do prazo de vigência do Programa gerará direito ao recebimento de comissões pelo período de 12 (doze) meses contados da respectiva data de ativação.
              </p>
              <p>
                5.3. Após 01/12/2026, novas indicações deixarão de ser elegíveis para participação no Programa e não gerarão direito a comissões.
              </p>
              <p>
                5.4. As indicações realizadas até 01/12/2026 permanecerão válidas, e o <strong>Afiliado</strong> continuará a receber normalmente as comissões correspondentes por até 12 (doze) meses após a ativação de cada <strong>Convidado</strong>, mesmo que esse período ultrapasse a data final de vigência prevista no item 5.1.
              </p>
              <p>
                5.5. A <strong>Notus Labs</strong> poderá, a seu exclusivo critério, alterar, suspender, limitar ou encerrar o Programa de Indicação a qualquer tempo, mediante aviso prévio por seus canais oficiais.
              </p>
              <p>
                5.6. Quaisquer alterações relativas a percentuais, prazos ou critérios de elegibilidade não terão efeito retroativo sobre comissões já creditadas ou sobre <strong>Convidados</strong> validamente ativados até a data de comunicação da mudança.
              </p>
              <p>
                5.7. Em caso de encerramento antecipado do Programa, ficam preservados:
              </p>
              <ul>
                <li>(i) os direitos de comissionamento já adquiridos até a data do encerramento;</li>
                <li>(ii) o recebimento das comissões ainda devidas pelo prazo previsto no item 5.4, desde que vinculadas a <strong>Convidados</strong> ativados antes da data de encerramento.</li>
              </ul>
            </section>

            {/* 6 — Disposições Gerais */}
            <section>
              <h2>6. Disposições Gerais</h2>
              <p>
                6.1. Caso qualquer cláusula ou condição deste Termo seja declarada nula, inválida ou ineficaz por autoridade competente, tal decisão não afetará as demais disposições aqui previstas, que permanecerão plenamente válidas, eficazes e vinculantes às Partes.
              </p>
              <p>
                6.2. A eventual tolerância da <strong>Notus Labs</strong> quanto ao cumprimento de quaisquer obrigações do <strong>Afiliado</strong> não constituirá novação, renúncia ou alteração contratual, podendo a <strong>Notus Labs</strong> exigir, a qualquer tempo, o integral e fiel cumprimento deste Termo.
              </p>
              <p>
                6.3. Todos os direitos de propriedade intelectual relacionados à Plataforma Chainless, incluindo, mas não se limitando a marcas, nomes, logotipos, softwares, interfaces, funcionalidades, layout, conteúdos, domínios e demais ativos tecnológicos, pertencem exclusivamente à <strong>Notus Labs</strong>. O <strong>Afiliado</strong> se compromete a não reproduzir, explorar comercialmente ou praticar qualquer ato que possa prejudicar ou violar tais direitos.
              </p>
              <p>
                6.4. A <strong>Notus Labs</strong> não garante qualquer resultado específico, incluindo, mas não se limitando a:
              </p>
              <ul>
                <li>(i) número mínimo de <strong>Convidados</strong>;</li>
                <li>(ii) volume de transações;</li>
                <li>(iii) sucesso das indicações; ou</li>
                <li>(iv) percepção de ganhos financeiros pelo <strong>Afiliado</strong>.</li>
              </ul>
              <p>
                6.5. As comissões dependerão exclusivamente do comportamento e das operações realizadas pelos <strong>Convidados</strong> indicados, não havendo quaisquer promessas de rentabilidade ou performance futura.
              </p>
              <p>
                6.6. A <strong>Notus Labs</strong> poderá, a seu exclusivo critério, alterar os termos deste instrumento a qualquer tempo, mediante comunicação prévia por seus canais oficiais. Recomenda-se que o <strong>Afiliado</strong> consulte periodicamente este Termo para verificar atualizações.
              </p>
              <p>
                6.7. Este Termo constitui o acordo integral entre as Partes, substituindo entendimentos anteriores ou negociações prévias, e será regido pelas leis da República Federativa do Brasil, sendo eleito o foro da Comarca de Florianópolis/SC, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
              </p>
            </section>

          </div>
        </FadeUp>
      </div>
    </main>
  );
}
