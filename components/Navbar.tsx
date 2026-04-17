"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside tap
  useEffect(() => {
    if (!isOpen) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
        scrolled ? "bg-white shadow-md shadow-teal-500/10" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" onClick={close} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden ring-2 ring-teal-500/30 group-hover:ring-teal-500 transition-all">
              <Image
                src="/images/logo-icon-clean.png"
                alt="AFJS Trust Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider hidden sm:block">
                All For Joyful Smiles
              </p>
              <p className="text-lg font-extrabold text-teal-700 leading-none">
                AFJS Trust
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Donate CTA + Language selector */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSelector />
            <Link
              href="/donate"
              className="px-5 py-2.5 bg-coral-400 hover:bg-coral-500 text-white text-sm font-bold rounded-full shadow-lg shadow-coral-400/30 hover:shadow-coral-400/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Donate Now ❤
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — fixed height so transition is instant */}
      <div
        className="lg:hidden border-t border-gray-100 bg-white overflow-hidden will-change-[max-height,opacity] transition-[max-height,opacity] duration-200 ease-in-out"
        style={{ maxHeight: isOpen ? "480px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-4 pb-5 pt-2 space-y-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="block px-4 py-3 text-base font-medium text-gray-700 rounded-xl hover:bg-teal-50 hover:text-teal-600 active:bg-teal-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <Link
              href="/donate"
              onClick={close}
              className="block w-full text-center px-4 py-3 bg-coral-400 hover:bg-coral-500 active:bg-coral-600 text-white font-bold rounded-full transition-colors shadow-md"
            >
              Donate Now ❤
            </Link>
            <div className="flex justify-center pt-1">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
