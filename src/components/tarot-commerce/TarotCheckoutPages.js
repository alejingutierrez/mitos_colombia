"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  getAnalyticsSessionContext,
  trackEvent,
} from "../../lib/analytics";
import { readTarotAttribution } from "../../lib/tarot-attribution";
import {
  claimTarotPurchaseTracking,
  getConfirmedTarotPurchase,
} from "../../lib/tarot-purchase";
import { getTarotCheckoutIntent } from "../../lib/tarot-commerce";
import {
  BOLD_CHECKOUT_FAILED_EVENT,
  BOLD_CHECKOUT_LOADED_EVENT,
  loadBoldCheckoutScript,
  onBoldCheckoutClosed,
  openBoldEmbeddedCheckout,
} from "../../lib/bold-browser";
import { Header } from "../organisms/Header";
import styles from "./TarotCheckout.module.css";

const CART_KEY = "mitos_tarot_cart_v1";
const FINAL_ORDER_STATUSES = new Set(["APPROVED", "DECLINED", "VOIDED", "ERROR"]);
const PAYMENT_POLL_INTERVAL_MS = 3000;
/* La transacción puede tardar hasta 10 minutos en aparecer del lado de Bold. */
const PAYMENT_POLL_MAX_ATTEMPTS = 200;
/* Cuando el modal se cierra, un minuto más antes de dejar de esperar. */
const PAYMENT_POLL_ATTEMPTS_AFTER_CLOSE = 20;

function Icon({ name, size = 21 }) {
  const paths = {
    cart: <><path d="M3.5 5.5h2.2l1.7 9.1h10.1l2-6.2H7" /><circle cx="9.5" cy="18.5" r="1" /><circle cx="17" cy="18.5" r="1" /></>,
    arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 10v6m0-9.2v.2" /></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function price(product, quantity = 1) {
  if (!Number.isFinite(product.priceCop)) return "Precio por confirmar";
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: product.currency, maximumFractionDigits: 0 }).format(product.priceCop * quantity);
}

function priceFromCents(value, currency = "COP") {
  if (!Number.isFinite(value)) return "Total por confirmar";
  return new Intl.NumberFormat("es-CO", { style: "currency", currency, maximumFractionDigits: 0 }).format(value / 100);
}

function readCart() {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_KEY) || "null");
    return cart?.quantity > 0
      ? { ...cart, quantity: Math.min(8, Number(cart.quantity)) }
      : null;
  } catch {
    return null;
  }
}

function readQuantity() {
  return readCart()?.quantity || 0;
}

function saveQuantity(product, quantity, landingIntent) {
  try {
    if (quantity <= 0) {
      localStorage.removeItem(CART_KEY);
      return;
    }
    const previous = readCart();
    localStorage.setItem(CART_KEY, JSON.stringify({
      sku: product.sku,
      quantity,
      currency: product.currency,
      priceCop: product.priceCop,
      landingIntent: previous?.landingIntent || landingIntent,
    }));
  } catch {
    // Quantity controls should remain responsive when storage is unavailable.
  }
}

function useCheckoutIntent() {
  const [intent, setIntent] = useState(() => getTarotCheckoutIntent());

  useEffect(() => {
    const cartIntent = readCart()?.landingIntent;
    setIntent(
      getTarotCheckoutIntent(cartIntent || readTarotAttribution().landing_intent)
    );
  }, []);

  return intent;
}

/**
 * Carga la librería del botón y avisa cuando está lista.
 *
 * Se hace en un efecto porque React no ejecuta los <script> que renderiza. El
 * botón de pago permanece deshabilitado hasta que la librería responde: pedir
 * los datos y descubrir después que la pasarela no cargó sería prometer un
 * pago que no existe.
 */
function useBoldCheckoutLibrary(enabled) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!enabled) return undefined;
    const ready = () => setStatus("ready");
    const failed = () => setStatus("failed");
    /* Los nombres salen de las constantes que dispara el cargador: escritos a
       mano, renombrar una allá dejaría el botón deshabilitado para siempre y
       en silencio. */
    window.addEventListener(BOLD_CHECKOUT_LOADED_EVENT, ready);
    window.addEventListener(BOLD_CHECKOUT_FAILED_EVENT, failed);
    if (window.BoldCheckout) setStatus("ready");
    else loadBoldCheckoutScript();
    return () => {
      window.removeEventListener(BOLD_CHECKOUT_LOADED_EVENT, ready);
      window.removeEventListener(BOLD_CHECKOUT_FAILED_EVENT, failed);
    };
  }, [enabled]);

  return status;
}

function StoreHeader({ quantity }) {
  return <Header active="/tarot" commerce={{ quantity, cartHref: "/tarot/carrito" }} />;
}

