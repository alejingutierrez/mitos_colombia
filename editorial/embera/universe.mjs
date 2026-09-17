export const EMBERA_CATEGORY_PATH = "Pacífico > Chocó > Embera";

export const sourceEmberaSlugs = [
  "a-transformacion-del-hombre-que-no-podia-cazar",
  "cobaima",
  "creacion-embera",
  "el-guatin-astuto",
  "el-hijo-de-karagabi-encerrado-en-el-arbol",
  "el-hijo-de-karagabi-y-la-gente-subterranea",
  "el-hijo-de-la-nutria",
  "el-hombre-que-atrapo-al-sol-y-a-la-luna",
  "el-origen-de-los-animales",
  "el-origen-del-agua",
  "el-origen-del-sol-y-la-luna",
  "el-tesoro-de-dabeiba",
  "el-universo",
  "hentsera-y-el-agua",
  "himo-la-iguana-y-la-candela",
  "horchibari",
  "la-culebra-de-las-siete-cabezas",
  "la-historia-de-erubida-y-siebida",
  "la-mujer-de-karagabi",
  "la-mujer-hormiga",
  "la-mujer-y-el-oso",
  "la-oscuridad",
  "la-yesca",
  "las-transformaciones",
  "los-burumias-y-carautas",
  "los-guardianes-vengadores-de-la-naturaleza",
].sort();

export const canonicalEmberaSlugs = [
  "los-burumias-y-carautas",
].sort();

const chamiSlugs = [
  "creacion-embera",
  "el-guatin-astuto",
  "el-hijo-de-karagabi-encerrado-en-el-arbol",
  "el-hijo-de-karagabi-y-la-gente-subterranea",
  "el-hijo-de-la-nutria",
  "el-hombre-que-atrapo-al-sol-y-a-la-luna",
  "el-origen-de-los-animales",
  "el-origen-del-agua",
  "el-universo",
  "hentsera-y-el-agua",
  "himo-la-iguana-y-la-candela",
  "horchibari",
  "la-culebra-de-las-siete-cabezas",
  "la-historia-de-erubida-y-siebida",
  "la-mujer-de-karagabi",
  "la-mujer-hormiga",
  "la-mujer-y-el-oso",
  "la-oscuridad",
  "las-transformaciones",
  "los-guardianes-vengadores-de-la-naturaleza",
];

const katioSlugs = [
  "a-transformacion-del-hombre-que-no-podia-cazar",
  "cobaima",
  "el-origen-del-sol-y-la-luna",
  "el-tesoro-de-dabeiba",
];

export const emberaBoundaryMoves = Object.fromEntries([
  ...chamiSlugs.map((slug) => [
    slug,
    {
      targetCommunity: "chami",
      targetRegion: "andina",
      targetCategoryPath:
        slug === "la-culebra-de-las-siete-cabezas" ||
        slug === "los-guardianes-vengadores-de-la-naturaleza"
          ? "Andina > Caldas > Chamí"
          : "Andina > Varios > Chamí",
      reason:
        "La procedencia narrativa está documentada en el corpus Chamí de Reichel-Dolmatoff (1953), Chaves (1945) o en fuentes de Lomaprieta; la etiqueta Emberá genérica borra esa adscripción.",
    },
  ]),
  ...katioSlugs.map((slug) => [
    slug,
    {
      targetCommunity: "katios",
      targetRegion: "andina",
      targetCategoryPath:
        slug === "a-transformacion-del-hombre-que-no-podia-cazar"
          ? "Andina > Varios > Katíos"
          : slug === "cobaima" || slug === "el-origen-del-sol-y-la-luna"
          ? "Andina > Chocó > Katíos"
          : "Andina > Antioquia > Katíos",
      reason:
        slug === "a-transformacion-del-hombre-que-no-podia-cazar"
          ? "Antonio María Cardona atribuye el relato a Zaquidiama Domicó, cacique principal de Río Verde; la documentación lingüística y territorial identifica Río Verde con el ámbito Emberá Katío."
          : slug === "el-tesoro-de-dabeiba"
          ? "La página mezcla la figura histórica de Dabeiba/Dobaiba con motivos mestizos de guacas; se conserva publicada dentro del expediente Katío para unificarla con las páginas Dabeiba y Dobaida."
          : "El Centro Nacional de Memoria Histórica identifica el relato como memoria Emberá Katío del Alto Andágueda.",
    },
  ]),
  [
    "la-yesca",
    {
      targetCommunity: "mestizo",
      targetRegion: "pacifico",
      targetCategoryPath: "Pacífico > Chocó > Mestizo",
      reason:
        "La guía turística del Chocó la registra como leyenda popular chocoana y no atribuye el relato al pueblo Emberá.",
    },
  ],
]);

