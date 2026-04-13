import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Impact | Stories of Change | AFJS Trust",
  description: "See the real impact of your donations. AFJS Trust has supported 500+ children and 200+ families in Bhavnagar and Ahmedabad. Read impact stories and see our photo gallery.",
  openGraph: {
    title: "Our Impact | AFJS Trust — 500+ Children, 200+ Families in Gujarat",
    description: "Real stories, real numbers. See what donations to AFJS Trust have achieved for children and families in Bhavnagar and Ahmedabad.",
    images: [{ url: "/images/education-group.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/images/education-group.jpg"] },
};

const stories = [
  {
    title: "From Dropout Risk to Star Student",
    image: "/images/education-group.jpg",
    program: "Child Education",
    story: "Priya was at risk of dropping out of school at age 9 when her family faced severe financial hardship. AFJS Trust enrolled her at St. Xavier's Primary School with full scholarship support. Today, she ranks in the top 5 of her class and dreams of becoming a teacher.",
    impact: "Full year scholarship + tutoring support",
  },
  {
    title: "Breaking Barriers for Girls",
    image: "/images/girl-empowerment-right.jpg",
    program: "Girl Empowerment",
    story: "Her family initially resisted sending her to school, believing education was unnecessary for girls. AFJS Trust supported her through school fees, mentorship, and family engagement. She completed her 12th standard — the first girl in her family to do so.",
    impact: "Completed 12th std · First in family to finish secondary school",
  },
  {
    title: "No Child Goes Hungry",
    image: "/images/nutrition-kids-1.jpg",
    program: "Food & Nutrition",
    story: "During a period of drought, dozens of families in Bhavnagar couldn't afford adequate meals. Our emergency nutrition drives provided hot meals daily for three months, ensuring children stayed healthy and in school.",
    impact: "1,200 meals delivered over 3 months",
  },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://joyfullsmiles.org" },
    { "@type": "ListItem", position: 2, name: "Our Impact", item: "https://joyfullsmiles.org/impact" },
  ],
};

const impactPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Impact | AFJS Charitable Trust",
  url: "https://joyfullsmiles.org/impact",
  dateModified: "2026-04-14",
  description: "Real impact data from AFJS Charitable Trust — children supported, meals served, families helped in Bhavnagar and Ahmedabad.",
};

export default function ImpactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(impactPageSchema) }} />
      <div className="bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-16 px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Real Stories</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Our Impact</h1>
        <p className="text-teal-100 text-lg max-w-2xl mx-auto">Every number represents a child. Every story represents a family. This is what your donation does.</p>
      </div>

      {/* Numbers */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Children Educated" },
            { value: "200+", label: "Families Supported" },
            { value: "1,000+", label: "Meals Served" },
            { value: "4", label: "Active Programs" },
          ].map((s) => (
            <div key={s.label} className="text-center p-5 bg-teal-50 rounded-2xl">
              <p className="text-3xl font-extrabold text-teal-500 mb-1">{s.value}</p>
              <p className="text-gray-600 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact stories */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {stories.map((story, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-8 items-center`}>
            <div className={`relative h-64 rounded-3xl overflow-hidden shadow-xl ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <Image src={story.image} alt={story.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-600 text-xs font-bold rounded-full mb-3">{story.program}</span>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4 italic">&ldquo;{story.story}&rdquo;</p>
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2 text-sm">
                <span className="text-teal-500 font-bold">Impact:</span>
                <span className="text-gray-600">{story.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Real academic result */}
      <div className="bg-teal-50 border-y border-teal-100 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
              Real Results, Real School
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Academic proof from{" "}
              <span className="text-teal-500">St. Xavier&apos;s Primary School</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              A sponsored child&apos;s Semester 1 progress report — Academic Year 2025–26. Result: <strong>PASS · 84.14%</strong>. Student name blurred to protect privacy.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Report card with name blurred */}
            <div className="relative w-full max-w-xs mx-auto shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="/images/child-result-1.jpeg"
                alt="Student progress report — St. Xavier's Primary School, Bhavnagar 2025-26"
                className="w-full h-auto block"
                loading="lazy"
              />
              {/* Blur overlay over student name row */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "11.5%",
                  left: "20%",
                  right: "5%",
                  height: "5%",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  backgroundColor: "rgba(248,248,248,0.85)",
                  borderRadius: "3px",
                }}
              />
            </div>
            {/* Callout stats */}
            <div className="space-y-5 max-w-sm">
              <div className="bg-white rounded-2xl p-5 border border-teal-100 shadow-sm">
                <p className="text-4xl font-extrabold text-teal-500 mb-1">84.14%</p>
                <p className="text-gray-700 font-semibold">Overall Semester Score</p>
                <p className="text-gray-400 text-sm mt-0.5">St. Xavier&apos;s Primary School, Bhavnagar</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-teal-100 shadow-sm">
                <p className="text-2xl font-extrabold text-green-500 mb-1">PASS ✓</p>
                <p className="text-gray-700 font-semibold">Academic Year 2025–26, Semester 1</p>
                <p className="text-gray-400 text-sm mt-0.5">Subject scores across Gujarati, Hindi, English, Sanskrit, Social Science, Mathematics, Science &amp; Technology</p>
              </div>
              <div className="bg-teal-900 rounded-2xl p-5 text-white">
                <p className="text-sm leading-relaxed">
                  This child was enrolled at St. Xavier&apos;s through AFJS Trust&apos;s full sponsorship programme — school fees, books, uniform, and nutrition support all covered.
                </p>
                <p className="text-teal-300 text-xs mt-2 font-semibold">₹25,000/year sponsors one child like this.</p>
              </div>
              <a
                href="/donate"
                className="block w-full text-center px-6 py-3.5 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5"
              >
                Sponsor a Child Now ❤
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Moments from the Field</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["/images/girl-empowerment-2.jpg", "/images/impact-donation.jpg", "/images/nutrition-kids-3.jpg",
              "/images/girl-empowerment-3.jpg", "/images/community-food.jpg", "/images/education-laptops.jpg"].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src={src} alt="AFJS Trust impact" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 px-4 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Be Part of the Next Success Story</h3>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/donate" className="px-8 py-3.5 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5">Donate Now</Link>
          <a href="https://wa.me/916357369174" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5">Talk to Us</a>
        </div>
      </div>
    </>
  );
}
