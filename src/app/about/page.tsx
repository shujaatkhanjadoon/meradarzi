import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Heart, Shield, Zap, Users, ArrowRight, Target, Eye,
  TrendingUp, Award, Clock, MessageCircle, Lightbulb, Sparkles,
} from 'lucide-react'
import Image from 'next/image'
import { BreadcrumbSchema, WebPageSchema, SoftwareAppSchema } from '@/components/seo/JsonLd'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Mera Darzi ke baare mein — Pakistan ka pehla tailor management app. Humari kahani, mission, values aur team janiye. 500+ tailors ka bharosa.',
  keywords: ['about Mera Darzi', 'tailor management team Pakistan', 'Pakistan darzi app', 'boutique software company', 'Mera Darzi mission vision', 'tailor app story', 'Mera Darzi values', 'tailor management founders Pakistan', 'Mera Darzi team Lahore', 'tailor shop digital solution Pakistan'],
  openGraph: {
    title: 'About Mera Darzi - Pakistan Tailor Management Software',
    description: 'Learn about Mera Darzi — Pakistan ka pehla offline-first tailor management app ka mission, values aur kahani. 500+ tailors ka bharosa.',
    url: 'https://www.meradarzi.pk/about',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-images/MeraDarzi.jpg', width: 1200, height: 630, alt: 'About Mera Darzi - Tailor Management Software Pakistan' }],
    siteName: 'Mera Darzi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mera Darzi - Tailor Management Software Pakistan',
    description: 'Learn about Mera Darzi — Pakistan ka pehla offline-first tailor management app. 500+ tailors ka bharosa.',
    images: ['/og-images/MeraDarzi.jpg'],
  },
  alternates: {
    canonical: 'https://www.meradarzi.pk/about',
  },
}

