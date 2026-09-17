// Keyframes de La aparición de los primeros seres humanos — 9 bloques × 2
// escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-la-aparicion-del-hombre-v2.json (N=9)
// Acta:  acta-la-aparicion-del-hombre.json (14 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// REHECHO: este mito ya tenía un video producido con la tubería vieja (un
// cuadro por escena, sin par A→B). Se rehace entero con la estructura nueva,
// por decisión del usuario del 2026-09-17.
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · NO HAY LUZ EN TODO EL RELATO. La creación entera ocurre a oscuras y la
//   gente se conoce POR EL TACTO Y POR LA VOZ. Poner sol o antorchas destruye
//   el nudo: ni una llama en los treinta y seis cuadros.
// · Son DOS MATERIALES, no uno: barro amarillo y tallos huecos entrelazados.
//   Los segundos SUENAN COMO UN SUSPIRO cuando el aire los atraviesa, y esa
//   diferencia se conserva en cuadro.
// · Los creadores NO son dioses distantes: son dos caciques, tío y sobrino,
//   que recorrían la tierra sin apurarse y estaban SOLOS.
//
// DESLINDE CONTRA `el-sol-y-la-luna`: allí el mismo episodio es el prólogo de
// la subida al cielo y termina con las dos luces. Aquí el mito ES la
// oscuridad: no hay amanecer al final y el último cuadro sigue sin astros.
//
// GUION DE LUZ: no hay. Todo el video ocurre en una claridad mínima y sin
// fuente, que apenas separa un plano de otro. El material se distingue por
// textura y no por color.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-aparicion-hombre-escenas";
export const OUT_DIR = "muiscas/videos/la-aparicion-del-hombre/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; sol, luna, estrellas, antorchas, fogatas, lamparas, cualquier fuente de luz visible; amanecer, alba, claridad dorada; dioses en el cielo, aureolas, rayos, resplandor, particulas; Genesis biblico, Adan y Eva, manzana, serpiente, costilla; talleres de escultor, tornos, hornos, herramientas modernas; rostros de terror, monstruos, figuras deformes";
export const PALETTE =
  "negro de tiniebla sin dias, ocre amarillo de barro humedo, beige palido de tallo hueco seco, gris de ceniza; la claridad es minima y no tiene fuente; sin saturacion y sin un solo punto de luz";

const SOGA =
  "EL MISMO cacique de Sogamoso de la referencia (hombre de unos cincuenta años, rostro sereno, pelo negro largo recogido en un moño alto, manta rectangular de algodón crudo anudada sobre el hombro derecho con una cenefa geométrica sobria en ocre)";
const RAMI =
  "EL MISMO Ramiriquí de la referencia (joven de unos veinticinco años y algo más bajo, rostro atento, pelo negro liso hasta los hombros sujeto por una cinta tejida angosta, manta corta de algodón crudo sobre el hombro y ceñida a la cintura)";

