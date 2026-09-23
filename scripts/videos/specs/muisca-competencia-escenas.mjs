// Keyframes de La carrera de Sesquilé — 12 bloques × 2 escenas × 2 cuadros
// = 48 imágenes ≈ 120 s.
// Guion: guion-la-competencia-v2.json (N=12) · Acta: acta-la-competencia.json
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · La carrera NO DECIDE EL MATRIMONIO: la familia ya recibió los regalos y
//   los dos ya hablaron de formar una casa. No hay nada en juego salvo lo que
//   él se juega solo. Prohibido todo lo que lea premio-esposa: trofeos,
//   pedidas de mano en la meta, ella como recompensa.
// · Él NO GANA. Llega después del ganador, cubierto de polvo, entre los que
//   completaron la ruta, y el premio cabe en una mano. La imagen no lo
//   convierte en vencedor moral con planos de gloria.
// · La carrera NO es épica deportiva: dos corredores se paran a levantar a
//   uno que resbala y pierden posiciones, y nadie puede beber sin frenar. Eso
//   está en la fuente y es lo que la hace distinta.
// · Tiniacá RESPONDE PRIMERO al sacerdote. Ese detalle es de la fuente.
// · El cierre NO es una lección: es una figurilla colgada junto a una puerta
//   por la que se pasa la mano al entrar y salir.
//
// DESLINDE CONTRA `chaquon`: allí correr la tierra es un rito de linderos y
// no hay protagonista. Aquí hay uno solo y lo que se mide es su cuerpo.
//
// GUION DE LUZ: azul de antes del alba → luz de la tela ajustada → sol bajo
// de la salida → polvo del camino → sofoco de media carrera → subida con
// barro → agua en las vasijas → camino vacío → gritos del cercado → polvo de
// la llegada → tarde de la pregunta → puerta de la casa nueva.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-competencia-escenas";
export const OUT_DIR = "muiscas/videos/la-competencia/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; trofeos, podios, medallas, cintas de meta, numeros de dorsal, cronometros; publico en gradas, vallas, megafonos, estadio; la mujer como premio, pedida de mano en la meta, beso de victoria; pose de victoria con brazos en alto, camara lenta epica, aureola; sangre, lesiones explicitas, huesos, agonia";
export const PALETTE =
  "ocre de polvo de camino, verde apagado de sementera, crema de algodon crudo, pardo de barro de subida, gris de vasija; el rojo y el blanco solo en la pintura facial de algunos corredores; sin saturacion ni neones";

const SESQUILE =
  "EL MISMO Sesquilé de la referencia (hombre joven de unos veintidós años, delgado y de piernas fuertes, rostro serio, pelo negro liso recogido con una cinta angosta, manta corta de algodón crudo ceñida a la cintura, torso desnudo y descalzo)";
const TINIACA =
  "LA MISMA Tiniacá de la referencia (mujer joven de unos veinte años, rostro despierto y firme, pelo negro liso en trenza, manta de algodón crudo del pecho a la pantorrilla anudada al hombro con una cenefa tejida sobria, descalza)";

