import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Smartphone, Package, Users, CheckCircle2, ArrowRight,
  CreditCard, MessageCircle, Globe, BarChart2, Play, Shield, Zap,
} from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Section } from '@/components/landing/InteractiveComponents'
import { BreadcrumbSchema, WebPageSchema, SoftwareAppSchema, HowToSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Mera Darzi use karna kitna aasan hai? 4 simple steps mein seekhein — free account se lekar delivery tak. Koi training nahi chahiye. 2 minute mein shuru karein.',
  keywords: ['how to use Mera Darzi', 'tailor app guide Pakistan', 'darzi app kaise use karein', 'tailor management tutorial', 'Mera Darzi steps', 'Mera Darzi setup guide', 'tailor app registration Pakistan', 'tailor software demo', 'Mera Darzi kaise use karein Urdu', 'tailor order management guide', 'tailor app features tutorial', 'Mera Darzi step by step guide'],
  openGraph: {
    title: 'How It Works - Mera Darzi Tailor Management Software',
    description: '2 minute mein shuru karein. 4 simple steps — free account se lekar customer delivery tak. Koi training nahi chahiye. Step-by-step guide in Urdu/English.',
    url: 'https://www.meradarzi.pk/how-it-works',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-images/MeraDarzi.jpg', width: 1200, height: 630, alt: 'How Mera Darzi Works - Step by Step Guide' }],
    siteName: 'Mera Darzi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works - Mera Darzi Tailor Management Software',
    description: '2 minute mein shuru karein. 4 simple steps — free account se delivery tak. Step-by-step guide.',
    images: ['/og-images/MeraDarzi.jpg'],
  },
  alternates: {
    canonical: 'https://www.meradarzi.pk/how-it-works',
  },
}

const STEPS_DETAILED = [
  {
    num: '01',
    icon: Smartphone,
    title: 'Free Account Banayein',
    shortDesc: 'Phone number daalein, dukaan ka naam likhein. 2 minute mein ready.',
    color: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
    lightBorder: 'border-blue-100',
    badgeColor: 'bg-blue-100 text-blue-700',
    details: [
      'Apna mobile number enter karein',
      'OTP verify karein',
      'Dukaan ka naam aur shop type select karein',
      'Apna 6-digit PIN set karein',
      'Bas! Dashboard ready hai',
    ],
    benefit: 'Koi credit card nahi, koi setup fee nahi, koi commitment nahi. Bilkul free start karein.',
    tips: 'Apna mobile number carefully daalein — yehi aapki login ID hai. OTP ke liye network stable rakhain.',
  },
  {
    num: '02',
    icon: Package,
    title: 'Orders Add Karein',
    shortDesc: 'Gahak ki nap, kapra details, delivery date, photos — sab ek form mein fill karein.',
    color: 'from-purple-500 to-purple-600',
    lightBg: 'bg-purple-50',
    lightBorder: 'border-purple-100',
    badgeColor: 'bg-purple-100 text-purple-700',
    details: [
      'Customer ka naam aur phone number daalein',
      'Garment type choose karein (sherwani, kurti, shalwar, etc.)',
      'Specific measurements fill karein (har garment ke alag fields)',
      'Fabric photo ya design reference attach karein',
      'Delivery date set karein — app auto reminder dega',
    ],
    benefit: 'Paper slip kabhi gum nahi hogi. Har order ka pura record — measurements, photos, delivery date — sab digitally safe.',
    tips: 'Customer ka phone number save karte hi woh aapki directory mein add ho jayega. Next order par auto-suggest aayega.',
  },
  {
    num: '03',
    icon: Users,
    title: 'Karigar Ko Assign Karein',
    shortDesc: 'Kaunsa karigar kya karega? Assign karein aur progress track karein.',
    color: 'from-amber-500 to-amber-600',
    lightBg: 'bg-amber-50',
    lightBorder: 'border-amber-100',
    badgeColor: 'bg-amber-100 text-amber-700',
    details: [
      'Apne karigars ki list banayein',
      'Har order kisi ek karigar ko assign karein',
      'App dikhata hai ke kaunse karigar ke paas kitne orders hain',
      'Workload balance karein — sab ko equal distribute karein',
      'Progress track karein: Cutting → Stitching → Ready',
    ],
    benefit: 'Koi order nahi bhulega. Koi karigar overload nahi hoga. Sab ko pata hai kaun kya kar raha hai.',
    tips: 'Agar multiple karigar hain to har ek ko specific garment type assign karein — ek ko sherwani, doosre ko shalwar — specialization se quality improve hoti hai.',
  },
  {
    num: '04',
    icon: CheckCircle2,
    title: 'Delivery & Customer Tracking',
    shortDesc: 'Customer ko QR/link dein. Woh khud status check karein. Payment ho, order complete.',
    color: 'from-green-500 to-green-600',
    lightBg: 'bg-green-50',
    lightBorder: 'border-green-100',
    badgeColor: 'bg-green-100 text-green-700',
    details: [
      'Order ready mark karein',
      'Customer ko WhatsApp notification auto chala jayega',
      'Customer QR scan kare ya tracking link khole',
      'Bina login dekhe real-time status check kare',
      'Payment record karein — Cash, QR, Easypaisa, JazzCash',
    ],
    benefit: 'Aapko phone call nahi karna padta. Customer khud check karta hai. Payment track hoti hai. Koi confusion nahi.',
    tips: 'QR code print karke dukaan mein laga dein. Har order ke liye alag tracking link generate hota hai — customer ko delivery date bhi dikhti hai.',
  },
]

