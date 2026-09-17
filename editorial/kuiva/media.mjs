import { bariMedia } from "../bari/media.mjs";

const canoMochueloApproximate = { latitude: 5.5, longitude: -70.5 };

function reused(pair, reusedFrom) {
  return {
    horizontal: pair.horizontal,
    vertical: pair.vertical,
    reusedFrom,
    ...canoMochueloApproximate,
  };
}

export const kuivaMedia = {
  "creacion-kuibas": reused(
    bariMedia["sibabio-y-las-cenizas-del-mundo"],
    "motilon-bari/sibabio-y-las-cenizas-del-mundo",
  ),
  "namon-y-la-inundacion": reused(
    bariMedia["el-gran-arbol-que-hizo-los-rios"],
    "motilon-bari/el-gran-arbol-que-hizo-los-rios",
  ),
};
