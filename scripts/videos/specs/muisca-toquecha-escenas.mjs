// Keyframes de Toquechá y Toquilla — 12 bloques × 2 escenas × 2 cuadros
// = 48 imágenes ≈ 120 s.
// Guion: guion-toquecha-y-toquilla-v2.json (N=12)
// Acta:  acta-toquecha-y-toquilla.json (24 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Los venados de barro SÍ COBRAN VIDA y el relato no lo explica. NO
//   convertirlo en sueño ni en metáfora: al amanecer hay CUATRO HUELLAS que
//   ninguna mano hizo, y ésa es la prueba que la fuente deja.
// · Toquilla NO muere por descuido suyo: estaba apartando a Chihica de los
//   cazadores. Su muerte es la consecuencia del arco que NO SE BAJÓ.
// · Toquechá NO es castigado: nadie lo condena ni lo persigue. Lo que queda
//   es una costumbre —bajar el arco y esperar— y ésa es toda la sanción.
// · Chihica NO huye por miedo: se queda, acompaña el entierro, apoya el
//   hocico en la tierra removida y sólo entonces se va con el venado grande.
// · El cierre NO afirma que el venado sea Chihica: deja las dos
//   posibilidades abiertas, y por eso hay que bajar el arco. LA DUDA ES LA
//   REGLA y la imagen no la resuelve.
//
// TRATO: la muerte no se muestra con sangre. Se cuenta con las manos que
// intentan tapar algo, con la manta y con la tierra.
//
// GUION DE LUZ: niebla del sueño → arcilla húmeda de la ribera → luna sobre
// las figuras → cuatro huellas al amanecer → sendero de frailejones → días de
// Chihica → mañana de caza → bruma y flecha → tierra fría → orilla donde
// cobraron vida → hocico en la tierra removida → niebla sobre las huellas.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-toquecha-escenas";
export const OUT_DIR = "muiscas/videos/toquecha-y-toquilla/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; sangre abundante, herida explicita, flecha clavada en primer plano, agonia; venado con rostro humano, hibrido, criatura fantastica; magia visible al cobrar vida, resplandor, particulas, rayos; fantasmas, apariciones, figura translucida; castigo al cazador, linchamiento, prision, culpa dibujada; caceria heroica, trofeos, cabezas de animales";
export const PALETTE =
  "gris de arcilla humeda, blanco de niebla de Tota, pardo de lomo de venado, verde apagado de frailejon, crema de algodon crudo, azul frio de agua; sin saturacion ni neones";

const TOQUECHA =
  "EL MISMO Toquechá de la referencia (hombre de unos veinticuatro años, rostro concentrado, pelo negro liso recogido con una cinta angosta, manta corta de algodón crudo ceñida a la cintura, torso desnudo, descalzo y con las manos y los antebrazos manchados de arcilla)";
const TOQUILLA =
  "LA MISMA Toquilla de la referencia (mujer de unos veintidós años, rostro sereno y despierto, pelo negro liso muy largo suelto sobre un hombro, manta de algodón crudo del pecho a la pantorrilla anudada al hombro con una cenefa tejida)";
const VENADOS =
  "LOS MISMOS venados de la referencia (dos figuras de barro gris húmedo, una grande y otra pequeña, de patas finas y lomos alisados con agua, con los ojos marcados con la punta de una espina y las orejas apenas levantadas)";

