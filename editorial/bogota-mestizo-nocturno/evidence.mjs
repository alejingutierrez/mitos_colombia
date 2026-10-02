import {
  bogotaMestizoNightSourceKeysBySlug,
  bogotaMestizoNightSources,
} from "./sources.mjs";

export const bogotaMestizoNightEvidenceMatrix = {
  "el-hombre-del-farol": [
    {
      claim:
        "Una antología reproduce un decreto del 3 de noviembre de 1828 que libera a Llanos porque Juan Miguel Acevedo declaró haber llevado el farol.",
      evidenceClass: "documento transcrito dentro de elaboración literaria",
      sourceKeys: ["villaPosseFarol", "banrepAcevedo"],
    },
    {
      claim:
        "Juan Miguel Acevedo participó en la Conspiración Septembrina y quedó asociado históricamente al farol.",
      evidenceClass: "historia política y autobiográfica",
      sourceKeys: [
        "banrepAcevedo",
        "museoSeptembrina",
        "societyFilologica",
      ],
    },
    {
      claim:
        "Labarcés, Francisca, vestuario, diálogos y motivaciones no quedaron triangulados como biografía independiente.",
      evidenceClass: "límite de atribución",
      sourceKeys: [
        "villaPosseFarol",
        "conjurationArchive",
        "museoSeptembrina",
      ],
    },
  ],
  "el-toro-en-el-ascensor": [
    {
      claim:
        "La crónica localizó prensa sobre una res que entró a un edificio de la carrera Octava y causó una muerte al abrirse el ascensor.",
      evidenceClass: "núcleo periodístico localizado indirectamente",
      sourceKeys: ["toroChronicle", "toroChronicleReview"],
    },
    {
      claim:
        "Años, recorridos y edificios varían entre testimonios: Bachué, Lara, Tequendama, Torre Colpatria y otros.",
      evidenceClass: "rumor urbano con cartografía inestable",
      sourceKeys: ["toroChronicle", "toro1996", "lopezBogotaCatalog"],
    },
    {
      claim:
        "Minotauro, tigres disfrazados, toreros, cardenal y fotografías destruidas no forman parte del núcleo corroborado.",
      evidenceClass: "desfusión editorial",
      sourceKeys: [
        "toroChronicle",
        "lopezBogotaCatalog",
        "toroChronicleReview",
      ],
    },
  ],
  "el-venado-de-oro": [
    {
      claim:
        "La versión institucional conserva a Diego Barreto, Inés y Pedro Domínguez, una cueva en Guadalupe y un venado de oro de tamaño natural.",
      evidenceClass: "leyenda atribuida en repertorio institucional",
      sourceKeys: ["scrdVenado", "vicachaCartilla", "lopezBogotaCatalog"],
    },
    {
      claim:
        "Cuernos retirados, espada como marca, huida a Casanare y regreso fatal pertenecen a la cadena narrativa difundida.",
      evidenceClass: "núcleo narrativo consistente",
      sourceKeys: ["scrdVenado", "tiendaAmbiguedades", "guacasHistory"],
    },
    {
      claim:
        "No se localizó respaldo para un chamán que transforma al venado por orden del Zipa ni para un animal vivo que guía almas.",
      evidenceClass: "exclusión por añadido no corroborado",
      sourceKeys: ["scrdVenado", "vicachaCartilla", "venadoReception"],
    },
  ],
  "la-bruja-del-tranvia": [
    {
      claim:
        "El relato directo es una carta mecanografiada ficticia de Ezequiel, incluida en un libro que declara usar documentos imaginarios.",
      evidenceClass: "ficción atribuida y fechada",
      sourceKeys: ["espantosFullText", "espantosOpenLibrary"],
    },
    {
      claim:
        "El tranvía blanco, la mujer, la felicidad y el supuesto juicio de 1948 pertenecen al artificio literario, no a un archivo judicial.",
      evidenceClass: "frontera entre ficción e historia",
      sourceKeys: ["espantosFullText", "archivoTransporte", "brujaRincon"],
    },
    {
      claim:
        "La Bruja del Cortijo es una cadena barrial distinta y no debe fusionarse con la carta de la Bruja del Tranvía.",
      evidenceClass: "desfusión territorial",
      sourceKeys: [
        "espantosFullText",
        "damaAdaptation",
        "fantasmagoriasStudy",
      ],
    },
  ],
  "la-monja-de-las-rosas": [
    {
      claim:
        "La fuente directa se presenta como un guion literario: padre, niña, mujer de negro, ramo amarillo y desaparición en el jardín.",
      evidenceClass: "guion ficticio atribuido",
      sourceKeys: ["espantosFullText", "espantosOpenLibrary", "espantosKoha"],
    },
    {
      claim:
        "La Quinta, su jardín y su colección son patrimonio real; la institución no registra una monja espectral.",
      evidenceClass: "contexto museológico documentado",
      sourceKeys: ["museoQuinta", "espantosFullText"],
    },
    {
      claim:
        "Monja blanca, guardiana cíclica y avistamientos recurrentes son expansiones posteriores, no escenas del guion consultado.",
      evidenceClass: "restauración de límites narrativos",
      sourceKeys: [
        "espantosFullText",
        "fantasmagoriasStudy",
        "espantosOpenLibrary",
      ],
    },
  ],
  "la-monja-vidente-y-el-taxista": [
    {
      claim:
        "La versión bogotana impresa y sus reproducciones conservan taxi, religiosa, funeraria, pago pendiente y hallazgo en el ataúd.",
      evidenceClass: "leyenda urbana publicada",
      sourceKeys: [
        "lopezBogotaCatalog",
        "bogotaViveMonja",
        "tourMonja",
      ],
    },
    {
      claim:
        "Tuluá conserva una variante viva del mismo motivo y no debe presentarse como prueba de un hecho ocurrido en Bogotá.",
      evidenceClass: "variante territorial migratoria",
      sourceKeys: ["radioNacionalMonja", "antiguaTuluaMonja"],
    },
    {
      claim:
        "Escándalos, lotería, placas ganadoras, taxi chatarrizado y conductor muerto no aparecen en el núcleo comparado.",
      evidenceClass: "desfusión de añadidos",
      sourceKeys: [
        "lopezBogotaCatalog",
        "bogotaViveMonja",
        "radioNacionalMonja",
      ],
    },
  ],
  "la-mula-herrada": [
    {
      claim:
        "El Bogotálogo conserva la mula ensillada de don Álvaro Sánchez, jugador de Las Nieves, y la casa de don Juan de Guevara.",
      evidenceClass: "leyenda patrimonial bogotana",
      sourceKeys: ["bogotalogoMula", "mulaDigital", "nievesHistory"],
    },
    {
      claim:
        "La memoria literaria demuestra circulación antigua del nombre sin convertir a Álvaro en una biografía comprobada.",
      evidenceClass: "recepción cultural",
      sourceKeys: ["caballeroMemory", "nievesHistory", "bogotalogoMula"],
    },
    {
      claim:
        "Honduras, México y el testimonio moderno de Raúl Romero pertenecen a otras versiones o a ficción y no al núcleo de Las Nieves.",
      evidenceClass: "desfusión territorial y autoral",
      sourceKeys: ["espantosFullText", "espantosOpenLibrary", "bogotalogoMula"],
    },
  ],
  "los-esqueletos-caminantes": [
    {
      claim:
        "El título exacto aparece como capítulo de Mitos y leyendas de Bogotá, obra literaria de Asdrúbal López Orozco publicada en 2008.",
      evidenceClass: "cadena bibliográfica directa",
      sourceKeys: ["lopezBogotaCatalog", "lopezBogotaSecondCatalog"],
    },
    {
      claim:
        "Un inventario comunitario menciona esqueletos andantes, pero no publica una narración ni testimonio anterior comparable.",
      evidenceClass: "recepción débil y no fechada",
      sourceKeys: ["bogotaTradition", "lopezBogotaCatalog"],
    },
    {
      claim:
        "La condición de no identificado no borra dignidad ni implica culpa, riqueza previa o abandono familiar.",
      evidenceClass: "corrección ética institucional",
      sourceKeys: ["medicinaName", "medicinaRnd"],
    },
  ],
};

export function assertBogotaMestizoNightEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(
    bogotaMestizoNightEvidenceMatrix,
  )) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(bogotaMestizoNightSourceKeysBySlug[slug]);
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !bogotaMestizoNightSources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
