-- Tríptico por mito: la tercera escena (cuadrada 1:1).
--
-- El sistema visual de cada mito son tres escenas distintas, una por formato:
--   1 entrada  · 16:9 · el personaje llega a su mundo  -> myths.image_url
--   2 acto     · 9:16 · el momento por el que se cuenta -> vertical_images
--   3 huella   · 1:1  · lo que queda cuando ya no está  -> myths.square_image_url
--
-- La cuadrada se guarda como columna del mito, igual que la apaisada, porque
-- es específica del mito y no se comparte con regiones ni comunidades. La
-- vertical sigue en `vertical_images` porque esa tabla también sirve a las
-- taxonomías. Consolidar las tres en una sola tabla es deuda conocida.

ALTER TABLE myths ADD COLUMN IF NOT EXISTS square_image_url TEXT;
ALTER TABLE myths ADD COLUMN IF NOT EXISTS image_prompt_square TEXT;

-- Prompts por formato: en Postgres solo existía `image_prompt`.
ALTER TABLE myths ADD COLUMN IF NOT EXISTS image_prompt_horizontal TEXT;
ALTER TABLE myths ADD COLUMN IF NOT EXISTS image_prompt_vertical TEXT;
