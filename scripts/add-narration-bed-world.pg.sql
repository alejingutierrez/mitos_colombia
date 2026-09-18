-- Mundo sonoro de cada lecho de narración.
--
-- El catálogo de lechos nació entero andino, así que no hacía falta
-- distinguirlos: todos servían para cualquier mito. Al añadir los doce lechos
-- guajiros para los relatos wayúu sí hace falta, porque poner una zampoña
-- andina bajo un relato de la Alta Guajira es el mismo error que poner la
-- laguna de un mito bajo otro, una escala más arriba.
--
-- `scripts/mitos/generar-narracion.mjs` filtra por esta columna al elegir
-- lecho, y `generar-lechos.mjs` la escribe al registrar cada pieza. Los valores
-- válidos son las claves de `src/lib/narration-worlds.js`; se deja como TEXT
-- libre y no como enum porque el mapa se amplía comunidad por comunidad.
--
-- Las filas que ya existen son todas del catálogo andino, así que se rellenan
-- con el mundo por defecto en vez de quedar en NULL: un lecho sin mundo no lo
-- devolvería ninguna consulta y desaparecería del catálogo en silencio.

ALTER TABLE narration_beds
  ADD COLUMN IF NOT EXISTS world TEXT;

UPDATE narration_beds
   SET world = 'andino-muisca'
 WHERE world IS NULL;

CREATE INDEX IF NOT EXISTS idx_narration_beds_world ON narration_beds(world);
