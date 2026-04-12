import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { amount, name, email } = await req.json();

    if (!amount || amount < 1) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json({ error: "Payment gateway not configured" }, { status: 500 });
    }

    const credentials = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        amount: amount * 100, // paise
        currency: "INR",
        receipt: `afjs_${Date.now()}`,
        notes: {
          organization: "AFJS Charitable Trust",
          donor_name: name || "Anonymous",
          donor_email: email || "",
          pan: "AALTA7481L",
          registration: "GJ/2025/0719739",
        },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Razorpay error:", err);
      return NextResponse.json({ error: "Order creation failed" }, { status: 500 });
    }

    const order = await response.json();
    return NextResponse.json(order);
  } catch (error) {
    console.error("Create order error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
