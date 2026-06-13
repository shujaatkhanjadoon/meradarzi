import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Section } from '@/components/landing/InteractiveComponents'
import { BreadcrumbSchema, WebPageSchema, SoftwareAppSchema, ReviewSchema } from '@/components/seo/JsonLd'
import Image from 'next/image'
import { FEATURES, USPS, STEPS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Mera Darzi ke saare features ek nazar mein — Digital Order Management, Customer Directory, Payments, Offline Mode, Reports aur bhi bohat kuch.',
  keywords: ['tailor management features', 'darzi app features Pakistan', 'tailor shop digital features', 'tailor software tools'],
  openGraph: {
    title: 'Features - Mera Darzi Tailor Management Software Pakistan',
    description: 'Sab kuch ek app mein. Orders, customers, payments, karigar — Mera Darzi ke saare features janiye.',
    url: 'https://www.meradarzi.pk/features',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-images/MeraDarzi.jpg', width: 1200, height: 630, alt: 'Mera Darzi Features' }],
    siteName: 'Mera Darzi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features - Mera Darzi Tailor Management Software',
    description: 'Sab kuch ek app mein. Mera Darzi ke saare features janiye.',
    images: ['/og-images/MeraDarzi.jpg'],
  },
  alternates: {
    canonical: 'https://www.meradarzi.pk/features',
  },
}

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "Features", url: "https://www.meradarzi.pk/features" },
        ]}
      />
      <WebPageSchema
        title="Features - Mera Darzi Tailor Management Software"
        description="Sab kuch ek app mein. Orders, customers, payments, karigar — Mera Darzi ke saare features janiye."
        datePublished="2026-01-15"
        dateModified="2026-06-11"
      />
      <SoftwareAppSchema />
      <ReviewSchema />

      {/* Hero */}
      <div className="bg-linear-to-br from-slate-900 to-blue-950 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-xl flex items-center justify-center mx-auto mb-6">
            <Image src="/icon.svg" alt="Mera Darzi" width={64} height={64} priority fetchPriority="high" sizes="64px" />
          </div>
          <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            Features
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Sab Kuch Ek App Mein
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto leading-relaxed">
            Jo features pehle sirf bade brands ke paas the, ab har tailor ke paas — desktop ho ya mobile.
          </p>
          <p className="text-sm text-blue-300 mt-4">
            <Link href="/guide/tailor-management-pakistan" className="underline hover:text-blue-200">
              Complete Guide Padhein →
            </Link>
          </p>
        </div>
      </div>

      {/* All Features Grid */}
      <Section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Har Tool Jo Tailor Ko Chahiye
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              12 powerful features — ek se ek. Aur har feature specifically Pakistani tailors ke liye bana hai.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className={cn(
                  'group p-6 rounded-3xl border-2 border-slate-100 hover:border-blue-200',
                  'hover:shadow-xl hover:shadow-blue-50 transition-all duration-300',
                  'hover:-translate-y-1'
                )}
              >
                <div className={cn('w-12 h-12 rounded-2xl flex items-center justify-center mb-4', f.bg)}>
                  <f.icon size={22} className={f.color} />
                </div>
                <h3 className="font-bold text-slate-800 text-base mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* USPs */}
      <Section className="py-10 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
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
                className="bg-white rounded-3xl p-6 border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{usp.icon}</div>
                <h3 className="font-bold text-slate-800 text-base mb-2">{usp.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="py-10 lg:py-16 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
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
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-blue-200 via-purple-200 to-green-200 z-0" />
            {STEPS.map((step) => (
              <div key={step.title} className="relative z-10 text-center">
                <div className={cn(
                  'w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5',
                  'shadow-lg text-white text-xl font-black',
                  `bg-linear-to-br ${step.color}`
                )}>
                  {step.num}
                </div>
                <div className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-100/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <step.icon size={24} className="text-slate-600 mx-auto mb-3" />
                  <h3 className="font-bold text-slate-800 text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-center px-4">
        <h2 className="text-3xl font-black text-white mb-4">
          Tayyar Hain? Shuru Karein
        </h2>
        <p className="text-blue-200 mb-8 max-w-md mx-auto">
          🌱 Free plan hamesha free — 30 orders/month. Professional 14 din free trial. Koi card nahi chahiye.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="https://app.meradarzi.pk/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-10 py-4 rounded-2xl hover:bg-blue-50 transition-all"
          >
            Free Account Banayein <ArrowRight size={18} />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-blue-500/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 hover:bg-blue-500/30 transition-all"
          >
            Compare Plans
          </Link>
        </div>
      </section>
    </div>
  )
}
