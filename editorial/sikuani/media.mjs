import { bariMedia } from "../bari/media.mjs";
import { chimilaMedia } from "../chimila/media.mjs";

const sikuaniPlains = { latitude: 4.2, longitude: -71.4 };

function reused(pair, reusedFrom) {
  return {
    horizontal: pair.horizontal,
    vertical: pair.vertical,
    reusedFrom,
    ...sikuaniPlains,
  };
}

export const sikuaniMedia = {
  "el-creador-del-cosmos": reused(
    bariMedia["nandou-chibaig-y-las-luces-del-cielo"],
    "motilon-bari/nandou-chibaig-y-las-luces-del-cielo",
  ),
  "la-comida-para-los-muertos": reused(
    bariMedia["el-dia-en-que-la-luna-y-la-tierra-se-separaron"],
    "motilon-bari/el-dia-en-que-la-luna-y-la-tierra-se-separaron",
  ),
  "kaliwirnae-el-arbol-de-los-alimentos": reused(
    bariMedia["el-gran-arbol-que-hizo-los-rios"],
    "motilon-bari/el-gran-arbol-que-hizo-los-rios",
  ),
  "historia-de-un-brujo": reused(
    bariMedia["sibabio-y-las-cenizas-del-mundo"],
    "motilon-bari/sibabio-y-las-cenizas-del-mundo",
  ),
  "kawiri-monae": reused(
    bariMedia["caminar-liviano-hacia-el-mas-alla"],
    "motilon-bari/caminar-liviano-hacia-el-mas-alla",
  ),
  "la-mujer-sarnosa": reused(
    bariMedia["sabaseba-y-los-hijos-de-la-pina"],
    "motilon-bari/sabaseba-y-los-hijos-de-la-pina",
  ),
  "la-danta-y-el-terecay": reused(
    chimilaMedia["el-morrocoyo"],
    "chimila/el-morrocoyo",
  ),
  "historia-de-un-viejo": reused(
    chimilaMedia["yunari-y-las-cinco-tierras"],
    "chimila/yunari-y-las-cinco-tierras",
  ),
  "historia-de-un-tigre": reused(
    chimilaMedia["el-hombre-que-sono-con-caiman"],
    "chimila/el-hombre-que-sono-con-caiman",
  ),
  "el-tigre": reused(
    chimilaMedia["yaau-numirinta-y-las-dos-mazorcas"],
    "chimila/yaau-numirinta-y-las-dos-mazorcas",
  ),
};
