import { BreadcrumbSchema, WebPageSchema } from '@/components/seo/JsonLd'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Mera Darzi terms and conditions — service ke istemal ke qawaneen aur shartat. Account registration, payments, aur data ownership ke baare mein.',
  keywords: ['Mera Darzi terms', 'tailor software terms Pakistan', 'service conditions'],
  alternates: {
    canonical: 'https://www.meradarzi.pk/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | Mera Darzi',
    description: 'Mera Darzi terms and conditions — service ke istemal ke qawaneen aur shartat. Account registration, payments, aur data ownership.',
    url: 'https://www.meradarzi.pk/terms-and-conditions',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-images/MeraDarzi.jpg', width: 1200, height: 630, alt: 'Mera Darzi Terms & Conditions' }],
    siteName: 'Mera Darzi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Mera Darzi',
    description: 'Mera Darzi terms and conditions — service ke istemal ke qawaneen aur shartat.',
    images: ['/og-images/MeraDarzi.jpg'],
  },
}

export default function TermsPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By creating an account or using Mera Darzi, you agree to these Terms. If you disagree, please do not use the service.`,
    },
    {
      title: '2. Description of Service',
      content: `Mera Darzi is a tailor management platform providing:
- Order and customer management
- Team (karigar) coordination
- Payment tracking
- Cloud data synchronization

We reserve the right to modify, suspend, or discontinue any part of the service.`,
    },
    {
      title: '3. Account Registration',
      content: `You must:
- Provide accurate information (real phone number, shop name)
- Be at least 18 years old
- Keep your PIN secure
- Not share your account with others
- Not create multiple accounts with the same phone number

One phone number = one account. Violations may result in account termination.`,
    },
    {
      title: '4. Acceptable Use',
      content: `You agree NOT to:
- Use the service for illegal activities
- Attempt to hack, scrape, or abuse the platform
- Share login credentials with others
- Create fake accounts or spam
- Reverse engineer the application`,
    },
    {
      title: '5. Subscription & Payments',
      content: `Paid plans (Professional, Business):
- Billed monthly or annually
- Payment via Raast (preferred) or bank transfer
- Manual verification by our team within 24 hours
- No automatic deductions — you initiate payment

Refunds: See our Refund Policy page.`,
    },
    {
      title: '6. Data Ownership',
      content: `You own your data. Mera Darzi:
- Does not claim ownership of your business data
- Stores it only to provide the service
- Will not access it without your permission (except for technical support you request)
- Will delete it upon account termination`,
    },
    {
      title: '7. Service Availability',
      content: `We aim for 99.9% uptime but cannot guarantee uninterrupted service. Mera Darzi is not liable for business losses due to:
- Server downtime
- Data sync delays
- Internet connectivity issues
- Force majeure events`,
    },
    {
      title: '8. Limitation of Liability',
      content: `Mera Darzi's total liability shall not exceed the amount you paid in the last 3 months. We are not liable for indirect, incidental, or consequential damages.`,
    },
    {
      title: '9. Termination',
      content: `We may terminate accounts that violate these terms. You may cancel anytime. Upon termination, your data will be deleted per our Privacy Policy.`,
    },
    {
      title: '10. Governing Law',
      content: `These terms are governed by the laws of Pakistan. Disputes shall be resolved in courts of Lahore, Pakistan.`,
    },
    {
      title: '11. Contact',
      content: `For terms-related questions: darzihub9@gmail.com`,
    },
  ]

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "Terms & Conditions", url: "https://www.meradarzi.pk/terms-and-conditions" },
        ]}
      />
      <WebPageSchema
        title="Terms & Conditions | Mera Darzi"
        description="Mera Darzi terms and conditions — service ke istemal ke qawaneen aur shartat."
        datePublished="2026-01-10"
        dateModified="2026-05-13"
      />
      <div className="bg-white border-b border-slate-100 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold
                          px-4 py-2 rounded-full mb-4">
            Legal
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-slate-500">Last updated: May 13, 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {sections.map(s => (
          <div key={s.title}>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h2>
            <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {s.content}
            </div>
          </div>
        ))}
        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-3 text-sm">
          <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>
          <span className="text-slate-300">·</span>
          <Link href="/refund-policy" className="text-blue-600 hover:underline font-medium">Refund Policy</Link>
        </div>
      </div>
    </div>
  )
}