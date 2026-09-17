// Keyframes de Goranchacha, el hijo del Sol — 10 bloques × 2 escenas × 2 cuadros
// = 40 imágenes ≈ 100 s.
// Guion: guion-el-hijo-del-sol-goranchacha-v2.json (N=10)
// Acta:  acta-el-hijo-del-sol-goranchacha.json (20 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · El relato NO CONFIRMA su filiación. El cierre lo dice: el sol siguió
//   saliendo igual para todos, sin responder quién era de verdad su hijo.
//   Ninguna imagen puede zanjarlo: nada de aureolas, rayos que lo señalen ni
//   resplandor propio. La luz que recibe es la del amanecer, y nada más.
// · Goranchacha NO es un héroe: mata por cólera, prohíbe que lo miren, obliga
//   a postrarse con el rostro en el suelo y castiga cruelmente faltas leves.
// · El motivo del asesinato SÍ es una injusticia —ahorcaron a un muchacho
//   paje— y eso no lo absuelve ni lo condena: las dos cosas van juntas.
// · El templo NUNCA se termina. Las columnas quedan abandonadas en el camino
//   y en el cierre siguen ahí. La obra inconclusa es la imagen del personaje.
// · La despedida NO es apoteosis: entra en su cercado y ya. Lo único
//   espectacular le pasa al pregonero, que estalla y se vuelve humo hediondo.
//
// GUION DE LUZ: rumor de tarde → primeros rayos hiriendo el cerro → verde de
// la esmeralda entre algodones → mañana de aldea pequeña → fiestas de dos
// cortes → luz partida del regreso → penumbra de la corte de Tunja → noche de
// las columnas → mediodía del anuncio → amanecer que no responde.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-goranchacha-escenas";
export const OUT_DIR = "muiscas/videos/el-hijo-del-sol-goranchacha/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; aureola, halo, rayos dibujados saliendo del cuerpo, resplandor propio, cuerpo luminoso; iconografia solar inventada, discos radiados, soles con cara; anunciacion cristiana, angeles, palomas, virgen; templo griego o romano terminado, frontones, capiteles corintios; ahorcamiento en primer plano, cuerpo colgado visible, sangre abundante, decapitacion; demonios, fuego infernal, explosion de fuegos artificiales";
export const PALETTE =
  "ocre de cerro pelado, crema de algodon crudo, verde profundo de esmeralda, gris de piedra labrada, pardo de camino, negro de noche sin luna; el oro solo mate y en la placa del pecho; sin saturacion";

const GORAN =
  "EL MISMO Goranchacha de la referencia (hombre de unos treinta años, alto y de porte distante, rostro hermoso y frío, pelo negro liso recogido bajo una diadema tejida ancha, manta de algodón de tejido finísimo anudada al hombro con tres cenefas geométricas en ocre y verde y una placa de oro mate al pecho, descalzo)";
const HIJA =
  "LA MISMA hija del cacique de Guachetá de la referencia (mujer joven de unos veinte años, rostro decidido, pelo negro liso muy largo y suelto, manta de algodón crudo del pecho a la pantorrilla anudada al hombro con cenefa tejida sobria en ocre, descalza)";
const RAMI =
  "EL MISMO Ramiriquí de la referencia (joven de unos veinticinco años, rostro atento, pelo negro liso hasta los hombros sujeto por una cinta tejida angosta, manta corta de algodón crudo sobre el hombro y ceñida a la cintura con cenefa geométrica)";
const PREGONERO =
  "EL MISMO mensajero de la referencia (hombre de unos treinta años, delgado y cansado, rostro atento, pelo negro liso recogido, manta de algodón crudo gastada con barro seco en el borde, descalzo y con los pies sucios de camino, cuello completamente desnudo)";

