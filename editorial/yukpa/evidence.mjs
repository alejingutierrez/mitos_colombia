import { yukpaSources } from "./sources.mjs";

export const yukpaEvidenceMatrix = {
  "los-dos-caminos-del-cielo": [
    {
      claim:
        "Al comienzo había claridad y calor continuos porque dos hermanos ocupaban el lugar del Sol.",
      sourceKeys: [
        "halbMayerGoletz2025",
        "minCulturaYukpa",
        "andeanMyths",
      ],
    },
    {
      claim:
        "Kopeco engaña a uno de los hermanos, quien cae o entra en un lugar de brasas y termina convertido en Luna.",
      sourceKeys: [
        "andeanMyths",
        "halbMayer2016",
        "halbMayerGoletz2025",
      ],
    },
    {
      claim:
        "La diferenciación entre Sol y Luna introduce noche, ritmos y contrastes estacionales.",
      sourceKeys: [
        "halbMayer2016",
        "halbMayerGoletz2025",
        "minCulturaYukpa",
      ],
    },
  ],
  "la-piedra-que-flota": [
    {
      claim:
        "El diluvio Yukpa incluye lluvias prolongadas, oscuridad y destrucción parcial del mundo.",
      sourceKeys: [
        "halbMayerGoletz2025",
        "minCulturaYukpa",
        "halbMayer2016",
      ],
    },
    {
      claim:
        "Las versiones sitúan supervivientes en montañas altas del Perijá y difieren sobre quién advierte el peligro.",
      sourceKeys: [
        "halbMayerGoletz2025",
        "halbMayerGoletz2018",
        "minCulturaYukpa",
      ],
    },
    {
      claim:
        "Los armadillos ayudan a retirar el agua y a restablecer separaciones necesarias para la vida.",
      sourceKeys: [
        "halbMayerGoletz2025",
        "halbMayer2016",
        "minCulturaYukpa",
      ],
    },
  ],
  "aponto-y-el-arbol-manurhacha": [
    {
      claim:
        "El pájaro carpintero Sakurharhsh descubre personas dentro del árbol sangrante Manurhacha.",
      sourceKeys: [
        "halbMayerGoletz2018",
        "halbMayer2016",
        "planVidaYukpa",
      ],
    },
    {
      claim:
        "Aponto libera o fabrica personas de madera y les forma articulaciones para que puedan moverse.",
      sourceKeys: [
        "planVidaYukpa",
        "halbMayerGoletz2018",
        "halbMayer2016",
      ],
    },
    {
      claim:
        "Habla, risa y movimiento aparecen como transformaciones, no como creación desde la nada.",
      sourceKeys: [
        "halbMayer2016",
        "planVidaYukpa",
        "halbMayerGoletz2018",
      ],
    },
  ],
  "los-gemelos-yirhwach-y-las-constelaciones": [
    {
      claim:
        "Note encuentra dos huevos vinculados con una mujer asesinada y cría a los gemelos con Motorsh.",
      sourceKeys: [
        "halbMayerGoletz2018",
        "halbMayer2016",
        "halbMayerGoletz2025",
      ],
    },
    {
      claim:
        "Los gemelos descubren su origen, vencen a los jaguares responsables y cruzan con ayuda de Sakucha.",
      sourceKeys: [
        "halbMayerGoletz2018",
        "halbMayer2016",
        "minCulturaYukpa",
      ],
    },
    {
      claim:
        "Gemelos, Motorsh y Sakucha ascienden como figuras celestes vinculadas con Taurus, Aldebarán, Orión y la lluvia.",
      sourceKeys: [
        "halbMayerGoletz2018",
        "halbMayer2016",
        "halbMayerGoletz2025",
      ],
    },
  ],
  "me-el-dueno-del-maiz": [
    {
      claim:
        "Mé es dueño del maíz cariaco y su hijo Mésh recibe alimento transportado por una ardilla.",
      sourceKeys: [
        "meDuenoMaiz",
        "lecHisYup",
        "halbMayer2016",
      ],
    },
    {
      claim:
        "Atántocha reconoce el maíz que otros cazadores habían rechazado y abre una relación con Mé.",
      sourceKeys: [
        "meDuenoMaiz",
        "lecHisYup",
        "externoYukpa2024",
      ],
    },
    {
      claim:
        "La narración enlaza distribución, selección de semilla, nueva siembra y fiesta de cosecha.",
      sourceKeys: [
        "meDuenoMaiz",
        "externoYukpa2024",
        "minCulturaYukpa",
      ],
    },
  ],
};

export function assertYukpaEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(yukpaEvidenceMatrix)) {
    if (claims.length < 3) {
      throw new Error(`${slug}: se requieren tres afirmaciones controladas.`);
    }
    for (const { claim, sourceKeys } of claims) {
      if (!claim || sourceKeys.length < 3) {
        throw new Error(`${slug}: afirmación sin triangulación suficiente.`);
      }
      for (const key of sourceKeys) {
        if (!yukpaSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
