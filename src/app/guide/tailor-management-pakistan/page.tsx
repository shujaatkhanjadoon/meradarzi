import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react"
import { BreadcrumbSchema, WebPageSchema, HowToSchema, FAQSchema } from "@/components/seo/JsonLd"
import { FAQ } from "@/components/landing/InteractiveComponents"

export const metadata: Metadata = {
  title: "Complete Guide to Tailor Management in Pakistan",
  description: "Pakistan mein tailor shop ko digital kaise banayein? Yeh comprehensive guide aapko sikhayegi — order management, customer tracking, payments, aur karigar coordination. Free tools aur best practices ke saath.",
  keywords: [
    "tailor management guide Pakistan",
    "tailor shop digital transformation",
    "how to digitize tailor shop",
    "complete guide to tailor management",
    "tailor shop management system Pakistan",
    "darzi shop ko digital kaise banayein",
    "tailor management software guide",
    "Pakistan tailor business guide",
    "tailor shop tips and tricks",
    "boutique management guide Pakistan",
  ],
  openGraph: {
    title: "Complete Guide to Tailor Management in Pakistan | Mera Darzi",
    description: "Tailor shop management ka mukammal guide — orders, customers, payments aur karigar. Digital banayein apni shop. Free tools included.",
    url: "https://www.meradarzi.pk/guide/tailor-management-pakistan",
    locale: "en_US",
    type: "article",
    images: [{ url: "/og-images/MeraDarzi.jpg", width: 1200, height: 630, alt: "Complete Guide to Tailor Management in Pakistan" }],
    siteName: "Mera Darzi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide to Tailor Management in Pakistan",
    description: "Tailor shop management ka mukammal guide — orders, customers, payments aur karigar.",
    images: ["/og-images/MeraDarzi.jpg"],
  },
  alternates: {
    canonical: "https://www.meradarzi.pk/guide/tailor-management-pakistan",
  },
}

const FAQS = [
  {
    q: "Tailor management software kya hai?",
    a: "Tailor management software ek digital tool hai jo tailor shops ko orders, customers, payments, aur karigars manage karne mein madad karta hai. Traditional paper slips aur registers ki jagah aap ek app mein sab kuch record kar sakte hain — measurements, fabric details, delivery dates, aur payment history.",
  },
  {
    q: "Kya Mera Darzi offline kaam karta hai?",
    a: "Haan, Mera Darzi offline-first app hai. Yani bina internet ke bhi orders create kar sakte hain, customers add kar sakte hain, aur payments record kar sakte hain. Jab internet connect ho ga to data automatically sync ho jayega.",
  },
  {
    q: "Mera Darzi kitne plans hain?",
    a: "Teen plans hain: Free (30 orders/month, basic features), Professional Rs. 499/month (unlimited orders, all features, 3 karigar accounts), aur Business Rs. 999/month (unlimited sab kuch, priority support, 10GB photo storage). Yearly plans mein 2 months free milte hain.",
  },
  {
    q: "Kya Mera Darzi Urdu mein available hai?",
    a: "Bilkul. Mera Darzi poori tarah Urdu aur English dono mein available hai. Aap ek tap mein language change kar sakte hain. Interface, orders, customers — sab Urdu mein use karein.",
  },
  {
    q: "Mera Darzi kaise start karein?",
    a: "Sirf 2 minute lagte hain. app.meradarzi.pk par jayein, apna phone number aur shop name daalein, aur Free plan activate karein. Koi credit card nahi chahiye, koi commitment nahi.",
  },
]

