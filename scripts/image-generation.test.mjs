import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  APPROVED_IMAGE_STYLE_PROFILE,
  buildCraftImagePrompt,
  buildImageGenerationParams,
  IMAGE_GENERATION_MODEL,
  IMAGE_PRESETS,
  IMAGE_STYLE_PROFILES,
  softenLegacyImagePrompt,
} from "../src/lib/image-generation.js";
import {
  APPROVED_STYLE_PROFILE,
  buildRegenerationCommand,
  buildStyleApplicationScopes,
  buildStyleReviewRoundCandidates,
} from "../src/lib/image-style-review-data.js";
import { loadHomeMythsForRound } from "./generate-image-style-round.mjs";
import { loadCraftRegenerationEntities } from "./regenerate-craft-images.mjs";

const mythEntity = {
  type: "myth",
  name: "Amanecer de Bachue y Furachoque",
  region: "Andina",
  community: "Muiscas",
  prompt:
    "Bachue emerges from the sacred lagoon with a child and returns as two serpents.",
  excerpt:
    "Del lago sagrado, Bachue emerge con un nino y deja el origen del pueblo Muisca.",
};

test("uses gpt-image-2 and GPT image parameters for production generation", () => {
  const params = buildImageGenerationParams({
    prompt: "Escena de prueba",
    preset: "horizontal",
  });

  assert.equal(IMAGE_GENERATION_MODEL, "gpt-image-2");
  assert.equal(params.model, "gpt-image-2");
  assert.equal(params.size, IMAGE_PRESETS.horizontal.size);
  assert.equal(params.quality, "high");
  assert.equal(params.output_format, "jpeg");
  assert.equal(params.moderation, "low");
  assert.equal(params.n, 1);
});

test("approved production style defaults to full paper cut illustration", () => {
  assert.equal(APPROVED_IMAGE_STYLE_PROFILE, "fullPaperCutIllustration");
  assert.equal(APPROVED_STYLE_PROFILE, "fullPaperCutIllustration");

  const prompt = buildCraftImagePrompt({ entity: mythEntity });

  assert.match(prompt, /full paper cut/i);
  assert.match(prompt, /paper quilling/i);
  assert.match(prompt, /formas planas recortadas/i);
  assert.match(prompt, /color mate uniforme/i);
  assert.match(prompt, /profundidad solo por superposicion grafica/i);
  assert.match(prompt, /prohibido simular fibras de papel/i);
  assert.match(prompt, /sin volumen fotográfico/i);
  assert.doesNotMatch(prompt, /fotografia de un trabajo real/i);
});

test("craft prompt asks for a complete paper cut illustration, not a photographed object", () => {
  const prompt = buildCraftImagePrompt({
    entity: mythEntity,
    orientation: "horizontal",
  });

  assert.match(prompt, /ilustracion digital completa/i);
  assert.match(prompt, /no fotografia ni reproduccion de un objeto fisico/i);
  assert.match(prompt, /composicion frontal/i);
  assert.match(prompt, /de borde a borde/i);
  assert.match(prompt, /sin texto/i);
  assert.match(prompt, /Andina/);
  assert.match(prompt, /Muiscas/);
});

test("craft prompt reduces overloaded source prompts into one primary composition", () => {
  const prompt = buildCraftImagePrompt({
    entity: mythEntity,
    orientation: "horizontal",
  });

  assert.match(prompt, /una sola composicion ilustrada/i);
  assert.match(prompt, /escena principal/i);
  assert.match(prompt, /simbolos culturales/i);
});

test("craft prompt supports design-round style profiles without changing production params", () => {
  const prompt = buildCraftImagePrompt({
    entity: mythEntity,
    orientation: "horizontal",
    styleProfile: "documentaryPaperArtifact",
  });

  assert.ok(IMAGE_STYLE_PROFILES.documentaryPaperArtifact);
  assert.match(prompt, /perfil de ronda visual/i);
  assert.match(prompt, /artefacto documental|documental/i);
});

test("legacy prompts become narrative material instead of illustration instructions", () => {
  const legacyPrompt = `Ilustración en estilo paper quilling que represente el siguiente mito colombiano.

Escena principal: La escena principal muestra una figura central.

Personaje: rostro dramatico.

Texto del mito:
Aqui viene un relato largo que no debe entrar al prompt final.`;

  const softened = softenLegacyImagePrompt(legacyPrompt);

  assert.doesNotMatch(softened, /Ilustraci[oó]n en estilo/i);
  assert.doesNotMatch(softened, /Texto del mito/i);
  assert.match(softened, /Motivo central/i);
  assert.match(softened, /Presencia humana sugerida/i);
});

test("legacy maquette profile is normalized to paper cut illustration", () => {
  const prompt = buildCraftImagePrompt({
    entity: mythEntity,
    orientation: "horizontal",
    styleProfile: "studioPaperMaquette",
  });

  assert.match(prompt, /full paper cut ilustrado/i);
  assert.match(prompt, /evitar drama facial hiperrealista/i);
  assert.match(prompt, /no como instruccion de ilustracion literal/i);
  assert.doesNotMatch(prompt, /fotografiada frontalmente/i);
});

