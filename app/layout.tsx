import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "AFJS Trust — All For Joyful Smiles | Child Education NGO in India",
    template: "%s | AFJS Trust",
  },
  description:
    "AFJS Charitable Trust (All For Joyful Smiles) supports underprivileged children in Bhavnagar & Ahmedabad through education, girl empowerment, nutrition drives, and family welfare. Donate online to sponsor a child.",
  keywords: [
    "donate to children education india",
    "child education ngo india",
    "girl empowerment ngo india",
    "sponsor a child india",
    "80G tax exemption donation india",
    "ngo bhavnagar gujarat",
    "food nutrition charity india",
    "afjs trust",
    "all for joyful smiles",
    "joyfullsmiles.org",
  ],
  metadataBase: new URL("https://joyfullsmiles.org"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://joyfullsmiles.org",
    siteName: "AFJS Trust",
    images: [{ url: "/images/homepage-banner.jpg", width: 1200, height: 630, alt: "AFJS Trust — All For Joyful Smiles" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://joyfullsmiles.org",
    languages: {
      "en-IN": "https://joyfullsmiles.org",
      "en-US": "https://joyfullsmiles.org",
      "en-GB": "https://joyfullsmiles.org",
      "x-default": "https://joyfullsmiles.org",
    },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": "https://joyfullsmiles.org/#organization",
      name: "AFJS Charitable Trust",
      alternateName: "All For Joyful Smiles",
      url: "https://joyfullsmiles.org",
      logo: { "@type": "ImageObject", url: "https://joyfullsmiles.org/images/logo-icon.jpg" },
      description: "Charitable trust supporting underprivileged children in Gujarat through education, nutrition, and family welfare.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Block No. 103, Catholic Society, Vidhyanagar",
        addressLocality: "Bhavnagar",
        addressRegion: "Gujarat",
        postalCode: "364002",
        addressCountry: "IN",
      },
      telephone: "+91-63573-69174",
      email: "Afjs.charitable@gmail.com",
      sameAs: ["https://www.instagram.com/afjs_charitable_trust/"],
      foundingDate: "2025",
      taxID: "AALTA7481L",
      member: [
        { "@type": "Person", name: "John Dsouza", jobTitle: "Founder & Secretary, AFJS Charitable Trust" },
        { "@type": "Person", name: "Varun Gonsalves", jobTitle: "Co-Founder & International Support, AFJS Charitable Trust" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://joyfullsmiles.org/#website",
      url: "https://joyfullsmiles.org",
      name: "AFJS Trust",
      publisher: { "@id": "https://joyfullsmiles.org/#organization" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-icon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo-icon.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
