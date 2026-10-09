import { ArrowUpRight } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { CheckList, CheckListItem } from '@/components/CheckList'
import { Button } from '@/components/ui/button'

const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'
const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'

export function TeacherProbationPage() {
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="docente-estagio-definicao">
      <h2 id="docente-estagio-definicao" tabIndex={-1} className={headingStyle}>O que é?</h2>
      <p>Entende-se por estágio probatório o período de efetivo exercício, durante o qual são apurados os requisitos necessários à confirmação do servidor no cargo para o qual foi nomeado, notadamente sua aptidão e capacidade para o desempenho do cargo de docente do Ensino Superior.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="docente-estagio-funcionamento">
      <h2 id="docente-estagio-funcionamento" tabIndex={-1} className={headingStyle}>Como funciona?</h2>
      <p>O servidor docente da UFERSA, nomeado para o cargo de provimento efetivo, ficará sujeito ao estágio probatório por um período de <strong>36 (trinta e seis) meses</strong>, a contar da entrada em exercício, conforme legislação vigente.</p>
      <p className="mt-6">A cada 12 meses de efetivo exercício, o servidor deve protocolar pedido de análise de seu estágio probatório tanto junto à Comissão de Avaliação Docente (CAD) de sua unidade, quanto à Comissão Permanente de Pessoal Docente (CPPD).</p>
    </section>
    <section className="probation-section" aria-labelledby="docente-estagio-solicitacao">
      <h2 id="docente-estagio-solicitacao" tabIndex={-1} className={headingStyle}>Como solicito minha estabilidade?</h2>
      <h3 className="mb-4 text-xl font-semibold">Solicitação junto à CAD</h3>
      <p>Ao completar <strong>8 meses de efetivo exercício</strong>, o docente deve protocolar processo administrativo, junto à DIAP ou à sua unidade de Gestão de Pessoas, requerendo análise de seu estágio probatório, contendo:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><ExternalLink className={linkStyle} href="https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2023/04/REQUERIMENTO-PADRAO-1.2.docx">Requerimento Padrão</ExternalLink></CheckListItem>
        <CheckListItem><ExternalLink className={linkStyle} href="https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2018/09/Formul%C3%A1rio-para-Solicita%C3%A7%C3%A3o-de-Abertura-de-Processo-de-Avaliacao-de-Estagio-Probatorio.docx">Formulário para Solicitação de Abertura de Processo de Avaliação de Estágio Probatório</ExternalLink></CheckListItem>
        <CheckListItem>Avaliação do docente pelo discente referente aos semestres 201x.x e 201x.x</CheckListItem>
      </CheckList>
      <p className="mt-8">A partir daí, nos próximos <strong>12º, 24º e 36º meses</strong>, o docente deve encaminhar para a CAD os documentos realativos a cada interstício:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><ExternalLink className={linkStyle} href="https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2018/09/FORMUL%C3%81RIO-PARA-SOLICITA%C3%87%C3%83O-DE-JUNTADA-DE-DOCUMENTOS-EM-PROCESSO-DE-AVALIA%C3%87%C3%83O-DE-EST%C3%81GIO-PROBAT%C3%93RIO-DOCENTE.docx">Formulário para Solicitação de Juntada de Documentos</ExternalLink></CheckListItem>
        <CheckListItem>Avaliação do docente pelo discente referente aos semestres 201x.x e 201x.x</CheckListItem>
        <CheckListItem>Demais documentos cabíveis conforme legislação vigente.</CheckListItem>
      </CheckList>
      <h3 className="mt-10 mb-4 text-xl font-semibold">Solicitação junto à CPPD</h3>
      <p>A cada <strong>12 meses de efetivo exercício</strong>, o docente deve encaminhar à CPPD (<a className={linkStyle} href="mailto:cppd@ufersa.edu.br">cppd@ufersa.edu.br</a>), pedido de avaliação de seu estágio probatório, contendo:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><ExternalLink className={linkStyle} href="https://cppd.ufersa.edu.br/avaliacao-durante-estagio-probatorio/">Consulte a documentação Necessária</ExternalLink></CheckListItem>
      </CheckList>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para maiores informações consulte a página do Estágio Probatório Docente:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href="https://progepe.ufersa.edu.br/estagio-probatorio-docentes/">Estágio Probatório Docente<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
