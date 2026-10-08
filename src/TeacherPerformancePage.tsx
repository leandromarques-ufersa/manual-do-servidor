import { ArrowUpRight } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { CheckList, CheckListItem } from '@/components/CheckList'
import { Button } from '@/components/ui/button'

const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'
const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'
const officialUrl = 'https://cppd.ufersa.edu.br/progressao-por-desempenho/'

export function TeacherPerformancePage() {
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="desempenho-definicao">
      <h2 id="desempenho-definicao" tabIndex={-1} className={headingStyle}>O que é?</h2>
      <p>É o avanço na carreira docente após <strong>24 meses no nível atual</strong> e aprovação na avaliação de desempenho.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="desempenho-funcionamento">
      <h2 id="desempenho-funcionamento" tabIndex={-1} className={headingStyle}>Como funciona?</h2>
      <p>A CPPD avalia as atividades comprovadas no período. A solicitação pode ser iniciada <strong>no 22º mês</strong>; recomenda-se não ultrapassar o 24º mês.</p>
      <p className="mt-6">Use a planilha correspondente à data de conclusão do seu período de avaliação. A pontuação exigida depende da jornada e das regras aplicáveis.</p>
    </section>
    <section className="probation-section" aria-labelledby="desempenho-solicitacao">
      <h2 id="desempenho-solicitacao" tabIndex={-1} className={headingStyle}>Como solicito minha progressão?</h2>
      <p>Envie dois arquivos para <a className={linkStyle} href="mailto:cppd@ufersa.edu.br">cppd@ufersa.edu.br</a>:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><strong>Requerimento (PDF):</strong> reúna o requerimento padrão, a portaria da última progressão e os comprovantes das atividades, numerados na ordem da planilha. Inclua documentos adicionais quando aplicáveis, como portarias de afastamento ou redistribuição. Assine digitalmente após reunir tudo; limite de 24 MB.</CheckListItem>
        <CheckListItem><strong>Planilha de pontuação (Excel):</strong> preencha no Microsoft Excel e envie separadamente, sem alterar o layout, retirar a proteção ou converter em PDF.</CheckListItem>
      </CheckList>
      <p className="mt-6">Os modelos e a relação completa de documentos estão na <ExternalLink className={linkStyle} href={officialUrl}>página da CPPD</ExternalLink>. Após a abertura, acompanhe o processo no SIPAC.</p>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para maiores informações consulte a página de Progressão por Desempenho Docente:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href={officialUrl}>Progressão por Desempenho Docente<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
