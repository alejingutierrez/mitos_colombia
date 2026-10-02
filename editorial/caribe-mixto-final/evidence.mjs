import { caribeMixtoFinalSources } from "./sources.mjs";

function raizalEvidence(directClaim, boundaryClaim, discardClaim) {
  return [
    {
      claim: directClaim,
      evidenceClass: "motivo narrativo documentado",
      sourceKeys: ["friedemannPrimary", "folclorIdentidad", "cuentoPopular"],
    },
    {
      claim:
        "El corpus procede de grabaciones realizadas en 1965 con habitantes de Ground Road y Sound Bay y fue transcrito con apoyo de Lynn Newball.",
      evidenceClass: "procedencia de archivo documentada",
      sourceKeys: ["friedemannPrimary", "cuentoPopular"],
    },
    {
      claim:
        "Anancy es una figura variable del repertorio raizal y afrocaribeño: puede cambiar de forma, género y función moral según la narración.",
      evidenceClass: "contexto cultural documentado",
      sourceKeys: ["banrepAnancy", "duncan2015", "locAnansi"],
    },
    {
      claim:
        "La oralidad, el creole y la transmisión entre generaciones son parte del sentido del corpus y no errores que deban normalizarse como inglés o español defectuoso.",
      evidenceClass: "contexto lingüístico documentado",
      sourceKeys: ["botero2007", "leipold2002", "friedemannPrimary"],
    },
    {
      claim: boundaryClaim,
      evidenceClass: "frontera narrativa documentada",
      sourceKeys: ["folclorIdentidad", "cuentoPopular"],
    },
    {
      claim: discardClaim,
      evidenceClass: "descarte editorial",
      sourceKeys: ["friedemannPrimary", "folclorIdentidad", "cuentoPopular"],
    },
    {
      claim:
        "La URL permanece publicada en Caribe > San Andrés > Mixto como solución taxonómica heredada, pero la ficha nombra explícitamente su procedencia raizal.",
      evidenceClass: "decisión editorial",
      sourceKeys: ["banrepAnancy", "botero2007", "leipold2002"],
    },
  ];
}

