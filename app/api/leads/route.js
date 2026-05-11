import { NextResponse } from "next/server";

const GAS_URL = process.env.GOOGLE_SHEET_URL;

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, phone, email, pageUrl } = body;

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Forward to Google Apps Script
    if (GAS_URL) {
      const gasPayload = {
        name: name.trim(),
        mobile: phone.trim(),   // GAS script expects "mobile"
        email: email.trim(),
        pageUrl: pageUrl || "",
      };

      await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gasPayload),
      });
    } else {
      console.warn("GOOGLE_SHEET_URL is not set — skipping Google Sheets submission");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
