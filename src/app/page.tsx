// src/app/page.tsx
import Link from 'next/link'
import { Star, ArrowRight, MessageCircle, Mail, Globe } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SoftwareAppSchema, ReviewSchema, WebPageSchema, HowToSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'
import { ContactForm } from '@/components/ContactForm'
import { Section, PricingCards, StatsSection, FAQ } from '@/components/landing/InteractiveComponents'
import {
  FEATURES, USPS, STEPS, BENEFITS, TESTIMONIALS, FAQS
} from '@/lib/data'

// ─────────────────────────────────────────────────────────────────
// SECTIONS
// ─────────────────────────────────────────────────────────────────

// ── HERO ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-900 via-blue-950
                    to-slate-900 flex items-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10
                        rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10
                        rounded-full blur-3xl animate-pulse delay-1000" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20
                            text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              🇵🇰 Made in Pakistan, for Pakistan
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white
                           leading-tight mb-6">
              Pakistan Ka{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r
                               from-blue-400 to-cyan-400">
                Sabse Smart
              </span>{' '}
              Tailor App
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl
                          mx-auto lg:mx-0">
              Orders track karein, customers manage karein, karigars assign karein
              — sab ek app mein. <strong className="text-white">Offline bhi chale, mobile PWA bhi hai.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Link
                href="https://app.meradarzi.pk/"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 bg-blue-600
                           hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl
                           text-base transition-all shadow-xl shadow-blue-900/50
                           hover:shadow-blue-600/40 active:scale-95"
              >
                Aaj Hi Shuru Karein — Free
                <ArrowRight size={18} />
              </Link>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 bg-white/10
                           hover:bg-white/20 text-white font-semibold px-8 py-4
                           rounded-2xl text-base border border-white/20 transition-all
                           backdrop-blur-sm"
              >
                Aur Janne Ke Liye
              </a>
            </div>

            {/* Login link */}
            <div className="mt-3 text-center lg:text-left">
              <a
                href="https://app.meradarzi.pk/"
                target="_blank"
                rel="noopener"
                className="text-slate-500 text-sm hover:text-blue-400 transition-colors"
              >
                Existing user? <span className="font-semibold">Yahan Login Karein</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              {[
                { icon: '🇵🇰', text: 'Made in Pakistan'  },
                { icon: '✅', text: '500+ Active Tailors'  },
                { icon: '⭐', text: '4.8 ★ Average Rating' },
                { icon: '📱', text: 'PWA — Works on All Phones' },
                { icon: '🌙', text: 'اردو میں بھی دستیاب' },
              ].map(t => (
                <div key={t.text}
                  className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <span className="text-base">{t.icon}</span>
                  {t.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <AppMockup />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                        flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs">Scroll down</span>
          <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-slate-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── App Mockup (pure CSS) ─────────────────────────────────────────
function AppMockup() {
  return (
    <div className="relative w-72 sm:w-80">
      {/* Phone frame */}
      <div className="bg-slate-800 rounded-[3rem] p-3 shadow-2xl shadow-black/50
                      border border-slate-700">
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden">

          {/* Status bar */}
          <div className="bg-slate-900 px-6 pt-3 pb-1 flex justify-between items-center">
            <span className="text-white text-xs font-semibold">9:41</span>
            <div className="w-24 h-5 bg-slate-800 rounded-full" />
            <div className="flex gap-1 items-center">
              {[3,2,1].map(i => (
                <div key={i} className={cn(
                  'w-1 rounded-sm bg-white',
                  i === 3 ? 'h-3' : i === 2 ? 'h-2' : 'h-1.5'
                )} />
              ))}
            </div>
          </div>

          {/* App content */}
          <div className="bg-linear-to-b from-slate-800 to-slate-900 px-4 pb-6 pt-2">

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-slate-400 text-[10px]">Subah Bakhair 👋</p>
                <p className="text-white font-bold text-sm">Ahmed Tailor</p>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center
                              justify-center text-white text-xs font-bold">
                A
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: 'Active', value: '12', color: 'bg-blue-900/50 border-blue-800' },
                { label: 'Ready',  value: '4',  color: 'bg-green-900/50 border-green-800' },
                { label: 'Aaj',    value: 'Rs.2.5k', color: 'bg-amber-900/50 border-amber-800' },
              ].map(s => (
                <div key={s.label}
                  className={cn('rounded-xl p-2.5 border text-center', s.color)}>
                  <p className="text-white font-bold text-sm">{s.value}</p>
                  <p className="text-slate-400 text-[9px] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Order cards */}
            <p className="text-slate-400 text-[10px] font-semibold uppercase
                          tracking-wide mb-2">
              Recent Orders
            </p>
            <div className="space-y-2">
              {[
                { name: 'Ahmad Khan',  status: 'Stitching', emoji: '🧵', color: 'text-blue-400' },
                { name: 'Bilal Bhai', status: 'Ready ✓',   emoji: '✅', color: 'text-green-400' },
                { name: 'Sara Ji',    status: 'Cutting',   emoji: '✂️', color: 'text-amber-400' },
              ].map(o => (
                <div key={o.name}
                  className="flex items-center justify-between bg-slate-800/50
                             rounded-xl px-3 py-2.5 border border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{o.emoji}</span>
                    <div>
                      <p className="text-white text-[11px] font-semibold">{o.name}</p>
                      <p className={cn('text-[9px] font-medium', o.color)}>{o.status}</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
              ))}
            </div>

            {/* Bottom nav */}
            <div className="flex justify-around mt-4 pt-3 border-t border-slate-700/50">
              {['🏠','📋','👥','💰','📊'].map((icon, i) => (
                <div key={icon}
                  className={cn(
                    'w-8 h-8 flex items-center justify-center rounded-xl text-base',
                    i === 0 ? 'bg-blue-600' : ''
                  )}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -right-4 top-12 bg-white rounded-2xl px-3 py-2
                      shadow-xl shadow-black/20 flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs font-bold text-slate-700">Live Sync</span>
      </div>
      <div className="absolute -left-6 bottom-20 bg-white rounded-2xl px-3 py-2
                      shadow-xl shadow-black/20">
        <p className="text-xs font-bold text-slate-700">📱 Works Offline</p>
      </div>
      <div className="absolute -left-6 bottom-36 bg-white rounded-2xl px-3 py-2
                      shadow-xl shadow-black/20">
        <p className="text-xs font-bold text-slate-700">🌐 PWA — Install from Browser</p>
      </div>
    </div>
  )
}

// ── FEATURES ──────────────────────────────────────────────────────
function Features() {
  return (
    <Section id="features" className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold
                          px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Sab Kuch Ek App Mein
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Jo features pehle sirf bade brands ke paas the, ab har tailor ke paas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={cn(
                'group p-6 rounded-3xl border-2 border-slate-100 hover:border-blue-200',
                'hover:shadow-xl hover:shadow-blue-50 transition-all duration-300',
                'hover:-translate-y-1'
              )}
            >
              <div className={cn(
                'w-12 h-12 rounded-2xl flex items-center justify-center mb-4',
                f.bg
              )}>
                <f.icon size={22} className={f.color} />
              </div>
              <h3 className="font-bold text-slate-800 text-base mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/features" className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
            View All Features <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </Section>
  )
}

// ── UNIQUE SELLING POINTS ────────────────────────────────────────
function USPs() {
  return (
    <Section className="py-10 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-amber-100 text-amber-700 text-xs font-bold
                          px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
            Why Mera Darzi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Sirf MeraDarzi Mein Hai
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Aisi features jo kisi aur app mein nahi milengi. Khas tor par Pakistani tailors ke liye.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {USPS.map((usp) => (
            <div
              key={usp.title}
              className="bg-white rounded-3xl p-6 border border-slate-100
                         hover:border-amber-200 hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300"
            >
              <div className="text-3xl mb-3">{usp.icon}</div>
              <h3 className="font-bold text-slate-800 text-base mb-2">{usp.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
            See Pricing <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </Section>
  )
}

// ── HOW IT WORKS ──────────────────────────────────────────────────
function HowItWorks() {
  return (
    <Section id="how-it-works"
      className="py-10 lg:py-16 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold
                          px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            4 Simple Steps
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            2 minute mein shuru karein. Koi training nahi chahiye.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%]
                          h-0.5 bg-linear-to-r from-blue-200 via-purple-200 to-green-200 z-0" />

          {STEPS.map((step, i) => (
            <div key={step.title} className="relative z-10 text-center">
              {/* Number circle */}
              <div className={cn(
                'w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5',
                'shadow-lg text-white text-xl font-black',
                `bg-linear-to-br ${step.color}`
              )}>
                {step.num}
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-100/50
                              border border-slate-100 hover:shadow-xl hover:-translate-y-1
                              transition-all duration-300">
                <step.icon size={24} className="text-slate-600 mx-auto mb-3" />
                <h3 className="font-bold text-slate-800 text-base mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/how-it-works" className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
            Detailed Guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </Section>
  )
}

// ── BENEFITS ──────────────────────────────────────────────────────
function Benefits() {
  return (
    <Section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <div className="inline-block bg-green-100 text-green-700 text-xs font-bold
                            px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              Why Mera Darzi
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900
                           leading-tight mb-6">
              Aapki Dukaan,{' '}
              <span className="text-green-600">Aapki Growth</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Sirf ek app se apni dukaan ko professional banayein.
              Customers trust karein, karigars efficient ho jayein,
              aur aap chain se ghar jayein.
            </p>

            <div className="space-y-4">
              {BENEFITS.map(b => (
                <div key={b.title}
                  className="flex items-start gap-4 p-4 rounded-2xl
                             hover:bg-slate-50 transition-colors">
                  <div className={cn(
                    'w-11 h-11 rounded-2xl flex items-center justify-center shrink-0',
                    b.bg
                  )}>
                    <b.icon size={20} className={b.color} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{b.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: comparison table */}
          <div className="bg-linear-to-br from-slate-50 to-blue-50/30 rounded-3xl p-6
                          border border-slate-200">
            <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wide mb-5">
              Mera Darzi vs Purana Tarika
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Order tracking',          old: '❌ Diary',       new: '✅ Digital + QR' },
                { label: 'Customer notification',   old: '❌ Phone call',  new: '✅ WhatsApp auto' },
                { label: 'Payment record',          old: '❌ Hisaab kitab',new: '✅ Auto calculate' },
                { label: 'Karigar management',      old: '❌ Zubaani',     new: '✅ Assign + track' },
                { label: 'Business analytics',      old: '❌ Andaaza',     new: '✅ Real reports'   },
                { label: 'Data backup',             old: '❌ Diary kho jaye', new: '✅ Cloud always' },
              ].map(row => (
                <div key={row.label}
                  className="grid grid-cols-3 gap-3 items-center py-2.5
                             border-b border-slate-200 last:border-0">
                  <p className="text-slate-600 text-xs font-medium">{row.label}</p>
                  <div className="bg-red-50 border border-red-100 rounded-xl px-2 py-1.5">
                    <p className="text-red-700 text-[10px] font-medium text-center">{row.old}</p>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-xl px-2 py-1.5">
                    <p className="text-green-700 text-[10px] font-medium text-center">{row.new}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

// ── SCREENSHOTS ──────────────────────────────────────────────────
function DesktopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden
                    hover:shadow-xl transition-shadow">
      {/* Browser chrome */}
      <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 max-w-md mx-auto">
          <div className="bg-white rounded-md px-3 py-1 text-[10px] text-slate-400
                          text-center truncate border border-slate-200">
            app.meradarzi.pk
          </div>
        </div>
      </div>
      {/* Screenshot */}
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={850}
        className="w-full h-auto"
      />
    </div>
  )
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-2.5 shadow-xl border border-slate-700
                    hover:shadow-2xl transition-shadow mx-auto w-fit">
      <div className="bg-slate-950 rounded-[2.25rem] overflow-hidden">
        {/* Status bar */}
        <div className="bg-slate-900 px-5 pt-2 pb-1 flex justify-between items-center">
          <span className="text-white text-[10px] font-semibold">9:41</span>
          <div className="w-16 h-4 bg-slate-800 rounded-full" />
          <div className="flex gap-1 items-center">
            <div className="w-1 h-1.5 rounded-sm bg-white" />
            <div className="w-1 h-2 rounded-sm bg-white" />
            <div className="w-1 h-3 rounded-sm bg-white" />
          </div>
        </div>
        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          className="h-auto w-[260px] sm:w-[280px]"
        />
      </div>
    </div>
  )
}

function Screenshots() {
  return (
    <Section className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold
                          px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
            Screenshots
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Ek Nazar Mein Dekhein
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Desktop par ho ya mobile — experience same, seamless
          </p>
        </div>

        {/* Desktop screenshots */}
        <div className="mb-14">
          <h3 className="text-center font-bold text-slate-800 text-xl mb-8">
            <span className="inline-block align-middle mr-1.5">🖥️</span>
            <span className="inline-block align-middle">Desktop View</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            <DesktopMockup src="/screenshots/desktop-dashboard.avif" alt="Mera Darzi Dashboard - Order Management" />
            <DesktopMockup src="/screenshots/desktop-orders.avif" alt="Mera Darzi Orders - Tracking Orders" />
            <DesktopMockup src="/screenshots/desktop-customers.avif" alt="Mera Darzi Customer Directory" />
            <DesktopMockup src="/screenshots/desktop-reports.avif" alt="Mera Darzi Reports - Analytics & Insights" />
          </div>
        </div>

        {/* Mobile screenshots */}
        <div>
          <h3 className="text-center font-bold text-slate-800 text-xl mb-2">
            <span className="inline-block align-middle mr-1.5">📱</span>
            <span className="inline-block align-middle">Mobile View — PWA</span>
          </h3>
          <p className="text-slate-500 text-sm text-center mb-8 max-w-xl mx-auto">
            Browser se directly mobile par install karein. Play Store ki zaroorat nahi.
            Android aur iPhone dono pe perfectly chalta hai.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <PhoneMockup src="/screenshots/mobile-dashboard.avif" alt="Mera Darzi Mobile Dashboard" />
            <PhoneMockup src="/screenshots/mobile-orders.avif" alt="Mera Darzi Mobile Orders" />
            <PhoneMockup src="/screenshots/mobile-customers.avif" alt="Mera Darzi Mobile Customers" />
            <PhoneMockup src="/screenshots/mobile-reports.avif" alt="Mera Darzi Mobile Reports" />
          </div>
        </div>
      </div>
    </Section>
  )
}

// ── TESTIMONIALS ──────────────────────────────────────────────────
function Testimonials() {
  return (
    <Section className="py-10 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block bg-amber-100 text-amber-700 text-xs font-bold
                          px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
            Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Darzi Kya Kehte Hain
          </h2>
          <p className="text-slate-500 text-lg">
            Pakistan ke 500+ tailors ka experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={cn(
                'bg-white rounded-3xl p-6 shadow-sm border border-slate-100',
                'hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
                i === 1 && 'lg:mt-6',  // stagger effect
                i === 3 && 'lg:mt-4',
              )}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center',
                  'text-white font-bold text-sm shrink-0',
                  t.color
                )}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-[10px] leading-tight">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ── CTA BANNER ────────────────────────────────────────────────────
function CTABanner() {
  return (
    <Section className="py-20 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-6xl mb-6">✂️</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
          Aaj Hi Shuru Karein
        </h2>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          🌱 Free plan hamesha free. ⭐ Professional plan 14 din free trial.
          Koi card nahi chahiye. Cancel kab bhi karein.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://app.meradarzi.pk/"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 bg-white text-blue-700
                       font-bold px-10 py-4 rounded-2xl text-base shadow-2xl
                       hover:bg-blue-50 transition-all active:scale-95"
          >
            Free Registration — 30 Orders Free
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 border-2 border-white/30
                       text-white font-semibold px-10 py-4 rounded-2xl text-base
                       hover:bg-white/10 transition-all"
          >
            VIP Demo Chahiye?
          </Link>
        </div>
        <p className="text-slate-500 text-sm mt-6">
          Questions? WhatsApp:{' '}
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_ADMIN_WHATSAPP_LINK ?? '923135634667'}`}
            target="_blank" rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {process.env.NEXT_PUBLIC_ADMIN_WHATSAPP ?? '03135634667'}
          </a>
        </p>
      </div>
    </Section>
  )
}

// ── CONTACT SECTION ───────────────────────────────────────────────
function ContactSection() {
  return (
    <Section id="contact" className="py-10 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Info */}
          <div>
            <div className="inline-block bg-green-100 text-green-700 text-xs font-bold
                            px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5">
              Koi Bhi Sawal Poochein
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Hum yahan hain. WhatsApp, email, ya form — jaise aasaan lage.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: process.env.NEXT_PUBLIC_ADMIN_WHATSAPP ?? '03135634667',
                  href:  `https://wa.me/${process.env.NEXT_PUBLIC_ADMIN_WHATSAPP_LINK ?? '923135634667'}`,
                  color: 'bg-green-100 text-green-600',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'support@meradarzi.pk',
                  href:  'mailto:darzihub9@gmail.com',
                  color: 'bg-blue-100 text-blue-600',
                },
                {
                  icon: Globe,
                  label: 'Website',
                  value: 'meradarzi.pk',
                  href:  'https://www.meradarzi.pk/',
                  color: 'bg-purple-100 text-purple-600',
                },
              ].map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100
                             hover:border-slate-300 hover:shadow-sm transition-all group">
                  <div className={cn('w-11 h-11 rounded-2xl flex items-center justify-center', c.color)}>
                    <c.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{c.label}</p>
                    <p className="font-semibold text-slate-800 group-hover:text-blue-600
                                  transition-colors text-sm">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 rounded-3xl p-7 border border-slate-200">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  )
}

// ─────────────────────────────────────────────────────────────────
// MAIN PAGE EXPORT
// ─────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="scroll-smooth">
      <SoftwareAppSchema />
      <ReviewSchema />
      <HowToSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
        ]}
      />
      <WebPageSchema
        title="Mera Darzi - Best Tailor Management Software in Pakistan | Free Tailor App"
        description="Pakistan ka tailor management app. Orders, customers, payments aur karigar — sab ek app mein. Urdu/English. Free start. PWA — mobile par bhi chale."
        datePublished="2026-01-01"
        dateModified="2026-06-11"
      />
      <Hero />
      <Features />
      <USPs />
      <HowItWorks />
      <StatsSection />
      <Benefits />
      <Testimonials />
      <Screenshots />
      <Section id="pricing" className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCards />
        </div>
      </Section>
      <Section id="faq" className="py-10 lg:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block bg-slate-200 text-slate-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Aksar Pooche Jaane Wale Sawalat
            </h2>
          </div>
          <FAQ faqs={FAQS} />
        </div>
      </Section>
      <CTABanner />
      <ContactSection />
    </div>
  )
}