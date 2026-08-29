/**
 * Compositor v10 · motor de variación del acabado A+C.
 *
 * Reglas implementadas (aprobadas en el lienzo "Generador de carruseles"):
 * - Eje 0 · modo: el carrusel entero es Revista (A), Archivo (B) o Cartel (C),
 *   asignado por la rueda 5/3/2 según el índice de feed; nunca se mezclan modos
 *   dentro de un mito. Si el modo no tiene variantes suficientes para un tipo,
 *   se completa con las demás (preferencia, no cárcel).
 * - El historial pesa más que el rol: la elección es ponderada por uso
 *   acumulado (1 / (1 + 2.5·usos)) sobre TODAS las variantes del tipo.
 * - Ninguna variante se repite dentro del carrusel, ni siquiera entre tipos
 *   distintos (una "columna" en portada desalienta otra "columna" después).
 * - El motivo protagonista se elige por el campo semántico del mito.
 * - Guion: el cuerpo nunca repite la primera oración del titular; las fuentes
 *   no viven dentro de un tiempo narrativo (van al cierre).
 */

import fs from "node:fs/promises";
import path from "node:path";
import {
  V10_TEMPLATES,
  getV10TemplatesByType,
  modeForFeedIndex,
  semanticMotifFor,
} from "../../../src/lib/instagram-v10.js";

// --- azar con semilla (idéntico al compositor anterior) ----------------------

function xmur3(value) {
  let hash = 1779033703 ^ value.length;
  for (let index = 0; index < value.length; index += 1) {
    hash = Math.imul(hash ^ value.charCodeAt(index), 3432918353);
    hash = (hash << 13) | (hash >>> 19);
  }
  return () => {
    hash = Math.imul(hash ^ (hash >>> 16), 2246822507);
    hash = Math.imul(hash ^ (hash >>> 13), 3266489909);
    return (hash ^= hash >>> 16) >>> 0;
  };
}

