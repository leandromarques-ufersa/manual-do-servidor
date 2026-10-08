import { PageActions } from '@/components/PageActions'
import { ExternalLink } from '@/components/ExternalLink'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, GraduationCap, IdCard, House, BriefcaseBusiness, HeartPulse, Wallet, FileClock, LayoutGrid, type LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { careerTopics } from './career'
import { SelectionCard } from '@/components/SelectionCard'
import { ProbationPage } from './ProbationPage'
import { MeritPage } from './MeritPage'
import { AccelerationPage } from './AccelerationPage'
import { QualificationPage } from './QualificationPage'
import { HealthPage, healthTopics } from './HealthPage'
import { MedicalCertificatesPage } from './MedicalCertificatesPage'
import { AttendanceDeclarationPage } from './AttendanceDeclarationPage'
import { SupplementaryHealthPage } from './SupplementaryHealthPage'
import { InitialGuidancePage } from './InitialGuidancePage'
import { DependentsPage } from './DependentsPage'
import { SectionNavigation } from '@/components/SectionNavigation'
import { BenefitsPage, benefitTopics } from './BenefitsPage'
import { CareerPage } from './CareerPage'
import { secoesTecnico } from './content'
import logo from '../assets/Logotipo UFERSA em Azul Transparente.png'

