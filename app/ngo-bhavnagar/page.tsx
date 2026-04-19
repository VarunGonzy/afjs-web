import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NGO in Bhavnagar Gujarat | AFJS Charitable Trust: Child Education & Welfare",
  description: "AFJS Charitable Trust is a registered NGO in Bhavnagar, Gujarat. We support underprivileged children through education, nutrition, and family welfare. Darpan Reg: GJ/2025/0719739.",
  openGraph: {
    title: "Registered NGO in Bhavnagar, Gujarat | AFJS Charitable Trust",
    description: "Child education, girl empowerment, nutrition and family welfare in Bhavnagar. Verified NGO. Darpan Reg: GJ/2025/0719739.",
    images: [{ url: "/images/hero-community.jpg", width: 1200, height: 630, alt: "AFJS Trust, NGO in Bhavnagar Gujarat" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/hero-community.jpg"] },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": ["NGO", "LocalBusiness"],
  name: "AFJS Charitable Trust",
  alternateName: "All For Joyful Smiles",
  description: "A registered NGO in Bhavnagar, Gujarat, India supporting underprivileged children through education, girl empowerment, nutrition, and family welfare programmes.",
  url: "https://joyfullsmiles.org",
  telephone: "+91-63573-69174",
  email: "Afjs.charitable@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block No. 103, Catholic Society, Vidhyanagar",
    addressLocality: "Bhavnagar",
    addressRegion: "Gujarat",
    postalCode: "364002",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 21.7645, longitude: 72.1519 },
  foundingDate: "2025",
  taxID: "AALTA7481L",
  areaServed: { "@type": "City", name: "Bhavnagar" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://joyfullsmiles.org" },
    { "@type": "ListItem", position: 2, name: "NGO Bhavnagar", item: "https://joyfullsmiles.org/ngo-bhavnagar" },
  ],
};

const programs = [
  {
    title: "Child Education",
    desc: "Scholarships and school fee support for underprivileged children at St. Xavier's Primary School, Devbagh, Bhavnagar.",
    href: "/programs/child-education",
    color: "bg-teal-500",
  },
  {
    title: "Girl Empowerment",
    desc: "Education, mentorship, and confidence-building for girls at risk of dropping out in Bhavnagar's underserved communities.",
    href: "/programs/girl-empowerment",
    color: "bg-coral-400",
  },
  {
    title: "Food & Nutrition Drive",
    desc: "Monthly nutrition drives delivering hot meals to children and families across Bhavnagar and Ahmedabad.",
    href: "/programs/food-nutrition",
    color: "bg-gold-500",
  },
  {
    title: "Family Welfare",
    desc: "Home visits, government scheme access, and holistic family support to keep children in school.",
    href: "/programs/family-welfare",
    color: "bg-teal-700",
  },
];

export default function NgoBhavnagarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/hero-community.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            NGO · Bhavnagar, Gujarat
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Registered NGO in Bhavnagar, Gujarat
          </h1>
          <p className="text-teal-100 text-xl max-w-2xl mx-auto mb-8">
            AFJS Charitable Trust works in Bhavnagar&apos;s underserved communities, educating children, empowering girls, and supporting families since 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-4 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full shadow-xl transition-all hover:-translate-y-0.5">
              Donate Now
            </Link>
            <a href="https://wa.me/916357369174" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-teal-700 font-bold rounded-full shadow-xl transition-all hover:-translate-y-0.5">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Registration details */}
      <section className="py-12 px-4 bg-teal-50">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-4 gap-4 text-center">
          {[
            { label: "Darpan Registration", value: "GJ/2025/0719739" },
            { label: "PAN (80G eligible)", value: "AALTA7481L" },
            { label: "Trust Registration", value: "F/3788/Bhavnagar" },
            { label: "Founded", value: "2025" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl p-4">
              <p className="text-xs text-teal-600 font-bold uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-gray-900 font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Bhavnagar */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">Why Bhavnagar</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Community-Rooted, Founder-Led</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              AFJS Trust was founded by John Dsouza and Varun Gonsalves, two people who grew up in Bhavnagar and saw firsthand what poverty does to children&apos;s futures. John still lives here. He knows these lanes. He knows these families.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our primary partner institution is <strong>St. Xavier&apos;s Primary School, Devbagh, Bhavnagar</strong> — one of the city&apos;s most respected schools. We pay fees directly to the school, with receipts photographed and shared with donors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We also run nutrition drives and family welfare programmes across several localities in Bhavnagar, and have a growing presence in Ahmedabad.
            </p>
          </div>
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/community-food.jpg" alt="AFJS Trust nutrition drive in Bhavnagar" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Our Programmes in Bhavnagar</h2>
            <p className="text-gray-500 mt-3">Four programmes. One mission: joyful, empowered children.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {programs.map((prog) => (
              <Link key={prog.title} href={prog.href} className="bg-white rounded-3xl p-6 shadow hover:shadow-lg transition-shadow group">
                <div className={`w-10 h-1.5 ${prog.color} rounded-full mb-4`} />
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{prog.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{prog.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Our Work in Bhavnagar</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/nutrition-kids-2.jpg", alt: "Nutrition drive: children receiving meals in Bhavnagar" },
              { src: "/images/girl-empowerment-1.jpg", alt: "Girl empowerment programme in Bhavnagar" },
              { src: "/images/education-group.jpg", alt: "Children supported by AFJS Trust, Bhavnagar" },
              { src: "/images/community-food.jpg", alt: "Community food distribution by AFJS Trust" },
              { src: "/images/education-laptops.jpg", alt: "Digital literacy session for girls" },
              { src: "/images/hero-community.jpg", alt: "AFJS Trust community outreach, Bhavnagar" },
            ].map((img) => (
              <div key={img.src} className="relative h-44 rounded-2xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address + contact */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit or Contact Us in Bhavnagar</h2>
          <p className="text-gray-600 mb-2 font-medium">Block No. 103, Catholic Society, Vidhyanagar, Bhavnagar, Gujarat 364002</p>
          <p className="text-gray-600 mb-2">📞 <a href="tel:+916357369174" className="text-teal-600 hover:underline">+91 63573 69174</a></p>
          <p className="text-gray-600 mb-8">✉️ <a href="mailto:Afjs.charitable@gmail.com" className="text-teal-600 hover:underline">Afjs.charitable@gmail.com</a></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-4 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full shadow-xl transition-all hover:-translate-y-0.5">
              Donate to Support Our Work
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white text-teal-700 font-bold rounded-full shadow-xl transition-all hover:-translate-y-0.5 border border-teal-200">
              Contact Page →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
