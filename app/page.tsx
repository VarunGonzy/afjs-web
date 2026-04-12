import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProgramsSection from "@/components/ProgramsSection";
import DonationWidget from "@/components/DonationWidget";

export const metadata: Metadata = {
  title: "AFJS Trust | Child Education, Girl Empowerment & Nutrition NGO India",
  description:
    "Donate to AFJS Charitable Trust — supporting underprivileged children in Gujarat through education, girl empowerment, food drives, and family welfare. 80G tax exemption. Bhavnagar, India.",
  alternates: { canonical: "https://joyfullsmiles.org" },
};

const stats = [
  { value: "100+", label: "Children Supported" },
  { value: "₹1L+", label: "Donated in 6 Months" },
  { value: "4", label: "Active Programs" },
  { value: "2", label: "Cities Served" },
];

const galleryImages = [
  { src: "/images/education-group.jpg", alt: "Children at St. Xavier's school, Bhavnagar" },
  { src: "/images/girl-empowerment-1.jpg", alt: "Girl proudly showing her school report" },
  { src: "/images/nutrition-kids-2.jpg", alt: "Children receiving meals at AFJS nutrition drive" },
  { src: "/images/impact-donation.jpg", alt: "AFJS Trust founders with sponsored children" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/homepage-banner.jpg"
            alt="AFJS Charitable Trust — Educating Futures"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950/85 via-teal-900/70 to-teal-800/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-16">
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-6 backdrop-blur-sm">
            All For Joyful Smiles · Bhavnagar, Gujarat
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Every Child Deserves<br />
            <span className="text-gold-400">a Joyful Future</span>
          </h1>
          <p className="text-teal-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            AFJS Charitable Trust provides education, nutrition, girl empowerment, and family support
            to underprivileged children in Gujarat. <strong className="text-white">Your ₹25,000 sponsors one child&apos;s entire year of school.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 bg-coral-400 hover:bg-coral-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-coral-400/40 hover:shadow-coral-400/60 transition-all duration-200 hover:-translate-y-0.5"
            >
              Donate Now ❤
            </Link>
            <a
              href="https://wa.me/916357369174"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-green-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 text-white/70 text-xs">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              80G Tax Exempt
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Registered Trust
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              PAN: AALTA7481L
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Secured by Razorpay
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="bg-teal-500 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.value}</p>
                <p className="text-teal-100 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Four Programs. <span className="text-teal-500">One Mission.</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every program is designed to address a real barrier preventing children from reaching their potential.
            </p>
          </div>
          <ProgramsSection />
          <div className="text-center mt-10">
            <Link
              href="/programs"
              className="px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── SPONSORSHIP CTA BANNER ── */}
      <section className="py-14 px-4 bg-coral-400">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">Child Sponsorship</p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            ₹25,000 sponsors one child&apos;s<br />entire year of education
          </h2>
          <p className="text-coral-100 text-base mb-8 max-w-xl mx-auto">
            Books, fees, meals, mentorship — everything a child needs to flourish for a full academic year.
          </p>
          <Link
            href="/donate"
            className="inline-block px-10 py-4 bg-white text-coral-500 font-extrabold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
          >
            Sponsor a Child Today
          </Link>
        </div>
      </section>

      {/* ── INLINE DONATION WIDGET ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
              Donate Now
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Make a Difference Today
            </h2>
            <p className="text-gray-500">Every rupee goes directly to children in need. 80G tax exemption available.</p>
          </div>
          <DonationWidget />
          <p className="text-center text-gray-400 text-xs mt-6">
            Prefer to donate via UPI or bank transfer?{" "}
            <Link href="/donate" className="text-teal-500 hover:underline">See all payment options →</Link>
          </p>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
              Our Impact in Photos
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Smiles We&apos;ve Created</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative aspect-square rounded-2xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/impact" className="text-teal-500 font-semibold hover:underline">
              See our full impact story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-20 px-4 bg-teal-950">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 text-teal-300 text-xs font-bold rounded-full uppercase tracking-widest mb-5">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Two childhood friends.<br />
                <span className="text-teal-400">One shared promise.</span>
              </h2>
              <p className="text-teal-200 leading-relaxed mb-5">
                John Dsouza and Varun Gonsalves grew up together in Bhavnagar. They saw children
                drop out of school due to poverty. They saw girls pulled out of classrooms before
                reaching their potential. They never forgot those children.
              </p>
              <p className="text-teal-200 leading-relaxed mb-8">
                In 2025, they founded AFJS Charitable Trust — <em>All For Joyful Smiles</em> —
                to make sure as many children as possible get the education and support they deserve.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-teal-950 font-bold rounded-full transition-all"
              >
                Read Our Story
              </Link>
            </div>
            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-community.jpg"
                alt="AFJS Trust food drive in the community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to change a child&apos;s life?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Every donation — big or small — directly impacts a child&apos;s education and future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-10 py-4 bg-coral-400 hover:bg-coral-500 text-white font-bold text-lg rounded-full shadow-xl shadow-coral-400/30 transition-all hover:-translate-y-0.5">
              Donate Now ❤
            </Link>
            <a href="https://wa.me/916357369174" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-full shadow-xl transition-all hover:-translate-y-0.5">
              💬 WhatsApp Us
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Reg: GJ/2025/0719739 · PAN: AALTA7481L · Trust Reg: F/3788/Bhavnagar
          </p>
        </div>
      </section>
    </>
  );
}
