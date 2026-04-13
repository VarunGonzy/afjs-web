import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions | AFJS Charitable Trust",
  description: "Everything you need to know about donating to AFJS Trust, child sponsorship, Section 80G tax exemption, international donations, and how we use your money.",
  openGraph: {
    title: "FAQ | AFJS Charitable Trust — Donate to Child Education in India",
    description: "Answers to every question about AFJS Trust: 80G tax, child sponsorship, international donations, how money is used, and more.",
    images: [{ url: "/images/education-group.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/images/education-group.jpg"] },
};

const faqs = [
  {
    q: "What is AFJS Charitable Trust?",
    a: "AFJS Charitable Trust (All For Joyful Smiles) is a registered NGO based in Bhavnagar, Gujarat, India. We support underprivileged children through four programmes: Child Education, Girl Empowerment, Food & Nutrition, and Family Welfare. We were founded by John Dsouza and Varun Gonsalves and registered in 2025. Darpan Registration: GJ/2025/0719739.",
  },
  {
    q: "Is my donation eligible for 80G tax exemption?",
    a: "Yes. AFJS Charitable Trust is registered under the Bombay Public Trusts Act, 1950 and holds PAN AALTA7481L. Donations are eligible for a 50% deduction under Section 80G of the Income Tax Act, 1961. You will receive an official donation receipt for your ITR records.",
  },
  {
    q: "What is Section 80G and how does it apply to AFJS Trust donations?",
    a: "Section 80G allows Indian taxpayers to deduct a portion of charitable donations from their taxable income. For AFJS Trust, you can deduct 50% of the donated amount. For example, if you donate ₹10,000 and are in the 30% tax bracket, you save ₹1,500 in tax. Your net cost is ₹8,500. You need your PAN card and our donation receipt to claim this in your ITR filing.",
  },
  {
    q: "What documents do I need to claim 80G tax benefits?",
    a: "You need: (1) Your PAN card — the deduction cannot be claimed without one. (2) The official donation receipt from AFJS Trust — we issue these upon request. (3) Bank statement confirming the payment, for larger donations. Note: Cash donations above ₹2,000 are not eligible for 80G. Online payment, UPI, cheque, and bank transfer are all fully eligible.",
  },
  {
    q: "How much does it cost to sponsor a child for a full year?",
    a: "₹25,000 sponsors one child's complete year of education — covering school fees at St. Xavier's Primary School, Bhavnagar, books, stationery, school uniforms, after-school tutoring, and nutrition support. This is our Child Sponsorship programme and is one of the highest-impact ways to contribute.",
  },
  {
    q: "Can I specifically sponsor a girl child?",
    a: "Yes. AFJS Trust's Girl Empowerment programme specifically supports girls at the highest risk of dropping out of school. When you donate with a note specifying 'Girl Empowerment' or 'Sponsor a Girl', we allocate your funds to our girl-focused programmes. WhatsApp us at +91 63573 69174 to arrange a named girl sponsorship.",
  },
  {
    q: "Can I donate from outside India (US, UK, EU, Germany)?",
    a: "Yes. You can donate using any international Visa or Mastercard credit or debit card through our Razorpay payment gateway at joyfullsmiles.org/donate. For bank transfers, WhatsApp us at +91 63573 69174 for our SWIFT/account details. FCRA compliance for large foreign donations — contact us directly before transferring large sums.",
  },
  {
    q: "Can I donate in USD, EUR, or GBP?",
    a: "Our Razorpay gateway processes payments in INR, but international cards in any currency are accepted — your bank converts to INR at the prevailing exchange rate. For large donations in foreign currency, contact us directly at Afjs.charitable@gmail.com to discuss bank transfer options.",
  },
  {
    q: "How is my donation money used?",
    a: "100% of your donation goes directly to programme delivery. Our breakdown: 55% Education (fees, materials, uniforms), 25% Nutrition programmes, 15% Family welfare, 5% Communications and coordination. Administrative overhead is kept below 5%. We maintain receipts for every transaction and can provide a full accounting on request.",
  },
  {
    q: "Can I make a recurring monthly donation?",
    a: "Yes. On our Donate page, you can toggle to monthly giving through Razorpay. Monthly donors are the backbone of our planning — they allow us to commit to children's full academic years rather than term by term. Even ₹500/month makes a meaningful difference over a year.",
  },
  {
    q: "What happens after I sponsor a child — do I get updates?",
    a: "Yes. When you sponsor a child, we commit to: (1) Sending you photographs of the enrolment and fee payment receipt, (2) Regular WhatsApp or email updates about the child's progress, (3) End-of-year impact report. We are a small organisation and do not yet offer formal pen-pal programmes, but we believe in direct, personal communication with our donors.",
  },
  {
    q: "Where does AFJS Trust operate?",
    a: "Our primary education partner is St. Xavier's Primary School, Devbagh, Bhavnagar, Gujarat. We run nutrition drives across several underserved localities in Bhavnagar. We also have a presence in Ahmedabad, where we serve communities of families who migrated from Saurashtra. Our registered office is at Block No. 103, Catholic Society, Vidhyanagar, Bhavnagar, Gujarat 364002.",
  },
  {
    q: "Does AFJS Trust operate in Ahmedabad as well as Bhavnagar?",
    a: "Yes. We have a growing programme presence in Ahmedabad, particularly serving communities of families who have migrated from rural Gujarat. Our Ahmedabad activities include nutrition drives and family welfare outreach. Our core education programme, however, is centred on St. Xavier's Primary School in Bhavnagar.",
  },
  {
    q: "Can companies or businesses donate to AFJS Trust?",
    a: "Yes. Companies can donate to AFJS Charitable Trust and claim the 80G deduction on their corporate tax. For corporate donations above ₹1,00,000, please contact us directly at Afjs.charitable@gmail.com to ensure all documentation is correctly issued. We can provide formal donation receipts, an MOU if required, and impact reports for CSR compliance.",
  },
  {
    q: "How can I volunteer with AFJS Trust in Bhavnagar?",
    a: "We welcome volunteers in Bhavnagar, particularly for after-school tutoring, nutrition drive logistics, and community outreach. WhatsApp John Dsouza at +91 63573 69174 with a brief introduction. Volunteers from outside Bhavnagar can support us by sharing our work on social media, coordinating fundraising in their communities, or providing professional skills (graphic design, legal, accounting).",
  },
  {
    q: "What is AFJS Trust's FCRA status?",
    a: "AFJS Trust is currently in the process of obtaining FCRA (Foreign Contribution Regulation Act) registration, which governs large donations from foreign sources. Until registration is complete, large foreign donations should be discussed with us directly before transfer to ensure regulatory compliance. Small individual international donations via Razorpay are generally straightforward — contact us if you have concerns.",
  },
  {
    q: "How is AFJS Trust different from other NGOs in Gujarat?",
    a: "AFJS Trust is founder-led, community-rooted, and transparent by design. John Dsouza grew up in the communities we serve in Bhavnagar — this is not an outside intervention. We publish case studies, share fee receipts, document every drive, and communicate directly with donors via WhatsApp. We are small enough to know every child by name, and large enough to make a measurable difference.",
  },
  {
    q: "How can I contact AFJS Trust?",
    a: "WhatsApp: +91 63573 69174 (fastest, typically responds within a few hours). Email: Afjs.charitable@gmail.com. Address: Block No. 103, Catholic Society, Vidhyanagar, Bhavnagar, Gujarat 364002. Instagram: @afjs_charitable_trust",
  },
  {
    q: "Is AFJS Trust's registration legitimate and verifiable?",
    a: "Yes. AFJS Charitable Trust is registered under the Bombay Public Trusts Act, 1950. Our details: Darpan Registration: GJ/2025/0719739 | PAN: AALTA7481L | Trust Registration: F/3788/Bhavnagar. Our Darpan registration can be verified on the NGO Darpan portal maintained by NITI Aayog. We are happy to share all registration documents on request.",
  },
  {
    q: "What payment methods are accepted for donations?",
    a: "We accept: (1) Razorpay — UPI, credit/debit cards, net banking, wallets. (2) UPI — directly to 63573690174@sbi. (3) Bank transfer — contact us for NEFT details. (4) International cards — Visa, Mastercard, Amex via Razorpay. For WhatsApp-coordinated donations, we will guide you to the most convenient option.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://joyfullsmiles.org" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://joyfullsmiles.org/faq" },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="pt-24 pb-20 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500">
            Everything you need to know about AFJS Trust, donations, child sponsorship, and Section 80G tax benefits.
          </p>
        </div>

        <FaqAccordion faqs={faqs} />

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
