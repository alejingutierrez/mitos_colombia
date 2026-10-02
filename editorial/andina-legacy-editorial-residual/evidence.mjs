import { andinaLegacyEditorialResidualSources } from "./sources.mjs";

export const andinaLegacyEditorialResidualEvidenceMatrix = {
  "catalina-la-napanga": [
    {
      claim:
        "Catalina de Belalcázar y Francisco García de Tobar murieron a manos de Lorenzo de Paz Maldonado en 1591 y se abrió una causa criminal.",
      evidenceClass: "hecho histórico documentado",
      sourceKeys: ["zasquaCase", "salcedoWomenPopayan", "llanosElitePopayan"],
    },
    {
      claim:
        "Los testigos discreparon sobre la visita de García de Tobar y las pruebas de una relación sexual eran circunstanciales.",
      evidenceClass: "incertidumbre archivística",
      sourceKeys: ["zasquaCase", "salcedoWomenPopayan"],
    },
    {
      claim:
        "El expediente y su estudio registran violencia conyugal previa, condena y una apelación cuyo desenlace no consta en los folios hoy catalogados.",
      evidenceClass: "contexto histórico documentado",
      sourceKeys: ["salcedoWomenPopayan", "zasquaCase", "tobarDrama"],
    },
    {
      claim:
        "La ñapanga hechizada de amor es una recreación de Marco Antonio Valencia Calle presentada como literatura y realismo mágico.",
      evidenceClass: "mediación literaria documentada",
      sourceKeys: ["ivooxCatalina", "udesLegends", "proclamaLegends"],
    },
    {
      claim:
        "Fuentes contemporáneas describen la ñapanga payanesa, pero no prueban que Catalina asumiera esa identidad o indumentaria en el siglo XVI.",
      evidenceClass: "límite documental",
      sourceKeys: ["unicaucaNapanga", "ivooxCatalina", "zasquaCase"],
    },
    {
      claim:
        "La revisión conserva juntas la recepción literaria y la causa judicial sin afirmar adulterio, poeta mestizo, disfraz ni hechizo como hechos.",
      evidenceClass: "decisión editorial",
      sourceKeys: ["zasquaCase", "salcedoWomenPopayan", "ivooxCatalina"],
    },
  ],
  "el-hada-de-los-canaverales": [
    {
      claim:
        "Ninguna fuente seleccionada contiene un hada de los cañaverales ni establece una tradición oral independiente con ese nombre.",
      evidenceClass: "ausencia declarada de tradición",
      sourceKeys: ["isaacsCane", "cvcSonso", "univalleStrike", "virajesCutters"],
    },
    {
      claim:
        "La caña transformó desde el periodo colonial el paisaje, el riego, el trabajo, las haciendas y las economías campesinas del Valle.",
      evidenceClass: "contexto histórico documentado",
      sourceKeys: ["isaacsCane"],
    },
    {
      claim:
        "La Laguna de Sonso y otros humedales de la zona plana dependen de redes hídricas y han sufrido alteraciones antrópicas.",
      evidenceClass: "contexto ambiental documentado",
      sourceKeys: ["cvcSonso", "cvcWetlands", "univalleEnvironmental"],
    },
    {
      claim:
        "Los corteros deben representarse como actores laborales y políticos con experiencias propias, no como decoración ni portadores ficticios del hada.",
      evidenceClass: "contexto laboral documentado",
      sourceKeys: ["univalleStrike", "virajesCutters", "unalCutters"],
    },
    {
      claim:
        "La regulación de quemas y la restauración ambiental son acciones institucionales y colectivas, no efectos de magia.",
      evidenceClass: "contexto institucional documentado",
      sourceKeys: ["cvcBurns", "univalleEnvironmental"],
    },
    {
      claim:
        "La ruta se conserva sin despublicar y se rotula como fábula contemporánea del sitio, con personaje y trama de autoría editorial explícita.",
      evidenceClass: "decisión editorial",
      sourceKeys: [
        "isaacsCane",
        "cvcSonso",
        "univalleStrike",
        "univalleEnvironmental",
      ],
    },
  ],
  "el-silbo-de-quinunchu": [
    {
      claim:
        "Cieza identifica a Quinunchú como hermano y lugarteniente de Nutibara en las montañas de Abibe.",
      evidenceClass: "crónica colonial atribuida",
      sourceKeys: ["ciezaChronicle", "cambridgeCieza"],
    },
    {
      claim:
        "La organización de Guacá puede reconstruirse como cogobierno de dos hermanos, con Quinunchú al mando cerca de Urabá y Abibe.",
      evidenceClass: "reconstrucción histórica documentada",
      sourceKeys: ["correaTerritorialization", "banrepZenu", "frontinoHistory"],
    },
    {
      claim:
        "Quinunchú murió resistiendo la expedición de Francisco César y los relatos posteriores modificaron el detalle y el sentido de su muerte.",
      evidenceClass: "variante historiográfica documentada",
      sourceKeys: ["correaTerritorialization", "correalLeaders", "historyColombia1911"],
    },
    {
      claim:
        "La expedición obtuvo oro mediante botín y saqueo de cuerpos y sepulcros, dentro de una penetración territorial violenta.",
      evidenceClass: "contexto histórico documentado",
      sourceKeys: ["correaTerritorialization", "banrepZenu"],
    },
    {
      claim:
        "La memoria antioqueña incorporó a Nutibara y Quinunchú en repertorios históricos y legendarios posteriores.",
      evidenceClass: "recepción documentada",
      sourceKeys: ["ocampoAntioquia", "historyColombia1911", "frontinoHistory"],
    },
    {
      claim:
        "Ninguna fuente seleccionada contiene el silbo sobrenatural, la Dueña del Monte, guacas protegidas ni un camino mágico.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["ciezaChronicle", "correaTerritorialization", "ocampoAntioquia"],
    },
    {
      claim:
        "Las crónicas fueron escritas desde el mundo colonial y no equivalen a la voz directa de quienes defendieron Guacá.",
      evidenceClass: "límite documental",
      sourceKeys: ["ciezaChronicle", "correaTerritorialization", "correalLeaders"],
    },
  ],
};

const allowedClasses = new Set([
  "hecho histórico documentado",
  "incertidumbre archivística",
  "contexto histórico documentado",
  "mediación literaria documentada",
  "límite documental",
  "decisión editorial",
  "ausencia declarada de tradición",
  "contexto ambiental documentado",
  "contexto laboral documentado",
  "contexto institucional documentado",
  "crónica colonial atribuida",
  "reconstrucción histórica documentada",
  "variante historiográfica documentada",
  "recepción documentada",
  "descarte editorial",
]);

export function assertAndinaLegacyEditorialResidualEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(
    andinaLegacyEditorialResidualEvidenceMatrix,
  )) {
    if (claims.length < 5) {
      throw new Error(`${slug}: se requieren cinco decisiones de evidencia.`);
    }
    for (const { claim, evidenceClass, sourceKeys } of claims) {
      if (
        !claim ||
        !allowedClasses.has(evidenceClass) ||
        !sourceKeys.length ||
        new Set(sourceKeys).size !== sourceKeys.length
      ) {
        throw new Error(`${slug}: entrada de evidencia incompleta.`);
      }
      for (const key of sourceKeys) {
        if (!andinaLegacyEditorialResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
