import {
  CAROUSEL_CORNERS as V1_CORNERS,
  CAROUSEL_DIVIDERS as V1_DIVIDERS,
  CAROUSEL_GLYPHS as V1_GLYPHS,
} from "./iconography-definitions.mjs";

export const ICONOGRAPHY_VERSION = "v2";
export const ICONOGRAPHY_INK = "#1c5c3f";

export const ICONOGRAPHY_STANDARD = Object.freeze({
  edition: "system-100",
  line: Object.freeze({
    strokeWidth: 2.6,
    linecap: "round",
    linejoin: "round",
    fill: "none",
  }),
  palette: Object.freeze({
    ink: "#1c5c3f",
    accent: "#b18a32",
    paper: "#e7decb",
  }),
  roles: Object.freeze({
    glyph: "semantic-primary",
    divider: "narrative-pause",
    corner: "boundary-accent",
    frame: "layout-scaffold",
    ornament: "micro-accent",
    pattern: "low-contrast-texture",
  }),
  usage: Object.freeze({
    maxPrimaryPerSlide: 1,
    maxSupportPerSlide: 1,
    maxPatternOpacity: 0.08,
    communitySpecificSymbolsRequireDocumentedReference: true,
  }),
});

const glyph = (id, group, label, body) => ({
  id,
  group,
  label,
  kind: "glyph",
  width: 64,
  height: 64,
  body,
});

const divider = (id, label, body) => ({
  id,
  group: "separator",
  label,
  kind: "divider",
  width: 432,
  height: 64,
  body,
});

const corner = (id, label, body) => ({
  id,
  group: "corner",
  label,
  kind: "corner",
  width: 64,
  height: 64,
  body,
});

const frame = (id, label, body) => ({
  id,
  group: "frame",
  label,
  kind: "frame",
  width: 80,
  height: 100,
  body,
});

const ornament = (id, label, body) => ({
  id,
  group: "ornament",
  label,
  kind: "ornament",
  width: 64,
  height: 64,
  body,
});

const pattern = (id, label, body) => ({
  id,
  group: "pattern",
  label,
  kind: "pattern",
  width: 96,
  height: 96,
  body,
});

