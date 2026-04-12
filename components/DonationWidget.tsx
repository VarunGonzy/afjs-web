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
  const [selected, setSelected] = useState<number | null>(1000);
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);

  const finalAmount = custom ? parseInt(custom) : selected ?? 0;

  const handleDonate = async () => {
    if (!finalAmount || finalAmount < 100) return alert("Minimum donation is ₹100");
    setLoading(true);
    try {
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount }),
      });
      const data = await res.json();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "AFJS Charitable Trust",
        description: "Donation — All For Joyful Smiles",
        order_id: data.id,
        theme: { color: "#2A9DA5" },
        handler: () => alert("Thank you for your donation! We will send your 80G receipt shortly."),
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch {
      alert("Payment could not be initiated. Please try again or use UPI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${compact ? "p-4" : "p-6"}`}>
        {!compact && (
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-4">Choose an amount</p>
        )}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {presets.map((p) => (
            <button
              key={p.value}
              onClick={() => { setSelected(p.value); setCustom(""); }}
              className={`py-2.5 px-2 rounded-xl text-sm font-bold border transition-all ${
                selected === p.value && !custom
                  ? "bg-teal-500 border-teal-500 text-white shadow-md"
                  : "border-gray-200 text-gray-700 hover:border-teal-300 hover:text-teal-600"
              }`}
            >
              <div>{p.label}</div>
              {!compact && <div className="text-xs font-normal opacity-70 mt-0.5">{p.desc}</div>}
            </button>
          ))}
          <button
            onClick={() => { setSelected(25000); setCustom(""); }}
            className={`col-span-3 py-2.5 px-2 rounded-xl text-sm font-bold border transition-all ${
              selected === 25000 && !custom
                ? "bg-gold-400 border-gold-400 text-white shadow-md"
                : "border-gold-300 text-gold-600 hover:bg-gold-50"
            }`}
          >
            ₹25,000 — Sponsor a Child&apos;s Full Year
          </button>
        </div>

        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
          <input
            type="number"
            placeholder="Custom amount"
            value={custom}
            onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
            className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
          />
        </div>

        <button
          onClick={handleDonate}
          disabled={loading}
          className="w-full py-3.5 bg-coral-400 hover:bg-coral-500 disabled:opacity-60 text-white font-extrabold rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
        >
          {loading ? "Processing..." : `Donate ${finalAmount ? `₹${finalAmount.toLocaleString("en-IN")}` : "Now"}`}
        </button>
        <p className="text-center text-xs text-gray-400 mt-2">Secured by Razorpay · 80G receipt available</p>
      </div>
    </>
  );
}
