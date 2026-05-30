"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function ThankYouContent() {
  const params = useSearchParams();
  const amount = params.get("amount");
  const formatted = amount
    ? `₹${parseInt(amount).toLocaleString("en-IN")}`
    : null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center">
        {/* Checkmark */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Thank You!
        </h1>
        {formatted && (
          <p className="text-xl text-teal-600 font-semibold mb-4">
            Your donation of {formatted} was successful.
          </p>
        )}
        <p className="text-gray-500 mb-8">
          Your generosity helps children access education, nutrition, and a brighter future. A receipt will be sent to your email shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/donate"
            className="px-6 py-3 rounded-full border-2 border-teal-500 text-teal-600 font-semibold hover:bg-teal-50 transition-colors"
          >
            Donate Again
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
