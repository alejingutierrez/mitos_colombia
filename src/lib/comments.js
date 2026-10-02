import { unstable_cache } from "next/cache";
import { getSqlClient, getSqliteDb, getSqliteDbWritable, isPostgres } from "./db";
import { withRetry } from "./db-resilience";
import {
  DEFAULT_COMMENT_STATUS,
  groupCommentsByMythId,
  normalizeCommentStatus,
  serializeAdminComment,
  serializePublicComment,
} from "./comments-validation";

/**
 * Consultas del circuito de comentarios.
 *
 * Las reglas puras (validación, spam, transiciones de estado) viven en
 * `comments-validation.js`; aquí sólo está lo que toca la base de datos.
 *
 * El esquema NO se modifica desde aquí: la tabla `comments` ya existe en
 * producción con `status TEXT NOT NULL DEFAULT 'pending'`. A diferencia de
 * `contact.js`, este módulo no dispara DDL de creación en cada llamada — sólo
 * lee y escribe filas. Lo deja clavado `scripts/comments.test.mjs`.
 */

export {
  COMMENT_LIMITS,
  COMMENT_STATUSES,
  COMMENT_STATUS_LABELS,
  DEFAULT_COMMENT_STATUS,
  canTransitionComment,
  createRateLimiter,
  detectSpam,
  normalizeCommentStatus,
  validateCommentInput,
} from "./comments-validation";

export const COMMENTS_CACHE_TAG = "comments";

const ONE_HOUR = 60 * 60;

/** Techo de seguridad del render en servidor. Ver `getApprovedCommentsByMyth`. */
const MAX_PRERENDERED_COMMENTS = 5000;

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
}

/* ------------------------------------------------------------------ *
 * Lectura pública
 * ------------------------------------------------------------------ */

function getCommentsSqlite(mythId) {
  const db = getSqliteDb();
  return db
    .prepare(
      `SELECT id, author_name, content, created_at
       FROM comments
       WHERE myth_id = ? AND status = 'approved'
       ORDER BY created_at DESC`
    )
    .all(mythId);
}

async function getCommentsPostgres(mythId) {
  const sql = getSqlClient();
  const result = await sql.query(
    `SELECT id, author_name, content, created_at
     FROM comments
     WHERE myth_id = $1 AND status = 'approved'
     ORDER BY created_at DESC`,
    [mythId]
  );
  return result.rows;
}

/**
 * Comentarios aprobados de un mito.
 *
 * Por defecto degrada a lista vacía si la base falla, porque quien llama suele
 * ser una página que no debe caerse entera por los comentarios. La ruta de API
 * pasa `throwOnError: true` para poder responder 500 en vez de fingir que el
 * mito no tiene comentarios: un fallo silencioso aquí es exactamente lo que
 * dejó dos comentarios invisibles durante meses.
 */
export async function getComments(mythId, { throwOnError = false } = {}) {
  try {
    const rows = isPostgres()
      ? await withRetry(() => getCommentsPostgres(mythId))
      : getCommentsSqlite(mythId);
    return rows.map(serializePublicComment);
  } catch (error) {
    console.error("[COMMENTS] getComments failed:", error);
    if (throwOnError) throw error;
    return [];
  }
}

/* ------------------------------------------------------------------ *
 * Lectura pública para el render en servidor (SEO)
 * ------------------------------------------------------------------ */

function getApprovedCommentsSqlite() {
  const db = getSqliteDb();
  return db
    .prepare(
      `SELECT id, myth_id, author_name, content, created_at
       FROM comments
       WHERE status = 'approved'
       ORDER BY created_at DESC
       LIMIT ?`
    )
    .all(MAX_PRERENDERED_COMMENTS);
}

async function getApprovedCommentsPostgres() {
  const sql = getSqlClient();
  const result = await sql.query(
    `SELECT id, myth_id, author_name, content, created_at
     FROM comments
     WHERE status = 'approved'
     ORDER BY created_at DESC
     LIMIT $1`,
    [MAX_PRERENDERED_COMMENTS]
  );
  return result.rows;
}

const getApprovedCommentsByMythCached = unstable_cache(
  async () => {
    try {
      const rows = isPostgres()
        ? await withRetry(() => getApprovedCommentsPostgres())
        : getApprovedCommentsSqlite();

      if (rows.length >= MAX_PRERENDERED_COMMENTS) {
        console.warn(
          `[COMMENTS] Se alcanzó el techo de ${MAX_PRERENDERED_COMMENTS} comentarios aprobados: ` +
            "hay que pasar el render en servidor a una consulta por mito."
        );
      }

      return groupCommentsByMythId(rows);
    } catch (error) {
      // En build preferimos una página sin comentarios a un build rojo: el
      // artículo es el contenido, los comentarios son el añadido.
      console.error("[COMMENTS] getApprovedCommentsByMyth failed:", error);
      return {};
    }
  },
  ["approved-comments-by-myth"],
  { revalidate: ONE_HOUR, tags: [COMMENTS_CACHE_TAG] }
);

