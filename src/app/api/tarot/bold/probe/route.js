import { NextResponse } from "next/server";
import { getBoldConfiguration } from "../../../../../lib/bold";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Sonda temporal (2026-09-03). RETIRAR en cuanto se resuelva el 403 de Bold.
 *
 * Qué ya está descartado, para no repetir trabajo:
 *  - La llave tiene la forma correcta (identidad, 43 caracteres) y el dueño la
 *    volvió a copiar del panel. El valor NO es el problema.
 *  - La misma llave da 403 en las dos APIs de Bold (online payments e
 *    integraciones), así que tampoco es que estemos llamando al producto que no
 *    es.
 *
 * Lo único sin verificar es si NUESTRO esquema de autenticación es el que Bold
 * espera. Esta sonda manda la MISMA llave ya configurada con cinco esquemas
 * distintos, y además prueba tres rutas por si la nuestra no existe.
 *
 * Todo es GET: no crea nada en Bold. Sólo se devuelve el CÓDIGO DE ESTADO de
 * cada intento — nunca el valor de la llave, nunca la cabecera completa, nunca
 * el cuerpo de la respuesta de Bold.
 */

const BASE_URL = "https://api.online.payments.bold.co";
const RUTA_ACTUAL = "/v1/payment/pse/banks";
const TIMEOUT_MS = 10_000;

async function intentar(headers, path = RUTA_ACTUAL) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "GET",
      headers,
      cache: "no-store",
      signal: controller.signal,
    });
    // A propósito NO se lee ni se devuelve el cuerpo.
    return { status: response.status };
  } catch (error) {
    return { status: null, fallo: error?.name || "error" };
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET() {
  const configuration = getBoldConfiguration();
  if (!configuration.ready) {
    return NextResponse.json({ error: "bold_not_ready" }, { status: 503 });
  }
  const key = configuration.apiKey;
  const keyBase64 = Buffer.from(key, "utf8").toString("base64");

  const esquemas = [
    {
      esquema: "1 · Authorization: x-api-key <llave> (el actual)",
      headers: { Authorization: `x-api-key ${key}` },
    },
    {
      esquema: "2 · cabecera propia x-api-key: <llave>",
      headers: { "x-api-key": key },
    },
    {
      esquema: "3 · Authorization: Bearer <llave>",
      headers: { Authorization: `Bearer ${key}` },
    },
    {
      esquema: "4 · Authorization: <llave> (sin prefijo)",
      headers: { Authorization: key },
    },
    {
      esquema: "5 · Authorization: x-api-key <llave en base64>",
      headers: { Authorization: `x-api-key ${keyBase64}` },
    },
  ];

  const rutas = [
    { ruta: RUTA_ACTUAL, nota: "la actual" },
    { ruta: "/v1/payment/methods", nota: "alternativa" },
    { ruta: "/v1/payments/pse/banks", nota: "alternativa (plural)" },
  ];

  const cabeceraEsquema1 = esquemas[0].headers;

  const [resultadosEsquemas, resultadosRutas] = await Promise.all([
    Promise.all(
      esquemas.map(async ({ esquema, headers }) => ({
        esquema,
        ...(await intentar(headers)),
      }))
    ),
    Promise.all(
      rutas.map(async ({ ruta, nota }) => ({
        ruta,
        nota,
        esquema: "1 · Authorization: x-api-key <llave>",
        ...(await intentar(cabeceraEsquema1, ruta)),
      }))
    ),
  ]);

  /* Endpoints GET de API Integrations, tomados de su documentación: no piden
     cuerpo ni datáfono, así que sirven para saber si la llave es de ESE
     producto. Si responden 200, las llaves son de API Integrations y el
     checkout web está construido contra el producto equivocado. */
  const base = "https://integrations.api.bold.co";
  const [metodos, terminales] = await Promise.all([
    probe(`${base}/payments/payment-methods`, key),
    probe(`${base}/payments/binded-terminals`, key),
  ]);

  return NextResponse.json(
    {
      entorno: configuration.environment,
      api_integrations: { metodos_de_pago: metodos, terminales_vinculadas: terminales },
      endpoint: `${BASE_URL}${RUTA_ACTUAL}`,
      esquemas_de_autenticacion: resultadosEsquemas,
      rutas_con_esquema_1: resultadosRutas,
      interpretacion:
        "Si un intento devuelve algo distinto de 403 —un 200, o incluso un 400/404/422— significa que Bold sí acepta esa forma de autenticarse y el problema es NUESTRO esquema o NUESTRA ruta, no la llave ni la cuenta; si todos siguen en 403, la llave no está habilitada para este producto y hay que reclamarle a Bold.",
      nota: "Sonda temporal: sólo devuelve códigos de estado. Retirar esta ruta cuando se resuelva.",
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
