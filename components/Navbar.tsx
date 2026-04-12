"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Our Impact", href: "/impact" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-extrabold text-teal-600 text-lg">
            <span>AFJS Trust</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-teal-600 font-medium transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex px-4 py-2 bg-coral-400 hover:bg-coral-500 text-white text-sm font-bold rounded-full transition-colors shadow-md"
            >
              Donate Now
            </Link>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600 hover:text-teal-600">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-gray-700 hover:text-teal-600 font-medium py-1">
              {l.label}
            </Link>
          ))}
          <Link href="/donate" onClick={() => setOpen(false)} className="block w-full text-center px-4 py-2.5 bg-coral-400 text-white font-bold rounded-full mt-2">
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
}
