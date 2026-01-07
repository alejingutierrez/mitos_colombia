import { NextResponse } from "next/server";
import { getMythBySlug } from "../../../../lib/myths";

export const runtime = "nodejs";

export function GET(_request, { params }) {
  try {
    const myth = getMythBySlug(params.slug);
    if (!myth) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(myth);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to load myth." },
      { status: 500 }
    );
  }
}
