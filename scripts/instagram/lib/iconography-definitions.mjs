export const ICONOGRAPHY_VERSION = "v1";
export const ICONOGRAPHY_INK = "#1c5c3f";

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

export const CAROUSEL_GLYPHS = Object.freeze([
  glyph(
    "water-current",
    "territory",
    "Corriente de agua",
    `<path d="M7 26c6-5 12-5 18 0s12 5 18 0 12-5 18 0"/><path d="M7 34c6-5 12-5 18 0s12 5 18 0 12-5 18 0"/><path d="M7 42c6-5 12-5 18 0s12 5 18 0 12-5 18 0"/>`
  ),
  glyph(
    "mountain-paramo",
    "territory",
    "Montaña y páramo",
    `<path d="M5 49 23 18l9 15 7-10 20 26Z"/><path d="m18 34 5-6 4 7 5-2 5 8"/><path d="M12 49c3-8 6-11 10-14M52 49c-3-8-6-11-10-14"/>`
  ),
  glyph(
    "sun",
    "territory",
    "Sol",
    `<circle cx="32" cy="32" r="10"/><path d="M32 7v8M32 49v8M7 32h8M49 32h8M14.3 14.3l5.7 5.7M44 44l5.7 5.7M49.7 14.3 44 20M20 44l-5.7 5.7"/>`
  ),
  glyph(
    "moon",
    "territory",
    "Luna",
    `<path d="M43 10a23 23 0 1 0 8 39A19 19 0 0 1 43 10Z"/><circle cx="24" cy="24" r="1.8"/><circle cx="20" cy="36" r="1.2"/><circle cx="31" cy="45" r="1.4"/>`
  ),
  glyph(
    "wind",
    "territory",
    "Viento",
    `<path d="M7 23h29c8 0 8-10 1-10-4 0-6 2-7 5"/><path d="M7 32h42c10 0 10-12 2-12-5 0-7 3-8 6"/><path d="M7 41h27c8 0 8 10 1 10-4 0-6-2-7-5"/>`
  ),
  glyph(
    "forest-leaf",
    "territory",
    "Bosque y hoja",
    `<path d="M32 56V10M32 17c-9 0-15 5-16 13 9 0 15-4 16-13ZM32 28c10 0 16 5 17 13-10 0-16-4-17-13ZM32 39c-8 0-13 4-14 11 8 0 13-3 14-11Z"/>`
  ),
  glyph(
    "origin-spiral",
    "narrative",
    "Origen",
    `<path d="M34 33c0 4-3 7-7 7-6 0-10-5-10-11 0-9 7-16 16-16 12 0 21 10 21 22 0 15-12 26-27 26C9 61 3 48 3 33 3 14 18 3 34 3"/>`
  ),
  glyph(
    "transformation",
    "narrative",
    "Transformación",
    `<path d="M19 10c12 5 18 13 13 24-4 10-1 17 9 21"/><path d="M45 10C33 15 27 23 32 34c4 10 1 17-9 21"/><path d="m15 13 4-3 5 2M49 13l-4-3-5 2"/><circle cx="20" cy="10" r="1.2"/><circle cx="44" cy="10" r="1.2"/>`
  ),
  glyph(
    "memory-knot",
    "narrative",
    "Memoria",
    `<path d="M32 10c9-9 18 0 12 8l-18 24c-6 8 3 17 12 8l12-12c8-8-1-17-9-11L22 42c-8 6-17-3-11-12l12-18c6-9 15-1 9 7L18 37c-6 8 3 17 11 11l23-18"/>`
  ),
  glyph(
    "journey-path",
    "narrative",
    "Camino",
    `<path d="M5 28 18 16l9 8 8-12 24 20"/><path d="M21 58c1-13 17-13 14-25-1-5-5-7-10-8M42 58c-1-7-7-10-8-15"/>`
  ),
  glyph(
    "warning-radiance",
    "narrative",
    "Advertencia",
    `<path d="m32 21 11 11-11 11-11-11Z"/><path d="M32 5v8M32 51v8M5 32h8M51 32h8M12.9 12.9l5.6 5.6M45.5 45.5l5.6 5.6M51.1 12.9l-5.6 5.6M18.5 45.5l-5.6 5.6"/>`
  ),
  glyph(
    "return-water",
    "narrative",
    "Regreso al agua",
    `<path d="M12 34a20 20 0 1 1 8 16"/><path d="m8 27 4 7 7-4"/><path d="M9 50c5-4 10-4 15 0s10 4 15 0 10-4 16 0"/>`
  ),
  glyph(
    "gathering-circle",
    "community",
    "Reunión",
    `<circle cx="32" cy="32" r="12"/><circle cx="32" cy="8" r="4"/><circle cx="52.8" cy="20" r="4"/><circle cx="52.8" cy="44" r="4"/><circle cx="32" cy="56" r="4"/><circle cx="11.2" cy="44" r="4"/><circle cx="11.2" cy="20" r="4"/>`
  ),
  glyph(
    "weaving",
    "community",
    "Tejido",
    `<path d="M8 16h48M8 26h48M8 38h48M8 48h48"/><path d="M16 8v48M28 8v48M40 8v48M52 8v48"/><path d="M8 26c12 0 12 12 24 12s12-12 24-12M8 38c12 0 12-12 24-12s12 12 24 12"/>`
  ),
  glyph(
    "oral-voice",
    "community",
    "Oralidad",
    `<path d="M23 10c-8 2-12 9-12 18 0 7 3 11 8 14v10"/><path d="M23 19c-3 2-4 5-3 8l-4 3 5 2c0 4 2 6 6 6"/><path d="M35 22c5 3 7 7 7 10s-2 7-7 10M42 16c7 5 11 10 11 16s-4 11-11 16"/>`
  ),
  glyph(
    "territory-contour",
    "community",
    "Territorio",
    `<path d="M32 7c13 0 24 9 24 22 0 16-10 28-25 28C15 57 7 46 7 32 7 18 18 7 32 7Z"/><path d="M32 16c9 0 16 6 16 15 0 10-7 17-17 17-9 0-15-7-15-16 0-10 7-16 16-16Z"/><path d="M32 25c5 0 8 3 8 8 0 4-3 7-8 7s-8-3-8-7c0-5 3-8 8-8Z"/><circle cx="32" cy="32" r="1.5"/>`
  ),
  glyph(
    "shared-hearth",
    "community",
    "Casa y fogón",
    `<path d="M8 30 32 10l24 20v25H8Z"/><path d="M25 55V39h14v16"/><path d="M32 43c-6-5-1-10 1-14 6 6 7 11-1 14Z"/><path d="M15 55h34"/>`
  ),
  glyph(
    "reciprocity",
    "community",
    "Reciprocidad",
    `<circle cx="32" cy="32" r="3.5"/><path d="M8 22c8-7 15-8 22-3l7 5-9 5-7-4-9 7"/><path d="M56 42c-8 7-15 8-22 3l-7-5 9-5 7 4 9-7"/><path d="m8 22 5-8M56 42l-5 8"/>`
  ),
  glyph(
    "region-andina",
    "region",
    "Región Andina",
    `<path d="M5 49 18 32l8 8 10-19 23 28"/><path d="M7 55c8-4 16-4 24 0s16 4 26 0"/><path d="m14 43 8-17 7 10"/>`
  ),
  glyph(
    "region-caribe",
    "region",
    "Región Caribe",
    `<path d="M15 31a17 17 0 0 1 34 0"/><path d="M32 8v7M10 17l6 4M54 17l-6 4"/><path d="M6 40c6-5 12-5 18 0s12 5 18 0 12-5 16 0M6 49c6-5 12-5 18 0s12 5 18 0 12-5 16 0"/>`
  ),
  glyph(
    "region-pacifico",
    "region",
    "Región Pacífico",
    `<path d="M15 23c1-8 8-12 15-9 5-7 17-3 17 6 8 0 10 11 2 14H17c-9 0-10-10-2-11Z"/><path d="M20 40v7M32 40v9M44 40v7"/><path d="M13 56c6-5 12-5 18 0s12 5 20 0M26 55v-9l-5 5M38 55v-9l5 5"/>`
  ),
  glyph(
    "region-amazonia",
    "region",
    "Región Amazonía",
    `<path d="M29 53C14 46 12 27 29 10c17 17 15 36 0 43Z"/><path d="M29 17v36M29 29l-9-7M29 39l10-8"/><path d="M36 56c4-8 8-11 14-9 5 2 7 7 9 7"/>`
  ),
  glyph(
    "region-orinoquia",
    "region",
    "Región Orinoquía",
    `<circle cx="32" cy="18" r="5"/><path d="M7 34c8-5 16-5 25 0s17 5 25 0M7 43h50M10 51c8-3 15-3 22 0s14 3 22 0"/>`
  ),
  glyph(
    "region-insular",
    "region",
    "Región Insular",
    `<circle cx="32" cy="26" r="17"/><path d="m32 14 4 8 8 4-8 4-4 8-4-8-8-4 8-4Z"/><path d="M7 50c6-5 12-5 18 0s12 5 18 0 12-5 14 0"/>`
  ),
]);

