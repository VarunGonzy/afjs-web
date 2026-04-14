"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/nutrition-kids-2.jpg"
          alt="Children from AFJS Trust nutrition drive, Bhavnagar"
          fill
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          priority
          sizes="100vw"
          quality={85}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/75 to-teal-900/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-widest mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Bhavnagar, Gujarat, India
          </span>

          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Educating Futures.{" "}
            <span className="text-gold-400">Empowering</span>{" "}
            Communities.
          </h1>

          <p className="text-lg sm:text-xl text-teal-100 leading-relaxed mb-8 max-w-xl">
            AFJS Charitable Trust brings education, nutrition, and hope to
            underprivileged children in Gujarat. Every child deserves a joyful,
            empowered future.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/donate"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-coral-400 hover:bg-coral-500 text-white font-bold text-lg rounded-full shadow-2xl shadow-coral-400/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-coral-400/60"
            >
              <span>Donate Now</span>
              <span className="group-hover:scale-110 transition-transform">❤</span>
            </Link>
            <a
              href="https://wa.me/916357369174?text=Hi%2C%20I%20want%20to%20learn%20more%20about%20AFJS%20Trust."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold text-lg rounded-full border-2 border-white/30 hover:border-white/60 transition-all duration-200 hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat with Us
            </a>
          </div>

          {/* Quick stats pill */}
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { label: "Children Supported", value: "500+" },
              { label: "Annual Cost / Child", value: "₹25,000" },
              { label: "Programs Running", value: "4" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <span className="text-white font-extrabold">{stat.value}</span>
                <span className="text-teal-200 text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs animate-bounce">
        <span>Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
