import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DonationWidget from "@/components/DonationWidget";

export const metadata: Metadata = {
  title: "Sponsor a Child's Education in India | ₹25,000/year | AFJS Trust",
  description: "Sponsor a girl child or boy child in Bhavnagar, India for ₹25,000/year. Covers one full year of school fees at St. Xavier's Primary School — paid directly to the school. 80G tax exempt. AFJS Charitable Trust.",
  openGraph: {
    title: "Sponsor a Child's Education in India — ₹25,000/year | AFJS Trust",
    description: "₹25,000 covers one child's full year of school fees at St. Xavier's Primary School, Bhavnagar — paid directly to the school. 80G tax receipt. Direct impact, verified receipts.",
    images: [{ url: "/images/girl-empowerment-1.jpg", width: 1200, height: 630, alt: "Sponsor a child's education — AFJS Trust India" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/girl-empowerment-1.jpg"] },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://joyfullsmiles.org" },
    { "@type": "ListItem", position: 2, name: "Sponsor a Child", item: "https://joyfullsmiles.org/sponsor-a-child" },
  ],
};

const donateSchema = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  agent: { "@type": "Organization", name: "AFJS Charitable Trust" },
  recipient: { "@type": "Organization", name: "AFJS Charitable Trust" },
  purpose: "Child education sponsorship in Bhavnagar, India",
  target: "https://joyfullsmiles.org/sponsor-a-child",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Sponsor a Child's Education Through AFJS Trust",
  description: "Sponsor a child's full year of education in Bhavnagar, India in three simple steps.",
  step: [
    { "@type": "HowToStep", name: "Choose your sponsorship amount", text: "Select ₹25,000 for full annual sponsorship, or ₹10,000 for education materials, or ₹5,000 for nutrition support." },
    { "@type": "HowToStep", name: "Complete your donation", text: "Pay online via Razorpay (UPI, card, net banking) or WhatsApp us at +91 63573 69174 for bank transfer details." },
    { "@type": "HowToStep", name: "Receive confirmation and updates", text: "We match you with a child, send you the school fee receipt as proof, and provide regular progress updates throughout the year." },
  ],
  totalTime: "PT5M",
};

const tiers = [
  {
    label: "Full Sponsorship",
    amount: "₹25,000 / year",
    color: "bg-teal-500",
    items: [
      "Full year of school fees paid directly to St. Xavier's Primary School",
      "Fee receipt photographed and sent to you as proof",
      "Child's enrolment confirmed for the full academic year",
      "Regular progress updates throughout the year",
      "Year-end impact report and photos",
    ],
  },
  {
    label: "Education Support",
    amount: "₹10,000 / year",
    color: "bg-coral-400",
    items: [
      "Books, notebooks, and stationery for the full year",
      "School uniform (2 sets)",
      "After-school tutoring contribution",
      "Impact update at end of year",
    ],
  },
  {
    label: "Nutrition Sponsorship",
    amount: "₹5,000 / year",
    color: "bg-gold-500",
    items: [
      "Full year of nutrition support through monthly drives",
      "Ensures child arrives at school fed and ready to learn",
      "Photos from drives sent to sponsor",
    ],
  },
];

export default function SponsorAChildPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(donateSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/education-group.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Child Sponsorship
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Sponsor a Child&apos;s Education in India
          </h1>
          <p className="text-teal-100 text-xl max-w-2xl mx-auto mb-8">
            ₹25,000 covers one child&apos;s full year of school fees at St. Xavier&apos;s Primary School — paid directly to the school, receipt shared with you. 80G tax exempt.
          </p>
          <Link
            href="/donate"
            className="inline-block px-10 py-4 bg-coral-400 hover:bg-coral-500 text-white font-extrabold text-lg rounded-full shadow-xl transition-all hover:-translate-y-0.5"
          >
            Sponsor a Child Now
          </Link>
        </div>
      </div>

      {/* What sponsorship means */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
              What Your Money Does
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Choose Your Sponsorship Level</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Every amount is fully tracked and reported. Choose what works for you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.label} className="rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
                <div className={`${tier.color} px-6 py-5`}>
                  <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">{tier.label}</p>
                  <p className="text-white text-2xl font-extrabold">{tier.amount}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2.5">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/donate"
                    className="mt-6 block text-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full transition-all text-sm"
                  >
                    Donate {tier.amount.split(" ")[0]}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">How Sponsorship Works</h2>
          </div>
          <ol className="space-y-6">
            {[
              { n: "1", title: "You choose an amount", desc: "₹25,000 covers one child's full year of school fees. ₹10,000 or ₹5,000 goes toward our broader education and nutrition programmes. Or contribute any amount — every rupee helps." },
              { n: "2", title: "We match you with a child", desc: "We identify a child whose school place is at risk due to unpaid fees and match them to your contribution. You'll receive a brief profile." },
              { n: "3", title: "Fees are paid directly to the school", desc: "A cheque or transfer goes directly to St. Xavier's Primary School in the child's name. We photograph the receipt and send it to you." },
              { n: "4", title: "You receive updates throughout the year", desc: "Photos, WhatsApp messages, and an end-of-year report on the child's attendance and progress. You are a partner, not just a donor." },
            ].map((step) => (
              <li key={step.n} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white font-extrabold text-lg flex items-center justify-center shrink-0">
                  {step.n}
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{step.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Noor case study */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/girl-empowerment-1.jpg" alt="Noor — sponsored child, AFJS Trust" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full mb-4">Real Story</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Noor — From Dropout Risk to Rangoli Champion</h2>
            <p className="text-gray-500 italic mb-5">Class 6, St. Xavier&apos;s Primary School, Bhavnagar</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Noor was at serious risk of dropping out of school. Her family could not keep up with fees. With ₹19,400 in annual fees and a significant pending balance, she was about to lose her place.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A donor stepped in through AFJS Trust. Fees were paid directly to the school. Noor&apos;s seat was secured for the full academic year.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What happened next is why we exist. With her place in school assured, Noor won 2nd place in the school&apos;s Rangoli competition. Her teacher says she is one of the most focused students in her class. She wants to be an artist.
            </p>
            <blockquote className="border-l-4 border-teal-400 pl-4 italic text-gray-700">
              &ldquo;When someone paid my fees, I felt like someone believed in me. I don&apos;t want to let them down.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Donor testimonial */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="max-w-2xl mx-auto text-center">
          <svg className="w-10 h-10 text-teal-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
            &ldquo;As a donor from Germany, it was important for me to trust where my money goes. AFJS sends photos, receipts, and updates. Total transparency. I sponsor a child annually.&rdquo;
          </blockquote>
          <p className="font-semibold text-gray-900">Nikhitha</p>
          <p className="text-gray-400 text-sm">Donor, Europe</p>
        </div>
      </section>

      {/* Donation widget */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Sponsor a Child?</h2>
            <p className="text-gray-500">₹25,000 changes a child&apos;s year. 80G tax receipt provided.</p>
          </div>
          <DonationWidget />
          <p className="text-center text-gray-400 text-xs mt-6">
            Prefer to speak to someone first?{" "}
            <a href="https://wa.me/916357369174" className="text-teal-500 hover:underline">WhatsApp us →</a>
          </p>
        </div>
      </section>

      {/* Trust signals */}
      <div className="bg-teal-950 py-10 px-4 text-center">
        <p className="text-teal-300 text-sm">
          AFJS Charitable Trust · Reg: GJ/2025/0719739 · PAN: AALTA7481L · Trust Reg: F/3788/Bhavnagar · 80G Eligible
        </p>
      </div>
    </>
  );
}
