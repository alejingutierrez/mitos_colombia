import "server-only";
import {createPurchaseAnalyticsDelivery} from "../../runtime/purchase-tracking.mjs";
import {claimTarotPurchaseAnalytics,markTarotPurchaseAnalyticsSent,releaseTarotPurchaseAnalyticsClaim} from "./tarot-orders";
import {getGa4ServerTrackingConfiguration,sendGa4Purchase} from "./ga4-measurement";
export const deliverBoldPurchaseAnalytics = createPurchaseAnalyticsDelivery({
 configuration:getGa4ServerTrackingConfiguration,
 claim:claimTarotPurchaseAnalytics,
 send:sendGa4Purchase,
 markSent:markTarotPurchaseAnalyticsSent,
 release:releaseTarotPurchaseAnalyticsClaim,
});