function CheckoutAccount({ account }) {
  return (
    <section className={styles.accountPanel} aria-labelledby="checkout-account-title">
      <span className={styles.accountIcon} aria-hidden="true">{account ? "✓" : "01"}</span>
      <div>
        <p className={styles.sectionEyebrow}>Cuenta y seguimiento</p>
        <h2 id="checkout-account-title">
          {account ? `Compras como ${account.fullName}` : "Guarda este pedido en tu cuenta"}
        </h2>
        <p>
          {account
            ? `El pedido quedará vinculado a ${account.email} y aparecerá en tu panel de seguimiento.`
            : "Puedes comprar como invitado o ingresar para consultar después pago, preparación, guía y entrega."}
        </p>
      </div>
      {account ? (
        <Link href="/cuenta">Ver mi cuenta</Link>
      ) : (
        <span className={styles.accountActions}>
          <Link href="/cuenta/ingresar?next=/tarot/checkout">Ingresar</Link>
          <Link href="/cuenta/crear?next=/tarot/checkout">Crear cuenta</Link>
        </span>
      )}
    </section>
  );
}

function ProductLine({ product, quantity, onQuantity }) {
  return (
    <div className={styles.productLine}>
      <Image src={product.image} alt={product.imageAlt} width={240} height={160} className={styles.productImage} />
      <div className={styles.productCopy}>
        <h2>{product.name}</h2>
        <p>Baraja editorial física · 78 cartas</p>
        {product.imageStatus === "provisional" ? <small>Imagen actual aprobada para esta etapa · arte final pendiente</small> : null}
        <span>{price(product)}</span>
        <div className={styles.quantity} aria-label="Cantidad">
          <button type="button" aria-label="Reducir cantidad" onClick={() => onQuantity(Math.max(0, quantity - 1))}><Icon name="minus" size={18} /></button>
          <strong>{quantity}</strong>
          <button type="button" disabled={quantity >= 8} aria-label="Aumentar cantidad" onClick={() => onQuantity(Math.min(8, quantity + 1))}><Icon name="plus" size={18} /></button>
        </div>
      </div>
    </div>
  );
}

function OrderSummary({ product, quantity, compact = false, intent }) {
  const shipping = product.shippingIncluded
    ? (product.shipping || "Incluido en el precio")
    : "Por confirmar";

  return (
    <aside className={`${styles.summary} ${compact ? styles.summaryCompact : ""}`} aria-label="Resumen del pedido">
      <h2>Resumen</h2>
      {intent ? <p className={styles.summaryIntent}>{intent.eyebrow}</p> : null}
      <div className={styles.summaryProduct}>
        <Image src={product.image} alt="" width={94} height={63} />
        <div><strong>{product.name}</strong><span>Cant. {quantity}</span></div>
      </div>
      <dl>
        <div><dt>Subtotal</dt><dd>{price(product, quantity)}</dd></div>
        <div><dt>Impuestos</dt><dd>{product.taxesIncluded ? "Incluidos" : "Por confirmar"}</dd></div>
        <div><dt>Envío</dt><dd>{shipping}</dd></div>
        <div className={styles.total}><dt>Total</dt><dd>{price(product, quantity)}</dd></div>
      </dl>
      <p><Icon name="info" size={18} />El total y las condiciones se mostrarán antes de continuar al pago.</p>
    </aside>
  );
}

