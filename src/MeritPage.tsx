import { CheckList, CheckListItem } from '@/components/CheckList'
import { ArrowUpRight, TableProperties } from 'lucide-react'
import { ExternalLink } from '@/components/ExternalLink'
import { ExpandableInformation } from '@/components/ExpandableInformation'
import { Button } from '@/components/ui/button'

const linkStyle = 'text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary'

export function MeritPage() {
  return <div className="probation-minimal mt-8 border-t border-slate-300 pt-12 text-base leading-8 sm:pt-16 sm:text-lg sm:leading-9">
    <section className="probation-section" aria-labelledby="merito-definicao">
      <h2 id="merito-definicao" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">O que é?</h2>
      <p>É a mudança para o padrão de vencimento imediatamente subsequente, a cada <strong>12 (doze) meses de efetivo exercício</strong>, desde que o servidor apresente resultado satisfatório na avaliação de desempenho.</p>
    </section>
    <section className="probation-section text-right" aria-labelledby="merito-funcionamento">
      <h2 id="merito-funcionamento" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">Como funciona?</h2>
      <p>A carreira dos técnico-administrativos posiciona os servidores numa escala de 1 a 19. Ao entrar em exercício, o servidor inicia no padrão de vencimento 1 e, a cada 12 meses, tem direito a progredir para a posição seguinte.</p>
    </section>
    <div className="mb-16 flex justify-center sm:mb-20">
      <ExternalLink href="https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2025/04/TABELA_TAES_MP_1286_2024.pdf" className="group flex flex-col items-center rounded-lg px-4 py-3 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <span className="grid size-16 place-items-center rounded-full bg-background text-profile-icon">
          <TableProperties strokeWidth={1.25} className="size-11 motion-safe:transition-transform motion-safe:group-hover:scale-110" aria-hidden="true" />
        </span>
        <span className="mt-3 text-base font-semibold">Tabelas</span>
        <span className="mt-2 max-w-48 text-sm leading-6 text-muted-foreground">Consulte a Tabela de Progressão do PCCTAE.</span>
        <ArrowUpRight className="mt-3 size-4 text-profile-icon" aria-hidden="true" />
      </ExternalLink>
    </div>
    <section className="probation-section" aria-labelledby="merito-solicitacao">
      <h2 id="merito-solicitacao" tabIndex={-1} className="mb-6 scroll-mt-8 text-2xl font-medium tracking-tight sm:text-3xl">Como solicito minha progressão?</h2>
      <p>Até <strong>20 dias antes da data de progressão</strong>, o servidor deve protocolar processo administrativo, junto à DIAP ou à sua unidade de Gestão de Pessoas, contendo:</p>
      <CheckList className="mt-6 space-y-6">
        <CheckListItem><ExternalLink className={linkStyle} href="https://progepe.ufersa.edu.br/wp-content/uploads/sites/62/2026/07/REQUERIMENTO-PROGRESSAO-POR-MERITO-ATUALIZADO.pdf">Requerimento de solicitação de Progressão Por Mérito</ExternalLink>;</CheckListItem>
        <CheckListItem><ExpandableInformation title="Relatório de Avaliação de Desempenho referente ao interstício da progressão solicitada">
          <p>Os relatórios podem ser emitidos via <ExternalLink className={linkStyle} href="https://sigrh.ufersa.edu.br/sigrh/public/home.jsf">SIGRH</ExternalLink> através de:</p>
          <p className="mt-3 rounded-lg bg-muted p-4 font-medium">Portal do Servidor &gt; Relatórios GDH &gt; Relatório Individual de Desempenho</p>
        </ExpandableInformation></CheckListItem>
      </CheckList>
    </section>
    <div className="border-t border-slate-200 pt-8">
      <p className="text-base leading-8 text-muted-foreground">Para mais informações, consulte a página oficial de Progressão por Mérito:</p>
      <Button variant="black" asChild className="mt-4 h-auto rounded-full whitespace-normal px-6 py-3 text-left text-base"><ExternalLink href="https://progepe.ufersa.edu.br/progressao-servidor-tecnico-administrativo/">Progressão Funcional<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
    </div>
  </div>
}
