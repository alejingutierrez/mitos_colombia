-- Narraciones de audio de los mitos (ElevenLabs).
--
-- Una fila = un mito narrado con una voz. El MP3 vive en Vercel Blob; aquí sólo
-- queda la URL y los datos que hacen falta para pintar el cintillo sin bajar el
-- archivo (duración) y para saber si el audio quedó viejo (render_hash).
--
-- SIN llave foránea a `myths`, a propósito y por la misma razón que
-- `vertical_images` (ver AGENTS.md): `npm run db:import:pg` vacía `myths` y por
-- CASCADE se llevaría por delante narraciones que costaron créditos de
-- ElevenLabs. Sin FK sobreviven al seed y se reasocian por `myth_slug`, que es
-- la identidad duradera del mito.

CREATE TABLE IF NOT EXISTS myth_narrations (
  id SERIAL PRIMARY KEY,
  myth_id INTEGER NOT NULL,
  myth_slug TEXT NOT NULL,
  audio_url TEXT NOT NULL,
  -- Máster WAV sin pérdida: se archiva y sirve para mezclar con los lechos
  -- musicales. Lo que baja el navegador es siempre `audio_url` (MP3).
  master_url TEXT,
  voice_id TEXT NOT NULL,
  voice_name TEXT NOT NULL,
  model_id TEXT NOT NULL,
  -- SHA-256 de TODO lo que produjo el audio: el texto (título + relato) y
  -- además la voz, el modelo y los ajustes. Si se toca el relato O se cambia
  -- la configuración de voz, el hash deja de cuadrar y se sabe qué audios
  -- quedaron desfasados. Va en el nombre del archivo, así que cada
  -- configuración estrena URL y ninguna caché sirve una versión vieja.
  render_hash TEXT NOT NULL,
  char_count INTEGER NOT NULL,
  duration_seconds DOUBLE PRECISION,
  -- Lechos musicales usados, en orden. Son varios y no uno: con un solo bucle
  -- de 30 s un relato de tres minutos lo repite seis veces y se vuelve
  -- monótono. Se encadenan con cruces largos por debajo de la voz.
  bed_slugs JSONB,
  bed_gain_db DOUBLE PRECISION,
  -- Marcas de tiempo por palabra del relato, [[inicio, fin], ...] en segundos,
  -- tal como las devuelve la alineación de ElevenLabs. Es lo que permite
  -- resaltar la palabra que se está leyendo sin estimar nada.
  word_timings JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (myth_slug, voice_id)
);

CREATE INDEX IF NOT EXISTS idx_myth_narrations_slug ON myth_narrations(myth_slug);
CREATE INDEX IF NOT EXISTS idx_myth_narrations_myth ON myth_narrations(myth_id);

-- Catálogo de lechos musicales. `characters` lleva las etiquetas de carácter,
-- EN ORDEN: la primera es el carácter dominante y las siguientes son matices.
-- El orden decide desempates: para un tramo de silencio, «Silencio de la
-- sabana» (silencio primero) gana a «Laguna de Iguaque», que es agua ante todo.
CREATE TABLE IF NOT EXISTS narration_beds (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  audio_url TEXT NOT NULL,
  duration_seconds DOUBLE PRECISION NOT NULL,
  lufs DOUBLE PRECISION,
  seam_step_db DOUBLE PRECISION,
  prompt TEXT,
  characters JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