function FulfillmentProof({ product, compact = false }) {
  const facts = [
    {
      label: "Envío",
      value: product.shippingIncluded
        ? (product.shipping || "Incluido en el precio; cobertura por confirmar")
        : "Por confirmar antes de abrir el pago",
      ready: product.shippingIncluded && Boolean(product.shipping),
    },
    {
      label: "Cobertura",
      value: product.shippingRegionsReady
        ? `${product.shippingRegions.length} ${product.shippingRegions.length === 1 ? "departamento habilitado" : "departamentos habilitados"}`
        : "Departamentos por confirmar",
      ready: product.shippingRegionsReady,
    },
    {
      label: "Despacho",
      value: product.dispatch || "Plazo por confirmar",
      ready: Boolean(product.dispatch),
    },
    {
      label: "Cambios",
      value: product.returns || "Condiciones por confirmar",
      ready: Boolean(product.returns),
    },
  ];

  return (
    <section className={`${styles.fulfillmentProof} ${compact ? styles.fulfillmentProofCompact : ""}`} aria-labelledby={compact ? "fulfillment-title-compact" : "fulfillment-title"}>
      <p className={styles.sectionEyebrow}>Entrega sin letra pequeña</p>
      <h2 id={compact ? "fulfillment-title-compact" : "fulfillment-title"}>Lo que debe estar confirmado antes de pagar</h2>
      <dl>
        {facts.map((fact) => (
          <div key={fact.label} data-ready={fact.ready ? "true" : "false"}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.fulfillmentNote}>
        <Icon name={product.shippingIncluded ? "check" : "info"} size={17} />
        {product.shippingIncluded
          ? "El total anunciado ya contempla el envío dentro de la cobertura confirmada."
          : "No abriremos el pago hasta poder demostrar el envío incluido y su cobertura."}
      </p>
    </section>
  );
}

function PaymentPreview({ methods }) {
  return (
    <section className={styles.paymentPreview} aria-labelledby="payment-preview-title">
      <p className={styles.sectionEyebrow}>Elige después, entiende ahora</p>
      <h2 id="payment-preview-title">Cinco rutas de pago, una sola confirmación segura</h2>
      <p>
        El pago ocurre en una ventana de Bold sobre esta misma página. Aquí puedes comprobar cuáles rutas están realmente activadas antes de compartir tus datos.
      </p>
      <PaymentMethodGrid methods={methods} />
    </section>
  );
}

function TrustSequence({ product }) {
  const conditionsReady = product.commercialReady;
  return (
    <section className={styles.trustSequence} aria-labelledby="trust-sequence-title">
      <div>
        <p className={styles.sectionEyebrow}>Transacción transparente</p>
        <h2 id="trust-sequence-title">Sabes qué ocurre antes, durante y después del pago</h2>
      </div>
      <ol>
        <li><span>01</span><strong>Antes</strong><p>{conditionsReady ? "Ves el total, el envío incluido y la entrega confirmada." : "Faltan condiciones comerciales; por eso el pago permanece cerrado."}</p></li>
        <li><span>02</span><strong>Durante</strong><p>Bold abre su ventana de pago sobre esta página; los datos de la tarjeta se escriben allí y no pasan por nuestro servidor.</p></li>
        <li><span>03</span><strong>Después</strong><p>La compra sólo se confirma al recibir y conciliar el estado final del procesador.</p></li>
      </ol>
    </section>
  );
}

function PaymentMethodGrid({ methods }) {
  return (
    <div className={styles.paymentMethods} aria-label="Medios de pago solicitados">
      {methods.map((method) => (
        <article key={method.id} className={styles.paymentMethod} data-confirmed={method.confirmed ? "true" : "false"}>
          <span className={styles.paymentMark} aria-hidden="true">{method.mark}</span>
          <span>
            <strong>{method.label}</strong>
            <small>{method.detail}</small>
            <em>{method.confirmed ? "Confirmado en la cuenta Bold" : "Disponible al confirmar activación"}</em>
          </span>
        </article>
      ))}
    </div>
  );
}

export function TarotCartPage({ product }) {
  const [quantity, setQuantity] = useState(0);
  const trackedView = useRef(false);
  const intent = useCheckoutIntent();

  useEffect(() => {
    setQuantity(readQuantity());
    if (trackedView.current) return;
    trackedView.current = true;
    trackEvent({ action: "view_cart", category: "ecommerce", label: product.sku, ...readTarotAttribution() });
  }, [product.sku]);

  function updateQuantity(next) {
    setQuantity(next);
    saveQuantity(product, next, intent.id);
  }

  const readinessFields = [
    ...product.missingCommercialFields,
    ...(product.missingCheckoutFields || []),
  ];

  return (
    <div className={styles.checkoutPage}>
      <StoreHeader quantity={quantity} />
      <main className={styles.cartMain} id="contenido">
        <div className={styles.titleBlock}>
          <Link href={intent.path}>Volver a la experiencia</Link>
          <p className={styles.sectionEyebrow}>{intent.eyebrow}</p>
          <h1>{intent.cartTitle}</h1>
          <p>{intent.cartCopy}</p>
        </div>
        {quantity > 0 ? (
          <div className={styles.cartGrid}>
            <div>
              <ProductLine product={product} quantity={quantity} onQuantity={updateQuantity} />
              <FulfillmentProof product={product} />
              <PaymentPreview methods={product.paymentMethods} />
              {!product.checkoutReady ? (
                <section className={styles.honestyPanel}>
                  <Icon name="info" />
                  <div><h2>Esta compra todavía no está habilitada</h2><p>Puedes revisar el recorrido completo, pero no enviaremos información ni abriremos un pago hasta confirmar producto, entrega y conciliación segura.</p></div>
                </section>
              ) : null}
              {readinessFields.length ? (
                <div className={styles.missingFields}>
                  <h2>Antes de habilitar la compra confirmaremos</h2>
                  <ul>{readinessFields.map((field) => <li key={field}>{field}</li>)}</ul>
                </div>
              ) : null}
            </div>
            <div>
              <OrderSummary product={product} quantity={quantity} intent={intent} />
              <Link href="/tarot/checkout" className={styles.primaryLink}>
                {product.checkoutReady ? "Continuar al checkout" : "Revisar el checkout preparado"}
                <Icon name="arrow" />
              </Link>
              <p className={styles.trustLine}><Icon name="lock" size={18} />No cobraremos nada sin mostrarte antes el total y la entrega.</p>
            </div>
          </div>
        ) : (
          <section className={styles.emptyState}>
            <h2>Tu carrito está vacío</h2>
            <p>Explora la baraja y vuelve cuando quieras continuar.</p>
            <Link href={intent.path} className={styles.primaryLink}>Volver a tu experiencia <Icon name="arrow" /></Link>
          </section>
        )}
        <TrustSequence product={product} />
      </main>
    </div>
  );
}

export function TarotCheckoutPage({ product, account = null }) {
  const [quantity, setQuantity] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [payment, setPayment] = useState(null);
  const [paymentNotice, setPaymentNotice] = useState("");
  const trackedView = useRef(false);
  const analyticsContextPromise = useRef(null);
  const errorRef = useRef(null);
  const intent = useCheckoutIntent();
  const boldStatus = useBoldCheckoutLibrary(product.checkoutReady);

  useEffect(() => {
    setQuantity(readQuantity());
    analyticsContextPromise.current = getAnalyticsSessionContext();
    if (trackedView.current) return;
    trackedView.current = true;
    trackEvent({ action: "view_checkout_preview", category: "tarot_commerce", label: product.sku, ...readTarotAttribution() });
  }, [product.sku]);

  useEffect(() => {
    if (error) errorRef.current?.focus();
  }, [error]);

  /**
   * Vigila el pago mientras el modal está abierto.
   *
   * Bold no expone ninguna devolución de llamada de "pagado": la única verdad
   * es nuestra orden, que confirma el webhook firmado. Por eso aquí sólo se
   * consulta el estado del pedido. El cierre del modal adelanta la consulta,
   * nunca da el pago por hecho.
   */
  useEffect(() => {
    if (!payment?.statusUrl) return undefined;
    let active = true;
    let timer;
    let attempts = 0;
    let deadline = PAYMENT_POLL_MAX_ATTEMPTS;

    const stopListening = onBoldCheckoutClosed(() => {
      deadline = Math.min(deadline, attempts + PAYMENT_POLL_ATTEMPTS_AFTER_CLOSE);
      setPaymentNotice(
        "Cerraste la ventana de pago. Si completaste el pago, estamos confirmándolo con Bold."
      );
    });

    async function check() {
      attempts += 1;
      try {
        const response = await fetch(payment.statusUrl, { cache: "no-store" });
        const result = await response.json();
        if (!active) return;
        const status = response.ok ? result?.order?.status : null;

        if (status === "APPROVED") {
          window.location.assign(payment.resultUrl);
          return;
        }
        if (status && FINAL_ORDER_STATUSES.has(status)) {
          setSubmitting(false);
          setPaymentNotice("");
          setPayment(null);
          setError(
            status === "DECLINED"
              ? "Bold no aprobó el pago. No se realizó ningún cobro; puedes intentar de nuevo con otro medio."
              : status === "VOIDED"
                ? "La transacción quedó anulada. No hay ningún cobro vigente; puedes iniciar un pago nuevo."
                : "El pago terminó con un error y no se confirmó ningún cobro. Puedes intentarlo de nuevo."
          );
          return;
        }
      } catch {
        // Un fallo puntual de red no interrumpe la verificación.
      }
      if (!active) return;
      if (attempts >= deadline) {
        setSubmitting(false);
        setPayment(null);
        setPaymentNotice("");
        setError(
          "No recibimos la confirmación de Bold. Si completaste el pago, revisa el estado de tu pedido antes de intentar otro cobro."
        );
        return;
      }
      timer = window.setTimeout(check, PAYMENT_POLL_INTERVAL_MS);
    }

    timer = window.setTimeout(check, PAYMENT_POLL_INTERVAL_MS);
    return () => {
      active = false;
      window.clearTimeout(timer);
      stopListening();
    };
  }, [payment]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!product.checkoutReady || submitting || boldStatus !== "ready") return;
    setSubmitting(true);
    setError("");
    setPaymentNotice("");

    const data = new FormData(event.currentTarget);
    try {
      const analytics = await (
        analyticsContextPromise.current || getAnalyticsSessionContext()
      );
      const response = await fetch("/api/tarot/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          sku: product.sku,
          quantity,
          email: data.get("email"),
          fullName: data.get("fullName"),
          phone: data.get("phone"),
          documentType: data.get("documentType"),
          documentNumber: data.get("documentNumber"),
          region: data.get("region"),
          city: data.get("city"),
          postalCode: data.get("postalCode"),
          addressLine1: data.get("addressLine1"),
          addressLine2: data.get("addressLine2"),
          privacyAccepted: data.get("privacyAccepted") === "yes",
          campaign: {
            ...readTarotAttribution(),
            landing_intent: intent.id,
          },
          analytics,
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "No fue posible preparar el pago.");
      }

      trackEvent({
        action: "begin_checkout",
        category: "ecommerce",
        label: product.sku,
        currency: product.currency,
        value: product.priceCop * quantity,
        items: [{ item_id: product.sku, item_name: product.name, price: product.priceCop, quantity }],
        ...readTarotAttribution(),
      });

      /* El modal se abre con la configuración firmada en el servidor. Si la
         apertura falla, el pedido queda creado pero sin cobro: se dice, no se
         disimula. */
      openBoldEmbeddedCheckout(result.checkout);
      /* No se afirma que la ventana está abierta: si Bold la rechaza sólo deja
         un aviso en la consola, y anunciar una ventana que no aparece sería
         mentirle a quien está esperando pagar. */
      setPaymentNotice(
        "Termina el pago en la ventana de Bold. Si no la ves, no se ha cobrado nada y puedes volver a intentarlo."
      );
      setPayment({ statusUrl: result.statusUrl, resultUrl: result.resultUrl });
    } catch (checkoutError) {
      setError(checkoutError.message || "No fue posible preparar el pago.");
      setPaymentNotice("");
      setSubmitting(false);
    }
  }

  const paymentButtonLabel = !product.checkoutReady
    ? "Pago disponible al completar las condiciones de lanzamiento"
    : boldStatus === "loading"
      ? "Cargando la ventana de pago de Bold…"
      : boldStatus === "failed"
        ? "La ventana de pago de Bold no está disponible"
        : payment
          ? "Esperando la confirmación de Bold…"
          : submitting
            ? "Preparando tu pedido…"
            : `Pagar ${price(product, quantity)} con Bold`;

  return (
    <div className={styles.checkoutPage}>
      <StoreHeader quantity={quantity} />
      <main className={styles.checkoutMain} id="contenido">
        <Link href="/tarot/carrito" className={styles.backLink}>Volver al carrito</Link>
        <p className={`${styles.sectionEyebrow} ${styles.checkoutEyebrow}`}>{intent.eyebrow}</p>
        <h1>{intent.checkoutTitle}</h1>
        <p className={styles.checkoutLead}>{intent.checkoutCopy}</p>
        <ol className={styles.steps} aria-label="Progreso del checkout">
          <li className={styles.completedStep}>Pedido</li>
          <li className={account ? styles.completedStep : styles.activeStep} aria-current={account ? undefined : "step"}>Cuenta</li>
          <li className={account ? styles.activeStep : undefined} aria-current={account ? "step" : undefined}>Entrega</li>
          <li>Pago seguro</li>
        </ol>
        {quantity > 0 ? (
          <div className={styles.checkoutGrid}>
            <form className={styles.checkoutForm} onSubmit={handleSubmit} aria-busy={submitting ? "true" : "false"}>
              <CheckoutAccount account={account} />
              {!product.checkoutReady ? (
                <div className={styles.formGate} role="status">
                  <Icon name="info" />
                  <span>
                    <strong>Checkout preparado en modo de revisión.</strong>
                    Puedes revisar contacto y entrega; nada se enviará ni se cobrará. Los campos sensibles y el botón de pago se habilitarán al confirmar producto, vendedor y Bold.
                  </span>
                </div>
              ) : null}
              <section>
                <h2>Contacto</h2>
                <label>Correo electrónico<input name="email" type="email" autoComplete="email" placeholder="tu@correo.com" required maxLength={160} defaultValue={account?.email || ""} readOnly={Boolean(account)} disabled={submitting} /></label>
                <div className={styles.fieldGrid}>
                  <label>Tipo de documento<select name="documentType" defaultValue="CEDULA" required disabled={submitting}><option value="CEDULA">Cédula de ciudadanía</option><option value="CEDULA_EXTRANJERIA">Cédula de extranjería</option><option value="PASAPORTE">Pasaporte</option><option value="NIT">NIT</option></select></label>
                  <label>Número de documento<input name="documentNumber" type="text" inputMode="text" required minLength={5} maxLength={30} disabled={submitting} /></label>
                </div>
              </section>
              <section>
                <h2>Entrega</h2>
                <p className={styles.deliveryIntro}>
                  {product.shippingIncluded && product.shipping
                    ? `${product.shipping} El total no recibirá un cobro adicional de transporte.`
                    : "La cobertura y el envío incluido deben estar confirmados antes de habilitar estos campos."}
                </p>
                <div className={styles.fieldGrid}>
                  <label className={styles.fullField}>Nombre completo<input name="fullName" type="text" autoComplete="name" required minLength={3} maxLength={120} defaultValue={account?.fullName || ""} disabled={submitting} /></label>
                  <label>Teléfono<input name="phone" type="tel" autoComplete="tel-national" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} placeholder="3001234567" required disabled={submitting} /></label>
                  <label>Departamento<select name="region" autoComplete="address-level1" defaultValue="" required disabled={!product.checkoutReady || !product.shippingRegionsReady || submitting}><option value="" disabled>{product.shippingRegionsReady ? "Selecciona" : "Cobertura por confirmar"}</option>{product.shippingRegions.map((region) => <option key={region} value={region}>{region}</option>)}</select></label>
                  <label>Ciudad o municipio<input name="city" type="text" autoComplete="address-level2" required maxLength={100} disabled={submitting} /></label>
                  <label>Código postal<input name="postalCode" type="text" autoComplete="postal-code" required minLength={4} maxLength={12} disabled={submitting} /></label>
                  <label className={styles.fullField}>Dirección de entrega<input name="addressLine1" type="text" autoComplete="address-line1" required minLength={5} maxLength={180} disabled={submitting} /></label>
                  <label className={styles.fullField}>Apartamento, torre o referencia opcional<input name="addressLine2" type="text" autoComplete="address-line2" maxLength={180} disabled={submitting} /></label>
                </div>
              </section>
              <section>
                <h2>Pago protegido por Bold</h2>
                <p className={styles.paymentIntro}>Al confirmar se abre una ventana de Bold sobre esta misma página. Allí eliges el medio, escribes tus datos de pago y vuelves aquí sin salir del sitio.</p>
                <PaymentMethodGrid methods={product.paymentMethods} />
                {product.checkoutReady && boldStatus === "failed" ? (
                  <div className={styles.paymentNotice} data-tone="alert" role="alert">
                    <Icon name="info" size={18} />
                    <span>No pudimos cargar la ventana de pago de Bold. Revisa tu conexión y recarga la página; no se ha cobrado nada.</span>
                  </div>
                ) : null}
                {paymentNotice ? (
                  <div className={styles.paymentNotice} role="status">
                    <Icon name="clock" size={18} />
                    <span>
                      {paymentNotice}
                      {payment ? (
                        <>
                          {" "}
                          <a href={payment.resultUrl}>Ver el estado de este pedido</a>.
                        </>
                      ) : null}
                    </span>
                  </div>
                ) : null}
                <p className={styles.providerNote}><Icon name="lock" size={18} />Mitos de Colombia conserva sólo los datos de la orden. Los datos de la tarjeta se escriben dentro de la ventana de Bold: no pasan por nuestro servidor, no se guardan en la base de datos y no aparecen en registros. Consulta la <Link href="/privacidad">política de privacidad</Link>.</p>
              </section>
              {error ? <p ref={errorRef} className={styles.formError} role="alert" tabIndex={-1}>{error}</p> : null}
              <label className={styles.legalConsent}>
                <input name="privacyAccepted" type="checkbox" value="yes" required disabled={submitting} />
                <span>He leído los <Link href="/terminos">términos de compra</Link> y autorizo el tratamiento de mis datos para crear, pagar y entregar este pedido según la <Link href="/privacidad">política de privacidad</Link>.</span>
              </label>
              <button type="submit" className={product.checkoutReady ? styles.paymentButton : styles.disabledButton} disabled={!product.checkoutReady || submitting || boldStatus !== "ready"}>
                <Icon name="lock" size={19} />
                {paymentButtonLabel}
              </button>
            </form>
            <aside className={styles.checkoutAside}>
              <OrderSummary product={product} quantity={quantity} compact intent={intent} />
              <p className={styles.intentPromise}>{intent.promise}</p>
              <FulfillmentProof product={product} compact />
              <div className={styles.assuranceList}>
                <p><Icon name="check" size={17} />Cantidad y total visibles antes de pagar</p>
                <p><Icon name="lock" size={17} />Transacción cifrada y procesada por Bold; no guardamos datos de tarjeta</p>
                <p><Icon name="clock" size={17} />Confirmación conciliada, no asumida por redirección</p>
              </div>
              <div className={styles.sellerIdentity}>
                <p>Vendedor responsable</p>
                {product.sellerReady ? (
                  <address>
                    <strong>{product.seller.legalName}</strong>
                    <span>{product.seller.legalId}</span>
                    <span>{product.seller.address}</span>
                    <a href={`mailto:${product.seller.email}`}>{product.seller.email}</a>
                    <a href={`tel:${product.seller.phone}`}>{product.seller.phone}</a>
                  </address>
                ) : <span>Identidad y contacto por confirmar antes de abrir el pago.</span>}
              </div>
            </aside>
          </div>
        ) : (
          <section className={styles.emptyState}><h2>Tu carrito está vacío</h2><p>Agrega la baraja antes de comenzar el checkout.</p><Link href={intent.path} className={styles.primaryLink}>Volver a tu experiencia <Icon name="arrow" /></Link></section>
        )}
        <TrustSequence product={product} />
      </main>
    </div>
  );
}

