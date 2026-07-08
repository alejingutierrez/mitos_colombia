import { NextResponse } from "next/server";
import { getMythBySlug } from "../../../../lib/myths";
import { resolveRouteParams } from "../../../../lib/next-route-props";

export const runtime = "nodejs";

export async function GET(_request, { params }) {
  try {
    const { slug } = await resolveRouteParams(params);
    const myth = await getMythBySlug(slug);
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
