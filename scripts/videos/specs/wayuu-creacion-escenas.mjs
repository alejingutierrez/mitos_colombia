// Keyframes de Mareiwa y los hierros de Arachí — 14 bloques × 2 escenas × 2
// cuadros = 56 imágenes ≈ 140 s.
// Guion: guion-creacion-wayuu-v2.json (N=14) · Acta: acta-creacion-wayuu.json (28 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · LA TIERRA SE HACE CON UNA PEDRADA DE HONDA y el resultado es ÁRIDO: arena,
//   salitre, pozos que todavía saben a sal. NO es un paraíso y ninguna imagen
//   puede volverlo uno.
// · LA COMIDA LLEGA ANTES QUE LA GENTE, y por vía de PÁJAROS: las aves comen y
//   siembran con el estiércol. Mareiwa NO planta nada con la mano.
// · EL PRIMER ACTO SOBRE LOS HOMBRES ES NOMBRARLOS por casta, UNO POR UNO, y el
//   canon lo subraya: ninguno recibió el nombre de otro.
// · EL REPARTO ES CUÁDRUPLE Y CONCRETO: un par de animales, un pedazo de la
//   Guajira, una compañera y un hierro. No hay dones abstractos.
// · EL HIERRO RESUELVE UN PROBLEMA PRÁCTICO que el canon enuncia: los animales
//   se parecen y los caminos de arena se cruzan. La marca es para saber con
//   quién hay que hablar.
// · ARACHÍ ES UN SITIO REAL CON PETROGLIFOS. La imagen trabaja con marcas
//   grabadas en roca, nunca con emblemas inventados ni heráldica.
//
// El inventario marca `arachi` como `restringida`: es sitio con petroglifos
// reales, así que las marcas se insinúan como surcos picados y no se dibuja un
// repertorio de símbolos legibles.
//
// GUION DE LUZ: mar abierto y cielo alto → polvo de la pedrada → mediodía duro
// sobre el salitre → bandadas contra el cielo → primeras matas al amanecer →
// boca de cueva en sombra → ojos entrecerrados por el sol → luz plana del
// nombramiento → tarde del reparto → llanura repartida → roca de Arachí al
// atardecer → última luz sobre los rebaños marcados.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-creacion-escenas";
export const OUT_DIR = "wayuu/videos/creacion-wayuu/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; paraiso, jardin, pradera verde, cascadas, selva; emblemas, escudos, heraldica, blasones, logotipos o simbolos inventados legibles; escritura, alfabeto, rotulos; mano divina sembrando, semillas cayendo del cielo, rayos de luz creadores; aureola, resplandor o trono para Mareiwa; multitudes en extasis, adoracion, arrodillarse; figuras de barro moldeadas a mano, torno de alfarero, cuerpos incompletos o deformes";
export const PALETTE =
  PALETTE_BASE + "; el blanco calcareo de la piedra de Kasuto y la costra de salitre son los unicos claros; el verde del cardon aparece solo cuando ya hay siembra";

const MA =
  "EL MISMO Mareiwa de la referencia (hombre joven de pelo negro largo y suelto, cara serena, manto de algodón crudo terciado que le cae hasta los tobillos con cenefa tejida oscura en el ruedo, descalzo, sin corona ni adorno de metal)";

