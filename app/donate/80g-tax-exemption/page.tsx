import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Section 80G Tax Exemption | Donate to AFJS Trust & Save Tax",
  description: "Donations to AFJS Charitable Trust qualify for 50% tax deduction under Section 80G of the Income Tax Act. PAN: AALTA7481L. Save up to ₹3,750 on a ₹25,000 donation.",
  openGraph: {
    title: "Section 80G Tax Exemption | Donate to AFJS Trust India & Save Tax",
    description: "Donate to a registered NGO and claim 50% Section 80G deduction. AFJS Trust PAN: AALTA7481L. Donate ₹10,000, save ₹1,500 in tax.",
    images: [{ url: "/images/impact-donation.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/images/impact-donation.jpg"] },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://joyfullsmiles.org" },
    { "@type": "ListItem", position: 2, name: "Donate", item: "https://joyfullsmiles.org/donate" },
    { "@type": "ListItem", position: 3, name: "Section 80G Tax Exemption", item: "https://joyfullsmiles.org/donate/80g-tax-exemption" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AFJS Charitable Trust eligible for 80G tax deduction?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. AFJS Charitable Trust is registered under the Bombay Public Trusts Act, 1950 with PAN AALTA7481L. Donations qualify for a 50% deduction under Section 80G of the Income Tax Act, 1961." },
    },
    {
      "@type": "Question",
      name: "How much tax can I save by donating to AFJS Trust?",
      acceptedAnswer: { "@type": "Answer", text: "If you are in the 30% tax bracket and donate ₹25,000, you can deduct ₹12,500 (50%) from your taxable income, saving ₹3,750 in tax. Your net cost is ₹21,250. For ₹10,000, you save ₹1,500." },
    },
    {
      "@type": "Question",
      name: "What documents do I need to claim 80G?",
      acceptedAnswer: { "@type": "Answer", text: "You need your PAN card and the official donation receipt from AFJS Trust (which includes our PAN AALTA7481L and Trust Registration F/3788/Bhavnagar). Keep the receipt for at least 6 years." },
    },
    {
      "@type": "Question",
      name: "Can NRIs claim 80G tax deduction?",
      acceptedAnswer: { "@type": "Answer", text: "NRIs with taxable income in India can claim the 80G deduction on Indian income. NRIs without Indian taxable income cannot claim it but are still welcome to donate. Every contribution is used entirely for our programmes." },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Claim Section 80G Tax Deduction on AFJS Trust Donations",
  description: "Claim your 80G tax deduction in four simple steps after donating to AFJS Charitable Trust.",
  step: [
    { "@type": "HowToStep", name: "Donate online", text: "Make your donation via Razorpay at joyfullsmiles.org/donate, or via UPI (63573690174@sbi), or bank transfer." },
    { "@type": "HowToStep", name: "Request your 80G receipt", text: "Contact AFJS Trust at Afjs.charitable@gmail.com or WhatsApp +91 63573 69174 with your name, PAN, address, and donation amount." },
    { "@type": "HowToStep", name: "Receive official receipt", text: "We issue a formal donation receipt including our PAN (AALTA7481L), Trust Registration (F/3788/Bhavnagar), and donation details." },
    { "@type": "HowToStep", name: "File in your ITR", text: "In your Income Tax Return, declare the donation under Deductions, Chapter VI-A, Section 80G. Keep the receipt for 6 years." },
  ],
};

const taxTable = [
  { donation: "₹5,000", deductible: "₹2,500", saved20: "₹500", saved30: "₹750" },
  { donation: "₹10,000", deductible: "₹5,000", saved20: "₹1,000", saved30: "₹1,500" },
  { donation: "₹25,000", deductible: "₹12,500", saved20: "₹2,500", saved30: "₹3,750" },
  { donation: "₹50,000", deductible: "₹25,000", saved20: "₹5,000", saved30: "₹7,500" },
  { donation: "₹1,00,000", deductible: "₹50,000", saved20: "₹10,000", saved30: "₹15,000" },
];

export default function TaxExemptionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-16 px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">
          Section 80G
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Save Tax While Changing Lives
        </h1>
        <p className="text-teal-100 text-xl max-w-2xl mx-auto mb-8">
          Donations to AFJS Charitable Trust qualify for a 50% deduction under Section 80G of the Income Tax Act. Donate ₹25,000, save ₹3,750 in tax.
        </p>
        <Link
          href="/donate"
          className="inline-block px-10 py-4 bg-coral-400 hover:bg-coral-500 text-white font-extrabold text-lg rounded-full shadow-xl transition-all hover:-translate-y-0.5"
        >
          Donate Now & Get 80G Receipt
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

        {/* What is 80G */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Section 80G?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Section 80G of the Income Tax Act, 1961 allows individuals and companies to deduct a portion of charitable donations from their taxable income. For organisations like AFJS Charitable Trust, donors can claim a <strong>50% deduction</strong>, meaning half of what you donate is subtracted from your gross total income before tax is calculated.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This is one of the most underutilised tax benefits available to Indian taxpayers. If you pay income tax and give to registered charities, you are entitled to reduce your tax bill every year.
          </p>
        </section>

        {/* AFJS Trust details */}
        <section className="bg-teal-50 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">AFJS Charitable Trust: Verified Registration</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Darpan Registration", value: "GJ/2025/0719739" },
              { label: "PAN (for 80G)", value: "AALTA7481L" },
              { label: "Trust Registration", value: "F/3788/Bhavnagar" },
              { label: "Registered Under", value: "Bombay Public Trusts Act, 1950" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-4">
                <p className="text-xs text-teal-600 font-bold uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-gray-900 font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">Our Darpan registration can be independently verified on the NGO Darpan portal (ngodarpan.gov.in) maintained by NITI Aayog.</p>
        </section>

        {/* Tax savings table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Much Can You Save?</h2>
          <p className="text-gray-600 mb-6">Based on a 50% deduction under Section 80G:</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-50">
                  <th className="px-4 py-3 text-left font-bold text-teal-700">Donation</th>
                  <th className="px-4 py-3 text-left font-bold text-teal-700">Deductible Amount</th>
                  <th className="px-4 py-3 text-left font-bold text-teal-700">Tax Saved (20% bracket)</th>
                  <th className="px-4 py-3 text-left font-bold text-teal-700">Tax Saved (30% bracket)</th>
                </tr>
              </thead>
              <tbody>
                {taxTable.map((row, i) => (
                  <tr key={row.donation} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.donation}</td>
                    <td className="px-4 py-3 text-gray-600">{row.deductible}</td>
                    <td className="px-4 py-3 text-green-600 font-medium">{row.saved20}</td>
                    <td className="px-4 py-3 text-green-700 font-bold">{row.saved30}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-3">Calculations based on 50% deduction. Actual savings depend on your tax bracket, surcharges, and other deductions. Consult your CA for personalised advice.</p>
        </section>

        {/* How to claim */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Claim Your 80G Deduction</h2>
          <ol className="space-y-5">
            {[
              { n: "1", title: "Donate online", desc: "Donate via Razorpay at joyfullsmiles.org/donate, or via UPI (63573690174@sbi), or bank transfer. Retain your payment confirmation." },
              { n: "2", title: "Request your receipt", desc: "Email Afjs.charitable@gmail.com or WhatsApp +91 63573 69174 with your full name, PAN, and postal address. We issue receipts within 48 hours." },
              { n: "3", title: "Receive your official 80G receipt", desc: "Our receipt includes our PAN (AALTA7481L), Trust Registration number, your details, and the donation amount. Everything you need for ITR filing." },
              { n: "4", title: "File in your ITR", desc: 'Declare the donation under "Deductions: Chapter VI-A, Section 80G" in your Income Tax Return. Keep the receipt for a minimum of 6 years.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {step.n}
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{step.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* NRI section */}
        <section className="bg-gray-50 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">NRI Donors</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            NRIs with taxable income in India can claim the 80G deduction on their Indian income. If you have no Indian taxable income, you will not have a local tax benefit, but your donation is still fully used for our programmes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For large international transfers, FCRA compliance may be required. Contact us directly at <a href="mailto:Afjs.charitable@gmail.com" className="text-teal-500 hover:underline">Afjs.charitable@gmail.com</a> before transferring.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center bg-teal-500 rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-white mb-3">Donate Now & Claim Your 80G Benefit</h2>
          <p className="text-teal-100 mb-8">Your government reduces your tax. A child gets an education. Everyone wins.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full shadow-xl transition-all hover:-translate-y-0.5"
            >
              Donate Now ❤
            </Link>
            <a
              href="https://wa.me/916357369174"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-xl transition-all hover:-translate-y-0.5"
            >
              💬 Ask Us About 80G
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
