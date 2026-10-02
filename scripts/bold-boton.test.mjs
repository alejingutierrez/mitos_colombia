import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import {
  BOLD_DOCUMENT_TYPES,
  BOLD_MAX_AMOUNT_COP,
  BOLD_MIN_AMOUNT_COP,
  buildBoldCheckoutConfig,
  createBoldIntegritySignature,
  formatBoldAmount,
} from "../src/lib/bold.js";
import {
  BOLD_CHECKOUT_MESSAGE_TYPE,
  BOLD_CHECKOUT_ORIGIN,
  BOLD_CHECKOUT_SCRIPT_URL,
} from "../src/lib/bold-browser.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFileSync(path.join(projectRoot, file), "utf8");
const checkoutRoute = read("src/app/api/tarot/checkout/route.js");
const checkoutComponent = read("src/components/tarot-commerce/TarotCheckoutPages.js");
const browserSource = read("src/lib/bold-browser.js");
const eventsRoute = read("src/app/api/tarot/bold/events/route.js");
const envExample = read(".env.example");

/* Deliberadamente con forma de frase y no de llave: nada en este archivo
   debe poder confundirse con una credencial real. El valor es arbitrario
   porque cada prueba recalcula el hash esperado con el mismo secreto. */
const SECRET = "secreta-de-prueba-no-es-una-llave-real";
const IDENTITY = "identidad-publica-de-pruebas";

function baseConfig(overrides = {}) {
  return buildBoldCheckoutConfig({
    orderId: "tarot-abc-123",
    amountCop: 124900,
    apiKey: IDENTITY,
    secretKey: SECRET,
    redirectionUrl: "https://www.mitosdecolombia.com/tarot/checkout/resultado?order=abc",
    description: "Tarot de Mitos Colombianos · 1 unidad",
    ...overrides,
  });
}

/* ── La firma ─────────────────────────────────────────────────────────── */

test("la firma es SHA-256 hexadecimal de identificador+monto+divisa+secreta, sin separadores", () => {
  /* Identificador, monto y divisa salen del ejemplo de la documentación de
     Bold; el secreto es de mentira a propósito. */
  const signature = createBoldIntegritySignature({
    orderId: "inv0334",
    amount: "39400",
    currency: "COP",
    secretKey: SECRET,
  });
  const expected = createHash("sha256")
    .update(`inv033439400COP${SECRET}`, "utf8")
    .digest("hex");

  assert.equal(signature, expected);
  assert.match(signature, /^[a-f0-9]{64}$/);
  /* No es HMAC ni base64: si alguien cambia el algoritmo, esto se cae. */
  assert.notEqual(signature, Buffer.from(signature, "hex").toString("base64"));
});

test("la firma admite el monto abierto y cambia con cualquier parte de la cadena", () => {
  const abierto = createBoldIntegritySignature({
    orderId: "Inv0334",
    amount: "0",
    currency: "COP",
    secretKey: SECRET,
  });
  assert.equal(
    abierto,
    createHash("sha256").update(`Inv03340COP${SECRET}`, "utf8").digest("hex")
  );

  const base = { orderId: "inv0334", amount: "39400", currency: "COP", secretKey: SECRET };
  const firmas = new Set([
    createBoldIntegritySignature(base),
    createBoldIntegritySignature({ ...base, amount: "39401" }),
    createBoldIntegritySignature({ ...base, currency: "USD" }),
    createBoldIntegritySignature({ ...base, orderId: "inv0335" }),
    createBoldIntegritySignature({ ...base, secretKey: "otra-secreta" }),
  ]);
  assert.equal(firmas.size, 5);
});

test("firmar sin llave secreta es un error, nunca una firma vacía", () => {
  assert.throws(
    () => createBoldIntegritySignature({ orderId: "inv0334", amount: "39400", currency: "COP" }),
    /secret key/i
  );
  assert.throws(
    () => createBoldIntegritySignature({ orderId: "", amount: "39400", currency: "COP", secretKey: SECRET }),
    /orderId/
  );
});

/* ── La configuración del botón ───────────────────────────────────────── */

