import { ExternalLink } from '@/components/ExternalLink'
import { CheckList } from '@/components/CheckList'
import { Notice } from '@/components/Notice'

const headingStyle = 'mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl'
const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'

export function TeacherInitialGuidancePage() {
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    
    <section className="probation-section" aria-labelledby="inicio-siape">
      <h2 id="inicio-siape" tabIndex={-1} className={headingStyle}>Como consigo minha Matrícula Siape?</h2>
      <p>A Gestão de Pessoas irá informar a sua matrícula assim que seu cadastro for incluído em nossos sistemas.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="inicio-email">
      <h2 id="inicio-email" tabIndex={-1} className={headingStyle}>Como consigo meu e-mail institucional?</h2>
      <p>O e-mail institucional da Ufersa é fornecido diretamente pela Superintendência de Tecnologia da Informação e Comunicação - SUTIC.</p>
      <h3 className="mt-8 mb-3 text-xl font-semibold">Suporte Técnico</h3>
      <CheckList className="space-y-4">
        E-mail de atendimento: <a className={`${linkStyle} break-all`} href="mailto:atendimento.sutic@ufersa.edu.br">atendimento.sutic@ufersa.edu.br</a><br></br>
        Telefone: <a className={linkStyle} href="tel:+558433178210">(84) 3317-8210</a>
      </CheckList>
      <div className="mt-8"><Notice variant="attention">
        <p>Assim que obtiver seu e-mail institucional, comunique a unidade de Gestão de Pessoas, para que seu cadastro seja atualizado, liberando seu acesso ao aplicativo do Sougov.</p>
      </Notice></div>
    </section>
    <section className="probation-section" aria-labelledby="inicio-sougov">
      <h2 id="inicio-sougov" tabIndex={-1} className={headingStyle}>Quando terei acesso ao aplicativo Sougov?</h2>
      <p>Assim que sua matrícula Siape e E-mail institucional estiverem ativos você poderá ter acesso ao <ExternalLink className={linkStyle} href="https://sougov.sigepe.gov.br/sougov/">Sougov</ExternalLink>.</p>
    </section>
    <section className="probation-section ml-auto text-right" aria-labelledby="inicio-sistemas">
      <h2 id="inicio-sistemas" tabIndex={-1} className={headingStyle}>Quando terei acesso aos Sistemas Integrados de Gestão (Sipac, Sigrh e Sigaa)?</h2>
      <p>Assim que sua matrícula Siape estiver ativa, você poderá realizar seu cadastro através do link: <ExternalLink className={linkStyle} href="https://sso.ufersa.edu.br/sso-server/login?service=https%3A%2F%2Fsigrh.ufersa.edu.br%2Fsigrh%2Flogin%2Fcas">Sistemas Integrados de Gestão</ExternalLink>.</p>
    </section>
    
    <div className="mb-16 sm:mb-20"><Notice variant="attention">
      <p>A retribuição por titulação é paga somente mediante publicação de portaria, retroativa a data de solicitação do pedido, válido também para aqueles docentes que estão ingressando no órgão, portanto, após assinar o Termo de Exercício, o docente deve <a className={linkStyle} href="#docente/carreira/titulacao">requerer sua RT</a>, o mais breve possível.</p>
    </Notice></div>
  </div>
}
