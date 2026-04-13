"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown } from "lucide-react";

const LANGUAGES = [
  { code: "en", label: "English",    native: "English",    flag: "🇬🇧" },
  { code: "hi", label: "Hindi",      native: "हिन्दी",      flag: "🇮🇳" },
  { code: "gu", label: "Gujarati",   native: "ગુજરાતી",   flag: "🇮🇳" },
  { code: "de", label: "German",     native: "Deutsch",    flag: "🇩🇪" },
  { code: "fr", label: "French",     native: "Français",   flag: "🇫🇷" },
  { code: "ar", label: "Arabic",     native: "العربية",    flag: "🇦🇪" },
  { code: "es", label: "Spanish",    native: "Español",    flag: "🇪🇸" },
  { code: "it", label: "Italian",    native: "Italiano",   flag: "🇮🇹" },
  { code: "ja", label: "Japanese",   native: "日本語",      flag: "🇯🇵" },
  { code: "zh-CN", label: "Chinese", native: "中文",        flag: "🇨🇳" },
];

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (
          config: { pageLanguage: string; includedLanguages?: string; autoDisplay?: boolean },
          containerId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

function getTranslateWidget(): HTMLSelectElement | null {
  return document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
}

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Detect when Google Translate widget is ready
  useEffect(() => {
    const interval = setInterval(() => {
      if (getTranslateWidget()) {
        setReady(true);
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Sync current language from cookie
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match) setCurrent(match[1]);
  }, []);

  function select(code: string) {
    if (code === "en") {
      // Reset translation
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + location.hostname;
      setCurrent("en");
      setOpen(false);
      window.location.reload();
      return;
    }
    const widget = getTranslateWidget();
    if (widget) {
      widget.value = code;
      widget.dispatchEvent(new Event("change"));
      setCurrent(code);
      setOpen(false);
    }
  }

  const activeLang = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
        aria-label="Select language"
        title="Change language"
      >
        <Globe size={15} className="text-teal-500" />
        <span className="hidden sm:inline text-xs">{activeLang.flag} {activeLang.native}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
          <div className="py-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => select(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2.5 transition-colors
                  ${current === lang.code
                    ? "bg-teal-50 text-teal-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <span className="flex-1">{lang.native}</span>
                {current === lang.code && (
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                )}
              </button>
            ))}
          </div>
          {!ready && (
            <p className="text-[10px] text-gray-400 text-center pb-2 px-3">
              Loading translator…
            </p>
          )}
        </div>
      )}
    </div>
  );
}
