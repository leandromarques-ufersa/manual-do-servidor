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
    {teacherCareerTopics.map(topic => <SelectionCard key={topic.id} {...topic} description={topic.id === 'estagio' ? 'Conheça as avaliações, os documentos e as solicitações junto à CAD e à CPPD.' : topic.id === 'progressao' ? 'Veja os prazos e os documentos para solicitar sua avaliação à CPPD.' : topic.id === 'titular' ? 'Confira os requisitos, a defesa e os documentos para solicitar sua promoção.' : topic.id === 'revisao' ? 'Saiba como reunir seu histórico e solicitar a revisão das progressões à CPPD.' : topic.id === 'aceleracao' ? 'Consulte as condições para aprovação no estágio anterior a 01/01/2025.' : topic.id === 'titulacao' ? 'Saiba como solicitar a RT e comprovar sua titulação junto à CPPD.' : 'Estamos trabalhando nisso.'} href={`#docente/carreira/${topic.id}`} green />)}
  </nav>
}
