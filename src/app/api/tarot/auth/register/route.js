import { NextResponse } from "next/server";
import {
  checkTarotAuthRateLimit,
  createTarotAccount,
  createTarotSession,
  isTrustedTarotAuthRequest,
  setTarotSessionCookie,
  tarotAuthRateLimitKey,
} from "../../../../../lib/tarot-auth";
import { claimTarotOrderForAccount } from "../../../../../lib/tarot-orders";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  if (!isTrustedTarotAuthRequest(request)) {
    return NextResponse.json({ error: "forbidden", message: "La solicitud no es válida." }, { status: 403 });
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_request", message: "Revisa los datos enviados." }, { status: 400 });
  }
  const limit = checkTarotAuthRateLimit(tarotAuthRateLimitKey(request, "register", body?.email), { maximum: 5 });
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "rate_limited", message: "Espera unos minutos antes de intentarlo de nuevo." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }
  const result = await createTarotAccount(body || {});
  if (!result.ok) {
    return NextResponse.json({ error: result.code, message: result.message }, { status: result.code === "account_exists" ? 409 : 400 });
  }
  const session = await createTarotSession(result.account.id);
  const orderToken = String(body?.orderToken || "").trim();
  const claim = orderToken
    ? await claimTarotOrderForAccount({ userId: result.account.id, email: result.account.email, statusToken: orderToken })
    : null;
  const response = NextResponse.json(
    { account: result.account, orderClaimed: Boolean(claim?.claimed), orderReference: claim?.order?.reference || null },
    { headers: { "Cache-Control": "no-store" } }
  );
  return setTarotSessionCookie(response, session);
}
