import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Star, Smartphone, Scissors, Package, Users, CreditCard } from "lucide-react";
import { OrganizationSchema, BreadcrumbSchema, LocalBusinessSchema, WebPageSchema } from "@/components/seo/JsonLd";

const CITIES = [
  {
    slug: "lahore",
    name: "Lahore",
    province: "Punjab",
    description:
      "Mera Darzi is the best tailor management software in Lahore. Manage your darzi shop, boutique, or tailoring business digitally. Orders track karein, customers manage karein, karigars assign karein — sab ek app mein.",
    keywords: [
      "tailor management software Lahore",
      "darzi app Lahore",
      "boutique management software Lahore",
      "tailor shop software Lahore",
      "tailoring business software Lahore",
      "order management for tailors Lahore",
    ],
    shops: "200+",
  },
  {
    slug: "karachi",
    name: "Karachi",
    province: "Sindh",
    description:
      "Mera Darzi is Karachi's trusted tailor management app. From Saddar to Gulshan, tailors and boutiques manage orders, measurements, and payments digitally. Offline support — internet ke bina bhi kaam kare.",
    keywords: [
      "tailor management software Karachi",
      "darzi app Karachi",
      "boutique management software Karachi",
      "tailor shop software Karachi",
      "tailoring business software Karachi",
      "order management for tailors Karachi",
    ],
    shops: "300+",
  },
  {
    slug: "islamabad",
    name: "Islamabad",
    province: "Islamabad Capital Territory",
    description:
      "Mera Darzi is the leading tailor management software in Islamabad. Perfect for darzis, fashion boutiques, and garment shops in the capital city. QR-based order tracking, WhatsApp integration, and offline support.",
    keywords: [
      "tailor management software Islamabad",
      "darzi app Islamabad",
      "boutique management software Islamabad",
      "tailor shop software Islamabad",
      "tailoring business software Islamabad",
    ],
    shops: "100+",
  },
  {
    slug: "rawalpindi",
    name: "Rawalpindi",
    province: "Punjab",
    description:
      "Mera Darzi helps Rawalpindi tailors manage their shops digitally. Order tracking, customer measurements, karigar management, and payment tracking — sab ek app mein. Free plan available for small shops.",
    keywords: [
      "tailor management software Rawalpindi",
      "darzi app Rawalpindi",
      "tailor shop software Rawalpindi",
      "tailoring business software Rawalpindi",
      "boutique management Rawalpindi",
    ],
    shops: "100+",
  },
  {
    slug: "faisalabad",
    name: "Faisalabad",
    province: "Punjab",
    description:
      "Mera Darzi is the best tailor shop management system in Faisalabad. Manage stitching orders, customer measurements, payments, and karigar assignments digitally. Free trial available.",
    keywords: [
      "tailor management software Faisalabad",
      "darzi app Faisalabad",
      "boutique management software Faisalabad",
      "tailor shop software Faisalabad",
      "stitching order management Faisalabad",
    ],
    shops: "150+",
  },
  {
    slug: "peshawar",
    name: "Peshawar",
    province: "Khyber Pakhtunkhwa",
    description:
      "Mera Darzi is Peshawar's preferred tailor management solution. Manage your tailoring business digitally with our easy-to-use app. Offline support, QR tracking, and WhatsApp integration included.",
    keywords: [
      "tailor management software Peshawar",
      "darzi app Peshawar",
      "tailor shop software Peshawar",
      "tailoring business software Peshawar",
      "boutique management software Peshawar",
    ],
    shops: "80+",
  },
  {
    slug: "multan",
    name: "Multan",
    province: "Punjab",
    description:
      "Mera Darzi helps Multan tailors and boutiques go digital. Order management, customer measurement records, payment tracking, and karigar assignment — all in one app. Free plan available.",
    keywords: [
      "tailor management software Multan",
      "darzi app Multan",
      "boutique management software Multan",
      "tailor shop software Multan",
      "tailoring business software Multan",
    ],
    shops: "70+",
  },
  {
    slug: "gujranwala",
    name: "Gujranwala",
    province: "Punjab",
    description:
      "Mera Darzi is the leading tailor management app in Gujranwala. Perfect for darzis and boutique owners. Manage orders offline, track payments, and keep customers updated with QR tracking.",
    keywords: [
      "tailor management software Gujranwala",
      "darzi app Gujranwala",
      "tailor shop software Gujranwala",
      "boutique management Gujranwala",
    ],
    shops: "50+",
  },
  {
    slug: "sialkot",
    name: "Sialkot",
    province: "Punjab",
    description:
      "Mera Darzi serves Sialkot's tailoring community with a comprehensive digital management solution. Order tracking, customer management, and karigar coordination made simple.",
    keywords: [
      "tailor management software Sialkot",
      "darzi app Sialkot",
      "tailor shop software Sialkot",
      "boutique management Sialkot",
    ],
    shops: "40+",
  },
  {
    slug: "quetta",
    name: "Quetta",
    province: "Balochistan",
    description:
      "Mera Darzi brings digital tailor management to Quetta. Manage orders, customers, and payments offline-first. Works without internet and syncs when connected. Free plan available.",
    keywords: [
      "tailor management software Quetta",
      "darzi app Quetta",
      "tailor shop software Quetta",
      "tailoring business software Quetta",
    ],
    shops: "30+",
  },
  {
    slug: "hyderabad-sindh",
    name: "Hyderabad",
    province: "Sindh",
    description:
      "Mera Darzi helps Hyderabad tailors digitize their business. Order management, customer measurements, payment tracking, and karigar assignment in one easy app. Urdu and English support.",
    keywords: [
      "tailor management software Hyderabad",
      "darzi app Hyderabad Sindh",
      "boutique management software Hyderabad",
      "tailor shop software Hyderabad",
    ],
    shops: "40+",
  },
];

