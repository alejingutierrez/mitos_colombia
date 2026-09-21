/**
 * El gate del bloque mestizo y mixto: sin acta válida no hay redacción.
 *
 *   node scripts/editorial/enriquecimiento/validar-acta.mjs --ciclo=caribe-mestizo-final
 *   node scripts/editorial/enriquecimiento/validar-acta.mjs --ciclo=<c> --con-relato
 *
 * El acta de procedencia (spec-mestizos-y-mixtos §5.1) hace tres cosas que el
 * proceso anterior se saltaba: ancla cada hecho del relato a una página, deja
 * constancia de lo que se quita de la ficha heredada, y obliga a argumentar por
 * qué el mito está en el cajón «mestizo» o «mixto».
 *
 * La comprobación que importa es la tercera pasada, `--con-relato`: busca en el
 * texto redactado los nombres propios, los años y las cifras que NO aparecen en
 * ningún nudo del acta. Es la que destapó once invenciones cuando se escribieron
 * actas retroactivas en el pipeline de video, y es la que impide que «una mujer»
 * de la fuente se llame Rosalba en la página.
 *
 * Sale con código 1 si alguna acta bloquea, para que se pueda encadenar.
 */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import {
  parseArgs, words, fuenteVetada, medirProsa, WORD_RANGES, MITO_MINIMO_CORTO, today,
  normalizarParaCotejo, citaEstaEn,
} from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const ciclo = String(options.ciclo || options.modulos || "").trim();
if (!ciclo) throw new Error("Falta --ciclo=<carpeta en content/editorial/>, p. ej. --ciclo=caribe-mestizo-final");

const base = path.join("content", "editorial", ciclo);
const fecha = String(options.fecha || today());
const dirActas = path.join(base, `actas-${fecha}`);
const dirRelatos = path.join(base, `reescritura-${fecha}`);

// Los primarios del ciclo, normalizados, para cotejar contra ellos las citas
// literales de los nudos. Hasta ahora el gate comprobaba que un nudo TUVIERA
// cita; no comprobaba que la cita existiera. Es la diferencia entre exigir la
// forma del ancla y exigir que el ancla agarre.
const dirPrimarias = path.join(base, "primarias");
let primario = "";
// Qué obras tenemos extraídas, deducido del nombre de cada archivo. Sólo se
// cotejan las citas cuyo nudo remite a una de ellas: un nudo que cita a
// Exquemelin o una crónica de prensa no puede buscarse en un texto que no
// tenemos, y bloquearlo sería ruido. De 675 nudos, eso separa 47 falsos
// positivos de los que hay que mirar de verdad.
const obrasExtraidas = [];
try {
  for (const f of fs.readdirSync(dirPrimarias)) {
    if (!f.endsWith(".txt")) continue;
    primario += normalizarParaCotejo(fs.readFileSync(path.join(dirPrimarias, f), "utf8"));
    for (const parte of f.replace(/\.txt$/, "").split("-")) {
      if (parte.length > 4 && !/^\d+$/.test(parte)) obrasExtraidas.push(parte.toLowerCase());
    }
  }
} catch { /* sin primarios: el cotejo de citas se salta y se avisa */ }

