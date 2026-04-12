"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is AFJS Charitable Trust?",
    a: "AFJS Charitable Trust (All For Joyful Smiles) is a registered NGO based in Bhavnagar, Gujarat, India. We support underprivileged children through four programs: Child Education, Girl Empowerment, Food & Nutrition, and Family Welfare. Registration: GJ/2025/0719739.",
  },
  {
    q: "Is my donation eligible for 80G tax exemption?",
    a: "Yes. AFJS Charitable Trust is registered under the Public Trust Act 1950 and holds PAN AALTA7481L. Donations are eligible for 80G tax deduction under the Income Tax Act. You will receive a donation receipt for your records.",
  },
  {
    q: "How much does it cost to sponsor a child for a full year?",
    a: "₹25,000 sponsors one child's complete year of education — covering school fees, books, stationery, meals, and mentorship. This is our Child Sponsorship program and is one of the highest-impact ways to contribute.",
  },
  {
    q: "Can I donate from outside India (US, UK, EU)?",
    a: "Yes, you can donate using any international credit or debit card through our Razorpay payment gateway. We accept Visa, Mastercard, and other major cards. If you are in the Indian diaspora, donations are processed in INR.",
  },
  {
    q: "How is my money used?",
    a: "100% of your donation goes directly to children's needs — school fees, meals, learning materials, and program operations. We maintain full transparency and can provide receipts and impact reports on request.",
  },
  {
    q: "Can I make a recurring monthly donation?",
    a: "Yes. On our Donate page, you can toggle to monthly giving. Monthly donors help us plan ahead and deliver consistent support to children throughout the academic year.",
  },
  {
    q: "Where does AFJS Trust operate?",
    a: "Our primary operations are at St. Xavier's Primary School, Devbagh, Bhavnagar, Gujarat. We also run programs in Ahmedabad. Our registered office is at Block No. 103, Catholic Society, Vidhyanagar, Bhavnagar, Gujarat 364002.",
  },
  {
    q: "How can I contact AFJS Trust?",
    a: "You can reach us via WhatsApp at +91 63573 69174, by email at Afjs.charitable@gmail.com, or through our Contact page. We typically respond within 24 hours.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-24 pb-20 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500">
            Everything you need to know about AFJS Trust, donations, and our programs.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-teal-500 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-teal-50 rounded-3xl p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h2>
          <p className="text-gray-500 mb-6">Chat with us on WhatsApp — we respond within hours.</p>
          <a
            href="https://wa.me/916357369174"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
