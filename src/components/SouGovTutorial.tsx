import { useState } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ExternalLink } from '@/components/ExternalLink'

export type SouGovTutorialData = {
  label: string
  source: string
  sourceLabel: string
  landscape: boolean
  steps: { image: string; title: string; description: string; alt: string }[]
}

export function SouGovTutorial({ tutorial }: { tutorial: SouGovTutorialData }) {
  const { steps, label, source, sourceLabel, landscape } = tutorial

  const [index, setIndex] = useState(0)
  const step = steps[index]
  const move = (offset: number) => setIndex(current => Math.max(0, Math.min(steps.length - 1, current + offset)))

  return <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white text-left text-base leading-7" role="region" aria-roledescription="carrossel" aria-label={`Tutorial de ${label} no SouGov`}
    onKeyDown={event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault()
        move(event.key === 'ArrowLeft' ? -1 : 1)
      }
    }}>
    <div className={landscape ? 'grid' : 'grid sm:grid-cols-[1fr_1fr]'}>
      <div className="relative flex min-w-0 justify-center bg-slate-100 px-12 py-5 sm:py-6">
        <Button type="button" variant="ghost" size="icon" aria-label="Etapa anterior" onClick={() => move(-1)} disabled={index === 0} className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full text-profile-accent hover:bg-profile-soft hover:text-profile-strong"><ChevronLeft className="size-6" aria-hidden="true" /></Button>
        <Dialog>
          <DialogTrigger asChild>
            <button type="button" className="group flex min-w-0 cursor-zoom-in flex-col items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-profile-accent" aria-label={`Ampliar imagem: ${step.title}`}>
              <img src={step.image} alt={step.alt} className={landscape ? 'aspect-video w-full object-contain' : 'h-[360px] w-full max-w-[240px] object-contain sm:h-[420px]'} loading="lazy" />
              <span className="flex items-center gap-2 text-sm font-medium text-profile-accent"><ZoomIn className="size-4" aria-hidden="true" />Ampliar imagem</span>
            </button>
          </DialogTrigger>
          <DialogContent className={`max-h-[95svh] overflow-y-auto ${landscape ? 'sm:max-w-5xl' : 'sm:max-w-2xl'}`} onKeyDown={event => event.stopPropagation()}>
            <DialogTitle className="pr-6">{step.title}</DialogTitle>
            <DialogDescription>{step.description}</DialogDescription>
            <img src={step.image} alt={step.alt} className={`mx-auto h-auto w-full ${landscape ? '' : 'max-w-[440px]'}`} />
          </DialogContent>
        </Dialog>
        <Button type="button" variant="ghost" size="icon" aria-label="Próxima etapa" onClick={() => move(1)} disabled={index === steps.length - 1} className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full text-profile-accent hover:bg-profile-soft hover:text-profile-strong"><ChevronRight className="size-6" aria-hidden="true" /></Button>
      </div>
      <div className="flex flex-col justify-center p-5 sm:p-6" role="group" aria-roledescription="slide" aria-label={`${index + 1} de ${steps.length}`} aria-live="polite" aria-atomic="true">
        <p className="text-xs font-semibold uppercase tracking-widest text-profile-accent">Passo {index + 1} de {steps.length}</p>
        <h3 className="mt-3 text-xl font-semibold leading-snug">{step.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.description}</p>
        <p className="mt-6 text-xs leading-5 text-muted-foreground">Telas do tutorial oficial. Os dados exibidos são exemplos.</p>
      </div>
    </div>
    <div className="border-t p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap justify-center gap-1" aria-label="Escolher etapa">
        {steps.map((item, position) => <button key={item.title} type="button" onClick={() => setIndex(position)} aria-label={`Passo ${position + 1}: ${item.title}`} aria-current={index === position ? 'step' : undefined} className={`grid size-8 place-items-center rounded-full text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-profile-accent ${index === position ? 'bg-profile-accent text-white' : 'bg-slate-100 text-slate-600 hover:bg-profile-soft hover:text-profile-strong'}`}>{position + 1}</button>)}
      </div>
      <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">Fonte: <ExternalLink className="underline underline-offset-2" href={source}>{sourceLabel}</ExternalLink></p>
    </div>
  </div>
}
