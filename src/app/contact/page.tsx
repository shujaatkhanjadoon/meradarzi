import type { Metadata }  from 'next'
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react'
import { BreadcrumbSchema, WebPageSchema } from '@/components/seo/JsonLd'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Mera Darzi support se contact karein. WhatsApp, email, ya form ke zariye hum se baat karein. 24 ghante mein reply.',
  keywords: ['contact Mera Darzi', 'tailor software support Pakistan', 'Mera Darzi WhatsApp', 'darzi app help'],
  openGraph: {
    title: 'Contact Mera Darzi - Tailor Management Software Support',
    description: 'Get in touch with Mera Darzi support team via WhatsApp, email, or contact form.',
    url: 'https://www.meradarzi.pk/contact',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-images/MeraDarzi.jpg', width: 1200, height: 630, alt: 'Contact Mera Darzi - Tailor Management Software Pakistan' }],
    siteName: 'Mera Darzi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Mera Darzi - Tailor Management Software Support',
    description: 'Get in touch with Mera Darzi support team via WhatsApp, email, or contact form.',
    images: ['/og-images/MeraDarzi.jpg'],
  },
  alternates: {
    canonical: 'https://www.meradarzi.pk/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "Contact", url: "https://www.meradarzi.pk/contact" },
        ]}
      />
      <WebPageSchema
        title="Contact Mera Darzi - Tailor Management Software Support"
        description="Get in touch with Mera Darzi support team via WhatsApp, email, or contact form."
        datePublished="2026-01-05"
        dateModified="2026-06-11"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

        <div className="text-center mb-14">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Contact Us</h1>
          <p className="text-slate-500 text-lg">
            Koi bhi sawal ho — hum yahan hain
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Contact Information</h2>
            {[
              {
                icon:  MessageCircle,
                title: 'WhatsApp',
                value: process.env.NEXT_PUBLIC_ADMIN_WHATSAPP,
                href:  `https://wa.me/${process.env.NEXT_PUBLIC_ADMIN_WHATSAPP_LINK}?text=Assalam%20o%20Alaikum`,
                color: 'bg-green-100 text-green-600',
                desc:  'Fastest response',
              },
              {
                icon:  Mail,
                title: 'Email',
                value: 'support@meradarzi.pk',
                href:  'mailto:darzihub9@gmail.com',
                color: 'bg-blue-100 text-blue-600',
                desc:  'Within 24 hours',
              },
              {
                icon:  Clock,
                title: 'Support Hours',
                value: 'Mon–Sat, 9am–6pm PKT',
                href:  null,
                color: 'bg-amber-100 text-amber-600',
                desc:  'Pakistan Standard Time',
              },
              {
                icon:  MapPin,
                title: 'Location',
                value: 'Pakistan 🇵🇰',
                href:  null,
                color: 'bg-purple-100 text-purple-600',
                desc:  'Serving all Pakistan',
              },
            ].map(c => (
              <div key={c.title}
                className="bg-white rounded-2xl p-5 border border-slate-200 flex gap-4">
                <div className={`w-11 h-11 rounded-2xl flex items-center
                                justify-center shrink-0 ${c.color}`}>
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{c.title}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline font-medium">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-slate-600 text-sm font-medium">{c.value}</p>
                  )}
                  <p className="text-slate-400 text-xs mt-0.5">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-7 border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}