// Keyframes de Jururiana y su nieto Warir — 14 bloques × 2 escenas × 2 cuadros
// = 56 imágenes ≈ 140 s.
// Guion: guion-el-indio-jururiana-v2.json (N=14) · Acta: acta-el-indio-jururiana.json (28 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · EL ABUELO ADIVINA EL TIEMPO, NO EL DESTINO: nubes, olor del aire, cabras
//   que callan. Es un SABER LEÍDO EN EL MUNDO y así se muestra: nunca trance,
//   nunca visión, nunca humo.
// · EL ÚNICO ANUNCIO QUE NO ES METEOROLÓGICO es el de su propia muerte, con
//   plazo de un mes. Ese contraste es el eje del primer tramo.
// · LAS TRES PRUEBAS DE WARIR SON DISTINTAS Y TODAS NECESARIAS: la casa oscura
//   (saber DÓNDE), la noticia del posta (saber QUÉ PASARÁ) y la piedra (saber
//   DE DÓNDE VIENE EL SABER). No se funden ni se abrevia ninguna.
// · LA CASA OSCURA ES UNA TRAMPA DE LOS HOMBRES, no una demostración pedida
//   por él: lo encierran para ver si sólo carga el nombre del abuelo.
// · WARIR NO TANTEA: CAMINA DERECHO. Ese detalle es el que convence a todos y
//   NO PUEDE PERDERSE EN EL PLANO.
// · LA PIEDRA LANZADA CONTRA EL SUELO NO ES AGRESIÓN CONTRA WARIR: es contra la
//   tierra. Por eso se enoja, y ahí está el cierre del mito.
// · «LA TIERRA ES MI ABUELA» NO ES METÁFORA DECORATIVA: es la fuente declarada
//   de los secretos. Se narra como afirmación, no como poesía.
//
// LA CHICHAMAYA (b7) es, según el inventario, «la imagen más falseada del
// pueblo wayúu: se resuelve con la investigación en mano o no se resuelve». La
// biblia V4 trae la coreografía exacta y aquí manda entera: círculo de arena
// —pioi— de unos seis metros, descalzos, LA MUJER AVANZA Y EL HOMBRE RETROCEDE
// a un palmo de distancia, ella abre la manta con las dos manos, él lleva las
// manos en alto, y EL OBJETIVO DE ELLA ES TUMBARLO. El tamborero va FUERA del
// círculo. Nada de danza en corro, ni de fogata en el centro, ni de plumas.
//
// GUION DE LUZ: mañana de casa en casa → mediodía de los chivos negros →
// atardecer del aviso con cielo limpio → amanecer después del chubasco →
// tarde del plazo → luz plana del nieto que aprende → fiesta de Wawari hasta la
// noche → oscuridad total de la prueba → luz de la puerta que se abre → polvo
// del posta → mediodía de la pregunta → tarde del alivio → noche de la piedra
// → última luz sobre el suelo.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-jururiana-escenas";
export const OUT_DIR = "wayuu/videos/el-indio-jururiana/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; trance, vision, humo de profecia, bola de cristal, cartas, runas; resplandor, aureola, ojos blancos, particulas magicas; danza en corro alrededor de una fogata, plumas, tocados de fiesta ajenos; tambor en el centro del circulo, hoguera en el centro; funeral cristiano, ataud, cruces, lapidas; rayos, tormenta epica, tornados, relampagos dibujados; multitudes en extasis, adoracion, arrodillarse";
export const PALETTE =
  PALETTE_BASE + "; el azul frio de la luna entra solo en las huellas de la noche; el gris de agua del chubasco es el unico frio del mito";

const JU =
  "EL MISMO Jururiana de la referencia (hombre wayúu muy mayor, pelo blanco, cara delgada y atenta, manta de algodón crudo terciada, faja tejida de kanas, descalzo)";
const WA =
  "EL MISMO Warir de la referencia (hombre joven wayúu, pelo negro liso, cara seria, manta de algodón crudo terciada, faja tejida, descalzo)";

