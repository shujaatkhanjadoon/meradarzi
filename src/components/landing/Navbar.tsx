// src/components/landing/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Scissors, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '#', label: 'Cities', hasDropdown: true },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const CITIES_DROPDOWN = [
  { href: '/cities/lahore', label: 'Lahore' },
  { href: '/cities/karachi', label: 'Karachi' },
  { href: '/cities/islamabad', label: 'Islamabad' },
  { href: '/cities/rawalpindi', label: 'Rawalpindi' },
  { href: '/cities/faisalabad', label: 'Faisalabad' },
  { href: '/cities/peshawar', label: 'Peshawar' },
  { href: '/cities/multan', label: 'Multan' },
  { href: '/cities', label: 'All Cities →' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [citiesOpen, setCitiesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.png"
              alt="Mera Darzi - Best Tailor Management Software in Pakistan"
              width={150}
              height={25}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setCitiesOpen(true)}
                  onMouseLeave={() => setCitiesOpen(false)}
                >
                  <button
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600
                               rounded-lg hover:bg-blue-50 transition-all flex items-center gap-1"
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {citiesOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 min-w-48 z-50">
                      {CITIES_DROPDOWN.map(c => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-xl hover:bg-blue-50 transition-all"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600
                             rounded-lg hover:bg-blue-50 transition-all"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://app.meradarzi.pk/"
              target="_blank"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600
                         px-4 py-2 transition-colors"
            >
              Login
            </Link>
            <Link
              href="https://app.meradarzi.pk/"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold
                         px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/25
                         hover:shadow-blue-600/40 active:scale-95"
            >
              Free Shuru Karein →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center
                       rounded-xl bg-slate-100 text-slate-700"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-4 space-y-1">
            {NAV_LINKS.map(link => (
              link.hasDropdown ? (
                <div key={link.label}>
                  <div className="px-4 py-3 text-sm font-semibold text-slate-400 uppercase tracking-wide">
                    {link.label}
                  </div>
                  {CITIES_DROPDOWN.map(c => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-6 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700
                             hover:bg-slate-50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
            <div className="pt-3 px-4 flex flex-col gap-2">
              <Link
                href="https://app.meradarzi.pk/"
                target="_blank"
                className="w-full text-center bg-blue-600 text-white font-bold
                           py-3.5 rounded-xl text-sm"
              >
                Free Shuru Karein →
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}