export const V2_GLYPHS = Object.freeze([
  glyph(
    "rain-cloud",
    "atmosphere",
    "Lluvia",
    `<path d="M16 31c-8 0-9-11-2-14 2-8 12-11 18-5 7-6 18-1 17 8 9 0 11 11 3 15H17"/><path d="m20 41-3 8M32 40l-3 10M44 41l-3 8"/>`
  ),
  glyph(
    "lightning",
    "atmosphere",
    "Relámpago",
    `<path d="M37 5 16 34h14l-5 25 23-33H34Z"/><path d="m10 19 5 2M49 43l5 2"/>`
  ),
  glyph(
    "mist",
    "atmosphere",
    "Niebla",
    `<path d="M7 22c10-8 18-8 26 0s15 8 24 0M7 32c9-7 17-7 24 0s15 7 26 0M7 42c8-6 15-6 22 0s14 6 22 0"/><path d="M12 51h19M40 13h12"/>`
  ),
  glyph(
    "stone",
    "atmosphere",
    "Piedra",
    `<path d="m10 50 4-24 15-16 18 6 9 20-8 16H20Z"/><path d="m29 10 7 16-8 10 4 16M36 26l11-10M28 36l-14-10M48 52l-8-12 16-4"/>`
  ),
  glyph(
    "ember",
    "atmosphere",
    "Brasa",
    `<path d="M32 58C18 56 13 45 20 35c6-8 6-15 5-25 12 6 19 16 14 27 7-3 11-9 12-15 8 14 4 32-10 35"/><path d="M32 51c-7-2-8-9-3-14 3-3 4-7 3-12 8 5 10 13 5 19"/><circle cx="16" cy="22" r="1.5"/><circle cx="48" cy="10" r="1.2"/>`
  ),
  glyph(
    "seed-sprout",
    "atmosphere",
    "Semilla",
    `<path d="M32 57V26M32 31c-10 0-16-6-17-15 10 0 16 5 17 15ZM32 39c10 0 16-6 17-15-10 0-16 5-17 15Z"/><path d="M23 57c0-8 4-13 9-13s9 5 9 13Z"/><path d="M12 57h40"/>`
  ),
  glyph(
    "time-dawn",
    "time",
    "Amanecer",
    `<path d="M8 43h48M14 50h36M18 43a14 14 0 0 1 28 0"/><path d="M32 12v9M13 24l7 5M51 24l-7 5M7 37h8M49 37h8"/>`
  ),
  glyph(
    "time-dusk",
    "time",
    "Anochecer",
    `<path d="M8 40h48M14 48h36M21 40a11 11 0 0 1 22 0"/><path d="M12 56h40"/><circle cx="49" cy="15" r="3"/><path d="M16 23c5-4 10-4 15 0s10 4 15 0"/>`
  ),
  glyph(
    "season-cycle",
    "time",
    "Ciclo",
    `<path d="M49 20A21 21 0 0 0 15 18l-5 6M15 44a21 21 0 0 0 34 2l5-6"/><path d="m9 15 1 9 9-1M55 49l-1-9-9 1"/><path d="M31 43c-10-4-12-15 1-23 11 8 10 19-1 23ZM31 24v19"/>`
  ),
  glyph(
    "time-pause",
    "time",
    "Pausa",
    `<path d="M25 10a23 23 0 0 0 0 44M39 10a23 23 0 0 1 0 44"/><path d="M28 24v16M36 24v16"/>`
  ),
  glyph(
    "generations",
    "time",
    "Generaciones",
    `<circle cx="32" cy="10" r="5"/><circle cx="17" cy="35" r="5"/><circle cx="47" cy="35" r="5"/><path d="M32 15v8M17 30c2-7 7-10 15-10s13 3 15 10M9 55c1-9 4-15 8-15s7 6 8 15M39 55c1-9 4-15 8-15s7 6 8 15"/>`
  ),
  glyph(
    "time-continuation",
    "time",
    "Continuación",
    `<circle cx="49" cy="14" r="4"/><path d="M9 54c4-8 12-12 18-17 7-6 5-12-2-16-5-3-5-8 0-12M55 54c-3-7-9-10-16-13"/><path d="M11 54h42"/>`
  ),
  glyph(
    "presence-serpent",
    "presence",
    "Presencia serpiente",
    `<path d="M22 12c10-8 22 1 15 10-6 8-19 7-21 17-2 9 10 15 20 10 9-5 12-15 5-20"/><path d="M22 12c-5 0-8 2-10 5l7 2"/><circle cx="20" cy="12" r="1.2"/><path d="M41 29c8 4 11 12 8 21"/>`
  ),
  glyph(
    "presence-feline",
    "presence",
    "Presencia felina",
    `<path d="m15 21 3-11 10 7h8l10-7 3 11c5 5 7 11 5 19-3 12-12 18-22 18S13 52 10 40c-2-8 0-14 5-19Z"/><path d="M22 34h1M41 34h1M27 43c3 3 7 3 10 0M32 39v7M18 45l-9 3M46 45l9 3"/>`
  ),
  glyph(
    "presence-bird",
    "presence",
    "Presencia ave",
    `<path d="M13 48h39M26 48V30c-6-2-10-7-10-13 8 2 12 1 17-6 11 5 16 14 14 25-2 9-8 14-16 14"/><path d="M27 31c8 1 14-2 20-8M35 50l-5 7M43 49l5 7"/><circle cx="36" cy="18" r="1.2"/>`
  ),
  glyph(
    "presence-amphibian",
    "presence",
    "Presencia anfibia",
    `<path d="M19 28c1-9 7-14 13-14s12 5 13 14c8 4 12 12 7 20-5 8-15 8-20 2-5 6-15 6-20-2-5-8-1-16 7-20Z"/><circle cx="23" cy="17" r="4"/><circle cx="41" cy="17" r="4"/><path d="M23 39c6 5 12 5 18 0M13 48 6 56M51 48l7 8"/>`
  ),
  glyph(
    "presence-fish",
    "presence",
    "Presencia pez",
    `<path d="M8 32c9-14 25-19 39-9l10-8-2 17 2 17-10-8C33 51 17 46 8 32Z"/><path d="M24 25c5 4 5 10 0 14M35 23l6 9-6 9"/><circle cx="17" cy="30" r="1.5"/><path d="M7 54c6-4 12-4 18 0s12 4 18 0 9-3 14 0"/>`
  ),
  glyph(
    "presence-light",
    "presence",
    "Presencia luminosa",
    `<circle cx="32" cy="22" r="13"/><path d="M32 35c-8 4-11 12-9 23M32 35c8 4 11 12 9 23M32 35v23"/><path d="M32 4V1M15 10l-4-4M49 10l4-4M10 23H5M54 23h5"/><path d="M27 23c4-7 8-7 10 0-2 5-6 8-10 0Z"/>`
  ),
  glyph(
    "signal-footprint",
    "signal",
    "Huella",
    `<path d="M26 58C13 56 11 41 18 30c5-8 10-12 14-8 5 4 3 11 6 17 3 7 2 17-12 19Z"/><ellipse cx="20" cy="15" rx="3" ry="5"/><ellipse cx="29" cy="10" rx="3" ry="5"/><ellipse cx="38" cy="11" rx="3" ry="5"/><ellipse cx="46" cy="17" rx="3" ry="5"/>`
  ),
  glyph(
    "signal-witness",
    "signal",
    "Testigo",
    `<path d="M5 32c8-12 17-18 27-18s19 6 27 18c-8 12-17 18-27 18S13 44 5 32Z"/><circle cx="32" cy="32" r="8"/><circle cx="32" cy="32" r="2"/><path d="M32 5v5M10 13l4 4M54 13l-4 4"/>`
  ),
  glyph(
    "signal-echo",
    "signal",
    "Eco",
    `<circle cx="16" cy="32" r="5"/><path d="M27 22c7 3 10 7 10 10s-3 7-10 10M36 15c11 5 16 10 16 17s-5 12-16 17M45 8c9 6 14 14 14 24s-5 18-14 24"/>`
  ),
  glyph(
    "signal-threshold",
    "signal",
    "Umbral",
    `<path d="M12 57V24C12 12 20 6 32 6s20 6 20 18v33M22 57V26c0-7 4-10 10-10s10 3 10 10v31"/><path d="M7 57h50M31 48c-7-8-7-14 0-21"/>`
  ),
  glyph(
    "signal-shelter",
    "signal",
    "Resguardo",
    `<path d="M7 34 32 9l25 25M12 31v25h40V31"/><path d="M22 56V39c0-8 4-13 10-13s10 5 10 13v17"/><path d="M28 45c2-6 6-6 8 0-1 4-3 6-4 8-1-2-3-4-4-8Z"/>`
  ),
  glyph(
    "signal-encounter",
    "signal",
    "Encuentro",
    `<circle cx="14" cy="12" r="4"/><circle cx="50" cy="12" r="4"/><path d="M8 56V35c0-11 6-17 14-17 6 0 9 4 10 10M56 56V35c0-11-6-17-14-17-6 0-9 4-10 10"/><path d="M20 56c2-12 6-20 12-28 6 8 10 16 12 28"/>`
  ),
]);