const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    content: `Tailor shop chalana Pakistan mein ek respectable aur profitable business hai. Lekin har tailor ek common problem face karta hai — orders ka record rakhna, customers ka data manage karna, aur payments track karna. Aaj bhi 90% tailors paper slips aur registers par depend hain.

Yeh comprehensive guide aapko sikhayegi ke kaise aap apni tailor shop ko digital bana sakte hain, time bacha sakte hain, aur apne business ko grow kar sakte hain — chahe aap Lahore mein 10 karigar ki workshop chala rahe hain ya Quetta mein akeli boutique.`,
  },
  {
    id: "what-is-tailor-management",
    title: "What is Tailor Management?",
    content: `Tailor management ka matlab hai aapki tailor shop ke daily operations ko organize karna — orders lena, customers ka record rakhna, karigars ko kaam dena, payments track karna, aur delivery dates manage karna.

Traditional system mein yeh sab kaghaz par hota hai. Lekin digital tailor management mein aap ek app ya software use karte hain jo sab kuch automatically record aur organize karta hai. Mera Darzi specifically Pakistani tailors ke liye bana hai — offline bhi kaam karta hai, Urdu mein bhi available hai, aur Easypaisa/JazzCash payments ko support karta hai.`,
  },
  {
    id: "why-digital",
    title: "Why Go Digital? 7 Benefits",
    content: null,
    bullets: [
      "Orders kabhi gum nahi hote — sab digital save rehte hain",
      "Customer measurements aur history ek jagah — koi slip nahi dhundhni",
      "Payments track karna aasan — advance, balance, total — auto calculate",
      "Karigars ko orders assign karein aur unka workload dekhein",
      "QR codes se customers khud order status check kar sakte hain",
      "Data backup automatic — phone kho jaye to bhi data safe hai",
      "Reports se samjhein ke aapka business kya trend kar raha hai",
    ],
  },
  {
    id: "key-features",
    title: "Key Features to Look For in Tailor Management Software",
    content: `Jab aap tailor management software select karte hain, to kuch features zaroor check karne chahiye. Mera Darzi mein yeh saare features available hain — aap <Link href="/features">features page</Link> par details dekh sakte hain.

Order management sab se basic feature hai. Har order mein customer ka naam, phone, measurements, fabric details, delivery date, aur photos — sab kuch ek jagah. QR code har order ke saath generate hota hai jo customer ko tracking link deta hai.

Customer directory aapko har gahak ka complete record deti hai — kitne orders karwaye, kitna total spend kiya, kab aakhri baar aaya. Search by name ya phone — instantly results.

Payment tracking mein aap advance, balance aur total payments record kar sakte hain. Easypaisa, JazzCash, cash — sab payment methods support hain. Baaki automatically calculate hota hai.

Team management ke saath aap karigars ko orders assign kar sakte hain. Har karigar ka workload, completed orders, aur pending tasks dekh sakte hain. Salary reports bana sakte hain.`,
  },
  {
    id: "how-to-start",
    title: "How to Digitize Your Tailor Shop — Step by Step",
    content: `Apni tailor shop ko digital banana bahut aasan hai. Yeh steps follow karein:

Pehla qadam: Mera Darzi mein free account banayein. Sirf phone number aur shop name chahiye. Do minute mein ready.

Dusra qadam: Apne existing customers add karein. Unke measurements aur order history enter karein. Agar chahein to ek sitting mein kar sakte hain.

Teesra qadam: Naye orders digital lena shuru karein. Paper slips completely band karein. Har order mein measurements, fabric, photos, aur delivery date include karein.

Chautha qadam: Customers ko QR tracking link dena shuru karein. Wo khud order status check kar lein ge — aapko phone nahi karna padega.

Poori guide ke liye <Link href="/how-it-works">How It Works page</Link> dekhein. Step-by-step videos aur screenshots ke saath complete guide hai.`,
  },
  {
    id: "pricing",
    title: "Mera Darzi Pricing — Free se Start Karein",
    content: `Mera Darzi ka Free plan hamesha free hai — 30 orders/month, 50 customers, basic features. Yeh small shops ke liye kaafi hai.

Professional plan Rs. 499/month (ya Rs. 4,990/year — 2 months free) mein unlimited orders, team management, tracking links, aur reports milte hain.

Business plan Rs. 999/month (ya Rs. 9,990/year — 2 months free) mein unlimited sab kuch, priority support, aur 10GB photo storage.

14 din ka free trial bhi hai — koi card nahi chahiye. <Link href="/pricing">Pricing page</Link> par details dekhein.`,
  },
  {
    id: "cities",
    title: "Mera Darzi in Pakistani Cities",
    content: `Mera Darzi pooray Pakistan mein available hai. Har city ke tailors ke liye specific pages hain jo local context aur requirements cover karte hain. Yeh kuch major cities hain jahan Mera Darzi most popular hai:

<Link href="/cities/lahore">Lahore</Link> — 200+ shops already using Mera Darzi. Lahore ka competitive tailor market digital solutions ko优先 deta hai.

<Link href="/cities/karachi">Karachi</Link> — 300+ shops. Karachi ke diverse customer base ke liye offline-first approach perfect hai.

<Link href="/cities/islamabad">Islamabad</Link> — 100+ shops. Capital city ki boutique culture strong hai aur digital solutions highly valued hain.

<Link href="/cities">All Cities page</Link> par aap apne city ko search kar sakte hain aur specific information dekh sakte hain.`,
  },
  {
    id: "tips",
    title: "Tips for Success — Best Practices",
    content: `Digital tailor shop chalane ke liye kuch tips jo aapko competitor se aage rakhenge:

Pehla tip: Har order mein photos zaroor store karein. Fabric aur design ki photo store karna delivery time par confusion khatam karta hai. Mera Darzi mein photos directly order ke saath attach ho jati hain.

Dusra tip: Customers ko tracking link dena na bhoolain. Is se aapke phone calls kam ho jayenge aur customers khush rahenge.

Teesra tip: Monthly reports check karein. Kaunsa garment sab se zyada order ho raha hai? Kaun se customers most valuable hain? Data se better decisions lein.

In topics par detailed blog posts bhi hain — <Link href="/blog">Mera Darzi Blog</Link> zaroor visit karein. Kuch recommended posts:
- <Link href="/blog/tailor-shop-ko-digital-kaise-banayein">Tailor Shop Ko Digital Kaise Banayein</Link>
- <Link href="/blog/tailor-business-kaise-badhayein-5-tips">Tailor Business Kaise Badhayein — 5 Tips</Link>
- <Link href="/blog/order-tracking-system-for-tailors">Order Tracking System For Tailors</Link>
- <Link href="/blog/tailor-shop-record-keeping-paper-vs-digital">Tailor Shop Record Keeping — Paper vs Digital</Link>`,
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
    content: null,
  },
  {
    id: "conclusion",
    title: "Ready to Transform Your Tailor Shop?",
    content: `Digital tailor management sirf ek trend nahi — yeh zaroorat hai. Pakistan ke 500+ tailors already Mera Darzi use kar rahe hain aur apna business digitally manage kar rahe hain.

Aap bhi aaj hi start karein. Free plan mein koi card nahi, koi commitment nahi. Sirf 2 minute mein apna account banaayein aur apni shop ko digital banayein.`,
  },
]

