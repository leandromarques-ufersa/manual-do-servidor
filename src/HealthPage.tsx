import { FileHeart, ShieldPlus, ClipboardCheck } from 'lucide-react'
import { SelectionCard } from '@/components/SelectionCard'

export const healthTopics = [
  { id: 'declaracao-de-comparecimento', title: 'Declaração de Comparecimento', description: 'Saiba como justificar horas de atendimento ou exame e consulte os limites anuais.', icon: ClipboardCheck },
  { id: 'atestados', title: 'Atestados Médicos', description: 'Confira os documentos aceitos, os prazos de envio e quando apresentar seu atestado à perícia.', icon: FileHeart },
  { id: 'assistencia', title: 'Assistência à Saúde Suplementar', description: 'Encontre orientações sobre assistência à saúde suplementar.', icon: ShieldPlus },
]

export function HealthPage({ profile = 'tecnico' }: { profile?: string }) {
  return <nav aria-label="Tópicos de saúde" className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
    {healthTopics.map(topic => <SelectionCard key={topic.id} title={topic.title} description={topic.description} icon={topic.icon} href={`#${profile}/saude/${topic.id}`} green />)}
  </nav>
}
