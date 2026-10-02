import { NextResponse } from "next/server";
import {
  applyBoldPayment,
  findTarotOrderByStatusToken,
  toPublicTarotOrder,
} from "../../../../../lib/tarot-orders";
import {
  fetchBoldPayment,
  getBoldConfiguration,
  normalizeBoldPaymentStatus,
} from "../../../../../lib/bold";
import { deliverBoldPurchaseAnalytics } from "../../../../../lib/bold-purchase-analytics";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NO_STORE = { "Cache-Control": "no-store" };

export async function GET(_request, context) {
  const { token } = await context.params;
  if (!/^[a-f0-9]{48}$/.test(String(token || ""))) {
    return NextResponse.json(
      { error: "order_not_found" },
      { status: 404, headers: NO_STORE }
    );
  }

  if (process.env.TAROT_ORDERS_READY !== "true") {
    return NextResponse.json(
      { error: "orders_not_ready" },
      { status: 503, headers: NO_STORE }
    );
  }

  let order = await findTarotOrderByStatusToken(token);
  if (!order) {
    return NextResponse.json(
      { error: "order_not_found" },
      { status: 404, headers: NO_STORE }
    );
  }

  const bold = getBoldConfiguration();
  if (["CREATED", "PENDING"].includes(order.status)) {
    if (bold.ready) {
      try {
        const payment = await fetchBoldPayment(order.reference, {
          apiKey: bold.apiKey,
          timeoutMs: 5000,
        });
        const status = normalizeBoldPaymentStatus(payment?.status);
        if (status) {
          const applied = await applyBoldPayment({ ...payment, status });
          if (applied.matched) order = applied.order;
        }
      } catch {
        // The signed webhook remains authoritative when the fallback lookup is unavailable.
      }
    }
  }

  if (order.status === "APPROVED") {
    try { await deliverBoldPurchaseAnalytics(order, bold); }
    catch { /* A later receipt/webhook retries the leased analytics delivery. */ }
  }

  return NextResponse.json(
    { order: toPublicTarotOrder(order) },
    { headers: NO_STORE }
  );
}
