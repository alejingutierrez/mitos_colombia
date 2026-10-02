import { bariMedia } from "../bari/media.mjs";
import { chimilaMedia } from "../chimila/media.mjs";
import { uwaMedia } from "../uwa/media.mjs";

const aducheApproximate = { latitude: -0.65, longitude: -72.08 };

function reused(pair, reusedFrom) {
  return {
    horizontal: pair.horizontal,
    vertical: pair.vertical,
    reusedFrom,
    ...aducheApproximate,
  };
}

export const andoqueMedia = {
  "el-sol-que-nace-en-araracuara": reused(
    bariMedia["nandou-chibaig-y-las-luces-del-cielo"],
    "motilon-bari/nandou-chibaig-y-las-luces-del-cielo",
  ),
  "los-gigantes": reused(
    uwaMedia["creacion-u-wa"],
    "u-wa/creacion-u-wa",
  ),
  "las-sirenas": reused(
    chimilaMedia["el-morrocoyo"],
    "chimila/el-morrocoyo",
  ),
  "los-fantasmas": reused(
    bariMedia["caminar-liviano-hacia-el-mas-alla"],
    "motilon-bari/caminar-liviano-hacia-el-mas-alla",
  ),
  "el-mundo-de-ultratumba": reused(
    uwaMedia["el-recorrido-de-uktara"],
    "u-wa/el-recorrido-de-uktara",
  ),
  "la-venganza-de-los-brujos": reused(
    bariMedia["sibabio-y-las-cenizas-del-mundo"],
    "motilon-bari/sibabio-y-las-cenizas-del-mundo",
  ),
  "la-brujeria-de-la-danta": reused(
    uwaMedia["el-oso-y-el-hombre-uwa"],
    "u-wa/el-oso-y-el-hombre-uwa",
  ),
  "los-grupos-de-mi-juventud": reused(
    bariMedia["sabaseba-y-los-hijos-de-la-pina"],
    "motilon-bari/sabaseba-y-los-hijos-de-la-pina",
  ),
  "los-caucheros-de-la-casa-arana": reused(
    chimilaMedia["el-hombre-que-sono-con-caiman"],
    "chimila/el-hombre-que-sono-con-caiman",
  ),
  "el-retorno-de-plumon-amarillo": reused(
    chimilaMedia["yunari-y-las-cinco-tierras"],
    "chimila/yunari-y-las-cinco-tierras",
  ),
  "el-retorno-de-plumon-de-fiebre": reused(
    chimilaMedia["yaau-numirinta-y-las-dos-mazorcas"],
    "chimila/yaau-numirinta-y-las-dos-mazorcas",
  ),
  "la-guerra-del-palo-hablador": reused(
    bariMedia["el-gran-arbol-que-hizo-los-rios"],
    "motilon-bari/el-gran-arbol-que-hizo-los-rios",
  ),
  "huevo-de-chupaflor-el-diluvio-y-el-fuego": reused(
    uwaMedia["el-pajaro-carpintero-y-el-poder-de-curar"],
    "u-wa/el-pajaro-carpintero-y-el-poder-de-curar",
  ),
  "el-aguila-canibal-y-la-madre-de-los-andoques": reused(
    bariMedia["el-dia-en-que-la-luna-y-la-tierra-se-separaron"],
    "motilon-bari/el-dia-en-que-la-luna-y-la-tierra-se-separaron",
  ),
};
