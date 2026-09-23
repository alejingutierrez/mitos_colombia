// Keyframes de Arámai — 13 bloques × 2 escenas × 2 cuadros = 52 imágenes ≈ 130 s.
// Guion: guion-aramai-v2.json (N=13) · Acta: acta-aramai.json (26 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
// Primer mito wayúu de la tubería de pares A→B.
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · Arámai NO ES UN VILLANO NI UN TRAIDOR: es un viejo que cuenta ollas, cuenta
//   bocas y no encuentra sitio para uno más. El canon construye su razón ANTES
//   que su petición, y el reparto de bloques lo respeta: cinco bloques de
//   escasez concreta antes de que pida nada.
// · LA PETICIÓN ES EXPLÍCITA y él no la disimula: pide que mueran algunos para
//   que los que queden tengan espacio. El canon no la suaviza y el guion
//   tampoco. Es la cita (b6).
// · MAREIWA NO CASTIGA NI CORRIGE: escucha la súplica y la atiende. La peste es
//   una concesión, no un juicio. Nada de gesto de condena ni de tribunal.
// · WANURÚ ES LA ENFERMEDAD HECHA CAMINANTE. La imagen puede mostrar el
//   recorrido, NO un monstruo.
// · LA PETICIÓN FUNCIONA: la tierra al fin tuvo espacio. El relato no desmiente
//   el resultado; lo que cuenta es lo que costó.
// · LA CULPA ES COLECTIVA Y POSTERIOR: nadie lo agradeció, y cuando supieron de
//   dónde salió la peste todos lo culparon. El nombre le quedó marcado.
// · ARÁMAI NO SE ARREPIENTE NI SE DEFIENDE: no niega la culpa y repite el hecho
//   que la causó. Esa terquedad es el final del relato, y el último par no
//   puede convertirla en redención ni en castigo.
//
// SENSIBILIDADES DECLARADAS EN EL INVENTARIO V4, que aquí mandan sobre la
// tentación de ilustrar:
// · `wanuru_caminante` — restringida: «No se le da cuerpo. Se marca su paso: la
//   casa al atardecer, el chinchorro a la mañana». El canon le da un estado
//   propio, `mariposa_nocturna_blanca`, y ése es el único cuerpo que se le
//   permite en cuadro.
// · `sarampion_y_pestes` — sensible: «se representa por su efecto en la casa
//   —el chinchorro ocupado de más, el corral sin pastor—, NUNCA por lesiones en
//   la piel».
// · `ninos_con_hambre` — sensible: «se representa la escena doméstica y la
//   dignidad del disimulo, NUNCA el cuerpo desnutrido». Van a media distancia y
//   de espaldas, y quien está en cuadro cerrado es el adulto que disimula.
// · `velorios` — sensible: se cuentan por los fuegos, las tinajas y la casa
//   cerrada, nunca por un cuerpo a la vista.
//
// REGLAS DE ENCUADRE DE LA BIBLIA V4 que cambian composiciones:
// · La vida NO pasa dentro de la casa: el escenario es la enramada.
// · NUNCA un poblado: cinco o seis casas dispersas de una misma familia materna.
// · La casa NO comparte encuadre con el agua: las rancherías están altas y
//   retiradas del jagüey.
// · La sequía NO es un pozo vacío: es gente cavando casimbas en el lecho seco.
//
// GUION DE LUZ: atardecer naranja del principio → mañana de huellas cruzadas →
// mediodía blanco de polvo → tarde de las ollas → noche doméstica del disimulo
// → amanecer del recuento → mañana limpia lejos de las casas → mediodía de la
// concesión → atardeceres sucesivos del paso → amaneceres del chinchorro vacío
// → noche de los fuegos del duelo → luz cruda del reproche → última luz.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-aramai-escenas";
export const OUT_DIR = "wayuu/videos/aramai/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; monstruo, espectro, figura encapuchada, guadaña o personificacion de la muerte; lesiones, pustulas, erupciones o manchas en la piel; cuerpos a la vista, ataudes abiertos, camillas o pilas de muertos; cuerpos demacrados o costillas marcadas; gesto de condena, tribunal, juicio, dedo acusador de una deidad; rayos, fuego divino, resplandor sobre Mareiwa; turba con antorchas, linchamiento, violencia fisica; carteles, simbolos de peste, cruces en las puertas";
export const PALETTE =
  PALETTE_BASE + "; el gris de la ceniza y el blanco calcareo del polvo entran solo en los bloques del paso de Wanuru";

