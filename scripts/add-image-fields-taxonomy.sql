-- Migración para agregar campos de imagen a tablas de taxonomía
-- Esto permitirá generar imágenes para communities, tags (categorías) y regions

-- Agregar campos a communities
ALTER TABLE communities ADD COLUMN image_prompt TEXT;
ALTER TABLE communities ADD COLUMN image_url TEXT;

-- Agregar campos a tags (categorías)
ALTER TABLE tags ADD COLUMN image_prompt TEXT;
ALTER TABLE tags ADD COLUMN image_url TEXT;

-- Agregar campos a regions
ALTER TABLE regions ADD COLUMN image_prompt TEXT;
ALTER TABLE regions ADD COLUMN image_url TEXT;
