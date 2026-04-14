import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | Real Stories of Change | AFJS Trust",
  description:
    "Five real stories of children and families transformed through AFJS Charitable Trust's education, nutrition, and welfare programmes in Bhavnagar, Gujarat.",
  openGraph: {
    title: "Case Studies | Real Stories of Change | AFJS Trust",
    description:
      "Read how AFJS Trust changed lives — from a girl who won a school competition to a family that stayed together because a child's fees were paid.",
    images: ["/images/education-group.jpg"],
  },
};

const caseStudies = [
  {
    id: "fatima",
    name: "Noor",
    age: "Class 6, St. Xavier's Primary School",
    program: "Child Education",
    programColor: "bg-teal-500",
    image: "/images/girl-empowerment-1.jpg",
    tagline: "From dropout risk to Rangoli champion",
    story: [
      "Noor was at serious risk of dropping out of school. Her family, like many in Bhavnagar's underprivileged communities, could not keep up with school fees. With ₹19,400 in annual fees and a significant pending balance, school had become a precarious thread to hold onto.",
      "AFJS Trust, through donor support, stepped in to cover Noor's school fees at St. Xavier's Primary School, Bhavnagar. A donation cheque was raised and handed directly to the school. The principal acknowledged the contribution, and Noor's enrolment for the academic year June 2025 – May 2026 was secured.",
      "What happened next is the reason AFJS Trust exists. With her place in school assured, Noor thrived. She went on to win 2nd place in the Rangoli competition at St. Xavier's Higher Secondary School in the year 2025–26 — a certificate of achievement she earned on merit, in front of the entire school.",
      "Today, Noor comes to school every day. She wants to be an artist. Her teachers say she is one of the most focused students in her class.",
    ],
    quote: "When someone paid my fees, I felt like someone believed in me. I don't want to let them down.",
    impact: ["School fees secured for full academic year", "2nd place in school Rangoli competition", "Zero absences since enrolment"],
    donor: "Sponsored by Ms. Ramakrishnan",
  },
  {
    id: "vijay",
    name: "Vijay",
    age: "Class 4, St. Xavier's Primary School",
    program: "Child Education",
    programColor: "bg-teal-500",
    image: "/images/education-banner.jpg",
    tagline: "A boy who almost had to choose between school and his family",
    story: [
      "Vijay was in Class 4 at St. Xavier's Primary School when his family found themselves unable to pay his school fees. The total annual fee was ₹19,400, of which ₹15,900 remained pending — a sum completely out of reach for his household.",
      "Without intervention, Vijay would have been asked to leave the school. His parents were already discussing whether he should start helping with the family's small income instead.",
      "AFJS Trust arranged for ₹3,500 to be deposited directly to the school in Term 1, with a further payment plan to cover the remaining balance. The school confirmed the receipt with a stamped fee certificate. Vijay's seat was saved.",
      "Vijay is now in regular attendance. His favourite subject is mathematics. His parents, who initially feared he would never finish primary school, say they now dare to imagine him completing secondary education.",
    ],
    quote: "My father used to say school was a dream. Now he says it's a plan.",
    impact: ["Immediate fee crisis resolved", "Full-year enrolment secured", "Family no longer considering withdrawal"],
    donor: "Sponsored by Sanjana R.",
  },
  {
    id: "nutrition-drive",
    name: "The November Nutrition Drive",
    age: "80+ children and families, Bhavnagar",
    program: "Food & Nutrition",
    programColor: "bg-gold-500",
    image: "/images/nutrition-kids-2.jpg",
    tagline: "Hot meals in the rain — because hunger doesn't stop for weather",
    story: [
      "On a wet November morning in Bhavnagar, when most people would have stayed indoors, AFJS Trust's food drive vehicle rolled into one of the city's most underserved localities. Eight children were waiting — plates in hand, standing in the rain without umbrellas, smiling.",
      "The November 2025 nutrition drive was one of the trust's most challenging and most memorable. The rains had made road access difficult, and the team had to navigate waterlogged streets to reach the distribution point on time.",
      "Over the course of the morning, the team served hot, freshly cooked meals to over 80 individuals — children, parents, and elderly residents. The AFJS standee banner stood in the rain as a marker for people to find the distribution point.",
      "This drive was funded entirely by donations collected through the trust's WhatsApp network and Instagram following. Several donors from the UK and Germany contributed after seeing a video posted on social media.",
      "What made this drive different was not the numbers, but the moment captured on camera: eight children, soaked and barefoot, holding their plates up with huge grins. That image became the most-shared post in AFJS Trust's history.",
    ],
    quote: "They came in the rain for our children. Nobody does that.",
    impact: ["80+ individuals served", "Hot, freshly cooked meals provided", "International donors triggered by social media post"],
    donor: "Funded by diaspora donors — India, UK, Germany",
  },
  {
    id: "arjun",
    name: "Arjun",
    age: "Class 3, St. Xavier's Primary School",
    program: "Child Education",
    programColor: "bg-teal-500",
    image: "/images/education-riddhi.jpg",
    tagline: "The boy who drove his teachers mad — and then proved them wrong",
    story: [
      "Arjun is, by every teacher's account, a handful. He talks in class, makes the other children laugh at the worst possible moments, argues back when corrected, and once — reportedly — released a frog near the principal's office on a Monday morning. His teachers love him. They would also, on some days, gladly trade him for a quieter child.",
      "Behind the chaos is a sharp, restless mind. Arjun finishes his classwork before anyone else and then — with nothing left to occupy him — goes looking for trouble. His maths teacher quietly told us he was the most naturally gifted student she had taught in years. The problem was never ability. It was a family that could no longer afford to keep him in school.",
      "His father had lost regular work. The fee balance at St. Xavier's had been climbing for months. When AFJS Trust's community contact flagged Arjun's situation, John visited the family. Within the week, Riddhi Parmar — a donor who had been sponsoring AFJS programmes — agreed to cover his fees in full for the academic year.",
      "The cheque went directly to the school. The receipt came back stamped. Arjun's seat was saved — frog incidents notwithstanding.",
      "He is still the loudest child in Class 3. He is also, according to his maths teacher, now the one correcting her calculations on the blackboard. She is choosing to take this as a good sign.",
    ],
    quote: "He is naughty, yes. But he is also the first one to help another child who doesn't understand. That's the boy we're keeping in school.",
    impact: ["Full year fees paid directly to school", "Academic performance: top of class in maths", "Zero dropout risk — enrolment secured"],
    donor: "Sponsored by Riddhi Parmar",
  },
  {
    id: "laptops-girls",
    name: "Meera & Asha",
    age: "Diploma in Computer Engineering, Bhavnagar",
    program: "Girl Empowerment",
    programColor: "bg-coral-400",
    image: "/images/education-laptops.jpg",
    tagline: "They were one Python error away from quitting their Diploma",
    story: [
      "Meera and Asha were midway through their Diploma in Computer Engineering when things started to fall apart. The culprit was Python — the programming language that trips up thousands of students every year, and that was now threatening to end their academic journey entirely.",
      "Both girls had enrolled in the Diploma with genuine excitement. Computers felt like a door to a future their parents never had. But Python was a wall. The logic was unfamiliar, the error messages incomprehensible, and the lab sessions left them more confused than when they arrived. By the time they reached their semester exams, both were seriously considering dropping out.",
      "Nikhitha — one of AFJS Trust's core members and a dedicated sponsor based in Germany — heard about their situation. She stepped in immediately, arranging for targeted academic support, covering their exam fees, and personally staying in touch with the girls through the lead-up to their exams.",
      "What happened next was a complete 180. With the financial pressure lifted and focused support in place, Meera and Asha sat their semester exams — and both passed. Not just scraped through. Passed with results they could be proud of.",
      "Their marksheets are now displayed on the AFJS Trust impact page. When Nikhitha saw the results, she said she cried. The girls said they did too.",
    ],
    quote: "I was so scared of Python that I stopped going to the lab. Now I actually understand what I was doing wrong.",
    impact: ["Both cleared their Diploma semester exams", "Academic confidence rebuilt from zero", "Neither dropped out — both continuing their Diploma"],
    donor: "Sponsored by Nikhitha — AFJS core member, Germany",
  },
  {
    id: "birthday-community",
    name: "A Birthday Worth Remembering",
    age: "Community event, Bhavnagar",
    program: "Family Welfare",
    programColor: "bg-teal-700",
    image: "/images/community-birthday.jpg",
    tagline: "When a donor's birthday became a village celebration",
    story: [
      "When Nikhitha — a generous donor who had been sponsoring children's education through AFJS Trust — mentioned her upcoming birthday to John Dsouza, she did not expect what happened next.",
      "John quietly organised a surprise. On the day of her birthday, AFJS Trust ran a community nutrition drive in her name, gathering the children and families they support in Bhavnagar and presenting a handmade birthday greeting from the children — signed with their names and decorated with drawings.",
      "The children held up a banner reading 'Happy Birthday Nikhitha', made with cardboard and coloured pens. Some had drawn stars and flowers. One child wrote 'Thank you for my school fees' beside her name.",
      "The photographs from that morning — children laughing, holding plates of food, gathered around a birthday banner in front of the AFJS standee — went around the world. Nikhitha, watching from abroad, said it was the most meaningful birthday she had ever had.",
      "This case study is not about education or nutrition in isolation. It is about what happens when a community of donors and beneficiaries becomes something more — when generosity is met with gratitude, and everyone feels seen.",
    ],
    quote: "I've had birthday cakes. I've never had something like this.",
    impact: ["Community drive run in donor's name", "Handmade cards from 20+ children", "Strengthened donor-community relationship"],
    donor: "In honour of Nikhitha, donor & sponsor",
  },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://joyfullsmiles.org" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://joyfullsmiles.org/case-studies" },
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/education-group.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Real Stories
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-teal-100 text-xl max-w-2xl mx-auto">
            Behind every number in our impact report is a real person. These are five of their stories.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 space-y-24">
        {caseStudies.map((cs, i) => (
          <article key={cs.id} className="scroll-mt-24" id={cs.id}>
            <div className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              {/* Image */}
              <div className={`relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-xl ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <Image
                  src={cs.image}
                  alt={cs.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 ${cs.programColor} text-white text-xs font-bold rounded-full`}>
                    {cs.program}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <p className="text-teal-500 text-xs font-bold uppercase tracking-widest mb-2">{cs.age}</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">{cs.name}</h2>
                <p className="text-gray-500 italic mb-6">{cs.tagline}</p>

                <div className="space-y-3 text-gray-600 leading-relaxed text-sm mb-6">
                  {cs.story.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-teal-400 pl-4 italic text-gray-700 mb-6">
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>

                {/* Impact bullets */}
                <div className="bg-teal-50 rounded-2xl p-5 mb-4">
                  <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-3">Impact</p>
                  <ul className="space-y-1.5">
                    {cs.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-gray-400 italic">{cs.donor}</p>
              </div>
            </div>

            {i < caseStudies.length - 1 && (
              <div className="mt-24 border-t border-gray-100" />
            )}
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-teal-500 py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Be part of the next story
        </h2>
        <p className="text-teal-100 mb-8 max-w-xl mx-auto">
          Every donation creates a story like the ones above. ₹25,000 sponsors one child&apos;s entire year of education.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/donate"
            className="px-8 py-4 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full shadow-xl transition-all hover:-translate-y-0.5"
          >
            Donate Now ❤
          </Link>
          <Link
            href="/impact"
            className="px-8 py-4 bg-white text-teal-600 font-bold rounded-full shadow-xl transition-all hover:-translate-y-0.5"
          >
            See Full Impact
          </Link>
        </div>
      </div>
    </>
  );
}
