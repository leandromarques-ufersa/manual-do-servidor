import { ArrowRight, type LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function SelectionCard({ title, description, icon: Icon, href, green = false }: { title: string; description: string; icon: LucideIcon; href: string; green?: boolean }) {
  const external = /^https?:\/\//.test(href)
  return <Card className="h-full gap-0 overflow-hidden rounded-lg border-slate-100 bg-white py-0 shadow-sm transition-shadow hover:shadow-lg">
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="group flex h-full min-h-80 w-full flex-col items-start p-6 text-left sm:p-7 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary">
      <span className={`mb-6 grid size-14 shrink-0 place-items-center rounded-full ${green ? 'bg-profile-soft text-profile-accent' : 'bg-blue-50 text-blue-800'}`}>
        <Icon className="size-7 motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:scale-110 motion-safe:group-focus-visible:scale-110" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="text-lg font-semibold leading-snug tracking-tight text-foreground">{title}</span>
      <span className="mt-3 text-sm leading-6 text-muted-foreground">{description}</span>
      <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-medium text-profile-accent">
        Saiba mais{external && <span className="sr-only"> (abre em nova aba)</span>}<ArrowRight className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </a>
  </Card>
}
