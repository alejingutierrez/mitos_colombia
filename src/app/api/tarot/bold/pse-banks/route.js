import { NextResponse } from "next/server";
import { fetchBoldPseBanks, getBoldConfiguration } from "../../../../../lib/bold";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NO_STORE = { "Cache-Control": "no-store" };

export async function GET() {
  const configuration = getBoldConfiguration();
  if (!configuration.ready) {
    return NextResponse.json(
      { error: "bold_not_ready", banks: [] },
      { status: 503, headers: NO_STORE }
    );
  }

  try {
    const banks = await fetchBoldPseBanks({ apiKey: configuration.apiKey });
    return NextResponse.json({ banks }, { headers: NO_STORE });
  } catch (error) {
    /* Diagnóstico temporal (2026-09-03): Bold responde 403 y hace falta saber
       si la llave configurada es la de identidad o la secreta —están cruzadas
       con facilidad y producen justamente un 403—. Se registran SÓLO la
       longitud y los cuatro primeros caracteres: nunca el valor. Retirar
       cuando el pago quede funcionando. */
    const k = String(configuration.apiKey ?? "");
    console.error("Bold PSE banks lookup failed", {
      code: error?.code || "bold_banks_failed",
      status: error?.status || 500,
      entorno: configuration.environment,
      llaveLongitud: k.length,
      llavePrefijo: k.slice(0, 4),
      formaEsperada: "identidad=43, secreta=22",
      detalleBold: JSON.stringify(error?.details ?? []).slice(0, 300),
    });
    return NextResponse.json(
      { error: "bold_banks_failed", banks: [] },
      { status: 502, headers: NO_STORE }
    );
  }
}
