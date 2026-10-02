// Keyframes de Maleiwa y el Jaguar — 18 bloques × 2 escenas × 2 cuadros
// = 72 imágenes ≈ 180 s.
// Guion: guion-maleiwa-v2.json (N=18) · Acta: acta-maleiwa.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · MALEIWA NACE de un vientre sin padre y de una madre que después es comida:
//   NO ES UN CREADOR QUE LLEGA DE ARRIBA. Sale de los residuos escupidos entre
//   los dientes de Jaguar. Ninguna imagen puede darle rango de dios.
// · LA MADRE NO ES CULPABLE DE SU CEGUERA: es UNA ASTILLA CORTANDO LEÑA,
//   después de que el niño se disgustó. El canon encadena las dos cosas SIN
//   EXPLICARLAS, y el guion tampoco las explica.
// · JAGUAR CRÍA A LOS TRES Y LOS QUIERE MUCHO: les hace flechas de metal y los
//   lleva a cazar. LA VENGANZA ES CONTRA QUIEN LOS ALIMENTÓ, y eso tiene que
//   doler en cuadro.
// · QUIEN REVELA EL SECRETO ES LA PALOMA VIEJA, Y LO HACE POR DESPECHO después
//   de que le roban melones. LA VERDAD LLEGA POR UNA PELEA DE HUERTA.
// · MALEIWA CASTIGA A QUIEN LE DICE LA VERDAD: le quema las pestañas a Paloma,
//   y desde entonces canta «ay, mis pestañas». EL CANON NO LO JUSTIFICA y el
//   guion tampoco.
// · EL ENGAÑO DEL BANQUETE ES EXACTO: Maleiwa toma los rasgos de la vieja
//   —PELO BLANCO, ALGODÓN HILADO EN LA PIERNA— y le sirve su propia madre.
// · LAS MANCHAS DEL JAGUAR, LAS ESTRÍAS DEL PALO BRASIL Y LA BOCA SIN DIENTES
//   DEL CACHICAMO SON ETIOLOGÍAS Y DEBEN VERSE: son lo que queda de la
//   persecución.
// · EL RELATO NO TERMINA EN VICTORIA: Jaguar se refugia en una montaña lejana y
//   Maleiwa sigue persiguiéndolo. NADIE CIERRA LA CUENTA.
//
// DOS SENSIBILIDADES DECLARADAS y cómo se resuelven aquí:
// · `madre_de_los_tres` (sensible) y su muerte: NI LA DEVORACIÓN NI LOS
//   RESIDUOS SE MUESTRAN. El plano corta del jaguar entrando a la casa al
//   algodón donde después lloran los tres.
// · `fulera` (sensible): «el episodio incluye un intercambio sexual coercitivo.
//   SE REPRESENTA LA SED Y LA NEGATIVA DEL AGUA, NO EL ACTO». En cuadro sólo
//   hay un caracol, una boca seca y un agua que no aparece.
//
// DESLINDE OBLIGATORIO: este Maleiwa es UN NIÑO CRIADO POR EL JAGUAR, ficha
// distinta del `mareiwa` que reparte castas en «creacion-wayuu» y del que
// sentencia en «serranias». Cuatro caras del mismo nombre en el corpus.
//
// GUION DE LUZ: mar del gavilán al amanecer → penumbra del encierro → luz de la
// flecha tallada → golpe y silencio → astilla y ceguera → dos días de camino a
// ciegas → penumbra de Jorolamatu → corte: el algodón que llora → crianza al
// sol → huerta de melones → despecho de Paloma → pestañas quemadas → flechazo a
// la vieja → banquete del engaño → huida y fuego → manchas del quemado → sed
// en el caracol → palo brasil y cachicamo, y la montaña que no se alcanza.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-maleiwa-escenas";
export const OUT_DIR = "wayuu/videos/maleiwa/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; canibalismo a la vista, carne humana, restos, despiece, cuerpo devorado, sangre, visceras, gore; parto, vientre desnudo, anatomia, feto, recien nacido, cordon; ojo reventado, herida en la cara, sangre en el rostro, ceguera dibujada con efectos; violencia sexual, coercion, acto sexual, desnudez, insinuacion erotica; jaguar monstruoso, ojos brillantes, colmillos goteando, hibrido hombre-jaguar, licantropo; dios anciano de barba blanca, trono, aureola, creacion del mundo, resplandor divino; transformacion dibujada, humo, particulas, magia; final triunfal, apoteosis, monumento";
export const PALETTE =
  PALETTE_BASE + "; el algodon blanco es el hilo del mito —donde crian a los tres, donde hila la vieja, con lo que se queman las pestanas— y es el unico blanco; el fuego de la persecucion trae el naranja del tercio final";

const MC =
  "EL MISMO Maleiwa muchacho de la referencia (niño y después muchacho wayúu, delgado, pelo negro, wayuco y manta corta de algodón crudo, descalzo), criado por el jaguar y NUNCA con rango de dios: sin aureola, sin manto, sin nada que lo distinga";
const KU =
  "EL MISMO Kulirapata de la referencia (jaguar real, pelaje ocre con rosetas negras, cuerpo pesado y musculoso), enteramente animal, sin un solo rasgo humano y SIN gesto de monstruo";
