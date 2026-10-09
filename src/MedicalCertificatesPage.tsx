import { MedicalCertificateTutorial } from '@/components/MedicalCertificateTutorial'
import { CheckList, CheckListItem } from '@/components/CheckList'
import { Notice } from '@/components/Notice'
import { ArrowUpRight } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { Button } from '@/components/ui/button'

const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'
const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'

export function MedicalCertificatesPage() {
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="atestados-aceitos">
      <h2 id="atestados-aceitos" tabIndex={-1} className={headingStyle}>Quais atestados são permitidos?</h2>
      <p>Para fins de justificativa de faltas ao trabalho, somente serão aceitos os atestados emitidos por médicos ou cirurgiões-dentistas.</p>
      <p className="mt-6">No atestado deverão constar as seguintes informações:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem>Identificação do servidor (e do familiar, caso na condição de acompanhante)</CheckListItem>
        <CheckListItem>Tempo de afastamento</CheckListItem>
        <CheckListItem>Código da Classificação Estatística Internacional de Doenças e Problemas Relacionados à Saúde (CID) ou o diagnóstico (quando expressamente autorizados pelo paciente). <strong>O CID Z76.3 não é aceito pois trata-se de pessoa sadia cuidando de pessoa doente</strong></CheckListItem>
        <CheckListItem>Local e data</CheckListItem>
        <CheckListItem>Identificação do emitente com assinatura e registro no conselho de classe (CRM ou CRO)</CheckListItem>
      </CheckList>
    </section>
    <section className="probation-section text-right" aria-labelledby="atestados-envio">
      <h2 id="atestados-envio" tabIndex={-1} className={headingStyle}>Como apresentar meus atestados?</h2>
      <p>O atestado deverá ser cadastrado através do aplicativo <ExternalLink className={linkStyle} href="https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/sou-gov.br/minha-saude/atestado/1-como-incluir-atestado-de-saude-no-aplicativo-sou-gov-br">SouGov</ExternalLink> no prazo máximo de <strong>5 (cinco) dias</strong> contados da data de início do afastamento do servidor.</p>
      <MedicalCertificateTutorial />
      <div className="mt-6"><Notice variant="attention"><p>Nunca utilize seu atestado médico como documento comprobatório na justificativa do seu ponto eletrônico. Para essa finalidade, utilize a homologação do afastamento, emitida pelo SIASS ou por perito responsável.</p></Notice></div>
    </section>
    <section className="probation-section" aria-labelledby="atestados-pericia">
      <h2 id="atestados-pericia" tabIndex={-1} className={headingStyle}>Quando devo apresentar meu atestado à Perícia médica?</h2>
      <p>O servidor deverá apresentar seu atestado médico pessoalmente ao perito responsável nas seguintes hipóteses:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem>Atestados que ultrapassem 14 dias, consecutivos ou não, nos 12 (doze) meses anteriores.</CheckListItem>
        <CheckListItem>Atestados sem a informação do CID.</CheckListItem>
        <CheckListItem>Atestados enviados fora do prazo de 5 (cinco) dias contados da data do início do afastamento do servidor.</CheckListItem>
      </CheckList>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para mais informações, consulte a página oficial da dispensa de perícia:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href="https://progepe.ufersa.edu.br/dispensa-de-pericia-e-prazo-para-apresentacao-do-atestado/">Dispensa de Perícia<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
