// ¿Qué keyframes dejaron de corresponder a su guion?
// Desde la doctrina v3 (pares A→B) un guion de N bloques necesita N*4 imágenes:
// 2 escenas por bloque y 2 imágenes por escena (fotograma inicial y final). Si
// el guion se reescribió o los cuadros son del plan viejo, el conteo no cuadra
// y el mito sale como REHACER.
//
//   node scripts/videos/auditar-keyframes-vs-guion.mjs [comunidad]
import fs from "node:fs";
import path from "node:path";

const com = process.argv[2] || "muiscas";
const dirCom = { muiscas: "muiscas", nasa: "nasa-paeces", "ette-ennaka": "ette-ennaka", wayuu: "wayuu" }[com] || com;
// Mitos con video ya producido: su guion no se vuelve a montar, no se tocan.
const PRODUCIDOS = new Set(
  com === "muiscas" ? ["bachue", "bochica", "el-dorado", "la-aparicion-del-hombre"] : []
);

const actas = fs.readdirSync(`docs/videos/${dirCom}/actas`).filter((f) => f.startsWith("acta-"));
const filas = [];
for (const f of actas.sort()) {
  const mito = f.slice(5, -5);
  const guiones = fs
    .readdirSync(`docs/videos/${dirCom}/mvp-guiones`)
    .filter((g) => new RegExp(`^guion-${mito}-v\\d+\\.json$`).test(g))
    .sort((a, b) => Number(a.match(/v(\d+)/)[1]) - Number(b.match(/v(\d+)/)[1]));
  if (!guiones.length) { filas.push({ mito, N: 0, necesita: 0, tiene: 0, estado: "SIN GUION" }); continue; }
  const g = JSON.parse(fs.readFileSync(`docs/videos/${dirCom}/mvp-guiones/${guiones.at(-1)}`, "utf8"));
  const necesita = g.lines.length * 4;

  const kdir = `content/videos/${dirCom}/videos/${mito}/keyframes`;
  const tags = new Set();
  if (fs.existsSync(kdir)) {
    for (const x of fs.readdirSync(kdir)) {
      if (x.endsWith(".json")) continue;
      tags.add(path.basename(x, path.extname(x)).replace(/\.crop-9x16$/, ""));
    }
  }
  let reusadas = 0;
  const bj = `content/videos/${dirCom}/videos/${mito}/bloques.json`;
  if (fs.existsSync(bj)) {
    try { reusadas = (JSON.parse(fs.readFileSync(bj, "utf8")).reusadas || []).length; } catch {}
  }
  const tiene = tags.size + reusadas;
  const estado = PRODUCIDOS.has(mito) ? "producido" : tiene === necesita ? "al día" : "REHACER";
  filas.push({ mito, N: g.lines.length, necesita, tiene, estado });
}

const w = Math.max(...filas.map((f) => f.mito.length));
for (const f of filas) {
  const marca = { "al día": "✔", producido: "·", REHACER: "✘", "SIN GUION": "!" }[f.estado];
  console.log(`${marca} ${f.mito.padEnd(w)}  N=${String(f.N).padStart(2)}  necesita ${String(f.necesita).padStart(2)}  tiene ${String(f.tiene).padStart(2)}  ${f.estado}`);
}
const cuenta = (e) => filas.filter((f) => f.estado === e).length;
console.log(`\n${filas.length} mitos · producidos ${cuenta("producido")} · al día ${cuenta("al día")} · a rehacer ${cuenta("REHACER")}`);
