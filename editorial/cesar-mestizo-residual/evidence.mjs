import { cesarMestizoResidualSources } from "./sources.mjs";

export const cesarMestizoResidualEvidenceMatrix = {
  "la-bruja-del-trinche": [
    {
      claim:
        "Andrés Montúfar fue un acordeonero de la primera generación, viajero de la Escuela Central y rival de Luis Pitre.",
      evidenceClass: "contexto biográfico documentado",
      sourceKeys: ["uninorteJuglares", "culturaVallenata"],
    },
    {
      claim:
        "La secuencia legendaria de Los Venados reúne ofensa, Dolores Escalona, brebaje, traslado, ave, serpiente y voz final.",
      evidenceClass: "núcleo legendario atribuido",
      sourceKeys: ["panoramaCorreos", "panoramaPersonajes"],
    },
    {
      claim:
        "Las fuentes breves y populares cambian el papel del diablo, la serpiente y el lugar de nacimiento de Montúfar.",
      evidenceClass: "variante documentada",
      sourceKeys: ["rosarioFolclor", "ospinoMontufar", "panoramaPersonajes"],
    },
    {
      claim:
        "El trinche y la cruz formada con la guacharaca pertenecen al relato de Quín Vásquez, no al castigo de Dolores Escalona.",
      evidenceClass: "corrección de fusión",
      sourceKeys: ["panoramaCorreos"],
    },
    {
      claim:
        "La documentación escogida acredita al músico y la circulación del relato, pero no una muerte sobrenatural ni los poderes históricos de Dolores.",
      evidenceClass: "límite documental",
      sourceKeys: ["uninorteJuglares", "panoramaCorreos", "rosarioFolclor"],
    },
    {
      claim:
        "Francisco el Hombre y Quín Vásquez son comparaciones directas del mismo repertorio vallenato, con desenlaces distintos frente al diablo.",
      evidenceClass: "comparación directa",
      sourceKeys: ["festivalLegends", "panoramaCorreos"],
    },
  ],
  "la-sirena-de-hurtado": [
    {
      claim:
        "El núcleo compartido contiene a Rosario Arciniegas, el Pozo de Hurtado, Jueves Santo, transformación, búsqueda y despedida del Viernes.",
      evidenceClass: "núcleo legendario atribuido",
      sourceKeys: ["festivalLegends", "corpocesarPomca", "semanarioRosario"],
    },
    {
      claim:
        "Las versiones cambian entre padre y padres, canto de los jueves, apariciones en Semana Santa y encuentros con trasnochadores.",
      evidenceClass: "variante documentada",
      sourceKeys: ["festivalLegends", "corpocesarPomca", "semanarioRosario"],
    },
    {
      claim:
        "La escultura de Jorge Maestre convirtió la figura en símbolo urbano, pero las fuentes discrepan entre 1994 y 1998.",
      evidenceClass: "recepción patrimonial documentada",
      sourceKeys: ["corpocesarPomca", "uparMonumental", "elPilonSirena"],
    },
    {
      claim:
        "La recepción turística contemporánea no es una versión oral independiente ni permite inventar que el río adopta a Rosario o premia su deseo.",
      evidenceClass: "descarte editorial",
      sourceKeys: ["semanaSirena", "elPilonSirena"],
    },
    {
      claim:
        "Las fuentes seleccionadas no establecen fecha de origen, persona histórica comprobada ni transformación física verificable.",
      evidenceClass: "límite documental",
      sourceKeys: ["festivalLegends", "corpocesarPomca"],
    },
    {
      claim:
        "Madre de Agua y Mohana permiten dos comparaciones directas con mujeres acuáticas sin afirmar una sola genealogía nacional.",
      evidenceClass: "comparación directa",
      sourceKeys: ["culturaMotherWater", "banrepMohana"],
    },
  ],
};

const allowedClasses = new Set([
  "contexto biográfico documentado",
  "núcleo legendario atribuido",
  "variante documentada",
  "corrección de fusión",
  "recepción patrimonial documentada",
  "comparación directa",
  "límite documental",
  "descarte editorial",
]);

export function assertCesarMestizoResidualEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(
    cesarMestizoResidualEvidenceMatrix,
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
        if (!cesarMestizoResidualSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
