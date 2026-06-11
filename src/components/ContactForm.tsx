'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContactFormProps {
  variant?: 'default' | 'compact'
}

export function ContactForm({ variant = 'default' }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        alert(data.error || 'Kuch masla ho gaya. Dobara try karein.')
        return
      }
      setSent(true)
    } catch {
      alert('Network error. Dobara try karein ya directly WhatsApp karein.')
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="text-center py-10">
        <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          Message Mil Gaya! 🙏
        </h3>
        <p className="text-slate-500 text-sm">
          Hum 24 ghante mein reply karenge.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', variant === 'compact' && 'space-y-3')}>
      <h3 className={cn(
        'font-bold text-slate-800',
        variant === 'compact' ? 'text-lg mb-3' : 'text-xl mb-5'
      )}>
        Message Bhejein
      </h3>
      <div className={variant === 'compact' ? 'space-y-4' : 'grid sm:grid-cols-2 gap-4'}>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
            Aapka Naam
          </label>
          <input
            type="text"
            placeholder="Ahmed Bhai"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            placeholder="ahmed@email.com"
            required
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
          Message
        </label>
        <textarea
          rows={variant === 'compact' ? 3 : 4}
          placeholder="Kya sawal hai aapka?"
          required
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-500 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-blue-600 disabled:bg-slate-300 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
      >
        {sending ? 'Bhej raha hai...' : 'Message Bhejein ✓'}
      </button>
    </form>
  )
}
