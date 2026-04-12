import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | AFJS Trust",
  description: "Terms of use for the AFJS Charitable Trust website.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Terms of Use</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: April 2026</p>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
        <p>By using joyfullsmiles.org, you agree to these terms. Please read them carefully.</p>
        <h2 className="text-xl font-bold text-gray-900">Use of Site</h2>
        <p>This website is operated by AFJS Charitable Trust for informational and donation purposes. You agree not to misuse the site, attempt to gain unauthorized access, or use it for any unlawful purpose.</p>
        <h2 className="text-xl font-bold text-gray-900">Donations</h2>
        <p>All donations made through this website are voluntary and non-refundable. AFJS Charitable Trust is a registered trust (Darpan Reg: GJ/2025/0719739). Donations may be eligible for 80G tax deductions under the Indian Income Tax Act — consult your tax advisor for specifics.</p>
        <h2 className="text-xl font-bold text-gray-900">Intellectual Property</h2>
        <p>All content on this website — including text, images, and graphics — is the property of AFJS Charitable Trust unless otherwise noted. You may not reproduce or distribute content without written permission.</p>
        <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
        <p>AFJS Charitable Trust is not liable for any indirect, incidental, or consequential damages arising from your use of this website.</p>
        <h2 className="text-xl font-bold text-gray-900">Contact</h2>
        <p>For questions about these terms, email Afjs.charitable@gmail.com.</p>
      </div>
    </div>
  );
}
