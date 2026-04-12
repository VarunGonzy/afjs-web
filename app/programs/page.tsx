import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Programs | Child Education, Girl Empowerment, Nutrition & Family Welfare",
  description:
    "AFJS Trust runs four core programs: Child Education, Girl Empowerment, Food & Nutrition Drive, and Family Welfare — all serving underprivileged communities in Bhavnagar and Ahmedabad.",
};

const programs = [
  {
    title: "Child Education",
    tagline: "Every child deserves to learn",
    image: "/images/education-group.jpg",
    href: "/programs/child-education",
    color: "from-teal-600 to-teal-800",
    description: "After-school tutoring, mentorship, learning materials, and scholarship support at St. Xavier's Primary School, Bhavnagar.",
    stats: [{ label: "Children", value: "300+" }, { label: "School", value: "St. Xavier's" }],
  },
  {
    title: "Girl Empowerment",
    tagline: "Educate a girl, change the world",
    image: "/images/girl-empowerment-1.jpg",
    objectPosition: "center 30%",
    href: "/programs/girl-empowerment",
    color: "from-coral-400 to-coral-600",
    description: "Confidence-building programs, mentorship, and educational scholarships exclusively for girls — because an educated girl uplifts her entire family.",
    stats: [{ label: "Girls Supported", value: "150+" }, { label: "Impact", value: "Families" }],
  },
  {
    title: "Food & Nutrition Drive",
    tagline: "A full stomach enables learning",
    image: "/images/nutrition-kids-1.jpg",
    objectPosition: undefined,
    href: "/programs/food-nutrition",
    color: "from-gold-400 to-gold-600",
    description: "Regular nutrition drives delivering wholesome meals to underprivileged children and families across Bhavnagar and Ahmedabad.",
    stats: [{ label: "Meals Served", value: "1,000+" }, { label: "Drives/Month", value: "4+" }],
  },
  {
    title: "Family Welfare",
    tagline: "Strong families keep children in school",
    image: "/images/family-welfare-1.jpg",
    objectPosition: "center 40%",
    href: "/programs/family-welfare",
    color: "from-teal-700 to-teal-950",
    description: "Holistic family support programs that address economic barriers, helping parents keep their children in school and engaged with their communities.",
    stats: [{ label: "Families Reached", value: "200+" }, { label: "Support Types", value: "Multi" }],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-16 px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">What We Do</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Our Programs</h1>
        <p className="text-teal-100 text-lg max-w-2xl mx-auto">
          Four pillars of lasting community change — each designed to create a ripple effect that uplifts entire families.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        {programs.map((prog, i) => (
          <div key={prog.href} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-xl">
                <Image src={prog.image} alt={prog.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" style={prog.objectPosition ? { objectPosition: prog.objectPosition } : undefined} />
                <div className={`absolute inset-0 bg-gradient-to-t ${prog.color} opacity-50`} />
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <span className="inline-block text-xs font-bold text-teal-500 uppercase tracking-widest mb-2">{prog.tagline}</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">{prog.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{prog.description}</p>
              <div className="flex gap-4 mb-6">
                {prog.stats.map((s) => (
                  <div key={s.label} className="bg-teal-50 rounded-xl px-4 py-2.5 text-center">
                    <p className="font-extrabold text-teal-600 text-lg">{s.value}</p>
                    <p className="text-gray-500 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href={prog.href} className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full transition-colors shadow-md">
                  Learn More
                </Link>
                <Link href="/donate" className="px-6 py-3 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full transition-colors shadow-md">
                  Support This →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
