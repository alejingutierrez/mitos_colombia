import { bariMedia } from "../bari/media.mjs";
import { chimilaMedia } from "../chimila/media.mjs";
import { uwaMedia } from "../uwa/media.mjs";

const piraParanaApproximate = { latitude: -0.65, longitude: -70.55 };

function reused(pair, reusedFrom) {
  return {
    horizontal: pair.horizontal,
    vertical: pair.vertical,
    reusedFrom,
    ...piraParanaApproximate,
  };
}

export const barasanaMedia = {
  "la-luna": {
    horizontal:
      "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/mitos/la-luna-1784764382512.jpg",
    vertical:
      "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/vertical/myth/la-luna-1784811845823.jpg",
    reusedFrom: "barasana/la-luna",
    ...piraParanaApproximate,
  },
  "sol-luna-dia-y-noche": reused(
    bariMedia["nandou-chibaig-y-las-luces-del-cielo"],
    "motilon-bari/nandou-chibaig-y-las-luces-del-cielo",
  ),
  "kahe-sawari-kata-yai-y-el-surgimiento-barasano": reused(
    bariMedia["sabaseba-y-los-hijos-de-la-pina"],
    "motilon-bari/sabaseba-y-los-hijos-de-la-pina",
  ),
  "la-cuerda-de-leche-y-la-anaconda-yeba": reused(
    uwaMedia["creacion-u-wa"],
    "u-wa/creacion-u-wa",
  ),
  "los-cerros-estantillos-y-la-cera-de-abejas": reused(
    chimilaMedia["yunari-y-las-cinco-tierras"],
    "chimila/yunari-y-las-cinco-tierras",
  ),
  "el-origen-de-la-gente-de-los-frutales-silvestres": reused(
    bariMedia["el-gran-arbol-que-hizo-los-rios"],
    "motilon-bari/el-gran-arbol-que-hizo-los-rios",
  ),
};
