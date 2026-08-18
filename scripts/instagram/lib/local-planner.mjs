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

const FEED_PALETTES = Object.freeze([
  "laguna",
  "paramo",
  "tierra",
  "oro",
  "selva",
  "noche",
  "arcilla",
]);

const FEED_ARCHETYPES = Object.freeze([
  Object.freeze({
    id: "territory_to_scene",
    withoutThird: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    withThird: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  }),
  Object.freeze({
    id: "scene_then_locator",
    withoutThird: [0, 1, 4, 3, 5, 2, 6, 7, 8],
    withThird: [0, 1, 4, 3, 5, 2, 6, 7, 8, 9],
  }),
  Object.freeze({
    id: "context_before_scene",
    withoutThird: [0, 1, 2, 4, 3, 5, 6, 7, 8],
    withThird: [0, 1, 2, 4, 3, 5, 6, 7, 8, 9],
  }),
  Object.freeze({
    id: "scene_then_turn_then_map",
    withoutThird: [0, 1, 4, 3, 6, 5, 2, 7, 8],
    withThird: [0, 1, 4, 3, 6, 2, 5, 7, 8, 9],
  }),
  Object.freeze({
    id: "pause_to_territory",
    withoutThird: [0, 1, 5, 2, 3, 4, 6, 7, 8],
    withThird: [0, 1, 5, 2, 3, 4, 6, 7, 8, 9],
  }),
  Object.freeze({
    id: "delayed_landscape",
    withoutThird: [0, 1, 4, 5, 3, 6, 2, 7, 8],
    withThird: [0, 1, 4, 5, 3, 2, 6, 7, 8, 9],
  }),
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

const CLOSING_TOPICS = Object.freeze([
  [/comunidad/iu, "la comunidad"],
  [/saber|enseñ/iu, "el saber"],
  [/v[ií]ncul/iu, "los vínculos"],
  [/libertad/iu, "la libertad"],
  [/mundo|habitar/iu, "el mundo compartido"],
  [/poder/iu, "el poder"],
  [/claridad|sombra/iu, "la luz y la sombra"],
  [/esperanza/iu, "la esperanza"],
  [/causa justa|instrumentos/iu, "una causa justa"],
  [/riqueza/iu, "la riqueza"],
  [/responsabilidad/iu, "la responsabilidad"],
  [/valor/iu, "el valor"],
  [/autoridad/iu, "la autoridad"],
  [/luces|diferencia/iu, "la diferencia"],
  [/mañana|sabidur[ií]a/iu, "el mañana"],
  [/paciencia/iu, "la paciencia"],
  [/equivoc|error/iu, "el error"],
  [/alegr[ií]a/iu, "la alegría"],
  [/deseo/iu, "el deseo"],
  [/prever|posible/iu, "lo posible"],
  [/humanidad|presencia de otro/iu, "la humanidad"],
  [/memoria/iu, "la memoria"],
  [/capacidad/iu, "el valor de una persona"],
  [/heredar|pasado/iu, "la herencia"],
  [/pertenecer/iu, "la pertenencia"],
  [/observar|orden/iu, "el orden"],
  [/honor/iu, "el honor"],
  [/amar|definirlo/iu, "el amor y el límite"],
  [/ley|legitimidad/iu, "la ley"],
  [/gobernar|inteligencia/iu, "el gobierno"],
  [/dolor/iu, "el dolor"],
  [/verdad/iu, "la verdad"],
  [/miedo/iu, "el miedo"],
  [/mirada/iu, "la mirada"],
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
  if (wordCount(firstSentence) <= 16 && firstSentence.length <= 60) {
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
  while (headline.length > 60 && wordCount(headline) > 4) {
    headline = closeThought(
      headline.replace(/[.!?]$/, "").split(/\s+/).slice(0, -1).join(" ")
    );
  }
  return headline;
}

function bodyAfterHeadline(source, index, headline, maximum) {
  if (maximum <= 0) return "";
  const currentWords = String(source[index] || "")
    .replace(/\s+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const remainder = currentWords.slice(wordCount(headline)).join(" ");
  return bodyFrom(
    [remainder, ...source.slice(index + 1)].filter(Boolean),
    0,
    maximum
  );
}

function withoutRepeatedTitleOpening(title, body) {
  const text = String(body || "").trim();
  if (!text || !title) return text;
  const opening = text.slice(0, title.length);
  const canonical = (value) =>
    String(value || "")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLocaleLowerCase("es-CO");
  if (canonical(opening) !== canonical(title)) return text;
  return text
    .slice(title.length)
    .replace(/^[\s,;:–—-]+/, "")
    .replace(/^./u, (character) => character.toLocaleUpperCase("es-CO"));
}

function expandBody(value, source, maximum, minimum) {
  const parts = [String(value || "").trim()].filter(Boolean);
  const seen = new Set(parts.map((part) => part.toLocaleLowerCase("es-CO")));
  for (const candidate of source) {
    if (wordCount(parts.join(" ")) >= minimum) break;
    const clean = String(candidate || "").trim();
    if (!clean || seen.has(clean.toLocaleLowerCase("es-CO"))) continue;
    parts.push(clean);
    seen.add(clean.toLocaleLowerCase("es-CO"));
  }
  return truncateWords(parts.join(" "), maximum);
}

function closingQuestion(myth, lesson) {
  const topic =
    CLOSING_TOPICS.find(([pattern]) => pattern.test(lesson))?.[1] ||
    "la memoria";
  const questions = [
    `¿Qué nos pide este relato sobre ${topic}?`,
    `¿Qué cambia cuando pensamos en ${topic}?`,
    `¿Cómo cuidamos hoy ${topic}?`,
    `¿Qué pregunta permanece abierta sobre ${topic}?`,
  ];
  return questions[hash(myth.slug) % questions.length];
}

function applyFeedDesign(slides, myth, feedIndex) {
  const fallbackPosition = hash(myth.slug) % 42;
  const position = Number.isInteger(feedIndex) ? feedIndex : fallbackPosition;
  const archetypeIndex = position % FEED_ARCHETYPES.length;
  const archetype = FEED_ARCHETYPES[archetypeIndex];
  const hasThird = slides.some(
    (slide) => slide.asset_id === "generated_third"
  );
  const order = hasThird ? archetype.withThird : archetype.withoutThird;
  const paletteOffset = position % FEED_PALETTES.length;
  const paletteStride = archetypeIndex + 1;
  const designedSlides = order.map((sourceIndex, index) => ({
    ...slides[sourceIndex],
    sequence: index + 1,
    palette_id:
      FEED_PALETTES[
        (paletteOffset + index * paletteStride) % FEED_PALETTES.length
      ],
  }));
  return {
    slides: designedSlides,
    feedDesign: {
      position,
      archetype_id: archetype.id,
      palette_offset: paletteOffset,
      palette_stride: paletteStride,
      family_order: designedSlides.map((slide, index) => {
        if (index === 0) return "cover";
        if (slide.kind === "location") return "map";
        if (slide.asset_id === "existing_landscape") return "secondary";
        if (slide.asset_id === "generated_third") return "tertiary";
        return "typographic";
      }),
      palette_order: designedSlides.map((slide) => slide.palette_id),
    },
  };
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

function sentenceAfter(source, index, maximum) {
  if (maximum <= 0) return "";
  const following = bodyFrom(source, index + 1, maximum);
  if (following) return following;
  return "";
}

function locationLabel(myth, source) {
  const text = source.join(" ");
  const match = text.match(
    /\b((?:[Ll]aguna|[Rr][ií]o|[Cc]erro|[Ss]ierra|[Vv]olc[aá]n|[Pp][aá]ramo|[Vv]alle|[Cc]ascada|[Cc]i[eé]naga)\s+(?:(?:de|del|la|las|los)\s+)?[A-ZÁÉÍÓÚÑ][\p{L}\p{M}-]{2,}(?:\s+[A-ZÁÉÍÓÚÑ][\p{L}\p{M}-]{2,}){0,2})/u
  );
  if (match?.[1]) {
    return match[1].replace(/^./u, (character) =>
      character.toLocaleUpperCase("es-CO")
    );
  }
  return [myth.community, myth.region].filter(Boolean).join(" · ");
}

function splitLessonCopy(lesson) {
  const normalized = String(lesson || "").replace(/\s+/g, " ").trim();
  const semanticBreak = normalized.match(/^(.*?)(\s+también\s+)(.+)$/i);
  if (semanticBreak && wordCount(semanticBreak[1]) >= 4) {
    return {
      headline: closeThought(semanticBreak[1]),
      body: closeThought(`También ${semanticBreak[3]}`),
    };
  }

  const headline = headlineFrom(normalized, "Lo que permanece");
  const remainder = normalized
    .slice(headline.replace(/[.!?]$/, "").length)
    .replace(/^[.!?,;:–—-]+\s*/, "")
    .trim();
  return {
    headline,
    body: remainder
      ? closeThought(remainder)
      : "El relato convierte su enseñanza en una responsabilidad que continúa de generación en generación.",
  };
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
  const headline = headlineFrom(source[start], `Secuencia ${sequence}`);
  const body = bodyAfterHeadline(
    source,
    start,
    headline,
    Math.max(0, maximum - wordCount(headline))
  );
  return {
    sequence,
    kind,
    narrative_role: role,
    design_role: designRole,
    text_density: density,
    headline,
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
  requireThirdImage = false,
  feedIndex,
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
  const lessonCopy = splitLessonCopy(lesson);
  const meaningSource = historySentences.length
    ? historySentences
    : mythSentences;
  const meaningBody = expandBody(
    lessonCopy.body,
    meaningSource,
    48,
    Math.max(12, 30 - wordCount(lessonCopy.headline))
  );
  const thirdScene = bodyFrom(mythSentences, thirdSceneIndex, 55);
  const semanticLandscapeIndex = mythSentences.findIndex(
    (sentence) =>
      /\b(sali[oó]|emergi[oó]|apareci[oó])\b/iu.test(sentence) &&
      /\b(agua|laguna|r[ií]o|mar)\b/iu.test(sentence)
  );
  const landscapeIndex =
    semanticLandscapeIndex >= 0
      ? semanticLandscapeIndex
      : atProgress(mythSentences, 0.2);
  const turnIndex = mythSentences.findIndex((sentence) =>
    /guardar el agua|casa vecina|conservar la paz/iu.test(sentence)
  );
  const latitude = Number(myth.latitude);
  const longitude = Number(myth.longitude);
  const place = locationLabel(myth, mythSentences);
  const generatedArtDirection = {
    moment: thirdScene,
    subject: `${myth.title}: incluir únicamente las figuras, seres u objetos que la escena documentada requiere.`,
    action: `Mostrar con claridad este momento del relato: ${truncateWords(thirdScene, 28)}`,
    setting: `${place || myth.region}, integrado como territorio reconocible y no como fondo decorativo.`,
    framing:
      "Vertical 4:5, plano general con profundidad frontal, horizonte estable y acción legible en pantalla móvil.",
    continuity:
      "Conservar la materialidad paper-cut, la paleta mineral, el agua azul profunda, los dorados mate y la identidad visual de las dos imágenes canónicas.",
    differentiation:
      "Usar punto de vista, distancia y distribución de figuras distintos de la portada y de la escena horizontal; no repetir pose, símbolo central ni composición.",
  };

  const slidesWithThird = [
    {
      sequence: 1,
      kind: "image",
      narrative_role: "hook",
      headline: myth.title,
      body: truncateWords(
        withoutRepeatedTitleOpening(
          myth.title,
          myth.excerpt || mythSentences[0]
        ),
        24
      ),
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
      headline: place,
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
    {
      sequence: 4,
      kind: "image",
      narrative_role: "inciting_event",
      headline: headlineFrom(
        myth.excerpt || mythSentences[landscapeIndex],
        "El relato comenzó a tomar forma."
      ),
      body: sentenceAfter(mythSentences, landscapeIndex, 28),
      asset_id: "existing_landscape",
      crop_focus: "attention",
      image_overlay: "",
      alt_text: `Segunda imagen canónica de ${myth.title}, una escena panorámica del acontecimiento narrado.`,
      palette_id: PALETTE_SEQUENCE[3],
    },
    makeTextSlide({
      sequence: 5,
      role: "development",
      designRole: "testimony",
      density: "medium",
      source: mythSentences,
      progress: 0.33,
      palette: PALETTE_SEQUENCE[4],
    }),
    makeTextSlide({
      sequence: 6,
      role: "development",
      designRole: "development",
      density: "short",
      source: mythSentences,
      progress: 0.5,
      palette: PALETTE_SEQUENCE[5],
    }),
    makeTextSlide({
      sequence: 7,
      role: "turn",
      designRole: "turn",
      density: "medium",
      source: mythSentences,
      progress:
        turnIndex >= 0 && mythSentences.length > 1
          ? turnIndex / (mythSentences.length - 1)
          : 0.64,
      palette: PALETTE_SEQUENCE[6],
    }),
    {
      sequence: 8,
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
      palette_id: PALETTE_SEQUENCE[7],
    },
    {
      ...makeTextSlide({
        sequence: 9,
        role: "meaning",
        designRole: "context",
        density: "narrative",
        source: meaningSource,
        progress: 0.25,
        palette: PALETTE_SEQUENCE[8],
      }),
      headline: lessonCopy.headline,
      body: meaningBody,
    },
    {
      sequence: 10,
      kind: "closing",
      narrative_role: "closing",
      design_role: "closing",
      text_density: "short",
      headline: closingQuestion(myth, lesson),
      body: "",
      asset_id: "none",
      crop_focus: "centre",
      image_overlay: "",
      alt_text: "",
      palette_id: PALETTE_SEQUENCE[9],
    },
  ];
  const sourceSlides = requireThirdImage
    ? slidesWithThird
    : slidesWithThird.filter(
        (slide) => slide.asset_id !== "generated_third"
      );
  const { slides, feedDesign } = applyFeedDesign(
    sourceSlides,
    myth,
    feedIndex
  );

  const plan = {
    template_id: template,
    editorial_thesis: truncateWords(
      `${myth.title} convierte su núcleo narrativo en una memoria sobre ${lesson
        .replace(/[.!?]+$/, "")
        .toLocaleLowerCase("es-CO")}.`,
      34
    ),
    sequence_count: slides.length,
    palette_id: slides[0].palette_id,
    generated_image: requireThirdImage
      ? {
          needed: true,
          narrative_gap: thirdScene,
          brief: `Crear una tercera escena que resuelva el momento final de ${myth.title}: ${thirdScene}`,
          art_direction: generatedArtDirection,
          avoid: [
            "repetir el encuadre de la portada",
            "repetir la segunda imagen",
            "inventar personajes o símbolos",
            "texto dentro de la imagen",
            "fantasía genérica",
          ],
        }
      : {
          needed: false,
          narrative_gap: "",
          brief: "",
          art_direction: {
            moment: "",
            subject: "",
            action: "",
            setting: "",
            framing: "",
            continuity: "",
            differentiation: "",
          },
          avoid: [],
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
    feed_design: feedDesign,
    plan,
  };
}
