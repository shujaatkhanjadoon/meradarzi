export function SoftwareAppSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mera Darzi",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description:
      "Pakistan's leading tailor management software. Manage orders, customer measurements, payments, karigar assignments, and delivery tracking.",
    url: "https://www.meradarzi.pk",
    sameAs: [
      "https://wa.me/923135931459",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PKR",
      lowPrice: "0",
      highPrice: "2499",
      offerCount: "3",
      offers: [
        { "@type": "Offer", name: "Starter", price: "0", priceCurrency: "PKR" },
        { "@type": "Offer", name: "Professional", price: "999", priceCurrency: "PKR" },
        { "@type": "Offer", name: "Business", price: "2499", priceCurrency: "PKR" },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
      bestRating: "5",
    },
    author: {
      "@type": "Organization",
      name: "Mera Darzi",
      url: "https://www.meradarzi.pk",
    },
    screenshot: "https://www.meradarzi.pk/icon-512.png",
    featureList: [
      "Smart Order Tracking",
      "Customer QR Tracking",
      "Karigar Management",
      "Payment Tracking",
      "Offline Support",
      "Reports & Analytics",
      "WhatsApp Integration",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mera Darzi",
    url: "https://www.meradarzi.pk",
    logo: "https://www.meradarzi.pk/logo.png",
    description:
      "Pakistan's leading tailor management software for darzis and boutiques.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+92-313-5931459",
        contactType: "customer service",
        availableLanguage: ["English", "Urdu"],
      },
    ],
    sameAs: [
      "https://wa.me/923135931459",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mera Darzi - Tailor Management Software",
    description:
      "Pakistan's leading tailor management software for darzis and boutiques.",
    brand: {
      "@type": "Brand",
      name: "Mera Darzi",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ahmed Raza" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Pehle roz subah diary dhundta tha. Ab sab phone pe hai. Customers bhi khush hain — QR se khud status check karte hain.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Muhammad Rashid" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Meri dukaan mein 5 karigar hain. Pehle confusion hoti thi kaun kya kar raha hai. Ab sab clear hai. Highly recommended!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Asif Tailors" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Professional plan mein reports dekhna shuru kiya to pata chala Sherwani sabse zyada order hoti hai. Business strategy change kar li.",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "150",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema({
  title,
  description,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: "https://www.meradarzi.pk",
    inLanguage: "en",
    about: {
      "@type": "Thing",
      name: "Tailor Management Software",
      description: "Digital tailor management and boutique management software for Pakistan",
    },
  };

  if (datePublished) schema.datePublished = datePublished;
  if (dateModified) schema.dateModified = dateModified;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema({
  city,
  province,
  shops,
}: {
  city: string;
  province: string;
  shops: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Mera Darzi - ${city}`,
    description: `Tailor management software serving ${city}, ${province}. ${shops}+ shops trust Mera Darzi.`,
    url: `https://www.meradarzi.pk/cities/${city.toLowerCase().replace(/\s+/g, "-")}`,
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: province,
        address: {
          "@type": "PostalAddress",
          addressCountry: "PK",
        },
      },
    },
    availableLanguage: ["English", "Urdu"],
    currenciesAccepted: "PKR",
    paymentAccepted: ["Cash", "Easypaisa", "JazzCash", "Raast", "Bank Transfer"],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
