// Keyframes de El sol y la luna — 10 bloques × 2 escenas × 2 cuadros = 40 imágenes ≈ 100 s.
// Guion: guion-el-sol-y-la-luna-v2.json (N=10) · Acta: acta-el-sol-y-la-luna.json
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · La creación de la gente OCURRE A OSCURAS y antes de la luz. Los hombres
//   son de tierra amarilla y las mujeres de hierba de tallo hueco, y durante
//   un tiempo se buscan por la voz y se reconocen por el tacto. Ese tramo a
//   ciegas es IRRENUNCIABLE y ocupa dos bloques enteros.
// · El sol NO es un dios distinto: es el sobrino, el cacique de Ramiriquí,
//   que sube y arde. La luna es el tío, el de Sogamoso. Son dos personas.
// · El tío NO sube por rivalidad ni por castigo: sube porque el día no
//   bastaba. La luna nace de una falta que el sol no podía cubrir.
// · La luna NO es menor que el sol: bajo su claridad fue posible encender el
//   fuego, volver a casa y dormir sin sobresalto. Su bloque (b9) tiene el
//   mismo peso de plano que el del sol (b6).
// · El cierre NO los reconcilia: recorren el cielo SIN ALCANZARSE, cada uno
//   con su oficio, mientras la fiesta del Huán canta que todos los cuerpos se
//   volverán ceniza.
//
// GUION DE LUZ: negro sin reparto de días → negro con voces → barro amarillo
// a tientas → tacto en la oscuridad → primer ardor en lo alto → luz cayendo
// sobre el mundo → tarde que se va → luz blanca y serena → noche habitable →
// fogatas rojas de diciembre.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-sol-luna-escenas";
export const OUT_DIR = "muiscas/videos/el-sol-y-la-luna/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; sol o luna con cara, ojos o boca; carro solar, caballos, cuadriga; dioses griegos o romanos, Apolo, Helios; alas, aureolas, rayos dibujados saliendo del cuerpo; escalera al cielo, nubes solidas, puertas de luz; genesis biblico, Adan y Eva, manzana, serpiente tentadora; rivalidad, pelea entre los dos caciques, celos";
export const PALETTE =
  "negro de tiniebla sin dias, ocre amarillo de barro, beige palido de tallo hueco, naranja de ascua y de fogata, blanco frio de luna, verde apagado de sementera; el rojo solo en las mantas de la fiesta del Huan; sin saturacion";

const SOGAMOSO =
  "EL MISMO cacique de Sogamoso de la referencia (hombre de unos cincuenta años, rostro sereno, pelo negro largo recogido en un moño alto, manta rectangular de algodón crudo anudada sobre el hombro derecho y ceñida a la cintura, con una sola cenefa geométrica sobria en ocre)";
const RAMIRIQUI =
  "EL MISMO Ramiriquí de la referencia (joven de unos veinticinco años y algo más bajo, rostro atento, pelo negro liso hasta los hombros sujeto por una cinta tejida angosta en la frente, manta corta de algodón crudo sobre el hombro y ceñida a la cintura, con una cenefa geométrica)";

