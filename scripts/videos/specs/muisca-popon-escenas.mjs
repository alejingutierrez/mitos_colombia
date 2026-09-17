// Keyframes de Popón: la señal sobre el agua — 15 bloques × 2 escenas × 2 cuadros
// = 60 imágenes ≈ 150 s.
// Guion: guion-popon-v2.json (N=15) · Acta: acta-popon.json (29 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Popón NO adivina por magia: lee el sueño SIN las explicaciones de los
//   otros. Lo que lo distingue de los jeques premiados no es su poder, es que
//   no dice lo que el gobernante quiere oír. Nada de trance ni de visiones.
// · La señal de Guatavita NO es un prodigio para lucirse: es una prueba de
//   que no habló para ofender. El canon insiste en que NO se quemaron juncos
//   ni hubo humo —nadie la fabricó— y la ficha lo recoge: juncos intactos y
//   sin humo por ninguna parte.
// · La señal NO EVITA NADA: la laguna no detuvo lo que venía; sólo encendió,
//   por un instante, una advertencia.
// · El zipa NO manda matar a Popón: no ordenó detenerlo. El miedo estaba en
//   su SILENCIO, y eso bastó para que el jeque huyera esa misma noche.
// · El canon NO afirma qué hizo el zipa con el aviso: no sabemos qué pensó
//   primero. Esa duda se conserva.
// · Lo que mata al zipa NO es sólo la conquista: es la terquedad de no querer
//   verles la cara ni que se la vieran.
// · Las historias tardías —el diablo, el vuelo a Santa Marta— NO se afirman
//   ni se niegan: son lo que dijeron otros y quedan como tales.
//
// GUION DE LUZ: agua clara de Tena → agua que se oscurece → penumbra del
// salón antes del alba → mantas del premio → camino de Ubaque → ojos cerrados
// → silencio del salón → miedo callado → noche del sendero → orilla de
// Guatavita → primera noche sin nada → llamas bajas azul verdosas → cólera →
// caballos y metal → memoria en Ubaque.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-popon-escenas";
export const OUT_DIR = "muiscas/videos/popon/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; trance, ojos en blanco, humo magico, visiones dibujadas, simbolos flotantes, aureola; demonios, diablo, cuernos, fuego infernal; sangre abundante, cadaveres, degollamiento; conquistadores heroicos, banderas gloriosas, cruces de conquista; hogueras en la orilla, juncos ardiendo, humo en la laguna; levitacion, vuelo, figura volando por los aires";
export const PALETTE =
  "azul verdoso palido de las llamas sobre el agua, negro de laguna de noche, crema de algodon crudo, ocre y verde de las cenefas, pardo de camino, rojo apagado solo en el agua del sueño; sin saturacion";

const POPON =
  "EL MISMO Popón de la referencia (hombre de unos sesenta años, delgado y de andar sin prisa, rostro sereno y difícil de intimidar, pelo negro con canas suelto hasta los hombros, manta de algodón crudo sencilla)";
const ZIPA =
  "EL MISMO zipa de Bacatá de la referencia (hombre de unos cuarenta y cinco años, de porte imponente y expresión tensa, pelo negro recogido bajo una diadema tejida ancha, manta de algodón de tejido muy fino anudada al hombro con tres cenefas)";