export const emberaMergeCandidates = {
  "el-origen-del-agua": {
    canonicalSlug: "hentsera-y-el-agua",
    community: "chami",
    reason:
      "Ambas páginas desarrollan el episodio de Héntserá y la liberación del agua; deben convertirse en una sola narración con variantes documentadas.",
  },
  "el-origen-de-los-animales": {
    canonicalSlug: "la-mujer-de-karagabi",
    community: "chami",
    reason:
      "El supuesto origen de los animales es un episodio del ciclo de la mujer de Karagabí, no un mito independiente en la fuente de 1953.",
  },
  "el-hijo-de-la-nutria": {
    canonicalSlug: "jinopotabar",
    community: "chami",
    reason:
      "Es una variante del ciclo del Hijo de la Pierna; la revisión Chamí debe contrastarla con Jinopotabar y Herupotoarra sin fundir diferencias regionales.",
  },
  "las-transformaciones": {
    canonicalSlug: null,
    community: "chami",
    reason:
      "Es una antología sintética de episodios que ya tienen páginas propias; sus fragmentos deben volver a los relatos documentados.",
  },
  "el-tesoro-de-dabeiba": {
    canonicalSlug: "dabeiba",
    community: "katios",
    reason:
      "Duplica el núcleo de Dabeiba/Dobaida y añade motivos de guaca no acreditados; la revisión Katío resolverá la página canónica.",
  },
};

export const emberaBoundarySources = [
  {
    title: "Algunos mitos de los indios Chamí",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1953,
    url: "https://books.google.com/books/about/Revista_colombiana_de_folklore.html?id=UpUGOUe6nEwC",
    scope:
      "Catorce relatos narrados por el grupo Chamí de Río Frío, Valle del Cauca.",
  },
  {
    title: "Mitos, tradiciones y cuentos de los indios Chamí",
    author: "Milciades Chaves Ch.",
    year: 1945,
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/235",
    scope:
      "Distingue cuatro relatos de informante Chamí y cinco aportados por un narrador Katío.",
  },
  {
    title:
      "Memoria biocultural del conocimiento ancestral del agua para la resiliencia comunitaria",
    author: "Ángela María Moreno Barros",
    year: 2021,
    url: "https://upcommons.upc.edu/bitstreams/64df0e83-3127-48f5-8f27-720252e5ac51/download",
    scope:
      "Documenta Jenené y los Yaveranas con narradores Emberá Katío de Pawarandó y Nejondó.",
  },
  {
    title: "Dachichiuu: Cobaima",
    author: "Centro Nacional de Memoria Histórica",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/cobaima/",
    scope:
      "Memoria aprobada por comunidades Emberá Katío del Alto Andágueda.",
  },
  {
    title: "Guía bibliográfica Emberá-Waunaan",
    author: "Biblioteca Luis Ángel Arango y BICAN",
    url: "https://www.luguiva.net/admin/pdfs/Guia%20Embera-Waunaan.pdf",
    scope:
      "Atribuye El hombre que no podía cazar a Zaquidiama Domicó, cacique principal de Río Verde, y a la recolección de Antonio María Cardona.",
  },
  {
    title: "Embera Eyabida - Embera Katío",
    author: "Organización Nacional Indígena de Colombia",
    url: "https://www.onic.org.co/pueblos/1096-embera-katio",
    scope:
      "Sitúa Río Verde y la denominación Eyábida dentro del ámbito Emberá Katío.",
  },
  {
    title: "Guía turística del Chocó",
    author: "Ministerio de Comercio, Industria y Turismo",
    url: "https://cdn.colombia.com/docs/turismo/sitios-turisticos/pacifico/choco.pdf",
    scope:
      "Registra La Yesca como leyenda popular chocoana sin adscripción Emberá.",
  },
];

export function assertEmberaBoundaryCoverage() {
  const classified = new Set([
    ...canonicalEmberaSlugs,
    ...Object.keys(emberaBoundaryMoves),
  ]);
  const missing = sourceEmberaSlugs.filter((slug) => !classified.has(slug));
  const extra = [...classified].filter((slug) => !sourceEmberaSlugs.includes(slug));
  if (missing.length || extra.length) {
    throw new Error(
      `Frontera Emberá incompleta. Faltan: ${missing.join(", ") || "ninguno"}. Sobran: ${extra.join(", ") || "ninguno"}.`,
    );
  }
  return {
    source: sourceEmberaSlugs.length,
    canonical: canonicalEmberaSlugs.length,
    moved: Object.keys(emberaBoundaryMoves).length,
  };
}
