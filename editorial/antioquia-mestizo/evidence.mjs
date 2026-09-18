import {
  antioquiaMestizoSourceKeysBySlug,
  antioquiaMestizoSources,
} from "./sources.mjs";

export const antioquiaMestizoEvidenceMatrix = {
  "el-paton": [
    {
      claim:
        "El núcleo pedagógico presenta daños en cultivos, una espera nocturna y un hombre cuyos pies enormes vuelven torpe su marcha.",
      evidenceClass: "texto narrativo mediado",
      sourceKeys: ["utpPaton", "webcolegiosPaton", "uninortePaton"],
    },
    {
      claim:
        "La cadena conocida llega por una antología escolar de 1995 y no identifica narrador, lugar exacto ni recolección oral.",
      evidenceClass: "procedencia y límite de atribución",
      sourceKeys: ["gomezCatalog", "utpPaton", "ocampoGrande"],
    },
    {
      claim:
        "Bigfoot sirve solo como comparación moderna; asesinatos, Sasquatch colombiano y profesor Armando Bulla no pertenecen al respaldo consultado.",
      evidenceClass: "exclusión editorial y comparación",
      sourceKeys: ["utpPaton", "uninortePaton", "smithsonianBigfoot"],
    },
  ],
  "el-perro-negro": [
    {
      claim:
        "El Perro Negro aparece en caminos solitarios y tormentosos como animal grande de ojos brillantes, asociado en compilaciones al Patas o a un alma en pena.",
      evidenceClass: "núcleo regional impreso",
      sourceKeys: ["escobarMitos", "ocampoPopularScan", "ocampoGrande"],
    },
    {
      claim:
        "La ruta antigua entre Andes, Jardín y Caramanta ofrece localización regional sin demostrar una aparición concreta.",
      evidenceClass: "geografía narrativa aproximada",
      sourceKeys: ["escobarMitos", "ocampoContents", "solorzanoCatalog"],
    },
    {
      claim:
        "Los perros espectrales europeos permiten comparar formas, pero no prueban origen compartido ni autorizan añadir la biografía de Aurora.",
      evidenceClass: "comparación con frontera",
      sourceKeys: ["blackDogStudy", "escobarMitos", "ocampoPopularScan"],
    },
  ],
  "la-cabellona": [
    {
      claim:
        "La Cabellona antioqueña es un espanto vespertino y lluvioso de caminos del occidente y norte departamental, generalmente inofensivo.",
      evidenceClass: "núcleo regional impreso",
      sourceKeys: ["escobarMitos", "ocampoPopularScan", "ifmAntioquia"],
    },
    {
      claim:
        "Su cabello cubre rostro y cuerpo; la belleza y los rasgos feroces aparecen como percepciones variables, no como biografía.",
      evidenceClass: "descripción comparada",
      sourceKeys: [
        "escobarMitos",
        "ocampoPopularScan",
        "solorzanoCatalog",
      ],
    },
    {
      claim:
        "La Mechuda del Socorro es una variante santandereana separada y no establece el origen de la figura antioqueña.",
      evidenceClass: "desfusión territorial",
      sourceKeys: ["escobarMitos", "ocampoGrande", "ocampoContents"],
    },
  ],
  "la-dama-verde": [
    {
      claim:
        "La Dama Verde es una aparición urbana nocturna con bayetón verde, velo, guantes y chapines, seguida hasta el borde del poblado.",
      evidenceClass: "núcleo regional impreso",
      sourceKeys: ["escobarMitos", "ocampoPopularScan", "ocampoGrande"],
    },
    {
      claim:
        "La explicación de la madre que ocultó un infanticidio y la historia del sacerdote de Andes son versiones localizadas incompatibles.",
      evidenceClass: "variantes sin origen único",
      sourceKeys: ["escobarMitos", "andesMemory", "rtvcDianaUribe"],
    },
    {
      claim:
        "Damián Robledo, el tesoro y la hacienda de Santa Fe no aparecen en el expediente consultado.",
      evidenceClass: "exclusión editorial",
      sourceKeys: [
        "escobarMitos",
        "ocampoPopularScan",
        "solorzanoCatalog",
      ],
    },
  ],
  "la-rodillona": [
    {
      claim:
        "La Rodillona se representa en barrancos como vieja de rodillas enormes, rostro entre las piernas, cabello gris, ojos encendidos y risa prolongada.",
      evidenceClass: "núcleo regional impreso",
      sourceKeys: [
        "escobarMitos",
        "ocampoPopularScan",
        "uninorteRodillona",
      ],
    },
    {
      claim:
        "Persigue o burla a caminantes nocturnos y amantes, y algunas versiones dicen que evita embarazadas o niños que lloran.",
      evidenceClass: "función y variación",
      sourceKeys: ["escobarMitos", "uninorteRodillona", "ifmAntioquia"],
    },
    {
      claim:
        "Aquileo, Virgelina y el vendaval no pertenecen a las fuentes consultadas; tampoco hay un sitio único de origen.",
      evidenceClass: "exclusión editorial y geográfica",
      sourceKeys: ["escobarMitos", "ocampoGrande", "solorzanoCatalog"],
    },
  ],
  "las-ilusiones": [
    {
      claim:
        "Las Ilusiones Malas son figuras incorpóreas que el miedo y la imaginación agrandan a partir de sombras, ruidos y formas ambiguas.",
      evidenceClass: "núcleo regional impreso",
      sourceKeys: ["escobarMitos", "ocampoPopularScan", "ocampoGrande"],
    },
    {
      claim:
        "El motivo circula en relatos junto al fogón y en caminos rurales, sin protagonista fija ni localidad exclusiva.",
      evidenceClass: "forma de circulación y límite",
      sourceKeys: ["escobarMitos", "ocampoContents", "solorzanoCatalog"],
    },
    {
      claim:
        "Matilde, San Justina y una casona maldita no aparecen en la cadena de evidencia y se eliminan.",
      evidenceClass: "exclusión editorial",
      sourceKeys: ["escobarMitos", "ocampoPopularScan", "rtvcDianaUribe"],
    },
  ],
  "los-rescoldos": [
    {
      claim:
        "Los Rescoldaos o Rescoldados son pequeños diablos que danzan sobre las brasas de fogones encendidos por arrieros.",
      evidenceClass: "núcleo narrativo breve",
      sourceKeys: ["ocampoPopularScan", "ocampoGrande", "ocampoContents"],
    },
    {
      claim:
        "La presencia del motivo en catálogos y en el desfile de Medellín prueba recepción, no una trama extensa ni un origen fechado.",
      evidenceClass: "recepción y límite documental",
      sourceKeys: ["solorzanoCatalog", "elTiempoDesfile", "ocampoGrande"],
    },
    {
      claim:
        "Justiniano, una borrachera individual y la promesa de buena suerte no aparecen en las fuentes y no deben completar el relato breve.",
      evidenceClass: "exclusión editorial",
      sourceKeys: [
        "ocampoPopularScan",
        "ocampoContents",
        "elTiempoDesfile",
      ],
    },
  ],
  "maria-centeno": [
    {
      claim:
        "La adaptación Los tesoros de María Centeno narra un becerro de oro, un túnel, una moneda y el regreso de una joven cuando su madre ha envejecido.",
      evidenceClass: "adaptación literaria identificada",
      sourceKeys: ["secretosCenteno", "secretosCentenoPdf", "ocampoGrande"],
    },
    {
      claim:
        "María Centeno o María del Pardo forma un ciclo de memoria oral del occidente y norte antioqueños relacionado con conquista, minería y poblamiento.",
      evidenceClass: "antropología histórica",
      sourceKeys: ["udeaCenteno", "redalycCenteno", "ocampoContents"],
    },
    {
      claim:
        "La explicación de Abriaquí como orden para ocultar oro es una teoría popular, no etimología comprobada; la riqueza minera dependió de trabajo esclavizado.",
      evidenceClass: "memoria local y contexto crítico",
      sourceKeys: ["antioquiaAbriaqui", "udeaCenteno", "redalycCenteno"],
    },
  ],
  "maria-la-larga": [
    {
      claim:
        "María la Larga es un espanto urbano de la noche que alarga brazos y cuerpo o conduce a quien la sigue hacia el cementerio.",
      evidenceClass: "núcleo regional impreso",
      sourceKeys: ["escobarMitos", "ocampoPopularScan", "ocampoGrande"],
    },
    {
      claim:
        "La memoria de Andes la sitúa en el camino de Santa Rita, la Poceta de la Virgen y la calle del Cura, con chispas de zapatos claveteados.",
      evidenceClass: "variante municipal documentada",
      sourceKeys: ["andesMemory", "escobarMitos", "rtvcDianaUribe"],
    },
    {
      claim:
        "La versión local no prueba una aparición ni una biografía; muestra cómo el motivo adquiere topónimos propios al circular.",
      evidenceClass: "frontera de memoria local",
      sourceKeys: ["andesMemory", "solorzanoCatalog", "ocampoGrande"],
    },
  ],
  "no-hay-deuda-que-no-se-pague": [
    {
      claim:
        "No hay deuda que no se pague es una leyenda firmada de Otero D’Costa sobre Damián Vásquez Montiel en la Villa de Arma del siglo XVI.",
      evidenceClass: "texto literario primario",
      sourceKeys: ["flacsoOtero", "upbOtero"],
    },
    {
      claim:
        "El pacto de sangre, el jinete negro y la desaparición son recursos narrativos y rumores dentro de la obra, no biografía comprobada.",
      evidenceClass: "frontera entre ficción e historia",
      sourceKeys: ["flacsoOtero", "upbOtero", "caldasColonial"],
    },
    {
      claim:
        "La Villa de Arma histórica corresponde al actual territorio caldense; la transferencia posterior a Rionegro explica la confusión antioqueña.",
      evidenceClass: "corrección territorial documental",
      sourceKeys: [
        "caldasColonial",
        "banrepRionegro",
        "armaTrasladoHistory",
      ],
    },
  ],
};

export function assertAntioquiaMestizoEvidenceMatrix() {
  for (const [slug, rows] of Object.entries(
    antioquiaMestizoEvidenceMatrix,
  )) {
    if (!rows.length) throw new Error(`${slug}: matriz vacía.`);
    const allowed = new Set(antioquiaMestizoSourceKeysBySlug[slug]);
    for (const row of rows) {
      if (!row.claim || !row.evidenceClass || !row.sourceKeys.length) {
        throw new Error(`${slug}: fila de evidencia incompleta.`);
      }
      for (const key of row.sourceKeys) {
        if (!allowed.has(key) || !antioquiaMestizoSources[key]) {
          throw new Error(`${slug}: evidencia fuera del expediente: ${key}.`);
        }
      }
    }
  }
  return true;
}