export const ITEMS = armar([
  // b1 — Soñó con un venado inmóvil en Tota.
  esc("b1a", [ref("orilla_tota_niebla")], {
    comun: "El sueño. LA MISMA orilla de Tota de la referencia con niebla baja, y un venado inmóvil con las patas hundidas en ella. Objeto ancla: el venado quieto.",
    camara: {
      a: "PLANO MACRO de las patas de un venado hundidas en la niebla, sin que se vea el resto del cuerpo.",
      b: "la cámara ha SUBIDO despacio por el cuerpo y ha retrocedido: PLANO MEDIO del venado entero, quieto en la orilla, de perfil y sin moverse.",
    },
    ini: "sólo se ven unas patas finas metidas en la niebla, quietas.",
    fin: "el venado entero está de perfil en la orilla, inmóvil, con el agua quieta detrás y la niebla borrando la otra orilla.",
  }, "venado con rostro humano, hibrido, resplandor, fantasma, magia"),
  escp("b1b", [ref("toquilla_joven"), ref("orilla_tota_niebla"), ref("toquecha_alfarero")], {
    comun: `Cuando el venado vuelve la cabeza ya NO tiene hocico sino el rostro de una joven que él nunca ha visto, y despierta antes de oír su nombre. El cambio ocurre FUERA de cuadro: la cámara no lo enseña. Objeto ancla: el giro de la cabeza.`,
    camara: {
      a: "PLANO MEDIO del venado empezando a girar la cabeza, con el hocico todavía de perfil.",
      b: "la cámara ha girado con él y ha seguido hasta pasar de largo: PLANO MEDIO CORTO de la cara de Toquilla ya de frente, sin que se haya visto ningún tránsito, y el cuerpo fuera de cuadro.",
    },
    ini: "el venado empieza a volver la cabeza y el hocico todavía se ve de perfil.",
    fin: "al terminar el giro, lo que hay de frente es la cara de una mujer que él no conoce; el cuerpo queda fuera del cuadro y no se ha visto ningún paso intermedio.",
  }, "hibrido, cuerpo mutando, mitad animal mitad mujer, horror, magia"),

  // b2 — Tomó arcilla y modeló dos venados.
  escp("b2a", [ref("toquecha_alfarero"), ref("orilla_tota_niebla")], {
    comun: `Durante varios días trabaja en silencio: toma arcilla húmeda de la ribera. Objeto ancla: la arcilla en sus manos.`,
    camara: {
      a: "PLANO MACRO de sus manos hundiéndose en la arcilla gris de la ribera y sacando un puñado.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la orilla con él sentado solo, trabajando, y el lago entero detrás.",
    },
    ini: "las manos sacan un puñado de arcilla gris y húmeda de la ribera.",
    fin: "desde lejos está sentado solo en la orilla, trabajando, con el lago y la niebla detrás y nadie alrededor.",
  }, "torno de alfarero, hornos, herramientas modernas, magia"),
  esc("b2b", [ref("venados_arcilla")], {
    comun: `${VENADOS}: uno grande y otro pequeño, de patas finas y lomos alisados con agua. Les marca los OJOS con una espina y los deja frente al lago para que el viento los seque. Objeto ancla: los ojos marcados.`,
    camara: {
      a: "PLANO MACRO de la punta de una espina hundiéndose en el barro para marcar un ojo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de las dos figuras puestas una junto a otra sobre una piedra plana, mirando hacia el lago.",
    },
    ini: "la espina hunde su punta en el barro y deja el hueco de un ojo.",
    fin: "las dos figuras de barro están juntas sobre la piedra, la grande y la pequeña, con los cuatro ojos marcados y mirando hacia el agua.",
  }, "resplandor, magia, ojos que brillan, personas, torno, horno"),

  // b3 — La luna subió. El venado grande dobló una pata.
  esc("b3a", [ref("venados_arcilla"), ref("altiplano_noche"), ref("orilla_tota_niebla")], {
    comun: "La luna sube sobre la orilla. Las dos figuras siguen en la piedra, secándose. Objeto ancla: la luna sobre las figuras.",
    camara: {
      a: "PLANO MEDIO de las dos figuras de barro en la piedra, con la última luz de la tarde.",
      b: "la cámara ha RETROCEDIDO y ha basculado hacia arriba: PLANO GENERAL nocturno de la orilla con la luna ya alta y las dos figuras pequeñas en su piedra, todavía quietas.",
    },
    ini: "las dos figuras están en la piedra con la última luz del día encima.",
    fin: "la luna ya está alta sobre la orilla y las dos figuras siguen quietas en la piedra, ahora en plata.",
  }, "magia, resplandor, particulas, rayos, personas, fantasmas"),
  esc("b3b", [ref("venados_arcilla"), ref("orilla_tota_niebla")], {
    comun: `El venado grande DOBLA una pata de barro, luego la otra, y el pequeño sacude las orejas y corre detrás. Ocurre y el relato no lo explica: NO hay resplandor, ni magia visible, ni transición. La arcilla simplemente se mueve. Objeto ancla: la pata que se dobla.`,
    camara: {
      a: "PLANO MACRO de una pata de barro gris doblándose por la mitad, agrietando la superficie alisada.",
      b: "la cámara ha RETROCEDIDO y ha bajado al suelo: PLANO MEDIO BAJO de los dos venados de barro ya bajados de la piedra y andando por la arena, el grande delante y el pequeño detrás.",
    },
    ini: "una pata de barro se dobla por la mitad y la superficie alisada se agrieta.",
    fin: "los dos están abajo, en la arena, andando: el grande delante y el pequeño detrás sacudiendo las orejas; siguen siendo de barro gris.",
  }, "resplandor, particulas, transformacion en animal real, magia, rayos, musica magica"),

  // b4 — Cuatro huellas que ninguna mano hizo. Encontró a la joven.
  escp("b4a", [ref("orilla_tota_niebla"), ref("toquecha_alfarero")], {
    comun: `Al amanecer quedan sobre la orilla CUATRO HUELLAS que ninguna mano hizo. Ésa es la prueba que la fuente deja. Objeto ancla: las huellas.`,
    camara: {
      a: "PLANO MACRO de una huella de pezuña marcada en la arena oscura, con el borde limpio.",
      b: "la cámara ha RETROCEDIDO a lo largo del rastro y ha subido: PLANO GENERAL de la orilla al amanecer con la piedra plana VACÍA y dos rastros de huellas saliendo de ella hacia los frailejones.",
    },
    ini: "una huella de pezuña limpia en la arena, sola.",
    fin: "desde arriba, la piedra donde estaban las figuras está vacía y de ella salen dos rastros de huellas hacia el sendero: nadie más ha pisado la arena.",
  }, "personas, magia, resplandor, figuras rotas, alguien llevandoselas"),
  escp("b4b", [ref("toquecha_alfarero"), ref("toquilla_joven"), ref("sendero_territorio")], {
    comun: `${TOQUECHA} sigue a los animales por un sendero de frailejones y encuentra a ${TOQUILLA}, la joven de su sueño. Objeto ancla: el final del rastro.`,
    camara: {
      a: "PLANO MACRO de las huellas continuando entre los frailejones, más adelante.",
      b: "la cámara ha SEGUIDO el rastro y ha subido a la altura de los ojos: PLANO MEDIO con ella de pie al final del sendero, exactamente la cara del sueño.",
    },
    ini: "las huellas siguen entre los frailejones y no se ve adónde llevan.",
    fin: "al final del rastro está ella de pie, y es la misma cara que él vio en el sueño.",
  }, "aureola, resplandor, flechazo dibujado, corazones, magia"),

  // b5 — «El pequeño llegó hasta mi casa». (CITA)
  escp("b5a", [ref("toquilla_joven"), ref("toquecha_alfarero")], {
    comun: `Se llama Toquilla y NO PARECE SORPRENDERSE cuando él le habla de la arcilla. Objeto ancla: su cara al oírlo.`,
    camara: {
      a: "PLANO MEDIO CORTO de él contándole lo de la arcilla, con las manos todavía manchadas.",
      b: "la cámara ha RODEADO hasta ella: PLANO MEDIO CORTO de su cara escuchándolo sin asombro, asintiendo despacio.",
    },
    ini: "él le cuenta lo de la arcilla con las manos manchadas por delante.",
    fin: "ella lo escucha sin asombrarse y asiente despacio: ya sabía algo de esto.",
  }, "asombro teatral, desmayo, gritos, aureola, magia"),
  escp("b5b", [ref("toquilla_joven"), ref("venados_arcilla"), ref("casa_barro_paja")], {
    comun: `Ella dice que EL PEQUEÑO LLEGÓ HASTA SU CASA y que le puso Chihica. Objeto ancla: el venado pequeño junto a la casa.`,
    camara: {
      a: "PLANO MEDIO CORTO de ella diciéndolo y girando la cabeza hacia su casa.",
      b: "la cámara ha girado y AVANZADO en esa dirección: PLANO MEDIO del cercado con el venado pequeño echado junto a la pared, tranquilo, como si viviera ahí.",
    },
    ini: "lo dice y gira la cabeza hacia su casa.",
    fin: "junto a la pared del cercado está el venado pequeño echado, tranquilo y en su sitio, como si llevara días ahí.",
  }, "collar, correa, jaula, mascota domesticada, magia, aureola"),

  // b6 — Chihica comía de su mano. Aprendieron a quererse buscándolo.
  escp("b6a", [ref("toquilla_joven"), ref("venados_arcilla"), ref("casa_barro_paja")], {
    comun: `Chihica crece cerca de ella: come de su mano, duerme junto al cercado y desaparece horas enteras para volver oliendo a monte. Objeto ancla: su mano abierta.`,
    camara: {
      a: "PLANO MACRO de su mano abierta con hojas tiernas y el hocico del venado tomándolas.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del cercado con el venado echado junto a la pared y el sendero del monte abierto al fondo, por donde va y viene.",
    },
    ini: "el hocico come de la mano abierta, sin miedo.",
    fin: "desde lejos, el venado está echado junto a la pared y al fondo se ve abierto el sendero del monte: nadie lo ata ni lo encierra.",
  }, "correa, jaula, collar, domesticacion forzada, circo"),
  escp("b6b", [ref("toquecha_alfarero"), ref("toquilla_joven"), ref("orilla_tota_niebla")], {
    comun: `Aprenden a quererse MIENTRAS LO BUSCAN entre la niebla: donde el venado se detiene, ellos también. El amor se cuenta con la búsqueda, no con una escena. Objeto ancla: los dos buscando.`,
    camara: {
      a: "PLANO MEDIO de los dos separados entre la niebla, cada uno mirando hacia un lado distinto.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL en picado del páramo con los dos parados en el mismo punto, juntos, donde el venado se ha detenido.",
    },
    ini: "están separados en la niebla, buscando cada uno por su lado.",
    fin: "desde arriba se han juntado en el mismo punto, parados donde el venado se paró, hombro con hombro.",
  }, "beso, abrazo, escena romantica explicita, desnudez, corazones"),

  // b7 — Salió a cazar lejos. La flecha cruzó la bruma.
  escp("b7a", [ref("toquecha_alfarero"), ref("sendero_territorio")], {
    comun: `Una mañana ${TOQUECHA} sale a cazar LEJOS del poblado. Objeto ancla: el arco.`,
    camara: {
      a: "PLANO MACRO del arco de madera colgado del hombro, con la cuerda tensa y sin flecha puesta.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del páramo con él pequeño y solo, lejos del poblado, entre la bruma.",
    },
    ini: "el arco cuelga del hombro, sin flecha puesta.",
    fin: "desde arriba está solo en mitad del páramo, muy lejos del poblado, con la bruma tapando lo que hay a los lados.",
  }, "caceria heroica, trofeos, animales muertos, sangre, jauria"),
  escp("b7b", [ref("toquecha_alfarero"), ref("sendero_territorio")], {
    comun: `Ve moverse unas ramas, distingue un LOMO PARDO, tensa el arco, y la flecha cruza la bruma. NO se ve qué hay detrás de las ramas: él tampoco lo vio. Objeto ancla: las ramas que se mueven.`,
    camara: {
      a: "PLANO MEDIO CORTO de las ramas moviéndose en la bruma, con algo pardo detrás que no se distingue.",
      b: "la cámara ha girado y RETROCEDIDO hasta él: PLANO MEDIO de Toquechá con el arco tensado y la flecha ya saliendo, con la bruma entre él y lo que apunta.",
    },
    ini: "las ramas se mueven y detrás hay algo pardo que no se distingue.",
    fin: "él ha soltado la flecha con el arco todavía tensado en el gesto, y entre él y lo que apuntaba sólo hay bruma.",
  }, "flecha clavada, sangre, herida, agonia, camara lenta, gritos"),

  // b8 — No oyó el salto de un animal sino su voz.
  escp("b8a", [ref("toquecha_alfarero")], {
    comun: `No oye el salto de un animal SINO LA VOZ DE TOQUILLA. Se cuenta con su cara al oírla. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MEDIO de él bajando el arco después del disparo, todavía tranquilo.",
      b: "la cámara ha AVANZADO hasta su cara: PRIMER PLANO de Toquechá con la expresión rompiéndose al reconocer lo que acaba de oír.",
    },
    ini: "baja el arco después del disparo, con la cara todavía tranquila.",
    fin: "de muy cerca, la cara se le ha roto: lo que oyó no era un animal y lo ha reconocido.",
  }, "grito teatral, sangre, camara lenta, aureola, fantasma"),
  escp("b8b", [ref("toquilla_joven"), ref("venados_arcilla"), ref("sendero_territorio")], {
    comun: `Ella había seguido a Chihica PARA APARTARLO DE LOS CAZADORES, y la flecha la alcanzó antes de que pudiera llamarlo. NO fue un descuido suyo: estaba protegiéndolo. Objeto ancla: su brazo extendido hacia el venado.`,
    camara: {
      a: "PLANO MEDIO de ella en el suelo entre la maleza, con el brazo todavía extendido en la dirección del venado.",
      b: "la cámara ha SEGUIDO la dirección de ese brazo: PLANO MEDIO del venado pequeño parado a unos pasos, ileso, mirando hacia ella.",
    },
    ini: "está en el suelo con el brazo todavía extendido hacia un lado.",
    fin: "al final de ese brazo está el venado pequeño, ileso y parado, mirándola: lo que hacía era apartarlo.",
  }, "sangre abundante, flecha visible, agonia, gritos, camara lenta"),

  // b9 — La sostuvo contra la tierra fría. Nada bastó.
  escp("b9a", [ref("toquecha_alfarero"), ref("toquilla_joven")], {
    comun: `${TOQUECHA} corriendo y sosteniéndola contra la tierra fría. Objeto ancla: sus brazos alrededor de ella.`,
    camara: {
      a: "PLANO GENERAL del páramo con él corriendo hacia un punto entre la maleza.",
      b: "la cámara ha AVANZADO hasta el suelo: PLANO MEDIO BAJO de los dos en la tierra, él sosteniéndola y ella con la cabeza apoyada en su brazo.",
    },
    ini: "corre por el páramo hacia un punto entre la maleza.",
    fin: "está en la tierra con ella sostenida entre los brazos y la cabeza apoyada en su antebrazo, los dos quietos.",
  }, "sangre, herida explicita, flecha clavada, agonia, gritos"),
  escp("b9b", [ref("toquecha_alfarero"), ref("toquilla_joven")], {
    comun: `Quiere cubrir la herida con las manos, con la manta, con todas las palabras que nunca había dicho, y NADA BASTA. La herida no se ve: se ve lo que intenta ponerle encima. Objeto ancla: sus manos y la manta.`,
    camara: {
      a: "PLANO MACRO de sus dos manos apretadas una sobre otra contra la manta, sin que se vea nada debajo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL en picado del páramo con los dos pequeños en la tierra y la bruma cerrándose alrededor.",
    },
    ini: "las dos manos aprietan una sobre otra contra la manta, y debajo no se ve nada.",
    fin: "desde arriba son dos figuras pequeñas en mitad del páramo, con la bruma cerrándose alrededor y nadie más en varios kilómetros.",
  }, "sangre, herida, agonia, gritos, camara lenta, aureola"),

  // b10 — Chihica no huyó. Abrió una sepultura en la arcilla.
  escp("b10a", [ref("toquecha_alfarero"), ref("toquilla_joven"), ref("venados_arcilla"), ref("orilla_tota_niebla")], {
    comun: `Chihica permanece cerca y NO HUYE cuando ${TOQUECHA} la carga hasta la orilla donde los venados cobraron vida. Objeto ancla: el venado acompañando.`,
    camara: {
      a: "PLANO MEDIO por detrás de él cargándola, andando por el sendero.",
      b: "la cámara se ha ELEVADO y ha retrocedido: PLANO GENERAL en picado del sendero con él cargándola y, unos pasos detrás, el venado pequeño siguiéndolos sin apartarse.",
    },
    ini: "carga con ella por el sendero, de espaldas.",
    fin: "desde arriba se ve que el venado va detrás de ellos a unos pasos, siguiéndolos por el mismo camino y sin desviarse.",
  }, "huida del animal, jauria, cazadores persiguiendo, sangre"),
  escp("b10b", [ref("toquecha_alfarero"), ref("orilla_tota_niebla")], {
    comun: `Allí abre una sepultura EN LA ARCILLA —la misma de la que salieron los venados— y mientras trabaja el lago recibe la tarde SIN UN SOLO REFLEJO. Objeto ancla: la arcilla que abre.`,
    camara: {
      a: "PLANO MACRO de sus manos manchadas abriendo la arcilla gris de la ribera, la misma que modeló.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia el lago: PLANO GENERAL del agua recibiendo la luz de la tarde sin devolver un solo reflejo, mate y apagada de borde a borde.",
    },
    ini: "sus manos abren la arcilla gris de la ribera, la misma de la que salieron los venados.",
    fin: "el lago entero recibe la tarde sin devolver un solo reflejo: la superficie está mate y apagada de borde a borde.",
  }, "ataud, cruces, funeral europeo, llanto teatral, aureola"),

  // b11 — Chihica apoyó el hocico en la tierra removida.
  esc("b11a", [ref("venados_arcilla"), ref("orilla_tota_niebla")], {
    comun: `Al terminar, Chihica APOYA EL HOCICO en la tierra removida. Se queda hasta el final. Objeto ancla: el hocico sobre la tierra.`,
    camara: {
      a: "PLANO MEDIO del venado pequeño acercándose despacio a la tierra removida de la orilla.",
      b: "la cámara ha BAJADO hasta el suelo: PLANO MACRO del hocico apoyado sobre la arcilla removida, quieto, con las huellas del venado alrededor.",
    },
    ini: "el venado se acerca despacio a la tierra removida.",
    fin: "el hocico está apoyado sobre la arcilla y no se mueve, con sus propias huellas marcadas alrededor.",
  }, "lagrimas del animal, antropomorfismo, aureola, fantasma, magia"),
  esc("b11b", [ref("venados_arcilla"), ref("sendero_territorio"), ref("orilla_tota_niebla")], {
    comun: `Y SÓLO ENTONCES camina al monte. El venado grande lo esperaba. Objeto ancla: los dos venados juntos.`,
    camara: {
      a: "PLANO MEDIO del venado pequeño separándose de la tierra removida y empezando a andar hacia el sendero.",
      b: "la cámara lo ha SEGUIDO y ha subido: PLANO GENERAL del sendero de frailejones con el venado grande esperándolo a media ladera y los dos juntándose para subir.",
    },
    ini: "el venado pequeño se separa de la tierra y echa a andar hacia el sendero.",
    fin: "a media ladera lo esperaba el venado grande: los dos se han juntado y suben hacia el monte, uno detrás del otro.",
  }, "figuras humanas, fantasmas, aureola, magia, resplandor"),

  // b12 — Quien ve un venado junto a Tota baja el arco.
  escp("b12a", [ref("familias_muiscas"), ref("orilla_tota_niebla")], {
    comun: `Quien ve un venado junto a Tota BAJA EL ARCO. Es la costumbre que quedó, y es toda la sanción del relato. Objeto ancla: el arco que se baja.`,
    camara: {
      a: "PLANO MEDIO CORTO de un cazador tensando el arco hacia la niebla, con la flecha puesta.",
      b: "la cámara ha RODEADO hasta su otro costado: PLANO MEDIO del mismo arco ya bajado, con la flecha retirada de la cuerda y la mano abierta.",
    },
    ini: "el arco está tensado hacia la niebla con la flecha puesta.",
    fin: "el arco ha bajado del todo, la flecha ya no está en la cuerda y la mano está abierta: nadie lo obligó.",
  }, "castigo, prision, linchamiento, culpa dibujada, texto, moraleja"),
  esc("b12b", [ref("orilla_tota_niebla"), ref("venados_arcilla")], {
    comun: "Puede ser un animal que busca agua, O puede ser Chihica cuidando el sueño de Toquilla. El cierre NO lo afirma: la duda es la regla, y por eso se baja el arco. Objeto ancla: el venado en la niebla, sin resolver.",
    camara: {
      a: "PLANO MEDIO de un venado pardo parado en la orilla, medio tapado por la niebla, sin que se distinga cuál es.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final del lago con el venado convertido en una mancha pequeña en la orilla y la niebla cubriendo poco a poco las huellas que ninguna mano hizo.",
    },
    ini: "un venado pardo está parado en la orilla, medio tapado por la niebla: no se sabe cuál es.",
    fin: "desde muy lejos ya es sólo una mancha en la orilla, y la niebla va cubriendo las huellas del suelo: nunca se va a saber.",
  }, "rostro humano en el venado, fantasma, aureola, texto, personas"),
]);
