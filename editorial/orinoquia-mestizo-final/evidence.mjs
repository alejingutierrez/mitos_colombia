import { orinoquiaMestizoFinalSources } from "./sources.mjs";

const specs = {
  "amanecer-llanero": {
    group: "vargas",
    core:
      "Pamoare, Casanari, la esmeralda, la muerte causada por un jaguar y el anuncio petrolero forman una cosmogonía literaria creada por Getulio Vargas Barón.",
    boundary:
      "La supuesta genealogía chibcha de dieciocho pueblos, el matrimonio ritual y la explicación total del poblamiento no se presentan como conocimiento indígena documentado.",
    relation:
      "La pieza se conserva como mito de autor sobre el Llano y no como origen compartido por los pueblos indígenas nombrados.",
  },
  "el-toro-negro-patorreal": {
    group: "vargas",
    core:
      "El toro Patorreal aparece después de la muerte de Melecio y funciona como protector fantástico de la heredad frente a un pretendiente explotador.",
    boundary:
      "Matrimonio infantil, insultos, control patrimonial y muerte por embestida se resumen críticamente y no se convierten en costumbre llanera aceptable.",
    relation:
      "Es cuento fantástico de hacienda y duelo familiar, no zoología sobrenatural ni caso histórico.",
  },
  "los-delfines-dorados": {
    group: "vargas",
    core:
      "La muerte de José Amalio y María de los Ángeles en el río se transforma en la aparición de dos delfines dorados dentro de un melodrama antirracista.",
    boundary:
      "La etnografía sobre un sanador indígena, las identidades colectivas y los poderes curativos son ficciones estereotipadas del autor, no testimonio Sáliva o Sikuani.",
    relation:
      "La ruta se clasifica como literatura llanera sobre amor, racismo y metamorfosis, no como mito indígena.",
  },
  "la-culebra-cascabel": {
    group: "vargas",
    core:
      "Saúl intenta matar una cascabel con dinamita y termina matando los cerdos que debía cuidar, en una exageración humorística deliberada.",
    boundary:
      "El uso de explosivos y la conducta frente a serpientes no se reproducen como consejo ni práctica segura.",
    relation:
      "Es cuento breve de humor y oralidad literaria, no mito de origen ni historia natural.",
  },
  "el-llano-ayer-hoy": {
    group: "vargas",
    core:
      "La voz narrativa contrapone un Llano recordado, biodiverso y ganadero con un presente de quemas, contaminación y transformación del trabajo.",
    boundary:
      "La nostalgia y los datos ambientales internos pertenecen a un ensayo literario y requieren fuentes externas antes de usarse como medición histórica.",
    relation:
      "La página se conserva como memoria ecológica de autor, aunque no contenga un ser sobrenatural central.",
  },
  "los-tres-luceros": {
    group: "vargas",
    core:
      "Ambrosio, Carlos y Victoria quedan representados por tres estrellas después de una cadena de muertes familiares.",
    boundary:
      "El suicidio de Victoria se cuenta sin romanticismo, detalle gráfico ni equivalencia entre muerte y reunión deseable.",
    relation:
      "Es leyenda literaria de duelo y memoria celeste, no constelación tradicional documentada.",
  },
  "el-llano-cobra-sus-deudas": {
    group: "vargas",
    core:
      "El original titulado El llano cobra sus cuentas narra el ascenso de don Victoriano, el abuso de sus herederos y la ruina de la hacienda como justicia del paisaje.",
    boundary:
      "Las afirmaciones sobre jesuitas, Támara, migraciones y grupos racializados se separan de la trama y no se tratan como historia comprobada.",
    relation:
      "Se conserva el slug antiguo, se corrige el título visible y se clasifica la deuda como metáfora moral de autor.",
  },
  "las-chanzas-de-don-felipe": {
    group: "vargas",
    core:
      "Don Felipe aterroriza y humilla a viajeros, luego compensa algunos daños, mientras otra secuencia gira alrededor de un disparo accidental.",
    boundary:
      "Amenazas armadas, coerción y humillación no se presentan como bromas inocentes ni como rasgo admirable de la región.",
    relation:
      "Es sátira costumbrista sobre poder y miedo, no biografía histórica comprobada.",
  },
  "el-brujo-de-la-costa-del-pauto": {
    group: "vargas",
    core:
      "Piriachi combina saber herbolario, prestigio de curandero y un diagnóstico fatal que desencadena muertes y represalias.",
    boundary:
      "El cuento no es consejo médico y no autoriza a equiparar medicina tradicional con fraude ni a responder a un error con violencia.",
    relation:
      "La ficha analiza una tragedia literaria sobre confianza, incertidumbre y responsabilidad sanitaria.",
  },
  "leal-hasta-la-muerte": {
    group: "vargas",
    core:
      "El cuento enlaza una fábula del ciclo de Calila y Dimna con la historia llanera de Vicente y su perro Encuentro, que muere junto a la tumba.",
    boundary:
      "La primera secuencia no es invención llanera independiente y debe reconocer su larga tradición literaria asiática, árabe y castellana.",
    relation:
      "La lealtad animal une ambos relatos, pero no demuestra transmisión oral directa entre sus contextos.",
    relationSourceKeys: [
      "vargasPrimary",
      "pittType160",
      "uamCalila",
      "cervantesCalila",
      "arbesuCalila",
    ],
  },
  "la-tertulia-de-la-italiana": {
    group: "vargas",
    core:
      "Una familia encuentra monedas y dedica su tiempo a discutir cómo administrarlas mientras desatiende el hambre de sus hijos.",
    boundary:
      "La muerte infantil sirve a una sátira extrema y se narra sin detalle gráfico ni culpabilización de familias pobres reales.",
    relation:
      "Es cuento moral de Saúl sobre deliberación inútil, no leyenda sobrenatural ni caso documentado.",
  },
  "el-tirapiedra": {
    group: "baquero",
    core:
      "Baquero inventa para el Tirapiedra un origen universitario violento y lo hace perseguir con piedras a caminantes del piedemonte.",
    boundary:
      "Insultos homofóbicos, asesinatos políticos y condena sobrenatural pertenecen a la ficción de 1988 y se retiran del tratamiento editorial.",
    relation:
      "El motivo de camino se conserva como mito de transición, sin volver histórica su genealogía estudiantil.",
  },
  "los-monstruos-de-paratebueno": {
    group: "baquero",
    core:
      "Tres acompañantes seductoras revelan formas esqueléticas en una carretera de Paratebueno dentro de un cuento ligado a memorias de la Violencia.",
    boundary:
      "La misoginia, sexualización y cifra de miles de soldados no se reproducen como hechos; la violencia de género se nombra sin detalles degradantes.",
    relation:
      "Es ficción de carretera y memoria histórica mediada, no testimonio judicial ni inventario de víctimas.",
  },
  "el-dominguez": {
    group: "baquero",
    core:
      "El Domínguez aparece de día con la forma de una persona conocida y confunde a quien cruza el monte, especialmente los domingos.",
    boundary:
      "La expedición botánica satírica del cuento contiene objetificación y agresión; se conserva el núcleo del duende sin normalizar violencia contra mujeres.",
    relation:
      "La figura se presenta como duende literario del piedemonte, no como especie o persona histórica.",
  },
  "madre-rio-o-mohana": {
    group: "baquero",
    core:
      "Baquero describe a la Mohana como forma femenina de transición del Mohán que atrae y somete al narrador junto al río.",
    boundary:
      "La coerción sexual y el supuesto remedio basado en engañar o dañar a otra mujer se rechazan expresamente y nunca se ofrecen como consejo.",
    relation:
      "La página mantiene la variante femenina del piedemonte separada del Mohán tolimense y de cosmologías indígenas.",
  },
  "la-bruja-de-los-ojos-miel": {
    group: "baquero",
    core:
      "Una pasajera elegante, reconocible por sus ojos color miel, pesa sobre el vehículo y deja al viajero en una obsesión sobrenatural.",
    boundary:
      "La genealogía romántica fechada entre 1856 y 1906 y la contra sexual son recursos autorales, no historia política ni recomendación.",
    relation:
      "Es cuento de aparición y deseo obsesivo del piedemonte, con un origen literario declarado.",
  },
  "el-domador-de-brujas": {
    group: "baquero",
    core:
      "Tarsicio presume dominar brujas mediante explicaciones pseudocientíficas, coerción y música; el cierre hace volar a Pascual en una escoba.",
    boundary:
      "Abuso sexual, manipulación y pseudomedicina no son terapia, saber científico ni modelo de masculinidad llanera.",
    relation:
      "La contradicción final convierte el relato en sátira fantástica, no manual para tratar personas o creencias.",
  },
  "el-tesoro-de-caribare": {
    group: "caribabare",
    core:
      "La forma documentada es Caribabare: una gran hacienda jesuita del Casanare cuya expulsión en 1767 dio marco a rumores de riquezas ocultas.",
    boundary:
      "La bóveda, el riachuelo desviado, el padre Manare guardián y los hallazgos petroleros pertenecen a la leyenda y no cuentan con prueba material concluyente.",
    relation:
      "La ficha corrige el título visible y separa historia de la hacienda, tradición del tesoro y apropiaciones turísticas posteriores.",
  },
  "la-bola-de-fuego": {
    group: "bola",
    core:
      "La Bola de Fuego o Bolefuego circula en los Llanos como luz móvil nocturna que se acerca, se aleja y recibe explicaciones morales cambiantes.",
    boundary:
      "Candelaria, Esteban, una madre homicida, un corazón ardiente y las contras de insultar o tender sogas son variantes, no origen único ni instrucciones seguras.",
    relation:
      "Se relaciona con la Candileja de tres luces, pero se conserva como forma llanera diferenciada y no se fusiona con la ruta tolimense.",
  },
};