test("la configuración usa los nombres literales de Bold y abre el modal", () => {
  const config = baseConfig();

  assert.equal(config.renderMode, "embedded");
  assert.equal(config.apiKey, IDENTITY);
  assert.equal(config.orderId, "tarot-abc-123");
  assert.equal(config.amount, "124900");
  assert.equal(config.currency, "COP");
  assert.equal(
    config.redirectionUrl,
    "https://www.mitosdecolombia.com/tarot/checkout/resultado?order=abc"
  );
  assert.equal(
    config.integritySignature,
    createBoldIntegritySignature({
      orderId: "tarot-abc-123",
      amount: "124900",
      currency: "COP",
      secretKey: SECRET,
    })
  );
  /* Todo valor va como cadena: la librería no acepta números. */
  Object.values(config).forEach((value) => assert.equal(typeof value, "string"));
  /* Dos campos que la propia documentación se contradice: se omiten. */
  assert.equal("tax" in config, false);
  assert.equal("expirationDate" in config, false);
});

test("el monto firmado es exactamente el monto enviado, en pesos y sin decimales", () => {
  const config = baseConfig({ amountCop: 249800 });
  assert.equal(config.amount, "249800");
  assert.equal(
    config.integritySignature,
    createBoldIntegritySignature({
      orderId: "tarot-abc-123",
      amount: config.amount,
      currency: config.currency,
      secretKey: SECRET,
    })
  );

  assert.equal(formatBoldAmount(1000), "1000");
  assert.throws(() => formatBoldAmount(124900.5), /integer/);
  assert.throws(() => formatBoldAmount(BOLD_MIN_AMOUNT_COP - 1), /range/);
  assert.throws(() => formatBoldAmount(BOLD_MAX_AMOUNT_COP + 1), /range/);
});

test("rechaza identificadores, divisas y retornos que Bold no acepta", () => {
  assert.throws(() => baseConfig({ orderId: "tarot abc" }), /orderId/);
  assert.throws(() => baseConfig({ orderId: "tarot/abc" }), /orderId/);
  assert.throws(() => baseConfig({ orderId: "a".repeat(61) }), /orderId/);
  assert.throws(() => baseConfig({ currency: "EUR" }), /COP or USD/);
  assert.throws(
    () => baseConfig({ redirectionUrl: "http://www.mitosdecolombia.com/gracias" }),
    /https/
  );
  assert.throws(() => baseConfig({ apiKey: "" }), /identity key/);
});

test("los datos del comprador viajan como JSON con las claves exactas de Bold", () => {
  const config = baseConfig({
    customer: {
      email: "Persona@Example.com",
      fullName: "  Persona  de   Prueba ",
      phone: "300 123 4567",
      dialCode: "+57",
      documentNumber: "1020304050",
      documentType: "CEDULA_EXTRANJERIA",
    },
    billingAddress: {
      address: "Calle 1 # 2-3, Apto 401",
      city: "Bogotá",
      zipCode: "110111",
      state: "Bogotá D.C.",
      country: "co",
    },
  });

  assert.deepEqual(JSON.parse(config.customerData), {
    email: "persona@example.com",
    fullName: "Persona de Prueba",
    phone: "3001234567",
    dialCode: "+57",
    documentNumber: "1020304050",
    documentType: "CE",
  });
  assert.deepEqual(JSON.parse(config.billingAddress), {
    address: "Calle 1 # 2-3, Apto 401",
    city: "Bogotá",
    zipCode: "110111",
    state: "Bogotá D.C.",
    country: "CO",
  });
  assert.deepEqual(Object.values(BOLD_DOCUMENT_TYPES).sort(), [
    "CC",
    "CE",
    "NIT",
    "PA",
    "TI",
  ]);
});

test("la descripción nunca lleva una URL, porque Bold la rechaza", () => {
  const config = baseConfig({
    description: "Compra en www.mitosdecolombia.com y en https://ejemplo.co/x",
  });
  assert.doesNotMatch(config.description, /https?:\/\/|www\./);
  assert.ok(config.description.length >= 2 && config.description.length <= 100);
  /* Una descripción que quedaría vacía se omite en vez de enviarse inválida. */
  assert.equal("description" in baseConfig({ description: "https://ejemplo.co" }), false);
});

/* ── La llave secreta jamás llega al navegador ────────────────────────── */

