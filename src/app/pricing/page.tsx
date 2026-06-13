import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PricingCards, FAQ } from '@/components/landing/InteractiveComponents'
import { BreadcrumbSchema, WebPageSchema, SoftwareAppSchema, ReviewSchema } from '@/components/seo/JsonLd'
import Image from 'next/image'
import { FAQS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Mera Darzi ke plans aur pricing — Free, Professional Rs. 499/month, Business Rs. 999/month. Yearly plans mein 2 months free. Koi card nahi chahiye.',
  keywords: ['tailor app pricing Pakistan', 'darzi software price', 'tailor management cost', 'Mera Darzi plans', 'free tailor app'],
  openGraph: {
    title: 'Pricing - Mera Darzi Tailor Management Plans',
    description: 'Har budget ke liye plan. Free se shuru karein, grow karte waqt upgrade karein. Professional Rs. 499/month. Business Rs. 999/month.',
    url: 'https://www.meradarzi.pk/pricing',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-images/MeraDarzi.jpg', width: 1200, height: 630, alt: 'Mera Darzi Pricing' }],
    siteName: 'Mera Darzi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Mera Darzi Tailor Management Plans',
    description: 'Har budget ke liye plan. Free se shuru, grow karte waqt upgrade karein.',
    images: ['/og-images/MeraDarzi.jpg'],
  },
  alternates: {
    canonical: 'https://www.meradarzi.pk/pricing',
  },
}

export default function PricingPage() {
  return (
    <div className="pt-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "Pricing", url: "https://www.meradarzi.pk/pricing" },
        ]}
      />
      <WebPageSchema
        title="Pricing - Mera Darzi Tailor Management Plans"
        description="Har budget ke liye plan. Free se shuru, grow karte waqt upgrade karein."
        datePublished="2026-01-20"
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
            Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Simple, Clear Pricing
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto leading-relaxed">
            Har budget ke liye plan. Free se shuru karein, grow karte waqt upgrade karein. Koi hidden charges nahi.
          </p>
          <p className="text-sm text-blue-300 mt-4">
            <Link href="/guide/tailor-management-pakistan" className="underline hover:text-blue-200">
              Complete Guide Padhein →
            </Link>
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCards />
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-10 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              Comparison
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Plan Kaunse Feature Milte Hain?
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Sahi plan choose karne mein madad ke liye full comparison.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left px-6 py-4 font-bold text-slate-700">Feature</th>
                  <th className="text-center px-4 py-4 font-bold text-slate-700">🌱 Starter</th>
                  <th className="text-center px-4 py-4 font-bold text-blue-600 bg-blue-50">⭐ Professional</th>
                  <th className="text-center px-4 py-4 font-bold text-purple-600">👑 Business</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Orders per month', '30', 'Unlimited', 'Unlimited'],
                  ['Customers', '50', 'Unlimited', 'Unlimited'],
                  ['Karigar accounts', '—', 'Up to 3', 'Unlimited'],
                  ['Measurements + payments', '✅', '✅', '✅'],
                  ['Cloud database', '✅', '✅', '✅'],
                  ['Order tracking URL + QR code', '—', '✅', '✅'],
                  ['Photo attachments (local)', '—', '✅', '—'],
                  ['Photo attachments (cloud)', '—', '—', '10GB'],
                  ['Reports & analytics', '—', '✅', '✅'],
                  ['WhatsApp auto-notifications', '—', '✅', '✅'],
                  ['Karigar salary reports', '—', '—', '✅'],
                  ['Custom shop branding', '—', '—', '✅'],
                  ['Priority WhatsApp support', '—', '—', '✅'],
                  ['Early access to features', '—', '—', '✅'],
                ].map((row, i) => (
                  <tr key={i} className={cn('border-b border-slate-100 last:border-0', i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50')}>
                    <td className="px-6 py-3.5 text-slate-700 font-medium">{row[0]}</td>
                    <td className="px-4 py-3.5 text-center text-slate-500">{row[1]}</td>
                    <td className="px-4 py-3.5 text-center text-blue-600 font-medium bg-blue-50/50">{row[2]}</td>
                    <td className="px-4 py-3.5 text-center text-purple-600 font-medium">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block bg-slate-200 text-slate-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Pricing Ke Baare Mein Sawalat
            </h2>
          </div>
          <FAQ faqs={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-center px-4">
        <h2 className="text-3xl font-black text-white mb-4">
          Aaj Hi Shuru Karein
        </h2>
        <p className="text-blue-200 mb-8 max-w-md mx-auto">
          Duniya ka sabse easy-to-use tailor app. 🌱 Free plan hamesha free. ⭐ 14 din free trial.
        </p>
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

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}
