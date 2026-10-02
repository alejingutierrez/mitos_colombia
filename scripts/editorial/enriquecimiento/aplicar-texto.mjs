/**
 * Fase A · escribe en Neon el texto que declaran los módulos del repo.
 *
 *   node scripts/editorial/enriquecimiento/aplicar-texto.mjs --comunidad=wayuu [--slugs=a,b] [--env=.env]
 *   node scripts/editorial/enriquecimiento/aplicar-texto.mjs --comunidad=wayuu --apply --confirm=wayuu-texto
 *
 * Toca sólo title, los cinco campos, content, excerpt, seo_title y seo_description,
 * en `myths` (lo que lee la página) y en `editorial_myths` (el expediente), en una
 * sola transacción con respaldo previo. Nunca imágenes, taxonomía, coordenadas ni
 * fuentes: para eso están apply-myth-triptych, los sync-<com>-review y aplicar-fuentes.
 * Sí mantiene en paso `seo_pages`, que es de donde la página saca su <title> y su
 * descripción: `myths.seo_title` sólo actúa de reserva cuando esa fila no existe.
 * A diferencia de apply-editorial-myth.mjs, no reescribe image_url desde el módulo,
 * que suele estar desactualizado respecto de lo que subió el pipeline de imágenes.
 */
import process from "node:process";
import { parseArgs, requireCommunity, connect, resolveCommunity, loadDbMyths, loadModules, validateRecord, diffText, saveBackup, words, TEXT_FIELDS } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const communitySlug = requireCommunity(options);
const only = options.slugs ? new Set(String(options.slugs).split(",").map((s) => s.trim())) : null;
const confirmation = `${communitySlug}-texto`;
const FIELDS = ["title", ...TEXT_FIELDS, "content", "excerpt", "seo_title", "seo_description"];
const modules = await loadModules(communitySlug, options);
if (!modules) throw new Error(`La comunidad ${communitySlug} no tiene módulos en editorial/: Fase A empieza por escribirlos.`);

const client = await connect(options);
try {
  const community = await resolveCommunity(client, communitySlug, options);
  const rows = await loadDbMyths(client, community.id);
  // La cabecera de la página vive en `seo_pages` y puede haberse quedado atrás
  // aunque el texto ya coincida: hay que mirarla para decidir si hay trabajo.
  const cabeceras = new Map(
    (
      await client.query(
        "SELECT slug, meta_title, meta_description FROM seo_pages WHERE page_type = 'myth' AND slug = ANY($1)",
        [rows.map((r) => r.slug)],
      )
    ).rows.map((r) => [r.slug, r]),
  );
  const plan = [];
  const problems = [];
  for (const row of rows) {
    if (only && !only.has(row.slug)) continue;
    const record = modules.get(row.slug);
    if (!record) continue;
    const errors = validateRecord(record, { texto: true, fuentes: false });
    if (errors.length) problems.push(`${row.slug}: ${errors.join("; ")}`);
    const changed = diffText(row, record);
    const cabecera = cabeceras.get(row.slug);
    const cabeceraVieja =
      !cabecera ||
      cabecera.meta_title !== record.seo_title ||
      cabecera.meta_description !== record.seo_description;
    if (cabeceraVieja) changed.push("seo_pages");
    if (changed.length) plan.push({ row, record, changed });
  }
  console.log(`Fase A · ${communitySlug} · ${rows.length} publicados · ${plan.length} con cambios de texto`);
  console.table(plan.map(({ row, record, changed }) => ({ slug: row.slug, campos: changed.join(","), mito: `${words(row.mito)}→${words(record.mito)}`, leccion: `${words(row.leccion)}→${words(record.leccion)}`, tiene_expediente: Boolean(row.editorial_id) })));
  // El título es lo que el lector ve primero, y cambiarlo puede resolver en
  // silencio una decisión abierta: en Bogotá, «Margarita Villaquirá» y
  // «Antonín» entraban así. Se enseña entero, no como un campo más.
  const titulos = plan.filter(({ changed }) => changed.includes("title"));
  if (titulos.length) {
    console.log(`\nCambian de título (${titulos.length}):`);
    for (const { row, record } of titulos) console.log(`  · ${row.slug}: «${row.title}» → «${record.title}»`);
  }
  if (problems.length) {
    console.log(`\nPROBLEMAS (${problems.length}), no se aplica nada:`);
    for (const p of problems) console.log(`  ✗ ${p}`);
    process.exitCode = 1;
  } else if (!plan.length) console.log("Neon ya coincide con los módulos: nada que aplicar.");
  else if (!options.apply) console.log(`\nDry-run. Para escribir: --apply --confirm=${confirmation}`);
  else if (options.confirm !== confirmation) throw new Error(`Para aplicar usa --confirm=${confirmation}.`);
  else {
    const backup = await saveBackup(client, communitySlug, "texto", plan.map(({ row }) => row.id));
    await client.query("BEGIN");
    try {
      for (const { row, record } of plan) {
        const values = FIELDS.map((f) => record[f]);
        const set = FIELDS.map((f, i) => `${f} = $${i + 2}`).join(", ");
        await client.query(`UPDATE myths SET ${set}, content_formatted = TRUE, updated_at = NOW() WHERE id = $1`, [row.id, ...values]);
        if (row.editorial_id) await client.query(`UPDATE editorial_myths SET ${set}, content_formatted = TRUE, updated_at = NOW() WHERE id = $1`, [row.editorial_id, ...values]);
        // El <title> de la página no sale de `myths.seo_title`: sale de
        // `seo_pages`, una tabla aparte que `generateMetadata` consulta antes
        // que nada y que se quedaba con el título viejo. Se veía crudo en la
        // ficha de la Tunda, que seguía anunciándose en Google como «Tulavieja:
        // El Mito de Adriano Lemos» —un nombre que la investigación mostró que
        // sale de este mismo sitio— mucho después de reescribirla.
        await client.query(
          `INSERT INTO seo_pages
             (page_type, slug, meta_title, meta_description, meta_keywords,
              og_title, og_description, twitter_title, twitter_description,
              canonical_path, updated_at)
           VALUES ('myth', $1, $2, $3, $4, $2, $3, $2, $3, $5, NOW())
           ON CONFLICT (page_type, slug) DO UPDATE SET
             meta_title = EXCLUDED.meta_title,
             meta_description = EXCLUDED.meta_description,
             meta_keywords = EXCLUDED.meta_keywords,
             og_title = EXCLUDED.og_title,
             og_description = EXCLUDED.og_description,
             twitter_title = EXCLUDED.twitter_title,
             twitter_description = EXCLUDED.twitter_description,
             canonical_path = EXCLUDED.canonical_path,
             updated_at = NOW()`,
          [
            row.slug,
            record.seo_title,
            record.seo_description,
            (record.focus_keywords || []).join(", "),
            `/mitos/${row.slug}`,
          ],
        );
      }
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    }
    const after = await loadDbMyths(client, community.id);
    const check = plan.map(({ row, record }) => ({ slug: row.slug, ok: diffText(after.find((r) => r.id === row.id), record).length === 0 }));
    console.table(check);
    if (check.some((c) => !c.ok)) throw new Error("La verificación posterior a la escritura no coincide.");
    console.log(`Aplicado. Respaldo: ${backup}\nSiguiente: node scripts/editorial/enriquecimiento/revalidar.mjs --comunidad=${communitySlug} --slugs=${plan.map(({ row }) => row.slug).join(",")}`);
  }
} finally {
  await client.end();
}
