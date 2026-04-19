"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import DonationWidget from "@/components/DonationWidget";
import PhotoGallery from "@/components/PhotoGallery";

// ── Animated count-up hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ── Impact Counter ────────────────────────────────────────────────────────────
function ImpactCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const children = useCountUp(100, 1600, visible);
  const families = useCountUp(60, 1400, visible);
  const meals = useCountUp(500, 2000, visible);
  const donors = useCountUp(80, 1500, visible);

  const stats = [
    { value: children, suffix: "+", label: "Children Supported" },
    { value: families, suffix: "+", label: "Families Helped" },
    { value: meals,    suffix: "+", label: "Meals Served" },
    { value: donors,   suffix: "+", label: "Generous Donors" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-4xl md:text-5xl font-extrabold text-white mb-1">
            {s.value}{s.suffix}
          </p>
          <p className="text-teal-200 text-sm font-medium">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "Because of AFJS Trust, my daughter's school fees were paid. She is now studying in standard 6th and dreams of becoming a doctor. We had no hope before.",
    name: "Parent of a sponsored child",
    location: "Bhavnagar, Gujarat",
    initials: "FN",
    color: "bg-teal-500",
  },
  {
    quote:
      "My son used to skip school because we couldn't afford the fees. AFJS Trust stepped in. They paid everything and even gave him notebooks. He hasn't missed a day since.",
    name: "Father of a sponsored child",
    location: "Bhavnagar, Gujarat",
    initials: "RB",
    color: "bg-coral-400",
  },
  {
    quote:
      "As a donor from Germany, it was important for me to trust where my money goes. AFJS sends photos, receipts, and updates. Total transparency. I sponsor a child annually.",
    name: "Nikhitha",
    location: "Donor, Europe",
    initials: "NK",
    color: "bg-gold-500",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: "https://joyfullsmiles.org",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".impact-stats", ".about-snippet"],
        },
      })}} />

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── ANIMATED IMPACT COUNTER ── */}
      <section className="bg-teal-500 py-16 px-4 impact-stats">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-teal-100 text-sm font-semibold uppercase tracking-widest mb-10">
            Our Impact So Far
          </p>
          <ImpactCounter />
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
              Four Programs.{" "}
              <span className="text-teal-500">One Mission.</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every program is designed to address a real barrier preventing
              children from reaching their potential.
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
          <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">
            Child Sponsorship
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            ₹25,000 sponsors one child&apos;s
            <br />
            entire year of education
          </h2>
          <p className="text-coral-100 text-base mb-8 max-w-xl mx-auto">
            Books, fees, meals, mentorship: everything a child needs to
            flourish for a full academic year.
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
            <p className="text-gray-500">
              Every rupee goes directly to children in need. 80G tax exemption
              available.
            </p>
          </div>
          <DonationWidget />
          <p className="text-center text-gray-400 text-xs mt-6">
            Prefer UPI or bank transfer?{" "}
            <Link href="/donate" className="text-teal-500 hover:underline">
              See all payment options →
            </Link>
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
            <h2 className="text-3xl font-bold text-gray-900">
              Smiles We&apos;ve Created
            </h2>
          </div>
          <PhotoGallery />
          <div className="text-center mt-8">
            <Link
              href="/impact"
              className="text-teal-500 font-semibold hover:underline"
            >
              See our full impact story →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
              Stories
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Voices of Change
            </h2>
          </div>

          <div className="relative bg-gray-50 rounded-3xl p-8 md:p-12 min-h-[220px]">
            <svg
              className="absolute top-6 left-8 w-10 h-10 text-teal-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 pt-6">
              {testimonials[activeTestimonial].quote}
            </blockquote>
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full ${testimonials[activeTestimonial].color} flex items-center justify-center text-white font-bold text-sm`}
              >
                {testimonials[activeTestimonial].initials}
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonials[activeTestimonial].name}
                </p>
                <p className="text-gray-400 text-xs">
                  {testimonials[activeTestimonial].location}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeTestimonial
                    ? "bg-teal-500 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-20 px-4 bg-teal-950 about-snippet">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 text-teal-300 text-xs font-bold rounded-full uppercase tracking-widest mb-5">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Two childhood friends.
                <br />
                <span className="text-teal-400">One shared promise.</span>
              </h2>
              <p className="text-teal-200 leading-relaxed mb-5">
                John Dsouza and Varun Gonsalves grew up together in Bhavnagar.
                They saw children drop out of school due to poverty. They saw
                girls pulled out of classrooms before reaching their potential.
                They never forgot those children.
              </p>
              <p className="text-teal-200 leading-relaxed mb-8">
                In 2025, they founded AFJS Charitable Trust,{" "}
                <em>All For Joyful Smiles</em>, to make sure as many children
                as possible get the education and support they deserve.
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
            Every donation, big or small, directly impacts a child&apos;s
            education and future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-10 py-4 bg-coral-400 hover:bg-coral-500 text-white font-bold text-lg rounded-full shadow-xl shadow-coral-400/30 transition-all hover:-translate-y-0.5"
            >
              Donate Now ❤
            </Link>
            <a
              href="https://wa.me/916357369174"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-full shadow-xl transition-all hover:-translate-y-0.5"
            >
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
