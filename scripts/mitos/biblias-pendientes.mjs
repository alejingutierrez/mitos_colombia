/**
 * Las 33 biblias que faltan, con su tamano objetivo.
 *
 * Veintisiete son comunidades con nombre propio. Las otras seis son el
 * **corpus sin comunidad** —relatos mestizos, afrodescendientes y mixtos— que
 * no tiene pueblo y por eso se agrupa por **epoca y territorio**, nunca
 * prestandole la iconografia de un vecino.
 *
 * El tamano no es una meta arbitraria: sale de la proporcion que ya tienen las
 * biblias cerradas del proyecto (wayuu 431 entidades / 27 mitos, muiscas 304
 * laminas / 41, huitoto 196 / 21, chami 118 / 22). De ahi la banda de
 * 12-18 entidades inventariadas por mito y 7-9 fichas con modelo propio.
 * Un corpus de un solo relato conserva un piso, porque por debajo de diez
 * fichas una biblia no sostiene un triptico ni un keyframe.
 */

/** Entidades inventariadas por mito. Es el denominador, no el numero de laminas. */
export const ENTITIES_PER_MYTH = { min: 12, target: 15, max: 18 };
/** Fichas con modelo propio por mito, una vez restados embedded y excluded. */
export const SHEETS_PER_MYTH = { min: 7, target: 8, max: 9 };
/** Piso para corpus muy cortos: por debajo no se sostiene ni un triptico. */
export const SHEET_FLOOR = 10;

export function sizing(myths) {
  const entities = {
    min: Math.max(ENTITIES_PER_MYTH.min * myths, Math.round(SHEET_FLOOR * 1.6)),
    target: Math.max(ENTITIES_PER_MYTH.target * myths, Math.round(SHEET_FLOOR * 1.8)),
  };
  const sheets = {
    min: Math.max(SHEETS_PER_MYTH.min * myths, SHEET_FLOOR),
    target: Math.max(SHEETS_PER_MYTH.target * myths, SHEET_FLOOR + 2),
  };
  return { entities, sheets };
}

/** Comunidades con nombre propio. `id` = `communities.slug`. */
export const COMMUNITY_BIBLES = [
  { id: "koguis", name: "Kogui (Kággaba)", myths: 20, editorial: "kogui", region: "Caribe > Magdalena" },
  { id: "katios", name: "Katíos", myths: 19, editorial: "katio", region: "Pacífico > Chocó / Antioquia" },
  { id: "pananes", name: "Panán", myths: 16, editorial: "panan", region: "Pacífico > Nariño" },
  { id: "andoque", name: "Andoque (Gente del Hacha)", myths: 14, editorial: "andoque", region: "Amazonía > Caquetá" },
  { id: "u-wa", name: "U’wa", myths: 11, editorial: "uwa", region: "Andina > Boyacá / Arauca" },
  { id: "guahibo-sikuani", name: "Sikuani (Guahíbo)", myths: 10, editorial: "sikuani", region: "Orinoquía" },
  { id: "desana", name: "Desana", myths: 8, editorial: "desana", region: "Amazonía > Vaupés" },
  { id: "tucano", name: "Tucano", myths: 7, editorial: "tucano", region: "Amazonía > Vaupés" },
  { id: "zenu", name: "Zenú", myths: 7, editorial: "zenu", region: "Caribe > Córdoba / Sucre" },
  { id: "misak-guambianos", name: "Misak", myths: 7, editorial: "misak", region: "Andina > Cauca" },
  { id: "barasana", name: "Barasana", myths: 6, editorial: "barasana", region: "Amazonía > Vaupés" },
  { id: "motilon-bari", name: "Barí", myths: 6, editorial: "bari", region: "Andina > Norte de Santander" },
  { id: "ticuna", name: "Ticuna", myths: 6, editorial: "ticuna", region: "Amazonía > Amazonas" },
  { id: "quillacingas", name: "Quillacingas", myths: 6, editorial: "quillacingas", region: "Pacífico > Nariño" },
  { id: "wounaan", name: "Wounaan", myths: 5, editorial: "wounaan", region: "Pacífico > Chocó" },
  { id: "quimbaya", name: "Quimbaya", myths: 3, editorial: "quimbaya", region: "Andina > Eje Cafetero" },
  { id: "makawanes", name: "Makaguán", myths: 3, editorial: "makaguan", region: "Orinoquía > Arauca" },
  { id: "kuibas", name: "Kuiva (Wamonae)", myths: 2, editorial: "kuiva", region: "Orinoquía > Casanare" },
  { id: "ansermas", name: "Ansermas", myths: 2, editorial: "ansermas", region: "Andina > Caldas" },
  { id: "umbra", name: "Umbra", myths: 2, editorial: "umbra", region: "Andina > Risaralda" },
  { id: "awa", name: "Awa", myths: 2, editorial: "awa", region: "Pacífico > Nariño" },
  { id: "yukpa", name: "Yukpa", myths: 2, editorial: "yukpa", region: "Caribe > Cesar" },
  { id: "eperara-siapidara", name: "Eperara Siapidara", myths: 2, editorial: "eperara", region: "Pacífico > Cauca" },
  { id: "pirsa", name: "Pirsa", myths: 1, editorial: "pirsa", region: "Andina" },
  { id: "embera", name: "Embera", myths: 1, editorial: "embera", region: "Pacífico > Chocó" },
  { id: "nukak-maku", name: "Nɨkak", myths: 1, editorial: "nukak", region: "Amazonía > Guaviare" },
  { id: "ufaina", name: "Ufaina / Tanimuka", myths: 1, editorial: "ufaina", region: "Amazonía > Amazonas" },
];

