import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food & Nutrition Drive | Donate to Feed Children in India | AFJS Trust",
  description: "AFJS Trust runs regular food and nutrition drives providing wholesome meals to underprivileged children in Bhavnagar and Ahmedabad. Donate to support our nutrition program.",
};

export default function FoodNutritionPage() {
  return (
    <>
      <div className="relative bg-gradient-to-br from-gold-600 to-gold-400 pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20"><Image src="/images/nutrition-kids-2.jpg" alt="" fill className="object-cover" /></div>
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Program 3 of 4</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Food & Nutrition Drive</h1>
          <p className="text-yellow-100 text-xl">A nourished child is a learning child.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Nutrition Matters</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Malnutrition is a silent barrier to education. Children who are hungry cannot concentrate, cannot learn, and often stop attending school. Our Food & Nutrition Drive addresses this directly by providing regular, wholesome meals to children and families in need.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              {["4+ nutrition drives per month", "Hot, wholesome meals for children and families", "Serving Bhavnagar and Ahmedabad communities", "Volunteers cook and distribute meals personally", "Focus on school-going children", "Emergency nutrition support during hardship"].map(i => (
                <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />{i}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/nutrition-kids-1.jpg" alt="Children with meals" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/nutrition-kids-3.jpg" alt="Nutrition drive" fill className="object-cover" sizes="25vw" style={{ objectPosition: "center 65%" }} />
            </div>
            <div className="relative h-48 col-span-2 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/community-food.jpg" alt="Community food distribution" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
        <div className="bg-gold-400/10 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Feed a Child Today</h3>
          <p className="text-gray-600 mb-6">₹1,000 provides nutritious meals for a child for an entire month. Even ₹100 makes a difference.</p>
          <Link href="/donate" className="inline-block px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5">Donate for Nutrition</Link>
        </div>
      </div>
    </>
  );
}
