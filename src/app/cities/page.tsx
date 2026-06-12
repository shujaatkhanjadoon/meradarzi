import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { CITIES, PROVINCES } from "@/lib/cities";
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Tailor Management Software in Pakistani Cities | Mera Darzi",
  description:
    "Mera Darzi is available in all major Pakistani cities including Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Peshawar, Multan and more. Find tailor management software for your city.",
  keywords: [
    "tailor management software Pakistan cities",
    "darzi app Lahore",
    "tailor software Karachi",
    "boutique management Islamabad",
    "tailor shop Faisalabad",
  ],
  alternates: {
    canonical: "https://www.meradarzi.pk/cities",
  },
  openGraph: {
    title: "Mera Darzi - Available in All Major Pakistani Cities",
    description:
      "Find tailor management software for your city. Mera Darzi serves Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Peshawar, Multan and more.",
    url: "https://www.meradarzi.pk/cities",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-images/MeraDarzi.jpg", width: 1200, height: 630, alt: "Mera Darzi - Tailor Management Software in Pakistani Cities" }],
    siteName: "Mera Darzi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mera Darzi - Available in All Major Pakistani Cities",
    description: "Find tailor management software for your city. Mera Darzi serves Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Peshawar, Multan and more.",
    images: ["/og-images/MeraDarzi.jpg"],
  },
};

export default function CitiesIndexPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pakistani Cities with Mera Darzi Tailor Management",
    description: "Mera Darzi serves tailors and boutiques across Pakistani cities.",
    numberOfItems: CITIES.length,
    itemListElement: CITIES.map((city, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: city.name,
      url: `https://www.meradarzi.pk/cities/${city.slug}`,
    })),
  }

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "Cities", url: "https://www.meradarzi.pk/cities" },
        ]}
      />
      <WebPageSchema
        title="Tailor Management Software in Pakistani Cities | Mera Darzi"
        description="Mera Darzi is available in all major Pakistani cities. Find tailor management software for your city."
        datePublished="2026-01-01"
        dateModified="2026-06-11"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <section className="bg-linear-to-br from-slate-900 to-blue-950 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Tailor Management Software in{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Pakistani Cities
            </span>
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">
            Mera Darzi serves tailors and boutiques across {CITIES.length} major cities in Pakistan.
            Find your city and start your digital journey today.
          </p>
        </div>
      </section>

      {PROVINCES.map((province) => (
        <section key={province} className="py-12 px-4 first:pt-20 last:pb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <MapPin size={20} className="text-blue-600" />
              {province}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CITIES.filter((c) => c.province === province).map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities/${city.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={20} className="text-blue-600" />
                    <h3 className="font-bold text-slate-800 text-lg">{city.name}</h3>
                  </div>
                  <p className="text-blue-600 text-sm font-semibold">{city.shops} shops</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
