#!/usr/bin/env node
// One-off: corrige la entrada seo_pages del home cuyo canonical_path apunta
// a una URL 404. Ejecutar: `node scripts/fix-home-canonical.js`

const { config } = require("dotenv");
config({ path: ".env.local" });

const { Pool } = require("pg");

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL no está definida. Revisa .env.local.");
    process.exit(1);
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  const before = await pool.query(
    `SELECT page_type, slug, canonical_path, meta_title
     FROM seo_pages
     WHERE page_type = 'page' AND slug = 'home'
     LIMIT 1`
  );

  if (before.rowCount === 0) {
    console.log("No existe fila seo_pages para page_type='page' slug='home'.");
    console.log("No hay nada que corregir (el canonical saldrá del fallback del código).");
    await pool.end();
    return;
  }

  console.log("Antes:", before.rows[0]);

  const after = await pool.query(
    `UPDATE seo_pages
     SET canonical_path = '/', updated_at = NOW()
     WHERE page_type = 'page' AND slug = 'home'
     RETURNING page_type, slug, canonical_path, meta_title`
  );

  console.log("Después:", after.rows[0]);
  console.log(`Filas actualizadas: ${after.rowCount}`);

  await pool.end();
}

main().catch((error) => {
  console.error("Error ejecutando el script:", error);
  process.exit(1);
});
