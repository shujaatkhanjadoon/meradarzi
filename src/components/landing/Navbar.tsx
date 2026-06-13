// src/components/landing/Navbar.tsx
'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { MapPin, ChevronDown, Sparkles, Play, Tag, FileText, Info, Mail, X, ArrowRight, LogIn } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { CITIES_BY_PROVINCE, PROVINCES } from '@/lib/cities'

interface NavLink {
  href: string
  label: string
  hasDropdown?: boolean
  icon?: React.ComponentType<{ size?: number; className?: string }>
}

const NAV_LINKS: NavLink[] = [
  { href: '/features', label: 'Features', icon: Sparkles },
  { href: '/how-it-works', label: 'How It Works', icon: Play },
  { href: '/pricing', label: 'Pricing', icon: Tag },
  { href: '#', label: 'Cities', hasDropdown: true, icon: MapPin },
  { href: '/blog', label: 'Blog', icon: FileText },
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact', icon: Mail },
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

  const toggleMenu = useCallback(() => {
    setMenuOpen(v => { setMobileCitiesOpen(false); setMobileProvince(null); return !v })
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 z-50 max-w-[1280px] w-max"
                      onMouseEnter={openCities}
                      onMouseLeave={closeCities}
                      onKeyDown={handleKeyDown}
                    >
                      <div className="grid grid-cols-5 gap-8">
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                            <MapPin size={14} className="text-blue-500" />
                            Punjab
                          </h4>
                          <div className="space-y-0.5">
                            {CITIES_BY_PROVINCE["Punjab"]?.slice(0, Math.ceil(CITIES_BY_PROVINCE["Punjab"].length / 2)).map((city) => (
                              <Link key={city.slug} href={`/cities/${city.slug}`} onClick={() => setCitiesOpen(false)}
                                className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-transparent uppercase tracking-wider mb-4 select-none">Punjab</h4>
                          <div className="space-y-0.5">
                            {CITIES_BY_PROVINCE["Punjab"]?.slice(Math.ceil(CITIES_BY_PROVINCE["Punjab"].length / 2)).map((city) => (
                              <Link key={city.slug} href={`/cities/${city.slug}`} onClick={() => setCitiesOpen(false)}
                                className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                        {["Sindh", "Khyber Pakhtunkhwa"].map((province) => (
                          <div key={province}>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                              <MapPin size={14} className="text-blue-500" />
                              {province === "Khyber Pakhtunkhwa" ? "KPK" : province}
                            </h4>
                            <div className="space-y-0.5">
                              {CITIES_BY_PROVINCE[province]?.map((city) => (
                                <Link key={city.slug} href={`/cities/${city.slug}`} onClick={() => setCitiesOpen(false)}
                                  className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                                  {city.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                            <MapPin size={14} className="text-blue-500" />
                            Balochistan
                          </h4>
                          <div className="space-y-0.5 mb-6">
                            {CITIES_BY_PROVINCE["Balochistan"]?.map((city) => (
                              <Link key={city.slug} href={`/cities/${city.slug}`} onClick={() => setCitiesOpen(false)}
                                className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                                {city.name}
                              </Link>
                            ))}
                          </div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                            <MapPin size={14} className="text-blue-500" />
                            Islamabad
                          </h4>
                          <div className="space-y-0.5">
                            <Link href="/cities/islamabad" onClick={() => setCitiesOpen(false)}
                              className="block px-3 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                              Islamabad
                            </Link>
                            {CITIES_BY_PROVINCE["Islamabad Capital Territory"]?.map((city) => city.slug !== "islamabad" && (
                              <Link key={city.slug} href={`/cities/${city.slug}`} onClick={() => setCitiesOpen(false)}
                                className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-100 text-center">
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
            <Link href="https://app.meradarzi.pk/" target="_blank" rel="noopener"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-4 py-2 transition-colors">
              Login
            </Link>
            <Link href="https://app.meradarzi.pk/" target="_blank" rel="noopener"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-95">
              Free Shuru Karein →
            </Link>
          </div>

          {/* Mobile hamburger button - animated */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 min-w-[44px] min-h-[44px] active:scale-90 transition-transform"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 h-5 relative flex flex-col items-center justify-center gap-[5px]">
              <span className={cn(
                'block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-out origin-center',
                menuOpen && 'rotate-45 translate-y-[3.5px]'
              )} />
              <span className={cn(
                'block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-out',
                menuOpen && 'opacity-0 scale-0'
              )} />
              <span className={cn(
                'block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ease-out origin-center',
                menuOpen && '-rotate-45 -translate-y-[3.5px]'
              )} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out',
          menuOpen
            ? 'bg-black/40 backdrop-blur-sm opacity-100'
            : 'bg-transparent opacity-0 pointer-events-none'
        )}
        onClick={menuOpen ? closeMenu : undefined}
        aria-hidden="true"
      />

      {/* Mobile menu panel - slides in from right */}
      <div
        className={cn(
          'fixed top-0 right-0 h-dvh w-full sm:max-w-sm bg-white shadow-2xl z-50 lg:hidden',
          'flex flex-col transition-transform duration-300 ease-in-out',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-slate-100 safe-top">
          <Link href="/" onClick={closeMenu} className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Mera Darzi - Best Tailor Management Software in Pakistan"
              width={120}
              height={25}
              priority
              sizes="120px"
            />
          </Link>
          <button
            onClick={closeMenu}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-all active:scale-90"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable nav links */}
        <div className="flex-1 overflow-y-auto py-2 scrollbar-hide safe-px">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileCitiesOpen(!mobileCitiesOpen)}
                  aria-expanded={mobileCitiesOpen}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all min-h-[44px] group"
                >
                  <span className="flex items-center gap-3">
                    {link.icon && <link.icon size={18} className="text-slate-400 group-hover:text-blue-500 transition-colors shrink-0" />}
                    {link.label}
                  </span>
                  <ChevronDown size={18} className={cn('text-slate-400 transition-all shrink-0', mobileCitiesOpen && 'rotate-180 text-blue-500')} />
                </button>

                <div className={cn(
                  'grid transition-all duration-200',
                  mobileCitiesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                )}>
                  <div className="overflow-hidden">
                    <div className="ml-4 pl-4 border-l-2 border-blue-100 space-y-0.5 pb-2 mt-0.5">
                      {PROVINCES.map((province) => (
                        <div key={province}>
                          <button
                            onClick={() => setMobileProvince(mobileProvince === province ? null : province)}
                            aria-expanded={mobileProvince === province}
                            className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold text-slate-400 uppercase tracking-wider hover:text-slate-600 transition-colors min-h-[44px] rounded-lg"
                          >
                            {province === "Islamabad Capital Territory" ? "Islamabad" : province}
                            <ChevronDown size={16} className={cn('text-slate-300 transition-transform', mobileProvince === province && 'rotate-180 text-blue-400')} />
                          </button>
                          {mobileProvince === province && (
                            <div className="ml-2 pl-3 space-y-0.5 pb-1">
                              {CITIES_BY_PROVINCE[province].map((city) => (
                                <Link key={city.slug} href={`/cities/${city.slug}`} onClick={closeMenu}
                                  className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors min-h-[44px] flex items-center">
                                  {city.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      <Link href="/cities" onClick={closeMenu}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors min-h-[44px]">
                        <MapPin size={16} />
                        View All Cities
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <a key={link.href} href={link.href} onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all min-h-[44px] group">
                {link.icon && <link.icon size={18} className="text-slate-400 group-hover:text-blue-500 transition-colors shrink-0" />}
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Bottom CTA area */}
        <div className="px-4 pb-4 pt-3 border-t border-slate-100 bg-white space-y-2.5 safe-bottom">
          <Link href="https://app.meradarzi.pk/" target="_blank" rel="noopener"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm min-h-[48px] transition-all shadow-lg shadow-blue-600/25 active:scale-[0.98]">
            Free Shuru Karein
            <ArrowRight size={16} />
          </Link>
          <Link href="https://app.meradarzi.pk/" target="_blank" rel="noopener"
            className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-700 py-2.5 transition-colors rounded-xl hover:bg-slate-50 min-h-[44px]">
            <LogIn size={16} />
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