const AR =
  "EL MISMO Arámai de la referencia (hombre wayúu muy mayor, pelo blanco corto y revuelto, cara delgada y muy arrugada, manta de algodón crudo terciada sobre el hombro, faja tejida de kanas en rojo tierra y negro a la cintura, descalzo, sin bastón ni adorno de metal)";

export const ITEMS = armar([
  // b1 — Arámai era ya viejo cuando la Guajira se le llenó de gente.
  escp("b1a", [ref("aramai"), ref("llanura_cardonal"), ref("rancheria")], {
    comun: `Atardecer naranja sobre la llanura de arena con cardones y trupillos. ${AR}, solo, mirando hacia donde están las casas. Capa de primer plano: matas de cardón en sombra. Objeto ancla: su cara contra la luz baja.`,
    camara: {
      a: "PRIMER PLANO de su cara de perfil contra la luz naranja, con los ojos entornados por el viento.",
      b: "la cámara ha RETROCEDIDO por encima de su hombro y se ha elevado: GRAN PLANO GENERAL en picado de la llanura con él diminuto abajo y, repartidas por el terreno, muchas más casas de las que caben.",
    },
    ini: "la cara arrugada de perfil ocupa el cuadro entero, mirando algo que todavía no se ve.",
    fin: "desde muy arriba se ve lo que miraba: la llanura entera salpicada de enramadas y corrales hasta el horizonte, y él como un punto en el borde.",
  }, "ciudad, calle, casas alineadas, multitud apretada en una plaza"),
  esc("b1b", [ref("rancheria"), ref("enramada"), ref("llanura_cardonal")], {
    comun: `Atardecer naranja. Donde antes había UNA ranchería ahora hay TRES, y se cuentan: tres grupos de casas dispersas, cada uno con su enramada, demasiado cerca unos de otros. Nunca un poblado ni una calle. Sin figuras en cuadro. Objeto ancla: las tres enramadas a la vez.`,
    camara: {
      a: "PLANO MEDIO de una sola enramada de horcones y palma seca contra el cielo de la tarde, sola en el cuadro.",
      b: "la cámara ha hecho un PANORÁMICO lento hacia la derecha y ha retrocedido subiendo: PLANO GENERAL en el que entran las otras dos rancherías, cada una con su enramada y su corral, tan pegadas que se ven las tres de un golpe.",
    },
    ini: "una enramada sola de horcones y palma seca recortada contra el cielo naranja.",
    fin: "al barrer el terreno aparecen las otras dos rancherías a pocos pasos, con sus enramadas y sus corrales: donde había una ahora hay tres.",
  }, "calle, plaza, casas alineadas, ciudad, vallas continuas"),

  // b2 — Chinchorros apretados, caminos cruzados de huellas, cabras raspando arena.
  esc("b2a", [ref("chinchorro"), ref("enramada")], {
    comun: `Luz de mañana entrando en diagonal por las rendijas de la enramada. Los chinchorros cuelgan APRETADOS de las mismas vigas, tantos que se tocan. El tejido de kanas se ve en la urdimbre y los flecos. Sin figuras. Objeto ancla: los chinchorros superpuestos.`,
    camara: {
      a: "PLANO MACRO de la urdimbre y los flecos de un chinchorro, tan cerca que se ven los hilos cruzados.",
      b: "la cámara ha RETROCEDIDO y ha basculado hacia arriba: PLANO GENERAL desde abajo de las vigas de la enramada con siete u ocho chinchorros colgados casi encima unos de otros.",
    },
    ini: "los hilos cruzados del tejido llenan el cuadro.",
    fin: "desde el suelo y mirando arriba se ven siete u ocho chinchorros colgados de las mismas vigas, tan juntos que se rozan.",
  }, "hamaca de playa, tela lisa, patron geometrico inventado con nombre"),
  esc("b2b", [ref("chivos"), ref("llanura_cardonal"), ref("rancheria")], {
    comun: `Mañana. Los caminos entre los cardones se cruzan de huellas —tantas que ya no se distingue una de otra— y las cabras raspan la arena buscando un pasto que no vuelve a crecer. Objeto ancla: las huellas cruzadas en la arena.`,
    camara: {
      a: "PLANO CENITAL MACRO de la arena cubierta de huellas de pies y de pezuñas cruzadas unas sobre otras.",
      b: "la cámara se ha ELEVADO y ha basculado al horizonte: PLANO GENERAL de la llanura con las cabras repartidas raspando la arena entre los cardones y las trochas cruzándose por todas partes.",
    },
    ini: "la arena está cubierta de huellas cruzadas de pies y pezuñas, vistas desde arriba y muy de cerca.",
    fin: "al subir la cámara se ve el conjunto: una docena de cabras raspando la arena entre los cardones, y las trochas cruzándose en todas direcciones.",
  }, "pasto verde, prados, animales gordos, cadaveres de animales"),

  // b3 — Los jagüeyes se secaban, el viento levantaba polvo. Arámai miraba las ollas.
  esc("b3a", [ref("jaguey"), ref("casimba"), ref("llanura_cardonal")], {
    comun: `Mediodía blanco de polvo. El jagüey se seca antes de que termine el verano: barro agrietado y, en el lecho, casimbas cavadas a mano para sacar agua turbia. La sequía NO es un pozo vacío: es gente cavando. La casa no comparte encuadre con el agua. Objeto ancla: la casimba con su agua salobre.`,
    camara: {
      a: "PLANO MACRO del barro agrietado del fondo del jagüey, con las placas de tierra levantadas por el sol.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del jagüey casi seco con tres personas agachadas en el lecho, cavando casimbas, y el viento levantando polvo por encima.",
    },
    ini: "las placas de barro agrietado del fondo llenan el cuadro.",
    fin: "desde arriba se ve el jagüey casi vacío con tres personas cavando casimbas en el lecho, y una cortina de polvo cruzando por detrás.",
  }, "pozo de brocal, cubo y cuerda, agua abundante, verde, casas junto al agua"),
  escp("b3b", [ref("aramai_escena"), ref("ceramica"), ref("enramada")], {
    comun: `Tarde, luz lateral bajo la enramada. ${AR} MIRANDO LAS OLLAS: tinajas y ollas de barro del reparto, alineadas en el suelo de arena. No habla con nadie; está haciendo una cuenta. Objeto ancla: el fondo de la olla.`,
    camara: {
      a: "PLANO CENITAL MACRO dentro de una olla de barro, con el fondo casi a la vista bajo un dedo de comida.",
      b: "la cámara ha SALIDO de la olla y ha retrocedido hasta la altura de los ojos: PLANO MEDIO de él sentado en cuclillas delante de la fila de ollas, con la cara baja, contando.",
    },
    ini: "desde arriba, el fondo de la olla se ve casi limpio bajo un dedo escaso de comida.",
    fin: "a la altura de los ojos se le ve en cuclillas delante de la fila entera de ollas, con la cara baja: está contando lo que hay.",
  }, "banquete, abundancia, mercado, monedas, balanzas"),

  // b4 — Menos entre más bocas. Los niños dormían con hambre y los mayores fingían.
  escp("b4a", [ref("fuego_y_cocina"), ref("enramada"), ref("mujer_mayor")], {
    comun: `Luz de fogón al anochecer bajo la enramada. Cada año se reparte menos entre más bocas: una mujer mayor sirve de la olla en totumas y la ración que cae en cada una es mínima. Objeto ancla: el cucharón sobre la totuma.`,
    camara: {
      a: "PLANO MACRO del cucharón vertiendo un chorro corto en una totuma, con el resplandor del fogón de lado.",
      b: "la cámara ha RETROCEDIDO y ha girado alrededor del fogón: PLANO GENERAL del corro entero con doce o catorce totumas extendidas esperando de la misma olla.",
    },
    ini: "el cucharón deja caer un chorro corto en la totuma, muy de cerca.",
    fin: "desde el otro lado del fogón se ve el corro completo: doce o catorce manos con la totuma extendida y una sola olla para todas.",
  }, "banquete, abundancia, carne asada, mesa servida, cuerpos demacrados"),
  escp("b4b", [ref("chinchorro"), ref("enramada"), ref("mujer_mayor")], {
    comun: `Noche cerrada bajo la enramada, con brasas apagándose. Los niños duermen con hambre y los mayores fingen no tenerla: lo que está en cuadro cerrado es la DIGNIDAD DEL DISIMULO del adulto, y los pequeños se ven a media distancia, de espaldas y ya dormidos en sus chinchorros. Objeto ancla: la cara del adulto que disimula.`,
    camara: {
      a: "PLANO GENERAL de la enramada de noche con los chinchorros ocupados, vistos de lejos y de espaldas, y las brasas abajo.",
      b: "la cámara ha AVANZADO entre los chinchorros hasta el fogón: PLANO MEDIO CORTO de una mujer mayor sentada junto a las brasas, con la totuma vacía en el regazo y la cara tranquila.",
    },
    ini: "desde lejos, la enramada de noche con los chinchorros ya ocupados y las brasas bajas.",
    fin: "junto al fogón, una mujer mayor está sentada con la totuma vacía en el regazo y la cara serena: no va a decir que no comió.",
  }, "cuerpos demacrados, costillas marcadas, llanto, miseria explotada, primer plano de menores"),

  // b5 — Contó a los suyos y a los vecinos. Una mañana habló con Mareiwa.
  escp("b5a", [ref("aramai"), ref("rancheria"), ref("llanura_cardonal")], {
    comun: `Amanecer limpio. ${AR} CONTANDO: recorre con la vista las rancherías que se ven desde la suya y marca la cuenta con los dedos de una mano. No encuentra un sitio libre para un indio más. Objeto ancla: los dedos que llevan la cuenta.`,
    camara: {
      a: "PLANO DETALLE de su mano doblando los dedos uno a uno, contra el fondo claro del amanecer.",
      b: "la cámara ha RETROCEDIDO siguiendo su mirada y se ha elevado muchísimo: GRAN PLANO GENERAL en picado con seis rancherías dispersas repartidas por la llanura, todas ocupadas.",
    },
    ini: "la mano dobla los dedos uno a uno, muy de cerca.",
    fin: "desde muy arriba se ve lo que está contando: seis rancherías repartidas por la llanura y ni un hueco entre ellas.",
  }, "mapas, cifras, rotulos, ciudad, casas alineadas"),
  escp("b5b", [ref("aramai"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Mañana, lejos de las casas. Camina apartándose hasta donde no hay nadie, y allí se detiene a hablar. Objeto ancla: la distancia entre él y las casas.`,
    camara: {
      a: "PLANO MEDIO de él de espaldas alejándose entre los cardones, cortado por el borde inferior del cuadro.",
      b: "la cámara se ha ADELANTADO hasta ponérsele de frente y ha bajado a ras de arena: PLANO MEDIO CORTO en contrapicado de él ya parado, solo, con el cielo vacío detrás y ninguna casa a la vista.",
    },
    ini: "de espaldas y cerca, se aleja entre los cardones.",
    fin: "de frente y desde abajo se le ve parado y solo, con el cielo entero detrás: no hay una sola casa en cuadro.",
  }, "altar, ofrenda, arrodillarse, templo, cruces, aureola"),

  // b6 — «Manda enfermedades, que mueran algunos». Mareiwa escuchó y atendió. (CITA)
  escp("b6a", [ref("aramai"), ref("llanura_cardonal")], {
    comun: `Mañana. LA CITA, y no la disimula: pide que la tierra deje de estar llena, que mueran algunos. Habla de pie, con la cara alzada y las manos quietas a los lados. Objeto ancla: su boca diciéndolo.`,
    camara: {
      a: "PLANO GENERAL de él pequeño y solo en mitad de la llanura, con la cara alzada.",
      b: "la cámara ha AVANZADO en línea recta hasta su cara: PRIMER PLANO de él terminando la frase, sin bajar los ojos.",
    },
    ini: "es una figura pequeña sola en la llanura, con la cara alzada.",
    fin: "de muy cerca se le ve acabar la frase sin bajar los ojos ni las manos: dijo exactamente lo que quiso decir.",
  }, "arrodillarse, manos juntas en oracion, llanto, aureola, texto en pantalla"),
  escp("b6b", [ref("mareiwa"), ref("llanura_cardonal")], {
    comun: `Mediodía. MAREIWA ESCUCHA Y ATIENDE: no castiga ni corrige, y no hay juicio en el gesto. Es EL MISMO Mareiwa de la referencia, de pie y quieto, con la mano baja y abierta. La concesión es un gesto pequeño. Objeto ancla: la mano abierta hacia abajo.`,
    camara: {
      a: "PLANO DETALLE de su mano abierta a la altura de la cadera, quieta, con la palma hacia el suelo.",
      b: "la cámara ha RETROCEDIDO y ha subido en diagonal: PLANO GENERAL de él de pie en la llanura, entero y pequeño, con la mano ya bajada del todo y nada alrededor.",
    },
    ini: "la mano abierta y quieta, con la palma hacia el suelo, llena el cuadro.",
    fin: "desde lejos se le ve entero y de pie en la llanura vacía, con la mano ya bajada: eso fue todo lo que hizo.",
  }, "gesto de condena, dedo acusador, rayos, fuego divino, trono, corona, aureola"),

  // b7 — Mandó el sarampión y las pestes. Y mandó a Wanurú a recorrer la Guajira.
  esc("b7a", [ref("chinchorro"), ref("piichi"), ref("enramada")], {
    comun: `Tarde. Las pestes se cuentan POR SU EFECTO EN LA CASA, nunca por la piel: un chinchorro ocupado a media mañana, cuando debería estar vacío, y la totuma de agua intacta al lado. Ninguna persona en cuadro cerrado. Objeto ancla: la totuma de agua sin tocar.`,
    camara: {
      a: "PLANO MACRO de una totuma de agua quieta en la arena, junto al fleco de un chinchorro que cuelga cargado.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del interior de la enramada con tres chinchorros ocupados a plena luz del día y nadie de pie.",
    },
    ini: "la totuma de agua está quieta en la arena, sin tocar, junto al fleco de un chinchorro cargado.",
    fin: "desde arriba se ve la enramada entera con tres chinchorros ocupados en mitad del día y nadie trabajando: eso es la peste, no una marca en la piel.",
  }, "lesiones, pustulas, manchas en la piel, enfermos con llagas, medicos, mascarillas"),
  esc("b7b", [ref("mariposa_nocturna"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Última luz. WANURÚ NO TIENE CUERPO: el canon le da el estado de MARIPOSA NOCTURNA BLANCA, y ése es el único cuerpo que se le permite. Empieza a recorrer la Guajira. Objeto ancla: la mariposa blanca.`,
    camara: {
      a: "PLANO MACRO de una mariposa nocturna blanca posada en el brazo de un cardón, con las alas abiertas y quietas.",
      b: "la cámara la ha SEGUIDO al levantar el vuelo y se ha elevado tras ella: GRAN PLANO GENERAL en picado de la llanura al anochecer con la mariposa minúscula avanzando sobre las rancherías dispersas.",
    },
    ini: "la mariposa nocturna blanca está posada en el brazo del cardón con las alas abiertas.",
    fin: "desde muy arriba se la ve cruzar la llanura al anochecer, minúscula, por encima de las rancherías repartidas.",
  }, "monstruo, espectro, figura encapuchada, guadaña, calavera, demonio, niebla siniestra"),

  // b8 — De ranchería en ranchería. Entraba al caer la tarde; por la mañana faltaba alguien.
  esc("b8a", [ref("piichi"), ref("rancheria"), ref("mariposa_nocturna")], {
    comun: `Caída de la tarde, luz naranja muy baja. SE MARCA SU PASO, no su cuerpo: la casa al atardecer con la puerta abierta y la mariposa blanca entrando por el vano. Objeto ancla: el vano de la puerta.`,
    camara: {
      a: "PLANO GENERAL de la casa de barro con la puerta abierta y la última luz naranja dándole de lado.",
      b: "la cámara ha AVANZADO hasta el umbral y ha girado hacia el interior oscuro: PLANO MEDIO del vano desde muy cerca, con la mariposa blanca ya dentro y el cuarto en penumbra.",
    },
    ini: "desde fuera, la casa de barro con la puerta abierta recibe la última luz naranja.",
    fin: "en el umbral y mirando adentro, la mariposa blanca ya ha pasado al cuarto en penumbra.",
  }, "monstruo, sombra con forma humana, espectro, niebla siniestra, calavera"),
  esc("b8b", [ref("chinchorro"), ref("enramada"), ref("piichi")], {
    comun: `Amanecer gris, la mañana siguiente. Por la mañana falta alguien: un chinchorro CAÍDO Y VACÍO en el sitio donde estaba colgado, con los cabos sueltos. No hay cuerpo en cuadro. Objeto ancla: el cabo suelto del chinchorro.`,
    camara: {
      a: "PLANO MACRO del cabo deshecho de un chinchorro colgando del horcón, con las hebras abiertas.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la enramada al amanecer con un hueco en la fila de chinchorros y el tejido caído en la arena debajo.",
    },
    ini: "el cabo deshecho cuelga del horcón con las hebras abiertas.",
    fin: "desde arriba se ve la fila de chinchorros con un hueco en el medio y el tejido caído en la arena: por la mañana faltaba alguien.",
  }, "cuerpo, cadaver, ataud, mortaja con forma de cuerpo, camilla, luto teatral"),

  // b9 — La fiebre corría más rápido que las noticias. Las cabras sin quien las lleve.
  escp("b9a", [ref("caminantes"), ref("llanura_cardonal"), ref("rancheria")], {
    comun: `Mañana. La fiebre corre más rápido que las noticias: un mensajero va por la trocha hacia la ranchería siguiente, y llega tarde. Objeto ancla: sus pies corriendo en la arena.`,
    camara: {
      a: "PLANO DETALLE de dos pies descalzos corriendo en la arena, con el polvo saltando.",
      b: "la cámara se ha ELEVADO y ha adelantado al corredor: GRAN PLANO GENERAL en picado con él todavía a mitad de camino y, al final de la trocha, la ranchería de destino ya con los chinchorros ocupados de día.",
    },
    ini: "dos pies descalzos corren en la arena y el polvo salta a cada zancada.",
    fin: "desde arriba se ve que aún le falta medio camino y que en la ranchería de destino los chinchorros ya están ocupados a plena luz: la noticia llega después.",
  }, "caballos al galope, carruajes, telegrafo, cartas, texto"),
  esc("b9b", [ref("corral"), ref("chivos"), ref("rancheria")], {
    comun: `Mediodía. El efecto que el inventario sí permite: EL CORRAL SIN PASTOR. Las cabras quedan encerradas sin quien las lleve al monte, apretadas contra la cerca de varas. Sin personas en cuadro. Objeto ancla: el portillo cerrado.`,
    camara: {
      a: "PLANO MACRO del portillo del corral atado con una cuerda, visto desde fuera, sin nadie cerca.",
      b: "la cámara ha PASADO por encima de la cerca y se ha elevado: PLANO GENERAL en picado del corral con quince cabras amontonadas en la esquina de sombra y el camino al monte vacío detrás.",
    },
    ini: "el portillo está atado con una cuerda y no hay nadie alrededor.",
    fin: "desde arriba se ven quince cabras amontonadas en la esquina de sombra del corral, y detrás el camino al monte sin una sola persona.",
  }, "animales muertos, esqueletos, carronia, pastor en cuadro"),

  // b10 — Los velorios se seguían unos a otros. La tierra, al fin, tuvo espacio.
  esc("b10a", [ref("choza_del_duelo"), ref("ajuar_funerario"), ref("cementerio")], {
    comun: `Noche. Los velorios se siguen unos a otros, y se cuentan POR LOS FUEGOS Y LAS TINAJAS, nunca por un cuerpo: hogueras pequeñas encendidas y las tinajas volteadas del duelo. Ninguna figura ni bulto humano en cuadro. Objeto ancla: una hoguera pequeña.`,
    camara: {
      a: "PLANO MACRO de una hoguera pequeña entre piedras, con las tinajas volteadas al lado.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL nocturno en picado de la llanura con cinco hogueras encendidas en cinco sitios distintos a la vez.",
    },
    ini: "una hoguera pequeña arde entre piedras, con las tinajas volteadas al lado.",
    fin: "desde muy arriba se ven cinco hogueras encendidas a la vez en cinco puntos distintos de la llanura oscura: son cinco velorios seguidos.",
  }, "cuerpos, ataudes, mortajas con forma humana, dolientes llorando, calaveras, procesion"),
  esc("b10b", [ref("rancheria"), ref("llanura_cardonal"), ref("enramada")], {
    comun: `Mañana limpia. LA PETICIÓN FUNCIONÓ y el relato no lo desmiente: la tierra al fin tuvo espacio. Es el MISMO encuadre del terreno de b1b pero ahora hay hueco: menos enramadas, menos chinchorros, distancia entre las casas. Sin dramatismo. Objeto ancla: el espacio vacío entre las casas.`,
    camara: {
      a: "PLANO MEDIO de una enramada con sólo dos chinchorros colgados, donde antes había ocho.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado de la misma llanura, ahora con dos rancherías separadas por un trecho largo de arena vacía.",
    },
    ini: "en la enramada quedan dos chinchorros colgados y las demás vigas están desnudas.",
    fin: "desde muy arriba, la misma llanura tiene ahora dos rancherías separadas por un trecho largo de arena vacía: hay sitio.",
  }, "ruinas, desolacion, casas quemadas, huesos, dramatismo, cuerpos"),

  // b11 — Nadie lo agradeció. Cuando supieron de dónde salió, todos lo culparon.
  escp("b11a", [ref("aramai_escena"), ref("enramada"), ref("primeros_wayuu")], {
    comun: `Luz cruda de mediodía bajo la enramada. NADIE LO AGRADECIÓ: ${AR} pasa entre la gente y nadie le devuelve el saludo ni lo mira. La indiferencia, todavía no la acusación. Objeto ancla: las caras que se apartan.`,
    camara: {
      a: "PLANO MEDIO de él entrando bajo la enramada con la mano medio levantada para saludar.",
      b: "la cámara ha GIRADO detrás de él y ha retrocedido: PLANO GENERAL en el que se ve a cinco personas de espaldas o de perfil, todas ocupadas en otra cosa, y él parado en medio con la mano ya bajada.",
    },
    ini: "entra bajo la enramada con la mano medio levantada para saludar.",
    fin: "desde atrás se ve a cinco personas vueltas hacia otro lado, cada una en lo suyo, y a él parado en el centro con la mano ya bajada.",
  }, "turba, antorchas, empujones, violencia, escupir, gritos dibujados"),
  escp("b11b", [ref("primeros_wayuu"), ref("aramai_escena"), ref("enramada")], {
    comun: `Luz cruda. Cuando supieron de dónde había salido la peste, TODOS lo culparon: la culpa es colectiva y llega después. Se dicen entre ellos y luego lo miran, sin tocarlo. Objeto ancla: las miradas que convergen.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos personas hablándose al oído, de perfil, con la vista puesta fuera de cuadro.",
      b: "la cámara ha RETROCEDIDO y ha girado hasta ponerse detrás de él: PLANO GENERAL desde su espalda con ocho personas a distintas distancias, todas con la cara vuelta hacia él.",
    },
    ini: "dos personas se hablan al oído mirando algo que está fuera de cuadro.",
    fin: "desde detrás de su hombro se ve a ocho personas repartidas por el terreno, todas con la cara vuelta hacia él y ninguna acercándose.",
  }, "turba con antorchas, linchamiento, golpes, piedras, cuerdas, violencia fisica"),

  // b12 — Por él había tanta enfermedad. La culpa se le quedó pegada al nombre.
  escp("b12a", [ref("aramai"), ref("rancheria"), ref("mariposa_nocturna")], {
    comun: `Tarde. Por él andaba Wanurú suelto por la Guajira: se juntan en un mismo plano él y el paso que pidió, sin que él lo mire. Objeto ancla: la mariposa blanca cruzando por delante.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara quieta, de tres cuartos, mirando al frente.",
      b: "la cámara ha RETROCEDIDO en travelling largo y ha subido: PLANO GENERAL con él pequeño y quieto en el terreno y la mariposa blanca cruzando el cuadro en primer término, muy cerca del objetivo.",
    },
    ini: "la cara quieta de tres cuartos, mirando al frente, sin gesto.",
    fin: "desde lejos se le ve pequeño y parado, y la mariposa blanca cruza por delante de la cámara sin que él vuelva la cabeza.",
  }, "monstruo, espectro, sombra humana, demonio, fuego, dramatismo"),
  esc("b12b", [ref("llanura_cardonal"), ref("cardon"), ref("rancheria")], {
    comun: `Última luz. La culpa se le quedó PEGADA AL NOMBRE y no se la quitaron los años: se cuenta con el tiempo pasando sobre el mismo sitio, no con una marca ni un cartel. Sin figuras. Objeto ancla: el mismo cardón, más viejo.`,
    camara: {
      a: "PLANO MACRO del tronco de un cardón con las cicatrices viejas de la corteza.",
      b: "la cámara ha RETROCEDIDO y se ha elevado despacio: PLANO GENERAL del mismo sitio con el cardón ya mucho más alto y ramificado, y la ranchería al fondo cambiada de forma.",
    },
    ini: "el tronco del cardón, con las cicatrices viejas de la corteza, llena el cuadro.",
    fin: "desde lejos se ve el mismo sitio con el cardón ya mucho más alto y la ranchería del fondo cambiada: pasaron los años y la cosa siguió igual.",
  }, "carteles, nombres escritos, simbolos, cruces, tumbas con inscripcion, texto"),

  // b13 — No la negó. Sólo dijo que no había alimentos para tantos indios.
  escp("b13a", [ref("aramai"), ref("primeros_wayuu"), ref("enramada")], {
    comun: `Última luz bajo la enramada. NO LA NIEGA: lo que pidió, lo pidió. No se defiende, no baja la cara y no pide perdón. Objeto ancla: su cara sosteniendo la mirada.`,
    camara: {
      a: "PLANO GENERAL de él sentado en el suelo de arena con la gente de pie alrededor, todos mirándolo.",
      b: "la cámara ha AVANZADO hasta él y ha bajado al nivel de sus ojos: PRIMER PLANO de su cara sosteniendo la mirada, sin apartarla y sin endurecerla.",
    },
    ini: "está sentado en la arena y la gente de pie lo rodea, mirándolo.",
    fin: "de muy cerca y a su altura, sostiene la mirada sin apartarla: no niega nada.",
  }, "arrepentimiento, llanto, manos juntas, suplica, castigo, expulsion, aureola"),
  escp("b13b", [ref("aramai"), ref("ceramica"), ref("llanura_cardonal")], {
    comun: `Última luz. Sólo dice lo que sabe: que no había alimentos para tantos indios y que el hambre cundía por toda la Guajira. Repite el hecho que causó la culpa, y ahí termina. Objeto ancla: la olla vacía, otra vez.`,
    camara: {
      a: "PLANO DETALLE de su mano señalando el interior vacío de una olla de barro.",
      b: "la cámara ha RETROCEDIDO en travelling largo y se ha elevado hasta el cielo: GRAN PLANO GENERAL final de la llanura al atardecer con él minúsculo junto a la olla y la Guajira entera abierta detrás.",
    },
    ini: "su mano señala el interior vacío de la olla de barro.",
    fin: "desde muy arriba y muy lejos queda él, minúsculo, junto a la olla, y la llanura entera abierta detrás hasta el horizonte.",
  }, "aureola, monumento, tumba, redencion, perdon, abrazo, castigo divino, texto"),
]);
