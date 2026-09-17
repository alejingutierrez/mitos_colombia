// Keyframes de En el principio fue el maíz — 11 bloques × 2 escenas × 2 cuadros
// = 44 imágenes ≈ 110 s.
// Guion: guion-en-el-principio-fue-el-maiz-v2.json (N=11)
// Acta:  acta-en-el-principio-fue-el-maiz.json (21 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · El ave negra NO es castigada ni se explica. Roba la bolsa y no regresa, y
//   al final Piracá encuentra una pluma suya y la levanta sin rencor. El robo
//   es lo que hace posible el maíz: NO se pinta como villanía —nada de ojos
//   rojos, garras ni sombra amenazante—, es un ave común.
// · Bochica NO resuelve el hambre de hoy: da un poco de harina tostada para
//   aguantar quince días. La espera tiene un costo y el relato lo paga en
//   escena, cada mañana, con la tentación de desenterrar el oro (b8a).
// · El maíz NO es un milagro que acaba con el hambre: hubo que conocer los
//   suelos, leer las lluvias y defender los brotes de las heladas. El bloque
//   b11 muestra trabajo, no abundancia.
// · La lección NO es contra el oro sino sobre lo que se multiplica: si las
//   guardas todas terminarán, si siembras una parte regresarán.
// · El cierre NO es triunfal: el maíz brilla más que las cuentas y ADEMÁS
//   sirve para comer. La gracia está en ese «además» y va seco.
//
// GUION DE LUZ: interior frío de casa vacía → luz de camino → mediodía de
// mercado → gris del robo → tierra removida con el pulgar → harina tostada en
// la mano → tarde de la promesa → quince amaneceres iguales → verde nuevo →
// fuego de la casa → pluma negra sobre una mazorca.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-maiz-escenas";
export const OUT_DIR = "muiscas/videos/en-el-principio-fue-el-maiz/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; ave con ojos rojos, garras, sombra amenazante o aire de mal agüero; cuervo siniestro, buitre, aguila; monedas modernas, lingotes, cofres, joyeria pulida; brotes que crecen a ojos vista con resplandor, magia visible, particulas; cornucopia, abundancia barroca, mesas repletas; niños famelicos, cuerpos demacrados, miseria explotada";
export const PALETTE =
  "crema de algodon crudo, pardo seco de campo helado, ocre de tierra removida, amarillo del grano, verde nuevo de hoja de maiz, negro mate de pluma; el oro solo en cuentas pequeñas y mate; sin saturacion";

const PIRACA =
  "EL MISMO Piracá de la referencia (hombre de unos treinta y cinco años, delgado y de cara cansada, pelo negro liso recogido, manta de algodón crudo gastada anudada al hombro y ceñida con un cordón de fique, descalzo)";
const BOCHICA =
  "EL MISMO Bochica de la referencia (anciano, barba blanca al pecho, pelo gris con cinta, manta cruda al hombro, descalzo)";
const AVE =
  "LA MISMA ave negra de la referencia (ave de papel de tamaño mediano, cuerpo de cartulina oscura con las plumas recortadas una a una, pico fuerte y ojo pequeño; es un ave común y no emite luz ni aliento)";

