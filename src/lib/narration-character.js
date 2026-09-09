/**
 * Carácter de un lecho musical y del tramo de relato que lo va a llevar debajo.
 *
 * El problema que resuelve: la rotación por uso reparte bien pero es CIEGA al
 * tema. Con Bochica —un mito de caminos— le tocaba «Laguna de Iguaque», que es
 * el escenario propio de Bachué. Elegir a mano funciona para un mito y no para
 * trescientos, así que aquí se puntúa el texto contra un léxico y se elige
 * dentro del grupo que pide el relato, sin renunciar al reparto por uso.
 *
 * Módulo puro: lo importan la app y los scripts. Nada de red ni de base.
 */

/**
 * Vocabulario cerrado. Añadir una etiqueta obliga a etiquetar lechos con ella.
 *
 * En las etiquetas de cada lecho el ORDEN significa algo: la primera es su
 * carácter dominante y las siguientes son matices. «Laguna de Iguaque» es
 * ["agua","silencio"], así que para un tramo de silencio pierde contra
 * «Silencio de la sabana», que lo lleva de primero.
 */
export const CHARACTERS = [
  "agua",
  "camino",
  "ceremonia",
  "comunidad",
  "fuego",
  "montana",
  "noche",
  "oficio",
  "selva",
  "silencio",
  "viento",
];

/**
 * Léxico por carácter. Son RAÍCES, no palabras completas: «camin» atrapa
 * caminar, camino, caminante y caminaba de una vez. Se comparan sin tildes y en
 * minúscula, porque el archivo mezcla grafías.
 *
 * Están pensadas sobre el vocabulario real de los relatos —cacique, zipa,
 * páramo, frailejón, chicha— y no sobre un español genérico.
 */
export const LEXICON = {
  // «nad» se quitó: atrapaba «nada» y «nadie», que en un mito de creación
  // aparecen a cada paso y no tienen nada que ver con el agua.
  agua: ["agua", "rio", "laguna", "lluvia", "llov", "cascada", "arroyo", "ahog", "nadar", "nadand", "nadab", "nado", "pozo", "corrient", "orilla", "inund", "diluvi", "humed", "salto", "manantial", "quebrada", "cienaga", "pescad", "pez", "peces", "moj"],
  camino: ["camin", "viaj", "andar", "andab", "cruz", "recorr", "senda", "huella", "forastero", "peregrin", "partir", "partió", "regres", "llegad", "rastro", "siguió", "paso ", "pasos"],
  ceremonia: ["ritual", "ofrend", "sacrifici", "templo", "sacerdot", "cacique", "zipa", "zaque", "ceremoni", "procesi", "culto", "sagrad", "adorat", "oro", "esmeralda", "chyquy", "jeque", "consagr", "divin"],
  comunidad: ["pueblo", "gente", "familia", "hijos", "aldea", "vecin", "fiesta", "danz", "baile", "bail", "cantar", "canto", "cosech", "maiz", "chicha", "comunidad", "reuni", "multitud", "juntos"],
  fuego: ["fuego", "humo", "hogu", "ard", "quem", "ceniz", "bras", "llama", "fogón", "fogon", "incendi", "calor", "chispa"],
  montana: ["montañ", "sierra", "cerro", "piedra", "roca", "peña", "cima", "altura", "paramo", "páramo", "farall", "cueva", "abismo", "risco", "cumbre"],
  noche: ["noche", "luna", "oscur", "sombra", "estrella", "dormi", "sueño", "soñ", "madrugada", "amanec", "anochec", "tinieb", "luz", "luces", "sol", "alba", "negrur"],
  oficio: ["tej", "telar", "hil", "manta", "barro", "olla", "cultiv", "sembr", "labr", "trabaj", "oficio", "algodón", "algodon", "cest", "alfar", "arte", "enseñ", "aprend", "herramient"],
  selva: ["selva", "monte", "bosque", "arbol", "árbol", "jaguar", "pajar", "pájar", "aves", "animal", "hoja", "planta", "flor", "serpiente", "culebra", "venado", "frailej"],
  silencio: ["silenci", "vacio", "vacío", "desaparec", "ausenc", "olvid", "soledad", "nadie", "perdi", "abandon", "nunca mas", "nunca más", "ya no ", "se fue", "murio", "murió", "muerte"],
  viento: ["viento", "aire", "niebla", "nube", "frio", "frío", "sopl", "brisa", "helad", "neblin", "tormenta", "vendaval"],
};

