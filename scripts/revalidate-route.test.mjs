import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { computeTargetSize } from "./apply-myth-triptych.mjs";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

/**
 * Un cambio hecho sólo en la base de datos no se ve en producción si nadie
 * tumba las DOS cachés: la de datos (`unstable_cache`, por etiqueta) y el HTML
 * prerenderizado de la interna (por ruta). Purgar sólo la etiqueta fue
 * exactamente el motivo por el que las imágenes nuevas no aparecían.
 */

test("la ruta de revalidación purga etiqueta y ruta, y exige autenticación", async () => {
  const route = await read("src/app/api/admin/revalidate/route.js");

  assert.match(route, /import \{ revalidatePath, revalidateTag \} from "next\/cache"/);
  assert.match(route, /for \(const tag of tags\) revalidateTag\(tag\)/);
  assert.match(route, /for \(const path of paths\) revalidatePath\(path\)/);
  assert.match(route, /slugs\.map\(\(slug\) => `\/mitos\/\$\{slug\}`\)/);

  // Sin Basic auth no purga nada.
  assert.match(route, /if \(!checkAuth\(request\)\) \{/);
  assert.match(route, /status: 401/);

  // Sólo rutas internas: nada de `//host` ni de saltos con `..`.
  assert.match(route, /path\.startsWith\("\/\/"\)/);
  assert.match(route, /path\.includes\("\.\."\)/);
});

test("el editor de mitos del admin también tumba el HTML prerenderizado", async () => {
  const route = await read("src/app/api/admin/myths/route.js");

  assert.match(route, /import \{ revalidatePath, revalidateTag \}/);
  // Una por cada mutación: crear y editar.
  assert.equal(
    (route.match(/revalidatePath\(`\/mitos\/\$\{data\.slug\}`\)/g) || []).length,
    2
  );
  // Al renombrar hay que purgar también la ruta vieja, que queda huérfana.
  assert.match(route, /existing\.slug !== data\.slug/);
});

test("publicar un tríptico purga la caché salvo que se pida lo contrario", async () => {
  const script = await read("scripts/apply-myth-triptych.mjs");

  assert.match(script, /revalidate: true/);
  assert.match(script, /--no-revalidate/);
  assert.match(script, /\/api\/admin\/revalidate/);
  // Si falla la purga, el script avisa pero no tumba la publicación ya escrita.
  assert.match(script, /aparecerá cuando expire el ISR/);
});

/**
 * `IMAGE_PRESETS` describe el techo del pipeline viejo de OpenAI (1536 px de
 * ancho). Usar esas medidas al publicar tiraba el 43% del ancho de las piezas
 * de 2K y la portada se veía blanda en escritorio.
 */
test("publicar conserva la resolución del original, no la del preset viejo", () => {
  const horizontal = { outputWidth: 1536, outputHeight: 864 };
  const vertical = { outputWidth: 864, outputHeight: 1536 };
  const square = { outputWidth: 1024, outputHeight: 1024 };

  assert.deepEqual(
    computeTargetSize({ sourceWidth: 2688, sourceHeight: 1520, preset: horizontal }),
    { width: 2688, height: 1512 }
  );
  assert.deepEqual(
    computeTargetSize({ sourceWidth: 1520, sourceHeight: 2688, preset: vertical }),
    { width: 1512, height: 2688 }
  );
  assert.deepEqual(
    computeTargetSize({ sourceWidth: 2048, sourceHeight: 2048, preset: square }),
    { width: 2048, height: 2048 }
  );
});

test("nunca amplía una pieza pequeña ni pasa del techo", () => {
  const horizontal = { outputWidth: 1536, outputHeight: 864 };

  // Original modesto: se respeta su ancho, no se infla al del preset.
  assert.deepEqual(
    computeTargetSize({ sourceWidth: 1200, sourceHeight: 800, preset: horizontal }),
    { width: 1200, height: 675 }
  );
  // Original enorme: se recorta al techo de 2688.
  assert.deepEqual(
    computeTargetSize({ sourceWidth: 6000, sourceHeight: 3400, preset: horizontal }),
    { width: 2688, height: 1512 }
  );
});
