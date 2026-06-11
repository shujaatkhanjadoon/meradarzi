// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Poppins } from "next/font/google";
import { OrganizationSchema } from "@/components/seo/JsonLd";
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
      "Mera Darzi - Best Tailor Management Software in Pakistan",
    template: "%s | Mera Darzi - Tailor Management Software Pakistan",
  },

  description:
    "Mera Darzi is Pakistan's leading tailor management software for darzis and boutiques. Manage orders, customer measurements, payments, stitching records, and delivery tracking all in one app. Free plan available.",

  keywords: [
    "tailor management software Pakistan",
    "darzi app Pakistan",
    "boutique management system Pakistan",
    "tailor shop software Pakistan",
    "measurement management app",
    "stitching order management",
    "fashion boutique software",
    "customer measurement app",
    "tailor business Pakistan",
    "meradarzi",
    "darzi software Pakistan",
    "tailor POS system Pakistan",
    "garment shop management software",
    "order management software for tailors",
    "tailoring business software",
    "tailor management system Lahore",
    "darzi app Karachi",
    "boutique management software",
    "tailor shop management system",
    "tailor app Pakistan",
  ],

  openGraph: {
    title:
      "Mera Darzi - Pakistan's #1 Tailor Management App",
    description:
      "Manage tailoring orders, customer measurements, payments, and delivery tracking with Mera Darzi — Pakistan's modern tailoring management solution. Free forever plan available.",
    url: "https://meradarzi.pk/",
    siteName: "Mera Darzi",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: '/og-images/MeraDarzi.jpg',
        width: 1200,
        height: 630,
        alt: 'Mera Darzi - Tailor Management Software Pakistan',
      },
    ],
    countryName: "Pakistan",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mera Darzi - Tailor Management Software Pakistan",
    description:
      "All-in-one tailoring management system for darzis and boutiques in Pakistan. Free plan available.",
    images: ['/og-images/MeraDarzi.jpg'],
  },

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mera Darzi",
  },

  formatDetection: {
    telephone: true,
  },

  metadataBase: new URL("https://meradarzi.pk"),

  alternates: {
    canonical: "https://meradarzi.pk",
    languages: {
      "en-PK": "https://meradarzi.pk",
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
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
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
    <html lang="en-PK" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} min-w-0 overflow-x-clip font-sans antialiased`}
      >
        <>
          <OrganizationSchema />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      </body>
    </html>
  );
}
