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

test("el historial rota los gráficos sin alterar la plantilla", () => {
  const first = composeEditorialCarousel({ plan, seed: "bachue-rotation" });
  const history = [
    {
      graphic_ids: first.slides
        .flatMap((slide) => [
          slide.graphic_motif?.id,
          slide.graphic_decoration?.id,
        ])
        .filter(Boolean),
    },
  ];
  const rotated = composeEditorialCarousel({
    plan,
    seed: "bachue-rotation",
    history,
  });
  const graphics = (composition) =>
    composition.slides
      .flatMap((slide) => [
        slide.graphic_motif?.id,
        slide.graphic_decoration?.id,
      ])
      .filter(Boolean);

  assert.deepEqual(
    first.slides.map((slide) => slide.template_id),
    rotated.slides.map((slide) => slide.template_id)
  );
  assert.notDeepEqual(graphics(first), graphics(rotated));
});

test("la última ficha integra el CTA de lectura sin sumar una lámina", () => {
  const composition = composeEditorialCarousel({
    plan,
    seed: "bachue-quality",
  });
  const finalSlide = composition.slides.at(-1);

  assert.equal(composition.slides.length, plan.sequence_count);
  assert.equal(finalSlide.kind, "closing");
  assert.deepEqual(finalSlide.copy.cta, {
    eyebrow: "El relato continúa",
    body: "Lee la historia completa, sus fuentes y otras versiones en",
    label: "mitosdecolombia.com",
    href: "https://mitosdecolombia.com/mitos/bachue",
  });
  assert.equal(
    composition.slides.slice(0, -1).some((slide) => slide.copy.cta),
    false
  );

  const missingCta = structuredClone(composition);
  delete missingCta.slides.at(-1).copy.cta;
  assert.ok(
    validateEditorialComposition(missingCta).includes(
      "final_slide_missing_read_more_cta"
    )
  );
});

test("la introducción usa portada comunitaria y CTA hacia la colección", () => {
  const communityPlan = {
    ...plan,
    myth: {
      ...plan.myth,
      slug: "muiscas-introduccion",
      kind: "community",
      ctaHref: "https://mitosdecolombia.com/comunidades/muiscas",
    },
    slides: plan.slides.map((slide, index) =>
      index === 0 ? { ...slide, design_role: "overview" } : slide
    ),
  };
  const composition = composeEditorialCarousel({
    plan: communityPlan,
    seed: "muiscas-introduccion",
  });

  assert.equal(composition.slides[0].template_id, "cover-07-high-horizon");
  assert.equal(
    composition.slides.at(-1).copy.cta.href,
    "https://mitosdecolombia.com/comunidades/muiscas"
  );
  assert.equal(
    composition.slides.at(-1).copy.cta.body,
    "Explora la colección completa y elige tu próxima historia en"
  );

  const mythComposition = composeEditorialCarousel({
    plan,
    seed: "muiscas-introduccion",
  });
  assert.notEqual(mythComposition.slides[0].template_id, "cover-07-high-horizon");
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
  assert.ok(
    composition.slides.every((slide) => {
      const graphicCount = [
        slide.graphic_motif,
        slide.graphic_decoration,
      ].filter(Boolean).length;
      return slide.template_family === "typographic"
        ? graphicCount === 1
        : graphicCount === 0;
    })
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
