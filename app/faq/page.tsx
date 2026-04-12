import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | AFJS Trust — Frequently Asked Questions",
  description: "Frequently asked questions about AFJS Charitable Trust — how to donate, 80G tax exemption, child sponsorship, and how your money is used.",
};

const faqs = [
  { q: "How do I donate?", a: "You can donate online via Razorpay on our Donate page using a credit/debit card, UPI, or net banking. For Indian donors, you can also pay directly via UPI to 63573690174@sbi." },
  { q: "Is my donation 80G tax deductible?", a: "Yes. AFJS Charitable Trust is a registered NGO. After donating, contact us at Afjs.charitable@gmail.com or WhatsApp +91 63573 69174 to request your 80G certificate and donation receipt." },
  { q: "What does ₹25,000 actually cover?", a: "One full year of education for a child at St. Xavier's Primary School, Bhavnagar — including tuition fees, textbooks, school uniform, and nutrition support." },
  { q: "Can I donate from outside India?", a: "Yes. Our Razorpay gateway accepts international Visa, Mastercard, and Amex cards. For larger donations, WhatsApp us for bank transfer details." },
  { q: "How is my money used?", a: "100% of donations go directly to programme costs — school fees, books, meals, and family support. Administrative costs are kept minimal through volunteer operations." },
  { q: "Can I sponsor a specific child?", a: "Yes. Select the ₹25,000 sponsorship option and WhatsApp us. We will match you with a child and keep you updated on their progress throughout the year." },
  { q: "Where do you operate?", a: "Our primary operations are in Bhavnagar, Gujarat — specifically at St. Xavier's High School, Devbagh. We also run nutrition drives and family welfare programmes in Ahmedabad." },
  { q: "How do I volunteer?", a: "WhatsApp us at +91 63573 69174 or email Afjs.charitable@gmail.com. We welcome tutors, mentors, and event volunteers in Bhavnagar and Ahmedabad." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-teal-100 text-lg max-w-xl mx-auto">Everything you need to know about donating to and working with AFJS Trust.</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-2">{faq.q}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
        <div className="text-center pt-6">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <a href="https://wa.me/916357369174" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-colors shadow-md mr-3">Ask on WhatsApp</a>
          <Link href="/donate" className="inline-block px-6 py-3 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full transition-colors shadow-md">Donate Now</Link>
        </div>
      </div>
    </>
  );
}
