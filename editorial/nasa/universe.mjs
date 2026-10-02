export const NASA_CATEGORY_PATH = "Pacífico > Cauca > Nasa - Paeces";

export const existingNasaSlugs = [
  "chauteh",
  "el-armadillo-de-mina",
  "el-dalo",
  "el-diablo-nasa-paeces",
  "el-hombre-flaco",
  "el-hombre-tigre",
  "el-hombre-y-el-perro-flaco",
  "el-mar",
  "el-trueno",
  "formacion-del-rio-paez",
  "juan-chiracol",
  "la-cabeza",
  "la-candela",
  "la-casa-de-fiesta-petrificada",
  "la-madre-de-la-sal",
  "la-nina-que-se-volvio-serpiente",
  "la-visita-del-joven-desconocido",
  "las-piedra-de-chaikin",
  "lliban-el-hijo-del-trueno",
  "lliban-y-juan-chiracol",
  "los-animales",
  "origen-de-las-plantas",
  "pedro-y-tomas-dimales",
  "piedra-alta",
  "santo-tomas",
].sort();

export const newNasaSlugs = ["juan-tama"].sort();

export const canonicalNasaSlugs = [
  ...existingNasaSlugs,
  ...newNasaSlugs,
].sort();

export const excludedFromNasa = {
  "el-cacique-cumanday": {
    reason:
      "La adscripción Nasa depende de una inferencia tardía y débil; las fuentes regionales lo sitúan en el complejo legendario de Caldas y el Nevado del Ruiz.",
    disposition:
      "Conservar publicado y trasladar fuera de la comunidad Nasa para revisarlo con el corpus mestizo y regional.",
  },
};

export const bernal1953Slugs = [...existingNasaSlugs].sort();
