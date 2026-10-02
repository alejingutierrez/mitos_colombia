-- Migración para crear tabla vertical_images
-- Esta tabla almacena imágenes verticales (9:16) para uso editorial
-- de mitos, comunidades, categorías y regiones

-- SQLite version
CREATE TABLE IF NOT EXISTS vertical_images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entity_type TEXT NOT NULL, -- 'myth', 'community', 'category', 'region'
  entity_id INTEGER NOT NULL,
  entity_name TEXT NOT NULL,
  entity_slug TEXT NOT NULL,
  base_prompt TEXT NOT NULL, -- Prompt base para todas las entidades de este tipo
  custom_prompt TEXT, -- Prompt personalizado para esta entidad específica
  image_url TEXT, -- URL de la imagen en Vercel Blob
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Índices para búsquedas rápidas
CREATE INDEX IF NOT EXISTS idx_vertical_images_entity ON vertical_images(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_vertical_images_type ON vertical_images(entity_type);
CREATE INDEX IF NOT EXISTS idx_vertical_images_created ON vertical_images(created_at DESC);

-- PostgreSQL version (comentada por defecto)
-- CREATE TABLE IF NOT EXISTS vertical_images (
--   id SERIAL PRIMARY KEY,
--   entity_type TEXT NOT NULL,
--   entity_id INTEGER NOT NULL,
--   entity_name TEXT NOT NULL,
--   entity_slug TEXT NOT NULL,
--   base_prompt TEXT NOT NULL,
--   custom_prompt TEXT,
--   image_url TEXT,
--   created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
--   updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
-- );
--
-- CREATE INDEX IF NOT EXISTS idx_vertical_images_entity ON vertical_images(entity_type, entity_id);
-- CREATE INDEX IF NOT EXISTS idx_vertical_images_type ON vertical_images(entity_type);
-- CREATE INDEX IF NOT EXISTS idx_vertical_images_created ON vertical_images(created_at DESC);
