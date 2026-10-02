// Keyframes de Meicuchuca — 12 bloques × 2 escenas × 2 cuadros = 48 imágenes ≈ 120 s.
// Guion: guion-meicuchuca-v2.json (N=12) · Acta: acta-meicuchuca.json (24 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · La joven NO ENGAÑA. Su respuesta es la tesis: él nunca preguntó quién
//   era, sólo decidió quién quería que fuera. La culpa está en la falta de
//   pregunta, no en la ocultación. La imagen no la trata como impostora.
// · La esposa principal NO actúa por venganza ciega: consultó, ayunó,
//   verificó con sus ojos y sólo después convidó. Es un PROCEDIMIENTO y el
//   guion no puede volverlo un arrebato de celos.
// · La transformación NO ES VIOLENTA NI MONSTRUOSA: la piel cambió SIN
//   VIOLENCIA, a la vista de todas. Nada de horror, forcejeo ni deformidad.
// · La joven NO es castigada ni expulsada: se va sola, por su propio pie,
//   DESPUÉS de responder. Y la esposa principal NO HUYE, que es lo que le
//   permite oír la respuesta.
// · Meicuchuca NO recupera nada y NO es perdonado: busca hasta que se le va
//   la luz, no la encuentra, y carga esa frase cada vez que decide algo.
//
// La culebra es una CULEBRA grande, sin alas, sin patas y sin cuernos, y
// duerme junto al hombro del cacique sin amenazarlo.
//
// GUION DE LUZ: mañana de la entrega → días y noches del capricho → penumbra
// del santuario → noche del aposento → mañana de la consulta → camino al río
// → arena del recodo → agua en el pie → cambio a la vista de todas → la
// respuesta → juncos al atardecer → el río siguiendo su curso.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-meicuchuca-escenas";
export const OUT_DIR = "muiscas/videos/meicuchuca/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; monstruo, horror, deformidad, colmillos, lengua bifida amenazante, ojos rojos; transformacion con dolor, huesos que crujen, piel desgarrada, sangre; culebra con alas, patas, garras o cuernos; escenas de alcoba, desnudez, sexualizacion, cuerpos insinuantes; celos caricaturizados, gritos, arañazos, pelea entre mujeres; brujas, calderos, conjuros, pentagramas, magia visible";
export const PALETTE =
  "crema de algodon crudo, ocre y verde de las cenefas, pardo de barro, verde profundo de escama y de rio, gris de arena de playa, azul de noche de aposento; sin saturacion ni neones";

const MEI =
  "EL MISMO Meicuchuca de la referencia (hombre de unos cuarenta años, de porte cómodo y algo indolente, rostro amable, pelo negro recogido bajo una cinta tejida, manta de algodón crudo de tejido fino anudada al hombro con cenefa geométrica en ocre)";
const JOVEN =
  "LA MISMA joven doncella de la referencia (mujer de unos veinte años, rostro sereno y difícil de leer, pelo negro liso muy largo, manta de algodón crudo lisa y sin cenefas envuelta del pecho a la pantorrilla, descalza)";
const ESPOSA =
  "LA MISMA esposa principal de la referencia (mujer de unos treinta y cinco años, rostro firme y contenido, pelo negro liso recogido en un moño bajo, manta de algodón crudo del pecho a la pantorrilla anudada al hombro con dos cenefas)";
const CULEBRA =
  "UNA CULEBRA grande de papel, de cuerpo grueso y escamas recortadas una a una en verde profundo con el vientre más claro, cabeza roma y ojos pequeños y oscuros; SIN alas, SIN patas y SIN cuernos";

