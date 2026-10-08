import { ClipboardCheck, TrendingUp, ChevronsUp, GraduationCap, type LucideIcon } from 'lucide-react'
import { SelectionCard } from '@/components/SelectionCard'
import { careerTopics } from './career'
const icons: Record<string, LucideIcon> = {
  estagio: ClipboardCheck,
  progressao: TrendingUp,
  aceleracao: ChevronsUp,
  qualificacao: GraduationCap,
}

export function CareerPage() {
  return <nav aria-label="Tópicos de carreira" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
    {careerTopics.map(topic => <SelectionCard key={topic.id} title={topic.title} description={topic.description} icon={icons[topic.id]} href={`#tecnico/carreira/${topic.id}`} green />)}
  </nav>
}
