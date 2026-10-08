import { CheckList, CheckListItem } from '@/components/CheckList'
import { useState } from 'react'
import { ArrowUpRight, TableProperties, ChevronDown } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { ExpandableInformation } from '@/components/ExpandableInformation'
import { Button } from '@/components/ui/button'

const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'
const qualificationLevels = [
  ['Ensino fundamental completo', '10%'],
  ['Ensino médio completo', '15%'],
  ['Ensino médio profissionalizante ou ensino médio com curso técnico completo', '20%'],
  ['Curso de graduação completo', '25%'],
  ['Especialização, com carga horária igual ou superior a 360h', '30%'],
  ['Mestrado', '52%'],
  ['Doutorado', '75%'],
] as const

export function QualificationPage() {
  const [tableExpanded, setTableExpanded] = useState(false)
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="qualificacao-definicao">
      <h2 id="qualificacao-definicao" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">O que é?</h2>
      <p>É o benefício concedido aos servidores que possuírem certificado, diploma ou titulação que exceda a exigência de escolaridade mínima para ingresso no cargo do qual seja titular, independentemente do nível de classificação do cargo ocupado.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="qualificacao-funcionamento">
      <h2 id="qualificacao-funcionamento" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">Como funciona?</h2>
      <p>O servidor que concluir curso de formação formalmente reconhecido pelo MEC, pode solicitar Incentivo à Qualificação, desde que o nível dessa formação exceda a exigência de escolaridade mínima para ingresso em seu cargo atual.</p>
    </section>
    <div className="mb-16 sm:mb-20">
      <button type="button" aria-expanded={tableExpanded} aria-controls="qualificacao-tabela-painel" onClick={() => setTableExpanded(!tableExpanded)}
        className="group mx-auto mt-8 flex cursor-pointer flex-col items-center rounded-lg px-4 py-3 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <span className="grid size-16 place-items-center rounded-full bg-background text-teal-700">
          <TableProperties strokeWidth={1.25} className="size-11 motion-safe:transition-transform motion-safe:group-hover:scale-110" aria-hidden="true" />
        </span>
        <span className="mt-3 text-base font-semibold">Tabelas</span>
        <span className="mt-2 max-w-48 text-sm leading-6 text-muted-foreground">Consulte os percentuais de incentivo por nível de escolaridade.</span>
        <ChevronDown className={`mt-3 size-4 text-teal-700 motion-safe:transition-transform ${tableExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div id="qualificacao-tabela-painel" hidden={!tableExpanded} className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-left text-base leading-7 sm:p-6">
        <h3 id="qualificacao-tabela" className="font-semibold text-primary">Tabela de percentuais</h3>
        <div className="mt-4 overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" role="region" aria-labelledby="qualificacao-tabela" tabIndex={0}>
          <table className="w-full min-w-[440px] border-collapse text-sm leading-6 sm:text-base" aria-labelledby="qualificacao-tabela">
            <thead className="bg-slate-200 text-center">
              <tr>
                <th scope="col" className="border border-slate-400 px-3 py-2 font-semibold">Nível de escolaridade formal superior ao previsto para o exercício do cargo (curso reconhecido pelo Ministério da Educação)</th>
                <th scope="col" className="border border-slate-400 px-3 py-2 font-semibold">Percentual de Incentivo à Qualificação</th>
              </tr>
            </thead>
            <tbody>
              {qualificationLevels.map(([level, percentage]) => <tr key={level}>
                <th scope="row" className="border border-slate-400 px-3 py-2 text-left font-normal">{level}</th>
                <td className="border border-slate-400 px-3 py-2 text-center">{percentage}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <section className="probation-section" aria-labelledby="qualificacao-solicitacao">
      <h2 id="qualificacao-solicitacao" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">Como solicito meu Incentivo?</h2>
      <p>Após conclusão do curso, o servidor deve protocolar processo administrativo, junto à DIAP ou à sua unidade de Gestão de Pessoas, contendo:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><ExternalLink className={linkStyle} href="https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2025/06/Requerimento-IQ.pdf">Requerimento</ExternalLink></CheckListItem>
        <CheckListItem><ExpandableInformation title="Diploma">
          <p>Caso o diploma ainda não tenha sido expedido, o servidor poderá apresentar certidão expedida pela instituição de ensino, que declare expressamente a conclusão efetiva de curso reconhecido pelo MEC, a aprovação do interessado e a inexistência de qualquer pendência para a aquisição da titulação. Após expedição do diploma este deverá ser encaminhado para sua unidade de Gestão de Pessoas, para ser anexado ao processo administrativo.</p>
        </ExpandableInformation></CheckListItem>
        <CheckListItem>Histórico Escolar</CheckListItem>
      </CheckList>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para mais informações, consulte a página oficial do Incentivo à Qualificação:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href="https://progepe.ufersa.edu.br/iq/">Incentivo à Qualificação<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
