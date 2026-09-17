export const inheritedHuitotoSlugs = [
  "jirayauma",
  "creacion-huitotos",
  "nofideno-la-madre",
  "uuiki-el-padre",
  "jitoma-y-fiboi",
  "jobiya-jitoma",
  "diijoma",
  "nofi-zazime",
  "el-diluvio-y-las-hazanas-de-buinaima",
  "el-origen-de-la-coca",
  "el-origen-del-maguare",
  "monairue-jitoma-y-nofida-jitoma",
  "yarokamena",
  "juma",
  "kanifaido",
  "kugi-y-nokuerai",
  "jadomacurino-guyataiba",
  "konago",
  "de-como-se-crio-yarocomena",
  "unamarai-padre-de-yaje",
  "en-el-principio-fueron-los-yorias-a-la-sombra-de-la-ortiga",
  "peleas-y-aventuras-entre-el-sobrino-conejo-y-el-tio-tigre",
];

export const canonicalHuitotoSlugs = [...inheritedHuitotoSlugs].sort();

export const huitotoCategoryBySlug = Object.fromEntries(
  canonicalHuitotoSlugs.map((slug) => [
    slug,
    "Amazonía > Caquetá y Putumayo > Huitoto / Murui-Muina",
  ]),
);

export const huitotoEditorialDecisions = {
  universe: {
    action: "retain-and-rewrite-all-twenty-two-inherited-routes",
    reason:
      "El compendio de Urbina documenta dieciséis fichas y otras publicaciones permiten delimitar cinco más. El cuento de Conejo y Tigre conserva su URL con atribución explícitamente incierta.",
  },
  yarokamena: {
    action: "keep-two-routes-as-declared-windows-into-one-cycle",
    reason:
      "«De cómo se crió Yarocomena» y «Yarokamena» no se presentan como mitos independientes: una ficha resume el origen de Kïtobeni y la otra el árbol, el gusano y su derrota.",
  },
  corrections: {
    action: "correct-jirayauma-jobiya-and-maguare-from-published-sources",
    reason:
      "Jirayauma no es el relato generado sobre una suegra; Jobiya corresponde a Jitoma y Nokaido; el maguaré procede de la metamorfosis de Yiida Buinama.",
  },
  additions: {
    action: "add-none",
    reason:
      "Los dieciséis capítulos del compendio principal ya están representados y no se encontraron ciclos faltantes con mejor sustento que las veintidós rutas existentes.",
  },
  media: {
    action: "replace-all-twenty-two-pairs-with-approved-flat-2d-pairs",
    reason:
      "Los veintidós pares heredados cumplen tamaño pero parecen maquetas u objetos de papel con volumen. Se reutilizan pares digitales planos ya aprobados.",
  },
};

export function assertHuitotoUniverse() {
  if (inheritedHuitotoSlugs.length !== 22) {
    throw new Error("El universo heredado Huitoto debe contener 22 fichas.");
  }
  if (canonicalHuitotoSlugs.length !== 22) {
    throw new Error("El universo canónico Huitoto debe contener 22 fichas.");
  }
  if (new Set(canonicalHuitotoSlugs).size !== canonicalHuitotoSlugs.length) {
    throw new Error("El universo Huitoto contiene slugs duplicados.");
  }
  return {
    inherited: 22,
    canonical: 22,
    corrected: 22,
    added: 0,
    unpublished: 0,
    unifiedCycles: 1,
  };
}
