-- Migración PostgreSQL para crear tabla vertical_images
-- Esta tabla almacena imágenes verticales (9:16) para uso editorial
-- de mitos, comunidades, categorías y regiones

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
);

-- Índices para búsquedas rápidas
CREATE INDEX IF NOT EXISTS idx_vertical_images_entity ON vertical_images(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_vertical_images_type ON vertical_images(entity_type);
CREATE INDEX IF NOT EXISTS idx_vertical_images_created ON vertical_images(created_at DESC);

-- Agregar campos a taxonomías si no existen
ALTER TABLE communities ADD COLUMN IF NOT EXISTS image_prompt TEXT;
ALTER TABLE communities ADD COLUMN IF NOT EXISTS image_url TEXT;

ALTER TABLE tags ADD COLUMN IF NOT EXISTS image_prompt TEXT;
ALTER TABLE tags ADD COLUMN IF NOT EXISTS image_url TEXT;

ALTER TABLE regions ADD COLUMN IF NOT EXISTS image_prompt TEXT;
ALTER TABLE regions ADD COLUMN IF NOT EXISTS image_url TEXT;