function mulberry32(seed) {
  return () => {
    let value = (seed += 0x6d2b79f5);
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

const randomFromSeed = (seed) => mulberry32(xmur3(String(seed || "v10"))());

// --- texto -------------------------------------------------------------------

const KICKER_BY_ROLE = Object.freeze({
  hook: "El umbral",
  setting: "El territorio",
  inciting_event: "La aparición",
  development: "El desarrollo",
  turn: "El giro",
  climax: "La transformación",
  meaning: "Lo que permanece",
  closing: "El relato continúa",
  identity: "El nombre",
  context: "La memoria",
  testimony: "La voz",
  pause: "La pausa",
  symbol: "El símbolo",
  sequence: "El relato",
});

const canonical = (value) =>
  String(value || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("es-CO")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();

/** Regla 1 del guion: el cuerpo nunca abre repitiendo el titular. */
export function cleanBody(title, body) {
  const text = String(body || "").trim();
  const first = text.match(/^.*?[.!?](?:\s|$)/);
  if (first && canonical(first[0]) === canonical(title)) {
    return text.slice(first[0].length).trim();
  }
  if (canonical(text) === canonical(title)) return "";
  return text;
}

/** Recorta en frontera de oración, sin dejar cuerpos huérfanos. */
export function clampSentences(value, maxChars) {
  const text = String(value || "").trim();
  if (text.length <= maxChars) return text;
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g) || [text];
  let out = "";
  for (const sentence of sentences) {
    if ((out + sentence).trim().length > maxChars) break;
    out += sentence;
  }
  return (out.trim() || sentences[0].trim().slice(0, maxChars)).trim();
}

function splitTitleParts(title) {
  const words = String(title || "").trim().split(/\s+/).filter(Boolean);
  if (words.length < 3) return null;
  const groups = [[], [], []];
  words.forEach((word, index) => {
    groups[Math.min(2, Math.floor((index * 3) / words.length))].push(word);
  });
  return groups.map((group) => group.join(" "));
}

function splitBodyColumns(body) {
  const text = String(body || "").trim();
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  if (!sentences || sentences.length < 2) return [text, ""];
  let best = 1;
  let bestDiff = Infinity;
  for (let cut = 1; cut < sentences.length; cut += 1) {
    const a = sentences.slice(0, cut).join("").length;
    const b = sentences.slice(cut).join("").length;
    if (Math.abs(a - b) < bestDiff) {
      bestDiff = Math.abs(a - b);
      best = cut;
    }
  }
  return [sentences.slice(0, best).join("").trim(), sentences.slice(best).join("").trim()];
}

function coordinateLabel(latitude, longitude) {
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return "";
  return `${Math.abs(latitude).toFixed(4)}° ${latitude >= 0 ? "N" : "S"} · ${Math.abs(longitude).toFixed(4)}° ${longitude >= 0 ? "E" : "O"}`;
}

// --- selección ---------------------------------------------------------------

export async function readHistory(historyPath) {
  const usage = new Map();
  try {
    const raw = await fs.readFile(historyPath, "utf8");
    for (const line of raw.split("\n")) {
      if (!line.trim()) continue;
      try {
        for (const id of JSON.parse(line).template_ids || []) {
          usage.set(id, (usage.get(id) || 0) + 1);
        }
      } catch {
        /* línea corrupta: se ignora */
      }
    }
  } catch {
    /* sin historial todavía */
  }
  return usage;
}

function fitsCap(template, fit) {
  const cap = template.cap;
  if (!cap || !fit) return true;
  if (cap.t != null && fit.titleLen > cap.t) return false;
  if (cap.words != null && fit.titleWords > cap.words) return false;
  if (cap.b != null && fit.bodyLen > cap.b) return false;
  return true;
}

function pickTemplate({ screenType, mode, usedIds, usedVariants, usage, random, fit }) {
  const available = getV10TemplatesByType(screenType).filter(
    (template) => !usedIds.has(template.id)
  );
  if (!available.length) {
    throw new Error(`Sin variantes disponibles para ${screenType}.`);
  }
  // Capacidad primero: una variante apretada nunca recibe un texto que la
  // desborde. Si ninguna cabe, se recorta el cuerpo al mayor bolsillo del tipo.
  let fitting = available.filter((template) => fitsCap(template, fit));
  if (!fitting.length) fitting = available;
  // El modo es filtro duro mientras queden variantes suyas; cuando se agotan,
  // el tipo se completa con las demás (carruseles largos de un mismo tipo).
  const sameMode = fitting.filter((template) => template.mode === mode);
  const pool = sameMode.length ? sameMode : fitting;
  const weighted = pool.map((template) => {
    let weight = 1 / (1 + (usage.get(template.id) || 0) * 2.5);
    if (usedVariants.has(template.variant)) weight *= 0.25; // no repetir gesto en el carrusel
    return { template, weight };
  });
  const total = weighted.reduce((sum, item) => sum + item.weight, 0);
  let cursor = random() * total;
  for (const item of weighted) {
    cursor -= item.weight;
    if (cursor <= 0) return item.template;
  }
  return weighted.at(-1).template;
}

function screenTypeFor(slide, index, total) {
  if (index === 0) return "portada";
  if (slide.kind === "location") return "territorio";
  if (slide.asset_id === "existing_landscape") return "secundaria";
  if (slide.asset_id === "generated_third") return "climax";
  if (slide.narrative_role === "closing" || index === total - 1) return "cierre";
  return "tipografica";
}

// --- copia por tipo ----------------------------------------------------------

function closingQuestion(slide, fallback) {
  for (const candidate of [slide.headline, slide.body]) {
    const text = String(candidate || "").trim();
    if (text.includes("?")) {
      const match = text.match(/¿[^?]+\?/u);
      if (match) return match[0];
    }
  }
  return fallback;
}

export function buildComposition({ plan, seed, feedIndex = 0, modeOverride, usage }) {
  const myth = plan.myth || {};
  const slides = plan.plan?.slides || [];
  if (!slides.length) throw new Error("El plan no trae láminas.");

  const mode = modeOverride || modeForFeedIndex(feedIndex);
  const random = randomFromSeed(seed);
  const usedIds = new Set();
  const usedVariants = new Set();

  const locationSlide = slides.find((slide) => slide.kind === "location");
  const place = locationSlide?.headline?.includes("·")
    ? locationSlide.headline
    : locationSlide?.headline || myth.region || "";
  const kickerBase = [myth.community, place || myth.region].filter(Boolean).join(" · ");
  const semanticMotif = semanticMotifFor(
    `${myth.title || ""} ${plan.plan?.editorial_thesis || ""} ${slides[0]?.body || ""}`
  );

  const out = [];
  const latitude = Number(myth.latitude);
  const longitude = Number(myth.longitude);

  slides.forEach((slide, index) => {
    const screenType = screenTypeFor(slide, index, slides.length);

    // La copia base se construye antes de elegir plantilla: la capacidad manda.
    let baseTitle = clampSentences(slide.headline, 96);
    let baseBody = clampSentences(cleanBody(baseTitle, slide.body), 260);
    if (screenType === "cierre") {
      baseTitle = closingQuestion(slide, "¿Qué nos pide este relato hoy?");
      if (baseTitle.length > 135) baseTitle = "¿Qué nos pide este relato hoy?";
      baseBody = "";
    }
    const fit = {
      titleLen: baseTitle.length,
      titleWords: baseTitle.split(/\s+/).filter(Boolean).length,
      bodyLen: baseBody.length,
    };

    const template = pickTemplate({ screenType, mode, usedIds, usedVariants, usage, random, fit });
    usedIds.add(template.id);
    usedVariants.add(template.variant);
    if (template.cap?.b != null && baseBody.length > template.cap.b) {
      baseBody = clampSentences(baseBody, template.cap.b);
    }
    if (template.cap?.b === 0) baseBody = "";

    const kicker =
      KICKER_BY_ROLE[slide.design_role] || KICKER_BY_ROLE[slide.narrative_role] || "El relato";
    let copy;

    if (screenType === "portada") {
      copy = {
        name: myth.title,
        kicker: kickerBase || kicker,
        promise: clampSentences(slide.body, 130),
        community: myth.community,
        dataRows: [
          ["Comunidad", [myth.community, myth.region].filter(Boolean).join(" · ")],
          ["Lugar", place || myth.region || ""],
          ["Relato", "mitosdecolombia.com"],
        ].filter(([, value]) => value),
      };
    } else if (screenType === "territorio") {
      const coords = coordinateLabel(latitude, longitude);
      copy = {
        title: slide.headline,
        kicker: [myth.community, `región ${myth.region}`].filter(Boolean).join(" · "),
        coordinates: coords || cleanBody(slide.headline, slide.body),
        latitude,
        longitude,
        note: "",
        dataRows: [
          ["Latitud", Number.isFinite(latitude) ? `${latitude.toFixed(4)}°` : ""],
          ["Longitud", Number.isFinite(longitude) ? `${longitude.toFixed(4)}°` : ""],
          ["Registro", `Lámina ${String(index + 1).padStart(2, "0")} de ${slides.length}`],
        ].filter(([, value]) => value),
      };
    } else if (screenType === "cierre") {
      copy = {
        kicker: "El relato continúa",
        title: baseTitle,
        lee: "Lee la historia completa, sus fuentes y otras versiones en",
        cta: "mitosdecolombia.com",
        sources: [myth.community, myth.region].filter(Boolean).join(" · "),
        motif: template.variant === "sello" ? semanticMotif : undefined,
      };
    } else {
      const title = baseTitle;
      const body = baseBody;
      copy = {
        kicker,
        title,
        body,
        titleParts: template.variant === "escalera" ? splitTitleParts(title) : undefined,
        bodyColumns: template.variant === "columnas" ? splitBodyColumns(body) : undefined,
        motif: template.variant === "capitular" ? semanticMotif : undefined,
      };
    }

    out.push({
      sequence: index + 1,
      screenType,
      narrative_role: slide.narrative_role,
      template_id: template.id,
      template_variant: template.variant,
      template_mode: template.mode,
      palette: template.palette,
      alt_text: slide.alt_text || "",
      copy,
    });
  });

  const photoSlides = out.filter((slide) =>
    ["portada", "secundaria", "climax"].includes(slide.screenType)
  ).length;
  const warnings = [];
  if (photoSlides < 3) {
    warnings.push(`solo ${photoSlides} láminas con fotografía; el acabado pide al menos 3`);
  }
  const consecutiveType = out.some(
    (slide, index) =>
      index > 1 &&
      slide.screenType === "tipografica" &&
      out[index - 1].screenType === "tipografica" &&
      out[index - 2].screenType === "tipografica" &&
      index > 2 &&
      out[index - 3].screenType === "tipografica"
  );
  if (consecutiveType) warnings.push("cuatro tipográficas seguidas: revisar el plan");

  return {
    schema_version: "v10-1",
    seed,
    mode,
    feed_index: feedIndex,
    myth: {
      id: myth.id,
      title: myth.title,
      slug: myth.slug,
      community: myth.community,
      region: myth.region,
      latitude: myth.latitude,
      longitude: myth.longitude,
    },
    assets: {
      cover: `/api/instagram/assets/${myth.slug}/cover`,
      secondary: `/api/instagram/assets/${myth.slug}/secondary`,
      tertiary: `/api/instagram/assets/${myth.slug}/tertiary`,
    },
    semantic_motif: semanticMotif,
    warnings,
    slides: out,
  };
}

export async function appendHistory(historyPath, composition) {
  const entry = {
    composed_at: new Date().toISOString(),
    myth_slug: composition.myth.slug,
    seed: composition.seed,
    mode: composition.mode,
    template_ids: composition.slides.map((slide) => slide.template_id),
  };
  await fs.mkdir(path.dirname(historyPath), { recursive: true });
  await fs.appendFile(historyPath, `${JSON.stringify(entry)}\n`);
  return entry;
}