export const ITEMS = armar([
  // b1 — Subió al Tsitsi, todo era mar. Cargó la honda y soltó la piedra.
  escp("b1a", [ref("tsitsi_cerro"), ref("mareiwa")], {
    comun: `Luz alta de mediodía. TODO ERA MAR: desde la cima del Tsitsi no se ve tierra en ninguna dirección, sólo agua hasta el horizonte. ${MA} de pie en lo más alto. Objeto ancla: la línea del agua sin interrupción.`,
    camara: {
      a: "GRAN PLANO GENERAL en picado desde muy alto con la cima de piedra abajo y agua ocupando todo el resto del cuadro.",
      b: "la cámara ha DESCENDIDO hasta la cima y se ha puesto a su espalda: PLANO MEDIO desde detrás de su hombro, con el agua abierta delante de los dos.",
    },
    ini: "desde muy arriba, la cima es una mancha de piedra rodeada de agua por todos lados.",
    fin: "por encima de su hombro se ve lo mismo que él ve: agua hasta donde alcanza, sin una sola franja de tierra.",
  }, "islas, palmeras, barcos, puerto, playa turistica"),
  esc("b1b", [ref("honda"), ref("tsitsi_cerro")], {
    comun: `Luz alta. CARGÓ LA HONDA, la hizo girar y soltó la piedra lejos. La honda es de fibra trenzada y la piedra cabe en la mano. Objeto ancla: la piedra en la badana.`,
    camara: {
      a: "PLANO MACRO de la piedra asentada en la badana de la honda, con las trenzas de fibra tensas alrededor.",
      b: "la cámara se ha SOLTADO tras el disparo y ha volado horizontalmente sobre el agua: PLANO GENERAL a ras de mar con la piedra ya lejos, pequeña, cayendo al final de su arco.",
    },
    ini: "la piedra descansa en la badana de la honda y las trenzas de fibra están tensas a su alrededor.",
    fin: "a ras del agua, la piedra va ya muy lejos y baja al final de su arco: la cámara la siguió todo el camino.",
  }, "explosion, rayo, resplandor, estela magica, particulas"),

  // b2 — Cayó en Kasuto y el mar se apartó. Arena, salitre, pozos salados.
  esc("b2a", [ref("kasuto"), ref("costa_penascos")], {
    comun: `Luz dura. Cayó en KASUTO, la piedra blanca, y el mar se apartó. El agua retrocede dejando el fondo al aire. Objeto ancla: la piedra blanca en el sitio del impacto.`,
    camara: {
      a: "PLANO MEDIO de la piedra blanca calcárea encajada en el fondo mojado, con el agua todavía lamiéndola.",
      b: "la cámara ha RETROCEDIDO en travelling hacia atrás y se ha elevado mucho: GRAN PLANO GENERAL en picado con la línea del agua ya muy lejos y una extensión enorme de fondo descubierto entre ella y la piedra.",
    },
    ini: "la piedra blanca está encajada en el fondo y el agua todavía la toca.",
    fin: "desde muy arriba se ve cuánto se apartó el mar: la orilla quedó lejísimos y entre ella y la piedra hay una extensión entera de fondo al aire.",
  }, "ola gigante, tsunami, muro de agua, explosion, magia"),
  esc("b2b", [ref("pozos_salados"), ref("llanura_cardonal"), ref("arroyo_seco")], {
    comun: `Mediodía duro y blanco. Lo que quedó NO ES UN PARAÍSO: arena, costra de salitre y pozos que saben a sal. Sin figuras. Objeto ancla: la costra de sal.`,
    camara: {
      a: "PLANO MACRO de la costra blanca de salitre quebrándose sobre el barro, con los cristales a la vista.",
      b: "la cámara se ha ELEVADO en vertical: GRAN PLANO GENERAL en picado de la extensión entera, arena y manchas blancas de sal hasta el horizonte, sin una sola planta.",
    },
    ini: "la costra de salitre se quiebra sobre el barro y se le ven los cristales.",
    fin: "desde muy arriba es todo lo mismo: arena y manchas blancas de sal hasta el horizonte, y ni una planta en ninguna parte.",
  }, "verde, hierba, flores, oasis, agua dulce, selva"),

  // b3 — «Pobres mis hijos: ¿qué les diré para que puedan vivir?» (CITA)
  escp("b3a", [ref("mareiwa"), ref("llanura_cardonal"), ref("pozos_salados")], {
    comun: `Mediodía duro. LA CITA: ${MA} mira la extensión seca y se lamenta por los que van a vivir ahí. Es lástima, no arrepentimiento ni cólera. Objeto ancla: su cara mirando lo seco.`,
    camara: {
      a: "PLANO GENERAL de él pequeño y de pie en mitad de la extensión blanca y vacía.",
      b: "la cámara ha AVANZADO en línea recta hasta él y ha girado al perfil: PLANO MEDIO CORTO de su cara de lado, hablando bajo, con el vacío desenfocado detrás.",
    },
    ini: "es una figura pequeña de pie en mitad de la extensión blanca.",
    fin: "de cerca y de perfil se le ve decir la frase en voz baja, sin levantar la mano y sin mirar al cielo.",
  }, "llanto teatral, brazos alzados, aureola, rayos, arrodillarse, texto"),
  esc("b3b", [ref("llanura_cardonal"), ref("arroyo_seco")], {
    comun: `Mediodía. Lo que hay que resolver, dicho con el suelo: tierra que no da nada todavía. Sin figuras. Objeto ancla: la arena sin una semilla.`,
    camara: {
      a: "PLANO CENITAL MACRO de la arena seca, tan cerca que se ven los granos y ni un brote.",
      b: "la cámara se ha ELEVADO y ha basculado al horizonte: PLANO GENERAL de la llanura vacía con el cielo blanco de calor ocupando la mitad de arriba.",
    },
    ini: "los granos de arena llenan el cuadro y no hay un solo brote entre ellos.",
    fin: "al subir y mirar al frente se ve la llanura entera vacía bajo un cielo blanco de calor.",
  }, "brotes, verde, agua, lluvia, flores"),

  // b4 — Mandó bandadas de pavas, turpiales y morva. Volaron por la Guajira.
  esc("b4a", [ref("wampiray"), ref("urui"), ref("llanura_cardonal")], {
    comun: `Luz de mañana. LA COMIDA LLEGA POR LOS PÁJAROS, no por la mano: bandadas de pavas y de turpiales cruzando el cielo sobre lo seco. Objeto ancla: las aves contra el cielo.`,
    camara: {
      a: "PLANO MACRO de una pava posada, con el plumaje oscuro y la carúncula roja a la vista.",
      b: "la cámara ha BASCULADO hacia el cielo y ha retrocedido: PLANO GENERAL casi todo de cielo con dos bandadas cruzándolo en direcciones distintas, decenas de aves.",
    },
    ini: "la pava está posada y se le ven el plumaje oscuro y la carúncula roja.",
    fin: "casi todo el cuadro es cielo con dos bandadas cruzándolo a la vez, decenas de aves en cada una.",
  }, "aves de rapina, buitres, aves mitologicas, aves gigantes, fenix"),
  esc("b4b", [ref("urui"), ref("frutos_del_monte"), ref("llanura_cardonal")], {
    comun: `Mañana. Las aves COMEN: los turpiales, naranjas y negros, picoteando frutos negros de un arbusto. Es el paso previo a la siembra. Objeto ancla: el fruto en el pico.`,
    camara: {
      a: "PLANO DETALLE de un turpial con un fruto negro en el pico, muy cerca.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del arbusto entero con ocho o diez turpiales comiendo a la vez y otros llegando.",
    },
    ini: "el turpial sostiene un fruto negro en el pico, visto muy de cerca.",
    fin: "desde lejos se ve el arbusto entero con ocho o diez pájaros comiendo y más llegando en vuelo.",
  }, "aves de rapina, carronia, sangre, aves gigantes"),

  // b5 — Donde botaban el estiércol quedaban semillas: cardón e iguaraya.
  esc("b5a", [ref("llanura_cardonal"), ref("urui")], {
    comun: `Amanecer. LA SIEMBRA ES POR EL ESTIÉRCOL DE LAS AVES: donde cae la deposición queda la semilla, y de ahí sale la mata. Mareiwa no está en cuadro. Objeto ancla: el brote saliendo de la arena.`,
    camara: {
      a: "PLANO CENITAL MACRO de un brote verde diminuto asomando en la arena junto a una mancha de deposición de ave.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la llanura con brotes y matas repartidos a distintas alturas, sembrados sin orden por donde pasaron las bandadas.",
    },
    ini: "un brote verde diminuto asoma en la arena junto a una mancha dejada por un ave.",
    fin: "desde muy arriba se ve el resultado: matas de todos los tamaños repartidas sin orden por la llanura, por donde pasaron las bandadas.",
  }, "mano divina sembrando, semillas cayendo del cielo, surcos, arado, huerto ordenado"),
  esc("b5b", [ref("cardon"), ref("frutos_del_monte")], {
    comun: `Mañana. YA HABÍA QUÉ COMER: el cardón columnar y ramificado con su iguaraya madura en las puntas. Objeto ancla: la iguaraya abierta.`,
    camara: {
      a: "PLANO MACRO de una iguaraya roja abierta en la punta del brazo de un cardón, con la pulpa a la vista.",
      b: "la cámara ha RETROCEDIDO y se ha elevado en diagonal: PLANO GENERAL del cardonal entero con decenas de cardones ramificados y sus frutos rojos en las puntas.",
    },
    ini: "la iguaraya roja está abierta en la punta del brazo del cardón y se le ve la pulpa.",
    fin: "desde arriba y lejos se ve el cardonal completo, decenas de cardones ramificados con los frutos rojos encendidos en las puntas.",
  }, "saguaro de western, frutas tropicales, selva, plantas de otro clima"),

  // b6 — Fue a una cueva. «Hágase el indio», dijo.
  escp("b6a", [ref("cueva"), ref("mareiwa"), ref("llanura_cardonal")], {
    comun: `Tarde, luz naranja fuera y sombra dentro. ${MA} llega a la boca de una cueva honda como un gran pozo. Objeto ancla: la boca oscura de la cueva.`,
    camara: {
      a: "GRAN PLANO GENERAL del cardonal con la boca de la cueva pequeña y negra en un talud de piedra, y él diminuto acercándose.",
      b: "la cámara ha AVANZADO hasta la boca y ha basculado hacia abajo: PLANO CENITAL sobre el hueco, con la oscuridad ocupando casi todo el cuadro y él en el borde de arriba.",
    },
    ini: "desde lejos, la boca de la cueva es un punto negro en el talud y él se acerca, diminuto.",
    fin: "desde el borde y mirando abajo, el hueco es una oscuridad que ocupa casi todo el cuadro, con él recortado en el canto.",
  }, "templo, altar, escaleras talladas, antorchas, iconografia religiosa"),
  esc("b6b", [ref("cueva")], {
    comun: `Sombra de la cueva con una franja de luz entrando por la boca. La orden se da y todavía no se ve nada: el cuadro es el hueco esperando. Sin figuras. Objeto ancla: la franja de luz sobre el suelo de arena.`,
    camara: {
      a: "PLANO MACRO del suelo de arena de la cueva con la franja de luz cruzándolo en diagonal.",
      b: "la cámara ha RETROCEDIDO hasta el fondo y se ha vuelto hacia la entrada: PLANO GENERAL desde dentro con el vano recortado al fondo y el interior entero todavía vacío.",
    },
    ini: "la franja de luz cruza en diagonal el suelo de arena de la cueva.",
    fin: "desde el fondo se ve la cueva entera contra el vano iluminado, y sigue sin haber nadie dentro.",
  }, "figuras de barro, moldes, cuerpos incompletos, torno, magia, resplandor"),

  // b7 — Y hubo un indio; hizo otro, y otro. Salían con los ojos entrecerrados.
  escp("b7a", [ref("primeros_wayuu"), ref("cueva")], {
    comun: `Contraluz fuerte en la boca de la cueva. LOS PRIMEROS SALEN A LA LUZ CON LOS OJOS ENTRECERRADOS por el sol: ésa es la imagen del canon y por ahí entra el calor en el mito de origen. Salen enteros y sanos. Objeto ancla: los ojos entrecerrados.`,
    camara: {
      a: "PRIMER PLANO de una cara saliendo de la sombra con los ojos apretados contra la luz y la mano a medio subir.",
      b: "la cámara ha RETROCEDIDO fuera de la cueva y se ha elevado: PLANO GENERAL a contraluz con siete u ocho figuras saliendo en fila por la boca, todas con la mano en la cara.",
    },
    ini: "una cara sale de la sombra con los ojos apretados y la mano a medio subir.",
    fin: "desde fuera y a contraluz se ve la fila entera saliendo por la boca de la cueva, siete u ocho, todas tapándose del sol.",
  }, "cuerpos de barro, figuras incompletas, deformidad, zombis, resplandor magico"),
  escp("b7b", [ref("primeros_wayuu"), ref("llanura_cardonal")], {
    comun: `Contraluz. SIN NOMBRE TODAVÍA: están de pie fuera, sin saber qué hacer, mirándose unos a otros. Ninguno tiene aún nada que lo distinga. Objeto ancla: las manos vacías.`,
    camara: {
      a: "PLANO DETALLE de dos manos abiertas y vacías a la altura de la cintura.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del grupo entero de pie en la arena, separados unos de otros, todos iguales y sin nada encima.",
    },
    ini: "dos manos abiertas y vacías, muy de cerca.",
    fin: "desde arriba se ve al grupo entero de pie en la arena, separados y todos iguales: nadie tiene todavía nada propio.",
  }, "uniformes, numeros, marcas en la piel, cadenas, filas militares"),

  // b8 — Los fue mirando uno por uno. A cada uno le dijo su casta.
  escp("b8a", [ref("mareiwa"), ref("primeros_wayuu")], {
    comun: `Luz plana de mañana. EL PRIMER ACTO ES NOMBRAR, y es UNO POR UNO: ${MA} se detiene delante de cada uno y le dice su casta. Ipuana, Uriana, Epiayú, Apchana, Sipuana. Objeto ancla: las dos caras frente a frente.`,
    camara: {
      a: "PLANO MEDIO CORTO de los dos de perfil enfrentados, muy cerca, él diciendo y el otro escuchando.",
      b: "la cámara ha RETROCEDIDO a lo largo de la fila: PLANO GENERAL lateral con quince personas en fila y él a mitad de camino, parado delante de una sola.",
    },
    ini: "los dos están frente a frente, de perfil y muy cerca: uno dice, el otro escucha.",
    fin: "desde el extremo de la fila se ve que son quince esperando y que él va por la mitad, parado delante de una sola persona.",
  }, "coronacion, bendicion, aureola, arrodillarse, ceremonia religiosa, texto"),
  escp("b8b", [ref("primeros_wayuu"), ref("llanura_cardonal")], {
    comun: `Luz plana. NINGUNO RECIBIÓ EL NOMBRE DE OTRO: después de pasar él, el grupo ya no es uniforme —se han separado en corros distintos, cada uno con los suyos—. Objeto ancla: los huecos entre los corros.`,
    camara: {
      a: "PLANO MEDIO de tres personas juntándose, mirándose como quien acaba de saber que son de los mismos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado mucho: PLANO GENERAL en picado con cinco corros claramente separados por trechos de arena vacía.",
    },
    ini: "tres personas se juntan y se miran como quien acaba de saber que es de los mismos.",
    fin: "desde arriba se ven cinco corros distintos, cada uno apretado y separado del siguiente por un trecho de arena.",
  }, "uniformes, banderas, emblemas, numeros, formaciones militares"),

  // b9 — Con el nombre venía la casta, y con la casta, su gente.
  escp("b9a", [ref("primeros_wayuu"), ref("enramada")], {
    comun: `Luz de mañana. LA CASTA ES EL PARENTESCO EN EL QUE SE VIVE, no una etiqueta: dentro de un corro se reparten el trabajo y se tocan al hablar. Objeto ancla: las manos que se buscan.`,
    camara: {
      a: "PLANO DETALLE de una mano posándose en el antebrazo de otra persona.",
      b: "la cámara ha RETROCEDIDO girando alrededor del corro: PLANO GENERAL del grupo entero sentado en círculo, ocupado ya en cosas distintas, hablándose.",
    },
    ini: "una mano se posa en el antebrazo de otra persona, muy de cerca.",
    fin: "desde fuera del círculo se ve al grupo entero sentado, cada uno en algo distinto y todos hablándose.",
  }, "jerarquia, trono, jefe destacado, uniformes, insignias"),
  escp("b9b", [ref("primeros_wayuu"), ref("llanura_cardonal"), ref("rancheria")], {
    comun: `Mañana. Y con la casta, SU GENTE: cada corro empieza a irse por su lado, hacia un punto distinto de la llanura. Objeto ancla: las cinco direcciones.`,
    camara: {
      a: "PLANO MEDIO de un grupo de espaldas echando a andar, cortado por el borde del cuadro.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con cinco grupos alejándose en cinco direcciones distintas sobre la arena.",
    },
    ini: "un grupo de espaldas echa a andar, muy cerca de la cámara.",
    fin: "desde muy arriba se ve que son cinco grupos y que cada uno va hacia un lado distinto de la llanura.",
  }, "exodo dramatico, banderas, carros, ejercitos, ciudad"),

  // b10 — Repartió lo que la tierra tenía: animales para cada casta.
  esc("b10a", [ref("pares_de_animales"), ref("llanura_cardonal")], {
    comun: `Tarde. EL REPARTO ES CONCRETO: a cada casta un PAR de animales, no un rebaño abstracto. Dos y dos, contables en cuadro. Objeto ancla: el par de animales juntos.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos chivos juntos de perfil, llenando el cuadro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado con cinco pares de animales distintos repartidos por la arena, cada par separado del siguiente.",
    },
    ini: "dos chivos juntos de perfil llenan el cuadro.",
    fin: "desde arriba se ven cinco pares distintos repartidos por la arena, cada uno en su sitio y separado de los demás.",
  }, "arca, desfile de animales, animales exoticos, jaulas, zoologico"),
  escp("b10b", [ref("mareiwa"), ref("chivos"), ref("primeros_wayuu")], {
    comun: `Tarde. ${MA} entrega, y la entrega es una cosa que pasa de mano a mano: una cuerda, un animal. Sin ceremonia ni gesto solemne. Objeto ancla: la cuerda pasando de una mano a otra.`,
    camara: {
      a: "PLANO MACRO de una cuerda de fibra pasando de una mano a otra, con las dos manos en cuadro.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL con él ya alejándose y la persona llevándose su par de animales hacia el otro lado.",
    },
    ini: "la cuerda de fibra pasa de una mano a otra, muy de cerca.",
    fin: "desde lejos, él ya se va por un lado y la persona se lleva su par de animales por el otro.",
  }, "trono, ceremonia, corona, aureola, arrodillarse, ofrendas"),

  // b11 — Repartió la Guajira entre las castas. Y a cada indio, su compañera.
  esc("b11a", [ref("llanura_cardonal"), ref("cardon"), ref("arroyo_seco")], {
    comun: `Luz de tarde. Repartió LA TIERRA, un pedazo para cada casta: los límites son accidentes del terreno —un arroyo seco, una línea de cardones, un lomo de arena—, nunca cercas ni líneas dibujadas. Sin figuras. Objeto ancla: el arroyo seco que separa.`,
    camara: {
      a: "PLANO MACRO del canto de un arroyo seco, con la arena cambiando de color de un lado al otro.",
      b: "la cámara se ha ELEVADO muchísimo siguiendo el cauce: GRAN PLANO GENERAL en picado con la llanura dividida por cauces y líneas de cardones en cinco extensiones distintas.",
    },
    ini: "en el canto del arroyo seco la arena cambia de color de un lado al otro.",
    fin: "desde muy arriba se ve la llanura entera partida por cauces secos y líneas de cardones en cinco pedazos.",
  }, "mapas, lineas dibujadas, cercas continuas, muros, mojones con inscripcion"),
  escp("b11b", [ref("primeros_wayuu"), ref("enramada"), ref("llanura_cardonal")], {
    comun: `Última luz. A cada indio, su compañera: parejas de pie, cada una en su pedazo, mirándose. Nada de ceremonia ni de entrega de una persona. Objeto ancla: las parejas repartidas.`,
    camara: {
      a: "PLANO MEDIO de una pareja de pie uno frente al otro, a un paso de distancia.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con cinco parejas repartidas por la llanura, cada una en su trecho y lejos de las demás.",
    },
    ini: "una pareja está de pie, uno frente al otro, a un paso.",
    fin: "desde arriba se ven cinco parejas repartidas por la llanura, cada una en su trecho y lejos de las otras.",
  }, "boda, altar, sacerdote, anillos, velo, ceremonia religiosa, entrega de una persona"),

  // b12 — Los animales se parecen y los caminos se cruzan. Fue a Arachí.
  esc("b12a", [ref("chivos"), ref("llanura_cardonal")], {
    comun: `Mañana. EL PROBLEMA PRÁCTICO que el canon enuncia: los animales se parecen y los caminos de arena se cruzan, así que no se sabe de quién es qué. Objeto ancla: dos rebaños mezclados.`,
    camara: {
      a: "PLANO MEDIO CORTO de cuatro cabras casi idénticas apretadas, imposibles de distinguir entre sí.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con dos rebaños mezclados en el cruce de tres trochas, sin que se vea dónde acaba uno y empieza el otro.",
    },
    ini: "cuatro cabras casi idénticas, apretadas, y no hay manera de distinguirlas.",
    fin: "desde muy arriba, dos rebaños se han mezclado en el cruce de tres trochas y no se ve dónde termina uno.",
  }, "vallas, corrales separados, etiquetas, numeros, collares"),
  escp("b12b", [ref("arachi"), ref("mareiwa")], {
    comun: `Atardecer. ARACHÍ, donde hay grandes piedras: un sitio real de roca con superficies planas. ${MA} llega hasta ellas. Objeto ancla: la pared de roca.`,
    camara: {
      a: "PLANO MEDIO de él de espaldas, pequeño al pie de un bloque de roca que lo dobla en altura.",
      b: "la cámara ha SUBIDO por la pared y se ha alejado: GRAN PLANO GENERAL del conjunto de grandes piedras al atardecer, con él ya minúsculo entre ellas.",
    },
    ini: "de espaldas y al pie del bloque, se ve lo pequeño que es contra la roca.",
    fin: "desde arriba y lejos se ve el conjunto entero de grandes piedras y él minúsculo entre ellas.",
  }, "templo, monumento, estatuas, columnas, escaleras talladas, altar"),

  // b13 — Sobre la roca pintó el hierro de cada casta, distinto a todos.
  esc("b13a", [ref("arachi")], {
    comun: `Atardecer, luz rasante sobre la roca. Los HIERROS son marcas GRABADAS EN PIEDRA —surcos picados, rasantes, gastados—, nunca emblemas legibles ni heráldica. Se insinúan; no se dibuja un repertorio. Objeto ancla: el surco en la roca.`,
    camara: {
      a: "PLANO MACRO en rasante de un surco recién picado en la roca, con el polvo de piedra todavía dentro.",
      b: "la cámara ha RETROCEDIDO a lo largo de la pared: PLANO GENERAL del paredón con una decena de marcas repartidas por la superficie, todas distintas entre sí y ninguna legible como símbolo.",
    },
    ini: "el surco recién picado conserva el polvo de piedra dentro, visto en rasante y muy de cerca.",
    fin: "desde lejos se ve el paredón entero con una decena de marcas repartidas, todas distintas y ninguna que se lea como un signo conocido.",
  }, "emblemas, escudos, heraldica, letras, numeros, simbolos legibles, graffiti"),
  escp("b13b", [ref("arachi"), ref("primeros_wayuu")], {
    comun: `Atardecer. De allí SACÓ CADA CASTA EL SUYO: van llegando y cada uno se lleva su marca copiándola, no recibiéndola. Objeto ancla: la mano que copia el surco.`,
    camara: {
      a: "PLANO DETALLE de unos dedos siguiendo el surco de una marca en la roca, aprendiéndosela.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL con cinco personas repartidas a lo largo del paredón, cada una delante de una marca distinta.",
    },
    ini: "unos dedos recorren el surco de la marca, aprendiéndosela.",
    fin: "desde arriba se ve a cinco personas repartidas a lo largo del paredón, cada una delante de su propia marca.",
  }, "entrega de estandartes, ceremonia, arrodillarse, aureola, texto"),

  // b14 — Cada rebaño lleva el signo de su gente. Basta mirar la marca.
  esc("b14a", [ref("chivos"), ref("llanura_cardonal")], {
    comun: `Última luz. Desde entonces cada rebaño lleva EN LA PIEL el signo de su gente: una marca pequeña en el anca, hecha y cicatrizada, sin sangre ni herida fresca. Objeto ancla: la marca en el anca.`,
    camara: {
      a: "PLANO MACRO de una marca cicatrizada en el pelo del anca de una cabra, pequeña y vieja.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del rebaño entero pastando, con la misma marca repetida en todos los animales.",
    },
    ini: "la marca cicatrizada en el anca es pequeña y vieja, vista muy de cerca.",
    fin: "desde arriba se ve el rebaño entero y todos los animales llevan la misma marca.",
  }, "hierro al rojo, fuego, sangre, herida abierta, animal sufriendo, numeros"),
  escp("b14b", [ref("primeros_wayuu"), ref("chivos"), ref("llanura_cardonal")], {
    comun: `Última luz. BASTA MIRAR LA MARCA PARA SABERLO: dos personas se encuentran con sus rebaños mezclados, miran las ancas y se reparten los animales sin discutir. Para eso servía. Objeto ancla: las dos miradas sobre la misma anca.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos personas agachadas mirando la misma anca, de perfil.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final con los dos rebaños ya separados yéndose en direcciones distintas por la llanura al atardecer.",
    },
    ini: "dos personas agachadas miran la misma anca, muy cerca una de otra.",
    fin: "desde muy arriba, los dos rebaños ya se han separado y se van cada uno por su lado sobre la llanura al atardecer.",
  }, "pelea, armas, discusion, robo, autoridad, papeles, contratos"),
]);
