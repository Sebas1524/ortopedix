import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.siteUrl,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address,
                addressCountry: "EC",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
              priceRange: "$$",
              medicalSpecialty: "Physical Therapy",
            }),
          }}
        />
      </head>
      <body className={inter.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
