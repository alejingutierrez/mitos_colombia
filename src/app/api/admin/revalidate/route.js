import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export const runtime = "nodejs";

/**
 * Purga de caché a demanda, para cambios que sólo tocan la base de datos.
 *
 * Cambiar una imagen o un texto en Postgres no se ve en producción por sí solo:
 * la interna del mito está PRERENDERIZADA (`x-nextjs-prerender: 1`) y además el
 * dato pasa por `unstable_cache`. Son dos cachés distintas y hay que tumbar las
 * dos: `revalidateTag` sólo vacía la de datos y deja el HTML viejo servido por
 * el CDN hasta que expire la ventana de ISR.
 *
 *   POST /api/admin/revalidate
 *   Authorization: Basic base64(usuario:clave)
 *   { "slugs": ["bachue"], "paths": ["/mitos"], "tags": ["myth"] }
 *
 * Sin cuerpo purga las etiquetas por defecto. Cada slug purga además su ruta.
 */

const DEFAULT_TAGS = ["myth", "taxonomy"];
const MAX_ITEMS = 50;

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) return false;

  const credentials = Buffer.from(
    authHeader.split(" ")[1] || "",
    "base64"
  ).toString("utf-8");
  const separator = credentials.indexOf(":");
  if (separator < 0) return false;

  const username = credentials.slice(0, separator);
  const password = credentials.slice(separator + 1);
  return (
    username === (process.env.ADMIN_USERNAME || "admin") &&
    password === (process.env.ADMIN_PASSWORD || "admin")
  );
}

/** Sólo rutas internas: nada de `//host` ni de saltos con `..`. */
function cleanPath(value) {
  const path = String(value || "").trim();
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("..")) {
    return null;
  }
  return path;
}

function cleanSlug(value) {
  const slug = String(value || "")
    .trim()
    .toLowerCase();
  return /^[a-z0-9-]{1,120}$/.test(slug) ? slug : null;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))].slice(0, MAX_ITEMS);
}

export async function POST(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  let body = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const slugs = unique((body.slugs || []).map(cleanSlug));
  const tags = unique(
    (Array.isArray(body.tags) && body.tags.length ? body.tags : DEFAULT_TAGS).map(
      (tag) => String(tag || "").trim()
    )
  );
  const paths = unique([
    ...slugs.map((slug) => `/mitos/${slug}`),
    ...(body.paths || []).map(cleanPath),
  ]);

  if (
    (body.slugs && body.slugs.length && !slugs.length) ||
    (body.paths && body.paths.length && paths.length < slugs.length)
  ) {
    return NextResponse.json(
      { error: "Hay slugs o rutas con formato inválido" },
      { status: 400 }
    );
  }

  for (const tag of tags) revalidateTag(tag);
  // El `revalidatePath` es el que tumba el HTML prerenderizado; sin él la
  // página sigue sirviéndose del CDN aunque el dato ya esté fresco.
  for (const path of paths) revalidatePath(path);

  return NextResponse.json({
    revalidated: true,
    tags,
    paths,
    at: new Date().toISOString(),
  });
}