test("la llave secreta no se serializa nunca hacia el cliente", () => {
  const config = baseConfig({
    customer: { email: "persona@example.com", fullName: "Persona de Prueba" },
    billingAddress: { address: "Calle 1 # 2-3", city: "Bogotá", country: "CO" },
  });

  const serialized = JSON.stringify(config);
  assert.doesNotMatch(serialized, new RegExp(SECRET));
  /* La lista es cerrada a propósito: si mañana alguien agrega un campo a la
     configuración, esta prueba obliga a mirarlo antes de mandarlo al
     navegador. */
  assert.deepEqual(Object.keys(config).sort(), [
    "amount",
    "apiKey",
    "billingAddress",
    "currency",
    "customerData",
    "description",
    "integritySignature",
    "orderId",
    "redirectionUrl",
    "renderMode",
  ]);
});

test("la ruta de checkout firma en el servidor y sólo devuelve la configuración pública", () => {
  assert.match(checkoutRoute, /buildBoldCheckoutConfig/);
  /* La secreta se nombra en UNA sola línea de toda la ruta: la de la firma.
     Cualquier otro uso —una respuesta, un registro— rompe esta prueba. */
  const secretLines = checkoutRoute
    .split("\n")
    .filter((line) => line.includes("secretKey"));
  assert.deepEqual(secretLines.map((line) => line.trim()), [
    "secretKey: configuration.secretKey,",
  ]);
  /* La respuesta entrega el objeto ya construido; no rearma llaves a mano. */
  assert.match(checkoutRoute, /\n\s*checkout,\n/);
  /* El cobro ya no se inicia desde el servidor. */
  assert.doesNotMatch(checkoutRoute, /createBoldPayment|payment-intent|cardNumber|cvc/);
});

test("el componente del checkout nunca importa el módulo que tiene la llave", () => {
  assert.doesNotMatch(checkoutComponent, /from "\.\.\/\.\.\/lib\/bold"/);
  assert.match(checkoutComponent, /from "\.\.\/\.\.\/lib\/bold-browser"/);
  assert.doesNotMatch(checkoutComponent, /secretKey|integritySignature/);
  /* Los datos de pago se escriben dentro del modal, no en nuestro formulario. */
  assert.doesNotMatch(checkoutComponent, /cardNumber|cardholderName|"cvc"|installments/);
});

/* ── Carga del modal y señales ────────────────────────────────────────── */

test("la librería se inyecta a mano y sólo una vez", () => {
  assert.equal(
    BOLD_CHECKOUT_SCRIPT_URL,
    "https://checkout.bold.co/library/boldPaymentButton.js"
  );
  assert.match(browserSource, /document\.createElement\("script"\)/);
  assert.match(browserSource, /document\.head\.appendChild/);
  assert.match(browserSource, /document\.querySelector\(`script\[src="\$\{BOLD_CHECKOUT_SCRIPT_URL\}"\]`\)/);
  assert.match(browserSource, /js\.onload/);
  assert.match(browserSource, /js\.onerror/);
  /* renderMode se fija en la apertura: ninguna llamada puede olvidarlo y
     mandar a la persona a otra página. */
  assert.match(browserSource, /renderMode: "embedded"/);
  assert.match(browserSource, /checkout\.open\(\)/);
});

