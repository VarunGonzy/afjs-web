import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AFJS Trust",
  description: "Privacy policy for AFJS Charitable Trust website and donation platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: April 2026</p>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
        <p>AFJS Charitable Trust (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates joyfullsmiles.org. This page explains our policies regarding the collection, use, and disclosure of personal data when you use our website or make a donation.</p>
        <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
        <p>When you donate through Razorpay, we collect your name, email address, and payment details (processed securely by Razorpay — we do not store card information). If you contact us via WhatsApp or email, we retain those communications to respond to your query.</p>
        <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
        <p>We use collected information to: process your donation, send 80G tax receipts, send impact updates (with your consent), and respond to your enquiries. We do not sell, trade, or rent your personal information to third parties.</p>
        <h2 className="text-xl font-bold text-gray-900">Cookies</h2>
        <p>Our website may use cookies for analytics purposes (Google Analytics). You can disable cookies in your browser settings.</p>
        <h2 className="text-xl font-bold text-gray-900">Third-Party Services</h2>
        <p>We use Razorpay for payment processing. Their privacy policy governs data shared during transactions. We use Google Analytics for website traffic analysis.</p>
        <h2 className="text-xl font-bold text-gray-900">Contact</h2>
        <p>For privacy-related questions, email Afjs.charitable@gmail.com or WhatsApp +91 63573 69174.</p>
      </div>
    </div>
  );
}
