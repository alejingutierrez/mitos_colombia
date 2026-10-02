const BASE = "/motifs/carousel/v2";

const GLYPH_IDS = Object.freeze([
  ["water-current", "territory", "Corriente de agua"],
  ["mountain-paramo", "territory", "Montaña y páramo"],
  ["sun", "territory", "Sol"],
  ["moon", "territory", "Luna"],
  ["wind", "territory", "Viento"],
  ["forest-leaf", "territory", "Bosque y hoja"],
  ["origin-spiral", "narrative", "Origen"],
  ["transformation", "narrative", "Transformación"],
  ["memory-knot", "narrative", "Memoria"],
  ["journey-path", "narrative", "Camino"],
  ["warning-radiance", "narrative", "Advertencia"],
  ["return-water", "narrative", "Regreso al agua"],
  ["gathering-circle", "community", "Reunión"],
  ["weaving", "community", "Tejido"],
  ["oral-voice", "community", "Oralidad"],
  ["territory-contour", "community", "Territorio"],
  ["shared-hearth", "community", "Casa y fogón"],
  ["reciprocity", "community", "Reciprocidad"],
  ["region-andina", "region", "Región Andina"],
  ["region-caribe", "region", "Región Caribe"],
  ["region-pacifico", "region", "Región Pacífico"],
  ["region-amazonia", "region", "Región Amazonía"],
  ["region-orinoquia", "region", "Región Orinoquía"],
  ["region-insular", "region", "Región Insular"],
  ["rain-cloud", "atmosphere", "Lluvia"],
  ["lightning", "atmosphere", "Relámpago"],
  ["mist", "atmosphere", "Niebla"],
  ["stone", "atmosphere", "Piedra"],
  ["ember", "atmosphere", "Brasa"],
  ["seed-sprout", "atmosphere", "Semilla"],
  ["time-dawn", "time", "Amanecer"],
  ["time-dusk", "time", "Anochecer"],
  ["season-cycle", "time", "Ciclo"],
  ["time-pause", "time", "Pausa"],
  ["generations", "time", "Generaciones"],
  ["time-continuation", "time", "Continuación"],
  ["presence-serpent", "presence", "Presencia serpiente"],
  ["presence-feline", "presence", "Presencia felina"],
  ["presence-bird", "presence", "Presencia ave"],
  ["presence-amphibian", "presence", "Presencia anfibia"],
  ["presence-fish", "presence", "Presencia pez"],
  ["presence-light", "presence", "Presencia luminosa"],
  ["signal-footprint", "signal", "Huella"],
  ["signal-witness", "signal", "Testigo"],
  ["signal-echo", "signal", "Eco"],
  ["signal-threshold", "signal", "Umbral"],
  ["signal-shelter", "signal", "Resguardo"],
  ["signal-encounter", "signal", "Encuentro"],
]);

const DIVIDER_IDS = Object.freeze([
  ["divider-water", "Separador de agua"],
  ["divider-mountain", "Separador de montaña"],
  ["divider-seed", "Separador de semilla"],
  ["divider-path", "Separador de camino"],
  ["divider-weave", "Separador de tejido"],
  ["divider-horizon", "Separador de horizonte"],
  ["divider-rain", "Separador de lluvia"],
  ["divider-constellation", "Separador de constelación"],
  ["divider-footsteps", "Separador de huellas"],
  ["divider-ember", "Separador de brasa"],
  ["divider-echo", "Separador de eco"],
  ["divider-two-paths", "Separador de dos caminos"],
]);

const CORNER_IDS = Object.freeze([
  ["corner-water", "Esquina de agua"],
  ["corner-mountain", "Esquina de montaña"],
  ["corner-leaf", "Esquina de hoja"],
  ["corner-weave", "Esquina de tejido"],
  ["corner-sun", "Esquina de sol"],
  ["corner-moon", "Esquina de luna"],
  ["corner-seed", "Esquina de semilla"],
  ["corner-path", "Esquina de camino"],
  ["corner-rain", "Esquina de lluvia"],
  ["corner-constellation", "Esquina de constelación"],
  ["corner-archive", "Esquina de archivo"],
  ["corner-protection", "Esquina de resguardo"],
]);

