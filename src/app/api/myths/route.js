import { NextResponse } from "next/server";
import { listMyths, parseListParams } from "../../../lib/myths";

export const runtime = "nodejs";

export function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = parseListParams(searchParams);
    const result = listMyths(params);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to load myths." },
      { status: 500 }
    );
  }
}
