// src/components/landing/InteractiveComponents.tsx
'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import Link from 'next/link'
import { CheckCircle2, ChevronDown, ChevronUp, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ContactForm } from '@/components/ContactForm'
import { FAQSchema } from '@/components/seo/JsonLd'

// ── useInView Hook ──────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

// ── Section Wrapper ──────────────────────────────────────────────
export function Section({
  id, children, className,
}: {
  id?: string; children: ReactNode; className?: string
}) {
  const { ref, inView } = useInView()
  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
      style={!inView ? { contentVisibility: 'auto', containIntrinsicSize: '500px' } as React.CSSProperties : undefined}
    >
      {children}
    </section>
  )
}

// ── Animated Counter ─────────────────────────────────────────────
export function AnimatedCounter({
  end, suffix = '', prefix = '', duration = 2000, decimals = 0
}: {
  end: number; suffix?: string; prefix?: string; duration?: number; decimals?: number
}) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (!inView) return
    const target = Math.round(end * Math.pow(10, decimals))
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end, duration, decimals])

  const display = decimals > 0
    ? (count / Math.pow(10, decimals)).toFixed(decimals)
    : count.toLocaleString()

  return (
    <span ref={ref}>{prefix}{display}{suffix}</span>
  )
}

// ── Pricing ──────────────────────────────────────────────────────
interface Plan {
  name: string
  icon: string
  priceMonthly: string
  priceYearly: string
  priceLabel: string
  badge: string | null
  color: string
  badgeStyle: string
  features: string[]
  cta: string
  ctaStyle: string
  badgeTag?: string
}

const MONTHLY_PLANS: Plan[] = [
  {
    name: "Starter", icon: "🌱",
    priceMonthly: "Free", priceYearly: "Free",
    priceLabel: "Hamesha ke liye",
    badge: null, badgeStyle: "",
    color: "border-slate-200",
    features: ["30 orders per month", "50 customers", "Measurements + payments", "Cloud database", "WhatsApp manual links"],
    cta: "Free Shuru Karein", ctaStyle: "bg-slate-900 text-white hover:bg-slate-700",
  },
  {
    name: "Professional", icon: "⭐",
    priceMonthly: "Rs. 999", priceYearly: "Rs. 9,999",
    priceLabel: "per month",
    badge: "Most Popular", badgeStyle: "bg-blue-600",
    color: "border-blue-500 ring-2 ring-blue-500",
    features: ["Unlimited orders + customers", "Up to 3 karigar accounts", "Order tracking URL + QR code", "Photo attachments stored on this device", "Reports & analytics", "WhatsApp auto-notifications"],
    cta: "Professional Shuru Karein", ctaStyle: "bg-blue-600 text-white hover:bg-blue-700",
    badgeTag: "⭐ Most Popular",
  },
  {
    name: "Business", icon: "👑",
    priceMonthly: "Rs. 2,499", priceYearly: "Rs. 25,000",
    priceLabel: "per month",
    badge: null, badgeStyle: "",
    color: "border-purple-300",
    features: ["Everything in Professional", "Unlimited karigar accounts", "10GB photo storage", "Karigar salary reports", "Priority WhatsApp support", "Custom shop branding", "Early access to features"],
    cta: "Business Shuru Karein", ctaStyle: "bg-purple-600 text-white hover:bg-purple-700",
  },
]

const YEARLY_PLANS: Plan[] = [
  {
    name: "Starter", icon: "🌱",
    priceMonthly: "Free", priceYearly: "Free",
    priceLabel: "Hamesha ke liye",
    badge: null, badgeStyle: "",
    color: "border-slate-200",
    features: ["30 orders per month", "50 customers", "Measurements + payments", "Cloud database", "WhatsApp manual links"],
    cta: "Free Shuru Karein", ctaStyle: "bg-slate-900 text-white hover:bg-slate-700",
  },
  {
    name: "Professional", icon: "⭐",
    priceMonthly: "Rs. 999", priceYearly: "Rs. 9,999",
    priceLabel: "per year",
    badge: "Best Value", badgeStyle: "bg-green-600",
    color: "border-blue-500 ring-2 ring-blue-500",
    features: ["Unlimited orders + customers", "Up to 3 karigar accounts", "Order tracking URL + QR code", "Photo attachments stored on this device", "Reports & analytics", "WhatsApp auto-notifications"],
    cta: "Professional Shuru Karein", ctaStyle: "bg-blue-600 text-white hover:bg-blue-700",
    badgeTag: "🏆 Best Value",
  },
  {
    name: "Business", icon: "👑",
    priceMonthly: "Rs. 2,499", priceYearly: "Rs. 25,000",
    priceLabel: "per year",
    badge: null, badgeStyle: "",
    color: "border-purple-300",
    features: ["Everything in Professional", "Unlimited karigar accounts", "10GB photo storage", "Karigar salary reports", "Priority WhatsApp support", "Custom shop branding", "Early access to features"],
    cta: "Business Shuru Karein", ctaStyle: "bg-purple-600 text-white hover:bg-purple-700",
    badgeTag: "🏆 Best Value",
  },
]