export const V2_DIVIDERS = Object.freeze([
  divider(
    "divider-rain",
    "Separador de lluvia",
    `<path d="M8 32h164c9 0 9-11 2-14 3-9 15-11 21-4 7-7 20-2 19 8 9 0 11 10 4 14h206"/><path d="m190 42-3 8M203 41l-3 10M216 42l-3 8"/><circle cx="8" cy="32" r="2"/><circle cx="424" cy="32" r="2"/>`
  ),
  divider(
    "divider-constellation",
    "Separador de constelación",
    `<path d="M8 34h148M276 34h148"/><circle cx="8" cy="34" r="2"/><circle cx="424" cy="34" r="2"/><path d="m177 34 9-3 12 8 14-18 17 11 18-7 10 9"/><circle cx="177" cy="34" r="2"/><circle cx="198" cy="39" r="2"/><circle cx="212" cy="21" r="2"/><circle cx="229" cy="32" r="2"/><path d="m245 14 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z"/>`
  ),
  divider(
    "divider-footsteps",
    "Separador de huellas",
    `<path d="M8 37c55-10 105-10 150 0M274 37c50-10 100-10 150 0"/><circle cx="8" cy="37" r="2"/><circle cx="424" cy="37" r="2"/><ellipse cx="189" cy="29" rx="6" ry="10" transform="rotate(-28 189 29)"/><ellipse cx="217" cy="42" rx="6" ry="10" transform="rotate(28 217 42)"/><ellipse cx="245" cy="27" rx="6" ry="10" transform="rotate(-28 245 27)"/>`
  ),
  divider(
    "divider-ember",
    "Separador de brasa",
    `<path d="M8 38h174M250 38h174"/><circle cx="8" cy="38" r="2"/><circle cx="424" cy="38" r="2"/><path d="M216 52c-12-2-16-12-9-21 5-6 5-12 4-19 11 5 16 14 12 22 6-2 9-7 10-12 6 11 2 27-10 30"/><circle cx="194" cy="24" r="1.5"/><circle cx="239" cy="16" r="1.5"/>`
  ),
  divider(
    "divider-echo",
    "Separador de eco",
    `<path d="M8 36h166M258 36h166"/><circle cx="8" cy="36" r="2"/><circle cx="424" cy="36" r="2"/><circle cx="190" cy="36" r="3"/><path d="M199 28c6 2 9 5 9 8s-3 6-9 8M208 21c10 4 15 9 15 15s-5 11-15 15M223 18c12 5 18 11 18 18s-6 13-18 18"/>`
  ),
  divider(
    "divider-two-paths",
    "Separador de dos caminos",
    `<path d="M8 38h125c32 0 48-18 75-18 30 0 43 30 76 30 29 0 42-12 72-12h68"/><path d="M133 38c32 0 46 18 75 18 30 0 45-30 76-30 29 0 43 12 72 12"/><circle cx="8" cy="38" r="2"/><circle cx="424" cy="38" r="2"/>`
  ),
]);

