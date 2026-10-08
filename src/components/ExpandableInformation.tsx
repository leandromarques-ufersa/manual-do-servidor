import { useId, useState, type ReactNode } from 'react'
import { Plus, Minus } from 'lucide-react'

export function ExpandableInformation({ title, children }: { title: string; children: ReactNode }) {
  const [expanded, setExpanded] = useState(false)
  const contentId = useId()
  const Icon = expanded ? Minus : Plus
  const lastSpace = title.lastIndexOf(' ')
  const start = lastSpace < 0 ? '' : title.slice(0, lastSpace + 1)
  const lastWord = title.slice(lastSpace + 1)

  return <>
    <button type="button" aria-expanded={expanded} aria-controls={contentId}
      onClick={() => setExpanded(!expanded)}
      className="inline cursor-pointer rounded-sm text-left text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
      {start}<span className="whitespace-nowrap">{lastWord}<Icon className="ml-2 inline-block size-5 align-middle text-red-600" aria-hidden="true" /></span>
    </button>
    <div id={contentId} hidden={!expanded} className="mt-4 border-l-2 border-slate-200 pl-4 text-base leading-8 text-foreground">
      {children}
    </div>
  </>
}

