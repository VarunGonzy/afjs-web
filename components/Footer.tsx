import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Our Impact", href: "/impact" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const programs = [
  { label: "Child Education", href: "/programs/child-education" },
  { label: "Girl Empowerment", href: "/programs/girl-empowerment" },
  { label: "Food & Nutrition", href: "/programs/food-nutrition" },
  { label: "Family Welfare", href: "/programs/family-welfare" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="text-white font-extrabold text-lg mb-2">AFJS Trust</p>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              All For Joyful Smiles — Supporting underprivileged children in Gujarat through education, nutrition, and family welfare.
            </p>
            <a
              href="https://wa.me/916357369174"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-full transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          <div>
            <p className="text-white font-bold mb-3 text-sm uppercase tracking-widest">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-teal-300 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold mb-3 text-sm uppercase tracking-widest">Programs</p>
            <ul className="space-y-2">
              {programs.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-teal-300 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold mb-3 text-sm uppercase tracking-widest">Contact</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+91 63573 69174</li>
              <li>Afjs.charitable@gmail.com</li>
              <li className="leading-relaxed">Block No. 103, Catholic Society, Vidhyanagar, Bhavnagar, Gujarat 364002</li>
            </ul>
            <a
              href="https://www.instagram.com/afjs_charitable_trust/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-pink-400 hover:text-pink-300 text-sm transition-colors"
            >
              @afjs_charitable_trust
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-teal-900 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} AFJS Charitable Trust. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Darpan Reg: GJ/2025/0719739</span>
            <span>PAN: AALTA7481L</span>
            <Link href="/privacy-policy" className="hover:text-gray-300">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
