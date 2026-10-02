-- Tríptico por mito: la tercera escena (cuadrada 1:1). Versión SQLite.
--
--   1 entrada  · 16:9 · el personaje llega a su mundo  -> myths.image_url
--   2 acto     · 9:16 · el momento por el que se cuenta -> vertical_images
--   3 huella   · 1:1  · lo que queda cuando ya no está  -> myths.square_image_url
--
-- SQLite no tiene `ADD COLUMN IF NOT EXISTS`: si la columna ya existe la
-- sentencia falla con "duplicate column name" y se puede ignorar sin riesgo.

ALTER TABLE myths ADD COLUMN square_image_url TEXT;
ALTER TABLE myths ADD COLUMN image_prompt_square TEXT;