export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) return { title: "City Not Found" };

  return {
    title: `Best Tailor Management Software in ${city.name} | Mera Darzi`,
    description: city.description.slice(0, 160),
    keywords: city.keywords,
    openGraph: {
      title: `Mera Darzi - Best Tailor Management Software in ${city.name}`,
      description: city.description.slice(0, 160),
      url: `https://www.meradarzi.pk/cities/${city.slug}`,
      locale: "en_US",
      type: "website",
      images: [{ url: "/og-images/MeraDarzi.jpg", width: 1200, height: 630, alt: `Mera Darzi - Tailor Management Software in ${city.name}` }],
      siteName: "Mera Darzi",
    },
    twitter: {
      card: "summary_large_image",
      title: `Mera Darzi - Best Tailor Management Software in ${city.name}`,
      description: city.description.slice(0, 160),
      images: ["/og-images/MeraDarzi.jpg"],
    },
    alternates: {
      canonical: `/cities/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) notFound();

  const features = [
    { icon: Package, title: "Order Tracking", desc: "Har order ka real-time status. QR code se customers khud track karein." },
    { icon: Users, title: "Customer Management", desc: "Sab gahakon ke nap, kapra details, aur order history ek jagah." },
    { icon: CreditCard, title: "Payment Tracking", desc: "Cash, Easypaisa, JazzCash — sab payments track karein. Baaki automatically calculate." },
    { icon: Smartphone, title: "Offline Support", desc: "Internet band ho to bhi kaam jari rahe. Data automatically sync." },
  ];

  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema city={city.name} province={city.province} shops={city.shops} />
      <WebPageSchema
        title={`Best Tailor Management Software in ${city.name} | Mera Darzi`}
        description={city.description.slice(0, 160)}
        datePublished="2026-01-01"
        dateModified="2026-06-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "Cities", url: "https://www.meradarzi.pk/cities" },
          { name: city.name, url: `https://www.meradarzi.pk/cities/${city.slug}` },
        ]}
      />

      <div className="pt-16">
        <section className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              🇵🇰 {city.name}, {city.province}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Best Tailor Management Software in{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                {city.name}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {city.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://app.meradarzi.pk/"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all shadow-xl shadow-blue-900/50"
              >
                Free Shuru Karein
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 transition-all"
              >
                Support Se Baat Karein
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                {city.name} Ke Tailors Kyun Choose Kar Rahe Hain?
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                {city.shops}+ shops in {city.name} already trust Mera Darzi
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="group p-6 rounded-3xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-blue-50">
                    <f.icon size={22} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-10">
              Why Mera Darzi for {city.name}?
            </h2>
            <div className="space-y-4">
              {[
                `Specifically designed for ${city.name}'s tailoring and boutique businesses`,
                `Works offline — ${city.name} ke har area mein kaam karta hai, chah internet ho ya na ho`,
                `Urdu and English mein available — ${city.name} ke tailors ki zaban mein`,
                `Payment tracking with Easypaisa, JazzCash, and Raast support`,
                `${city.shops}+ shops already using Mera Darzi in ${city.name}`,
                `Free plan available — 30 orders/month, no credit card needed`,
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-slate-100">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <p className="text-slate-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white text-center px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            {city.name} Mein Aaj Hi Shuru Karein
          </h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            14 din free trial. Koi card nahi chahiye. Cancel kab bhi karein.
          </p>
          <Link
            href="https://app.meradarzi.pk/"
            target="_blank"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-10 py-4 rounded-2xl hover:bg-blue-700 transition-all"
          >
            Free Account Banayein <ArrowRight size={18} />
          </Link>
        </section>
      </div>
    </>
  );
}
