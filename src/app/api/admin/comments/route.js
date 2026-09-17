import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import {
  COMMENTS_CACHE_TAG,
  deleteComment,
  getCommentStats,
  listComments,
  normalizeCommentStatus,
  updateCommentStatus,
} from "../../../../lib/comments";

export const runtime = "nodejs";

/**
 * Moderación de comentarios.
 *
 *   GET    /api/admin/comments?status=pending    → listado + conteos
 *   PATCH  /api/admin/comments  { id, status }   → aprobar / rechazar / devolver
 *   DELETE /api/admin/comments  { id }           → borrar
 *
 * Es la mitad que faltaba del circuito: el formulario público insertaba en
 * `pending` y no existía ninguna ruta, script ni pantalla que moviera una fila
 * a `approved`.
 *
 * Cada mutación purga las DOS cachés, como la ruta de `revalidate`: la etiqueta
 * de datos (`comments`, que alimenta el render en servidor) y el HTML
 * prerenderizado de `/mitos/<slug>`. Con sólo la etiqueta, la aprobación no se
 * vería hasta que expirara el ISR de una hora.
 */

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) return false;

  const credentials = Buffer.from(
    authHeader.split(" ")[1] || "",
    "base64"
  ).toString("utf-8");
  const separator = credentials.indexOf(":");
  if (separator < 0) return false;

  // Se corta en el PRIMER ":": una contraseña que lo contenga no debe romper el
  // login (`split(":")` la partiría en dos).
  const username = credentials.slice(0, separator);
  const password = credentials.slice(separator + 1);
  return (
    username === (process.env.ADMIN_USERNAME || "admin") &&
    password === (process.env.ADMIN_PASSWORD || "admin")
  );
}

function purgeCaches(slug) {
  revalidateTag(COMMENTS_CACHE_TAG);
  if (slug) revalidatePath(`/mitos/${slug}`);
}

async function readId(request) {
  let body = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }
  const parsed = Number.parseInt(body?.id, 10);
  return {
    body,
    id: Number.isSafeInteger(parsed) && parsed > 0 ? parsed : null,
  };
}

export async function GET(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const params = request.nextUrl.searchParams;
    const [comments, stats] = await Promise.all([
      listComments({
        status: params.get("status"),
        limit: params.get("limit"),
        offset: params.get("offset"),
      }),
      getCommentStats(),
    ]);

    return NextResponse.json({ comments, stats });
  } catch (error) {
    console.error("[ADMIN COMMENTS] GET failed:", error);
    return NextResponse.json(
      { error: "No se pudieron cargar los comentarios." },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { body, id } = await readId(request);
  if (!id) {
    return NextResponse.json({ error: "ID inválido." }, { status: 400 });
  }

  const status = normalizeCommentStatus(body?.status);
  if (!status) {
    return NextResponse.json(
      { error: "Estado inválido. Usa pending, approved o rejected." },
      { status: 400 }
    );
  }

  try {
    const updated = await updateCommentStatus(id, status);
    purgeCaches(updated.myth_slug);
    return NextResponse.json({ success: true, comment: updated });
  } catch (error) {
    const notFound = /no encontrado/i.test(error?.message || "");
    if (!notFound) console.error("[ADMIN COMMENTS] PATCH failed:", error);
    return NextResponse.json(
      { error: error?.message || "No se pudo actualizar el comentario." },
      { status: notFound ? 404 : 500 }
    );
  }
}

export async function DELETE(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { id } = await readId(request);
  if (!id) {
    return NextResponse.json({ error: "ID inválido." }, { status: 400 });
  }

  try {
    const removed = await deleteComment(id);
    purgeCaches(removed.myth_slug);
    return NextResponse.json({ success: true, comment: removed });
  } catch (error) {
    const notFound = /no encontrado/i.test(error?.message || "");
    if (!notFound) console.error("[ADMIN COMMENTS] DELETE failed:", error);
    return NextResponse.json(
      { error: error?.message || "No se pudo borrar el comentario." },
      { status: notFound ? 404 : 500 }
    );
  }
}
