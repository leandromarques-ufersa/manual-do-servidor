import { createContext, useContext, type ReactNode } from 'react'
import { Check, Circle } from 'lucide-react'

const ListDepth = createContext(0)

export function CheckList({ children, className = '' }: { children: ReactNode; className?: string }) {
  const depth = useContext(ListDepth)
  return <ListDepth.Provider value={depth + 1}>
    <ul role="list" className={`list-none ${className}`}>{children}</ul>
  </ListDepth.Provider>
}

export function CheckListItem({ children }: { children: ReactNode }) {
  const nested = useContext(ListDepth) > 1
  const Icon = nested ? Circle : Check
  return <li className="check-list-item relative">
    <Icon className={`absolute text-emerald-700 ${nested ? 'check-list-subicon top-[0.65em] size-2' : 'check-list-icon top-[0.4em] size-4'}`} strokeWidth={2} aria-hidden="true" />
    <div>{children}</div>
  </li>
}