export const ITEMS = armar([
  // b1 — Soñó que se bañaba en Tena. Toda la corriente era sangre.
  escp("b1a", [ref("zipa_bacata"), ref("rio_prueba")], {
    comun: `El sueño: ${ZIPA} bañándose en el agua clara de su casa de Tena. Al principio el baño es fresco. Objeto ancla: el agua alrededor de sus brazos.`,
    camara: {
      a: "PLANO MACRO del agua clara corriendo alrededor de un antebrazo, con el fondo de piedras a la vista.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del remanso con él a media distancia y de espaldas, con el agua a la cintura.",
    },
    ini: "el agua está clara y se ve el fondo de piedras alrededor del brazo.",
    fin: "a media distancia y de espaldas está en el remanso con el agua a la cintura, y la corriente sigue clara.",
  }, "desnudez, sexualizacion, sangre en primer plano, cadaveres"),
  escp("b1b", [ref("zipa_bacata"), ref("rio_prueba")], {
    comun: `El agua empieza a oscurecerse alrededor de sus brazos, y cuando quiere salir TODA la corriente es sangre. Es agua oscurecida, no un baño de sangre: el rojo va apagado. Objeto ancla: el color del agua.`,
    camara: {
      a: "PLANO MACRO del agua alrededor del antebrazo, oscureciéndose en hilos rojos apagados que salen del propio cuerpo.",
      b: "la cámara se ha ELEVADO muchísimo hasta un PICADO ALTO: el río entero, de una orilla a la otra y hasta el fondo, es una corriente roja apagada, con él pequeño en el centro.",
    },
    ini: "unos hilos rojos apagados se abren en el agua alrededor del brazo.",
    fin: "desde arriba la corriente entera ha cambiado de color de orilla a orilla y hasta donde alcanza la vista, con él parado en medio.",
  }, "sangre brillante, visceras, cadaveres, horror, gritos"),

  // b2 — Llamó a los jeques. Dijeron lo que quería oír.
  escp("b2a", [ref("zipa_bacata"), ref("salon_jeques"), ref("familias_muiscas")], {
    comun: `Antes del amanecer. Despierta y llama a los jeques para que le suelten el sueño; se prepara una guerra contra Hunsa. Objeto ancla: el semicírculo de esteras.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara despertándose de golpe en la penumbra, con los ojos abiertos.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del salón con el semicírculo de esteras ya ocupado por seis jeques y él sentado en el banco bajo del centro.",
    },
    ini: "se despierta de golpe en la penumbra, con los ojos abiertos.",
    fin: "desde arriba el salón ya está lleno: seis jeques en el semicírculo y él en el banco del centro, todavía de noche.",
  }, "trance, humo, aureola, demonios, visiones dibujadas"),
  escp("b2b", [ref("familias_muiscas"), ref("zipa_bacata"), ref("manta_reparto")], {
    comun: `Los primeros dicen LO QUE EL GOBERNANTE QUIERE OÍR: la sangre será del enemigo y él saldrá limpio. Y los premia con mantas y favores. La relación entre las dos cosas se ve. Objeto ancla: las mantas del premio.`,
    camara: {
      a: "PLANO MEDIO CORTO de un jeque hablando con una sonrisa corta, mirando al zipa.",
      b: "la cámara ha hecho un PANEO LATERAL y ha bajado: PLANO MACRO de dos mantas finas dobladas pasando a las manos de ese mismo jeque.",
    },
    ini: "el jeque habla mirando al zipa, con una sonrisa corta.",
    fin: "en sus manos hay ya dos mantas finas dobladas: lo que dijo y lo que recibe caben en la misma escena.",
  }, "corrupcion caricaturizada, oro, monedas, risa malvada"),

  // b3 — Faltaba Popón. No acudía con prisa.
  escp("b3a", [ref("salon_jeques"), ref("zipa_bacata")], {
    comun: `Faltaba Popón. Se dice con una estera vacía en el semicírculo. Objeto ancla: la estera vacía.`,
    camara: {
      a: "PLANO MACRO de una estera vacía en el semicírculo, con las otras ocupadas a los lados.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del salón entero con el hueco bien visible en el círculo y el zipa mirándolo.",
    },
    ini: "en el semicírculo hay una estera vacía entre dos ocupadas.",
    fin: "desde arriba, el hueco parte el círculo y el zipa lo está mirando: falta uno y todos lo saben.",
  }, "trono, corona, guardias, castigo, aureola"),
  escp("b3b", [ref("popon_jeque"), ref("valle_iraca"), ref("sendero_territorio")], {
    comun: `${POPON} vive en el valle de Ubaque y NO acude con prisa a los llamados del cercado. La falta de prisa es un rasgo, no un desafío. Objeto ancla: su paso.`,
    camara: {
      a: "PLANO MACRO de sus pies andando por un sendero, con el paso corto y tranquilo.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del camino con él pequeño y solo, andando sin apurarse, y el valle entero por recorrer.",
    },
    ini: "los pies avanzan con paso corto y tranquilo por el sendero.",
    fin: "desde arriba se ve el camino entero por delante y él andando por él sin apurar el paso, solo.",
  }, "aureola, cortejo, sequito, magia, resplandor"),

  // b4 — Pidió oír el sueño sin las explicaciones ajenas.
  escp("b4a", [ref("popon_jeque"), ref("salon_jeques"), ref("familias_muiscas")], {
    comun: `Cuando por fin llega, PIDE oír el sueño SIN las explicaciones de los otros. Eso es lo que lo distingue. Objeto ancla: las bocas que manda callar.`,
    camara: {
      a: "PLANO MEDIO de él entrando al salón, con dos jeques adelantándose a explicarle.",
      b: "la cámara ha AVANZADO hasta él y ha rodeado: PLANO MEDIO CORTO de su cara con la mano alzada pidiendo que paren, y las bocas de los otros cerrándose.",
    },
    ini: "entra y dos jeques se le adelantan para explicarle lo ya dicho.",
    fin: "ha levantado la mano y los ha parado: las dos bocas se han cerrado y él se ha vuelto hacia el zipa.",
  }, "aureola, trance, magia, arrogancia caricaturizada, gritos"),
  escp("b4b", [ref("zipa_bacata"), ref("popon_jeque"), ref("salon_jeques")], {
    comun: `${ZIPA} contando el sueño otra vez, sólo para él. Objeto ancla: los dos solos dentro del corro.`,
    camara: {
      a: "PLANO MEDIO del zipa contando, con los demás desenfocados alrededor.",
      b: "la cámara ha RODEADO hasta detrás del zipa: PLANO MEDIO CORTO de Popón escuchando, con la nuca del zipa en primer término y el resto del salón fuera de foco.",
    },
    ini: "el zipa cuenta el sueño desde el banco del centro.",
    fin: "por encima del hombro del zipa se ve a Popón escuchando con los ojos todavía abiertos y la cara quieta.",
  }, "trance, humo, visiones, aureola, magia, demonios"),

  // b5 — Cerró los ojos y calló. «No es la sangre de Hunsa». (CITA)
  escp("b5a", [ref("popon_jeque"), ref("salon_jeques")], {
    comun: `Cierra los ojos y CALLA LARGO RATO. No hay trance ni visión: hay un hombre pensando con los ojos cerrados. Objeto ancla: sus párpados.`,
    camara: {
      a: "PLANO MACRO de sus párpados cerrados, quietos, sin temblor y sin nada detrás.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del salón con él sentado y callado en el centro y todos los demás esperando, incómodos.",
    },
    ini: "los párpados están cerrados y completamente quietos.",
    fin: "desde arriba, lleva tanto rato callado que los demás se han empezado a mover en sus esteras: nadie se atreve a interrumpirlo.",
  }, "trance, ojos en blanco, humo, visiones, simbolos, aureola"),
  escp("b5b", [ref("popon_jeque"), ref("zipa_bacata"), ref("salon_jeques")], {
    comun: `Y dice por fin que NO ES LA SANGRE DE HUNSA. Es la frase que parte el relato en dos. Objeto ancla: su cara y la del zipa.`,
    camara: {
      a: "PLANO MEDIO CORTO de Popón abriendo los ojos y diciéndolo, sin dramatismo.",
      b: "la cámara ha hecho un PANEO LATERAL rápido hasta el zipa: PLANO MEDIO CORTO de su cara recibiendo la frase, con la expresión endureciéndose.",
    },
    ini: "abre los ojos y lo dice en voz normal.",
    fin: "al otro lado, la cara del zipa se ha endurecido y no ha contestado todavía.",
  }, "aureola, rayos, resplandor, humo, gritos, violencia"),

  // b6 — «¿De quién es?». «Tuya».
  escp("b6a", [ref("familias_muiscas"), ref("popon_jeque"), ref("salon_jeques")], {
    comun: `El salón se queda INMÓVIL y le preguntan de quién es entonces. Objeto ancla: la quietud del corro.`,
    camara: {
      a: "PLANO MEDIO de tres jeques del semicírculo, completamente quietos, sin pestañear.",
      b: "la cámara ha RETROCEDIDO y ha girado sobre sí misma por todo el semicírculo: PLANO GENERAL en el que las seis esteras están inmóviles y nadie se mueve.",
    },
    ini: "tres caras se han quedado paradas a la vez.",
    fin: "dando la vuelta al semicírculo entero, ninguna de las seis figuras se ha movido un dedo: el salón está congelado.",
  }, "gritos, panico, huida, violencia, armas"),
  escp("b6b", [ref("popon_jeque"), ref("zipa_bacata")], {
    comun: `Responde que es SUYA: unos hombres de otras tierras se acercan ya, y ellos lo han de matar. Objeto ancla: su cara diciéndolo.`,
    camara: {
      a: "PLANO MEDIO CORTO de Popón hablando, tranquilo y mirándolo a la cara.",
      b: "la cámara ha RETROCEDIDO y ha girado hasta ponerse detrás del zipa: PLANO GENERAL del salón desde su espalda, con Popón pequeño y solo enfrente y todo el semicírculo entre los dos.",
    },
    ini: "lo dice mirándolo a la cara, sin subir la voz.",
    fin: "desde la espalda del zipa se ve la escena entera: Popón solo al otro lado, con seis jeques callados en medio y nadie poniéndose de su lado.",
  }, "vision dibujada, conquistadores en el cielo, aureola, demonios, humo"),

  // b7 — Unos bajaron la cabeza; otros pidieron que retirara sus palabras.
  escp("b7a", [ref("familias_muiscas"), ref("popon_jeque"), ref("salon_jeques")], {
    comun: `Algunos consejeros bajan la cabeza; otros piden que retire sus palabras. Las dos reacciones en el mismo cuadro. Objeto ancla: las cabezas.`,
    camara: {
      a: "PLANO MEDIO de dos consejeros bajando la cabeza a la vez, sin decir nada.",
      b: "la cámara ha hecho un PANEO LATERAL al otro lado del semicírculo: PLANO MEDIO de otros dos de pie, con el brazo extendido hacia Popón, pidiéndole que se retracte.",
    },
    ini: "dos bajan la cabeza y se callan.",
    fin: "al otro lado del corro, otros dos se han puesto de pie y le piden con el brazo extendido que retire lo que dijo.",
  }, "linchamiento, golpes, armas, gritos, expulsion violenta"),
  escp("b7b", [ref("zipa_bacata"), ref("popon_jeque")], {
    comun: `${ZIPA} NO ORDENA DETENERLO: CALLA. Y Popón lee el miedo en ese silencio. Lo que decide es una boca que no se abre. Objeto ancla: la boca cerrada del zipa.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara del zipa con la boca cerrada, sin dar ninguna orden.",
      b: "la cámara ha hecho un PANEO LATERAL hasta Popón: PLANO MEDIO CORTO de su cara entendiendo lo que ese silencio significa.",
    },
    ini: "el zipa tiene la boca cerrada y no da ninguna orden.",
    fin: "al otro lado, Popón ha entendido: en esa cara se ve que ya sabe lo que tiene que hacer esta noche.",
  }, "orden de arresto, guardias, cadenas, violencia, gritos"),

  // b8 — Una verdad incómoda se vuelve culpa de quien la dice.
  escp("b8a", [ref("popon_jeque"), ref("cercado_bacata"), ref("altiplano_noche")], {
    comun: `Una verdad incómoda puede volverse culpa de quien la pronuncia. Esa misma noche sale de Bacatá y toma el camino de su tierra. Objeto ancla: el vano por el que sale.`,
    camara: {
      a: "PLANO MEDIO de él saliendo del salón, con las esteras ocupadas a su espalda.",
      b: "la cámara se ha QUEDADO DENTRO y ha retrocedido: PLANO GENERAL del salón desde el fondo, con el vano vacío y los jeques todavía sentados, sin que ninguno se levante a acompañarlo.",
    },
    ini: "sale del salón y a su espalda quedan las esteras ocupadas.",
    fin: "desde el fondo del salón, el vano ha quedado vacío y ninguno de los seis se ha levantado: se va solo.",
  }, "persecucion, guardias, antorchas, violencia, cadenas"),
  escp("b8b", [ref("popon_jeque"), ref("mensajero_quebrada"), ref("sendero_territorio"), ref("altiplano_noche")], {
    comun: `En el sendero encuentra a unos hombres del servicio del zipa. Objeto ancla: el encuentro en el camino.`,
    camara: {
      a: "PLANO GENERAL nocturno del sendero con dos figuras viniendo de frente y él parándose.",
      b: "la cámara ha AVANZADO hasta ellos: PLANO MEDIO de los tres parados en mitad del camino a oscuras, hablando bajo.",
    },
    ini: "por el sendero vienen dos figuras de frente y él se para.",
    fin: "los tres están parados en mitad del camino hablando bajo, sin luz y sin nadie más alrededor.",
  }, "emboscada, armas, violencia, captura, gritos"),

  // b9 — «Si el agua echa llamas, sabrá que no ofendí».
  escp("b9a", [ref("popon_jeque"), ref("mensajero_quebrada")], {
    comun: `Les encarga la señal: que digan a su señor que envíe gente a la laguna de Guatavita. Objeto ancla: su cara encargando el mensaje.`,
    camara: {
      a: "PLANO MEDIO CORTO de Popón hablándoles, con las dos caras de ellos desenfocadas delante.",
      b: "la cámara ha RODEADO hasta detrás de él: PLANO MEDIO de las dos caras de los hombres escuchando y asintiendo, con la nuca de Popón en primer término.",
    },
    ini: "les habla de cerca, dándoles el encargo.",
    fin: "los dos han asentido y ya están mirando hacia el camino de vuelta: van a llevarlo.",
  }, "magia, conjuro, aureola, humo, resplandor, amenazas"),
  escp("b9b", [ref("popon_jeque"), ref("laguna_guatavita"), ref("sendero_territorio")], {
    comun: `Si de noche el agua echa llamas, sabrá que NO HABLÓ PARA OFENDERLO. Es una prueba, no un alarde. Y después Popón busca dónde esconderse. Objeto ancla: el camino que él toma, distinto del de ellos.`,
    camara: {
      a: "PLANO GENERAL del cruce de caminos con los tres separándose en direcciones opuestas.",
      b: "la cámara ha SEGUIDO a Popón y ha subido: GRAN PLANO GENERAL nocturno con él minúsculo tomando un sendero de monte y los otros dos alejándose por el camino ancho.",
    },
    ini: "los tres se separan en el cruce, cada uno hacia un lado.",
    fin: "desde arriba, él sube por un sendero de monte, pequeñísimo, y los otros dos van por el camino ancho en dirección contraria.",
  }, "vuelo, levitacion, desaparicion magica, aureola, resplandor"),

  // b10 — Llegaron a Guatavita. La primera noche, nada.
  escp("b10a", [ref("mensajero_quebrada"), ref("familias_muiscas"), ref("laguna_guatavita")], {
    comun: `Los del zipa llegan a Guatavita y al atardecer miran el agua. Objeto ancla: la orilla donde se colocan.`,
    camara: {
      a: "PLANO MEDIO del grupo llegando al filo del cerro y asomándose a la laguna.",
      b: "la cámara ha RETROCEDIDO sobre el agua y ha girado: PLANO GENERAL desde el centro de la laguna con el grupo pequeño repartido por la orilla, todos mirando hacia el objetivo.",
    },
    ini: "llegan al filo y se asoman a mirar el agua.",
    fin: "desde el centro del agua se ve a los seis repartidos por la orilla, quietos y mirando la superficie.",
  }, "hogueras, antorchas, juncos ardiendo, humo, ceremonia"),
  esc("b10b", [ref("laguna_guatavita"), ref("altiplano_noche")], {
    comun: "La PRIMERA NOCHE no ven nada. La laguna está negra y quieta, con los juncos intactos y SIN humo por ninguna parte. Objeto ancla: el agua sin nada encima.",
    camara: {
      a: "PLANO MACRO de la superficie negra del agua al anochecer, lisa y sin un reflejo.",
      b: "la cámara se ha ELEVADO en vertical hasta un CENITAL ALTO: la laguna entera como un círculo negro en mitad del cerro, sin una sola luz en toda su superficie.",
    },
    ini: "la superficie está negra y lisa, sin un solo reflejo.",
    fin: "desde muy arriba la laguna entera es un círculo negro y no hay una sola luz en ella: la primera noche pasó y no ocurrió nada.",
  }, "llamas, fuego, hogueras en la orilla, humo, juncos ardiendo, personas"),

  // b11 — El zipa ardió de cólera. Subieron unas llamas bajas.
  escp("b11a", [ref("zipa_bacata"), ref("salon_jeques"), ref("familias_muiscas")], {
    comun: `${ZIPA} ardiendo de cólera contra el jeque, pero ORDENANDO ESPERAR OTRA NOCHE. Las dos cosas a la vez. Objeto ancla: su mano.`,
    camara: {
      a: "PLANO MACRO de su mano cerrándose sobre el borde del banco de madera hasta blanquear los nudillos.",
      b: "la cámara ha SUBIDO a su cara y ha retrocedido: PLANO MEDIO en el que está diciendo la orden de esperar con la voz contenida y la mano todavía apretada.",
    },
    ini: "la mano se cierra sobre la madera hasta que se le blanquean los nudillos.",
    fin: "la cara está dando la orden de esperar una noche más, con la voz contenida y la mano todavía apretada abajo.",
  }, "gritos, romper cosas, violencia, ejecuciones, castigo"),
  esc("b11b", [ref("guatavita_llamas"), ref("laguna_guatavita")], {
    comun: "La segunda noche, SIN QUEMAR JUNCOS y sin humo por ninguna parte, suben unas LLAMAS BAJAS de un azul verdoso pálido que se mueven a ras del agua en tres lenguas separadas. Nadie las fabricó. Objeto ancla: las llamas bajas.",
    camara: {
      a: "PLANO MACRO de la superficie negra con la primera lengua de llama azul verdosa apareciendo a ras del agua, sin quemar nada.",
      b: "la cámara se ha ELEVADO hasta un PICADO ALTO: la laguna entera con las TRES lenguas de llama baja moviéndose separadas sobre el agua, los juncos de la orilla intactos y sin una brizna de humo.",
    },
    ini: "sobre el agua negra aparece una sola lengua de llama azul verdosa, baja y fría.",
    fin: "desde arriba hay tres lenguas moviéndose a ras del agua, separadas entre sí, y en toda la orilla los juncos están intactos y no sube humo de ninguna parte.",
  }, "hogueras, antorchas, juncos ardiendo, humo, explosion, personas encendiendo"),

  // b12 — El zipa se dio por condenado. No sabemos qué pensó primero.
  escp("b12a", [ref("mensajero_quebrada"), ref("zipa_bacata"), ref("salon_jeques")], {
    comun: `Los exploradores vuelven y el zipa se da por condenado. Objeto ancla: su cara al oírlo.`,
    camara: {
      a: "PLANO MEDIO de los dos hombres entrando al salón y hablando, cansados del camino.",
      b: "la cámara ha hecho un PANEO LATERAL hasta el zipa y se ha acercado: PRIMER PLANO de su cara oyéndolo, sin decir nada.",
    },
    ini: "los dos entran y cuentan lo que vieron.",
    fin: "de cerca, la cara del zipa lo ha recibido sin decir una palabra: ya no discute la señal.",
  }, "desmayo, llanto teatral, gritos, violencia, aureola"),
  escp("b12b", [ref("zipa_bacata"), ref("campo_pelado"), ref("salon_jeques")], {
    comun: `Pudo cambiar la guerra o preguntar por esos hombres; NO SABEMOS QUÉ PENSÓ PRIMERO. La duda es del canon y la imagen la conserva: dos caminos posibles y ninguno tomado en cuadro. Objeto ancla: las dos direcciones.`,
    camara: {
      a: "PLANO MEDIO de él de pie en el vano del salón, parado, sin ir hacia ningún lado.",
      b: "la cámara ha RETROCEDIDO fuera y ha subido: PLANO GENERAL en picado del cercado con dos caminos saliendo de él —uno hacia Hunsa y otro hacia el norte— y él quieto en el vano, sin haber pisado ninguno.",
    },
    ini: "está parado en el vano sin moverse hacia ningún lado.",
    fin: "desde arriba salen dos caminos del cercado, uno hacia cada cosa, y él sigue quieto en el vano sin haber puesto un pie en ninguno.",
  }, "texto, letreros, flechas dibujadas, mapas, aureola"),

  // b13 — Llegaron con caballos y metal. No quiso verles la cara.
  esc("b13a", [ref("campo_pelado"), ref("altiplano_noche")], {
    comun: "Llegan con caballos, metal y hambre de oro. Se cuenta por las huellas y el polvo, no por rostros ni banderas. Objeto ancla: el rastro.",
    camara: {
      a: "PLANO MACRO de una huella de casco junto a una pisada descalza, mucho más grande que ella.",
      b: "la cámara ha RETROCEDIDO a lo largo del rastro y ha subido: GRAN PLANO GENERAL del altiplano con una columna avanzando a lo lejos y una nube de polvo cruzando medio valle.",
    },
    ini: "la huella de casco es mucho más grande que la pisada descalza que tiene al lado.",
    fin: "desde arriba, la columna avanza a lo lejos y el polvo que levanta cruza medio valle.",
  }, "conquistadores heroicos, banderas, cruces, rostros en primer plano, epica"),
  escp("b13b", [ref("zipa_bacata"), ref("cercado_bacata")], {
    comun: `Lo que lo mata, según el relato, NO es sólo la conquista: es la terquedad de no querer VERLES LA CARA ni que se la vieran. Se cuenta con una cara que se aparta. Objeto ancla: su cara girada.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara girada hacia la pared, de perfil, sin mirar al frente.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia la entrada: PLANO GENERAL del recinto con el vano abierto y la luz entrando por él, y él al fondo y de espaldas, sin volverse.",
    },
    ini: "tiene la cara girada hacia la pared y no mira al frente.",
    fin: "desde la entrada se ve el recinto entero con él al fondo, de espaldas al vano por el que entra la luz, sin volverse ni una vez.",
  }, "batalla, sangre, cadaver, ejecucion, conquistadores en cuadro"),

  // b14 — Los religiosos lo buscaron. Unos decían que voló.
  escp("b14a", [ref("familias_muiscas"), ref("valle_iraca"), ref("popon_jeque")], {
    comun: `Muchos años después los religiosos buscan a Popón en el valle de Ubaque. Objeto ancla: la búsqueda.`,
    camara: {
      a: "PLANO MEDIO de unos forasteros preguntando a gente del valle, que señala en direcciones distintas.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del valle de Ubaque con los forasteros repartidos por tres sitios distintos y ninguno encontrando nada.",
    },
    ini: "unos forasteros preguntan y la gente señala hacia lados distintos.",
    fin: "desde arriba están buscando en tres sitios a la vez del valle y en ninguno hay nada: ya no está.",
  }, "inquisicion, torturas, hogueras, cruces grandes, violencia"),
  escp("b14b", [ref("familias_muiscas"), ref("valle_iraca"), ref("altiplano_noche")], {
    comun: `Unos decían que hablaba con el diablo; otros, que voló por los aires hasta Santa Marta. NO se afirman ni se niegan: son lo que dijeron otros, y la imagen se queda en las bocas que lo cuentan. Objeto ancla: los que cuentan.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos personas contando, una haciendo con la mano el gesto de algo que sube y se va.",
      b: "la cámara ha girado y basculado hacia arriba en la dirección de ese gesto: PLANO ENTERAMENTE DE CIELO, despejado y vacío, sin ninguna figura en él.",
    },
    ini: "uno cuenta haciendo con la mano el gesto de algo que sube y se va.",
    fin: "arriba no hay nada: el cielo está limpio y vacío de borde a borde, y la historia se queda en lo que dijeron.",
  }, "figura volando, demonio, cuernos, fuego infernal, aureola, angeles"),

  // b15 — Quedó Popón. La laguna sólo encendió una advertencia.
  escp("b15a", [ref("popon_jeque"), ref("salon_jeques"), ref("familias_muiscas")], {
    comun: `En la memoria quedó otro Popón: el que se negó a convertir el miedo del poderoso en una mentira tranquilizadora. Se cuenta volviendo al salón, con los dos tipos de jeque a la vista. Objeto ancla: la diferencia entre los dos.`,
    camara: {
      a: "PLANO MACRO de dos mantas finas dobladas —las del premio— apoyadas en un rincón y cubiertas de polvo.",
      b: "la cámara ha RETROCEDIDO y ha girado hasta la estera que fue de Popón: PLANO MEDIO de esa estera vacía, sin nada encima y sin polvo, en el semicírculo.",
    },
    ini: "las mantas del premio están en un rincón, dobladas y llenas de polvo.",
    fin: "al otro lado del semicírculo, la estera que fue la suya está vacía y limpia: no recibió nada y no se quedó.",
  }, "aureola, monumento, estatua, texto, culto, martir"),
  esc("b15b", [ref("guatavita_llamas"), ref("laguna_guatavita"), ref("altiplano_noche")], {
    comun: "La laguna sólo encendió, POR UN INSTANTE, una advertencia sobre el agua. La señal NO evitó nada. Objeto ancla: el agua después de la señal.",
    camara: {
      a: "PLANO MACRO de la última lengua de llama azul verdosa apagándose sobre el agua negra.",
      b: "la cámara se ha ELEVADO y ha retrocedido hasta un GRAN PLANO GENERAL final del cerro con la laguna negra y quieta abajo y, en el horizonte del valle, la nube de polvo de la columna todavía avanzando.",
    },
    ini: "la última lengua de llama se apaga sobre el agua negra.",
    fin: "desde arriba la laguna está otra vez negra y quieta, y en el horizonte del valle la nube de polvo sigue avanzando igual que antes: el aviso llegó y no detuvo nada.",
  }, "llamas permanentes, milagro, aureola, personas, texto, moraleja"),
]);
