import Link from "next/link";
import { redirect } from "next/navigation";
import { Header } from "../../components/organisms/Header";
import { TarotLogoutButton } from "../../components/tarot-commerce/TarotAccountActions";
import styles from "../../components/tarot-commerce/TarotAccount.module.css";
import { getCurrentTarotAccount } from "../../lib/tarot-auth";
import {
  formatTarotAccountDate,
  formatTarotAccountMoney,
  tarotOrderStatusLabel,
  tarotOrderStatusTone,
} from "../../lib/tarot-account-presenter";
import { listTarotOrdersForAccount } from "../../lib/tarot-orders";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Mi cuenta y pedidos | Mitos de Colombia",
  robots: { index: false, follow: false },
};

export default async function CuentaPage() {
  const account = await getCurrentTarotAccount();
  if (!account) redirect("/cuenta/ingresar?next=/cuenta");
  const orders = await listTarotOrdersForAccount(account.id);
  const firstName = account.fullName.split(" ")[0] || account.fullName;

  return (
    <div className={styles.accountPage}>
      <Header />
      <main className={styles.accountShell} id="contenido">
        <header className={styles.dashboardHeader}>
          <div>
            <span className={styles.dashboardEyebrow}>Cuenta de cliente</span>
            <h1>Hola, {firstName}</h1>
            <p>{account.email}<br />Aquí puedes seguir cada pedido vinculado a tu cuenta.</p>
          </div>
          <TarotLogoutButton />
        </header>

        <section className={styles.ordersSection} aria-labelledby="orders-title">
          <div className={styles.ordersHeader}>
            <h2 id="orders-title">Tus pedidos</h2>
            <span>{orders.length} {orders.length === 1 ? "pedido" : "pedidos"}</span>
          </div>
          {orders.length ? (
            <div className={styles.ordersList}>
              {orders.map((order) => (
                <Link key={order.reference} href={`/cuenta/pedidos/${encodeURIComponent(order.reference)}`} className={styles.orderCard}>
                  <span className={styles.orderReference}>
                    <span>Pedido</span>
                    <strong>{order.reference}</strong>
                  </span>
                  <span className={styles.orderProduct}>
                    <strong>Tarot de Mitos Colombianos</strong>
                    <span>{order.quantity} {order.quantity === 1 ? "baraja" : "barajas"} · {formatTarotAccountDate(order.createdAt)}</span>
                  </span>
                  <span className={styles.orderAmount}>
                    <strong>{formatTarotAccountMoney(order.amountInCents, order.currency)}</strong>
                    <span>Impuestos y envío incluidos</span>
                  </span>
                  <span className={styles.statusBadge} data-tone={tarotOrderStatusTone(order)}>
                    {tarotOrderStatusLabel(order)}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyOrders}>
              <h3>Todavía no hay pedidos guardados</h3>
              <p>
                Cuando completes una compra con esta sesión, aparecerá aquí automáticamente.
                También puedes guardar un pedido desde su página de confirmación usando el mismo correo.
              </p>
              <Link href="/tarot/comprar" className={styles.primaryLink}>Conocer la baraja</Link>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
