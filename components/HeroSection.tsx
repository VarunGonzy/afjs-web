"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/homepage-banner.jpg"
        alt="AFJS Trust — All For Joyful Smiles"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "center 15%" }}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/60 via-teal-900/50 to-teal-950/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-widest mb-6">
          Bhavnagar & Ahmedabad, Gujarat
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Every Child Deserves a{" "}
          <span className="text-gold-400">Joyful Smile</span>
        </h1>
        <p className="text-teal-100 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
          We educate, nourish, and empower underprivileged children in Gujarat. ₹25,000 sponsors one child's full year of school.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="px-8 py-4 bg-coral-400 hover:bg-coral-500 text-white font-extrabold text-lg rounded-full shadow-2xl transition-all hover:-translate-y-1"
          >
            Donate Now
          </Link>
          <a
            href="https://wa.me/916357369174?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20AFJS%20Trust."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-extrabold text-lg rounded-full shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            Chat With Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-teal-600 to-teal-500 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-white text-center">
          {[
            { value: "500+", label: "Children Educated" },
            { value: "200+", label: "Families Supported" },
            { value: "1,000+", label: "Meals Served" },
            { value: "4", label: "Active Programs" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold">{s.value}</p>
              <p className="text-teal-100 text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
