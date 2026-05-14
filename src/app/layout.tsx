// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mera Darzi",
    template: "%s | Mera Darzi",
  },
  description:
    "Pakistan ka pehla tailor management app orders, measurements, payments. Offline bhi kaam kare.",
  keywords: ["tailor", "darzi", "pakistan", "order management", "kapra"],
  openGraph: {
    title: "Mera Darzi",
    description: "Pakistan ka pehla tailor management app",
    url: "https://meradarzi.pk",
    siteName: "Mera Darzi",
    locale: "ur_PK",
    type: "website",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mera Darzi",
  },
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: "/icons/icon-32.png", sizes: "32x32" },
      { url: "/icons/icon-96.png", sizes: "96x96" },
      { url: "/icons/icon-192.png", sizes: "192x192" },
    ],
    apple: [{ url: "/icons/icon-152.png", sizes: "152x152" }],
  },
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
      >
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      </body>
    </html>
  );
}
