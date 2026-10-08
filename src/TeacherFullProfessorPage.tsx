import { ArrowUpRight } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { CheckList, CheckListItem } from '@/components/CheckList'
import { Button } from '@/components/ui/button'

const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'
const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'
const officialUrl = 'https://cppd.ufersa.edu.br/promocao-para-titular/'

export function TeacherFullProfessorPage() {
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="titular-definicao">
      <h2 id="titular-definicao" tabIndex={-1} className={headingStyle}>O que é?</h2>
      <p>É a passagem de Professor Associado, nível 4, para Professor Titular. Exige <strong>doutorado, 24 meses no nível</strong>, aprovação na avaliação de desempenho e na defesa de memorial ou tese inédita.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="titular-funcionamento">
      <h2 id="titular-funcionamento" tabIndex={-1} className={headingStyle}>Como funciona?</h2>
      <p>A CPPD analisa a documentação, e uma Comissão Especial de Avaliação (CEA) avalia a defesa.</p>
      <p className="mt-6">Abra o processo <strong>no 22º mês</strong>. Caso não cumpra esse prazo, envie a documentação completa com pelo menos <strong>30 dias de antecedência da defesa</strong>.</p>
    </section>
    <section className="probation-section" aria-labelledby="titular-solicitacao">
      <h2 id="titular-solicitacao" tabIndex={-1} className={headingStyle}>Como solicito minha promoção?</h2>
      <p>Envie quatro arquivos para <a className={linkStyle} href="mailto:cppd@ufersa.edu.br">cppd@ufersa.edu.br</a>:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><strong>Requerimento (PDF):</strong> formulário padrão, portaria da última progressão e comprovantes, ordenados conforme a planilha. Inclua documentos específicos quando aplicáveis. Assine após reunir tudo; máximo de 24 MB.</CheckListItem>
        <CheckListItem><strong>Planilha de pontuação:</strong> use o modelo correspondente ao período avaliado, preenchido no Microsoft Excel, sem alterar a proteção ou converter em PDF.</CheckListItem>
        <CheckListItem><strong>Memorial com Currículo Lattes ou tese inédita (PDF):</strong> siga a estrutura indicada pela CPPD.</CheckListItem>
        <CheckListItem><strong>Lista CEA (PDF):</strong> assinada, com indicação dos membros, presidente, contatos e data e hora da defesa, respeitando os critérios da comissão.</CheckListItem>
      </CheckList>
      <p className="mt-6">Consulte os modelos na <ExternalLink className={linkStyle} href={officialUrl}>página oficial</ExternalLink> e acompanhe o processo no SIPAC.</p>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para maiores informações consulte a página de Promoção para Titular:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href={officialUrl}>Promoção para Titular<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
