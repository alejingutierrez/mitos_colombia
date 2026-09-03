import { NextResponse } from "next/server";
import { getBoldConfiguration } from "../../../../../lib/bold";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Sonda temporal (2026-09-03).
 *
 * El checkout llama a `api.online.payments.bold.co` y Bold responde 403. La
 * llave configurada tiene la forma correcta (identidad, 43 caracteres), así
 * que quedan dos explicaciones: la cuenta no tiene ese producto habilitado, o
 * el desarrollo está apuntando a la API equivocada —Bold tiene dos—.
 *
 * Esta sonda manda la MISMA llave a las dos y devuelve sólo el código de
 * estado. Nunca el valor de la llave, nunca el cuerpo de la respuesta.
 *
 * Cómo leerlo:
 *  - 401/403 en las dos  → la llave no sirve para ninguna.
 *  - 403 en online, 400/422 en integraciones → la llave es de integraciones y
 *    el error es NUESTRO: estamos llamando a la API que no es.
 *  - 200/400 en online → el problema era otro.
 *
 * Un 400 o 422 cuenta como éxito de autenticación: significa que nos dejó
 * entrar y se quejó del cuerpo, que es exactamente lo que queremos saber.
 *
 * RETIRAR en cuanto se resuelva.
 */
async function probe(url, key, method = "GET", body) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  try {
    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `x-api-key ${key}`,
        ...(body && { "content-type": "application/json" }),
      },
      ...(body && { body: JSON.stringify(body) }),
      cache: "no-store",
      signal: controller.signal,
    });
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

  const [online, integraciones] = await Promise.all([
    probe("https://api.online.payments.bold.co/v1/payment/pse/banks", key),
    // Cuerpo deliberadamente incompleto: si autentica, se queja del cuerpo
    // (400/422) en vez de rechazarnos (401/403). No crea ningún cobro.
    probe(
      "https://integrations.api.bold.co/payments/app-checkout",
      key,
      "POST",
      { sonda: true }
    ),
  ]);

  return NextResponse.json(
    {
      entorno: configuration.environment,
      online_payments: online,
      integraciones: integraciones,
      lectura:
        "400/422 = la llave autentica y sólo falta el cuerpo. 401/403 = la llave no sirve ahí.",
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
