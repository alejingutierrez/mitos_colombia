import { NextResponse } from "next/server";
import { addContactMessage } from "../../../lib/contact";
import { serializeContactSubmission } from "../../../lib/contact-validation";

export const runtime = "nodejs";

/**
 * POST /api/contact
 *
 * Acepta las dos formas:
 *  - Tres puertas: `{ intent, ...campos de la puerta, name, email }`.
 *  - Heredada: `{ name, email, subject, message }` (sin `intent`).
 *
 * En ambos casos termina en las mismas cuatro columnas de `contact_messages`.
 * La validación del servidor es la que manda; la del cliente es cortesía.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "No pudimos leer el formulario. Inténtalo de nuevo." },
      { status: 400 }
    );
  }

  const result = serializeContactSubmission(body || {});

  if (!result.ok) {
    // `error` es el primer problema en orden visual: quien sólo lea
    // `payload.error` (el contrato viejo) sigue recibiendo una frase útil.
    return NextResponse.json(
      { error: result.error, field: result.field, errors: result.errors },
      { status: 400 }
    );
  }

  try {
    const saved = await addContactMessage(result.value);
    return NextResponse.json({
      success: true,
      message: "Gracias por escribirnos. Te responderemos pronto.",
      subject: result.value.subject,
      id: saved.id,
    });
  } catch (error) {
    console.error("Error creating contact message:", error);
    return NextResponse.json(
      { error: "No fue posible enviar el mensaje." },
      { status: 500 }
    );
  }
}
