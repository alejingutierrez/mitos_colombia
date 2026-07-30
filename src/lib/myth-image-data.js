import "server-only";
import { getSqlClient, getSqliteDb, isPostgres } from "./db";
import { isMythImageVariantCurrent } from "./myth-images";

function mythIds(rows) {
  return [
    ...new Set(
      (rows || [])
        .map((row) => Number(row?.id))
        .filter((id) => Number.isInteger(id) && id > 0)
    ),
  ];
}

async function verticalImagesPostgres(ids) {
  const sql = getSqlClient();
  const result = await sql.query(
    `
      SELECT DISTINCT ON (entity_id)
        vi.entity_id,
        vi.image_url,
        COALESCE(vi.updated_at, vi.created_at) AS variant_updated_at,
        myths.updated_at AS source_updated_at
      FROM vertical_images vi
      JOIN myths ON myths.id = vi.entity_id
      WHERE vi.entity_type = 'myth'
        AND vi.entity_id = ANY($1::int[])
        AND NULLIF(TRIM(vi.image_url), '') IS NOT NULL
      ORDER BY vi.entity_id, vi.updated_at DESC NULLS LAST, vi.created_at DESC NULLS LAST
    `,
    [ids]
  );
  return result.rows || [];
}

function verticalImagesSqlite(ids) {
  const db = getSqliteDb();
  const placeholders = ids.map(() => "?").join(", ");
  return db
    .prepare(
      `
        SELECT
          vi.entity_id,
          vi.image_url,
          COALESCE(vi.updated_at, vi.created_at) AS variant_updated_at,
          myths.updated_at AS source_updated_at
        FROM vertical_images vi
        JOIN myths ON myths.id = vi.entity_id
        JOIN (
          SELECT entity_id, MAX(id) AS latest_id
          FROM vertical_images
          WHERE entity_type = 'myth'
            AND entity_id IN (${placeholders})
            AND image_url IS NOT NULL
            AND TRIM(image_url) != ''
          GROUP BY entity_id
        ) latest ON latest.latest_id = vi.id
      `
    )
    .all(...ids);
}

/**
 * Adjunta ambas orientaciones sin reemplazar la imagen horizontal histórica.
 * Si una instalación antigua todavía no tiene `vertical_images`, devuelve los
 * registros intactos para mantener operativo el fallback de SQLite.
 */
export async function attachMythImageVariants(rows = []) {
  if (!Array.isArray(rows) || rows.length === 0) return rows || [];
  const ids = mythIds(rows);
  let verticalRows = [];

  if (ids.length) {
    try {
      verticalRows = isPostgres()
        ? await verticalImagesPostgres(ids)
        : verticalImagesSqlite(ids);
    } catch (error) {
      console.error("[myth-images] vertical variants unavailable:", error);
    }
  }

  const verticalById = new Map(
    verticalRows
      .filter((row) =>
        isMythImageVariantCurrent({
          variantUpdatedAt: row.variant_updated_at,
          sourceUpdatedAt: row.source_updated_at,
        })
      )
      .map((row) => [Number(row.entity_id), row.image_url])
  );

  return rows.map((row) => ({
    ...row,
    landscape_image_url: row.landscape_image_url || row.image_url || null,
    vertical_image_url:
      row.vertical_image_url || verticalById.get(Number(row.id)) || null,
  }));
}
