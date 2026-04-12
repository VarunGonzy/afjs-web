import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DonationWidget from "@/components/DonationWidget";
import { CheckCircle, Shield, Receipt, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate Online | Support Child Education & Girl Empowerment",
  description: "Donate to AFJS Charitable Trust via Razorpay. Support child education, girl empowerment, food & nutrition, and family welfare. 80G tax exemption. Sponsor a child at ₹25,000/year.",
};

const impactRows = [
  { amount: "₹100", impact: "Buys notebooks and stationery for a child for a week" },
  { amount: "₹500", impact: "Covers nutritious meals for a child for two weeks" },
  { amount: "₹1,000", impact: "Sponsors a month of healthy meals" },
  { amount: "₹2,500", impact: "Provides full school supplies for one semester" },
  { amount: "₹5,000", impact: "Covers one term of after-school tutoring support" },
  { amount: "₹10,000", impact: "Nearly 5 months of education and nutrition support" },
  { amount: "₹25,000", impact: "Sponsors one child's FULL year of school — tuition, books, meals, uniform" },
];

const donateSchema = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  agent: { "@type": "Organization", name: "AFJS Charitable Trust" },
  recipient: { "@type": "Organization", name: "AFJS Charitable Trust" },
  purpose: "Child education, girl empowerment, nutrition and family welfare in Gujarat, India",
  target: "https://joyfullsmiles.org/donate",
};

export default function DonatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(donateSchema) }} />

      <div className="relative bg-gradient-to-br from-teal-950 via-teal-800 to-teal-600 pt-28 pb-16 px-4 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/education-laptops.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Heart of Our Work</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Your Donation Changes Lives</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">100% of donations go directly to children. Secure payment via Razorpay. 80G tax benefit available.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div id="donate-form">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Make a Donation</h2>
            <p className="text-gray-500 mb-6">Choose an amount or enter a custom value. Receive an 80G tax receipt by email.</p>
            <DonationWidget />
            <div id="sponsor" className="mt-6 p-5 bg-gold-400/10 border border-gold-400/30 rounded-2xl">
              <div className="flex gap-3">
                <Heart className="text-gold-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Sponsor a Child — ₹25,000/year</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">One sponsorship covers a child&apos;s full year: tuition at St. Xavier&apos;s Primary School, textbooks, school uniform, and nutrition support. You&apos;ll receive impact updates about the child you&apos;re supporting.</p>
                  <p className="text-xs text-gray-400 mt-2">Select ₹25,000 above or enter a custom amount to sponsor one child&apos;s full year.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Impact</h2>
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                {impactRows.map((row, i) => (
                  <div key={i} className={`flex gap-4 px-5 py-3.5 ${i !== impactRows.length - 1 ? "border-b border-gray-100" : "bg-teal-50 border-t-2 border-teal-200"}`}>
                    <span className={`font-bold text-sm w-16 shrink-0 ${i === impactRows.length - 1 ? "text-teal-600" : "text-gray-900"}`}>{row.amount}</span>
                    <span className="text-gray-600 text-sm">{row.impact}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Shield, title: "Secure Payment", desc: "Razorpay-encrypted checkout", color: "text-teal-500" },
                { icon: Receipt, title: "80G Receipt", desc: "Automatic tax receipt by email", color: "text-gold-500" },
                { icon: CheckCircle, title: "Verified NGO", desc: "Darpan Reg: GJ/2025/0719739", color: "text-coral-400" },
                { icon: Heart, title: "Direct Impact", desc: "100% reaches the children", color: "text-coral-400" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <item.icon size={18} className={`${item.color} mb-2`} />
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* UPI Scanner */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="font-bold text-gray-900 text-sm mb-1">Pay via UPI (Indian donors)</p>
              <p className="text-gray-500 text-xs mb-4">Scan with any UPI app — Google Pay, PhonePe, Paytm, BHIM, or your bank app.</p>
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="shrink-0 rounded-xl overflow-hidden border-2 border-blue-200 shadow-sm">
                  <Image src="/images/afjs-upi-scanner.jpeg" alt="AFJS Trust UPI QR Code — SBI" width={160} height={160} className="w-40 h-40 object-contain" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded-xl px-4 py-2.5 border border-blue-100">
                    <p className="text-xs text-gray-400 mb-0.5">UPI ID</p>
                    <p className="font-bold text-gray-900 tracking-wide">63573690174@sbi</p>
                  </div>
                  <div className="bg-white rounded-xl px-4 py-2.5 border border-blue-100">
                    <p className="text-xs text-gray-400 mb-0.5">Beneficiary</p>
                    <p className="font-bold text-gray-900">All For Joyful Smiles Charitable Trust</p>
                  </div>
                  <div className="bg-white rounded-xl px-4 py-2.5 border border-blue-100">
                    <p className="text-xs text-gray-400 mb-0.5">Bank</p>
                    <p className="font-bold text-gray-900">State Bank of India (SBI)</p>
                  </div>
                  <p className="text-xs text-gray-400 pt-1">After payment, WhatsApp us your screenshot for an 80G receipt.</p>
                </div>
              </div>
              <a href="https://wa.me/916357369174?text=Hi%2C%20I%20just%20made%20a%20UPI%20payment%20to%20AFJS%20Trust.%20Please%20send%20me%20an%2080G%20receipt." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-green-700 font-semibold text-sm hover:text-green-800 transition-colors">
                WhatsApp payment screenshot for 80G receipt →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-center text-xs text-gray-500">
          <span><strong className="text-gray-700">Organization:</strong> AFJS Charitable Trust</span>
          <span><strong className="text-gray-700">Darpan Reg:</strong> GJ/2025/0719739</span>
          <span><strong className="text-gray-700">PAN:</strong> AALTA7481L</span>
          <span><strong className="text-gray-700">Trust Reg:</strong> F/3788/Bhavnagar</span>
          <span><strong className="text-gray-700">Email:</strong> Afjs.charitable@gmail.com</span>
        </div>
      </div>
    </>
  );
}
