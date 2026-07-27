import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../../", import.meta.url);

async function read(relativePath) {
  return readFile(new URL(relativePath, root), "utf8");
}

test("el detalle reserva la horizontal para portada y la vertical para Relato", async () => {
  const [page, template, repository] = await Promise.all([
    read("src/app/mitos/[slug]/page.js"),
    read("src/components/templates/MythDetailTemplate.js"),
    read("src/lib/myths.js"),
  ]);

  assert.match(page, /verticalImageUrl:\s*myth\.vertical_image_url/);
  assert.match(repository, /FROM vertical_images/);
  assert.match(repository, /entity_type = 'myth'/);
  assert.match(template, /data-image-role="cover"/);
  assert.match(template, /data-image-role="inline-scene"/);
  assert.match(template, /src=\{myth\.verticalImageUrl\}/);
  assert.match(template, /imgClassName="object-contain"/);
  assert.doesNotMatch(template, /function ImagePause/);
  assert.equal((template.match(/src=\{myth\.imageUrl\}/g) || []).length, 1);
  assert.equal((template.match(/src=\{myth\.verticalImageUrl\}/g) || []).length, 1);
});

test("los estilos base de Leaflet cargan en todas las rutas con mapa", async () => {
  const [layout, explorer] = await Promise.all([
    read("src/app/layout.js"),
    read("src/components/MapaExplorer.js"),
  ]);

  assert.match(layout, /import "leaflet\/dist\/leaflet\.css";/);
  assert.doesNotMatch(explorer, /leaflet\/dist\/leaflet\.css/);
});
