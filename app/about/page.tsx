import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | AFJS Trust — All For Joyful Smiles",
  description: "Learn about AFJS Charitable Trust — our mission, vision, founders John Dsouza and Varun Gonsalves, and our work in Bhavnagar and Ahmedabad, Gujarat.",
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "AFJS Charitable Trust",
  foundingDate: "2025",
  description: "Charitable trust supporting underprivileged children in Gujarat through education, nutrition, and family welfare.",
  member: [
    { "@type": "Person", name: "John Dsouza", jobTitle: "Founder & Secretary" },
    { "@type": "Person", name: "Varun Gonsalves", jobTitle: "Co-Founder & International Support" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <div className="bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-16 px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Our Story</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">About AFJS Trust</h1>
        <p className="text-teal-100 text-lg max-w-2xl mx-auto">Two friends from Bhavnagar. One shared mission. Thousands of lives touched.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-teal-50 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-teal-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Provide education, nutrition, learning materials, and holistic support to underprivileged children in Gujarat, particularly in Bhavnagar and Ahmedabad — so that every child, regardless of their family&apos;s economic situation, can access quality education and a healthy childhood.
            </p>
          </div>
          <div className="bg-coral-50 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              Communities where education breaks the cycle of poverty and creates generations of empowered, joyful families — where no child is left behind because of circumstance.
            </p>
          </div>
        </div>

        {/* Founders */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-3">The People Behind It</span>
            <h2 className="text-3xl font-bold text-gray-900">Meet the Founders</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* John */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-lg shadow-teal-500/30">
                  <Image src="/images/john-1.png" alt="John Dsouza" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">John Dsouza</h3>
                  <p className="text-teal-600 text-sm font-semibold">Founder & Secretary, AFJS Trust</p>
                  <p className="text-gray-400 text-xs mt-0.5">Bhavnagar, Gujarat</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                John grew up in Bhavnagar and witnessed first-hand the barriers that prevent underprivileged children from accessing education. After years of carrying the memory of children he&apos;d seen fall through the cracks, he co-founded AFJS Trust with a simple belief: doing something small, consistently and with heart, can change lives. He leads all day-to-day operations and programme delivery.
              </p>
            </div>

            {/* Varun */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-lg shadow-coral-400/30">
                  <Image src="/images/vj-2.png" alt="Varun Gonsalves" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Varun Gonsalves</h3>
                  <p className="text-coral-500 text-sm font-semibold">Co-Founder & International Support</p>
                  <p className="text-gray-400 text-xs mt-0.5">Germany (Bhavnagar-born)</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Varun grew up alongside John in Bhavnagar before moving to Germany for work. Distance never dimmed his commitment to the children of his hometown. He connects AFJS Trust with the Indian diaspora in Europe, drives international donor outreach, and provides strategic and financial support — proving that geography is no barrier to impact.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-teal-950 rounded-3xl p-8 text-center">
            <p className="text-teal-100 text-lg italic leading-relaxed">
              &ldquo;These are our people. These are the kids from our lanes. We didn&apos;t escape poverty — we were lucky. And lucky looks a lot like privilege when you&apos;re the one who made it out.&rdquo;
            </p>
            <p className="text-gray-400 text-sm mt-4">— John Dsouza &amp; Varun Gonsalves, Co-Founders</p>
          </div>
        </div>

        {/* Registrations */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Legal & Registration Details</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Organization", value: "AFJS Charitable Trust" },
              { label: "Darpan Registration", value: "GJ/2025/0719739" },
              { label: "PAN", value: "AALTA7481L" },
              { label: "Trust Registration", value: "F/3788/Bhavnagar" },
              { label: "Operating Hub", value: "St. Xavier's High School, Bhavnagar" },
              { label: "Also Serving", value: "Ahmedabad, Gujarat" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-4 border border-gray-100">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                <p className="font-bold text-gray-900 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/donate" className="px-8 py-3.5 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5 mr-3">
            Support Our Work
          </Link>
          <Link href="/programs" className="px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5">
            See Our Programs
          </Link>
        </div>
      </div>
    </>
  );
}
