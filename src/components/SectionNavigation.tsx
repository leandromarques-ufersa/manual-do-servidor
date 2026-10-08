import { teacherCareerTopics } from '@/TeacherCareerPage'
import { IdCard, House, BriefcaseBusiness, HeartPulse, Wallet, FileClock, Wrench, LayoutGrid, ClipboardCheck, TrendingUp, ChevronsUp, GraduationCap, type LucideIcon } from 'lucide-react'
import { careerTopics } from '@/career'
import { healthTopics } from '@/HealthPage'
import { benefitTopics } from '@/BenefitsPage'

const careerIcons: Record<string, LucideIcon> = { estagio: ClipboardCheck, progressao: TrendingUp, aceleracao: ChevronsUp, qualificacao: GraduationCap }

const sections = [
  { id: 'orientacoes-iniciais', title: 'Orientações iniciais', icon: House },
  { id: 'carreira', title: 'Carreira', icon: BriefcaseBusiness },
  { id: 'saude', title: 'Saúde', icon: HeartPulse },
  { id: 'beneficios', title: 'Benefícios', icon: Wallet },
  { id: 'licencas-e-afastamentos', title: 'Licenças e afastamentos', icon: FileClock },
  { id: 'servicos', title: 'Serviços', icon: Wrench },
]

const profiles = [
  { id: 'docente', title: 'Docente', icon: GraduationCap },
  { id: 'tecnico', title: 'Técnico Administrativo', icon: IdCard },
]

export function SectionNavigation({ section, activeId, profile = 'tecnico' }: { section?: string; activeId?: string; profile?: string }) {
  const profileLevel = !section
  const sectionLevel = !activeId
  const selectedId = profileLevel ? profile : activeId ?? section
  const topics = profileLevel ? profiles : sectionLevel ? sections : section === 'beneficios' ? benefitTopics : section === 'saude' ? healthTopics : section === 'carreira' && profile === 'docente' ? teacherCareerTopics : section === 'carreira' ? careerTopics.map(topic => ({ ...topic, icon: careerIcons[topic.id] })) : []
  if (!topics.length) return null
  const label = profileLevel ? 'Escolha de categoria' : sectionLevel ? (profile === 'docente' ? 'Guia docente' : 'Guia técnico administrativo') : section === 'beneficios' ? 'Benefícios' : section === 'saude' ? 'Saúde' : 'Carreira'
  return <nav aria-label={`Navegação de ${label}`} className="mx-auto mt-5 flex w-fit max-w-full flex-wrap justify-center gap-2 p-2 lg:fixed lg:left-[max(4.25rem,calc(25vw-13.25rem))] lg:-translate-x-1/2 lg:top-1/2 lg:z-30 lg:mt-0 lg:-translate-y-1/2 lg:flex-col lg:flex-nowrap">
    {topics.map(({ id, title, icon: Icon }) => <a key={id} href={profileLevel ? `#${id}` : sectionLevel ? `#${profile}/${id}` : `#${profile}/${section}/${id}`} aria-label={title} title={title} aria-current={selectedId === id ? 'page' : undefined} className={`group relative grid size-11 shrink-0 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${selectedId === id ? 'bg-profile-selected text-profile-strong' : 'text-slate-600 hover:bg-slate-200/70 hover:shadow-sm hover:text-primary'}`}>
      <Icon className="size-5" aria-hidden="true" />
      <span className="pointer-events-none absolute left-full ml-3 hidden w-52 rounded-lg bg-slate-900 px-3 py-2 text-sm text-white shadow-lg lg:group-hover:block lg:group-focus-visible:block">{title}</span>
    </a>)}
    <a href={profileLevel ? '#perfis' : sectionLevel ? `#${profile}` : `#${profile}/${section}`} aria-label={`Voltar para ${label}`} title={`Voltar para ${label}`} className="group relative grid size-11 shrink-0 place-items-center rounded-full text-slate-600 hover:bg-slate-200/70 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
      <LayoutGrid className="size-5" aria-hidden="true" />
      <span className="pointer-events-none absolute left-full ml-3 hidden w-52 rounded-lg bg-slate-900 px-3 py-2 text-sm text-white lg:group-hover:block lg:group-focus-visible:block">Voltar para {label}</span>
    </a>
  </nav>
}
