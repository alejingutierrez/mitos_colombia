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
  const plan = [];
  const problems = [];
  for (const row of rows) {
    if (only && !only.has(row.slug)) continue;
    const record = modules.get(row.slug);
    if (!record) continue;
    const errors = validateRecord(record, { texto: true, fuentes: false });
    if (errors.length) problems.push(`${row.slug}: ${errors.join("; ")}`);
    const changed = diffText(row, record);
    if (changed.length) plan.push({ row, record, changed });
  }
  console.log(`Fase A · ${communitySlug} · ${rows.length} publicados · ${plan.length} con cambios de texto`);
  console.table(plan.map(({ row, record, changed }) => ({ slug: row.slug, campos: changed.join(","), mito: `${words(row.mito)}→${words(record.mito)}`, leccion: `${words(row.leccion)}→${words(record.leccion)}`, tiene_expediente: Boolean(row.editorial_id) })));
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
