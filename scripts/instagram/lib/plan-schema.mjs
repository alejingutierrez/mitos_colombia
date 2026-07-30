import { INSTAGRAM_TEMPLATES, PALETTES } from "./templates.mjs";

export const PLAN_TOOL_NAME = "plan_instagram_carousel";

const templateIds = INSTAGRAM_TEMPLATES.map((item) => item.id);
const paletteIds = Object.keys(PALETTES);
export const TEXT_DENSITY_WORD_LIMITS = Object.freeze({
  short: 32,
  medium: 54,
  narrative: 78,
});
export const MIN_IMAGE_SEQUENCE_GAP = 4;

export const CAROUSEL_PLAN_SCHEMA = Object.freeze({
  type: "object",
  additionalProperties: false,
  required: [
    "template_id",
    "editorial_thesis",
    "sequence_count",
    "palette_id",
    "generated_image",
    "slides",
    "caption",
    "hashtags",
    "factual_guardrails",
  ],
  properties: {
    template_id: { type: "string", enum: templateIds },
    editorial_thesis: { type: "string", minLength: 20, maxLength: 260 },
    sequence_count: { type: "integer", minimum: 8, maximum: 14 },
    palette_id: { type: "string", enum: paletteIds },
    generated_image: {
      type: "object",
      additionalProperties: false,
      required: ["needed", "narrative_gap", "brief", "avoid"],
      properties: {
        needed: { type: "boolean" },
        narrative_gap: { type: "string", maxLength: 320 },
        brief: { type: "string", maxLength: 1200 },
        avoid: {
          type: "array",
          maxItems: 12,
          items: { type: "string", maxLength: 120 },
        },
      },
    },
    slides: {
      type: "array",
      minItems: 8,
      maxItems: 14,
      items: {
        type: "object",
        additionalProperties: false,
        required: [
          "sequence",
          "kind",
          "narrative_role",
          "headline",
          "body",
          "asset_id",
          "crop_focus",
          "image_overlay",
          "alt_text",
          "palette_id",
        ],
        properties: {
          sequence: { type: "integer", minimum: 1, maximum: 14 },
          kind: {
            type: "string",
            enum: ["image", "typographic", "location", "context", "closing"],
          },
          narrative_role: {
            type: "string",
            enum: [
              "hook",
              "setting",
              "inciting_event",
              "development",
              "turn",
              "climax",
              "meaning",
              "closing",
            ],
          },
          design_role: {
            type: "string",
            enum: [
              "identity",
              "context",
              "testimony",
              "pause",
              "symbol",
              "sequence",
              "development",
              "turn",
              "climax",
              "closing",
            ],
          },
          text_density: {
            type: "string",
            enum: ["short", "medium", "narrative"],
          },
          headline: { type: "string", maxLength: 90 },
          body: { type: "string", maxLength: 420 },
          asset_id: {
            type: "string",
            enum: [
              "existing_landscape",
              "existing_portrait",
              "generated_third",
              "none",
            ],
          },
          crop_focus: {
            type: "string",
            enum: ["centre", "top", "bottom", "attention"],
          },
          image_overlay: { type: "string", maxLength: 130 },
          alt_text: { type: "string", maxLength: 360 },
          palette_id: { type: "string", enum: paletteIds },
        },
      },
    },
    caption: { type: "string", minLength: 80, maxLength: 1800 },
    hashtags: {
      type: "array",
      minItems: 3,
      maxItems: 7,
      uniqueItems: true,
      items: { type: "string", pattern: "^#[^\\s#]{2,40}$" },
    },
    factual_guardrails: {
      type: "array",
      minItems: 2,
      maxItems: 10,
      items: { type: "string", maxLength: 240 },
    },
  },
});

