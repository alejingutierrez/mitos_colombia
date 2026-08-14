export function getConfirmedTarotPurchase(order) {
  if (
    order?.status !== "APPROVED" ||
    order?.paymentConfirmed !== true ||
    !String(order?.transactionId || "").trim() ||
    !String(order?.approvedAt || "").trim() ||
    !Number.isFinite(order?.amountInCents) ||
    order.amountInCents <= 0 ||
    !Number.isFinite(order?.unitPriceCop) ||
    order.unitPriceCop <= 0 ||
    !Number.isInteger(order?.quantity) ||
    order.quantity <= 0
  ) {
    return null;
  }

  return {
    transactionId: String(order.transactionId).trim(),
    value: order.amountInCents / 100,
    currency: String(order.currency || "COP"),
    attribution:
      order.attribution && typeof order.attribution === "object"
        ? order.attribution
        : {},
  };
}

export function claimTarotPurchaseTracking(storage, transactionId) {
  const id = String(transactionId || "").trim();
  if (!id) return false;
  const key = `mitos_tarot_purchase_v1_${id}`;
  try {
    if (storage?.getItem(key)) return false;
    storage?.setItem(key, "1");
  } catch {
    // In-memory deduplication in the component still protects this page load.
  }
  return true;
}
