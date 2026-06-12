import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { BLOG_POSTS } from "@/lib/blog"
import { BreadcrumbSchema, WebPageSchema } from "@/components/seo/JsonLd"

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.title} | Mera Darzi Blog`,
    description: post.description.slice(0, 160),
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.meradarzi.pk/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Mera Darzi Blog`,
      description: post.description.slice(0, 160),
      url: `https://www.meradarzi.pk/blog/${post.slug}`,
      locale: "en_US",
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [
        {
          url: "/og-images/MeraDarzi.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "Mera Darzi",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Mera Darzi Blog`,
      description: post.description.slice(0, 160),
      images: ["/og-images/MeraDarzi.jpg"],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: "Mera Darzi",
      url: "https://www.meradarzi.pk",
    },
    publisher: {
      "@type": "Organization",
      name: "Mera Darzi",
      url: "https://www.meradarzi.pk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.meradarzi.pk/blog/${post.slug}`,
    },
  }

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.meradarzi.pk" },
          { name: "Blog", url: "https://www.meradarzi.pk/blog" },
          { name: post.title, url: `https://www.meradarzi.pk/blog/${post.slug}` },
        ]}
      />
      <WebPageSchema
        title={`${post.title} | Mera Darzi Blog`}
        description={post.description}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-blue-600
                     text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar size={12} />
              {post.datePublished}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock size={12} />
              {post.readMinutes} min read
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            {post.title}
          </h1>
          <p className="text-slate-500 text-lg mt-4 leading-relaxed">
            {post.description}
          </p>
        </header>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="space-y-5 text-slate-700 text-base leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          <Tag size={16} className="text-slate-400 mt-0.5" />
          {post.keywords.slice(0, 4).map((kw) => (
            <span
              key={kw}
              className="text-xs bg-slate-200 text-slate-600 font-medium px-3 py-1.5 rounded-full"
            >
              {kw}
            </span>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Ready to digitize your shop?</h2>
          <p className="text-slate-500 mb-6">MeraDarzi se apni tailor shop ko digital banayein. Free start.</p>
          <Link
            href="https://app.meradarzi.pk/"
            target="_blank"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold
                       px-8 py-3.5 rounded-2xl text-base hover:bg-blue-700 transition-all active:scale-95"
          >
            Free Registration — 30 Orders Free
          </Link>
        </div>
      </article>
    </div>
  )
}