export const ITEMS = armar([
  // b1 — Despertó antes que los caracoles. El recorrido.
  escp("b1a", [ref("sesquile_corredor"), ref("casa_barro_paja")], {
    comun: `Azul de antes del amanecer dentro del bohío. ${SESQUILE} despierto antes que los caracoles; ha esperado la carrera durante meses. Objeto ancla: sus ojos abiertos en la penumbra.`,
    camara: {
      a: "PLANO MACRO de sus ojos abiertos en la penumbra, mirando el techo de paja.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del interior con todos los demás todavía dormidos en sus esteras y él ya sentado en el borde de la suya.",
    },
    ini: "los ojos están abiertos y fijos en el techo, sin moverse.",
    fin: "desde el otro extremo del cuarto se ve que es el único despierto: los demás siguen tumbados y él ya está sentado, calzándose la cinta.",
  }, "despertador, relojes, publico, dramatismo"),
  esc("b1b", [ref("camino_carrera"), ref("sabana_cultivos"), ref("cercado_bacata")], {
    comun: "Primera luz. El recorrido: cruza caminos de polvo, bordea tierras húmedas y regresa al cercado. Nadie sabe cuántos lo completarán. Objeto ancla: el trazado del camino.",
    camara: {
      a: "PLANO MACRO de la tierra polvorienta del camino, con las huellas viejas marcadas.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del territorio con el camino entero visible, saliendo del cercado, bordeando los humedales y volviendo.",
    },
    ini: "el polvo del camino llena el cuadro y no se ve adónde va.",
    fin: "desde muy arriba se ve el recorrido completo: sale del cercado, cruza el polvo, bordea las tierras húmedas y vuelve al mismo sitio.",
  }, "mapas dibujados, lineas de meta, numeros, texto, publico"),

  // b2 — Tiniacá: no corras para demostrarme nada.
  escp("b2a", [ref("tiniaca_joven"), ref("sesquile_corredor"), ref("patio_cuca")], {
    comun: `Luz de primera hora en el patio. ${TINIACA} encontrando a ${SESQUILE} ajustando una tela a la cintura. Objeto ancla: el nudo de la tela.`,
    camara: {
      a: "PLANO MACRO de sus manos apretando el nudo de la tela en la cintura.",
      b: "la cámara ha RETROCEDIDO y ha subido a la altura de los ojos: PLANO MEDIO de los dos frente a frente, ella hablándole y él con las manos todavía en el nudo.",
    },
    ini: "las manos aprietan el nudo, muy de cerca.",
    fin: "ella está delante de él diciéndole algo y él ha levantado la cara, con las manos quietas en la cintura.",
  }, "beso, abrazo, despedida romantica, llanto, aureola"),
  escp("b2b", [ref("tiniaca_joven"), ref("manta_reparto"), ref("familias_muiscas")], {
    comun: "Luz de mañana. La carrera NO decide nada: la familia de ella ya recibió los regalos y los dos ya han hablado de formar una casa. Se dice con los regalos, que ya están puestos. Objeto ancla: los regalos recibidos.",
    camara: {
      a: "PLANO MACRO de unas mantas dobladas y unos cuencos apilados en el suelo de una casa, con polvo de días encima.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del interior con la familia de ella a lo suyo alrededor de esos regalos, que llevan ahí semanas.",
    },
    ini: "las mantas dobladas y los cuencos tienen ya polvo encima: no acaban de llegar.",
    fin: "desde lejos se ve que la casa hace vida normal alrededor de ellos: el trato está cerrado desde hace tiempo y hoy no se decide nada.",
  }, "ceremonia de pedida, sacerdote, trofeo, la mujer como premio"),

  // b3 — Quería llegar entre los primeros. Corría por miedo.
  escp("b3a", [ref("sesquile_corredor"), ref("tiniaca_joven")], {
    comun: `Luz de primera hora. Él dice que corre porque tiene miedo de no saber hasta dónde alcanza; ella le responde que escuche el cuerpo cuando le conteste. Objeto ancla: su cara.`,
    camara: {
      a: "PRIMER PLANO de la cara de él hablando, con ella fuera de cuadro.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia ella: PRIMER PLANO de la cara de Tiniacá contestándole, tranquila, con el hombro de él en el borde.",
    },
    ini: "él lo dice de cerca, con la mandíbula apretada.",
    fin: "ella le contesta desde igual de cerca, sin dramatismo y sin darle ánimos: sólo le dice dónde mirar.",
  }, "llanto, abrazo, beso, aureola, discurso motivacional"),
  escp("b3b", [ref("sesquile_corredor"), ref("camino_carrera")], {
    comun: `Luz que sube. Aun así quiere llegar entre los primeros: eso es lo único que está en juego y se lo juega solo. Objeto ancla: el camino vacío delante de él.`,
    camara: {
      a: "PLANO MEDIO por detrás de él parado en el borde del camino, mirando hacia el recorrido.",
      b: "la cámara ha AVANZADO por encima de su hombro y ha seguido camino adelante: PLANO GENERAL del recorrido abriéndose, largo y vacío, con él ya fuera de cuadro.",
    },
    ini: "está parado de espaldas mirando el camino que va a correr.",
    fin: "el cuadro se ha ido al camino mismo: largo, polvoriento y completamente vacío hasta el fondo.",
  }, "publico, vallas, cintas, numeros, dramatismo, aureola"),

  // b4 — Se reunieron jóvenes de varias poblaciones. Sonaron los pitos.
  escp("b4a", [ref("sesquile_corredor"), ref("corredor_plumas"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: "Sol bajo de la salida. Jóvenes de varias poblaciones reunidos: unos se han pintado el rostro, otros están en silencio. Objeto ancla: las caras distintas en la línea de salida.",
    camara: {
      a: "PLANO MEDIO CORTO de una cara con dos rayas de pintura roja, quieta y concentrada.",
      b: "la cámara ha hecho un TRAVELLING LATERAL a lo largo de la fila y ha retrocedido: PLANO GENERAL con veinte corredores esperando, unos pintados y otros no, todos distintos.",
    },
    ini: "una sola cara pintada llena el cuadro, callada.",
    fin: "recorrida la fila se ve a los veinte: los pintados, los callados, los que se atan la tela y los que miran el suelo.",
  }, "dorsales, numeros, banderas, publico en gradas, megafonos"),
  escp("b4b", [ref("sesquile_corredor"), ref("corredor_plumas"), ref("camino_carrera")], {
    comun: "Sonaron los pitos y los caracoles y el grupo se lanzó al camino. Objeto ancla: el polvo que levantan.",
    camara: {
      a: "PLANO MACRO de unos pies descalzos clavados en la tierra, todavía quietos.",
      b: "la cámara ha SUBIDO y ha retrocedido deprisa: PLANO GENERAL con el grupo entero lanzado por el camino y una nube de polvo detrás de ellos.",
    },
    ini: "los pies están clavados en la tierra, sin moverse.",
    fin: "el grupo ya va lanzado camino adelante, apretado, con una nube de polvo levantándose por detrás.",
  }, "pistola de salida, cronometro, cinta, dorsales, publico"),

  // b5 — Salió demasiado rápido. Recordó su voz y redujo el paso.
  escp("b5a", [ref("sesquile_corredor"), ref("corredor_plumas"), ref("camino_carrera")], {
    comun: `${SESQUILE} saliendo demasiado rápido y adelantando a varios. Objeto ancla: los que va dejando atrás.`,
    camara: {
      a: "PLANO MEDIO lateral acompañándolo a su altura mientras adelanta a dos corredores.",
      b: "la cámara se ha QUEDADO ATRÁS con los adelantados: PLANO GENERAL desde detrás del grupo, con él ya destacado y solo por delante.",
    },
    ini: "adelanta a dos corredores y sigue apretando.",
    fin: "desde el grupo que dejó atrás se le ve destacado y solo camino adelante, corriendo más fuerte de lo que debería.",
  }, "camara lenta epica, aureola, publico animando, numeros"),
  escp("b5b", [ref("sesquile_corredor"), ref("camino_carrera"), ref("tiniaca_joven")], {
    comun: `El aire ya no entra con facilidad. Recuerda la voz de Tiniacá y REDUCE el paso. Bajar el ritmo es lo que hace, y no es una derrota. Objeto ancla: su pecho y su boca.`,
    camara: {
      a: "PLANO MACRO de su pecho subiendo y bajando deprisa, con el polvo pegado al sudor.",
      b: "la cámara ha SUBIDO a su cara y ha retrocedido: PLANO MEDIO lateral con él corriendo más despacio, la boca abierta y la mandíbula suelta.",
    },
    ini: "el pecho sube y baja demasiado rápido, muy de cerca.",
    fin: "ha bajado el ritmo y corre con la zancada más corta, la boca abierta y la cara sin apretar: está escuchando el cuerpo.",
  }, "agonia, sangre, colapso dramatico, vomito, aureola"),

  // b6 — Dos se detienen a levantar a uno. Nadie bebe sin frenar.
  escp("b6a", [ref("corredor_plumas"), ref("sendero_territorio")], {
    comun: "Subida con barro. Un muchacho resbala y DOS competidores se detienen a levantarlo, aunque pierden posiciones. Esto es lo que hace distinta a esta carrera. Objeto ancla: las manos que lo levantan.",
    camara: {
      a: "PLANO MACRO de una mano hundida en el barro de la cuesta, resbalando.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO con los dos corredores parados, cada uno tirando de un brazo, y otros pasando de largo por el lado.",
    },
    ini: "la mano resbala en el barro y no encuentra agarre.",
    fin: "los dos lo han puesto de pie entre los dos, parados en mitad de la cuesta, mientras por su lado siguen pasando otros sin detenerse.",
  }, "heroismo epico, camara lenta, sangre, huesos, aureola"),
  escp("b6b", [ref("sesquile_corredor"), ref("familias_muiscas"), ref("vasija_gacha")], {
    comun: `Una mujer ofrece agua en vasijas pequeñas: NADIE puede beber sin frenar. ${SESQUILE} acepta una. Objeto ancla: la vasija pequeña.`,
    camara: {
      a: "PLANO MACRO de la vasija pequeña tendida en una mano, llena de agua quieta.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO con él parado del todo junto al camino, bebiendo, y dos corredores pasándole de largo por detrás.",
    },
    ini: "la vasija espera llena en una mano tendida al borde del camino.",
    fin: "él se ha parado del todo para beber, con los pies quietos en la tierra, mientras por detrás le pasan dos que no frenaron.",
  }, "avituallamientos modernos, botellas, vasos de papel, publico"),

  // b7 — Unos desaparecieron, otros regresaron. Él no iba primero.
  esc("b7a", [ref("camino_carrera"), ref("sabana_cultivos")], {
    comun: "Luz alta. Algunos corredores desaparecen en la distancia y otros regresan: sólo quedan respiraciones, pasos y el viento golpeando los cultivos. Objeto ancla: el camino casi vacío.",
    camara: {
      a: "PLANO MEDIO del camino con dos corredores yendo en direcciones opuestas, uno adelante y otro de vuelta.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL del territorio con el camino larguísimo y apenas cinco figuras dispersas en varios kilómetros.",
    },
    ini: "por el camino, uno sigue adelante y otro vuelve andando.",
    fin: "desde arriba se ve el recorrido entero con cinco figuras minúsculas repartidas a lo largo de él y el viento moviendo los cultivos.",
  }, "publico, vallas, dramatismo, cadaveres, rescates"),
  escp("b7b", [ref("sesquile_corredor"), ref("cercado_bacata"), ref("camino_carrera")], {
    comun: `Cuando el cercado vuelve a aparecer, ${SESQUILE} NO va primero. Objeto ancla: el cercado al fondo.`,
    camara: {
      a: "PLANO MEDIO lateral de él corriendo, con la cara cansada y el polvo encima.",
      b: "la cámara ha SUBIDO y se ha adelantado: PLANO GENERAL en picado del tramo final con el cercado al fondo, dos corredores por delante de él y él en tercer lugar.",
    },
    ini: "corre de perfil, cubierto de polvo, sin saber qué hay delante.",
    fin: "desde arriba se ve el tramo final entero: el cercado al fondo, dos corredores por delante y él tercero, a buena distancia.",
  }, "aureola, camara lenta epica, remontada, publico gritando"),

  // b8 — El ganador recibió la diadema. Él llegó después.
  escp("b8a", [ref("corredor_plumas"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: "Luz alta. El ganador ya cruzó y recibe una diadema mientras la gente grita su nombre. La escena es suya y se ve entera: no se le escatima. Objeto ancla: la diadema.",
    camara: {
      a: "PLANO MACRO de la diadema tejida pasando de unas manos a la cabeza del ganador.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del cercado con el corro gritando alrededor del ganador y el camino todavía vacío detrás.",
    },
    ini: "la diadema pasa de unas manos a otras, muy de cerca.",
    fin: "desde lejos se ve la fiesta entera alrededor del ganador, y por el camino de atrás todavía no ha llegado nadie más.",
  }, "podio, medallas, trofeo, banderas, himnos"),
  escp("b8b", [ref("sesquile_corredor"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: `${SESQUILE} llegando después, cubierto de polvo, entre quienes lograron completar la ruta. NO hay plano de gloria. Objeto ancla: el polvo pegado a su cuerpo.`,
    camara: {
      a: "PLANO MACRO del polvo y el sudor secos en su antebrazo y su hombro.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL con él entrando al cercado entre otros cuatro igual de cansados, y la fiesta del ganador ya a otra cosa al fondo.",
    },
    ini: "el polvo está seco y agrietado sobre la piel del brazo.",
    fin: "desde lejos entra al cercado en un grupo de cinco, todos cubiertos de polvo, mientras la celebración del ganador ya se ha movido a otro lado.",
  }, "pose de victoria, brazos en alto, aureola, publico gritando su nombre"),

  // b9 — Una figura de Chibchacum. «¿Hasta dónde alcanzabas?»
  escp("b9a", [ref("sesquile_corredor"), ref("figurilla_chibchacum")], {
    comun: `Luz de tarde. Le entregan UNA MISMA figurilla de barro cocido de la referencia, protector de quienes trabajan la tierra: el premio CABE EN UNA MANO. Objeto ancla: la figurilla.`,
    camara: {
      a: "PLANO MEDIO de alguien poniéndosela en la palma abierta.",
      b: "la cámara ha AVANZADO hasta la palma y se ha puesto cenital: PLANO MACRO de la figurilla de barro ocre entera dentro de su mano cerrada, del tamaño de media palma.",
    },
    ini: "la figurilla pasa a su palma abierta.",
    fin: "en su mano, muy de cerca, la figurilla de barro cabe entera y le sobra sitio: es pequeña, mate y sin ningún brillo.",
  }, "trofeo, copa, medalla, oro, podio, aureola"),
  escp("b9b", [ref("tiniaca_joven"), ref("sesquile_corredor"), ref("cercado_bacata")], {
    comun: `${TINIACA} esperándolo y preguntándole hasta dónde alcanzaba. Es la misma pregunta con la que él salió a correr. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO GENERAL del cercado con ella esperando a un lado y él llegando desde el otro.",
      b: "la cámara ha AVANZADO hasta ponerse entre los dos: PLANO MEDIO CORTO con ella preguntando y él escuchando, cada uno en una mitad del cuadro.",
    },
    ini: "ella espera a un lado del patio y él viene desde el camino.",
    fin: "están ya frente a frente, de cerca, y ella le hace la pregunta sin haberlo abrazado todavía.",
  }, "beso de victoria, abrazo epico, llanto, pedida de mano, publico"),

  // b10 — «Hasta aquí, si aprendía a no correr como otra persona». (CITA)
  escp("b10a", [ref("sesquile_corredor"), ref("camino_carrera")], {
    comun: `Luz de tarde. Él mirando el camino recorrido antes de contestar. Objeto ancla: el camino a su espalda.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara girándose hacia atrás.",
      b: "la cámara ha girado y RETROCEDIDO en la dirección de su mirada: GRAN PLANO GENERAL del recorrido entero visto desde el cercado, con el polvo todavía en el aire.",
    },
    ini: "gira la cara hacia atrás, hacia donde vino.",
    fin: "el cuadro se ha ido al camino: kilómetros de polvo y sementera, con el aire todavía turbio por donde pasaron.",
  }, "flashbacks dibujados, texto, aureola, publico"),
  escp("b10b", [ref("sesquile_corredor"), ref("tiniaca_joven")], {
    comun: `${SESQUILE} contestando por fin: hasta aquí, si aprendía a no correr como otra persona. Objeto ancla: su cara.`,
    camara: {
      a: "PRIMER PLANO de su cara contestando, con el polvo todavía encima.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO LARGO de los dos de pie en el patio, hablando, con la fiesta desenfocada al fondo.",
    },
    ini: "contesta de cerca, sin levantar la voz y sin sonreír.",
    fin: "desde más lejos se ve a los dos de pie hablando en un rincón del patio, con la fiesta siguiendo al fondo sin ocuparse de ellos.",
  }, "beso, abrazo epico, aureola, aplausos, moraleja dibujada"),

  // b11 — El sacerdote preguntó y ella respondió primero.
  escp("b11a", [ref("sesquile_corredor"), ref("tiniaca_joven"), ref("familias_muiscas"), ref("santuario_moja")], {
    comun: `Luz de tarde. Un sacerdote pregunta si ambos aceptan las obligaciones de la vida común, y TINIACÁ RESPONDE PRIMERO. Ese detalle es de la fuente y tiene que verse. Objeto ancla: quién abre la boca antes.`,
    camara: {
      a: "PLANO MEDIO de los tres, el sacerdote en el centro preguntando y los dos jóvenes a los lados, callados.",
      b: "la cámara ha hecho un PANEO LATERAL rápido hacia ella y se ha acercado: PLANO MEDIO CORTO de Tiniacá contestando, con Sesquilé todavía con la boca cerrada en el borde del cuadro.",
    },
    ini: "el sacerdote acaba de preguntar y los dos siguen callados.",
    fin: "ella ha contestado primero, con la boca a media frase, y él está a su lado sin haber abierto la suya todavía.",
  }, "boda europea, cruces, altar, anillos, velo, aureola"),
  escp("b11b", [ref("corredor_plumas"), ref("familias_muiscas"), ref("plaza_fiesta_noche")], {
    comun: "Noche de fiesta. La fiesta dura varios días, y quienes corrieron cuentan la ruta de maneras distintas. Cada versión es distinta y ninguna se corrige. Objeto ancla: los que cuentan.",
    camara: {
      a: "PLANO MEDIO CORTO de un corredor contando, con las manos dibujando una curva del camino en el aire.",
      b: "la cámara ha hecho un GIRO alrededor del fogón: PLANO GENERAL con tres corrillos distintos y en cada uno alguien contando la misma ruta con las manos de otra manera.",
    },
    ini: "uno dibuja en el aire la curva del camino tal como la recuerda.",
    fin: "dando la vuelta al fogón se ve que hay tres contando a la vez y que ninguno dibuja la misma ruta que el otro.",
  }, "borrachera degradante, peleas, violencia, vomito"),

  // b12 — Colgó la figura junto a la puerta. Alcanzaba más lejos.
  escp("b12a", [ref("sesquile_corredor"), ref("figurilla_chibchacum"), ref("casa_barro_paja")], {
    comun: `Luz de mañana. Cuelga la figurilla junto a la puerta de la casa nueva, y al entrar y salir le pasa la mano por encima. Objeto ancla: la figurilla junto al vano.`,
    camara: {
      a: "PLANO MACRO de la figurilla colgando de un cordón junto al marco de la puerta.",
      b: "la cámara ha RETROCEDIDO y ha salido al patio: PLANO GENERAL de la casa nueva con la puerta abierta, la figurilla pequeña en el marco y los dos entrando y saliendo.",
    },
    ini: "la figurilla cuelga del cordón, quieta, a la altura de la mano.",
    fin: "desde el patio se ve la casa entera con su puerta, y en el marco la figurilla, tan pequeña que hay que saber que está.",
  }, "altar, ofrendas, velas, adoracion, aureola, trofeo en vitrina"),
  escp("b12b", [ref("sesquile_corredor"), ref("camino_carrera"), ref("figurilla_chibchacum")], {
    comun: "Luz de mañana. El sendero sigue en sus piernas y el agua de la vasija en la lengua: sabe hasta dónde alcanza, y es más lejos que la meta. El cierre va seco, sin frase dicha. Objeto ancla: su mano pasando por la figurilla.",
    camara: {
      a: "PLANO MACRO de su mano rozando la figurilla al salir por la puerta, sin pararse.",
      b: "la cámara lo ha SEGUIDO fuera y se ha elevado: GRAN PLANO GENERAL final del valle con él caminando por el mismo camino de la carrera, esta vez despacio y hacia el trabajo.",
    },
    ini: "la mano roza la figurilla al pasar, sin detenerse.",
    fin: "desde arriba se le ve andando por el mismo camino que corrió, esta vez sin prisa, con la azada al hombro y el recorrido entero delante.",
  }, "aureola, moraleja dibujada, texto, flashback, trofeo, publico"),
]);
