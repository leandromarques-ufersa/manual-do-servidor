import type { ReactNode } from 'react'
import { Pencil, CircleAlert } from 'lucide-react'

export function Notice({ variant, children }: { variant: 'observation' | 'attention'; children: ReactNode }) {
  const observation = variant === 'observation'
  const Icon = observation ? Pencil : CircleAlert
  const title = observation ? 'Observação' : 'Atenção'
  return <aside aria-label={title} className={`rounded-lg border p-5 text-left ${observation ? 'border-blue-200 bg-blue-50 text-blue-950' : 'border-amber-300 bg-amber-50 text-amber-950'}`}>
    <h3 className={`mb-3 flex items-center gap-3 text-lg font-semibold ${observation ? 'text-blue-800' : 'text-amber-800'}`}>
      <Icon className="size-5 shrink-0" aria-hidden="true" />{title}
    </h3>
    {children}
  </aside>
}
