export const inheritedCaribeMestizoFinalSlugs = [
  "castellano-viejo",
  "por-la-boca-muere-el-pez",
  "a-dios-rogando-y-con-el-mazo-dando",
  "el-fantasma-del-teatro-azul",
  "macu-y-el-collar-de-camarones-de-oro",
  "zequiel",
  "folklore-macabro",
  "la-muerte-de-los-ojos-verdes",
  "el-talisman-funebre",
  "marineritis-sentimental",
  "mona-mona",
  "la-abadesa-arrodillada",
  "de-cuando-fue-regalado-el-castillo-de-san-felipe-y-la-popa",
  "el-milagro-de-la-candelaria",
  "celos-de-esclavo",
  "el-mal-del-mar",
  "el-heroe",
  "maldito-sea-napoleon",
  "templo-de-santo-domingo-y-el-cristo-de-la-expiracion",
  "el-auriga-a-quien-mato-el-pasado",
  "la-imagen-de-san-antonio",
  "al-convento",
  "la-sombra",
  "despues-del-sitio",
  "la-casa-de-don-benito",
  "doce-en-punto-de-la-noche",
  "un-quejido-una-luz",
  "una-reunion-clandestina",
  "en-el-once",
  "viva-la-libertad",
  "un-anonimo",
  "en-el-sitio-de-morillo",
  "la-clave-de-la-felicidad",
  "rambao",
  "tia-zorra-en-el-maizal-de-tio-conejo",
  "la-mina-de-oro-en-el-infierno",
  "los-tres-curas-enamorados",
  "el-desayuno-del-indio",
  "la-confesion",
  "la-muerte-de-tio-conejo",
  "juan-bobo-y-sus-hermanos",
  "juan-bobo-y-la-vieja",
  "este-era-un-rey-que-tenia-dos-hijas-bonitas",
  "tio-sapo-y-cangrejo",
  "el-viaje-al-cielo",
  "el-mocho-y-el-tigre",
  "quien-manda-mas-en-casa",
  "conejo-y-caiman",
  "este-era-un-joven-que-estaba-estudiando",
  "la-vieja-el-burro-y-los-huevos",
  "el-costeno-y-los-cachacos",
  "tio-conejo-y-morrocoy",
  "este-era-un-tipo-que-tenia-una-novia",
  "los-tres-cachacos-y-la-cantara-de-ron-neque",
  "veinte-para-el-bollo",
  "el-burro-y-la-policia",
  "el-paisa-y-el-gringo",
  "las-orejas-del-tio-conejo",
  "tio-conejo-y-los-platanos",
  "conejo-y-la-fiesta-de-toro",
  "conejo-y-la-mona-de-cera",
  "tio-conejo-zapatero",
  "conejo-y-los-hijos-de-tia-tigra",
  "lo-justo-y-lo-legal",
  "el-hijo-desobediente",
  "el-castellano-de-san-juan",
  "las-clavelinas",
  "genus-irritable-vatum",
  "el-tesoro-de-morgan",
  "francisco-el-hombre",
  "la-bruja-del-trinche",
  "la-sirena-de-hurtado",
].sort();

export const alreadyReviewedCaribeMestizoFinalSlugs = [
  "la-bruja-del-trinche",
  "la-sirena-de-hurtado",
].sort();

export const reviewedCaribeMestizoFinalSlugs = inheritedCaribeMestizoFinalSlugs
  .filter((slug) => !alreadyReviewedCaribeMestizoFinalSlugs.includes(slug))
  .sort();

export const canonicalCaribeMestizoFinalSlugs = [
  ...inheritedCaribeMestizoFinalSlugs,
].sort();

