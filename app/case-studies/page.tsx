import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | AFJS Trust",
  description: "Detailed case studies from AFJS Trust's work in Bhavnagar and Ahmedabad. Coming soon.",
  robots: { index: false, follow: true },
};

export default function CaseStudiesPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-16 px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Stories Coming Soon</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Case Studies</h1>
        <p className="text-teal-100 text-lg max-w-2xl mx-auto">We are documenting detailed stories from the field. Check back soon — or follow us on Instagram for real-time updates.</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-teal-50 rounded-3xl p-10 mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            AFJS Trust is currently building our case study library with documented beneficiary stories, programme outcomes, and long-term impact data. We are committed to transparency and will only publish real, verified stories with the consent of the families involved.
          </p>
          <p className="text-gray-600 text-sm">In the meantime, you can read our impact stories on the <Link href="/impact" className="text-teal-600 font-semibold hover:underline">Impact page</Link>, or follow our day-to-day work on <a href="https://www.instagram.com/afjs_charitable_trust/" target="_blank" rel="noopener noreferrer" className="text-pink-500 font-semibold hover:underline">Instagram</a>.</p>
        </div>

        <p className="text-gray-500 mb-4">Want to be notified when case studies are published?</p>
        <a
          href="https://wa.me/916357369174?text=Hi%2C%20please%20notify%20me%20when%20AFJS%20Trust%20case%20studies%20are%20published."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-colors shadow-md"
        >
          Notify Me via WhatsApp
        </a>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/impact" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full transition-colors">See Our Impact</Link>
          <Link href="/blog" className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-full border border-gray-200 transition-colors">Read Our Blog</Link>
        </div>
      </div>
    </>
  );
}
