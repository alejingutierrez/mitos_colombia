/**
 * Lado navegador del Botón de Pagos de Bold (Embedded Checkout).
 *
 * Vive aparte de `src/lib/bold.js` a propósito: ese módulo importa
 * `node:crypto` para firmar, y no puede entrar en el paquete del cliente.
 * Aquí no hay ninguna llave ni ningún secreto: sólo la carga de la librería y
 * la apertura del modal con la configuración que ya firmó el servidor.
 */

/** URL única de la librería, sin versión. */
export const BOLD_CHECKOUT_SCRIPT_URL =
  "https://checkout.bold.co/library/boldPaymentButton.js";

/** Único origen del que aceptamos mensajes del iframe del modal. */
export const BOLD_CHECKOUT_ORIGIN = "https://checkout.bold.co";

/**
 * Tipo de mensaje con el que la librería cierra su propio iframe. No está
 * documentado: sirve de pista para adelantar la consulta de estado, jamás como
 * confirmación de pago. Si Bold lo cambia perdemos inmediatez, no corrección.
 */
export const BOLD_CHECKOUT_MESSAGE_TYPE = "BOLD_CHECKOUT_EVENT";

/* Eventos propios: los dispara el cargador de abajo, no Bold. */
export const BOLD_CHECKOUT_LOADED_EVENT = "boldCheckoutLoaded";
export const BOLD_CHECKOUT_FAILED_EVENT = "boldCheckoutLoadFailed";

/**
 * Inserta la librería en el <head>.
 *
 * En React no sirve pintar un <script> en el JSX: React no ejecuta los scripts
 * que renderiza. Se inyecta a mano y una sola vez; si la etiqueta ya existe
 * pero todavía no terminó de cargar, no se anuncia nada —quien espera sigue
 * esperando el `onload` original—.
 */
export function loadBoldCheckoutScript() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[src="${BOLD_CHECKOUT_SCRIPT_URL}"]`)) {
    if (window.BoldCheckout) {
      window.dispatchEvent(new Event(BOLD_CHECKOUT_LOADED_EVENT));
    }
    return;
  }
  const js = document.createElement("script");
  js.onload = () => window.dispatchEvent(new Event(BOLD_CHECKOUT_LOADED_EVENT));
  js.onerror = () => window.dispatchEvent(new Event(BOLD_CHECKOUT_FAILED_EVENT));
  js.src = BOLD_CHECKOUT_SCRIPT_URL;
  document.head.appendChild(js);
}

export function isBoldCheckoutAvailable() {
  return typeof window !== "undefined" && typeof window.BoldCheckout === "function";
}

/**
 * Abre el modal sobre la página.
 *
 * `renderMode: "embedded"` es el único interruptor entre el modal y una
 * redirección de página completa; se fija aquí para que ninguna llamada pueda
 * olvidarlo y sacar a la persona del sitio.
 */
export function openBoldEmbeddedCheckout(config) {
  if (!isBoldCheckoutAvailable()) {
    throw new Error("La pasarela de Bold no terminó de cargar.");
  }
  const checkout = new window.BoldCheckout({ ...config, renderMode: "embedded" });
  checkout.open();
  return checkout;
}

/**
 * Escucha el aviso de cierre del iframe. Devuelve la función para dejar de
 * escuchar. Sólo se mira el origen y el tipo: no leemos ningún otro campo del
 * mensaje porque no sabemos qué trae.
 */
export function onBoldCheckoutClosed(handler) {
  if (typeof window === "undefined") return () => {};
  const listener = (event) => {
    if (event.origin !== BOLD_CHECKOUT_ORIGIN) return;
    if (event.data?.type !== BOLD_CHECKOUT_MESSAGE_TYPE) return;
    handler();
  };
  window.addEventListener("message", listener);
  return () => window.removeEventListener("message", listener);
}
