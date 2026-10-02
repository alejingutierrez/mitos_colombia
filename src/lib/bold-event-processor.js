import "server-only";
import { createSaleEventProcessor } from "./bold-event-core";
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

export const processSaleEvent = createSaleEventProcessor({
  findOrder: findTarotOrderByPaymentTransactionId,
  fetchPayment: fetchBoldPayment,
  normalizeStatus: normalizeBoldPaymentStatus,
  applyPayment: applyBoldPayment,
  deliverAnalytics: deliverPurchaseAnalytics,
});
