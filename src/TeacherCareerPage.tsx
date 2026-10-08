import { ClipboardCheck, TrendingUp, Award, FileSearch, ChevronsUp, GraduationCap } from 'lucide-react'
import { SelectionCard } from '@/components/SelectionCard'

export const teacherCareerTopics = [
  { id: 'estagio', title: 'Estágio probatório', icon: ClipboardCheck },
  { id: 'progressao', title: 'Progressão por Desempenho', icon: TrendingUp },
  { id: 'titular', title: 'Promoção para Titular', icon: Award },
  { id: 'revisao', title: 'Revisão de Progressão Funcional', icon: FileSearch },
  { id: 'aceleracao', title: 'Aceleração da Promoção', icon: ChevronsUp },
  { id: 'titulacao', title: 'Retribuição por Titulação', icon: GraduationCap },
]
export function TeacherCareerPage() {
  return <nav aria-label="Tópicos da carreira docente" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
    {teacherCareerTopics.map(topic => <SelectionCard key={topic.id} {...topic} description="Estamos trabalhando nisso." href={`#docente/carreira/${topic.id}`} green />)}
  </nav>
}
