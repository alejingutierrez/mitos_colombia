#!/usr/bin/env node
/**
 * Convierte los datos del tablero en la página publicable.
 *
 * Es una interfaz para operar, no un documento para leer de corrido: primero
 * el resumen, después el detalle, y el estado codificado en forma —no sólo en
 * número— para que se vea de un vistazo dónde está frenada la comunidad.
 */
import { readFileSync, writeFileSync } from "node:fs";

const datos = JSON.parse(readFileSync(process.argv[2], "utf8"));
const salida = process.argv[3];
const { mitos, heredadas, totales } = datos;

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pct = (h, t) => (t === 0 ? 100 : Math.round((h / t) * 100));

const celda = (p, m) => {
  const [h, t] = m.pasos[p.k];
  if (t === 0) return `<td class="paso vacio"><span class="na">—</span></td>`;
  const estado = h >= t ? "listo" : h > 0 ? "curso" : "pend";
  return `<td class="paso ${estado}">
      <span class="barra"><i style="--f:${pct(h, t)}%"></i></span>
      <span class="cifra">${h}<span class="de">/${t}</span></span>
    </td>`;
};

const KIND_LABEL = { personaje: "Personaje", paisaje: "Paisaje", prop: "Prop" };
const bloque = (m) => {
  if (!m.piezas.length) return "";
  const trip = m.piezas.filter((p) => p.tipo === "triptico");
  const fich = m.piezas.filter((p) => p.tipo === "ficha");
  const kfs = m.piezas.filter((p) => p.tipo === "kf");
  const grupo = (titulo, arr, clase) => arr.length ? `
      <div class="grupo">
        <h4>${titulo}</h4>
        <div class="tira ${clase}">${arr.map((p) => `
          <figure><img src="${p.src}" alt="${esc(p.tag)}" loading="lazy"><figcaption>${esc(p.tag)}${p.kind ? ` · ${KIND_LABEL[p.kind]}` : ""}</figcaption></figure>`).join("")}
        </div>
      </div>` : "";
  return `
    <section class="mito" id="${esc(m.slug)}">
      <header class="mito-cab">
        <h3>${esc(m.titulo)}</h3>
        <p class="arco">${esc(m.arco || "")}</p>
        ${m.deslinde_nota ? `<p class="deslinde"><span>Deslinde</span> ${esc(m.deslinde_nota)}</p>` : ""}
      </header>
      ${grupo("Biblia", fich, "fichas")}
      ${grupo("Tríptico", trip, "trip")}
      ${grupo(`Escenas de video · ${kfs.length}`, kfs, "kf")}
    </section>`;
};

const totalHecho = totales.reduce((s, t) => s + t.hecho, 0);
const totalTotal = totales.reduce((s, t) => s + t.total, 0);
const completos = mitos.filter((m) => m.completo).length;

