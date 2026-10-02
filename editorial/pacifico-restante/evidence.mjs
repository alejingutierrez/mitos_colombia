import {
  pacificoRestanteSourceKeysBySlug,
  pacificoRestanteSources,
} from "./sources.mjs";

export const pacificoRestanteEvidenceMatrix = {
  buziraco: [
    {
      claim:
        "La leyenda caleña relaciona calamidades, Buziraco, los hermanos Cuesta y las cruces de guadua de 1837.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["caliBuziraco", "caliTresCruces", "tiempoTresCruces"],
    },
    {
      claim:
        "El terremoto de 1925 fue un hecho físico después incorporado a la explicación legendaria.",
      evidenceClass: "contexto histórico con frontera",
      sourceKeys: ["sismoCali1925", "caliBuziraco"],
    },
    {
      claim:
        "La asociación de personas negras y músicas africanas con el demonio debe tratarse como demonización racial, no como descripción neutral.",
      evidenceClass: "lectura crítica",
      sourceKeys: ["caliBuziraco", "universalBuziraco"],
    },
  ],
  "el-caballo-del-morro": [
    {
      claim:
        "El traslado de los restos de Babieca a Popayán es un cuento firmado por Marco Antonio Valencia Calle.",
      evidenceClass: "texto literario primario",
      sourceKeys: ["valenciaCaballo", "proclamaLeyendasPopayan"],
    },
    {
      claim:
        "El Morro es un sitio arqueológico y un espacio contemporáneo de memoria disputada.",
      evidenceClass: "contexto separado",
      sourceKeys: [
        "icanhMorro",
        "banrepBelalcazar",
        "memoriaMisakMorro",
        "espectadorMorro",
      ],
    },
  ],
  "el-roble-del-caballero": [
    {
      claim:
        "Muerte y entierro del Quijote en Popayán contiene viaje, velación, cortejo y entierro en la Torre del Reloj.",
      evidenceClass: "texto literario primario",
      sourceKeys: [
        "valenciaQuijoteText",
        "valenciaQuijotePage",
        "proclamaQuijote",
      ],
    },
    {
      claim:
        "El roble guardián heredado no aparece en el cuento; el texto menciona un árbol de corcho como propuesta descartada.",
      evidenceClass: "exclusión editorial",
      sourceKeys: ["valenciaQuijoteText"],
    },
    {
      claim:
        "Popayán y sus instituciones ofrecen contexto real, pero no validan la cronología fantástica.",
      evidenceClass: "contexto histórico",
      sourceKeys: [
        "portafolioPopayan",
        "alcaldiaPopayan",
        "unicaucaArchivo",
      ],
    },
  ],
  "la-yesca": [
    {
      claim:
        "La Yesca se describe como daño asociado con brujo o chinango y a veces como bejucos o ramas que abrazan y ahogan.",
      evidenceClass: "núcleo escaso",
      sourceKeys: ["guiaChocoYesca", "turismoChocoYesca", "blogGuiaChoco"],
    },
    {
      claim:
        "El paisaje de lianas y el contexto chocoano no prueban especie, ritual, localidad ni atribución comunitaria.",
      evidenceClass: "contexto con frontera",
      sourceKeys: ["scieloLianas", "iiapChoco", "minambienteAtrato"],
    },
  ],
  "el-duende-peluquero": [
    {
      claim:
        "Una niña fue encontrada sana en Dagua y la comunidad atribuyó su extravío a un duende.",
      evidenceClass: "reporte contemporáneo atribuido",
      sourceKeys: ["colombiaDagua", "tiempoDagua"],
    },
    {
      claim:
        "Crines trenzadas, objetos movidos y niños atraídos al bosque son motivos comparables, no prueba de un mismo personaje.",
      evidenceClass: "motivo extendido",
      sourceKeys: ["colombiaDagua", "culturaDuende", "rcnTrenzas"],
    },
    {
      claim:
        "Los encuentros de narradores de Buga no trasladan el caso de Dagua a Buga o Yotoco.",
      evidenceClass: "frontera territorial",
      sourceKeys: ["flacsoBuga", "bugaNarradores"],
    },
  ],
  "la-casa-de-la-tradicion": [
    {
      claim:
        "Una divulgación turística sitúa en San Antonio una casa con pasos y voces de antiguos moradores.",
      evidenceClass: "núcleo escaso",
      sourceKeys: ["visitCaliCasa"],
    },
    {
      claim:
        "San Antonio posee valor histórico y arquitectónico, pero ninguna fuente identifica la vivienda del relato.",
      evidenceClass: "contexto patrimonial",
      sourceKeys: [
        "idescSanAntonio",
        "planPatrimonioCali",
        "pempCali",
        "visitCaliSanAntonio",
        "acuerdoPatrimonioCali",
      ],
    },
  ],
  "la-piramide-del-chontaduro": [
    {
      claim:
        "Una versión explica la pirámide mediante un sueño para honrar a Dios y otra mediante un sueño con un número de lotería.",
      evidenceClass: "rumores contemporáneos incompatibles",
      sourceKeys: ["besamePiramide", "paisPiramide", "tubarcoPiramide"],
    },
    {
      claim:
        "Las fuentes institucionales ubican Chontaduro, pero no prueban constructor, fecha, premio ni antigüedad.",
      evidenceClass: "contexto territorial",
      sourceKeys: [
        "palmiraChontaduro",
        "cvcChontaduro",
        "univalleChontaduro",
      ],
    },
  ],
  "el-barco-fantasma": [
    {
      claim:
        "El Maravelí aparece alrededor de embarcaciones, desorienta tripulaciones e inutiliza instrumentos hasta el día siguiente.",
      evidenceClass: "núcleo documentado",
      sourceKeys: ["univalleMaravelly", "preziMaravelly"],
    },
    {
      claim:
        "Navegación eterna, lamentos, instrumentos antiguos y almas atribuladas pertenecen a circulaciones mediadas.",
      evidenceClass: "variantes y adaptaciones",
      sourceKeys: [
        "espectadorMaraveli",
        "panamericanaMaraveli",
        "rtvcBarco",
        "maguareBarco",
      ],
    },
    {
      claim:
        "El Maravelí y el Riviel comparten mar y noche, pero son relatos separados.",
      evidenceClass: "frontera de ciclo",
      sourceKeys: [
        "univalleMaravelly",
        "espectadorMaraveli",
        "maguareBarco",
      ],
    },
  ],
};

export function assertPacificoRestanteEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(
    pacificoRestanteEvidenceMatrix,
  )) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(pacificoRestanteSourceKeysBySlug[slug]);
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !pacificoRestanteSources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
