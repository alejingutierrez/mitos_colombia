import "server-only";
import {createSaleEventProcessor} from "./bold-event-core";
import {applyBoldPayment,findTarotOrderByPaymentTransactionId} from "./tarot-orders";
import {fetchBoldPayment,normalizeBoldPaymentStatus} from "./bold";
import {deliverBoldPurchaseAnalytics} from "./bold-purchase-analytics";
export const processSaleEvent = createSaleEventProcessor({
 findOrder:findTarotOrderByPaymentTransactionId,
 fetchPayment:fetchBoldPayment,
 normalizeStatus:normalizeBoldPaymentStatus,
 applyPayment:applyBoldPayment,
 deliverAnalytics:deliverBoldPurchaseAnalytics,
});