const BENEFITS = [
  {
    icon: Zap,
    title: 'Koi Training Nahi Chahiye',
    desc: 'App itna simple hai ke aap bina kisi guide ke turant use kar sakte hain. Urdu aur English dono mein.',
    color: 'text-amber-600', bg: 'bg-amber-50',
  },
  {
    icon: Shield,
    title: 'Offline Bhi Kaam Kare',
    desc: 'Internet nahi hai to koi baat nahi. Sab data phone par save hota hai, internet aate hi sync.',
    color: 'text-teal-600', bg: 'bg-teal-50',
  },
  {
    icon: Smartphone,
    title: 'Har Phone Par Chale',
    desc: 'PWA technology — browser se directly install karein. Purane android ho ya naya iPhone, sab par perfectly chalta hai.',
    color: 'text-blue-600', bg: 'bg-blue-50',
  },
  {
    icon: Globe,
    title: 'PIN Based Security',
    desc: 'Har login ke liye 6-digit PIN. Aapka data sirf aapka hai. Koi aur access nahi kar sakta.',
    color: 'text-indigo-600', bg: 'bg-indigo-50',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Auto-Notifications',
    desc: 'Order ready hone par customer ko automatic WhatsApp message. Alag se kuch karna nahi padta.',
    color: 'text-green-600', bg: 'bg-green-50',
  },
  {
    icon: BarChart2,
    title: 'Real Reports & Analytics',
    desc: 'Monthly income, popular garments, best customers — sab ek click mein. Data se business grow karein.',
    color: 'text-purple-600', bg: 'bg-purple-50',
  },
]

