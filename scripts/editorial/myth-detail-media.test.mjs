import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../../", import.meta.url);

async function read(relativePath) {
  return readFile(new URL(relativePath, root), "utf8");
}

test("la portada reparte horizontal en escritorio y vertical en móvil; el Relato conserva la vertical", async () => {
  const [page, template, hero, repository] = await Promise.all([
    read("src/app/mitos/[slug]/page.js"),
    read("src/components/templates/MythDetailTemplate.js"),
    read("src/components/templates/MythHero.js"),
    read("src/lib/myths.js"),
  ]);

  assert.match(page, /verticalImageUrl:\s*myth\.vertical_image_url/);
  assert.match(repository, /FROM vertical_images/);
  assert.match(repository, /entity_type = 'myth'/);

  // La portada vive en MythHero y es UNA sola imagen con art direction: dos
  // elementos (uno oculto por CSS) harían que el teléfono se bajase también la
  // apaisada que nunca ve.
  assert.match(hero, /data-image-role="cover"/);
  assert.match(hero, /const desktopSrc = myth\.imageUrl \|\| myth\.verticalImageUrl;/);
  assert.match(hero, /const mobileSrc = myth\.verticalImageUrl \|\| myth\.imageUrl;/);
  assert.equal((hero.match(/<ImageFrame/g) || []).length, 1);
  assert.match(hero, /mobileSrc=\{mobileSrc\}/);

  // El detalle ya no dibuja portada: sólo la escena del relato, contenida.
  assert.doesNotMatch(template, /data-image-role="cover"/);
  assert.match(template, /data-image-role="inline-scene"/);
  assert.match(template, /src=\{myth\.verticalImageUrl\}/);
  assert.match(template, /imgClassName="object-contain"/);
  assert.doesNotMatch(template, /function ImagePause/);
  assert.equal((template.match(/src=\{myth\.verticalImageUrl\}/g) || []).length, 1);
});

test("el tríptico reparte las tres escenas en tres sitios distintos de la interna", async () => {
  const [page, template, sections] = await Promise.all([
    read("src/app/mitos/[slug]/page.js"),
    read("src/components/templates/MythDetailTemplate.js"),
    read("src/components/templates/MythSections.js"),
  ]);

  // La huella (1:1) viaja desde la fila del mito hasta el bloque de enseñanza.
  assert.match(page, /squareImageUrl:\s*myth\.square_image_url/);
  assert.match(template, /huellaUrl=\{myth\.squareImageUrl\}/);
  assert.match(sections, /data-image-role="huella"/);

  // Cae en la costura entre el relato y la enseñanza, no en una sección propia:
  // es el objeto focal del bloque, en lugar del medallón de motivo.
  assert.match(sections, /huellaUrl \? \(\s*<HuellaPlate/);
  assert.match(sections, /<CreamMedallion motif=\{motif\}/);

  // En móvil la portada es la vertical, así que la entrada apaisada se muestra
  // al abrir el relato para que no quede escondida en teléfono.
  assert.match(template, /data-image-role="inline-entrance"/);
  assert.match(template, /<MobileEntranceImage myth=\{myth\} className="mb-9 md:hidden"/);

  // Cada escena aparece exactamente una vez en la plantilla.
  assert.equal((template.match(/myth\.squareImageUrl/g) || []).length, 1);
  assert.equal((template.match(/src=\{myth\.imageUrl\}/g) || []).length, 1);
});

test("la interna del mito declara un único h1", async () => {
  const [template, hero] = await Promise.all([
    read("src/components/templates/MythDetailTemplate.js"),
    read("src/components/templates/MythHero.js"),
  ]);

  // `indexability-audit` marca cualquier página con h1Count !== 1: portada
  // móvil y de escritorio comparten el mismo título.
  assert.equal((hero.match(/<h1\b/g) || []).length, 1);
  assert.doesNotMatch(template, /<h1\b/);
});

test("la portada móvil se dimensiona con la obra y reserva artículo asomando", async () => {
  const hero = await read("src/components/templates/MythHero.js");

  // Las verticales del archivo son 2:3 (1024×1536), no 9:16: el alto de la
  // portada sale de la obra, no de una fracción de pantalla.
  assert.match(hero, /PORTRAIT_ART = "150vw"/);
  assert.match(hero, /"--peek": "8rem"/);
  assert.match(
    hero,
    /min\(var\(--avail\), max\(var\(--art\), calc\(2 \* var\(--art\) \+ var\(--peek\) - var\(--avail\)\)\)\)/
  );
});

test("los estilos base de Leaflet cargan en todas las rutas con mapa", async () => {
  const [layout, explorer] = await Promise.all([
    read("src/app/layout.js"),
    read("src/components/MapaExplorer.js"),
  ]);

  assert.match(layout, /import "leaflet\/dist\/leaflet\.css";/);
  assert.doesNotMatch(explorer, /leaflet\/dist\/leaflet\.css/);
});