export const ITEMS = armar([
  // b1 — Corría la voz. El cacique tenía dos hijas y ambas quisieron.
  escp("b1a", [ref("familias_muiscas"), ref("casa_barro_paja")], {
    comun: "Luz de tarde entre los bohíos de Guachetá. Gente de LAS MISMAS familias de la referencia pasándose una noticia de boca en boca: el Sol tomaría carne humana en una doncella del pueblo. Objeto ancla: las bocas junto a los oídos.",
    camara: {
      a: "PLANO MEDIO CORTO de dos hombres de perfil, uno hablándole al oído al otro.",
      b: "la cámara ha hecho un TRAVELLING de corrillo en corrillo por el caserío y ha subido: PLANO GENERAL en el que se ven cinco grupos distintos hablando a la vez delante de sus puertas.",
    },
    ini: "un hombre le cuenta algo al oído a otro y nadie más se entera.",
    fin: "recorrido el caserío, se ve que la voz ya dio la vuelta entera: cinco corrillos distintos hablando de lo mismo bajo la luz que se va.",
  }, "anunciacion cristiana, angel, paloma, resplandor, texto"),
  escp("b1b", [ref("muchacha_guacheta"), ref("cercado_bacata")], {
    comun: `Luz de última hora dentro del cercado del cacique. DOS hermanas —${HIJA} y otra igual a ella— oyendo la noticia. Las dos desearon que el milagro cayera sobre ellas: eso es rivalidad, no maldad. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO GENERAL del patio con las dos sentadas en esteras, lejos del objetivo y a distinta altura.",
      b: "la cámara ha AVANZADO y se ha puesto entre las dos: PLANO MEDIO CORTO con una cara en cada mitad del cuadro, mirándose.",
    },
    ini: "están sentadas cada una en lo suyo y acaban de levantar la cabeza.",
    fin: "de cerca se ve que se han girado la una hacia la otra y se sostienen la mirada: las dos han pensado lo mismo a la vez.",
  }, "envidia caricaturizada, odio, gritos, pelea, llanto"),

  // b2 — Subían al cerro antes del alba. Una sintió la luz quedarse dentro.
  escp("b2a", [ref("muchacha_guacheta"), ref("loma_pelada_noche"), ref("altiplano_noche")], {
    comun: `Azul de antes del alba. Las DOS hermanas subiendo por el lado del cerro por donde sale el sol, sobre la hierba escarchada del amanecer. ${HIJA} entre ellas. Objeto ancla: el filo del cerro por donde va a salir el sol.`,
    camara: {
      a: "PLANO MEDIO por detrás de las dos, subiendo la cuesta a oscuras, con la hierba escarchada en primer término.",
      b: "la cámara se ha ADELANTADO hasta lo alto y se ha dado la vuelta: PLANO GENERAL en contrapicado desde la cima, con las dos llegando de frente y el cielo abriéndose detrás de ellas.",
    },
    ini: "suben a oscuras y sólo se distinguen sus siluetas contra la ladera.",
    fin: "han llegado a lo alto y se las ve de frente contra un cielo que empieza a aclarar por el filo del cerro.",
  }, "procesion, antorchas, ceremonia, sacerdotes, aureolas"),
  escp("b2b", [ref("muchacha_guacheta"), ref("loma_pelada_noche")], {
    comun: `Primeros rayos rasantes del amanecer, luz natural y sin ningún añadido sobrenatural. Las dos hermanas tendidas sobre la hierba en lo alto del cerro, de cara al este, para que los primeros rayos las hieran. ${HIJA} es la de la derecha. Objeto ancla: la cara de ella.`,
    camara: {
      a: "PLANO GENERAL cenital de las dos tendidas sobre la hierba, vistas desde arriba y pequeñas.",
      b: "la cámara ha DESCENDIDO hasta el suelo junto a una de ellas: PRIMER PLANO de la cara de ${HIJA} de perfil contra la hierba, con el sol rasante dándole de lleno.",
    },
    ini: "las dos están tendidas y quietas, con el cielo todavía gris encima.",
    fin: "de cerca, el primer rayo le da de lleno en la cara y ella ha abierto los ojos y ha contenido el aire: la luz entró y se quedó dentro. No hay ningún resplandor añadido, sólo el sol.",
  }, "aureola, rayo dibujado, resplandor en el vientre, magia visible, desnudez, escena sexual"),

  // b3 — Parió una esmeralda; días después era una criatura.
  escp("b3a", [ref("muchacha_guacheta"), ref("esmeralda_algodones")], {
    comun: `Penumbra de interior con una lámpara baja. ${HIJA}, ya con nueve meses cumplidos, y LA MISMA esmeralda de la referencia: grande, de talla tosca, verde profunda y de caras irregulares, envuelta a medias en un lienzo de algodón crudo abierto como una flor. Objeto ancla: la esmeralda.`,
    camara: {
      a: "PLANO MACRO de la esmeralda sobre los algodones, tan cerca que se le ven las caras irregulares y el verde profundo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de ella sentada, envolviendo la piedra en el lienzo y guardándosela entre los pechos.",
    },
    ini: "la piedra está sobre el lienzo abierto y nadie la ha tocado todavía.",
    fin: "ella la ha envuelto y se la ha guardado contra el pecho, con las dos manos encima y la cara baja; la estera ha quedado vacía.",
  }, "parto explicito, sangre, dolor, desnudez, milagro con resplandor, cruces"),
  escp("b3b", [ref("muchacha_guacheta"), ref("esmeralda_algodones"), ref("casa_barro_paja")], {
    comun: `Luz gris de mañana dentro del bohío. Días después, ${HIJA} abriendo el lienzo. Lo que hay dentro ya no es la piedra. El prodigio se ve, pero sin efectos: es un niño pequeño envuelto en algodones, visto siempre a media distancia y sin luz propia. Objeto ancla: el lienzo que se abre.`,
    camara: {
      a: "PLANO DETALLE cenital del lienzo cerrado sobre su regazo, con sus dedos empezando a separar la tela.",
      b: "la cámara se ha ELEVADO y ha retrocedido hasta un PLANO MEDIO LARGO: se la ve entera sentada en la estera, con el lienzo ya abierto en el regazo y la cara vuelta hacia la puerta.",
    },
    ini: "sus dedos empiezan a separar la tela y todavía no se ve qué hay dentro.",
    fin: "el lienzo ha quedado abierto y dentro, a media distancia, hay un niño pequeño envuelto en algodones y no una piedra; ella ha levantado la cara hacia la puerta, sin gritar y sin llorar.",
  }, "resplandor, aureola, angeles, pesebre, adoracion, rayos"),

  // b4 — Creció y la noticia viajó antes que él. La aldea le pareció poca.
  escp("b4a", [ref("goranchacha_senor"), ref("camino_carrera"), ref("familias_muiscas")], {
    comun: `Luz plana de mañana. La noticia de su nacimiento viajando por los caminos antes que él: correos yendo de un lado a otro por EL MISMO camino de la referencia. Objeto ancla: el camino.`,
    camara: {
      a: "PLANO MEDIO de un correo pasando muy cerca del objetivo a paso vivo.",
      b: "la cámara se ha ELEVADO muchísimo hasta un PICADO ALTO del territorio: se ven tres caminos distintos y por cada uno va un correo en dirección distinta.",
    },
    ini: "un solo hombre pasa corriendo junto a la cámara.",
    fin: "desde arriba se ve que van tres a la vez, cada uno por su camino y hacia una provincia distinta: la noticia se ha repartido sola.",
  }, "caballos, carruajes, banderas, multitudes"),
  escp("b4b", [ref("goranchacha_senor"), ref("casa_barro_paja"), ref("sabana_cultivos")], {
    comun: `Luz de mañana sobre Guachetá. ${GORAN}, ya de veinticuatro años, mirando la aldea donde se crió. Lo que dice la imagen es que le queda chica, no que sea mala. Objeto ancla: el caserío.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de perfil, mirando hacia fuera de cuadro.",
      b: "la cámara ha girado y RETROCEDIDO hasta ponerse detrás de él y muy arriba: GRAN PLANO GENERAL en picado con él pequeño en un borde y la aldea entera abajo, cuatro bohíos y unos surcos.",
    },
    ini: "mira hacia algo que no vemos, con la cara quieta.",
    fin: "desde arriba y desde su espalda se ve lo que miraba: un caserío de cuatro casas en mitad del campo, y él ya vuelto hacia el camino que sale de él.",
  }, "aureola, resplandor, gesto de desprecio teatral, multitudes adorandolo"),

  // b5 — La corte de Ramiriquí lo agasajó. Sogamoso lo recibió con fiestas.
  escp("b5a", [ref("goranchacha_senor"), ref("ramiriqui_cacique"), ref("cercado_bacata")], {
    comun: `Luz de tarde en el cercado de Ramiriquí. ${RAMI} saliendo a recibir a ${GORAN} y agasajándolo como a hijo del Sol. El agasajo es real y cordial: aquí todavía no ha pasado nada. Objeto ancla: las manos del recibimiento.`,
    camara: {
      a: "PLANO GENERAL del patio con los dos acercándose desde extremos opuestos, pequeños.",
      b: "la cámara ha AVANZADO hasta ellos y ha bajado a la altura del pecho: PLANO MEDIO CORTO con las dos caras juntas y las manos de Ramiriquí sobre los antebrazos del otro.",
    },
    ini: "los dos caminan uno hacia el otro desde extremos opuestos del patio.",
    fin: "se han encontrado en el centro y Ramiriquí lo ha tomado por los antebrazos, hablándole de cerca; Goranchacha mantiene la cara distante.",
  }, "arrodillarse, besar manos, aureolas, tronos, coronas"),
  escp("b5b", [ref("sogamoso_cacique"), ref("goranchacha_senor"), ref("valle_iraca"), ref("plaza_fiesta_noche")], {
    comun: `Luz de fiesta al atardecer en el valle de Iraca. EL MISMO Sogamoso de la referencia recibiéndolo con aplauso, fiestas y presentes; ${GORAN} correspondiendo con lo que Ramiriquí le había dado. Objeto ancla: los presentes que van de mano en mano.`,
    camara: {
      a: "PLANO DETALLE de unas mantas finas y unos cuencos pasando de unas manos a otras, muy cerca.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL de la plaza en fiesta: los dos señores en el centro, la gente alrededor y el valle de Iraca al fondo.",
    },
    ini: "unas manos entregan los presentes y otras los reciben, sin que se vea a quién pertenecen.",
    fin: "desde arriba se ve la fiesta entera: el corro, los músicos, los dos señores en el centro intercambiando lo recibido, y el valle sembrado detrás.",
  }, "banquetes europeos, mesas, copas, coronas, tronos, cruces"),

  // b6 — Ahorcaron a su paje. Entró, mató al cacique y se hizo obedecer.
  escp("b6a", [ref("goranchacha_senor"), ref("mensajero_quebrada"), ref("sendero_territorio")], {
    comun: `Luz cruda cerca de las peñas de Paipa. Uno de los suyos, como EL MISMO mensajero de la referencia, contándole en el camino que el cacique de Ramiriquí mandó ahorcar al muchacho que le servía de paje. La injusticia es real y el relato no la esconde. Objeto ancla: la cara de Goranchacha.`,
    camara: {
      a: "PLANO GENERAL de los dos parados en mitad del sendero, entre las peñas, pequeños.",
      b: "la cámara ha AVANZADO hasta la cara de Goranchacha: PRIMER PLANO en el que se le ve escuchar, con el mensajero desenfocado detrás.",
    },
    ini: "el mensajero le habla y él escucha sin moverse.",
    fin: "de muy cerca se le ve la cara mientras acaba de oírlo: la mandíbula apretada y los ojos fijos, sin gritar ni gesticular.",
  }, "cuerpo colgado en primer plano, horca detallada, sangre, ahorcamiento explicito"),
  escp("b6b", [ref("goranchacha_senor"), ref("ramiriqui_cacique"), ref("cercado_bacata")], {
    comun: `Penumbra del cercado de Ramiriquí. Lo que ocurre es una muerte, y el relato no la suaviza ni la celebra: se cuenta por sus consecuencias, no por la sangre. Objeto ancla: la estera vacía del cacique.`,
    camara: {
      a: "PLANO MEDIO de Goranchacha entrando por el vano de la puerta, a contraluz, con el patio en penumbra.",
      b: "la cámara ha RODEADO el patio hasta el otro extremo y ha basculado a PICADO: se ve el patio entero desde arriba, con la estera del cacique vacía y volcada, y él de pie en medio mientras los demás se inclinan.",
    },
    ini: "él cruza la puerta a contraluz y el patio está lleno de gente de pie.",
    fin: "desde arriba, la estera del cacique ha quedado vacía y volcada, él está solo de pie en el centro y todos los demás se han inclinado hacia el suelo a su alrededor.",
  }, "cadaver en primer plano, sangre abundante, arma en la mano, decapitacion, vísceras"),

  // b7 — Puso su corte en Tunja. No se dejaba mirar.
  escp("b7a", [ref("goranchacha_senor"), ref("zaque_tunja"), ref("cercado_bacata")], {
    comun: `Penumbra de la corte de Tunja con una sola abertura de luz. ${GORAN} en su sitio y la gente que se acerca postrada con el rostro pegado al suelo. Nadie le mira la cara. Objeto ancla: las caras contra la tierra.`,
    camara: {
      a: "PLANO MEDIO de él sentado en su banco bajo, de frente y a media luz.",
      b: "la cámara ha DESCENDIDO hasta el suelo, detrás de los que se postran: PLANO MACRO a ras de tierra de una mejilla apretada contra el polvo, con él desenfocado y lejos al fondo.",
    },
    ini: "él está sentado y delante de él la gente empieza a bajar.",
    fin: "a ras de suelo se ve una cara aplastada contra el polvo, los ojos cerrados, y al fondo y borroso el sitio donde él está: nadie levanta la vista.",
  }, "trono europeo, corona, cetro, guardias con armas, aureola, latigos"),
  escp("b7b", [ref("goranchacha_senor"), ref("familias_muiscas"), ref("poste_lindero")], {
    comun: "Luz dura de mediodía en las afueras. Sus castigos eran crueles hasta por faltas leves. La imagen lo dice por lo que hay en el cerro, no por la escena de un suplicio: una horca de palos vacía, recortada contra el cielo, y la gente pasando por debajo sin mirarla. Objeto ancla: la horca vacía.",
    camara: {
      a: "PLANO MEDIO de un grupo pasando por el camino con la cara baja, sin mirar hacia arriba.",
      b: "la cámara ha SUBIDO por encima de ellos hasta el cerro y ha basculado a CONTRAPICADO: la horca de dos palos y un travesaño, vacía, ocupando el cuadro contra el cielo.",
    },
    ini: "la gente pasa por el camino mirando al suelo.",
    fin: "arriba, contra el cielo, está la horca de palos vacía y sola: no hay nadie colgado en ella, pero está puesta donde todos la ven.",
  }, "cuerpo colgado, cadaver, sangre, tortura, verdugos, multitud gritando"),

  // b8 — Mandó edificar un templo. Las columnas llegaron de noche.
  esc("b8a", [ref("columnas_camino"), ref("altiplano_noche")], {
    comun: "Noche cerrada sin luna. Los fustes de piedra gris llegando por el camino desde tierras lejanas, tan grandes que llegaron de noche y sin que nadie viera la cara de quienes los traían. NO se ve quién los arrastra: sólo las cuerdas tensas y la piedra moviéndose. Objeto ancla: el fuste que avanza.",
    camara: {
      a: "PLANO MACRO de una cuerda de fique tensa rozando el canto de la piedra, en la oscuridad.",
      b: "la cámara ha RETROCEDIDO a lo largo de la cuerda y ha subido: PLANO GENERAL nocturno del camino, con el fuste enorme avanzando y las cuerdas perdiéndose en la negrura, sin una sola figura visible.",
    },
    ini: "la cuerda está tensa contra la piedra y se mueve despacio.",
    fin: "desde lejos se ve el fuste entero avanzando por el camino tirado por cuerdas que se pierden en la oscuridad; no se ve ni una cara, ni una mano, ni una antorcha.",
  }, "figuras humanas visibles, antorchas, gigantes, monstruos, bueyes, carros con ruedas"),
  esc("b8b", [ref("columnas_camino"), ref("valle_iraca")], {
    comun: "Luz plana de mañana nublada. LAS MISMAS tres columnas de la referencia, tumbadas de través sobre el camino de tierra y medio hundidas en el barro. Nunca llegaron a levantarse: el templo no existe. Objeto ancla: las columnas tumbadas.",
    camara: {
      a: "PLANO MACRO del barro y la hierba que crecen alrededor de un fuste caído.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL del camino: se ven las tres columnas tumbadas y el camino siguiendo más allá de ellas hacia unos cerros, sin ninguna obra al final.",
    },
    ini: "la hierba crece pegada al fuste caído y el barro lo tiene medio hundido.",
    fin: "desde lejos se ven las tres columnas atravesadas en el camino y, más allá, sólo campo y cerros: el templo no está en ninguna parte.",
  }, "templo terminado, frontones, capiteles, ruinas romanas, personas, obreros"),

  // b9 — «Vendría una gente fuerte y feroz». Entró en su cercado. (CITA)
  escp("b9a", [ref("mensajero_quebrada"), ref("familias_muiscas"), ref("plaza_fiesta_noche")], {
    comun: `Luz dura de mediodía. ${PREGONERO} dando el anuncio delante de toda la gente reunida: vendría una gente fuerte y feroz que los había de maltratar y afligir. Él habla; Goranchacha no está en cuadro. Objeto ancla: la boca del pregonero.`,
    camara: {
      a: "PLANO MEDIO del pregonero de frente, con la gente desenfocada detrás de él.",
      b: "la cámara se ha ELEVADO y ha retrocedido hasta un PICADO ALTO de la plaza: él es un punto en el centro y alrededor se ve toda la gente reunida escuchándolo en silencio.",
    },
    ini: "empieza a hablar con la boca abierta y el brazo a media altura.",
    fin: "desde arriba se ve la plaza entera llena y quieta, con él pequeño en el centro y todas las caras vueltas hacia él.",
  }, "aureola, resplandor, demonios, ejercitos dibujados, conquistadores, armaduras"),
  escp("b9b", [ref("goranchacha_senor"), ref("cercado_bacata")], {
    comun: `Luz de tarde. ${GORAN} entrando en su cercado. La despedida NO es apoteosis: entra y ya. Objeto ancla: el vano de la entrada.`,
    camara: {
      a: "PLANO MEDIO por detrás de él, muy cerca, mientras se dirige a la entrada.",
      b: "la cámara se ha QUEDADO FUERA y ha retrocedido: PLANO GENERAL frontal del cercado entero desde el camino, con el vano de la entrada vacío y oscuro en el centro.",
    },
    ini: "él camina hacia el vano y todavía se le ve la espalda entera.",
    fin: "desde fuera, el cercado está cerrado y quieto y el vano de la entrada es sólo un rectángulo oscuro: ya no se ve a nadie, y nunca más lo vieron.",
  }, "ascension, luz que se lo lleva, nubes, rayos, multitud llorando, aureola"),

  // b10 — El pregonero estalló. El sol siguió saliendo.
  escp("b10a", [ref("mensajero_quebrada"), ref("plaza_fiesta_noche"), ref("familias_muiscas")], {
    comun: `Luz plana de mediodía. ${PREGONERO} delante de todos. Lo único espectacular del relato le pasa a él: estalla y se vuelve humo hediondo. Es humo pardo y sucio, no fuego ni explosión luminosa. Objeto ancla: el sitio donde estaba de pie.`,
    camara: {
      a: "PLANO MEDIO de él de frente en el centro de la plaza, entero y en pie.",
      b: "la cámara ha RETROCEDIDO deprisa hasta un PLANO GENERAL de la plaza: donde él estaba hay ahora una columna de humo pardo y sucio elevándose, y la gente alrededor se ha echado atrás.",
    },
    ini: "está de pie y entero, acabando de hablar.",
    fin: "en su sitio ya no hay nadie: sube una columna de humo pardo y sucio, y el corro de gente se ha abierto hacia atrás alrededor del hueco que dejó.",
  }, "explosion de fuego, llamas, fuegos artificiales, sangre, restos, demonios"),
  esc("b10b", [ref("altiplano_noche"), ref("columnas_camino"), ref("sabana_cultivos")], {
    comun: "Amanecer limpio. El sol saliendo igual para todos, sobre las columnas que siguen tumbadas y sobre los campos que siguen sembrados. NO responde nada: el encuadre no señala a nadie ni resuelve de quién era hijo. Objeto ancla: el sol saliendo por el filo del cerro.",
    camara: {
      a: "PLANO MEDIO sobre una columna tumbada en el camino, con el cielo aclarando detrás de ella.",
      b: "la cámara ha SUBIDO por encima de todo hasta un GRAN PLANO GENERAL final: el altiplano entero al amanecer, las columnas como tres rayas mínimas en un camino, el caserío, los surcos, y el sol saliendo por el filo sin detenerse en nada.",
    },
    ini: "el cielo empieza a aclarar detrás de la piedra caída.",
    fin: "desde muy arriba el sol ha salido entero y la luz cae igual sobre las columnas abandonadas, sobre los sembrados y sobre las casas, sin distinguir nada ni a nadie.",
  }, "aureola, cara en el sol, rayos dibujados, figura que asciende, texto, simbolos"),
]);