function wordCount(text) {
  return String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function validateCarouselPlan(
  plan,
  eligibleTemplateIds = templateIds,
  { requireThirdImage = false } = {}
) {
  const errors = [];
  const slides = Array.isArray(plan?.slides) ? plan.slides : [];
  if (!eligibleTemplateIds.includes(plan?.template_id)) {
    errors.push("template_not_eligible");
  }
  if (!Number.isInteger(plan?.sequence_count)) {
    errors.push("sequence_count_not_integer");
  }
  if (plan?.sequence_count !== slides.length) {
    errors.push("sequence_count_mismatch");
  }
  if (slides.length < 8 || slides.length > 14) {
    errors.push("slide_count_out_of_range");
  }
  if (slides.some((slide, index) => slide.sequence !== index + 1)) {
    errors.push("sequence_not_contiguous");
  }
  if (slides[0]?.narrative_role !== "hook") {
    errors.push("first_slide_not_hook");
  }
  if (
    slides.at(-1)?.kind !== "closing" ||
    slides.at(-1)?.narrative_role !== "closing"
  ) {
    errors.push("last_slide_not_closing");
  }

  const usedAssets = slides
    .map((slide) => slide.asset_id)
    .filter((assetId) => assetId && assetId !== "none");
  const assetSlides = slides.filter(
    (slide) => slide.asset_id && slide.asset_id !== "none"
  );
  if (new Set(usedAssets).size !== usedAssets.length) {
    errors.push("asset_reused_inside_carousel");
  }
  for (const required of ["existing_landscape", "existing_portrait"]) {
    if (!usedAssets.includes(required)) errors.push(`missing_${required}`);
  }
  const needsGenerated = Boolean(plan?.generated_image?.needed);
  if (requireThirdImage && !needsGenerated) {
    errors.push("third_image_required");
  }
  if (needsGenerated !== usedAssets.includes("generated_third")) {
    errors.push("generated_image_contract_mismatch");
  }
  if (usedAssets.length < 2 || usedAssets.length > 3) {
    errors.push("image_budget_out_of_range");
  }
  if (slides[0]?.asset_id !== "existing_portrait") {
    errors.push("portrait_image_not_first");
  }

  const landscapeSlide = assetSlides.find(
    (slide) => slide.asset_id === "existing_landscape"
  );
  const thirdImageSlide = assetSlides.find(
    (slide) => slide.asset_id === "generated_third"
  );
  const orderedAssetSlides = [...assetSlides].sort(
    (left, right) => left.sequence - right.sequence
  );
  if (
    orderedAssetSlides.some(
      (slide, index) =>
        index > 0 &&
        slide.sequence - orderedAssetSlides[index - 1].sequence <
          MIN_IMAGE_SEQUENCE_GAP
    )
  ) {
    errors.push("images_too_close");
  }
  if (
    landscapeSlide &&
    (landscapeSlide.sequence < 5 ||
      landscapeSlide.sequence > Math.ceil(slides.length * 0.55))
  ) {
    errors.push("landscape_image_out_of_rhythm");
  }
  if (needsGenerated && slides.length < 10) {
    errors.push("third_image_requires_longer_carousel");
  }
  if (
    thirdImageSlide &&
    (thirdImageSlide.sequence < Math.ceil(slides.length * 0.72) ||
      thirdImageSlide.sequence >= slides.length)
  ) {
    errors.push("third_image_out_of_rhythm");
  }

  const locationSlides = slides.filter((slide) => slide.kind === "location");
  if (
    locationSlides.some((locationSlide) =>
      assetSlides.some(
        (assetSlide) =>
          Math.abs(locationSlide.sequence - assetSlide.sequence) <= 1
      )
    )
  ) {
    errors.push("map_adjacent_to_image");
  }

  const storyTextSlides = slides.filter(
    (slide) => slide.asset_id === "none" && slide.kind !== "location"
  );
  const minimumStoryTextCards = Math.max(
    4,
    slides.length - (needsGenerated ? 4 : 3)
  );
  if (storyTextSlides.length < minimumStoryTextCards) {
    errors.push("too_few_story_text_cards");
  }
  if (storyTextSlides.some((slide) => !slide.text_density)) {
    errors.push("story_text_density_missing");
  }
  if (
    storyTextSlides.filter(
      (slide) => wordCount(`${slide.headline} ${slide.body}`) >= 22
    ).length < Math.min(3, storyTextSlides.length)
  ) {
    errors.push("story_cards_too_thin");
  }
  const minimumDeepCards = slides.length >= 11 ? 3 : 2;
  if (
    storyTextSlides.filter(
      (slide) =>
        ["medium", "narrative"].includes(slide.text_density) &&
        wordCount(`${slide.headline} ${slide.body}`) >= 28
    ).length < minimumDeepCards
  ) {
    errors.push("insufficient_deep_story_cards");
  }
  const paletteIdsUsed = slides.map((slide) => slide.palette_id).filter(Boolean);
  if (new Set(paletteIdsUsed).size < 3) {
    errors.push("palette_variation_too_low");
  }
  if (
    paletteIdsUsed.some(
      (paletteId, index) =>
        paletteId === paletteIdsUsed[index - 1] &&
        paletteId === paletteIdsUsed[index - 2]
    )
  ) {
    errors.push("palette_repeated_three_times");
  }

  for (const slide of slides) {
    const totalWords = wordCount(`${slide.headline} ${slide.body}`);
    const wordLimit = TEXT_DENSITY_WORD_LIMITS[slide.text_density] || 32;
    if (slide.asset_id === "none" && totalWords > wordLimit) {
      errors.push(`slide_${slide.sequence}_too_wordy`);
    }
    if (slide.asset_id !== "none" && !slide.alt_text) {
      errors.push(`slide_${slide.sequence}_missing_alt_text`);
    }
    if (slide.asset_id === "none" && slide.alt_text) {
      errors.push(`slide_${slide.sequence}_unexpected_alt_text`);
    }
  }

  return [...new Set(errors)];
}