/**
 * Corpus sin comunidad. El denominador no es un pueblo sino un momento
 * historico y un lugar; la revision cultural se sustituye por revision
 * historica y la categoria `criatura` carga el peso.
 */
export const ERA_BIBLES = [
  {
    id: "pacifico-choco-afro",
    name: "Pacífico chocoano afrodescendiente",
    era: "colonial tardía y republicana, Chocó minero y ribereño",
    myths: 4,
    slugs: ["chimbilaco", "kijimba-de-las-animas", "la-sierpe-de-bete", "la-yesca"],
  },
  {
    id: "valle-cauca-mestizo",
    name: "Valle del Cauca y Cauca mestizo",
    era: "colonial tardía y republicana, haciendas de caña, Cali y Popayán",
    myths: 8,
    slugs: [
      "buziraco",
      "catalina-la-napanga",
      "el-caballo-del-morro",
      "el-duende-peluquero",
      "el-hada-de-los-canaverales",
      "el-roble-del-caballero",
      "la-casa-de-la-tradicion",
      "la-piramide-del-chontaduro",
    ],
  },
  {
    id: "narino-andino-mestizo",
    name: "Nariño andino y volcánico",
    era: "republicana, páramo, volcanes y frontera sur",
    myths: 6,
    slugs: [
      "chiles-y-cumbal",
      "el-diablo-chivo-de-rumichaca",
      "el-riviel-del-rosario",
      "guagua-rayo",
      "la-totuma-de-la-cocha",
      "taita-galeras",
    ],
  },
  {
    id: "antioquia-mixto",
    name: "Occidente antioqueño mixto",
    era: "memoria indígena-histórica y espantos de vereda, siglos XVI al XX",
    myths: 3,
    slugs: ["dobaida", "el-silbo-de-quinunchu", "el-tesoro-de-dabeiba"],
  },
  {
    id: "caribe-cesar-mestizo",
    name: "Cesar y valle del Magdalena mestizo",
    era: "republicana, ciénaga, hacienda ganadera y río",
    myths: 2,
    slugs: ["la-bruja-del-trinche", "la-sirena-de-hurtado"],
  },
  {
    id: "amazonia-llanos-mixto",
    name: "Amazonía y Llanos, relato de pícaro",
    era: "registro escolar del siglo XX sobre tradición amazónica",
    myths: 1,
    slugs: ["peleas-y-aventuras-entre-el-sobrino-conejo-y-el-tio-tigre"],
  },
];

export const ALL_BIBLES = [...COMMUNITY_BIBLES, ...ERA_BIBLES];