const icons: Record<string, LucideIcon> = { 'Orientações iniciais': House, Carreira: BriefcaseBusiness, Saúde: HeartPulse, Benefícios: Wallet, 'Licenças e afastamentos': FileClock, Serviços: LayoutGrid }
const orderedSections = [secoesTecnico[0], secoesTecnico[1], secoesTecnico[2], secoesTecnico[3], secoesTecnico[5], secoesTecnico[4]]
const sectionSlug = (title: string) => title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-')
export default function App() {
  const [hash, setHash] = useState(location.hash)
  const heading = useRef<HTMLHeadingElement>(null)
  const firstRender = useRef(true)
  const [category, slug, topicId] = hash.slice(1).split('/')
  const profile = category === 'tecnico' ? 'tecnico' : category === 'docente' ? 'docente' : null
  const selected = profile === 'tecnico' && slug ? secoesTecnico.find(section => sectionSlug(section.titulo) === slug) : undefined
  const isCareerTopic = profile === 'tecnico' && slug === 'carreira' && Boolean(topicId)
  const careerTopic = isCareerTopic ? careerTopics.find(topic => topic.id === topicId) : undefined
  const isHealthTopic = profile === 'tecnico' && slug === 'saude' && Boolean(topicId)
  const healthTopic = isHealthTopic ? healthTopics.find(topic => topic.id === topicId) : undefined
  const isBenefitTopic = profile === 'tecnico' && slug === 'beneficios' && Boolean(topicId)
  const benefitTopic = isBenefitTopic ? benefitTopics.find(topic => topic.id === topicId) : undefined
  const missingSection = profile === 'tecnico' && Boolean(slug) && !selected
  useEffect(() => { const update = () => { setHash(location.hash) }; window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update) }, [])
  useEffect(() => {
    document.title = `${isBenefitTopic ? benefitTopic?.title ?? 'Tópico não encontrado' : isHealthTopic ? healthTopic?.title ?? 'Tópico não encontrado' : isCareerTopic ? careerTopic?.title ?? 'Tópico não encontrado' : selected ? selected.titulo : missingSection ? 'Seção não encontrada' : profile === 'tecnico' ? 'Guia técnico administrativo' : profile === 'docente' ? 'Guia docente' : 'Boas-vindas'} | UFERSA Angicos`
    if (!firstRender.current) { heading.current?.focus({ preventScroll: true }); window.scrollTo(0, 0) }
    firstRender.current = false
  }, [profile, selected, missingSection, isCareerTopic, careerTopic, isHealthTopic, healthTopic, isBenefitTopic, benefitTopic])
  return <div className="flex min-h-svh flex-col">
    <a className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4" href="#conteudo">Pular para o conteúdo</a>
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <a href="#perfis" aria-label="UFERSA — início"><img src={logo} alt="UFERSA" width={2172} height={724} className="h-auto w-36 sm:w-40" /></a>
        <nav aria-label="Bibliotecas utilizadas" className="flex items-center gap-1 text-muted-foreground">
          <Button variant="ghost" size="sm" asChild><ExternalLink href="https://tailwindcss.com/">Tailwind CSS<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
          <Button variant="ghost" size="sm" asChild><ExternalLink href="https://ui.shadcn.com/">shadcn/ui<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
        </nav>
      </div>
    </header>
    {profile && <SectionNavigation section={slug} activeId={topicId} profile={profile} />}
    <div className={profile ? 'flex-1 lg:pl-24' : 'flex flex-1 flex-col'}>
    <main id="conteudo" className={`mx-auto w-full flex-1 px-5 py-12 sm:px-10 sm:py-16 ${profile ? 'max-w-5xl' : 'flex max-w-4xl flex-col justify-center'}`}>
      <PageActions key={hash} />
      {!profile ? <section aria-labelledby="titulo" className="text-center">
        <Badge variant="secondary" className="mb-6 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">Manual do Servidor · Campus Angicos</Badge>
        <h1 ref={heading} tabIndex={-1} id="titulo" className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Bem-vindo(a) à<br /><span className="text-primary">UFERSA Campus Angicos</span></h1>
        <p className="mt-5 text-sm text-muted-foreground sm:text-base">Escolha sua categoria para começar.</p>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <SelectionCard title="Docente" description="Acesse o guia dedicado aos docentes e os canais institucionais do campus." icon={GraduationCap} href="#docente" />
          <SelectionCard title="Técnico Administrativo" description="Encontre orientações sobre sua rotina, carreira, benefícios e serviços." icon={IdCard} href="#tecnico" green />
        </div>
      </section> : isBenefitTopic ? <section aria-labelledby="titulo" className="mx-auto">
        <Button variant="ghost" size="sm" asChild className="mb-8 -ml-3 text-muted-foreground"><a href="#tecnico/beneficios"><ArrowLeft aria-hidden="true" />Voltar para Benefícios</a></Button>
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">Benefícios</p>
        <h1 ref={heading} tabIndex={-1} id="titulo" className="text-3xl font-semibold tracking-tight sm:text-4xl">{benefitTopic?.id === 'dependentes' ? 'Inclusão de Dependentes' : benefitTopic?.title ?? 'Tópico não encontrado'}</h1>
        {benefitTopic?.id === 'dependentes' ? <DependentsPage /> : benefitTopic?.id === 'assistencia' ? <SupplementaryHealthPage /> : benefitTopic?.id === 'auxilio-transporte' ? <div className="mt-8">
          <p className="mb-5 text-muted-foreground">Consulte as orientações oficiais para solicitar o auxílio-transporte.</p>
          <Button variant="black" asChild><ExternalLink href="https://progepe.ufersa.edu.br/como-solicitar/">Auxílio-Transporte · PROGEPE<ArrowUpRight aria-hidden="true" /></ExternalLink></Button>
        </div> : <p className="mt-5">Volte para Benefícios e escolha um tópico disponível.</p>}
      </section> : isHealthTopic ? <section aria-labelledby="titulo" className="mx-auto">
        <Button variant="ghost" size="sm" asChild className="mb-8 -ml-3 text-muted-foreground"><a href="#tecnico/saude"><ArrowLeft aria-hidden="true" />Voltar para Saúde</a></Button>
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">Saúde</p>
        <h1 ref={heading} tabIndex={-1} id="titulo" className="text-3xl font-semibold tracking-tight sm:text-4xl">{healthTopic?.title ?? 'Tópico não encontrado'}</h1>
        {healthTopic?.id === 'atestados' ? <MedicalCertificatesPage /> : healthTopic?.id === 'assistencia' ? <SupplementaryHealthPage /> : healthTopic?.id === 'declaracao-de-comparecimento' ? <AttendanceDeclarationPage /> : <p className="mt-5 text-muted-foreground">{healthTopic ? 'Conteúdo em preparação.' : 'Volte para Saúde e escolha um dos tópicos disponíveis.'}</p>}
      </section> : isCareerTopic ? <section aria-labelledby="titulo" className={careerTopic && ['estagio', 'progressao', 'aceleracao', 'qualificacao'].includes(careerTopic.id) ? 'mx-auto' : 'mx-auto max-w-3xl'}>
        <Button variant="ghost" size="sm" asChild className="mb-8 -ml-3 text-muted-foreground"><a href="#tecnico/carreira"><ArrowLeft aria-hidden="true" />Voltar para Carreira</a></Button>
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">Carreira</p>
        <h1 ref={heading} tabIndex={-1} id="titulo" className="text-3xl font-semibold tracking-tight sm:text-4xl">{careerTopic?.id === 'estagio' ? 'Estágio Probatório Técnico Administrativo' : careerTopic?.title ?? 'Tópico não encontrado'}</h1>
        {careerTopic?.id === 'estagio' ? <ProbationPage /> : careerTopic?.id === 'progressao' ? <MeritPage /> : careerTopic?.id === 'aceleracao' ? <AccelerationPage /> : careerTopic?.id === 'qualificacao' ? <QualificationPage /> : <p className="mt-5 text-muted-foreground">{careerTopic ? 'Conteúdo em preparação.' : 'Volte para Carreira e escolha um dos tópicos disponíveis.'}</p>}
      </section> : selected || missingSection ? <section aria-labelledby="titulo" className={selected && ['Carreira', 'Orientações iniciais', 'Benefícios'].includes(selected.titulo) ? 'mx-auto' : 'mx-auto max-w-3xl'}>
        <Button variant="ghost" size="sm" asChild className="mb-8 -ml-3 text-muted-foreground"><a href="#tecnico"><ArrowLeft aria-hidden="true" />Voltar ao guia técnico administrativo</a></Button>
        <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">Guia do servidor técnico administrativo</p>
        <h1 ref={heading} tabIndex={-1} id="titulo" className="text-3xl font-semibold tracking-tight sm:text-4xl">{selected?.titulo ?? 'Seção não encontrada'}</h1>
        <p className="mt-4 mb-8 text-muted-foreground">{selected?.titulo === 'Carreira' ? 'Escolha um tópico para continuar.' : selected ? 'Consulte as opções e orientações desta seção.' : 'Volte ao guia para escolher uma das seções disponíveis.'}</p>
        {selected?.titulo === 'Orientações iniciais' ? <InitialGuidancePage /> : selected?.titulo === 'Carreira' ? <CareerPage /> : selected?.titulo === 'Saúde' ? <HealthPage /> : selected?.titulo === 'Benefícios' ? <BenefitsPage /> : selected && <Card className="gap-0 overflow-hidden py-0"><ul className="divide-y">{selected.itens.map(([label, url]) => <li key={label}>{url ? <ExternalLink className="flex items-center justify-between gap-4 px-6 py-5 text-sm font-medium text-primary transition-colors hover:bg-muted focus-visible:-outline-offset-4" href={url}><span>{label}</span><ArrowUpRight className="size-4 shrink-0" aria-hidden="true" /></ExternalLink> : <div className="px-6 py-5"><p className="text-sm font-medium">{label}</p><p className="mt-1 text-xs text-muted-foreground">Orientações em preparação</p></div>}</li>)}</ul></Card>}
      </section> : <section aria-labelledby="titulo">
        <Button variant="ghost" size="sm" asChild className="mb-8 -ml-3 text-muted-foreground"><a href="#perfis"><ArrowLeft aria-hidden="true" />Escolher outra categoria</a></Button>
        <div className="mb-8"><p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">Manual do Servidor</p><h1 ref={heading} tabIndex={-1} id="titulo" className="text-3xl font-semibold tracking-tight sm:text-4xl">{profile === 'tecnico' ? 'Guia do servidor técnico administrativo' : 'Guia do servidor docente'}</h1><p className="mt-4 text-muted-foreground">{profile === 'tecnico' ? 'Escolha uma seção para encontrar suas orientações.' : 'O conteúdo deste guia está em preparação.'}</p></div>
        {profile === 'tecnico' ? <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">{orderedSections.map(section => <SelectionCard key={section.titulo} title={section.titulo} description={section.resumo} icon={icons[section.titulo]} href={`#tecnico/${sectionSlug(section.titulo)}`} green />)}</div> : <Card className="gap-4 p-6"><p className="text-sm text-muted-foreground">Enquanto isso, consulte os canais institucionais.</p><div className="flex flex-wrap gap-3"><Button variant="outline" asChild><ExternalLink href="https://angicos.ufersa.edu.br/">Portal do campus<ArrowUpRight aria-hidden="true" /></ExternalLink></Button><Button variant="outline" asChild><ExternalLink href="https://progepe.ufersa.edu.br/">Gestão de Pessoas<ArrowUpRight aria-hidden="true" /></ExternalLink></Button></div></Card>}
      </section>}
    </main>
    </div>
    <footer className="border-t px-5 py-6 text-center text-xs text-muted-foreground">Universidade Federal Rural do Semi-Árido <span className="mx-2" aria-hidden="true">·</span> Campus Angicos</footer>

  </div>
}
