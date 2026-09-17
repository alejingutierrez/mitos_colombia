#!/usr/bin/env node

/**
 * Crea la tabla `myth_narrations` en PostgreSQL (narraciones de ElevenLabs).
 *
 * Uso: node scripts/migrate-myth-narrations-pg.mjs
 *
 * Idempotente: sólo CREATE ... IF NOT EXISTS. No toca ninguna tabla existente.
 */

import { sql } from "@vercel/postgres";
import dotenv from "dotenv";
import { dirname, join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, "..", ".env.local") });
dotenv.config({ path: join(__dirname, "..", ".env") });

if (!process.env.POSTGRES_URL && process.env.DATABASE_URL) {
  process.env.POSTGRES_URL = process.env.DATABASE_URL;
}

async function main() {
  if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL o DATABASE_URL no está configurada");
  }

  console.log("📦 Creando tabla myth_narrations...");
  await sql`
    CREATE TABLE IF NOT EXISTS myth_narrations (
      id SERIAL PRIMARY KEY,
      myth_id INTEGER NOT NULL,
      myth_slug TEXT NOT NULL,
      audio_url TEXT NOT NULL,
      master_url TEXT,
      voice_id TEXT NOT NULL,
      voice_name TEXT NOT NULL,
      model_id TEXT NOT NULL,
      render_hash TEXT NOT NULL,
      char_count INTEGER NOT NULL,
      duration_seconds DOUBLE PRECISION,
      word_timings JSONB,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      UNIQUE (myth_slug, voice_id)
    )
  `;
  console.log("✓ Tabla lista");

  await sql`CREATE INDEX IF NOT EXISTS idx_myth_narrations_slug ON myth_narrations(myth_slug)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_myth_narrations_myth ON myth_narrations(myth_id)`;
  console.log("✓ Índices listos");

  const check = await sql`
    SELECT column_name FROM information_schema.columns
    WHERE table_name = 'myth_narrations' ORDER BY ordinal_position
  `;
  console.log(`\n✅ myth_narrations (${check.rows.length} columnas): ${check.rows.map((r) => r.column_name).join(", ")}`);
}

main().catch((error) => {
  console.error("\n❌ Error en la migración:", error.message);
  process.exit(1);
});