test("el componente escucha por constante, no por cadena suelta", () => {
  /* Un nombre de evento escrito a mano en los dos lados se desincroniza en
     silencio: el botón se quedaría deshabilitado sin decir por qué. */
  assert.match(browserSource, /BOLD_CHECKOUT_LOADED_EVENT = "boldCheckoutLoaded"/);
  assert.match(checkoutComponent, /addEventListener\(BOLD_CHECKOUT_LOADED_EVENT/);
  assert.match(checkoutComponent, /addEventListener\(BOLD_CHECKOUT_FAILED_EVENT/);
  assert.doesNotMatch(checkoutComponent, /addEventListener\("boldCheckout/);
});

test("sólo se escuchan mensajes del origen de Bold y sólo como pista de UX", () => {
  assert.equal(BOLD_CHECKOUT_ORIGIN, "https://checkout.bold.co");
  assert.equal(BOLD_CHECKOUT_MESSAGE_TYPE, "BOLD_CHECKOUT_EVENT");
  assert.match(browserSource, /event\.origin !== BOLD_CHECKOUT_ORIGIN/);
  assert.match(browserSource, /event\.data\?\.type !== BOLD_CHECKOUT_MESSAGE_TYPE/);
  /* El cierre del modal adelanta la consulta; nunca aprueba una orden. */
  assert.match(checkoutComponent, /onBoldCheckoutClosed/);
  assert.match(checkoutComponent, /Cerraste la ventana de pago/);
  assert.doesNotMatch(
    checkoutComponent.slice(checkoutComponent.indexOf("onBoldCheckoutClosed(")),
    /setOrder\(\{[^}]*APPROVED/
  );
});

test("el estado del pago sale de nuestra orden, no del modal", () => {
  assert.match(checkoutComponent, /payment\.statusUrl/);
  assert.match(checkoutComponent, /result\?\.order\?\.status/);
  assert.match(checkoutComponent, /status === "APPROVED"/);
  assert.match(checkoutComponent, /No recibimos la confirmación de Bold/);
  assert.match(checkoutComponent, /bold-tx-status/);
});

/* ── Webhook y limpieza ───────────────────────────────────────────────── */

test("el webhook conserva su firma y ahora atiende las anulaciones", () => {
  assert.match(eventsRoute, /verifyBoldWebhookSignature/);
  assert.match(eventsRoute, /x-bold-signature/);
  assert.match(eventsRoute, /"SALE_APPROVED"/);
  assert.match(eventsRoute, /"SALE_REJECTED"/);
  assert.match(eventsRoute, /"VOID_APPROVED"/);
  assert.match(eventsRoute, /"VOID_REJECTED"/);
  assert.match(eventsRoute, /configuration\.environment === "test" \? "" : configuration\.secretKey/);
  /* Acusa recibo primero y procesa después: Bold espera 200 en 2 segundos. */
  assert.match(eventsRoute, /after\(\(\) => processSaleEvent/);
});

test("el diagnóstico temporal quedó retirado", () => {
  assert.equal(existsSync(path.join(projectRoot, "src/app/api/tarot/bold/probe")), false);
  assert.equal(existsSync(path.join(projectRoot, "src/app/api/tarot/bold/pse-banks")), false);
  assert.doesNotMatch(checkoutComponent, /pse-banks|probe/);
  /* Ninguna petición sale ya al host de la API vieja (que responde 403). */
  assert.doesNotMatch(read("src/lib/bold.js"), /"https:\/\/api\.online\.payments\.bold\.co/);
});

test("una anulación sí mueve una orden ya aprobada", () => {
  /* Atender `VOID_APPROVED` en el webhook no sirve de nada si la orden se
     queda clavada en APROBADA: el dinero se devolvió y el pedido seguiría
     figurando como cobrado. Esta es la única degradación permitida. */
  const ordersSource = read("src/lib/tarot-orders.js");
  const merge = ordersSource.slice(
    ordersSource.indexOf("function nextStatus("),
    ordersSource.indexOf("export async function markTarotOrderPaymentStarted")
  );
  assert.match(merge, /incomingStatus === "VOIDED" \? "VOIDED" : "APPROVED"/);
  /* Ninguna otra llegada degrada una venta confirmada. */
  assert.doesNotMatch(merge, /incomingStatus === "DECLINED"/);
  assert.match(merge, /FINAL_STATUSES\.has\(currentStatus\) && incomingStatus === "PENDING"/);
});

test("las variables nuevas están documentadas y las viejas ya no", () => {
  ["BOLD_BUTTON_IDENTITY_KEY_TEST",
    "BOLD_BUTTON_SECRET_KEY_TEST",
    "BOLD_BUTTON_IDENTITY_KEY_PRODUCTION",
    "BOLD_BUTTON_SECRET_KEY_PRODUCTION",
    "BOLD_ENVIRONMENT",
  ].forEach((key) => assert.match(envExample, new RegExp(`^${key}=`, "m")));
  assert.doesNotMatch(envExample, /^BOLD_API_KEY_/m);
  assert.doesNotMatch(envExample, /^BOLD_SECRET_KEY_/m);
});