function resultContent(order, loading, error) {
  if (error) return { tone: "error", icon: "info", eyebrow: "No pudimos consultar el pago", title: "La confirmación no está disponible", body: error };
  if (loading || !order || ["CREATED", "PENDING"].includes(order.status)) return { tone: "pending", icon: "clock", eyebrow: "Confirmación protegida", title: "Estamos verificando tu pago", body: "Esta página consulta automáticamente la orden. La conciliación continúa en el servidor aunque decidas volver más tarde." };
  if (order.status === "APPROVED") return { tone: "success", icon: "check", eyebrow: "Pago confirmado", title: "Tu compra quedó registrada", body: "Recibimos la confirmación segura del procesador. Conserva esta página como referencia de la transacción." };
  if (order.status === "DECLINED") return { tone: "error", icon: "info", eyebrow: "Pago no aprobado", title: "No se realizó ningún cobro aprobado", body: "Puedes volver al checkout e intentar con otro medio disponible en Bold." };
  if (order.status === "VOIDED") return { tone: "error", icon: "info", eyebrow: "Transacción anulada", title: "El pago no quedó vigente", body: "Vuelve al checkout para iniciar una transacción nueva." };
  return { tone: "error", icon: "info", eyebrow: "Pago sin confirmar", title: "La transacción terminó con un error", body: "No contamos esta visita como compra. Puedes volver al checkout e intentarlo de nuevo." };
}

