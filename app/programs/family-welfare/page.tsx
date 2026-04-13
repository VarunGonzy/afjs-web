import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family Welfare Program | AFJS Trust - Support Families in Gujarat",
  description: "AFJS Trust's family welfare program provides holistic support to underprivileged families in Bhavnagar, enabling them to keep their children in school and build a better future.",
  openGraph: {
    title: "Family Welfare Program | AFJS Trust - Support Families in Gujarat",
    description: "Holistic support for underprivileged families in Bhavnagar — keeping children in school through family stability. Donate to AFJS Trust.",
    images: [{ url: "/images/family-welfare-1.jpg", width: 1200, height: 630, alt: "AFJS Trust family welfare programme — Bhavnagar" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/family-welfare-1.jpg"] },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://joyfullsmiles.org" },
    { "@type": "ListItem", position: 2, name: "Programs", item: "https://joyfullsmiles.org/programs" },
    { "@type": "ListItem", position: 3, name: "Family Welfare", item: "https://joyfullsmiles.org/programs/family-welfare" },
  ],
};

export default function FamilyWelfarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="relative bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20"><Image src="/images/family-welfare-1.jpg" alt="" fill className="object-cover" style={{ objectPosition: "center 40%" }} /></div>
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Program 4 of 4</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Family Welfare Support Programme in Bhavnagar</h1>
          <p className="text-teal-100 text-xl">When you help one child, you help an entire family.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/family-welfare-1.jpg" alt="Family welfare support" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: "center 40%" }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Holistic Family Support</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Education doesn't happen in a vacuum. When families face extreme poverty, children are often pulled out of school to work or simply can't afford the basics. Our Family Welfare program addresses this systemic challenge directly.</p>
            <p className="text-gray-600 leading-relaxed mb-4">We work with entire families — not just children — providing welfare support, connecting them with available government schemes, and empowering parents with the resources and knowledge to prioritize education.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              {["Economic support for vulnerable families", "Awareness of government welfare schemes", "Parent education and engagement programs", "Emergency assistance during crises", "Women empowerment within families", "Community network building"].map(i => (
                <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />{i}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-teal-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-teal-900 mb-2">Support a Family Today</h3>
          <p className="text-gray-600 mb-6">Your donation strengthens entire families, creating ripple effects that last for generations.</p>
          <Link href="/donate" className="inline-block px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5">Donate for Family Welfare</Link>
        </div>
      </div>
    </>
  );
}