export const ITEMS = armar([
  // b1 — La tierra a oscuras. Dos caciques la recorrían.
  esc("b1a", [ref("altiplano_noche"), ref("mundo_primera_luz")], {
    comun: "Tiniebla. EL MISMO altiplano de la referencia con el suelo, las aguas y las plantas ya existiendo, y ni una sola fuente de luz. La claridad es mínima y no tiene origen. Objeto ancla: el suelo bajo la oscuridad.",
    camara: {
      a: "PLANO MACRO de la tierra y una mata de hierba en la penumbra, tan cerca que se distingue la textura y no el color.",
      b: "la cámara se ha ELEVADO en vertical hasta un GRAN PLANO GENERAL: el altiplano entero en negro, con el agua y las lomas apenas separándose unas de otras.",
    },
    ini: "sólo se ve la textura del suelo y de una mata, sin color.",
    fin: "desde muy arriba está el mundo entero ya hecho —tierra, agua, plantas— y completamente a oscuras: no hay una sola luz en ninguna parte.",
  }, "sol, luna, estrellas, antorchas, amanecer, aureola"),
  escp("b1b", [ref("sogamoso_cacique"), ref("ramiriqui_cacique"), ref("altiplano_noche")], {
    comun: `${SOGA} y su sobrino ${RAMI} recorriendo la tierra SIN APURARSE. Son dos caciques, no dos dioses. Objeto ancla: sus pasos.`,
    camara: {
      a: "PLANO MACRO de cuatro pies descalzos andando despacio sobre la tierra a oscuras, sin prisa.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL nocturno con las dos siluetas caminando juntas por el llano, pequeñas y sin nada alrededor.",
    },
    ini: "cuatro pies descalzos avanzan despacio en la oscuridad.",
    fin: "desde lejos son dos siluetas caminando juntas por un llano vacío, sin prisa y sin nadie más.",
  }, "aureolas, capas divinas, resplandor, tronos, nubes"),

  // b2 — No había nadie más. Decidieron que debía haber otras personas.
  escp("b2a", [ref("sogamoso_cacique"), ref("ramiriqui_cacique"), ref("mundo_primera_luz")], {
    comun: `El suelo, las aguas y las plantas ya existen, pero NO HAY NADIE MÁS con quien compartirlos. La falta se cuenta con el vacío. Objeto ancla: el espacio sin nadie.`,
    camara: {
      a: "PLANO MEDIO de los dos parados, mirando hacia el llano, callados.",
      b: "la cámara ha RETROCEDIDO muchísimo por detrás de ellos: GRAN PLANO GENERAL en el que son dos puntos minúsculos en un mundo entero vacío y a oscuras.",
    },
    ini: "los dos están parados mirando el llano, sin decir nada.",
    fin: "desde muy lejos se ve lo que tienen alrededor: un mundo completo y vacío, sin una casa, sin un camino y sin nadie.",
  }, "aureola, templos, altares, angeles, resplandor"),
  escp("b2b", [ref("sogamoso_cacique"), ref("ramiriqui_cacique")], {
    comun: `Los dos DECIDEN que debe haber otras personas. Es una conversación entre dos, no un decreto. Objeto ancla: las dos caras a oscuras.`,
    camara: {
      a: "PLANO MEDIO de los dos sentados frente a frente en el suelo, apenas visibles.",
      b: "la cámara ha AVANZADO hasta ponerse entre ellos: PLANO MEDIO CORTO con una cara en cada mitad del cuadro, hablando en la penumbra.",
    },
    ini: "están sentados frente a frente en el suelo, casi sin distinguirse.",
    fin: "de cerca, cada uno ocupa una mitad del cuadro y están hablando: lo deciden entre los dos.",
  }, "decreto divino, rayos, voz del cielo, aureola, texto"),

  // b3 — Buscaron tierra amarilla. La humedecieron y la modelaron.
  esc("b3a", [ref("figura_barro_amarillo"), ref("mundo_primera_luz")], {
    comun: "Buscan una TIERRA AMARILLA que pueda sostenerse entre los dedos, y la humedecen. Objeto ancla: el barro en las manos.",
    camara: {
      a: "PLANO MACRO de unos dedos apretando tierra seca que se deshace y se escurre.",
      b: "la cámara ha hecho un PANEO LATERAL hasta otro punto del suelo y se ha acercado: PLANO MACRO de la misma mano apretando una tierra amarilla que ESTA VEZ se sostiene entre los dedos, ya humedecida.",
    },
    ini: "la tierra seca se deshace entre los dedos y se escurre.",
    fin: "en otro sitio, la misma mano aprieta una tierra amarilla humedecida que se queda con la forma de los dedos: ésta sí sirve.",
  }, "torno, horno, herramientas modernas, magia, resplandor"),
  escp("b3b", [ref("sogamoso_cacique"), ref("ramiriqui_cacique"), ref("figura_barro_amarillo")], {
    comun: `Empiezan a modelarla EN LO OSCURO. Trabajan a ciegas y con las manos. Objeto ancla: las manos sobre el barro.`,
    camara: {
      a: "PLANO MACRO de cuatro manos trabajando el mismo bulto de barro amarillo, sin que se vea nada más.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de los dos sentados en la tierra con el bulto entre ellos, a oscuras, trabajando sin mirar.",
    },
    ini: "cuatro manos amasan el mismo bulto de barro amarillo.",
    fin: "desde más lejos, los dos están sentados en el suelo con el bulto entre ellos y trabajan con la cara vuelta hacia otro lado: no pueden ver lo que hacen.",
  }, "taller de escultor, luz de trabajo, lamparas, magia, resplandor"),

  // b4 — Piernas para subir lomas, manos para el trabajo. Por el tacto.
  esc("b4a", [ref("figura_barro_amarillo")], {
    comun: "Van formando PIERNAS capaces de subir lomas, MANOS para el trabajo y ROSTROS que algún día podrán mirarse. El rostro sale apenas insinuado: todavía no hay ojos. Objeto ancla: las partes que se forman.",
    camara: {
      a: "PLANO MACRO de una pierna de barro tomando forma entre unos dedos, con las huellas dactilares marcadas.",
      b: "la cámara ha SUBIDO por la figura a lo largo del cuerpo: PLANO MEDIO de la figura entera de barro ocre a medio terminar, con las manos ya formadas y el rostro apenas insinuado —cejas y nariz marcadas con el dedo, SIN ojos—.",
    },
    ini: "una pierna de barro va tomando forma entre los dedos, con las huellas dactilares encima.",
    fin: "la figura entera está a medio terminar: piernas y manos hechas, y en la cara sólo cejas y nariz marcadas con el dedo, sin ojos todavía.",
  }, "estatua de marmol, maniqui, rostro terminado con ojos, magia, resplandor"),
  escp("b4b", [ref("sogamoso_cacique"), ref("ramiriqui_cacique"), ref("figura_barro_amarillo")], {
    comun: `Como NO hay luz, reconocen cada figura POR EL TACTO: el hombro, la nuca, los dedos recién hechos. Objeto ancla: las manos reconociendo.`,
    camara: {
      a: "PLANO MACRO de una mano recorriendo el hombro y la nuca de una figura de barro, comprobándola a ciegas.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO del cacique con la cara VUELTA HACIA OTRO LADO mientras sus manos siguen comprobando la figura, porque mirar no sirve de nada.",
    },
    ini: "una mano recorre el hombro y la nuca de la figura, despacio.",
    fin: "desde más lejos se ve por qué lo hace así: tiene la cara vuelta hacia otro lado y las manos siguen trabajando solas; aquí mirar no sirve.",
  }, "lamparas, antorchas, luz de trabajo, aureola, magia"),

  // b5 — Cortaron tallos altos y huecos. Les entrelazaron las fibras.
  esc("b5a", [ref("figura_tallos_huecos")], {
    comun: "Para otros cuerpos cortan TALLOS ALTOS Y HUECOS. El segundo material es distinto del primero y se nota de lejos. Objeto ancla: el canto hueco del tallo.",
    camara: {
      a: "PLANO MACRO del corte de un tallo, con el hueco del interior a la vista y las fibras del borde.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de un manojo de tallos secos color beige pálido cortados y apoyados en el suelo, junto a un bulto de barro ocre.",
    },
    ini: "el corte del tallo deja ver el hueco de dentro y las fibras del borde.",
    fin: "en el suelo hay un manojo de tallos beige cortados y, al lado, un bulto de barro ocre: los dos materiales juntos y bien distintos.",
  }, "maquinas, hachas de metal, sierras, magia, resplandor"),
  esc("b5b", [ref("figura_tallos_huecos")], {
    comun: "Los DOBLAN con cuidado y les ENTRELAZAN LAS FIBRAS. Objeto ancla: el trenzado.",
    camara: {
      a: "PLANO MACRO de dos tallos doblándose y cruzándose, atados con una fibra en el cruce.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO del torso humano ya trenzado con los tallos secos, hueco por dentro, de modo que se ve el aire pasar entre las cañas.",
    },
    ini: "dos tallos se doblan y se cruzan, atados con una fibra en el cruce.",
    fin: "el torso está ya trenzado con los tallos y es hueco por dentro: entre caña y caña se ve el otro lado.",
  }, "estatua, maniqui, tela, ropa, magia, resplandor"),

  // b6 — Eran ligeros. El aire les pasaba por dentro y sonaba.
  esc("b6a", [ref("figura_tallos_huecos"), ref("figura_barro_amarillo")], {
    comun: "Son LIGEROS, pero se mantienen en pie. La diferencia de peso entre los dos materiales se ve. Objeto ancla: la base de cada figura.",
    camara: {
      a: "PLANO MACRO de la base de una figura de barro, hundida en la tierra por su propio peso.",
      b: "la cámara ha hecho un PANEO LATERAL hasta la otra: PLANO MACRO de la base de la figura de tallos, apoyada encima de la tierra sin hundirla nada.",
    },
    ini: "la figura de barro se ha hundido en la tierra por su propio peso.",
    fin: "la de tallos está apoyada encima sin marcar el suelo: pesa mucho menos y aun así se sostiene.",
  }, "levitacion, magia, resplandor, cuerdas, soportes visibles"),
  esc("b6b", [ref("figura_tallos_huecos"), ref("altiplano_noche")], {
    comun: "El aire les pasa POR DENTRO y suena PARECIDO A UN SUSPIRO. Se cuenta con lo que mueve el aire, porque el sonido no se ve. Objeto ancla: el aire entre las cañas.",
    camara: {
      a: "PLANO MACRO de una fibra suelta del trenzado vibrando con el aire que pasa entre las cañas.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL nocturno con ocho figuras de tallos de pie en el llano y todas las fibras sueltas moviéndose a la vez con la misma racha.",
    },
    ini: "una fibra suelta del trenzado vibra con el aire que le pasa por dentro.",
    fin: "desde lejos, ocho figuras de tallos están de pie en el llano y todas sus fibras sueltas se mueven a la vez con la misma racha de aire.",
  }, "musica dibujada, ondas de sonido, notas, magia, resplandor"),

  // b7 — Esperaron quietas hasta que recibieron aliento.
  esc("b7a", [ref("figura_barro_amarillo"), ref("figura_tallos_huecos"), ref("altiplano_noche")], {
    comun: "Las figuras esperan INMÓVILES en la oscuridad hasta que reciben aliento. La espera es el plano. Objeto ancla: la quietud.",
    camara: {
      a: "PLANO MEDIO de tres figuras juntas, dos de barro y una de tallos, completamente quietas.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL nocturno con veinte figuras repartidas por el llano, todas de pie y todas inmóviles.",
    },
    ini: "tres figuras están juntas y quietas, sin un movimiento.",
    fin: "desde arriba hay veinte figuras repartidas por el llano, todas de pie y todas inmóviles: un campo entero esperando.",
  }, "resplandor, particulas, rayos, magia visible, aureola, dios en el cielo"),
  esc("b7b", [ref("figura_barro_amarillo")], {
    comun: "PRIMERO se mueve una mano de barro; después un pie deja una HUELLA HÚMEDA, y todos empiezan a respirar. El prodigio se ve, pero sin efectos: lo que hay es movimiento y una huella mojada. Objeto ancla: la huella húmeda.",
    camara: {
      a: "PLANO MACRO de unos dedos de barro doblándose por primera vez, agrietando la superficie.",
      b: "la cámara ha DESCENDIDO hasta el suelo: PLANO MACRO de un pie de barro levantándose de la tierra y dejando una huella húmeda y brillante donde estaba.",
    },
    ini: "unos dedos de barro se doblan por primera vez y la superficie se agrieta.",
    fin: "abajo, un pie de barro se ha levantado de la tierra y ha dejado una huella húmeda marcada donde estaba apoyado.",
  }, "resplandor, particulas, rayos, aureola, magia visible, transformacion"),

  // b8 — No podían verse, pero se escuchaban. «¿Dónde estás?» (CITA)
  escp("b8a", [ref("familias_muiscas"), ref("altiplano_noche")], {
    comun: `NO PUEDEN VERSE, pero se escuchan. Una voz pregunta dónde está la otra. Es la primera palabra que se dice en el mundo. Objeto ancla: la boca que pregunta.`,
    camara: {
      a: "PLANO MACRO de una boca abriéndose en la oscuridad, casi sin verse, para decir la primera palabra.",
      b: "la cámara ha RETROCEDIDO y ha girado sobre sí misma: PLANO GENERAL nocturno con seis figuras repartidas y separadas, cada una con la cara vuelta hacia un lado distinto.",
    },
    ini: "una boca se abre en la oscuridad para hablar por primera vez.",
    fin: "dando la vuelta se ve el problema: seis figuras repartidas y separadas, cada una mirando hacia un lado distinto, y ninguna hacia donde está la otra.",
  }, "luz, antorchas, ojos brillantes, aureola, texto, subtitulos"),
  escp("b8b", [ref("familias_muiscas"), ref("altiplano_noche")], {
    comun: `Y otra responde DESDE MUY CERCA. La respuesta viene de un sitio que no esperaban. Objeto ancla: la distancia real entre las dos.`,
    camara: {
      a: "PLANO MEDIO de la primera figura girando la cabeza hacia donde cree que vino la voz.",
      b: "la cámara ha hecho un PANEO LATERAL corto hacia el otro lado: PLANO MEDIO de la segunda figura, que estaba a dos pasos y en la dirección contraria a la que él miraba.",
    },
    ini: "gira la cabeza hacia donde cree que vino la voz.",
    fin: "la otra estaba a dos pasos y justo del lado contrario: a oscuras, la voz no dice de dónde viene.",
  }, "luz, antorchas, reencuentro emotivo, aureola, musica dibujada"),

  // b9 — Se buscaron con las manos. Siguieron llamándose toda la noche.
  escp("b9a", [ref("familias_muiscas")], {
    comun: `Extienden los brazos hasta encontrarse y APRENDEN LOS CONTORNOS de los demás con las manos. Es reconocimiento, no abrazo. Objeto ancla: las manos sobre una cara.`,
    camara: {
      a: "PLANO MACRO de dos manos tanteando el aire a oscuras, sin tocar nada todavía.",
      b: "la cámara ha RETROCEDIDO un poco y ha girado: PLANO MEDIO CORTO de dos figuras frente a frente, cada una con las manos en la cara de la otra, reconociéndola.",
    },
    ini: "dos manos tantean el aire a oscuras y no encuentran nada.",
    fin: "de cerca, las dos están frente a frente con las manos en la cara de la otra, aprendiéndose los contornos.",
  }, "beso, abrazo romantico, desnudez, luz, antorchas, aureola"),
  escp("b9b", [ref("familias_muiscas"), ref("altiplano_noche")], {
    comun: `Bajo el CIELO SIN ASTROS siguen buscándose, llamándose, aprendiendo a ser muchos. El video NO amanece: se queda a oscuras, que es donde el mito termina. Objeto ancla: el cielo sin una sola luz.`,
    camara: {
      a: "PLANO MEDIO de un grupo pequeño tanteándose y llamándose en la oscuridad.",
      b: "la cámara se ha ELEVADO muchísimo y ha basculado hacia arriba: GRAN PLANO GENERAL final con el llano abajo lleno de figuras que se buscan y, encima, un cielo ENTERAMENTE NEGRO sin una sola estrella.",
    },
    ini: "un grupo pequeño se tantea y se llama en la oscuridad.",
    fin: "desde arriba, el llano está lleno de figuras buscándose y el cielo encima está completamente negro: no sale nada, y el mito acaba aquí.",
  }, "amanecer, sol, luna, estrellas, antorchas, aureola, final feliz iluminado"),
]);