const VALUES = [
  { icon: Heart,  title: 'User-First Design', desc: 'Har feature simplicity ke liye bana hai. Jo complicated hai, woh nahi hai.', color: 'from-red-500 to-rose-600', bg: 'bg-red-50', border: 'border-red-100' },
  { icon: Shield, title: 'Security First', desc: 'Aapka data aapka hai. Encrypted store, kisi ke saath share nahi.', color: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: Zap,    title: 'Lightning Fast', desc: 'Purane phones par bhi fast chalta hai. Slow apps se chhutkara.', color: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', border: 'border-amber-100' },
  { icon: Users,  title: 'For Everyone', desc: 'Solo tailor ho ya 10 karigar ki dukaan — sab ke liye same app.', color: 'from-green-500 to-emerald-600', bg: 'bg-green-50', border: 'border-green-100' },
  { icon: MessageCircle, title: 'Local First', desc: 'Urdu, Easypaisa, offline mode — Pakistan ke hisaab se bana.', color: 'from-purple-500 to-violet-600', bg: 'bg-purple-50', border: 'border-purple-100' },
  { icon: Award,  title: 'Quality Obsessed', desc: 'Har update pehle test, phir launch. Aapka trust humari priority.', color: 'from-rose-500 to-pink-600', bg: 'bg-rose-50', border: 'border-rose-100' },
  { icon: Lightbulb, title: 'Innovation Driven', desc: 'Naye ideas ko quickly test karte hain. Jo kaam kare, woh ship.', color: 'from-cyan-500 to-teal-600', bg: 'bg-cyan-50', border: 'border-cyan-100' },
  { icon: Clock,    title: 'Always Improving', desc: 'Har hafte naye features aur fixes. Kabhi satisfied nahi.', color: 'from-sky-500 to-blue-600', bg: 'bg-sky-50', border: 'border-sky-100' },
]

const MILESTONES = [
  { year: '2024 - Q1', title: 'Vision Conceived', desc: 'Pakistan ke tailors ki problems samjhi. Diary aur hisaab kitab ko digital karne ka faisla kiya.', stat: '0 → 1' },
  { year: '2024 - Q2', title: 'MVP Launch', desc: 'Pehla version launch — basic order management aur payments tracking. 10 tailors ne beta test kiya.', stat: '10 beta users' },
  { year: '2024 - Q3', title: 'Offline Mode + PWA', desc: 'Pakistan ke network issues ko samajhte hue offline-first approach implement ki. PWA banaya.', stat: '100+ signups' },
  { year: '2024 - Q4', title: '500+ Shops', desc: '500+ tailors ne signup kiya. Urdu support aur WhatsApp notifications add kiye.', stat: '500+ shops' },
  { year: '2025', title: 'Feature Expansion', desc: 'Reports, analytics, karigar management, aur Easypaisa/JazzCash payments integration.', stat: '10,000+ orders' },
  { year: '2026', title: '25,000+ Orders', desc: '25,000+ orders managed. Cities pages launch. Har city ke tailor ke liye specific pages.', stat: '25,000+ orders' },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "About", url: "https://www.meradarzi.pk/about" },
        ]}
      />
      <WebPageSchema
        title="About Mera Darzi - Tailor Management Software Pakistan"
        description="Learn about Mera Darzi — Pakistan ka pehla offline-first tailor management app."
        datePublished="2026-02-01"
        dateModified="2026-06-11"
      />
      <SoftwareAppSchema />

      {/* Hero */}
      <section className="relative bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
              <Image src="/icon.svg" alt="Mera Darzi" width={80} height={80} priority fetchPriority="high" sizes="80px" className="relative" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-5 py-2 rounded-full mb-6">
            <Sparkles size={14} /> About Us
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Pakistan Ka{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400">
              Darzi App
            </span>
          </h1>
          <p className="text-blue-200/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Hum ek choti si team hain jo believe karte hain ke technology
            language ya budget ki wajah se kisi ke liye rokawat nahi banni chahiye.
          </p>
          <p className="text-sm text-blue-300/70 mt-4">
            <Link href="/guide/tailor-management-pakistan" className="underline hover:text-blue-200">
              Complete Guide Padhein →
            </Link>
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {['🇵🇰 Made in Pakistan', '👥 500+ Shops', '⭐ 4.8 Rating', '📱 PWA Enabled'].map(tag => (
              <span key={tag} className="bg-white/5 border border-white/10 text-white/70 text-xs font-medium px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-linear-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-10 border border-blue-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                <Target size={26} className="text-white" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                Har Pakistani tailor ko digital banayein — chahe woh Lahore ke bade boutique mein ho ya
                Sialkot ke choti dukaan mein. Hum chahte hain ke koi tailor technology ki wajah se
                peeche na rahe. Simple, affordable, aur offline-first app ke zariye har darzi ko
                apna business grow karne ka mauka dein.
              </p>
              <div className="mt-6 flex items-center gap-2 text-blue-600 text-sm font-semibold">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
                Sab ke liye technology
              </div>
            </div>
            <div className="group relative bg-linear-to-br from-purple-50 to-white rounded-3xl p-8 lg:p-10 border border-purple-100 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                <Eye size={26} className="text-white" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                Pakistan ka har tailor — chahe woh solo ho ya multi-karigar shop — Mera Darzi use kare.
                Ek aisa ecosystem jahan tailor apne customers, orders, payments aur karigars ko
                asaani se manage kare, aur apna business double kare. Pakistan se shuru, duniya tak.
              </p>
              <div className="mt-6 flex items-center gap-2 text-purple-600 text-sm font-semibold">
                <div className="w-8 h-0.5 bg-purple-600 rounded-full" />
                Pakistan se global tak
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="py-10 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
                <Heart size={12} /> Hamari Kahani
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8 leading-tight">
                Ek Problem,{' '}
                <span className="text-blue-600">Ek Solution</span>
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
                <p className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  Pakistan mein hazaron tailor shops hain jo aaj bhi orders ko diary mein likhte hain,
                  measurements ko copy par store karte hain, aur payments ka hisaab mentally rakhte hain.
                  Jab koi gahak poochta hai <span className="italic text-slate-800 font-medium">&ldquo;mera order kahan hai?&rdquo;</span> to tailor ko register palatni padti hai.
                </p>
                <p className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  Hum ne socha — <span className="text-slate-800 font-semibold">kyun na ek simple app banayein</span> jo tailor ki zindagi aasan kare?
                  Bina complicated training ke, bina internet ki zaroorat ke, aur bilkul free shuru karne ke liye.
                </p>
                <p className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm border-l-4 border-l-blue-500">
                  <span className="font-bold text-slate-800">Mera Darzi</span> woh app hai. Ek aisa tool jo har tailor — Lahore ke master darzi se lekar
                  Gwadar ke naye tailor tak — use kar sake. Urdu mein, offline mode ke saath,
                  aur Pakistani payment methods ke support ke saath.
                </p>
                <div className="flex items-center gap-3 text-blue-700 font-bold text-lg">
                  <TrendingUp size={24} />
                  Aaj <span className="text-slate-900">500+ tailors</span> Mera Darzi par bharosa karte hain. Aur yeh sirf shuruat hai.
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl">🏪</div>
                    <div>
                      <p className="text-3xl font-black">500+</p>
                      <p className="text-blue-200 text-sm">Registered Shops</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl">📦</div>
                    <div>
                      <p className="text-3xl font-black">25,000+</p>
                      <p className="text-blue-200 text-sm">Orders Managed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl">👥</div>
                    <div>
                      <p className="text-3xl font-black">1,500+</p>
                      <p className="text-blue-200 text-sm">Happy Karigars</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl">⭐</div>
                    <div>
                      <p className="text-3xl font-black">4.8/5</p>
                      <p className="text-blue-200 text-sm">Customer Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              <Award size={12} /> Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Jo Humein <span className="text-amber-600">Alag</span> Banata Hai
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Ye values hain jo har decision, har feature aur har update mein guide karti hain.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(v => (
              <div key={v.title} className={cn(
                'group rounded-2xl p-6 border-2 transition-all duration-300',
                'hover:-translate-y-1 hover:shadow-xl',
                v.bg, v.border,
                'hover:border-transparent'
              )}>
                <div className={cn(
                  'w-12 h-12 rounded-2xl flex items-center justify-center mb-4',
                  'bg-linear-to-br shadow-lg',
                  v.color,
                  'text-white'
                )}>
                  <v.icon size={22} />
                </div>
                <h3 className="font-bold text-slate-800 text-base mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="py-10 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
              <Clock size={12} /> Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Hamara <span className="text-blue-600">Safar</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Ek idea se 500+ tailors tak — humara safar abhi shuru hua hai.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-300 via-purple-300 to-green-300 -translate-x-1/2" />
              {MILESTONES.map((m, i) => (
                <div key={i} className={cn(
                  'relative flex items-start gap-6 pb-12 last:pb-0',
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                )}>
                  <div className={cn(
                    'hidden md:flex w-1/2',
                    i % 2 === 0 ? 'justify-end pr-10 text-right' : 'pl-10'
                  )}>
                    <div className={cn(
                      'bg-white rounded-2xl p-6 border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5',
                      i % 2 === 0 ? 'border-blue-100' : 'border-purple-100'
                    )}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={cn(
                          'text-xs font-bold px-3 py-1 rounded-full',
                          i % 2 === 0 ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                        )}>{m.year}</span>
                      </div>
                      <h3 className="font-bold text-slate-800 text-lg mb-1">{m.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <span className="text-xs font-semibold text-slate-400">{m.stat}</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-white text-sm font-black shrink-0 shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2 border-2 border-blue-200">
                    <div className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center',
                      i % 2 === 0 ? 'bg-blue-600' : 'bg-purple-600'
                    )}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="md:hidden flex-1">
                    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{m.year}</span>
                      </div>
                      <h3 className="font-bold text-slate-800 text-base mb-1">{m.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                      <div className="mt-2 pt-2 border-t border-slate-100">
                        <span className="text-xs font-semibold text-slate-400">{m.stat}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
            <Users size={12} /> Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Choti Team, <span className="text-green-600">Bada Dream</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-12 text-lg">
            Hum ek small team hain jo bada sochti hai. Developers, designers, aur tailors
            ki feedback — sab milkar Mera Darzi banate hain. Koi corporate nahi, sirf passion.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { icon: '🎯', title: 'Focus on Tailors', desc: 'Har feature tailor ki problem solve kare. Agar tailor ko fayda nahi, to feature nahi.' },
              { icon: '🚀', title: 'Ship Fast, Iterate', desc: 'Perfect se better fast. Pehle ship karo, phir improve karo. Real feedback real progress.' },
              { icon: '💬', title: 'Listen to Users', desc: 'Tailors se baat karo, unki problems samjho, wohi solutions banao. Users hamare best teachers.' },
            ].map(item => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-800 text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['🔥 Built for Pakistan', '🌙 Urdu First', '📴 Offline by Design', '💳 Easypaisa/JazzCash', '📱 PWA — No App Store'].map(tag => (
              <span key={tag} className="bg-slate-100 text-slate-600 text-sm font-medium px-5 py-2.5 rounded-full border border-slate-200 hover:border-green-200 hover:bg-green-50 hover:text-green-700 transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 lg:py-16 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Sath Chalein?
          </h2>
          <p className="text-blue-200/80 mb-8 max-w-md mx-auto text-lg">
            Aaj hi shuru karein — 🌱 Free plan hamesha free hai. ⭐ Professional plan 14 din free trial. Koi card nahi chahiye.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://app.meradarzi.pk/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-xl shadow-blue-900/50 hover:shadow-blue-600/40 active:scale-95 text-base"
            >
              Free Account Banayein <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 transition-all backdrop-blur-sm"
            >
              <MessageCircle size={16} />
              Humse Baat Karein
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
