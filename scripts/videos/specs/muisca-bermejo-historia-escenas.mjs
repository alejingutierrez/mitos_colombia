// Keyframes de La historia del Bermejo — 13 bloques × 2 escenas × 2 cuadros
// = 52 imágenes ≈ 130 s.
// Guion: guion-la-historia-del-bermejo-v2.json (N=13)
// Acta:  acta-la-historia-del-bermejo.json (26 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Las pruebas NO son una conquista de la mujer. Ella dice que no permitirá
//   que muera para demostrar que quiere vivir con ella, y él promete
//   detenerse si el cuerpo falla. El relato NO celebra el sacrificio: nada de
//   agonía heroica ni de cuerpo destrozado.
// · La joven NO ES UN PREMIO: habla con él en los campos, le corrige la
//   lengua y se ríe de sus errores ANTES de cualquier prueba. Ese bloque va
//   entero y es lo que desactiva la lectura de trofeo.
// · El cacique NO desprecia al extranjero: su objeción es concreta y
//   declarada —no sabe si mañana seguirá su camino—. DEVUELVE los regalos, no
//   lo expulsa: los devuelve intactos y bien puestos.
// · La gente que camina a distancia durante el tronco NO LO AYUDA A CARGAR.
//   Le acercan agua y le señalan dónde cede el terreno. Acompañar no es
//   cargar por otro, y esa distinción tiene que verse en el encuadre.
// · El cierre NO borra al extranjero: no dejó de serlo en una noche. Lo que
//   cambia es qué recuerda la gente primero.
//
// DESLINDE CONTRA `el-bermejo-aspira-a-ser-rey`: allí el mito es la caída.
// Aquí es cómo se quedó, y termina en la celebración: no se anticipa nada.
//
// GUION DE LUZ: llegada a Hunsa con luz de forastero → tareas pequeñas →
// noche de estrellas compartidas → campos de Toca → risa y corrección → luz
// dura de los regalos devueltos → penumbra del ayuno → primer día del tronco
// → segundo día → llegada al atardecer → celebración de varios días → años.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-bermejo-historia-escenas";
export const OUT_DIR = "muiscas/videos/la-historia-del-bermejo/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; conquistadores, armaduras, cascos, cruces, carabelas, barbas europeas de conquistador; la mujer como trofeo, entrega de la novia, beso de victoria; agonia heroica, cuerpo destrozado, sangre, huesos, desmayo dramatico; publico animando, trofeos, podios; boda europea, altar, anillos, velo; xenofobia caricaturizada, insultos, expulsion violenta";
export const PALETTE =
  "crema de algodon crudo, pardo de camino y de madera, verde apagado de sementera, ocre de tierra de Toca, gris de piedra; el cobre apagado del cabello del Bermejo es el unico color que no se repite en nadie; sin saturacion";

const BERMEJO =
  "EL MISMO Bermejo de la referencia (hombre de unos treinta años, fuerte de espalda, rostro atento de rasgos que no son del altiplano, piel más clara y quemada por el camino, cabello de un cobre apagado y rojizo recogido en la nuca, manta de algodón crudo anudada al hombro al modo muisca)";
const JOVEN =
  "LA MISMA hija mayor del cacique de Toca de la referencia (mujer de unos veinticinco años, rostro despierto y con humor en la boca, pelo negro liso en trenza, manta de algodón crudo del pecho a la pantorrilla anudada al hombro con dos cenefas tejidas en ocre y verde)";
const HISCA =
  "EL MISMO Hisca de la referencia (hombre de unos treinta y cinco años, de constitución media y cara franca, rasgos que no son del altiplano, piel quemada por el camino, cabello castaño oscuro recogido, manta de algodón crudo anudada al hombro al modo muisca)";

