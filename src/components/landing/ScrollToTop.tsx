'use client'

import { useState, useEffect } from 'react'
import { ArrowUpToLine } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        'fixed bottom-6 right-6 z-40 w-11 h-11 flex items-center justify-center',
        'rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/25',
        'hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-90',
        'transition-all duration-300 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <ArrowUpToLine size={18} />
    </button>
  )
}
