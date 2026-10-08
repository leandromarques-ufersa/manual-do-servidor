import { CheckList, CheckListItem } from '@/components/CheckList'
import { ExternalLink } from '@/components/ExternalLink'
import { useState } from 'react'
import { ArrowUpRight, TableProperties, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'

export function AccelerationPage() {
  const [tableExpanded, setTableExpanded] = useState(false)
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="aceleracao-definicao">
      <h2 id="aceleracao-definicao" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">O que é?</h2>
      <p>É a mudança de padrão de vencimento mediante a apresentação de certificados de ações de capacitação compatíveis com o cargo ocupado, respeitando o interstício de <strong>cinco anos de efetivo exercício</strong> e cumprida a carga horária mínima. Desse modo, após cinco anos de efetivo exercício, além de sua progressão funcional por mérito, o servidor poderá realizar uma segunda progressão no mesmo ano, cumpridas as exigências desse dispositivo.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="aceleracao-funcionamento">
      <h2 id="aceleracao-funcionamento" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">Como funciona?</h2>
      <p>A aceleração da progressão por capacitação se faz garantida, a partir da apresentação de certificação em programa de capacitação, compatível com o cargo ocupado, respeitando o interstício de cinco anos de efetivo exercício e cumprindo-se a carga horária mínima de certificações.</p>
    </section>
    <div className="mb-16 sm:mb-20">
      <button type="button" aria-expanded={tableExpanded} aria-controls="aceleracao-tabela-painel" onClick={() => setTableExpanded(!tableExpanded)}
        className="group mx-auto flex cursor-pointer flex-col items-center rounded-lg px-4 py-3 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <span className="grid size-16 place-items-center rounded-full bg-background text-teal-700">
          <TableProperties strokeWidth={1.25} className="size-11 motion-safe:transition-transform motion-safe:group-hover:scale-110" aria-hidden="true" />
        </span>
        <span className="mt-3 text-base font-semibold">Tabelas</span>
        <span className="mt-2 max-w-48 text-sm leading-6 text-muted-foreground">Consulte a carga horária de capacitação por nível de classificação.</span>
        <ChevronDown className={`mt-3 size-4 text-teal-700 motion-safe:transition-transform ${tableExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div id="aceleracao-tabela-painel" hidden={!tableExpanded} className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-left text-base leading-7 sm:p-6">
        <h3 id="aceleracao-tabela" className="font-semibold text-primary">Tabela de carga horária</h3>
        <p id="aceleracao-tabela-descricao" className="mt-3">A carga horária de ações de capacitação para obter a Aceleração da Progressão por Capacitação é definida conforme o nível de classificação do cargo ocupado.</p>
        <div className="mt-4 overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" role="region" aria-labelledby="aceleracao-tabela" tabIndex={0}>
          <table className="w-full min-w-[440px] border-collapse text-center text-sm leading-6 sm:text-base" aria-labelledby="aceleracao-tabela" aria-describedby="aceleracao-tabela-descricao">
            <thead className="bg-slate-200">
              <tr>
                <th scope="col" className="border border-slate-400 px-3 py-2 font-semibold">Nível de Classificação</th>
                <th scope="col" className="border border-slate-400 px-3 py-2 font-semibold">Carga Horária de Capacitação</th>
                <th scope="col" className="border border-slate-400 px-3 py-2 font-semibold">Interstício</th>
              </tr>
            </thead>
            <tbody>
              {([['A', 40], ['B', 60], ['C', 90], ['D', 120], ['E', 150]] as const).map(([nivel, horas], index) => <tr key={nivel}>
                <th scope="row" className="border border-slate-400 px-3 py-2 font-normal">{nivel}</th>
                <td className="border border-slate-400 px-3 py-2">{horas} horas</td>
                {index === 0 && <td rowSpan={5} className="border border-slate-400 px-3 py-2 align-middle">5 anos de efetivo exercício</td>}
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <section className="probation-section" aria-labelledby="aceleracao-solicitacao">
      <h2 id="aceleracao-solicitacao" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">Como solicito minha Aceleração?</h2>
      <p>Até <strong>20 dias antes da data de aceleração</strong>, o servidor deve protocolar processo administrativo, junto à DIAP ou à sua unidade de Gestão de Pessoas, contendo:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><ExternalLink className={linkStyle} href="https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2025/05/REQUERIMENTO-ACELERACAO.docx">Requerimento</ExternalLink></CheckListItem>
        <CheckListItem>Cópia(s) do(s) certificado(s) do(s) curso(s) ou programas de capacitação, com o(s) respectivo(s) conteúdo(s) programático(s).</CheckListItem>
      </CheckList>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para mais informações, consulte a página oficial da Aceleração da Progressão:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href="https://progepe.ufersa.edu.br/aceleracao-tae/">Aceleração da Progressão<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
