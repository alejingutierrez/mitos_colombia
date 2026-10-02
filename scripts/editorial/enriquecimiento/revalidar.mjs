/**
 * Purga la caché de producción de las páginas de mitos, sin desplegar.
 *
 *   node scripts/editorial/enriquecimiento/revalidar.mjs --comunidad=wayuu [--slugs=a,b] [--env=.env]
 *
 * Las páginas usan ISR (revalidate = 3600) más `unstable_cache`: sin esta purga, un
 * cambio en Neon tarda hasta una hora en verse, y `vercel --prod` no es la
 * solución (sube el disco local y puede revertir lo que Git ya publicó).
 * Usa POST /api/admin/revalidate con ADMIN_USERNAME/ADMIN_PASSWORD del .env.
 */
import process from "node:process";
import { parseArgs, requireCommunity, connect, resolveCommunity, loadDbMyths, revalidate, siteUrl, loadEnv } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const communitySlug = requireCommunity(options);
loadEnv(options); // con --slugs no se abre conexión, pero la purga necesita ADMIN_* y NEXT_PUBLIC_SITE_URL
let slugs;
if (options.slugs) slugs = String(options.slugs).split(",").map((s) => s.trim()).filter(Boolean);
else {
  const client = await connect(options);
  try {
    const community = await resolveCommunity(client, communitySlug, options);
    slugs = (await loadDbMyths(client, community.id)).map((r) => r.slug);
  } finally {
    await client.end();
  }
}
const results = await revalidate(slugs);
console.log(`Purgadas ${slugs.length} rutas en ${siteUrl()}:`);
for (const r of results) console.log(JSON.stringify(r));
