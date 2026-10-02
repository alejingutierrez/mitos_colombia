import { yaguaSources } from "./sources.mjs";

const cycles = {
  yagua: [
    "El ciclo reúne el nacimiento extraordinario de Ndanu y Mêna, la reunión de los clanes y la caída del árbol que contenía el agua.",
    "Powlison y Chaumeil atribuyen de manera distinta qué hermano transforma, consigue objetos o toma la iniciativa.",
    "El material educativo colombiano reconoce a Ndanu y Mêna dentro de la memoria Yagua contemporánea.",
  ],
  "luna-y-sol-yagua": [
    "Powlison delimita Luna y Sol como uno de seis ciclos comparables y conserva versiones atribuidas.",
    "El ciclo cambia el orden de ascenso, persecución y transformación según el narrador.",
    "El perfil colombiano nombra Luna y Sol entre los relatos Yagua sin ofrecer una versión completa adicional.",
  ],
  "tortuga-y-jaguar-yagua": [
    "Powlison documenta el enfrentamiento entre Tortuga y Jaguar dentro de un ciclo conectado con Luna y Sol.",
    "Las versiones cambian ayudantes, trampas, muertes y continuidad con otros episodios.",
    "La adaptación separa este ciclo de los mellizos y no convierte toda aparición de jaguar en un mismo relato.",
  ],
  "el-huerfano-yagua": [
    "Powlison conserva un ciclo del Huérfano y su compañero creado, con búsqueda, pérdida e inundación.",
    "Las versiones difieren en la forma del compañero, el viaje y el desenlace.",
    "La ficha no traslada nombres o detalles desde la recreación literaria de Petita.",
  ],
  "el-calvito-yagua": [
    "Powlison reúne quince episodios del viajero llamado Calvito tras escapar de una boa.",
    "El propio estudio advierte que este ciclo no encaja claramente en su patrón comparativo de mellizos.",
    "La adaptación conserva viaje, ayudas y regreso, y omite episodios no necesarios para la continuidad.",
  ],
  "los-mellizos-de-avispa-yagua": [
    "La versión principal presenta a Mocayu y dos mellizos nacidos de una picadura de avispa.",
    "Una versión incompatible hace nacer a Mocayu del muslo y explica la pérdida de bienes ya terminados.",
    "La edición sigue una secuencia atribuida y mantiene la otra en Versiones.",
  ],
};

export const yaguaEvidenceMatrix = Object.fromEntries([
  ...Object.entries(cycles).map(([slug, claims]) => [
    slug,
    claims.map((claim, index) => ({
      claim,
      evidenceClass:
        index === 0
          ? "núcleo documentado"
          : index === 1
            ? "variante identificada"
            : "lectura editorial",
      sourceKeys:
        index === 2
          ? ["powlison1993", "minCulturaColombia", "unicef2012"]
          : ["powlison1993", "chaumeil1978", "chaumeil1994"],
    })),
  ]),
  [
    "chimbilaco",
    [
      {
        claim:
          "Gallego registra una figura humana alada que sobrevuela ríos y quebradas de noche y amenaza a pescadores.",
        evidenceClass: "núcleo documentado",
        sourceKeys: ["gallego2011"],
      },
      {
        claim:
          "Habitantes Yagua de La Libertad relacionaban el chimbilaco con botes turísticos nocturnos.",
        evidenceClass: "memoria contemporánea",
        sourceKeys: ["gallego2011", "ramos2021"],
      },
      {
        claim:
          "El cortacabezas circula como rumor interétnico y transfronterizo, no como ciclo ancestral exclusivo Yagua.",
        evidenceClass: "hipótesis académica",
        sourceKeys: ["cure2005", "gallego2011"],
      },
    ],
  ],
]);

const allowedClasses = new Set([
  "núcleo documentado",
  "variante identificada",
  "memoria contemporánea",
  "hipótesis académica",
  "lectura editorial",
  "duda",
]);

export function assertYaguaEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(yaguaEvidenceMatrix)) {
    if (claims.length < 3) {
      throw new Error(`${slug}: se requieren tres decisiones de evidencia.`);
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
        if (!yaguaSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