export const CAROUSEL_DIVIDERS = Object.freeze([
  divider(
    "divider-water",
    "Separador de agua",
    `<path d="M8 32c28-15 56-15 84 0s56 15 84 0 56-15 84 0 56 15 84 0 56-15 80 0"/><circle cx="8" cy="32" r="2"/><circle cx="424" cy="32" r="2"/>`
  ),
  divider(
    "divider-mountain",
    "Separador de montaña",
    `<path d="M8 42h138l35-25 25 18 23-13 34 20h161"/><circle cx="8" cy="42" r="2"/><circle cx="424" cy="42" r="2"/>`
  ),
  divider(
    "divider-seed",
    "Separador de semilla",
    `<path d="M8 38h178M246 38h178"/><circle cx="8" cy="38" r="2"/><circle cx="424" cy="38" r="2"/><path d="M216 38V20c-10 0-17 5-18 14 8 1 14-1 18-8M216 29c9 0 15-5 16-13-8-1-13 1-16 7"/>`
  ),
  divider(
    "divider-path",
    "Separador de camino",
    `<path d="M8 38h142c29 0 35-23 61-23 27 0 31 34 62 34 28 0 34-20 58-20h93"/><circle cx="8" cy="38" r="2"/><circle cx="424" cy="38" r="2"/>`
  ),
  divider(
    "divider-weave",
    "Separador de tejido",
    `<path d="M8 32h92c24 0 24-16 48-16s24 32 48 32 24-32 48-32 24 32 48 32 24-16 48-16h84"/><path d="M100 32c24 0 24 16 48 16s24-32 48-32 24 32 48 32 24-32 48-32 24 16 48 16"/>`
  ),
  divider(
    "divider-horizon",
    "Separador de horizonte",
    `<path d="M8 42h154M270 42h154"/><circle cx="8" cy="42" r="2"/><circle cx="424" cy="42" r="2"/><path d="M174 42a42 42 0 0 1 84 0M216 10v8M184 21l7 6M248 21l-7 6"/>`
  ),
]);

