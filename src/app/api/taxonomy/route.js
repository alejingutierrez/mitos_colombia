import { NextResponse } from "next/server";
import { getTaxonomy } from "../../../lib/myths";

export const runtime = "nodejs";

export function GET() {
  try {
    const taxonomy = getTaxonomy();
    return NextResponse.json(taxonomy);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to load taxonomy." },
      { status: 500 }
    );
  }
}
