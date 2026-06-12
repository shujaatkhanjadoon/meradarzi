import type { Metadata } from "next"
import Link from "next/link"
import { BLOG_POSTS } from "@/lib/blog"
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Tailor Management Blog | Mera Darzi",
  description:
    "Tailor shop management tips, guides aur best practices. Seekhein apni darzi shop ko digital kaise banayein, customers kaise manage karein aur business kaise badhayein.",
  keywords: [
    "tailor blog Pakistan",
    "darzi tips",
    "tailor management guide",
    "tailor shop digital",
    "boutique management tips",
  ],
  alternates: {
    canonical: "https://www.meradarzi.pk/blog",
  },
  openGraph: {
    title: "Tailor Management Blog | Mera Darzi",
    description:
      "Tailor shop management tips, guides aur best practices. Seekhein apni darzi shop ko digital kaise banayein.",
    url: "https://www.meradarzi.pk/blog",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-images/MeraDarzi.jpg",
        width: 1200,
        height: 630,
        alt: "Mera Darzi Blog - Tailor Management Tips",
      },
    ],
    siteName: "Mera Darzi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailor Management Blog | Mera Darzi",
    description:
      "Tailor shop management tips, guides aur best practices. Seekhein apni darzi shop ko digital kaise banayein.",
    images: ["/og-images/MeraDarzi.jpg"],
  },
}

const CATEGORIES = [...new Set(BLOG_POSTS.map((p) => p.category))]

export default function BlogIndexPage() {
  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "Blog", url: "https://www.meradarzi.pk/blog" },
        ]}
      />
      <WebPageSchema
        title="Tailor Management Blog | Mera Darzi"
        description="Tailor shop management tips, guides aur best practices. Seekhein apni darzi shop ko digital kaise banayein."
        datePublished="2026-01-15"
        dateModified="2026-06-11"
      />

      <section className="bg-linear-to-br from-slate-900 to-blue-950 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Tailor Management Blog
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">
            Tips, guides aur best practices — sab kuch apni tailor shop ko digital aur profitable banane ke liye
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="text-sm text-slate-500 font-medium mr-2 py-2">Categories:</span>
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-2 rounded-full">
            All
          </span>
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="bg-slate-200 text-slate-600 text-xs font-semibold px-3 py-2 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl border border-slate-200 p-6
                         hover:border-blue-300 hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300 flex flex-col"
            >
              <div className="mb-4">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>
              <h2 className="font-bold text-slate-800 text-lg mb-3 group-hover:text-blue-700 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400 mt-auto pt-4 border-t border-slate-100">
                <span>{post.datePublished}</span>
                <span>{post.readMinutes} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
