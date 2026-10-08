import { Users, Bus, ShieldPlus } from 'lucide-react'
import { SelectionCard } from '@/components/SelectionCard'

export const benefitTopics = [
  { id: 'dependentes', title: 'Cadastro de Dependentes', description: 'Consulte as orientações para cadastrar seus dependentes.', icon: Users },
  { id: 'auxilio-transporte', title: 'Auxílio-Transporte', description: 'Saiba como solicitar o auxílio para seu deslocamento ao trabalho.', icon: Bus },
  { id: 'assistencia', title: 'Assistência à Saúde Suplementar', description: 'Conheça as modalidades, os dependentes e os valores de contribuição.', icon: ShieldPlus },
]

export function BenefitsPage() {
  return <nav aria-label="Tópicos de benefícios" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
    {benefitTopics.map(topic => <SelectionCard key={topic.id} {...topic} href={`#tecnico/beneficios/${topic.id}`} green />)}
  </nav>
}
