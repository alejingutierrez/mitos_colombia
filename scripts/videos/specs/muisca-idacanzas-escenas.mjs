// Keyframes de Idacansás — 12 bloques × 2 escenas × 2 cuadros = 48 imágenes ≈ 120 s.
// Guion: guion-idacanzas-v2.json (N=12) · Acta: acta-idacanzas.json (23 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Idacansás NO ORDENA AL TIEMPO. No mira primero el cielo, no inventa las
//   señales y responde que estuvo mirando, nada más. La fama de que trae
//   lluvia y granizo es DE LA GENTE, no del relato: ninguna imagen puede
//   darle un gesto de mando sobre las nubes.
// · Se EQUIVOCABA a veces, y nadie contaba esas veces. Ese dato es de la
//   fuente, separa la observación de la magia y va en cuadro (b12a).
// · Su negativa tiene razón declarada: si él manda sobre el cielo, ellos
//   dejan de mandar sobre su tierra. Eso va como cita.
// · Los ritos —blanco con ceniza, colorado con bijao molido— NO son conjuros:
//   son AVISOS. La gente sabe qué hacer al verlos, y eso es lo que hace, así
//   que cada rito se cuenta junto con la reacción que provoca.
// · La piedra de hielo que se vuelve agua en su palma NO es un milagro:
//   ocurre mientras dice que sólo estuvo mirando, y la imagen la lee así.
//
// GUION DE LUZ: mañana de peticiones → ofrendas en el suelo → vuelo bajo de
// golondrinas → madrugada de estrellas → blanco de ceniza y colorado de bijao
// → cielo limpio → tarde de trabajo → contraluz de la negativa → granizo →
// palma con hielo → peregrinos → última luz sobre el valle.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-idacanzas-escenas";
export const OUT_DIR = "muiscas/videos/idacanzas/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; gesto de mando sobre el cielo, brazos alzados invocando, rayos saliendo de las manos; conjuros, circulos magicos, runas, particulas brillantes; nubes que se abren por orden, tormenta dirigida, control del clima dibujado; aureola, halo, resplandor sobre el sacerdote; sacrificios, sangre, altares con fuego; templos monumentales de piedra labrada, columnas, escalinatas";
export const PALETTE =
  "crema de algodon crudo, verde joven de maiz, gris de nube baja y de granizo, pardo de tierra de canal, ocre de barro cocido; el blanco de la ceniza y el colorado del bijao son los unicos acentos; sin saturacion";

const IDA =
  "EL MISMO Idacansás de la referencia (hombre mayor de unos sesenta y cinco años, delgado y de porte tranquilo, rostro atento y muy observador, pelo blanco recogido en la nuca, manta de algodón crudo sin teñir, larga y sencilla, anudada al hombro, descalzo)";

