import { validateCarouselPlan } from "./plan-schema.mjs";

const PALETTE_SEQUENCE = Object.freeze([
  "laguna",
  "paramo",
  "tierra",
  "oro",
  "selva",
  "noche",
  "arcilla",
  "paramo",
  "laguna",
  "tierra",
  "noche",
  "oro",
  "selva",
  "arcilla",
]);

const MIDDLE_NARRATIVE = Object.freeze([
  {
    role: "development",
    designRole: "testimony",
    density: "medium",
    progress: 0.4,
  },
  {
    role: "development",
    designRole: "development",
    density: "short",
    progress: 0.5,
  },
  {
    role: "turn",
    designRole: "turn",
    density: "narrative",
    progress: 0.6,
  },
  {
    role: "climax",
    designRole: "climax",
    density: "medium",
    progress: 0.69,
  },
  {
    role: "climax",
    designRole: "sequence",
    density: "short",
    progress: 0.76,
  },
  {
    role: "climax",
    designRole: "testimony",
    density: "medium",
    progress: 0.82,
  },
]);

const DANGLING_WORDS = new Set([
  "a",
  "al",
  "con",
  "de",
  "del",
  "el",
  "en",
  "la",
  "las",
  "lo",
  "los",
  "o",
  "para",
  "pero",
  "por",
  "que",
  "se",
  "sin",
  "sobre",
  "su",
  "sus",
  "un",
  "una",
  "y",
]);

function hash(value) {
  let result = 2166136261;
  for (const character of String(value || "")) {
    result ^= character.codePointAt(0);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function splitSections(content) {
  const sections = {};
  let current = "Mito";
  sections[current] = [];
  for (const rawLine of String(content || "").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    if (["Mito", "Historia", "Versiones", "Lección", "Leccion", "Similitudes"].includes(line)) {
      current = line === "Leccion" ? "Lección" : line;
      sections[current] ||= [];
      continue;
    }
    sections[current] ||= [];
    sections[current].push(line);
  }
  return Object.fromEntries(
    Object.entries(sections).map(([key, lines]) => [key, lines.join("\n")])
  );
}

function sentences(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ¿])/u)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 20);
}

function wordCount(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function closeThought(value) {
  const clean = String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[\s,;:–—-]+$/, "");
  if (!clean || /[.!?]$/.test(clean)) return clean;
  const words = clean.split(/\s+/);
  while (
    words.length > 4 &&
    DANGLING_WORDS.has(
      words.at(-1).normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase()
    )
  ) {
    words.pop();
  }
  return `${words.join(" ")}.`;
}

function truncateWords(value, maximum) {
  const normalized = String(value || "").replace(/\s+/g, " ").trim();
  const words = normalized.split(/\s+/).filter(Boolean);
  if (words.length <= maximum) return normalized;

  const visibleWindow = words.slice(0, maximum);
  const clauseBoundary = visibleWindow.findLastIndex(
    (word, index) =>
      index >= Math.max(5, Math.floor(maximum * 0.48)) &&
      /[,;:]$/.test(word)
  );
  const fitted =
    clauseBoundary >= 0
      ? visibleWindow.slice(0, clauseBoundary + 1).join(" ")
      : visibleWindow.join(" ");
  return closeThought(fitted);
}

function headlineFrom(value, fallback) {
  const normalized = String(value || fallback || "")
    .replace(/\s+/g, " ")
    .trim();
  const firstSentence =
    normalized.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ¿—])/u)[0] || normalized;
  if (wordCount(firstSentence) <= 16 && firstSentence.length <= 90) {
    return firstSentence;
  }
  const clauses = firstSentence
    .split(
      /[,;:]|\s+(?:y|pero|porque|cuando|mientras|aunque|después|entonces)\s+/i
    )
    .map((clause) => clause.trim())
    .filter(Boolean);
  const firstClause =
    wordCount(clauses[0]) < 3 && clauses[1]
      ? `${clauses[0]}, ${clauses[1]}`
      : clauses[0];
  let headline = truncateWords(firstClause || normalized || fallback, 14);
  while (headline.length > 90 && wordCount(headline) > 4) {
    headline = closeThought(
      headline.replace(/[.!?]$/, "").split(/\s+/).slice(0, -1).join(" ")
    );
  }
  return headline;
}

