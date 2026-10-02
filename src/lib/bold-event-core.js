// Receipt verification is shared by web and queue consumers. Sandbox sales never emit production GA4.
export function createSaleEventProcessor({findOrder, fetchPayment, normalizeStatus, applyPayment, deliverAnalytics}) {
 return async (event, configuration) => {
  if (!['production', 'test'].includes(configuration?.environment)) throw new Error('bold_environment_invalid');
  const transactionId = String(event?.data?.payment_id || event?.subject || '').trim();
  const orderByTransaction = transactionId ? await findOrder(transactionId) : null;
  const reference = String(event?.data?.metadata?.reference || orderByTransaction?.reference || '').trim();
  if (!reference) throw new Error('bold_order_unmatched');
  // A valid signature is insufficient: Bold's own receipt decides status and amount.
  const payment = await fetchPayment(reference, {apiKey:configuration.apiKey});
  const status = normalizeStatus(payment?.status);
  if (!status) throw new Error('bold_receipt_not_ready');
  const result = await applyPayment({...payment, status});
  if (result.reason === 'order_amount_mismatch') throw new Error('Bold payment and order amounts do not match.');
  if (!result.matched) throw new Error('bold_order_not_found');
  if (configuration.environment === 'production') await deliverAnalytics(result.order, configuration);
  return result;
 };
}