export const ITEMS = armar([
  // b1 — Lo llamaron luz grande. Lo buscaban como un río en seca.
  escp("b1a", [ref("idacansas_sacerdote"), ref("valle_iraca"), ref("familias_muiscas")], {
    comun: `Luz plana de mañana en EL MISMO valle de Iraca de la referencia. ${IDA} y la gente que lo busca. No está elevado ni separado: está entre ellos. Objeto ancla: el camino por donde llegan.`,
    camara: {
      a: "GRAN PLANO GENERAL en picado del valle, con un camino y gente pequeña avanzando por él hacia un punto.",
      b: "la cámara ha DESCENDIDO hasta el final de ese camino y se ha puesto a la altura de los ojos: PLANO MEDIO de Idacansás de pie, recibiendo a los primeros que llegan.",
    },
    ini: "desde arriba se ve el valle y la gente caminando por el camino, todavía lejos.",
    fin: "al final del camino está él, de pie y sin nada que lo distinga salvo la manta blanca, con los primeros llegando hasta él.",
  }, "trono, altar, aureola, arrodillarse, templo monumental, escalinatas"),
  escp("b1b", [ref("familias_muiscas"), ref("sabana_cultivos")], {
    comun: "Luz de mañana. La sequía que hace que lo busquen así: un río en tiempo de seca. Objeto ancla: el cauce con poca agua.",
    camara: {
      a: "PLANO MACRO del lecho de un arroyo con las piedras secas y un hilo de agua mínimo entre ellas.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del cauce con gente agachada a lo largo de él llenando vasijas donde todavía queda un poco.",
    },
    ini: "entre las piedras secas queda un hilo de agua del ancho de un dedo.",
    fin: "desde lejos se ve el cauce entero casi seco y ocho o diez personas repartidas a lo largo, agachadas donde queda algo de agua.",
  }, "cadaveres, animales muertos, miseria explotada, llanto teatral"),

  // b2 — Unos pedían lluvia; otros, viajar en seco. Todos traían ofrenda.
  escp("b2a", [ref("familias_muiscas"), ref("idacansas_sacerdote"), ref("santuario_moja")], {
    comun: "Luz de mañana. Tres peticiones distintas a la vez: lluvia sobre el maíz, cielo despejado para viajar, y saber si la enfermedad se irá con las heladas. Cada uno pide lo contrario del otro. Objeto ancla: las tres caras que piden.",
    camara: {
      a: "PLANO MEDIO CORTO de una sola cara hablando, pidiendo.",
      b: "la cámara ha RETROCEDIDO y ha girado sobre sí misma: PLANO GENERAL del recinto con tres grupos distintos esperando su turno en rincones distintos.",
    },
    ini: "una cara pide algo, de cerca, y no se ve a nadie más.",
    fin: "desde el centro del recinto se ve que hay tres grupos esperando a la vez, cada uno con su petición, y que no pueden querer lo mismo.",
  }, "arrodillarse, adoracion, sacrificios, sangre, aureola"),
  esc("b2b", [ref("santuario_moja"), ref("manta_vasijas"), ref("mazorca_abierta")], {
    comun: "Luz de mañana. Todos traen una ofrenda y esperan que él ordene al tiempo. Las ofrendas son de barro, maíz y algodón: nada de metal. Objeto ancla: la fila de ofrendas contra la pared.",
    camara: {
      a: "PLANO MACRO de una vasija pequeña y una mazorca dejadas en el suelo de esteras.",
      b: "la cámara ha RETROCEDIDO a lo largo de la pared y ha subido: PLANO GENERAL del santuario con la fila entera de ofrendas alineadas y la luz del amanecer entrando por el vano.",
    },
    ini: "una vasija y una mazorca en el suelo, muy cerca.",
    fin: "desde el otro extremo se ve la fila completa de ofrendas contra la pared, veinte o más, todas de barro, maíz y algodón.",
  }, "oro, joyas, tesoros, sacrificios, sangre, cruces"),

  // b3 — No miraba primero el cielo. Miraba las golondrinas.
  escp("b3a", [ref("idacansas_sacerdote"), ref("valle_iraca")], {
    comun: `Luz plana. ${IDA} NO mira primero el cielo: mira las golondrinas, que vuelan bajo cuando el aire se vuelve pesado. Objeto ancla: las aves a ras de sembrado.`,
    camara: {
      a: "PLANO MEDIO de él de perfil con la cara vuelta hacia abajo, hacia el sembrado, no hacia arriba.",
      b: "la cámara ha girado y AVANZADO en la dirección de su mirada, a ras de las hojas: PLANO MEDIO BAJO del sembrado con tres golondrinas pasando bajas entre los surcos.",
    },
    ini: "tiene la cara baja, mirando hacia los surcos.",
    fin: "a ras de las hojas pasan tres golondrinas volando bajo, casi rozando el maíz: eso es lo que estaba mirando.",
  }, "brazos alzados al cielo, invocacion, rayos, aureola, magia"),
  escp("b3b", [ref("idacansas_sacerdote"), ref("sabana_cultivos")], {
    comun: `${IDA} pasando los dedos por las hojas, buscando la humedad donde el sol no ha llegado. Objeto ancla: sus dedos en el envés de la hoja.`,
    camara: {
      a: "PLANO MACRO de dos dedos recorriendo el envés de una hoja de maíz.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del sembrado con él pequeño y agachado en mitad de los surcos, solo.",
    },
    ini: "los dedos recorren el envés de la hoja, muy de cerca.",
    fin: "desde lejos se le ve agachado en mitad del sembrado, solo, comprobando una planta tras otra: es trabajo de mirar, no de mandar.",
  }, "magia, resplandor, particulas, aureola, adoracion"),

  // b4 — Contaba las estrellas que se apagan. Leía la luna.
  escp("b4a", [ref("idacansas_sacerdote"), ref("altiplano_noche")], {
    comun: `Madrugada antes del alba. ${IDA} contando las estrellas que se apagan antes de la madrugada. Objeto ancla: el cielo estrellado.`,
    camara: {
      a: "PLANO MEDIO de él sentado en el suelo con la cara alzada, pequeño contra la noche.",
      b: "la cámara ha SUBIDO en vertical dejándolo abajo y ha basculado al cielo: PLANO ENTERAMENTE DE CIELO estrellado, sin tierra en cuadro.",
    },
    ini: "está sentado con la cara alzada, contando.",
    fin: "el cuadro es sólo cielo: las estrellas de papel perforado, unas cuantas ya apagándose por el borde donde va a salir la luz.",
  }, "telescopios, instrumentos, mapas estelares, magia, constelaciones dibujadas"),
  esc("b4b", [ref("madre_chia"), ref("altiplano_noche")], {
    comun: "Madrugada. En la luna, el anillo que anuncia el cambio: un halo pálido alrededor del disco. Es un fenómeno del aire, no una señal mágica. Objeto ancla: el anillo alrededor de la luna.",
    camara: {
      a: "PLANO GENERAL del altiplano con la luna arriba y pequeña.",
      b: "la cámara ha hecho un ACERCAMIENTO largo hasta la luna: PLANO CERRADO del disco con el anillo pálido de humedad dibujado a su alrededor.",
    },
    ini: "la luna se ve pequeña sobre el valle, sin nada alrededor.",
    fin: "de cerca se ve el anillo pálido rodeando el disco entero: el aviso de que el tiempo va a cambiar.",
  }, "luna con cara, simbolos, runas, magia, eclipse, luna roja"),

  // b5 — Blanco con ceniza para el granizo, colorado con bijao para la enfermedad.
  escp("b5a", [ref("idacansas_sacerdote"), ref("cuenco_ceniza"), ref("familias_muiscas")], {
    comun: `Luz gris. La señal del granizo: ${IDA} vestido de blanco esparciendo ceniza al aire desde EL MISMO cuenco de la referencia. NO es un conjuro: es un AVISO, y la gente sabe qué hacer al verlo. Objeto ancla: la ceniza en el aire.`,
    camara: {
      a: "PLANO MACRO de la mano sacando ceniza gris fina del cuenco de barro.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del poblado con él pequeño esparciendo ceniza en un extremo y, en las casas, gente cubriendo fogones y guardando semillas.",
    },
    ini: "la mano coge ceniza del cuenco, muy de cerca.",
    fin: "desde lejos se ve el efecto del aviso: él soltando ceniza al viento en un lado y, en cuatro casas a la vez, gente tapando fogones y metiendo dentro los cestos de semillas.",
  }, "conjuro, circulos magicos, humo magico, resplandor, trance, aureola"),
  escp("b5b", [ref("idacansas_sacerdote"), ref("familias_muiscas"), ref("casa_barro_paja")], {
    comun: `La otra señal: mantas COLORADAS y bijao molido lanzado al viento cuando se acerca una enfermedad. También es un aviso, y las familias dejan de salir. Objeto ancla: el polvo verde del bijao en el aire.`,
    camara: {
      a: "PLANO MACRO del polvo verde de bijao saliendo de una mano abierta contra el viento.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del caserío con él de colorado en el camino y todas las puertas cerrándose a la vez.",
    },
    ini: "el polvo verde sale de la mano y se lo lleva el aire.",
    fin: "desde lejos, él está solo en el camino con su manta colorada y las cuatro puertas del caserío se han cerrado: nadie sale.",
  }, "conjuro, trance, danza ritual, humo magico, sangre, aureola"),

  // b6 — No inventaba esas señales. Le pidieron apartar la tormenta.
  escp("b6a", [ref("idacansas_sacerdote"), ref("valle_iraca")], {
    comun: `Luz plana. No inventaba las señales: las había visto tantas veces que ya no podían mentirle. Lo que se ve es repetición, no revelación. Objeto ancla: la misma hoja, el mismo gesto.`,
    camara: {
      a: "PLANO MACRO de su mano en el envés de una hoja, idéntico al gesto de la escena b3b.",
      b: "la cámara ha RETROCEDIDO en un travelling largo por el valle: PLANO GENERAL en el que se ve el mismo valle en distintos estados —seco, verde, encharcado— como cuatro franjas del terreno a distinta altura.",
    },
    ini: "la mano comprueba una hoja, igual que otras veces.",
    fin: "desde lejos, el valle entero muestra a la vez sus cuatro estados en distintas parcelas: lo que él ha visto una y otra vez a lo largo de los años.",
  }, "vision, revelacion, resplandor, magia, aureola, texto"),
  escp("b6b", [ref("familias_muiscas"), ref("idacansas_sacerdote"), ref("valle_iraca")], {
    comun: `Cielo completamente limpio. Llega la gente con una sola petición: que ordene a la tormenta apartarse de la cosecha. Objeto ancla: el cielo sin una nube.`,
    camara: {
      a: "PLANO MEDIO del grupo hablándole, con las caras vueltas hacia él.",
      b: "la cámara ha basculado hacia arriba y ha retrocedido: GRAN PLANO GENERAL con el valle abajo y casi todo el cuadro ocupado por un cielo limpio, sin una sola nube.",
    },
    ini: "el grupo le pide algo, todos a la vez.",
    fin: "encima de todos ellos el cielo está completamente despejado: no hay nada que apartar todavía, y por eso el encargo parece fácil.",
  }, "nubes amenazantes, tormenta ya visible, rayos, dramatismo"),

  // b7 — No dio la orden: mandó atar techos y abrir canales.
  escp("b7a", [ref("idacansas_sacerdote"), ref("familias_muiscas"), ref("acequia_bosa")], {
    comun: `Luz de tarde. En vez de la orden al cielo: recoger las mantas tendidas, atar los techos y abrir canales entre los surcos para que el agua encuentre salida. Objeto ancla: las manos trabajando.`,
    camara: {
      a: "PLANO MACRO de unas manos atando con fibra la paja de un techo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del sembrado con gente abriendo canales entre los surcos y otros recogiendo mantas de las cuerdas.",
    },
    ini: "unas manos aprietan un nudo de fibra en la paja del techo.",
    fin: "desde lejos se ve el trabajo repartido: dos atando techos, tres abriendo canales a azada y una recogiendo mantas, todos a la vez.",
  }, "conjuro, gestos magicos, invocacion, rayos, aureola"),
  escp("b7b", [ref("familias_muiscas"), ref("valle_iraca")], {
    comun: `Luz de tarde. Algunos obedecieron; otros se sentaron a esperar el gesto que no llegó. Las dos actitudes en el mismo cuadro, sin que ninguna se vea mejor. Objeto ancla: la línea entre las dos parcelas.`,
    camara: {
      a: "PLANO MEDIO de un grupo sentado en el borde de su parcela, con las manos quietas, mirando hacia el cielo.",
      b: "la cámara ha hecho un TRAVELLING LATERAL hasta la parcela vecina y ha subido: PLANO GENERAL en picado con las dos parcelas juntas, una surcada de canales y la otra intacta.",
    },
    ini: "un grupo está sentado esperando, sin hacer nada, mirando arriba.",
    fin: "desde arriba se ven las dos parcelas pegadas: una llena de canales recién abiertos y la otra lisa y sin tocar, con su gente todavía sentada.",
  }, "burla, castigo, humillacion, caricatura de pereza"),

  // b8 — «Si yo mando sobre el cielo, ustedes dejarán de mandar». (CITA)
  escp("b8a", [ref("idacansas_sacerdote"), ref("familias_muiscas"), ref("valle_iraca")], {
    comun: `Contraluz de última hora. ${IDA} hablando por fin: si él manda sobre el cielo, ellos dejarán de mandar sobre su tierra. Ésa es la tesis. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO GENERAL del grupo con él pequeño delante de todos, a contraluz.",
      b: "la cámara ha AVANZADO hasta su cara y ha rodeado hasta el lado de la luz: PRIMER PLANO de él hablando, con la gente desenfocada detrás.",
    },
    ini: "está a contraluz delante del grupo y empieza a hablar.",
    fin: "de cerca y con la luz de lado se le ve terminar la frase, sin levantar la mano y sin señalar el cielo ni una sola vez.",
  }, "brazos alzados, invocacion, rayos, aureola, sermon, texto"),
  escp("b8b", [ref("familias_muiscas"), ref("sabana_cultivos")], {
    comun: `Última luz. Los que estaban sentados oyéndolo, decidiendo. Unos se levantan a trabajar y otros se quedan. Objeto ancla: los que se levantan.`,
    camara: {
      a: "PLANO MEDIO del grupo sentado escuchando, todos quietos.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL en el que tres se han levantado y van hacia los surcos con la azada, y otros tres siguen sentados en el borde.",
    },
    ini: "todos están sentados y escuchan.",
    fin: "desde lejos se ve que la mitad se levantó y va hacia los surcos con las azadas, mientras la otra mitad sigue sentada en el mismo sitio.",
  }, "conversion, aplausos, aclamacion, arrodillarse, castigo"),

  // b9 — Cayó el granizo. En las parcelas preparadas el agua corrió.
  esc("b9a", [ref("valle_iraca"), ref("sabana_cultivos")], {
    comun: "Luz gris de tormenta. Esa tarde cayó el granizo, blanqueó los caminos y golpeó los techos. Objeto ancla: el granizo en el suelo.",
    camara: {
      a: "PLANO MACRO de las piedras de granizo rebotando en la tierra del camino y acumulándose.",
      b: "la cámara se ha ELEVADO muchísimo hasta un GRAN PLANO GENERAL en picado del valle entero, con los caminos blancos y las nubes bajas encima.",
    },
    ini: "las primeras piedras de granizo rebotan en la tierra, sueltas.",
    fin: "desde arriba el valle tiene todos los caminos blanqueados y el granizo sigue cayendo sobre los techos y los sembrados.",
  }, "rayos, tormenta epica, personas gritando, catastrofe, dramatismo"),
  esc("b9b", [ref("acequia_bosa"), ref("sabana_cultivos")], {
    comun: "Luz gris después del granizo. En las parcelas preparadas el agua corrió por los canales; en las otras, las plantas quedaron dobladas. Sin moraleja: sólo las dos parcelas. Objeto ancla: el canal por donde corre el agua.",
    camara: {
      a: "PLANO MACRO del agua corriendo por un canal de tierra recién abierto, llevándose el granizo derretido.",
      b: "la cámara ha SEGUIDO el canal y ha subido: PLANO GENERAL en picado con las dos parcelas juntas, la de los canales con las matas en pie y la otra con las plantas dobladas en el barro.",
    },
    ini: "el agua baja por el canal arrastrando granizo, muy de cerca.",
    fin: "desde arriba se ven las dos parcelas lado a lado: en una las matas siguen de pie entre los canales llenos; en la otra están dobladas sobre el barro.",
  }, "personas llorando, castigo divino, rayos, texto, moraleja dibujada"),

  // b10 — «Estuve mirando, nada más». La piedra de hielo en la palma.
  escp("b10a", [ref("idacansas_sacerdote"), ref("familias_muiscas")], {
    comun: `Luz gris después del granizo. La gente vuelve con la pregunta de siempre —cómo lo supo— y él responde que estuvo mirando, nada más que eso. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MEDIO LARGO del grupo alrededor de él, preguntando.",
      b: "la cámara ha AVANZADO hasta él: PLANO MEDIO CORTO de su cara contestando, tranquila y sin darle importancia.",
    },
    ini: "el grupo lo rodea preguntando a la vez.",
    fin: "de cerca se le ve contestar con media frase y encogerse de hombros: no tiene más que decir.",
  }, "aureola, adoracion, arrodillarse, sermon, resplandor"),
  escp("b10b", [ref("idacansas_sacerdote")], {
    comun: `Luz gris. Mientras lo dice, sostiene en la palma una piedra de granizo hasta que se vuelve agua. NO es un milagro: es hielo derritiéndose en una mano. Objeto ancla: la piedra de hielo en la palma.`,
    camara: {
      a: "PLANO MACRO de la piedra de hielo entera en el centro de su palma abierta.",
      b: "la cámara ha RETROCEDIDO un poco y ha girado a contraluz: PLANO DETALLE de la misma mano con el hielo ya reducido a un charco pequeño que le escurre entre los dedos.",
    },
    ini: "la piedra de granizo está entera y fría en el centro de la palma.",
    fin: "sólo queda un charco de agua en la palma que le gotea entre los dedos: no pasó nada más que el tiempo.",
  }, "resplandor, magia, particulas, aureola, transformacion magica"),

  // b11 — La fama creció. El valle se volvió tierra santa.
  escp("b11a", [ref("familias_muiscas"), ref("camino_carrera"), ref("otga_encuentro")], {
    comun: "Luz de mañana. La fama creció como la hierba después de la lluvia: llegan peregrinos de lejos por todos los caminos. Esa fama es DE LA GENTE, no del relato. Objeto ancla: los caminos llenos.",
    camara: {
      a: "PLANO MEDIO de un grupo de forasteros llegando al puesto de recibimiento, con el polvo del camino en los pies.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del valle con tres caminos distintos llenos de gente entrando a la vez.",
    },
    ini: "un grupo de forasteros llega por un camino.",
    fin: "desde arriba se ve que llegan por los tres caminos a la vez, filas enteras que entran al valle desde las cuatro capas de la cordillera.",
  }, "templos monumentales, columnas, escalinatas, procesiones cristianas, cruces"),
  escp("b11b", [ref("santuario_moja"), ref("valle_iraca"), ref("familias_muiscas")], {
    comun: "Luz del amanecer entrando por el vano. El valle se volvió tierra santa y su santuario el centro del mundo que miraba al sol. Es barro y paja, no piedra labrada. Objeto ancla: el vano abierto al oriente.",
    camara: {
      a: "PLANO MEDIO dentro del santuario, con las ofrendas alineadas y el vano al fondo.",
      b: "la cámara ha SALIDO por el vano y ha retrocedido subiendo: PLANO GENERAL del santuario desde fuera, pequeño en el valle, con las filas de peregrinos llegando a él.",
    },
    ini: "dentro, la luz del amanecer entra por el vano sobre las esteras y las ofrendas.",
    fin: "desde fuera se ve que el centro del mundo es un recinto de barro y paja en mitad del valle, con la gente llegando a él desde todas partes.",
  }, "templo de piedra labrada, columnas, oro, altares con fuego, sacrificios"),

  // b12 — A veces se equivocaba. Aprendió a mirar lo que todos tenían delante.
  escp("b12a", [ref("idacansas_sacerdote"), ref("sabana_cultivos"), ref("familias_muiscas")], {
    comun: `Luz plana. A veces se equivocaba, y nadie contaba esas veces. Este par existe porque el acta no deja omitirlo. Objeto ancla: el sembrado que no recibió lo anunciado.`,
    camara: {
      a: "PLANO MEDIO de él mirando el cielo limpio con el cuenco de ceniza en la mano, sin usarlo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del sembrado con las matas dobladas por un granizo que no avisó, y él pequeño y quieto en el borde.",
    },
    ini: "sostiene el cuenco de ceniza mirando un cielo que no da señales.",
    fin: "desde lejos se ve el sembrado golpeado y él parado en el borde con el cuenco todavía lleno: esta vez no lo vio venir, y nadie lo va a contar.",
  }, "castigo, burla, humillacion, multitud enfadada, texto"),
  escp("b12b", [ref("familias_muiscas"), ref("valle_iraca"), ref("idacansas_sacerdote")], {
    comun: "Última luz sobre el valle. Lo llamaron luz grande no porque iluminara lo oculto sino porque aprendió a mirar lo que todos tenían delante, y esa luz quedó en la mirada de los que aprendieron a leer el cielo antes de pedirle algo. Objeto ancla: las caras de los que ahora miran.",
    camara: {
      a: "PLANO MEDIO CORTO de una cara joven mirando hacia arriba, hacia el vuelo de unas golondrinas, con el mismo gesto que él.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final del valle al atardecer, con gente repartida por los surcos, algunos mirando el cielo y otros abriendo canales.",
    },
    ini: "una cara joven mira las golondrinas pasar bajas, igual que él miraba.",
    fin: "desde arriba se ve el valle entero al final del día: unos mirando el cielo, otros abriendo canales, y él en algún punto del campo sin destacarse de los demás.",
  }, "aureola, apoteosis, monumento, estatua, texto, simbolos"),
]);
