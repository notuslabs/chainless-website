"use client";

import { FadeUp } from "./motion";

const lastUpdated = "10 de abril de 2026";

export function TermsContent() {
  return (
    <main className="relative bg-dark-500 px-4 pb-32 pt-40">
      <div className="mx-auto max-w-[780px]">
        {/* Header */}
        <FadeUp>
          <p className="text-overline font-semibold uppercase tracking-[0.25em] text-text-secondary">
            Termos de Uso
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-[1.15] tracking-tight text-text-primary md:text-5xl">
            Termos de Uso
          </h1>
          <p className="mt-3 text-small text-text-secondary">
            Última atualização: {lastUpdated}
          </p>
          <div className="mt-8 h-px bg-white/[0.06]" />
        </FadeUp>

        {/* Body — legal prose */}
        <FadeUp>
          <div className="legal-prose mt-12 space-y-10 text-[0.9375rem] leading-[1.85] text-text-secondary">

            {/* ================================================
                PREÂMBULO
                ================================================ */}

            <section>
              <h2>Introdução</h2>
              <p>
                Chainless é um aplicativo de carteira de ativos digitais desenvolvido pela Notus Labs LTDA. Ao usar nosso aplicativo, você concorda com estes Termos de Uso (&ldquo;Termos&rdquo;, &ldquo;Termos de Uso&rdquo;). Por favor, leia-os cuidadosamente. Se você discordar de qualquer parte dos termos, você não pode acessar o aplicativo Chainless. Podemos modificar os Termos a qualquer momento, a nosso exclusivo critério e sem aviso prévio. Se o fizermos, notificaremos você publicando os Termos modificados no site, fornecendo um aviso por meio do aplicativo ou por outros métodos de comunicação que consideramos razoáveis. Ao continuar a usar o site ou o serviço após modificarmos os Termos, você concorda em estar legalmente vinculado e a cumprir os Termos modificados.
              </p>
            </section>

            <section>
              <h2>Outros Termos</h2>
              <p>
                Estes Termos referem-se aos seguintes termos adicionais, que também se aplicam ao seu uso de nossas plataformas:
              </p>
              <ul>
                <li>Nossa Política de Privacidade;</li>
                <li>Política de Prevenção e Combate à Lavagem de Dinheiro, ao Financiamento do Terrorismo e da Proliferação de Armas de Destruição em Massa;</li>
                <li>Política de Know Your Customer (Conheça o seu cliente);</li>
                <li>Termos e políticas próprios dos Provedores de on-ramp e off-ramp (tais como Transfero, 4P Finance ou outros), exibidos ao usuário na interface do aplicativo no momento da contratação de cada operação.</li>
              </ul>
            </section>

            {/* ================================================
                2 — CONTA E USUÁRIO
                ================================================ */}

            <section>
              <h2>2. Conta e Usuário</h2>

              <h3>2.1 Elegibilidade</h3>
              <p>
                Você deve ter pelo menos 18 anos para usar o Chainless. Ao utilizar o aplicativo, você declara e garante que tem a capacidade legal para celebrar este acordo.
              </p>
              <p>
                Nem você nem qualquer pessoa que o possua ou controle está sujeita a sanções ou de outra forma designada em qualquer lista de partes proibidas ou restritas, incluindo, entre outras, as listas mantidas pelo Conselho de Segurança das Nações Unidas, pelo governo das Ilhas Virgens Britânicas, pelo governo do Reino Unido, pelo governo dos Estados Unidos (por exemplo, a Lista de Nacionais Especialmente Designados e a Lista de Evasores de Sanções Estrangeiras do Departamento do Tesouro dos Estados Unidos e a Lista de Entidades do Departamento de Comércio dos Estados Unidos), pela União Europeia ou por seus Estados-Membros ou por outra autoridade governamental aplicável e não está localizado nos Estados Unidos.
              </p>

              <h3>2.2 Segurança da Conta</h3>
              <p>
                Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança, entrando em contato com nossa equipe de suporte através do e-mail <a href="mailto:support@chainless.finance">support@chainless.finance</a>. Não nos responsabilizamos por qualquer perda ou dano decorrente de sua falha em proteger suas informações de login.
              </p>

              <h3>2.3 Carteira de Ativos Digitais e Contrato de Smart Wallet</h3>
              <p>
                A Chainless oferece uma tecnologia avançada de carteira de ativos digitais que consiste em duas partes principais: uma carteira de propriedade exclusiva do usuário (EOA &mdash; Externally Owned Account) e um contrato de Smart Wallet implementado de acordo com os padrões da tecnologia Account Abstraction (ERC-4337).
              </p>
              <ol>
                <li>
                  <strong>Carteira de Ativos Digitais (EOA):</strong> A carteira de ativos digitais EOA é de propriedade exclusiva do usuário e permite o armazenamento seguro de ativos digitais, como criptomoedas e tokens.
                </li>
                <li>
                  <strong>Contrato de Smart Wallet:</strong> O contrato de Smart Wallet, implementado de acordo com os padrões ERC-4337, oferece funcionalidades avançadas, como automação de transações e gerenciamento de ativos, enquanto mantém a segurança e a privacidade dos fundos do usuário.
                </li>
                <li>
                  <strong>Responsabilidade do Usuário:</strong> É responsabilidade do usuário manter suas credenciais de acesso seguras e proteger sua carteira de ativos digitais contra acesso não autorizado. A Chainless não tem acesso direto aos fundos dos usuários e não se responsabiliza por perdas decorrentes de acesso não autorizado à carteira de ativos digitais.
                </li>
              </ol>

              <h3>2.4 Custódia de Ativos Digitais</h3>
              <p>
                A Chainless atua como uma carteira digital e não exerce custódia sobre os ativos digitais dos usuários. Os usuários são os únicos responsáveis pela guarda e segurança de seus ativos digitais armazenados na Carteira Digital Chainless. A Chainless não possui acesso direto aos ativos digitais dos usuários e não se responsabiliza por perdas decorrentes de acesso não autorizado ou má gestão por parte dos usuários. Os usuários devem adotar medidas de segurança adequadas, como proteger suas credenciais de acesso e utilizar as funcionalidades de segurança oferecidas pela carteira digital.
              </p>

              <h3>2.5 Segurança Cibernética</h3>
              <p>
                Enquanto desenvolvemos o Chainless com foco na segurança e privacidade dos nossos usuários, não garantimos que nosso site seja seguro ou livre de bugs ou vírus. Embora os aplicativos móveis sejam geralmente seguros, é fundamental garantir que seu dispositivo esteja protegido contra ameaças online. Você é responsável pela configuração de sua tecnologia da informação, programas de computador e plataforma para acessar nosso site. Você deve usar seu próprio software de proteção contra vírus.
              </p>
              <p>
                Você não deve fazer uso indevido de nosso app introduzindo conscientemente vírus, cavalos de tróia, worms, bombas lógicas ou outros materiais maliciosos ou tecnologicamente prejudiciais. Você não deve tentar obter acesso não autorizado ao nosso site, ao servidor no qual o nosso site está armazenado ou a qualquer servidor, computador ou banco de dados conectado ao nosso site. Você não deve atacar nosso site por meio de um ataque de negação de serviço ou de um ataque distribuído de negação de serviço. Denunciaremos qualquer violação desse tipo às autoridades competentes para aplicação da lei e cooperaremos com essas autoridades divulgando sua identidade a elas. No caso de tal violação, seu direito de usar nosso app será interrompido imediatamente.
              </p>

              <h3>2.6 Conduta do Usuário</h3>
              <p>
                Ao usar o Chainless, você concorda em não:
              </p>
              <ul>
                <li>Utilizar o serviço para atividades ilegais, incluindo, mas não se limitando a, lavagem de dinheiro, financiamento do terrorismo ou outras práticas ilícitas conforme definido pelas leis e regulamentos aplicáveis;</li>
                <li>Envolver-se em transações suspeitas que possam indicar atividades de lavagem de dinheiro ou financiamento do terrorismo;</li>
                <li>Usar o serviço para ocultar a origem, destino ou propriedade de ativos digitais obtidos ilegalmente ou de forma antiética;</li>
                <li>Realizar atividades que possam comprometer a integridade e segurança do sistema, incluindo, mas não se limitando a, tentativas de hacking, phishing ou exploração de vulnerabilidades de segurança;</li>
                <li>Usar o Serviço de forma ilegal ou fraudulenta, ou de forma que possa danificar ou comprometer nossos sistemas ou segurança; e</li>
                <li>Acessar o Serviço por nenhum outro meio que não seja nossas interfaces com suporte público.</li>
              </ul>
              <p>
                Os itens elencados são exemplificativos e de forma alguma taxativos.
              </p>
              <p>
                Exceto conforme expressamente previsto nestes Termos, nenhuma parte das plataformas pode ser copiada, reproduzida, carregada, postada, exibida publicamente, codificada, traduzida, transmitida ou distribuída de qualquer forma (incluindo espelhamento) para qualquer outro computador, servidor, site ou outro meio para publicação ou distribuição ou para qualquer empreendimento comercial.
              </p>
              <p>
                Poderemos, a nosso critério absoluto, suspender, retirar ou restringir o acesso a todas ou a algumas partes do nosso Serviço a quaisquer pessoas, o que incluirá, para evitar dúvidas, usuários que tenham se registrado conosco.
              </p>
              <p>
                Poderemos, a nosso critério absoluto, encerrar seu acesso ao aplicativo Chainless a qualquer momento e sem aviso prévio.
              </p>
              <p>
                Caso crie uma conta no aplicativo Chainless, você é responsável por manter a confidencialidade de sua ID de usuário e senha, e é responsável por todas as atividades que ocorram sob essa ID de usuário ou senha. Você concorda que não permitirá que ninguém use sua conta e que não usará a conta de outra pessoa.
              </p>
              <p>
                Temos o direito de desativar qualquer ID de usuário ou senha, seja ela escolhida por você ou alocada por nós, a qualquer momento, se, em nossa opinião razoável, você não tiver cumprido qualquer uma das disposições destes Termos.
              </p>
            </section>

            {/* ================================================
                3 — TRANSAÇÕES, TAXAS E PAGAMENTOS
                ================================================ */}

            <section>
              <h2>3. Transações, Taxas e Pagamentos</h2>

              <h3>3.1 Processamento de Transações e Serviços de Terceiros</h3>
              <p>
                A Chainless é uma carteira de ativos digitais baseada em blockchain cujas transações são executadas em infraestrutura blockchain pública e/ou por meio de provedores terceirizados integrados, estando sujeitas aos tempos de confirmação da rede, às janelas operacionais dos provedores e a eventuais retenções para análise de conformidade. Além disso, a Chainless pode interagir com serviços de terceiros, como DEXs (Exchange Descentralizadas), para facilitar a negociação de ativos digitais. Durante o uso desses serviços, os usuários concordam em cumprir os termos e condições estabelecidos pelos provedores de serviços externos.
              </p>

              <h3>3.2 Taxas e Custos</h3>
              <p>
                Poderão ser cobradas taxas pelo acesso a parte ou à parte do Serviço que você usa, inclusive taxas cobradas sobre swaps de tokens que você executa em bolsas de terceiros acessando essas bolsas por meio do Serviço. Essas taxas podem ser alteradas a qualquer momento sem aviso prévio. O valor das taxas aplicáveis ao Serviço ficará visível para você no momento em que você acessar o Serviço. As tarifas que aparecem no aplicativo Chainless são calculadas com as taxas aplicadas.
              </p>
              <p>
                Você poderá incorrer em cobranças de terceiros pelo uso da funcionalidade de terceiros. Por exemplo, podem ser cobradas taxas através dos Dapps (incluindo, sem limitação, trocas descentralizadas) que você pode acessar através do Aplicativo. Em nenhuma circunstância o Chainless incorrerá em qualquer responsabilidade, de qualquer tipo, perante você, decorrente ou relacionada a taxas cobradas de você por tais Terceiros ou pela Funcionalidade de Terceiros vinculada ou acessada através do App.
              </p>
              <p>
                Embora o App se esforce para fornecer uma estimativa precisa das taxas aplicáveis, qualquer informação desse tipo é uma estimativa antecipada das taxas, que podem variar em relação às taxas efetivamente pagas para usar a Funcionalidade e interagir com o blockchain da Polygon ou qualquer outra rede com a qual o Serviço seja compatível.
              </p>
              <p>
                Você entende e concorda que as taxas e preços de conversão são apenas estimativas e que podem mudar a qualquer momento. Dessa forma, os preços ou taxas de conversão fornecidos por meio do App são apenas estimativas e podem ser imprecisos. O Chainless não pode ser responsabilizado por, e você, por meio deste, libera para sempre o Chainless de quaisquer perdas ou outras responsabilidades decorrentes de uma estimativa imprecisa de taxas fornecidas em conexão com qualquer uso de qualquer um dos Serviços.
              </p>
              <p>
                A Chainless se compromete a fornecer uma plataforma acessível e transparente para seus usuários. Não cobramos nenhuma taxa de assinatura pelo uso dos nossos serviços. Ao utilizar a Chainless e seus serviços integrados, os usuários concordam em pagar todas as taxas associadas às transações e interações com serviços de terceiros, conforme descrito nos termos e condições específicos de cada serviço.
              </p>

              <h3>3.3 Transações Automatizadas</h3>
              <p>
                Utilizando o contrato de Smart Wallet integrado, os usuários podem programar transações automatizadas, como pagamentos recorrentes ou execução de contratos inteligentes. Os usuários devem estar cientes de que as transações automatizadas serão realizadas de acordo com as configurações definidas por eles mesmos, e a Chainless não se responsabiliza por eventuais perdas ou danos decorrentes dessas transações.
              </p>

              <h3>3.4 Reembolso e Disputas</h3>
              <p>
                Os reembolsos serão considerados caso a caso e estarão sujeitos às políticas estabelecidas pelos provedores de serviços de terceiros, quando aplicável. Os usuários que desejarem solicitar um reembolso devem entrar em contato com o suporte ao cliente da Chainless ou do serviço de terceiros relevante, seguindo os procedimentos específicos fornecidos.
              </p>
              <p>
                Em caso de disputas ou problemas relacionados a transações, os usuários podem entrar em contato com nossa equipe de suporte para assistência. Faremos o possível para mediar e resolver quaisquer problemas, embora não possamos garantir reembolsos diretos. Em circunstâncias excepcionais, como falhas técnicas graves ou atividades fraudulentas, reservamo-nos o direito de considerar reembolsos caso a caso.
              </p>

              <h3>3.5 Segurança e Irreversibilidade</h3>
              <p>
                A Chainless implementa medidas de segurança rigorosas para proteger as informações financeiras dos usuários durante as transações e interações com serviços de terceiros. No entanto, os usuários reconhecem que, devido à natureza da tecnologia blockchain e da Internet, a segurança absoluta não pode ser garantida. É responsabilidade dos usuários adotar medidas adicionais de segurança, como o uso de autenticação de dois fatores e a proteção de suas credenciais de acesso.
              </p>
              <p>
                Os usuários são responsáveis por todas as transações realizadas através de suas contas na Carteira Digital Chainless. As transações realizadas na blockchain são geralmente irreversíveis. Uma vez que uma transação é confirmada na blockchain, não é possível reverter ou cancelar essa transação. Portanto, os usuários devem revisar cuidadosamente todos os detalhes da transação antes de confirmá-la.
              </p>
            </section>

            {/* ================================================
                4 — PIX
                ================================================ */}

            <section>
              <h2>4. Serviços de Depósito e Saque por PIX (On-Ramp e Off-Ramp)</h2>

              <h3>4.1 Natureza do serviço e papel da Chainless</h3>
              <p>
                A Chainless não é instituição de pagamento, corretora de câmbio nem operadora do arranjo PIX. Os depósitos e saques em Reais por PIX disponibilizados no aplicativo são operados integralmente por parceiros terceirizados de on-ramp e off-ramp (&ldquo;Provedores&rdquo;), devidamente identificados na interface do aplicativo no momento de cada transação. A Chainless atua exclusivamente como interface tecnológica que conecta o usuário ao Provedor selecionado, não figurando como parte da operação de pagamento, da conversão cambial ou da custódia dos recursos durante o trânsito.
              </p>

              <h3>4.2 Ciência e aceitação do Provedor</h3>
              <p>
                Ao iniciar uma operação de depósito ou saque via PIX, o usuário declara ter ciência da identidade do Provedor responsável, conforme exibido na tela de confirmação da transação, e concorda com os termos e políticas próprios daquele Provedor, os quais regem a relação jurídica da operação de pagamento.
              </p>

              <h3>4.3 Tempestividade</h3>
              <p>
                O usuário reconhece e concorda expressamente que, embora o arranjo PIX seja nominalmente instantâneo quando ocorre entre contas bancárias, as operações de on-ramp e off-ramp realizadas através do aplicativo envolvem etapas adicionais, incluindo, sem limitação:
              </p>
              <ol>
                <li>análise de conformidade (KYC/AML) pelo Provedor;</li>
                <li>liquidação on-chain em blockchain pública, sujeita a tempos de confirmação variáveis;</li>
                <li>roteamento entre contas bancárias, contas de pagamento e carteiras digitais; e</li>
                <li>controles internos de prevenção à fraude do Provedor.</li>
              </ol>
              <p>
                Em razão desses fatores, as operações de depósito e saque por PIX não são instantâneas e estão sujeitas a atrasos que podem variar de algumas horas a mais de uma semana, sem que tal atraso configure descumprimento contratual pela Chainless. A Chainless envidará seus melhores esforços para que as operações sejam processadas no menor tempo possível, mas não oferece garantia de prazo de conclusão.
              </p>

              <h3>4.4 Retenção por compliance e limites ao dever de informar</h3>
              <p>
                O usuário reconhece que o Provedor, no cumprimento de obrigações legais e regulatórias, notadamente a Lei nº 9.613/1998 (Lavagem de Dinheiro), a Lei nº 13.260/2016 (Financiamento ao Terrorismo), as normas do Banco Central do Brasil, do COAF e demais órgãos reguladores aplicáveis, pode reter, suspender, analisar, reverter ou cancelar qualquer operação de PIX a qualquer momento, por prazo determinado ou indeterminado, com base em critérios internos de análise de risco ou em obrigação legal.
              </p>
              <p>
                Em determinadas hipóteses previstas em lei, nem a Chainless nem o Provedor poderão informar ao usuário o motivo, o andamento ou a existência de análise em curso, notadamente em razão da vedação legal ao <em>tipping-off</em> (art. 11, §2º, da Lei 9.613/1998). A Chainless não responderá por prejuízos, lucros cessantes, perdas de oportunidade, variação cambial ou volatilidade de ativos digitais decorrentes de retenções, análises de compliance ou atrasos imputáveis a Provedores ou a autoridades competentes.
              </p>

              <h3>4.5 Falhas e indisponibilidade de Provedores</h3>
              <p>
                A Chainless não se responsabiliza por atrasos, falhas, erros operacionais, indisponibilidade temporária ou permanente, suspensão ou descontinuação dos serviços prestados pelos Provedores. Na ocorrência de tais eventos, a Chainless atuará como canal razoável de comunicação entre usuário e Provedor, sem assumir, em nenhuma hipótese, obrigação solidária ou subsidiária pelos atos ou omissões do Provedor.
              </p>

              <h3>4.6 Variação cambial e de preço durante o processamento</h3>
              <p>
                O usuário reconhece que, em razão dos prazos descritos na cláusula 4.3, o valor em criptoativos recebido (no caso de depósito) ou o valor em Reais creditado (no caso de saque) pode diferir do valor estimado no momento da solicitação, em razão da volatilidade de mercado dos ativos digitais e das taxas de câmbio aplicadas pelo Provedor na hora da liquidação efetiva. A Chainless não garante preço, cotação ou taxa de conversão até a confirmação final da operação pelo Provedor.
              </p>

            </section>

            {/* ================================================
                5 — PROTOCOLOS DeFi
                ================================================ */}

            <section>
              <h2>5. Interação com Protocolos de Finanças Descentralizadas (DeFi)</h2>

              <h3>5.1 Natureza do serviço e qualificação jurídica</h3>
              <p>
                A Chainless pode disponibilizar, por meio de sua interface, o acesso a protocolos de finanças descentralizadas de terceiros (&ldquo;Protocolos DeFi&rdquo;), incluindo, sem limitação, protocolos de empréstimo e rendimento (<em>lending</em>), provisão de liquidez (<em>liquidity pools</em>), troca descentralizada (<em>DEXs</em>), <em>staking</em> e outros que venham a ser integrados. A título exemplificativo, os Protocolos DeFi acessíveis podem incluir Aave, Uniswap, Compound, Lido, Morpho, Curve e Yearn, sem que esta lista seja taxativa ou implique compromisso de disponibilidade contínua de qualquer deles.
              </p>
              <p>
                A Chainless não é instituição financeira, sociedade de crédito, gestora de recursos, consultora de investimentos nem distribuidora de valores mobiliários. A Chainless atua exclusivamente como interface tecnológica não custodial que permite ao usuário interagir diretamente com os <em>smart contracts</em> dos Protocolos DeFi. Todas as decisões de alocação, permanência, resgate, seleção de protocolo e configuração de parâmetros são exclusivamente do usuário. A inclusão de um Protocolo DeFi na interface não constitui endosso, recomendação nem certificação de sua segurança ou rentabilidade. A Chainless pode, a seu exclusivo critério, adicionar ou remover o acesso a qualquer Protocolo DeFi sem aviso prévio.
              </p>

              <h3>5.2 Protocolos DeFi e execução por <em>smart contract</em></h3>
              <p>
                As operações realizadas por meio de Protocolos DeFi são executadas integralmente por contratos inteligentes (<em>smart contracts</em>) de terceiros, implantados em blockchains públicas. A Chainless não controla, opera, administra, audita nem garante o funcionamento desses contratos inteligentes. O usuário reconhece que:
              </p>
              <ol>
                <li>as regras de cada operação, incluindo taxas, juros, limiares de liquidação e penalidades, são definidas e executadas exclusivamente pelo Protocolo DeFi, sem intervenção da Chainless;</li>
                <li>a Chainless não possui capacidade técnica para alterar, reverter, pausar ou cancelar operações executadas pelos Protocolos DeFi;</li>
                <li>bugs, exploits, ataques, falhas de governança ou indisponibilidade dos Protocolos DeFi podem resultar em perda parcial ou total dos ativos alocados, sem que a Chainless tenha qualquer responsabilidade;</li>
                <li>alterações nos parâmetros dos Protocolos DeFi (taxas, tokens aceitos, mecanismos de distribuição, limiares de liquidação) podem ser efetuadas por governança descentralizada sem necessidade de consentimento da Chainless ou do usuário.</li>
              </ol>

              <h3>5.3 Rendimentos</h3>
              <p>
                O usuário reconhece que todo rendimento exibido no aplicativo, incluindo taxas de APY, APR ou equivalentes, é uma estimativa baseada em dados on-chain no momento da consulta ou em médias históricas. Rendimentos passados não constituem garantia, promessa ou indicativo de rendimentos futuros. Os rendimentos são determinados algoritmicamente pelos Protocolos DeFi e podem variar significativamente, inclusive para zero ou valores negativos, a qualquer momento. A Chainless não garante, promete nem projeta qualquer taxa de rendimento ou resultado financeiro. A exibição de dados de rendimento tem caráter exclusivamente informativo e não constitui recomendação de investimento.
              </p>

              <h3>5.4 Empréstimo colateralizado</h3>
              <p>
                Nas operações de empréstimo colateralizado, o usuário deposita ativos digitais como garantia (&ldquo;Colateral&rdquo;) em um Protocolo DeFi para tomar emprestado outros ativos digitais. O usuário reconhece que:
              </p>
              <ol>
                <li>o Protocolo DeFi define limiares de Loan-to-Value (LTV) para chamada de margem e liquidação, que podem ser alterados pela governança do protocolo sem aviso prévio;</li>
                <li>se o LTV ultrapassar o limiar de liquidação, o Protocolo DeFi liquidará automaticamente parte ou a totalidade do Colateral, sem intervenção humana, sem negociação, sem prazo de carência e sem possibilidade de reversão;</li>
                <li>a liquidação pode implicar perda parcial ou total do Colateral e taxas adicionais (<em>liquidation penalty</em>);</li>
                <li>as taxas de juros são determinadas algoritmicamente e podem variar a qualquer momento, para cima ou para baixo, sem aviso prévio;</li>
                <li>a Chainless poderá enviar alertas de LTV por cortesia, mas não garante a entrega, a tempestividade ou a precisão desses alertas. A decisão de adicionar Colateral, reduzir a dívida ou aceitar a liquidação é exclusivamente do usuário.</li>
              </ol>
              <p>
                Para operações envolvendo Bitcoin (BTC), o ativo nativo pode ser convertido para uma versão tokenizada compatível com blockchains EVM, como Wrapped Bitcoin (wBTC), por meio de protocolos de bridge de terceiros. O valor de wBTC pode divergir do valor de BTC nativo (<em>depeg</em>), impactando o índice LTV e podendo provocar liquidação. Falhas ou exploits no protocolo de bridge podem resultar em perda parcial ou total dos ativos convertidos.
              </p>

              <h3>5.5 Pools de liquidez</h3>
              <p>
                Ao fornecer liquidez a pools de troca em Protocolos DeFi, o usuário reconhece os seguintes riscos adicionais:
              </p>
              <ul>
                <li>Perda impermanente (<em>impermanent loss</em>): se os preços dos ativos depositados divergirem, o valor total resgatável pode ser inferior ao que o usuário teria mantendo os ativos fora do pool. Se o resgate ocorre durante a divergência, a perda se torna permanente;</li>
                <li>Concentração de faixa: em protocolos de liquidez concentrada, se o preço sair da faixa definida pelo usuário, a posição deixa de gerar taxas e fica exposta ao ativo desvalorizado;</li>
                <li>Liquidez insuficiente: o volume de transações no pool pode ser insuficiente para gerar taxas relevantes;</li>
                <li>Inadimplência sistêmica: em cenários extremos, o mecanismo de liquidação do protocolo pode não cobrir todas as posições, resultando em perdas para depositantes.</li>
              </ul>

              <h3>5.6 Infraestrutura de rede</h3>
              <p>
                As operações em Protocolos DeFi dependem do funcionamento adequado de blockchains públicas (incluindo a rede Polygon e demais redes suportadas), de provedores de acesso e conexão com a blockchain (<em>RPC providers</em>, nós validadores, indexadores) e de serviços de infraestrutura de terceiros. O usuário reconhece que:
              </p>
              <ol>
                <li>as redes blockchain podem sofrer congestionamento, indisponibilidade temporária, reorganizações de blocos (<em>reorgs</em>), atrasos de confirmação ou interrupções por falhas técnicas, atualizações de protocolo ou ataques à rede;</li>
                <li>provedores de conexão podem apresentar falhas, latência elevada, dados desatualizados ou indisponibilidade, impedindo temporariamente a execução de transações pelo aplicativo;</li>
                <li>tais eventos podem impedir o usuário de executar operações em tempo hábil para evitar liquidação ou outras perdas;</li>
                <li>a Chainless não garante a disponibilidade, a latência ou o funcionamento contínuo de nenhuma rede blockchain nem de provedores de infraestrutura de terceiros.</li>
              </ol>

              <h3>5.7 Autonomia do usuário e acesso independente aos ativos</h3>
              <p>
                O usuário reconhece e declara expressamente que:
              </p>
              <ol>
                <li>possui acesso à sua chave privada, podendo exportá-la a qualquer momento por meio das configurações do aplicativo;</li>
                <li>seus ativos digitais, incluindo posições em Protocolos DeFi, existem na blockchain pública e não dependem do aplicativo Chainless para serem acessados, geridos ou movimentados;</li>
                <li>pode, a qualquer momento, utilizar interfaces alternativas para gerenciar suas posições, adicionar ou retirar ativos e executar quaisquer operações;</li>
                <li>a indisponibilidade do aplicativo Chainless não acarreta inacessibilidade dos fundos nem das posições do usuário, uma vez que estes residem em blockchains públicas acessíveis por múltiplas interfaces;</li>
                <li>consequentemente, eventuais indisponibilidades do aplicativo não eximem o usuário da responsabilidade por monitorar e gerenciar suas próprias posições.</li>
              </ol>

              <h3>5.8 Taxas operacionais sobre interações DeFi</h3>
              <p>
                A Chainless pode cobrar taxas sobre depósitos, resgates ou outras interações com Protocolos DeFi, conforme exibido no momento da operação. Essas taxas remuneram o serviço de interface e infraestrutura e não constituem taxa de gestão, taxa de performance nem remuneração por resultado de investimento.
              </p>

              <h3>5.9 Valores mobiliários</h3>
              <p>
                Tokens derivados de posições em Protocolos DeFi, como tokens de rendimento, tokens de posição de liquidez (<em>LP tokens</em>) e equivalentes, não são emitidos, ofertados nem administrados pela Chainless. A Chainless não realiza oferta pública de valores mobiliários nem distribui contratos de investimento coletivo nos termos da Lei 6.385/76 e do Parecer de Orientação CVM nº 40/2022. A interação do usuário com Protocolos DeFi por meio da interface é autônoma, direta e por sua conta e risco exclusivos.
              </p>

              <h3>5.10 Informações tributárias</h3>
              <p>
                Eventuais informações sobre tratamento tributário de operações em Protocolos DeFi apresentadas no aplicativo, no blog ou em materiais educativos da Chainless são meramente informativas e não constituem aconselhamento tributário, jurídico ou financeiro. O usuário deve consultar profissional habilitado para avaliar as consequências fiscais de suas operações.
              </p>

              <h3>5.11 Aceite informado</h3>
              <p>
                A utilização de qualquer funcionalidade envolvendo Protocolos DeFi está condicionada à leitura e aceite expresso do disclosure de riscos apresentado na interface do aplicativo previamente à confirmação da operação. O aceite constitui declaração do usuário de que:
              </p>
              <ol>
                <li>leu, compreendeu e aceitou os riscos descritos nesta Seção 5 e no disclosure apresentado no aplicativo;</li>
                <li>possui conhecimento suficiente sobre ativos digitais e protocolos DeFi para tomar uma decisão informada;</li>
                <li>não está utilizando recursos essenciais à sua subsistência ou de sua família;</li>
                <li>tomou decisão autônoma, sem recomendação, aconselhamento ou gestão por parte da Chainless;</li>
                <li>reconhece que possui acesso à sua chave privada e pode gerenciar suas posições por interfaces alternativas.</li>
              </ol>
            </section>

            {/* ================================================
                6 — RISCOS E RESPONSABILIDADES
                ================================================ */}

            <section>
              <h2>6. Riscos e Responsabilidades</h2>

              <h3>6.1 Ativos Digitais</h3>
              <p>
                Os ativos digitais, incluindo tokens e criptomoedas, são conhecidos por sua volatilidade de preços, podendo sofrer variações significativas em curtos períodos de tempo. A negociação de ativos digitais também envolve riscos adicionais, como falta de regulamentação, liquidez limitada e potencial exposição a fraudes e ataques cibernéticos. Os usuários devem realizar sua própria pesquisa e análise antes de realizar transações com ativos digitais e devem estar preparados para assumir os riscos associados a essas atividades.
              </p>

              <h3>6.2 Stablecoins</h3>
              <p>
                Os usuários devem estar cientes de que, embora as stablecoins busquem manter um valor estável, ainda podem estar sujeitas a riscos significativos. Mesmo aquelas pareadas com moedas fiduciárias, como o dólar americano, podem perder sua paridade devido a uma variedade de fatores, incluindo:
              </p>
              <ul>
                <li>Mudanças nas políticas econômicas ou regulatórias que afetam a moeda fiduciária subjacente.</li>
                <li>Problemas operacionais ou regulatórios com a entidade responsável pela custódia da moeda fiduciária.</li>
                <li>Falhas na governança ou auditoria inadequada das reservas de moeda fiduciária.</li>
              </ul>
              <p>
                A Chainless não pode garantir a paridade da stablecoin com seu colateral e não se responsabiliza por perdas decorrentes de qualquer alteração no valor da stablecoin.
              </p>

              <h3>6.3 Liquidez e Disponibilidade de Ativos</h3>
              <p>
                Os usuários reconhecem que a liquidez dos ativos digitais listados na Chainless pode variar e que, em determinados momentos, poderá haver indisponibilidade temporária ou permanente para realizar trocas dentro da plataforma. A Chainless não garante a liquidez presente ou futura de nenhum ativo digital, nem assegura que os ativos adquiridos possam ser novamente negociados ou convertidos dentro do aplicativo.
              </p>
              <p>
                A listagem de um ativo no aplicativo não implica qualquer garantia de disponibilidade contínua para negociação. O usuário compreende que os mercados acessados por meio da Chainless são voláteis, descentralizados e independentes, podendo ser descontinuados a qualquer momento por fatores externos à Chainless.
              </p>
              <p>
                Em qualquer hipótese, os ativos digitais armazenados pelo usuário na carteira Chainless permanecem sob sua custódia exclusiva e poderão ser transferidos a qualquer momento para outras carteiras ou plataformas compatíveis, a critério do próprio usuário.
              </p>

              <h3>6.4 Perdas e Danos</h3>
              <p>
                A Chainless não fornece aconselhamento de investimento e não se responsabiliza por quaisquer perdas ou danos decorrentes do uso do aplicativo, da negociação de ativos digitais ou da interação com Protocolos DeFi. Os usuários devem exercer cautela e responsabilidade ao lidar com ativos digitais e devem buscar orientação profissional, se necessário, antes de tomar quaisquer decisões de investimento.
              </p>
            </section>

            {/* ================================================
                7 — LICENÇA E PI
                ================================================ */}

            <section>
              <h2>7. Licença e Propriedade Intelectual</h2>

              <h3>7.1 Licença de Uso</h3>
              <p>
                Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para usar o Chainless, sujeita a estes Termos de Uso.
              </p>

              <h3>7.2 Propriedade Intelectual</h3>
              <p>
                Todos os direitos, títulos e interesses no aplicativo e no conteúdo fornecido através do aplicativo são de propriedade da Chainless ou de seus licenciadores. Você não pode copiar, modificar, distribuir, vender ou arrendar qualquer parte do nosso serviço ou software.
              </p>
            </section>

            {/* ================================================
                8 — PRIVACIDADE
                ================================================ */}

            <section>
              <h2>8. Política de Privacidade e Direitos dos Titulares</h2>
              <p>
                Na Chainless, estamos comprometidos em proteger a privacidade e os direitos dos nossos usuários em conformidade com as diretrizes estabelecidas pela Lei Geral de Proteção de Dados (LGPD) do Brasil.
              </p>
              <p>
                Além disso, é importante ressaltar que ao utilizar a Chainless, as suas transações realizadas pela carteira de ativos digitais serão registradas na blockchain pública associada à respectiva criptomoeda ou token. Essas transações são públicas, imutáveis e não podem ser deletadas.
              </p>

              <h3>8.1 Coleta e Uso de Dados Pessoais</h3>
              <p>Ao usar a Chainless, você concorda com a coleta e uso de seus dados pessoais conforme nossa Política de Privacidade.</p>

              <h3>8.2 Direitos dos Titulares dos Dados</h3>
              <p>Você tem o direito de acessar, corrigir, atualizar e solicitar a exclusão de seus dados pessoais, conforme permitido pela lei.</p>

              <h3>8.3 Política de Privacidade</h3>
              <p>Nossa Política de Privacidade detalha nossas práticas de coleta, uso e proteção de dados pessoais.</p>

              <h3>8.4 Dados na Blockchain</h3>
              <p>Ao utilizar a Chainless, suas transações serão registradas na blockchain pública associada à respectiva criptomoeda ou token. As transações na blockchain são públicas, imutáveis e não podem ser deletadas.</p>

              <h3>8.5 Consentimento</h3>
              <p>Ao utilizar os serviços da Chainless, você concorda explicitamente com a coleta, uso e processamento dos seus dados pessoais conforme descrito em nossa Política de Privacidade. Você reconhece que seu consentimento é voluntário e pode ser retirado a qualquer momento, sujeito às limitações legais ou contratuais aplicáveis.</p>
            </section>

            {/* ================================================
                9 — LIMITAÇÃO DE RESPONSABILIDADE
                ================================================ */}

            <section>
              <h2>9. Limitação de Responsabilidade</h2>

              <h3>9.1 Isenção de Garantias</h3>
              <p>O Chainless é fornecido &ldquo;como está&rdquo; e &ldquo;conforme disponível&rdquo;, sem garantias de qualquer tipo, explícitas ou implícitas.</p>

              <h3>9.2 Limitação de Danos</h3>
              <p>
                Em hipótese alguma, a Chainless, suas subsidiárias ou afiliadas, assim como seus respectivos diretores, acionistas, funcionários, agentes ou representantes serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, punitivos ou consequentes decorrentes do serviço, incluindo, sem limitação:
              </p>
              <ul>
                <li>atrasos, retenções, suspensões ou recusas de operações PIX imputáveis a Provedores terceirizados ou a exigências regulatórias;</li>
                <li>variação de preço de ativos digitais durante o processamento de operações;</li>
                <li>liquidação de Colateral por Protocolos DeFi;</li>
                <li>bugs, exploits ou ataques a Protocolos DeFi ou protocolos de bridge;</li>
                <li>variação de taxas de juros ou rendimentos em Protocolos DeFi;</li>
                <li>perda impermanente (<em>impermanent loss</em>) em pools de liquidez;</li>
                <li>divergência (<em>depeg</em>) entre ativos tokenizados e seus equivalentes nativos;</li>
                <li>alterações nos parâmetros de governança de Protocolos DeFi;</li>
                <li>indisponibilidade, congestionamento ou falhas em redes blockchain ou provedores de conexão;</li>
                <li>indisponibilidade da interface da Chainless, considerando que o usuário dispõe de acesso independente aos seus ativos conforme reconhecido na cláusula 5.7;</li>
                <li>diferença entre rendimento estimado ou exibido e rendimento efetivamente obtido;</li>
                <li>decisões de alocação ou investimento tomadas pelo usuário com base em dados exibidos na interface.</li>
              </ul>
              <p>
                A responsabilidade total da Chainless não excederá o montante total real recebido pela Chainless do usuário para acessar o serviço.
              </p>

              <h3>9.3 Custódia de Ativos Digitais</h3>
              <p>A Chainless atua como uma carteira de ativos digitais onde a custódia é exclusivamente realizada pelo usuário.</p>

              <h3>9.4 Indenização</h3>
              <p>
                Você concorda em indenizar, isentar de responsabilidade e liberar a Chainless de e contra quaisquer e todas as reivindicações, danos, custos e despesas, incluindo honorários advocatícios razoáveis, decorrentes ou relacionados ao seu acesso, uso, tentativa de uso, incapacidade de uso ou uso indevido do Serviço, ou descumprimento destes Termos de Uso.
              </p>
            </section>

            {/* ================================================
                10–13 — BOILERPLATE
                ================================================ */}

            <section>
              <h2>10. Modificações nos Termos</h2>
              <p>Podemos alterar estes Termos de Uso a qualquer momento. O uso contínuo do Chainless após a publicação das alterações será considerado como aceitação dos novos termos.</p>
            </section>

            <section>
              <h2>11. Rescisão</h2>

              <h3>11.1 Direito de Rescisão</h3>
              <p>Podemos encerrar ou suspender seu acesso ao Chainless a qualquer momento, sem aviso prévio, se você violar estes Termos de Uso ou se suspeitarmos de atividades fraudulentas.</p>

              <h3>11.2 Efeitos da Rescisão</h3>
              <p>Após a rescisão, você perde o direito de acessar o serviço e todas as informações associadas à sua conta podem ser excluídas.</p>
            </section>

            <section>
              <h2>12. Lei Aplicável e Jurisdição</h2>

              <h3>12.1 Lei Aplicável</h3>
              <p>O Serviço é criado e controlado pela Notus Labs Ltda. no Estado do Rio de Janeiro, Brasil. Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil.</p>

              <h3>12.2 Jurisdição</h3>
              <p>Todos os processos legais decorrentes destes Termos de Uso ou do Serviço devem ser conduzidos em um tribunal federal ou estadual localizado no Rio de Janeiro, Brasil, e sua(s) reivindicação(ões) será(ão) considerada(s) perdida(s) e barrada(s) para sempre a menos que seja(m) apresentada(s) dentro de um ano a partir do momento em que o(s) evento(s) que deu(ram) origem a tal(is) reivindicação(ões) começou(aram).</p>

              <h3>12.3 Jurisdição Exclusiva</h3>
              <p>Você expressamente se submete à jurisdição exclusiva dos referidos tribunais e consente com a intimação extraterritorial do processo.</p>
            </section>

            <section>
              <h2>13. Disposições Gerais</h2>
              <ul>
                <li>Estes Termos de Uso constituem o acordo completo entre você e o Chainless, substituindo todos os acordos anteriores.</li>
                <li>A falha em exercer ou fazer cumprir qualquer direito ou disposição destes Termos de Uso não constituirá renúncia a tal direito ou disposição.</li>
                <li>Se qualquer disposição destes Termos de Uso for considerada inválida, as demais disposições continuarão em pleno vigor e efeito.</li>
              </ul>
            </section>

            {/* Contato */}
            <section>
              <h2>Contato</h2>
              <p>
                Para dúvidas sobre estes Termos de Uso, entre em contato conosco em <a href="mailto:support@chainless.finance">support@chainless.finance</a>.
              </p>
            </section>

          </div>
        </FadeUp>
      </div>
    </main>
  );
}
