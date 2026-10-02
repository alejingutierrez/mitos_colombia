#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "docs", "keyword-research");
const ENV_PATH = path.join(ROOT, ".env.local");
const CURRENT_PATH = path.join(OUT_DIR, "tarot-plan-keywords-2026-08-11.json");
const OUT_PATH = path.join(OUT_DIR, "tarot-intent-audit-v2-2026-08-11.json");
const PAYLOAD_DIR = path.join(OUT_DIR, "keyword-plan-v2-payloads");

const COMPETITORS = {
  tarotCriollo: "https://www.grixoa.co/es/products/tarot-criollo",
  magasIlustradas: "https://www.munn.com.co/products/kit-tarot-magas-ilustradas",
  diosasMitologicas: "https://www.munn.com.co/products/oraculo-diosas-mitologicas",
  tarotArtistas: "https://www.munn.com.co/collections/best-selling-products/products/tarot-de-artistas",
  napoTarot: "https://www.tarot.nl/es/producto/napo-tarot",
  mitosColombianos: "https://www.panamericanaeditorial.com.co/mitos-y-leyendas-colombianos-644702/p",
};

const CONFIG = [
  [1, "Compra directa y oráculo", ["comprar tarot colombiano", "tarot colombiano", "tarot ilustrado con guía"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["comprar", "precio", "venta", "tienda", "pedir", "envío", "domicilio"]], ["tarotCriollo", "magasIlustradas"]],
  [2, "Regalos Colombia y extranjeros", ["tarot colombiano para regalar", "regalo cultural colombiano", "baraja colombiana regalo"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["regalo", "detalle", "obsequio", "para regalar"], ["colombia", "colombiano", "cultural", "extranjero", "turista", "exterior"]], ["tarotCriollo", "napoTarot"]],
  [3, "Souvenir y objeto cultural", ["baraja colombiana souvenir", "tarot cultura colombiana", "souvenir cultural colombiano"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["souvenir", "recuerdo", "cultural", "colombia", "colombiano"]], ["tarotCriollo", "mitosColombianos"]],
  [4, "Autoconocimiento y reflexión", ["tarot autoconocimiento", "oráculo introspección", "tarot para reflexionar"], [["tarot", "oráculo", "baraja de tarot", "mazo de tarot"], ["autoconocimiento", "introspección", "reflexión", "crecimiento personal", "conciencia", "propósito"]], ["tarotArtistas", "magasIlustradas"]],
  [5, "Colección diseño e ilustración", ["tarot ilustrado", "baraja de autor", "tarot coleccionable"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["ilustrado", "ilustrada", "arte", "artístico", "artística", "autor", "coleccionable", "diseño", "edición"]], ["tarotArtistas", "napoTarot"]],
  [6, "Mitología cultura y leyendas", ["tarot mitológico", "baraja mitología", "oráculo de mitos"], [["tarot", "oráculo", "baraja", "mazo"], ["mito", "leyenda", "mitología", "folclor", "cultura colombiana"]], ["diosasMitologicas", "napoTarot", "mitosColombianos"]],
  [7, "Principiantes y guía", ["tarot para principiantes", "tarot con guía", "baraja tarot para empezar"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["principiante", "aprender", "guía", "manual", "instrucciones", "empezar", "fácil"]], ["magasIlustradas", "napoTarot"]],
  [8, "Compra local y envío", ["comprar tarot colombia", "tienda tarot bogotá", "tarot envío colombia"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["comprar", "venta", "tienda", "envío", "domicilio", "precio"], ["colombia", "bogotá", "medellín", "cali", "cartagena", "barranquilla", "online"]], ["tarotCriollo", "magasIlustradas"]],
  [9, "Regalo espiritual y místico", ["tarot para regalar", "regalo espiritual tarot", "oráculo espiritual regalo"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["regalo", "para regalar", "espiritual", "místico", "simbólico", "introspección"]], ["diosasMitologicas", "tarotArtistas"]],
  [10, "Volumen genérico broad", ["tarot colombiano", "baraja ilustrada", "oráculo mitológico"], [["tarot", "oráculo", "baraja", "mazo", "cartas"]], ["tarotCriollo", "magasIlustradas", "diosasMitologicas", "tarotArtistas", "napoTarot"]],
  [11, "Regalos por destinatario", ["tarot para regalar", "baraja regalo original", "oráculo para regalar"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["regalo", "para regalar", "obsequio"], ["hombre", "mujer", "pareja", "novio", "novia", "esposo", "esposa", "mamá", "papá", "amigo", "amiga"]], ["magasIlustradas", "tarotArtistas"]],
  [12, "Regalos para hombre", ["tarot para hombre regalo", "baraja regalo hombre", "regalo espiritual hombre tarot"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["regalo", "para regalar", "obsequio"], ["hombre", "novio", "esposo", "papá", "padre", "hermano", "amigo", "abuelo", "jefe"]], ["tarotCriollo", "tarotArtistas"]],
  [13, "Regalos para mujer", ["tarot para mujer regalo", "oráculo para mujer regalo", "regalo espiritual mujer tarot"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["regalo", "para regalar", "obsequio"], ["mujer", "novia", "esposa", "mamá", "madre", "hermana", "amiga", "abuela", "jefa"]], ["magasIlustradas", "diosasMitologicas"]],
  [14, "Pareja y aniversario", ["tarot para parejas", "baraja regalo aniversario", "oráculo para pareja"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["pareja", "novio", "novia", "esposo", "esposa", "aniversario", "matrimonio", "amor y amistad"]], ["magasIlustradas", "tarotArtistas"]],
  [15, "Original y con significado", ["tarot regalo original", "baraja con significado", "regalo cultural tarot"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["regalo", "para regalar", "original", "significado", "especial", "diferente", "cultural"]], ["tarotCriollo", "tarotArtistas", "napoTarot"]],
  [16, "Souvenir por ciudad y viaje", ["baraja colombiana souvenir", "tarot colombiano bogotá", "souvenir cultural bogotá"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["souvenir", "recuerdo", "cultural", "colombia", "colombiano"], ["bogotá", "medellín", "cartagena", "cali", "barranquilla", "colombia", "viaje", "turista"]], ["tarotCriollo", "mitosColombianos"]],
  [17, "Educativo y cultural", ["tarot educativo mitología", "baraja cultural colombiana", "cartas educativas mitos colombianos"], [["tarot", "oráculo", "baraja", "mazo"], ["educativo", "aprender", "cultural", "mito", "leyenda", "mitología", "folclor"]], ["mitosColombianos", "napoTarot"]],
  [18, "Afirmaciones y conversación", ["tarot para reflexionar", "oráculo de reflexión", "tarot preguntas introspección"], [["tarot", "oráculo", "baraja de tarot", "mazo de tarot"], ["reflexión", "introspección", "preguntas", "conversación", "conectar", "autoconocimiento"]], ["magasIlustradas", "tarotArtistas"]],
  [19, "Temáticos y de autor", ["tarot de autor", "tarot temático", "baraja independiente ilustrada"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["autor", "temático", "artístico", "independiente", "coleccionable", "ilustrado", "mitos", "leyendas"]], ["tarotArtistas", "napoTarot", "tarotCriollo"]],
  [20, "Arte y diseño colombiano", ["tarot arte colombiano", "baraja ilustrada colombiana", "tarot diseño colombiano"], [["tarot", "oráculo", "baraja", "mazo", "cartas"], ["arte", "diseño", "ilustración", "ilustrado", "artista", "autor"], ["colombia", "colombiano", "colombiana", "mitos", "leyendas", "cultural"]], ["tarotArtistas", "tarotCriollo", "napoTarot"]],
].map(([number, name, seeds, groups, competitorKeys]) => ({ number, name, seeds, groups, competitorKeys }));