export const V2_CORNERS = Object.freeze([
  corner("corner-sun", "Esquina de sol", `<path d="M8 56V30C8 18 18 8 30 8h26"/><path d="M16 48a13 13 0 0 1 26 0M29 24v7M14 34l6 4M44 34l-6 4"/>`),
  corner("corner-moon", "Esquina de luna", `<path d="M8 56V30C8 18 18 8 30 8h26"/><path d="M34 22a13 13 0 1 0 8 22 10 10 0 0 1-8-22Z"/><circle cx="48" cy="21" r="1.5"/>`),
  corner("corner-seed", "Esquina de semilla", `<path d="M8 56V30C8 18 18 8 30 8h26"/><path d="M27 47V29c-8 0-13 4-14 11 7 1 11-1 14-7M27 37c8 0 13-4 14-11-7-1-11 1-14 6"/>`),
  corner("corner-path", "Esquina de camino", `<path d="M8 56V30C8 18 18 8 30 8h26"/><path d="M17 52c2-11 16-10 14-20-1-5-5-7-10-8M38 50c-1-7-6-10-8-15"/>`),
  corner("corner-rain", "Esquina de lluvia", `<path d="M8 56V30C8 18 18 8 30 8h26"/><path d="M19 31c-7 0-8-9-2-11 2-6 10-8 14-3 6-5 14-1 13 6 7 0 8 8 2 10H20"/><path d="m24 39-2 7M35 39l-2 8M45 39l-2 7"/>`),
  corner("corner-constellation", "Esquina de constelación", `<path d="M8 56V30C8 18 18 8 30 8h26"/><path d="m18 45 8-8 7 4 8-13 9 6"/><circle cx="18" cy="45" r="1.5"/><circle cx="26" cy="37" r="1.5"/><circle cx="41" cy="28" r="1.5"/><path d="m50 34 2 4 4 2-4 2-2 4-2-4-4-2 4-2Z"/>`),
  corner("corner-archive", "Esquina de archivo", `<path d="M8 56V30C8 18 18 8 30 8h26"/><path d="M18 24h7M18 32h12M18 40h7M18 48h12"/>`),
  corner("corner-protection", "Esquina de resguardo", `<path d="M8 56V30C8 18 18 8 30 8h26"/><path d="M21 50V34c0-8 5-13 12-13s12 5 12 13v16M28 50V36c0-4 2-7 5-7s5 3 5 7v14"/>`),
]);

