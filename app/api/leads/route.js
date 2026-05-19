import { NextResponse } from "next/server";

const GAS_URL = process.env.GOOGLE_SHEET_URL;
const ALLOWED_ORIGINS = new Set([
  "https://casagrandmoondance.com",
  "https://www.casagrandmoondance.com",
  "https://casagrand-moon.vercel.app",
]);

const getCorsHeaders = (request) => {
  const origin = request.headers.get("origin");
  const allowedOrigin = ALLOWED_ORIGINS.has(origin) ? origin : "https://casagrand-moon.vercel.app";

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
};

export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
}

export async function POST(request) {
  const corsHeaders = getCorsHeaders(request);

  try {
    const body = await request.json();

    const { name, phone, email, pageUrl } = body;

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400, headers: corsHeaders }
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

    return NextResponse.json({ ok: true }, { headers: corsHeaders });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
