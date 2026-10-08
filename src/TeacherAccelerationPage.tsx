import { ArrowUpRight } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { CheckList, CheckListItem } from '@/components/CheckList'
import { Notice } from '@/components/Notice'
import { Button } from '@/components/ui/button'

const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'
const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'
const officialUrl = 'https://cppd.ufersa.edu.br/aceleracao-da-promocao-por-estagio-probatorio/'

export function TeacherAccelerationPage() {
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="docente-aceleracao-definicao">
      <h2 id="docente-aceleracao-definicao" tabIndex={-1} className={headingStyle}>O que é?</h2>
      <p>É a promoção vinculada à aprovação no estágio probatório e à obtenção de título de mestre ou doutor, aplicável aos docentes aprovados no estágio <strong>antes de 01/01/2025</strong>.</p>
      <div className="mt-8"><Notice variant="attention">
        <p>Segundo a CPPD, a aceleração deixou de existir após essa data. Para aprovação no estágio após 01/01/2025, a orientação é solicitar a próxima <a className={linkStyle} href="#docente/carreira/progressao">progressão por desempenho</a>.</p>
      </Notice></div>
    </section>
    <section className="probation-section text-right" aria-labelledby="docente-aceleracao-funcionamento">
      <h2 id="docente-aceleracao-funcionamento" tabIndex={-1} className={headingStyle}>Como funciona?</h2>
      <p>O docente solicita a análise à CPPD por processo administrativo, comprovando a aprovação no estágio e sua titulação. Títulos obtidos no exterior devem estar revalidados por instituição nacional competente.</p>
    </section>
    <section className="probation-section" aria-labelledby="docente-aceleracao-solicitacao">
      <h2 id="docente-aceleracao-solicitacao" tabIndex={-1} className={headingStyle}>Como solicito minha aceleração?</h2>
      <p>Reúna em um único PDF, chamado <strong>“Requerimento”</strong>:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem>Requerimento padrão preenchido;</CheckListItem>
        <CheckListItem>Portaria da primeira progressão;</CheckListItem>
        <CheckListItem>Portaria de aprovação no estágio probatório;</CheckListItem>
        <CheckListItem>Diploma de mestrado ou doutorado.</CheckListItem>
      </CheckList>
      <p className="mt-6">Assine o PDF após reunir os documentos e envie para <a className={linkStyle} href="mailto:cppd@ufersa.edu.br">cppd@ufersa.edu.br</a>. Os modelos e orientações estão na <ExternalLink className={linkStyle} href={officialUrl}>página da CPPD</ExternalLink>. Depois, acompanhe o processo no SIPAC.</p>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para maiores informações consulte a página de Aceleração da Promoção:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href={officialUrl}>Aceleração da Promoção<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