const GLOBAL_EXCLUDES = [
  "gratis", "gratuito", "free", "pdf", "descargar", "imprimir", "plantilla", "curso", "clases",
  "consulta", "consultas", "vidente", "bruja", "amarre", "hechizo", "horóscopo", "horoscopo",
  "lectura gratis", "tirada gratis", "sí o no", "si o no", "significado de", "wikipedia", "youtube",
  "mercado libre", "amazon", "aliexpress", "temu", "personalizado", "personalizada", "manualidad",
  "flores", "perfume", "ropa", "camiseta", "zapatos", "reloj", "billetera", "chocolate", "desayuno",
  "taza", "mug", "joyas", "collar", "pulsera", "libro de mitos", "para niños", "para niñas",
  "tarot criollo", "grixoa", "magas ilustradas", "münn", "munn", "napo tarot", "diosas mitológicas",
  "diosas mitologicas", "tarot de artistas", "rider waite", "marsella", "egipcio", "lenormand",
  "tarotista", "tarotistas", "astróloga", "astrologa", "astrólogas", "astrologas", "actor colombiano",
  "exesposo", "ex esposo", "infiel", "engaña", "engana", "engaño", "engano", "vuelve tu ex",
  "conseguir pareja", "encontrar pareja", "para que su pareja vuelva", "saber todo de la pareja",
  "tirada de tarot", "tiradas de tarot", "leer el tarot", "lectura del tarot", "leida del tarot",
  "consulta de tarot", "consultas de tarot", "predicción", "prediccion", "adivinación", "adivinacion",
  "oráculo de delfos", "oraculo de delfos", "oráculo de dodona", "oraculo de dodona", "rey edipo",
  "prometeo", "mito griego", "mitología griega", "mitologia griega", "osho", "arthur edward",
  "clave ilustrada", "1976", "autor de los dibujos", "dibujos del tarot", "ilustrador español",
  "futbol", "fútbol", "unbox", "resumen", "resume", "historia del tarot", "baraja española",
  "carta astral", "signo zodiacal", "signos zodiacales", "cómo leer", "como leer", "pasos para",
  "mejores consejos", "canal hola tv", "el colombiano tarot", "tarot el colombiano", "druuna",
  "good tarot", "lover's path", "cabalistico", "cabalístico", "cosmico", "cósmico",
  "ayuda del tarot", "recomendado", "recomendada", "juego", "juegos", "as de copas", "seis de paus",
  "cartomancia", "cerca de mi", "cerca de mí", "por signo", "ritual", "rituales", "ángeles", "angeles",
  "leer cartas", "para leer las cartas", "lectura de cartas",
];

