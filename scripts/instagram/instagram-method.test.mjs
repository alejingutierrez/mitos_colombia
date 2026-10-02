import assert from "node:assert/strict";
import test from "node:test";
import {
  INSTAGRAM_CANVAS,
  INSTAGRAM_TEMPLATES,
  eligibleTemplates,
  resolveSlideLayout,
} from "./lib/templates.mjs";
import { validateCarouselPlan } from "./lib/plan-schema.mjs";
import { planCarouselLocally } from "./lib/local-planner.mjs";

const COMPLETE_GENERATED_IMAGE = Object.freeze({
  needed: true,
  narrative_gap: "La transformación final todavía no está representada.",
  brief: "Mostrar la transformación final en el territorio documentado.",
  art_direction: {
    moment: "El momento final del relato.",
    subject: "Los protagonistas documentados.",
    action: "La transformación ocurre dentro del agua.",
    setting: "El territorio de origen.",
    framing: "Plano general vertical 4:5.",
    continuity: "Conservar materiales y paleta de las referencias.",
    differentiation: "No repetir pose, distancia ni composición.",
  },
  avoid: ["texto", "símbolos inventados"],
});

test("la biblioteca contiene al menos 20 plantillas realmente identificables", () => {
  assert.equal(INSTAGRAM_TEMPLATES.length, 20);
  assert.equal(
    new Set(INSTAGRAM_TEMPLATES.map((item) => item.id)).size,
    INSTAGRAM_TEMPLATES.length
  );
  assert.equal(
    new Set(INSTAGRAM_TEMPLATES.map((item) => item.motif)).size,
    INSTAGRAM_TEMPLATES.length
  );
});

test("el lienzo contractual es 4:5 a 1080 por 1350", () => {
  assert.deepEqual(
    {
      width: INSTAGRAM_CANVAS.width,
      height: INSTAGRAM_CANVAS.height,
      aspectRatio: INSTAGRAM_CANVAS.aspectRatio,
    },
    { width: 1080, height: 1350, aspectRatio: "4:5" }
  );
});

test("la rotación excluye plantillas usadas en los últimos 20 posts", () => {
  const history = INSTAGRAM_TEMPLATES.slice(0, 5).map((item) => ({
    template_id: item.id,
    motif: item.motif,
  }));
  const eligibleIds = new Set(eligibleTemplates(history).map((item) => item.id));
  for (const item of INSTAGRAM_TEMPLATES.slice(0, 5)) {
    assert.equal(eligibleIds.has(item.id), false);
  }
});

test("la rotación reconoce el formato canónico del historial aprobado", () => {
  const used = INSTAGRAM_TEMPLATES[0];
  const eligibleIds = new Set(
    eligibleTemplates([
      {
        narrative_template_id: used.id,
        narrative_motif: used.motif,
        template_ids: ["cover-01-immersive"],
        graphic_ids: ["water-current"],
      },
    ]).map((item) => item.id)
  );

  assert.equal(eligibleIds.has(used.id), false);
});

test("el plan local usa dos imágenes salvo que el brief exija una tercera", () => {
  const myth = {
    title: "Relato de prueba",
    slug: "relato-de-prueba",
    excerpt:
      "Una persona recorre el territorio y comparte una enseñanza con su comunidad.",
    content: `Mito
Antes de comenzar el viaje, el territorio permanecía cubierto por la niebla.
Una persona llegó desde el oriente y escuchó a quienes vivían junto al agua.
Después recorrió los caminos y aprendió los nombres conservados por las familias.
En cada casa compartió una enseñanza y recibió otra forma de comprender el lugar.
Con el tiempo la noticia atravesó los valles y reunió a muchas personas.
Entonces comprendieron que el conocimiento sólo permanece cuando puede compartirse.
Al final del recorrido regresó al punto donde había comenzado la historia.
Historia
Las fuentes distinguen el núcleo del relato de sus interpretaciones posteriores.
Lección
Compartir la memoria también exige cuidar el territorio que la sostiene.`,
    community: "Muiscas",
    region: "Andina",
    latitude: 4.7,
    longitude: -74.1,
  };
  const templates = INSTAGRAM_TEMPLATES;
  const optional = planCarouselLocally({
    myth,
    templates,
    requireThirdImage: false,
  }).plan;
  const required = planCarouselLocally({
    myth,
    templates,
    requireThirdImage: true,
  }).plan;

  assert.equal(optional.generated_image.needed, false);
  assert.equal(optional.sequence_count, 9);
  assert.ok(optional.slides.at(-1).headline.length <= 64);
  assert.match(optional.slides.at(-1).headline, /memoria|territorio/iu);
  const alternate = planCarouselLocally({
    myth: {
      ...myth,
      slug: "relato-del-poder",
      content: myth.content.replace(
        "Compartir la memoria también exige cuidar el territorio que la sostiene.",
        "Todo poder debe responder por sus actos ante la comunidad."
      ),
    },
    templates,
    requireThirdImage: false,
  }).plan;
  assert.notEqual(
    alternate.slides.at(-1).headline,
    optional.slides.at(-1).headline
  );
  assert.equal(
    optional.slides.some((slide) => slide.asset_id === "generated_third"),
    false
  );
  assert.equal(required.generated_image.needed, true);
  assert.equal(required.sequence_count, 10);
  assert.equal(
    required.slides.filter((slide) => slide.asset_id === "generated_third")
      .length,
    1
  );
});