function bodyFrom(source, start, maximum) {
  const candidates = source.slice(start, start + 4).filter(Boolean);
  const selected = [];
  let selectedWords = 0;
  for (const candidate of candidates) {
    const candidateWords = wordCount(candidate);
    if (candidateWords > maximum && selected.length === 0) {
      return truncateWords(candidate, maximum);
    }
    if (selectedWords + candidateWords > maximum) break;
    selected.push(candidate);
    selectedWords += candidateWords;
  }
  return selected.join(" ") || truncateWords(source.at(-1) || "", maximum);
}

function sequenceCountFor(mythText) {
  const words = wordCount(mythText);
  if (words <= 340) return 11;
  if (words <= 405) return 12;
  if (words <= 435) return 13;
  return 14;
}

function atProgress(source, progress) {
  if (!source.length) return 0;
  return Math.min(
    source.length - 1,
    Math.max(0, Math.floor((source.length - 1) * progress))
  );
}

function hashtag(value) {
  const normalized = String(value || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return `#${normalized || "MitosDeColombia"}`;
}

function makeTextSlide({
  sequence,
  role,
  designRole,
  density,
  source,
  progress,
  palette,
  kind = "typographic",
}) {
  const start = atProgress(source, progress);
  const maximum = density === "narrative" ? 62 : density === "medium" ? 40 : 18;
  const body = bodyFrom(source, start, maximum);
  return {
    sequence,
    kind,
    narrative_role: role,
    design_role: designRole,
    text_density: density,
    headline: headlineFrom(source[start], `Secuencia ${sequence}`),
    body,
    asset_id: "none",
    crop_focus: "centre",
    image_overlay: "",
    alt_text: "",
    palette_id: palette,
  };
}

export function planCarouselLocally({
  myth,
  templates,
  requireThirdImage = true,
}) {
  const sections = splitSections(myth.content);
  const mythSentences = sentences(sections.Mito || myth.content);
  const historySentences = sentences(sections.Historia || "");
  const lesson =
    sentences(sections["Lección"] || "")[0] ||
    myth.excerpt ||
    mythSentences.at(-1) ||
    "El territorio conserva lo que el relato enseña.";
  const template =
    templates[hash(myth.slug) % Math.max(1, templates.length)]?.id ||
    templates[0]?.id;
  const thirdSceneIndex = atProgress(mythSentences, 0.82);
  const thirdScene = bodyFrom(mythSentences, thirdSceneIndex, 55);
  const landscapeIndex = atProgress(mythSentences, 0.34);
  const latitude = Number(myth.latitude);
  const longitude = Number(myth.longitude);
  const sequenceCount = sequenceCountFor(sections.Mito || myth.content);
  const thirdSequence = sequenceCount - 2;
  const meaningSequence = sequenceCount - 1;
  const middleNarrativeCount = sequenceCount - 8;

  const slides = [
    {
      sequence: 1,
      kind: "image",
      narrative_role: "hook",
      headline: myth.title,
      body: truncateWords(myth.excerpt || mythSentences[0], 24),
      asset_id: "existing_portrait",
      crop_focus: "attention",
      image_overlay: "",
      alt_text: `Imagen vertical canónica del mito ${myth.title}, comunidad ${myth.community}.`,
      palette_id: PALETTE_SEQUENCE[0],
    },
    makeTextSlide({
      sequence: 2,
      role: "setting",
      designRole: "context",
      density: "medium",
      source: mythSentences,
      progress: 0,
      palette: PALETTE_SEQUENCE[1],
    }),
    {
      sequence: 3,
      kind: "location",
      narrative_role: "setting",
      design_role: "context",
      headline: [myth.community, myth.region].filter(Boolean).join(" · "),
      body:
        Number.isFinite(latitude) && Number.isFinite(longitude)
          ? `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
          : `Territorio ${myth.region}`,
      asset_id: "none",
      crop_focus: "centre",
      image_overlay: "",
      alt_text: "",
      palette_id: PALETTE_SEQUENCE[2],
    },
    makeTextSlide({
      sequence: 4,
      role: "inciting_event",
      designRole: "sequence",
      density: "short",
      source: mythSentences,
      progress: 0.2,
      palette: PALETTE_SEQUENCE[3],
    }),
    {
      sequence: 5,
      kind: "image",
      narrative_role: "development",
      headline: headlineFrom(
        mythSentences[landscapeIndex],
        "El relato tomó forma."
      ),
      body: bodyFrom(mythSentences, landscapeIndex, 30),
      asset_id: "existing_landscape",
      crop_focus: "attention",
      image_overlay: "",
      alt_text: `Segunda imagen canónica de ${myth.title}, una escena del desarrollo del relato.`,
      palette_id: PALETTE_SEQUENCE[4],
    },
    ...MIDDLE_NARRATIVE.slice(0, middleNarrativeCount).map(
      ({ role, designRole, density, progress }, index) =>
        makeTextSlide({
          sequence: index + 6,
          role,
          designRole,
          density,
          source: mythSentences,
          progress,
          palette: PALETTE_SEQUENCE[index + 5],
        })
    ),
    {
      sequence: thirdSequence,
      kind: "image",
      narrative_role: "climax",
      headline: headlineFrom(thirdScene, "La transformación"),
      body: thirdScene,
      asset_id: "generated_third",
      crop_focus: "attention",
      image_overlay: "",
      alt_text: `Tercera escena creada para ${myth.title}: ${truncateWords(
        thirdScene,
        28
      )}`,
      palette_id: PALETTE_SEQUENCE[thirdSequence - 1],
    },
    {
      ...makeTextSlide({
        sequence: meaningSequence,
        role: "meaning",
        designRole: "context",
        density: "narrative",
        source: historySentences.length ? historySentences : mythSentences,
        progress: 0.25,
        palette: PALETTE_SEQUENCE[meaningSequence - 1],
      }),
      headline: headlineFrom(lesson, "Lo que permanece"),
      body: truncateWords(
        `${lesson} ${historySentences[0] || ""}`.trim(),
        62
      ),
    },
    {
      sequence: sequenceCount,
      kind: "closing",
      narrative_role: "closing",
      design_role: "closing",
      text_density: "short",
      headline: "El relato todavía pregunta.",
      body: truncateWords(
        `¿Qué cambia en nuestra forma de mirar el territorio cuando recordamos que ${lesson
          .replace(/[.!?]+$/, "")
          .toLocaleLowerCase("es-CO")}?`,
        27
      ),
      asset_id: "none",
      crop_focus: "centre",
      image_overlay: "",
      alt_text: "",
      palette_id: PALETTE_SEQUENCE[sequenceCount - 1],
    },
  ];

  const plan = {
    template_id: template,
    editorial_thesis: truncateWords(
      `${myth.title} convierte su núcleo narrativo en una memoria sobre ${lesson
        .replace(/[.!?]+$/, "")
        .toLocaleLowerCase("es-CO")}.`,
      34
    ),
    sequence_count: slides.length,
    palette_id: PALETTE_SEQUENCE[hash(myth.slug) % PALETTE_SEQUENCE.length],
    generated_image: {
      needed: requireThirdImage,
      narrative_gap: thirdScene,
      brief: `Representar una escena nueva del último tercio del mito: ${thirdScene}. El encuadre debe ser distinto de las dos imágenes canónicas y mostrar con claridad la acción o transformación central.`,
      avoid: [
        "repetir el encuadre de la portada",
        "repetir la segunda imagen",
        "inventar personajes o símbolos",
        "texto dentro de la imagen",
        "fantasía genérica",
      ],
    },
    slides,
    caption: `${truncateWords(
      myth.excerpt || mythSentences.slice(0, 2).join(" "),
      65
    )}\n\nEsta versión breve recorre el núcleo del relato, su transformación y la memoria que permanece en el territorio. Lee la versión documentada completa en mitosdecolombia.com/mitos/${myth.slug}`,
    hashtags: [
      hashtag(myth.title),
      "#MitosDeColombia",
      hashtag(myth.community || "Muiscas"),
      "#MemoriaColombiana",
    ],
    factual_guardrails: [
      "No agregar nombres, parentescos, ceremonias, fechas ni símbolos que no aparezcan en la ficha editorial.",
      "Distinguir el núcleo del relato de las interpretaciones coloniales o modernas conservadas en Historia y Versiones.",
      "Mantener el tratamiento cultural muisca sin anacronismos ni generalizaciones sobre todas las comunidades.",
    ],
  };
  const errors = validateCarouselPlan(
    plan,
    templates.map((item) => item.id),
    { requireThirdImage }
  );
  if (errors.length) {
    throw new Error(`Plan local inválido: ${errors.join(", ")}`);
  }
  return {
    provider: "local_editorial_fallback",
    model_id: "deterministic-myth-structure-v1",
    usage: null,
    plan,
  };
}
