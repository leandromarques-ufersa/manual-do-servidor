import { ArrowUpRight } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { ExpandableInformation } from '@/components/ExpandableInformation'
import { CheckList, CheckListItem } from '@/components/CheckList'
import { Button } from '@/components/ui/button'

const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'
const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'
const officialUrl = 'https://cppd.ufersa.edu.br/retribuicao-por-titulacao/'

export function TeacherQualificationPage() {
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="rt-definicao">
      <h2 id="rt-definicao" tabIndex={-1} className={headingStyle}>O que é?</h2>
      <p>A Retribuição por Titulação (RT) é uma parcela da remuneração docente vinculada à especialização, ao mestrado ou ao doutorado.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="rt-funcionamento">
      <h2 id="rt-funcionamento" tabIndex={-1} className={headingStyle}>Como funciona?</h2>
      <p>Solicite ao ingressar na carreira ou ao obter titulação superior. Os efeitos financeiros começam com a abertura do processo <strong>devidamente instruído</strong>, não com a defesa ou emissão do diploma.</p>
      <p className="mt-6">Títulos estrangeiros devem estar revalidados por instituição nacional competente.</p>
    </section>
    <section className="probation-section" aria-labelledby="rt-solicitacao">
      <h2 id="rt-solicitacao" tabIndex={-1} className={headingStyle}>Como solicito minha retribuição?</h2>
      <p>Reúna em um PDF chamado <strong>“Requerimento”</strong>:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem>Requerimento padrão preenchido;</CheckListItem>
        <CheckListItem>Portaria da última progressão ou Termo de Exercício, se ainda não houve progressão;</CheckListItem>
        <CheckListItem><ExpandableInformation title="Diploma da titulação obtida">
          <p>Sem diploma, apresente:</p>
          <CheckList className="mt-3 space-y-3">
            <CheckListItem>Ata da defesa;</CheckListItem>
            <CheckListItem>Certidão ou declaração de conclusão de curso reconhecido pelo MEC, aprovação e ausência de pendências;</CheckListItem>
            <CheckListItem>Comprovante de início da confecção do diploma, dispensável se essa informação já constar na declaração.</CheckListItem>
          </CheckList>
        </ExpandableInformation></CheckListItem>
      </CheckList>
      <p className="mt-6">Assine após reunir os documentos e envie para <a className={linkStyle} href="mailto:cppd@ufersa.edu.br">cppd@ufersa.edu.br</a>. Consulte os modelos na <ExternalLink className={linkStyle} href={officialUrl}>página da CPPD</ExternalLink> e acompanhe o processo no SIPAC.</p>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para maiores informações consulte a página de Retribuição por Titulação:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href={officialUrl}>Retribuição por Titulação<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
