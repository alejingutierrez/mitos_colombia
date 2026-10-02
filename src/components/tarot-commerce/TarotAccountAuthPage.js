import Link from "next/link";
import { Header } from "../organisms/Header";
import { TarotAuthForm } from "./TarotAccountActions";
import styles from "./TarotAccount.module.css";

export function TarotAccountAuthPage({ mode, orderToken = "", nextPath = "/cuenta" }) {
  return (
    <div className={styles.accountPage}>
      <Header />
      <main className={styles.accountShell} id="contenido">
        <div className={styles.authLayout}>
          <section className={styles.authStory}>
            <span>Tu archivo personal</span>
            <div>
              <h2>De la compra a la entrega, sin perder el hilo.</h2>
              <p>
                Una cuenta conecta cada pedido con su historia: confirmación del pago,
                preparación, guía de envío y entrega final.
              </p>
              <ol className={styles.authBenefits}>
                <li><span>01</span><strong>Pago verificable</strong><p>El pedido sólo avanza cuando Bold confirma la transacción.</p></li>
                <li><span>02</span><strong>Seguimiento claro</strong><p>Consulta el estado sin depender de capturas o correos perdidos.</p></li>
                <li><span>03</span><strong>Sesión protegida</strong><p>La sesión vive en una cookie segura; la contraseña se almacena con hash.</p></li>
              </ol>
            </div>
            <Link href="/tarot/comprar" className={styles.orderBack}>Volver a la baraja</Link>
          </section>
          <div className={styles.authPanel}>
            <TarotAuthForm mode={mode} orderToken={orderToken} nextPath={nextPath} />
          </div>
        </div>
      </main>
    </div>
  );
}
