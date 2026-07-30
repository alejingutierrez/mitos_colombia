import assert from "node:assert/strict";
import test from "node:test";
import {
  composeEditorialCarousel,
  validateEditorialComposition,
} from "./lib/editorial-composer.mjs";

const slides = [
  ["image", "hook", "existing_portrait", null],
  ["typographic", "setting", "none", "medium"],
  ["location", "setting", "none", null],
  ["typographic", "development", "none", "short"],
  ["image", "inciting_event", "existing_landscape", null],
  ["context", "development", "none", "medium"],
  ["typographic", "development", "none", "narrative"],
  ["typographic", "turn", "none", "short"],
  ["context", "turn", "none", "medium"],
  ["image", "climax", "generated_third", null],
  ["context", "meaning", "none", "narrative"],
  ["closing", "closing", "none", "medium"],
].map(([kind, narrative_role, asset_id, text_density], index) => ({
  sequence: index + 1,
  kind,
  narrative_role,
  asset_id,
  ...(text_density ? { text_density } : {}),
  headline: `Lámina ${index + 1}`,
  body: "Texto breve.",
}));

const plan = {
  sequence_count: slides.length,
  template_id: "narrative-plan",
  editorial_thesis: "El agua funda una comunidad y también una obligación.",
  myth: { slug: "bachue", title: "Bachué" },
  slides,
};

test("la selección es aleatoria pero reproducible mediante semilla", () => {
  const first = composeEditorialCarousel({ plan, seed: "bachue-a" });
  const repeated = composeEditorialCarousel({ plan, seed: "bachue-a" });
  const different = composeEditorialCarousel({ plan, seed: "bachue-b" });
  const ids = (composition) =>
    composition.slides.map((slide) => slide.template_id);

  assert.deepEqual(ids(first), ids(repeated));
  assert.notDeepEqual(ids(first), ids(different));
});

test("el compositor sólo usa plantillas aprobadas, compatibles y no repetidas", () => {
  const composition = composeEditorialCarousel({
    plan,
    seed: "bachue-quality",
  });
  const families = composition.slides.map(
    (slide) => slide.template_family
  );

  assert.deepEqual(validateEditorialComposition(composition), []);
  assert.equal(families[0], "cover");
  assert.ok(families.includes("map"));
  assert.ok(families.includes("secondary"));
  assert.ok(families.includes("tertiary"));
  assert.ok(
    composition.slides.every(
      (slide, index) =>
        index === 0 ||
        slide.template_brand_mode !==
          composition.slides[index - 1].template_brand_mode
    )
  );
});

test("los folios verticales no reciben titulares más largos que su capacidad", () => {
  const planWithLongTurn = {
    ...plan,
    slides: plan.slides.map((slide) =>
      slide.sequence === 8
        ? {
            ...slide,
            headline:
              "Los años alcanzaron a quienes habían fundado el primer pueblo.",
          }
        : slide
    ),
  };
  const composition = composeEditorialCarousel({
    plan: planWithLongTurn,
    seed: "bachue-1",
  });
  const turn = composition.slides.find(
    (slide) => slide.narrative_role === "turn"
  );

  assert.notEqual(turn.template_id, "type-04-vertical-return");
});

test("una lámina narrativa recibe una plantilla de capacidad narrativa", () => {
  const narrativePlan = {
    ...plan,
    slides: plan.slides.map((slide) =>
      slide.sequence === 7
        ? {
            ...slide,
            text_density: "narrative",
            headline:
              "Cuando el pueblo ya ocupaba los valles comenzó otra tarea.",
            body: Array(44).fill("memoria").join(" "),
          }
        : slide
    ),
  };
  const composition = composeEditorialCarousel({
    plan: narrativePlan,
    seed: "bachue-narrative",
  });
  const narrativeSlide = composition.slides.find(
    (slide) => slide.sequence === 7
  );

  assert.equal(narrativeSlide.template_text_density, "narrative");
});

test("la validación bloquea dos tratamientos de marca consecutivos", () => {
  const composition = composeEditorialCarousel({
    plan,
    seed: "bachue-brand-rhythm",
  });
  const repeatedBrand = structuredClone(composition);
  repeatedBrand.slides[1].template_brand_mode =
    repeatedBrand.slides[0].template_brand_mode;

  assert.ok(
    validateEditorialComposition(repeatedBrand).includes("brand_mode_repeated")
  );
});
