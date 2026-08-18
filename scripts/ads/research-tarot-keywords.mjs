#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, ".env.local");
const OUT_DIR = path.join(ROOT, "docs", "keyword-research");
const RUN_DATE = "2026-08-11";
const TARGET_PER_PLAN = 360;

const PLAN_META = [
  [1, "Compra directa y oráculo", "1432061959", "phrase"],
  [2, "Regalos Colombia y extranjeros", "1432073026", "phrase"],
  [3, "Souvenir y objeto cultural", "1431202749", "phrase"],
  [4, "Autoconocimiento y reflexión", "1432073047", "phrase"],
  [5, "Colección diseño e ilustración", "1431867800", "phrase"],
  [6, "Mitología cultura y leyendas", "1432073068", "phrase"],
  [7, "Principiantes y guía", "1431202773", "phrase"],
  [8, "Compra local y envío", "1431865892", "phrase"],
  [9, "Regalo espiritual y místico", "1431201960", "phrase"],
  [10, "Volumen genérico broad", "1431865913", "broad"],
  [11, "Regalos por destinatario", "1432071814", "phrase"],
  [12, "Regalos para hombre", "1431205404", "phrase"],
  [13, "Regalos para mujer", "1431869960", "phrase"],
  [14, "Pareja y aniversario", "1431869258", "phrase"],
  [15, "Original y con significado", "1431205716", "phrase"],
  [16, "Souvenir por ciudad y viaje", "1431869975", "phrase"],
  [17, "Educativo y cultural", "1432067047", "phrase"],
  [18, "Afirmaciones y conversación", "1431205752", "phrase"],
  [19, "Temáticos y de autor", "1431205446", "phrase"],
  [20, "Arte y diseño colombiano", "1431866153", "phrase"],
  [21, "Escenario viable consolidado", "1431870269", "phrase"],
].map(([number, name, planId, matchType]) => ({ number, name, planId, matchType }));

const SEMRUSH_SEEDS = [
  "comprar tarot",
  "cartas tarot",
  "baraja tarot",
  "mazo tarot",
  "oraculo cartas",
  "tarot principiantes",
  "regalos para hombres",
  "regalos para mujeres",
  "regalos para pareja",
  "regalos aniversario",
  "regalos amigo secreto",
  "regalos originales",
  "regalos personalizados",
  "regalos con significado",
  "regalos colombianos",
  "regalos culturales",
  "regalos espirituales",
  "regalos misticos",
  "souvenir colombia",
  "souvenirs colombia",
  "recuerdos colombia",
  "que comprar en colombia",
  "souvenir bogota",
  "souvenir cartagena",
  "souvenir medellin",
  "autoconocimiento",
  "crecimiento personal",
  "cartas afirmaciones",
  "cartas conversacion",
  "preguntas para conocerse",
  "mitos colombianos",
  "leyendas colombianas",
  "mitologia colombiana",
  "arte colombiano",
  "diseño colombiano",
  "ilustracion colombiana",
  "cartas ilustradas",
  "barajas coleccionables",
  "tarot colombiano",
  "oraculo ilustrado",
  "baraja ilustrada",
  "regalo cultural colombia",
  "regalos para turistas",
  "regalos para extranjeros",
  "souvenirs bogota",
  "souvenirs cartagena",
  "souvenirs medellin",
  "regalo autoconocimiento",
  "juego cartas conversacion",
  "baraja de mitos",
  "cartas de mitologia",
  "tarot de autor",
  "tarot coleccionable",
  "regalo ilustrado",
  "cartas colombianas",
  "regalo hombre original",
  "regalo mujer original",
  "regalo pareja original",
];

const GLOBAL_BANNED = [
  "gratis",
  "gratuito",
  "free",
  "pdf",
  "descargar",
  "imprimir",
  "plantilla",
  "curso",
  "clases",
  "empleo",
  "trabajo",
  "consulta",
  "consultas",
  "vidente",
  "bruja",
  "amarre",
  "hechizo",
  "horoscopo",
  "lectura online",
  "lectura gratis",
  "tirada gratis",
  "si o no",
  "significado de",
  "wikipedia",
  "youtube",
  "pelicula",
  "serie",
  "spotify",
  "canva",
  "amazon prime",
  "mercado libre",
  "aliexpress",
  "temu",
  "agenda",
  "agendas",
  "caja de regalo",
  "cajas de regalo",
  "bolsa de regalo",
  "bolsas de regalo",
  "flores",
  "perfume",
  "ropa",
  "camiseta",
  "zapatos",
  "reloj",
  "gorras",
  "billetera",
  "chocolate",
  "chocolates",
  "desayuno",
  "taza",
  "mug",
  "joyas",
  "collar",
  "pulsera",
  "portarretrato",
  "libro",
  "libros",
  "niños",
  "niñas",
  "niño",
  "niña",
  "bebé",
  "radio",
  "selección colombia",
  "fútbol",
  "best souvenirs",
  "souvenir shop",
  "near me",
  "where to",
  " from ",
  "colombie",
  "empaque",
  "empaques",
  "envoltura",
  "envolturas",
  "moño",
  "moños",
  "papel de regalo",
  "papel regalo",
  "papel para regalo",
  "paquete de regalo",
  "paquetes de regalo",
  "bono de regalo",
  "bonos de regalo",
  "canasta",
  "canastas",
  "ancheta",
  "anchetas",
  "afeitado",
  "bolígrafo",
  "boligrafo",
  "cajas de madera",
  "manualidad",
  "manualidades",
  "memes",
  "dinámicas",
  "dinamicas",
  "palabras para entregar",
  "formas creativas de entregar",
  "cómo hacer",
  "como hacer",
  "cómo envolver",
  "como envolver",
  "qué pedir de regalo",
  "que pedir de regalo",
  "pedir perdón",
  "pedir perdon",
  "reconquistar",
  "ex pareja",
  "jardines del recuerdo",
  "al por mayor",
  "empresariales",
  "mezcal",
  "angelical",
  "ángeles",
  "angeles",
  "arcángel",
  "arcangel",
  "hadas",
  "vidas pasadas",
  "chakras",
  "osho",
  "cristiano",
  "ciclista",
  "batman",
  "escorpio",
  "regalos de hierro",
  "bodas de seda",
  "50 mil pesos",
  "30 mil pesos",
  "300 pesos",
  "regalo de los 5 sentidos",
  "kit de regalo",
  "kits de regalo",
  "bonos regalo",
  "bono regalo",
  "tarjeta de regalo",
  "tarjetas de regalo",
  "meme",
  "nombres con significado",
  "qué es un regalo",
  "que es un regalo",
  "qué se puede pedir de regalo",
  "que se puede pedir de regalo",
  "formas originales de entregar",
  "formas originales de dar",
  "cestas regalo",
  "caja regalo",
  "cajas regalo",
  "cajas para regalo",
  "cajas para hombres de regalo",
  "cajas de carton",
  "cajas decoradas",
  "decorar una caja",
  "empacar",
  "armar un regalo",
  "decorar un regalo",
  "regalo tejido",
  "kit para mujeres",
  "regalo robado",
  "pinterest",
  "empresarial",
  "empresa",
];

