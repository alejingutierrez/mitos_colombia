#!/usr/bin/env node
/**
 * Emite los prompts completos de un mito (o de una lista de mitos) listos para
 * `generate_image_batch` de Higgsfield.
 *
 * El plan de la comunidad guarda sólo lo que un humano decide —la escena, el
 * esquema de composición, qué referencias reusa—; todo lo demás (técnica,
 * época, territorio, reglas del acto) lo pone `art-direction.mjs`. Así una
 * corrección de doctrina se escribe una vez y llega a los 596 mitos, en vez de
 * quedar copiada dentro de cada prompt.
 *
 *   node scripts/mitos/emit-prompts.mjs --comunidad muiscas --slug chiminigagua
 *   node scripts/mitos/emit-prompts.mjs --comunidad muiscas --slug a,b --formato batch
 */
import { readFileSync } from "node:fs";
import { buildPrompt, ACTOS } from "./art-direction.mjs";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith("--")) acc.push([a.slice(2), arr[i + 1]?.startsWith("--") ? true : arr[i + 1]]);
    return acc;
  }, [])
);

const comunidad = args.comunidad || "muiscas";
const plan = JSON.parse(readFileSync(`content/mitos-visuales/${comunidad}.json`, "utf8"));
const ids = JSON.parse(readFileSync(`${plan.biblia}/higgsfield-ids.json`, "utf8"));

const slugs = String(args.slug || Object.keys(plan.mitos).join(",")).split(",").filter(Boolean);
const RESOLUTION = args.resolution || "2k";
const QUALITY = args.quality || "high";

const requests = [];
let index = Number(args.desde || 0);

for (const slug of slugs) {
  const mito = plan.mitos[slug];
  if (!mito) throw new Error(`mito no está en el plan: ${slug}`);
  for (const [acto, escena] of Object.entries(mito.escenas)) {
    const medias = (escena.refs || []).map((name) => {
      const value = ids.medias[name];
      // Una ref rota degradaba en silencio y salía un tríptico sin continuidad.
      // Mejor romper aquí que descubrirlo cuando la imagen ya está pagada.
      if (!value) throw new Error(`ref sin id en higgsfield-ids.json: ${name} (mito ${slug}/${acto})`);
      return { role: "image", value };
    });
    requests.push({
      index: index++,
      _slug: slug,
      _acto: acto,
      _composicion: escena.composicion,
      _refs: escena.refs || [],
      params: {
        model: "gpt_image_2",
        resolution: RESOLUTION,
        quality: QUALITY,
        aspect_ratio: ACTOS[acto].aspect_ratio,
        ...(medias.length ? { medias } : {}),
        prompt: buildPrompt({
          comunidad: plan.comunidad,
          region: plan.region,
          acto,
          composicion: escena.composicion,
          escena: escena.escena,
          paleta: mito.paleta,
        }),
      },
    });
  }
}

if (args.formato === "paquete") {
  // El ilimitado de Higgsfield sólo aplica en higgsfield.ai y su uso automatizado
  // está prohibido por sus reglas de fair use, así que el humano genera y el
  // repositorio le entrega el trabajo masticado: un archivo por escena, listo
  // para pegar, con la lista de referencias que hay que adjuntar a mano.
  const { mkdirSync, writeFileSync } = await import("node:fs");
  const porMito = {};
  for (const r of requests) (porMito[r._slug] ||= []).push(r);

  for (const [slug, escenas] of Object.entries(porMito)) {
    const dir = `content/mitos-visuales/_paquetes/${comunidad}/${slug}`;
    mkdirSync(dir, { recursive: true });
    const mito = plan.mitos[slug];
    for (const r of escenas) {
      writeFileSync(`${dir}/${r._acto}.txt`, r.params.prompt + "\n");
    }
    const orden = ["entrada", "acto", "huella"];
    writeFileSync(`${dir}/LEEME.md`, [
      `# ${mito.titulo} · ${slug}`,
      ``,
      `**Modelo:** GPT Image 2 · **Resolución:** 2K · **Calidad:** high · **Unlimited ON**`,
      ``,
      `**Arco:** ${mito.arco}`,
      mito.deslinde_nota ? `\n**Ojo con el deslinde:** ${mito.deslinde_nota}` : "",
      ``,
      `## Las tres escenas`,
      ``,
      ...orden.flatMap((acto) => {
        const r = escenas.find((e) => e._acto === acto);
        if (!r) return [];
        const refs = r._refs.length
          ? r._refs.map((n) => `\`content/videos/${comunidad}/biblia/${n}.jpg\``).join(" · ")
          : "_ninguna — esta escena se genera sólo con texto_";
        return [
          `### ${orden.indexOf(acto) + 1}. ${acto} · ${r.params.aspect_ratio} · composición «${r._composicion}»`,
          ``,
          `- **Prompt:** \`${acto}.txt\``,
          `- **Adjuntar como referencia:** ${refs}`,
          ``,
        ];
      }),
      `## Cuando termines`,
      ``,
      `Descarga las tres y déjalas en \`content/mitos-visuales/_inbox/${slug}/\` con el nombre que sea.`,
      `Yo las identifico por proporción, las renombro, recorto el 9:16 para video y escribo el manifiesto:`,
      ``,
      "```bash",
      `npm run mitos:ingest -- --comunidad ${comunidad} --slug ${slug}`,
      "```",
      ``,
    ].join("\n"));
    console.log(`  paquete → ${dir}  (${escenas.length} escenas)`);
  }
} else if (args.formato === "resumen") {
  for (const r of requests) {
    console.log(`${String(r.index).padStart(3)} · ${r._slug}/${r._acto} · ${r._composicion} · ${r.params.aspect_ratio} · refs:[${r._refs.join(",")}] · ${r.params.prompt.length} chars`);
  }
} else {
  console.log(JSON.stringify(requests.map(({ index, params }) => ({ index, params })), null, 1));
}
