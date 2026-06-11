import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";

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
    canonical: "/cities",
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

const CITIES = [
  { name: "Lahore", slug: "lahore", shops: "200+", province: "Punjab" },
  { name: "Karachi", slug: "karachi", shops: "300+", province: "Sindh" },
  { name: "Islamabad", slug: "islamabad", shops: "100+", province: "Islamabad" },
  { name: "Rawalpindi", slug: "rawalpindi", shops: "100+", province: "Punjab" },
  { name: "Faisalabad", slug: "faisalabad", shops: "150+", province: "Punjab" },
  { name: "Peshawar", slug: "peshawar", shops: "80+", province: "KPK" },
  { name: "Multan", slug: "multan", shops: "70+", province: "Punjab" },
  { name: "Gujranwala", slug: "gujranwala", shops: "50+", province: "Punjab" },
  { name: "Sialkot", slug: "sialkot", shops: "40+", province: "Punjab" },
  { name: "Quetta", slug: "quetta", shops: "30+", province: "Balochistan" },
  { name: "Hyderabad", slug: "hyderabad-sindh", shops: "40+", province: "Sindh" },
];

export default function CitiesIndexPage() {
  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <section className="bg-linear-to-br from-slate-900 to-blue-950 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Tailor Management Software in{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Pakistani Cities
            </span>
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">
            Mera Darzi serves tailors and boutiques across all major cities in Pakistan.
            Find your city and start your digital journey today.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/cities/${city.slug}`}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} className="text-blue-600" />
                  <h3 className="font-bold text-slate-800 text-lg">{city.name}</h3>
                </div>
                <p className="text-slate-500 text-xs mb-2">{city.province}</p>
                <p className="text-blue-600 text-sm font-semibold">{city.shops} shops</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