test("el sistema de feed alterna seis órdenes y secuencias cromáticas", () => {
  const myth = {
    title: "Relato de feed",
    slug: "relato-de-feed",
    excerpt:
      "Una viajera escucha al territorio y aprende por qué la memoria debe compartirse.",
    content: `Mito
Antes del viaje, el valle permanecía cubierto por la niebla y nadie cruzaba el río.
Una viajera llegó desde el oriente y escuchó a las familias que vivían junto al agua.
Después recorrió los caminos y aprendió los nombres conservados por la comunidad.
En cada casa compartió una enseñanza y recibió otra forma de comprender el lugar.
Con el tiempo la noticia atravesó los valles y reunió a muchas personas alrededor del fuego.
Entonces comprendieron que el conocimiento permanece cuando puede compartirse sin convertirse en propiedad.
Al final del recorrido regresó al punto donde había comenzado la historia y dejó abierto el camino.
Historia
Las fuentes distinguen el núcleo del relato de sus interpretaciones posteriores.
Lección
Compartir la memoria también exige cuidar el territorio que la sostiene.`,
    community: "Muiscas",
    region: "Andina",
    latitude: 4.7,
    longitude: -74.1,
  };
  const familyOrder = (plan) =>
    plan.slides
      .map((slide, index) => {
        if (index === 0) return "cover";
        if (slide.kind === "location") return "map";
        if (slide.asset_id === "existing_landscape") return "secondary";
        return "typographic";
      })
      .join(">");
  const plans = Array.from({ length: 6 }, (_, feedIndex) =>
    planCarouselLocally({
      myth: { ...myth, slug: `${myth.slug}-${feedIndex}` },
      templates: INSTAGRAM_TEMPLATES,
      feedIndex,
    }).plan
  );

  assert.equal(new Set(plans.map(familyOrder)).size, 6);
  assert.equal(
    new Set(
      plans.map((plan) =>
        plan.slides.map((slide) => slide.palette_id).join(">")
      )
    ).size,
    6
  );
  assert.equal(
    new Set(plans.map((plan) => plan.slides[0].palette_id)).size,
    6
  );
});

test("un plan válido narra con densidad y separa las tres imágenes", () => {
  const configuration = [
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
  ];
  const slides = configuration.map(
    ([kind, narrative_role, asset_id, text_density], index) => ({
      sequence: index + 1,
      kind,
      narrative_role,
      ...(text_density ? { text_density } : {}),
      headline: `Lámina ${index + 1}`,
      body:
        asset_id === "none" && kind !== "location"
          ? Array(text_density === "narrative" ? 44 : text_density === "medium" ? 28 : 20)
              .fill("memoria")
              .join(" ")
          : "Una idea breve y verificable.",
      asset_id,
      crop_focus: "centre",
      image_overlay: "",
      alt_text: asset_id !== "none" ? "Descripción visual." : "",
      palette_id: ["laguna", "paramo", "tierra"][index % 3],
    })
  );
  const plan = {
    template_id: "umbral_de_agua",
    sequence_count: slides.length,
    generated_image: COMPLETE_GENERATED_IMAGE,
    slides,
  };
  assert.deepEqual(validateCarouselPlan(plan), []);
  const narrativePlan = structuredClone(plan);
  narrativePlan.slides[6].body = Array(68).fill("memoria").join(" ");
  assert.equal(
    validateCarouselPlan(narrativePlan).includes("slide_7_too_wordy"),
    false
  );
  narrativePlan.slides[6].body = Array(79).fill("memoria").join(" ");
  assert.equal(
    validateCarouselPlan(narrativePlan).includes("slide_7_too_wordy"),
    true
  );
  const counters = {};
  assert.ok(
    slides.every((slide) =>
      resolveSlideLayout(plan.template_id, slide, counters)
    )
  );
});

