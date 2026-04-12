import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import DonationWidget from "@/components/DonationWidget";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "AFJS Trust — All For Joyful Smiles | Child Education NGO India",
  description: "Donate to AFJS Charitable Trust — supporting underprivileged children in Bhavnagar & Ahmedabad through education, nutrition, girl empowerment, and family welfare. ₹25,000 sponsors one child's full year.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Programs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-3">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Our 4 Core Programs</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Four pillars of lasting change — each designed to uplift children and entire families.</p>
          </div>
          <ProgramsSection />
        </div>
      </section>

      {/* Donation widget */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-coral-100 text-coral-500 text-xs font-bold rounded-full uppercase tracking-widest mb-4">Make a Difference</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">₹25,000 Sponsors One Child&apos;s Entire Year</h2>
              <p className="text-gray-500 leading-relaxed mb-4">Tuition at St. Xavier&apos;s Primary School, textbooks, uniform, and nutrition support — all covered for one full academic year.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {["₹100 buys notebooks for a week", "₹1,000 provides a month of meals", "₹25,000 sponsors one child's full year"].map(i => (
                  <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
            <DonationWidget />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-teal-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold leading-relaxed text-teal-100 italic">
            &ldquo;Our mission is to provide education, nutrition, and holistic support to underprivileged children in Gujarat — because every child deserves a joyful smile.&rdquo;
          </p>
          <p className="mt-6 text-teal-400 font-semibold">— John Dsouza, Founder & Secretary</p>
          <Link href="/about" className="inline-block mt-8 px-6 py-3 border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-teal-950 font-bold rounded-full transition-all">
            Our Story
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Moments from the Field</h2>
            <p className="text-gray-500">Real children. Real impact. Real smiles.</p>
          </div>
          <PhotoGallery />
          <div className="text-center mt-8">
            <Link href="/impact" className="inline-block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full transition-colors shadow-md">
              See Our Full Impact →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 px-4 bg-coral-400 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-3">Be the Reason a Child Smiles Today</h2>
          <p className="text-coral-100 mb-6">Join hundreds of donors making a real difference in Gujarat.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/donate" className="px-8 py-3.5 bg-white text-coral-500 font-extrabold rounded-full shadow-lg transition-all hover:-translate-y-0.5">
              Donate Now
            </Link>
            <a href="https://wa.me/916357369174" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-coral-500 hover:bg-coral-600 text-white font-extrabold rounded-full shadow-lg transition-all hover:-translate-y-0.5">
              Talk to Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
