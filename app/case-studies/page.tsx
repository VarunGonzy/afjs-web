import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | Real Stories of Change | AFJS Trust",
  description:
    "Real stories of transformation from AFJS Trust's programmes in Bhavnagar and Ahmedabad — coming soon. Follow us on Instagram for the latest updates.",
  robots: { index: false, follow: true },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-16 px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">
          Real Stories
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Case Studies</h1>
        <p className="text-teal-100 text-lg max-w-2xl mx-auto">
          Behind every number in our impact report is a real person. We are documenting their stories — with their permission — and will share them here soon.
        </p>
      </div>

      {/* Placeholder content */}
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        {/* Coming soon icon */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-teal-50 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-teal-500" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .513v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          Stories Coming Soon
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-xl mx-auto">
          We are on the ground every day — running nutrition drives, enrolling children, and supporting families in Bhavnagar and Ahmedabad. We are documenting the real stories of people our programmes have reached, with their knowledge and consent, and will publish them here.
        </p>
        <p className="text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
          In the meantime, you can follow our work in real time on Instagram, or read about our programmes and the impact we&apos;ve had so far.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://www.instagram.com/afjs_charitable_trust/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-br from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Follow on Instagram
          </a>
          <Link
            href="/impact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            See Our Impact
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-full shadow-sm border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
          >
            Read Our Blog
          </Link>
        </div>

        {/* Notify / WhatsApp */}
        <div className="bg-teal-50 rounded-3xl p-8">
          <h3 className="font-bold text-gray-900 text-lg mb-2">Want to be notified when stories go live?</h3>
          <p className="text-gray-600 text-sm mb-5">
            WhatsApp us and we&apos;ll let you know as soon as we publish our first real case studies.
          </p>
          <a
            href="https://wa.me/916357369174?text=Hi%2C%20please%20notify%20me%20when%20the%20case%20studies%20are%20published."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg shadow-green-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Notify Me on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
