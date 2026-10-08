import { CheckList, CheckListItem } from '@/components/CheckList'
import { Notice } from '@/components/Notice'
import { ArrowUpRight } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { Button } from '@/components/ui/button'

const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'

export function AttendanceDeclarationPage() {
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="comparecimento-definicao">
      <h2 id="comparecimento-definicao" tabIndex={-1} className={headingStyle}>O que é?</h2>
      <p>É um documento preenchido pelo médico ou funcionário administrativo, a pedido do paciente, que justifica as horas não trabalhadas por conta de um atendimento ou exame. A declaração não implica na necessidade de afastamento do trabalho.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="comparecimento-funcionamento">
      <h2 id="comparecimento-funcionamento" tabIndex={-1} className={headingStyle}>Como funciona?</h2>
      <p>O servidor deverá apresentar à chefia imediata, para abono do turno, nas seguintes condições:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem>Exame ou procedimento médico seja realizado na mesma cidade: será abonada a fração do dia (manhã ou tarde) correspondente, sendo que a outra fração será trabalhada normalmente.</CheckListItem>
        <CheckListItem>Exame ou procedimento médico seja realizado em cidade diferente: será abonada a fração do dia (manhã ou tarde) correspondente, sendo que a outra fração do dia (manhã ou tarde) deverá ser compensada mediante acerto com a chefia imediata.</CheckListItem>
      </CheckList>
    </section>
    <section className="probation-section" aria-labelledby="comparecimento-limites">
      <h2 id="comparecimento-limites" tabIndex={-1} className={headingStyle}>Quantas horas posso utilizar por ano?</h2>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><strong>54 (cinquenta e quatro) horas no ano</strong>, para os servidores públicos submetidos à jornada de trabalho de 8 (oito) horas diárias;</CheckListItem>
        <CheckListItem><strong>43 (quarenta e três) horas no ano</strong>, para os servidores públicos submetidos à jornada de trabalho de 6 (seis) horas diárias; e</CheckListItem>
        <CheckListItem><strong>32 (trinta e duas) horas no ano</strong>, para os servidores públicos submetidos à jornada de trabalho de 4 (quatro) horas diárias.</CheckListItem>
      </CheckList>
      <div className="mt-8"><Notice variant="observation">
        <CheckList className="space-y-6">
        <CheckListItem>Servidores que residam em cidades fora do seu local de trabalho, ficam liberados para justificar ambos os turnos de trabalho utilizando a declaração de comparecimento.</CheckListItem>
        <CheckListItem>A chefia imediata do servidor, desde que devidamente atestado pelo profissional de saúde competente, poderá permitir ultrapassar o limite anual de horas, em situações concretas de servidores e/ou dependentes destes, que constem em seus assentos funcionais, e que estão submetidos a tratamento de saúde continuado ou prolongado, a fim de não comprometer o referido tratamento.</CheckListItem>
        </CheckList>
      </Notice></div>
    </section>
    <section className="probation-section ml-auto text-right" aria-labelledby="comparecimento-apresentacao">
      <h2 id="comparecimento-apresentacao" tabIndex={-1} className={headingStyle}>Como Apresentar?</h2>
      <p>O servidor poderá incluir sua declaração de comparecimento, como documento comprobatório na justificativa do seu ponto, utilizando a opção <strong>“Declaração de Comparecimento”</strong>.</p>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para maiores informações consulte a página oficial da Declaração de Comparecimento:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href="https://progepe.ufersa.edu.br/declaracao-de-comparecimento/">Declaração de Comparecimento<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