export const CAROUSEL_FRAMES = Object.freeze([
  frame("frame-water", "Marco de agua", `<path d="M8 91V18c0-6 4-10 10-10h52M8 82c12-7 24-7 36 0s22 7 28 2M8 89c12-7 24-7 36 0s22 7 28 2"/>`),
  frame("frame-mountain", "Marco de montaña", `<path d="M8 91V18c0-6 4-10 10-10h52M8 89l16-18 10 9 13-20 25 29"/>`),
  frame("frame-leaf", "Marco de hoja", `<path d="M8 91V18c0-6 4-10 10-10h52M52 89V60M52 67c-10 0-16 5-17 13 10 0 16-4 17-13ZM52 75c9 0 15 5 16 12-9 0-15-4-16-12Z"/>`),
  frame("frame-weave", "Marco de tejido", `<path d="M8 91V18c0-6 4-10 10-10h52M8 82c12-12 22-12 32 0s20 12 32 0M8 89c12-12 22-12 32 0s20 12 32 0"/>`),
  frame("frame-horizon", "Marco de horizonte", `<path d="M8 91V18c0-6 4-10 10-10h52M8 89h22M50 89h22M31 89a10 10 0 0 1 18 0M40 69v7M28 76l5 5M52 76l-5 5"/>`),
  frame("frame-constellation", "Marco de constelación", `<path d="M8 91V18c0-6 4-10 10-10h52M54 69l8 8-6 12M54 69l-9 7-7-5"/><circle cx="54" cy="69" r="1.5"/><circle cx="62" cy="77" r="1.5"/><circle cx="56" cy="89" r="1.5"/><path d="m38 71 2 4 4 2-4 2-2 4-2-4-4-2 4-2Z"/>`),
  frame("frame-archive", "Marco de archivo", `<path d="M8 91V18c0-6 4-10 10-10h52M57 61v28M52 65h10M52 73h7M52 81h10M52 89h7"/>`),
  frame("frame-path", "Marco de camino", `<path d="M8 91V18c0-6 4-10 10-10h52M45 91c1-11 15-13 14-23-1-6-5-9-11-11M66 91c-1-7-6-11-9-16"/>`),
]);

