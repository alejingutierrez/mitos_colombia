// Laboratorio de stop-motion por interpolación de fotogramas (gpt-image-2.5).
//
// Una sola puerta a la API de imágenes para todo el carril: genera (o edita con
// referencias), guarda el archivo y anota en un libro mayor lo que costó de
// verdad — tokens reales de la respuesta, no estimaciones. Sin ese libro no se
// puede decidir si la técnica es viable frente a los 45 cr/clip de Seedance.
//
//   node scripts/videos/stopmotion/img.mjs --out f.jpg --prompt "..." \
//     [--ref a.jpg --ref b.jpg] [--model gpt-image-2.5-sunburst] \
//     [--size 1088x1920] [--quality high] [--tag prueba1]

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import dotenv from "dotenv";
import OpenAI, { toFile } from "openai";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const rootDir = path.resolve(__dirname, "../../..");

// El worktree puede no tener .env (gitignored): caer al del repo principal.
for (const envPath of [path.join(rootDir, ".env"), path.resolve(rootDir, "../../..", ".env")]) {
  dotenv.config({ path: envPath, quiet: true });
  if (process.env.OPENAI_API_KEY) break;
}

// Tarifas publicadas de gpt-image-2.5 (USD por millón de tokens). Las de
// gpt-image-2 son la mitad. Si cambian, aquí es donde se corrigen.
export const PRECIOS = {
  "gpt-image-2.5-sunburst": { text_in: 5, image_in: 8, image_out: 30 },
  "gpt-image-2.5-flare": { text_in: 5, image_in: 8, image_out: 30 },
  "gpt-image-2": { text_in: 2.5, image_in: 4, image_out: 15 },
};

export const LEDGER = path.join(rootDir, "content/videos/muiscas/lab-stopmotion/ledger.jsonl");

export function costeDe(model, usage) {
  const p = PRECIOS[model] || PRECIOS["gpt-image-2.5-sunburst"];
  const d = usage?.input_tokens_details || {};
  const textIn = d.text_tokens ?? usage?.input_tokens ?? 0;
  const imgIn = d.image_tokens ?? 0;
  const out = usage?.output_tokens ?? 0;
  return (textIn * p.text_in + imgIn * p.image_in + out * p.image_out) / 1e6;
}

export async function genImage({
  prompt,
  refs = [],
  outPath,
  model = process.env.LAB_IMAGE_MODEL || "gpt-image-2.5-sunburst",
  size = "1088x1920",
  quality = "high",
  moderation = "low",
  background = null,
  formato = "jpeg",
  mask = null, // PNG RGBA del tamaño de la imagen: alfa 0 = zona editable, el resto se conserva píxel a píxel
  tag = "",
  client,
}) {
  const openai = client || new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 15 * 60 * 1000 });
  const t0 = Date.now();
  let res;
  let headers;
  if (refs.length) {
    const images = await Promise.all(
      refs.map(async (p) => toFile(await fs.readFile(p), path.basename(p), { type: "image/jpeg" }))
    );
    const call = openai.images.edit({
      model, image: images, prompt, n: 1, size, quality, output_format: formato,
      ...(background ? { background } : {}),
      ...(mask ? { mask: await toFile(await fs.readFile(mask), "mask.png", { type: "image/png" }) } : {}),
    });
    ({ data: res, response: headers } = await call.withResponse().catch(async (e) => {
      // input_fidelity no existe en 2.5: reintentar sin él antes de rendirse.
      if (!/input_fidelity|unknown|unsupported|invalid/i.test(String(e?.message))) throw e;
      return openai.images
        .edit({ model, image: images, prompt, n: 1, size, quality })
        .withResponse();
    }));
  } else {
    ({ data: res, response: headers } = await openai.images
      .generate({ model, prompt, n: 1, size, quality, moderation, output_format: formato, ...(background ? { background } : {}) })
      .withResponse());
  }
  const ms = Date.now() - t0;
  const buffer = Buffer.from(res.data[0].b64_json, "base64");
  if (outPath) {
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, buffer);
  }
  const usd = costeDe(model, res.usage);
  const fila = {
    ts: new Date().toISOString(),
    tag,
    out: outPath ? path.relative(rootDir, outPath) : null,
    model, size, quality,
    refs: refs.map((r) => path.basename(r)),
    mask: mask ? path.basename(mask) : null,
    ms,
    usage: res.usage,
    usd: Number(usd.toFixed(4)),
  };
  await fs.mkdir(path.dirname(LEDGER), { recursive: true });
  await fs.appendFile(LEDGER, JSON.stringify(fila) + "\n");
  return { buffer, usage: res.usage, usd, ms, headers, fila };
}

// Cabeceras de límite: cuántas imágenes por minuto admite esta cuenta.
export function limites(headers) {
  if (!headers?.headers) return {};
  const h = headers.headers;
  const out = {};
  for (const [k, v] of h.entries?.() || []) if (k.startsWith("x-ratelimit")) out[k] = v;
  return out;
}

const esCLI = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (esCLI) {
  const args = process.argv.slice(2);
  const flag = (n, d = null) => {
    const i = args.indexOf(n);
    return i === -1 ? d : args[i + 1];
  };
  const todos = (n) => args.reduce((acc, a, i) => (a === n ? [...acc, args[i + 1]] : acc), []);
  const promptFile = flag("--prompt-file");
  const prompt = promptFile ? await fs.readFile(promptFile, "utf8") : flag("--prompt");
  if (!prompt) throw new Error("--prompt o --prompt-file es requerido");
  const r = await genImage({
    prompt,
    refs: todos("--ref"),
    outPath: flag("--out") ? path.resolve(flag("--out")) : null,
    model: flag("--model", "gpt-image-2.5-sunburst"),
    size: flag("--size", "1088x1920"),
    quality: flag("--quality", "high"),
    ...(args.includes("--recorte") ? { background: "transparent", formato: "png" } : {}),
    tag: flag("--tag", "cli"),
  });
  console.log(JSON.stringify({ ...r.fila, limites: limites(r.headers) }, null, 1));
}
