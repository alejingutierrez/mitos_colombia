import { NextResponse } from "next/server";
import { fetchBoldPseBanks, getBoldConfiguration } from "../../../../../lib/bold";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NO_STORE = { "Cache-Control": "no-store" };

export async function GET() {
  const configuration = getBoldConfiguration();
  if (!configuration.ready) {
    return NextResponse.json(
      { error: "bold_not_ready", banks: [] },
      { status: 503, headers: NO_STORE }
    );
  }

  try {
    const banks = await fetchBoldPseBanks({ apiKey: configuration.apiKey });
    return NextResponse.json({ banks }, { headers: NO_STORE });
  } catch (error) {
    console.error("Bold PSE banks lookup failed", {
      code: error?.code || "bold_banks_failed",
      status: error?.status || 500,
    });
    return NextResponse.json(
      { error: "bold_banks_failed", banks: [] },
      { status: 502, headers: NO_STORE }
    );
  }
}
