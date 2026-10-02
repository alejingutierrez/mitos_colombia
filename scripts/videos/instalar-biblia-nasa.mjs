// Instala la biblia visual Nasa–Páez como referencias del generador de keyframes.
//
// Hermano de `instalar-biblia-wayuu.mjs`. El generador resuelve un ref con "/"
// contra content/videos/<ref>.jpg, así que las fichas tienen que vivir en
// content/videos/nasa-paeces/biblia/<id>.jpg.
//
// La fuente de verdad NO es el listado del directorio: es
// `content/videos/nasa-paeces/biblia/produccion-api-02/selection.v2.json`, que
// declara para cada una de las 60 unidades cuál es el maestro ACEPTADO y su
// sha256. En el directorio conviven versiones rechazadas (e01 tiene v2, v3 y
// v4; sólo la v4 entró), y elegir por número de versión más alto acertaría por
// casualidad, no por contrato. Aquí se verifica el hash de cada archivo antes
// de instalarlo: si no cuadra, se aborta sin escribir nada.
//
// Los originales son `.jpeg` —no `.jpg`, no `.png`—; conviene recordarlo porque
// un censo que busque sólo jpg/png da cero y hace creer que no hay biblia.
//
// Convención de ids: nombre semántico en snake_case sin tildes, como en wayúu.
// Las categorías de conjunto llevan prefijo (`utileria_`, `elenco_`) porque en
// un spec no se leen solas: «candela» podría ser el objeto o el pack.
import fs from "node:fs"; import path from "node:path";
import crypto from "node:crypto"; import sharp from "sharp";

const SEL = "content/videos/nasa-paeces/biblia/produccion-api-02/selection.v2.json";
const OUT = "content/videos/nasa-paeces/biblia";

const ID = {
  P01: "kpish_trueno",         P02: "lliban",               P03: "juan_chiracol",
  P04: "juan_tama",            P05: "chauteh",              P06: "pedro_dimales",
  P07: "tomas_dimales",        P08: "santo_tomas",          P09: "maria_santisima",
  P10: "joven_desconocido",    P11: "joven_de_la_laguna",   P12: "nina_serpiente",
  P13: "madre_de_la_sal",      P14: "anciana_de_la_candela", P15: "hombre_flaco",
  P16: "jinete_diablo",        P17: "hombre_tigre",

  E01: "cabeza_autonoma",      E02: "armadillo_de_mina",    E03: "culebra_rayo",
  E04: "gran_felino",          E05: "dos_aguilas",          E06: "pajaro_carpintero",
  E07: "paquete_nocturno",

  L01: "paramo_laguna",        L02: "rio_canon",            L03: "filos_y_pena",
  L04: "monte_de_montana",     L05: "papal_y_maizal",       L06: "casa_de_calderas",
  L07: "plaza_e_iglesia",      L08: "camino_nocturno",      L09: "camino_del_mas_alla",
  L10: "mar",

  V01: "vichaguau",            V02: "eshufi_ik",            V03: "el_caspe",
  V04: "calderas_santa_rosa",  V05: "rio_paez",             V06: "piedra_alta",
  V07: "chaikin",              V08: "uikuet_petrificado",

  U01: "utileria_autoridad_medicina", U02: "utileria_agua_trueno",
  U03: "utileria_nacimiento_juan_tama", U04: "utileria_carpinteria",
  U05: "utileria_cana_y_sal",  U06: "utileria_candela",     U07: "utileria_semillas",
  U08: "utileria_viaje_nocturno", U09: "utileria_armadillo_mina",
  U10: "utileria_casa_fiesta", U11: "utileria_armas_caza",  U12: "utileria_domestica",

  C01: "elenco_thejwala",      C02: "elenco_cabildo",       C03: "elenco_mujeres_mayores",
  C04: "elenco_familias_fiesta", C05: "elenco_agricultores", C06: "elenco_adversarios",
};

const sel = JSON.parse(fs.readFileSync(SEL, "utf8"));
const sha = (f) => crypto.createHash("sha256").update(fs.readFileSync(f)).digest("hex");

// Primero se valida TODO, y sólo después se escribe: una biblia a medias es
// peor que ninguna, porque el generador aborta a mitad de cola.
const plan = []; const problemas = [];
const vistos = new Set();
for (const r of sel.records) {
  const id = ID[r.id];
  if (!id) { problemas.push(`${r.id} (${r.label}): sin id semántico asignado`); continue; }
  if (vistos.has(id)) { problemas.push(`${r.id}: el id "${id}" ya estaba usado`); continue; }
  vistos.add(id);
  if (!fs.existsSync(r.file)) { problemas.push(`${r.id} → ${r.file}: no existe`); continue; }
  const h = sha(r.file);
  if (r.sha256 && h !== r.sha256) {
    problemas.push(`${r.id} → ${path.basename(r.file)}: sha256 no coincide con selection.v2`);
    continue;
  }
  plan.push({ id, origen: r.file, unidad: r.id, label: r.label, categoria: r.category });
}
if (plan.length !== sel.records.length || problemas.length) {
  console.error(`[biblia-nasa] ABORTA: ${problemas.length} problema(s)\n  ` + problemas.join("\n  "));
  process.exit(1);
}

fs.mkdirSync(OUT, { recursive: true });
for (const p of plan.sort((a, b) => a.id.localeCompare(b.id))) {
  await sharp(p.origen).jpeg({ quality: 92, mozjpeg: true }).toFile(path.join(OUT, `${p.id}.jpg`));
}

// El mapa unidad↔id queda escrito: sin él, escribir un spec obliga a abrir
// selection.v2.json y traducir a mano.
const mapa = plan.map((p) => `| ${p.unidad} | \`${p.id}\` | ${p.categoria} | ${p.label} |`).join("\n");
fs.writeFileSync(path.join(OUT, "MAPA-REFS.md"),
  `# Biblia Nasa–Páez · referencias instaladas\n\n` +
  `${plan.length} fichas en \`${OUT}/\`. En un spec se citan como ` +
  `\`nasa-paeces/biblia/<id>\`.\n\n` +
  `Generado por \`scripts/videos/instalar-biblia-nasa.mjs\` desde ` +
  `\`selection.v2.json\` (maestros aceptados, sha256 verificado).\n\n` +
  `| Unidad | Ref | Categoría | Lámina |\n|---|---|---|---|\n${mapa}\n`);

console.log(`[biblia-nasa] ${plan.length} fichas instaladas en ${OUT} · mapa en MAPA-REFS.md`);