export const CAROUSEL_ORNAMENTS = Object.freeze([
  ornament("ornament-three-dots", "Tres puntos", `<circle cx="32" cy="13" r="4"/><circle cx="18" cy="40" r="4"/><circle cx="46" cy="40" r="4"/>`),
  ornament("ornament-seed-trio", "Trío de semillas", `<path d="M32 30c-8-3-10-12 0-20 10 8 8 17 0 20ZM25 49c-8 3-15-3-13-15 12 0 17 7 13 15ZM39 49c8 3 15-3 13-15-12 0-17 7-13 15Z"/>`),
  ornament("ornament-star-cluster", "Constelación breve", `<path d="m25 18 3 7 7 3-7 3-3 7-3-7-7-3 7-3ZM45 36l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z"/><circle cx="44" cy="14" r="1.5"/><circle cx="14" cy="47" r="1.5"/>`),
  ornament("ornament-rain-marks", "Marcas de lluvia", `<path d="M18 12v10M32 8v14M46 12v10M18 32v10M32 29v14M46 32v10M18 51v5M46 51v5"/><circle cx="32" cy="52" r="2"/>`),
  ornament("ornament-wind-curls", "Espirales de viento", `<path d="M8 22h28c8 0 8-10 1-10-4 0-6 2-7 5M8 32h42c10 0 10-12 2-12-5 0-7 3-8 6M8 42h27c8 0 8 10 1 10-4 0-6-2-7-5"/>`),
  ornament("ornament-pebbles", "Guijarros", `<ellipse cx="20" cy="21" rx="7" ry="5" transform="rotate(20 20 21)"/><ellipse cx="43" cy="19" rx="8" ry="5" transform="rotate(-18 43 19)"/><ellipse cx="31" cy="43" rx="9" ry="6"/>`),
  ornament("ornament-leaf-sprig", "Ramita", `<path d="M14 53 47 14M23 43c-8 0-13-4-14-11 8 0 13 3 14 11ZM32 34c-1-8 3-13 10-15 1 8-3 13-10 15ZM40 25c-7 0-11-4-12-10 7 0 11 3 12 10Z"/>`),
  ornament("ornament-rays", "Rayos", `<path d="M32 9v15M13 18l11 11M7 38h15M51 18 40 29M57 38H42M19 53l7-12M45 53l-7-12"/><circle cx="32" cy="34" r="3"/>`),
  ornament("ornament-contour-rings", "Anillos de contorno", `<path d="M32 7c14 0 25 10 25 24 0 16-10 27-25 27S7 47 7 32 18 7 32 7Z"/><path d="M32 16c9 0 16 6 16 15 0 10-7 18-16 18s-16-7-16-17c0-9 7-16 16-16Z"/><path d="M32 25c5 0 8 3 8 8s-3 8-8 8-8-3-8-8 3-8 8-8Z"/>`),
  ornament("ornament-footsteps", "Huellas breves", `<ellipse cx="20" cy="18" rx="6" ry="10" transform="rotate(-28 20 18)"/><ellipse cx="40" cy="35" rx="6" ry="10" transform="rotate(28 40 35)"/><ellipse cx="24" cy="51" rx="6" ry="10" transform="rotate(-28 24 51)"/>`),
  ornament("ornament-echo-arcs", "Arcos de eco", `<circle cx="12" cy="42" r="2"/><path d="M17 36c7 2 10 5 10 8M22 27c11 4 16 9 16 17M29 17c13 6 20 14 20 27"/><circle cx="27" cy="44" r="1.5"/><circle cx="38" cy="44" r="1.5"/><circle cx="49" cy="44" r="1.5"/>`),
  ornament("ornament-crossed-paths", "Caminos cruzados", `<path d="M8 18c12 0 17 8 24 14s12 14 24 14M8 46c12 0 17-8 24-14s12-14 24-14"/><circle cx="8" cy="18" r="2"/><circle cx="8" cy="46" r="2"/><circle cx="56" cy="18" r="2"/><circle cx="56" cy="46" r="2"/>`),
]);

