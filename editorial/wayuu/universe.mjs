export const WAYUU_CATEGORY_PATH = "Caribe > Guajira > Wayúu";

export const existingWayuuSlugs = [
  "aramai",
  "creacion-wayuu",
  "el-hijo-del-condor",
  "el-incesto",
  "el-indio-guerrero-ipuana",
  "el-indio-jaichuasay",
  "el-indio-jururiana",
  "el-indio-kuriruputa",
  "el-indio-pushalna",
  "el-origen-del-fuego",
  "el-pequeno-indio-kosina",
  "el-viaje-del-mas-alla",
  "guanuru",
  "jirairay",
  "la-chama",
  "la-india-worunka",
  "la-majayura-que-pierde-a-los-hombres",
  "la-sed-da-los-civilizados",
  "las-wanulus-y-el-valle-de-la-muerte",
  "los-dominios-de-juya",
  "los-dos-hermanos",
  "maleiwa",
  "serranias-de-la-guajira",
  "ulepala",
  "umarala",
].sort();

export const newWayuuSlugs = [
  "los-mellizos-transformadores",
  "waleker-el-origen-del-tejido",
].sort();

export const canonicalWayuuSlugs = [
  ...existingWayuuSlugs,
  ...newWayuuSlugs,
].sort();

export const chaves1946Slugs = [
  "aramai",
  "el-hijo-del-condor",
  "el-incesto",
  "el-indio-guerrero-ipuana",
  "el-indio-jaichuasay",
  "el-indio-jururiana",
  "el-indio-kuriruputa",
  "el-indio-pushalna",
  "el-pequeno-indio-kosina",
  "la-india-worunka",
  "la-majayura-que-pierde-a-los-hombres",
  "la-sed-da-los-civilizados",
  "los-dos-hermanos",
  "serranias-de-la-guajira",
  "umarala",
].sort();

export const pazPerrinFinolSlugs = existingWayuuSlugs
  .filter((slug) => !chaves1946Slugs.includes(slug))
  .sort();