const groupSourceKeys = {
  vargas: ["vargasPrimary", "vargasBanrep", "vargasTiempoReview"],
  baquero: ["baqueroPrimary", "baqueroBanrep", "baqueroCervantes"],
  caribabare: [
    "caribabareLlanera",
    "caribabareExternado",
    "caribabareRegiones",
  ],
  bola: ["bolaBaquero", "bolaTiempo", "bolaMen"],
};

export const orinoquiaMestizoFinalEvidenceMatrix = Object.fromEntries(
  Object.entries(specs).map(([slug, spec]) => {
    const sourceKeys = groupSourceKeys[spec.group];
    return [
      slug,
      [
        {
          claim:
            spec.group === "vargas"
              ? "La ruta deriva de un cuento firmado por Getulio Vargas Barón y publicado en 1996 dentro de una colección de once relatos."
              : spec.group === "baquero"
                ? "La ruta deriva de un cuento firmado por Alberto Baquero Nariño y publicado en 1988 dentro de Los cuentos de Pascual."
                : spec.group === "caribabare"
                  ? "La hacienda Caribabare y la expulsión jesuita ofrecen un contexto histórico documentable para una tradición posterior sobre un tesoro."
                  : "La Bola de Fuego posee circulación regional documentada en Casanare y otros territorios de los Llanos.",
          evidenceClass: "atribución documental",
          sourceKeys,
        },
        {
          claim: spec.core,
          evidenceClass: "núcleo narrativo documentado",
          sourceKeys,
        },
        {
          claim: spec.boundary,
          evidenceClass: "límite documental",
          sourceKeys,
        },
        {
          claim: spec.relation,
          evidenceClass: "frontera narrativa documentada",
          sourceKeys: spec.relationSourceKeys || sourceKeys,
        },
        {
          claim:
            "Los nombres, fechas y episodios internos solo se conservan cuando se atribuyen a la obra o variante que los publica; no se convierten en hechos comprobados.",
          evidenceClass: "descarte editorial",
          sourceKeys,
        },
        {
          claim:
            "La URL permanece publicada, pasa de Varios a una categoría regional Mestizo y queda pendiente de su pareja visual propia con procedencia OpenAI verificable.",
          evidenceClass: "decisión editorial",
          sourceKeys,
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

export function assertOrinoquiaMestizoFinalEvidenceMatrix() {
  if (Object.keys(orinoquiaMestizoFinalEvidenceMatrix).length !== 19) {
    throw new Error("La matriz debe cubrir las diecinueve rutas.");
  }
  for (const [slug, claims] of Object.entries(orinoquiaMestizoFinalEvidenceMatrix)) {
    if (claims.length < 5) {
      throw new Error(`${slug}: se requieren al menos cinco decisiones de evidencia.`);
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
        if (!orinoquiaMestizoFinalSources[key]) {
          throw new Error(`${slug}: fuente desconocida ${key}.`);
        }
      }
    }
  }
  return true;
}