const USE_CASES = [
  {
    emoji: '✂️',
    title: 'Solo Tailor',
    desc: 'Jo akela kaam karta hai — orders, measurements, payments sab khud manage kare. Free plan hi kaafi hai.',
    steps: 'Step 1 → 2 → 4',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    emoji: '👥',
    title: 'Multi-Karigar Shop',
    desc: '3-5 karigar hain to Professional plan lo. Har karigar ko alag assign karo, workload balance karo.',
    steps: 'Step 1 → 2 → 3 → 4',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
  },
  {
    emoji: '👔',
    title: 'Boutique / Designer',
    desc: 'Multiple garments, custom designs, photos — Business plan lo. Sab professionally manage karo.',
    steps: 'Step 1 → 2 → 3 → 4',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
  },
]

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "How It Works", url: "https://www.meradarzi.pk/how-it-works" },
        ]}
      />
      <WebPageSchema
        title="How It Works - Mera Darzi Tailor Management Software"
        description="2 minute mein shuru karein. 4 simple steps — free account se lekar delivery tak. Koi training nahi chahiye. Step-by-step guide in Urdu/English."
        datePublished="2026-02-10"
        dateModified="2026-06-11"
      />
      <SoftwareAppSchema />
      <HowToSchema />

      {/* Hero */}
      <section className="relative bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 py-28 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mx-auto mb-6">
            <Image src="/icon.svg" alt="Mera Darzi" width={64} height={64} priority fetchPriority="high" sizes="64px" />
          </div>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-5 py-2 rounded-full mb-6">
            <Play size={14} /> How It Works
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
            Shuru Karein{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400">
              4 Simple Steps
            </span>
          </h1>
          <p className="text-blue-200/80 text-xl max-w-2xl mx-auto leading-relaxed">
            2 minute mein shuru karein. Koi training nahi chahiye.
            Sirf teen cheezein chahiye: ek phone, apna mobile number, aur aapki dukaan ka naam.
          </p>

          {/* Step indicators */}
          <div className="flex items-center justify-center gap-4 mt-12">
            {['Account', 'Order', 'Assign', 'Deliver'].map((label, i) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="text-white/60 text-sm hidden sm:inline">{label}</span>
                </div>
                {i < 3 && <div className="w-6 h-0.5 bg-white/10 hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Detailed Guide
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Neche diye gaye steps follow karein aur 2 minute mein Mera Darzi par active ho jayein.
              Har step ke saath tips aur benefits bhi diye gaye hain.
            </p>
          </div>

          <div className="space-y-12">
            {STEPS_DETAILED.map((step, i) => (
              <div key={step.title} className="relative">
                <div className={cn(
                  'rounded-3xl p-8 lg:p-10 border-2 transition-all duration-500',
                  step.lightBg, step.lightBorder,
                  'hover:shadow-2xl hover:-translate-y-1'
                )}>
                  <div className="grid lg:grid-cols-5 gap-8 items-start">
                    {/* Step header */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={cn(
                          'text-xs font-bold px-3 py-1 rounded-full',
                          step.badgeColor
                        )}>
                          Step {step.num} of 4
                        </span>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className={cn(
                          'w-16 h-16 rounded-2xl flex items-center justify-center shrink-0',
                          'shadow-lg text-white text-2xl font-black',
                          `bg-linear-to-br ${step.color}`
                        )}>
                          {step.num}
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-slate-900 mb-2">{step.title}</h3>
                          <p className="text-slate-500 leading-relaxed">{step.shortDesc}</p>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-3">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            What To Do
                          </h3>
                          <ul className="space-y-3">
                            {step.details.map((d) => (
                              <li key={d} className="flex items-start gap-3 text-slate-700 text-sm">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                                  <CheckCircle2 size={12} className="text-green-600" />
                                </div>
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-600 text-xs font-bold">!</span>
                              </div>
                              <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider">Benefit</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {step.benefit}
                            </p>
                          </div>
                          <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center">
                                <span className="text-amber-600 text-xs font-bold">💡</span>
                              </div>
                              <h3 className="text-xs font-bold text-amber-700 uppercase tracking-wider">Pro Tip</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                              {step.tips}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-10 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              <Users size={12} /> Use Cases
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Aap Kaun Se <span className="text-green-600">Tailor</span> Hain?
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Har tarah ke tailor ke liye alag approach. Apni category choose karein aur recommended steps dekhein.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className={cn(
                'group bg-white rounded-3xl p-8 border-2 transition-all duration-300',
                'hover:-translate-y-2 hover:shadow-2xl',
                'border-slate-100 hover:border-transparent'
              )}>
                <div className={cn(
                  'w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg',
                  uc.bg
                )}>
                  {uc.emoji}
                </div>
                <h3 className="font-black text-slate-900 text-xl mb-3">{uc.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{uc.desc}</p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-400 mb-1">Recommended path</p>
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      'text-xs font-bold px-3 py-1.5 rounded-full',
                      uc.bg, 'text-slate-700'
                    )}>
                      {uc.steps}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              <Zap size={12} /> Benefits
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Kyun Mera Darzi <span className="text-purple-600">Choose</span> Karein?
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Sirf features nahi, balki real benefits jo aapki daily life aasan kar dein.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className={cn(
                'group rounded-2xl p-6 border-2 transition-all duration-300',
                'hover:-translate-y-1 hover:shadow-xl',
                'border-slate-100 hover:border-purple-200',
                'bg-white hover:bg-gradient-to-br hover:from-white hover:to-purple-50'
              )}>
                <div className={cn(
                  'w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm',
                  b.bg, b.color,
                  'group-hover:shadow-md transition-shadow'
                )}>
                  <b.icon size={22} />
                </div>
                <h3 className="font-bold text-slate-800 text-base mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready Within 2 Minutes
          </h2>
          <p className="text-blue-200/80 mb-10 max-w-lg mx-auto text-lg">
            Bus teen cheezein chahiye: apna phone, mobile number, aur dukaan ka naam.
            Koi credit card nahi, koi document nahi, koi complex setup nahi.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              { icon: '📱', label: 'Apna Phone' },
              { icon: '📞', label: 'Mobile Number' },
              { icon: '🏪', label: 'Dukaan Ka Naam' },
            ].map(item => (
              <div key={item.label} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-3 text-3xl group-hover:bg-white/20 group-hover:scale-110 transition-all">
                  {item.icon}
                </div>
                <p className="text-white/80 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
          <Link
            href="https://app.meradarzi.pk/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-10 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-xl active:scale-95 text-base"
          >
            Free Account Banayein <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
          Koi Sawaal Hai?
        </h2>
        <p className="text-slate-500 mb-10 max-w-md mx-auto text-lg">
          Agar kuch samajh nahi aaya to humare FAQ page par jayein ya humein directly message karein.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-4 rounded-2xl hover:bg-slate-700 transition-all active:scale-95"
          >
            FAQ Dekhein
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-700 transition-all active:scale-95"
          >
            Humse Baat Karein
          </Link>
        </div>
      </section>
    </div>
  )
}