function publicPaymentMethod(value) {
  return {
    CARD: "Tarjeta débito o crédito",
    /* Botón de Pagos reporta la tarjeta web con su propio nombre. */
    CARD_WEB: "Tarjeta débito o crédito",
    CREDIT_CARD: "Tarjeta débito o crédito",
    PSE: "PSE",
    NEQUI: "Nequi",
    BOTON_BANCOLOMBIA: "Botón Bancolombia",
    QR: "QR Bre-B",
  }[String(value || "").toUpperCase()] || null;
}

function ResultJourney({ order, product, error }) {
  const approved = order?.status === "APPROVED";
  const failed = Boolean(error) || ["DECLINED", "VOIDED", "ERROR"].includes(order?.status);
  const steps = approved
    ? [
        ["Pago verificado", "La confirmación firmada y la orden coinciden."],
        ["Preparación", product.dispatch || "Se aplicará el plazo de despacho confirmado en la compra."],
        ["Entrega", product.shipping || "La entrega seguirá la cobertura confirmada del envío incluido."],
      ]
    : failed
      ? [
          ["Sin compra aprobada", "Esta visita no se registra como una compra confirmada."],
          ["Revisa el medio", "Puedes volver a Bold y elegir otra ruta disponible."],
          ["Nueva confirmación", "Sólo una respuesta aprobada inicia la preparación del pedido."],
        ]
      : [
          ["Verificación", "Esperamos el estado final y firmado del procesador."],
          ["Sin preparar todavía", "El pedido no entra a preparación mientras el pago siga pendiente."],
          ["Entrega protegida", "El despacho comienza únicamente después de la aprobación."],
        ];

  return (
    <section className={styles.resultJourney} aria-labelledby="result-journey-title">
      <p className={styles.sectionEyebrow}>Qué ocurre ahora</p>
      <h2 id="result-journey-title">La orden avanza sólo con evidencia</h2>
      <ol>
        {steps.map(([title, body], index) => (
          <li key={title} data-state={approved ? "complete" : failed ? "attention" : index === 0 ? "active" : "waiting"}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><strong>{title}</strong><p>{body}</p></div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function publicPaymentStatus(status) {
  return {
    CREATED: "Pago preparado",
    PENDING: "Confirmación pendiente",
    APPROVED: "Pago aprobado",
    DECLINED: "Pago no aprobado",
    VOIDED: "Pago anulado",
    ERROR: "Error de pago",
  }[status] || "Estado por confirmar";
}

/**
 * Lo que Bold anuncia al volver a nuestra URL de retorno.
 *
 * Es un dato de cortesía —lo agrega Bold como `?bold-tx-status=`— y sólo sirve
 * para acompañar la espera mientras confirmamos de verdad. Nunca decide el
 * estado de la orden: eso lo hace el webhook firmado.
 */
function readBoldReturnHint() {
  if (typeof window === "undefined") return "";
  const status = new URLSearchParams(window.location.search)
    .get("bold-tx-status");
  return {
    approved: "Bold reportó el pago como aprobado. Lo estamos confirmando con su aviso firmado.",
    rejected: "Bold reportó el pago como rechazado. Estamos confirmándolo antes de darlo por definitivo.",
    failed: "Bold reportó un fallo en el pago. Estamos confirmándolo antes de darlo por definitivo.",
    pending: "Bold reportó el pago como pendiente. Puede tardar unos minutos en resolverse.",
  }[String(status || "").toLowerCase()] || "";
}

export function TarotOrderResultPage({ token, product, account = null }) {
  const [order, setOrder] = useState(null);
  const [boldReturnHint, setBoldReturnHint] = useState("");
  const [cartQuantity, setCartQuantity] = useState(0);
  const [loading, setLoading] = useState(Boolean(token));
  const [error, setError] = useState(token ? "" : "Falta el identificador seguro de la orden.");
  const [refreshKey, setRefreshKey] = useState(0);
  const [claimingOrder, setClaimingOrder] = useState(false);
  const [claimMessage, setClaimMessage] = useState("");
  const purchaseTracked = useRef(false);
  const storedIntent = useCheckoutIntent();

  useEffect(() => {
    setCartQuantity(readQuantity());
    setBoldReturnHint(readBoldReturnHint());
  }, []);

  useEffect(() => {
    if (!token) return undefined;
    let active = true;
    let timer;
    let failures = 0;

    async function loadOrder() {
      try {
        const response = await fetch(`/api/tarot/orders/${encodeURIComponent(token)}`, { cache: "no-store" });
        const result = await response.json();
        if (!response.ok) throw new Error("No pudimos verificar esta orden todavía.");
        if (!active) return;
        failures = 0;
        setOrder(result.order);
        setLoading(false);
        setError("");

        const confirmedPurchase = getConfirmedTarotPurchase(result.order);
        if (confirmedPurchase && !purchaseTracked.current) {
          purchaseTracked.current = true;
          const transactionId = confirmedPurchase.transactionId;
          if (claimTarotPurchaseTracking(window.localStorage, transactionId)) {
            try {
              localStorage.removeItem(CART_KEY);
            } catch {
              // A restrictive storage mode must not suppress a confirmed purchase.
            }
            trackEvent({
              action: "purchase",
              category: "ecommerce",
              label: result.order.sku,
              transaction_id: transactionId,
              currency: result.order.currency,
              value: confirmedPurchase.value,
              items: [{ item_id: result.order.sku, item_name: product.name, price: result.order.unitPriceCop, quantity: result.order.quantity }],
              ...confirmedPurchase.attribution,
            });
          }
        }

        if (!FINAL_ORDER_STATUSES.has(result.order.status)) {
          timer = window.setTimeout(loadOrder, 2500);
        }
      } catch (loadError) {
        if (!active) return;
        failures += 1;
        if (failures >= 5) {
          setLoading(false);
          setError(loadError.message || "No pudimos verificar esta orden todavía.");
          return;
        }
        timer = window.setTimeout(loadOrder, 3000);
      }
    }

    loadOrder();
    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [product.name, refreshKey, token]);

  function retryStatus() {
    setError("");
    setLoading(true);
    setRefreshKey((current) => current + 1);
  }

  async function claimOrder() {
    if (!token || claimingOrder) return;
    setClaimingOrder(true);
    setClaimMessage("");
    try {
      const response = await fetch("/api/tarot/account/orders/claim", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ orderToken: token }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "No pudimos guardar este pedido.");
      setClaimMessage("Pedido guardado. Ya puedes seguirlo desde tu cuenta.");
    } catch (claimError) {
      setClaimMessage(claimError.message || "No pudimos guardar este pedido.");
    } finally {
      setClaimingOrder(false);
    }
  }

  const content = resultContent(order, loading, error);
  const intent = getTarotCheckoutIntent(
    order?.attribution?.landing_intent || storedIntent.id
  );
  const paymentMethod = publicPaymentMethod(order?.paymentMethodType);
  const resultPromise = order
    ? intent.resultPromise
    : "La orden conservará producto, cantidad y total mientras verificamos su estado.";
  const returnIntent = order ? intent : storedIntent;

  return (
    <div className={styles.checkoutPage}>
      <StoreHeader quantity={order?.status === "APPROVED" ? 0 : (order?.quantity || cartQuantity)} />
      <main className={styles.resultMain} id="contenido">
        <section className={`${styles.resultCard} ${styles[`result_${content.tone}`]}`} aria-live="polite">
          <div className={styles.resultIcon}><Icon name={content.icon} size={30} /></div>
          <p className={styles.resultEyebrow}>{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className={styles.resultBody}>{content.body}</p>
          {boldReturnHint && !order?.paymentConfirmed ? (
            <div className={styles.paymentNotice} role="status">
              <Icon name="info" size={18} />
              <span>{boldReturnHint}</span>
            </div>
          ) : null}
          <p className={styles.resultIntent}>{resultPromise}</p>
          {order ? (
            <dl className={styles.resultSummary}>
              <div><dt>Estado</dt><dd>{publicPaymentStatus(order.status)}</dd></div>
              <div><dt>Total</dt><dd>{priceFromCents(order.amountInCents, order.currency)}</dd></div>
              <div><dt>Cantidad</dt><dd>{order.quantity}</dd></div>
              {order.reference ? <div><dt>Pedido</dt><dd>{order.reference}</dd></div> : null}
              {paymentMethod ? <div><dt>Medio</dt><dd>{paymentMethod}</dd></div> : null}
              {order.transactionId ? <div><dt>Transacción</dt><dd>…{order.transactionId.slice(-8)}</dd></div> : null}
            </dl>
          ) : null}
          <ResultJourney order={order} product={product} error={error} />
          <div className={styles.resultActions}>
            {error && token ? <button type="button" className={styles.primaryAction} onClick={retryStatus}>Consultar de nuevo <Icon name="clock" /></button> : null}
            {order && ["DECLINED", "VOIDED", "ERROR"].includes(order.status) ? <Link href="/tarot/checkout" className={styles.primaryLink}>Volver al checkout <Icon name="arrow" /></Link> : null}
            {order && token && account ? (
              <button type="button" className={styles.primaryAction} onClick={claimOrder} disabled={claimingOrder}>
                {claimingOrder ? "Guardando pedido…" : "Guardar en mi cuenta"}
              </button>
            ) : null}
            {order && token && !account ? (
              <Link href={`/cuenta/crear?order=${encodeURIComponent(token)}`} className={styles.primaryLink}>Crear cuenta y guardar pedido <Icon name="arrow" /></Link>
            ) : null}
            {claimMessage ? <p className={styles.claimMessage} role="status">{claimMessage}</p> : null}
            {order && token && !account ? <Link href={`/cuenta/ingresar?order=${encodeURIComponent(token)}`} className={styles.secondaryLink}>Ya tengo cuenta</Link> : null}
            {account ? <Link href="/cuenta" className={styles.secondaryLink}>Ir a mis pedidos</Link> : null}
            {order || error ? <Link href={returnIntent.path} className={styles.secondaryLink}>Volver a tu experiencia</Link> : null}
          </div>
        </section>
      </main>
    </div>
  );
}