/** Sin tildes y en minúscula: el archivo mezcla «bohío» con «bohio». */
export function normalize(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

/**
 * Puntuación por carácter de un texto. Cuenta apariciones de cada raíz; no
 * pondera por longitud porque los tramos que se comparan miden casi lo mismo.
 */
/**
 * Las raíces se anclan al COMIENZO de palabra, no a cualquier posición.
 *
 * Sin el ancla, «ard» encontraba fuego dentro de «guardaba», «ave» encontraba
 * selva dentro de «grave» y «suave», y el resultado se desviaba en silencio.
 * Con el ancla, una raíz sigue atrapando toda su familia —«camin» vale para
 * caminar, camino y caminante— pero deja de aparecer donde no la llamaron.
 */
const REGEXES = Object.fromEntries(
  Object.entries(LEXICON).map(([caracter, raices]) => [
    caracter,
    raices.map((r) => new RegExp(`\\b${normalize(r).replace(/[.*+?^\${}()|[\]\\]/g, "\\$&")}`, "g")),
  ])
);

export function scoreCharacters(text) {
  const plano = normalize(text);
  const puntos = {};
  for (const [caracter, expresiones] of Object.entries(REGEXES)) {
    let total = 0;
    for (const re of expresiones) {
      re.lastIndex = 0;
      total += (plano.match(re) || []).length;
    }
    if (total > 0) puntos[caracter] = total;
  }
  return puntos;
}

/** Los caracteres dominantes, de mayor a menor, hasta `cuantos`. */
export function topCharacters(text, cuantos = 3) {
  return Object.entries(scoreCharacters(text))
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, cuantos)
    .map(([c]) => c);
}

/**
 * Parte el relato en `cuantos` tramos de peso PARECIDO, cortando sólo entre
 * palabras.
 *
 * Se reparte por número de palabras y no por párrafos porque los párrafos son
 * muy desiguales y un tramo podría quedarse sin texto que puntuar. Como la
 * velocidad de habla es estable, repartir por palabras se aproxima bien al
 * reparto por tiempo, que es lo que de verdad decide qué se oye bajo qué.
 */
export function splitStory(story, cuantos) {
  const palabras = String(story || "").split(/\s+/).filter(Boolean);
  if (cuantos <= 1 || palabras.length === 0) return [palabras.join(" ")];
  const porTramo = Math.ceil(palabras.length / cuantos);
  const tramos = [];
  for (let i = 0; i < cuantos; i += 1) {
    tramos.push(palabras.slice(i * porTramo, (i + 1) * porTramo).join(" "));
  }
  return tramos;
}

/**
 * Elige un lecho por tramo: el que mejor encaje con el carácter del texto y,
 * entre los que encajan igual, el MENOS USADO. Así el tema manda y el reparto
 * sigue vivo.
 *
 * Ningún lecho se repite dentro de una misma narración, y si un tramo no tiene
 * candidato temático se cae al menos usado que quede: es preferible un fondo
 * neutro a repetir el anterior o quedarse sin música.
 *
 * `beds` llega ya ordenado por uso ascendente.
 */
function huella(texto) {
  // FNV-1a: barata, estable y sin dependencias. No es criptográfica ni falta.
  let h = 2166136261;
  const s = String(texto);
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function chooseBedsForStory(story, beds, cuantos, semilla = "") {
  const disponibles = [...beds];
  const elegidos = [];
  const tramos = splitStory(story, cuantos);
  for (let t = 0; t < tramos.length; t += 1) {
    const tramo = tramos[t];
    if (!disponibles.length) break;
    const dominantes = topCharacters(tramo, 3);
    let indice = -1;
    // Se recorre por prioridad de carácter del TEXTO. Dentro de un mismo
    // carácter gana el lecho que lo lleva más arriba en SUS etiquetas: en
    // «Laguna de Iguaque» el silencio es secundario y el agua es lo que manda,
    // mientras que «Silencio de la sabana» es silencio y poco más. A igualdad
    // de posición decide el orden de entrada, que es el de menor uso.
    for (const caracter of dominantes) {
      const candidatos = [];
      let mejorRango = Infinity;
      for (let i = 0; i < disponibles.length; i += 1) {
        const rango = (disponibles[i].characters || []).indexOf(caracter);
        if (rango === -1) continue;
        if (rango < mejorRango) {
          mejorRango = rango;
          candidatos.length = 0;
        }
        if (rango === mejorRango) candidatos.push(i);
      }
      if (!candidatos.length) continue;
      // Entre los que empatan en rango gana el menos usado; y si también
      // empatan en uso —que es lo normal en un catálogo recién repartido— el
      // desempate lo pone el propio mito. Sin esto, los siete mitos de agua del
      // archivo recibirían los mismos tres lechos en el mismo orden, que es
      // otra forma de monotonía, sólo que a escala de archivo.
      const usoMinimo = Math.min(...candidatos.map((i) => Number(disponibles[i].usos ?? 0)));
      const empatados = candidatos.filter((i) => Number(disponibles[i].usos ?? 0) === usoMinimo);
      indice = empatados[huella(`${semilla}:${t}`) % empatados.length];
      break;
    }
    if (indice === -1) indice = 0;
    elegidos.push(disponibles[indice]);
    disponibles.splice(indice, 1);
  }
  return elegidos;
}