const PRODUCT_ANCHORS = [
  "tarot",
  "baraja",
  "mazo",
  "cartas",
  "oraculo",
  "regalo",
  "regalos",
  "detalle",
  "obsequio",
  "souvenir",
  "souvenirs",
  "recuerdo",
  "juego",
  "coleccion",
  "kit",
  "producto",
];

function parseEnv(text) {
  return Object.fromEntries(
    text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && line.includes("="))
      .map((line) => {
        const index = line.indexOf("=");
        const key = line.slice(0, index).trim();
        const value = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, "");
        return [key, value];
      }),
  );
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[“”"'’]/g, "")
    .replace(/[^a-z0-9ñáéíóúü\s-]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanKeyword(value) {
  return value
    .replace(/[“”]/g, '"')
    .replace(/[|;]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^[-,]+|[-,]+$/g, "");
}

function containsTerm(text, term) {
  const normalizedText = ` ${normalize(text)} `;
  const normalizedTerm = normalize(term);
  return normalizedText.includes(` ${normalizedTerm} `);
}

function isUsable(value) {
  const keyword = cleanKeyword(value);
  const normalized = normalize(keyword);
  if (!normalized || keyword.length > 80 || keyword.length < 4 || keyword.split(/\s+/).length > 10) return false;
  if (GLOBAL_BANNED.some((term) => normalized.includes(normalize(term)))) return false;
  if (normalized.includes("significado") && !normalized.includes("con significado")) return false;
  return PRODUCT_ANCHORS.some((term) => containsTerm(normalized, term));
}

function parseSemrushCsv(csv, seed) {
  if (!csv || csv.startsWith("ERROR")) return [];
  const [header, ...lines] = csv.trim().split(/\r?\n/);
  if (!header?.startsWith("Keyword;")) return [];
  return lines
    .map((line) => line.split(";"))
    .filter((columns) => columns.length >= 8)
    .map(([keyword, volume, cpc, competition, results, trends, intent, difficulty]) => ({
      keyword: cleanKeyword(keyword),
      volume: Number(volume) || 0,
      cpcUsd: Number(cpc) || 0,
      competition: Number(competition) || 0,
      results: Number(results) || 0,
      trends: trends || "",
      intent: intent || "",
      difficulty: Number(difficulty) || 0,
      seed,
      source: "semrush-co",
    }))
    .filter((row) => row.keyword);
}

async function fetchSemrushSeed(apiKey, seed) {
  const params = new URLSearchParams({
    type: "phrase_fullsearch",
    key: apiKey,
    phrase: seed,
    database: "co",
    export_columns: "Ph,Nq,Cp,Co,Nr,Td,In,Kd",
    display_limit: "250",
    display_sort: "nq_desc",
    export_decode: "1",
  });
  const response = await fetch(`https://api.semrush.com/?${params}`);
  if (!response.ok) throw new Error(`Semrush ${response.status} para ${seed}`);
  return parseSemrushCsv(await response.text(), seed);
}

async function mapWithConcurrency(items, concurrency, task) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await task(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

function candidate(keyword, source = "curated-expansion", extra = {}) {
  return { keyword: cleanKeyword(keyword), source, ...extra };
}

function phrases(parts) {
  const output = [];
  function walk(index, built) {
    if (index === parts.length) {
      output.push(candidate(built.join(" ")));
      return;
    }
    for (const value of parts[index]) walk(index + 1, [...built, value]);
  }
  walk(0, []);
  return output;
}

const products = [
  "cartas de tarot",
  "baraja de tarot",
  "mazo de tarot",
  "cartas oráculo",
  "baraja oráculo",
  "mazo oráculo",
  "tarot ilustrado",
  "oráculo ilustrado",
  "cartas simbólicas",
  "baraja temática",
];
const colombianThemes = [
  "mitos colombianos",
  "leyendas colombianas",
  "mitología colombiana",
  "folclor colombiano",
  "cultura colombiana",
  "tradición oral colombiana",
  "personajes colombianos",
  "historias colombianas",
  "patrimonio colombiano",
  "biodiversidad colombiana",
];
const cities = [
  "Bogotá",
  "Medellín",
  "Cartagena",
  "Cali",
  "Barranquilla",
  "Santa Marta",
  "Bucaramanga",
  "Pereira",
  "Manizales",
  "Armenia",
  "Villa de Leyva",
  "San Andrés",
  "Colombia",
];
const occasions = [
  "de cumpleaños",
  "de aniversario",
  "de navidad",
  "para amigo secreto",
  "de amor y amistad",
  "de graduación",
  "de despedida",
  "para una ocasión especial",
];
const qualities = [
  "original",
  "especial",
  "creativo",
  "con significado",
  "colombiano",
  "artesanal",
  "ilustrado",
  "diferente",
];

const routeDefinitions = {
  1: {
    seeds: ["comprar tarot", "cartas tarot", "baraja tarot", "mazo tarot", "oraculo cartas", "tarot colombiano", "oraculo ilustrado"],
    semrushAny: ["tarot", "baraja", "mazo", "cartas", "oraculo"],
    build: () => [
      ...phrases([["comprar", "pedir", "venta de", "precio de", "tienda de", "dónde comprar"], products, ["en Colombia", "online", "con envío", "en español", "para regalar", "de mitos colombianos"]]),
      ...phrases([products, ["de Colombia", "de mitos colombianos", "de leyendas colombianas", "con ilustraciones", "para regalar", "con guía"]]),
    ],
  },
  2: {
    seeds: ["regalos colombianos", "regalos culturales", "regalos originales", "que comprar en colombia", "regalo cultural colombia", "regalos para turistas", "regalos para extranjeros"],
    semrushAny: ["regalo", "detalle", "obsequio", "colombia", "colombiano"],
    build: () => [
      ...phrases([["regalo colombiano", "detalle colombiano", "obsequio colombiano", "regalo de Colombia", "regalo cultural colombiano"], ["para extranjero", "para turista", "para visitante", "para amigo", "para familia", "para anfitrión", "para llevar al exterior", "para alguien que vive afuera"], ["original", "con significado", "fácil de llevar", "ilustrado", "especial"]]),
      ...phrases([["regalo", "detalle", "obsequio"], colombianThemes, ["para extranjero", "para turista", "para regalar", "original"]]),
      ...phrases([["tarot colombiano", "baraja colombiana", "cartas colombianas", "oráculo colombiano"], ["para extranjero", "para turista", "para visitante", "para anfitrión", "para familia", "para llevar afuera"], ["original", "con ilustraciones"]]),
    ],
  },
  3: {
    seeds: ["souvenir colombia", "souvenirs colombia", "recuerdos colombia", "regalos culturales", "souvenirs bogota", "souvenirs cartagena", "souvenirs medellin"],
    semrushAny: ["souvenir", "recuerdo", "regalo", "colombia", "colombiano"],
    build: () => [
      ...phrases([["souvenir", "recuerdo", "regalo cultural", "objeto cultural", "detalle de viaje"], ["de Colombia", "colombiano", "de cultura colombiana", "de mitos colombianos", "de leyendas colombianas"], ["original", "ilustrado", "coleccionable", "para regalar", "fácil de llevar"]]),
      ...phrases([["souvenir", "recuerdo", "regalo"], cities, ["cultural", "original", "colombiano", "para extranjero"]]),
      ...phrases([["comprar souvenir", "tienda de souvenirs", "recuerdos típicos", "regalos colombianos"], cities.map((city) => `en ${city}`)]),
      ...phrases([["souvenir ilustrado", "recuerdo cultural", "regalo de viaje", "baraja colombiana", "cartas de Colombia"], ["para turista", "para extranjero", "para coleccionar", "con mitos", "con leyendas"]]),
      ...phrases([["baraja colombiana", "cartas colombianas", "tarot colombiano", "oráculo colombiano"], ["como souvenir", "como recuerdo", "para turista", "para viaje", "para regalar", "de colección"]]),
    ],
  },
  4: {
    seeds: ["autoconocimiento", "crecimiento personal", "cartas afirmaciones", "preguntas para conocerse", "regalo autoconocimiento"],
    semrushAny: ["autoconocimiento", "crecimiento personal", "cartas", "preguntas", "reflexion"],
    build: () => [
      ...phrases([["cartas", "baraja", "juego de cartas", "kit", "herramienta", "regalo"], ["de autoconocimiento", "para reflexión", "de crecimiento personal", "para introspección", "para conocerse", "de preguntas profundas", "para desarrollo personal", "de autoconciencia", "para propósito de vida", "para bienestar emocional"], ["para adultos", "para parejas", "para amigos", "en español", "con ilustraciones", "para regalar"]]),
      ...phrases([["cartas de autoconocimiento", "baraja de autoconocimiento", "juego de autoconocimiento", "cartas para reflexionar", "baraja de reflexión", "juego de preguntas profundas", "cartas de crecimiento personal", "regalo de autoconocimiento"], ["para pareja", "para amigos", "para adultos", "en español", "para regalar", "con ilustraciones", "con mitos colombianos", "para bienestar emocional"]]),
    ],
  },
  5: {
    seeds: ["cartas ilustradas", "barajas coleccionables", "ilustracion colombiana", "diseño colombiano", "baraja ilustrada", "tarot de autor", "tarot coleccionable"],
    semrushAny: ["cartas", "baraja", "coleccion", "ilustr", "diseño", "arte"],
    build: () => [
      ...phrases([["mazo de cartas", "tarot", "oráculo"], ["ilustrado", "artístico", "de autor", "coleccionable", "de diseño", "con arte", "edición especial", "temático"], ["de Colombia", "de mitos colombianos", "de leyendas", "para regalar", "en español", "original", "edición limitada", "con ilustraciones"]]),
      ...phrases([["baraja", "colección de cartas"], ["ilustrada", "artística", "de autor", "coleccionable", "de diseño", "con arte", "edición especial", "temática"], ["colombiana", "de mitos colombianos", "de leyendas", "para regalar", "en español", "original", "edición limitada", "con ilustraciones"]]),
      ...phrases([["cartas"], ["ilustradas", "artísticas", "de autor", "coleccionables", "de diseño", "con arte", "edición especial", "temáticas"], ["colombianas", "de mitos colombianos", "de leyendas", "para regalar", "en español", "originales", "edición limitada", "con ilustraciones"]]),
    ],
  },
  6: {
    seeds: ["mitos colombianos", "leyendas colombianas", "mitologia colombiana", "regalos culturales", "baraja de mitos", "cartas de mitologia"],
    semrushAny: ["mito", "leyenda", "mitologia", "cultura", "folclor", "colombia"],
    build: () => phrases([["cartas de", "baraja de", "juego de cartas de", "colección de", "regalo de", "oráculo de"], colombianThemes, ["para adultos", "para jóvenes", "con ilustraciones", "en español", "para regalar", "coleccionable"]]),
  },
  7: {
    seeds: ["tarot principiantes", "cartas tarot", "baraja tarot", "mazo tarot"],
    semrushAny: ["tarot", "baraja", "mazo", "cartas", "principiante", "aprender"],
    build: () => phrases([["tarot", "baraja de tarot", "mazo de tarot", "cartas de tarot", "oráculo", "cartas oráculo"], ["para principiantes", "para empezar", "fácil de aprender", "con guía", "con instrucciones", "en español", "para aprender", "primer mazo"], ["colombiano", "ilustrado", "para regalar", "con envío", "para adultos", "en Colombia", "fácil de usar", "con símbolos claros"]]),
  },
  8: {
    seeds: ["comprar tarot", "cartas tarot", "baraja tarot", "regalos colombianos"],
    semrushAny: ["comprar", "tienda", "envio", "domicilio", "tarot", "baraja", "cartas"],
    build: () => phrases([["comprar", "tienda de", "venta de", "pedir", "precio de", "envío de"], products, cities.map((city) => `en ${city}`)]),
  },
  9: {
    seeds: ["regalos espirituales", "regalos misticos", "cartas afirmaciones", "oraculo cartas", "regalo autoconocimiento", "oraculo ilustrado"],
    semrushAny: ["regalo", "espiritual", "mistico", "oraculo", "tarot", "cartas"],
    build: () => [
      ...phrases([["regalo", "detalle", "obsequio", "cartas para regalo"], ["espiritual", "místico", "simbólico", "de autoconocimiento", "de tarot", "de oráculo", "de energía", "para reflexión"], ["para mujer", "para hombre", "para pareja", "para amiga", "para cumpleaños", "original", "para novio", "para novia", "para alguien especial"]]),
      ...phrases([["baraja"], ["espiritual", "mística", "simbólica", "de autoconocimiento"], ["para regalar", "para mujer", "para hombre", "para pareja", "ilustrada"]]),
      ...phrases([["cartas"], ["espirituales", "místicas", "simbólicas", "de autoconocimiento"], ["para regalar", "para mujer", "para hombre", "para pareja", "ilustradas"]]),
      ...phrases([["mazo", "oráculo"], ["espiritual", "místico", "simbólico", "de autoconocimiento"], ["para regalar", "para mujer", "para hombre", "para pareja", "ilustrado"]]),
    ],
  },
  10: {
    seeds: ["tarot", "regalos originales", "regalos colombianos", "souvenir colombia", "autoconocimiento", "mitos colombianos", "arte colombiano"],
    semrushAny: PRODUCT_ANCHORS,
    build: () => [
      ...phrases([["tarot", "cartas tarot", "baraja tarot", "oráculo", "cartas oráculo"], ["colombiano", "ilustrado", "original", "para regalo", "mitos colombianos"]]),
      ...phrases([["regalos", "souvenir", "recuerdos", "detalles"], ["colombianos", "originales", "culturales", "para hombre", "para mujer", "para extranjeros", "con significado"]]),
      ...phrases([["regalo", "detalle", "obsequio", "souvenir"], qualities, ["para hombre", "para mujer", "para pareja", "para extranjero", "de cumpleaños", "de aniversario"]]),
      ...phrases([["cartas"], ["ilustradas", "coleccionables", "colombianas", "culturales"], ["originales", "en español", "con mitos", "con leyendas"]]),
      ...phrases([["baraja"], ["ilustrada", "coleccionable", "colombiana", "cultural"], ["original", "en español", "con mitos", "con leyendas"]]),
      ...phrases([["mazo", "juego de cartas"], ["ilustrado", "coleccionable", "colombiano", "cultural"], ["original", "en español", "con mitos", "con leyendas"]]),
      ...phrases([["tarot", "oráculo", "baraja", "cartas"], ["de mitos colombianos", "de leyendas colombianas", "cultural colombiano", "de autor", "para regalo"]]),
      ...phrases([["regalo", "detalle", "obsequio"], ["cultural colombiano", "ilustrado colombiano", "de mitos", "de leyendas", "de autor"], ["para hombre", "para mujer", "para pareja", "para extranjero"]]),
    ],
  },
  11: {
    seeds: ["regalos para hombres", "regalos para mujeres", "regalos para pareja", "regalos amigo secreto", "regalos originales", "regalo hombre original", "regalo mujer original", "regalo pareja original"],
    semrushAny: ["regalo", "detalle", "obsequio"],
    build: () => phrases([["regalo", "detalle", "obsequio", "idea de regalo", "regalo original"], ["para hombre", "para mujer", "para novio", "para novia", "para esposo", "para esposa", "para papá", "para mamá", "para hermano", "para hermana", "para amigo", "para amiga", "para jefe", "para profesora", "para extranjero", "para pareja"], ["original", "especial", "creativo", "con significado"]]),
  },
  12: {
    seeds: ["regalos para hombres", "regalos amigo secreto", "regalos originales", "regalo hombre original"],
    semrushAny: ["regalo", "detalle", "obsequio", "hombre", "novio", "esposo", "papa", "padre"],
    build: () => phrases([["regalo", "detalle", "obsequio", "idea de regalo", "regalo original"], occasions, ["para hombre", "para novio", "para esposo", "para papá", "para hermano", "para amigo", "para abuelo", "para jefe", "para hombre joven", "para hombre adulto"]]),
  },
  13: {
    seeds: ["regalos para mujeres", "regalos amigo secreto", "regalos originales", "regalo mujer original"],
    semrushAny: ["regalo", "detalle", "obsequio", "mujer", "novia", "esposa", "mama", "madre"],
    build: () => phrases([["regalo", "detalle", "obsequio", "idea de regalo", "regalo original"], occasions, ["para mujer", "para novia", "para esposa", "para mamá", "para hermana", "para amiga", "para abuela", "para jefa", "para mujer joven", "para mujer adulta"]]),
  },
  14: {
    seeds: ["regalos para pareja", "regalos aniversario", "regalos originales", "regalo pareja original"],
    semrushAny: ["regalo", "detalle", "pareja", "aniversario", "novio", "novia", "esposo", "esposa"],
    build: () => phrases([["regalo", "detalle", "obsequio", "idea de regalo", "regalo original"], ["para pareja", "para novio", "para novia", "para esposo", "para esposa", "para matrimonio"], ["de aniversario", "de cumpleaños", "de amor y amistad", "de san valentín", "para conocerse mejor", "con significado", "para compartir", "diferente", "romántico"]]),
  },
  15: {
    seeds: ["regalos originales", "regalos con significado", "regalos personalizados", "regalos culturales"],
    semrushAny: ["regalo", "detalle", "obsequio", "original", "significado", "especial", "diferente"],
    build: () => phrases([["regalo", "detalle", "obsequio", "idea de regalo", "regalo colombiano"], qualities, ["para hombre", "para mujer", "para pareja", "para amigo", "para amiga", "para extranjero", "de cumpleaños", "de aniversario", "para mamá", "para papá"]]),
  },
  16: {
    seeds: ["souvenir colombia", "souvenirs colombia", "recuerdos colombia", "que comprar en colombia", "souvenir bogota", "souvenir cartagena", "souvenir medellin", "souvenirs bogota", "souvenirs cartagena", "souvenirs medellin"],
    semrushAny: ["souvenir", "recuerdo", "regalo", "comprar", "colombia", "bogota", "cartagena", "medellin"],
    build: () => phrases([["souvenir", "recuerdo", "regalo de viaje", "detalle turístico", "regalo cultural"], cities.map((city) => `de ${city}`), ["original", "colombiano", "para extranjero", "para llevar", "ilustrado", "coleccionable"]]),
  },
  17: {
    seeds: ["mitos colombianos", "leyendas colombianas", "mitologia colombiana", "cartas ilustradas"],
    semrushAny: ["mito", "leyenda", "mitologia", "cultura", "cartas", "juego"],
    build: () => [
      ...phrases([["cartas sobre", "baraja de", "juego de cartas sobre", "material didáctico de", "recurso educativo de", "regalo educativo de"], colombianThemes, ["para colegio", "para docentes", "para estudiantes", "para jóvenes", "para aprender", "con ilustraciones"]]),
      ...phrases([["cartas educativas de", "baraja educativa de", "juego educativo de", "regalo cultural de"], colombianThemes, ["para el aula", "para docentes", "para estudiantes", "para aprender"]]),
    ],
  },
  18: {
    seeds: ["cartas afirmaciones", "cartas conversacion", "preguntas para conocerse", "autoconocimiento", "juego cartas conversacion", "regalo autoconocimiento"],
    semrushAny: ["cartas", "preguntas", "conversacion", "afirmacion", "conocerse", "reflexion"],
    build: () => phrases([["cartas", "baraja", "juego de cartas", "kit", "regalo", "mazo de cartas"], ["de afirmaciones", "de conversación", "de preguntas", "para conocerse", "para reflexión", "de preguntas profundas", "para romper el hielo", "para conectar"], ["para pareja", "para amigos", "para familia", "para adultos", "en español", "con ilustraciones", "para regalar", "colombianas"]]),
  },
  19: {
    seeds: ["barajas coleccionables", "cartas ilustradas", "cartas tarot", "mazo tarot", "tarot de autor", "tarot coleccionable", "baraja ilustrada"],
    semrushAny: ["tarot", "baraja", "mazo", "cartas", "coleccion", "ilustr"],
    build: () => [
      ...phrases([["tarot", "oráculo", "mazo de cartas"], ["temático", "de autor", "independiente", "artístico", "coleccionable", "ilustrado"], ["de mitos", "de leyendas", "de folclor", "de naturaleza", "colombiano", "latinoamericano", "en español", "de cultura colombiana", "de biodiversidad", "de historia colombiana"]]),
      ...phrases([["baraja", "colección de cartas"], ["temática", "de autor", "independiente", "artística", "coleccionable", "ilustrada"], ["de mitos", "de leyendas", "de folclor", "de naturaleza", "colombiana", "latinoamericana", "en español", "de cultura colombiana", "de biodiversidad", "de historia colombiana"]]),
      ...phrases([["cartas"], ["temáticas", "de autor", "independientes", "artísticas", "coleccionables", "ilustradas"], ["de mitos", "de leyendas", "de folclor", "de naturaleza", "colombianas", "latinoamericanas", "en español", "de cultura colombiana", "de biodiversidad", "de historia colombiana"]]),
    ],
  },
  20: {
    seeds: ["arte colombiano", "diseño colombiano", "ilustracion colombiana", "cartas ilustradas", "barajas coleccionables", "regalo ilustrado", "cartas colombianas", "baraja ilustrada"],
    semrushAny: ["arte", "diseño", "ilustr", "cartas", "baraja", "coleccion", "colombia"],
    build: () => phrases([["cartas", "baraja", "mazo", "tarot", "oráculo", "regalo", "colección"], ["de arte colombiano", "de diseño colombiano", "con ilustración colombiana", "con ilustraciones de artistas", "de autor", "coleccionable", "con diseño gráfico", "editorial"], ["original", "para regalar", "edición especial", "cultural", "con mitos", "con leyendas", "en español"]]),
  },
};

const SHORT_KEYWORDS_BY_PLAN = {
  1: ["comprar tarot", "tarot colombiano", "tarot ilustrado", "oráculo colombiano", "oráculo ilustrado", "baraja tarot", "mazo tarot", "cartas tarot", "comprar oráculo", "comprar baraja"],
  2: ["regalo colombiano", "regalos colombianos", "regalo cultural", "souvenir colombiano", "regalo turista", "regalo extranjero", "detalle colombiano", "obsequio colombiano", "cartas colombianas", "tarot colombiano"],
  3: ["souvenir Colombia", "souvenirs Colombia", "recuerdo Colombia", "regalo cultural", "souvenir Bogotá", "souvenir Cartagena", "souvenir Medellín", "recuerdo colombiano", "objeto cultural", "cartas Colombia"],
  4: ["cartas autoconocimiento", "baraja reflexión", "juego introspección", "regalo autoconocimiento", "cartas reflexión", "cartas introspección", "juego autoconocimiento", "cartas bienestar", "baraja autoconocimiento", "juego reflexión"],
  5: ["cartas ilustradas", "baraja ilustrada", "tarot ilustrado", "oráculo ilustrado", "tarot coleccionable", "baraja coleccionable", "cartas colombianas", "tarot autor", "cartas artísticas", "baraja artística"],
  6: ["cartas mitos", "baraja mitos", "cartas leyendas", "baraja leyendas", "juego mitología", "regalo cultural", "oráculo mitológico", "cartas folclor", "baraja colombiana", "oráculo colombiano"],
  7: ["tarot principiantes", "tarot con guía", "tarot español", "primer tarot", "mazo principiantes", "baraja principiantes", "cartas principiantes", "oráculo principiantes", "aprender tarot", "tarot fácil"],
  8: ["comprar tarot", "tienda tarot", "tarot Bogotá", "tarot Medellín", "tarot Colombia", "comprar oráculo", "tienda oráculos", "envío tarot", "precio tarot", "tarot domicilio"],
  9: ["regalo espiritual", "regalo místico", "cartas espirituales", "cartas místicas", "oráculo espiritual", "tarot espiritual", "baraja espiritual", "regalo simbólico", "cartas simbólicas", "regalo autoconocimiento"],
  10: ["tarot colombiano", "tarot ilustrado", "cartas tarot", "baraja tarot", "oráculo colombiano", "regalo colombiano", "regalo original", "souvenir Colombia", "cartas ilustradas", "baraja ilustrada"],
  11: ["regalo hombre", "regalo mujer", "regalo pareja", "regalo novio", "regalo novia", "regalo amigo", "regalo amiga", "regalo jefe", "regalo mamá", "regalo papá"],
  12: ["regalo hombre", "regalo novio", "regalo esposo", "regalo papá", "regalo hermano", "regalo amigo", "regalo abuelo", "regalo jefe", "detalle hombre", "obsequio hombre"],
  13: ["regalo mujer", "regalo novia", "regalo esposa", "regalo mamá", "regalo hermana", "regalo amiga", "regalo abuela", "regalo jefa", "detalle mujer", "obsequio mujer"],
  14: ["regalo pareja", "regalo novio", "regalo novia", "regalo esposo", "regalo esposa", "regalo aniversario", "detalle pareja", "obsequio pareja", "regalo romántico", "regalo matrimonio"],
  15: ["regalo original", "regalo especial", "regalo creativo", "regalo significativo", "detalle original", "obsequio original", "regalo colombiano", "regalo artesanal", "regalo ilustrado", "regalo diferente"],
  16: ["souvenir Bogotá", "souvenir Medellín", "souvenir Cartagena", "souvenir Cali", "souvenir Colombia", "recuerdo Bogotá", "recuerdo Colombia", "regalo Bogotá", "regalo Colombia", "souvenir colombiano"],
  17: ["cartas mitos", "baraja mitos", "cartas leyendas", "baraja leyendas", "juego mitología", "juego cultural", "cartas educativas", "baraja educativa", "regalo educativo", "regalo cultural"],
  18: ["cartas afirmaciones", "cartas conversación", "juego preguntas", "baraja reflexión", "cartas reflexión", "cartas conexión", "juego conversación", "regalo conversación", "cartas colombianas", "juego autoconocimiento"],
  19: ["tarot temático", "tarot autor", "tarot artístico", "tarot coleccionable", "baraja temática", "baraja ilustrada", "cartas temáticas", "cartas artísticas", "oráculo temático", "mazo ilustrado"],
  20: ["arte colombiano", "diseño colombiano", "cartas ilustradas", "baraja ilustrada", "tarot colombiano", "oráculo colombiano", "regalo ilustrado", "cartas colombianas", "baraja colombiana", "tarot autor"],
};

const LONG_KEYWORDS_BY_PLAN = {
  10: [
    "comprar tarot de mitos colombianos para regalar",
    "baraja ilustrada de leyendas colombianas para adultos",
    "cartas de tarot colombiano con guía en español",
    "regalo cultural colombiano con mitos para extranjero",
    "juego de cartas de mitología colombiana para regalar",
    "oráculo ilustrado de leyendas colombianas para principiantes",
    "mazo coleccionable de mitos colombianos para adultos",
    "tarot de autor colombiano con ilustraciones para regalar",
    "baraja cultural colombiana de edición especial para regalo",
    "cartas ilustradas de folclor colombiano para coleccionar",
  ],
  15: [
    "regalo original con significado para hombre de cumpleaños",
    "detalle colombiano con significado para mujer de cumpleaños",
    "obsequio creativo con significado para pareja de aniversario",
    "regalo ilustrado colombiano para alguien que vive afuera",
    "detalle cultural colombiano con significado para amigo especial",
    "obsequio artesanal colombiano para mujer en su cumpleaños",
    "regalo diferente con significado para hombre en Colombia",
    "detalle original ilustrado para pareja de amor y amistad",
    "regalo creativo colombiano para mamá en una ocasión especial",
    "obsequio cultural con significado para papá de cumpleaños",
  ],
};

const semrushRules = {
  1: {
    groups: [["tarot", "baraja", "mazo", "cartas", "oráculo"], ["comprar", "compra", "precio", "venta", "tienda", "dónde", "donde", "pedir"]],
    exclude: ["significado", "lectura", "tirada", "marsella", "egipcio", "rider", "waite", "española", "amor", "futuro"],
  },
  2: {
    groups: [["regalo", "detalle", "obsequio", "souvenir", "recuerdo"], ["colombia", "colombiano", "colombiana", "extranjero", "turista"]],
  },
  3: { groups: [["souvenir", "souvenirs", "recuerdo", "recuerdos"], ["colombia", "colombiano", "colombiana", "bogotá", "medellín", "cartagena", "cali"]] },
  4: { groups: [["cartas", "baraja", "mazo", "juego", "kit", "regalo"], ["autoconocimiento", "crecimiento personal", "conocerse", "reflexión", "preguntas"]] },
  5: { groups: [["cartas", "baraja", "mazo", "tarot", "oráculo", "colección"], ["ilustrada", "ilustradas", "coleccionable", "diseño", "arte"]] },
  6: { groups: [["cartas", "baraja", "mazo", "juego", "regalo", "oráculo"], ["mito", "mitos", "leyenda", "leyendas", "mitología", "cultura", "folclor"]] },
  7: {
    groups: [["tarot", "baraja", "mazo", "cartas", "oráculo"], ["principiante", "principiantes", "aprender", "guía", "instrucciones", "empezar"]],
    exclude: ["gratis", "lectura", "tirada", "marsella", "egipcio", "rider", "waite", "amor", "futuro"],
  },
  8: {
    groups: [["tarot", "baraja", "mazo", "cartas", "oráculo"], ["comprar", "venta", "tienda", "envío", "domicilio", "precio"]],
    exclude: ["lectura", "tirada", "marsella", "egipcio", "rider", "waite", "amor", "futuro"],
  },
  9: { groups: [["regalo", "regalos", "detalle", "obsequio"], ["espiritual", "místico", "mística", "oráculo", "tarot", "afirmaciones"]], exclude: ["tirada", "lectura"] },
  10: { groups: [["tarot", "baraja", "mazo", "cartas", "oráculo", "regalo", "detalle", "souvenir", "recuerdo"]], exclude: ["lectura", "tirada", "marsella", "egipcio", "rider", "waite"] },
  11: { groups: [["regalo", "regalos", "detalle", "obsequio"]] },
  12: { groups: [["regalo", "regalos", "detalle", "obsequio"], ["hombre", "hombres", "novio", "esposo", "papá", "padre", "hermano", "amigo", "abuelo", "jefe"]], exclude: ["mujer", "mujeres", "novia", "esposa", "mamá", "madre"] },
  13: { groups: [["regalo", "regalos", "detalle", "obsequio"], ["mujer", "mujeres", "novia", "esposa", "mamá", "madre", "hermana", "amiga", "abuela", "jefa"]], exclude: ["hombre", "hombres", "novio", "esposo", "papá", "padre"] },
  14: { groups: [["regalo", "regalos", "detalle", "obsequio"], ["pareja", "aniversario", "novio", "novia", "esposo", "esposa", "matrimonio", "boda"]] },
  15: { groups: [["regalo", "regalos", "detalle", "obsequio"], ["original", "originales", "significado", "especial", "diferente", "creativo", "personalizado"]] },
  16: {
    groups: [["souvenir", "souvenirs", "recuerdo", "recuerdos", "regalo"], ["colombia", "colombiano", "colombiana", "bogotá", "medellín", "cartagena", "cali"]],
    exclude: ["corporativo", "publicitario", "personalizado", "argentino"],
  },
  17: { groups: [["cartas", "baraja", "mazo", "juego", "material", "recurso", "regalo"], ["mito", "mitos", "leyenda", "leyendas", "mitología", "cultura", "folclor"]] },
  18: { groups: [["cartas", "baraja", "mazo", "juego", "kit", "regalo"], ["afirmación", "afirmaciones", "conversación", "preguntas", "conocerse", "reflexión"]] },
  19: { groups: [["tarot", "oráculo", "baraja", "mazo", "cartas", "colección"], ["temático", "autor", "independiente", "artístico", "coleccionable", "ilustrado", "mitos", "leyendas", "folclor", "colombiano"]], exclude: ["marsella", "egipcio", "rider", "waite", "amor", "futuro", "lectura", "tirada"] },
  20: { groups: [["cartas", "baraja", "mazo", "tarot", "oráculo", "regalo", "colección"], ["arte", "diseño", "ilustración", "ilustrada", "ilustradas", "autor", "coleccionable", "colombia", "colombiano"]] },
};

const trends = {
  6: ["cartas del mito el jinete negro", "baraja del jinete negro", "cartas de la madre vieja", "cartas de la cabellona", "cartas de la mano peluda", "cartas de la mancarita", "cartas de personajes femeninos de la mitología colombiana"],
  11: ["ideas de regalo para amigo secreto hombre", "regalo personalizado para hombre", "idea de regalo para mujer", "kit de regalo para mujer", "regalos unisex originales y baratos"],
  12: ["ideas de regalo para amigo secreto hombre", "regalo para adolescente hombre", "regalo personalizado para hombre"],
  13: ["idea de regalo para mujer", "regalos para el día de la mujer", "regalo de san valentín para mujer", "kit de regalo para mujer"],
  14: ["regalo de san valentín para mujer", "regalos de aniversario para pareja"],
  15: ["regalos para empleados originales", "regalos para el día del maestro originales", "regalos día de la madre originales", "regalos unisex originales y baratos"],
  16: ["souvenirs", "souvenirs colombia", "regalos colombia"],
};

function semrushScore(row) {
  const trendValues = row.trends.split(",").map(Number).filter(Number.isFinite);
  const recent = trendValues.slice(-3);
  const recentAverage = recent.length ? recent.reduce((sum, value) => sum + value, 0) / recent.length : 0;
  const intentBonus = /(^|,)0(,|$)|(^|,)3(,|$)/.test(row.intent) ? 3 : 0;
  return Math.log10(row.volume + 1) * 8 + row.competition * 3 + recentAverage * 2 + intentBonus;
}

function routeAccepts(row, definition, planNumber) {
  const normalized = normalize(row.keyword);
  if (row.volume <= 0) return false;
  if (!isUsable(row.keyword)) return false;
  const rules = semrushRules[planNumber];
  if (rules?.exclude?.some((term) => normalized.includes(normalize(term)))) return false;
  if (rules?.groups && !rules.groups.every((group) => group.some((term) => containsTerm(normalized, term)))) return false;
  return definition.semrushAny.some((term) => containsTerm(normalized, term));
}

function dedupeAndRank(rows) {
  const best = new Map();
  for (const row of rows) {
    const normalized = normalize(row.keyword);
    if (!normalized) continue;
    const score = row.source === "semrush-co" ? semrushScore(row) : row.source === "google-trends-co" ? 16 : 10;
    const existing = best.get(normalized);
    if (!existing || score > existing.score) best.set(normalized, { ...row, score });
  }
  return [...best.values()].sort((a, b) => b.score - a.score || a.keyword.localeCompare(b.keyword, "es"));
}

function selectPlanRows(definition, semrushBySeed, trendKeywords = [], planNumber) {
  const semrushRows = definition.seeds
    .flatMap((seed) => semrushBySeed.get(seed) || [])
    .filter((row) => routeAccepts(row, definition, planNumber));
  const shortRows = (SHORT_KEYWORDS_BY_PLAN[planNumber] || []).map((keyword) => candidate(keyword));
  const longRows = (LONG_KEYWORDS_BY_PLAN[planNumber] || []).map((keyword) => candidate(keyword));
  const curatedRows = [...shortRows, ...longRows, ...definition.build()].filter((row) => isUsable(row.keyword));
  const trendsRows = trendKeywords.filter(isUsable).map((keyword) => candidate(keyword, "google-trends-co"));
  const semrushSelected = dedupeAndRank(semrushRows).slice(0, 160);
  const otherSelected = dedupeAndRank([...trendsRows, ...curatedRows]);
  const ranked = dedupeAndRank([...semrushSelected, ...otherSelected]);
  const selected = new Map();
  const lengthClass = (keyword) => {
    const words = keyword.trim().split(/\s+/).length;
    return words <= 3 ? "short" : words <= 6 ? "medium" : "long";
  };
  for (const className of ["short", "medium", "long"]) {
    for (const row of ranked.filter((item) => lengthClass(item.keyword) === className).slice(0, 10)) {
      selected.set(normalize(row.keyword), row);
    }
  }
  for (const row of ranked) {
    if (selected.size >= TARGET_PER_PLAN) break;
    selected.set(normalize(row.keyword), row);
  }
  return [...selected.values()];
}

function csvCell(value) {
  const text = value == null ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

async function main() {
  const env = parseEnv(await readFile(ENV_PATH, "utf8"));
  const apiKey = env.SEMRUSH_API_KEY;
  if (!apiKey) throw new Error("Falta SEMRUSH_API_KEY en .env.local");

  await mkdir(OUT_DIR, { recursive: true });
  const semrushCachePath = path.join(OUT_DIR, `semrush-co-keywords-${RUN_DATE}.json`);
  let cachedSeeds = {};
  try {
    cachedSeeds = JSON.parse(await readFile(semrushCachePath, "utf8")).seeds || {};
  } catch {
    cachedSeeds = {};
  }
  const batches = await mapWithConcurrency(SEMRUSH_SEEDS, 5, async (seed) => {
    if (Array.isArray(cachedSeeds[seed])) return [seed, cachedSeeds[seed]];
    try {
      return [seed, await fetchSemrushSeed(apiKey, seed)];
    } catch (error) {
      console.warn(`Aviso: ${error.message}`);
      return [seed, []];
    }
  });
  const semrushBySeed = new Map(batches);

  const outputPlans = [];
  for (const meta of PLAN_META.filter((plan) => plan.number < 21)) {
    const definition = routeDefinitions[meta.number];
    const rows = selectPlanRows(definition, semrushBySeed, trends[meta.number] || [], meta.number);
    if (rows.length < TARGET_PER_PLAN) {
      throw new Error(`Plan ${meta.number} quedó con ${rows.length} términos; mínimo requerido ${TARGET_PER_PLAN}`);
    }
    outputPlans.push({ ...meta, keywords: rows });
  }

  const consolidationOrder = [11, 12, 13, 2, 3, 16, 15, 14, 9, 8, 1];
  const consolidatedMap = new Map();
  const addConsolidated = (row, number) => {
    const key = normalize(row.keyword);
    if (!consolidatedMap.has(key)) consolidatedMap.set(key, { ...row, source: `consolidated-plan-${number}` });
  };
  for (const number of consolidationOrder) {
    const plan = outputPlans.find((item) => item.number === number);
    const sampleSize = 30;
    for (let index = 0; index < sampleSize; index += 1) {
      const offset = Math.floor((index * (plan.keywords.length - 1)) / (sampleSize - 1));
      addConsolidated(plan.keywords[offset], number);
    }
  }
  const cursors = new Map(consolidationOrder.map((number) => [number, 0]));
  while (consolidatedMap.size < TARGET_PER_PLAN) {
    let addedThisRound = 0;
    for (const number of consolidationOrder) {
      const plan = outputPlans.find((item) => item.number === number);
      let cursor = cursors.get(number);
      const sizeBefore = consolidatedMap.size;
      while (cursor < plan.keywords.length && consolidatedMap.size === sizeBefore) {
        addConsolidated(plan.keywords[cursor], number);
        cursor += 1;
      }
      cursors.set(number, cursor);
      if (consolidatedMap.size > sizeBefore) addedThisRound += 1;
      if (consolidatedMap.size >= TARGET_PER_PLAN) break;
    }
    if (!addedThisRound) break;
  }
  const consolidated = [...consolidatedMap.values()].slice(0, TARGET_PER_PLAN);
  outputPlans.push({ ...PLAN_META.find((plan) => plan.number === 21), keywords: consolidated });

  const rawSemrush = Object.fromEntries(
    [...semrushBySeed.entries()].map(([seed, rows]) => [seed, rows]),
  );
  await writeFile(
    semrushCachePath,
    `${JSON.stringify({ generatedAt: new Date().toISOString(), database: "co", seeds: rawSemrush }, null, 2)}\n`,
  );

  const artifact = {
    generatedAt: new Date().toISOString(),
    country: "Colombia",
    semrushDatabase: "co",
    googleTrendsWindow: "últimos 5 años",
    targetPerPlan: TARGET_PER_PLAN,
    plans: outputPlans,
  };
  await writeFile(
    path.join(OUT_DIR, `tarot-plan-keywords-${RUN_DATE}.json`),
    `${JSON.stringify(artifact, null, 2)}\n`,
  );

  const csvRows = [[
    "plan_number",
    "plan_name",
    "plan_id",
    "match_type",
    "keyword",
    "source",
    "semrush_seed",
    "volume_co",
    "cpc_usd",
    "competition",
    "intent",
    "trend_12m",
  ]];
  for (const plan of outputPlans) {
    for (const row of plan.keywords) {
      csvRows.push([
        plan.number,
        plan.name,
        plan.planId,
        plan.matchType,
        row.keyword,
        row.source,
        row.seed || "",
        row.volume ?? "",
        row.cpcUsd ?? "",
        row.competition ?? "",
        row.intent ?? "",
        row.trends ?? "",
      ]);
    }
  }
  await writeFile(
    path.join(OUT_DIR, `tarot-plan-keywords-${RUN_DATE}.csv`),
    `${csvRows.map((row) => row.map(csvCell).join(",")).join("\n")}\n`,
  );

  const matchTypes = ["broad", "phrase", "exact"];
  const mixedPlans = outputPlans.map((plan) => ({
    ...plan,
    rootCount: plan.keywords.length,
    keywords: plan.keywords.flatMap((row) => {
      const wordCount = row.keyword.trim().split(/\s+/).length;
      const lengthClass = wordCount <= 3 ? "short" : wordCount <= 6 ? "medium" : "long";
      return matchTypes.map((matchType) => ({
        ...row,
        matchType,
        wordCount,
        lengthClass,
        formattedKeyword:
          matchType === "broad"
            ? row.keyword
            : matchType === "phrase"
              ? `"${row.keyword.replaceAll('"', "")}"`
              : `[${row.keyword.replaceAll("[", "").replaceAll("]", "")}]`,
      }));
    }),
  }));
  await writeFile(
    path.join(OUT_DIR, `tarot-plan-keywords-mixed-${RUN_DATE}.json`),
    `${JSON.stringify({ ...artifact, targetMatchedKeywordsPerPlan: TARGET_PER_PLAN * 3, plans: mixedPlans }, null, 2)}\n`,
  );

  const mixedCsvRows = [[
    "plan_number",
    "plan_name",
    "plan_id",
    "keyword_root",
    "formatted_keyword",
    "match_type",
    "length_class",
    "word_count",
    "source",
    "semrush_seed",
    "volume_co",
    "cpc_usd",
    "competition",
    "intent",
  ]];
  for (const plan of mixedPlans) {
    for (const row of plan.keywords) {
      mixedCsvRows.push([
        plan.number,
        plan.name,
        plan.planId,
        row.keyword,
        row.formattedKeyword,
        row.matchType,
        row.lengthClass,
        row.wordCount,
        row.source,
        row.seed || "",
        row.volume ?? "",
        row.cpcUsd ?? "",
        row.competition ?? "",
        row.intent ?? "",
      ]);
    }
  }
  await writeFile(
    path.join(OUT_DIR, `tarot-plan-keywords-mixed-${RUN_DATE}.csv`),
    `${mixedCsvRows.map((row) => row.map(csvCell).join(",")).join("\n")}\n`,
  );

  const summary = outputPlans.map((plan) => ({
    plan: plan.number,
    name: plan.name,
    keywords: plan.keywords.length,
    semrush: plan.keywords.filter((row) => row.source === "semrush-co").length,
    trends: plan.keywords.filter((row) => row.source === "google-trends-co").length,
    curated: plan.keywords.filter((row) => row.source === "curated-expansion").length,
  }));
  console.table(summary);
}

await main();