const GLOBAL_NEGATIVE_PHRASES = [
  "gratis", "gratuito", "consulta de tarot", "lectura de cartas", "lectura del tarot",
  "tirada de tarot", "tarotista", "cartomancia", "baraja española", "rider waite", "tarot de marsella",
  "horóscopo", "horoscopo", "carta astral", "amarre", "hechizo", "ritual", "por signo",
  "cerca de mi", "cerca de mí", "juego de preguntas", "pdf", "descargar", "imprimir",
  "curso de tarot", "clases de tarot", "cómo leer tarot", "como leer tarot", "significado de",
  "wikipedia", "youtube", "para niños", "para niñas", "oráculo de delfos", "oraculo de delfos",
];

const COMPETITOR_DERIVED = [
  "tarot inspirado en cultura colombiana",
  "arcanos colombianos ilustrados",
  "tarot con caja premium",
  "tarot con detalles dorados",
  "baraja de tarot con cuadernillo",
  "tarot con guía de lectura",
  "kit de tarot con guía",
  "tarot de 78 cartas ilustradas",
  "baraja de 78 cartas en español",
  "tarot moderno ilustrado",
  "tarot fácil de interpretar",
  "tarot para aprender con imágenes",
  "oráculo inspirado en mitología",
  "baraja de mitos y arquetipos",
  "tarot de cultura latinoamericana",
  "tarot de mitología latinoamericana",
  "tarot cultural sudamericano",
  "baraja cultural de colección",
  "tarot creado por artistas colombianos",
  "baraja con ilustración colombiana",
  "tarot como herramienta de introspección",
  "tarot para consultas diarias",
  "tarot original directamente del autor",
  "baraja con acabado profesional",
  "tarot cultural para regalar",
  "baraja ilustrada para regalo especial",
];

const GOOGLE_TRENDS_OBSERVED = [
  "cartas tarot comprar", "tarot cartas", "cartas de tarot comprar",
  "cartas de tarot", "cartas del tarot comprar",
].map((keyword) => ({ keyword, source: "google-trends-co-browser" }));

