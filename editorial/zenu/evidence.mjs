import { zenuSources } from "./sources.mjs";

const allSources = {
  ...zenuSources,
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
        "Los tres episodios que sostienen la página —Caimito, la vereda de Platero y la de San Felipe, con salida hacia Santa Inés— vienen del acopio de Zully Torres y Oswaldo Villera para el SINIC, y están todos en la órbita de San Marcos, sobre el río San Jorge.",
      evidenceClass: "nucleo",
      sourceKeys: ["sINICColombia"],
    },
    {
      claim:
        "El personaje sí está documentado dentro del resguardo: Drexler lo lista entre los encantos del monte, con la misma descripción del mohán. Era justamente lo que se negaba para reclasificarlo como caribe mestizo.",
      evidenceClass: "nucleo",
      sourceKeys: ["drexler2002"],
    },
    {
      claim:
        "El mapa cambia según quién lo cuente. El SINIC lo pone en Sucre; la lista de Córdoba de la misma entidad no lo incluye, y las compilaciones turísticas y periodísticas que lo sitúan en Lorica o en Montería no coinciden con el acopio institucional.",
      evidenceClass: "variante",
      sourceKeys: ["sINICColombia", "zenuPlan"],
    },
    {
      claim:
        "El acopio no fecha la recolección, no nombra a los narradores y no adscribe el personaje a ninguna comunidad indígena; la página tampoco lo hace.",
      evidenceClass: "duda",
      sourceKeys: ["sINICColombia", "larrainRelaciones2024"],
    },
  ],
};

export function assertZenuEvidenceMatrix() {
  for (const [slug, claims] of Object.entries(zenuEvidenceMatrix)) {
    if (claims.length < 3) {
      throw new Error(`${slug}: se requieren tres afirmaciones controladas.`);
    }
    // Antes se exigían tres fuentes por afirmación. Esa regla no producía
    // triangulación: producía relleno. Es lo que hacía que las tres
    // afirmaciones de Juan Lara repitieran las mismas dos compilaciones
    // turísticas, una de ellas para sostener que ninguna fuente lo sostenía.
    // Lo que sí tiene que cumplirse es que ninguna afirmación vaya sin fuente
    // y que la ficha entera no descanse en una sola obra.
    for (const { claim, sourceKeys } of claims) {
      if (!claim || !sourceKeys.length) {
        throw new Error(`${slug}: afirmación sin fuente.`);
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
    const obras = new Set(claims.flatMap(({ sourceKeys }) => sourceKeys));
    if (obras.size < 3) {
      throw new Error(`${slug}: la ficha entera descansa en ${obras.size} obra(s).`);
    }
  }
  return true;
}
