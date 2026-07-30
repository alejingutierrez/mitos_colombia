export const yucunaEvidenceMatrix = {
  kanuma: [
    {
      claim:
        "Kanumá roba el Yuruparí a las primeras mujeres y ellas abandonan el Mirití.",
      sourceKeys: [
        "herreraKanuma",
        "herreraYurupari",
        "vanDerHammen1992",
      ],
    },
    {
      claim:
        "El mismo ciclo enlaza el regreso de chagra, piña, chontaduro y coca.",
      sourceKeys: [
        "herreraKanuma",
        "vanDerHammen1992",
        "villaPosse1993",
      ],
    },
    {
      claim:
        "Los rápidos y petroglifos del Mirití funcionan como memoria territorial de la persecución.",
      sourceKeys: [
        "herreraKanuma",
        "vanDerHammen1992",
        "fontaine2011",
      ],
    },
  ],
  "el-nacimiento-de-los-matapi": [
    {
      claim:
        "La historia abre con el nacimiento conjunto de Matapí y Yukuna en el entorno de Yuinata.",
      sourceKeys: [
        "herreraMatapi",
        "vanDerHammen1992",
        "villaPosse1993",
      ],
    },
    {
      claim:
        "Upichiya es la autodenominación documentada para los Matapí de la narración.",
      sourceKeys: [
        "herreraMatapi",
        "vanDerHammen1992",
        "fontaine2014",
      ],
    },
    {
      claim:
        "Ka'amarí e Himuri pertenecen a una historia ancestral de parentesco, conflicto y descendencia, no a una cosmogonía genérica.",
      sourceKeys: [
        "herreraMatapi",
        "vanDerHammen1992",
        "jacopin1972",
      ],
    },
  ],
  "karipu-lakena-y-la-primera-noche": [
    {
      claim:
        "Los Karipú Lakena son cuatro hijos del mundo que obtienen elementos necesarios para la vida social.",
      sourceKeys: [
        "fontaine2014",
        "vanDerHammen1992",
        "onicYucuna",
      ],
    },
    {
      claim:
        "Las versiones de Mario Matapí y Milciades Yucuna difieren en episodios y secuencia, pero coinciden en la adquisición de la noche.",
      sourceKeys: [
        "fontaine2014",
        "fontaine2011",
        "vanDerHammen1992",
      ],
    },
    {
      claim:
        "La noche se presenta como necesaria y peligrosa, y la página no debe reproducir conjuros para manejarla.",
      sourceKeys: [
        "fontaine2014",
        "fontaine2011",
        "jacopin1972",
      ],
    },
  ],
  "el-origen-de-las-frutas": [
    {
      claim:
        "Moniya Amena pertenece al ciclo del Árbol de la Abundancia Huitoto-Muinane y no a la mitología Yucuna.",
      sourceKeys: [
        "urbina2010",
        "museoNacional",
        "banrepAmazonas",
      ],
    },
    {
      claim:
        "La versión pública del Putumayo con Monalla Tirisa y Cullo Buinayma es una adaptación sin narrador identificado.",
      sourceKeys: ["idartes2015", "unad2018", "urbina2010"],
    },
    {
      claim:
        "La caída del árbol y la formación del Amazonas pertenecen a variantes más amplias del mismo ciclo.",
      sourceKeys: [
        "urbina2010",
        "museoOro2000",
        "bibliotecaNacional",
      ],
    },
  ],
};

export function assertYucunaEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(yucunaEvidenceMatrix)) {
    if (rows.length < 3) {
      throw new Error(`${slug}: matriz de evidencia insuficiente.`);
    }
    for (const row of rows) {
      if (!row.claim || row.sourceKeys.length < 3) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      if (new Set(row.sourceKeys).size !== row.sourceKeys.length) {
        throw new Error(`${slug}: fuente repetida en una fila.`);
      }
    }
  }
  return true;
}
