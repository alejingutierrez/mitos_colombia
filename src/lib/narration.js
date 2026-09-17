/**
 * Narración de un mito: qué se lee en voz alta y cómo se nombra el archivo.
 *
 * Módulo puro y sin dependencias del framework: lo importan tanto la app (para
 * pintar el cintillo) como los scripts de generación en Node. No metas aquí
 * nada de `server-only`, `next/*` ni acceso a base de datos.
 */

import { createHash } from "node:crypto";

/**
 * Voz por defecto: "alejandro" de ElevenLabs, español con acento colombiano.
 *
 * `id` es el de la voz `alejandro_narracion` de la cuenta actual. Los ids de voz
 * son propios de cada cuenta: al cambiar de cuenta hay que volver a buscarlo
 * (`GET /v2/voices?search=alejandro`), no se hereda. `name` es lo que lee la
 * gente en el cintillo, así que va en limpio y no con el nombre interno.
 */
export const DEFAULT_VOICE = {
  id: "9EHAKExD4lT2G6hPG74L",
  name: "Alejandro",
  modelId: "eleven_multilingual_v2",
  settings: {
    // En ElevenLabs la voz se vuelve MÁS variable cuando la estabilidad BAJA:
    // 0,35 le deja respirar el relato en vez de leerlo plano.
    stability: 0.35,
    similarity_boost: 0.9,
    style: 0.3,
    use_speaker_boost: true,
    // Medido: `multilingual_v2`, `flash_v2_5` y `turbo_v2_5` respetan `speed`
    // (la duración cambia un 40-47 % entre 0,7 y 1,2). `eleven_v3` NO: lo
    // acepta sin error y no cambia nada. Si algún día se cambia a v3, la
    // velocidad habría que ajustarla después con ffmpeg.
    speed: 1.05,
  },
};

/**
 * Se pide PCM crudo a 48 kHz —la mejor calidad que da la cuenta— y de ahí salen
 * las dos piezas:
 *
 *   · el MÁSTER en WAV, que es lo que se archiva sin pérdida y sirve para
 *     mezclar con los lechos musicales (también a 48 kHz: no hay que remuestrear);
 *   · el MP3 a 192 kbps, que es lo que baja el navegador. Servir el WAV sería
 *     mandar 16 MB por mito a un teléfono para narrar tres minutos.
 */
export const AUDIO_FORMAT = "pcm_48000";
export const PCM_SAMPLE_RATE = 48000;
export const PCM_CHANNELS = 1;
export const PCM_BYTES_PER_SAMPLE = 2;
export const MP3_BITRATE_KBPS = 192;

export const AUDIO_CONTENT_TYPE = "audio/mpeg";
export const MASTER_CONTENT_TYPE = "audio/wav";

/**
 * Tope de caracteres por petición. `eleven_multilingual_v2` admite 5000; el
 * relato más largo del archivo tiene 3348, así que ninguno necesita partirse
 * hoy. El guardia está para que un relato futuro falle en voz alta en vez de
 * salir cortado a mitad de frase.
 */
export const MAX_REQUEST_CHARS = 5000;

/**
 * Balance voz / lecho musical.
 *
 * La voz se lleva a -16 LUFS (lo habitual en audio hablado en web) y el lecho
 * se deja 18 dB por debajo. Las guías de accesibilidad para voz sobre fondo
 * piden al menos 10 dB de separación; con 18 la música acompaña y en ningún
 * momento compite con el relato. Los lechos vienen todos a -24 LUFS, así que
 * el ajuste es el mismo para todos y cambiar de pieza no cambia el balance.
 */
export const VOICE_LUFS = -16;
export const BED_LUFS = -34;
export const BED_GAIN_DB = BED_LUFS - -24; // los lechos se archivan a -24 LUFS
export const BED_FADE_IN_S = 2;
export const BED_FADE_OUT_S = 3;

/**
 * Cuántos lechos distintos lleva una narración.
 *
 * Con uno solo, un relato de tres minutos repite el mismo bucle de 30 s seis
 * veces y se vuelve monótono: el oído aprende la vuelta y empieza a esperarla.
 * Se reparte en tramos de ~55 s, con un mínimo de dos y un tope de cinco para
 * que la pieza siga teniendo unidad y no parezca una lista de reproducción.
 */