export function PricingCards() {
  const [annual, setAnnual] = useState(false)
  const plans = annual ? YEARLY_PLANS : MONTHLY_PLANS

  return (
    <div>
      <div className="text-center mb-14">
        <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
          Pricing
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
          Simple, Clear Pricing
        </h2>
        <p className="text-slate-500 text-lg mb-7">
          Har budget ke liye plan. Free se shuru, grow karte waqt upgrade karein.
        </p>

        <div className="inline-flex items-center gap-3 bg-slate-100 p-1 rounded-full" role="radiogroup" aria-label="Billing period">
          <button
            onClick={() => setAnnual(false)}
            role="radio"
            aria-checked={!annual}
            aria-pressed={!annual}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-semibold transition-all',
              !annual ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500'
            )}
          >
            🌱 Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            role="radio"
            aria-checked={annual}
            aria-pressed={annual}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-semibold transition-all',
              annual ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500'
            )}
          >
            👑 Yearly
            <span className="ml-1.5 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              Save 17%
            </span>
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => {
          const isFree = plan.priceMonthly === "Free"
          const displayPrice = isFree ? "Free" : (annual ? plan.priceYearly : plan.priceMonthly)
          const savings = !isFree && annual ? (
            plan.name === "Professional"
              ? "Rs. 1,989 bachat! (17% save)"
              : "Rs. 4,988 bachat! (17% save)"
          ) : null

          return (
            <div
              key={`${plan.name}-${annual ? "yearly" : "monthly"}`}
              className={cn(
                'rounded-3xl p-7 border-2 relative transition-all hover:-translate-y-1',
                plan.color,
                plan.badge ? 'shadow-2xl shadow-blue-100' : 'shadow-sm'
              )}
            >
              {plan.badge && (
                <div className={cn(
                  'absolute -top-3 left-1/2 -translate-x-1/2',
                  'text-white text-[10px] font-black px-4 py-1.5 rounded-full flex items-center gap-1',
                  plan.badgeStyle
                )}>
                  {plan.badge}
                </div>
              )}

              <h3 className="font-black text-slate-900 text-xl mb-1">
                {plan.icon} {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-black text-slate-900">{displayPrice}</span>
                {!isFree && <span className="text-slate-400 text-sm">/{plan.priceLabel}</span>}
                {isFree && <span className="text-slate-400 text-sm">{plan.priceLabel}</span>}
              </div>

              {savings && <p className="text-green-600 text-xs font-semibold mb-5">{savings}</p>}
              {!savings && !isFree && <div className="mb-5" />}

              <ul className="space-y-3 mb-7">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-slate-600 text-sm">
                    <CheckCircle2 size={15} className="text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="space-y-2">
                <Link
                  href="https://app.meradarzi.pk/"
                  target="_blank"
                  className={cn(
                    'block w-full text-center font-bold py-3.5 rounded-2xl text-sm transition-all active:scale-95',
                    plan.ctaStyle
                  )}
                >
                  {plan.cta}
                </Link>
                {!isFree && (
                  <p className="text-center text-[10px] text-slate-400">
                    {annual
                      ? `Billed annually — ${plan.name === "Professional" ? "Rs. 9,999/yr" : "Rs. 25,000/yr"}`
                      : plan.name === "Professional" ? "⭐ Most Popular" : plan.badgeTag ?? ""
                    }
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-center text-slate-400 text-sm mt-8">
        QR scan, Raast ID, Easypaisa, JazzCash — sab available ⚡
      </p>
    </div>
  )
}

// ── FAQ ──────────────────────────────────────────────────────────
interface FAQItem { q: string; a: string }

export function FAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      <FAQSchema faqs={faqs} />
      {faqs.map((faq, i) => {
        const isOpen = openIdx === i
        return (
          <div
            key={i}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all hover:border-blue-200"
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-semibold text-slate-800 text-sm pr-4">{faq.q}</span>
              {isOpen
                ? <ChevronUp size={18} className="text-blue-600 shrink-0" />
                : <ChevronDown size={18} className="text-slate-400 shrink-0" />
              }
            </button>
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className={cn(isOpen ? 'block' : 'hidden')}
            >
              <div className="px-5 pb-4 border-t border-slate-100">
                <p className="text-slate-500 text-sm leading-relaxed pt-3">{faq.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Stats ────────────────────────────────────────────────────────
export function StatsSection() {
  const stats = [
    { label: 'Registered Shops',  value: 500,   suffix: '+',  icon: '✂️' },
    { label: 'Orders Managed',    value: 25000, suffix: '+',  icon: '📦' },
    { label: 'Happy Karigars',    value: 1500,  suffix: '+',  icon: '👥' },
    { label: 'Customer Rating',   value: 4.8,   suffix: '/5', icon: '⭐' },
  ]

  return (
    <Section className="py-20 lg:py-24 bg-linear-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Pakistan Bhar Mein Tailors Ka Bharosa
          </h2>
          <p className="text-blue-200 text-lg">
            Har roz naye darzi Mera Darzi ke saath join ho rahe hain
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(stat => (
            <div key={stat.label}
              className="bg-white/10 backdrop-blur rounded-3xl p-6 text-center border border-white/20 hover:bg-white/15 transition-colors">
              <div className="text-2xl mb-3">{stat.icon}</div>
              <p className="text-4xl font-black text-white mb-1">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 === 0 ? 0 : 1}
                  duration={stat.value < 10 ? 1500 : 2000}
                />
              </p>
              <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