const cartagena = new Set(inheritedCaribeMestizoFinalSlugs.slice(0, 0));
for (const slug of [
  "castellano-viejo", "por-la-boca-muere-el-pez", "a-dios-rogando-y-con-el-mazo-dando",
  "el-fantasma-del-teatro-azul", "macu-y-el-collar-de-camarones-de-oro", "zequiel",
  "folklore-macabro", "la-muerte-de-los-ojos-verdes", "el-talisman-funebre",
  "marineritis-sentimental", "mona-mona", "la-abadesa-arrodillada",
  "de-cuando-fue-regalado-el-castillo-de-san-felipe-y-la-popa", "el-milagro-de-la-candelaria",
  "celos-de-esclavo", "el-mal-del-mar", "el-heroe", "maldito-sea-napoleon",
  "templo-de-santo-domingo-y-el-cristo-de-la-expiracion", "el-auriga-a-quien-mato-el-pasado",
  "la-imagen-de-san-antonio", "al-convento", "la-sombra", "despues-del-sitio",
  "la-casa-de-don-benito", "doce-en-punto-de-la-noche", "un-quejido-una-luz",
  "una-reunion-clandestina", "en-el-once", "viva-la-libertad", "un-anonimo",
  "en-el-sitio-de-morillo", "la-clave-de-la-felicidad",
]) cartagena.add(slug);

const magdalena = new Set([
  "el-castellano-de-san-juan",
  "las-clavelinas",
  "genus-irritable-vatum",
  "francisco-el-hombre",
]);

export const caribeMestizoFinalCategoryBySlug = Object.fromEntries(
  reviewedCaribeMestizoFinalSlugs.map((slug) => [
    slug,
    cartagena.has(slug)
      ? "Caribe > Cartagena y Bolívar > Mestizo"
      : magdalena.has(slug)
        ? "Caribe > Magdalena Grande > Mestizo"
        : slug === "el-tesoro-de-morgan"
          ? "Caribe > Archipiélago de San Andrés > Mestizo"
          : "Caribe > Córdoba y sabanas del Sinú > Mestizo",
  ]),
);

export const caribeMestizoFinalTargetTaxonomyBySlug = Object.fromEntries(
  reviewedCaribeMestizoFinalSlugs.map((slug) => [
    slug,
    { regionSlug: "caribe", communitySlug: "mestizo" },
  ]),
);

export const caribeMestizoFinalEditorialDecisions = {
  universe: {
    action: "review-seventy-uncovered-routes-and-preserve-two-reviewed-routes",
    reason:
      "El bloque físico contiene setenta y dos URL: setenta reciben expediente nuevo y las dos rutas de Cesar conservan el cierre ya aprobado.",
  },
  attribution: {
    action: "restore-authors-collectors-and-recording-corpora",
    reason:
      "Treinta y tres piezas proceden de Martínez Fajardo, tres de Otero D’Costa y diecinueve cuentos poseen corpus de Zapata Olivella, George List o Buenaventura.",
  },
  unresolved: {
    action: "keep-thirteen-routes-published-with-explicit-source-gap",
    reason:
      "No se despublican por falta de referencia: se conserva su versión heredada y se declara que no apareció una fuente primaria exacta.",
  },
  media: {
    action: "prepare-one-hundred-forty-openai-flat-paper-cut-images",
    reason:
      "Cada una de las setenta rutas necesita portada horizontal y escena vertical distintas con gpt-image-2 en calidad alta.",
  },
};

export function assertCaribeMestizoFinalUniverse() {
  if (
    inheritedCaribeMestizoFinalSlugs.length !== 72 ||
    reviewedCaribeMestizoFinalSlugs.length !== 70 ||
    canonicalCaribeMestizoFinalSlugs.length !== 72
  ) {
    throw new Error("Caribe Mestizo debe heredar 72 rutas, revisar 70 y preservar 2 ya revisadas.");
  }
  if (reviewedCaribeMestizoFinalSlugs.some((slug) => !caribeMestizoFinalCategoryBySlug[slug])) {
    throw new Error("Falta taxonomía para una ruta de Caribe Mestizo.");
  }
  return {
    inherited: 72,
    reviewedRoutes: 70,
    canonicalPreserved: 72,
    previouslyReviewedPreserved: 2,
    created: 0,
    unpublished: 0,
    transferred: 0,
    imagePairsPending: 70,
  };
}