export const ITEMS = armar([
  // b1 — Fue de casa en casa. Que guardaran semillas: llegaban las lluvias.
  escp("b1a", [ref("jururiana"), ref("rancheria"), ref("corral")], {
    comun: `Mañana. JURURIANA FUE DE CASA EN CASA, entre corrales de piedra y trupillos: recorre, no convoca. Objeto ancla: el camino entre un corral y el siguiente.`,
    camara: {
      a: "PLANO MEDIO de él saliendo de una enramada, de perfil, ya andando hacia la siguiente casa.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con cinco rancherías dispersas y una línea de huellas que las va uniendo una a una.",
    },
    ini: "sale de una enramada, de perfil, y ya va andando hacia la casa siguiente.",
    fin: "desde muy arriba se ven cinco rancherías dispersas y una línea de huellas que las va uniendo de una en una.",
  }, "predica, pulpito, multitud, adoracion, aureola"),
  esc("b1b", [ref("semillas_y_siembra"), ref("ceramica"), ref("piichi")], {
    comun: `Mañana. QUE GUARDARAN SEMILLAS PORQUE LLEGABAN LAS LLUVIAS: el aviso se obedece con las manos. Semillas metidas en tinajas y tapadas. Sin figuras en plano cerrado. Objeto ancla: las semillas entrando en la tinaja.`,
    camara: {
      a: "PLANO MACRO de un puñado de semillas cayendo dentro de una tinaja de barro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del interior con seis tinajas ya tapadas en fila contra la pared y las manos cerrando la última.",
    },
    ini: "un puñado de semillas cae dentro de la tinaja de barro.",
    fin: "desde arriba, seis tinajas ya están tapadas en fila contra la pared y unas manos cierran la última.",
  }, "graneros modernos, sacos, etiquetas, maquinaria"),

  // b2 — Que juntaran los chivos negros para Patsuo. Antes de irse avisó algo.
  esc("b2a", [ref("chivos"), ref("corral"), ref("llanura_cardonal")], {
    comun: `Mediodía. QUE JUNTARAN LOS CHIVOS NEGROS para llevarlos a Patsuo: NEGROS, y sólo negros. La selección es el gesto. Objeto ancla: los animales negros apartados.`,
    camara: {
      a: "PLANO MACRO del pelo negro del lomo de un chivo, con la luz dura encima.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado del corral con el rebaño mezclado a un lado y, apartados en una esquina, doce o quince chivos todos negros.",
    },
    ini: "el pelo negro del lomo del chivo con la luz dura encima llena el cuadro.",
    fin: "desde arriba, el rebaño mezclado está a un lado y en la esquina hay doce o quince chivos todos negros, apartados.",
  }, "sacrificio, sangre, altar, ritual satanico, fuego"),
  escp("b2b", [ref("patsuo"), ref("jururiana"), ref("llanura_cardonal")], {
    comun: `Mediodía. A PATSUO, donde se reunían a comer. ${JU} llega con la gente y, ANTES DE IRSE, AVISÓ ALGO: se le ve empezar a hablar. Objeto ancla: la reunión en Patsuo.`,
    camara: {
      a: "GRAN PLANO GENERAL del paraje de Patsuo con la gente y los animales llegando, todos pequeños.",
      b: "la cámara ha DESCENDIDO y ha avanzado hasta él: PLANO MEDIO CORTO de su cara empezando a decir algo, con la gente parándose alrededor.",
    },
    ini: "desde lejos, la gente y los animales llegan al paraje de Patsuo.",
    fin: "ya cerca, se le ve empezar a decir algo y la gente parándose alrededor para oírlo.",
  }, "pulpito, aureola, trance, resplandor, adoracion"),

  // b3 — En la madrugada caería un chubasco. El cielo estaba limpio.
  escp("b3a", [ref("jururiana"), ref("llanura_cardonal")], {
    comun: `Atardecer con EL CIELO COMPLETAMENTE LIMPIO. Anuncia que en la madrugada caerá un chubasco que borrará sus huellas. Lo dice leyendo el mundo —el aire, las cabras—, no en trance. Objeto ancla: el cielo sin una nube.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de perfil, olfateando el aire con los ojos entornados.",
      b: "la cámara ha BASCULADO hacia arriba y ha retrocedido: PLANO ENTERAMENTE DE CIELO al atardecer, limpio de punta a punta, sin una sola nube.",
    },
    ini: "de perfil y cerca, olfatea el aire con los ojos entornados.",
    fin: "al mirar arriba, el cielo del atardecer está limpio de punta a punta: no hay una sola nube.",
  }, "trance, ojos blancos, resplandor, nubes ya formandose, rayos, humo"),
  esc("b3b", [ref("chubasco"), ref("llanura_cardonal")], {
    comun: `Madrugada. EL AGUA LLEGÓ IGUAL: el chubasco cae sobre la arena en plena noche. Es lluvia de verdad, no tormenta épica. Sin figuras. Objeto ancla: las gotas reventando en la arena.`,
    camara: {
      a: "PLANO MACRO de las primeras gotas gruesas reventando en la arena seca y abriendo cráteres diminutos.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la llanura de madrugada bajo el chubasco, con el agua corriendo ya por las hondonadas.",
    },
    ini: "las primeras gotas gruesas revientan en la arena seca y abren cráteres diminutos.",
    fin: "desde muy arriba, el chubasco cubre la llanura entera y el agua ya corre por las hondonadas.",
  }, "rayos, tormenta epica, tornado, inundacion, dramatismo, relampagos dibujados"),

  // b4 — No quedaba una sola huella suya. Todo ocurrió como lo dijo.
  esc("b4a", [ref("llanura_cardonal"), ref("rancheria")], {
    comun: `Amanecer después del agua. NO QUEDABA UNA SOLA HUELLA SUYA. El inventario lo dice: «arena con huellas al atardecer, arena lisa al amanecer; dos cuadros, un solo encuadre». El par respeta ese hallazgo y sólo cambia la escala. Objeto ancla: la arena lisa.`,
    camara: {
      a: "PLANO CENITAL MACRO de la arena mojada y lisa, sin una marca, con las últimas gotas encima.",
      b: "la cámara se ha ELEVADO en vertical: GRAN PLANO GENERAL en picado del mismo terreno al amanecer, liso de punta a punta, sin un solo rastro en ninguna dirección.",
    },
    ini: "la arena mojada está lisa, sin una marca, con las últimas gotas encima.",
    fin: "desde muy arriba, el terreno entero está liso al amanecer y no hay un solo rastro en ninguna dirección.",
  }, "huellas visibles, figura alejandose, fantasma, resplandor, texto"),
  escp("b4b", [ref("primeros_wayuu"), ref("llanura_cardonal"), ref("rancheria")], {
    comun: `Amanecer. LA GENTE SALIÓ A MIRAR: comprueban el suelo agachados y se miran entre ellos. TODO OCURRIÓ TAL COMO ÉL LO DIJO. Objeto ancla: las manos que tocan la arena.`,
    camara: {
      a: "PLANO MACRO de una mano abierta apoyada en la arena lisa, comprobando que está intacta.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con ocho personas repartidas por el terreno, todas agachadas mirando el suelo.",
    },
    ini: "una mano abierta se apoya en la arena lisa, comprobando que está intacta.",
    fin: "desde arriba, ocho personas están repartidas por el terreno, todas agachadas mirando el suelo.",
  }, "panico, adoracion, arrodillarse, gritos, aureola"),

  // b5 — Anunció su propia muerte: un mes. Al cumplirse el mes, murió.
  escp("b5a", [ref("jururiana"), ref("enramada"), ref("primeros_wayuu")], {
    comun: `Tarde. EL ÚNICO ANUNCIO QUE NO ES METEOROLÓGICO: anuncia su propia muerte y DA EL PLAZO, un mes. Lo dice sentado y tranquilo, y los demás se quedan callados. Objeto ancla: su cara diciéndolo sin drama.`,
    camara: {
      a: "PLANO GENERAL de la enramada con él sentado entre la gente, uno más.",
      b: "la cámara ha AVANZADO entre los demás hasta él: PRIMER PLANO de su cara acabando la frase, tranquila, sin solemnidad.",
    },
    ini: "está sentado entre la gente bajo la enramada, como uno más.",
    fin: "de muy cerca se le ve acabar la frase con la cara tranquila, sin ninguna solemnidad.",
  }, "trance, aureola, resplandor, llanto teatral, adoracion, arrodillarse"),
  esc("b5b", [ref("piichi"), ref("chinchorro"), ref("rancheria")], {
    comun: `Tarde, un mes después. AL CUMPLIRSE EL MES EXACTO, JURURIANA MURIÓ. No se muestra: se cuenta con la casa cerrada, que es como el corpus lo dice —«después de una muerte, la casa se cierra; nadie vuelve a colgar allí su chinchorro»—. Objeto ancla: el horcón sin chinchorro.`,
    camara: {
      a: "PLANO MACRO del horcón con el cabo cortado donde estaba amarrado el chinchorro, y nada colgando.",
      b: "la cámara ha RETROCEDIDO fuera y se ha elevado: PLANO GENERAL de la casa cerrada al atardecer con la puerta trancada y la ranchería siguiendo su vida un poco más allá.",
    },
    ini: "el horcón tiene el cabo cortado donde estaba amarrado el chinchorro, y no cuelga nada.",
    fin: "desde fuera y arriba, la casa está cerrada con la puerta trancada y la vida de la ranchería sigue un poco más allá.",
  }, "cuerpo, cadaver, ataud, cruces, lapida, funeral cristiano, llanto teatral"),

  // b6 — Quedó Warir. Había aprendido a leer el tiempo.
  escp("b6a", [ref("warir"), ref("llanura_cardonal"), ref("presagios")], {
    comun: `Luz plana. QUEDÓ WARIR, SU NIETO, y lo que había aprendido es LEER EL MUNDO: las nubes, el olor del aire. ${WA}, con la cara vuelta al cielo pero sin nada de trance. Objeto ancla: las nubes que empiezan a formarse.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara mirando arriba, con los ojos moviéndose de un punto a otro del cielo.",
      b: "la cámara ha BASCULADO y ha retrocedido: PLANO GENERAL casi todo de cielo con dos capas de nubes moviéndose a alturas distintas.",
    },
    ini: "mira arriba y los ojos se le mueven de un punto a otro del cielo.",
    fin: "en el cuadro casi todo es cielo, con dos capas de nubes moviéndose a alturas distintas.",
  }, "trance, ojos blancos, resplandor, simbolos en el cielo, constelaciones dibujadas"),
  escp("b6b", [ref("warir"), ref("chivos"), ref("corral")], {
    comun: `Luz plana. Y EL SILENCIO DE LAS CABRAS: el saber está en detalles del mundo, no en poderes. Las cabras quietas, todas con la cabeza en la misma dirección. Objeto ancla: las cabezas alineadas del rebaño.`,
    camara: {
      a: "PLANO MEDIO CORTO de tres cabras quietas con la cabeza vuelta hacia el mismo lado y las orejas tiesas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado del corral con el rebaño entero inmóvil, todas las cabezas en la misma dirección, y él parado en el portillo mirándolas.",
    },
    ini: "tres cabras están quietas con la cabeza vuelta al mismo lado y las orejas tiesas.",
    fin: "desde arriba, el rebaño entero está inmóvil con todas las cabezas en la misma dirección, y él las mira desde el portillo.",
  }, "animales asustados, estampida, resplandor, simbolos, magia"),

  // b7 — Hizo fiesta en Wawari, con carreras y chichamaya. Quisieron probarlo.
  escp("b7a", [ref("wawari"), ref("caballo"), ref("primeros_wayuu")], {
    comun: `Tarde. FIESTA EN WAWARI CON CARRERAS DE CABALLOS: dos jinetes lanzados sobre una pista de arena y la gente a los lados. Objeto ancla: los dos caballos a la par.`,
    camara: {
      a: "PLANO DETALLE de los cascos de dos caballos golpeando la arena a la par, muy juntos.",
      b: "la cámara se ha ELEVADO y ha retrocedido: PLANO GENERAL de la pista con los dos jinetes llegando y dos filas de gente a los lados, gritando.",
    },
    ini: "los cascos de dos caballos golpean la arena a la par, muy juntos.",
    fin: "desde arriba se ve la pista entera con los dos jinetes llegando y dos filas de gente gritando a los lados.",
  }, "hipodromo, gradas, banderas, apuestas, uniformes"),
  escp("b7b", [ref("yonna"), ref("wawari"), ref("manta_wayuu")], {
    comun: `Última luz y luego noche. LA CHICHAMAYA, EXACTA: círculo de arena de unos seis metros, todos DESCALZOS; LA MUJER AVANZA Y EL HOMBRE RETROCEDE a un palmo de distancia; ella ABRE LA MANTA CON LAS DOS MANOS y él lleva LAS MANOS EN ALTO; ELLA BUSCA TUMBARLO. El tamborero va FUERA del círculo. Ni fogata en el centro ni corro. Objeto ancla: los dos pies enfrentados en la arena.`,
    camara: {
      a: "PLANO MACRO de dos pies descalzos en la arena, uno avanzando y el otro retrocediendo a un palmo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado a cenital: PLANO EN PICADO del círculo entero con la pareja en el medio —ella con la manta abierta a dos manos, él con las manos en alto— y el tamborero fuera del trazo.",
    },
    ini: "dos pies descalzos en la arena, uno avanzando y el otro retrocediendo a un palmo.",
    fin: "desde arriba se ve el círculo completo: ella con la manta abierta a dos manos, él con las manos en alto y retrocediendo, y el tamborero fuera del trazo.",
  }, "danza en corro, fogata en el centro, tambor en el centro, plumas, tocados, hombre persiguiendo a la mujer"),

  // b8 — Lo encerraron en una casa oscura. Antes escondieron a Maratey.
  escp("b8a", [ref("primeros_wayuu"), ref("maratey"), ref("piichi")], {
    comun: `Noche. QUISIERON SABER SI ADIVINABA DE VERDAD y prepararon LA TRAMPA: antes de encerrarlo, esconden a Maratey dentro. Son ellos los que urden, no él quien se ofrece. Objeto ancla: el hombre metiéndose en el rincón.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos hombres hablándose al oído en la puerta de la casa, decidiendo.",
      b: "la cámara ha ENTRADO en la casa y ha girado al rincón: PLANO MEDIO de Maratey acomodándose contra la pared del fondo, en la penumbra.",
    },
    ini: "dos hombres se hablan al oído en la puerta de la casa, decidiendo algo.",
    fin: "dentro, en la penumbra, Maratey se acomoda contra la pared del fondo.",
  }, "tortura, cuerdas, violencia, burla exagerada, sombras amenazantes"),
  esc("b8b", [ref("piichi"), ref("casa_del_encierro")], {
    comun: `Oscuridad total. LO ENCERRARON EN UNA CASA TAN OSCURA QUE NO SE VEÍA NADA —«ni la palma de la mano», dice el corpus—. El cuadro es casi negro, con apenas la línea de luz del canto de la puerta. Objeto ancla: la línea de luz bajo la puerta.`,
    camara: {
      a: "PLANO MACRO de la rendija bajo la puerta, una línea de luz finísima sobre el suelo de arena.",
      b: "la cámara ha RETROCEDIDO hasta el centro del cuarto: PLANO GENERAL casi enteramente negro, con esa línea al fondo como única referencia.",
    },
    ini: "bajo la puerta hay una línea de luz finísima sobre el suelo de arena.",
    fin: "desde el centro del cuarto el cuadro es casi todo negro y esa línea al fondo es lo único que se ve.",
  }, "antorchas, velas, ojos brillantes en la oscuridad, monstruos, figuras"),

  // b9 — Warir caminó derecho y se detuvo donde el otro contenía la respiración.
  escp("b9a", [ref("warir"), ref("piichi")], {
    comun: `Oscuridad. LE PREGUNTARON DÓNDE ESTABA MARATEY. WARIR NO TANTEA: CAMINA DERECHO, con los brazos a los lados y sin tocar nada. Ese detalle es el que convence a todos y no se puede perder. Objeto ancla: sus brazos quietos a los lados.`,
    camara: {
      a: "PLANO MEDIO CORTO de él de perfil en la penumbra, con los brazos pegados al cuerpo y la cara al frente.",
      b: "la cámara ha RETROCEDIDO en travelling hacia atrás delante de él: PLANO GENERAL del cuarto negro con su figura avanzando en línea recta, sin desviarse ni palpar.",
    },
    ini: "de perfil en la penumbra, con los brazos pegados al cuerpo y la cara al frente.",
    fin: "la cámara retrocede delante de él y se ve que avanza en línea recta, sin desviarse ni palpar nada.",
  }, "brazos extendidos, tanteo, tropiezos, ojos brillantes, resplandor, aureola"),
  escp("b9b", [ref("warir"), ref("maratey"), ref("piichi")], {
    comun: `Oscuridad. SE DETUVO DONDE EL OTRO CONTENÍA LA RESPIRACIÓN: se para justo delante, sin tocarlo. Objeto ancla: los dos cuerpos a un palmo en la oscuridad.`,
    camara: {
      a: "PLANO MACRO del pecho de Maratey quieto, sin respirar, en la penumbra.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO con los dos de perfil, Warir parado a un palmo del rincón y Maratey pegado a la pared.",
    },
    ini: "el pecho de Maratey está quieto, sin respirar, en la penumbra.",
    fin: "al retroceder se ve a los dos de perfil: Warir parado a un palmo del rincón y Maratey pegado a la pared.",
  }, "resplandor, aureola, magia, ojos brillantes, violencia, susto"),

  // b10 — Al abrir la puerta quedaron convencidos. Llegó un posta con polvo.
  escp("b10a", [ref("primeros_wayuu"), ref("warir"), ref("piichi")], {
    comun: `Luz de golpe al abrirse la puerta. AL ABRIR TODOS QUEDARON CONVENCIDOS: las caras pasan de la duda a la certeza en un plano. Objeto ancla: la luz entrando de golpe.`,
    camara: {
      a: "PLANO MACRO del canto de la puerta abriéndose y la luz barriendo el suelo de arena.",
      b: "la cámara ha SALIDO fuera y se ha vuelto: PLANO GENERAL desde el exterior con el vano abierto, los dos dentro en su sitio y una docena de personas fuera, calladas.",
    },
    ini: "el canto de la puerta se abre y la luz barre el suelo de arena.",
    fin: "desde fuera, el vano está abierto con los dos dentro en su sitio y una docena de personas afuera, calladas.",
  }, "aplausos, aclamacion, arrodillarse, aureola, resplandor"),
  escp("b10b", [ref("posta"), ref("caballo"), ref("wawari")], {
    comun: `Luz de la tarde. LLEGÓ UN POSTA CON POLVO EN LA ROPA: el mensajero viene de lejos y se le nota en la ropa y en el caballo. Objeto ancla: el polvo del camino en la tela.`,
    camara: {
      a: "PLANO MACRO de la tela de la manta con una capa de polvo blanco pegada, y una mano sacudiéndola.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con el posta desmontando en mitad de la fiesta y la gente abriéndose para dejarle sitio.",
    },
    ini: "la tela tiene una capa de polvo blanco pegada y una mano la sacude.",
    fin: "desde arriba, el posta desmonta en mitad de la fiesta y la gente se abre para dejarle sitio.",
  }, "uniformes, cornetas, cartas lacradas, sellos, escritura"),

  // b11 — El nieto del cacique se iba a morir. Todos se volvieron hacia Warir.
  escp("b11a", [ref("posta"), ref("primeros_wayuu"), ref("wawari")], {
    comun: `Tarde. TRAÍA NOTICIA: el nieto del cacique estaba enfermo y se iba a morir. La noticia se cuenta con las caras que la reciben. Objeto ancla: la boca del posta hablando.`,
    camara: {
      a: "PLANO MEDIO CORTO del posta hablando de perfil, todavía sin resuello.",
      b: "la cámara ha RETROCEDIDO y ha girado sobre el grupo: PLANO GENERAL con veinte personas que han dejado la fiesta y están quietas escuchando.",
    },
    ini: "el posta habla de perfil, todavía sin resuello.",
    fin: "al girar la cámara se ve a veinte personas que han dejado la fiesta y escuchan quietas.",
  }, "cuerpo enfermo, lesiones, sangre, medicos, hospital, llanto teatral"),
  escp("b11b", [ref("primeros_wayuu"), ref("warir"), ref("wawari")], {
    comun: `Tarde. TODOS SE VOLVIERON HACIA WARIR: la segunda prueba no la pide él, se la ponen encima las miradas. Objeto ancla: las cabezas girando a la vez.`,
    camara: {
      a: "PLANO MEDIO CORTO de tres caras girándose a la vez hacia el mismo lado.",
      b: "la cámara ha GIRADO siguiendo esas miradas y ha retrocedido: PLANO GENERAL con él solo en un extremo del corro y todos los demás vueltos hacia él.",
    },
    ini: "tres caras se giran a la vez hacia el mismo lado.",
    fin: "al seguir esas miradas aparece él, solo en un extremo del corro, con todos los demás vueltos hacia él.",
  }, "aureola, resplandor, trance, adoracion, arrodillarse"),

  // b12 — Contestó que se aliviaría y llegaría a ser hombre. Y así sucedió.
  escp("b12a", [ref("warir"), ref("wawari"), ref("primeros_wayuu")], {
    comun: `Tarde. CONTESTÓ QUE ESTABA ENFERMO, PERO QUE SE ALIVIARÍA Y LLEGARÍA A SER HOMBRE: lo dice sin ceremonia, casi de pasada. Objeto ancla: su cara contestando.`,
    camara: {
      a: "PLANO GENERAL del corro con él de pie en un extremo, pequeño, empezando a hablar.",
      b: "la cámara ha AVANZADO hasta su cara: PLANO MEDIO CORTO de él acabando la frase, sereno, y bajando los ojos al terminar.",
    },
    ini: "está de pie en un extremo del corro, pequeño, y empieza a hablar.",
    fin: "de cerca se le ve acabar la frase, sereno, y bajar los ojos al terminar.",
  }, "trance, ojos blancos, resplandor, humo, aureola, texto"),
  escp("b12b", [ref("primeros_wayuu"), ref("rancheria"), ref("enramada")], {
    comun: `Luz plana, tiempo después. Y ASÍ SUCEDIÓ, TAL CUAL: el muchacho vivo y ya crecido, trabajando con los demás. La profecía se comprueba con vida corriente. Objeto ancla: el joven sano en la faena.`,
    camara: {
      a: "PLANO MACRO de unas manos jóvenes y fuertes atando una cuerda en un corral.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ranchería con él ya hombre entre los demás, indistinguible de cualquiera.",
    },
    ini: "unas manos jóvenes y fuertes atan una cuerda en el corral.",
    fin: "desde arriba se le ve ya hombre, trabajando entre los demás y sin nada que lo distinga.",
  }, "milagro, aureola, resplandor, cama de enfermo, medicos, agradecimiento teatral"),

  // b13 — Uno levantó una piedra grande y la lanzó al suelo. Se sintió en los pies.
  escp("b13a", [ref("primeros_wayuu"), ref("piedras_y_huesos"), ref("wawari")], {
    comun: `Noche. UNO LEVANTÓ UNA PIEDRA GRANDE Y LA LANZÓ AL SUELO. No es agresión contra Warir: es CONTRA LA TIERRA, y por eso importa. Objeto ancla: la piedra en el aire.`,
    camara: {
      a: "PLANO MACRO de las dos manos levantando una piedra grande por encima de la cabeza.",
      b: "la cámara ha CAÍDO con la piedra hasta el suelo: PLANO CENITAL MACRO del impacto en la arena, con el polvo saltando en anillo alrededor.",
    },
    ini: "dos manos levantan una piedra grande por encima de la cabeza.",
    fin: "la piedra llega al suelo y el polvo salta en un anillo alrededor del impacto.",
  }, "agresion a una persona, pelea, sangre, lapidacion, violencia"),
  escp("b13b", [ref("primeros_wayuu"), ref("warir"), ref("wawari")], {
    comun: `Noche. EL GOLPE SE SINTIÓ EN LOS PIES DE TODOS: es un temblor que sube por el suelo. Se cuenta con los pies descalzos y con las caras que lo notan. Objeto ancla: los pies en la arena.`,
    camara: {
      a: "PLANO MACRO de varios pies descalzos en la arena con los dedos crispándose a la vez.",
      b: "la cámara ha SUBIDO y ha retrocedido: PLANO GENERAL del corro con toda la gente quieta y Warir ya de pie, mirando el sitio del impacto con la cara cambiada.",
    },
    ini: "varios pies descalzos en la arena y los dedos se crispan todos a la vez.",
    fin: "desde arriba, el corro está quieto y Warir ya está de pie, mirando el sitio del golpe con la cara cambiada.",
  }, "temblor epico, grietas gigantes, terremoto, magia, resplandor"),

  // b14 — «La tierra es mi abuela, y de ella tengo mis secretos». (CITA)
  escp("b14a", [ref("warir"), ref("wawari"), ref("primeros_wayuu")], {
    comun: `Noche. LA CITA, dicha como AFIRMACIÓN y no como poesía: la tierra es su abuela y de ella tiene todos sus secretos. Está enojado, y el enojo es por el suelo, no por él. Objeto ancla: su mano señalando el suelo.`,
    camara: {
      a: "PLANO DETALLE de su mano abierta señalando hacia abajo, hacia el sitio del impacto.",
      b: "la cámara ha SUBIDO hasta su cara y ha girado al frente: PRIMER PLANO de él terminando la frase, con la mandíbula apretada.",
    },
    ini: "su mano abierta señala hacia abajo, al sitio donde cayó la piedra.",
    fin: "de muy cerca se le ve acabar la frase con la mandíbula apretada.",
  }, "aureola, resplandor, trance, rayos, magia, texto en pantalla"),
  esc("b14b", [ref("wawari"), ref("llanura_cardonal"), ref("piedras_y_huesos")], {
    comun: `Última luz de la noche. NADIE VOLVIÓ A TIRAR PIEDRAS ESA NOCHE: el cierre es el suelo intacto y la piedra dejada donde cayó, sin que nadie la toque. Sin figuras en plano cerrado. Objeto ancla: la piedra quieta en la arena.`,
    camara: {
      a: "PLANO MACRO de la piedra asentada en el hoyo que abrió, con la arena ya quieta alrededor.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL final en picado del lugar de la fiesta de noche, con la gente sentada en corros y un trecho de arena vacío alrededor de la piedra.",
    },
    ini: "la piedra está asentada en el hoyo que abrió y la arena alrededor ya está quieta.",
    fin: "desde muy arriba, la gente sigue sentada en corros y alrededor de la piedra hay un trecho de arena que nadie pisa.",
  }, "monumento, altar, ofrendas, culto, texto, inscripcion"),
]);
