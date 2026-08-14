import { NextResponse } from "next/server";
import {
  clearTarotSessionCookie,
  isTrustedTarotAuthRequest,
  revokeTarotSession,
  TAROT_SESSION_COOKIE,
} from "../../../../../lib/tarot-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  if (!isTrustedTarotAuthRequest(request)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const token = request.cookies.get(TAROT_SESSION_COOKIE)?.value;
  if (token) await revokeTarotSession(token);
  const response = NextResponse.json({ signedOut: true }, { headers: { "Cache-Control": "no-store" } });
  return clearTarotSessionCookie(response);
}
