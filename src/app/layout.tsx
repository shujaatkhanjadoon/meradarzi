// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Poppins } from "next/font/google";
import { OrganizationSchema } from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});


export const metadata: Metadata = {
  title: {
    default:
      "Mera Darzi - Best Tailor Management Software in Pakistan | Free Tailor App",
    template: "%s | Mera Darzi - Tailor Management Software Pakistan",
  },

  description:
    "Pakistan ka tailor management app. Orders, customers, payments aur karigar — sab ek app mein. Urdu/English. Free plan available. PWA — mobile par bhi chale, offline bhi kaam kare.",

  keywords: [
    "tailor management app Pakistan",
    "darzi management software",
    "tailor shop billing app",
    "tailor management system Urdu",
    "best tailor app Pakistan",
    "tailor shop software free",
    "tailor order management app",
    "tailor business management",
    "tailor shop billing software in Urdu",
    "tailor management app for mobile",
    "salwar kameez measurement app",
    "tailor customer management system",
    "tailor payment tracking app",
    "tailor delivery date reminder app",
    "tailor karigar management",
    "tailor shop record keeping app",
    "Pakistan tailor shop digital solution",
    "boutique management app Pakistan",
    "darzi kaam record app",
    "meradarzi",
  ],

  openGraph: {
    title:
      "Mera Darzi - Best Tailor Management Software in Pakistan | Free Tailor App",
    description:
      "Pakistan ka tailor management app. Orders, customers, payments aur karigar — sab ek app mein. Urdu/English. Free plan available. PWA — mobile par bhi chale, offline bhi kaam kare.",
    url: "https://www.meradarzi.pk/",
    siteName: "Mera Darzi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-images/MeraDarzi.jpg',
        width: 1200,
        height: 630,
        alt: 'Mera Darzi - Tailor Management Software Pakistan',
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mera Darzi - Tailor Management Software Pakistan",
    description:
      "Pakistan ka tailor management app. Orders, customers, payments aur karigar — sab ek app mein. Free start. PWA works on all phones.",
    images: ['/og-images/MeraDarzi.jpg'],
  },

  formatDetection: {
    telephone: true,
  },

  metadataBase: new URL("https://www.meradarzi.pk"),

  alternates: {
    canonical: "https://www.meradarzi.pk",
    languages: {
      "en-PK": "https://www.meradarzi.pk",
      "ur-PK": "https://www.meradarzi.pk",
      "x-default": "https://www.meradarzi.pk",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
  },

  category: "technology",

  classification: "Tailor Management Software",
};

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} min-w-0 overflow-x-clip font-sans antialiased`}
        suppressHydrationWarning
      >
        <>
          <OrganizationSchema />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </>
      </body>
    </html>
  );
}
