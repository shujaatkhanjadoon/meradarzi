'use client'

import { useState } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContactFormProps {
  variant?: 'default' | 'compact'
}

export function ContactForm({ variant = 'default' }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Kuch masla ho gaya. Dobara try karein.')
        return
      }
      setSent(true)
    } catch {
      setError('Network error. Dobara try karein ya directly WhatsApp karein.')
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={36} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          Assalam-o-Alaikum! 🙌
        </h3>
        <p className="text-slate-700 font-medium mb-2">
          Aapka message hum tak pohanch gaya!
        </p>
        <p className="text-slate-500 text-sm leading-relaxed">
          Hum 24 ghante ke andar aapko email par reply karenge.
          Agar jaldi chahiye to abhi WhatsApp karein:
        </p>
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_ADMIN_WHATSAPP_LINK ?? '923135634667'}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-xl transition-all"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Karein
        </a>
        <p className="text-slate-400 text-xs mt-2">
          {process.env.NEXT_PUBLIC_ADMIN_WHATSAPP ?? '03135634667'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', variant === 'compact' && 'space-y-3')}>
      <h2 className={cn('font-bold text-slate-800', variant === 'compact' ? 'text-lg mb-3' : 'text-xl mb-5')}>
        Message Bhejein
      </h2>

      {error && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm" role="alert">
          <AlertCircle size={16} className="shrink-0" />
          {error}
        </div>
      )}

      <div className={variant === 'compact' ? 'space-y-4' : 'grid sm:grid-cols-2 gap-4'}>
        <div>
          <label htmlFor="cf-name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
            Aapka Naam
          </label>
          <input
            id="cf-name"
            type="text"
            placeholder="Ahmed Bhai"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-offset-2 outline-blue-500 transition-colors focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
            Email Address
          </label>
          <input
            id="cf-email"
            type="email"
            placeholder="ahmed@email.com"
            required
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-offset-2 outline-blue-500 transition-colors focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
          Message
        </label>
        <textarea
          id="cf-message"
          rows={variant === 'compact' ? 3 : 4}
          placeholder="Kya sawal hai aapka?"
          required
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-offset-2 outline-blue-500 transition-colors focus:border-blue-500 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-blue-600 disabled:bg-blue-400 disabled:text-white/80 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
      >
        {sending ? 'Bhej raha hai...' : 'Message Bhejein ✓'}
      </button>
    </form>
  )
}
