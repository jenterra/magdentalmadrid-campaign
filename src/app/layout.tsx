import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteScroll } from "@/components/SiteScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `Implantes dentales Madrid | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "implantes dentales Madrid",
    "implantes dentales Hortaleza",
    "implantes carga inmediata",
    "MAG Dental Madrid",
    "Dr. Alejandro Prieto implantes",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.domain,
    siteName: SITE.name,
    title: `Implantes dentales en Madrid – ${SITE.name}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/favicon.png" },
  alternates: { canonical: "/" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: SITE.name,
  url: SITE.domain,
  description: SITE.description,
  telephone: "+34-608-878-877",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. de Canillas, 136 posterior",
    addressLocality: "Madrid",
    postalCode: "28043",
    addressCountry: "ES",
  },
  areaServed: "Madrid",
  medicalSpecialty: "Implantología dental",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${manrope.variable} scroll-smooth`}>
      <body>
        <SiteScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
