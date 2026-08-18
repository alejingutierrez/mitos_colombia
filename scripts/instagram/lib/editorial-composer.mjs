import {
  getProductionEditorialTemplatesByFamily,
  INSTAGRAM_EDITORIAL_TEMPLATES,
} from "../../../src/lib/instagram-editorial-library.js";
import { MIN_IMAGE_SEQUENCE_GAP } from "./plan-schema.mjs";
import {
  selectInstagramGraphicMotif,
  selectInstagramSupportDecoration,
} from "../../../src/lib/instagram-iconography.js";

const FAMILY_BY_ASSET = Object.freeze({
  existing_landscape: "secondary",
  generated_third: "tertiary",
});

const EDITORIAL_PALETTE_BY_PLAN = Object.freeze({
  laguna: "laguna",
  paramo: "paramo",
  tierra: "arcilla",
  oro: "oro_palido",
  selva: "musgo",
  noche: "noche",
  arcilla: "arcilla",
});

const GRAPHIC_TYPE_LAYOUTS = new Set([
  "type_syllabic",
  "type_quote",
  "type_vertical",
  "type_triptych",
  "type_numbered",
  "type_stair",
  "type_outline",
  "type_vocabulary",
  "type_initial",
  "type_cascade",
  "type_four_voices",
  "type_index_grid",
  "type_corner",
  "type_three_beats",
  "type_parenthetical",
  "type_call_response",
  "type_word_field",
  "type_blocks",
  "type_question",
]);

const STRUCTURAL_GRAPHIC_LAYOUTS = new Set([
  "type_archive_note",
  "type_blocks",
  "type_columns",
  "type_ledger",
  "type_thesis",
  "type_triptych",
  "type_vocabulary",
]);

const KICKER_BY_ROLE = Object.freeze({
  hook: "El umbral",
  setting: "El territorio",
  inciting_event: "La aparición",
  development: "El desarrollo",
  turn: "El giro",
  climax: "La transformación",
  meaning: "Lo que permanece",
  closing: "Una pregunta",
  identity: "El nombre",
  context: "La memoria",
  testimony: "La voz",
  pause: "La pausa",
  symbol: "El símbolo",
  sequence: "El relato",
  overview: "La colección",
});

const KEYWORD_STOPWORDS = new Set([
  "ante",
  "bajo",
  "como",
  "cuando",
  "donde",
  "desde",
  "entre",
  "hasta",
  "para",
  "pero",
  "porque",
  "sobre",
  "tambien",
  "tras",
  "unos",
  "unas",
  "este",
  "esta",
  "estos",
  "estas",
  "ellos",
  "ellas",
  "habia",
  "tiene",
  "tenia",
  "fueron",
]);

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

function randomFromSeed(seed) {
  const hash = xmur3(String(seed || "instagram-editorial"));
  return mulberry32(hash());
}

function familyForSlide(slide, index) {
  if (index === 0) return "cover";
  if (slide.kind === "location") return "map";
  if (FAMILY_BY_ASSET[slide.asset_id]) return FAMILY_BY_ASSET[slide.asset_id];
  return "typographic";
}