export const BED_SEGMENT_S = 55;
export const BED_MIN = 2;
export const BED_MAX = 5;
/** Cruce entre un lecho y el siguiente. Largo a propósito: son fondos, y el
 *  relevo debe pasar desapercibido bajo la voz. */
export const BED_CROSSFADE_S = 4;

export function bedCountForDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) return BED_MIN;
  return Math.min(BED_MAX, Math.max(BED_MIN, Math.round(seconds / BED_SEGMENT_S)));
}

/**
 * Largo de cada tramo para que al encadenarlos con cruces salga exactamente la
 * duración pedida. Encadenar dos tramos con un cruce de X segundos da
 * `L1 + L2 - X`, así que con K tramos: `K·L − (K−1)·X = D`.
 */
export function bedSegmentLength(duration, count, crossfade = BED_CROSSFADE_S) {
  return (duration + (count - 1) * crossfade) / count;
}

/**
 * El texto que se narra: SÓLO el título y el relato.
 *
 * Fuera quedan a propósito historia, versiones, lección, similitudes, fuentes
 * y el resumen de portada. El botón promete "escuchar el relato" y eso es
 * exactamente lo que suena.
 *
 * El punto tras el título no es cosmético: le da a la voz la cesura entre el
 * nombre del mito y la primera frase. Si el título ya cierra con puntuación
 * («¿Quién es el Mohán?») no se le añade otro.
 */
