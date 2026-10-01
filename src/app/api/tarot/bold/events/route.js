import { after, NextResponse } from "next/server";
import { processSaleEvent } from "../../../../../lib/bold-event-processor";
import { enqueuePayment } from "../../../../../../runtime/payment-queue.mjs";
import {
  getBoldConfiguration,
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

  if (process.env.MITOS_RUNTIME === "aws") {
    try { await enqueuePayment(rawBody, signature); }
    catch { return NextResponse.json({ error: "durable_receipt_failed" }, { status: 503, headers: NO_STORE }); }
  } else {
    after(() => processSaleEvent(event, configuration).catch(error => {
      console.error("Bold legacy processing failed", { code: error.code || "bold_processing_failed" });
    }));
  }
  return NextResponse.json(
    { received: true, queued: true },
    { status: 200, headers: NO_STORE }
  );
}
