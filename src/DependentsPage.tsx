import { useState } from 'react'
import { ArrowUpRight, TableProperties, ChevronDown, Check, X } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { CheckList, CheckListItem } from '@/components/CheckList'
import { Button } from '@/components/ui/button'

const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'

export function DependentsPage() {
  const [tableExpanded, setTableExpanded] = useState(false)
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="dependentes-definicao">
      <h2 id="dependentes-definicao" tabIndex={-1} className={headingStyle}>O que é?</h2>
      <p>O Cadastro de dependente pode ser solicitado para fins de: Assistência à Saúde Suplementar; Auxílio Pré-Escolar; Auxílio Natalidade; Dedução de Imposto de Renda; Licença para acompanhamento de pessoa da família, conforme especificação do servidor.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="dependentes-funcionamento">
      <h2 id="dependentes-funcionamento" tabIndex={-1} className={headingStyle}>Como Funciona?</h2>
      <p>Os servidores poderão cadastrar dependentes nas condições de:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><strong>Cônjuge ou companheiro(a):</strong> Cônjuge (mediante certidão de casamento) ou companheiro(a) em união estável (comprovada por escritura pública ou outros meios legais), independentemente de dependência econômica para fins gerais.</CheckListItem>
        <CheckListItem><strong>Ex-cônjuge ou ex-companheiro(a):</strong> Pessoa separada judicialmente, divorciada ou que teve a união estável reconhecida e dissolvida judicialmente, desde que receba pensão alimentícia.</CheckListItem>
        <CheckListItem><strong>Filhos e enteados:</strong>
          <CheckList className="mt-3 space-y-4">
            <CheckListItem>Até completar 21 anos de idade.</CheckListItem>
            <CheckListItem>Até 24 anos de idade, se forem estudantes de curso regular reconhecido (para fins específicos como plano de saúde ou imposto de renda, dependendo da regulação).</CheckListItem>
            <CheckListItem>Sem limite de idade, caso sejam inválidos ou incapacitados física/mentalmente para o trabalho (exigindo laudo médico).</CheckListItem>
          </CheckList>
        </CheckListItem>
        <CheckListItem><strong>Menor sob guarda, tutela ou curatela:</strong> Criança ou adolescente sob a guarda judicial ou tutela do servidor, bem como o absolutamente incapaz sob curatela.</CheckListItem>
        <CheckListItem><strong>Pais, madrasta e padrasto:</strong> Podem constar no assentamento, embora os requisitos de dependência econômica possam variar conforme o tipo de benefício pretendido (como dedução de Imposto de Renda ou licença por doença em pessoa da família).</CheckListItem>
        <CheckListItem><strong>Avós e bisavós:</strong> Desde que comprovada a dependência econômica e observados limites de rendimentos (comuns para fins de imposto de renda).</CheckListItem>
      </CheckList>
    </section>
    <div className="mb-16 sm:mb-20">
      <button type="button" aria-expanded={tableExpanded} aria-controls="dependentes-tabela-painel" onClick={() => setTableExpanded(!tableExpanded)} className="group mx-auto flex cursor-pointer flex-col items-center rounded-lg px-4 py-3 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <span className="grid size-16 place-items-center rounded-full bg-background text-profile-icon"><TableProperties strokeWidth={1.25} className="size-11 motion-safe:transition-transform motion-safe:group-hover:scale-110" aria-hidden="true" /></span>
        <span className="mt-3 text-base font-semibold">Tabelas</span>
        <span className="mt-2 max-w-48 text-sm leading-6 text-muted-foreground">Dependentes × Benefícios</span>
        <ChevronDown className={`mt-3 size-4 text-profile-icon ${tableExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div id="dependentes-tabela-painel" hidden={!tableExpanded} className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-left">
        <h3 className="mb-3 text-xl font-semibold">Tabela de Dependentes × Benefícios</h3>
        <table className="w-full table-fixed border-collapse text-sm leading-5 sm:text-base sm:leading-6">
          <caption className="sr-only">Benefícios por público: servidor ativo, aposentado e contratado</caption>
          <thead className="bg-slate-200">
            <tr>
              <th scope="col" className="w-[46%] border border-slate-400 px-2 py-3 text-left font-semibold">Benefício/Público Alvo</th>
              <th scope="col" className="border border-slate-400 px-1 py-3 font-semibold [overflow-wrap:anywhere]">Servidor Ativo</th>
              <th scope="col" className="border border-slate-400 px-1 py-3 font-semibold [overflow-wrap:anywhere]">Aposentado</th>
              <th scope="col" className="border border-slate-400 px-1 py-3 font-semibold [overflow-wrap:anywhere]">Contratado<span className="mt-1 block text-xs font-normal">(Substituto, Visitante e Tec. Especializado)</span></th>
            </tr>
          </thead>
          <tbody>
            {([
              ['Acompanhamento de pessoa da família', [true, false, true]],
              ['Assistência à Saúde Suplementar', [true, true, false]],
              ['Auxílio Pré-Escolar', [true, false, true]],
              ['Auxílio Natalidade', [true, true, false]],
              ['Dedução de Imposto de Renda', [true, true, true]],
            ] as const).map(([benefit, eligibility]) => <tr key={benefit}>
              <th scope="row" className="border border-slate-400 bg-slate-100 px-2 py-3 text-left font-medium">{benefit}</th>
              {eligibility.map((eligible, index) => {
                const Icon = eligible ? Check : X
                return <td key={index} className="border border-slate-400 px-1 py-3 text-center">
                  <Icon className={`mx-auto size-5 ${eligible ? 'text-emerald-600' : 'text-red-600'}`} strokeWidth={3} aria-hidden="true" />
                  <span className="sr-only">{eligible ? 'Sim' : 'Não'}</span>
                </td>
              })}
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
    <section className="probation-section" aria-labelledby="dependentes-inclusao">
      <h2 id="dependentes-inclusao" tabIndex={-1} className={headingStyle}>Como posso incluir meus dependentes?</h2>
      <p>Para incluir dependentes em seu assentamento funcional, o servidor deve utilizar o aplicativo <ExternalLink className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary" href="https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/sou-gov.br/cadastrar-dependentes/cadastrar-dependente">Sougov</ExternalLink>.</p>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para maiores informações consulte a página oficial da inclusão de dependentes:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href="https://progepe.ufersa.edu.br/cadastro-de-dependentes/">Inclusão de Dependentes<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
