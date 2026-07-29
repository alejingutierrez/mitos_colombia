import { andoqueMedia } from "../andoque/media.mjs";
import { barasanaMedia } from "../barasana/media.mjs";
import { koguiMedia } from "../kogui/media.mjs";

const predioPutumayoApproximate = {
  latitude: -1.24,
  longitude: -72.82,
};

function reused(pair, reusedFrom) {
  if (!pair?.horizontal || !pair?.vertical) {
    throw new Error(`Pareja visual Huitoto inválida: ${reusedFrom}`);
  }
  return {
    horizontal: pair.horizontal,
    vertical: pair.vertical,
    reusedFrom,
    ...predioPutumayoApproximate,
  };
}

const koguiPairs = Object.entries(koguiMedia);

export const huitotoMedia = {
  "jirayauma": reused(
    barasanaMedia["la-luna"],
    "barasana/la-luna",
  ),
  "creacion-huitotos": reused(
    koguiPairs[0][1],
    `kogui/${koguiPairs[0][0]}`,
  ),
  "nofideno-la-madre": reused(
    koguiPairs[1][1],
    `kogui/${koguiPairs[1][0]}`,
  ),
  "uuiki-el-padre": reused(
    koguiPairs[2][1],
    `kogui/${koguiPairs[2][0]}`,
  ),
  "jitoma-y-fiboi": reused(
    koguiPairs[3][1],
    `kogui/${koguiPairs[3][0]}`,
  ),
  "jobiya-jitoma": reused(
    koguiPairs[4][1],
    `kogui/${koguiPairs[4][0]}`,
  ),
  "diijoma": reused(
    koguiPairs[5][1],
    `kogui/${koguiPairs[5][0]}`,
  ),
  "nofi-zazime": reused(
    koguiPairs[6][1],
    `kogui/${koguiPairs[6][0]}`,
  ),
  "el-diluvio-y-las-hazanas-de-buinaima": reused(
    koguiPairs[7][1],
    `kogui/${koguiPairs[7][0]}`,
  ),
  "el-origen-de-la-coca": reused(
    koguiPairs[8][1],
    `kogui/${koguiPairs[8][0]}`,
  ),
  "el-origen-del-maguare": reused(
    koguiPairs[9][1],
    `kogui/${koguiPairs[9][0]}`,
  ),
  "monairue-jitoma-y-nofida-jitoma": reused(
    koguiPairs[10][1],
    `kogui/${koguiPairs[10][0]}`,
  ),
  "yarokamena": reused(
    koguiPairs[11][1],
    `kogui/${koguiPairs[11][0]}`,
  ),
  "juma": reused(
    koguiPairs[12][1],
    `kogui/${koguiPairs[12][0]}`,
  ),
  "kanifaido": reused(
    koguiPairs[13][1],
    `kogui/${koguiPairs[13][0]}`,
  ),
  "kugi-y-nokuerai": reused(
    koguiPairs[14][1],
    `kogui/${koguiPairs[14][0]}`,
  ),
  "jadomacurino-guyataiba": reused(
    koguiPairs[15][1],
    `kogui/${koguiPairs[15][0]}`,
  ),
  "konago": reused(
    koguiPairs[16][1],
    `kogui/${koguiPairs[16][0]}`,
  ),
  "de-como-se-crio-yarocomena": reused(
    koguiPairs[17][1],
    `kogui/${koguiPairs[17][0]}`,
  ),
  "unamarai-padre-de-yaje": reused(
    koguiPairs[18][1],
    `kogui/${koguiPairs[18][0]}`,
  ),
  "en-el-principio-fueron-los-yorias-a-la-sombra-de-la-ortiga": reused(
    koguiPairs[19][1],
    `kogui/${koguiPairs[19][0]}`,
  ),
  "peleas-y-aventuras-entre-el-sobrino-conejo-y-el-tio-tigre": reused(
    andoqueMedia["las-sirenas"],
    "andoque/las-sirenas",
  ),
};
