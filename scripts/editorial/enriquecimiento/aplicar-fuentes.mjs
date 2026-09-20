/**
 * Fase B · escribe en Neon las fuentes que declaran los módulos del repo.
 *
 *   node scripts/editorial/enriquecimiento/aplicar-fuentes.mjs --comunidad=wayuu [--slugs=a,b] [--env=.env]
 *   node scripts/editorial/enriquecimiento/aplicar-fuentes.mjs --comunidad=wayuu --apply --confirm=wayuu-fuentes
 *
 * El plan es la diferencia módulo↔Neon: no hay JSON aparte que pueda quedar
 * desactualizado. Sólo toca `editorial_myths.sources_json` y `key_sources_json`.
 * Dry-run por defecto; con --apply respalda y escribe en una transacción.
 * Se niega si el texto del módulo no coincide con Neon (el módulo dejaría de ser
 * la verdad): primero aplicar-texto.mjs o reconciliar el módulo.
 */
import process from "node:process";
import { parseArgs, requireCommunity, connect, resolveCommunity, loadDbMyths, loadModules, validateRecord, diffSources, diffText, saveBackup, allSources } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const communitySlug = requireCommunity(options);
const only = options.slugs ? new Set(String(options.slugs).split(",").map((s) => s.trim())) : null;
const confirmation = `${communitySlug}-fuentes`;
const modules = await loadModules(communitySlug, options);
if (!modules) throw new Error(`La comunidad ${communitySlug} no tiene módulos en editorial/: Fase B empieza por escribirlos.`);

const client = await connect(options);
try {
  const community = await resolveCommunity(client, communitySlug, options);
  const rows = await loadDbMyths(client, community.id);
  const plan = [];
  const problems = [];
  const porCrear = [];
  for (const row of rows) {
    if (only && !only.has(row.slug)) continue;
    const record = modules.get(row.slug);
    if (!record) {
      problems.push(`${row.slug}: publicado en Neon pero sin módulo en el repo`);
      continue;
    }
    // Las fichas que nunca entraron en la estructura editorial no tienen fila
    // en `editorial_myths`: el dossier no existe todavía. Mandaba a
    // `apply-editorial-myth.mjs`, que crea el expediente entero y de paso
    // reescribe `image_url` desde `media.mjs` —con lo que revierte la portada
    // de cualquier mito que ya pasó por el pipeline de imágenes—. Aquí se crea
    // la fila copiando de `myths` lo que ya está publicado y sin tocar una sola
    // columna de imagen.
    if (!row.editorial_id) {
      porCrear.push(row);
    }
    const errors = validateRecord(record, { texto: false, fuentes: true });
    if (errors.length) problems.push(`${row.slug}: ${errors.join("; ")}`);
    const text = diffText(row, record);
    if (text.length && !options["ignorar-texto"]) problems.push(`${row.slug}: el texto del módulo difiere de Neon en ${text.join(", ")} (aplicar-texto.mjs primero, o --ignorar-texto si la deriva es consciente)`);
    const diff = diffSources(row, record);
    if (diff.keyChanged || diff.sourcesChanged) plan.push({ row, record, diff });
  }
  for (const slug of modules.keys()) if (!rows.some((r) => r.slug === slug) && (!only || only.has(slug))) problems.push(`${slug}: módulo sin mito publicado en Neon para ${communitySlug}`);

  console.log(`Fase B · ${communitySlug} · ${rows.length} publicados · ${modules.size} módulos · ${plan.length} con cambios de fuentes${porCrear.length ? ` · ${porCrear.length} expediente(s) por crear` : ""}`);
  for (const row of porCrear) console.log(`  ✚ ${row.slug}: se creará su fila en editorial_myths copiando lo publicado; ninguna columna de imagen se toca`);
  console.table(plan.map(({ row, diff }) => ({ slug: row.slug, antes: diff.before, despues: diff.after, agregadas: diff.added.length, quitadas: diff.removed.length, reescritas: diff.reworded.length, clave: diff.keyChanged })));
  for (const { row, diff } of plan) {
    for (const u of diff.added) console.log(`  + ${row.slug}: ${u}`);
    for (const u of diff.removed) console.log(`  − ${row.slug}: ${u}`);
  }
  if (problems.length) {
    console.log(`\nPROBLEMAS (${problems.length}), no se aplica nada:`);
    for (const p of problems) console.log(`  ✗ ${p}`);
    process.exitCode = 1;
  } else if (!plan.length && !porCrear.length) console.log("Neon ya coincide con los módulos: nada que aplicar.");
  else if (!options.apply) console.log(`\nDry-run. Para escribir: --apply --confirm=${confirmation}`);
  else if (options.confirm !== confirmation) throw new Error(`Para aplicar usa --confirm=${confirmation}.`);
  else {
    const backup = await saveBackup(client, communitySlug, "fuentes", plan.map(({ row }) => row.id));
    await client.query("BEGIN");
    try {
      for (const row of porCrear) {
        const record = modules.get(row.slug);
        await client.query(
          `INSERT INTO editorial_myths
             (source_myth_id, title, slug, region_id, community_id, category_path, tags_raw,
              content, excerpt, seo_title, seo_description, focus_keyword, focus_keywords_raw,
              image_prompt, latitude, longitude, sources_json, key_sources_json, research_notes,
              mito, historia, versiones, leccion, similitudes)
           SELECT m.id, m.title, m.slug, m.region_id, m.community_id, $2, $3,
                  m.content, m.excerpt, m.seo_title, m.seo_description, m.focus_keyword, $4,
                  $5, m.latitude, m.longitude, $6, $7, $8,
                  m.mito, m.historia, m.versiones, m.leccion, m.similitudes
             FROM myths m WHERE m.id = $1`,
          [
            row.id,
            record.category_path,
            (record.tags || []).join(", "),
            (record.focus_keywords || []).join(", "),
            record.image_prompt || record.image_prompt_horizontal || "",
            JSON.stringify(record.sources),
            JSON.stringify(record.keySources),
            record.researchNotes || null,
          ],
        );
      }
      for (const { row, record } of plan) {
        await client.query("UPDATE editorial_myths SET sources_json = $2, key_sources_json = $3, updated_at = NOW() WHERE id = $1", [row.editorial_id, JSON.stringify(record.sources), JSON.stringify(record.keySources)]);
      }
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    }
    const after = await loadDbMyths(client, community.id);
    const check = plan.map(({ row, record }) => {
      const fresh = after.find((r) => r.id === row.id);
      return { slug: row.slug, esperado: allSources(record).length, neon: allSources(fresh).length, ok: JSON.stringify(allSources(fresh)) === JSON.stringify(allSources(record)) };
    });
    console.table(check);
    if (check.some((c) => !c.ok)) throw new Error("La verificación posterior a la escritura no coincide.");
    console.log(`Aplicado. Respaldo: ${backup}\nSiguiente: node scripts/editorial/enriquecimiento/revalidar.mjs --comunidad=${communitySlug} --slugs=${plan.map(({ row }) => row.slug).join(",")}`);
  }
} finally {
  await client.end();
}
