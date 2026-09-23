// Keyframes de El camino de Bochica — 13 bloques × 2 escenas × 2 cuadros
// = 52 imágenes ≈ 130 s.
// Guion: guion-los-dioses-civilizadores-v2.json (N=13)
// Acta:  acta-los-dioses-civilizadores.json (25 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDE CONTRA `bochica` (video YA PRODUCIDO) Y `nompanem`: los tres
// cuentan del mismo viajero. Aquí el mito es EL ITINERARIO —Pasca, Bosa,
// Funza, Fontibón, Cota, Guane, Sogamoso, Iza— y lo que se sostiene en imagen
// es UN CAMINO, no un personaje. Por eso:
//   · el ancla de casi todas las escenas es un LUGAR o una HUELLA, no su cara;
//   · los movimientos de cámara son de recorrido —travellings, ascensos,
//     saltos de un sitio a otro— y no de retrato;
//   · él aparece pequeño, de espaldas o cortado por el borde la mayoría de
//     las veces, y casi nunca en primer plano.
//
// OTROS DESLINDES DEL ACTA:
// · El viajero NO hace milagros. Enseña a hilar, ayuda a abrir una acequia y
//   deja dibujos en piedra. Lo extraordinario es que PREGUNTA ANTES.
// · Los tres nombres NO se resuelven: responde a todos y sigue.
// · Los tres finales tampoco: los tres van en cuadro, en el mismo bloque, y
//   se cierra con «nadie encontró su cuerpo».
// · Lo que queda NO es una religión: telares pintados, una acequia con agua y
//   un sendero que se siguió usando. Objetos y un camino, no un culto.
//
// GUION DE LUZ: llanos del oriente al amanecer → camino sin destino → luz de
// las preguntas → algodón mal atado → telar → piedra pintada → nombres en
// Bosa → agua que vuelve a correr → multitud de Cota → cueva al anochecer →
// piedras de Guane → valle de Sogamoso → tres finales y un sendero.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-camino-bochica-escenas";
export const OUT_DIR = "muiscas/videos/los-dioses-civilizadores/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; milagros, curaciones, resplandor, aureola, rayos, levitacion; templos, altares, culto, imagenes veneradas, procesiones; vara dorada, peñas partiendose, inundacion, arcoiris; ascension con nubes doradas, angeles, coros; retratos heroicos en primer plano con luz de gloria; texto, letreros, mapas dibujados con nombres";
export const PALETTE =
  "verde de llano y de sabana, pardo de camino y de tierra removida, crema de algodon crudo, gris de piedra lisa, ocre rojizo del pigmento, azul frio de sierra; sin saturacion ni neones";

const VIAJERO =
  "EL MISMO Bochica de la referencia (hombre mayor, descalzo, barba blanca larga hasta el pecho, pelo gris sujeto con una cinta, manta de algodón crudo atada por sus dos puntas sobre el hombro)";

