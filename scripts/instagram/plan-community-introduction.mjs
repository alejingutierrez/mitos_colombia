import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { validateCarouselPlan } from "./lib/plan-schema.mjs";
import { eligibleTemplates, resolveSlideLayout } from "./lib/templates.mjs";

function argument(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function fill(value, variables) {
  return String(value || "").replace(/\{\{(\w+)\}\}/g, (_, key) =>
    String(variables[key] ?? "")
  );
}

const edition = argument("edition", "v1");
const baseUrl = argument("base-url", "http://localhost:3003");
const briefPath = path.resolve(
  argument(
    "brief",
    "content/instagram/community-briefs/muiscas.json"
  )
);
const snapshotPath = path.resolve(
  argument(
    "snapshot",
    `artifacts/instagram/muiscas-instagram-${edition}-source-snapshot.json`
  )
);
const [brief, snapshot] = await Promise.all([
  fs.readFile(briefPath, "utf8").then(JSON.parse),
  fs.readFile(snapshotPath, "utf8").then(JSON.parse),
]);
const mythCount = snapshot.myths?.length || snapshot.total || 0;
if (!mythCount) throw new Error("La instantánea comunitaria está vacía.");
const variables = { myth_count: mythCount };
const copy = Object.fromEntries(
  Object.entries(brief.slides || {}).map(([key, value]) => [
    key,
    fill(value, variables),
  ])
);
const paletteIds = [
  "noche",
  "oro",
  "laguna",
  "arcilla",
  "paramo",
  "selva",
  "tierra",
  "oro",
  "laguna",
];
const slides = [
  {
    sequence: 1,
    kind: "image",
    narrative_role: "hook",
    design_role: "overview",
    headline: brief.title,
    body: copy.cover_body,
    asset_id: "existing_portrait",
    crop_focus: "attention",
    image_overlay: "",
    alt_text: `Escena vertical comunitaria del altiplano para introducir ${brief.title}.`,
  },
  {
    sequence: 2,
    kind: "typographic",
    narrative_role: "setting",
    design_role: "context",
    text_density: "medium",
    headline: copy.opening_title,
    body: copy.opening_body,
    asset_id: "none",
    crop_focus: "centre",
    image_overlay: "",
    alt_text: "",
  },
  {
    sequence: 3,
    kind: "typographic",
    narrative_role: "development",
    design_role: "context",
    text_density: "medium",
    headline: copy.territory_title,
    body: copy.territory_body,
    asset_id: "none",
    crop_focus: "centre",
    image_overlay: "",
    alt_text: "",
  },
  {
    sequence: 4,
    kind: "location",
    narrative_role: "setting",
    design_role: "context",
    headline: "Altiplano cundiboyacense",
    body: `${brief.latitude.toFixed(4)}, ${brief.longitude.toFixed(4)}`,
    asset_id: "none",
    crop_focus: "centre",
    image_overlay: "",
    alt_text: "",
  },
  {
    sequence: 5,
    kind: "image",
    narrative_role: "inciting_event",
    headline: copy.image_title,
    body: copy.image_body,
    asset_id: "existing_landscape",
    crop_focus: "attention",
    image_overlay: "",
    alt_text: "Escena horizontal comunitaria del territorio muisca y una reunión junto a la laguna.",
  },
  {
    sequence: 6,
    kind: "typographic",
    narrative_role: "development",
    design_role: "testimony",
    text_density: "narrative",
    headline: copy.origins_title,
    body: copy.origins_body,
    asset_id: "none",
    crop_focus: "centre",
    image_overlay: "",
    alt_text: "",
  },
  {
    sequence: 7,
    kind: "typographic",
    narrative_role: "turn",
    design_role: "turn",
    text_density: "medium",
    headline: copy.power_title,
    body: copy.power_body,
    asset_id: "none",
    crop_focus: "centre",
    image_overlay: "",
    alt_text: "",
  },
  {
    sequence: 8,
    kind: "typographic",
    narrative_role: "meaning",
    design_role: "context",
    text_density: "narrative",
    headline: copy.collection_title,
    body: copy.collection_body,
    asset_id: "none",
    crop_focus: "centre",
    image_overlay: "",
    alt_text: "",
  },
  {
    sequence: 9,
    kind: "closing",
    narrative_role: "closing",
    design_role: "closing",
    text_density: "short",
    headline: copy.closing_title,
    body: "",
    asset_id: "none",
    crop_focus: "centre",
    image_overlay: "",
    alt_text: "",
  },
].map((slide, index) => ({ ...slide, palette_id: paletteIds[index] }));
const template = eligibleTemplates([])[0];
const plan = {
  template_id: template.id,
  editorial_thesis:
    "Los mitos muiscas forman un universo plural donde territorio, memoria, poder y responsabilidad se iluminan entre sí.",
  sequence_count: slides.length,
  palette_id: slides[0].palette_id,
  generated_image: {
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
      differentiation: ""
    },
    avoid: []
  },
  slides,
  caption: `${copy.cover_body} Esta introducción abre una serie de ${mythCount} relatos. Explora la colección completa en mitosdecolombia.com/comunidades/muiscas`,
  hashtags: brief.hashtags,
  factual_guardrails: [
    "Presentar la colección como un universo plural y no como una única versión cerrada.",
    "No inventar equivalencias, símbolos o costumbres que las fichas editoriales no documenten.",
    "Distinguir territorio, relato e interpretación moderna."
  ]
};
const errors = validateCarouselPlan(plan, [template.id]);
if (errors.length) {
  throw new Error(`Plan comunitario inválido: ${errors.join(", ")}`);
}
const counters = {};
plan.slides = plan.slides.map((slide) => ({
  ...slide,
  layout: resolveSlideLayout(plan.template_id, slide, counters),
}));
const outputPath = path.resolve(
  argument(
    "out",
    `artifacts/instagram/${brief.slug}/plan-${edition}.json`
  )
);
const payload = {
  schema_version: 1,
  created_at: new Date().toISOString(),
  myth: {
    id: 0,
    title: brief.title,
    slug: brief.slug,
    region: brief.region,
    community: brief.community,
    latitude: brief.latitude,
    longitude: brief.longitude,
    kind: brief.kind,
    ctaHref: brief.cta_href,
  },
  provider: "local_community_brief",
  model_id: "curated-community-introduction-v1",
  usage: null,
  source_assets: {
    existing_portrait: new URL(
      brief.source_assets.portrait_path,
      baseUrl
    ).toString(),
    existing_landscape: brief.source_assets.landscape_url,
  },
  production_policy: {
    require_third_image: false,
    source_snapshot: snapshotPath,
    content_type: "community_introduction",
    universe_total: mythCount,
  },
  plan,
};
await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`);
console.log(
  JSON.stringify({
    status: "planned",
    slug: brief.slug,
    universe_total: mythCount,
    output: outputPath,
  })
);
