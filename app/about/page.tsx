import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, FileCheck, BookOpen, Users, Apple, Home, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Our Story - John Dsouza & Varun Gonsalves | AFJS Trust",
  description:
    "The story behind AFJS Charitable Trust — founded by John Dsouza and supported by Varun Gonsalves. Two childhood friends from Bhavnagar who turned lived experiences of hardship into a mission to educate and empower underprivileged children. Reg: GJ/2025/0719739.",
  openGraph: {
    title: "About AFJS Trust | Our Story - Bhavnagar to the World",
    description:
      "John Dsouza and Varun Gonsalves grew up together in Bhavnagar, Gujarat. They saw poverty and inequality firsthand. Today they run AFJS Trust — dedicated to giving every child a joyful, educated future.",
    images: ["/images/impact-donation.jpg"],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://joyfullsmiles.org" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://joyfullsmiles.org/about" },
  ],
};

const founderSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About AFJS Trust",
  url: "https://joyfullsmiles.org/about",
  dateModified: "2026-04-14",
  description: "Learn about AFJS Charitable Trust, founded by John Dsouza and supported by Varun Gonsalves — two childhood friends from Bhavnagar dedicated to child education and community empowerment.",
  mainEntity: {
    "@type": "NGO",
    name: "AFJS Charitable Trust",
    foundingDate: "2025",
    founders: [
      { "@type": "Person", name: "John Dsouza", jobTitle: "Founder & Secretary" },
      { "@type": "Person", name: "Varun Gonsalves", jobTitle: "Co-Founder & International Support" },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }} />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/girl-empowerment-2.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Our Story
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            About AFJS Charitable Trust — Child Education NGO in Bhavnagar, Gujarat
          </h1>
          <p className="text-teal-100 text-xl font-light">
            Empowering Communities. Educating Futures.
          </p>
          <p className="text-teal-200 text-base mt-3 max-w-2xl mx-auto">
            Born out of lived experience in Bhavnagar — two friends who never forgot where they came from.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Origin Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
              How It All Began
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Two boys from Bhavnagar.<br />
              <span className="text-teal-500">One shared dream.</span>
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-5">
            <p>
              John Dsouza and Varun Gonsalves grew up together on the streets of Bhavnagar, Gujarat — 
              a city full of warmth, culture, and community, but also one where poverty was never 
              far from sight. They watched friends drop out of school to work in their families&apos; 
              shops. They saw girls pulled out of classrooms before they could reach their potential. 
              They shared meals with families who couldn&apos;t always afford them.
            </p>
            <p>
              These were not statistics to them. They were neighbours, classmates, and childhood 
              companions. And those memories never left.
            </p>
            <p>
              Years later, their paths diverged in geography but never in spirit. John remained in 
              Bhavnagar, deeply embedded in the community, nurturing his conviction that education 
              was the most powerful tool for breaking cycles of poverty. Varun built his life in 
              Germany, but carried Bhavnagar in his heart — and with it, the responsibility to give 
              back to the place that shaped him.
            </p>
            <p>
              In 2025, what had long been a shared dream became a reality. Together, they founded 
              <strong className="text-teal-700"> AFJS Charitable Trust — All For Joyful Smiles</strong> — 
              a charitable trust registered under the Public Trust Act 1950, dedicated to providing 
              education, nutrition, and holistic support to underprivileged children in Gujarat.
            </p>
            <p>
              The name says it all: <em>All For Joyful Smiles.</em> Because every child deserves 
              to smile. Every child deserves to learn. And these two childhood friends from Bhavnagar 
              are going to make sure as many children as possible get that chance.
            </p>
          </div>
        </div>

        {/* Founders */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
              The People Behind the Mission
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Meet the Founders</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* John Dsouza */}
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 border border-teal-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-lg shadow-teal-500/30">
                  <Image src="/images/john-1.png" alt="John Dsouza" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">John Dsouza</h3>
                  <p className="text-teal-600 text-sm font-semibold">Founder & Secretary, AFJS Trust</p>
                  <p className="text-gray-400 text-xs mt-0.5">Bhavnagar, Gujarat, India</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>
                  John Dsouza is the heart and soul of AFJS Trust. Born and raised in Bhavnagar, he 
                  never distanced himself from the realities of underprivileged life that surrounded 
                  him growing up. That closeness to community became his compass.
                </p>
                <p>
                  As the trust&apos;s secretary and the brainchild behind its founding, John drives 
                  the day-to-day operations — from identifying children in need to building relationships 
                  with schools, volunteers, and local stakeholders. He oversees all four programs: 
                  Child Education, Girl Empowerment, Food & Nutrition, and Family Welfare.
                </p>
                <p>
                  &ldquo;I grew up watching children drop out of school not because they didn&apos;t 
                  want to learn, but because no one could afford to let them stay. That&apos;s the 
                  problem we&apos;re solving — one child at a time.&rdquo;
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-teal-100">
                <div className="flex flex-wrap gap-2">
                  {["Education Advocate", "Community Leader", "Bhavnagar, Gujarat", "Est. 2025"].map(t => (
                    <span key={t} className="px-2.5 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Varun Gonsalves */}
            <div className="bg-gradient-to-br from-coral-400/5 to-white rounded-3xl p-8 border border-coral-400/20 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-lg shadow-coral-400/30">
                  <Image src="/images/vj-2.png" alt="Varun Gonsalves" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">Varun Gonsalves</h3>
                  <p className="text-coral-500 text-sm font-semibold">Co-Founder & International Support</p>
                  <p className="text-gray-400 text-xs mt-0.5">Germany (originally Bhavnagar, Gujarat)</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>
                  Varun Gonsalves grew up alongside John in the lanes of Bhavnagar. They shared 
                  classrooms, cricket games, and the unspoken awareness of how differently life could 
                  unfold depending on which family you were born into.
                </p>
                <p>
                  Today, Varun is based in Germany — but Bhavnagar, and the mission of AFJS Trust, 
                  remain central to who he is. He plays a critical role in supporting the trust 
                  internationally: helping raise funds, building awareness among the Indian diaspora 
                  in Europe, and ensuring the trust has the resources to scale its impact.
                </p>
                <p>
                  &ldquo;Distance doesn&apos;t change where you&apos;re from. What John is doing in 
                  Bhavnagar is something I&apos;m deeply proud to support. These are our children 
                  too — children who look like us, who grew up in the same streets we did.&rdquo;
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-coral-400/20">
                <div className="flex flex-wrap gap-2">
                  {["International Fundraising", "Diaspora Outreach", "Based in Germany", "Bhavnagar Roots"].map(t => (
                    <span key={t} className="px-2.5 py-1 bg-coral-400/10 text-coral-600 text-xs font-medium rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Connection quote */}
          <div className="mt-8 bg-dark-900 rounded-3xl p-8 text-center">
            <p className="text-teal-300 text-lg italic leading-relaxed max-w-3xl mx-auto">
              &ldquo;We didn&apos;t come from privilege. We came from Bhavnagar. And that&apos;s 
              exactly why we started this trust — because we know what it means to see potential 
              wasted simply because of circumstance. Every child we support is a child we remember 
              from our own neighbourhood.&rdquo;
            </p>
            <p className="text-gray-400 text-sm mt-4">— John Dsouza &amp; Varun Gonsalves, Co-Founders</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-teal-50 rounded-3xl p-8">
            <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center mb-5">
              <BookOpen className="text-white" size={22} />
            </div>
            <h2 className="text-2xl font-bold text-teal-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide education, nutrition, learning materials, and holistic support to
              underprivileged children in Gujarat, particularly in Bhavnagar and Ahmedabad —
              breaking the cycle of poverty through the transformative power of education.
            </p>
          </div>
          <div className="bg-coral-400/10 rounded-3xl p-8">
            <div className="w-12 h-12 bg-coral-400 rounded-2xl flex items-center justify-center mb-5">
              <Heart className="text-white" size={22} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              Communities where education breaks the cycle of poverty and creates generations
              of empowered, joyful families — where every child has the opportunity to reach
              their full potential regardless of their background.
            </p>
          </div>
        </div>

        {/* Programs */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Our Four Programs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: BookOpen, title: "Child Education", desc: "After-school support, mentorship, and scholarship at St. Xavier's Primary School, Bhavnagar.", color: "bg-teal-500", href: "/programs/child-education" },
              { icon: Users, title: "Girl Empowerment", desc: "Confidence-building, mentorship, and educational scholarships specifically for girls.", color: "bg-coral-400", href: "/programs/girl-empowerment" },
              { icon: Apple, title: "Food & Nutrition", desc: "Regular nutrition drives ensuring children have access to wholesome, nutritious meals.", color: "bg-gold-500", href: "/programs/food-nutrition" },
              { icon: Home, title: "Family Welfare", desc: "Holistic family support enabling parents to keep their children in school.", color: "bg-teal-700", href: "/programs/family-welfare" },
            ].map((p) => (
              <Link key={p.title} href={p.href} className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-teal-200 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg">
                <div className={`w-10 h-10 ${p.color} rounded-xl flex items-center justify-center mb-3`}>
                  <p.icon className="text-white" size={18} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Registration & Legal */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FileCheck className="text-teal-500" size={24} />
            <h2 className="text-xl font-bold text-gray-900">Registration & Legal Details</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: "Darpan Registration", value: "GJ/2025/0719739" },
              { label: "PAN Number", value: "AALTA7481L" },
              { label: "Trust Registration", value: "F/3788/Bhavnagar" },
              { label: "Act", value: "Public Trust Act 1950" },
              { label: "Primary Hub", value: "St. Xavier's Primary School, Devbagh, Bhavnagar" },
              { label: "Also Serving", value: "Ahmedabad, Gujarat" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="font-bold text-gray-800 text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="text-teal-500 mt-0.5 shrink-0" size={18} />
                <span className="text-gray-600">Block No. 103, Catholic Society, Vidhyanagar, Bhavnagar, Gujarat 364002</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-teal-500 shrink-0" size={18} />
                <a href="tel:+916357369174" className="text-gray-600 hover:text-teal-500 transition-colors">+91 63573 69174</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="text-teal-500 shrink-0" size={18} />
                <a href="mailto:Afjs.charitable@gmail.com" className="text-gray-600 hover:text-teal-500 transition-colors">Afjs.charitable@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/donate" className="px-8 py-4 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full text-center shadow-lg transition-all hover:-translate-y-0.5">
              Donate Now ❤
            </Link>
            <a href="https://wa.me/916357369174" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full text-center shadow-lg transition-all hover:-translate-y-0.5">
              Chat on WhatsApp
            </a>
            <Link href="/contact" className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-full text-center transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
