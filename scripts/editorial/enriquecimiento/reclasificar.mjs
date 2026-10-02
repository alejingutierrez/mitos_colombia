/**
 * Mueve un mito de comunidad sin despublicarlo.
 *
 *   node scripts/editorial/enriquecimiento/reclasificar.mjs --slug=<slug> --a=<comunidadDestino> [--apply --confirm=<slug>]
 *
 * Hay fichas que están en la comunidad equivocada y el texto es correcto: «El
 * origen de las frutas» publica el ciclo uitoto-muinane de Moniya Amena bajo
 * los yucuna. Lo que hay que corregir es la adscripción, no el relato, y
 * despublicar no es una opción: la URL ya está indexada y la gente llega por
 * ella. Esto cambia `community_id`, `region_id` y `category_path` en `myths` y
 * en `editorial_myths`, y no toca ni una palabra del texto ni una columna de
 * imagen.
 *
 * El `category_path` sale del módulo cuando el mito tiene uno; si no, se
 * compone con la región y el nombre de la comunidad de destino.
 *
 * Dry-run por defecto. Con --apply deja un respaldo en
 * `artifacts/editorial-backups/` y escribe en una transacción. Después:
 * revalidar → verificar --vivo.
 */
import process from "node:process";

import { connect, loadModules, parseArgs, saveBackup } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const slug = String(options.slug || "");
const destino = String(options.a || options.destino || "");
if (!slug) throw new Error("Falta --slug=<slug del mito>");
if (!destino) throw new Error("Falta --a=<slug de la comunidad de destino>");

const client = await connect(options);
try {
  const actual = await client.query(
    `SELECT m.id, m.slug, m.title, m.category_path, m.community_id, m.region_id,
            c.slug AS comunidad, r.slug AS region
       FROM myths m
       LEFT JOIN communities c ON c.id = m.community_id
       LEFT JOIN regions r ON r.id = m.region_id
      WHERE m.slug = $1`,
    [slug],
  );
  if (!actual.rowCount) throw new Error(`No existe el mito ${slug} en Neon.`);
  const mito = actual.rows[0];

  const nueva = await client.query(
    `SELECT c.id, c.slug, c.name, c.region_id, r.slug AS region, r.name AS region_name
       FROM communities c JOIN regions r ON r.id = c.region_id
      WHERE c.slug = $1`,
    [destino],
  );
  if (!nueva.rowCount) throw new Error(`No existe la comunidad ${destino}.`);
  if (nueva.rowCount > 1) throw new Error(`La comunidad ${destino} existe en varias regiones.`);
  const comunidad = nueva.rows[0];

  // El módulo manda si declara la taxonomía; si no, se compone.
  let categoria = "";
  const modulos = await loadModules(mito.comunidad || destino, options);
  const record = modulos?.get(slug);
  if (record?.category_path) categoria = record.category_path;
  else categoria = `${comunidad.region_name} > ${comunidad.region_name} > ${comunidad.name}`;

  console.log(`Reclasificar ${slug}`);
  console.table([
    { campo: "comunidad", antes: mito.comunidad, despues: comunidad.slug },
    { campo: "región", antes: mito.region, despues: comunidad.region },
    { campo: "category_path", antes: mito.category_path, despues: categoria },
  ]);
  if (mito.community_id === comunidad.id && mito.category_path === categoria) {
    console.log("Ya está donde debe: nada que hacer.");
    process.exit(0);
  }
  if (!options.apply) {
    console.log(`\nDry-run. Para escribir: --apply --confirm=${slug}`);
    process.exit(0);
  }
  if (options.confirm !== slug) throw new Error(`Para aplicar usa --confirm=${slug}.`);

  const backup = await saveBackup(client, mito.comunidad || destino, "reclasificar", [mito.id]);
  await client.query("BEGIN");
  try {
    await client.query(
      "UPDATE myths SET community_id = $2, region_id = $3, category_path = $4, updated_at = NOW() WHERE id = $1",
      [mito.id, comunidad.id, comunidad.region_id, categoria],
    );
    await client.query(
      "UPDATE editorial_myths SET community_id = $2, region_id = $3, category_path = $4, updated_at = NOW() WHERE slug = $1",
      [slug, comunidad.id, comunidad.region_id, categoria],
    );
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  }
  console.log(`Aplicado. Respaldo: ${backup}`);
  console.log(
    `Siguiente: node scripts/editorial/enriquecimiento/revalidar.mjs --comunidad=${comunidad.slug} --slugs=${slug}`,
  );
} finally {
  await client.end();
}