/**
 * Mapa `{ [myth_id]: comentarios[] }` de TODOS los aprobados, en una sola
 * consulta cacheada.
 *
 * Es una consulta global y no una por mito a propósito: `/mitos/[slug]` tiene
 * `generateStaticParams`, así que una consulta por página serían ~600 viajes a
 * Neon en cada build, y este proyecto ya tiene código para el error de cuota
 * (`isQuotaError`) porque esa pared existe. Con el volumen real (0 aprobados
 * hoy) el mapa completo pesa nada. Si algún día se pasa de
 * `MAX_PRERENDERED_COMMENTS`, el aviso del log lo dice y toca invertir la
 * consulta.
 */
export async function getApprovedCommentsByMyth() {
  return getApprovedCommentsByMythCached();
}

/** Azúcar para la página del mito: `initialComments` ya serializados. */
export async function getApprovedCommentsForMyth(mythId) {
  const grouped = await getApprovedCommentsByMyth();
  return grouped[String(mythId)] || [];
}

/* ------------------------------------------------------------------ *
 * Escritura pública
 * ------------------------------------------------------------------ */

function addCommentSqlite({ mythId, authorName, authorEmail, content }) {
  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `INSERT INTO comments (myth_id, author_name, author_email, content, status)
     VALUES (?, ?, ?, ?, ?)
     RETURNING id`
  );
  return stmt.get(mythId, authorName, authorEmail, content, DEFAULT_COMMENT_STATUS);
}

async function addCommentPostgres({ mythId, authorName, authorEmail, content }) {
  const sql = getSqlClient();
  const result = await sql.query(
    `INSERT INTO comments (myth_id, author_name, author_email, content, status)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id`,
    [mythId, authorName, authorEmail, content, DEFAULT_COMMENT_STATUS]
  );
  return result.rows[0];
}

/**
 * Guarda un comentario nuevo, siempre en `pending`.
 *
 * `authorEmail` se guarda como cadena vacía cuando no viene: en producción la
 * columna acepta NULL, pero el `schema.sql` de instalaciones nuevas la declara
 * NOT NULL y no vamos a dejar el insert dependiendo de cuál de los dos esquemas
 * tenga enfrente.
 */
export async function addComment({ mythId, authorName, authorEmail, content }) {
  const payload = {
    mythId,
    authorName,
    authorEmail: authorEmail || "",
    content,
  };
  if (isPostgres()) {
    return addCommentPostgres(payload);
  }
  return addCommentSqlite(payload);
}

/**
 * ¿Ya recibimos este mismo texto para este mismo mito hace poco?
 *
 * Un bot que reintenta y una persona que le da dos veces al botón producen lo
 * mismo: filas duplicadas que alguien tiene que moderar a mano.
 */
export async function hasRecentDuplicate({ mythId, content, withinMinutes = 60 }) {
  const minutes = clampNumber(withinMinutes, 1, 60 * 24 * 7, 60);

  try {
    if (isPostgres()) {
      const sql = getSqlClient();
      const result = await withRetry(() =>
        sql.query(
          `SELECT id FROM comments
           WHERE myth_id = $1 AND content = $2
             AND created_at > NOW() - ($3 || ' minutes')::interval
           LIMIT 1`,
          [mythId, content, String(minutes)]
        )
      );
      return result.rows.length > 0;
    }

    const db = getSqliteDb();
    const row = db
      .prepare(
        `SELECT id FROM comments
         WHERE myth_id = ? AND content = ?
           AND created_at > datetime('now', ?)
         LIMIT 1`
      )
      .get(mythId, content, `-${minutes} minutes`);
    return Boolean(row);
  } catch (error) {
    // Si la comprobación falla no bloqueamos el comentario: como mucho entra un
    // duplicado, que es mejor que perder el comentario de una persona.
    console.error("[COMMENTS] hasRecentDuplicate failed:", error);
    return false;
  }
}

/* ------------------------------------------------------------------ *
 * Moderación
 * ------------------------------------------------------------------ */

function listCommentsSqlite({ status, limit, offset }) {
  const db = getSqliteDb();
  const where = status ? "WHERE c.status = ?" : "";
  const params = status ? [status, limit, offset] : [limit, offset];
  return db
    .prepare(
      `SELECT c.id, c.myth_id, c.author_name, c.author_email, c.content,
              c.status, c.created_at, m.slug AS myth_slug, m.title AS myth_title
       FROM comments c
       LEFT JOIN myths m ON m.id = c.myth_id
       ${where}
       ORDER BY c.created_at DESC
       LIMIT ? OFFSET ?`
    )
    .all(...params);
}

