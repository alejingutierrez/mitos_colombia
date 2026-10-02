// Both receipt polling and callbacks must share this production-only, leased delivery.
export function createPurchaseAnalyticsDelivery({configuration, claim, send, markSent, release}) {
 return async (order, bold) => {
  if (bold?.environment !== 'production' || order?.status !== 'APPROVED') return false;
  const ga = configuration();
  if (!ga.ready) throw new Error('GA4 server purchase tracking is not ready.');
  const lease = await claim(order.reference);
  if (lease.reason === 'already_sent') return true;
  if (!lease.claimed) throw new Error('Purchase tracking could not be claimed: ' + lease.reason);
  try {await send(lease.order, ga); await markSent(order.reference); return true;}
  catch (error) {await release(order.reference, error); throw error;}
 };
}
