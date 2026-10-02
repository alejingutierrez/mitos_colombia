import { bariMedia } from "../bari/media.mjs";
import { chimilaMedia } from "../chimila/media.mjs";
import { uwaMedia } from "../uwa/media.mjs";

const sierra = { latitude: 10.84, longitude: -73.71 };

function reused(pair, reusedFrom) {
  return {
    horizontal: pair.horizontal,
    vertical: pair.vertical,
    reusedFrom,
    ...sierra,
  };
}

export const koguiMedia = {
  canibalismo: reused(
    uwaMedia["mensajes-de-los-animales-uwa"],
    "u-wa/mensajes-de-los-animales-uwa",
  ),
  "creacion-koguis": reused(
    chimilaMedia["yunari-y-las-cinco-tierras"],
    "chimila/yunari-y-las-cinco-tierras",
  ),
  "el-algodon-koguis": reused(
    uwaMedia["las-hijas-del-sol-y-la-miel"],
    "u-wa/las-hijas-del-sol-y-la-miel",
  ),
  "el-arco-iris-susabanka": reused(
    chimilaMedia["el-poblamiento"],
    "chimila/el-poblamiento",
  ),
  "el-maiz-koguis": reused(
    chimilaMedia["yaau-numirinta-y-las-dos-mazorcas"],
    "chimila/yaau-numirinta-y-las-dos-mazorcas",
  ),
  "el-primer-hombre-y-la-primera-mujer": reused(
    bariMedia["sabaseba-y-los-hijos-de-la-pina"],
    "motilon-bari/sabaseba-y-los-hijos-de-la-pina",
  ),
  "el-sol-mama": reused(
    bariMedia["nandou-chibaig-y-las-luces-del-cielo"],
    "motilon-bari/nandou-chibaig-y-las-luces-del-cielo",
  ),
  guateovan: reused(
    bariMedia["el-dia-en-que-la-luna-y-la-tierra-se-separaron"],
    "motilon-bari/el-dia-en-que-la-luna-y-la-tierra-se-separaron",
  ),
  "incesto-de-padre-hija": reused(
    chimilaMedia["la-mala-mujer"],
    "chimila/la-mala-mujer",
  ),
  "kasauge-el-padre-arbol": reused(
    bariMedia["el-gran-arbol-que-hizo-los-rios"],
    "motilon-bari/el-gran-arbol-que-hizo-los-rios",
  ),
  kashindukwe: reused(
    uwaMedia["la-competencia-de-los-tigres-uwa"],
    "u-wa/la-competencia-de-los-tigres-uwa",
  ),
  kimaku: reused(
    chimilaMedia["el-hombre-que-sono-con-caiman"],
    "chimila/el-hombre-que-sono-con-caiman",
  ),
  "la-candela-gotze": reused(
    bariMedia["sibabio-y-las-cenizas-del-mundo"],
    "motilon-bari/sibabio-y-las-cenizas-del-mundo",
  ),
  "la-enfermedad-hiwiha": reused(
    uwaMedia["el-pajaro-carpintero-y-el-poder-de-curar"],
    "u-wa/el-pajaro-carpintero-y-el-poder-de-curar",
  ),
  "los-primeros-indios": reused(
    chimilaMedia["creacion-chimila"],
    "chimila/creacion-chimila",
  ),
  "madre-wastora": reused(
    uwaMedia["lisha-la-madre-del-agua"],
    "u-wa/lisha-la-madre-del-agua",
  ),
  namaku: reused(
    uwaMedia["kubashoa-el-hijo-del-tabaco"],
    "u-wa/kubashoa-el-hijo-del-tabaco",
  ),
  "naowa-entrega-el-gobierno-a-su-hijo": reused(
    bariMedia["caminar-liviano-hacia-el-mas-alla"],
    "motilon-bari/caminar-liviano-hacia-el-mas-alla",
  ),
  "nunkasha-y-kashindukwe": reused(
    chimilaMedia["el-hombre-que-sono-con-danta"],
    "chimila/el-hombre-que-sono-con-danta",
  ),
  "seiskwisbuche-y-yangauki": reused(
    chimilaMedia["los-canibales"],
    "chimila/los-canibales",
  ),
};
