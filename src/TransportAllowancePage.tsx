import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Calculator, ChevronDown } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { Notice } from '@/components/Notice'
import { TransportTutorial } from '@/components/TransportTutorial'
import { Button } from '@/components/ui/button'
import { calculateTransportAllowance } from '@/lib/transportAllowance'

const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'
const linkStyle = 'text-profile-accent underline decoration-profile-accent/40 underline-offset-4 hover:decoration-profile-accent'
const inputStyle = 'mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profile-accent'
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function TransportAllowancePage() {
  const [expanded, setExpanded] = useState(false)
  const [result, setResult] = useState<ReturnType<typeof calculateTransportAllowance> | null>(null)
  const [error, setError] = useState('')

  function simulate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    try {
      setResult(calculateTransportAllowance(Number(data.get('salary')), Number(data.get('dailyCost')), Number(data.get('days'))))
      setError('')
    } catch {
      setResult(null)
      setError('Confira os valores: vencimento maior que zero, custo não negativo e de 0 a 31 dias inteiros.')
    }
  }

  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="transporte-definicao">
      <h2 id="transporte-definicao" tabIndex={-1} className={headingStyle}>O que é?</h2>
      <p>É um benefício indenizatório pago em dinheiro para custear parte das despesas com transporte coletivo entre a residência e o trabalho. Atende TAEs, docentes e servidores com contratos temporários.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="transporte-funcionamento">
      <h2 id="transporte-funcionamento" tabIndex={-1} className={headingStyle}>Como funciona?</h2>
      <p>O valor considera o custo das passagens e os dias de deslocamento efetivo, com participação do servidor calculada sobre 6% de seu vencimento básico.</p>
      <div className="mt-6"><Notice variant="attention">
        <p>Somente serão aprovados pedidos de auxílio transporte para trajetos de ida e volta realizados NO MESMO DIA.</p>
      </Notice></div>
    </section>
    <div className="mb-16 sm:mb-20">
      <button type="button" id="transporte-simulador-botao" aria-expanded={expanded} aria-controls="transporte-simulador" onClick={() => setExpanded(!expanded)} className="group mx-auto flex cursor-pointer flex-col items-center rounded-lg px-4 py-3 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-profile-accent">
        <span className="grid size-16 place-items-center rounded-full bg-background text-profile-icon"><Calculator strokeWidth={1.25} className="size-11 motion-safe:transition-transform motion-safe:group-hover:scale-110" aria-hidden="true" /></span>
        <span className="mt-3 text-base font-semibold">Simular auxílio transporte</span>
        <span className="mt-2 max-w-64 text-sm leading-6 text-muted-foreground">Informe seu vencimento, o custo diário e os dias de deslocamento.</span>
        <ChevronDown className={`mt-3 size-4 text-profile-icon motion-safe:transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div id="transporte-simulador" role="region" aria-labelledby="transporte-simulador-botao" hidden={!expanded} className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-left text-base leading-7 sm:p-6">
        <p id="transporte-simulador-ajuda" className="text-sm text-muted-foreground">Use o vencimento básico mensal, sem gratificações, e a soma das passagens de ida e volta por dia. O resultado é uma estimativa; a concessão depende da análise da Gestão de Pessoas.</p>
        <form onSubmit={simulate} onChange={() => { setResult(null); setError('') }} aria-describedby="transporte-simulador-ajuda" className="mt-6 space-y-5">
          <div className="grid gap-5 sm:grid-cols-3">
            <label className="text-sm font-medium" htmlFor="transporte-vencimento">Vencimento básico (R$)<input id="transporte-vencimento" name="salary" type="number" inputMode="decimal" min="0.01" step="0.01" required className={inputStyle} /></label>
            <label className="text-sm font-medium" htmlFor="transporte-custo">Custo diário de ida e volta (R$)<input id="transporte-custo" name="dailyCost" type="number" inputMode="decimal" min="0" step="0.01" required className={inputStyle} /></label>
            <label className="text-sm font-medium" htmlFor="transporte-dias">Dias de deslocamento no mês<input id="transporte-dias" name="days" type="number" inputMode="numeric" min="0" max="31" step="1" required className={inputStyle} /></label>
          </div>
          <Button type="submit" className="bg-profile-accent text-white hover:bg-profile-strong focus-visible:ring-profile-accent/50">Calcular estimativa</Button>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <div role="status" aria-live="polite" aria-atomic="true">
            {result && <div className="rounded-lg bg-profile-soft p-5">
              <dl className="space-y-2">
                <div className="flex flex-wrap justify-between gap-x-4"><dt>Custo mensal estimado</dt><dd>{currency.format(result.monthlyCost)}</dd></div>
                <div className="flex flex-wrap justify-between gap-x-4"><dt>Participação calculada do servidor (6%)</dt><dd>{currency.format(result.contribution)}</dd></div>
                <div className="flex flex-wrap justify-between gap-x-4 font-semibold text-profile-strong"><dt>Auxílio estimado no mês</dt><dd>{currency.format(result.allowance)}</dd></div>
              </dl>
              {result.allowance === 0 && <p className="mt-3 text-sm">Com os valores informados, não há auxílio a receber.</p>}
            </div>}
          </div>
        </form>
        <p className="mt-4 text-sm text-muted-foreground">Cálculo: custo diário × dias − (vencimento básico ÷ 30 × dias × 6%), com resultado mínimo de R$ 0,00. Consulte a <ExternalLink className={linkStyle} href="https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2025/07/SIMULADOR_AUX-TRANSPORTE.xlsx">planilha de referência da PROGEPE</ExternalLink>.</p>
      </div>
    </div>
    <section className="probation-section" aria-labelledby="transporte-solicitacao">
      <h2 id="transporte-solicitacao" tabIndex={-1} className={headingStyle}>Como solicitar meu auxílio transporte?</h2>
      <p>Solicitações de auxílio transporte devem ser realizadas através do Sougov conforme passo-a-passo:</p>
      <TransportTutorial />
    </section>
    <section className="probation-section ml-auto text-right" aria-labelledby="transporte-atualizacao">
      <h2 id="transporte-atualizacao" tabIndex={-1} className={headingStyle}>Como atualizar meu auxílio transporte?</h2>
      <p>Atualizações do auxílio transporte devem ser realizadas através do Sougov conforme passo-a-passo:</p>
      <TransportTutorial kind="update" />
    </section>
    <section className="probation-section" aria-labelledby="transporte-cancelamento">
      <h2 id="transporte-cancelamento" tabIndex={-1} className={headingStyle}>Como cancelar meu auxílio transporte?</h2>
      <p>Solicitações de cancelamento do auxílio transporte devem ser realizadas através do Sougov conforme passo-a-passo:</p>
      <TransportTutorial kind="cancel" />
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para maiores informações consulte a página do Auxílio Transporte:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href="https://progepe.ufersa.edu.br/como-solicitar/">Auxílio Transporte<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
