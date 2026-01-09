#!/usr/bin/env node

/**
 * Script para ejecutar migración de vertical_images en PostgreSQL
 *
 * Uso: node scripts/migrate-vertical-images-pg.js
 */

import { sql } from "@vercel/postgres";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar variables de entorno
dotenv.config({ path: join(__dirname, "..", ".env.local") });

async function runMigration() {
  console.log("🚀 Iniciando migración de vertical_images en PostgreSQL...\n");

  try {
    // Verificar conexión
    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      throw new Error("POSTGRES_URL o DATABASE_URL no está configurada");
    }

    console.log("📡 Conectando a PostgreSQL...");

    // Crear tabla vertical_images
    console.log("\n📦 Creando tabla vertical_images...");
    await sql`
      CREATE TABLE IF NOT EXISTS vertical_images (
        id SERIAL PRIMARY KEY,
        entity_type TEXT NOT NULL,
        entity_id INTEGER NOT NULL,
        entity_name TEXT NOT NULL,
        entity_slug TEXT NOT NULL,
        base_prompt TEXT NOT NULL,
        custom_prompt TEXT,
        image_url TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;
    console.log("✓ Tabla vertical_images creada");

    // Crear índices
    console.log("\n📇 Creando índices...");
    await sql`
      CREATE INDEX IF NOT EXISTS idx_vertical_images_entity
      ON vertical_images(entity_type, entity_id)
    `;
    console.log("✓ Índice idx_vertical_images_entity creado");

    await sql`
      CREATE INDEX IF NOT EXISTS idx_vertical_images_type
      ON vertical_images(entity_type)
    `;
    console.log("✓ Índice idx_vertical_images_type creado");

    await sql`
      CREATE INDEX IF NOT EXISTS idx_vertical_images_created
      ON vertical_images(created_at DESC)
    `;
    console.log("✓ Índice idx_vertical_images_created creado");

    // Agregar campos a communities
    console.log("\n🏘️  Actualizando tabla communities...");
    try {
      await sql`ALTER TABLE communities ADD COLUMN IF NOT EXISTS image_prompt TEXT`;
      console.log("✓ Campo image_prompt agregado a communities");
    } catch (error) {
      if (error.message.includes("already exists")) {
        console.log("✓ Campo image_prompt ya existe en communities");
      } else {
        throw error;
      }
    }

    try {
      await sql`ALTER TABLE communities ADD COLUMN IF NOT EXISTS image_url TEXT`;
      console.log("✓ Campo image_url agregado a communities");
    } catch (error) {
      if (error.message.includes("already exists")) {
        console.log("✓ Campo image_url ya existe en communities");
      } else {
        throw error;
      }
    }

    // Agregar campos a tags
    console.log("\n🏷️  Actualizando tabla tags...");
    try {
      await sql`ALTER TABLE tags ADD COLUMN IF NOT EXISTS image_prompt TEXT`;
      console.log("✓ Campo image_prompt agregado a tags");
    } catch (error) {
      if (error.message.includes("already exists")) {
        console.log("✓ Campo image_prompt ya existe en tags");
      } else {
        throw error;
      }
    }

    try {
      await sql`ALTER TABLE tags ADD COLUMN IF NOT EXISTS image_url TEXT`;
      console.log("✓ Campo image_url agregado a tags");
    } catch (error) {
      if (error.message.includes("already exists")) {
        console.log("✓ Campo image_url ya existe en tags");
      } else {
        throw error;
      }
    }

    // Agregar campos a regions
    console.log("\n🗺️  Actualizando tabla regions...");
    try {
      await sql`ALTER TABLE regions ADD COLUMN IF NOT EXISTS image_prompt TEXT`;
      console.log("✓ Campo image_prompt agregado a regions");
    } catch (error) {
      if (error.message.includes("already exists")) {
        console.log("✓ Campo image_prompt ya existe en regions");
      } else {
        throw error;
      }
    }

    try {
      await sql`ALTER TABLE regions ADD COLUMN IF NOT EXISTS image_url TEXT`;
      console.log("✓ Campo image_url agregado a regions");
    } catch (error) {
      if (error.message.includes("already exists")) {
        console.log("✓ Campo image_url ya existe en regions");
      } else {
        throw error;
      }
    }

    // Verificar tablas creadas
    console.log("\n📊 Verificando migración...");
    const tables = await sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_name = 'vertical_images'
    `;

    if (tables.rows.length > 0) {
      console.log("✓ Tabla vertical_images verificada correctamente");
    } else {
      throw new Error("La tabla vertical_images no fue creada");
    }

    console.log("\n✅ Migración completada exitosamente!");

  } catch (error) {
    console.error("\n❌ Error en la migración:", error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

runMigration();