export const ITEMS = armar([
  // b1 — Piracá dobló las últimas mantas. La familia comía poco.
  escp("b1a", [ref("piraca_labrador"), ref("casa_barro_paja"), ref("manta_vasijas")], {
    comun: `Luz fría de interior. ${PIRACA} doblando las últimas mantas de la casa. Objeto ancla: las mantas dobladas.`,
    camara: {
      a: "PLANO MACRO de las manos alisando una manta doblada sobre la estera.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PLANO GENERAL del interior: se ve el cuarto entero, las tres vasijas vacías en un rincón y a él echándose el bulto al hombro.",
    },
    ini: "unas manos alisan la manta doblada y no se ve nada más.",
    fin: "desde el fondo del cuarto se ve la casa entera: las vasijas vacías con la boca hacia arriba, la estera sin nada encima y él ya con el bulto al hombro junto a la puerta.",
  }, "niños famelicos, cuerpos demacrados, miseria explotada, llanto"),
  esc("b1b", [ref("manta_vasijas"), ref("sabana_cultivos")], {
    comun: "Luz gris. Lo que queda: en los campos, tallos secos; en el fondo de las vasijas, sólo polvo de harina. Objeto ancla: el fondo de la vasija.",
    camara: {
      a: "PLANO MACRO dentro de una vasija, con el polvo de harina pegado al fondo de barro.",
      b: "la cámara ha SALIDO de la vasija y se ha elevado hasta un GRAN PLANO GENERAL del campo helado, con los tallos secos en hileras hasta el fondo.",
    },
    ini: "en el fondo del barro hay un resto de polvo claro y nada más.",
    fin: "desde arriba se ve el campo entero pelado por el frío, con los tallos secos en hileras y ni una mata verde.",
  }, "personas, cadaveres, animales muertos, dramatismo"),

  // b2 — Las mantas estaban bien tejidas. Volvería con algo que cambiar.
  esc("b2a", [ref("telar_marco"), ref("manta_vasijas")], {
    comun: "Luz cálida de fogón bajo. Cada hilo de esas mantas guarda muchas noches de trabajo junto al fuego. Objeto ancla: la trama del tejido.",
    camara: {
      a: "PLANO MACRO de la trama de una manta, tan cerca que se cuentan los hilos y se ven los nudos.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO del telar de marco en el rincón, con la manta terminada encima y el fogón al lado.",
    },
    ini: "sólo se ven los hilos cruzados, uno a uno.",
    fin: "desde más lejos se ve el telar entero con la manta acabada encima y, junto a él, la esterilla gastada donde alguien se sentó muchas noches.",
  }, "personas, maquinas, telares industriales, resplandor"),
  escp("b2b", [ref("piraca_labrador"), ref("camino_carrera"), ref("familias_muiscas")], {
    comun: `Luz plana de mañana. ${PIRACA} tomando el camino al mercado con el bulto al hombro. Dijo que volvería con algo que pudieran cambiar por alimento. Objeto ancla: el bulto de mantas.`,
    camara: {
      a: "PLANO MEDIO por detrás de él saliendo de la casa, con dos figuras en el umbral quedándose atrás.",
      b: "la cámara se ha QUEDADO ATRÁS y ha subido: GRAN PLANO GENERAL en picado del camino, con él pequeño y solo sobre él y la casa ya lejos.",
    },
    ini: "sale de la casa y todavía se ven las figuras del umbral detrás de él.",
    fin: "desde arriba ya no se ve la casa: sólo el camino largo y él avanzando por el centro, con el bulto al hombro.",
  }, "despedida teatral, llanto, abrazos, multitudes"),

  // b3 — En el mercado le ofrecieron cuentas de oro. Cambió las mantas.
  escp("b3a", [ref("piraca_labrador"), ref("mercado_bacata"), ref("familias_muiscas")], {
    comun: `Mediodía sin sombras en EL MISMO mercado de la referencia. Le ofrecen cuentas de oro: el oro no se cocina ni llena una olla, pero puede viajar sin dañarse. Objeto ancla: las cuentas de oro mate.`,
    camara: {
      a: "PLANO GENERAL del mercado entero con él pequeño entre las mantas extendidas y los canastos.",
      b: "la cámara ha AVANZADO entre los puestos hasta una manta concreta y se ha puesto cenital: PLANO MACRO de un puñado de cuentas de oro mate sobre la tela, pequeñas y sin brillo de joyería.",
    },
    ini: "él está de pie en mitad del mercado con el bulto al hombro, buscando dónde tratar.",
    fin: "sobre la manta hay un puñado de cuentas de oro mate, apagadas y pequeñas, con una mano de él entrando por el borde del cuadro.",
  }, "monedas modernas, lingotes, cofres, joyeria pulida, brillos"),
  escp("b3b", [ref("piraca_labrador"), ref("mercado_bacata")], {
    comun: `Mediodía. El cambio hecho: las mantas se van y la bolsa queda. ${PIRACA} apretándola contra el pecho. Objeto ancla: la bolsa de tela.`,
    camara: {
      a: "PLANO MACRO de la bolsa pequeña de tela cerrándose con un cordón, muy cerca.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él saliendo del mercado con la bolsa apretada contra el pecho y las manos vacías del bulto.",
    },
    ini: "unas manos cierran el cordón de la bolsa.",
    fin: "ya sale del mercado con la bolsa apretada contra el pecho con las dos manos; el hombro donde llevaba las mantas está vacío.",
  }, "alegria, celebracion, dinero, monedas, avaricia caricaturizada"),

  // b4 — Un ave negra atrapó la bolsa. Cayeron cuentas.
  escp("b4a", [ref("ave_ladrona"), ref("piraca_labrador"), ref("sendero_territorio")], {
    comun: `Luz gris de camino. ${AVE} bajando sobre ${PIRACA}, rozándole el cabello y atrapando la bolsa con el pico. No es mal agüero: es un ave que roba. Objeto ancla: la bolsa en el pico.`,
    camara: {
      a: "PLANO MEDIO lateral de él caminando, con el ave entrando por el borde superior del cuadro.",
      b: "la cámara ha SUBIDO con el ave y ha basculado a PICADO: desde arriba se ve el ave alejándose con la bolsa en el pico y a él pequeño abajo, mirando hacia arriba.",
    },
    ini: "el ave baja hacia él y todavía no ha tocado nada.",
    fin: "desde arriba el ave ya vuela con la bolsa sujeta en el pico y él ha quedado abajo, pequeño, con las manos vacías levantadas.",
  }, "ojos rojos, garras, sombra amenazante, cuervo siniestro, sangre, ataque"),
  escp("b4b", [ref("piraca_labrador"), ref("sendero_territorio")], {
    comun: `Luz gris. Él corriendo detrás, tropezando entre piedras y raíces, gritando que era todo lo que tenían. La tela se desgarra y algunas cuentas caen sobre el sendero. Objeto ancla: las cuentas en la tierra.`,
    camara: {
      a: "PLANO MEDIO acompañándolo en carrera, con las raíces y las piedras pasando desenfocadas.",
      b: "la cámara se ha DETENIDO y ha bajado al suelo mientras él sigue: PLANO MACRO de tres cuentas de oro mate caídas entre la tierra y las raíces del sendero.",
    },
    ini: "corre tropezando con la cara vuelta hacia arriba.",
    fin: "en el suelo del sendero hay tres cuentas de oro mate entre la tierra, y al fondo y desenfocado se le ve ya de rodillas.",
  }, "sangre, heridas, llanto teatral, gritos, violencia"),

  // b5 — Una mano detuvo la suya: era Bochica. Hundió las cuentas.
  escp("b5a", [ref("bochica_anciano"), ref("piraca_labrador"), ref("sendero_territorio")], {
    comun: `Luz gris de camino. ${BOCHICA}, el viajero de larga barba que nadie sabía de dónde venía, deteniendo la mano de ${PIRACA}. Objeto ancla: las dos manos.`,
    camara: {
      a: "PLANO MACRO de la mano de Piracá bajando hacia una cuenta en la tierra.",
      b: "la cámara ha RETROCEDIDO y ha subido a la altura de los ojos: PLANO MEDIO de los dos agachados frente a frente, con la mano del viejo sobre la suya.",
    },
    ini: "su mano baja hacia la cuenta y va a cogerla.",
    fin: "otra mano, más vieja, se la ha detenido: los dos están agachados frente a frente en el camino, mirándose.",
  }, "aureola, resplandor, aparicion magica, rayos, angeles"),
  escp("b5b", [ref("bochica_anciano"), ref("sendero_territorio")], {
    comun: `${BOCHICA} hundiendo las cuentas en la tierra con el pulgar, una por una. Es un gesto de labrador, no de mago. Objeto ancla: el pulgar sobre la tierra.`,
    camara: {
      a: "PLANO MACRO del pulgar hundiendo una cuenta en la tierra del sendero.",
      b: "la cámara ha RETROCEDIDO a lo largo del camino y ha subido: PLANO GENERAL en picado con la hilera de pequeños hoyos hechos en la tierra y los dos hombres al lado.",
    },
    ini: "el pulgar mete una cuenta en la tierra blanda y la tapa.",
    fin: "desde arriba se ve una hilera de hoyitos tapados a lo largo del sendero: todas las cuentas están ya enterradas y no queda ninguna a la vista.",
  }, "magia, resplandor, particulas, rayos, brotes instantaneos"),

  // b6 — «¿Por qué entierras lo único que queda?». Le dio harina tostada.
  escp("b6a", [ref("piraca_labrador"), ref("bochica_anciano")], {
    comun: `Luz gris. ${PIRACA} preguntando por qué entierra lo único que les queda, y diciendo que su familia tiene hambre HOY. La objeción es justa y el relato no la resuelve. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO MEDIO de los dos de perfil, frente a frente y agachados.",
      b: "la cámara ha AVANZADO hasta la cara de Piracá: PRIMER PLANO de él hablando, con Bochica desenfocado detrás.",
    },
    ini: "los dos están frente a frente y él empieza a hablar.",
    fin: "de cerca se le ve la cara preguntando, cansada y sin rabia, con los ojos fijos en el viejo.",
  }, "gritos, violencia, llanto teatral, arrodillarse, adoracion"),
  escp("b6b", [ref("bochica_anciano"), ref("piraca_labrador"), ref("campo_pelado")], {
    comun: `${BOCHICA} mirando el campo pelado por el frío y sacando de su bolsa un poco de harina tostada. No resuelve el hambre de hoy: da lo justo para quince días. Objeto ancla: la harina en la mano.`,
    camara: {
      a: "PLANO GENERAL del campo helado y vacío, con los dos pequeños en el borde del camino.",
      b: "la cámara ha AVANZADO hasta sus manos: PLANO MACRO de un puñado pequeño de harina tostada pasando de una palma a otra.",
    },
    ini: "los dos miran el campo pelado desde el camino.",
    fin: "de muy cerca, un puñado pequeño de harina tostada cae de una mano vieja a una mano joven: es poco y se ve que es poco.",
  }, "cornucopia, abundancia, mesas repletas, milagro, resplandor"),

  // b7 — «Esto alcanza para esperar». (CITA)
  escp("b7a", [ref("bochica_anciano"), ref("piraca_labrador"), ref("sendero_territorio")], {
    comun: `Luz de tarde. ${BOCHICA} diciéndole que vuelva en quince días: esto alcanza para esperar, y lo que nazca tendrá que alcanzar para muchos. Objeto ancla: la cara del viejo.`,
    camara: {
      a: "PLANO MEDIO de los dos de pie en el camino, a la misma altura.",
      b: "la cámara ha RODEADO hasta el hombro de Piracá y ha avanzado: PLANO MEDIO CORTO de la cara de Bochica hablando, con la nuca de Piracá en primer término.",
    },
    ini: "los dos están de pie, frente a frente.",
    fin: "por encima del hombro de Piracá se ve al viejo terminando la frase, tranquilo, sin prometer nada más que eso.",
  }, "aureola, rayos, angeles, profecia dibujada, resplandor"),
  escp("b7b", [ref("bochica_anciano"), ref("sendero_territorio"), ref("altiplano_noche")], {
    comun: `Luz que se va. ${BOCHICA} yéndose por el camino y ${PIRACA} quedándose. Objeto ancla: el trecho de camino entre los dos.`,
    camara: {
      a: "PLANO MEDIO por detrás de Piracá, con el viejo alejándose de frente al fondo.",
      b: "la cámara se ha ELEVADO y ha girado: PLANO GENERAL lateral del camino entero, con el viejo ya en un extremo y Piracá parado en el otro, junto a la tierra removida.",
    },
    ini: "el viejo empieza a alejarse y todavía está cerca.",
    fin: "desde lejos, el viejo ha llegado casi al borde del cuadro y Piracá sigue parado junto a los hoyitos tapados, sin moverse.",
  }, "ascension, luz, nubes, desaparicion magica, aureola"),

  // b8 — Cada mañana pensó en desenterrar el oro. Al decimoquinto, plantas.
  escp("b8a", [ref("piraca_labrador"), ref("sendero_territorio")], {
    comun: `Quince amaneceres iguales. Cada mañana piensa en desenterrar el oro y cada mañana le concede un día más a la tierra. Ese precio se paga en escena. Objeto ancla: sus manos sobre la tierra.`,
    camara: {
      a: "PLANO MACRO de sus dedos rozando la tierra removida, a punto de escarbar.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del sendero al amanecer con él agachado y pequeño junto a la hilera de hoyos, y el campo helado alrededor.",
    },
    ini: "los dedos rozan la tierra del primer hoyo y se quedan ahí.",
    fin: "desde lejos se le ve levantarse sin haber escarbado y quedarse de pie, de espaldas, mirando la hilera intacta: otro día más.",
  }, "magia, resplandor, brotes instantaneos, particulas, calendario dibujado"),
  esc("b8b", [ref("planta_hojas_palidas"), ref("sendero_territorio"), ref("mazorca_abierta")], {
    comun: "Luz de la mañana decimoquinta. Crecen plantas que no había visto: hojas largas, tallos firmes y envolturas verdes coronadas de cabellos finos. Objeto ancla: una envoltura verde con cabellos.",
    camara: {
      a: "PLANO MACRO de los cabellos finos y claros asomando en la punta de una envoltura verde.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del borde del sendero con una hilera entera de plantas nuevas donde estaban los hoyos, altas y firmes.",
    },
    ini: "sólo se ven los cabellos claros de una envoltura, muy de cerca.",
    fin: "desde lejos se ve toda la hilera crecida a lo largo del sendero, planta por planta, exactamente donde se enterró cada cuenta.",
  }, "resplandor, magia visible, crecimiento acelerado con particulas, personas"),

  // b9 — Granos amarillos como dientes. «Siémbralas y regresarán».
  escp("b9a", [ref("piraca_labrador"), ref("mazorca_abierta")], {
    comun: `Luz de mañana. ${PIRACA} abriendo una envoltura con las manos. Adentro hay filas de granos amarillos, apretados como dientes. Objeto ancla: los granos.`,
    camara: {
      a: "PLANO MEDIO de él de pie junto a la planta, con las dos manos en la envoltura.",
      b: "la cámara ha AVANZADO hasta sus manos y se ha puesto cenital: PLANO MACRO de la mazorca abierta, con las hojas verdes retiradas hacia atrás y las filas de granos amarillos a la vista.",
    },
    ini: "sus manos empiezan a separar las hojas verdes.",
    fin: "la mazorca ha quedado abierta del todo en sus manos, con las hojas hacia atrás como pétalos y las filas de granos apretados llenando el cuadro.",
  }, "resplandor, oro, joyas, magia, aureola, milagro"),
  escp("b9b", [ref("bochica_anciano"), ref("piraca_labrador"), ref("mazorca_abierta"), ref("semillas_bolsita")], {
    comun: `${BOCHICA} diciendo que no son monedas: si las guarda todas terminarán, y si aparta una parte y la siembra regresarán. Es una regla de siembra, no una condena del oro. Objeto ancla: la mazorca partida en dos montones.`,
    camara: {
      a: "PLANO MEDIO de los dos con la mazorca entre ellos.",
      b: "la cámara ha DESCENDIDO hasta el suelo y se ha puesto cenital: PLANO DETALLE de dos montones de granos sobre una manta, uno claramente más pequeño que el otro, y una mano sobre el pequeño.",
    },
    ini: "los dos sostienen la mazorca abierta entre las manos.",
    fin: "en el suelo los granos están repartidos en dos montones: uno grande para comer y otro pequeño apartado para sembrar, con una mano protegiendo el pequeño.",
  }, "sermon, aureola, tablas de la ley, texto, oro, condena de la riqueza"),

  // b10 — Llevó las primeras mazorcas a su familia. Compartió semillas.
  escp("b10a", [ref("piraca_labrador"), ref("familias_muiscas"), ref("casa_barro_paja"), ref("mazorca_abierta")], {
    comun: "Luz de fogón dentro de la casa. Asaron unas mazorcas, molieron otras sobre la piedra y reservaron granos para la próxima siembra. Objeto ancla: la piedra de moler.",
    camara: {
      a: "PLANO MACRO de una mazorca sobre las brasas, con los granos tostándose.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del interior con la familia alrededor del fogón, una mujer moliendo en la piedra y un cuenco con los granos apartados en un rincón.",
    },
    ini: "la mazorca se tuesta sobre las brasas muy cerca del objetivo.",
    fin: "desde el fondo del cuarto se ve la casa entera trabajando: unos comiendo, una moliendo en la piedra y, aparte y sin tocar, el cuenco con los granos de la próxima siembra.",
  }, "banquete, abundancia barroca, mesas repletas, celebracion, llanto de alegria"),
  escp("b10b", [ref("piraca_labrador"), ref("familias_muiscas"), ref("poblado_nuevo"), ref("semillas_bolsita")], {
    comun: "Luz de mañana en el poblado. Después compartió semillas con las casas cercanas. Objeto ancla: el puñado de granos que pasa de mano en mano.",
    camara: {
      a: "PLANO MACRO de un puñado de granos amarillos pasando de una mano a otra en una puerta.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un PICADO ALTO del poblado: se ve a él yendo de casa en casa y a cuatro puertas distintas con gente recibiendo lo mismo.",
    },
    ini: "unos granos pasan de una mano a otra en el umbral de una casa.",
    fin: "desde arriba se ve el poblado con cuatro puertas abiertas y en cada una alguien con un puñado de granos en la mano.",
  }, "reparto ceremonial, aclamacion, aureola, multitud, adoracion"),

  // b11 — La primera cosecha no acabó el hambre. El maíz brillaba más.
  escp("b11a", [ref("piraca_labrador"), ref("sabana_cultivos"), ref("acequia_bosa")], {
    comun: "Luz de trabajo, varios días distintos en un mismo sitio. La primera cosecha NO acabó con el hambre: hubo que conocer los suelos, leer las lluvias, cuidar los brotes y defenderlos de las heladas. Objeto ancla: los brotes jóvenes.",
    camara: {
      a: "PLANO MACRO de unos brotes tiernos con escarcha en las puntas.",
      b: "la cámara ha RETROCEDIDO a lo largo del surco y ha subido: PLANO GENERAL del sembrado con él abriendo una acequia de tierra para llevar agua a la parte seca.",
    },
    ini: "los brotes tienen escarcha y están doblados por el frío.",
    fin: "desde lejos se ve el trabajo que cuesta: él abriendo la acequia a mano, el agua empezando a correr por ella y la mitad del sembrado todavía sin llegarle.",
  }, "cosecha milagrosa, abundancia, celebracion, aureola, magia"),
  esc("b11b", [ref("ave_ladrona"), ref("mazorca_abierta"), ref("sabana_cultivos")], {
    comun: "Luz rasante de tarde. Una pluma negra junto al sembrado, sostenida sobre una mazorca madura. Bajo la luz el maíz brilla más que las cuentas perdidas, y ADEMÁS sirve para comer. El cierre va seco. Objeto ancla: la pluma sobre la mazorca.",
    camara: {
      a: "PLANO MACRO de una pluma negra caída entre la tierra del borde del sembrado.",
      b: "la cámara ha SUBIDO con la pluma hasta la altura de las manos y ha retrocedido un poco: PLANO DETALLE de la pluma negra sostenida sobre una mazorca madura, con los granos amarillos debajo tomando la luz.",
    },
    ini: "la pluma está en la tierra, sola, sin ningún rencor a la vista.",
    fin: "la pluma está sostenida sobre la mazorca y los granos de debajo devuelven la luz de la tarde: sin efectos, sin resplandor y sin nadie celebrando nada.",
  }, "resplandor, oro, comparacion dibujada, texto, personas, celebracion"),
]);