async function listCommentsPostgres({ status, limit, offset }) {
  const sql = getSqlClient();
  const values = [];
  let where = "";
  if (status) {
    values.push(status);
    where = `WHERE c.status = $${values.length}`;
  }
  values.push(limit);
  const limitIndex = values.length;
  values.push(offset);
  const offsetIndex = values.length;

  const result = await sql.query(
    `SELECT c.id, c.myth_id, c.author_name, c.author_email, c.content,
            c.status, c.created_at, m.slug AS myth_slug, m.title AS myth_title
     FROM comments c
     LEFT JOIN myths m ON m.id = c.myth_id
     ${where}
     ORDER BY c.created_at DESC
     LIMIT $${limitIndex} OFFSET $${offsetIndex}`,
    values
  );
  return result.rows;
}

/** Listado del panel. `status` nulo o "all" trae todos. */
export async function listComments({ status, limit = 50, offset = 0 } = {}) {
  const safeStatus = normalizeCommentStatus(status);
  const limitValue = clampNumber(limit, 1, 200, 50);
  const offsetValue = clampNumber(offset, 0, 10000, 0);
  const params = { status: safeStatus, limit: limitValue, offset: offsetValue };

  const rows = isPostgres()
    ? await withRetry(() => listCommentsPostgres(params))
    : listCommentsSqlite(params);

  return rows.map(serializeAdminComment);
}

export async function getCommentStats() {
  const totals = { total: 0, pending: 0, approved: 0, rejected: 0 };

  const rows = isPostgres()
    ? (
        await withRetry(() =>
          getSqlClient().query(
            `SELECT status, COUNT(*)::int AS total FROM comments GROUP BY status`
          )
        )
      ).rows
    : getSqliteDb()
        .prepare(`SELECT status, COUNT(*) AS total FROM comments GROUP BY status`)
        .all();

  for (const row of rows) {
    const status = normalizeCommentStatus(row.status);
    const count = Number(row.total) || 0;
    totals.total += count;
    if (status) totals[status] = count;
  }

  return totals;
}

async function getCommentByIdPostgres(id) {
  const sql = getSqlClient();
  const result = await sql.query(
    `SELECT c.id, c.myth_id, c.status, m.slug AS myth_slug
     FROM comments c
     LEFT JOIN myths m ON m.id = c.myth_id
     WHERE c.id = $1`,
    [id]
  );
  return result.rows[0] || null;
}

function getCommentByIdSqlite(id) {
  const db = getSqliteDb();
  return (
    db
      .prepare(
        `SELECT c.id, c.myth_id, c.status, m.slug AS myth_slug
         FROM comments c
         LEFT JOIN myths m ON m.id = c.myth_id
         WHERE c.id = ?`
      )
      .get(id) || null
  );
}

export async function getCommentById(id) {
  if (isPostgres()) {
    return withRetry(() => getCommentByIdPostgres(id));
  }
  return getCommentByIdSqlite(id);
}

/**
 * Mueve un comentario de estado.
 *
 * Devuelve también el slug del mito para que la ruta pueda purgar el HTML
 * prerenderizado: sin `revalidatePath` la aprobación no se ve hasta que expire
 * el ISR de una hora.
 */
export async function updateCommentStatus(id, status) {
  const safeStatus = normalizeCommentStatus(status);
  if (!safeStatus) {
    throw new Error("Estado inválido");
  }

  const existing = await getCommentById(id);
  if (!existing) {
    throw new Error("Comentario no encontrado");
  }

  if (isPostgres()) {
    const sql = getSqlClient();
    await withRetry(() =>
      sql.query(`UPDATE comments SET status = $1 WHERE id = $2`, [safeStatus, id])
    );
  } else {
    const db = getSqliteDbWritable();
    db.prepare(`UPDATE comments SET status = ? WHERE id = ?`).run(safeStatus, id);
  }

  return {
    id: existing.id,
    myth_id: existing.myth_id,
    myth_slug: existing.myth_slug || null,
    previous_status: existing.status,
    status: safeStatus,
  };
}

export async function deleteComment(id) {
  const existing = await getCommentById(id);
  if (!existing) {
    throw new Error("Comentario no encontrado");
  }

  if (isPostgres()) {
    const sql = getSqlClient();
    await withRetry(() => sql.query(`DELETE FROM comments WHERE id = $1`, [id]));
  } else {
    const db = getSqliteDbWritable();
    db.prepare(`DELETE FROM comments WHERE id = ?`).run(id);
  }

  return {
    id: existing.id,
    myth_id: existing.myth_id,
    myth_slug: existing.myth_slug || null,
    status: existing.status,
  };
}
