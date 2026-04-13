import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Girl Empowerment Program | Donate to Girl Education in India | AFJS Trust",
  description: "AFJS Trust's girl empowerment program provides education, mentorship, and confidence-building for girls in Bhavnagar, Gujarat. Donate to support girl empowerment in India.",
  openGraph: {
    title: "Girl Empowerment Program | Donate to Girl Education in India | AFJS Trust",
    description: "Education, mentorship and confidence-building for girls at risk of dropping out in Bhavnagar, Gujarat. Donate to AFJS Trust.",
    images: [{ url: "/images/girl-empowerment-1.jpg", width: 1200, height: 630, alt: "Girl empowerment programme — AFJS Trust Bhavnagar" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/girl-empowerment-1.jpg"] },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://joyfullsmiles.org" },
    { "@type": "ListItem", position: 2, name: "Programs", item: "https://joyfullsmiles.org/programs" },
    { "@type": "ListItem", position: 3, name: "Girl Empowerment", item: "https://joyfullsmiles.org/programs/girl-empowerment" },
  ],
};

export default function GirlEmpowermentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="relative bg-gradient-to-br from-coral-600 to-coral-400 pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20"><Image src="/images/girl-empowerment-2.jpg" alt="" fill className="object-cover" style={{ objectPosition: "center 33%" }} /></div>
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Program 2 of 4</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Girl Empowerment &amp; Education Programme — AFJS Trust</h1>
          <p className="text-orange-100 text-xl">Educate a girl. Change her family. Transform a generation.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl md:order-1">
            <Image src="/images/girl-empowerment-1.jpg" alt="Girl empowerment" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: "center 30%" }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Girls?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Research consistently shows that educating girls produces a ripple effect across entire communities — when a girl stays in school, her children are more likely to be educated, her family is healthier, and her community is stronger.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Our girl empowerment program specifically targets girls who face the highest risk of dropping out — due to family economic pressure, early marriage, or lack of confidence — and provides them with scholarships, mentors, and a community of support.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              {["Educational scholarships for girls", "One-on-one mentorship", "Confidence and life skills workshops", "Safe community spaces for girls", "Family engagement and awareness", "Career guidance sessions"].map(i => (
                <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-coral-400 shrink-0" />{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-coral-400/10 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Support Girl Education Today</h3>
          <p className="text-gray-600 mb-6">₹25,000 sponsors a girl's full year of education. Even ₹500 buys her books for a semester.</p>
          <Link href="/donate" className="inline-block px-8 py-3.5 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5">Donate for Girl Empowerment</Link>
        </div>
      </div>
    </>
  );
}