export const ITEMS = armar([
  // b1 — Llegó a Hunsa con seis compañeros y una lengua desconocida.
  escp("b1a", [ref("bermejo_forastero"), ref("hisca_companero"), ref("camino_carrera"), ref("familias_muiscas")], {
    comun: `Luz de mañana. ${BERMEJO} llegando a Hunsa con seis compañeros y una lengua que nadie entiende. Objeto ancla: las caras que se giran a mirarlos.`,
    camara: {
      a: "PLANO GENERAL del camino con siete figuras llegando, todavía lejos y sin distinguirse.",
      b: "la cámara ha AVANZADO hasta la entrada del poblado y se ha girado hacia la gente: PLANO MEDIO de cuatro caras del lugar mirando hacia el camino, quietas y sin hostilidad.",
    },
    ini: "por el camino vienen siete figuras que aún no se distinguen.",
    fin: "en el poblado, cuatro caras se han vuelto a mirarlos: hay curiosidad y ninguna hostilidad, y nadie se acerca todavía.",
  }, "conquistadores, armaduras, cruces, carabelas, violencia, insultos"),
  escp("b1b", [ref("bermejo_forastero"), ref("familias_muiscas")], {
    comun: `Luz plana. Su cabello tiene un color poco común en el altiplano y ese rasgo basta para darle un nombre. Objeto ancla: el cabello cobrizo.`,
    camara: {
      a: "PLANO MACRO de su cabello cobre apagado recogido en la nuca, con el sol dándole de lado.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del mercado con todas las cabezas negras y la suya como único punto distinto en todo el cuadro.",
    },
    ini: "el cabello cobrizo llena el cuadro, mechón a mechón.",
    fin: "desde arriba, en un mercado lleno de gente, su cabeza es la única de otro color: por eso lo nombraron por ahí y no por otra cosa.",
  }, "insultos, burla, expulsion, señalar con el dedo, aislamiento dramatico"),

  // b2 — Después lo conocieron por lo que hacía.
  escp("b2a", [ref("bermejo_forastero"), ref("familias_muiscas"), ref("mercado_bacata")], {
    comun: `Luz de mañana. Aprendió a saludar SIN APRESURARSE: eso es lo primero que aprendió y se ve en el ritmo del cuerpo. Objeto ancla: el saludo.`,
    camara: {
      a: "PLANO MEDIO de él saludando demasiado rápido a alguien, que se queda a medias.",
      b: "la cámara ha hecho un TRAVELLING LATERAL por el mercado hasta otro puesto, meses después: PLANO MEDIO del mismo saludo hecho despacio, con los dos parándose a hacerlo entero.",
    },
    ini: "saluda deprisa y el otro se queda con el gesto sin terminar.",
    fin: "en otro puesto, más adelante, el mismo saludo se hace entero y sin prisa: los dos se paran, se miran y se sueltan.",
  }, "burla, humillacion, torpeza caricaturizada, aureola"),
  escp("b2b", [ref("bermejo_forastero"), ref("piraca_labrador"), ref("sabana_cultivos"), ref("semillas_bolsita")], {
    comun: `Aprendió a leer los surcos, a saber cuándo se cubren las semillas y cómo cambian los caminos con la lluvia. Objeto ancla: la tierra en la mano.`,
    camara: {
      a: "PLANO MACRO de dos manos distintas sobre el mismo puñado de tierra: una enseñando y otra aprendiendo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del sembrado con él ya solo, agachado en otro surco, haciendo el mismo gesto por su cuenta.",
    },
    ini: "una mano de la tierra enseña y la otra imita, sobre el mismo puñado.",
    fin: "desde lejos está solo en otro surco haciendo el mismo gesto sin que nadie se lo diga: ya no necesita que se lo enseñen.",
  }, "aureola, magia, resplandor, maestro y discipulo con jerarquia"),

  // b3 — Ellos enseñaron a orientarse por las estrellas.
  escp("b3a", [ref("bermejo_forastero"), ref("hisca_companero"), ref("familias_muiscas"), ref("altiplano_noche")], {
    comun: `Noche despejada. Él y sus compañeros comparten formas de orientarse por ciertas estrellas y de reconocer señales del clima. El intercambio va en las dos direcciones. Objeto ancla: el brazo que señala el cielo.`,
    camara: {
      a: "PLANO MEDIO CORTO de un brazo señalando un punto del cielo, con dos caras siguiéndolo.",
      b: "la cámara ha basculado hacia arriba y ha retrocedido: PLANO ENTERAMENTE DE CIELO estrellado, con las puntas de tres dedos distintos entrando por el borde inferior señalando el mismo punto.",
    },
    ini: "un brazo señala arriba y dos caras miran hacia donde apunta.",
    fin: "arriba, en el cielo estrellado, tres dedos distintos entran por abajo del cuadro señalando la misma estrella.",
  }, "constelaciones dibujadas, lineas, mapas celestes, texto, magia"),
  escp("b3b", [ref("bermejo_forastero"), ref("familias_muiscas"), ref("sabana_cultivos")], {
    comun: `Nadie entregó todo su saber de una vez: la confianza creció en TAREAS PEQUEÑAS. Objeto ancla: las tareas compartidas.`,
    camara: {
      a: "PLANO MACRO de cuatro manos —dos suyas y dos de otro— sosteniendo juntas el mismo haz de fique.",
      b: "la cámara ha RETROCEDIDO en un travelling que atraviesa tres escenas distintas: PLANO GENERAL en el que se ve a la vez un techo que se ata, un surco que se abre y una acequia que se limpia, con él en una de las tres.",
    },
    ini: "cuatro manos sujetan el mismo haz de fique.",
    fin: "desde lejos se ven tres tareas pequeñas a la vez en el mismo caserío, y él está metido en una de ellas como uno más, sin destacar.",
  }, "ceremonia de aceptacion, juramentos, aureola, multitud"),

  // b4 — En Toca conoció a la hija mayor del cacique.
  escp("b4a", [ref("bermejo_forastero"), ref("hija_cacique_toca"), ref("sabana_cultivos")], {
    comun: `Luz de tarde en los campos de Toca. ${BERMEJO} y ${JOVEN} hablando mientras trabajan. Ella NO es un premio al final de su viaje: es alguien con quien habla. Objeto ancla: las dos caras a la misma altura.`,
    camara: {
      a: "PLANO GENERAL del campo con los dos pequeños y separados, cada uno en su surco.",
      b: "la cámara ha AVANZADO hasta ellos y se ha puesto a la altura de los ojos: PLANO MEDIO de los dos hablando de perfil, a la misma altura y sin tocarse.",
    },
    ini: "están cada uno en su surco, lejos, trabajando por separado.",
    fin: "de cerca están los dos hablando en el borde del mismo surco, a la misma altura, con las herramientas todavía en la mano.",
  }, "la mujer como premio, trofeo, aureola, beso, escena romantica"),
  escp("b4b", [ref("hija_cacique_toca"), ref("bermejo_forastero")], {
    comun: `${JOVEN} corrigiéndole las palabras que pronuncia mal y RIÉNDOSE cuando confunde el nombre de una herramienta con el de un pájaro. La risa es de ella y es amable. Objeto ancla: su boca riéndose.`,
    camara: {
      a: "PLANO MACRO de una azada de palo apoyada en la tierra, con una mano señalándola.",
      b: "la cámara ha SUBIDO a la cara de ella y se ha acercado: PRIMER PLANO de su boca riéndose abiertamente, con él desenfocado detrás.",
    },
    ini: "una mano señala la azada y alguien dice un nombre.",
    fin: "de cerca, ella se está riendo abiertamente del nombre que él dijo, sin burla, y él sonríe detrás, desenfocado.",
  }, "burla cruel, humillacion, llanto, beso, escena romantica explicita"),

  // b5 — Llevó regalos a la familia.
  escp("b5a", [ref("bermejo_forastero"), ref("regalos_devueltos"), ref("familias_muiscas")], {
    comun: `Luz de mañana. Cuando quisieron formar una casa, él llevó regalos a la familia: una manta, un brazalete y una parte de venado. Objeto ancla: los presentes puestos en la estera.`,
    camara: {
      a: "PLANO MACRO de las manos colocando un brazalete de fibra y cuentas sobre la estera, junto a una manta doblada.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO LARGO del interior con los presentes dispuestos en el suelo y la familia sentada alrededor, mirándolos.",
    },
    ini: "las manos colocan el brazalete junto a la manta doblada.",
    fin: "desde más lejos están los presentes puestos en fila sobre la estera y la familia sentada en semicírculo alrededor, sin haberlos tocado.",
  }, "oro, joyas caras, dote, subasta, boda europea"),
  escp("b5b", [ref("hija_cacique_toca"), ref("bermejo_forastero"), ref("familias_muiscas")], {
    comun: `${JOVEN} presente mientras se habla de su casa: no está fuera de la conversación. Objeto ancla: su sitio en el semicírculo.`,
    camara: {
      a: "PLANO MEDIO del padre y el Bermejo hablando, con alguien más cortado por el borde.",
      b: "la cámara ha RETROCEDIDO y ha subido a un PICADO del recinto: se ve que ella está sentada en el mismo semicírculo, a la misma altura que los dos hombres.",
    },
    ini: "los dos hombres hablan y sólo se ve el hombro de alguien más.",
    fin: "desde arriba se ve el semicírculo completo: ella está sentada en él, a la misma altura, no fuera ni detrás.",
  }, "la mujer apartada, velo, silencio impuesto, aureola"),

  // b6 — El cacique devolvió cada presente. (CITA)
  escp("b6a", [ref("regalos_devueltos"), ref("familias_muiscas"), ref("bermejo_forastero")], {
    comun: `Luz dura. El cacique DEVUELVE cada presente. No lo expulsa: se los devuelve intactos y bien puestos. Objeto ancla: LOS MISMOS regalos devueltos de la referencia.`,
    camara: {
      a: "PLANO CENITAL cerrado del montón ordenado de presentes devueltos sobre la estera —dos mantas dobladas, el brazalete, el canasto con mazorcas y una vasija—, todos intactos y sin abrir.",
      b: "la cámara ha RETROCEDIDO y ha bajado a la altura de los ojos: PLANO MEDIO con el cacique empujando despacio la estera hacia él, sin tirar nada.",
    },
    ini: "desde arriba, los presentes están devueltos y ordenados, sin abrir y sin usar.",
    fin: "el cacique empuja la estera entera hacia él con las dos manos, despacio y con cuidado: nada se cae ni se desordena.",
  }, "arrojar los regalos, romperlos, expulsion violenta, insultos, gritos"),
  escp("b6b", [ref("bermejo_forastero"), ref("familias_muiscas")], {
    comun: `La objeción es CONCRETA y declarada: no sabe si mañana continuará su camino, y su hija no puede construir sobre alguien que siempre está de paso. No hay desprecio. Objeto ancla: las dos caras.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara del cacique diciéndolo, seria y sin dureza.",
      b: "la cámara ha RODEADO hasta detrás de él: PLANO MEDIO de la cara del Bermejo escuchando, con la nuca del cacique en primer término y sin poder contestar todavía.",
    },
    ini: "el cacique lo dice mirándolo a la cara, sin levantar la voz.",
    fin: "al otro lado se le ve escuchar sin defenderse: lo que le han dicho es razonable y él lo sabe.",
  }, "desprecio racista, insultos, burla, expulsion, violencia"),

  // b7 — Dos pruebas: un ayuno y cargar un tronco dos jornadas.
  escp("b7a", [ref("bermejo_forastero"), ref("familias_muiscas"), ref("tronco_prueba")], {
    comun: `Él pregunta qué puede hacer, y le proponen dos pruebas: una larga temporada de ayuno y recogimiento, y cargar un tronco durante dos jornadas entre Hunsa y Sogamoso. Objeto ancla: el tronco.`,
    camara: {
      a: "PLANO MEDIO de él preguntando, de pie, con las manos abiertas.",
      b: "la cámara ha girado y AVANZADO hacia el patio: PLANO MACRO de LA MISMA madera de la referencia apoyada en dos piedras, con la corteza a medio quitar.",
    },
    ini: "él pregunta qué puede hacer y espera.",
    fin: "la respuesta está fuera, en el patio: un tronco grueso y largo apoyado sobre dos piedras, esperando.",
  }, "tribunal, jueces, sentencia, torturas, cadenas"),
  escp("b7b", [ref("hija_cacique_toca"), ref("bermejo_forastero"), ref("familias_muiscas")], {
    comun: `${JOVEN} escuchando las condiciones y advirtiendo que NO PERMITIRÁ que muera para demostrar que quiere vivir con ella. Él acepta, pero promete DETENERSE si su cuerpo deja de responder. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MEDIO de ella levantándose de la estera en mitad de la conversación de los hombres.",
      b: "la cámara ha AVANZADO hasta su cara: PRIMER PLANO de ella diciendo la condición, firme, con las caras de los demás desenfocadas alrededor.",
    },
    ini: "se levanta en mitad de la conversación y todos la miran.",
    fin: "de cerca pone su condición sin pedir permiso: no es una súplica, es un límite puesto antes de empezar.",
  }, "llanto, suplica, desmayo, la mujer callada, aureola"),

  // b8 — El ayuno: quedarse quieto mientras afuera seguía la vida.
  escp("b8a", [ref("bermejo_forastero"), ref("refugio_huertos")], {
    comun: `Penumbra del recogimiento. Lo difícil NO es sólo el hambre: es permanecer quieto mientras afuera sigue la vida. Objeto ancla: el vano por el que entra el ruido de fuera.`,
    camara: {
      a: "PLANO MEDIO de él sentado en la estera del cobertizo, quieto, con las manos en las rodillas.",
      b: "la cámara ha RETROCEDIDO atravesando el vano y ha salido a los huertos: PLANO GENERAL de fuera, con gente trabajando entre las matas y el cobertizo pequeño al fondo.",
    },
    ini: "está sentado y quieto en la penumbra, sin nada que hacer.",
    fin: "fuera, en los huertos, la vida sigue entera: cinco personas trabajando entre las matas, y el cobertizo donde él está es una caseta pequeña al fondo.",
  }, "agonia, cuerpo demacrado, visiones, trance, aureola, sangre"),
  escp("b8b", [ref("bermejo_forastero"), ref("camino_carrera"), ref("refugio_huertos")], {
    comun: `Pensando en los caminos que había cruzado y en la diferencia entre llegar a un lugar y pertenecer a él. Objeto ancla: sus manos quietas.`,
    camara: {
      a: "PLANO MACRO de sus manos abiertas y quietas sobre las rodillas, con las cicatrices del camino.",
      b: "la cámara ha RETROCEDIDO y ha subido atravesando el techo: GRAN PLANO GENERAL en picado del territorio con los caminos cruzándolo en todas direcciones y el cobertizo minúsculo en uno de ellos.",
    },
    ini: "las manos están quietas y abiertas sobre las rodillas.",
    fin: "desde muy arriba se ven todos los caminos del territorio a la vez, y el sitio donde él está quieto es un punto en uno de ellos.",
  }, "visiones, flashbacks dibujados, fantasmas, aureola, magia"),

  // b9 — Cuando salió, el tronco lo esperaba. El primer día.
  escp("b9a", [ref("bermejo_forastero"), ref("tronco_prueba"), ref("familias_muiscas")], {
    comun: `Luz de primera mañana. Sale del recogimiento y el tronco lo espera. Objeto ancla: el tronco y su hombro.`,
    camara: {
      a: "PLANO MEDIO de él saliendo del cobertizo, más delgado, con la luz dándole de frente.",
      b: "la cámara ha girado y BAJADO hasta el tronco: PLANO MACRO del hombro entrando debajo de la madera, con la fibra atada alrededor.",
    },
    ini: "sale del cobertizo y se para al ver lo que hay delante.",
    fin: "su hombro está ya debajo del tronco y la fibra atada alrededor: lo levanta sin que nadie lo ayude.",
  }, "publico animando, trofeos, camara lenta epica, aureola"),
  escp("b9b", [ref("bermejo_forastero"), ref("tronco_prueba"), ref("sendero_territorio")], {
    comun: `Primer día: avanza con el peso sobre los hombros. Todavía puede. Objeto ancla: el camino que lleva hecho.`,
    camara: {
      a: "PLANO MEDIO lateral acompañándolo a su paso, con el tronco cruzando el cuadro entero.",
      b: "la cámara se ha QUEDADO ATRÁS y ha subido: GRAN PLANO GENERAL en picado del altiplano con él pequeño en el camino y el trecho hecho quedándose detrás.",
    },
    ini: "camina a buen paso con el tronco encima, de perfil.",
    fin: "desde arriba se ve lo que lleva andado y lo que le queda: un camino larguísimo entre dos valles, con él a un tercio del recorrido.",
  }, "aureola, camara lenta epica, publico, musica triunfal dibujada"),

  // b10 — El segundo día, cada paso lo hundía.
  escp("b10a", [ref("bermejo_forastero"), ref("tronco_prueba"), ref("sendero_territorio")], {
    comun: `Segundo día. Cada paso parece hundirlo. Es esfuerzo y cansancio, NO agonía: prometió detenerse si el cuerpo fallaba y ese límite se respeta. Objeto ancla: sus pies en la tierra.`,
    camara: {
      a: "PLANO MACRO de un pie hundiéndose en la tierra blanda bajo el peso.",
      b: "la cámara ha SUBIDO por el cuerpo hasta la cara y ha retrocedido: PLANO MEDIO con él parado, apoyando el tronco en una piedra para descansar, sin soltarlo.",
    },
    ini: "el pie se hunde en la tierra hasta el tobillo bajo el peso.",
    fin: "se ha parado y ha apoyado un extremo del tronco en una piedra para descansar, respirando fuerte, sin soltarlo y sin caerse.",
  }, "agonia, sangre, huesos, desmayo dramatico, martirio, aureola"),
  escp("b10b", [ref("bermejo_forastero"), ref("tronco_prueba"), ref("familias_muiscas")], {
    comun: `Varias personas caminan A DISTANCIA: NO pueden cargar por él, pero le acercan agua y le señalan dónde el terreno cede. Acompañar no es cargar, y el encuadre lo tiene que decir. Objeto ancla: la distancia que guardan.`,
    camara: {
      a: "PLANO MACRO de una vasija pequeña de agua tendida al final de un brazo, sin que la otra mano la reciba todavía.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del camino con él cargando en el centro y cuatro personas repartidas a varios pasos de distancia, ninguna tocando el tronco.",
    },
    ini: "una vasija de agua espera al final de un brazo extendido.",
    fin: "desde lejos se ve la regla del acompañamiento: él carga solo en el centro y los cuatro van a distancia, uno señalando el suelo y otro con la vasija, sin que ninguno toque la madera.",
  }, "ayudarle a cargar, llevar el tronco entre varios, publico animando, trofeos"),

  // b11 — Al atardecer llegó. «Has cumplido».
  escp("b11a", [ref("bermejo_forastero"), ref("tronco_prueba"), ref("valle_iraca"), ref("familias_muiscas")], {
    comun: `Atardecer. Llega al final del recorrido con el tronco. Objeto ancla: el tronco tocando el suelo.`,
    camara: {
      a: "PLANO MEDIO lateral de él entrando en la explanada con el tronco todavía encima.",
      b: "la cámara ha BAJADO al suelo delante de él: PLANO MACRO del extremo del tronco cayendo en la tierra y levantando polvo, con sus pies detrás.",
    },
    ini: "entra en la explanada con el tronco todavía sobre los hombros.",
    fin: "el tronco ha caído en la tierra y ha levantado una nube corta de polvo; sus pies siguen de pie detrás de él.",
  }, "publico aclamando, trofeo, podio, pose de victoria, aureola"),
  escp("b11b", [ref("familias_muiscas"), ref("bermejo_forastero"), ref("tronco_prueba")], {
    comun: `El cacique diciendo que ha cumplido. Es una constatación, no una coronación. Objeto ancla: la marca pulida del tronco.`,
    camara: {
      a: "PLANO MEDIO CORTO del cacique diciéndolo, tranquilo.",
      b: "la cámara ha BAJADO hasta el tronco caído: PLANO MACRO de la parte central PULIDA Y OSCURECIDA por el roce del hombro, con la marca de fibra donde se ató.",
    },
    ini: "el cacique lo dice sin levantar la voz y sin abrazarlo.",
    fin: "en el tronco, de muy cerca, se ve la zona del centro pulida y oscurecida por dos días de hombro, y la marca de la fibra: eso es la prueba.",
  }, "coronacion, aclamacion, trofeo, la novia entregada, aureola"),

  // b12 — «Ahora falta lo que dura más». La celebración. (CITA)
  escp("b12a", [ref("hija_cacique_toca"), ref("bermejo_forastero"), ref("valle_iraca")], {
    comun: `${JOVEN} diciendo que ahora falta lo que dura más: aprender a vivir juntos. El mérito pasa de la prueba a lo que empieza después de ella. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MEDIO de los dos de pie junto al tronco caído.",
      b: "la cámara ha AVANZADO hasta ella y ha rodeado: PRIMER PLANO de su cara diciéndolo, con el tronco desenfocado y ya lejos en el borde del cuadro.",
    },
    ini: "los dos están de pie junto al tronco, que sigue en el suelo.",
    fin: "de cerca se la ve decirlo mirándolo a él, y el tronco ha quedado fuera de foco en el borde: lo que importa ya no está ahí.",
  }, "beso, entrega de la novia, boda europea, aureola, aplausos"),
  escp("b12b", [ref("familias_muiscas"), ref("plaza_fiesta_noche"), ref("bermejo_forastero"), ref("hisca_companero")], {
    comun: "Noche de fiesta. La celebración reúne a las familias varios días: las de Toca, las de Hunsa y los compañeros del Bermejo mezclados. Objeto ancla: las mesas y los corros mezclados.",
    camara: {
      a: "PLANO MEDIO CORTO de tres caras juntas comiendo del mismo cuenco: dos del altiplano y una de las de fuera.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la plaza en fiesta con los corros mezclados y ningún grupo sentado aparte.",
    },
    ini: "tres caras comen del mismo cuenco, muy juntas.",
    fin: "desde arriba, en la plaza no hay ningún grupo aparte: los de fuera y los de aquí están repartidos en todos los corros.",
  }, "boda europea, altar, cruces, anillos, velo, brindis con copas"),

  // b13 — No dejó de ser extranjero en una noche.
  escp("b13a", [ref("bermejo_forastero"), ref("familias_muiscas"), ref("poblado_nuevo")], {
    comun: `Años. NO dejó de ser extranjero en una noche: construyó, trabajó y discutió. Se cuenta con tres cosas distintas, incluida una discusión. Objeto ancla: las tres escenas de una misma vida.`,
    camara: {
      a: "PLANO MACRO de sus manos atando una viga de una casa nueva.",
      b: "la cámara ha RETROCEDIDO en un travelling largo por el caserío: PLANO GENERAL en el que se ven a la vez la casa que levantó, el surco que trabaja y un corro donde está discutiendo con otros dos, sin ganar.",
    },
    ini: "sus manos atan la viga de una casa que se está levantando.",
    fin: "desde lejos se ve la vida entera: la casa terminada, su surco sembrado y él en un corro discutiendo con dos, con las manos abiertas y sin razón ganada.",
  }, "aureola, apoteosis, monumento, estatua, aclamacion"),
  escp("b13b", [ref("bermejo_forastero"), ref("familias_muiscas"), ref("valle_iraca")], {
    comun: "Luz de tarde larga, años después. Con los años su cabello dejó de ser lo primero que la gente recordaba: recordaban que había llegado desde lejos y había decidido quedarse. Lo que cambia es el orden de lo que se recuerda. Objeto ancla: el cabello, ahora con canas.",
    camara: {
      a: "PLANO MACRO de su cabello cobrizo ya con canas, visto de cerca, sin que nadie lo mire.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL final del caserío con él dentro de un corro de gente, indistinguible por lo que hace y distinguible sólo si se le busca.",
    },
    ini: "el cabello cobrizo, ya con canas, llena el cuadro.",
    fin: "desde lejos, en el corro nadie lo está mirando por el pelo: está hablando, y hay que buscarlo para encontrarlo entre los demás.",
  }, "monumento, estatua, aureola, texto, banderas, asimilacion dibujada"),
]);
