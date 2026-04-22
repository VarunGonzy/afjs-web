import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | AFJS Trust",
  description: "Terms of use for joyfullsmiles.org by AFJS Charitable Trust.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: April 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance</h2>
          <p>
            By using joyfullsmiles.org, you agree to these terms. If you do not agree, please do
            not use this site. AFJS Charitable Trust reserves the right to update these terms at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Donations</h2>
          <p>
            All donations made through this website are voluntary and non-refundable unless there
            was a technical error resulting in a duplicate or incorrect charge. Donation receipts
            for 80G tax purposes are issued as per Indian Income Tax Act requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Use of Content</h2>
          <p>
            All content on this website, including text, images, program descriptions, and impact data,
            is the property of AFJS Charitable Trust. You may share content for awareness purposes
            with attribution. Commercial reproduction is prohibited without written consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Children&apos;s Privacy</h2>
          <p>
            We are committed to protecting the privacy and dignity of children we work with.
            Photos and case studies on this site have been obtained with appropriate consent.
            Personally identifiable information of beneficiary children is never published.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Links</h2>
          <p>
            Our site may link to third-party sites (e.g., Razorpay, WhatsApp, Instagram). We are
            not responsible for the content or privacy practices of those sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
          <p>
            AFJS Charitable Trust is not liable for any damages arising from use of this website.
            The site is provided &ldquo;as is&rdquo; without warranty of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">7. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be subject to the
            jurisdiction of courts in Bhavnagar, Gujarat.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:Afjs.charitable@gmail.com" className="text-teal-500 hover:underline">
              Afjs.charitable@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