export default function GuidePage() {
  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "Guide", url: "https://www.meradarzi.pk/guide/tailor-management-pakistan" },
        ]}
      />
      <WebPageSchema
        title="Complete Guide to Tailor Management in Pakistan | Mera Darzi"
        description="Pakistan mein tailor shop ko digital kaise banayein? Yeh comprehensive guide aapko sikhayegi — order management, customer tracking, payments, aur karigar coordination."
        datePublished="2026-06-13"
        dateModified="2026-06-13"
      />
      <HowToSchema />

      {/* Hero */}
      <section className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-5 uppercase tracking-wide">
            Free Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Complete Guide to Tailor Management in Pakistan
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Orders, customers, payments aur karigar — sab kuch manage karne ka mukammal digital guide.
            Chahe aap Lahore mein 10 karigar ki workshop chala rahe hain ya Quetta mein akeli boutique.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-10 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {SECTIONS.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 py-2 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
        {SECTIONS.map((section, i) => (
          <section key={section.id} id={section.id} className="mb-14 last:mb-0 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{section.title}</h2>
            </div>

            {section.content && (
              <div className="text-slate-600 text-base leading-relaxed space-y-4">
                {section.content.split('\n\n').map((para, pi) => {
                  // Process inline JSX links in the content
                  const parts = para.split(/(<Link[^>]*>[^<]*<\/Link>)/g)
                  return (
                    <p key={pi}>
                      {parts.map((part, pj) => {
                        if (part.startsWith('<Link')) {
                          const hrefMatch = part.match(/href="([^"]+)"/)
                          const textMatch = part.match(/>([^<]+)</)
                          if (hrefMatch && textMatch) {
                            return <Link key={pj} href={hrefMatch[1]} className="text-blue-600 hover:underline font-medium">{textMatch[1]}</Link>
                          }
                          return part
                        }
                        // Process plain URLs
                        const urlParts = part.split(/(https?:\/\/[^\s]+)/g)
                        return <span key={pj}>{urlParts.map((up, uk) => {
                          if (up.startsWith('http')) {
                            return <a key={uk} href={up} target="_blank" rel="noopener" className="text-blue-600 hover:underline">{up}</a>
                          }
                          return up
                        })}</span>
                      })}
                    </p>
                  )
                })}
              </div>
            )}

            {section.bullets && (
              <div className="space-y-3 mt-4">
                {section.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            )}

            {/* FAQ section uses the component */}
            {section.id === 'faq' && (
              <div className="mt-6">
                <FAQ faqs={FAQS} />
                <div className="mt-6 text-center">
                  <Link href="/faq" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
                    More FAQs <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-10 lg:py-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Aaj Hi Shuru Karein — Free
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            🌱 Free plan hamesha free. ⭐ 14 din free trial. Koi card nahi chahiye. Cancel kab bhi karein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.meradarzi.pk/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-10 py-4 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl"
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
        </div>
      </section>
    </div>
  )
}