export const CAROUSEL_PATTERNS = Object.freeze([
  pattern("pattern-water", "Trama de agua", `<path d="M0 12c12-8 24-8 36 0s24 8 36 0 16-7 24-3M0 30c12-8 24-8 36 0s24 8 36 0 16-7 24-3M0 48c12-8 24-8 36 0s24 8 36 0 16-7 24-3M0 66c12-8 24-8 36 0s24 8 36 0 16-7 24-3M0 84c12-8 24-8 36 0s24 8 36 0 16-7 24-3"/>`),
  pattern("pattern-contour", "Trama de contorno", `<path d="M-8 8c22-14 42 0 36 20-4 14-21 17-28 7M67-8c-14 19-4 40 16 38 14-1 20-13 18-24M26 69c-12-18 1-38 22-31 16 5 20 25 9 38-10 12-30 10-39 2M70 96c-8-17 5-32 23-24"/><path d="M4 15c12-8 23 0 19 11-3 8-12 10-18 5M74 1c-8 12-1 24 11 23 8-1 12-8 11-15M32 66c-8-11 0-23 13-19 10 3 12 15 6 23-7 8-19 6-24 1"/>`),
  pattern("pattern-seed", "Trama de semillas", `<path d="M16 18c-7-2-9-10 0-16 8 6 7 14 0 16ZM48 18c-7-2-9-10 0-16 8 6 7 14 0 16ZM80 18c-7-2-9-10 0-16 8 6 7 14 0 16ZM32 50c-7-2-9-10 0-16 8 6 7 14 0 16ZM64 50c-7-2-9-10 0-16 8 6 7 14 0 16ZM16 82c-7-2-9-10 0-16 8 6 7 14 0 16ZM48 82c-7-2-9-10 0-16 8 6 7 14 0 16ZM80 82c-7-2-9-10 0-16 8 6 7 14 0 16Z"/>`),
  pattern("pattern-leaf", "Trama de hojas", `<path d="M8 96V0M8 18c12 0 20-6 22-16-12 0-20 5-22 16ZM8 48c-12 0-20-6-22-16 12 0 20 5 22 16ZM8 78c12 0 20-6 22-16-12 0-20 5-22 16ZM56 96V0M56 33c12 0 20-6 22-16-12 0-20 5-22 16ZM56 63c-12 0-20-6-22-16 12 0 20 5 22 16ZM56 93c12 0 20-6 22-16-12 0-20 5-22 16Z"/>`),
  pattern("pattern-constellation", "Trama de constelación", `<path d="M4 18 22 8l16 20 18-12 18 20 18-10M10 74l18-16 18 12 16-18 24 15"/><circle cx="4" cy="18" r="2"/><circle cx="22" cy="8" r="2"/><circle cx="38" cy="28" r="2"/><circle cx="56" cy="16" r="2"/><circle cx="74" cy="36" r="2"/><circle cx="92" cy="26" r="2"/><circle cx="10" cy="74" r="2"/><circle cx="28" cy="58" r="2"/><circle cx="46" cy="70" r="2"/><circle cx="62" cy="52" r="2"/><circle cx="86" cy="67" r="2"/><path d="m18 38 2 5 5 2-5 2-2 5-2-5-5-2 5-2ZM75 74l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z"/>`),
  pattern("pattern-path", "Trama de caminos", `<path d="M-8 10c25 0 31 22 53 22S73 10 104 10M-8 48c25 0 31 22 53 22s28-22 59-22M-8 86c25 0 31-22 53-22s28 22 59 22"/><path d="M-4 25c20 0 28 15 47 15s27-15 57-15M-4 72c20 0 28 15 47 15s27-15 57-15"/>`),
  pattern("pattern-rain", "Trama de lluvia", `<path d="M8 0v14M24 10v16M40-2v15M56 8v16M72 0v14M88 10v16M8 36v16M24 46v16M40 34v15M56 44v16M72 36v16M88 46v16M8 72v16M24 82v14M40 70v16M56 80v16M72 72v16M88 82v14"/>`),
  pattern("pattern-weave", "Trama de tejido", `<path d="M0 16h96M0 40h96M0 64h96M0 88h96M16 0v96M40 0v96M64 0v96M88 0v96"/><path d="M0 16c12 0 12 24 24 24s12-24 24-24 12 24 24 24 12-24 24-24M0 64c12 0 12 24 24 24s12-24 24-24 12 24 24 24 12-24 24-24"/>`),
]);

export const CAROUSEL_GLYPHS = Object.freeze([...V1_GLYPHS, ...V2_GLYPHS]);
export const CAROUSEL_DIVIDERS = Object.freeze([
  ...V1_DIVIDERS,
  ...V2_DIVIDERS,
]);
export const CAROUSEL_CORNERS = Object.freeze([...V1_CORNERS, ...V2_CORNERS]);

export const CAROUSEL_ICONOGRAPHY = Object.freeze([
  ...CAROUSEL_GLYPHS,
  ...CAROUSEL_DIVIDERS,
  ...CAROUSEL_CORNERS,
  ...CAROUSEL_FRAMES,
  ...CAROUSEL_ORNAMENTS,
  ...CAROUSEL_PATTERNS,
]);

export function renderIconSvg(asset, { ink = ICONOGRAPHY_INK } = {}) {
  const { strokeWidth, linecap, linejoin } = ICONOGRAPHY_STANDARD.line;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${asset.width} ${asset.height}" width="${asset.width}" height="${asset.height}" fill="none" stroke="${ink}" stroke-width="${strokeWidth}" stroke-linecap="${linecap}" stroke-linejoin="${linejoin}">${asset.body}</svg>`;
}
