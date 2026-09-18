import { bariMedia } from "../bari/media.mjs";

const arauca = { latitude: 6.94, longitude: -71.27 };

function reused(pair, reusedFrom) {
  return {
    horizontal: pair.horizontal,
    vertical: pair.vertical,
    reusedFrom,
    ...arauca,
  };
}

export const makaguanMedia = {
  "creacion-makawanes": reused(
    bariMedia["nandou-chibaig-y-las-luces-del-cielo"],
    "motilon-bari/nandou-chibaig-y-las-luces-del-cielo",
  ),
  "la-gran-inundacion": reused(
    bariMedia["el-gran-arbol-que-hizo-los-rios"],
    "motilon-bari/el-gran-arbol-que-hizo-los-rios",
  ),
  "el-alma": reused(
    bariMedia["caminar-liviano-hacia-el-mas-alla"],
    "motilon-bari/caminar-liviano-hacia-el-mas-alla",
  ),
};
