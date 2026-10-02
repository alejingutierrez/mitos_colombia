/**
 * Preflight de una comunidad: respalda lo publicado y mide el estado inicial.
 *
 *   node scripts/editorial/enriquecimiento/exportar.mjs --comunidad=wayuu [--env=.env] [--json]
 *
 * Deja un respaldo recuperable en artifacts/editorial-backups/ y una tabla con,
 * por mito: palabras por campo, fuentes, si `content` está sincronizado, y si el
 * módulo del repo coincide con Neon (sync), difiere (DERIVA) o no existe.
 */
import process from "node:process";
import { parseArgs, requireCommunity, connect, resolveCommunity, loadDbMyths, loadModules, words, composeContent, allSources, saveBackup, diffSources, diffText } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const communitySlug = requireCommunity(options);
const client = await connect(options);
try {
  const community = await resolveCommunity(client, communitySlug, options);
  const rows = await loadDbMyths(client, community.id);
  const modules = await loadModules(communitySlug, options);
  const backup = await saveBackup(client, communitySlug, "preflight", rows.map((r) => r.id));
  const table = rows.map((row) => {
    const record = modules?.get(row.slug);
    let modulo = "SIN_MODULO";
    if (record) {
      const text = diffText(row, record);
      const src = diffSources(row, record);
      const drift = [...text, src.keyChanged ? "keySources" : null, src.sourcesChanged ? "sources" : null].filter(Boolean);
      modulo = drift.length ? `DERIVA:${drift.join(",")}` : "sync";
    }
    const editorialSync = ["mito", "historia", "versiones", "leccion", "similitudes", "content"].every((f) => row[f] === row[`e_${f}`]);
    return {
      slug: row.slug,
      mito: words(row.mito),
      hist: words(row.historia),
      vers: words(row.versiones),
      lecc: words(row.leccion),
      simil: words(row.similitudes),
      content_ok: row.content === composeContent(row),
      tablas_ok: editorialSync,
      clave: row.keySources.length,
      fuentes: row.sources.length,
      total: allSources(row).length,
      modulo,
    };
  });
  if (options.json) console.log(JSON.stringify({ community, backup, myths: table }, null, 2));
  else {
    console.log(`Comunidad: ${community.name} (${community.slug}, id ${community.id}) · ${rows.length} mitos · respaldo: ${backup}`);
    console.log(`Módulos: ${modules ? `${modules.size} (editorial/${options.modulos || communitySlug}${options.modulos ? "" : " o su primer tramo"})` : "ninguno (la comunidad aún no tiene módulos en el repo)"}`);
    console.table(table);
    const drift = table.filter((t) => t.modulo.startsWith("DERIVA")).length;
    const low = table.filter((t) => t.total < 5).length;
    console.log(`Deriva módulo↔Neon: ${drift} · mitos con <5 fuentes: ${low} · content desincronizado: ${table.filter((t) => !t.content_ok).length} · tablas desincronizadas: ${table.filter((t) => !t.tablas_ok).length}`);
  }
} finally {
  await client.end();
}
