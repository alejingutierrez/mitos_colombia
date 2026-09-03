import { after, NextResponse } from "next/server";
import {
  applyBoldPayment,
  claimTarotPurchaseAnalytics,
  findTarotOrderByPaymentTransactionId,
  markTarotPurchaseAnalyticsSent,
  releaseTarotPurchaseAnalyticsClaim,
} from "../../../../../lib/tarot-orders";
import {
  getGa4ServerTrackingConfiguration,
  sendGa4Purchase,
} from "../../../../../lib/ga4-measurement";
import {
  fetchBoldPayment,
  getBoldConfiguration,
  normalizeBoldPaymentStatus,
  verifyBoldWebhookSignature,
} from "../../../../../lib/bold";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NO_STORE = { "Cache-Control": "no-store" };
/**
 * Eventos que mueven el estado de una orden. Las anulaciones se agregaron
 * porque una venta anulada dejaba la orden en APROBADA: el pago se devolvía y
 * el pedido seguía figurando como cobrado.
 */
const SALE_EVENTS = new Set([
  "SALE_APPROVED",
  "SALE_REJECTED",
  "VOID_APPROVED",
  "VOID_REJECTED",
]);

async function deliverPurchaseAnalytics(order) {
  if (order?.status !== "APPROVED") return false;
  const configuration = getGa4ServerTrackingConfiguration();
  if (!configuration.ready) throw new Error("GA4 server purchase tracking is not ready.");
  const claim = await claimTarotPurchaseAnalytics(order.reference);
  if (claim.reason === "already_sent") return true;
  if (!claim.claimed) throw new Error(`Purchase tracking could not be claimed: ${claim.reason}`);
  try {
    await sendGa4Purchase(claim.order, configuration);
    await markTarotPurchaseAnalyticsSent(order.reference);
    return true;
  } catch (error) {
    await releaseTarotPurchaseAnalyticsClaim(order.reference, error);
    throw error;
  }
}

async function processSaleEvent(event, configuration) {
  const transactionId = String(
    event?.data?.payment_id || event?.subject || ""
  ).trim();
  const orderByTransaction = transactionId
    ? await findTarotOrderByPaymentTransactionId(transactionId)
    : null;
  const reference = String(
    event?.data?.metadata?.reference || orderByTransaction?.reference || ""
  ).trim();

  if (!reference) {
    console.error("Bold event could not be matched to an order", {
      eventId: String(event?.id || "").slice(0, 80),
      transactionId: transactionId.slice(0, 80),
    });
    return;
  }

  try {
    /* La firma prueba que el aviso viene de Bold, no cuánto se pagó: el estado
       y el monto se leen del comprobante consultado directamente a Bold. */
    const payment = await fetchBoldPayment(reference, {
      apiKey: configuration.apiKey,
    });
    const normalizedStatus = normalizeBoldPaymentStatus(payment?.status);
    /* `NO_TRANSACTION_FOUND` llega cuando el comprobante todavía no existe
       (puede tardar hasta 10 minutos). No es un fallo ni un rechazo: la orden
       se queda como está y el siguiente aviso o la consulta la resuelven. */
    if (!normalizedStatus) return;
    const result = await applyBoldPayment({ ...payment, status: normalizedStatus });
    if (result.reason === "order_amount_mismatch") {
      /* Se registran los dos montos porque la unidad del comprobante es lo
         único que la documentación de Bold no declara. Ante la duda la orden
         NO se aprueba. */
      const error = new Error("Bold payment and order amounts do not match.");
      error.boldTotal = payment?.amount?.total_amount;
      throw error;
    }
    if (result.matched) await deliverPurchaseAnalytics(result.order);
  } catch (error) {
    console.error("Error applying Bold payment event", {
      code: error?.code || "bold_event_processing_failed",
      status: error?.status || 500,
      reference,
      ...(error?.boldTotal !== undefined && { boldTotal: error.boldTotal }),
    });
  }
}

export async function POST(request) {
  const configuration = getBoldConfiguration();
  if (
    !configuration.ready ||
    process.env.TAROT_ORDERS_READY !== "true" ||
    process.env.TAROT_BOLD_WEBHOOK_READY !== "true"
  ) {
    return NextResponse.json(
      { error: "webhook_not_ready" },
      { status: 503, headers: NO_STORE }
    );
  }

  const rawBody = await request.text();
  const signature = request.headers.get("x-bold-signature");
  /* Botón de Pagos firma con SU llave secreta —no con la de la API vieja— y en
     el ambiente de pruebas Bold firma con cadena vacía. El algoritmo es el
     mismo en ambos casos: HMAC-SHA256 sobre el cuerpo crudo en base64. */
  const signatureSecret =
    configuration.environment === "test" ? "" : configuration.secretKey;
  if (!verifyBoldWebhookSignature(rawBody, signature, signatureSecret)) {
    return NextResponse.json(
      { error: "invalid_signature" },
      { status: 400, headers: NO_STORE }
    );
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      { error: "invalid_event" },
      { status: 400, headers: NO_STORE }
    );
  }

  const eventType = String(event?.type || "").toUpperCase();
  if (!SALE_EVENTS.has(eventType)) {
    return NextResponse.json(
      { received: true, handled: false },
      { headers: NO_STORE }
    );
  }

  after(() => processSaleEvent(event, configuration));
  return NextResponse.json(
    { received: true, queued: true },
    { status: 200, headers: NO_STORE }
  );
}
