import { NextResponse } from "next/server";
import {
  getTarotAccountFromRequest,
  isTrustedTarotAuthRequest,
} from "../../../../../../lib/tarot-auth";
import { claimTarotOrderForAccount } from "../../../../../../lib/tarot-orders";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  if (!isTrustedTarotAuthRequest(request)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const account = await getTarotAccountFromRequest(request);
  if (!account) {
    return NextResponse.json({ error: "unauthorized", message: "Inicia sesión para guardar el pedido." }, { status: 401 });
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }
  const claim = await claimTarotOrderForAccount({
    userId: account.id,
    email: account.email,
    statusToken: body?.orderToken,
  });
  if (!claim.claimed) {
    return NextResponse.json(
      { error: "order_not_claimable", message: "El pedido no coincide con el correo de esta cuenta." },
      { status: 404 }
    );
  }
  return NextResponse.json({ order: claim.order }, { headers: { "Cache-Control": "no-store" } });
}