const GOOGLE_ADS_URL_OBSERVED = [
  "tarot de arcanos mayores colombianos",
  "baraja de 22 arcanos mayores ilustrados",
  "cartas de arcanos mayores colombianos",
  "oráculo de arcanos y arquetipos colombianos",
  "baraja de arcanos colombianos con guía",
].map((keyword) => ({ keyword, source: "google-ads-url-ideas" }));

const PRODUCT_BASES = [
  "tarot", "baraja de tarot", "mazo de tarot", "cartas de tarot",
  "oráculo", "baraja oráculo", "mazo oráculo", "baraja ilustrada",
];

const PLAN_TOPICS = {
  1: ["para comprar", "a la venta", "precio", "tienda online", "con envío", "envío en Colombia", "para pedir online", "disponible en Colombia"],
  2: ["colombiano para regalar", "cultural colombiano", "para extranjero", "para turista", "recuerdo de Colombia", "regalo de Colombia", "colombiano para llevar al exterior", "cultural para anfitrión"],
  3: ["souvenir colombiano", "recuerdo cultural", "objeto cultural colombiano", "inspirado en Colombia", "de mitos colombianos", "de cultura colombiana", "coleccionable colombiano", "para recordar Colombia"],
  4: ["para autoconocimiento", "para introspección", "para reflexión", "de crecimiento personal", "para conciencia personal", "para explorar arquetipos", "para descubrir símbolos", "para conectar con historias"],
  5: ["ilustrado", "de autor", "coleccionable", "artístico", "de diseño", "edición ilustrada", "creado por artistas", "con ilustraciones originales"],
  6: ["mitológico", "de mitos colombianos", "de leyendas colombianas", "de folclor colombiano", "de mitología colombiana", "de arquetipos colombianos", "inspirado en tradición oral", "de cultura latinoamericana"],
  7: ["para principiantes", "con guía", "con manual", "fácil de interpretar", "para empezar", "para aprender", "con instrucciones", "para primera baraja"],
  8: ["para comprar en Colombia", "tienda en Bogotá", "con envío en Colombia", "venta online Colombia", "precio en Colombia", "domicilio en Bogotá", "tienda online Colombia", "comprar con envío"],
  9: ["para regalo espiritual", "para regalo místico", "simbólico para regalar", "de introspección para regalar", "regalo con arquetipos", "regalo espiritual colombiano", "regalo con significado", "para persona espiritual"],
  10: ["colombiano", "ilustrado", "mitológico", "de autor", "cultural", "para principiantes", "para regalar", "con guía"],
  11: ["para regalar a un hombre", "para regalar a una mujer", "para regalar a una pareja", "para regalar a un amigo", "para regalar a una amiga", "para regalar a mamá", "para regalar a papá", "para regalar al novio", "para regalar a la novia"],
  12: ["para hombre", "para novio", "para esposo", "para papá", "para padre", "para hermano", "para amigo", "para abuelo", "para jefe"],
  13: ["para mujer", "para novia", "para esposa", "para mamá", "para madre", "para hermana", "para amiga", "para abuela", "para jefa"],
  14: ["para parejas", "para regalar a la pareja", "para aniversario", "para matrimonio", "para esposos", "para novios", "para amor y amistad", "para celebrar una relación"],
  15: ["regalo original", "regalo con significado", "regalo especial", "regalo diferente", "regalo cultural", "original para regalar", "simbólico para regalar", "de autor para regalar"],
  16: ["souvenir de Bogotá", "souvenir de Medellín", "souvenir de Cartagena", "recuerdo de Cali", "recuerdo de Barranquilla", "para turista en Colombia", "para llevar de viaje", "recuerdo cultural colombiano"],
  17: ["educativo sobre mitología", "para aprender mitos", "cultural colombiano", "sobre leyendas colombianas", "sobre folclor colombiano", "para aprender arquetipos", "educativo sobre Colombia", "didáctico de mitos colombianos"],
  18: ["para reflexionar", "de introspección", "con preguntas de reflexión", "para autoconocimiento", "para conversar sobre arquetipos", "para conectar con historias", "de reflexión personal", "de conversación cultural"],
  19: ["de autor", "temático", "independiente", "coleccionable", "artístico", "ilustrado", "de mitos y leyendas", "edición de autor"],
  20: ["de arte colombiano", "de diseño colombiano", "con ilustración colombiana", "de artistas colombianos", "de autor colombiano", "cultural colombiano", "ilustrado con mitos", "de leyendas colombianas"],
};