const FRAME_IDS = Object.freeze([
  ["frame-water", "Marco de agua"],
  ["frame-mountain", "Marco de montaña"],
  ["frame-leaf", "Marco de hoja"],
  ["frame-weave", "Marco de tejido"],
  ["frame-horizon", "Marco de horizonte"],
  ["frame-constellation", "Marco de constelación"],
  ["frame-archive", "Marco de archivo"],
  ["frame-path", "Marco de camino"],
]);

const ORNAMENT_IDS = Object.freeze([
  ["ornament-three-dots", "Tres puntos"],
  ["ornament-seed-trio", "Trío de semillas"],
  ["ornament-star-cluster", "Constelación breve"],
  ["ornament-rain-marks", "Marcas de lluvia"],
  ["ornament-wind-curls", "Espirales de viento"],
  ["ornament-pebbles", "Guijarros"],
  ["ornament-leaf-sprig", "Ramita"],
  ["ornament-rays", "Rayos"],
  ["ornament-contour-rings", "Anillos de contorno"],
  ["ornament-footsteps", "Huellas breves"],
  ["ornament-echo-arcs", "Arcos de eco"],
  ["ornament-crossed-paths", "Caminos cruzados"],
]);

const PATTERN_IDS = Object.freeze([
  ["pattern-water", "Trama de agua"],
  ["pattern-contour", "Trama de contorno"],
  ["pattern-seed", "Trama de semillas"],
  ["pattern-leaf", "Trama de hojas"],
  ["pattern-constellation", "Trama de constelación"],
  ["pattern-path", "Trama de caminos"],
  ["pattern-rain", "Trama de lluvia"],
  ["pattern-weave", "Trama de tejido"],
]);

function glyph([id, group, label]) {
  return Object.freeze({
    id,
    group,
    label,
    kind: "glyph",
    src: `${BASE}/glyphs/${id}-1024.png`,
  });
}

function divider([id, label]) {
  return Object.freeze({
    id,
    group: "separator",
    label,
    kind: "divider",
    src: `${BASE}/dividers/${id}-2160x320.png`,
  });
}

function corner([id, label]) {
  return Object.freeze({
    id,
    group: "corner",
    label,
    kind: "corner",
    src: `${BASE}/corners/${id}-1024.png`,
  });
}

function frame([id, label]) {
  return Object.freeze({
    id,
    group: "frame",
    label,
    kind: "frame",
    src: `${BASE}/frames/${id}-1080x1350.png`,
  });
}

function squareAsset(kind, group) {
  return ([id, label]) =>
    Object.freeze({
      id,
      group,
      label,
      kind,
      src: `${BASE}/${kind}s/${id}-1024.png`,
    });
}