function wordCount(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function displayWords(title) {
  const words = String(title || "")
    .replace(/[¿?¡!.,;:]+/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!words.length) return ["Relato", "Memoria", "Territorio"];
  const groups = [[], [], []];
  words.forEach((word, index) => {
    groups[Math.min(2, Math.floor((index * 3) / words.length))].push(word);
  });
  return groups
    .map((group) => group.join(" "))
    .filter(Boolean)
    .slice(0, 3);
}

function keywordsFor(value) {
  const seen = new Set();
  const keywords =
    String(value || "")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase()
      .match(/\p{L}{4,}/gu)
      ?.filter((word) => !KEYWORD_STOPWORDS.has(word))
      .filter((word) => {
        if (seen.has(word)) return false;
        seen.add(word);
        return true;
      })
      .slice(0, 3) || [];
  return keywords.length
    ? keywords.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    : ["Memoria", "Territorio", "Origen"];
}

function coordinateLabel(latitude, longitude) {
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return "";
  return `${Math.abs(latitude).toFixed(4)}° ${
    latitude >= 0 ? "N" : "S"
  } · ${Math.abs(longitude).toFixed(4)}° ${longitude >= 0 ? "E" : "O"}`;
}

function removeRepeatedOpening(title, body) {
  const normalizedBody = String(body || "").trim();
  const firstSentenceMatch = normalizedBody.match(/^.*?[.!?](?:\s|$)/);
  if (!firstSentenceMatch) return normalizedBody;
  const canonical = (value) =>
    String(value || "")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLocaleLowerCase("es-CO")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
  if (canonical(firstSentenceMatch[0]) !== canonical(title)) {
    return normalizedBody;
  }
  const remainder = normalizedBody.slice(firstSentenceMatch[0].length).trim();
  return remainder;
}

function closingCallToAction(myth) {
  const slug = String(myth?.slug || "").trim();
  const isCommunity = myth?.kind === "community";
  return {
    eyebrow: "El relato continúa",
    body: isCommunity
      ? "Explora la colección completa y elige tu próxima historia en"
      : "Lee la historia completa, sus fuentes y otras versiones en",
    label: "mitosdecolombia.com",
    href:
      myth?.ctaHref ||
      (slug
        ? `https://mitosdecolombia.com/mitos/${slug}`
        : "https://mitosdecolombia.com"),
  };
}

function fallbackCopy(slide, myth) {
  const title = slide.headline || "";
  const body = removeRepeatedOpening(title, slide.body || "");
  const words = displayWords(title);
  const keywords = keywordsFor(`${title} ${body}`);
  const territory = [myth?.community, myth?.region].filter(Boolean).join(" · ");
  const kicker =
    slide.asset_id === "existing_portrait"
      ? territory
      : KICKER_BY_ROLE[slide.design_role] ||
        KICKER_BY_ROLE[slide.narrative_role] ||
        "El relato";
  const latitude = Number(myth?.latitude);
  const longitude = Number(myth?.longitude);
  if (slide.kind === "location") {
    return {
      title,
      kicker: [myth?.community, myth?.region].filter(Boolean).join(" · "),
      body: coordinateLabel(latitude, longitude) || body,
      latitude: Number.isFinite(latitude) ? latitude : 4.711,
      longitude: Number.isFinite(longitude) ? longitude : -74.0721,
      originLatitude: 4.711,
      originLongitude: -74.0721,
      country: "Colombia",
    };
  }
  return {
    title,
    kicker,
    body,
    altText: slide.alt_text || "",
    shortTitle: keywords[0] || words[0] || title,
    words,
    keywords,
    call: title.trim().endsWith("?")
      ? title
      : `¿${title
          .replace(/[.!]+$/, "")
          .toLocaleLowerCase("es-CO")}?`,
    response: keywords[0] || words.at(-1) || "Memoria",
  };
}

function templateUsage(history) {
  const usage = new Map();
  for (const entry of history) {
    for (const templateId of entry.template_ids || []) {
      usage.set(templateId, (usage.get(templateId) || 0) + 1);
    }
  }
  return usage;
}

function graphicUsage(history) {
  const usage = new Map();
  for (const entry of history) {
    for (const graphicId of entry.graphic_ids || []) {
      usage.set(graphicId, (usage.get(graphicId) || 0) + 1);
    }
  }
  return usage;
}

function weightedPick(candidates, usage, random) {
  const weighted = candidates.map((template) => ({
    template,
    weight: 1 / (1 + (usage.get(template.id) || 0) * 2.5),
  }));
  const total = weighted.reduce((sum, item) => sum + item.weight, 0);
  let cursor = random() * total;
  for (const item of weighted) {
    cursor -= item.weight;
    if (cursor <= 0) return item.template;
  }
  return weighted.at(-1).template;
}

function candidatesForSlide({
  family,
  narrativeRole,
  selectedIds,
  previousTemplate,
  titleLength,
  copyWords,
  preferredDensity,
}) {
  const approved = getProductionEditorialTemplatesByFamily(family).filter(
    (template) =>
      template.approval === "approved" &&
      (!template.introOnly || narrativeRole === "overview") &&
      !selectedIds.has(template.id) &&
      (!template.maxTitleChars || titleLength <= template.maxTitleChars) &&
      (!template.maxWords || copyWords <= template.maxWords)
  );
  const narrativeRhythmSafe =
    previousTemplate?.textDensity === "narrative"
      ? approved.filter((template) => template.textDensity !== "narrative")
      : approved;
  const rhythmicCapacity = narrativeRhythmSafe.length
    ? narrativeRhythmSafe
    : approved;
  const densityMatches = preferredDensity
    ? rhythmicCapacity.filter(
        (template) => template.textDensity === preferredDensity
      )
    : rhythmicCapacity;
  const densityEligible = densityMatches.length
    ? densityMatches
    : rhythmicCapacity;
  const brandSafe = densityEligible.filter(
    (template) => template.brandMode !== previousTemplate?.brandMode
  );
  const branded = brandSafe.length ? brandSafe : densityEligible;
  const roleMatches = branded.filter(
    (template) => template.role === narrativeRole
  );
  const primary = roleMatches.length ? roleMatches : branded;
  const previousWasQuietType =
    previousTemplate?.family === "typographic" &&
    !GRAPHIC_TYPE_LAYOUTS.has(previousTemplate.layout);
  const rhythmSafe =
    family === "typographic" && previousWasQuietType
      ? primary.filter((template) => GRAPHIC_TYPE_LAYOUTS.has(template.layout))
      : primary;
  return rhythmSafe.length ? rhythmSafe : primary;
}

export function validateEditorialComposition(composition) {
  const errors = [];
  const slides = Array.isArray(composition?.slides) ? composition.slides : [];
  const templateIds = slides.map((slide) => slide.template_id);
  const imageSlides = slides.filter((slide) =>
    ["cover", "secondary", "tertiary"].includes(slide.template_family)
  );
  const knownIds = new Set(
    INSTAGRAM_EDITORIAL_TEMPLATES.map((template) => template.id)
  );

  if (slides.length < 8 || slides.length > 14) {
    errors.push("slide_count_out_of_range");
  }
  if (slides.some((slide, index) => slide.sequence !== index + 1)) {
    errors.push("sequence_not_contiguous");
  }
  if (new Set(templateIds).size !== templateIds.length) {
    errors.push("template_repeated_inside_carousel");
  }
  if (templateIds.some((templateId) => !knownIds.has(templateId))) {
    errors.push("unknown_template");
  }
  if (slides[0]?.template_family !== "cover") {
    errors.push("first_slide_not_cover");
  }
  if (
    slides.some(
      (slide) =>
        slide.template_family === "cover" &&
        slide.sequence !== slides[0]?.sequence
    )
  ) {
    errors.push("extra_cover");
  }
  if (!slides.some((slide) => slide.template_family === "secondary")) {
    errors.push("missing_secondary");
  }
  if (
    slides.some((slide) => slide.asset_id === "generated_third") &&
    !slides.some((slide) => slide.template_family === "tertiary")
  ) {
    errors.push("missing_tertiary");
  }
  if (
    imageSlides.some(
      (slide, index) =>
        index > 0 &&
        slide.sequence - imageSlides[index - 1].sequence <
          MIN_IMAGE_SEQUENCE_GAP
    )
  ) {
    errors.push("images_too_close");
  }
  if (
    slides.some(
      (slide) =>
        slide.template_family === "map" &&
        imageSlides.some(
          (imageSlide) => {
            const isTerritoryToSceneTransition =
              imageSlide.asset_id === "existing_landscape" &&
              imageSlide.sequence === slide.sequence + 1;
            return (
              Math.abs(slide.sequence - imageSlide.sequence) <= 1 &&
              !isTerritoryToSceneTransition
            );
          }
        )
    )
  ) {
    errors.push("map_adjacent_to_image");
  }
  if (
    slides.some(
      (slide, index) =>
        slide.template_palette === slides[index - 1]?.template_palette &&
        slide.template_palette === slides[index - 2]?.template_palette
    )
  ) {
    errors.push("palette_repeated_three_times");
  }
  if (
    slides.some((slide) => {
      const template = INSTAGRAM_EDITORIAL_TEMPLATES.find(
        (item) => item.id === slide.template_id
      );
      return template?.approval !== "approved";
    })
  ) {
    errors.push("unapproved_template_selected");
  }
  if (
    slides.some((slide) => {
      const template = INSTAGRAM_EDITORIAL_TEMPLATES.find(
        (item) => item.id === slide.template_id
      );
      return template?.productionReady !== true;
    })
  ) {
    errors.push("non_production_template_selected");
  }
  if (
    slides.some(
      (slide, index) =>
        slide.template_text_density === "narrative" &&
        slides[index - 1]?.template_text_density === "narrative"
    )
  ) {
    errors.push("narrative_density_repeated");
  }
  if (
    slides.some(
      (slide, index) =>
        slide.template_brand_mode &&
        slide.template_brand_mode ===
          slides[index - 1]?.template_brand_mode
    )
  ) {
    errors.push("brand_mode_repeated");
  }
  const finalSlide = slides.at(-1);
  if (
    finalSlide?.copy?.cta?.eyebrow !== "El relato continúa" ||
    finalSlide?.copy?.cta?.label !== "mitosdecolombia.com" ||
    !String(finalSlide?.copy?.cta?.body || "").trim() ||
    !String(finalSlide?.copy?.cta?.href || "").startsWith(
      "https://mitosdecolombia.com"
    )
  ) {
    errors.push("final_slide_missing_read_more_cta");
  }
  if (slides.slice(0, -1).some((slide) => slide.copy?.cta)) {
    errors.push("read_more_cta_outside_final_slide");
  }

  return [...new Set(errors)];
}

export function composeEditorialCarousel({
  plan,
  seed,
  history = [],
  copyBySequence = {},
  assets = {},
}) {
  const slides = plan?.slides || [];
  const random = randomFromSeed(seed);
  const usage = templateUsage(history);
  const graphicUsageById = graphicUsage(history);
  const selectedIds = new Set();
  const usedGraphicMotifIds = new Set();
  const usedGraphicDecorationIds = new Set();
  let previousTemplate = null;

  const resolvedSlides = slides.map((slide, index) => {
    const family = familyForSlide(slide, index);
    const suppliedCopy =
      copyBySequence[slide.sequence] || fallbackCopy(slide, plan.myth);
    const copy =
      slide.kind === "closing" || slide.narrative_role === "closing"
        ? { ...suppliedCopy, cta: closingCallToAction(plan.myth) }
        : suppliedCopy;
    const title = copy.title || slide.headline || "";
    const body = copy.body || slide.body || "";
    const candidates = candidatesForSlide({
      family,
      narrativeRole:
        slide.design_role || copy.templateRole || slide.narrative_role,
      selectedIds,
      previousTemplate,
      titleLength: String(title).length,
      copyWords: wordCount(`${title} ${body}`),
      preferredDensity: slide.text_density || copy.textDensity || null,
    });
    if (!candidates.length) {
      throw new Error(
        `No hay plantilla aprobada disponible para ${family}/${slide.narrative_role}.`
      );
    }
    const recentlyUsedAtPosition = new Set(
      history
        .slice(-4)
        .map((entry) => entry.template_ids?.[index])
        .filter(Boolean)
    );
    const positionSafeCandidates = candidates.filter(
      (candidate) => !recentlyUsedAtPosition.has(candidate.id)
    );
    const template = weightedPick(
      positionSafeCandidates.length ? positionSafeCandidates : candidates,
      usage,
      random
    );
    const selectedPalette =
      EDITORIAL_PALETTE_BY_PLAN[slide.palette_id] || template.palette;
    selectedIds.add(template.id);
    previousTemplate = template;

    const resolvedSlide = {
      ...slide,
      template_id: template.id,
      template_family: template.family,
      template_name: template.name,
      template_layout: template.layout,
      template_palette: selectedPalette,
      template_text_density: template.textDensity || null,
      template_brand_mode: template.brandMode,
      copy,
    };
    const graphicMotif = selectInstagramGraphicMotif({
      slide: resolvedSlide,
      copy,
      myth: plan.myth,
      excludedIds: usedGraphicMotifIds,
      usageById: graphicUsageById,
    });
    const graphicDecoration = selectInstagramSupportDecoration({
      slide: resolvedSlide,
      copy,
      primaryMotif: graphicMotif,
      excludedIds: usedGraphicDecorationIds,
      usageById: graphicUsageById,
    });
    const primaryUsage = graphicMotif
      ? graphicUsageById.get(graphicMotif.id) || 0
      : Number.POSITIVE_INFINITY;
    const decorationUsage = graphicDecoration
      ? graphicUsageById.get(graphicDecoration.id) || 0
      : Number.POSITIVE_INFINITY;
    const usesStructuralGraphic =
      Boolean(graphicDecoration) &&
      (!graphicMotif ||
        decorationUsage < primaryUsage ||
        (decorationUsage === primaryUsage &&
          STRUCTURAL_GRAPHIC_LAYOUTS.has(resolvedSlide.template_layout)));
    const resolvedGraphicMotif = usesStructuralGraphic ? null : graphicMotif;
    const resolvedGraphicDecoration = usesStructuralGraphic
      ? graphicDecoration
      : null;
    if (resolvedGraphicMotif?.id) {
      usedGraphicMotifIds.add(resolvedGraphicMotif.id);
      graphicUsageById.set(
        resolvedGraphicMotif.id,
        (graphicUsageById.get(resolvedGraphicMotif.id) || 0) + 1
      );
    }
    if (resolvedGraphicDecoration?.id) {
      usedGraphicDecorationIds.add(resolvedGraphicDecoration.id);
      graphicUsageById.set(
        resolvedGraphicDecoration.id,
        (graphicUsageById.get(resolvedGraphicDecoration.id) || 0) + 1
      );
    }
    return {
      ...resolvedSlide,
      graphic_motif: resolvedGraphicMotif,
      graphic_decoration: resolvedGraphicDecoration,
    };
  });

  const composition = {
    schema_version: 7,
    composed_at: new Date().toISOString(),
    seed: String(seed),
    myth: plan.myth || null,
    narrative: {
      sequence_count: plan.sequence_count,
      editorial_thesis: plan.editorial_thesis,
      planner_template_id: plan.template_id,
    },
    publishing: {
      caption: plan.caption || "",
      hashtags: plan.hashtags || [],
      factual_guardrails: plan.factual_guardrails || [],
    },
    assets,
    selection_policy: {
      approved_only: true,
      production_ready_only: true,
      unique_inside_carousel: true,
      seed_reproducible: true,
      recent_usage_weighted: true,
      role_compatible_first: true,
      quiet_typographic_adjacent: false,
      max_equal_palettes_in_a_row: 2,
      adjacent_brand_mode_repeated: false,
      minimum_image_sequence_gap: MIN_IMAGE_SEQUENCE_GAP,
      story_text_cards_required: true,
      semantic_iconography: true,
      standardized_decoration_system: "v2",
      max_primary_motif_per_slide: 1,
      max_support_decoration_per_slide: 1,
      max_graphic_elements_per_slide: 1,
      overlapping_graphic_elements_allowed: false,
      least_used_graphic_weighted: true,
      graphic_usage_tracking_enabled: true,
    },
    slides: resolvedSlides,
  };
  const errors = validateEditorialComposition(composition);
  if (errors.length) {
    throw new Error(`Composición editorial inválida: ${errors.join(", ")}`);
  }
  return composition;
}
