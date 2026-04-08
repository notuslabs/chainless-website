"use client";

import { FadeUp } from "./motion";

const lastUpdated = "6 de junho de 2024";

export function PrivacyContent() {
  return (
    <main className="relative bg-dark-500 px-4 pb-32 pt-40">
      <div className="mx-auto max-w-[780px]">
        {/* Header */}
        <FadeUp>
          <p className="text-overline font-semibold uppercase tracking-[0.25em] text-text-secondary">
            Política de Privacidade
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-[1.15] tracking-tight text-text-primary md:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-small text-text-secondary">
            Última atualização: {lastUpdated}
          </p>
          <div className="mt-8 h-px bg-white/[0.06]" />
        </FadeUp>

        {/* Body — legal prose */}
        <FadeUp>
          <div className="legal-prose mt-12 space-y-10 text-[0.9375rem] leading-[1.85] text-text-secondary">

            {/* 1 — Introdução */}
            <section>
              <h2>1. Introdução</h2>
              <p>
                Bem-vindo à Chainless, respeitamos a sua privacidade e estamos comprometidos em proteger suas informações pessoais. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações quando você usa nosso aplicativo.
              </p>
              <p>
                Notus Labs Ltda. (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo; ou &ldquo;nós&rdquo;) opera o aplicativo Chainless e (o &ldquo;Serviço&rdquo;). Esta página informa sobre nossas políticas em relação à coleta, uso e divulgação de Informações Pessoais que recebemos dos usuários do Serviço.
              </p>
              <p>
                <strong>SE VOCÊ NÃO CONCORDA COM QUALQUER PARTE DESTA POLÍTICA DE PRIVACIDADE OU DOS NOSSOS TERMOS DE USO, POR FAVOR, NÃO UTILIZE NENHUM DOS SERVIÇOS.</strong>
              </p>
            </section>

            {/* 2 — Informações que Coletamos */}
            <section>
              <h2>2. Informações que Coletamos</h2>

              <h3>2.1 Dados pessoais informados pelo titular</h3>
              <p>
                Poderemos usar ferramentas de inteligência artificial no tratamento de dados pessoais para personalizar e aprimorar o oferecimento de serviços e produtos e outras finalidades, sempre em conformidade com as obrigações legais e regulatórias.
              </p>
              <p>Lista de dados pessoais informados pelo titular:</p>
              <ul>
                <li>Dados cadastrais: nome completo, documentos de identificação, nacionalidade, endereço, data de nascimento, filiação, gênero, declaração de US Person e de PPE (pessoa politicamente exposta), perfil de investidor, entre outros.</li>
                <li>Dados de contato: telefone e e-mail</li>
                <li>Empresa em que trabalha</li>
                <li>Profissão</li>
                <li>Renda declarada e comprovante</li>
                <li>Chaves Pix e informações a elas relacionadas</li>
                <li>Cópias de documentos de identificação como RG, CNH, CPF, dentre outros</li>
                <li>Foto de perfil</li>
                <li>Dados biométricos: fotografia do rosto, impressão digital e/ou biometria facial para desbloqueio do app via dispositivo (fingerprint, touch ID e face ID), e reconhecimento facial para fins de autenticação e de proteção contra fraudes.</li>
              </ul>
              <p>
                <strong>Dados Relacionados ao Perfil do Investidor:</strong> Para cumprir requisitos regulatórios relacionados aos nossos produtos de investimento, podemos coletar informações sobre o seu perfil de investidor.
              </p>
              <p>Finalidade dos dados pessoais informados pelo titular:</p>
              <ul>
                <li>Prestação dos serviços e oferecimento dos produtos contratados</li>
                <li>Identificação, autenticação e verificação de requisitos para contratação dos serviços e produtos da Chainless</li>
                <li>Autenticação de transações financeiras</li>
                <li>Criação de perfil de investidor para adequação de serviços financeiros</li>
                <li>Atendimento de solicitações e dúvidas</li>
                <li>Contato por telefone, e-mail, SMS, WhatsApp, ou outros meios de comunicação</li>
                <li>Aprimoramento dos serviços prestados pela Chainless</li>
                <li>Auditoria para fins de operações societárias</li>
                <li>Marketing, prospecção, pesquisas de mercado, de opinião e promoção dos nossos produtos e serviços</li>
                <li>Prevenção e resolução de problemas tecnológicos ou de segurança</li>
                <li>Investigações e medidas de prevenção e combate a ilícitos, fraudes, crimes financeiros</li>
                <li>Exercício regular de direitos da Chainless</li>
                <li>Colaboração ou cumprimento de ordem judicial</li>
                <li>Cumprimento de obrigação legal ou regulatória (incluindo KYC, AML)</li>
                <li>Dados biométricos são usados para finalidades de prevenção a fraude e garantia da sua segurança</li>
              </ul>

              <h3>2.2 Dados pessoais que coletamos de terceiros</h3>
              <ul>
                <li>Dados cadastrais: nome completo, filiação, data de nascimento, CPF, número de telefone, endereço, entre outros.</li>
                <li>Dados sobre restrições financeiras: negativações, valores devidos, datas de vencimento, quantidades de consultas, entre outros</li>
                <li>Chaves Pix e informações a elas relacionadas</li>
                <li>Informações sobre histórico de crédito</li>
                <li>Score gerado por bureaus de crédito</li>
                <li>Informações de dívidas a vencer ou vencidas, coobrigações e garantias</li>
                <li>Informações referentes à sua participação em alguma lista de Pessoa Politicamente Exposta (PPE) ou lista de restrição (OFAC, CSNU e outras listas internacionais)</li>
                <li>Informações sobre histórico de crédito e fraude e pontuações geradas por agências de crédito e terceiros</li>
                <li>Informações constantes da base de dados do Sistema de Informações de Crédito (SCR), mediante consentimento</li>
              </ul>

              <h3>2.3 Dados de navegação e do dispositivo</h3>
              <ul>
                <li>Endereço IP do dispositivo móvel</li>
                <li>Interações realizadas e perfil de uso de sites, blogs e aplicativo da Chainless</li>
                <li>Dados técnicos: informações de URL, conexão de rede, provedor, e do dispositivo</li>
                <li>Cookies</li>
                <li>Atributos do dispositivo: ID, sistema operacional, navegador, modelo e informações vinculadas à interação de aplicativo</li>
              </ul>

              <h3>2.4 Dados pessoais originados do uso dos nossos produtos e serviços</h3>
              <ul>
                <li>Dados de contratação e uso de produtos e serviços da Chainless</li>
                <li>Dados de transações e movimentações de tokens na carteira da Chainless em redes blockchain públicas (ex: Polygon, Avalanche e Base)</li>
                <li>Dados de transações e movimentações financeiras na carteira da Chainless (depósito e saque por pix)</li>
                <li>Informações relacionadas ao convite para se tornar um Cliente da Chainless</li>
                <li>Histórico de atendimento ao cliente</li>
                <li>Testes para aprimoramento dos modelos, serviços e produtos da Chainless</li>
              </ul>

              <h3>2.5 Dados publicamente disponíveis</h3>
              <ul>
                <li>Dados de transações e movimentações de tokens na carteira da Chainless em redes blockchain públicas</li>
                <li>Informações sobre menções ou interações com a Chainless</li>
                <li>Depoimentos referentes à Chainless postados em perfis e páginas nas redes sociais</li>
              </ul>
            </section>

            {/* 3 — Compartilhamento */}
            <section>
              <h2>3. Compartilhamento de dados pessoais</h2>

              <h3>3.1 Outras empresas do grupo Chainless</h3>
              <p>Empresas relacionadas que fornecem o mesmo nível de proteção de dados descrito nesta política.</p>

              <h3>3.2 Parceiros de negócios, prestadores de serviço e outros terceiros</h3>
              <p>Compartilhamos dados com fornecedores que ajudam a operar nosso aplicativo, como serviços de hospedagem e análise.</p>

              <h3>3.3 Autoridades e órgãos reguladores</h3>
              <p>Para investigações e medidas de prevenção e combate a ilícitos, fraudes, crimes financeiros; exercício regular de direitos; cumprimento de ordem judicial; cumprimento de obrigação legal ou regulatória.</p>

              <h3>3.4 Mediante sua solicitação</h3>
              <p>Garantir a transparência na relação com você; enviar notificações por e-mails, push, WhatsApp e SMS.</p>
            </section>

            {/* 4 — Direitos */}
            <section>
              <h2>4. Seus direitos como titular de dados pessoais</h2>
              <ul>
                <li>Confirmação da existência de tratamento de dados pessoais</li>
                <li>Acesso aos dados pessoais</li>
                <li>Correção de dados pessoais incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados</li>
                <li>Eliminação dos dados pessoais tratados com o consentimento</li>
                <li>Informação das empresas com as quais a Chainless compartilhou ou das quais recebeu seus dados pessoais</li>
                <li>Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa</li>
                <li>Revogação do consentimento</li>
                <li>Decisões automatizadas</li>
                <li>Portabilidade e direito de petição</li>
              </ul>
              <p>
                Caso deseje exercer qualquer um desses direitos, entre em contato pelo e-mail <a href="mailto:support@chainless.finance">support@chainless.finance</a>.
              </p>
            </section>

            {/* 5 — Transferência internacional */}
            <section>
              <h2>5. Transferência internacional de dados pessoais</h2>
              <p>
                Alguns de seus dados pessoais, ou todos eles, poderão ser transferidos para o exterior, por exemplo quando são armazenados pela Chainless em servidores de computação em nuvem localizados fora do Brasil.
              </p>
            </section>

            {/* 6 — Registro de atividades */}
            <section>
              <h2>6. Registro de atividades</h2>
              <p>
                Podemos registrar as atividades que você realiza quando utiliza nosso aplicativo, site ou blogs, criando logs que conterão: o endereço IP, acesso e ações realizadas, data e hora de cada ação realizada e informações sobre o dispositivo utilizado.
              </p>
            </section>

            {/* 7 — Cookies */}
            <section>
              <h2>7. Cookies</h2>
              <p>
                São arquivos de internet que armazenam de forma temporária o que você está visitando na rede. Você pode, a qualquer momento, bloquear o uso dos cookies ativando uma configuração no seu navegador de internet.
              </p>
            </section>

            {/* 8 — Bases Legais */}
            <section>
              <h2>8. Bases Legais</h2>
              <p>
                A Chainless pode tratar seus dados pessoais de acordo com as bases legais previstas no artigo 7 da LGPD:
              </p>
              <ul>
                <li>Consentimento do titular</li>
                <li>Legítimo interesse da Chainless ou de terceiros</li>
                <li>Execução de contrato ou de procedimentos preliminares</li>
                <li>Exercício regular de direitos</li>
                <li>Proteção da vida ou da incolumidade física do titular ou de terceiro</li>
                <li>Cumprimento de obrigação legal ou regulatória</li>
                <li>Proteção do crédito</li>
              </ul>
              <p>
                Dados sensíveis (artigo 11 da LGPD):
              </p>
              <ul>
                <li>Consentimento específico e destacado do titular</li>
                <li>Cumprimento de obrigação legal ou regulatória</li>
                <li>Exercício regular de direitos</li>
                <li>Proteção da vida ou da incolumidade física</li>
                <li>Garantia da prevenção à fraude e à segurança do titular</li>
              </ul>

              <h3>8.1 Consentimento</h3>
              <p>Alguns dados usados para viabilizar operações de Finanças Descentralizadas e os dados provenientes da consulta ao Sistema de Informações de Crédito (SCR) somente serão tratados com o seu consentimento.</p>

              <h3>8.2 Legítimo Interesse</h3>
              <p>Alguns dados pessoais poderão ser tratados para atender aos interesses legítimos da Chainless ou de terceiros.</p>

              <h3>8.3 Retenção e exclusão dos seus dados pessoais</h3>
              <p>Podemos armazenar os seus dados pessoais por um período adicional de tempo para fins de auditoria, cumprimento de obrigações legais ou regulatórias. Por exemplo, para cumprir com obrigações impostas pelo Banco Central do Brasil (BCB), Comissão de Valores Mobiliários (CVM), BSM Supervisão de Mercados, ANBIMA e SUSEP.</p>
            </section>

            {/* 9 — Alterações */}
            <section>
              <h2>9. Alterações a este Aviso de Privacidade</h2>
              <p>
                A Chainless poderá alterar este Aviso de Privacidade a qualquer tempo. Toda vez que alguma condição relevante for alterada, essas alterações serão válidas, eficazes e vinculantes após a nova versão ser divulgada no nosso site, enviada por e-mail para você, ou enviada pelo aplicativo.
              </p>
            </section>

            {/* 10 — Medidas de segurança */}
            <section>
              <h2>10. Medidas de segurança</h2>
              <ul>
                <li>Múltiplo fator de autenticação para acesso às informações</li>
                <li>Segurança como código, a fim de viabilizar automações e respostas rápidas e eficientes para eventos de segurança</li>
                <li>Criptografia para dados em repouso, em trânsito e em uso</li>
                <li>Monitoramento contínuo do ambiente</li>
                <li>Análises e testes contínuos de segurança da informação em nossos sistemas, feitos por times internos</li>
              </ul>
            </section>

            {/* Contato */}
            <section>
              <h2>Fale Conosco</h2>
              <p>
                E-mail: <a href="mailto:support@chainless.finance">support@chainless.finance</a>
              </p>
            </section>

          </div>
        </FadeUp>
      </div>
    </main>
  );
}
