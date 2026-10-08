import { useState } from 'react'
import { Share2, Mail, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PageActions() {
  const [copiedUrl, setCopiedUrl] = useState('')
  const [manualUrl, setManualUrl] = useState('')
  const currentUrl = window.location.href
  const copied = copiedUrl === currentUrl
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopiedUrl(window.location.href)
      setManualUrl('')
    } catch {
      setManualUrl(window.location.href)
    }
  }
  const email = `mailto:rhangicos@ufersa.com.br?subject=${encodeURIComponent('Dúvida — Manual do Servidor UFERSA')}&body=${encodeURIComponent(`Olá, equipe de Gestão de Pessoas.\n\nTenho uma dúvida sobre esta página:\n${currentUrl}\n\nMinha dúvida: \n`)}`
  return <div className="mb-8 flex flex-col items-end gap-2">
    <div className="flex flex-wrap justify-end gap-2">
      <Button variant="ghost" size="sm" onClick={copyLink} title="Copiar link desta página">{copied ? <Check aria-hidden="true" /> : <Share2 aria-hidden="true" />}{copied ? 'Link copiado' : 'Compartilhar'}</Button>
      <Button variant="ghost" size="sm" asChild><a href={email}><Mail aria-hidden="true" />Dúvidas</a></Button>
    </div>
    <span role="status" className="sr-only">{copied ? 'Link da página copiado.' : ''}</span>
    {manualUrl === currentUrl && <label className="w-full max-w-md text-sm text-muted-foreground">Copie o link abaixo:
      <input aria-label="Link desta página" readOnly value={manualUrl} onFocus={event => event.currentTarget.select()} className="mt-2 w-full rounded-md border bg-white p-2 text-foreground" />
    </label>}
  </div>
}
