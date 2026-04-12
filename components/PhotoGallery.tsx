"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  { src: "/images/nutrition-kids-1.jpg", alt: "Children receiving nutritious meals", caption: "Food & Nutrition Drive" },
  { src: "/images/girl-empowerment-1.jpg", alt: "Girl empowerment program participant", caption: "Girl Empowerment" },
  { src: "/images/education-group.jpg", alt: "Students at our partner school", caption: "Child Education" },
  { src: "/images/nutrition-kids-2.jpg", alt: "Children enjoying a meal", caption: "Nutrition Drive" },
  { src: "/images/girl-empowerment-2.jpg", alt: "Young girls sharing gratitude", caption: "Girl Empowerment" },
  { src: "/images/community-food.jpg", alt: "Community food distribution", caption: "Community Drive" },
  { src: "/images/impact-donation.jpg", alt: "Donation being handed over to beneficiaries", caption: "Impact Moment" },
  { src: "/images/nutrition-kids-3.jpg", alt: "Two small children receiving food support", caption: "Nutrition Drive" },
];

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState<null | (typeof photos)[0]>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightbox(photo)}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-white text-xs font-semibold bg-teal-500/90 px-2 py-1 rounded-full">
                {photo.caption}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <div className="relative max-w-3xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-1.5 rounded-full">
            {lightbox.caption}
          </p>
        </div>
      )}
    </>
  );
}
