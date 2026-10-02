import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Header } from "../../../../components/organisms/Header";
import styles from "../../../../components/tarot-commerce/TarotAccount.module.css";
import { getCurrentTarotAccount } from "../../../../lib/tarot-auth";
import {
  buildTarotOrderTimeline,
  formatTarotAccountDate,
  formatTarotAccountMoney,
  tarotOrderStatusLabel,
  tarotOrderStatusTone,
} from "../../../../lib/tarot-account-presenter";
import { findTarotOrderForAccount } from "../../../../lib/tarot-orders";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Seguimiento del pedido | Mitos de Colombia",
  robots: { index: false, follow: false },
};

export default async function PedidoPage({ params }) {
  const account = await getCurrentTarotAccount();
  const route = await params;
  if (!account) redirect(`/cuenta/ingresar?next=${encodeURIComponent(`/cuenta/pedidos/${route.reference}`)}`);
  const order = await findTarotOrderForAccount(account.id, route.reference);
  if (!order) notFound();
  const timeline = buildTarotOrderTimeline(order);

  return (
    <div className={styles.accountPage}>
      <Header />
      <main className={styles.accountShell} id="contenido">
        <Link href="/cuenta" className={styles.orderBack}>← Volver a tus pedidos</Link>
        <header className={styles.orderHero}>
          <div>
            <span className={styles.orderEyebrow}>Seguimiento del pedido</span>
            <h1>{tarotOrderStatusLabel(order)}</h1>
            <p>Pedido {order.reference} · creado el {formatTarotAccountDate(order.createdAt, { withTime: true })}</p>
          </div>
          <span className={styles.statusBadge} data-tone={tarotOrderStatusTone(order)}>{tarotOrderStatusLabel(order)}</span>
        </header>

        <div className={styles.orderGrid}>
          <section className={styles.timeline} aria-labelledby="timeline-title">
            <h2 id="timeline-title">Recorrido del pedido</h2>
            <ol>
              {timeline.map((step, index) => (
                <li key={step.title} data-state={step.state}>
                  <span className={styles.timelineMark}>{step.state === "complete" ? "✓" : String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.timelineCopy}><strong>{step.title}</strong><p>{step.body}</p></span>
                </li>
              ))}
            </ol>
          </section>

          <aside>
            <section className={styles.orderSummary} aria-labelledby="order-summary-title">
              <h2 id="order-summary-title">Resumen</h2>
              <dl>
                <div><dt>Producto</dt><dd>Tarot de Mitos Colombianos</dd></div>
                <div><dt>Cantidad</dt><dd>{order.quantity}</dd></div>
                <div><dt>Total</dt><dd>{formatTarotAccountMoney(order.amountInCents, order.currency)}</dd></div>
                <div><dt>Destino</dt><dd>{[order.city, order.region].filter(Boolean).join(", ") || "Por confirmar"}</dd></div>
                <div><dt>Pago</dt><dd>{order.status === "APPROVED" ? "Confirmado" : "En verificación"}</dd></div>
              </dl>
            </section>
            <section className={styles.trackingBox}>
              <strong>{order.trackingCode ? "Guía de transporte" : "La guía aparecerá aquí"}</strong>
              <p>
                {order.trackingCode
                  ? `${order.trackingCarrier || "Transportadora"} · ${order.trackingCode}`
                  : "Cuando el pedido sea entregado a la transportadora mostraremos el número de guía y el enlace oficial."}
              </p>
              {order.trackingUrl ? <a href={order.trackingUrl} rel="noreferrer" target="_blank">Abrir seguimiento de la transportadora ↗</a> : null}
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
