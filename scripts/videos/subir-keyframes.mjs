// Sube los recortes 9:16 de un video a las URLs presignadas que devuelve
// `media_upload` del MCP de Higgsfield, y deja el mapa keyframe → media_id.
//
// POR QUÉ EXISTE: el bucle de subida se hacía a mano en zsh y el error se repitió
// DOS VECES (c18 del video 1, y los 19 keyframes del video 2 desplazados un puesto).
// La causa es que `media_upload` no devuelve `filename` —el orden de `uploads[]` es
// el de `files[]` y nada más— y en zsh los arrays son 1-indexados, así que un
// `FILES[0]` vacío corre todo el mapeo. Aquí el emparejamiento lo hace node por
// índice explícito, se verifica que TODOS devuelvan HTTP 200 y se aborta si alguno
// falla: no hay forma de confirmar un lote corrido.
//
// Uso:
//   1) llamar media_upload con los nombres EN ORDEN y guardar la respuesta:
//        content/videos/<dir>/kf-9x16/uploads.json
//   2) node scripts/videos/subir-keyframes.mjs --uploads <uploads.json> --dir <kf-9x16>
//   3) llamar media_confirm con los media_ids que imprime (todos de una vez)
//
// El archivo de entrada es la respuesta cruda del MCP: { "uploads": [ {upload_url,
// media_id, content_type}, … ] }. Los archivos se toman de <dir> ordenados por
// nombre, que es el mismo orden con el que se pidieron las URLs.

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
const flag = (n, d = null) => { const i = args.indexOf(n); return i === -1 || !args[i + 1] || args[i + 1].startsWith("--") ? d : args[i + 1]; };

const uploadsPath = flag("--uploads");
const dir = flag("--dir");
if (!uploadsPath || !dir) {
  console.error("Uso: --uploads <uploads.json> --dir <carpeta de recortes 9:16>");
  process.exit(1);
}

const { uploads } = JSON.parse(fs.readFileSync(uploadsPath, "utf8"));
const files = fs.readdirSync(dir).filter((f) => /\.(jpg|jpeg|png)$/i.test(f)).sort();

if (files.length !== uploads.length) {
  console.error(`✗ ${files.length} archivos en ${dir} pero ${uploads.length} URLs presignadas. No subo nada: el mapeo quedaría corrido.`);
  process.exit(1);
}

console.log(`[subir] ${files.length} keyframes → ${uploads.length} URLs, emparejados por índice`);

const mapa = {};
let fallos = 0;

// Índice explícito y base 0: aquí es donde se rompía en zsh.
for (let i = 0; i < files.length; i++) {
  const file = path.join(dir, files[i]);
  const u = uploads[i];
  const body = fs.readFileSync(file);
  const res = await fetch(u.upload_url, {
    method: "PUT",
    headers: { "Content-Type": u.content_type || "image/jpeg" },
    body,
  });
  const ok = res.status === 200;
  if (!ok) fallos += 1;
  mapa[files[i]] = { media_id: u.media_id, status: res.status, bytes: body.length };
  console.log(`  ${ok ? "✓" : "✗"} [${String(i).padStart(2, "0")}] ${files[i]} → ${u.media_id} (HTTP ${res.status})`);
}

if (fallos) {
  console.error(`\n✗ ${fallos} subida(s) fallida(s). NO llames a media_confirm: confirmarías un lote incompleto.`);
  process.exit(1);
}

const outPath = path.join(dir, "higgsfield-media.json");
fs.writeFileSync(outPath, JSON.stringify({
  nota: "media_id por keyframe. Expiran; si un lote falla por media inexistente, volver a subir. El emparejamiento lo hizo subir-keyframes.mjs por índice explícito, no un bucle de shell.",
  subido: new Date().toISOString(),
  mapa,
}, null, 2) + "\n");

console.log(`\n[subir] ${files.length}/${files.length} en HTTP 200 → ${outPath}`);
console.log(`[subir] media_ids para media_confirm (type "image"):`);
console.log(JSON.stringify(Object.values(mapa).map((m) => m.media_id)));
