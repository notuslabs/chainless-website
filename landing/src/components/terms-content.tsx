"use client";

import { FadeUp } from "./motion";

const lastUpdated = "2 de junho de 2025";

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

            {/* Introdução */}
            <section>
              <h2>Introdução</h2>
              <p>
                Chainless é um aplicativo de carteira de ativos digitais desenvolvido pela Notus Labs LTDA. Ao usar nosso aplicativo, você concorda com estes Termos de Uso (&ldquo;Termos&rdquo;, &ldquo;Termos de Uso&rdquo;). Por favor, leia-os cuidadosamente. Se você discordar de qualquer parte dos termos, você não pode acessar o aplicativo Chainless. Podemos modificar os Termos a qualquer momento, a nosso exclusivo critério e sem aviso prévio. Se o fizermos, notificaremos você publicando os Termos modificados no site, fornecendo um aviso por meio do aplicativo ou por outros métodos de comunicação que consideramos razoáveis. Ao continuar a usar o site ou o serviço após modificarmos os Termos, você concorda em estar legalmente vinculado e a cumprir os Termos modificados.
              </p>
            </section>

            {/* Outros Termos */}
            <section>
              <h2>Outros Termos</h2>
              <p>
                Estes Termos referem-se aos seguintes termos adicionais, que também se aplicam ao seu uso de nossas plataformas:
              </p>
              <ul>
                <li>Nossa Política de Privacidade;</li>
                <li>Política de Prevenção e Combate à Lavagem de Dinheiro, ao Financiamento do Terrorismo e da Proliferação de Armas de Destruição em Massa;</li>
                <li>Política de Know Your Customer (Conheça o seu cliente).</li>
              </ul>
            </section>

            {/* 2.1 — Elegibilidade */}
            <section>
              <h2>2.1 Elegibilidade</h2>
              <p>
                Você deve ter pelo menos 18 anos para usar o Chainless. Ao utilizar o aplicativo, você declara e garante que tem a capacidade legal para celebrar este acordo.
              </p>
              <p>
                Nem você nem qualquer pessoa que o possua ou controle está sujeita a sanções ou de outra forma designada em qualquer lista de partes proibidas ou restritas, incluindo, entre outras, as listas mantidas pelo Conselho de Segurança das Nações Unidas, pelo governo das Ilhas Virgens Britânicas, pelo governo do Reino Unido, pelo governo dos Estados Unidos (por exemplo, a Lista de Nacionais Especialmente Designados e a Lista de Evasores de Sanções Estrangeiras do Departamento do Tesouro dos Estados Unidos e a Lista de Entidades do Departamento de Comércio dos Estados Unidos), pela União Europeia ou por seus Estados-Membros ou por outra autoridade governamental aplicável e não está localizado nos Estados Unidos.
              </p>
            </section>

            {/* 2.2 — Segurança da Conta */}
            <section>
              <h2>2.2 Segurança da Conta</h2>
              <p>
                Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança, entrando em contato com nossa equipe de suporte através do e-mail <a href="mailto:support@chainless.finance">support@chainless.finance</a>. Não nos responsabilizamos por qualquer perda ou dano decorrente de sua falha em proteger suas informações de login.
              </p>
            </section>

            {/* 2.3 — Carteira */}
            <section>
              <h2>2.3 Carteira de Ativos Digitais e Contrato de Smart Wallet</h2>
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
            </section>

            {/* 2.4 — Custódia */}
            <section>
              <h2>2.4 Custódia de Ativos Digitais</h2>
              <p>
                A Chainless atua como uma carteira digital e não exerce custódia sobre os ativos digitais dos usuários. Os usuários são os únicos responsáveis pela guarda e segurança de seus ativos digitais armazenados na Carteira Digital Chainless. A Chainless não possui acesso direto aos ativos digitais dos usuários e não se responsabiliza por perdas decorrentes de acesso não autorizado ou má gestão por parte dos usuários. Os usuários devem adotar medidas de segurança adequadas, como proteger suas credenciais de acesso e utilizar as funcionalidades de segurança oferecidas pela carteira digital.
              </p>
            </section>

            {/* 2.5 — Segurança Cibernética */}
            <section>
              <h2>2.5 Segurança Cibernética</h2>
              <p>
                Enquanto desenvolvemos o Chainless com foco na segurança e privacidade dos nossos usuários, não garantimos que nosso site seja seguro ou livre de bugs ou vírus. Embora os aplicativos móveis sejam geralmente seguros, é fundamental garantir que seu dispositivo esteja protegido contra ameaças online. Você é responsável pela configuração de sua tecnologia da informação, programas de computador e plataforma para acessar nosso site. Você deve usar seu próprio software de proteção contra vírus.
              </p>
              <p>
                Você não deve fazer uso indevido de nosso app introduzindo conscientemente vírus, cavalos de tróia, worms, bombas lógicas ou outros materiais maliciosos ou tecnologicamente prejudiciais. Você não deve tentar obter acesso não autorizado ao nosso site, ao servidor no qual o nosso site está armazenado ou a qualquer servidor, computador ou banco de dados conectado ao nosso site. Você não deve atacar nosso site por meio de um ataque de negação de serviço ou de um ataque distribuído de negação de serviço. Denunciaremos qualquer violação desse tipo às autoridades competentes para aplicação da lei e cooperaremos com essas autoridades divulgando sua identidade a elas. No caso de tal violação, seu direito de usar nosso app será interrompido imediatamente.
              </p>
            </section>

            {/* 2.6 — Custos e Taxas */}
            <section>
              <h2>2.6 Custos e Taxas</h2>
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
            </section>

            {/* 2.7 — Conduta do Usuário */}
            <section>
              <h2>2.7 Conduta do Usuário</h2>
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

            {/* 3 — Transações e Pagamentos */}
            <section>
              <h2>3. Transações e Pagamentos</h2>

              <h3>3.1 Transações Automatizadas</h3>
              <p>
                Utilizando o contrato de Smart Wallet integrado, os usuários podem programar transações automatizadas, como pagamentos recorrentes ou execução de contratos inteligentes. Os usuários devem estar cientes de que as transações automatizadas serão realizadas de acordo com as configurações definidas por eles mesmos, e a Chainless não se responsabiliza por eventuais perdas ou danos decorrentes dessas transações.
              </p>

              <h3>3.2 Processamento de Transações e Interação com Serviços de Terceiros</h3>
              <p>
                A Chainless é uma carteira de ativos digitais baseada em blockchain que permite aos usuários realizar transações seguras e rápidas. Além disso, a Chainless pode interagir com serviços de terceiros, como DEXs (Exchange Descentralizadas), para facilitar a negociação de ativos digitais. Durante o uso desses serviços, os usuários concordam em cumprir os termos e condições estabelecidos pelos provedores de serviços externos.
              </p>

              <h3>3.3 Taxas e Custos Associados</h3>
              <p>
                A Chainless se compromete a fornecer uma plataforma acessível e transparente para seus usuários. Como parte desse compromisso, gostaríamos de esclarecer que não cobramos nenhuma taxa de assinatura pelo uso dos nossos serviços. Entendemos a importância de manter nossos serviços acessíveis a todos os usuários, e não aplicamos taxas recorrentes para o uso da Chainless.
              </p>
              <p>
                Ao utilizar a Chainless e seus serviços integrados, os usuários concordam em pagar todas as taxas associadas às transações e interações com serviços de terceiros, conforme descrito nos termos e condições específicos de cada serviço. Essas taxas podem variar dependendo da natureza da transação e das políticas dos provedores de serviços.
              </p>

              <h3>3.4 Política de Reembolso</h3>
              <p>
                Os reembolsos serão considerados caso a caso e estarão sujeitos às políticas estabelecidas pelos provedores de serviços de terceiros, quando aplicável. Os usuários que desejarem solicitar um reembolso devem entrar em contato com o suporte ao cliente da Chainless ou do serviço de terceiros relevante, seguindo os procedimentos específicos fornecidos.
              </p>

              <h3>3.5 Segurança Financeira</h3>
              <p>
                A Chainless implementa medidas de segurança rigorosas para proteger as informações financeiras dos usuários durante as transações e interações com serviços de terceiros. No entanto, os usuários reconhecem que, devido à natureza da tecnologia blockchain e da Internet, a segurança absoluta não pode ser garantida. É responsabilidade dos usuários adotar medidas adicionais de segurança, como o uso de autenticação de dois fatores e a proteção de suas credenciais de acesso.
              </p>
              <p>
                <strong>Responsabilidade do Usuário:</strong> Os usuários são responsáveis por todas as transações realizadas através de suas contas na Carteira Digital Chainless. Isso inclui, mas não se limita a, transações de depósito, saque, trocas e transferências de ativos digitais.
              </p>
              <p>
                <strong>Transações Irreversíveis:</strong> As transações realizadas na blockchain são geralmente irreversíveis. Uma vez que uma transação é confirmada na blockchain, não é possível reverter ou cancelar essa transação. Portanto, os usuários devem revisar cuidadosamente todos os detalhes da transação antes de confirmá-la.
              </p>
              <p>
                <strong>Suporte Técnico:</strong> Embora não possamos reverter transações ou oferecer reembolsos diretos devido à natureza imutável da blockchain, nossa equipe de suporte técnico está disponível para ajudar os usuários em caso de erros técnicos, problemas de conectividade ou outras questões relacionadas à plataforma.
              </p>
              <p>
                <strong>Disputas e Resolução de Problemas:</strong> Em caso de disputas ou problemas relacionados a transações, os usuários podem entrar em contato com nossa equipe de suporte para assistência. Faremos o possível para mediar e resolver quaisquer problemas, embora não possamos garantir reembolsos diretos.
              </p>
              <p>
                <strong>Exceções:</strong> Em circunstâncias excepcionais, como falhas técnicas graves ou atividades fraudulentas, reservamo-nos o direito de considerar reembolsos caso a caso. Tais situações serão avaliadas pela nossa equipe de suporte com base nas circunstâncias específicas envolvidas.
              </p>
            </section>

            {/* 4 — PIX */}
            <section>
              <h2>4. Serviços de Depósito e Saque por PIX</h2>
              <p>
                Nossos serviços de depósito e saque por PIX são fornecidos em colaboração com um parceiro terceirizado (&ldquo;Parceiro de On-ramp e Off-ramp&rdquo;), que facilita as transações entre sua conta bancária e sua carteira digital na Chainless. Os limites para transações PIX são definidos de acordo com as políticas de Anti Lavagem de Dinheiro (AML) e Conheça Seu Cliente (KYC), estabelecidas em conformidade com as diretrizes requeridas pelo nosso parceiro terceirizado.
              </p>
              <ol>
                <li><strong>Verificação de Identidade:</strong> Antes de realizar qualquer transação PIX, verifique cuidadosamente os detalhes do destinatário, incluindo o nome completo e o CPF/CNPJ, e certifique-se de estar lidando com uma fonte confiável.</li>
                <li><strong>Limite de Transações:</strong> Estabeleça limites de transação adequados para proteger seus ativos digitais contra transações não autorizadas. Não realize transações que estejam fora de seu padrão usual de atividade financeira sem uma verificação cuidadosa.</li>
                <li><strong>Confirmação de Transações:</strong> Sempre confirme as transações PIX antes de finalizá-las e verifique os detalhes da transação com atenção para evitar erros ou fraudes.</li>
                <li><strong>Comunicação Segura:</strong> Evite compartilhar informações confidenciais ou detalhes de transações em canais de comunicação não seguros.</li>
                <li><strong>Verificação de Autenticidade:</strong> Utilize as ferramentas de verificação de autenticidade oferecidas pelo seu banco ou provedor de serviços financeiros para validar as informações de transações PIX e evitar fraudes.</li>
              </ol>
            </section>

            {/* 5 — Riscos */}
            <section>
              <h2>5. Riscos e responsabilidades</h2>

              <h3>5.1 Ativos Digitais</h3>
              <p>
                Os usuários devem estar cientes dos riscos associados ao uso da Carteira Digital Chainless e à negociação de ativos digitais, incluindo tokens. Os ativos digitais, incluindo tokens e criptomoedas, são conhecidos por sua volatilidade de preços, podendo sofrer variações significativas em curtos períodos de tempo.
              </p>
              <p>
                A negociação de ativos digitais também envolve riscos adicionais, como falta de regulamentação, liquidez limitada e potencial exposição a fraudes e ataques cibernéticos. Os usuários devem realizar sua própria pesquisa e análise antes de realizar transações com ativos digitais e devem estar preparados para assumir os riscos associados a essas atividades.
              </p>

              <h3>5.2 Stablecoins</h3>
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

              <h3>5.3 Perdas e Danos</h3>
              <p>
                A Chainless não fornece aconselhamento de investimento e não se responsabiliza por quaisquer perdas ou danos decorrentes da negociação de ativos digitais. Os usuários devem exercer cautela e responsabilidade ao lidar com ativos digitais e devem buscar orientação profissional, se necessário, antes de tomar quaisquer decisões de investimento.
              </p>

              <h3>5.4 Liquidez e Disponibilidade de Ativos</h3>
              <p>
                A Chainless atua exclusivamente como uma carteira de criptoativos autônoma e não se caracteriza como corretora, distribuidora de valores mobiliários ou intermediadora de ativos digitais. O serviço prestado se limita à conexão do usuário com protocolos de finanças descentralizadas (DeFi), permitindo a interação com liquidez e mercados disponíveis diretamente nas blockchains suportadas pela plataforma.
              </p>
              <p>
                Os usuários reconhecem que a liquidez dos ativos digitais listados na Chainless pode variar e que, em determinados momentos, poderá haver indisponibilidade temporária ou permanente para realizar trocas dentro da plataforma. A Chainless não garante a liquidez presente ou futura de nenhum ativo digital, nem assegura que os ativos adquiridos possam ser novamente negociados ou convertidos dentro do aplicativo.
              </p>
              <p>
                A listagem de um ativo no aplicativo não implica qualquer garantia de disponibilidade contínua para negociação. O usuário compreende que os mercados acessados por meio da Chainless são voláteis, descentralizados e independentes, podendo ser descontinuados a qualquer momento por fatores externos à Chainless.
              </p>
              <p>
                Em qualquer hipótese, os ativos digitais armazenados pelo usuário na carteira Chainless permanecem sob sua custódia exclusiva e poderão ser transferidos a qualquer momento para outras carteiras ou plataformas compatíveis, a critério do próprio usuário. Quando necessário, o usuário poderá ser orientado a realizar a transferência de seus ativos para fora da Chainless.
              </p>
            </section>

            {/* 6 — Licença e PI */}
            <section>
              <h2>6. Licença e Propriedade Intelectual</h2>

              <h3>6.1 Licença de Uso</h3>
              <p>
                Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para usar o Chainless, sujeita a estes Termos de Uso.
              </p>

              <h3>6.2 Propriedade Intelectual</h3>
              <p>
                Todos os direitos, títulos e interesses no aplicativo e no conteúdo fornecido através do aplicativo são de propriedade da Chainless ou de seus licenciadores. Você não pode copiar, modificar, distribuir, vender ou arrendar qualquer parte do nosso serviço ou software.
              </p>
            </section>

            {/* 7 — Privacidade */}
            <section>
              <h2>7. Política de Privacidade e Direitos dos Titulares</h2>
              <p>
                Na Chainless, estamos comprometidos em proteger a privacidade e os direitos dos nossos usuários em conformidade com as diretrizes estabelecidas pela Lei Geral de Proteção de Dados (LGPD) do Brasil.
              </p>
              <p>
                Além disso, é importante ressaltar que ao utilizar a Chainless, as suas transações realizadas pela carteira de ativos digitais serão registradas na blockchain pública associada à respectiva criptomoeda ou token. Essas transações são públicas, imutáveis e não podem ser deletadas.
              </p>

              <h3>7.1 Coleta e Uso de Dados Pessoais</h3>
              <p>Ao usar a Chainless, você concorda com a coleta e uso de seus dados pessoais conforme nossa Política de Privacidade.</p>

              <h3>7.2 Direitos dos Titulares dos Dados</h3>
              <p>Você tem o direito de acessar, corrigir, atualizar e solicitar a exclusão de seus dados pessoais, conforme permitido pela lei.</p>

              <h3>7.3 Política de Privacidade</h3>
              <p>Nossa Política de Privacidade detalha nossas práticas de coleta, uso e proteção de dados pessoais.</p>

              <h3>7.4 Dados na Blockchain</h3>
              <p>Ao utilizar a Chainless, suas transações serão registradas na blockchain pública associada à respectiva criptomoeda ou token. As transações na blockchain são públicas, imutáveis e não podem ser deletadas.</p>

              <h3>7.5 Consentimento</h3>
              <p>Ao utilizar os serviços da Chainless, você concorda explicitamente com a coleta, uso e processamento dos seus dados pessoais conforme descrito em nossa Política de Privacidade. Você reconhece que seu consentimento é voluntário e pode ser retirado a qualquer momento, sujeito às limitações legais ou contratuais aplicáveis.</p>
            </section>

            {/* 8 — Limitação de Responsabilidade */}
            <section>
              <h2>8. Limitação de Responsabilidade</h2>

              <h3>8.1 Isenção de Garantias</h3>
              <p>O Chainless é fornecido &ldquo;como está&rdquo; e &ldquo;conforme disponível&rdquo;, sem garantias de qualquer tipo, explícitas ou implícitas.</p>

              <h3>8.2 Limitação de Danos</h3>
              <p>
                Em hipótese alguma, a Chainless, suas subsidiárias ou afiliadas, assim como seus respectivos diretores, acionistas, funcionários, agentes ou representantes serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, punitivos ou consequentes decorrentes do serviço. A responsabilidade total da Chainless não excederá o montante total real recebido pela Chainless do usuário para acessar o serviço.
              </p>

              <h3>8.3 Custódia de Ativos Digitais</h3>
              <p>A Chainless atua como uma carteira de ativos digitais onde a custódia é exclusivamente realizada pelo usuário.</p>

              <h3>9.4 Indenização</h3>
              <p>
                Você concorda em indenizar, isentar de responsabilidade e liberar a Chainless de e contra quaisquer e todas as reivindicações, danos, custos e despesas, incluindo honorários advocatícios razoáveis, decorrentes ou relacionados ao seu acesso, uso, tentativa de uso, incapacidade de uso ou uso indevido do Serviço, ou descumprimento destes Termos de Uso.
              </p>
            </section>

            {/* 10 — Modificações */}
            <section>
              <h2>10. Modificações nos Termos</h2>
              <p>Podemos alterar estes Termos de Uso a qualquer momento. O uso contínuo do Chainless após a publicação das alterações será considerado como aceitação dos novos termos.</p>
            </section>

            {/* 11 — Rescisão */}
            <section>
              <h2>11. Rescisão</h2>

              <h3>11.1 Direito de Rescisão</h3>
              <p>Podemos encerrar ou suspender seu acesso ao Chainless a qualquer momento, sem aviso prévio, se você violar estes Termos de Uso ou se suspeitarmos de atividades fraudulentas.</p>

              <h3>11.2 Efeitos da Rescisão</h3>
              <p>Após a rescisão, você perde o direito de acessar o serviço e todas as informações associadas à sua conta podem ser excluídas.</p>
            </section>

            {/* 12 — Lei Aplicável */}
            <section>
              <h2>12. Lei Aplicável e Jurisdição</h2>

              <h3>12.1 Lei Aplicável</h3>
              <p>O Serviço é criado e controlado pela Notus Labs Ltda. no Estado do Rio de Janeiro, Brasil. Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil.</p>

              <h3>12.2 Jurisdição</h3>
              <p>Todos os processos legais decorrentes destes Termos de Uso ou do Serviço devem ser conduzidos em um tribunal federal ou estadual localizado no Rio de Janeiro, Brasil, e sua(s) reivindicação(ões) será(ão) considerada(s) perdida(s) e barrada(s) para sempre a menos que seja(m) apresentada(s) dentro de um ano a partir do momento em que o(s) evento(s) que deu(ram) origem a tal(is) reivindicação(ões) começou(aram).</p>

              <h3>12.3 Jurisdição Exclusiva</h3>
              <p>Você expressamente se submete à jurisdição exclusiva dos referidos tribunais e consente com a intimação extraterritorial do processo.</p>
            </section>

            {/* 13 — Disposições Gerais */}
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
