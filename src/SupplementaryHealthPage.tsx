import { HealthTutorial } from '@/components/HealthTutorial'
import { CheckList, CheckListItem } from '@/components/CheckList'
import { useState } from 'react'
import { ExternalLink } from '@/components/ExternalLink'
import { ArrowUpRight, BadgeInfo, TableProperties, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'
const ages = ['00 a 18', '19 a 23', '24 a 28', '29 a 33', '34 a 38', '39 a 43', '44 a 48', '49 a 53', '54 a 58', '59 ou +']
const contributions = [
  ['até 3.000,99', ['287,32', '300,88', '304,95', '335,81', '345,84', '357,32', '408,14', '414,63', '421,08', '464,89']],
  ['de 3.001,00 a 6.000,99', ['221,94', '234,73', '238,54', '260,23', '269,71', '280,56', '317,49', '325,55', '327,59', '362,90']],
  ['de 6.001,00 a 9.000,99', ['181,77', '184,16', '187,76', '201,54', '210,49', '220,69', '237,52', '241,28', '245,05', '265,96']],
  ['de 9.001,00 a 12.000,99', ['160,72', '162,96', '166,29', '179,38', '187,76', '197,33', '212,37', '215,74', '219,09', '238,92']],
  ['de 12.001,00 a 15.000,99', ['149,25', '151,31', '154,41', '167,42', '175,23', '184,17', '199,10', '202,25', '205,40', '224,87']],
  ['de 15.001,00 a 18.000,99', ['137,76', '139,67', '142,54', '155,46', '162,72', '171,02', '185,83', '188,76', '191,71', '210,82']],
  ['de 18.001,00 a 21.000,99', ['126,29', '128,04', '130,66', '143,50', '150,21', '157,87', '172,55', '175,28', '178,01', '196,76']],
  ['Acima de 21.001,00', ['120,55', '122,22', '124,72', '131,54', '137,68', '144,71', '159,27', '161,80', '164,33', '182,71']],
] as const

export function SupplementaryHealthPage() {
  const [openPanel, setOpenPanel] = useState<'attention' | 'table' | null>(null)
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="assistencia-definicao">
      <h2 id="assistencia-definicao" tabIndex={-1} className={headingStyle}>O que é?</h2>
      <p>A assistência à Saúde Suplementar, popularmente conhecida como <i>Per Capita</i>, é um benefício de natureza indenizatória, concedido em pecúnia pela União, destinado ao custeio parcial do valor despendido pelo servidor, ativo ou inativo, e seus dependentes ou pensionistas com planos ou seguros privados de assistência à saúde, na forma estabelecida em regulamento.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="assistencia-funcionamento">
      <h2 id="assistencia-funcionamento" tabIndex={-1} className={headingStyle}>Como funciona?</h2>
      <p>O benefício pode ser requerido nas seguintes modalidades:</p>
      <h3 className="mt-8 mb-3 text-xl font-semibold">Convênio</h3>
      <p>Ao optar por um dos planos oferecidos pela GEAP ou CAURN, o valor da mensalidade, assim como os valores cobrados na utilização do plano serão descontados diretamente no contracheque do servidor. Além disso, o valor relativo à participação da União no custeio da assistência à saúde suplementar do servidor e demais beneficiários – per capita – será repassado diretamente para a GEAP ou CAURN, e não para o servidor, como nos outros planos.</p>
      <h3 className="mt-8 mb-3 text-xl font-semibold">Ressarcimento</h3>
      <p>O servidor pode optar pela contratação de plano de saúde particular, requerendo o ressarcimento parcial de seu plano através do aplicativo <ExternalLink className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary" href="https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/sou-gov.br/saude-suplementar/como-solicitar-assistencia-a-saude-suplementar-teste">SouGov</ExternalLink>.</p>
    </section>
    <div className="mb-16 sm:mb-20">
      <div className="relative mx-auto grid max-w-lg grid-cols-2 gap-8 text-center before:absolute before:top-10 before:left-1/4 before:right-1/4 before:h-px before:bg-slate-200">
        {([
          { id: 'attention', title: 'Dependentes', description: 'Confira as condições para incluir seus dependentes.', icon: BadgeInfo },
          { id: 'table', title: 'Tabelas', description: 'Consulte os valores de contribuição por renda e idade.', icon: TableProperties },
        ] as const).map(({ id, title, description, icon: Icon }) => <button
          key={id} type="button" id={`assistencia-trigger-${id}`} aria-expanded={openPanel === id} aria-controls={`assistencia-panel-${id}`}
          onClick={() => setOpenPanel(openPanel === id ? null : id)}
          className="group relative flex cursor-pointer flex-col items-center rounded-lg px-2 py-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          <span className={`grid size-16 place-items-center rounded-full bg-background ${openPanel === id ? 'text-profile-strong' : 'text-profile-icon'}`}>
            <Icon strokeWidth={1.25} className="size-11 motion-safe:transition-transform motion-safe:group-hover:scale-110" aria-hidden="true" />
          </span>
          <span className="mt-3 text-base font-semibold">{title}</span>
          <span className="mt-2 max-w-48 text-sm leading-6 text-muted-foreground">{description}</span>
          <ChevronDown className={`mt-3 size-4 text-profile-icon motion-safe:transition-transform ${openPanel === id ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>)}
      </div>
      <div id="assistencia-panel-attention" role="region" aria-labelledby="assistencia-trigger-attention" hidden={openPanel !== 'attention'} className="mt-6 text-left">
        <p>Somente poderão ser incluídos no plano, dependentes devidamente cadastrados no assentamento funcional digital do servidor. Nas condições de:</p>
        <CheckList className="mt-5 space-y-4">
          <CheckListItem>cônjuge ou companheiro em união estável;</CheckListItem>
          <CheckListItem>pessoa separada, divorciada ou que teve a união estável reconhecida e dissolvida judicial ou extrajudicialmente, com percepção de pensão alimentícia;</CheckListItem>
          <CheckListItem>filho de qualquer condição que atenda a um dos seguintes requisitos:
            <CheckList className="mt-3 space-y-2">
              <CheckListItem>seja menor de 21 (vinte e um) anos;</CheckListItem>
              <CheckListItem>seja inválido; ou</CheckListItem>
              <CheckListItem>com deficiência; e</CheckListItem>
            </CheckList>
          </CheckListItem>
          <CheckListItem>filho de 21 (vinte e um) a 24 (vinte e quatro) anos incompletos, dependente economicamente do titular e estudante de curso regular reconhecido pelo Ministério da Educação;</CheckListItem>
        </CheckList>
      </div>
      <div id="assistencia-panel-table" role="region" aria-labelledby="assistencia-trigger-table" hidden={openPanel !== 'table'} className="mt-6 rounded-xl border border-slate-200 bg-white p-2 text-left sm:p-6">
      <p id="assistencia-tabela-ajuda" className="mb-3 text-sm leading-6 text-muted-foreground">Valores em reais, por renda e faixa etária.</p>
      <div role="region" aria-label="Tabela de contribuição de assistência à saúde" aria-describedby="assistencia-tabela-ajuda" className="rounded-lg border border-slate-300">
        <table className="w-full table-fixed border-collapse bg-white text-[8px] leading-tight tabular-nums [overflow-wrap:anywhere] sm:text-xs sm:leading-5 lg:text-sm" aria-label="Tabela de contribuição de assistência à saúde">
          <thead className="bg-slate-100">
            <tr>
              <th scope="col" className="w-[18%] border border-slate-300 px-0.5 py-2 sm:px-1 sm:py-3 text-left font-semibold">Renda (reais / idade)</th>
              {ages.map((age, index) => <th scope="col" key={age} className="border border-slate-300 px-0.5 py-2 sm:px-1 sm:py-3 text-center font-semibold">Faixa {index + 1}<span className="block font-normal">{age}</span></th>)}
            </tr>
          </thead>
          <tbody>
            {contributions.map(([income, values]) => <tr key={income} className="even:bg-slate-50">
              <th scope="row" className="border border-slate-300 px-0.5 py-2 sm:px-1 sm:py-3 text-left font-medium">{income}</th>
              {values.map((value, index) => <td key={index} className="border border-slate-300 px-0.5 py-2 sm:px-1 sm:py-3 text-center">{value}</td>)}
            </tr>)}
          </tbody>
        </table>
      </div>
      </div>
    </div>
    <section className="probation-section" aria-labelledby="assistencia-solicitacao">
      <h2 id="assistencia-solicitacao" tabIndex={-1} className={headingStyle}>Como solicito minha assistência à saúde suplementar?</h2>
      <p>Solicite sua assistência à saúde suplementar pelo SouGov conforme o passo a passo:</p>
      <HealthTutorial kind="request" />
    </section>
    <section className="probation-section ml-auto text-right" aria-labelledby="assistencia-atualizacao">
      <h2 id="assistencia-atualizacao" tabIndex={-1} className={headingStyle}>Como atualizo minha assistência à saúde suplementar?</h2>
      <p>Atualize os dados do benefício no SouGov conforme o passo a passo:</p>
      <HealthTutorial kind="update" />
    </section>
    <section className="probation-section" aria-labelledby="assistencia-cancelamento">
      <h2 id="assistencia-cancelamento" tabIndex={-1} className={headingStyle}>Como cancelo minha assistência à saúde suplementar?</h2>
      <p>Solicite o encerramento do benefício no SouGov conforme o passo a passo:</p>
      <HealthTutorial kind="cancel" />
    </section>
    <section className="probation-section" aria-labelledby="assistencia-comprovacao">
      <h2 id="assistencia-comprovacao" tabIndex={-1} className={headingStyle}>Como comprovo minha assistência à saúde suplementar?</h2>
      <p>Para os servidores que optarem pela modalidade ressarcimento (a modalidade convênio é dispensada de comprovação), é exigida comprovação anual de gastos, por meio da apresentação de declaração da operadora ou administradora de benefícios, discriminando valor mensal por beneficiário, bem como atestando sua quitação.</p>
      <p className="mt-6">Essa comprovação é de responsabilidade do Setor de Pagamentos da Progepe, que anualmente envia comunicado aos servidores, através de email institucional, indicando as instruções para apresentação das declarações de quitação.</p>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para maiores informações consulte a página oficial da Assistência à Saúde Suplementar:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href="https://progepe.ufersa.edu.br/assistencia-suplementar-a-saude/">Assistência à Saúde Suplementar<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
