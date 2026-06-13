import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, HelpCircle, Mail } from 'lucide-react'
import Image from 'next/image'
import { FAQ, Section } from '@/components/landing/InteractiveComponents'
import { BreadcrumbSchema, WebPageSchema, SoftwareAppSchema } from '@/components/seo/JsonLd'
import { FAQS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Mera Darzi ke aksar pooche jaane wale sawalat — pricing, features, offline mode, payments, aur technical support ke baare mein jaanein.',
  keywords: ['Mera Darzi FAQ', 'tailor app questions', 'darzi app sawalat', 'tailor management help', 'Mera Darzi support'],
  openGraph: {
    title: 'FAQ - Mera Darzi Tailor Management Software',
    description: 'Mera Darzi ke baare mein aksar pooche jaane wale sawalat aur unke jawab. Pricing, features, offline use, payments aur support ke baare mein jaanein.',
    url: 'https://www.meradarzi.pk/faq',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-images/MeraDarzi.jpg', width: 1200, height: 630, alt: 'Mera Darzi FAQ' }],
    siteName: 'Mera Darzi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Mera Darzi Tailor Management Software',
    description: 'Mera Darzi ke baare mein aksar pooche jaane wale sawalat.',
    images: ['/og-images/MeraDarzi.jpg'],
  },
  alternates: {
    canonical: 'https://www.meradarzi.pk/faq',
  },
}

export default function FAQPage() {
  return (
    <div className="pt-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "FAQ", url: "https://www.meradarzi.pk/faq" },
        ]}
      />
      <WebPageSchema
        title="FAQ - Mera Darzi Tailor Management Software"
        description="Mera Darzi ke baare mein aksar pooche jaane wale sawalat aur unke jawab."
        datePublished="2026-02-15"
        dateModified="2026-06-11"
      />
      <SoftwareAppSchema />

      {/* Hero */}
      <div className="bg-linear-to-br from-slate-900 to-blue-950 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-xl flex items-center justify-center mx-auto mb-6">
            <Image src="/icon.svg" alt="Mera Darzi" width={64} height={64} priority fetchPriority="high" sizes="64px" />
          </div>
          <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-5">
            FAQ
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Aksar Pooche Jaane Wale Sawalat
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto leading-relaxed">
            Mera Darzi ke baare mein aapke zyada-tar sawalat aur unke jawab — ek jagah.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <Section className="py-10 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category: General */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle size={20} className="text-blue-600" />
              <h2 className="text-xl font-black text-slate-800">General Questions</h2>
            </div>
            <FAQ faqs={FAQS.filter(f => ['MeraDarzi kya hai?', 'Kya yeh app bilkul free hai?', 'Agar internet nahi ho to kya hoga?', 'Customers order kaise track karte hain?', 'Kya yeh mobile app hai? Play Store pe milega?', 'Kya yeh Urdu mein chal sakta hai?', 'Kya ek se zyada device pe use kar sakte hain?', 'Data safe hai? Koi aur dekh to nahi sakta?'].includes(f.q))} />
          </div>

          {/* Category: Payments & Pricing */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">💰</span>
              <h2 className="text-xl font-black text-slate-800">Payments & Pricing</h2>
            </div>
            <FAQ faqs={FAQS.filter(f => ['Pakistan mein payment kaise karein?', 'Plan upgrade kaise karein?', 'Cancel kaise karein?', 'Kya yearly plan behtar hai?', 'Koi setup fee ya hidden charges hain?'].includes(f.q))} />
          </div>

          {/* Category: Technical */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">🔧</span>
              <h2 className="text-xl font-black text-slate-800">Technical & Account</h2>
            </div>
            <FAQ faqs={FAQS.filter(f => ['Kya mobile number ke bina chal sakta hai?', 'Kaise login karein?', 'Kya data export kar sakte hain?', 'Karigar ko kaise assign karein?', 'Kya reports se business samajh sakte hain?'].includes(f.q))} />
          </div>

          <div className="text-center mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200">
            <p className="text-slate-600 mb-2">
              Koi sawaal jawab nahi mila?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              <Mail size={16} />
              Humse baat karein
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-center px-4">
        <h2 className="text-3xl font-black text-white mb-4">
          Aur Bhi Sawaal Hain?
        </h2>
        <p className="text-blue-200 mb-8 max-w-md mx-auto">
          Aaj hi free account banayein aur khud dekhin ke Mera Darzi kitna aasan hai.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Link
            href="/guide/tailor-management-pakistan"
            className="inline-flex items-center gap-2 bg-blue-500/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 hover:bg-blue-500/30 transition-all"
          >
            Complete Guide Padhein <ArrowRight size={18} />
          </Link>
        </div>
        <Link
          href="https://app.meradarzi.pk/"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-10 py-4 rounded-2xl hover:bg-blue-50 transition-all"
        >
          Free Account Banayein <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  )
}
