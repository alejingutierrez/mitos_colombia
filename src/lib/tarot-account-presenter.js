const FAILED_PAYMENTS = new Set(["DECLINED", "VOIDED", "ERROR"]);

export function formatTarotAccountMoney(amountInCents, currency = "COP") {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(Number(amountInCents || 0) / 100);
}

export function formatTarotAccountDate(value, options = {}) {
  if (!value) return "Por confirmar";
  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: options.dateStyle || "medium",
    ...(options.withTime ? { timeStyle: "short" } : {}),
    timeZone: "America/Bogota",
  }).format(new Date(value));
}

export function tarotOrderStatusLabel(order) {
  if (FAILED_PAYMENTS.has(order?.status)) return "Pago no aprobado";
  if (order?.status !== "APPROVED") return "Pago en verificación";
  return {
    PENDING: "Preparación pendiente",
    PREPARING: "En preparación",
    SHIPPED: "Pedido enviado",
    DELIVERED: "Pedido entregado",
    CANCELLED: "Pedido cancelado",
  }[order?.fulfillmentStatus] || "Compra confirmada";
}

export function tarotOrderStatusTone(order) {
  if (FAILED_PAYMENTS.has(order?.status) || order?.fulfillmentStatus === "CANCELLED") return "attention";
  if (order?.status === "APPROVED" && order?.fulfillmentStatus === "DELIVERED") return "success";
  return "pending";
}

export function buildTarotOrderTimeline(order) {
  const paymentFailed = FAILED_PAYMENTS.has(order?.status);
  const paymentApproved = order?.status === "APPROVED";
  const fulfillment = order?.fulfillmentStatus || "PENDING";
  const shipped = ["SHIPPED", "DELIVERED"].includes(fulfillment);
  const delivered = fulfillment === "DELIVERED";
  const preparing = paymentApproved && !shipped && !delivered && fulfillment !== "CANCELLED";

  return [
    {
      title: paymentFailed ? "Pago no aprobado" : paymentApproved ? "Pago confirmado" : "Verificación del pago",
      body: paymentFailed
        ? "No existe un cobro aprobado para este intento."
        : paymentApproved
          ? `Bold confirmó la compra${order.approvedAt ? ` el ${formatTarotAccountDate(order.approvedAt)}` : ""}.`
          : "Estamos esperando la confirmación final y firmada de Bold.",
      state: paymentFailed ? "attention" : paymentApproved ? "complete" : "current",
    },
    {
      title: "Preparación",
      body: paymentApproved ? "El equipo prepara la baraja y valida la dirección de entrega." : "Comienza únicamente después de aprobar el pago.",
      state: shipped || delivered ? "complete" : preparing ? "current" : "waiting",
    },
    {
      title: "Envío",
      body: shipped
        ? `${order.trackingCarrier || "La transportadora"} recibió el paquete${order.shippedAt ? ` el ${formatTarotAccountDate(order.shippedAt)}` : ""}.`
        : "Aquí aparecerán la transportadora y la guía cuando se despache.",
      state: delivered ? "complete" : shipped ? "current" : "waiting",
    },
    {
      title: "Entrega",
      body: delivered
        ? `Pedido entregado${order.deliveredAt ? ` el ${formatTarotAccountDate(order.deliveredAt)}` : ""}.`
        : "La entrega cerrará el recorrido y conservará la fecha como comprobante.",
      state: delivered ? "complete" : "waiting",
    },
  ];
}