export const caribeMixtoFinalEvidenceMatrix = {
  "beda-nansi-beda-monkey-y-el-molino": raizalEvidence(
    "La transcripción conserva un molino que atrapa y lanza, una barra usada como trampa, animales engañados y a Beda Monkey observando e invirtiendo el procedimiento.",
    "El cuento del molino es distinto de Mico y Nansi: comparte personajes del ciclo, pero no el cerdo, los perros de caza ni el rejo.",
    "Destinos, estrellas, estaciones, ceremonias y una máquina ancestral no aparecen en el registro y se retiran.",
  ),
  "mico-y-nansi": raizalEvidence(
    "La fuente registra que los perros de Mico cazan un cerdo, Nansi exhibe una cabeza seca de perro y Mico recupera la presa mediante el sonido de un rejo.",
    "La cabeza seca funciona como evidencia falsa del engaño y no queda documentada como talla mágica, máscara ritual ni objeto ancestral.",
    "Ceremonias de caza, palabras ancestrales, hilos solares y un bosque cósmico fueron añadidos por la ficha anterior y se retiran.",
  ),
  "tiger-y-el-baile-de-perros": raizalEvidence(
    "El relato hecho en español explica que los perros colgaron sus bundas en un baile, huyeron al llegar Tiger y desde entonces se olfatean buscando el propio.",
    "Las rimas de Miss Nansi, el canto de Ahnansi y la adivinanza aparecen después en la colección, pero no son episodios, hechizos ni profecías del baile.",
    "El Gran Baile de Gala, la comunión de identidades, la plegaria y la redención de los perros carecen de respaldo y se retiran.",
  ),
  "tigre-y-nansi": raizalEvidence(
    "La antología conserva una boda, una variante norteña de rivalidad por muchachas y un episodio contiguo en que Nansi engaña a Tiger con escamas que parecen oro.",
    "Las dos variantes y el fragmento de persecución se presentan por separado; su proximidad editorial no demuestra un único relato lineal.",
    "Se corrige Oída Nansi por Old Nansi y se retiran selva mágica, río parlante, destino y psicología romántica no registrados.",
  ),
  "un-perro-una-cabra-y-beda-tiger": raizalEvidence(
    "La transcripción bilingüe conserva a perro, cabra y Beda Tiger, la advertencia musical, la fuga, el río y una olla que permite salvar a cabra.",
    "El texto creole y la traducción española son dos presentaciones del mismo argumento, no versiones narrativas independientes.",
    "El zorro de ojos zafiros, la luna disfrazada de cabra, toallas, batas, té y casa lujosa no aparecen en la fuente y se retiran.",
  ),
  "el-hombre-caiman": [
    {
      claim:
        "La leyenda se localiza en Plato, Magdalena, y presenta a Saúl Montenegro transformado en un híbrido de cabeza humana y cuerpo de caimán.",
      evidenceClass: "circulación regional documentada",
      sourceKeys: ["platoFestival", "unimagdalenaCaiman", "elTiempoTrenos"],
    },
    {
      claim:
        "Virgilio Di Filippo es recordado como compilador de relatos de pescadores y autor de crónicas de la década de 1940, pero el dossier no contiene las páginas originales de La Prensa.",
      evidenceClass: "historia de publicación documentada",
      sourceKeys: ["platoFestival", "congresoCaiman", "elTiempoTrenos"],
    },
    {
      claim:
        "Una variante centra el espionaje a bañistas y otra el amor contrariado con Roque Lina; no se funden como biografía continua.",
      evidenceClass: "variante regional documentada",
      sourceKeys: ["unimagdalenaCaiman", "platoFestival"],
    },
    {
      claim:
        "La canción de José María Peñaranda, el festival, el monumento y el telón del Teatro Santa Marta prueban recepción cultural, no existencia histórica de Saúl.",
      evidenceClass: "recepción pública documentada",
      sourceKeys: [
        "elTiempoSong",
        "platoFestival",
        "colombiaTravelCaiman",
        "minculturaCaiman",
      ],
    },
    {
      claim:
        "El caimán de oro Zenú pertenece a otra comunidad y función cosmológica; se usa para comparación y no como origen de Saúl.",
      evidenceClass: "frontera cultural documentada",
      sourceKeys: ["zenuCaimanComparison", "unimagdalenaCaiman"],
    },
    {
      claim:
        "La atribución del argumento moderno a creencias Chimila queda como afirmación institucional no corroborada por una fuente comunitaria Ette Ennaka en este dossier.",
      evidenceClass: "límite documental",
      sourceKeys: ["congresoCaiman", "platoFestival"],
    },
    {
      claim:
        "La URL se conserva y se transfiere de Caribe > Mixto a Caribe > Magdalena > Mestizo sin despublicarla.",
      evidenceClass: "decisión editorial",
      sourceKeys: ["platoFestival", "unimagdalenaCaiman", "congresoCaiman"],
    },
  ],
};

const allowedClasses = new Set([
  "motivo narrativo documentado",
  "procedencia de archivo documentada",
  "contexto cultural documentado",
  "contexto lingüístico documentado",
  "frontera narrativa documentada",
  "descarte editorial",
  "decisión editorial",
  "circulación regional documentada",
  "historia de publicación documentada",
  "variante regional documentada",
  "recepción pública documentada",
  "frontera cultural documentada",
  "límite documental",
]);

export function assertCaribeMixtoFinalEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(caribeMixtoFinalEvidenceMatrix)) {
    if (claims.length < 5) throw new Error(`${slug}: matriz insuficiente.`);
    for (const { claim, evidenceClass, sourceKeys } of claims) {
      if (
        !claim ||
        !allowedClasses.has(evidenceClass) ||
        !sourceKeys.length ||
        new Set(sourceKeys).size !== sourceKeys.length
      ) {
        throw new Error(`${slug}: evidencia incompleta.`);
      }
      for (const key of sourceKeys) {
        if (!caribeMixtoFinalSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