export function storyParagraphs(mito) {
  return String(mito || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

/**
 * Las tres piezas de la narración: el texto completo que se manda a narrar, el
 * cuerpo del relato ya normalizado y en qué carácter empieza dentro del texto.
 *
 * Devolver el desplazamiento calculado —en vez de buscarlo después con
 * `indexOf(mito)`— cierra un fallo silencioso: el texto narrado usa los
 * párrafos renormalizados, así que un relato con saltos de línea simples no se
 * encontraría, el desplazamiento caería a 0 y TODAS las marcas de tiempo
 * quedarían corridas una palabra, incluyendo el título en el resaltado. Aquí
 * el número sale de la misma construcción y no puede descuadrarse.
 */
export function buildNarrationParts(myth = {}) {
  const title = String(myth.title || "").trim();
  const story = storyParagraphs(myth.mito).join("\n\n");
  if (!story) return null;

  const heading = title
    ? /[.!?…»"']$/.test(title)
      ? title
      : `${title}.`
    : "";
  const text = heading ? `${heading}\n\n${story}` : story;
  return { text, story, storyOffset: text.length - story.length };
}

export function buildNarrationText(myth = {}) {
  return buildNarrationParts(myth)?.text ?? null;
}

/**
 * Tokenizador canónico de palabras.
 *
 * Lo usan DOS sitios que tienen que coincidir exactamente: el generador, para
 * convertir la alineación de ElevenLabs en marcas de tiempo por palabra, y la
 * plantilla, para envolver cada palabra del relato en su `<span>`. Si cada uno
 * partiera el texto a su manera, el resaltado señalaría la palabra equivocada.
 * Por eso vive aquí y no duplicado en cada lado.
 *
 * Una "palabra" es cualquier racha sin espacios: la puntuación viaja pegada a
 * la palabra («bohío,») igual que en la alineación, que también la agrupa así.
 */
export function tokenizeWords(text) {
  const palabras = [];
  const cadena = String(text || "");
  const re = /\S+/g;
  let m;
  while ((m = re.exec(cadena)) !== null) {
    palabras.push({ word: m[0], start: m.index, end: m.index + m[0].length });
  }
  return palabras;
}

/**
 * Marcas de tiempo por palabra a partir de la alineación por carácter.
 *
 * ElevenLabs devuelve un tiempo de inicio y otro de fin por CARÁCTER del texto
 * que se le mandó. Se agrupan por los límites que marca `tokenizeWords` sobre
 * ese mismo texto, así que el resultado sale en el mismo orden y con el mismo
 * criterio que los `<span>` de la página.
 *
 * `desde` descarta el principio del texto: la narración empieza por el título,
 * que no está en el cuerpo del relato y no tiene span que resaltar.
 *
 * Devuelve `null` si la alineación no corresponde al texto. Es deliberado: con
 * los índices descuadrados el resaltado señalaría palabras equivocadas, y es
 * mejor quedarse sin resaltado que con uno que miente.
 */
export function wordTimingsFromAlignment(alignment, text, desde = 0) {
  const inicios = alignment?.character_start_times_seconds;
  const fines = alignment?.character_end_times_seconds;
  const chars = alignment?.characters;
  if (!Array.isArray(chars) || !Array.isArray(inicios) || !Array.isArray(fines)) return null;
  if (chars.length !== inicios.length || chars.length !== fines.length) return null;
  if (chars.join("") !== String(text)) return null;

  return tokenizeWords(text)
    .filter((t) => t.start >= desde)
    .map((t) => {
      const s = inicios[t.start];
      // `end - 1` es el último carácter de la palabra, no el espacio de después.
      const e = fines[t.end - 1];
      return [
        Math.round((Number.isFinite(s) ? s : 0) * 1000) / 1000,
        Math.round((Number.isFinite(e) ? e : 0) * 1000) / 1000,
      ];
    });
}

/**
 * Dónde empieza el relato dentro del texto narrado. La narración es
 * «título.\n\nrelato», así que el cuerpo arranca después del título.
 */
export function storyOffsetInNarration(narrationText, storyText) {
  const i = String(narrationText).indexOf(String(storyText));
  return i === -1 ? 0 : i;
}

/**
 * Huella de TODO lo que produjo el audio: el texto y también la voz, el modelo y
 * los ajustes.
 *
 * Que entren los ajustes no es un detalle. Con el hash sólo del texto, cambiar
 * la velocidad o la estabilidad y regenerar daba la MISMA ruta en el blob: el
 * archivo se sobrescribía y cualquier caché intermedia seguía sirviendo la
 * versión anterior. Con la voz y los ajustes dentro, cada configuración estrena
 * URL y no hay forma de oír un audio viejo.
 */
export function narrationRenderHash(text, voice = DEFAULT_VOICE, beds = null) {
  const huella = JSON.stringify({
    text: String(text || ""),
    voice: voice.id,
    model: voice.modelId,
    settings: voice.settings,
    // Los lechos también, EN ORDEN: dos narraciones con la misma voz y distinta
    // música son dos archivos distintos y no pueden compartir URL.
    beds: beds?.length ? { slugs: beds.map((b) => b.slug), gain: BED_GAIN_DB } : null,
  });
  return createHash("sha256").update(huella, "utf8").digest("hex");
}

/**
 * Ruta del MP3 dentro del blob: una carpeta por voz y el hash del texto en el
 * nombre. Lo del hash no es adorno: si se reescribe el relato y se vuelve a
 * narrar, el archivo estrena URL y nadie se queda oyendo el audio viejo
 * servido por el CDN. Mismo texto, misma ruta, se puede sobrescribir sin
 * dejar basura detrás.
 */
export function narrationBlobPath(slug, textHash, voiceName = DEFAULT_VOICE.name, ext = "mp3") {
  const voiceDir = String(voiceName).toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const safeSlug =
    String(slug || "mito")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "mito";
  const stamp = String(textHash || "").slice(0, 8);
  return `narraciones/${voiceDir}/${safeSlug}${stamp ? `-${stamp}` : ""}.${ext}`;
}

/** Duración exacta del PCM crudo: bytes ÷ (frecuencia · canales · 2 bytes). */
export function pcmDuration(byteLength) {
  if (!Number.isFinite(byteLength) || byteLength <= 0) return null;
  return byteLength / (PCM_SAMPLE_RATE * PCM_CHANNELS * PCM_BYTES_PER_SAMPLE);
}

/**
 * Etiqueta corta para el cintillo: "3 min", "12 min". Por debajo del minuto
 * dice "1 min" en vez de "0 min", que se leería como un error.
 */
export function formatNarrationLength(seconds) {
  if (!Number.isFinite(seconds) || seconds <= 0) return null;
  return `${Math.max(1, Math.round(seconds / 60))} min`;
}

/** Reloj del reproductor: m:ss. */
export function formatClock(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const total = Math.floor(seconds);
  const minutes = Math.floor(total / 60);
  const rest = total % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}
