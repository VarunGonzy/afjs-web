import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Child Education Program | AFJS Trust - Sponsor a Child in India",
  description: "AFJS Trust's child education program provides after-school tutoring, learning materials, and scholarships to underprivileged children at St. Xavier's Primary School, Bhavnagar. Donate to sponsor a child for ₹25,000/year.",
};

export default function ChildEducationPage() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-teal-950 to-teal-600 pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20"><Image src="/images/education-group.jpg" alt="" fill className="object-cover" /></div>
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Program 1 of 4</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Child Education</h1>
          <p className="text-teal-100 text-xl">Every child deserves the chance to learn, grow, and dream.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Our child education program identifies underprivileged children in Bhavnagar and Ahmedabad who lack access to quality schooling. We enroll them at St. Xavier&apos;s Primary School, Devbagh, Bhavnagar — providing full support including tuition, books, uniforms, and after-school tutoring.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Volunteer mentors work closely with each child, tracking their progress and providing the academic and emotional support they need to thrive.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              {["After-school tutoring and mentorship", "School fee support and scholarship", "Books, notebooks, and stationery", "Uniform sponsorship", "Regular progress monitoring", "Parent engagement programs"].map(i => (
                <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />{i}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/education-laptops.jpg" alt="Children learning" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
        <div className="bg-teal-50 rounded-3xl p-8 text-center mb-10">
          <h3 className="text-2xl font-bold text-teal-900 mb-2">₹25,000 = One Child&apos;s Full Year</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">Your sponsorship covers tuition at St. Xavier&apos;s Primary School, textbooks, school uniform, and nutrition support for an entire academic year.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/donate#sponsor" className="px-8 py-3.5 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5">Sponsor a Child — ₹25,000</Link>
            <Link href="/donate" className="px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5">Any Amount Helps</Link>
          </div>
        </div>
      </div>
    </>
  );
}
