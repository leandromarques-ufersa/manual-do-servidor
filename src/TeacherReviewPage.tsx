import { ArrowUpRight } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { CheckList, CheckListItem } from '@/components/CheckList'
import { Button } from '@/components/ui/button'

const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'
const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'
const officialUrl = 'https://cppd.ufersa.edu.br/revisao-de-progressao-funcional/'

export function TeacherReviewPage() {
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="revisao-definicao">
      <h2 id="revisao-definicao" tabIndex={-1} className={headingStyle}>O que é?</h2>
      <p>É a reavaliação das progressões funcionais por desempenho da carreira docente, mediante processo administrativo analisado pela CPPD.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="revisao-funcionamento">
      <h2 id="revisao-funcionamento" tabIndex={-1} className={headingStyle}>Como funciona?</h2>
      <p>A revisão considera cada período de avaliação e seus comprovantes. Podem ser revisadas as progressões de toda a carreira, mas os efeitos financeiros ficam limitados aos <strong>cinco anos anteriores ao requerimento</strong>.</p>
      <p className="mt-6">Confira seu enquadramento nas orientações da CPPD e solicite a revisão o quanto antes.</p>
    </section>
    <section className="probation-section" aria-labelledby="revisao-solicitacao">
      <h2 id="revisao-solicitacao" tabIndex={-1} className={headingStyle}>Como solicito minha revisão?</h2>
      <p>Solicite seu histórico de progressões a <a className={linkStyle} href="mailto:cadastro.dap@ufersa.edu.br">cadastro.dap@ufersa.edu.br</a>. Depois, envie para <a className={linkStyle} href="mailto:cppd@ufersa.edu.br">cppd@ufersa.edu.br</a>:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><strong>Requerimento (PDF):</strong> reúna formulário padrão, histórico, portarias a revisar e comprovantes separados por período, numerados conforme a planilha. Acrescente documentos específicos quando aplicáveis. Assine digitalmente após reunir tudo; máximo de 24 MB.</CheckListItem>
        <CheckListItem><strong>Planilhas de pontuação:</strong> envie uma por período revisado, usando o modelo correspondente. Preencha no Microsoft Excel, sem modificar o layout, retirar a proteção ou converter em PDF.</CheckListItem>
      </CheckList>
      <p className="mt-6">Consulte os modelos e documentos completos na <ExternalLink className={linkStyle} href={officialUrl}>página da CPPD</ExternalLink>. Acompanhe a tramitação no SIPAC.</p>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para maiores informações consulte a página de Revisão de Progressão Funcional:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href={officialUrl}>Revisão de Progressão Funcional<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
