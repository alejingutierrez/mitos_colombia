import { NextResponse } from "next/server";
import {
  addComment,
  createRateLimiter,
  detectSpam,
  getComments,
  hasRecentDuplicate,
  validateCommentInput,
} from "../../../lib/comments";

export const runtime = "nodejs";

/**
 * Comentarios públicos.
 *
 * GET  → los aprobados de un mito.
 * POST → guarda uno nuevo en `pending`; nadie lo ve hasta que se apruebe desde
 *        `/admin/comentarios`.
 *
 * Antes esta ruta era el único trozo del circuito que existía: se insertaba en
 * `pending` y no había NADA que moviera una fila a `approved`, así que los
 * comentarios recibidos no se publicaron nunca.
 */

/**
 * Tres comentarios cada diez minutos por IP.
 *
 * Vive en memoria del proceso: en serverless cada instancia lleva su propia
 * cuenta, así que esto frena a un bot suelto y no a uno distribuido. Para eso
 * haría falta un contador compartido, que este proyecto todavía no tiene.
 */
const rateLimiter = createRateLimiter({ limit: 3, windowMs: 10 * 60 * 1000 });

function clientKey(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "desconocido";
}

export async function GET(request) {
  const mythIdParam = request.nextUrl.searchParams.get("mythId");
  if (!mythIdParam) {
    return NextResponse.json({ error: "mythId es requerido" }, { status: 400 });
  }

  const mythId = Number.parseInt(mythIdParam, 10);
  if (!Number.isSafeInteger(mythId) || mythId <= 0) {
    return NextResponse.json({ error: "mythId inválido" }, { status: 400 });
  }

  try {
    // `throwOnError` a propósito: si la base falla queremos un 500 honesto y no
    // una lista vacía que se lee igual que "este mito no tiene comentarios".
    const comments = await getComments(mythId, { throwOnError: true });
    const response = NextResponse.json({ comments });
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=300"
    );
    return response;
  } catch (error) {
    console.error("[COMMENTS] GET failed:", error);
    return NextResponse.json(
      { error: "No pudimos cargar los comentarios en este momento." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "No pudimos leer el formulario. Intenta de nuevo." },
      { status: 400 }
    );
  }

  // Se MIRA el contador sin gastarlo: una persona que corrige tres veces su
  // comentario no puede quedar bloqueada diez minutos, y una petición que no
  // pasa la validación ni siquiera llega a la base.
  const visitor = clientKey(request);
  const limit = rateLimiter.check(visitor, { consume: false });
  if (!limit.allowed) {
    const retryAfter = Math.ceil(limit.retryAfterMs / 1000);
    return NextResponse.json(
      {
        error:
          "Recibimos varios comentarios tuyos seguidos. Espera unos minutos antes de enviar otro.",
      },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  const validation = validateCommentInput(body || {});
  if (!validation.ok) {
    return NextResponse.json(
      { error: validation.error, field: validation.field, code: validation.code },
      { status: 400 }
    );
  }

  const { mythId, authorName, authorEmail, content } = validation.value;

  // El honeypot puede venir con cualquiera de estos nombres; el formulario
  // público todavía no pinta el campo (lo mantiene otro agente), así que hoy
  // esta comprobación está lista y a la espera.
  const honeypot = body?.website ?? body?.url ?? body?.apellidos ?? "";
  const spam = detectSpam({ authorName, content, honeypot });
  if (spam.spam) {
    console.warn(`[COMMENTS] descartado por spam (${spam.code}) en mito ${mythId}`);
    if (spam.silent) {
      // Al bot se le responde como si hubiera entrado: decirle que lo pillamos
      // sólo le enseña a esquivar la trampa.
      return NextResponse.json({
        success: true,
        message: "Comentario enviado. Se publicará después de ser revisado.",
      });
    }
    return NextResponse.json(
      { error: spam.reason, field: "content", code: spam.code },
      { status: 400 }
    );
  }

  try {
    if (await hasRecentDuplicate({ mythId, content, withinMinutes: 60 })) {
      return NextResponse.json(
        { error: "Ya recibimos ese comentario. Gracias." },
        { status: 409 }
      );
    }

    // El cupo se gasta aquí: sólo cuentan los comentarios que de verdad entran.
    rateLimiter.check(visitor);
    const result = await addComment({ mythId, authorName, authorEmail, content });

    return NextResponse.json({
      success: true,
      message: "Comentario enviado. Se publicará después de ser revisado.",
      id: result?.id ?? null,
    });
  } catch (error) {
    // El error se registra Y se devuelve: antes un fallo aquí dejaba a la
    // persona con un mensaje genérico y a nadie mirando el log.
    console.error("[COMMENTS] POST failed:", error);
    return NextResponse.json(
      { error: "No pudimos guardar tu comentario. Intenta de nuevo en un momento." },
      { status: 500 }
    );
  }
}
