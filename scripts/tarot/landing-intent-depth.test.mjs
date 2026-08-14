import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { TAROT_LANDING_VARIANTS } from "../../src/lib/tarot-commerce.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const experienceSource = readFileSync(
  path.join(projectRoot, "src/components/tarot-commerce/TarotCommerceExperience.js"),
  "utf8"
);
const landingSource = readFileSync(
  path.join(projectRoot, "src/components/tarot-commerce/TarotLandingPage.js"),
  "utf8"
);
const commerceStyles = readFileSync(
  path.join(projectRoot, "src/components/tarot-commerce/TarotCommerce.module.css"),
  "utf8"
);

test("each landing declares enough proof for its purchase intent", () => {
  const variants = Object.values(TAROT_LANDING_VARIANTS);

  assert.equal(variants.length, 6);
  for (const variant of variants) {
    assert.ok(variant.galleryCount >= 6, `${variant.path} necesita una galería sustantiva`);
    assert.ok(variant.questions?.length >= 2, `${variant.path} necesita objeciones específicas`);
    assert.ok(variant.reasons?.length >= 3, `${variant.path} necesita razones de compra`);
    assert.ok(variant.actionDetails?.length >= 3, `${variant.path} necesita una ruta de uso`);
    assert.equal(variant.sectionOrder?.length, 8, `${variant.path} necesita una secuencia editorial completa`);
    assert.equal(new Set(variant.sectionOrder).size, 8, `${variant.path} no debe repetir secciones`);
    assert.equal(variant.heroPanel?.items.length, 3, `${variant.path} necesita un artefacto editorial propio`);
  }

  assert.equal(new Set(variants.map((variant) => variant.architecture)).size, 6, "Cada landing necesita una arquitectura propia");
  assert.equal(new Set(variants.map((variant) => variant.sectionOrder.join("|"))).size, 6, "Cada landing necesita un orden de lectura propio");
  assert.equal(new Set(variants.map((variant) => variant.heroPanel.label)).size, 6, "Cada hero necesita un dispositivo editorial propio");

  assert.ok(
    TAROT_LANDING_VARIANTS["regalo-colombiano"].signature.items.length >= 6,
    "La landing de regalo debe cubrir los seis perfiles del brief"
  );
  assert.ok(
    TAROT_LANDING_VARIANTS["souvenir-colombiano"].galleryCount >= 8,
    "Souvenir necesita una muestra territorial amplia"
  );
  assert.equal(
    TAROT_LANDING_VARIANTS.autoconocimiento.signature.prompts.length,
    3,
    "Autoconocimiento necesita tres preguntas abiertas"
  );
  assert.ok(
    TAROT_LANDING_VARIANTS["arte-y-coleccion"].galleryCount >= 8,
    "Arte necesita suficientes piezas para percibir una serie"
  );
  assert.ok(
    TAROT_LANDING_VARIANTS["mitos-y-leyendas"].galleryCount >= 8 &&
      TAROT_LANDING_VARIANTS["mitos-y-leyendas"].galleryCount <= 12,
    "Cultura debe mostrar entre ocho y doce pares carta-mito"
  );
});

test("the rendered experience implements examples, provenance and accessible zoom", () => {
  assert.match(experienceSource, /cards\.slice\(0, 3\)/);
  assert.match(experienceSource, /Tres ejemplos reales de la baraja/);
  assert.match(experienceSource, /myth_region/);
  assert.match(experienceSource, /aria-modal="true"/);
  assert.match(experienceSource, /view_gallery_zoom/);
  assert.match(experienceSource, /data-landing-intent=\{variant\.id\}/);
  assert.match(experienceSource, /data-architecture=\{variant\.architecture\}/);
  assert.match(experienceSource, /variant\.sectionOrder\.map\(renderJourneySection\)/);
  assert.match(experienceSource, /import \{ Header \} from "\.\.\/organisms\/Header"/);
  assert.match(experienceSource, /active="\/tarot"/);
  assert.doesNotMatch(experienceSource, /variant\.navigation\.map/);
  assert.match(experienceSource, /variant\.heroPanel\.items\.map/);
  assert.match(landingSource, /variant\.galleryCount/);
  assert.match(landingSource, /arcana: card\.arcana/);
  for (const architecture of Object.values(TAROT_LANDING_VARIANTS).map((variant) => variant.architecture)) {
    assert.match(commerceStyles, new RegExp(`data-architecture=\\"${architecture}\\"`));
  }
});

test("the in-page cart keeps purchase intent and trust visible", () => {
  assert.match(experienceSource, /variant\.eyebrow/);
  assert.match(experienceSource, /variant\.title/);
  assert.match(experienceSource, /Entrega verificable/);
  assert.match(experienceSource, /Cinco rutas de pago/);
  assert.match(
    experienceSource,
    /Tarjeta, PSE, Nequi, Botón Bancolombia y QR Bre-B/
  );
  assert.match(experienceSource, /Bold procesa el pago/);
  assert.match(experienceSource, /variant=\{variant\}/);
  assert.match(experienceSource, /restrictive browser blocks storage/);
});
