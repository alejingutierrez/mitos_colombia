import { caribeMestizoFinalCatalog } from "./catalog.mjs";
import {
  caribeMestizoFinalSources,
  sourceKeysForCaribeMestizoFinalGroup,
} from "./sources.mjs";

const attributionByGroup = {
  martinez:
    "La ruta deriva de Cuentos y leyendas de Cartagena, obra firmada por Eustorgio Martínez Fajardo y publicada en edición controlable de 1948.",
  zapata:
    "La ruta figura en la selección cordobesa atribuida a Manuel Zapata Olivella dentro de Colombia, cuento popular.",
  list:
    "La ruta figura en Animal Tales from the Caribbean, corpus de cuentos costeños registrado por George List y editado académicamente en 2017.",
  unresolved:
    "La ruta conserva una versión heredada del sitio; la búsqueda no localizó una fuente primaria exacta que identifique redacción, informante y procedencia.",
  buenaventura:
    "La referencia controlable registra Tío Conejo zapatero como adaptación de Enrique Buenaventura de 1958 basada en tradición oral del Pacífico.",
  otero:
    "La ruta deriva de una leyenda histórica firmada por Enrique Otero D’Costa y publicada en el texto primario consultado.",
  morgan:
    "La tradición del tesoro de Morgan posee circulación oral isleña y una búsqueda estatal documentada, sin hallazgo material concluyente.",
  francisco:
    "Francisco el Hombre es una leyenda vallenata ampliamente documentada y asociada con Francisco Moscote, sin biografía ni variante únicas.",
};

export const caribeMestizoFinalEvidenceMatrix = Object.fromEntries(
  caribeMestizoFinalCatalog.map((entry) => {
    const sourceKeys = sourceKeysForCaribeMestizoFinalGroup(entry.group);
    return [
      entry.slug,
      [
        {
          claim: attributionByGroup[entry.group],
          evidenceClass: "atribución documental",
          sourceKeys: sourceKeys.slice(0, 3),
        },
        {
          claim: entry.core,
          evidenceClass: "núcleo narrativo documentado",
          sourceKeys: sourceKeys.slice(0, 3),
        },
        {
          claim:
            entry.boundary ||
            "Los detalles internos se conservan atribuidos al cuento y no se convierten en hechos históricos o etnográficos externos.",
          evidenceClass: "límite documental",
          sourceKeys: sourceKeys.slice(0, 4),
        },
        {
          claim:
            "Las fuentes del expediente cumplen funciones distintas —texto, catálogo, contexto, recepción o comparación— y no cuentan como testimonios equivalentes.",
          evidenceClass: "frontera narrativa documentada",
          sourceKeys,
        },
        {
          claim:
            entry.group === "unresolved"
              ? "No se inventa una cita para cubrir la brecha y no se afirma origen cordobés exacto; la versión permanece publicada con incertidumbre visible."
              : "No se presenta la pieza como tradición anónima uniforme, hecho sobrenatural probado, consejo de salud, autorización de violencia o voz total de una comunidad.",
          evidenceClass: "descarte editorial",
          sourceKeys: sourceKeys.slice(0, 5),
        },
        {
          claim:
            "La URL se conserva dentro de Caribe/Mestizo y queda pendiente de una portada horizontal y una escena vertical propias con procedencia OpenAI verificable.",
          evidenceClass: "decisión editorial",
          sourceKeys: sourceKeys.slice(0, 3),
        },
      ],
    ];
  }),
);

const allowedClasses = new Set([
  "atribución documental",
  "núcleo narrativo documentado",
  "límite documental",
  "frontera narrativa documentada",
  "descarte editorial",
  "decisión editorial",
]);

export function assertCaribeMestizoFinalEvidenceMatrix() {
  if (Object.keys(caribeMestizoFinalEvidenceMatrix).length !== 70) {
    throw new Error("La matriz debe cubrir las setenta rutas.");
  }
  for (const [slug, claims] of Object.entries(caribeMestizoFinalEvidenceMatrix)) {
    if (claims.length < 5) throw new Error(`${slug}: evidencia insuficiente.`);
    for (const { claim, evidenceClass, sourceKeys } of claims) {
      if (!claim || !allowedClasses.has(evidenceClass) || !sourceKeys.length) {
        throw new Error(`${slug}: entrada de evidencia incompleta.`);
      }
      if (new Set(sourceKeys).size !== sourceKeys.length) {
        throw new Error(`${slug}: una afirmación repite fuentes.`);
      }
      for (const key of sourceKeys) {
        if (!caribeMestizoFinalSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
