// src/components/landing/Navbar.tsx
'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { Menu, X, MapPin, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { CITIES_BY_PROVINCE, PROVINCES } from '@/lib/cities'

const NAV_LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '#', label: 'Cities', hasDropdown: true },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const TOTAL_CITIES = Object.values(CITIES_BY_PROVINCE).reduce((sum, cities) => sum + cities.length, 0)

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollPosRef = useRef(0)
  const [scrolled, setScrolled] = useState(false)
  const [citiesOpen, setCitiesOpen] = useState(false)
  const [mobileCitiesOpen, setMobileCitiesOpen] = useState(false)
  const [mobileProvince, setMobileProvince] = useState<string | null>(null)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    setMobileCitiesOpen(false)
    setMobileProvince(null)
  }, [])
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const citiesBtnRef = useRef<HTMLButtonElement>(null)
  const megaMenuRef = useRef<HTMLDivElement>(null)

  const openCities = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setCitiesOpen(true)
  }, [])

  const closeCities = useCallback(() => {
    timerRef.current = setTimeout(() => setCitiesOpen(false), 150)
  }, [])

  const toggleCities = useCallback(() => {
    setCitiesOpen(prev => !prev)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (citiesOpen) {
        setCitiesOpen(false)
        citiesBtnRef.current?.focus()
      }
    }
  }, [citiesOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    const body = document.body
    if (menuOpen) {
      scrollPosRef.current = window.scrollY
      body.style.overflow = 'hidden'
      body.style.position = 'fixed'
      body.style.top = `-${scrollPosRef.current}px`
      body.style.width = '100%'
    } else {
      body.style.overflow = ''
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      window.scrollTo(0, scrollPosRef.current)
    }
    return () => {
      body.style.overflow = ''
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      if (menuOpen) window.scrollTo(0, scrollPosRef.current)
    }
  }, [menuOpen])

  useEffect(() => {
    if (citiesOpen && citiesBtnRef.current) {
      citiesBtnRef.current.setAttribute('aria-expanded', 'true')
    } else if (citiesBtnRef.current) {
      citiesBtnRef.current.setAttribute('aria-expanded', 'false')
    }
  }, [citiesOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(e.target as Node) &&
        citiesBtnRef.current &&
        !citiesBtnRef.current.contains(e.target as Node)
      ) {
        setCitiesOpen(false)
      }
    }
    if (citiesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [citiesOpen])

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
              sizes="150px"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openCities}
                  onMouseLeave={closeCities}
                >
                  <button
                    ref={citiesBtnRef}
                    onClick={toggleCities}
                    onFocus={openCities}
                    aria-haspopup="true"
                    aria-expanded={citiesOpen}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1',
                      citiesOpen
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                    )}
                  >
                    {link.label}
                    <ChevronDown size={12} className={cn('transition-transform', citiesOpen && 'rotate-180')} />
                  </button>

                  {/* Mega Menu */}
                  {citiesOpen && (
                    <div
                      ref={megaMenuRef}
                      role="dialog"
                      aria-label="Select your city"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 z-50 max-w-[1100px] w-max"
                      onMouseEnter={openCities}
                      onMouseLeave={closeCities}
                      onKeyDown={handleKeyDown}
                    >
                      <div className="grid grid-cols-5 gap-6">
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <MapPin size={12} className="text-blue-500" />
                            Punjab
                          </h4>
                          <div className="space-y-0.5">
                            {CITIES_BY_PROVINCE["Punjab"]?.slice(0, Math.ceil(CITIES_BY_PROVINCE["Punjab"].length / 2)).map((city) => (
                              <Link key={city.slug} href={`/cities/${city.slug}`} onClick={() => setCitiesOpen(false)}
                                className="block px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-transparent uppercase tracking-wider mb-3 select-none">Punjab</h4>
                          <div className="space-y-0.5">
                            {CITIES_BY_PROVINCE["Punjab"]?.slice(Math.ceil(CITIES_BY_PROVINCE["Punjab"].length / 2)).map((city) => (
                              <Link key={city.slug} href={`/cities/${city.slug}`} onClick={() => setCitiesOpen(false)}
                                className="block px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        {["Sindh", "Khyber Pakhtunkhwa"].map((province) => (
                          <div key={province}>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                              <MapPin size={12} className="text-blue-500" />
                              {province === "Khyber Pakhtunkhwa" ? "KPK" : province}
                            </h4>
                            <div className="space-y-0.5">
                              {CITIES_BY_PROVINCE[province]?.map((city) => (
                                <Link key={city.slug} href={`/cities/${city.slug}`} onClick={() => setCitiesOpen(false)}
                                  className="block px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                                  {city.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <MapPin size={12} className="text-blue-500" />
                            Balochistan
                          </h4>
                          <div className="space-y-0.5 mb-5">
                            {CITIES_BY_PROVINCE["Balochistan"]?.map((city) => (
                              <Link key={city.slug} href={`/cities/${city.slug}`} onClick={() => setCitiesOpen(false)}
                                className="block px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                                {city.name}
                              </Link>
                            ))}
                          </div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <MapPin size={12} className="text-blue-500" />
                            Islamabad
                          </h4>
                          <div className="space-y-0.5">
                            <Link href="/cities/islamabad" onClick={() => setCitiesOpen(false)}
                              className="block px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                              Islamabad
                            </Link>
                            {CITIES_BY_PROVINCE["Islamabad Capital Territory"]?.map((city) => city.slug !== "islamabad" && (
                              <Link key={city.slug} href={`/cities/${city.slug}`} onClick={() => setCitiesOpen(false)}
                                className="block px-3 py-1.5 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                        <Link href="/cities" onClick={() => setCitiesOpen(false)}
                          className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                          View All Cities ({TOTAL_CITIES}) →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a key={link.href} href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="https://app.meradarzi.pk/" target="_blank"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-4 py-2 transition-colors">
              Login
            </Link>
            <Link href="https://app.meradarzi.pk/" target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-95">
              Free Shuru Karein →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => { setMenuOpen(v => !v); if (menuOpen) { setMobileCitiesOpen(false); setMobileProvince(null) } }}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 min-w-[44px] min-h-[44px]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile backdrop */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <div className="relative lg:hidden bg-white border-t border-slate-100 z-50 flex flex-col max-h-[80vh] shadow-xl">
            <div className="overflow-y-auto flex-1 py-4">
            {NAV_LINKS.map(link => (
              link.hasDropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileCitiesOpen(!mobileCitiesOpen)}
                    aria-expanded={mobileCitiesOpen}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-400 uppercase tracking-wide"
                  >
                    {link.label}
                    <ChevronDown size={20} className={cn('text-slate-700 transition-transform', mobileCitiesOpen && 'rotate-180')} />
                  </button>
                  {mobileCitiesOpen && (
                    <div className="space-y-0.5 pb-2">
                      {PROVINCES.map((province) => (
                        <div key={province}>
                          <button
                            onClick={() => setMobileProvince(mobileProvince === province ? null : province)}
                            aria-expanded={mobileProvince === province}
                            className="w-full flex items-center justify-between px-6 py-2.5 text-xs font-bold text-slate-400 uppercase tracking-wider min-h-[44px]"
                          >
                            {province === "Islamabad Capital Territory" ? "Islamabad" : province}
                            <ChevronDown size={18} className={cn('text-slate-600 transition-transform', mobileProvince === province && 'rotate-180')} />
                          </button>
                          {mobileProvince === province && (
                            <div className="ml-2 border-l-2 border-slate-100 pl-3">
                              {CITIES_BY_PROVINCE[province].map((city) => (
                                <Link key={city.slug} href={`/cities/${city.slug}`} onClick={closeMenu}
                                  className="block px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-xl transition-colors min-h-[44px] flex items-center">
                                  {city.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      <Link href="/cities" onClick={closeMenu}
                        className="block px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors min-h-[44px] flex items-center">
                        View All Cities →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <a key={link.href} href={link.href} onClick={closeMenu}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors min-h-[44px] flex items-center">
                  {link.label}
                </a>
              )
            ))}
            </div>
            <div className="px-4 pb-4 pt-3 border-t border-slate-100 bg-white">
              <Link href="https://app.meradarzi.pk/" target="_blank"
                className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm min-h-[44px] flex items-center justify-center transition-colors">
                Free Shuru Karein →
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
