import { CheckList, CheckListItem } from '@/components/CheckList'
import { ExternalLink } from '@/components/ExternalLink'
import { ExpandableInformation } from '@/components/ExpandableInformation'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'
export function ProbationPage() {
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="estagio-definicao">
      <h2 id="estagio-definicao" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">O que é?</h2>
      <p>O servidor técnico-administrativo nomeado para cargo de provimento efetivo ficará sujeito ao estágio probatório por um período de <strong>36 (trinta e seis) meses</strong>, a contar da data de sua entrada em exercício, conforme legislação vigente.</p>
    </section>
    <section className="probation-section" aria-labelledby="estagio-requisitos">
      <h2 id="estagio-requisitos" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">Como funciona?</h2>
      <p>O servidor em estágio probatório deverá cumprir os seguintes requisitos:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem>Realizar as <ExternalLink className={linkStyle} href="https://progepe.ufersa.edu.br/gdh/">avaliações anuais de desempenho</ExternalLink>, obtendo nota superior a 3.0.</CheckListItem>
        <CheckListItem>Cumprir o Programa de Desenvolvimento Inicial (PDI) para Cargos de <ExternalLink className={linkStyle} href="https://www.escolavirtual.gov.br/programa/315">Nível Superior</ExternalLink> ou <ExternalLink className={linkStyle} href="https://www.escolavirtual.gov.br/programa/276">Nível Intermediário</ExternalLink> da Escola Nacional de Administração Pública (Enap).</CheckListItem>
        <CheckListItem>Participar do Programa de Recepção dos Novos Servidores <ExternalLink className={linkStyle} href="https://progepe.ufersa.edu.br/programa-de-recepcao-de-novos-servidores/">Módulo I</ExternalLink> e <ExpandableInformation title="Módulo II">
          <p>Para obtenção do módulo II, o servidor deverá cumprir (30h) de capacitação, presencial ou a distância, oferecida pela Ufersa ou por instituição externa como a <ExternalLink className={linkStyle} href="https://www.enap.gov.br/busca/?q=&tipo=cursos&ordenacao=relevantes">Enap</ExternalLink> ou a <ExternalLink className={linkStyle} href="https://www.ev.org.br/cursos">Fundação Bradesco</ExternalLink>.</p>
        </ExpandableInformation></CheckListItem>
      </CheckList>
    </section>
    <section className="probation-section" aria-labelledby="estagio-solicitacao">
      <h2 id="estagio-solicitacao" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">Como solicito minha estabilidade?</h2>
      <p>Até <strong>40 dias antes da finalização do estágio</strong>, o servidor deve protocolar processo administrativo, junto à DIAP ou à sua unidade de Gestão de Pessoas, contendo:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><ExternalLink className={linkStyle} href="https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2023/04/REQUERIMENTO-PADRAO-1.2.docx">Requerimento padrão</ExternalLink>.</CheckListItem>
        <CheckListItem><ExpandableInformation title="Resultado das avaliações de desempenho dos três anos do estágio probatório">
          <p>Os relatórios podem ser impressos via <ExternalLink className={linkStyle} href="https://sigrh.ufersa.edu.br/sigrh/public/home.jsf">Sigrh</ExternalLink> por meio do seguinte caminho:</p>
          <p className="mt-3 rounded-lg bg-muted p-4 font-medium">Portal do Servidor &gt; Relatórios GDH &gt; Relatório Individual de Desempenho</p>
        </ExpandableInformation></CheckListItem>
        <CheckListItem><ExpandableInformation title="Certificado de participação no programa de recepção dos novos servidores">
          <p>Protocolar processo administrativo junto a DIAP ou à sua unidade de Gestão de Pessoas, contendo:</p>
          <CheckList className="mt-3 space-y-2">
            <CheckListItem><ExternalLink className={linkStyle} href="https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2023/04/REQUERIMENTO-PADRAO-1.2.docx">Requerimento Padrão</ExternalLink></CheckListItem>
            <CheckListItem>Certificados referente ao Módulo I</CheckListItem>
            <CheckListItem>Certificados referente ao Módulo II</CheckListItem>
          </CheckList>
        </ExpandableInformation></CheckListItem>
        <CheckListItem><ExpandableInformation title="Declaração de tempo de efetivo exercício">
          <p>Encaminhar solicitação para o e-mail <a className={`${linkStyle} break-words`} href="mailto:rhangicos@ufersa.edu.br">rhangicos@ufersa.edu.br</a>.</p>
        </ExpandableInformation></CheckListItem>
      </CheckList>
    </section>
    <div className="border-t border-slate-200 pt-8"><p className="text-base leading-8 text-muted-foreground">Para mais informações, consulte a página oficial do Estágio Probatório:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href="https://progepe.ufersa.edu.br/estagio-probatorio-tecnico-administrativo/">Estágio probatório<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