test("legacy physical-maquette wording is removed before generation", () => {
  const softened = softenLegacyImagePrompt(
    "Maqueta física de papel fotografiada de frente, papel físico, fibras reales y luz de estudio.",
  );

  assert.match(softened, /ilustración full paper cut/i);
  assert.doesNotMatch(
    softened,
    /fotografiada|papel físico|fibras reales|luz de estudio/i,
  );
});

test("editorial generators resume safely after billing or visual QA stops", () => {
  for (const community of ["ticuna", "tucano", "ufaina", "yagua"]) {
    const source = fs.readFileSync(
      new URL(
        `./editorial/generate-${community}-images.mjs`,
        import.meta.url,
      ),
      "utf8",
    );
    assert.match(source, /existing\?\.visualQa === "pending"/);
    assert.match(source, /awaiting-qa/);
    assert.match(source, /existing\?\.visualQa === "rejected"/);
  }
});

test("presets keep horizontal, banner and vertical dimensions valid for gpt-image-2", () => {
  assert.equal(IMAGE_PRESETS.horizontal.size, "1536x1024");
  assert.equal(IMAGE_PRESETS.homeBanner.size, "1536x864");
  assert.equal(IMAGE_PRESETS.vertical.size, "1024x1536");
  assert.equal(
    IMAGE_PRESETS.horizontal.outputWidth /
      IMAGE_PRESETS.horizontal.outputHeight,
    16 / 9
  );
  assert.equal(
    IMAGE_PRESETS.vertical.outputWidth /
      IMAGE_PRESETS.vertical.outputHeight,
    9 / 16
  );

  for (const preset of Object.values(IMAGE_PRESETS)) {
    const [width, height] = preset.size.split("x").map(Number);
    assert.equal(width % 16, 0, preset.size);
    assert.equal(height % 16, 0, preset.size);
    assert.ok(Math.max(width, height) / Math.min(width, height) <= 3);
  }
});

test("style review builds a reproducible application plan for the current home", () => {
  const scopes = buildStyleApplicationScopes({
    seed: 190,
    myths: [{ id: 17 }, { id: 40 }, { id: 17 }],
    regions: [{ id: 2 }, { id: 3 }],
    banners: [{ id: 1 }],
  });

  const fullScope = scopes.find((scope) => scope.key === "home-current");
  assert.equal(fullScope.count, 5);
  assert.equal(fullScope.seed, 190);

  assert.equal(
    buildRegenerationCommand({
      ...fullScope,
      styleProfile: "documentaryPaperArtifact",
      dryRun: true,
    }),
    "npm run images:regenerate:craft -- --target home-current --seed 190 --force --style-profile documentaryPaperArtifact --dry-run"
  );

  const mythsScope = scopes.find((scope) => scope.key === "home-current-myths");
  assert.equal(
    buildRegenerationCommand({
      ...mythsScope,
      styleProfile: "cinematicPaperRelief",
    }),
    "npm run images:regenerate:craft -- --target myths --ids 17,40 --force --style-profile cinematicPaperRelief"
  );
});

test("style review round candidates are bounded to five visible home myths", () => {
  const candidates = buildStyleReviewRoundCandidates({
    myths: Array.from({ length: 8 }, (_, index) => ({
      id: index + 1,
      title: `Mito ${index + 1}`,
      slug: `mito-${index + 1}`,
      region: "Andina",
      community: "Muisca",
    })),
  });

  assert.equal(candidates.length, 5);
  assert.deepEqual(
    candidates.map((candidate) => candidate.id),
    [1, 2, 3, 4, 5]
  );
  assert.ok(candidates.every((candidate) => candidate.preset === "horizontal"));
});

test("style round closes the database connection before image generation can start", async () => {
  const calls = [];
  const client = {
    async connect() {
      calls.push("connect");
    },
    async query() {
      calls.push("query");
      return { rows: [] };
    },
    async end() {
      calls.push("end");
    },
  };

  const entities = await loadHomeMythsForRound({ createClient: () => client });

  assert.deepEqual(entities, []);
  assert.deepEqual(calls, ["connect", "query", "end"]);
});

test("style round closes the database connection when myth selection fails", async () => {
  const calls = [];
  const client = {
    async connect() {
      calls.push("connect");
    },
    async query() {
      calls.push("query");
      throw new Error("selection failed");
    },
    async end() {
      calls.push("end");
    },
  };

  await assert.rejects(
    () => loadHomeMythsForRound({ createClient: () => client }),
    /selection failed/
  );
  assert.deepEqual(calls, ["connect", "query", "end"]);
});

test("production craft regeneration closes the database connection before image generation", async () => {
  const calls = [];
  const client = {
    async connect() {
      calls.push("connect");
    },
    async query() {
      calls.push("query");
      return { rows: [] };
    },
    async end() {
      calls.push("end");
    },
  };

  const entities = await loadCraftRegenerationEntities({ createClient: () => client });

  assert.deepEqual(entities, []);
  assert.deepEqual(calls, ["connect", "query", "end"]);
});

test("production craft regeneration closes the database connection on selection errors", async () => {
  const calls = [];
  const client = {
    async connect() {
      calls.push("connect");
    },
    async query() {
      calls.push("query");
      throw new Error("production selection failed");
    },
    async end() {
      calls.push("end");
    },
  };

  await assert.rejects(
    () => loadCraftRegenerationEntities({ createClient: () => client }),
    /production selection failed/
  );
  assert.deepEqual(calls, ["connect", "query", "end"]);
});