export const ITEMS = armar([
  // b1 — Ya existían cielo y tierra, pero no el sol ni la luna.
  esc("b1a", [ref("altiplano_noche"), ref("mundo_primera_luz")], {
    comun: "Tiniebla: una noche que no se reparte en días. EL MISMO altiplano de la referencia con el cielo y la tierra ya hechos pero sin una sola fuente de luz. Objeto ancla: la línea donde la tierra se acaba y empieza el cielo.",
    camara: {
      a: "PLANO MACRO sobre la tierra negra, tan cerca que apenas se distinguen los terrones del fondo.",
      b: "la cámara se ha ELEVADO en vertical hasta un GRAN PLANO GENERAL: el mundo entero en negro, con cielo arriba y tierra abajo separados por una línea que apenas se adivina.",
    },
    ini: "todo es negro y no se sabe si lo que se ve está cerca o lejos.",
    fin: "desde muy arriba se distingue por fin que hay dos cosas —un cielo y una tierra— separadas por una línea, y nada más: ni luna, ni estrellas, ni fuego.",
  }, "estrellas, luna, sol, fuego, personas, figuras divinas"),
  escp("b1b", [ref("sogamoso_cacique"), ref("ramiriqui_cacique"), ref("altiplano_noche")], {
    comun: `Tiniebla cerrada. En esa oscuridad sólo hay dos personas: ${SOGAMOSO} y su sobrino ${RAMIRIQUI}. No hay más nacidos sobre la tierra. Objeto ancla: la distancia entre las dos siluetas.`,
    camara: {
      a: "PLANO GENERAL casi negro, con dos siluetas apenas insinuadas muy separadas en el cuadro.",
      b: "la cámara ha AVANZADO hasta ponerse entre los dos: PLANO MEDIO CORTO con una silueta cortada por cada borde del cuadro, todavía sin caras legibles.",
    },
    ini: "las dos siluetas están en extremos opuestos y apenas se separan del fondo.",
    fin: "desde el medio se ve que se han acercado hasta quedar a dos pasos, pero siguen sin distinguirse las caras: sólo dos bultos oscuros frente a frente.",
  }, "rostros claramente iluminados, antorchas, fuego, aureolas, Adan y Eva"),

  // b2 — Ninguno conocía el rostro del otro. El mundo no podía quedar tan solo.
  escp("b2a", [ref("sogamoso_cacique"), ref("ramiriqui_cacique")], {
    comun: `Negro casi total con una claridad mínima y sin fuente. ${SOGAMOSO} y ${RAMIRIQUI} tratando de reconocerse. Ninguno de los dos conoce el rostro del otro ni el suyo propio. Objeto ancla: las manos.`,
    camara: {
      a: "PLANO MACRO de una mano tanteando en el aire negro, sin tocar nada.",
      b: "la cámara ha RETROCEDIDO despacio: PLANO MEDIO de los dos de perfil, con las manos encontrándose a medio camino entre ellos.",
    },
    ini: "una mano se mueve sola en la oscuridad buscando algo.",
    fin: "las dos manos se han encontrado en el aire y se sostienen; las caras siguen en sombra y no se ven.",
  }, "rostros iluminados, espejos, agua reflejando caras, antorchas"),
  escp("b2b", [ref("sogamoso_cacique"), ref("ramiriqui_cacique"), ref("altiplano_noche")], {
    comun: `Negro con grados. Un día deciden que el mundo no puede quedar tan solo. Objeto ancla: el espacio vacío del mundo alrededor de ellos.`,
    camara: {
      a: "PLANO MEDIO de los dos sentados juntos, hablando bajo, en un hueco de claridad mínima.",
      b: "la cámara ha RETROCEDIDO muchísimo y ha subido: GRAN PLANO GENERAL en el que los dos son dos puntos apenas visibles en un mundo entero vacío y negro.",
    },
    ini: "están sentados el uno frente al otro, hablando.",
    fin: "desde lejos se ve lo que tienen alrededor: un mundo completo y vacío, sin una casa, sin un camino y sin nadie más.",
  }, "aureolas, resplandor, templos, altares, angeles"),

  // b3 — Tierra amarilla y tallos huecos. Las figuras empezaron a caminar.
  esc("b3a", [ref("figura_barro_amarillo"), ref("figura_tallos_huecos")], {
    comun: "Oscuridad con una claridad mínima que deja ver el material. LAS MISMAS figuras de la referencia: hombres de barro ocre a medio terminar, con huellas dactilares en la superficie, y mujeres trenzadas con tallos secos beige, huecas por dentro. Objeto ancla: el material de cada una.",
    camara: {
      a: "PLANO MACRO sobre el barro amarillo con las huellas de los dedos que lo apretaron todavía frescas.",
      b: "la cámara ha hecho un TRAVELLING LATERAL hasta la otra figura y ha retrocedido: PLANO MEDIO con las dos juntas, la de barro y la de tallos, de pie y a la misma altura.",
    },
    ini: "sólo se ve barro amarillo trabajado con los dedos.",
    fin: "vistas las dos a la vez se entiende de qué está hecha cada una: una es barro ocre con huellas de dedos y la otra es un trenzado de cañas huecas por el que pasa el aire.",
  }, "estatuas de marmol, maniquies, personas reales, Adan y Eva, resplandor"),
  esc("b3b", [ref("figura_barro_amarillo"), ref("figura_tallos_huecos"), ref("altiplano_noche")], {
    comun: "Oscuridad. Las figuras empezando a moverse, a respirar y a caminar. El prodigio se ve, pero sin efectos: lo que cambia es que se mueven. Objeto ancla: los pies de barro sobre la tierra.",
    camara: {
      a: "PLANO MACRO de un pie de barro ocre apoyado en el suelo, quieto.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL con seis u ocho figuras —unas de barro, otras de tallos— caminando ya, repartidas por el terreno oscuro.",
    },
    ini: "el pie de barro está apoyado y no se mueve.",
    fin: "desde lejos se ve que las figuras andan: seis o siete cruzan el terreno en direcciones distintas, con paso lento y todavía a oscuras.",
  }, "resplandor, particulas, magia visible, rayos, angeles, aureolas"),

  // b4 — Seguían a oscuras: se buscaban por la voz y el tacto.
  escp("b4a", [ref("familias_muiscas"), ref("altiplano_noche")], {
    comun: "Oscuridad. La gente recién hecha buscándose por la voz. Este tramo a ciegas es irrenunciable. Objeto ancla: las bocas abiertas llamando.",
    camara: {
      a: "PLANO MEDIO CORTO de una cara en la penumbra con la boca abierta llamando, sin que se vea a quién.",
      b: "la cámara ha RETROCEDIDO y ha girado sobre sí misma: PLANO GENERAL de seis figuras repartidas y separadas, todas con la cara vuelta hacia sitios distintos, llamándose sin encontrarse.",
    },
    ini: "una sola cara llama en la oscuridad.",
    fin: "desde lejos se ve que todas están llamando a la vez y ninguna mira hacia donde está la otra: se buscan por el sonido y no se encuentran.",
  }, "antorchas, fogatas, luz, rostros bien iluminados, panico, gritos de terror"),
  escp("b4b", [ref("familias_muiscas")], {
    comun: "Oscuridad casi total. Se reconocen por el tacto: ninguno sabe qué color tiene la tierra que lo hizo. Objeto ancla: las manos sobre una cara.",
    camara: {
      a: "PLANO MACRO de unos dedos recorriendo una mejilla en la penumbra.",
      b: "la cámara ha RETROCEDIDO y ha bajado: PLANO MEDIO de dos figuras de perfil frente a frente, cada una con las manos en la cara de la otra.",
    },
    ini: "unos dedos recorren una mejilla y no se ve nada más.",
    fin: "los dos están frente a frente con las manos en la cara del otro, reconociéndose a tientas; siguen sin poder verse.",
  }, "escena romantica, beso, desnudez, luz, antorchas"),

  // b5 — «Sube al cielo y alumbra el mundo». Ramiriquí ardió. (CITA)
  escp("b5a", [ref("sogamoso_cacique"), ref("ramiriqui_cacique")], {
    comun: `Oscuridad con claridad mínima. ${SOGAMOSO} diciéndole a su sobrino que suba al cielo y alumbre el mundo, que sea para todos una luz que no conozca el miedo. ${RAMIRIQUI} no duda. Objeto ancla: las dos caras a oscuras.`,
    camara: {
      a: "PLANO MEDIO de los dos de perfil, muy juntos y apenas visibles.",
      b: "la cámara ha basculado hacia arriba siguiendo la mirada del sobrino: CONTRAPICADO del cielo negro y vacío, con la coronilla de él entrando por el borde inferior.",
    },
    ini: "el tío le habla de cerca y el sobrino escucha.",
    fin: "el cuadro se ha ido al cielo que tiene que subir: negro entero, sin camino y sin escalera, con su cabeza abajo mirándolo.",
  }, "aureola, rayos, angeles, escalera al cielo, nubes solidas, coronas"),
  escp("b5b", [ref("ramiriqui_cacique"), ref("altiplano_noche")], {
    comun: `${RAMIRIQUI} subiendo por el aire sin camino ni escalera, tan alto que deja de parecer hombre, y ardiendo en lo alto. El prodigio se ve entero: es el nacimiento del sol. Objeto ancla: su figura subiendo.`,
    camara: {
      a: "PLANO ENTERO en contrapicado desde el suelo, con él despegando y todavía reconocible.",
      b: "la cámara ha SUBIDO tras él hasta muy arriba y ha retrocedido: PLANO GENERAL en el que él ya no es una figura sino un punto ardiendo, y abajo y lejos se adivina el mundo.",
    },
    ini: "sube desde el suelo, con la manta ondeando y la cara todavía visible.",
    fin: "arriba del todo ha dejado de parecer un hombre: es un punto que arde, y de él empieza a salir la primera luz sobre el mundo de abajo.",
  }, "carro solar, caballos, cuadriga, alas, Apolo, sol con cara, explosion"),

  // b6 — La luz cayó. Por primera vez vieron sus manos.
  esc("b6a", [ref("mundo_primera_luz"), ref("piedras_funza"), ref("laguna_iguaque_A")], {
    comun: "La primera luz cayendo sobre los montes, las lagunas y las sementeras. Objeto ancla: el borde de luz que avanza por el suelo.",
    camara: {
      a: "PLANO MACRO del borde de luz cruzando la tierra oscura, con la sombra a un lado y el color al otro.",
      b: "la cámara se ha ELEVADO muchísimo hasta un GRAN PLANO GENERAL en picado: el mundo entero iluminándose, con los montes, el agua y las sementeras apareciendo a la vez.",
    },
    ini: "el borde de luz avanza por la tierra y sólo se ve un palmo de mundo.",
    fin: "desde arriba se ve el mundo completo por primera vez: los montes con su color, las lagunas brillando y las sementeras verdes hasta el horizonte.",
  }, "personas, sol con cara, rayos dibujados, angeles, arcoiris"),
  escp("b6b", [ref("familias_muiscas")], {
    comun: "Luz nueva y plena. Por primera vez los hombres ven sus manos, ven el agua y ven el color de la tierra de la que están hechos. Objeto ancla: unas manos abiertas a la luz.",
    camara: {
      a: "PLANO MACRO de dos manos abiertas recibiendo la luz, con las líneas de la palma visibles por primera vez.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de un grupo entero mirándose las manos y mirándose entre sí, cada uno descubriendo a los demás.",
    },
    ini: "unas manos se abren a la luz muy cerca del objetivo.",
    fin: "desde lejos se ve al grupo entero: unos mirándose las palmas, otros mirándose las caras unos a otros por primera vez.",
  }, "aureolas, arrodillarse, adoracion, llanto teatral, Adan y Eva"),

  // b7 — Las plantas crecieron. Pero el sol se fue.
  esc("b7a", [ref("sabana_cultivos"), ref("poblado_nuevo")], {
    comun: "Luz plena de día. Las plantas creciendo con el calor y los caminos llenándose de voces. Objeto ancla: un brote de maíz.",
    camara: {
      a: "PLANO MACRO de un brote de maíz saliendo de la tierra, con la luz dándole de lado.",
      b: "la cámara se ha ELEVADO y ha retrocedido: GRAN PLANO GENERAL del valle sembrado, con los caminos cruzándolo y gente yendo por todos ellos.",
    },
    ini: "el brote asoma de la tierra y alrededor no se ve nada más.",
    fin: "desde arriba se ve el valle entero verde y sembrado, con los caminos llenos de gente andando en todas direcciones.",
  }, "rayos dibujados, sol con cara, angeles, arcoiris"),
  esc("b7b", [ref("altiplano_noche"), ref("sabana_cultivos")], {
    comun: "El sol cruzando el cielo y yéndose; la noche volviendo con el frío y el miedo. Objeto ancla: el último borde de luz.",
    camara: {
      a: "PLANO MEDIO de un sembrado con la luz muy baja y rasante, dorada, entre las matas.",
      b: "la cámara ha SUBIDO y ha retrocedido hasta un GRAN PLANO GENERAL del valle, ya casi todo en sombra, con la última franja de luz retirándose por un extremo.",
    },
    ini: "la luz baja todavía alcanza las matas del primer término.",
    fin: "desde arriba el valle entero ha quedado en sombra y sólo queda una franja de luz en un borde, a punto de irse; abajo ya no se distingue nada.",
  }, "sol con cara, personas gritando, panico, monstruos, fuego"),

  // b8 — El tío tomó el mismo camino. No ardió: luz serena y blanca.
  escp("b8a", [ref("sogamoso_cacique"), ref("familias_muiscas"), ref("altiplano_noche")], {
    comun: `Noche otra vez cerrada. ${SOGAMOSO} sabiendo que el día no bastaba. NO sube por rivalidad ni por castigo: sube porque falta algo. Objeto ancla: la gente a oscuras detrás de él.`,
    camara: {
      a: "PLANO MEDIO de él de pie en la oscuridad, mirando hacia arriba.",
      b: "la cámara ha RODEADO hasta su espalda y ha bajado: PLANO GENERAL desde detrás con la gente sentada a oscuras alrededor de un terreno sin fuego, y él delante de todos.",
    },
    ini: "está de pie mirando el cielo negro.",
    fin: "desde su espalda se ve lo que tiene detrás: la gente sentada a oscuras, sin poder hacer nada hasta que vuelva la luz.",
  }, "rivalidad, celos, pelea, castigo, aureola, gritos"),
  escp("b8b", [ref("sogamoso_cacique"), ref("altiplano_noche"), ref("madre_chia")], {
    comun: `${SOGAMOSO} subiendo por el mismo camino de su sobrino. NO arde como él: se vuelve una luz más serena y más blanca. Objeto ancla: su figura subiendo.`,
    camara: {
      a: "PLANO ENTERO en contrapicado desde el suelo, con él despegando y todavía reconocible.",
      b: "la cámara ha SUBIDO tras él y ha retrocedido: PLANO GENERAL en el que él ha quedado convertido en un disco blanco y sereno, con el mundo abajo y lejos.",
    },
    ini: "sube desde el suelo con la manta ondeando y la cara visible.",
    fin: "arriba del todo se ha vuelto un disco blanco de luz tranquila, sin arder y sin llama, y abajo el mundo empieza a distinguirse otra vez.",
  }, "luna con cara, carro, alas, diosa, rivalidad, eclipse, luna roja"),

  // b9 — Los cerros se dibujaron. Se podía dormir sin sobresalto.
  esc("b9a", [ref("altiplano_noche"), ref("laguna_iguaque_B")], {
    comun: "Luz blanca de luna. Bajo esa claridad las aguas brillan de otra manera y los cerros se dibujan contra el cielo. La luna tiene su propia obra y su propio plano. Objeto ancla: el filo de los cerros contra el cielo.",
    camara: {
      a: "PLANO MACRO de la superficie del agua devolviendo la luz blanca en escamas.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL nocturno: los cerros recortados con nitidez contra el cielo y el agua brillando abajo.",
    },
    ini: "el agua devuelve la luz blanca muy cerca del objetivo.",
    fin: "desde arriba el paisaje entero es legible de noche: cada cerro dibujado contra el cielo y el agua brillando en el fondo del valle.",
  }, "luna con cara, personas, monstruos, oscuridad total, fuego"),
  escp("b9b", [ref("familias_muiscas"), ref("casa_barro_paja"), ref("poblado_nuevo")], {
    comun: "Luz de luna y de fogón. Fue posible encender el fuego, volver a casa y dormir sin sobresalto. Cuando la luna subía, le hablaban como a alguien conocido. Objeto ancla: el fogón encendido.",
    camara: {
      a: "PLANO MACRO de una chispa prendiendo en la yesca, con las manos alrededor.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del poblado de noche con varios fogones encendidos, gente volviendo a sus casas y la luna arriba.",
    },
    ini: "la chispa prende en la yesca entre unas manos.",
    fin: "desde arriba se ve el poblado con sus fogones encendidos, la gente entrando en las casas y una mujer parada en su puerta con la cara vuelta hacia la luna, hablándole.",
  }, "aullidos, lobos, brujas, miedo, monstruos, luna con cara"),

  // b10 — Recorren el cielo sin alcanzarse. La fiesta del Huán.
  esc("b10a", [ref("altiplano_noche"), ref("madre_chia")], {
    comun: "Cielo con las dos luces a la vez, cada una con su oficio: uno descubre el mundo y el otro acompaña la noche. NO se alcanzan nunca. Objeto ancla: la distancia entre los dos discos.",
    camara: {
      a: "PLANO MEDIO del borde del cielo por donde entra el disco blanco, con la loma abajo.",
      b: "la cámara ha hecho un PANEO LATERAL amplio hasta el otro extremo del cielo y ha retrocedido: GRAN PLANO GENERAL en el que se ven los dos discos a la vez, uno en cada borde del cuadro y con todo el cielo entre ellos.",
    },
    ini: "sólo se ve uno de los dos discos, entrando por un borde del cielo.",
    fin: "en el mismo cuadro están los dos, cada uno en un extremo y separados por el cielo entero: siguen sus caminos sin acercarse un palmo.",
  }, "eclipse, los dos discos juntos o tocandose, caras, rayos, abrazo"),
  escp("b10b", [ref("familias_muiscas"), ref("plaza_fiesta_noche"), ref("valle_iraca")], {
    comun: "Noche de diciembre con heladas. La fiesta del Huán: los sogamosos encienden fogatas, visten de rojo y cantan que todos los cuerpos se volverán ceniza. El rojo de las mantas es el único color saturado del video. Objeto ancla: las fogatas.",
    camara: {
      a: "PLANO MACRO de una ascua naranja en una fogata, con una manta roja pasando desenfocada detrás.",
      b: "la cámara ha RETROCEDIDO y ha subido muchísimo hasta un GRAN PLANO GENERAL final: el valle de Iraca de noche con las fogatas repartidas por él y, arriba, las dos luces cada una en su sitio del cielo.",
    },
    ini: "un ascua late en la fogata y por detrás cruza el rojo de una manta.",
    fin: "desde muy arriba se ven todas las fogatas del valle encendidas a la vez, la gente de rojo alrededor de ellas, y en el cielo las dos luces siguiendo cada una su camino.",
  }, "cruces, procesiones cristianas, navidad, arboles decorados, fuegos artificiales"),
]);