/** ¿El nudo remite a una obra cuyo texto tenemos? */
function citaObraExtraida(fuente) {
  const f = String(fuente || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return obrasExtraidas.some((o) => f.includes(o));
}

const PROPUESTAS = new Set(["mestizo", "mixto", "sin decidir"]);
const NUDOS_MINIMOS = Number(options["nudos-minimos"] || 3);

/** Terminaciones verbales: una palabra que abre oración y conjuga no es un nombre. */
const VERBAL = /(?:aba|abas|aban|ía|ías|ían|ó|ió|aron|ieron|aba|ara|iera|ase|iese|ando|iendo|ado|ido|arán|erán|irán|aría|ería|iría|aba)$/i;

/**
 * Nombres propios del texto.
 *
 * La primera palabra de cada oración es el caso difícil: lleva mayúscula por
 * posición, no por ser nombre. Saltarla entera era cómodo y dejaba pasar
 * justo el caso que el spec pone de ejemplo —«Rosalba cruzaba el puente»—,
 * porque un nombre inventado casi siempre abre el relato.
 *
 * Así que la primera palabra se acepta como nombre propio sólo si supera tres
 * filtros: no es palabra funcional conocida, no conjuga, y **no aparece nunca
 * en minúscula en el propio texto**. Esa última es la que hace el trabajo: un
 * sustantivo común que abre una oración («Nadie», «Aquella», «Puente») casi
 * siempre reaparece en minúscula en otra parte; un nombre propio, nunca.
 */
function nombresPropios(texto, { incluirIniciales = true } = {}) {
  const t = String(texto || "");
  // Ojo: sobre el texto ORIGINAL. Bajarlo a minúsculas primero hacía que toda
  // palabra pareciese común y el filtro no descartaba nada.
  const enMinuscula = new Set(t.match(/\b[a-záéíóúüñ][a-záéíóúüñ'’-]{2,}\b/g) || []);
  const internos = new Set();
  const soloIniciales = new Set();
  const esNombre = (w) => /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ'’-]{2,}$/.test(w);
  const limpiar = (w) => w.replace(/^[«"“(¿¡—-]+|[»"”),.;:!?…]+$/g, "");

  for (const oracion of t.split(/(?<=[.!?…:;])\s+|\n+/)) {
    const palabras = oracion.trim().split(/\s+/).filter(Boolean);
    palabras.forEach((cruda, i) => {
      const w = limpiar(cruda);
      if (!esNombre(w)) return;
      if (i === 0) {
        if (!incluirIniciales) return;
        if (NO_NOMBRE.has(w)) return;
        if (VERBAL.test(w)) return;
        // Si la misma palabra vive en minúscula en el texto, es común.
        if (enMinuscula.has(w.toLowerCase())) return;
      }
      (i === 0 ? soloIniciales : internos).add(w);
    });
  }
  // Un nombre que aparece alguna vez en posición interna es seguro; uno que
  // sólo abre oraciones puede ser un imperativo o un vocativo de diálogo
  // («Vámonos», «Siéntese», «Amigo»), así que se avisa en vez de bloquear.
  for (const w of internos) soloIniciales.delete(w);
  return { internos, soloIniciales, todos: new Set([...internos, ...soloIniciales]) };
}

/** Determinantes y conectores que abren oración y no son nombres propios. */
const NO_NOMBRE = new Set([
  "Cuando", "Desde", "Entonces", "Mientras", "Aunque", "Porque", "Durante",
  "Antes", "Después", "Luego", "Nadie", "Nunca", "Siempre", "Todos", "Todas",
  "Ninguno", "Otra", "Otro", "Esta", "Este", "Esa", "Ese", "Aquel", "Aquella",
  "Para", "Sobre", "Entre", "Hasta", "Entrada", "Nada", "Cada", "Algunos",
  "Dios", "Virgen", "Cristo", "Señor", "Señora", "Padre", "Madre",
  "Unos", "Unas", "Otros", "Otras", "Muchos", "Muchas", "Pocos", "Pocas",
  "Ambos", "Ambas", "Varios", "Varias", "Tras", "Bajo", "Ante", "Según",
  "Así", "Aún", "Además", "También", "Tampoco", "Quizá", "Acaso", "Apenas",
  "Pronto", "Ahora", "Hoy", "Ayer", "Mañana", "Allí", "Allá", "Aquí", "Acá",
  "Dentro", "Fuera", "Arriba", "Abajo", "Cerca", "Lejos", "Encima", "Debajo",
  "Nadie", "Alguien", "Algo", "Ninguna", "Cualquier", "Cualquiera", "Quien",
  "Quienes", "Cuyo", "Cuya", "Sino", "Pues", "Luego", "Mas", "Sólo", "Solo",
  "Primero", "Segundo", "Tercero", "Última", "Último", "Nunca", "Jamás",
  "Poco", "Mucho", "Todo", "Toda", "Media", "Medio", "Gran", "Grande",
]);

function cifrasYAnios(texto) {
  const t = String(texto || "");
  const out = new Set();
  for (const m of t.matchAll(/\b(1[5-9]\d{2}|20[0-2]\d)\b/g)) out.add(m[1]);
  for (const m of t.matchAll(/\b(\d{1,3})\s+(?:años|días|noches|leguas|reales|pesos|hijos|hijas|hermanos|hermanas)\b/gi)) {
    out.add(`${m[1]} ${m[2]}`);
  }
  return out;
}

function leerJson(p) {
  try {
    return { ok: true, data: JSON.parse(fs.readFileSync(p, "utf8")) };
  } catch (error) {
    return { ok: false, error: String(error.message) };
  }
}

function validarActa(slug, acta) {
  const bloqueos = [];
  const avisos = [];

  if (acta.slug !== slug) bloqueos.push(`el campo «slug» dice «${acta.slug}» y el archivo se llama «${slug}»`);

  // 1 · registro: el primer escalón de la escalera. Sin esto el ciclo no se escribe.
  const r = acta.registro;
  if (!r || typeof r !== "object") {
    bloqueos.push("no hay «registro»: sin el escalón 1 el mito se declara bloqueado (spec §4.1)");
  } else {
    for (const campo of ["obra", "autor", "anio"]) {
      if (!r[campo] && r[campo] !== 0) bloqueos.push(`registro.${campo} vacío`);
    }
    if (!r.paginas) avisos.push("registro.paginas vacío: la historia no podrá decir por dónde va este relato");
    if (!r.url) {
      avisos.push("registro.url vacío: la obra sólo existe en papel (decláralo en la limitación)");
    } else {
      const veto = fuenteVetada(r.url);
      if (veto) bloqueos.push(`registro.url es ${veto}: ${r.url}`);
      else if (!/^https:\/\//i.test(r.url)) avisos.push(`registro.url no es https: ${r.url}`);
    }
    // Estas tres pueden ser null, pero la clave tiene que estar: obliga a haberlo mirado.
    for (const campo of ["narrador", "lugar", "fecha_de_recoleccion"]) {
      if (!(campo in r)) bloqueos.push(`falta la clave registro.${campo} (puede ser null, pero hay que declararla)`);
    }
    if (r.narrador === null) avisos.push("sin narrador: la fuente no lo da, y eso va en «dudas»");
  }

  // 2 · nudos: lo que no tiene ancla no se escribe.
  if (!Array.isArray(acta.nudos) || !acta.nudos.length) {
    bloqueos.push("no hay «nudos»: cada hecho del relato se ancla a una página (spec §5.1)");
  } else {
    if (acta.nudos.length < NUDOS_MINIMOS) {
      avisos.push(`sólo ${acta.nudos.length} nudos: un relato de 300+ palabras rara vez se sostiene con menos de ${NUDOS_MINIMOS}`);
    }
    acta.nudos.forEach((n, i) => {
      const etq = `nudos[${i}]`;
      if (!n?.hecho) bloqueos.push(`${etq} sin «hecho»`);
      if (!n?.fuente) bloqueos.push(`${etq} sin «fuente»: hay que decir obra y página`);
      if (!n?.literal) {
        bloqueos.push(`${etq} sin «literal»: un nudo sin cita textual no es un nudo`);
      } else {
        if (words(n.literal) < 4) bloqueos.push(`${etq}.literal es demasiado corto para ser una cita: «${n.literal}»`);
        if (String(n.literal).trim() === String(n.hecho || "").trim()) {
          bloqueos.push(`${etq}.literal repite el «hecho» en vez de citar la fuente`);
        }
        // ¿La cita está de verdad en el primario? Se compara sobre texto sin
        // espacios ni puntuación, porque el extraído parte frases por salto de
        // línea, corta palabras con guion y a veces espacia las letras.
        const enFuente = citaObraExtraida(n.fuente) ? citaEstaEn(n.literal, primario) : null;
        if (enFuente === false) {
          bloqueos.push(
            `${etq}.literal cita una obra que tenemos extraída, y la frase no aparece en ella: «${String(n.literal).slice(0, 70)}…»`,
          );
        }
      }
      if (n?.fuente && !/\bp{1,2}\.?\s*\d|\bpág|\bfol|\bmin\s*\d|\bcap/i.test(String(n.fuente))) {
        avisos.push(`${etq}.fuente no señala página ni capítulo: «${n.fuente}»`);
      }
    });
  }

  // 3 · fuera: la mitad del trabajo en un corpus donde las fichas heredadas añadieron cosas.
  if (!Array.isArray(acta.fuera)) {
    bloqueos.push("falta «fuera» (puede ir vacío, pero la clave declara que se revisó la ficha heredada)");
  } else {
    acta.fuera.forEach((f, i) => {
      if (!f?.elemento || !f?.por_que) bloqueos.push(`fuera[${i}] incompleto: hace falta «elemento» y «por_que»`);
    });
  }

  // 4 · clasificación: ninguna ficha se publica con «mixto» sin argumento.
  const c = acta.clasificacion;
  if (!c || typeof c !== "object") {
    bloqueos.push("falta «clasificacion»: hay que decir por qué el mito está en este cajón");
  } else {
    const razon = c.por_que_mestizo || c.por_que_mixto || "";
    if (!razon) bloqueos.push("clasificacion sin argumento: escribe el porqué, o «sin sostener»");
    else if (words(razon) < 6 && !/sin sostener/i.test(razon)) {
      avisos.push(`el argumento de clasificación tiene ${words(razon)} palabras: es una etiqueta, no un argumento`);
    }
    const prop = String(c.propuesta || "").trim();
    if (!prop) bloqueos.push("clasificacion.propuesta vacía");
    else if (!PROPUESTAS.has(prop) && !/^mover a .+/.test(prop)) {
      bloqueos.push(`clasificacion.propuesta «${prop}» no es válida (mestizo | mixto | mover a <comunidad> | sin decidir)`);
    }
    if (/sin sostener/i.test(razon) && prop === "mixto") {
      bloqueos.push("dice «sin sostener» y propone «mixto»: o hay argumento o cambia la propuesta");
    }
  }

  return { bloqueos, avisos };
}

/** Tercera pasada: lo que el relato afirma y el acta no ancla. */
function cotejarRelato(acta, relato) {
  const bloqueos = [];
  const avisos = [];
  const anclado = [acta.registro?.obra, acta.registro?.lugar, acta.registro?.narrador]
    .concat((acta.nudos || []).flatMap((n) => [n.hecho, n.literal, n.fuente]))
    .join(" \n ");
  const anclaNombres = nombresPropios(anclado).todos;
  const anclaCifras = cifrasYAnios(anclado);
  // El título y la propia obra sí pueden aparecer en el relato.
  for (const n of nombresPropios(relato.titulo || "").todos) anclaNombres.add(n);

  const enRelato = nombresPropios(relato.mito);
  const sinAncla = (n) => !NO_NOMBRE.has(n) && !anclaNombres.has(n);
  const huerfanos = [...enRelato.internos].filter(sinAncla);
  const dudosos = [...enRelato.soloIniciales].filter(sinAncla);
  const cifrasHuerfanas = [...cifrasYAnios(relato.mito)].filter((n) => !anclaCifras.has(n));

  if (huerfanos.length) {
    bloqueos.push(
      `el relato nombra ${huerfanos.length} nombre(s) propio(s) que ningún nudo ancla: ${huerfanos.join(", ")}. ` +
        "Si la fuente dice «una mujer», no se llama Rosalba.",
    );
  }
  if (dudosos.length) {
    avisos.push(
      `sin ancla, sólo al abrir oración (puede ser un imperativo o un vocativo, compruébalo): ${dudosos.join(", ")}`,
    );
  }
  if (cifrasHuerfanas.length) {
    bloqueos.push(`el relato da fechas o cifras sin nudo: ${cifrasHuerfanas.join(", ")}`);
  }

  // Ningún campo publicable habla del proyecto. El spec §5.4 lo prohíbe en el
  // Relato, pero al reescribir el primer ciclo apareció el mismo defecto una
  // capa más abajo: doce de quince fichas contaban en `historia` y en
  // `versiones` la historia de nuestras propias fichas —«el cierre no es el que
  // el sitio venía contando», «el informe de búsqueda de este ciclo le asignaba
  // las páginas 263 y 264»—. El lector no sabe qué es un ciclo, ni un informe
  // de búsqueda, ni qué decía la ficha anterior, y no tiene por qué. Eso vive
  // en `dudas` y en el informe.
  //
  // Los patrones son deliberadamente estrechos: «el sitio era el peor posible»
  // es un lugar y «el encargo» puede ser un pedido de zapatos, así que sólo se
  // marca cuando la frase se refiere sin duda al proyecto.
  const PROYECTO = [
    /\b(?:el|este) sitio (?:ven[ií]a|tra[ií]a|contaba|publicaba|daba|declaraba|dec[ií]a|resum[ií]a)\b/i,
    /\blo que el sitio\b/i,
    /\b(?:esta|la) ficha (?:que|ten[ií]a|ven[ií]a|dec[ií]a|daba|la titula|lo titula|resum[ií]a)\b/i,
    /\bel informe de b[uú]squeda\b/i,
    /\b(?:el|este) (?:encargo|ciclo|lote|m[oó]dulo) (?:de este|del sitio|lo situaba|le asignaba|dec[ií]a)\b/i,
    /\b(?:de|en) este ciclo\b/i,
    /\bel m[oó]dulo (?:del sitio|se repet[ií]a|ven[ií]a)\b/i,
    /\b(?:la|su) (?:descripci[oó]n|versi[oó]n) heredada\b/i,
    /\bla reescritura\b/i,
    /\bcomprobado contra el texto\b/i,
    // Jerga de tanda de trabajo: «la única del lote», «las dos de las trece».
    // Son unidades nuestras, no del libro. Un «ciclo» CON complemento sí es una
    // unidad folclórica que el lector entiende —«el ciclo del conejo burlador»,
    // «el ciclo de Tío Conejo»— y no se marca; lo que se marca es el ciclo a
    // secas, que sólo existe en nuestra contabilidad.
    /\beste ciclo\b/i,
    /\b(?:el|del|en el) (?:lote|ciclo)\b(?!\s+(?:de|del)\s)/i,
    /\b(?:de las|las) (?:trece|catorce|quince|treinta y dos)\b/i,
  ];
  for (const campo of ["mito", "historia", "versiones", "similitudes", "leccion"]) {
    for (const patron of PROYECTO) {
      const m = String(relato[campo] || "").match(patron);
      if (m) {
        bloqueos.push(
          `«${campo}» habla del proyecto y no de la obra: «${m[0]}». ` +
            "El lector no sabe qué es un ciclo ni qué decía la ficha anterior; eso va en «dudas».",
        );
      }
    }
  }

  // El relato no habla de la investigación (spec §5.4).
  const APARATO = /\b(la fuente|las fuentes|el recopilador|la edición|la versión que se conserva|según el registro|no se sabe si|la investigación|el manuscrito|la transcripción|esta página|la ficha)\b/i;
  const m = String(relato.mito || "").match(APARATO);
  if (m) bloqueos.push(`el relato menciona el aparato: «${m[0]}». Eso vive en «historia», no en la página del mito`);

  // Rangos y prosa.
  // `WORD_RANGES` guarda arrays [min, max], no objetos. Leerlos como
  // `rango.min` daba `undefined`, y comparar contra `undefined` siempre es
  // falso: la comprobación de extensión no disparaba nunca y el gate dejaba
  // pasar relatos de 289 palabras y `historia` por debajo del piso.
  for (const [campo, [minBase, max]] of Object.entries(WORD_RANGES)) {
    const n = words(relato[campo]);
    if (!n) { bloqueos.push(`campo «${campo}» vacío`); continue; }
    const min = (relato.relato_corto || relato.relatoCorto) && campo === "mito" ? MITO_MINIMO_CORTO : minBase;
    if (n < min || n > max) bloqueos.push(`«${campo}» tiene ${n} palabras y el contrato pide ${min}-${max}`);
  }
  const prosa = medirProsa(relato.mito);
  for (const f of prosa.fallos) bloqueos.push(`prosa: ${f}`);
  for (const a of prosa.avisos) avisos.push(`prosa: ${a}`);

  return { bloqueos, avisos, prosa };
}

// ─── ejecución ───────────────────────────────────────────────────────────────

if (!fs.existsSync(dirActas)) {
  console.error(`No existe ${dirActas}. El paso 5 escribe ahí una acta por mito.`);
  process.exit(1);
}

let archivos = fs.readdirSync(dirActas).filter((f) => f.endsWith(".json")).sort();
if (options.slugs) {
  const pedidos = new Set(String(options.slugs).split(",").map((s) => s.trim()));
  archivos = archivos.filter((f) => pedidos.has(f.replace(/\.json$/, "")));
}
if (!archivos.length) {
  console.error(`No hay actas en ${dirActas}.`);
  process.exit(1);
}

const conRelato = Boolean(options["con-relato"]);
const filas = [];
let totalBloqueos = 0;
const detalle = [];
const aperturas = new Map();

for (const archivo of archivos) {
  const slug = archivo.replace(/\.json$/, "");
  const leido = leerJson(path.join(dirActas, archivo));
  if (!leido.ok) {
    totalBloqueos += 1;
    filas.push({ slug, nudos: "—", bloqueos: 1, avisos: 0, prosa: "—" });
    detalle.push({ slug, bloqueos: [`el JSON no se puede leer: ${leido.error}`], avisos: [] });
    continue;
  }
  const acta = leido.data;
  const { bloqueos, avisos } = validarActa(slug, acta);

  let prosaTxt = "—";
  if (conRelato) {
    const pr = path.join(dirRelatos, archivo);
    if (!fs.existsSync(pr)) {
      bloqueos.push(`no hay reescritura en ${pr}`);
    } else {
      const lr = leerJson(pr);
      if (!lr.ok) bloqueos.push(`la reescritura no se puede leer: ${lr.error}`);
      else {
        const c = cotejarRelato(acta, lr.data);
        bloqueos.push(...c.bloqueos);
        avisos.push(...c.avisos);
        prosaTxt = `ttr ${c.prosa.ttr} · adj ${((c.prosa.adjetivos || 0) * 100).toFixed(1)}%`;
        if (c.prosa.apertura) {
          if (!aperturas.has(c.prosa.apertura)) aperturas.set(c.prosa.apertura, []);
          aperturas.get(c.prosa.apertura).push(slug);
        }
      }
    }
  }

  totalBloqueos += bloqueos.length;
  filas.push({
    slug,
    nudos: Array.isArray(acta.nudos) ? acta.nudos.length : "—",
    narrador: acta.registro?.narrador ? "sí" : "no",
    cajón: acta.clasificacion?.propuesta || "—",
    bloqueos: bloqueos.length,
    avisos: avisos.length,
    prosa: prosaTxt,
  });
  if (bloqueos.length || avisos.length) detalle.push({ slug, bloqueos, avisos });
}

if (!primario) {
  console.log(
    `Aviso: no hay primarios en ${dirPrimarias}, así que las citas literales no se cotejan contra la fuente.\n`,
  );
}

console.table(filas);

for (const d of detalle) {
  if (!d.bloqueos.length && !d.avisos.length) continue;
  console.log(`\n${d.slug}`);
  for (const b of d.bloqueos) console.log(`  ✖ ${b}`);
  for (const a of d.avisos) console.log(`  · ${a}`);
}

// Aperturas repetidas: el defecto más visible del lote.
if (conRelato) {
  // Lo que delata el molde es la CONCENTRACIÓN, no que dos fichas coincidan.
  // Con cuatro categorías gruesas la coincidencia es inevitable a partir de
  // cierto número de fichas: el corpus wayuu, que está bien escrito, tiene 20
  // de 27 «repetidas» y su firma más frecuente sólo agrupa 4. Piedecuesta, que
  // sí tiene molde, pone siete de ocho en la misma. Así que bloquea la
  // concentración —una firma con 4 o más fichas, o con más de un cuarto del
  // lote— y lo demás sólo se señala.
  const repes = [...aperturas.entries()].filter(([, s]) => s.length > 1);
  if (repes.length) {
    const limite = Math.max(4, Math.ceil(archivos.length / 4));
    console.log("\nAPERTURAS COMPARTIDAS (estructura sintáctica de la primera oración)");
    for (const [firma, slugs] of repes.sort((a, b) => b[1].length - a[1].length)) {
      const concentra = slugs.length >= limite;
      console.log(`  ${concentra ? "✖" : "·"} ${firma}  ×${slugs.length}  ${slugs.join(", ")}`);
      if (concentra) totalBloqueos += 1;
    }
    console.log(`  D=determinante P=preposición C=conjunción X=otra · bloquea a partir de ${limite} fichas`);
  }
}

console.log(
  `\n${archivos.length} acta(s) · ${totalBloqueos} bloqueo(s).` +
    (totalBloqueos ? " Sin cero bloqueos no se redacta (spec §8)." : " Paso franco."),
);
process.exit(totalBloqueos ? 1 : 0);
