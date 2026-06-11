export function SoftwareAppSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://www.meradarzi.pk/#softwareapplication",
    name: "Mera Darzi",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description:
      "Pakistan's leading tailor management software. Manage orders, customer measurements, payments, karigar assignments, and delivery tracking.",
    url: "https://www.meradarzi.pk",
    sameAs: [
      "https://wa.me/923135634667",
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
      "@id": "https://www.meradarzi.pk/#organization",
    },
    screenshot: "https://www.meradarzi.pk/icon-512.png",
    featureList: [
      "Order Tracking with QR Code",
      "Karigar Management",
      "Payment Tracking",
      "Measurements & Photos",
      "Offline Support",
      "Reports & Analytics",
      "WhatsApp Notifications",
      "Cloud Database",
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
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.meradarzi.pk/#organization",
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
        telephone: "+92-313-5634667",
        contactType: "customer service",
        availableLanguage: ["English", "Urdu"],
      },
    ],
    sameAs: [
      "https://wa.me/923135634667",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.meradarzi.pk/#website",
    name: "Mera Darzi",
    url: "https://www.meradarzi.pk",
    publisher: {
      "@id": "https://www.meradarzi.pk/#organization",
    },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
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
    "@id": "https://www.meradarzi.pk/#product",
    name: "Mera Darzi - Tailor Management Software",
    description:
      "Pakistan's leading tailor management software for darzis and boutiques.",
    brand: {
      "@type": "Brand",
      "@id": "https://www.meradarzi.pk/#organization",
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
          "Reports dekhna shuru kiya to pata chala Sherwani sabse zyada order hoti hai. Business strategy change kar li. Mera Darzi ne meri dukaan badal di!",
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
    "@id": "https://www.meradarzi.pk/#webpage",
    name: title,
    description,
    url: "https://www.meradarzi.pk",
    inLanguage: "en",
    isPartOf: {
      "@id": "https://www.meradarzi.pk/#website",
    },
    about: {
      "@id": "https://www.meradarzi.pk/#organization",
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

export function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use Mera Darzi — 4 Simple Steps",
    description: "2 minute mein shuru karein. Koi training nahi chahiye.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Free Account Banayein",
        text: "Phone number daalein, dukaan ka naam likhein. 2 minute mein ready.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Orders Add Karein",
        text: "Gahak ki nap, kapra details, delivery date — sab ek form mein.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Karigar Ko Assign Karein",
        text: "Kaunsa karigar kya karega? Assign karein aur track karein.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Deliver Karein & Earn Karein",
        text: "Order deliver ho, payment record ho, customer happy ho.",
      },
    ],
    inLanguage: "ur",
    tool: [{ "@type": "HowToTool", name: "Smartphone ya Laptop" }],
    totalTime: "PT2M",
  };

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