const PRODUCT_QUALIFIERS = [
  "en español", "ilustrado", "con guía", "en Colombia", "con envío", "de colección",
];

function generateControlled(config) {
  const topics = PLAN_TOPICS[config.number] || [];
  const rows = [];
  for (const base of PRODUCT_BASES) {
    for (const topic of topics) {
      rows.push({ keyword: `${base} ${topic}`, source: "controlled-intent-expansion" });
      for (const qualifier of PRODUCT_QUALIFIERS.slice(0, 3)) {
        if (!includesTerm(topic, qualifier)) {
          rows.push({ keyword: `${base} ${topic} ${qualifier}`, source: "controlled-intent-expansion" });
        }
      }
    }
  }
  return rows;
}

function parseEnv(text) {
  return Object.fromEntries(text.split(/\r?\n/).filter((line) => line && !line.startsWith("#") && line.includes("=")).map((line) => {
    const index = line.indexOf("=");
    return [line.slice(0, index), line.slice(index + 1).replace(/^['"]|['"]$/g, "")];
  }));
}

function normalize(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/["[\]]/g, "").replace(/[^a-z0-9ñáéíóúü\s-]/gi, " ").replace(/\s+/g, " ").trim();
}

function includesTerm(text, term) {
  const haystack = ` ${normalize(text)} `;
  const needle = ` ${normalize(term)} `;
  return haystack.includes(needle) || normalize(text).includes(normalize(term));
}

function baseValid(keyword) {
  const clean = String(keyword || "").trim();
  const normalized = normalize(clean);
  if (!normalized || clean.length > 80 || clean.split(/\s+/).length > 10) return false;
  return !GLOBAL_EXCLUDES.some((term) => includesTerm(normalized, term));
}

function hasAny(keyword, terms) {
  return terms.some((term) => includesTerm(keyword, term));
}

function hasProductAnchor(keyword) {
  if (hasAny(keyword, ["tarot", "oráculo", "baraja", "mazo"])) return true;
  return includesTerm(keyword, "cartas") && hasAny(keyword, [
    "mito", "leyenda", "colombian", "ilustrad", "arcano", "arquetipo",
  ]);
}

function relevantForPlan(keyword, config) {
  if (!baseValid(keyword)) return false;
  if (!hasProductAnchor(keyword)) return false;
  const terms = PLAN_TOPICS[config.number] || [];
  if (!hasAny(keyword, terms.flatMap((term) => normalize(term).split(" ")).filter((term) => term.length > 3))) {
    return false;
  }
  switch (config.number) {
    case 1:
      return hasAny(keyword, ["comprar", "precio", "venta", "tienda", "pedir", "envío", "envio", "domicilio"]);
    case 2:
      return hasAny(keyword, ["colombia", "colombian", "cultural", "extranjero", "turista", "exterior"]);
    case 3:
      return hasAny(keyword, ["souvenir", "recuerdo", "cultural", "colombia", "colombian"]);
    case 4:
      return hasAny(keyword, ["autoconocimiento", "introspección", "introspeccion", "reflexión", "reflexion", "crecimiento personal", "conciencia", "arquetipo", "símbolo", "simbolo"]);
    case 5:
      return hasAny(keyword, ["ilustrad", "arte", "artíst", "artist", "autor", "coleccion", "diseño", "diseno", "edición", "edicion"]);
    case 6:
      return hasAny(keyword, ["mito", "leyenda", "mitología", "mitologia", "folclor", "tradición oral", "tradicion oral", "arquetipo", "cultura latinoamericana"]);
    case 7:
      return hasAny(keyword, ["principiante", "aprender", "guía", "guia", "manual", "instrucciones", "empezar", "fácil", "facil", "primera baraja"]);
    case 8:
      return hasAny(keyword, ["comprar", "venta", "tienda", "envío", "envio", "domicilio", "precio"])
        && hasAny(keyword, ["colombia", "bogotá", "bogota", "medellín", "medellin", "cali", "cartagena", "barranquilla", "online", "envío", "envio"]);
    case 9:
      return hasAny(keyword, ["regalo", "regalar", "espiritual", "místico", "mistico", "simbólico", "simbolico", "introspección", "introspeccion", "significado"]);
    case 10:
      return true;
    case 11:
      return hasAny(keyword, ["regalo", "regalar", "obsequio", "hombre", "mujer", "pareja", "novio", "novia", "esposo", "esposa", "mamá", "mama", "papá", "papa", "amigo", "amiga"]);
    case 12:
      return hasAny(keyword, ["hombre", "novio", "esposo", "papá", "papa", "padre", "hermano", "amigo", "abuelo", "jefe"]);
    case 13:
      return hasAny(keyword, ["mujer", "novia", "esposa", "mamá", "mama", "madre", "hermana", "amiga", "abuela", "jefa"]);
    case 14:
      return hasAny(keyword, ["pareja", "novio", "novia", "esposo", "esposa", "aniversario", "matrimonio", "amor y amistad", "relación", "relacion"]);
    case 15:
      return hasAny(keyword, ["regalo", "regalar", "original", "significado", "especial", "diferente", "cultural", "simbólico", "simbolico", "autor"]);
    case 16:
      return hasAny(keyword, ["bogotá", "bogota", "medellín", "medellin", "cartagena", "cali", "barranquilla", "colombia", "viaje", "turista", "souvenir", "recuerdo"]);
    case 17:
      return hasAny(keyword, ["educativo", "aprender", "didáctico", "didactico", "cultural", "mito", "leyenda", "mitología", "mitologia", "folclor", "arquetipo"]);
    case 18:
      return hasAny(keyword, ["reflexión", "reflexion", "introspección", "introspeccion", "preguntas", "conversación", "conversacion", "conectar", "autoconocimiento", "arquetipo"]);
    case 19:
      return hasAny(keyword, ["autor", "temát", "temat", "artíst", "artist", "independiente", "coleccion", "ilustrad", "mito", "leyenda", "edición", "edicion"]);
    case 20:
      return hasAny(keyword, ["arte", "diseño", "diseno", "ilustr", "artista", "autor", "colombia", "colombian", "mito", "leyenda", "cultural"])
        && hasAny(keyword, ["colombia", "colombian", "mito", "leyenda", "cultural"]);
    default:
      return false;
  }
}

function parseSemrushCsv(text, seed) {
  if (!text || text.startsWith("ERROR")) return [];
  const [header, ...lines] = text.trim().split(/\r?\n/);
  if (!header?.startsWith("Keyword;")) return [];
  return lines.map((line) => line.split(";")).filter((columns) => columns.length >= 8).map(([keyword, volume, cpc, competition, results, trends, intent, difficulty]) => ({
    keyword: keyword.trim(), volume: Number(volume) || 0, cpcUsd: Number(cpc) || 0,
    competition: Number(competition) || 0, results: Number(results) || 0, trends, intent,
    difficulty: Number(difficulty) || 0, seed, source: "semrush-co-v2",
  })).filter((row) => row.keyword);
}

async function fetchSemrush(apiKey, seed) {
  const params = new URLSearchParams({
    type: "phrase_fullsearch", key: apiKey, phrase: seed, database: "co",
    export_columns: "Ph,Nq,Cp,Co,Nr,Td,In,Kd", display_limit: "120", display_sort: "nq_desc", export_decode: "1",
  });
  const response = await fetch(`https://api.semrush.com/?${params}`);
  if (!response.ok) throw new Error(`Semrush ${response.status}`);
  return parseSemrushCsv(await response.text(), seed);
}

function parseGoogleJson(text) {
  return JSON.parse(text.replace(/^\)\]\}',?\n/, ""));
}

async function fetchTrendQueries(seed) {
  const headers = { "user-agent": "Mozilla/5.0", accept: "application/json,text/plain,*/*" };
  const request = { comparisonItem: [{ keyword: seed, geo: "CO", time: "today 5-y" }], category: 0, property: "" };
  const exploreUrl = new URL("https://trends.google.com/trends/api/explore");
  exploreUrl.searchParams.set("hl", "es"); exploreUrl.searchParams.set("tz", "300"); exploreUrl.searchParams.set("req", JSON.stringify(request));
  const explore = await fetch(exploreUrl, { headers });
  if (!explore.ok) throw new Error(`Trends explore ${explore.status}`);
  const widgets = parseGoogleJson(await explore.text()).widgets || [];
  const widget = widgets.find((item) => item.id?.startsWith("RELATED_QUERIES"));
  if (!widget) return [];
  const relatedUrl = new URL("https://trends.google.com/trends/api/widgetdata/relatedsearches");
  relatedUrl.searchParams.set("hl", "es"); relatedUrl.searchParams.set("tz", "300"); relatedUrl.searchParams.set("req", JSON.stringify(widget.request)); relatedUrl.searchParams.set("token", widget.token);
  const related = await fetch(relatedUrl, { headers });
  if (!related.ok) throw new Error(`Trends related ${related.status}`);
  const data = parseGoogleJson(await related.text()).default?.rankedList || [];
  return data.flatMap((list) => list.rankedKeyword || []).map((item) => ({ keyword: item.query, value: item.value, formattedValue: item.formattedValue, seed, source: "google-trends-co-v2" }));
}

function uniqueRows(rows) {
  const map = new Map();
  for (const row of rows) {
    const key = normalize(row.keyword);
    if (!key) continue;
    const prior = map.get(key);
    if (!prior || (row.volume || 0) > (prior.volume || 0)) map.set(key, row);
  }
  return [...map.values()];
}

async function mapWithConcurrency(items, concurrency, task) {
  const output = new Array(items.length); let cursor = 0;
  async function worker() { while (cursor < items.length) { const index = cursor++; output[index] = await task(items[index], index); } }
  await Promise.all(Array.from({ length: concurrency }, worker)); return output;
}

async function main() {
  const env = parseEnv(await readFile(ENV_PATH, "utf8"));
  if (!env.SEMRUSH_API_KEY) throw new Error("Falta SEMRUSH_API_KEY en .env.local");
  const current = JSON.parse(await readFile(CURRENT_PATH, "utf8"));
  const seeds = [...new Set(CONFIG.flatMap((config) => config.seeds))];
  const semrushPairs = await mapWithConcurrency(seeds, 3, async (seed) => {
    try { return [seed, await fetchSemrush(env.SEMRUSH_API_KEY, seed)]; }
    catch (error) { return [seed, [], error.message]; }
  });
  const semrush = new Map(semrushPairs.map(([seed, rows]) => [seed, rows]));
  const trendPairs = seeds.map((seed) => [seed, [], "API 429; replaced by verified Google Trends browser observations"]);
  const trends = new Map(trendPairs.map(([seed, rows]) => [seed, rows]));

  const plans = CONFIG.map((config) => {
    const currentPlan = current.plans.find((plan) => plan.number === config.number);
    const existing = currentPlan?.keywords || [];
    const retained = existing.filter((row) => relevantForPlan(row.keyword, config));
    const remove = existing.filter((row) => !relevantForPlan(row.keyword, config));
    const external = uniqueRows([
      ...config.seeds.flatMap((seed) => semrush.get(seed) || []),
      ...config.seeds.flatMap((seed) => trends.get(seed) || []),
      ...COMPETITOR_DERIVED.map((keyword) => ({ keyword, source: "competitor-product-language" })),
      ...GOOGLE_TRENDS_OBSERVED,
      ...GOOGLE_ADS_URL_OBSERVED,
      ...generateControlled(config),
    ]).filter((row) => relevantForPlan(row.keyword, config));
    const existingSet = new Set(existing.map((row) => normalize(row.keyword)));
    const additions = external.filter((row) => !existingSet.has(normalize(row.keyword))).sort((a, b) => (b.volume || 0) - (a.volume || 0) || a.keyword.localeCompare(b.keyword, "es"));
    const targetRoots = 240;
    const selectedAdditions = additions.slice(0, Math.max(0, targetRoots - retained.length));
    const finalRoots = uniqueRows([...retained, ...selectedAdditions]);
    return {
      number: config.number, name: config.name, planId: currentPlan?.planId, seeds: config.seeds,
      competitorUrls: config.competitorKeys.map((key) => COMPETITORS[key]),
      existingRoots: existing.length, retainedRoots: retained.length, removalRoots: remove.length,
      retained, remove, additions, selectedAdditions, finalRoots, finalRootCount: finalRoots.length,
    };
  });

  const consolidatedSources = [11, 12, 13, 14, 15, 16, 2, 3, 9, 7, 1, 5, 6, 19, 20];
  const plan21Current = current.plans.find((plan) => plan.number === 21)?.keywords || [];
  const consolidated = uniqueRows(plans.filter((plan) => consolidatedSources.includes(plan.number)).flatMap((plan) => plan.finalRoots));
  const plan21Final = consolidated.slice(0, 480);
  const plan21FinalSet = new Set(plan21Final.map((row) => normalize(row.keyword)));
  plans.push({
    number: 21, name: "Escenario viable consolidado", planId: current.plans.find((plan) => plan.number === 21)?.planId, seeds: [...new Set(plans.flatMap((plan) => plan.seeds))],
    competitorUrls: Object.values(COMPETITORS), existingRoots: plan21Current.length,
    retainedRoots: plan21Current.filter((row) => plan21FinalSet.has(normalize(row.keyword))).length,
    removalRoots: plan21Current.filter((row) => !plan21FinalSet.has(normalize(row.keyword))).length,
    retained: plan21Current.filter((row) => plan21FinalSet.has(normalize(row.keyword))),
    remove: plan21Current.filter((row) => !plan21FinalSet.has(normalize(row.keyword))),
    additions: plan21Final.filter((row) => !plan21Current.some((candidate) => normalize(candidate.keyword) === normalize(row.keyword))),
    selectedAdditions: plan21Final.filter((row) => !plan21Current.some((candidate) => normalize(candidate.keyword) === normalize(row.keyword))),
    finalRoots: plan21Final,
    finalRootCount: plan21Final.length,
  });

  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(PAYLOAD_DIR, { recursive: true });
  const output = {
    generatedAt: new Date().toISOString(), country: "Colombia", semrushDatabase: "co",
    method: "strong product anchor plus plan-specific intent; competitor brands and incompatible products excluded",
    competitors: COMPETITORS,
    semrushErrors: semrushPairs.filter((row) => row[2]).map(([seed, , error]) => ({ seed, error })),
    trendsErrors: trendPairs.filter((row) => row[2]).map(([seed, , error]) => ({ seed, error })),
    plans,
  };
  await writeFile(OUT_PATH, `${JSON.stringify(output, null, 2)}\n`);
  for (const plan of plans) {
    const prefix = `p${String(plan.number).padStart(2, "0")}`;
    const additions = plan.selectedAdditions.flatMap((row) => [
      `"${String(row.keyword).replaceAll('"', "")}"`,
      `[${String(row.keyword).replaceAll("[", "").replaceAll("]", "")}]`,
    ]);
    const exactNegatives = plan.remove.map((row) => `[${String(row.keyword).replaceAll("[", "").replaceAll("]", "")}]`);
    const phraseNegatives = GLOBAL_NEGATIVE_PHRASES.map((keyword) => `"${keyword}"`);
    await writeFile(path.join(PAYLOAD_DIR, `${prefix}-add.txt`), `${[...new Set(additions)].join("\n")}\n`);
    await writeFile(path.join(PAYLOAD_DIR, `${prefix}-negative.txt`), `${[...new Set([...exactNegatives, ...phraseNegatives])].join("\n")}\n`);
  }
  console.table(plans.map((plan) => ({ plan: plan.number, existing: plan.existingRoots, retain: plan.retainedRoots, remove: plan.removalRoots, availableAdd: plan.additions.length, selectedAdd: plan.selectedAdditions.length, final: plan.finalRootCount })));
  console.log(JSON.stringify({ semrushSeeds: seeds.length, semrushErrors: output.semrushErrors.length, trendsErrors: output.trendsErrors.length, output: OUT_PATH }, null, 2));
}

await main();