export const ITEMS = armar([
  // b1 — Vino del oriente y llegó por Pasca.
  esc("b1a", [ref("sendero_territorio"), ref("altiplano_noche")], {
    comun: "Amanecer sobre los llanos del oriente, por donde nace la luz. Un camino que entra entre los llanos hacia la sierra. Objeto ancla: el camino.",
    camara: {
      a: "PLANO MACRO de la tierra del camino con una huella de pie descalzo recién marcada.",
      b: "la cámara se ha ELEVADO muchísimo siguiendo el camino: GRAN PLANO GENERAL en picado con el camino cruzando el llano de un borde a otro del cuadro hacia la sierra.",
    },
    ini: "en la tierra hay una sola huella de pie descalzo y nada más.",
    fin: "desde arriba se ve el camino entero cruzando el llano hacia las montañas, larguísimo, con una figura diminuta avanzando por él.",
  }, "personas en primer plano, aureola, resplandor, caravanas, animales de carga"),
  escp("b1b", [ref("bochica_anciano"), ref("sendero_territorio")], {
    comun: `${VIAJERO} llegando al reino por Pasca. Se le ve por partes y de lejos: éste es un video sobre un camino, no sobre una cara. Objeto ancla: sus pies descalzos.`,
    camara: {
      a: "PLANO MACRO de sus pies descalzos y polvorientos avanzando por la tierra del camino.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL lateral con él pequeño en el camino y el primer poblado de la sierra apareciendo al fondo.",
    },
    ini: "sólo se ven unos pies descalzos cubiertos de polvo, andando.",
    fin: "desde lejos se le ve entero y pequeño en el camino, con la manta atada por las dos puntas al hombro y el primer caserío al fondo.",
  }, "primer plano de rostro con luz de gloria, aureola, multitud recibiendolo"),

  // b2 — Nadie supo de dónde venía. No pidió templos.
  escp("b2a", [ref("bochica_anciano"), ref("familias_muiscas"), ref("poblado_nuevo")], {
    comun: `Luz plana de mañana. Nadie supo de dónde venía ni adónde iba. No pidió templos ni anunció guerras: entra en el pueblo como entra cualquiera. Objeto ancla: la entrada del poblado.`,
    camara: {
      a: "PLANO MEDIO desde dentro del poblado, mirando hacia el camino por donde llega alguien.",
      b: "la cámara ha RETROCEDIDO entre las casas y ha subido: PLANO GENERAL del caserío con él entrando por un extremo, pequeño, y la gente siguiendo en lo suyo.",
    },
    ini: "por el camino se acerca una figura que todavía no se distingue.",
    fin: "desde arriba ha entrado al caserío y camina entre las casas; nadie ha dejado de hacer lo que hacía y nadie ha salido a recibirlo.",
  }, "templos, altares, procesion, multitud aclamando, aureola"),
  escp("b2b", [ref("bochica_anciano"), ref("familias_muiscas")], {
    comun: `En cada pueblo hablaba la lengua que allí se hablaba. Se cuenta por las caras que entienden, no por un prodigio. Objeto ancla: las caras que asienten.`,
    camara: {
      a: "PLANO MEDIO CORTO de su boca y su barba hablando, sin verle los ojos.",
      b: "la cámara ha hecho un PANEO LATERAL hasta los que escuchan: PLANO MEDIO de cuatro caras siguiendo lo que dice y asintiendo, sin extrañeza.",
    },
    ini: "sólo se le ve la boca y la barba mientras habla.",
    fin: "enfrente, cuatro caras lo siguen sin esfuerzo y asienten: le entienden como a un vecino.",
  }, "magia, resplandor, lenguas de fuego, aureola, traduccion dibujada"),

  // b3 — Antes de enseñar preguntaba. (CITA)
  escp("b3a", [ref("bochica_anciano"), ref("familias_muiscas"), ref("acequia_bosa")], {
    comun: `Luz de media mañana. Antes de enseñar PREGUNTA: dónde duerme el agua, cómo se resguarda la cosecha del frío, quién trenza el fique. Eso es lo extraordinario del relato. Objeto ancla: hacia dónde señala el que responde.`,
    camara: {
      a: "PLANO MEDIO de él escuchando a un hombre que señala hacia un lado del campo.",
      b: "la cámara ha girado y AVANZADO en la dirección que señala el brazo: PLANO GENERAL del sitio donde duerme el agua, un hondo con juncos entre los surcos.",
    },
    ini: "el hombre le contesta señalando hacia el campo y él escucha sin interrumpir.",
    fin: "el cuadro se ha ido adonde señalaba: un hondo con juncos y barro húmedo entre los surcos, que es donde el agua se queda.",
  }, "sermon, aureola, magia, adivinacion, texto"),
  escp("b3b", [ref("bochica_anciano"), ref("familias_muiscas"), ref("copo_algodon")], {
    comun: `La misma escena se repite pueblo a pueblo: primero escucha, después muestra. Objeto ancla: el orden de los cuerpos.`,
    camara: {
      a: "PLANO MEDIO de él sentado más bajo que los demás, escuchando a una mujer que trenza fique.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL en picado del corro en el que se ve que él es el único sentado y todos los demás están hablando.",
    },
    ini: "él escucha sentado mientras ella trenza y habla.",
    fin: "desde arriba se ve el corro entero: seis personas hablando y explicando, y él abajo, sentado y callado, oyendo a todos.",
  }, "sermon, pulpito, aureola, discipulos arrodillados, texto"),

  // b4 — La gente se cubría con planchas de algodón.
  esc("b4a", [ref("algodon_planchas")], {
    comun: "Luz fría. LAS MISMAS planchas de algodón en rama de la referencia, sin hilar y atadas con cordeles de fique bastos: un abrigo mal unido que el trabajo deshace. Objeto ancla: el roto.",
    camara: {
      a: "PLANO MACRO del roto por donde el trabajo ya deshizo el atado, con las fibras saliéndose.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO del abrigo entero sobre una estera, con los cordeles mal anudados a la vista.",
    },
    ini: "sólo se ve el roto y las fibras sueltas escapándose del borde.",
    fin: "visto entero, el abrigo es un apaño de dos planchas atadas que no aguantan: los cordeles ceden por tres sitios a la vez.",
  }, "ropa moderna, telas industriales, personas, dramatismo, miseria explotada"),
  escp("b4b", [ref("familias_muiscas"), ref("algodon_planchas"), ref("sabana_cultivos")], {
    comun: "Luz fría de campo. La gente trabajando con ese abrigo encima, que se les va deshaciendo mientras trabajan. Objeto ancla: el abrigo sobre los hombros.",
    camara: {
      a: "PLANO MEDIO CORTO de un hombro con la plancha de algodón atada encima, cediendo con el movimiento.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del sembrado con seis personas trabajando, todas con el mismo apaño encima y todas recolocándoselo.",
    },
    ini: "la plancha cede en el hombro con el movimiento del brazo.",
    fin: "desde lejos se ve a todos con el mismo problema a la vez: seis personas que se paran a recolocarse el abrigo en mitad del trabajo.",
  }, "desnudez, miseria explotada, llanto, cadaveres, dramatismo"),

  // b5 — Enseñó a hilar y tejer. Dejaba pintada la figura del telar.
  escp("b5a", [ref("bochica_anciano"), ref("telar_marco"), ref("copo_algodon")], {
    comun: `${VIAJERO} tomando el algodón y enseñando a hilarlo y a tejer mantas en el telar. Todo lo que hace lo podría hacer cualquiera que sepa. Objeto ancla: el hilo que nace del copo.`,
    camara: {
      a: "PLANO MACRO de sus dedos estirando el hilo de un copo de algodón en rama.",
      b: "la cámara ha SEGUIDO el hilo hasta el telar y ha retrocedido: PLANO MEDIO LARGO con el telar de marco montado, la trama a medias y tres personas trabajando en él.",
    },
    ini: "los dedos sacan un hilo del copo y lo estiran.",
    fin: "el hilo llega al telar, donde ya hay trama hecha y tres personas pasando la lanzadera; él está a un lado, mirando.",
  }, "aureola, magia, resplandor, telares industriales, maquinas"),
  esc("b5b", [ref("piedra_telar"), ref("sendero_territorio")], {
    comun: "Luz plana. Al salir de cada pueblo deja pintada sobre una piedra lisa y bruñida LA MISMA figura del telar de la referencia —un rectángulo con líneas verticales parejas y dos travesaños, en pigmento ocre rojizo, de trazo tosco y seguro—, para que el olvido no pueda con lo aprendido. Objeto ancla: la piedra pintada.",
    camara: {
      a: "PLANO MACRO del pigmento ocre todavía fresco sobre la piedra gris bruñida.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del borde del camino con la piedra pintada a un lado y el camino siguiendo hacia el fondo.",
    },
    ini: "el trazo ocre está fresco y brillante sobre la piedra lisa.",
    fin: "desde lejos, la piedra con el telar pintado queda al borde del camino, pequeña, y el camino sigue más allá de ella hacia el siguiente pueblo.",
  }, "letreros, texto, simbolos religiosos, cruces, altares, ofrendas"),

  // b6 — En Bosa discutían qué nombre ponerle. Respondía a todos.
  escp("b6a", [ref("familias_muiscas"), ref("mercado_bacata"), ref("bochica_anciano")], {
    comun: `Luz de mediodía en Bosa. La gente discute qué nombre ponerle: unos dicen Chimizapagua, otros Nemterequeteba, otros Xué. LOS TRES SE CONSERVAN: la imagen no elige. Objeto ancla: los tres grupos que discuten.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos hombres discutiendo cara a cara, cada uno insistiendo en lo suyo.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PICADO: se ven TRES corrillos distintos discutiendo a la vez, y él pequeño entre los tres sin pertenecer a ninguno.",
    },
    ini: "dos hombres discuten cara a cara sin ponerse de acuerdo.",
    fin: "desde arriba se ve que son tres grupos distintos discutiendo a la vez, y él está en el medio de los tres, callado.",
  }, "letreros con nombres, texto, votacion, aureola, coronacion"),
  escp("b6b", [ref("bochica_anciano"), ref("sendero_territorio"), ref("familias_muiscas")], {
    comun: `Él responde a todos los nombres y sigue su camino. No se resuelve nada: se va. Objeto ancla: el camino que toma.`,
    camara: {
      a: "PLANO MEDIO de él girándose hacia los tres grupos y asintiendo a los tres.",
      b: "la cámara se ha QUEDADO con los grupos mientras él sale: PLANO GENERAL desde el pueblo con las tres discusiones todavía en marcha en primer término y él ya pequeño en el camino del fondo.",
    },
    ini: "se gira hacia ellos y asiente, sin negar ninguno de los tres nombres.",
    fin: "en el pueblo siguen discutiendo los tres grupos y él ya va lejos por el camino, de espaldas: la pregunta se queda aquí y él no.",
  }, "eleccion de nombre, letrero, texto, coronacion, aureola"),

  // b7 — Abrió una acequia en Bosa. Pasó a Funza y a Fontibón.
  escp("b7a", [ref("bochica_anciano"), ref("acequia_bosa"), ref("familias_muiscas")], {
    comun: `Luz de tarde. Donde el agua se moría entre los surcos, AYUDA a abrir una acequia para que vuelva a correr. Ayuda: no la abre solo y no hace magia. Objeto ancla: el hilo de agua.`,
    camara: {
      a: "PLANO MACRO del primer hilo de agua entrando en el canal recién excavado, entre la tierra removida.",
      b: "la cámara ha SEGUIDO el agua canal abajo y ha subido: PLANO GENERAL con LA MISMA acequia de la referencia bajando en curva entre los dos sembrados, y cuatro personas —él entre ellas— todavía cavando el tramo final.",
    },
    ini: "el agua entra en el canal y avanza un palmo entre la tierra.",
    fin: "desde arriba el agua baja ya por toda la curva hacia los surcos secos, y en el tramo final siguen cuatro personas cavando, él una más entre ellas.",
  }, "magia, varita, resplandor, aureola, agua que brota sola"),
  esc("b7b", [ref("sendero_territorio"), ref("poblado_nuevo"), ref("piedra_telar")], {
    comun: "Luz de tarde larga. De Bosa pasó a Funza y a Fontibón: el camino sigue y en cada pueblo queda una piedra. Objeto ancla: las piedras pintadas que se van quedando atrás.",
    camara: {
      a: "PLANO MEDIO de una piedra con el telar pintado al borde del camino, con un caserío detrás.",
      b: "la cámara ha hecho un TRAVELLING larguísimo por el camino hacia el fondo y ha subido: GRAN PLANO GENERAL en picado con TRES caseríos distintos repartidos en el valle y, junto a cada uno, una piedra pequeña al borde del camino.",
    },
    ini: "una piedra pintada junto al primer caserío.",
    fin: "desde arriba se ven los tres pueblos del valle y, en el borde del camino de cada uno, la misma piedra con el mismo telar pintado.",
  }, "mapas, letreros, texto, banderas, personas en primer plano"),

  // b8 — En Cota le abrieron un foso. De noche dormía en una cueva.
  escp("b8a", [ref("familias_muiscas"), ref("bochica_anciano"), ref("plaza_fiesta_noche")], {
    comun: `Luz de mediodía en Cota. Se juntó tanta gente de los pueblos vecinos que le abrieron un foso alrededor del sitio alto donde hablaba, para que la multitud no lo atropellara. El foso es práctico, no ceremonial. Objeto ancla: el foso.`,
    camara: {
      a: "PLANO MACRO del borde del foso recién cavado, con la tierra removida y los pies de la gente al otro lado.",
      b: "la cámara se ha ELEVADO muchísimo: PICADO ALTO con el sitio alto en el centro, el anillo del foso alrededor y la multitud apretada al otro lado del anillo.",
    },
    ini: "los pies de la primera fila están justo al borde de la zanja.",
    fin: "desde arriba se entiende el apaño: un anillo de tierra cavada separa a la multitud del sitio alto, donde él es una figura pequeña hablando.",
  }, "trono, altar, aureola, arrodillarse, adoracion, muralla"),
  esc("b8b", [ref("cueva_sierra"), ref("bochica_anciano")], {
    comun: "Anochecer frío. Por la noche duerme en LA MISMA cueva de la referencia, al pie de la sierra, y al amanecer sigue. No hay séquito ni comodidad. Objeto ancla: la repisa de piedra de la entrada.",
    camara: {
      a: "PLANO GENERAL de la ladera con la boca oscura de la cueva a media altura y el valle en penumbra abajo.",
      b: "la cámara ha AVANZADO hasta la entrada y ha girado hacia dentro: PLANO MEDIO de la repisa de piedra con una manta doblada encima y nada más.",
    },
    ini: "desde lejos, la cueva es una boca oscura en la falda del monte.",
    fin: "dentro, en la repisa de piedra, sólo hay una manta doblada: ni fuego, ni ajuar, ni nadie acompañándolo.",
  }, "altar, ofrendas, velas, iconos, aureola, discipulos"),

  // b9 — Lo dibujaron en las piedras de Guane. Giró al oriente.
  esc("b9a", [ref("piedra_telar"), ref("piedras_funza")], {
    comun: "Luz rasante. En la tierra de Guane lo dibujaron en las piedras, A LO TOSCO, para que quedara memoria de su paso. Son trazos torpes hechos por otros, no un retrato. Objeto ancla: los trazos en la roca.",
    camara: {
      a: "PLANO MACRO de unos trazos toscos en pigmento ocre sobre la roca: una figura de palotes con una línea larga por barba.",
      b: "la cámara ha RETROCEDIDO a lo largo de la pared de roca: PLANO GENERAL de un paredón con ocho o diez figuras igual de torpes repartidas por él.",
    },
    ini: "una figura de palotes con una barba larga, torpe y seguro de trazo.",
    fin: "en el paredón entero hay ocho o diez dibujos parecidos hechos por manos distintas: nadie sabía dibujarlo bien y lo intentaron igual.",
  }, "retrato realista, icono religioso, aureola, altar, ofrendas, texto"),
  escp("b9b", [ref("bochica_anciano"), ref("sendero_territorio"), ref("valle_iraca")], {
    comun: `Luz de mañana. Luego giró hacia el oriente y entró al valle de Sogamoso. Objeto ancla: el giro del camino.`,
    camara: {
      a: "PLANO CENITAL del camino donde se bifurca, con una huella de pie descalzo tomando el ramal del oriente.",
      b: "la cámara se ha ELEVADO y ha avanzado por ese ramal: GRAN PLANO GENERAL del valle de Iraca abriéndose, con sus sembrados en hileras y los bohíos repartidos.",
    },
    ini: "en la bifurcación, las huellas se van por el ramal de la derecha.",
    fin: "al final de ese ramal se abre el valle entero, sembrado de maíz joven en hileras, con la cordillera cerrándolo en cuatro capas.",
  }, "mapas, letreros, texto, aureola, multitud recibiendolo"),

  // b10 — Habló del trato justo y de gobernar con suavidad.
  escp("b10a", [ref("bochica_anciano"), ref("sogamoso_cacique"), ref("valle_iraca")], {
    comun: `Luz de tarde en el valle. Habla de la vida común: del trato justo, de cómo gobernar con suavidad, de las normas que sostienen a un pueblo cuando nadie impone la palabra. Objeto ancla: los dos sentados a la misma altura.`,
    camara: {
      a: "PLANO MEDIO de los dos sentados en el suelo, a la misma altura, hablando.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL en el que se ve que están sentados en el borde de un sembrado, sin recinto, sin público y sin nada que los distinga.",
    },
    ini: "los dos hablan sentados frente a frente en el suelo.",
    fin: "desde lejos se ve dónde están: en el borde de un surco, al aire libre, sin corte, sin guardias y sin nadie escuchando.",
  }, "trono, corte, guardias, aureola, sermon, tablas de la ley"),
  escp("b10b", [ref("sogamoso_cacique"), ref("familias_muiscas"), ref("valle_iraca")], {
    comun: "Luz de tarde. Al señor del valle le deja la forma de mandar sin crueldad. Se ve en lo que el señor hace después, no en lo que le dijeron. Objeto ancla: cómo resuelve una disputa.",
    camara: {
      a: "PLANO MEDIO de dos hombres discutiendo delante del señor del valle.",
      b: "la cámara ha RODEADO hasta detrás del señor: PLANO MEDIO desde su espalda, con él inclinado hacia adelante escuchando a los dos y sin levantar la mano.",
    },
    ini: "los dos discuten delante de él, cada uno lo suyo.",
    fin: "desde su espalda se ve que está inclinado hacia ellos escuchando, con las manos quietas sobre las rodillas: nadie ha sido castigado.",
  }, "castigos, latigos, ejecuciones, trono, corona, guardias"),

  // b11 — Una mañana ya no estaba. Dijeron que fue alzado al cielo.
  escp("b11a", [ref("cueva_sierra"), ref("bochica_anciano")], {
    comun: "Primera luz. Una mañana ya no estaba. Objeto ancla: la repisa de piedra vacía.",
    camara: {
      a: "PLANO MACRO de la repisa de piedra de la cueva, con la manta doblada encima.",
      b: "la cámara ha RETROCEDIDO hasta la boca de la cueva y ha girado hacia fuera: PLANO GENERAL del valle al amanecer visto desde dentro, con el camino bajando y nadie en él.",
    },
    ini: "en la repisa está la manta doblada, como cada noche.",
    fin: "desde la boca de la cueva, el camino baja vacío hacia el valle iluminado: no hay nadie en él en ninguna dirección.",
  }, "ascension, nubes doradas, angeles, rayos, resplandor, cadaver"),
  esc("b11b", [ref("valle_iraca"), ref("altiplano_noche")], {
    comun: "PRIMERA VERSIÓN DEL FINAL: algunos dijeron que había muerto en Sogamoso y había sido alzado al cielo. La imagen NO lo confirma: se queda en el cielo vacío sobre el valle. Objeto ancla: el cielo sobre Sogamoso.",
    camara: {
      a: "PLANO MEDIO del valle de Iraca con la gente mirando hacia arriba, señalando.",
      b: "la cámara ha basculado hacia arriba siguiendo lo que señalan y ha subido: PLANO ENTERAMENTE DE CIELO, despejado y vacío, sin ninguna figura en él.",
    },
    ini: "abajo, la gente señala hacia arriba y habla entre sí.",
    fin: "arriba no hay nada: el cielo está limpio y vacío de borde a borde, sin figura, sin nube dorada y sin nadie subiendo.",
  }, "ascension, angeles, nubes doradas, rayos, figura en el cielo, aureola"),

  // b12 — Otros, que desapareció en Iza. Otros, que abrió camino a las aguas.
  esc("b12a", [ref("piedra_huella_iza")], {
    comun: "SEGUNDA VERSIÓN DEL FINAL: desapareció en Iza y dejó LA MISMA huella de la referencia estampada en una piedra —el arco del pie, el talón y los cinco dedos hundidos como si la roca hubiera estado blanda—. Objeto ancla: la huella.",
    camara: {
      a: "PLANO MACRO de la huella en la piedra, con el líquen en las grietas del borde.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del paraje de Iza con la piedra sola en mitad del campo y ningún rastro alrededor.",
    },
    ini: "la huella llena el cuadro, hundida y nítida en la roca gris.",
    fin: "desde lejos, la piedra con la huella está sola en mitad del campo y a su alrededor no hay ni un rastro más: ni pisadas de salida, ni nada.",
  }, "figura desapareciendo, resplandor, particulas, aureola, personas"),
  esc("b12b", [ref("salto_tequendama"), ref("sabana_cultivos")], {
    comun: "TERCERA VERSIÓN DEL FINAL: otros recordaron que sus manos habían abierto camino a las aguas para que la sabana respirara. Se cuenta como MEMORIA, no como escena: el agua corriendo hoy, sin nadie en cuadro. Objeto ancla: el agua que sale.",
    camara: {
      a: "PLANO MEDIO del agua saliendo por el paso abierto en la roca, sin ninguna figura.",
      b: "la cámara ha RETROCEDIDO siguiendo el curso del agua y ha subido: GRAN PLANO GENERAL de la sabana entera drenada y sembrada, con el río cruzándola.",
    },
    ini: "el agua sale con fuerza por el paso de la roca y no hay nadie.",
    fin: "desde arriba se ve el resultado de aquello: la sabana entera seca y sembrada, con el río llevándose el agua por el corte de la sierra.",
  }, "vara dorada, figura lanzando, arcoiris, aureola, personas adorando"),

  // b13 — Nadie encontró su cuerpo. Quedaron los telares, la acequia, el sendero.
  esc("b13a", [ref("sendero_territorio"), ref("valle_iraca"), ref("cueva_sierra")], {
    comun: "Luz plana. Nadie encontró su cuerpo. La imagen no resuelve ninguna de las tres versiones: busca y no halla. Objeto ancla: los sitios vacíos.",
    camara: {
      a: "PLANO MEDIO de gente buscando entre las piedras de una ladera, agachados.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con tres grupos buscando en tres sitios distintos del territorio a la vez, todos pequeños y ninguno encontrando nada.",
    },
    ini: "unos cuantos buscan entre las piedras de una ladera.",
    fin: "desde muy arriba se ve que buscan en tres sitios a la vez —la sierra, el valle y el río—, y en ninguno de los tres hay nada.",
  }, "cadaver, tumba, sepulcro, reliquias, altar, aureola"),
  esc("b13b", [ref("piedra_telar"), ref("acequia_bosa"), ref("sendero_territorio")], {
    comun: "Luz abierta de mañana, mucho después. Lo que queda NO es una religión: los telares pintados en la piedra lisa, la acequia que sigue llevando agua y un sendero ancho que las generaciones nunca dejaron de usar. Objeto ancla: las tres cosas que quedaron.",
    camara: {
      a: "PLANO MACRO del telar pintado en la piedra, ya desvaído por los años pero todavía legible.",
      b: "la cámara ha RETROCEDIDO y ha subido en un movimiento largo hasta un GRAN PLANO GENERAL final en el que se ven a la vez: la piedra pequeña al borde del camino, la acequia llevando agua entre los sembrados y el sendero ancho cruzando el valle con gente andando por él.",
    },
    ini: "el trazo ocre del telar está desvaído pero se lee entero.",
    fin: "desde arriba están las tres cosas en el mismo cuadro: la piedra pintada, el agua corriendo por la acequia y el sendero lleno de gente que sigue yendo y viniendo por él.",
  }, "templos, altares, culto, imagenes veneradas, estatuas, texto"),
]);