export const ITEMS = armar([
  // b1 — Una anciana trajo a una joven doncella. Habló poco y se fue.
  escp("b1a", [ref("joven_serpiente"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: `Luz de mañana en el cercado. Una anciana llega trayendo a ${JOVEN}, que el señor de Bogotá había mandado pedir. Objeto ancla: las dos figuras en el vano.`,
    camara: {
      a: "PLANO GENERAL del patio visto desde dentro, con dos figuras recortadas en el vano de la empalizada.",
      b: "la cámara ha AVANZADO hasta ellas: PLANO MEDIO de la anciana y la joven paradas en el patio, sin bultos y sin séquito.",
    },
    ini: "en el vano hay dos siluetas a contraluz que acaban de entrar.",
    fin: "de cerca son una anciana y una joven de pie en el patio, sin equipaje y sin nadie más con ellas.",
  }, "venta de personas, cadenas, llanto, violencia, sexualizacion"),
  escp("b1b", [ref("joven_serpiente"), ref("familias_muiscas"), ref("camino_carrera")], {
    comun: `La anciana habla poco, la entrega y se va por donde había venido. Lo que NO se dice es el tema del mito. Objeto ancla: la espalda de la anciana yéndose.`,
    camara: {
      a: "PLANO MEDIO CORTO de la boca de la anciana diciendo tres o cuatro palabras y cerrándose.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia el camino: PLANO GENERAL con la anciana ya fuera del cercado, de espaldas, alejándose, y la joven quieta en el patio detrás.",
    },
    ini: "la anciana dice muy pocas palabras y cierra la boca.",
    fin: "ya va por el camino de espaldas, alejándose sin volverse, y la joven se ha quedado sola en mitad del patio.",
  }, "despedida emotiva, llanto, abrazos, dramatismo, aureola"),

  // b2 — Se aficionó a ella. La esposa se quedó sin caricias.
  escp("b2a", [ref("meicuchuca_cacique"), ref("joven_serpiente"), ref("cercado_bacata")], {
    comun: `Días y noches. ${MEI} se aficiona a ella como a nadie: de noche y de día su entretenimiento es la recién llegada. Se cuenta con dónde está él siempre, no con una escena de alcoba. Objeto ancla: la distancia entre ellos, siempre corta.`,
    camara: {
      a: "PLANO MEDIO de los dos sentados juntos en una estera del patio, él hablando y ella escuchando.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del cercado entero en el que, en tres rincones distintos del patio, se ve a la misma pareja junta en tres momentos del día.",
    },
    ini: "los dos están sentados juntos y él habla sin parar.",
    fin: "desde arriba se ve el patio con los dos juntos en tres sitios a la vez, como tres momentos del mismo día: no se separan nunca.",
  }, "escena de alcoba, cama, desnudez, beso, sexualizacion"),
  escp("b2b", [ref("esposa_principal"), ref("meicuchuca_cacique"), ref("cercado_bacata")], {
    comun: `${ESPOSA}, que antes tenía el trato primero del cacique, se queda sin caricias y sin palabras, y rabia de celos sin poder remediarlo. Es dolor contenido, NO un arrebato. Objeto ancla: su sitio vacío al lado de él.`,
    camara: {
      a: "PLANO MEDIO de ella sola en un rincón del patio, con las manos quietas en el regazo.",
      b: "la cámara ha hecho un PANEO LATERAL por el patio hasta él: PLANO MEDIO LARGO con el cacique al otro extremo, junto a la joven, y el sitio de la estera al lado de él vacío.",
    },
    ini: "ella está sola en un rincón, con las manos quietas.",
    fin: "al otro lado del patio él está con la joven, y en su estera el sitio de al lado —el que era de ella— está vacío.",
  }, "gritos, arañazos, pelea entre mujeres, celos caricaturizados, llanto teatral"),

  // b3 — No fue a gritar: consultó a un jeque y ayunó.
  escp("b3a", [ref("esposa_principal"), ref("choza_jeque"), ref("santuario_moja")], {
    comun: `Penumbra del santuario. NO fue a gritar delante de la casa: consultó con un jeque, ayunó e hizo ofrendas. Es un procedimiento, no un arrebato. Objeto ancla: las ofrendas que deja.`,
    camara: {
      a: "PLANO MACRO de sus manos colocando una vasija pequeña de ofrenda en el suelo de esteras.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO LARGO del recinto con ella sentada frente al jeque y una fila de ofrendas ya puestas a un lado.",
    },
    ini: "sus manos dejan una vasija pequeña entre las ofrendas.",
    fin: "desde más lejos está sentada frente al jeque, tranquila, con una fila de ofrendas ya colocadas: no vino a gritar, vino a preguntar.",
  }, "brujas, calderos, conjuros, pentagramas, magia visible, trance"),
  escp("b3b", [ref("esposa_principal"), ref("choza_jeque")], {
    comun: `El jeque le dice que NO acuse a nadie todavía, que la noche muestra formas que el día no sabe nombrar, y que llegue a la cama del cacique y MIRE. Objeto ancla: la cara del jeque.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara del jeque hablando, tranquilo.",
      b: "la cámara ha RODEADO hasta detrás de él: PLANO MEDIO de la cara de ella escuchando, con la nuca del jeque en primer término y los ojos fijos.",
    },
    ini: "el jeque le habla despacio, sin misterio y sin gestos.",
    fin: "al otro lado se le ve escuchar con los ojos fijos: lo que le han mandado es mirar, no acusar.",
  }, "trance, humo magico, visiones, aureola, calderos, conjuros"),

  // b4 — Entró al aposento. Dormía una culebra grande.
  escp("b4a", [ref("esposa_principal"), ref("casa_barro_paja"), ref("altiplano_noche")], {
    comun: `Noche. Ella esperando a que el cercado quede en silencio y entrando al aposento. Objeto ancla: la puerta de esterilla.`,
    camara: {
      a: "PLANO MEDIO de ella esperando en el patio a oscuras, quieta contra una pared.",
      b: "la cámara ha AVANZADO con ella hasta la puerta y ha entrado: PLANO MEDIO desde dentro del aposento, con el vano abriéndose a su espalda y la penumbra delante.",
    },
    ini: "espera pegada a la pared del patio, sin moverse.",
    fin: "ha abierto la esterilla y está dentro, con el vano a su espalda y el cuarto en penumbra delante de ella.",
  }, "cuchillo, arma, violencia, asesinato, gritos"),
  esc("b4b", [ref("meicuchuca_cacique"), ref("dragon_laguna"), ref("casa_barro_paja")], {
    comun: `Penumbra azul del aposento. Junto a ${MEI} NO hay ningún cuerpo de mujer: sobre las mantas duerme ${CULEBRA}, con la cabeza cerca del hombro del señor. Duerme: no amenaza. Objeto ancla: la cabeza junto al hombro.`,
    camara: {
      a: "PLANO MEDIO de las mantas del lecho desde la puerta, con dos bultos que todavía no se distinguen.",
      b: "la cámara ha AVANZADO hasta el lecho y se ha puesto cenital: PLANO DETALLE de la cabeza roma de la culebra apoyada y quieta junto al hombro dormido del cacique.",
    },
    ini: "desde la puerta hay dos bultos bajo las mantas que no se distinguen.",
    fin: "de cerca y desde arriba, la cabeza de la culebra descansa junto al hombro de él, con los ojos cerrados: los dos duermen.",
  }, "monstruo, ataque, colmillos, ojos rojos, sangre, horror, forcejeo"),

  // b5 — Salió sin ruido. «Convídala al río».
  escp("b5a", [ref("esposa_principal"), ref("casa_barro_paja")], {
    comun: `Ella saliendo SIN RUIDO. No grita, no despierta a nadie, no acusa. Objeto ancla: sus pies retrocediendo.`,
    camara: {
      a: "PLANO MACRO de sus pies descalzos retrocediendo sobre el suelo de tierra, sin levantar polvo.",
      b: "la cámara ha RETROCEDIDO con ella y ha salido al patio: PLANO GENERAL nocturno del cercado con ella cerrando la esterilla despacio y todo lo demás dormido.",
    },
    ini: "los pies retroceden despacio sobre la tierra, sin ruido.",
    fin: "desde el patio se la ve cerrar la esterilla con cuidado y quedarse quieta: nadie se ha despertado y no ha dicho una palabra.",
  }, "gritos, alarma, antorchas, guardias, violencia"),
  escp("b5b", [ref("esposa_principal"), ref("choza_jeque"), ref("recodo_funza")], {
    comun: `Ella contando al jeque lo que vio, y él diciéndole que convide a la joven a bañarse en el río Funza, por debajo del salto del Tequendama. Objeto ancla: la dirección del río.`,
    camara: {
      a: "PLANO MEDIO de los dos hablando en la choza, ella contando y él escuchando.",
      b: "la cámara ha girado y AVANZADO fuera, en la dirección que él señala: GRAN PLANO GENERAL del recodo ancho del río, con la playa de arena gris y la niebla del salto muy lejos al fondo.",
    },
    ini: "ella cuenta y él escucha sin interrumpirla.",
    fin: "el cuadro se ha ido adonde señalaba: un recodo ancho de agua clara con una playa de arena gris y, allá al fondo, la niebla que levanta el salto.",
  }, "conjuro, magia, trance, humo, aureola, trampa dibujada"),

  // b6 — La invitación llegó. La joven aceptó sin preguntar.
  escp("b6a", [ref("esposa_principal"), ref("joven_serpiente"), ref("cercado_bacata")], {
    comun: `Luz de mañana. La invitación llega y ${JOVEN} ACEPTA SIN PREGUNTAR. Ella sabe, y eso se ve en que no pregunta. Objeto ancla: su cara al aceptar.`,
    camara: {
      a: "PLANO MEDIO de la esposa hablándole, con la invitación hecha.",
      b: "la cámara ha hecho un PANEO LATERAL hasta la joven y se ha acercado: PRIMER PLANO de su cara asintiendo, serena y sin una sola pregunta.",
    },
    ini: "la esposa termina de decirle lo del río.",
    fin: "de cerca, ella sólo asiente: no pregunta quién va, ni por qué, ni para qué. Ya lo sabe.",
  }, "sospecha dibujada, musica de suspense, miedo, forcejeo, trampa"),
  escp("b6b", [ref("esposa_principal"), ref("joven_serpiente"), ref("familias_muiscas"), ref("recodo_funza")], {
    comun: `Caminan hasta el recodo ancho. Las otras entran al agua; ella permanece en la arena, con la manta sobre los hombros, mirando la corriente. Objeto ancla: la línea entre la arena y el agua.`,
    camara: {
      a: "PLANO GENERAL del recodo con el grupo llegando por la playa de arena gris.",
      b: "la cámara ha AVANZADO hasta la orilla y se ha puesto a ras de la arena: PLANO MEDIO BAJO con las otras ya dentro del agua, de espaldas, y los pies de la joven quietos en la arena seca.",
    },
    ini: "el grupo llega por la playa hacia el agua.",
    fin: "a ras de suelo, las demás están ya dentro del agua de espaldas y los pies de ella siguen en la arena seca, sin entrar.",
  }, "desnudez, sexualizacion, cuerpos insinuantes, violencia, forcejeo"),

  // b7 — «Lo sé desde que abriste la puerta anoche».
  escp("b7a", [ref("esposa_principal"), ref("joven_serpiente"), ref("recodo_funza")], {
    comun: `${ESPOSA} preguntándole si sabe por qué están allí. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO MEDIO LARGO de las dos en la arena, separadas por tres pasos, con el río detrás.",
      b: "la cámara ha AVANZADO hasta ponerse entre las dos: PLANO MEDIO CORTO con una cara en cada mitad del cuadro, la esposa preguntando.",
    },
    ini: "están separadas por tres pasos en la arena y el río corre detrás.",
    fin: "de cerca, cada una ocupa una mitad del cuadro y la esposa acaba de hacer la pregunta, sin levantar la voz.",
  }, "amenaza, arma, forcejeo, gritos, violencia"),
  escp("b7b", [ref("joven_serpiente"), ref("esposa_principal")], {
    comun: `${JOVEN} respondiendo que lo sabe desde que ella abrió la puerta la noche anterior. No hay reproche: es una constatación. Objeto ancla: su cara.`,
    camara: {
      a: "PRIMER PLANO de la cara de la joven contestando, tranquila y difícil de leer.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia la esposa: PLANO MEDIO CORTO de la cara de ella recibiendo la respuesta, sin poder negar nada.",
    },
    ini: "contesta de cerca, con la cara serena.",
    fin: "enfrente, la esposa ha oído que la vieron: la cara se le ha quedado quieta y no lo niega.",
  }, "burla, amenaza, llanto, gritos, violencia, aureola"),

  // b8 — Se desprendió la manta y tocó el agua. La piel cambió.
  escp("b8a", [ref("joven_serpiente"), ref("recodo_funza")], {
    comun: `Ella desprendiéndose la manta y tocando el agua con un pie. Todo a la vista de todas y sin violencia. Se cuenta por el pie y la manta, NO por el cuerpo. Objeto ancla: el pie y el agua.`,
    camara: {
      a: "PLANO MACRO de la manta de algodón crudo resbalándole del hombro y cayendo sobre la arena gris.",
      b: "la cámara ha BAJADO hasta la orilla: PLANO MACRO de un pie descalzo tocando la superficie del agua y abriendo el primer círculo.",
    },
    ini: "la manta resbala del hombro y cae plegada sobre la arena.",
    fin: "el pie ha tocado el agua y ha abierto un círculo que se abre hacia afuera; no hay nada más en el cuadro.",
  }, "desnudez, sexualizacion, cuerpo insinuante, horror, dolor"),
  esc("b8b", [ref("joven_serpiente"), ref("dragon_laguna"), ref("recodo_funza")], {
    comun: `La piel cambia SIN VIOLENCIA: las piernas se funden, la espalda se alarga, y donde había una mujer se levanta ${CULEBRA}, a la vista de todas. Es un cambio tranquilo: sin dolor, sin crujidos, sin desgarro. Objeto ancla: la transición del cuerpo.`,
    camara: {
      a: "PLANO MEDIO lateral a ras del agua con las piernas ya fundidas en un solo cuerpo verde y el torso todavía humano, sin ninguna deformidad.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del recodo con la culebra entera levantada en el agua, tranquila, y las mujeres alrededor en la corriente.",
    },
    ini: "las piernas son ya un solo cuerpo verde de escamas y el torso todavía es el suyo, sin nada roto.",
    fin: "desde más lejos, donde estaba la mujer se ha levantado la culebra entera, grande y quieta en el agua, a la vista de todas.",
  }, "horror, dolor, huesos, piel desgarrada, sangre, colmillos, ataque, gritos de terror"),

  // b9 — Algunas gritaron. La esposa principal no huyó.
  escp("b9a", [ref("familias_muiscas"), ref("esposa_principal"), ref("recodo_funza")], {
    comun: `Algunas gritan; ${ESPOSA} NO HUYE. Y no huir es lo que le permite oír la respuesta. Objeto ancla: quién se queda.`,
    camara: {
      a: "PLANO MEDIO de tres mujeres ya en la orilla, con mantas secas sobre los hombros, mirando hacia atrás.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL de la playa con las demás ya lejos en la arena y la esposa sola en el borde del agua, sin moverse.",
    },
    ini: "tres están ya en la orilla, con mantas secas encima, mirando hacia atrás.",
    fin: "desde lejos, todas están ya en lo alto de la playa y ella es la única que sigue en el borde del agua, quieta.",
  }, "panico, estampida, desmayos, violencia, ataque de la culebra"),
  escp("b9b", [ref("esposa_principal"), ref("dragon_laguna"), ref("recodo_funza")], {
    comun: `Ella preguntándole, AHÍ MISMO y delante de todas, si había engañado a Meicuchuca. Objeto ancla: la distancia corta entre las dos.`,
    camara: {
      a: "PLANO GENERAL con la culebra en el agua y ella pequeña en la orilla.",
      b: "la cámara ha AVANZADO hasta la orilla y se ha puesto a la altura de las dos: PLANO MEDIO con la cabeza de la culebra y la cara de ella a la misma altura y a dos pasos.",
    },
    ini: "desde lejos, la culebra está en el agua y ella en la orilla.",
    fin: "de cerca, la cabeza de la culebra y la cara de la mujer están a la misma altura y a dos pasos, y ella acaba de preguntar.",
  }, "ataque, colmillos, terror, huida, armas, violencia"),

  // b10 — «Solo decidió quién quería que fuera». (CITA)
  esc("b10a", [ref("dragon_laguna"), ref("recodo_funza")], {
    comun: `La respuesta: él nunca preguntó quién era, sólo decidió quién quería que fuera. Es la tesis del mito. Objeto ancla: la cabeza de la culebra.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cabeza roma de la culebra con los ojos pequeños y oscuros, tranquila.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL en picado del recodo con la culebra en el centro del agua, todas las mujeres en la playa y nadie moviéndose.",
    },
    ini: "la cabeza está quieta, con los ojos pequeños abiertos y sin amenaza.",
    fin: "desde arriba nadie se ha movido: la culebra en el agua, las mujeres en la arena y todo el recodo quieto mientras acaba de decirse eso.",
  }, "colmillos, lengua bifida, ojos rojos, ataque, horror, texto"),
  esc("b10b", [ref("dragon_laguna"), ref("recodo_funza")], {
    comun: "Se desliza entre las aguas y desaparece, sin que nadie vuelva a verla. Se va SOLA, por su propio pie, después de responder: no la echan. Objeto ancla: la estela que deja.",
    camara: {
      a: "PLANO MEDIO a ras del agua con el cuerpo deslizándose hacia el centro de la corriente, de espaldas.",
      b: "la cámara se ha ELEVADO hasta un PICADO ALTO del recodo: en el agua ya no hay nada, sólo la estela cerrándose y la corriente siguiendo su curso.",
    },
    ini: "el cuerpo se desliza hacia el centro del río, alejándose.",
    fin: "desde arriba no queda nada en el agua: la estela se ha cerrado y la corriente sigue bajando como si no hubiera pasado nada.",
  }, "persecucion, arpones, redes, violencia, muerte, personas gritando"),

  // b11 — Meicuchuca llegó tarde y buscó hasta que la luz se fue.
  escp("b11a", [ref("meicuchuca_cacique"), ref("recodo_funza"), ref("familias_muiscas")], {
    comun: `${MEI} llegando cuando ya no puede alcanzarla. Objeto ancla: la playa donde ya no hay nadie.`,
    camara: {
      a: "PLANO MEDIO de él llegando a la carrera por la playa, mirando el agua.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del recodo con él parado en la orilla, solo, y el agua vacía delante.",
    },
    ini: "llega corriendo por la arena y mira el agua.",
    fin: "desde lejos está parado en la orilla, solo, con toda la corriente delante y nada en ella.",
  }, "llanto teatral, gritos, aureola, castigo, violencia"),
  escp("b11b", [ref("meicuchuca_cacique"), ref("recodo_funza")], {
    comun: `Busca entre juncos y piedras hasta que la luz se le va, y NO la encuentra. Objeto ancla: sus manos entre los juncos.`,
    camara: {
      a: "PLANO MACRO de sus manos separando los juncos de la orilla, buscando.",
      b: "la cámara ha RETROCEDIDO y ha subido con la luz que se va: GRAN PLANO GENERAL del recodo casi a oscuras con él todavía agachado entre las piedras, minúsculo.",
    },
    ini: "las manos separan los juncos uno por uno, buscando.",
    fin: "casi de noche, desde muy lejos sigue agachado entre las piedras de la orilla, pequeñísimo, y el río sigue bajando.",
  }, "llanto, gritos, aureola, fantasma, aparicion, reencuentro"),

  // b12 — Confundió el silencio con una respuesta.
  escp("b12a", [ref("meicuchuca_cacique"), ref("cercado_bacata"), ref("familias_muiscas")], {
    comun: `Desde entonces, cada vez que debe decidir algo, recuerda la frase dicha junto al agua. Había confundido el silencio con una respuesta y el deseo con conocimiento. NO es perdonado. Objeto ancla: su cara antes de decidir.`,
    camara: {
      a: "PLANO MEDIO de él sentado en el patio con dos personas esperando su decisión.",
      b: "la cámara ha AVANZADO hasta su cara: PLANO MEDIO CORTO en el que se le ve dudar y callarse antes de contestar, con los dos desenfocados delante.",
    },
    ini: "dos esperan su decisión y él va a hablar.",
    fin: "de cerca se le ve pararse antes de decir nada: la duda le llega ahora antes que la palabra, y eso es lo único que cambió.",
  }, "aureola, redencion, perdon, reencuentro, fantasma, llanto"),
  esc("b12b", [ref("recodo_funza"), ref("salto_tequendama"), ref("dragon_laguna")], {
    comun: "El Funza sigue su curso hacia el salto, y guarda la forma de la mujer y la forma de la culebra, y todo lo que ninguna de las dos quiso revelar. Objeto ancla: el agua que sigue.",
    camara: {
      a: "PLANO MACRO de la superficie del río en el recodo, con la corriente visible y nada debajo.",
      b: "la cámara ha ACOMPAÑADO al agua río abajo en un travelling largo y se ha elevado: GRAN PLANO GENERAL final con el río entero bajando hacia la niebla del salto.",
    },
    ini: "la corriente pasa sobre las piedras del recodo y no deja ver el fondo.",
    fin: "siguiendo el agua se llega hasta el salto: el río entero bajando y perdiéndose en la niebla, sin devolver nada de lo que lleva.",
  }, "figuras en el agua, fantasmas, rostros, texto, simbolos, personas"),
]);
