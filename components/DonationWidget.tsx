"use client";

import { useState } from "react";
import Script from "next/script";

interface Props {
  compact?: boolean;
}

const presets = [
  { label: "₹100", value: 100, desc: "Buys notebooks" },
  { label: "₹1,000", value: 1000, desc: "A month of meals" },
  { label: "₹2,500", value: 2500, desc: "School supplies" },
  { label: "₹5,000", value: 5000, desc: "A term of tuition" },
  { label: "₹10,000", value: 10000, desc: "~5 months of school" },
];

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open(): void };
  }
}

export default function DonationWidget({ compact = false }: Props) {
  const [selected, setSelected] = useState<number>(1000);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const finalAmount = custom ? parseInt(custom) || 0 : selected;

  const handleDonate = async () => {
    if (!finalAmount || finalAmount < 1) return;
    if (!scriptLoaded) {
      alert("Payment gateway loading, please try again in a moment.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount, name, email }),
      });
      const data = await res.json();
      if (!data.id) throw new Error("Order creation failed");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: finalAmount * 100,
        currency: "INR",
        name: "AFJS Charitable Trust",
        description: `Donation of ₹${finalAmount.toLocaleString("en-IN")} to AFJS Trust`,
        image: "/images/logo-icon.jpg",
        order_id: data.id,
        prefill: { name, email },
        notes: {
          organization: "AFJS Charitable Trust",
          pan: "AALTA7481L",
          registration: "GJ/2025/0719739",
        },
        theme: { color: "#2A9DA5" },
        handler: (response: Record<string, string>) => {
          console.log("Payment success:", response);
          window.location.href = `/donate/thank-you?amount=${finalAmount}`;
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setScriptLoaded(true)}
        strategy="afterInteractive"
      />
      <div className={`${compact ? "" : "bg-white rounded-3xl shadow-xl p-6 md:p-8"}`}>
        {/* Amount presets */}
        <div className="grid grid-cols-3 gap-2 md:grid-cols-5 mb-3">
          {presets.map((p) => (
            <button
              key={p.value}
              onClick={() => { setSelected(p.value); setCustom(""); }}
              className={`relative rounded-xl py-3 px-2 text-center transition-all duration-200 border-2 group ${
                selected === p.value && !custom
                  ? "border-teal-500 bg-teal-50 shadow-md shadow-teal-500/10"
                  : "border-gray-200 hover:border-teal-300 bg-white hover:bg-teal-50"
              }`}
            >
              <span className={`block font-bold text-sm ${selected === p.value && !custom ? "text-teal-600" : "text-gray-800"}`}>
                {p.label}
              </span>
              <span className="block text-xs text-gray-400 mt-0.5 hidden md:block">{p.desc}</span>
            </button>
          ))}
        </div>

        {/* Custom amount */}
        <div className="mb-4">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-500">₹</span>
            <input
              type="number"
              placeholder="Enter custom amount"
              value={custom}
              onChange={(e) => { setCustom(e.target.value); setSelected(0); }}
              className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-400 focus:ring-0 outline-none text-gray-800 font-medium transition-colors"
              min={1}
            />
          </div>
        </div>

        {/* Name + email (optional for compact) */}
        {!compact && (
          <div className="grid sm:grid-cols-2 gap-3 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-400 outline-none text-gray-800 transition-colors"
            />
            <input
              type="email"
              placeholder="Email for receipt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-400 outline-none text-gray-800 transition-colors"
            />
          </div>
        )}

        {/* Donate button */}
        <button
          onClick={handleDonate}
          disabled={loading || !finalAmount}
          className="w-full py-4 bg-coral-400 hover:bg-coral-500 disabled:bg-gray-300 text-white font-bold text-lg rounded-full shadow-xl shadow-coral-400/30 hover:shadow-coral-400/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:shadow-none"
        >
          {loading
            ? "Opening payment..."
            : `Donate Securely`}
        </button>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secured by Razorpay
          </span>
          <span>·</span>
          <span>80G Tax Benefit Available</span>
          <span>·</span>
          <span>PAN: AALTA7481L</span>
        </div>
      </div>
    </>
  );
}
