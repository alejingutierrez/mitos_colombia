/**
 * Verificación: módulo ↔ Neon ↔ página pública.
 *
 *   node scripts/editorial/enriquecimiento/verificar.mjs --comunidad=wayuu [--vivo] [--slugs=a,b] [--env=.env]
 *
 * Compara texto y fuentes entre el módulo y Neon (ignora imágenes y taxonomía, que
 * tienen sus propios verificadores), revisa los invariantes de lo publicado y, con
 * --vivo, descarga cada página pública y comprueba que la lección y todas las URLs
 * de fuentes aparezcan en el HTML servido (es decir, que la caché ya se purgó).
 * Sale con código 1 si algo no coincide.
 */
import process from "node:process";
import { parseArgs, requireCommunity, connect, resolveCommunity, loadDbMyths, loadModules, validateRecord, diffText, diffSources, allSources, siteUrl, mapLimit, USER_AGENT, composeContent } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const communitySlug = requireCommunity(options);
const only = options.slugs ? new Set(String(options.slugs).split(",").map((s) => s.trim())) : null;
const client = await connect(options);
const failures = [];
try {
  const community = await resolveCommunity(client, communitySlug, options);
  const rows = (await loadDbMyths(client, community.id)).filter((r) => !only || only.has(r.slug));
  const modules = await loadModules(communitySlug, options);
  const table = [];
  for (const row of rows) {
    const record = modules?.get(row.slug);
    // `relatoCorto` es una declaración editorial que vive en el módulo, no una
    // columna de Neon: se la pasa al validador para que lo publicado se juzgue
    // con la misma regla con la que se escribió.
    const published = validateRecord({
      ...row,
      keySources: row.keySources,
      sources: row.sources,
      ...(record?.relatoCorto ? { relatoCorto: record.relatoCorto } : {}),
    });
    const twoTables = ["mito", "historia", "versiones", "leccion", "similitudes", "content"].every((f) => row[f] === row[`e_${f}`]);
    let modulo = "SIN_MODULO";
    if (record) {
      const text = diffText(row, record);
      const src = diffSources(row, record);
      const drift = [...text, src.keyChanged ? "keySources" : null, src.sourcesChanged ? "sources" : null].filter(Boolean);
      modulo = drift.length ? `DERIVA:${drift.join(",")}` : "sync";
      if (drift.length) failures.push(`${row.slug}: el módulo difiere de Neon en ${drift.join(", ")}`);
    }
    if (published.length) failures.push(`${row.slug}: publicado con errores → ${published.join("; ")}`);
    if (!twoTables) failures.push(`${row.slug}: myths y editorial_myths no coinciden en texto`);
    if (row.content !== composeContent(row)) failures.push(`${row.slug}: content no es la concatenación de los cinco campos`);
    table.push({ slug: row.slug, fuentes: allSources(row).length, publicado_ok: published.length === 0, tablas_ok: twoTables, modulo });
  }
  console.table(table);

  if (options.vivo) {
    const live = await mapLimit(rows, 4, async (row) => {
      const url = `${siteUrl()}/mitos/${row.slug}`;
      try {
        const response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
        const html = await response.text();
        const missing = allSources(row).map((s) => { try { return new URL(s.url).toString(); } catch { return s.url; } }).filter((u) => !html.includes(u) && !html.includes(u.replace(/&/g, "&amp;")));
        const leccionOk = html.includes(String(row.leccion).trim().slice(0, 60));
        const prerender = response.headers.get("x-nextjs-prerender") || response.headers.get("x-vercel-cache") || "";
        return { slug: row.slug, status: response.status, fuentes_visibles: allSources(row).length - missing.length, faltan: missing.length, leccion_ok: leccionOk, cache: prerender, missing };
      } catch (error) {
        return { slug: row.slug, status: null, error: String(error.message).slice(0, 80), missing: [] };
      }
    });
    console.table(live.map(({ missing, ...rest }) => rest));
    for (const l of live) {
      if (l.status !== 200) failures.push(`${l.slug}: la página pública respondió ${l.status ?? l.error}`);
      if (l.faltan) failures.push(`${l.slug}: ${l.faltan} URL(s) de fuentes no aparecen en la página pública (¿caché sin purgar?): ${l.missing.slice(0, 3).join(" , ")}`);
      if (l.leccion_ok === false) failures.push(`${l.slug}: la lección publicada no aparece en la página pública`);
    }
  }
} finally {
  await client.end();
}
if (failures.length) {
  console.log(`\nFALLOS (${failures.length}):`);
  for (const f of failures) console.log(`  ✗ ${f}`);
  process.exitCode = 1;
} else console.log("\nTodo coincide.");
