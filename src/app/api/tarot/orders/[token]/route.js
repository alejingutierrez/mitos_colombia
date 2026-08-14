import { NextResponse } from "next/server";
import {
  applyBoldPayment,
  claimTarotPurchaseAnalytics,
  findTarotOrderByStatusToken,
  markTarotPurchaseAnalyticsSent,
  releaseTarotPurchaseAnalyticsClaim,
  toPublicTarotOrder,
} from "../../../../../lib/tarot-orders";
import {
  fetchBoldPayment,
  getBoldConfiguration,
  normalizeBoldPaymentStatus,
} from "../../../../../lib/bold";
import {
  getGa4ServerTrackingConfiguration,
  sendGa4Purchase,
} from "../../../../../lib/ga4-measurement";

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

  if (["CREATED", "PENDING"].includes(order.status)) {
    const bold = getBoldConfiguration();
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
    const ga4 = getGa4ServerTrackingConfiguration();
    if (ga4.ready) {
      const claim = await claimTarotPurchaseAnalytics(order.reference);
      if (claim.claimed) {
        try {
          await sendGa4Purchase(claim.order, ga4);
          await markTarotPurchaseAnalyticsSent(order.reference);
        } catch (error) {
          await releaseTarotPurchaseAnalyticsClaim(order.reference, error);
        }
      }
    }
  }

  return NextResponse.json(
    { order: toPublicTarotOrder(order) },
    { headers: NO_STORE }
  );
}
