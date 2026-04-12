import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joyfullsmiles.org"),
  title: {
    default: "AFJS Trust | Child Education, Girl Empowerment & Nutrition NGO India",
    template: "%s | AFJS Trust - All For Joyful Smiles",
  },
  description:
    "Support underprivileged children in Gujarat through education, girl empowerment, nutrition, and family welfare. Donate online via Razorpay with 80G tax exemption. AFJS Charitable Trust, Bhavnagar.",
  keywords: [
    "donate children education india",
    "child education ngo india",
    "girl empowerment ngo india",
    "food nutrition charity india",
    "family welfare ngo",
    "donate online india 80G",
    "ngo bhavnagar gujarat",
    "sponsor child education india",
    "charitable trust india donation",
    "AFJS trust all for joyful smiles",
  ],
  authors: [{ name: "AFJS Charitable Trust" }],
  creator: "AFJS Charitable Trust",
  publisher: "AFJS Charitable Trust",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://joyfullsmiles.org",
    siteName: "AFJS Trust - All For Joyful Smiles",
    title: "AFJS Trust | Donate to Child Education & Girl Empowerment in India",
    description:
      "Help underprivileged children access education, nutrition, and empowerment. Donate securely via Razorpay. 80G tax exempt. Based in Bhavnagar, Gujarat.",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "AFJS Trust - All For Joyful Smiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFJS Trust | Child Education NGO India",
    description:
      "Donate to support child education, girl empowerment, nutrition & family welfare in Gujarat, India.",
    images: ["/images/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
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
  "@type": "NGO",
  name: "AFJS Trust - All For Joyful Smiles",
  alternateName: "All For Joyful Smiles Charitable Trust",
  url: "https://joyfullsmiles.org",
  logo: "https://joyfullsmiles.org/images/logo-icon.jpg",
  description:
    "AFJS Charitable Trust provides education, nutrition, girl empowerment, and family welfare support to underprivileged children in Gujarat, India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block No. 103, Catholic Society, Vidhyanagar",
    addressLocality: "Bhavnagar",
    addressRegion: "Gujarat",
    postalCode: "364002",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-63573-69174",
    contactType: "customer service",
    email: "Afjs.charitable@gmail.com",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
  sameAs: [
    "https://www.instagram.com/afjs_charitable_trust/",
  ],
  areaServed: ["IN", "US", "GB"],
  taxID: "AALTA7481L",
  foundingDate: "2025",
  knowsAbout: [
    "Child Education",
    "Girl Empowerment",
    "Food and Nutrition",
    "Family Welfare",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AFJS Trust - All For Joyful Smiles",
  url: "https://joyfullsmiles.org",
  description: "NGO providing child education, girl empowerment, nutrition and family welfare in Bhavnagar, Gujarat, India.",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://joyfullsmiles.org/blog?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

const personSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "John Dsouza",
    jobTitle: "Founder & Secretary, AFJS Charitable Trust",
    description: "John Dsouza is the secretary and brainchild of AFJS Charitable Trust, born and raised in Bhavnagar, Gujarat. He founded the trust after witnessing the hardships of underprivileged children in his hometown.",
    worksFor: { "@type": "NGO", name: "AFJS Charitable Trust" },
    address: { "@type": "PostalAddress", addressLocality: "Bhavnagar", addressRegion: "Gujarat", addressCountry: "IN" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Varun Gonsalves",
    jobTitle: "Co-Founder & International Support, AFJS Charitable Trust",
    description: "Varun Gonsalves grew up alongside John Dsouza in Bhavnagar and now supports AFJS Trust from Germany, helping fund and raise awareness for child education and community welfare.",
    worksFor: { "@type": "NGO", name: "AFJS Charitable Trust" },
    address: { "@type": "PostalAddress", addressLocality: "Germany" },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Hreflang — explicit for Next.js 16 compatibility */}
        <link rel="alternate" hrefLang="en-IN" href="https://joyfullsmiles.org/" />
        <link rel="alternate" hrefLang="en-US" href="https://joyfullsmiles.org/" />
        <link rel="alternate" hrefLang="en-GB" href="https://joyfullsmiles.org/" />
        <link rel="alternate" hrefLang="x-default" href="https://joyfullsmiles.org/" />
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {personSchemas.map((p, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(p) }} />
        ))}
        <link rel="icon" href="/images/logo-icon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo-icon.jpg" />
        <meta name="theme-color" content="#2A9DA5" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Bhavnagar, Gujarat, India" />
        <meta name="geo.position" content="21.7645;72.1519" />
        <meta name="ICBM" content="21.7645, 72.1519" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