test("la validación bloquea una galería de imágenes amontonada al inicio", () => {
  const crowded = Array.from({ length: 10 }, (_, index) => ({
    sequence: index + 1,
    kind:
      index === 9
        ? "closing"
        : [0, 2, 6].includes(index)
          ? "image"
          : "typographic",
    narrative_role:
      index === 0
        ? "hook"
        : index === 9
          ? "closing"
          : index === 6
            ? "climax"
            : "development",
    text_density: [0, 2, 6].includes(index) ? undefined : "medium",
    headline: `Lámina ${index + 1}`,
    body: Array(28).fill("memoria").join(" "),
    asset_id:
      index === 0
        ? "existing_portrait"
        : index === 2
          ? "existing_landscape"
          : index === 6
            ? "generated_third"
            : "none",
    crop_focus: "centre",
    image_overlay: "",
    alt_text: [0, 2, 6].includes(index) ? "Descripción visual." : "",
    palette_id: ["laguna", "paramo", "tierra"][index % 3],
  }));
  const errors = validateCarouselPlan({
    template_id: "umbral_de_agua",
    sequence_count: crowded.length,
    generated_image: COMPLETE_GENERATED_IMAGE,
    slides: crowded,
  });

  assert.ok(errors.includes("images_too_close"));
  assert.ok(errors.includes("landscape_image_out_of_rhythm"));
});

test("un mito corto conserva seis fichas de relato entre sus dos imágenes", () => {
  const slides = Array.from({ length: 8 }, (_, index) => {
    const sequence = index + 1;
    const isImage = sequence === 1 || sequence === 5;
    return {
      sequence,
      kind:
        sequence === 1 || sequence === 5
          ? "image"
          : sequence === 8
            ? "closing"
            : "typographic",
      narrative_role:
        sequence === 1
          ? "hook"
          : sequence === 5
            ? "inciting_event"
            : sequence === 8
              ? "closing"
              : "development",
      ...(isImage ? {} : { text_density: sequence === 3 ? "short" : "medium" }),
      headline: `Lámina ${sequence}`,
      body: isImage
        ? "Escena visual."
        : Array(sequence === 3 ? 20 : 28).fill("memoria").join(" "),
      asset_id:
        sequence === 1
          ? "existing_portrait"
          : sequence === 5
            ? "existing_landscape"
            : "none",
      crop_focus: "centre",
      image_overlay: "",
      alt_text: isImage ? "Descripción visual." : "",
      palette_id: ["laguna", "paramo", "tierra"][index % 3],
    };
  });

  assert.deepEqual(
    validateCarouselPlan({
      template_id: "umbral_de_agua",
      sequence_count: slides.length,
      generated_image: { needed: false },
      slides,
    }),
    []
  );
});

test("la validación bloquea el reciclaje de una imagen", () => {
  const slides = Array.from({ length: 8 }, (_, index) => ({
    sequence: index + 1,
    kind: index === 7 ? "closing" : "typographic",
    narrative_role:
      index === 0 ? "hook" : index === 7 ? "closing" : "development",
    headline: "Idea",
    body: "Texto.",
    asset_id:
      index === 0 || index === 2
        ? "existing_portrait"
        : index === 4
          ? "existing_landscape"
          : "none",
    alt_text:
      index === 0 || index === 2 || index === 4 ? "Descripción." : "",
    palette_id: ["laguna", "paramo", "tierra"][index % 3],
  }));
  const errors = validateCarouselPlan({
    template_id: "umbral_de_agua",
    sequence_count: 8,
    generated_image: { needed: false },
    slides,
  });
  assert.ok(errors.includes("asset_reused_inside_carousel"));
});