export const INSTAGRAM_ICONOGRAPHY_STANDARD = Object.freeze({
  edition: "system-100",
  version: "v2",
  line: Object.freeze({
    strokeWidth: 2.6,
    linecap: "round",
    linejoin: "round",
    fill: "none",
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

export const INSTAGRAM_ICONOGRAPHY = Object.freeze([
  ...GLYPH_IDS.map(glyph),
  ...DIVIDER_IDS.map(divider),
  ...CORNER_IDS.map(corner),
  ...FRAME_IDS.map(frame),
  ...ORNAMENT_IDS.map(squareAsset("ornament", "ornament")),
  ...PATTERN_IDS.map(squareAsset("pattern", "pattern")),
]);

export const INSTAGRAM_ICONOGRAPHY_BY_ID = Object.freeze(
  Object.fromEntries(INSTAGRAM_ICONOGRAPHY.map((asset) => [asset.id, asset]))
);

const REGION_MOTIF = Object.freeze({
  amazonia: "region-amazonia",
  amazonica: "region-amazonia",
  andina: "region-andina",
  caribe: "region-caribe",
  insular: "region-insular",
  orinoquia: "region-orinoquia",
  pacifico: "region-pacifico",
});

function canonical(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("es-CO")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function resolved(id, reason) {
  const asset = INSTAGRAM_ICONOGRAPHY_BY_ID[id];
  return asset ? { ...asset, reason } : null;
}

function usageCount(usageById, id) {
  if (usageById instanceof Map) return Number(usageById.get(id) || 0);
  return Number(usageById?.[id] || 0);
}

function candidatePriority(reason) {
  if (/^(semantic|narrative_role|layout|primary-group):/.test(reason)) return 0;
  if (/^fallback:region/.test(reason)) return 1;
  return 2;
}

function leastUsedAvailable(candidates, excludedIds, usageById) {
  const excluded =
    excludedIds instanceof Set ? excludedIds : new Set(excludedIds || []);
  const seen = new Set();
  const available = candidates
    .map(([id, reason], index) => ({
      id,
      reason,
      index,
      priority: candidatePriority(reason),
      usage: usageCount(usageById, id),
    }))
    .filter(({ id }) => {
      if (excluded.has(id) || seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  if (!available.length) return null;
  const minimumPriority = Math.min(...available.map(({ priority }) => priority));
  const candidate = available
    .filter(({ priority }) => priority === minimumPriority)
    .sort((left, right) => left.usage - right.usage || left.index - right.index)[0];
  return resolved(candidate.id, candidate.reason);
}

export function selectInstagramGraphicMotif({
  slide,
  copy,
  myth,
  excludedIds = [],
  usageById = {},
}) {
  if (slide?.template_family !== "typographic") return null;
  const text = canonical(
    `${copy?.title || slide?.headline || ""} ${copy?.body || slide?.body || ""}`
  );
  const role = slide?.narrative_role || "";

  const candidates = [];

  if (role === "closing") {
    candidates.push(["divider-horizon", "narrative_role:closing"]);
    candidates.push(["time-continuation", "narrative_role:closing"]);
    candidates.push(["season-cycle", "narrative_role:closing"]);
  }
  if (role === "meaning") {
    candidates.push(["origin-spiral", "narrative_role:meaning"]);
    candidates.push(["generations", "narrative_role:meaning"]);
    candidates.push(["reciprocity", "narrative_role:meaning"]);
  }
  if (/montana|paramo|cumbre|cerro|sierra|altiplano/.test(text)) {
    candidates.push(["mountain-paramo", "semantic:mountain"]);
    candidates.push(["divider-mountain", "semantic:mountain-divider"]);
  }
  if (/viento|brisa|aire|soplo/.test(text)) {
    candidates.push(["wind", "semantic:wind"]);
  }
  if (/piedra|roca|penasco/.test(text)) {
    candidates.push(["stone", "semantic:stone"]);
  }
  if (/amanecer|alba|salio el sol/.test(text)) {
    candidates.push(["time-dawn", "semantic:dawn"]);
  }
  if (/anochecer|noche|oscuridad/.test(text)) {
    candidates.push(["time-dusk", "semantic:dusk"]);
  }
  if (/lluvia|tormenta|aguacero/.test(text)) {
    candidates.push(["rain-cloud", "semantic:rain"]);
    candidates.push(["divider-rain", "semantic:rain-alternate"]);
  }
  if (/rayo|relampago|trueno/.test(text)) {
    candidates.push(["lightning", "semantic:lightning"]);
  }
  if (/niebla|neblina|bruma/.test(text)) {
    candidates.push(["mist", "semantic:mist"]);
  }
  if (/fuego|brasa|ceniza/.test(text)) {
    candidates.push(["ember", "semantic:ember"]);
    candidates.push(["divider-ember", "semantic:ember-divider"]);
  }
  if (/semilla|germino|brotar|nacio/.test(text)) {
    candidates.push(["seed-sprout", "semantic:seed"]);
    candidates.push(["divider-seed", "semantic:seed-divider"]);
  }
  if (/ciclo|estacion|temporada|repet|cada ano/.test(text)) {
    candidates.push(["season-cycle", "semantic:cycle"]);
  }
  if (/pausa|silencio|espera|detuvo|quietud/.test(text)) {
    candidates.push(["time-pause", "semantic:pause"]);
  }
  if (/continu|despues|herencia|permanece|siguio|siguieron/.test(text)) {
    candidates.push(["time-continuation", "semantic:continuation"]);
  }
  if (role === "setting" && /laguna|agua|rio|mar|orilla|lluvia/.test(text)) {
    candidates.push(["divider-water", "semantic:water-setting"]);
  }
  if (/disputa|limite|advert|peligro|prohib|precepto/.test(text)) {
    candidates.push(["warning-radiance", "semantic:warning"]);
  }
  if (/serpiente|culebra/.test(text)) {
    candidates.push(["presence-serpent", "semantic:serpent"]);
  }
  if (/jaguar|tigre|felino/.test(text)) {
    candidates.push(["presence-feline", "semantic:feline"]);
  }
  if (/ave|pajaro|aguila|condor|vuelo/.test(text)) {
    candidates.push(["presence-bird", "semantic:bird"]);
  }
  if (/rana|sapo|anfibio/.test(text)) {
    candidates.push(["presence-amphibian", "semantic:amphibian"]);
  }
  if (/pez|peces/.test(text)) {
    candidates.push(["presence-fish", "semantic:fish"]);
  }
  if (/luz|luminos|resplandor/.test(text)) {
    candidates.push(["presence-light", "semantic:light"]);
  }
  if (/transform|cambio|mudar|volvieron al agua/.test(text)) {
    candidates.push(["transformation", "semantic:transformation"]);
  }
  if (/camino|recorr|cruzaron|viaje|sendero|ladera|valle|sabana/.test(text)) {
    candidates.push(["journey-path", "semantic:journey"]);
    candidates.push(["divider-path", "semantic:journey-alternate"]);
    candidates.push(["divider-two-paths", "semantic:journey-crossing"]);
  }
  if (/casa|fogon|familia|pueblo|comunidad/.test(text)) {
    candidates.push(["shared-hearth", "semantic:community"]);
    candidates.push(["gathering-circle", "semantic:community-alternate"]);
  }
  if (/laguna|agua|rio|mar|orilla|lluvia/.test(text)) {
    candidates.push(["water-current", "semantic:water"]);
  }
  if (/memoria|record|relato|historia/.test(text)) {
    candidates.push(["memory-knot", "semantic:memory"]);
  }
  if (/tejido|tejer|trama|entrelaz|manta/.test(text)) {
    candidates.push(["weaving", "semantic:weaving"]);
    candidates.push(["divider-weave", "semantic:weaving-divider"]);
  }
  if (/estrella|constelacion|cielo/.test(text)) {
    candidates.push(["divider-constellation", "semantic:constellation"]);
  }
  if (/generacion|antepasad|descendient/.test(text)) {
    candidates.push(["generations", "semantic:generations"]);
  }
  if (/huella|rastro|pisada/.test(text)) {
    candidates.push(["signal-footprint", "semantic:footprint"]);
    candidates.push(["divider-footsteps", "semantic:footprint-divider"]);
  }
  if (/testigo|mirar|observar|vio|vieron/.test(text)) {
    candidates.push(["signal-witness", "semantic:witness"]);
  }
  if (/eco|resono|resonar/.test(text)) {
    candidates.push(["signal-echo", "semantic:echo"]);
    candidates.push(["divider-echo", "semantic:echo-divider"]);
  }
  if (/umbral|puerta|entrada|salida/.test(text)) {
    candidates.push(["signal-threshold", "semantic:threshold"]);
  }
  if (/resguardo|refugio|proteger|proteccion/.test(text)) {
    candidates.push(["signal-shelter", "semantic:shelter"]);
  }
  if (/encuentro|reunir|reunieron/.test(text)) {
    candidates.push(["signal-encounter", "semantic:encounter"]);
  }
  if (/voz|dijo|conto|palabra|escucho/.test(text)) {
    candidates.push(["oral-voice", "semantic:orality"]);
  }
  if (
    /regres|retorn|volv/.test(text) &&
    /agua|laguna|rio|mar|orilla/.test(text)
  ) {
    candidates.push(["return-water", "semantic:return-water"]);
  }

  const region = canonical(myth?.region).replace(/\s+/g, "");
  if (REGION_MOTIF[region]) {
    candidates.push([REGION_MOTIF[region], "fallback:region"]);
  }
  candidates.push(
    ["territory-contour", "fallback:territory"],
    ["weaving", "fallback:shared-practice"],
    ["reciprocity", "fallback:shared-practice"],
    ["forest-leaf", "fallback:territory"],
    ["moon", "fallback:territory"],
    ["sun", "fallback:territory"]
  );
  return leastUsedAvailable(candidates, excludedIds, usageById);
}

const SUPPORT_BY_LAYOUT = Object.freeze({
  type_quote: [
    "ornament-echo-arcs",
    "corner-constellation",
    "frame-constellation",
    "pattern-constellation",
    "ornament-star-cluster",
  ],
  type_monument: [
    "frame-horizon",
    "ornament-rays",
    "frame-mountain",
    "corner-mountain",
    "corner-sun",
  ],
  type_initial: [
    "corner-seed",
    "ornament-seed-trio",
    "pattern-seed",
    "frame-leaf",
    "corner-leaf",
    "pattern-leaf",
    "ornament-leaf-sprig",
  ],
  type_whisper: [
    "ornament-star-cluster",
    "corner-moon",
    "ornament-rain-marks",
    "pattern-rain",
    "ornament-echo-arcs",
  ],
  type_archive_note: [
    "frame-archive",
    "corner-archive",
    "ornament-pebbles",
    "pattern-contour",
  ],
  type_vocabulary: [
    "frame-weave",
    "ornament-three-dots",
    "corner-weave",
    "pattern-weave",
    "frame-horizon",
  ],
  type_margin: [
    "corner-path",
    "ornament-crossed-paths",
    "frame-path",
    "pattern-path",
    "ornament-footsteps",
  ],
  type_ledger: [
    "corner-archive",
    "ornament-three-dots",
    "frame-archive",
    "ornament-pebbles",
    "ornament-contour-rings",
    "pattern-contour",
  ],
  type_manifesto: [
    "frame-mountain",
    "ornament-rays",
    "corner-mountain",
    "corner-sun",
  ],
  type_columns: [
    "frame-path",
    "ornament-crossed-paths",
    "pattern-path",
    "ornament-wind-curls",
  ],
  type_long_line: [
    "ornament-wind-curls",
    "corner-water",
    "frame-water",
    "pattern-water",
  ],
  type_thesis: [
    "frame-water",
    "ornament-contour-rings",
    "corner-water",
    "pattern-water",
    "pattern-contour",
    "corner-protection",
  ],
  type_question: [
    "corner-constellation",
    "ornament-star-cluster",
    "frame-constellation",
    "pattern-constellation",
    "corner-protection",
  ],
  type_triptych: [
    "pattern-weave",
    "ornament-three-dots",
    "corner-weave",
    "pattern-seed",
    "pattern-leaf",
    "frame-leaf",
    "ornament-seed-trio",
    "ornament-leaf-sprig",
  ],
  type_stair: [
    "ornament-footsteps",
    "corner-path",
    "frame-path",
    "pattern-path",
  ],
  type_blocks: [
    "frame-archive",
    "ornament-three-dots",
    "corner-archive",
    "corner-rain",
    "ornament-rain-marks",
    "pattern-rain",
  ],
});

export const INSTAGRAM_GRAPHIC_COVERAGE_ROUTES = Object.freeze({
  primary: Object.freeze([
    ...GLYPH_IDS.map(([id]) => id),
    ...DIVIDER_IDS.map(([id]) => id),
  ]),
  support: Object.freeze([
    ...new Set(Object.values(SUPPORT_BY_LAYOUT).flat()),
  ]),
});

export function selectInstagramSupportDecoration({
  slide,
  copy,
  primaryMotif,
  excludedIds = [],
  usageById = {},
}) {
  if (slide?.template_family !== "typographic") return null;
  const text = canonical(
    `${copy?.title || slide?.headline || ""} ${copy?.body || slide?.body || ""}`
  );
  const candidates = [];
  const layoutCandidates = SUPPORT_BY_LAYOUT[slide?.template_layout] || [];
  candidates.push(
    ...layoutCandidates.map((id) => [id, `layout:${slide.template_layout}`])
  );
  if (/agua|laguna|rio|lluvia/.test(text)) {
    candidates.push(["frame-water", "semantic-support:water"]);
    candidates.push(["pattern-water", "semantic-support:water-pattern"]);
  }
  if (/camino|viaje|recorr|huella/.test(text)) {
    candidates.push(["frame-path", "semantic-support:path"]);
    candidates.push(["ornament-footsteps", "semantic-support:footsteps"]);
  }
  if (/memoria|relato|historia|archivo/.test(text)) {
    candidates.push(["frame-archive", "semantic-support:archive"]);
  }
  if (primaryMotif?.group === "atmosphere") {
    candidates.push(["ornament-rain-marks", "primary-group:atmosphere"]);
  }
  candidates.push(
    ["ornament-three-dots", "fallback:rhythm"],
    ["ornament-leaf-sprig", "fallback:territory"],
    ["ornament-contour-rings", "fallback:territory"],
    ["ornament-crossed-paths", "fallback:continuity"],
    ["corner-protection", "fallback:boundary"],
    ["pattern-contour", "fallback:texture"]
  );
  return leastUsedAvailable(candidates, excludedIds, usageById);
}