const VJ =
  "LA MISMA madre de Jaguar de la referencia (mujer muy anciana, PELO BLANCO suelto, manta larga de algodón crudo, sentada casi siempre con el ALGODÓN HILADO SOBRE LA PIERNA)";

export const ITEMS = armar([
  // b1 — El gavilán del mar fue antes un hombre pescador. Encerraron a su hija.
  esc("b1a", [ref("gavilan_del_mar"), ref("costa_penascos")], {
    comun: `Amanecer sobre el mar. EL GAVILÁN DEL MAR FUE ANTES UN HOMBRE PESCADOR: ahora es ave, y sólo ave. Objeto ancla: el ave dejándose caer sobre el agua.`,
    camara: {
      a: "PLANO MACRO de las plumas del pecho de un gavilán posado en una roca, con el agua salpicando detrás.",
      b: "la cámara ha RETROCEDIDO y se ha elevado siguiéndolo: PLANO GENERAL de la costa con el ave dejándose caer en picado sobre el agua, las alas plegadas.",
    },
    ini: "las plumas del pecho de un gavilán posado en una roca, con el agua salpicando detrás.",
    fin: "desde arriba, el ave se deja caer en picado sobre el agua con las alas plegadas.",
  }, "hibrido hombre-ave, cara humana, transformacion dibujada, resplandor"),
  esc("b1b", [ref("casa_del_encierro"), ref("chinchorro")], {
    comun: `Penumbra. A SU HIJA, AL TENER SUS PRIMERAS REGLAS, LA ENCERRARON: el encierro se resuelve como en todo el corpus —el chinchorro nuevo templado casi al techo, la muchacha invisible dentro—. NO se la muestra. Objeto ancla: el chinchorro templado alto.`,
    camara: {
      a: "PLANO MACRO del cabo nuevo de un chinchorro amarrado muy arriba en el horcón, tenso.",
      b: "la cámara ha BAJADO al suelo de arena y ha retrocedido: PLANO GENERAL del cuarto en penumbra visto desde abajo, con el chinchorro cerrado allá arriba y una sola rendija de luz.",
    },
    ini: "el cabo nuevo del chinchorro, amarrado muy arriba en el horcón y tenso.",
    fin: "desde el suelo, el cuarto en penumbra tiene el chinchorro cerrado allá arriba y una sola rendija de luz.",
  }, "figura visible, cuerpo, sangre, anatomia, celda, barrotes, llanto"),

  // b2 — Salió hecha una joven y estaba encinta. Se formó solo en su vientre.
  escp("b2a", [ref("madre_de_los_tres"), ref("casa_del_encierro")], {
    comun: `Luz blanca en el vano. SALIÓ HECHA UNA JOVEN: LA MISMA madre de la referencia, joven, vestida con la manta puesta, entornando los ojos al salir. Objeto ancla: su cara contra la claridad.`,
    camara: {
      a: "PLANO GENERAL del exterior con el vano oscuro y ella apareciendo en él, pequeña y a contraluz.",
      b: "la cámara ha AVANZADO hasta ella y ha bajado a la altura de los ojos: PLANO MEDIO CORTO de su cara con los ojos entornados por la claridad.",
    },
    ini: "en el vano oscuro aparece una figura pequeña a contraluz.",
    fin: "de cerca se le ve la cara entornando los ojos ante la claridad.",
  }, "vientre desnudo, anatomia, desnudez, insinuacion, sangre"),
  escp("b2b", [ref("madre_de_los_tres"), ref("rancheria"), ref("manta_wayuu")], {
    comun: `Luz plana. DESCUBRIÓ QUE ESTABA ENCINTA Y NADIE HABÍA VENIDO: SE FORMÓ SOLO EN SU VIENTRE. Se lee por la caída de la manta y por las caras que se quedan quietas, nunca por el cuerpo. Objeto ancla: el pliegue de la manta.`,
    camara: {
      a: "PLANO DETALLE del pliegue de la manta cayendo desde el pecho, sin cuerpo a la vista.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ranchería con ella parada en el centro y tres personas alrededor que se han quedado quietas mirándola.",
    },
    ini: "el pliegue de la manta cae desde el pecho, visto muy de cerca.",
    fin: "desde arriba está parada en el centro y tres personas alrededor se han quedado quietas mirándola.",
  }, "vientre desnudo, anatomia, feto, ecografia, desnudez, senalar con el dedo"),

  // b3 — El niño habló desde adentro y pidió flechas. Ella talló una.
  escp("b3a", [ref("madre_de_los_tres"), ref("enramada")], {
    comun: `Luz plana. CON EL VIENTRE CRECIDO, EL NIÑO HABLÓ DESDE ADENTRO Y PIDIÓ FLECHAS: la voz se cuenta con la cara de ella escuchando, no con el cuerpo. Objeto ancla: su cara oyendo algo que viene de dentro.`,
    camara: {
      a: "PLANO GENERAL de ella sentada sola bajo la enramada, quieta, de perfil.",
      b: "la cámara ha AVANZADO hasta su cara y ha girado al frente: PLANO MEDIO CORTO de ella con la cabeza ladeada, escuchando hacia abajo, sorprendida y sin miedo.",
    },
    ini: "está sentada sola bajo la enramada, quieta y de perfil.",
    fin: "de cerca tiene la cabeza ladeada, escuchando hacia abajo, sorprendida y sin miedo.",
  }, "vientre desnudo, anatomia, boca en el vientre, feto, resplandor, body horror"),
  escp("b3b", [ref("madre_de_los_tres"), ref("arco_flechas"), ref("maderas")], {
    comun: `Luz plana. ELLA TALLÓ UNA, Y ÉL NO SALIÓ: la flecha se hace de verdad, con las manos, y no sirve de nada. Objeto ancla: la flecha terminada en el suelo.`,
    camara: {
      a: "PLANO MACRO de una mano raspando el astil de una flecha con una lasca de piedra, sacando viruta.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO MEDIO de la flecha terminada puesta en el suelo delante de ella, y ella sentada igual que antes, esperando.",
    },
    ini: "una mano raspa el astil de una flecha con una lasca de piedra y saca viruta.",
    fin: "la flecha terminada está en el suelo delante de ella, que sigue sentada igual que antes, esperando.",
  }, "magia, resplandor, flecha flotando, particulas, parto"),

  // b4 — Se golpeó el vientre. «¡Sal, ya que eres cazador!». Y no habló más. (CITA)
  escp("b4a", [ref("madre_de_los_tres"), ref("enramada")], {
    comun: `Luz plana. CANSADA, SE GOLPEÓ EL VIENTRE Y LE GRITÓ. LA CITA es lo que desata todo lo que sigue. El golpe NO se muestra: se ve la mano cerrada y después la cara gritando. Objeto ancla: el puño cerrado.`,
    camara: {
      a: "PLANO MACRO de un puño cerrándose con fuerza, con los nudillos tensos, a la altura de la cintura.",
      b: "la cámara ha SUBIDO hasta su cara y ha cerrado: PRIMER PLANO de ella gritando la frase, con rabia y cansancio.",
    },
    ini: "un puño se cierra con fuerza, con los nudillos tensos, a la altura de la cintura.",
    fin: "de muy cerca grita la frase, con rabia y cansancio.",
  }, "golpe en plano, vientre desnudo, sangre, anatomia, aborto, violencia"),
  escp("b4b", [ref("madre_de_los_tres"), ref("enramada")], {
    comun: `Luz plana. Y EL NIÑO NO HABLÓ MÁS: el silencio es lo que queda, y ella espera en vano. Objeto ancla: el silencio, contado con la espera.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara ya sin rabia, con la cabeza otra vez ladeada, esperando oír algo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con ella sola y pequeña sentada, la flecha todavía en el suelo delante y nadie más.",
    },
    ini: "su cara ya sin rabia, con la cabeza otra vez ladeada, esperando oír algo.",
    fin: "desde arriba está sola y pequeña sentada, con la flecha todavía en el suelo delante y nadie más.",
  }, "llanto teatral, desesperacion, sangre, aborto, anatomia, resplandor"),

  // b5 — Una astilla le reventó un ojo y el otro cegó. Caminó dos días.
  esc("b5a", [ref("maderas"), ref("trupillo")], {
    comun: `Luz de mañana. CORTANDO LEÑA, UNA ASTILLA: la ceguera es UN ACCIDENTE y ELLA NO ES CULPABLE. El accidente NO se muestra en la cara: se cuenta con la astilla saltando de la madera. Objeto ancla: la astilla en el aire.`,
    camara: {
      a: "PLANO MACRO del canto de un palo partiéndose bajo el golpe, con una astilla larga saltando hacia la cámara.",
      b: "la cámara ha RETROCEDIDO de golpe y ha bajado al suelo: PLANO MEDIO del hacha de piedra y la leña caídas en la arena, abandonadas donde estaban.",
    },
    ini: "el canto del palo se parte bajo el golpe y una astilla larga salta hacia la cámara.",
    fin: "en la arena quedan el hacha de piedra y la leña caídas, abandonadas donde estaban.",
  }, "ojo reventado, sangre en la cara, herida, grito, gore, primer plano del dano"),
  escp("b5b", [ref("madre_de_los_tres"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Dos días de camino. CIEGA, CAMINÓ DOS DÍAS CON HAMBRE: la ceguera se cuenta con las manos por delante y el paso tanteado, SIN efectos en los ojos. Objeto ancla: las manos buscando el aire.`,
    camara: {
      a: "PLANO MACRO de dos manos abiertas por delante del cuerpo, palpando el aire y rozando una rama.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado de la llanura con ella diminuta avanzando en línea torcida, sin seguir ningún camino.",
    },
    ini: "dos manos abiertas por delante del cuerpo palpan el aire y rozan una rama.",
    fin: "desde muy arriba avanza diminuta en línea torcida, sin seguir ningún camino.",
  }, "ojos blancos, cuencas vacias, sangre, vendas, agonia, lastima teatral"),

  // b6 — Llegó a la casa de la madre de Jaguar, que la escondió. Jaguar volvió.
  escp("b6a", [ref("madre_de_jaguar"), ref("madre_de_los_tres"), ref("jorolamatu")], {
    comun: `Penumbra de Jorolamatu. LA MADRE DE JAGUAR LA ESCONDIÓ BAJO MANTAS: la vieja la protege, y eso también hay que recordarlo después. ${VJ}. Objeto ancla: las mantas echadas encima.`,
    camara: {
      a: "PLANO MACRO de una manta pesada cayendo y cubriendo un bulto en un rincón del suelo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del interior de la casa con la vieja sentada otra vez con su algodón y el rincón con las mantas amontonadas al fondo.",
    },
    ini: "una manta pesada cae y cubre un bulto en un rincón del suelo.",
    fin: "desde arriba, la vieja está sentada otra vez con su algodón y al fondo el rincón con las mantas amontonadas.",
  }, "cuerpo visible, cara, sangre, monstruo, sombras amenazantes"),
  esc("b6b", [ref("kulirapata"), ref("jorolamatu")], {
    comun: `Penumbra. JAGUAR VOLVIÓ PREGUNTANDO QUÉ OLÍA. ${KU}: es un jaguar de verdad, no un monstruo, y entra en su casa como quien llega de cazar. Objeto ancla: el hocico olfateando.`,
    camara: {
      a: "PLANO MACRO del hocico de un jaguar olfateando el aire, con las vibrisas y el vaho.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del vano con el animal entero entrando, pesado y tranquilo, y la vieja al fondo sin levantarse.",
    },
    ini: "el hocico del jaguar olfatea el aire, con las vibrisas y el vaho.",
    fin: "desde arriba, el animal entra entero por el vano, pesado y tranquilo, y la vieja no se levanta al fondo.",
  }, "ojos brillantes, colmillos goteando, monstruo, hibrido, rugido dibujado, sangre"),

  // b7 — La encontró y la mató. Escupió los residuos, que lloraron.
  escp("b7a", [ref("madre_de_jaguar"), ref("kulirapata"), ref("jorolamatu")], {
    comun: `Penumbra. NADA, DIJO LA VIEJA: miente por ella, y no le sirve. PERO JAGUAR LA ENCONTRÓ: lo que se muestra es el hocico llegando al rincón, y ahí CORTA. Objeto ancla: el borde de la manta levantándose.`,
    camara: {
      a: "PLANO MEDIO CORTO de la vieja hablando de perfil, tranquila, sin dejar de hilar.",
      b: "la cámara ha GIRADO al rincón y ha bajado: PLANO MACRO del borde de la manta levantándose un palmo, empujado desde abajo por un hocico.",
    },
    ini: "la vieja habla de perfil, tranquila, sin dejar de hilar.",
    fin: "en el rincón, el borde de la manta se levanta un palmo, empujado desde abajo por un hocico.",
  }, "ataque, sangre, cuerpo, gritos, forcejeo, gore, canibalismo"),
  esc("b7b", [ref("jorolamatu"), ref("cordeleria")], {
    comun: `Penumbra. AL COMERLA ESCUPIÓ LOS RESIDUOS, QUE LLORARON: NI LA DEVORACIÓN NI LOS RESIDUOS SE MUESTRAN. El plano corta AL ALGODÓN del suelo, blanco y limpio, del que sale un sonido. Objeto ancla: el copo de algodón.`,
    camara: {
      a: "PLANO MEDIO del rincón vacío y en penumbra, con las mantas caídas y nada dentro.",
      b: "la cámara ha GIRADO y ha bajado hasta el suelo: PLANO MACRO de un copo de algodón blanco y limpio en la arena, moviéndose apenas, sin nada más en cuadro.",
    },
    ini: "el rincón está vacío y en penumbra, con las mantas caídas y nada dentro.",
    fin: "en el suelo hay un copo de algodón blanco y limpio que se mueve apenas, y no hay nada más en cuadro.",
  }, "restos, carne, sangre, huesos, saliva, gore, canibalismo, bebes ensangrentados"),

  // b8 — La vieja los puso en algodón y les dio de comer: eran tres muchachos.
  escp("b8a", [ref("madre_de_jaguar"), ref("cordeleria"), ref("jorolamatu")], {
    comun: `Penumbra cálida. LA VIEJA LOS RECOGIÓ, LOS PUSO EN ALGODÓN Y LES DIO DE COMER: la misma vieja que mintió por la madre cría a los hijos. El algodón es el hilo del mito. Objeto ancla: las manos viejas sobre el algodón.`,
    camara: {
      a: "PLANO MACRO de dos manos arrugadas ahuecando un nido de algodón blanco en el suelo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del interior con la vieja sentada junto a tres bultos de algodón alineados, dándoles de comer.",
    },
    ini: "dos manos arrugadas ahuecan un nido de algodón blanco en el suelo.",
    fin: "desde arriba, la vieja está sentada junto a tres bultos de algodón alineados, dándoles de comer.",
  }, "bebes ensangrentados, restos, carne, sangre, monstruos, resplandor, magia"),
  escp("b8b", [ref("maleiwa_muchacho"), ref("kulirapata"), ref("jorolamatu")], {
    comun: `Luz de la mañana. ERAN TRES MUCHACHOS, Y JAGUAR LOS QUERÍA MUCHO: LOS CRÍA Y LOS QUIERE, y por eso duele lo que viene. Objeto ancla: el jaguar echado entre los tres.`,
    camara: {
      a: "PLANO MACRO de una mano pequeña apoyada en el pelaje de rosetas del lomo del jaguar.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio de la casa con el jaguar echado al sol y los tres muchachos alrededor, cerca y sin miedo.",
    },
    ini: "una mano pequeña apoyada en el pelaje de rosetas del lomo del jaguar.",
    fin: "desde arriba, el jaguar está echado al sol y los tres muchachos andan alrededor, cerca y sin miedo.",
  }, "monstruo, ojos brillantes, amenaza, colmillos, niños en peligro, sangre"),

  // b9 — Maleiwa, el menor, alimentaba la casa. Robaban melones a Paloma Vieja.
  escp("b9a", [ref("maleiwa_muchacho"), ref("arco_flechas"), ref("llanura_cardonal")], {
    comun: `Luz plana. MALEIWA, EL MENOR, EL ÚNICO CON PODERES, PRONTO ALIMENTABA LA CASA. ${MC}. Los poderes se cuentan con la puntería, no con efectos. Objeto ancla: la flecha que da siempre.`,
    camara: {
      a: "PLANO MACRO de una flecha de metal clavada limpiamente en el tronco de un cardón, vibrando.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL con él pequeño y solo a treinta pasos, ya bajando el arco, y tres piezas de caza colgadas de su cinto.",
    },
    ini: "una flecha de metal clavada limpiamente en el tronco de un cardón, vibrando.",
    fin: "desde lejos está pequeño y solo a treinta pasos, ya bajando el arco, con tres piezas colgadas del cinto.",
  }, "resplandor, aureola, poderes dibujados, rayos, magia, pose heroica"),
  escp("b9b", [ref("maleiwa_muchacho"), ref("huerta_melones")], {
    comun: `Mediodía. LOS TRES ROBABAN MELONES A LA PALOMA VIEJA: es una travesura de huerta, y de ahí sale toda la tragedia. Objeto ancla: el melón arrancado.`,
    camara: {
      a: "PLANO MACRO de unas manos arrancando un melón de la guía y el tallo partiéndose.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la huerta con los tres agachados entre las guías, en tres sitios distintos, y varios melones ya abiertos.",
    },
    ini: "unas manos arrancan un melón de la guía y el tallo se parte.",
    fin: "desde arriba, los tres están agachados entre las guías en tres sitios distintos, con varios melones ya abiertos.",
  }, "destruccion, vandalismo, caricatura, crueldad, sangre"),

  // b10 — Ella les gritó que eran residuos escapados de la muerte.
  escp("b10a", [ref("paloma_vieja"), ref("huerta_melones")], {
    comun: `Mediodía. ELLA LOS ESPERÓ ESCONDIDA: es un ave real, escondida entre las guías, vigilando su huerta. Objeto ancla: el ojo del ave entre las hojas.`,
    camara: {
      a: "PLANO MACRO de un ojo redondo de paloma entre las hojas de la huerta, muy quieto.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO del ave entera agachada entre las guías, con el plumaje pardo y las pestañas marcadas.",
    },
    ini: "un ojo redondo de paloma entre las hojas de la huerta, muy quieto.",
    fin: "el ave entera está agachada entre las guías, con el plumaje pardo y las pestañas marcadas.",
  }, "ave monstruosa, ojos brillantes, cara humana, gigante, resplandor"),
  escp("b10b", [ref("paloma_vieja"), ref("maleiwa_muchacho"), ref("huerta_melones")], {
    comun: `Mediodía. LES GRITÓ QUE ERAN RESIDUOS DE COMIDA, ESCAPADOS DE LA MUERTE: LA VERDAD LLEGA POR UNA PELEA DE HUERTA, y la dice por despecho. MALEIWA LA AMENAZÓ. Objeto ancla: las tres caras que se quedan quietas.`,
    camara: {
      a: "PLANO MEDIO del ave con el pico abierto, gritando desde la mata.",
      b: "la cámara ha GIRADO y ha retrocedido: PLANO GENERAL de la huerta con los tres muchachos parados en seco, cada uno con su melón en la mano, mirándola.",
    },
    ini: "el ave tiene el pico abierto y grita desde la mata.",
    fin: "al girar se ve a los tres parados en seco, cada uno con su melón en la mano, mirándola.",
  }, "texto en pantalla, subtitulos, resplandor, revelacion dibujada, flashback"),

  // b11 — Ella lo repitió. Maleiwa le quemó las pestañas con un algodón.
  escp("b11a", [ref("paloma_vieja"), ref("maleiwa_muchacho"), ref("huerta_melones")], {
    comun: `Mediodía. ELLA LO REPITIÓ: JAGUAR SE COMIÓ A TU MADRE. Lo dice otra vez, mirándolo. Objeto ancla: la cara de él oyéndolo dos veces.`,
    camara: {
      a: "PLANO MEDIO CORTO del ave repitiéndolo, con el pico abierto y el cuerpo adelantado.",
      b: "la cámara ha GIRADO 180 grados y ha cerrado: PRIMER PLANO de la cara de él sin ninguna expresión, quieta.",
    },
    ini: "el ave lo repite con el pico abierto y el cuerpo adelantado.",
    fin: "al girar, la cara de él está quieta y sin ninguna expresión.",
  }, "llanto, grito, rabia teatral, resplandor, ojos rojos"),
  escp("b11b", [ref("maleiwa_muchacho"), ref("paloma_vieja"), ref("cordeleria")], {
    comun: `Mediodía. MALEIWA LE QUEMÓ LAS PESTAÑAS CON UN ALGODÓN: CASTIGA A QUIEN LE DICE LA VERDAD, y EL CANON NO LO JUSTIFICA. Se cuenta con el algodón encendido y después con el ave sin pestañas, entera y viva. Objeto ancla: el copo de algodón ardiendo.`,
    camara: {
      a: "PLANO MACRO de un copo de algodón blanco prendiendo en la punta, con la llama pequeña y clara.",
      b: "la cámara ha RETROCEDIDO y ha girado al ave: PLANO MEDIO de la paloma posada aparte, entera y viva, con el borde de los ojos ya pelado y limpio.",
    },
    ini: "un copo de algodón blanco prende por la punta, con la llama pequeña y clara.",
    fin: "la paloma está posada aparte, entera y viva, con el borde de los ojos ya pelado y limpio.",
  }, "ave quemada, sangre, herida, agonia, crueldad explicita, gore"),

  // b12 — Decidió matar a la madre de Jaguar. La flechó y cocinaron el resto.
  escp("b12a", [ref("maleiwa_muchacho"), ref("madre_de_jaguar"), ref("jorolamatu")], {
    comun: `Tarde. DECIDIÓ MATAR A LA MADRE DE JAGUAR: la que los crió. VOLVIERON DE PRONTO Y LA FLECHÓ. El acto NO se muestra: se ve el arco montado y después el huso caído. Objeto ancla: el huso de hilar en el suelo.`,
    camara: {
      a: "PLANO MEDIO de él en el vano, de espaldas, con el arco montado y tensado.",
      b: "la cámara ha GIRADO al interior y ha bajado al suelo: PLANO MACRO del huso de hilar y el algodón caídos en la arena, con el hilo todavía enrollado.",
    },
    ini: "él está en el vano, de espaldas, con el arco montado y tensado.",
    fin: "dentro, en la arena, están caídos el huso de hilar y el algodón, con el hilo todavía enrollado.",
  }, "flecha en el cuerpo, sangre, cadaver, agonia, grito, gore"),
  esc("b12b", [ref("fuego_y_cocina"), ref("jorolamatu"), ref("recipientes")], {
    comun: `Tarde. ESCONDIERON LA CABEZA Y COCINARON EL RESTO: NADA DE ESO ENTRA EN CUADRO. Lo que se ve es una olla tapada al fuego y un bulto envuelto guardado aparte. Sin figuras. Objeto ancla: la olla tapada.`,
    camara: {
      a: "PLANO MACRO de la tapa de barro puesta sobre una olla grande, con el vapor saliendo por el canto.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO de un rincón de la casa con un bulto pequeño envuelto en tela, metido detrás de una tinaja.",
    },
    ini: "la tapa de barro puesta sobre la olla grande, con el vapor saliendo por el canto.",
    fin: "en un rincón de la casa hay un bulto pequeño envuelto en tela, metido detrás de una tinaja.",
  }, "carne humana, restos, cabeza, sangre, huesos, visceras, gore, canibalismo"),

  // b13 — Maleiwa tomó los rasgos de la vieja. Jaguar llegó hambriento.
  escp("b13a", [ref("maleiwa_muchacho"), ref("madre_de_jaguar"), ref("cordeleria")], {
    comun: `Tarde. MALEIWA TOMÓ LOS RASGOS DE LA VIEJA: EL PELO BLANCO Y EL ALGODÓN HILADO EN LA PIERNA. El engaño es exacto y se cuenta con esos dos detalles, sin transformación dibujada. Objeto ancla: el algodón hilado sobre la pierna.`,
    camara: {
      a: "PLANO MACRO de una hebra de algodón enrollándose sobre una pierna, igual que hacía la vieja.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de una figura sentada en el sitio de la vieja, de espaldas, con el pelo blanco suelto y la manta puesta.",
    },
    ini: "una hebra de algodón se enrolla sobre una pierna, igual que hacía la vieja.",
    fin: "en el sitio de la vieja hay una figura sentada de espaldas, con el pelo blanco suelto y la manta puesta.",
  }, "transformacion dibujada, humo, resplandor, mascara, piel arrancada, gore"),
  esc("b13b", [ref("kulirapata"), ref("jorolamatu")], {
    comun: `Anochecer. JAGUAR LLEGÓ HAMBRIENTO: vuelve a su casa como todos los días. Objeto ancla: el animal entrando confiado.`,
    camara: {
      a: "PLANO GENERAL del exterior de la casa al anochecer con el jaguar acercándose al vano, sin prisa.",
      b: "la cámara ha ENTRADO delante de él y ha girado: PLANO MEDIO desde dentro con el animal cruzando el vano y la figura del pelo blanco sentada al fondo, de espaldas.",
    },
    ini: "al anochecer, el jaguar se acerca al vano de la casa, sin prisa.",
    fin: "desde dentro, el animal cruza el vano y al fondo está sentada de espaldas la figura del pelo blanco.",
  }, "monstruo, ojos brillantes, colmillos, rugido, amenaza dibujada, sangre"),

  // b14 — Escupió la carne y se lanzó. Las flechas no entraban. Huyó.
  esc("b14a", [ref("recipientes"), ref("fuego_y_cocina"), ref("jorolamatu")], {
    comun: `Noche. ESCUPIÓ LA CARNE: se da cuenta de lo que está comiendo. El plano es la olla volcada y la comida en el suelo, sin nada identificable. Objeto ancla: la olla volcada.`,
    camara: {
      a: "PLANO MACRO de una olla de barro volcada en la arena con el caldo derramándose.",
      b: "la cámara ha RETROCEDIDO de golpe y ha subido: PLANO GENERAL del interior con la olla volcada en el centro y el jaguar ya de pie, con el lomo erizado.",
    },
    ini: "una olla de barro volcada en la arena, con el caldo derramándose.",
    fin: "desde arriba, la olla está volcada en el centro y el jaguar ya está de pie con el lomo erizado.",
  }, "carne humana, restos, cabeza, sangre, vomito, gore, canibalismo"),
  escp("b14b", [ref("kulirapata"), ref("maleiwa_muchacho"), ref("arco_flechas")], {
    comun: `Noche. SE LANZÓ SOBRE ELLOS, PERO LAS FLECHAS DE SIWARAI NO ENTRABAN. HOSTIGADO, HUYÓ DE JOROLAMATU. Se cuenta con las flechas rebotando en el suelo, sin destellos. Objeto ancla: las flechas caídas alrededor.`,
    camara: {
      a: "PLANO MACRO de dos flechas de caña rebotando y cayendo en la arena, intactas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio de noche con el jaguar saliendo a la carrera por el fondo y una docena de flechas clavadas en el suelo por donde pasó.",
    },
    ini: "dos flechas de caña rebotan y caen en la arena, intactas.",
    fin: "desde arriba, el jaguar sale a la carrera por el fondo y una docena de flechas quedan clavadas en el suelo por donde pasó.",
  }, "escudo de energia, destellos, resplandor, aura, camara lenta, sangre"),

  // b15 — Lo persiguió sin dejarlo dormir. Quedó quemado: las manchas.
  escp("b15a", [ref("maleiwa_muchacho"), ref("kulirapata"), ref("llanura_cardonal")], {
    comun: `Noche y fuego. MALEIWA LO PERSIGUIÓ SIN DEJARLO DORMIR Y ENCENDIÓ FUEGO DELANTE Y DETRÁS: el acoso es de fuegos, no de golpes. Objeto ancla: los dos fuegos que lo encierran.`,
    camara: {
      a: "PLANO MACRO de una brasa prendiendo un manojo de rastrojo seco en el suelo.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL nocturno en picado con dos líneas de fuego encendidas a lado y lado y el animal atrapado en la franja del medio.",
    },
    ini: "una brasa prende un manojo de rastrojo seco en el suelo.",
    fin: "desde muy arriba, dos líneas de fuego arden a lado y lado y el animal queda atrapado en la franja del medio.",
  }, "incendio devastador, animal ardiendo, agonia, gritos, crueldad explicita, gore"),
  esc("b15b", [ref("kulirapata"), ref("llanura_cardonal")], {
    comun: `Amanecer. QUEDÓ QUEMADO: SE LE VEN LAS MANCHAS. ES UNA ETIOLOGÍA Y DEBE VERSE: las rosetas del jaguar son las quemaduras. El animal está entero y vivo. Objeto ancla: las manchas en el pelaje.`,
    camara: {
      a: "PLANO MACRO del pelaje del lomo con las rosetas negras muy marcadas sobre el ocre, como marcas de quemadura.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO del animal entero al amanecer, de perfil, con el pelaje manchado de punta a punta y andando despacio.",
    },
    ini: "el pelaje del lomo con las rosetas negras muy marcadas sobre el ocre, como marcas de quemadura.",
    fin: "el animal entero, de perfil al amanecer, tiene el pelaje manchado de punta a punta y anda despacio.",
  }, "quemaduras abiertas, carne, sangre, agonia, pelaje chamuscado, gore"),

  // b16 — Sediento, llegó donde Fulera. Ella había escondido el agua.
  esc("b16a", [ref("kulirapata"), ref("llanura_cardonal"), ref("arroyo_seco")], {
    comun: `Sol alto. SEDIENTO, LLEGÓ DONDE EL CARACOL FULERA Y PIDIÓ DE BEBER: SE REPRESENTA LA SED Y LA NEGATIVA DEL AGUA, nada más. Objeto ancla: la lengua del animal sobre la piedra seca.`,
    camara: {
      a: "PLANO MACRO del hocico del jaguar rozando una piedra de cauce completamente seca.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cauce vacío con el animal parado en el medio, y ni una gota en toda su longitud.",
    },
    ini: "el hocico del jaguar roza una piedra de cauce completamente seca.",
    fin: "desde arriba, el cauce está vacío con el animal parado en medio y ni una gota en toda su longitud.",
  }, "agonia, lengua fuera, ojos vidriosos, cadaver, sangre, buitres"),
  esc("b16b", [ref("fulera"), ref("arroyo_seco")], {
    comun: `Sol alto. FULERA HABÍA ESCONDIDO EL AGUA POR ORDEN DE MALEIWA: en cuadro hay UN CARACOL, UNA PIEDRA Y NINGÚN AGUA. El episodio coercitivo del canon NO se representa de ninguna forma. Objeto ancla: el caracol cerrado.`,
    camara: {
      a: "PLANO MACRO de la concha de un caracol grande, cerrada y quieta, sobre la piedra del cauce.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cauce con el caracol pequeño en una piedra y toda la extensión seca alrededor.",
    },
    ini: "la concha de un caracol grande, cerrada y quieta, sobre la piedra del cauce.",
    fin: "desde arriba, el caracol es pequeño en su piedra y toda la extensión alrededor está seca.",
  }, "acto sexual, coercion, desnudez, insinuacion, cuerpo, violencia, criatura humanoide"),

  // b17 — Le exigió entregarse y se escondió sin darle agua. Desgarró el palo brasil.
  esc("b17a", [ref("fulera"), ref("arroyo_seco"), ref("piedras_y_huesos")], {
    comun: `Sol alto. SE ESCONDIÓ SIN DARLE AGUA: el desenlace del episodio es que el agua NO aparece. El caracol metido bajo una piedra y el cauce igual de seco. Objeto ancla: la piedra bajo la que se mete.`,
    camara: {
      a: "PLANO MACRO de la concha metiéndose en el hueco bajo una piedra y quedando fuera de alcance.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cauce con el jaguar dando vueltas alrededor de esa piedra y sin nada que beber en ninguna parte.",
    },
    ini: "la concha se mete en el hueco bajo la piedra y queda fuera de alcance.",
    fin: "desde arriba, el jaguar da vueltas alrededor de esa piedra y no hay nada que beber en ninguna parte.",
  }, "acto sexual, coercion, desnudez, violencia, sangre, criatura humanoide"),
  esc("b17b", [ref("maderas"), ref("llanura_cardonal")], {
    comun: `Sol alto. JAGUAR DESGARRÓ EL PALO BRASIL, HOY ESTRIADO: ETIOLOGÍA Y DEBE VERSE. El árbol queda con las estrías que tiene hoy. Sin figuras. Objeto ancla: las estrías del tronco.`,
    camara: {
      a: "PLANO MACRO de la corteza de un tronco liso y rojizo, sin marcas, a plena luz.",
      b: "la cámara ha RETROCEDIDO un poco y ha girado alrededor del tronco: PLANO MEDIO del mismo árbol con cuatro estrías largas y paralelas abiertas en la corteza, de arriba abajo.",
    },
    ini: "la corteza de un tronco liso y rojizo, sin marcas, a plena luz.",
    fin: "al rodear el tronco, el mismo árbol tiene cuatro estrías largas y paralelas abiertas en la corteza, de arriba abajo.",
  }, "sangre, savia roja como sangre, arbol que grita, cara en el arbol, magia"),

  // b18 — Cachicamo también le negó el agua. Maleiwa siguió persiguiendo.
  esc("b18a", [ref("cachicamo"), ref("llanura_cardonal")], {
    comun: `Tarde. CACHICAMO TAMBIÉN LE NEGÓ EL AGUA Y JAGUAR LO DESGARRÓ: MALEIWA LE PUSO CABEZA DE BÚHO, y por eso el cachicamo tiene la boca como la tiene. ETIOLOGÍA, y el animal está vivo. Objeto ancla: la cara del cachicamo.`,
    camara: {
      a: "PLANO MACRO del caparazón de placas de un cachicamo, con las bandas y la tierra encima.",
      b: "la cámara ha RETROCEDIDO y ha girado hasta la cabeza: PLANO MEDIO del animal entero de perfil, con la cabeza pequeña y la boca hundida, saliendo de su hueco.",
    },
    ini: "el caparazón de placas de un cachicamo, con las bandas y la tierra encima.",
    fin: "al rodearlo, el animal entero de perfil tiene la cabeza pequeña y la boca hundida, y sale de su hueco.",
  }, "animal desgarrado, sangre, visceras, hibrido con buho, cabeza pegada, gore"),
  escp("b18b", [ref("kulirapata"), ref("maleiwa_muchacho"), ref("montana_refugio")], {
    comun: `Última luz. EL RELATO NO TERMINA EN VICTORIA: Jaguar se refugia en una montaña lejana Y MALEIWA SIGUE PERSIGUIÉNDOLO. NADIE CIERRA LA CUENTA, y el último plano lo deja así. Objeto ancla: la distancia que no se cierra.`,
    camara: {
      a: "PLANO MEDIO del jaguar subiendo por la ladera de una montaña lejana, de espaldas, manchado y cojeando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final en picado con el animal diminuto arriba en la montaña y, muy abajo y muy atrás, una figura pequeña todavía subiendo detrás.",
    },
    ini: "el jaguar sube por la ladera de una montaña lejana, de espaldas, manchado y cojeando.",
    fin: "desde muy arriba, el animal es diminuto en la montaña y, muy abajo y muy atrás, una figura pequeña sigue subiendo detrás.",
  }, "victoria, apoteosis, aureola, monumento, cadaver del jaguar, texto, moraleja"),
]);
