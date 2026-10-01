import "server-only";
import {
  applyBoldPayment,
  claimTarotPurchaseAnalytics,
  findTarotOrderByPaymentTransactionId,
  markTarotPurchaseAnalyticsSent,
  releaseTarotPurchaseAnalyticsClaim,
} from "./tarot-orders";
import {
  getGa4ServerTrackingConfiguration,
  sendGa4Purchase,
} from "./ga4-measurement";
import {
  fetchBoldPayment,
  normalizeBoldPaymentStatus,
} from "./bold";

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

export async function processSaleEvent(event, configuration) {
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
    throw new Error("bold_order_unmatched");
  }

  {
    /* La firma prueba que el aviso viene de Bold, no cuánto se pagó: el estado
       y el monto se leen del comprobante consultado directamente a Bold. */
    const payment = await fetchBoldPayment(reference, {
      apiKey: configuration.apiKey,
    });
    const normalizedStatus = normalizeBoldPaymentStatus(payment?.status);
    /* `NO_TRANSACTION_FOUND` llega cuando el comprobante todavía no existe
       (puede tardar hasta 10 minutos). No es un fallo ni un rechazo: la orden
       se queda como está y el siguiente aviso o la consulta la resuelven. */
    if (!normalizedStatus) throw new Error("bold_receipt_not_ready");
    const result = await applyBoldPayment({ ...payment, status: normalizedStatus });
    if (result.reason === "order_amount_mismatch") {
      /* Se registran los dos montos porque la unidad del comprobante es lo
         único que la documentación de Bold no declara. Ante la duda la orden
         NO se aprueba. */
      const error = new Error("Bold payment and order amounts do not match.");
      error.boldTotal = payment?.amount?.total_amount;
      throw error;
    }
    if (!result.matched) throw new Error("bold_order_not_found");
    await deliverPurchaseAnalytics(result.order);
  }
}