const html = `<title>Taller Muisca</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap">
<style>
:root{
  /* La paleta sale de la propia dirección de arte: crema de algodón crudo,
     verde de páramo, azul gris de laguna, ocre mineral, niebla. */
  --papel:#EFE9DC; --superficie:#F7F3EA; --tinta:#171B18; --tinta-2:#4A534C;
  --paramo:#2E4A3B; --laguna:#77868C; --ocre:#A96C2C; --niebla:#D6CFC0;
  --listo:#2E4A3B; --curso:#A96C2C; --pend:#B9B2A3;
  --linea:#DDD5C5; --sombra:0 1px 2px rgba(23,27,24,.06),0 8px 24px -16px rgba(23,27,24,.24);
  --sans:"Inter",system-ui,-apple-system,sans-serif;
  --disp:"Manrope",var(--sans); --mono:"IBM Plex Mono",ui-monospace,monospace;
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --papel:#121613; --superficie:#1A201C; --tinta:#E8E4D8; --tinta-2:#9DA69D;
    --paramo:#7FA98C; --laguna:#8C9BA1; --ocre:#D69A55; --niebla:#2A322C;
    --listo:#7FA98C; --curso:#D69A55; --pend:#41493F;
    --linea:#2A322C; --sombra:0 1px 2px rgba(0,0,0,.4),0 8px 24px -16px rgba(0,0,0,.7);
  }
}
:root[data-theme="dark"]{
  --papel:#121613; --superficie:#1A201C; --tinta:#E8E4D8; --tinta-2:#9DA69D;
  --paramo:#7FA98C; --laguna:#8C9BA1; --ocre:#D69A55; --niebla:#2A322C;
  --listo:#7FA98C; --curso:#D69A55; --pend:#41493F;
  --linea:#2A322C; --sombra:0 1px 2px rgba(0,0,0,.4),0 8px 24px -16px rgba(0,0,0,.7);
}
*{box-sizing:border-box}
body{margin:0;background:var(--papel);color:var(--tinta);font:400 16px/1.6 var(--sans);
  -webkit-font-smoothing:antialiased}
.envoltura{max-width:1180px;margin:0 auto;padding:clamp(28px,5vw,64px) clamp(18px,4vw,40px) 96px}
h1,h2,h3,h4{font-family:var(--disp);margin:0;text-wrap:balance;letter-spacing:-.02em}
h1{font-size:clamp(30px,4.6vw,46px);font-weight:800;line-height:1.05}
.eyebrow{font:500 11px/1 var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--laguna);margin:0 0 14px}
.entradilla{max-width:62ch;color:var(--tinta-2);margin:14px 0 0;font-size:17px}

/* --- Resumen: los cinco pasos SON una secuencia, por eso van numerados --- */
.escalera{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:40px 0 8px}
.tramo{background:var(--superficie);border:1px solid var(--linea);border-radius:3px;padding:16px 16px 14px;
  box-shadow:var(--sombra);display:flex;flex-direction:column;gap:10px}
.tramo .n{font:500 11px/1 var(--mono);color:var(--laguna);letter-spacing:.1em}
.tramo h2{font-size:15px;font-weight:700}
.tramo .val{font:500 26px/1 var(--disp);font-variant-numeric:tabular-nums;letter-spacing:-.03em}
.tramo .val small{font-size:15px;color:var(--tinta-2);font-weight:500}
.riel{height:4px;background:var(--niebla);border-radius:2px;overflow:hidden}
.riel i{display:block;height:100%;width:var(--f);background:var(--paramo);border-radius:2px}

.marcador{display:flex;flex-wrap:wrap;gap:28px;margin:26px 0 44px;padding:20px 0;
  border-top:1px solid var(--linea);border-bottom:1px solid var(--linea)}
.marcador div{display:flex;flex-direction:column;gap:3px}
.marcador dt{font:500 11px/1 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--laguna)}
.marcador dd{margin:0;font:700 22px/1.2 var(--disp);font-variant-numeric:tabular-nums;letter-spacing:-.02em}
.marcador dd span{font-size:13px;font-weight:500;color:var(--tinta-2)}

/* --- La tabla: estado en forma, no sólo en número --- */
.tabla-caja{overflow-x:auto;border:1px solid var(--linea);border-radius:3px;background:var(--superficie);
  box-shadow:var(--sombra)}
table{border-collapse:collapse;width:100%;min-width:720px}
thead th{font:500 11px/1 var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--laguna);
  text-align:left;padding:14px 12px;border-bottom:1px solid var(--linea);white-space:nowrap}
thead th.num::before{content:attr(data-n) " ";color:var(--niebla)}
tbody td{padding:11px 12px;border-bottom:1px solid var(--linea);vertical-align:middle}
tbody tr:last-child td{border-bottom:0}
td.nombre{font-weight:500}
td.nombre a{color:inherit;text-decoration:none;border-bottom:1px solid var(--niebla)}
td.nombre a:hover{border-bottom-color:var(--ocre)}
td.nombre .slug{display:block;font:400 11px/1.4 var(--mono);color:var(--laguna);margin-top:2px}
.hecho{width:1%;white-space:nowrap;padding-right:18px}
.hecho .pip{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--pend);margin-right:8px;
  vertical-align:middle}
tr.ok .hecho .pip{background:var(--listo)}
td.paso{width:110px}
td.paso .barra{display:block;height:4px;background:var(--niebla);border-radius:2px;overflow:hidden;margin-bottom:6px}
td.paso .barra i{display:block;height:100%;width:var(--f);background:var(--pend)}
td.paso.listo .barra i{background:var(--listo)}
td.paso.curso .barra i{background:var(--curso)}
td.paso .cifra{font:500 13px/1 var(--mono);font-variant-numeric:tabular-nums}
td.paso .de{color:var(--laguna)}
td.paso.vacio .na{color:var(--niebla);font-family:var(--mono)}

/* --- El material --- */
h2.seccion{font-size:clamp(22px,3vw,30px);font-weight:800;margin:64px 0 6px}
h2.seccion + p{color:var(--tinta-2);max-width:62ch;margin:0 0 28px}
.mito{margin:0 0 46px;padding:0 0 34px;border-bottom:1px solid var(--linea)}
.mito:last-of-type{border-bottom:0}
.mito-cab h3{font-size:21px;font-weight:700;margin-bottom:5px}
.arco{margin:0;color:var(--tinta-2);font-size:14.5px;max-width:70ch}
.deslinde{margin:9px 0 0;font-size:13.5px;color:var(--tinta-2);max-width:74ch;
  border-left:2px solid var(--ocre);padding-left:12px}
.deslinde span{font:500 10px/1 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ocre);
  display:block;margin-bottom:4px}
.grupo{margin-top:22px}
.grupo h4{font:500 11px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--laguna);
  margin-bottom:11px}
.tira{display:grid;gap:10px}
.tira.trip{grid-template-columns:repeat(auto-fill,minmax(210px,1fr))}
.tira.fichas{grid-template-columns:repeat(auto-fill,minmax(128px,1fr))}
.tira.kf{grid-template-columns:repeat(auto-fill,minmax(104px,1fr))}
figure{margin:0}
figure img{display:block;width:100%;height:auto;border-radius:2px;background:var(--niebla)}
figcaption{font:400 10.5px/1.4 var(--mono);color:var(--laguna);margin-top:5px;word-break:break-word}

.nota{margin-top:70px;padding:24px 26px;background:var(--superficie);border:1px solid var(--linea);
  border-radius:3px;box-shadow:var(--sombra)}
.nota h2{font-size:17px;font-weight:700;margin-bottom:9px}
.nota p{margin:0 0 10px;color:var(--tinta-2);font-size:14.5px;max-width:74ch}
.nota p:last-child{margin-bottom:0}
.nota code{font:400 13px var(--mono);background:var(--niebla);padding:1px 5px;border-radius:2px;color:var(--tinta)}
a:focus-visible,button:focus-visible{outline:2px solid var(--ocre);outline-offset:2px}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style>

<div class="envoltura">
  <p class="eyebrow">Mitos de Colombia · ${esc(datos.comunidad)}</p>
  <h1>El taller, mito por mito</h1>
  <p class="entradilla">Cada mito se produce en cinco pasos y en ese orden, porque cada paso es la
  referencia del siguiente: las fichas de personaje fijan la cara que el tríptico tiene que respetar, y
  el tríptico fija el mundo en que ocurren las escenas del video. Un mito no se abandona a medias.</p>

  <div class="escalera">
    ${totales.map((t) => `
    <div class="tramo">
      <span class="n">Paso ${t.n}</span>
      <h2>${t.label}</h2>
      <span class="val">${t.hecho}<small>/${t.total}</small></span>
      <span class="riel"><i style="--f:${pct(t.hecho, t.total)}%"></i></span>
    </div>`).join("")}
  </div>

  <dl class="marcador">
    <div><dt>Piezas producidas</dt><dd>${totalHecho}<span> de ${totalTotal} planeadas</span></dd></div>
    <div><dt>Mitos completos</dt><dd>${completos}<span> de ${mitos.length} con plan</span></dd></div>
    <div><dt>Biblia de la comunidad</dt><dd>${heredadas.length + mitos.reduce((s, m) => s + m.piezas.filter((p) => p.tipo === "ficha").length, 0)}<span> fichas citables</span></dd></div>
    <div><dt>Costo en créditos</dt><dd>0<span> · generado en la web</span></dd></div>
  </dl>

  <div class="tabla-caja">
    <table>
      <thead><tr>
        <th></th><th>Mito</th>
        ${datos.PASOS.map((p) => `<th class="num" data-n="${p.n}">${p.label}</th>`).join("")}
      </tr></thead>
      <tbody>
        ${mitos.map((m) => `<tr class="${m.completo ? "ok" : ""}">
          <td class="hecho"><span class="pip"></span></td>
          <td class="nombre">${m.piezas.length ? `<a href="#${esc(m.slug)}">${esc(m.titulo)}</a>` : esc(m.titulo)}<span class="slug">${esc(m.slug)}</span></td>
          ${datos.PASOS.map((p) => celda(p, m)).join("")}
        </tr>`).join("")}
      </tbody>
    </table>
  </div>

  <h2 class="seccion">El material</h2>
  <p>Todo lo producido hasta ahora, en el orden en que se fabricó. Las fichas de biblia son las que
  cualquier mito posterior puede citar como referencia.</p>
  ${mitos.filter((m) => m.piezas.length).map(bloque).join("")}

  ${heredadas.length ? `
  <section class="mito">
    <header class="mito-cab"><h3>Biblia heredada</h3>
    <p class="arco">Fichas que ya existían antes de este plan y que los mitos nuevos siguen citando.</p></header>
    <div class="grupo"><div class="tira fichas">${heredadas.map((p) => `
      <figure><img src="${p.src}" alt="${esc(p.tag)}" loading="lazy"><figcaption>${esc(p.tag)}${p.kind ? ` · ${KIND_LABEL[p.kind] || p.kind}` : ""}</figcaption></figure>`).join("")}
    </div></div>
  </section>` : ""}

  <div class="nota">
    <h2>Cómo se produce</h2>
    <p>El plan Unlimited de Higgsfield no aplica fuera de higgsfield.ai: por API, cada imagen a 2K
    cuesta 7 créditos. En la web, con <code>GPT Image 2 · High · 2K</code> y el toggle encendido, cuesta
    cero — y el botón cambia de <code>Generate ✦ 7</code> a <code>Unlimited ✦</code>, que es la única
    señal de que sigue gratis.</p>
    <p>Por eso el ritmo es contenido: dos generaciones en vuelo, que es la concurrencia real del bundle,
    y pausas entre envíos. La cola gratuita va a unos 2,5 minutos por imagen.</p>
    <p>El estado no se lleva en una lista aparte sino mirando el disco: si el archivo existe, el paso
    está hecho. Así no se puede desincronizar de lo que realmente hay.</p>
  </div>
</div>`;

writeFileSync(salida, html);
console.log(`tablero → ${salida}  (${(Buffer.byteLength(html) / 1048576).toFixed(2)} MB)`);