export const CAROUSEL_CORNERS = Object.freeze([
  corner(
    "corner-water",
    "Esquina de agua",
    `<path d="M8 56V34c0-14 12-26 26-26h22"/><path d="M8 45c8-5 15-5 22 0s14 5 22 0"/>`
  ),
  corner(
    "corner-mountain",
    "Esquina de montaña",
    `<path d="M8 56V34c0-14 12-26 26-26h22"/><path d="m12 48 10-14 7 8 8-13 13 18"/>`
  ),
  corner(
    "corner-leaf",
    "Esquina de hoja",
    `<path d="M8 56V34c0-14 12-26 26-26h22"/><path d="M24 45c2-12 9-19 21-20-1 12-8 19-21 20ZM24 45l18-17"/>`
  ),
  corner(
    "corner-weave",
    "Esquina de tejido",
    `<path d="M8 56V34c0-14 12-26 26-26h22"/><path d="M18 43c8-10 15-10 22 0s13 10 19 2M17 50c8-10 15-10 22 0s13 10 19 2"/>`
  ),
]);

export const CAROUSEL_ICONOGRAPHY = Object.freeze([
  ...CAROUSEL_GLYPHS,
  ...CAROUSEL_DIVIDERS,
  ...CAROUSEL_CORNERS,
]);

export function renderIconSvg(asset, { ink = ICONOGRAPHY_INK } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${asset.width} ${asset.height}" width="${asset.width}" height="${asset.height}" fill="none" stroke="${ink}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${asset.body}</svg>`;
}
