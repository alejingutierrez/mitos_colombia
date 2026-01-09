import { NextResponse } from "next/server";
import { getSearchSuggestions } from "../../../lib/search";

export const runtime = "nodejs";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q") || "";
    const limit = Number.parseInt(searchParams.get("limit") || "8", 10);
    const safeLimit = Math.max(1, Math.min(limit, 12));

    const suggestions = await getSearchSuggestions(q, safeLimit);

    return NextResponse.json({
      query: q,
      suggestions,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to search." },
      { status: 500 }
    );
  }
}
