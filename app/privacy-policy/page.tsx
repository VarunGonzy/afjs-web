import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AFJS Trust",
  description: "Privacy policy for AFJS Charitable Trust — how we collect, use, and protect your data.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: April 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
          <p>
            AFJS Charitable Trust (All For Joyful Smiles) is a registered charitable trust based at
            Block No. 103, Catholic Society, Vidhyanagar, Bhavnagar, Gujarat 364002, India.
            Registration: GJ/2025/0719739. PAN: AALTA7481L.
          </p>
          <p>
            This policy explains how we handle information collected through our website at{" "}
            <a href="https://joyfullsmiles.org" className="text-teal-500 hover:underline">
              joyfullsmiles.org
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
          <p>We collect information you provide voluntarily:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Name and email address (when donating or contacting us)</li>
            <li>Payment information (processed securely by Razorpay — we never store card details)</li>
            <li>Messages you send via our contact form</li>
          </ul>
          <p className="mt-3">
            We may also collect anonymised analytics data (page views, device type) via Google
            Analytics 4 to understand how donors use our site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To process your donation and send a receipt</li>
            <li>To respond to enquiries</li>
            <li>To send impact updates (only if you opt in)</li>
            <li>To comply with legal and regulatory requirements (80G records, etc.)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Third-Party Services</h2>
          <p>
            We use <strong>Razorpay</strong> for payment processing. Razorpay has its own privacy
            policy and PCI-DSS compliant infrastructure. We do not store your payment card details.
          </p>
          <p className="mt-2">
            We use <strong>Google Analytics</strong> for anonymised traffic analysis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Retention</h2>
          <p>
            Donation records are retained for 7 years as required by Indian tax law. Contact
            enquiry data is retained for up to 2 years.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
          <p>
            If you are based in the EU/UK, you have the right to access, correct, or request
            deletion of your personal data. Contact us at{" "}
            <a href="mailto:Afjs.charitable@gmail.com" className="text-teal-500 hover:underline">
              Afjs.charitable@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
          <p>
            For privacy-related questions, email{" "}
            <a href="mailto:Afjs.charitable@gmail.com" className="text-teal-500 hover:underline">
              Afjs.charitable@gmail.com
            </a>{" "}
            or WhatsApp us at +91 63573 69174.
          </p>
        </section>
      </div>
    </div>
  );
}
