import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import { BLOG_POSTS, BLOG_CATEGORIES, getCategoryBySlug, getPostsByCategory } from "@/lib/blog"
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/JsonLd"

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cat = getCategoryBySlug(slug)
  if (!cat) return { title: "Category Not Found" }

  return {
    title: `${cat.name} — Mera Darzi Blog`,
    description: cat.description,
    alternates: {
      canonical: `https://www.meradarzi.pk/blog/category/${cat.slug}`,
    },
    openGraph: {
      title: `${cat.name} — Mera Darzi Blog`,
      description: cat.description,
      url: `https://www.meradarzi.pk/blog/category/${cat.slug}`,
      locale: "en_US",
      type: "website",
      images: [{ url: "/og-images/MeraDarzi.jpg", width: 1200, height: 630, alt: `Mera Darzi Blog — ${cat.name}` }],
      siteName: "Mera Darzi",
    },
    twitter: {
      card: "summary_large_image",
      title: `${cat.name} — Mera Darzi Blog`,
      description: cat.description,
      images: ["/og-images/MeraDarzi.jpg"],
    },
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = getCategoryBySlug(slug)
  if (!cat) notFound()

  const posts = getPostsByCategory(slug)

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "Blog", url: "https://www.meradarzi.pk/blog" },
          { name: cat.name, url: `https://www.meradarzi.pk/blog/category/${cat.slug}` },
        ]}
      />
      <WebPageSchema
        title={`${cat.name} — Mera Darzi Blog`}
        description={cat.description}
        datePublished="2026-01-15"
        dateModified="2026-06-11"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="mb-10">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
            {cat.name}
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-3">{cat.name}</h1>
          <p className="text-slate-500 text-lg max-w-2xl">{cat.description}</p>
        </div>

        {posts.length === 0 ? (
          <p className="text-slate-400 text-center py-10">No posts in this category yet.</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all group">
                  <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Calendar size={13} /> {post.datePublished}</span>
                    <span className="flex items-center gap-1"><Clock size={13} /> {post.readMinutes} min read</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            All Blog Posts <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
