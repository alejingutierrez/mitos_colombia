import { juanLaraSources, zenuSources } from "./sources.mjs";

const allSources = {
  ...zenuSources,
  ...juanLaraSources,
};

export const zenuEvidenceMatrix = {
  "mexion-y-manexca": [
    {
      claim:
        "Una versión inicia con Mexión y Manexca en la oscuridad; otra nombra a Ixitoco como quien les da origen.",
      sourceKeys: [
        "communityCreation",
        "onicLeyOrigen",
        "minCulturaZenu",
      ],
    },
    {
      claim:
        "Ninha se convierte en Sol y el descanso de su luz permite la primera noche, acompañada por Thi.",
      sourceKeys: [
        "communityCreation",
        "onicLeyOrigen",
        "drexler2002",
      ],
    },
    {
      claim:
        "El ciclo vincula descendencia y poblamiento con oficios, cultivos, agua y distintos lugares del territorio.",
      sourceKeys: [
        "communityCreation",
        "banrepZenu",
        "faoAgriculturaAnfibia",
      ],
    },
  ],
  "la-noche-mas-larga": [
    {
      claim:
        "SMT-ONIC publica una versión donde Tarra encarga a sus mensajeros construir una gran capa de caña flecha.",
      sourceKeys: [
        "onicLeyOrigen",
        "artesaniasCanaFlecha",
        "artesaniasHeritage",
      ],
    },
    {
      claim:
        "Mexión da forma cónica a la capa y el peso del mundo la extiende como sombrero.",
      sourceKeys: [
        "onicLeyOrigen",
        "banrepZenu",
        "artesaniasHeritage",
      ],
    },
    {
      claim:
        "La imagen del tejido como soporte del universo tiene continuidad en fuentes indígenas, curatoriales y patrimoniales.",
      sourceKeys: [
        "onicLeyOrigen",
        "banrepZenu",
        "artesaniasHeritage",
      ],
    },
  ],
  "el-caiman-de-oro": [
    {
      claim:
        "El caimán de oro permanece bajo el resguardo y sostiene o protege el territorio.",
      sourceKeys: [
        "drexler2002",
        "communityCuentos",
        "defensoria2022",
      ],
    },
    {
      claim:
        "Las versiones distribuyen cabeza, corazón, cola y patas entre San Andrés, Tofeme y localidades vecinas.",
      sourceKeys: [
        "drexler2002",
        "communityCuentos",
        "minCulturaZenu",
      ],
    },
    {
      claim:
        "Extraer al caimán significaría hundimiento o fin del territorio, no una búsqueda individual de tesoro.",
      sourceKeys: [
        "drexler2002",
        "communityCuentos",
        "banrepZenu",
      ],
    },
  ],
  "trono-corcovao": [
    {
      claim:
        "Tofeme o Mocán aparece como guerrero anciano y guardián del cerro Corcovao.",
      sourceKeys: [
        "defensoria2022",
        "communityCuentos",
        "minCulturaZenu",
      ],
    },
    {
      claim:
        "El trueno seco anuncia peligro y las tormentas o inundaciones forman parte del ciclo narrado.",
      sourceKeys: [
        "defensoria2022",
        "communityCuentos",
        "faoAgriculturaAnfibia",
      ],
    },
    {
      claim:
        "El totumo de oro y el extravío protegen el cerro contra la apropiación codiciosa.",
      sourceKeys: [
        "defensoria2022",
        "communityCuentos",
        "goldenTotumo",
      ],
    },
  ],
  "el-ojo-de-la-canoa": [
    {
      claim:
        "La compilación comunitaria sitúa a Torcorá y una canoa encantada en La Sierpe.",
      sourceKeys: [
        "torcoraCommunity",
        "defensoria2022",
        "minCulturaZenu",
      ],
    },
    {
      claim:
        "El ojo de la canoa queda cerrado por un limón de acero que no debe retirarse.",
      sourceKeys: [
        "torcoraCommunity",
        "communityCuentos",
        "defensoria2022",
      ],
    },
    {
      claim:
        "La edición conserva el relato como patrimonio oral de circulación educativa y no como descripción verificable de un tesoro.",
      sourceKeys: [
        "torcoraCommunity",
        "communityCuentos",
        "banrepZenu",
      ],
    },
  ],
  "el-totumo-de-oro": [
    {
      claim:
        "Una versión regional cuenta que quien toma el fruto u objeto pierde el camino hasta devolverlo.",
      sourceKeys: [
        "goldenTotumo",
        "communityCuentos",
        "defensoria2022",
      ],
    },
    {
      claim:
        "La recopilación comunitaria de Tofeme presenta ajíes y totumos que extravían al cazador.",
      sourceKeys: [
        "communityCuentos",
        "goldenTotumo",
        "minCulturaZenu",
      ],
    },
    {
      claim:
        "La ficha separa esta prueba breve del ciclo mayor del Corcovao para no duplicar episodios.",
      sourceKeys: [
        "communityCuentos",
        "defensoria2022",
        "goldenTotumo",
      ],
    },
  ],
  "juan-lara-y-la-trenza-del-aire": [
    {
      claim:
        "Juan Lara circula como espíritu burlón o enamorado del folclor cordobés.",
      sourceKeys: [
        "loricaTravel",
        "guiaMonteria",
        "cordobaEducation",
      ],
    },
    {
      claim:
        "Pedradas en los techos y risas que parecen venir del aire forman el núcleo repetido.",
      sourceKeys: [
        "loricaTravel",
        "guiaMonteria",
        "elUniversal",
      ],
    },
    {
      claim:
        "Ninguna fuente consultada sostiene la trenza del aire, el amuleto o una atribución exclusivamente Zenú.",
      sourceKeys: [
        "loricaTravel",
        "guiaMonteria",
        "minCulturaZenu",
      ],
    },
  ],
};

export function assertZenuEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(zenuEvidenceMatrix)) {
    if (claims.length < 3) {
      throw new Error(`${slug}: se requieren tres afirmaciones controladas.`);
    }
    for (const { claim, sourceKeys } of claims) {
      if (!claim || sourceKeys.length < 3) {
        throw new Error(`${slug}: afirmación sin triangulación suficiente.`);
      }
      if (new Set(sourceKeys).size !== sourceKeys.length) {
        throw new Error(`${slug}: fuente repetida en una afirmación.`);
      }
      for (const key of sourceKeys) {
        if (!allSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
