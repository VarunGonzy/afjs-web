"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, Users, Apple, Home } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Child Education",
    description:
      "After-school tutoring, mentorship, learning materials, and scholarship support to ensure every child has equal access to quality education.",
    image: "/images/education-group.jpg",
    href: "/programs/child-education",
    color: "from-teal-500 to-teal-600",
    badge: "Core Program",
  },
  {
    icon: Users,
    title: "Girl Empowerment",
    description:
      "Breaking barriers through education, confidence-building programs, and mentorship, because educating a girl changes her entire family.",
    image: "/images/girl-empowerment-1.jpg",
    objectPosition: "center 30%",
    href: "/programs/girl-empowerment",
    color: "from-coral-400 to-coral-500",
    badge: "High Impact",
  },
  {
    icon: Apple,
    title: "Food & Nutrition Drive",
    description:
      "Regular nutrition drives ensuring children have access to wholesome meals, because a nourished child is a learning child.",
    image: "/images/nutrition-kids-1.jpg",
    href: "/programs/food-nutrition",
    color: "from-gold-400 to-gold-600",
    badge: "Ongoing",
  },
  {
    icon: Home,
    title: "Family Welfare",
    description:
      "Holistic family support services that strengthen households, enabling parents to keep their children in school and thriving.",
    image: "/images/family-welfare-1.jpg",
    objectPosition: "center 40%",
    href: "/programs/family-welfare",
    color: "from-teal-600 to-teal-800",
    badge: "Community",
  },
];

export default function ProgramsSection() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {programs.map((prog) => (
        <Link
          key={prog.href}
          href={prog.href}
          className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-teal-200 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
          {/* Image */}
          <div className="relative h-44 overflow-hidden">
            <Image
              src={prog.image}
              alt={prog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              style={prog.objectPosition ? { objectPosition: prog.objectPosition } : undefined}
            />
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${prog.color} opacity-60`} />
            {/* Badge */}
            <span className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold rounded-full">
              {prog.badge}
            </span>
            {/* Icon */}
            <div className="absolute bottom-3 left-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg">
              <prog.icon size={18} className="text-teal-600" />
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="font-bold text-gray-900 mb-2 text-base group-hover:text-teal-600 transition-colors">
              {prog.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed flex-1">
              {prog.description}
            </p>
            <div className="mt-4 flex items-center text-teal-500 text-sm font-semibold group-hover:gap-2 transition-all">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
