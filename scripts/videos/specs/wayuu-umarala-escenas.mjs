// Keyframes de Umaralá, el primer piache — 18 bloques × 2 escenas × 2 cuadros
// = 72 imágenes ≈ 180 s.
// Guion: guion-umarala-v2.json (N=18) · Acta: acta-umarala.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · ES UN MITO DE ORIGEN DEL OFICIO, NO DE HÉROE. Lo que funda Umaralá es LA
//   MANERA DE CURAR: secretos y cantos con maraca, contra los piaches que sólo
//   resoplaban tabaco y cobraban.
// · QUIEN PAGA ES LA TÍA. Ella invoca tarde al espíritu bueno, el primero ya no
//   se retira, y ENTREGA SU ALMA. UMARALÁ VIVE SOBRE ESA DEUDA y el relato no
//   la resuelve.
// · «TÍA» Y «HIJO» CONVIVEN EN EL CANON: ella lo cría como hijo y el espíritu
//   la llama madre. SE RESPETA LA DOBLE PALABRA y no se corrige el parentesco.
// · EL CAMBIO DE NOMBRE ES EL NUDO DEL MANDATO: deja de ser JOHN PAURALA. EL
//   NOMBRE CASTELLANO ESTÁ EN LA FICHA Y SE CONSERVA; no se limpia.
// · LA CURA FINAL ES A DISTANCIA y NO SE MUESTRA A UMARALÁ EN LA CASA: se oye
//   el tropel, el canto y la maraca. EL PLANO SE QUEDA AFUERA. El inventario lo
//   subraya: «se dibuja el cuarto, la enferma sola y las dos botellas de ron;
//   TODO LO DEMÁS ES SONIDO».
// · LOS DOS HOMBRES —el de Macuira y el de Parashi— NO SON ESCOLTA: son piaches
//   con poder propio, y su epílogo cierra la ficha.
// · EL SIERVO MUERE POR CONTAR, igual que en «ulepala». Prohibiciones de la
//   misma familia, FICHAS DISTINTAS, no se cruzan.
// · JIRAIRAÍ ES AQUÍ UN ESPÍRITU DE ALLÁ que reprocha y cobra. NO se confunde
//   con la ficha «jirairay», donde la palabra nombra el canto. El inventario
//   obliga a declarar esa doble acepción, y los dos espíritus —Jirairaí y
//   Jumajule— están marcados `restringida`: SE REPRESENTAN POR EL EFECTO,
//   NUNCA CON CUERPO.
//
// DESLINDE CON `el-indio-jaichuasay`: aquí el hombre-venado BAJA A VENDER
// MANEAS; allá huye y es cazado. Dos fichas.
//
// GUION DE LUZ: penumbra de los piaches viejos → infancia en Jarara → luz
// enferma de la epidemia → noche de la fiebre y la discusión → oscuridad de la
// sentencia → maraca sobre el pecho → amanecer del cuerpo cargado → fogatas al
// atardecer entre las tumbas → aparición tal como era en vida → mandato del
// nombre → años de fama → llegada de la familia pudiente → tarde del oro
// rechazado → noche del tropel, todo fuera de cuadro → mañana sana → mula mora
// al alba → camino del occidente → tumbas y lamentos, y el que cuenta y muere.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-umarala-escenas";
export const OUT_DIR = "wayuu/videos/umarala/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; espiritu visible, aparicion translucida, figura flotando, alma saliendo del cuerpo, resplandor, humo de colores; monstruo, demonio, calavera, guadana, esqueleto, zombi; lesiones, pustulas, llagas, manchas en la piel, sangre, vomito, hospital, jeringas; cadaver a la vista, ataud, cruz, lapida cristiana, funeral europeo, procesion; bruja de cuento, caldero, pentagramas, velas negras, circulos rituales, trance epileptico; milagro dibujado, aureola, angeles, rayos de luz curativos; hibrido hombre-venado, cuernos en una persona, transformacion a medias";
export const PALETTE =
  PALETTE_BASE + "; las FOGATAS AL ATARDECER ENTRE LAS TUMBAS son el corazon calido del mito y el unico naranja sostenido; la epidemia va en grises lavados sin un solo acento";

const UM =
  "EL MISMO Umaralá de la referencia (hombre wayúu; niño al principio y anciano al final, pelo negro y después blanco, manta de algodón crudo terciada, faja tejida de kanas, descalzo), SIN nada que lo marque como elegido";
const TI =
  "LA MISMA tía piache de la referencia (mujer wayúu muy anciana, pelo blanco recogido, manta larga oscura con cenefa tejida, collares de tumas, cara seria y trabajadora)";
const SI =
  "EL MISMO siervo de la referencia (hombre wayúu adulto y callado, manta corta terciada, waireñas de suela plana)";

export const ITEMS = armar([
  // b1 — Antes los piaches cobraban y no curaban. Umaralá fue el primero.
  escp("b1a", [ref("outsu"), ref("enfermo"), ref("piichi")], {
    comun: `Penumbra. ANTES LOS PIACHES COBRABAN MUCHO Y NO CURABAN: se cuenta con el humo de tabaco y el pago recibido, y con un enfermo que sigue igual. Objeto ancla: el pago en la mano y el enfermo sin cambio.`,
    camara: {
      a: "PLANO MACRO de una boca resoplando humo de tabaco sobre una tela, sin tocar a nadie.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL del cuarto con la figura del piache saliendo por el vano con un bulto de pago en la mano y el enfermo quieto en el chinchorro.",
    },
    ini: "una boca resopla humo de tabaco sobre una tela, sin tocar a nadie.",
    fin: "desde lejos, el piache sale por el vano con un bulto de pago en la mano y el enfermo sigue quieto en el chinchorro.",
  }, "bruja, caldero, pentagramas, caricatura de charlatan, llagas, sangre"),
  escp("b1b", [ref("umarala"), ref("oficio_de_curar"), ref("piichi")], {
    comun: `Luz plana. UMARALÁ FUE EL PRIMERO EN CURAR CON SECRETOS Y CANTOS: lo que funda es UN MODO DE TRABAJAR, no un poder. ${UM}, con la maraca, sentado junto a alguien. Objeto ancla: la maraca en la mano y la mano en el enfermo.`,
    camara: {
      a: "PLANO MACRO de una mano apoyada firme en un hombro y, en la otra, una maraca de calabazo quieta.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con él sentado junto al chinchorro, cantando, y la familia escuchando desde las paredes.",
    },
    ini: "una mano apoyada firme en un hombro y, en la otra, una maraca de calabazo quieta.",
    fin: "desde arriba está sentado junto al chinchorro cantando, y la familia escucha desde las paredes.",
  }, "aureola, resplandor, milagro, angeles, trance, levitacion"),

  // b2 — Huérfano, creció en Jarara con una tía anciana que era piache.
  escp("b2a", [ref("jarara"), ref("umarala"), ref("tia_piache")], {
    comun: `Mañana en Jarara. HUÉRFANO, CRECIÓ CON UNA TÍA ANCIANA QUE ERA PIACHE: ella lo cría como hijo, y el canon usa las dos palabras. ${TI}. El niño va a media distancia. Objeto ancla: los dos caminando juntos.`,
    camara: {
      a: "PLANO DETALLE de una mano vieja y una mano pequeña andando juntas, sin agarrarse.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de Jarara con los dos cruzando el terreno, la vieja delante y el niño detrás, pequeños.",
    },
    ini: "una mano vieja y una mano pequeña andan juntas, sin agarrarse.",
    fin: "desde arriba, los dos cruzan el terreno de Jarara: la vieja delante y el niño detrás, pequeños.",
  }, "primer plano del menor, huerfano llorando, lastima, miseria explotada"),
  escp("b2b", [ref("tia_piache"), ref("umarala"), ref("oficio_de_curar")], {
    comun: `Tarde. LA ACOMPAÑABA Y APRENDÍA SUS CÁNTICOS Y MARACA: el aprendizaje es por estar delante y repetir. Objeto ancla: la maraca pasando de una mano a otra para probar.`,
    camara: {
      a: "PLANO MACRO de una mano pequeña sacudiendo la maraca con torpeza, con la mano vieja corrigiendo el ángulo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con la tía piachando a un enfermo y el niño sentado a un lado, mirando y repitiendo el gesto.",
    },
    ini: "una mano pequeña sacude la maraca con torpeza y la mano vieja le corrige el ángulo.",
    fin: "desde arriba, la tía piacha a un enfermo y el niño está sentado a un lado, mirando y repitiendo el gesto.",
  }, "trance, posesion, resplandor, humo de colores, primer plano del menor"),

  // b3 — Una epidemia azotó la Guajira. Umaralá perdió el habla.
  esc("b3a", [ref("rancheria"), ref("piichi"), ref("llanura_cardonal")], {
    comun: `Luz enferma, gris lavado. UNA EPIDEMIA AZOTÓ LA GUAJIRA: se cuenta con las casas cerradas y los corrales sin nadie, NUNCA con enfermos a la vista. Sin figuras. Objeto ancla: las casas cerradas en fila.`,
    camara: {
      a: "PLANO MACRO de una puerta trancada con una vara y la arena delante sin una huella.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la llanura con cinco rancherías a la vista y todas con las casas cerradas y los patios vacíos.",
    },
    ini: "una puerta trancada con una vara y la arena delante sin una huella.",
    fin: "desde muy arriba, cinco rancherías tienen las casas cerradas y los patios vacíos.",
  }, "cadaveres, llagas, pustulas, sangre, mascarillas, medicos, fosa comun"),
  escp("b3b", [ref("umarala"), ref("chinchorro"), ref("piichi")], {
    comun: `Luz gris. UMARALÁ CAYÓ ENFERMO, EMPEORÓ DE GOLPE Y PERDIÓ EL HABLA Y EL CONOCIMIENTO: se cuenta con la quietud y con la totuma sin tocar. Sin una marca en la piel. Objeto ancla: la totuma intacta.`,
    camara: {
      a: "PLANO MACRO de una totuma llena y quieta junto al borde del chinchorro, con el agua sin mover.",
      b: "la cámara ha SUBIDO y ha retrocedido: PLANO MEDIO de él tendido con los ojos entreabiertos sin ver nada, la cara quieta.",
    },
    ini: "una totuma llena y quieta junto al borde del chinchorro, con el agua sin mover.",
    fin: "al subir, está tendido con los ojos entreabiertos sin ver nada y la cara quieta.",
  }, "llagas, pustulas, manchas, sangre, vomito, convulsiones, agonia teatral"),

  // b4 — La tía lo piachaba día y noche. Él oía los cantos discutir.
  escp("b4a", [ref("tia_piache"), ref("umarala"), ref("chinchorro")], {
    comun: `Día y noche. LA TÍA LO PIACHABA DÍA Y NOCHE: el trabajo sin parar se cuenta con el fogón que se consume y ella en el mismo sitio. Objeto ancla: la maraca que no se detiene.`,
    camara: {
      a: "PLANO MACRO de la mano en el mango de la maraca, con la piel arrugada tensa de apretar tanto rato.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con ella sentada junto al chinchorro y el fogón al lado ya casi consumido.",
    },
    ini: "la mano en el mango de la maraca, con la piel arrugada tensa de apretar tanto rato.",
    fin: "desde arriba, ella sigue sentada junto al chinchorro y el fogón al lado ya está casi consumido.",
  }, "trance, posesion, levitacion, resplandor, humo de colores, velas"),
  escp("b4b", [ref("tia_piache"), ref("umarala"), ref("piichi")], {
    comun: `Noche. EN LA FIEBRE ÉL OÍA SUS CANTOS DISCUTIR CON EL ESPÍRITU JIRAIRAÍ: EL ESPÍRITU NO TIENE CUERPO. La discusión pasa por la garganta de ella, como en «jirairay», y en cuadro no hay nadie más. Objeto ancla: la garganta de la vieja.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara de él con los ojos cerrados, oyendo, en la penumbra.",
      b: "la cámara ha GIRADO a ella y ha bajado: PLANO MACRO de su cuello y su garganta en la penumbra, con los tendones marcándose en dos ritmos distintos.",
    },
    ini: "la cara de él, con los ojos cerrados, oyendo en la penumbra.",
    fin: "en su cuello y su garganta, los tendones se marcan en dos ritmos distintos.",
  }, "espiritu visible, figura translucida, sombra, resplandor, ojos en blanco, humo"),

  // b5 — «O bien mueres tú, o muere tu hijo». Llamó a Jumajule, ya tarde. (CITA)
  escp("b5a", [ref("tia_piache"), ref("piichi")], {
    comun: `Oscuridad. LA CITA, y es donde el relato se parte en dos: o mueres tú, o muere tu hijo. EL ESPÍRITU LA LLAMA MADRE y ella es la tía: SE RESPETA LA DOBLE PALABRA. Sale por su boca y no hay nadie más. Objeto ancla: su boca diciendo lo que no es suyo.`,
    camara: {
      a: "PLANO GENERAL del cuarto casi negro con ella sentada, sola, junto al chinchorro.",
      b: "la cámara ha AVANZADO hasta su cara: PRIMER PLANO de su boca terminando la frase, con una voz que no es la suya y los ojos abiertos.",
    },
    ini: "el cuarto está casi negro y ella está sentada sola junto al chinchorro.",
    fin: "de muy cerca, su boca termina la frase con una voz que no es la suya, y tiene los ojos abiertos.",
  }, "espiritu visible, cara deformada, ojos en blanco, humo saliendo de la boca, texto"),
  escp("b5b", [ref("tia_piache"), ref("oficio_de_curar"), ref("piichi")], {
    comun: `Oscuridad. LLAMÓ A JUMAJULE, PERO EL PRIMER ESPÍRITU YA NO SE RETIRABA: el segundo espíritu tampoco tiene cuerpo, y se representa POR EL EFECTO. El efecto es que nada cambia. Objeto ancla: la maraca que suena más fuerte y no sirve.`,
    camara: {
      a: "PLANO MACRO de la maraca sacudiéndose mucho más deprisa, con las semillas golpeando dentro.",
      b: "la cámara ha RETROCEDIDO y ha girado al chinchorro: PLANO MEDIO del enfermo exactamente igual que antes, sin un cambio, con la maraca sonando fuera de cuadro.",
    },
    ini: "la maraca se sacude mucho más deprisa y las semillas golpean dentro.",
    fin: "en el chinchorro, el enfermo está exactamente igual que antes, sin un solo cambio.",
  }, "dos espiritus visibles, pelea de fantasmas, resplandor, rayos, humo"),

  // b6 — Sólo le quedó entregar su alma. Le puso la maraca en el pecho y murió.
  escp("b6a", [ref("tia_piache"), ref("umarala"), ref("oficio_de_curar")], {
    comun: `Oscuridad. SÓLO LE QUEDÓ ENTREGAR SU ALMA POR LA DEL HIJO. EL GESTO ESTÁ ESCRITO Y ES EL NUDO DEL MITO: LE PUSO LA MARACA EN EL PECHO. Objeto ancla: la maraca sobre el pecho del enfermo.`,
    camara: {
      a: "PLANO MEDIO de ella inclinándose sobre el chinchorro con la maraca en las dos manos.",
      b: "la cámara ha BAJADO y ha cerrado: PLANO MACRO de la maraca posada sobre el pecho de él, quieta, con las dos manos viejas soltándola.",
    },
    ini: "ella se inclina sobre el chinchorro con la maraca en las dos manos.",
    fin: "la maraca queda posada sobre el pecho de él, quieta, y las dos manos viejas la sueltan.",
  }, "alma visible, resplandor, particulas, transferencia dibujada, angeles, aureola"),
  esc("b6b", [ref("piichi"), ref("oficio_de_curar"), ref("chinchorro")], {
    comun: `Oscuridad y primera luz. Y MURIÓ: NO SE MUESTRA. El plano es el sitio donde ella estaba sentada, vacío, y la maraca donde la dejó. Sin figuras. Objeto ancla: la estera vacía.`,
    camara: {
      a: "PLANO MACRO de la estera del suelo con la marca de alguien que estuvo sentado ahí muchas horas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto al amanecer con el chinchorro ocupado, la maraca encima y el sitio del suelo vacío.",
    },
    ini: "la estera del suelo conserva la marca de alguien que estuvo sentado ahí muchas horas.",
    fin: "desde arriba, al amanecer, el chinchorro está ocupado con la maraca encima y el sitio del suelo está vacío.",
  }, "cadaver, cuerpo, alma saliendo, resplandor, angeles, cruz, ataud"),

  // b7 — Umaralá se levantó y tomó en brazos a su tía. La lloró con el siervo.
  escp("b7a", [ref("umarala"), ref("chinchorro"), ref("piichi")], {
    comun: `Amanecer. UMARALÁ SE LEVANTÓ: está curado, y lo primero que hace es entender lo que costó. Objeto ancla: sus pies tocando la arena.`,
    camara: {
      a: "PLANO MACRO de dos pies bajando del chinchorro y tocando el suelo de arena, con la maraca cayendo al lado.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él de pie, entero, mirando hacia el sitio vacío del suelo.",
    },
    ini: "dos pies bajan del chinchorro y tocan el suelo de arena, con la maraca cayendo al lado.",
    fin: "está de pie, entero, mirando hacia el sitio vacío del suelo.",
  }, "milagro, resplandor, aureola, angeles, aplausos, curacion dibujada"),
  escp("b7b", [ref("umarala"), ref("siervo"), ref("piichi")], {
    comun: `Amanecer. TOMÓ EN BRAZOS A SU TÍA Y LA LLORÓ CON EL SIERVO, EL ÚNICO SOBREVIVIENTE: el cuerpo va ENVUELTO EN CUERO DE RES, como manda la etnografía del corpus, y no se ve. ${SI}. Objeto ancla: el bulto envuelto en cuero.`,
    camara: {
      a: "PLANO MACRO del cuero de res envolviendo un bulto, con el pelo del animal y las ataduras de fibra.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio al amanecer con los dos hombres de pie junto al bulto y nadie más en toda la ranchería.",
    },
    ini: "el cuero de res envolviendo un bulto, con el pelo del animal y las ataduras de fibra.",
    fin: "desde arriba, los dos hombres están de pie junto al bulto y no hay nadie más en toda la ranchería.",
  }, "cadaver a la vista, cara, manos, sangre, ataud, cruz, procesion cristiana"),

  // b8 — La sepultaron en Maiceo. Cada tarde prendía fogatas en el cementerio.
  esc("b8a", [ref("cementerio"), ref("serrania_baja")], {
    comun: `Tarde. LA SEPULTARON EN LOS BOSQUES DE MAICEO: sepultura wayúu entre los árboles, con la tierra removida y las tinajas. Sin figuras. Objeto ancla: la tierra recién movida entre los árboles.`,
    camara: {
      a: "PLANO MACRO de tierra oscura recién removida con una tinaja pequeña puesta a un lado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro del bosque con varias sepulturas repartidas entre los troncos y ésa nueva en un borde.",
    },
    ini: "tierra oscura recién removida con una tinaja pequeña puesta a un lado.",
    fin: "desde arriba, el claro del bosque tiene varias sepulturas repartidas entre los troncos y ésa nueva en un borde.",
  }, "cruces, lapidas, ataudes, esqueletos, calaveras, funeral cristiano"),
  escp("b8b", [ref("umarala"), ref("choza_del_duelo"), ref("cementerio")], {
    comun: `Atardecer. ÉL SE QUEDÓ ALLÍ, Y CADA TARDE PRENDÍA FOGATAS EN EL CEMENTERIO: el inventario lo llama «la escena más cálida y más sobria del corpus a la vez». Objeto ancla: las fogatas entre las tumbas.`,
    camara: {
      a: "PLANO MACRO de una brasa prendiendo en un manojo de ramas secas al pie de un árbol.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cementerio al atardecer con cuatro o cinco fogatas pequeñas encendidas entre las sepulturas y él sentado junto a una.",
    },
    ini: "una brasa prende en un manojo de ramas secas al pie de un árbol.",
    fin: "desde arriba, cuatro o cinco fogatas pequeñas arden entre las sepulturas y él está sentado junto a una.",
  }, "ritual satanico, circulo de fuego, fantasmas, calaveras, velas negras, invocacion"),

  // b9 — Una tarde se le apareció la tía, como en vida.
  escp("b9a", [ref("umarala"), ref("cementerio"), ref("choza_del_duelo")], {
    comun: `Atardecer. UNA TARDE SE LE APARECIÓ LA TÍA: la aparición se cuenta con SU CARA VIÉNDOLA, no con la figura todavía. Objeto ancla: su cara levantándose del fuego.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara junto a la fogata, iluminada desde abajo, levantando la vista de golpe.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cementerio con él de pie junto al fuego, mirando hacia un punto entre los árboles.",
    },
    ini: "su cara junto a la fogata, iluminada desde abajo, levanta la vista de golpe.",
    fin: "desde arriba, él está de pie junto al fuego mirando hacia un punto entre los árboles.",
  }, "fantasma, resplandor, niebla, luz sobrenatural, calavera, terror"),
  escp("b9b", [ref("tia_piache"), ref("cementerio"), ref("choza_del_duelo")], {
    comun: `Atardecer. SE LE APARECIÓ COMO EN VIDA: entera, sólida, con su manta y sus collares, igual que siempre. NADA DE TRANSLÚCIDO. Objeto ancla: ella de pie entre los árboles.`,
    camara: {
      a: "PLANO MEDIO de ella de pie entre dos troncos, entera y sólida, con la luz del fuego dándole de lado.",
      b: "la cámara ha AVANZADO hasta ella y ha cerrado: PLANO MEDIO CORTO de su cara, la misma de siempre, hablándole con naturalidad.",
    },
    ini: "ella está de pie entre dos troncos, entera y sólida, con la luz del fuego dándole de lado.",
    fin: "de cerca, su cara es la misma de siempre y le habla con naturalidad.",
  }, "translucida, flotando, resplandor, niebla, calavera, ojos vacios, humo"),

  // b10 — Le mandó volver con capote y maraca. Y cambiar su nombre.
  escp("b10a", [ref("tia_piache"), ref("oficio_de_curar"), ref("cementerio")], {
    comun: `Atardecer. LE MANDÓ VOLVER A JARARA CON CAPOTE Y MARACA: hereda las herramientas del oficio, que es lo que funda el mito. Objeto ancla: el capote y la maraca entregados.`,
    camara: {
      a: "PLANO MACRO de una maraca y un capote doblado puestos en el suelo del cementerio, junto al fuego.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él agachándose a recogerlos, con ella de pie al fondo señalando el camino.",
    },
    ini: "una maraca y un capote doblado puestos en el suelo del cementerio, junto al fuego.",
    fin: "él se agacha a recogerlos, con ella de pie al fondo señalando el camino.",
  }, "resplandor, objetos flotando, magia, aureola, ceremonia, texto"),
  escp("b10b", [ref("umarala"), ref("cementerio"), ref("jarara")], {
    comun: `Última luz. Y ANTES DEBÍA CAMBIAR SU NOMBRE: YA NO JOHN PAURALA, SINO UMARALÁ. EL NOMBRE CASTELLANO ESTÁ EN LA FICHA Y SE CONSERVA. La visión desapareció y él obedeció. Objeto ancla: el sitio vacío donde ella estaba y él ya andando.`,
    camara: {
      a: "PLANO MEDIO del hueco entre los dos troncos, ya vacío, con el fuego bajando.",
      b: "la cámara ha GIRADO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado del bosque al anochecer con él saliendo por la trocha hacia Jarara, pequeño, con el capote al hombro.",
    },
    ini: "el hueco entre los dos troncos ya está vacío y el fuego va bajando.",
    fin: "desde muy arriba, él sale por la trocha hacia Jarara, pequeño, con el capote al hombro.",
  }, "desaparicion con humo, resplandor, particulas, portal, texto con el nombre"),

  // b11 — Piachó enfermos y su fama corrió. Enfermó la madre de una familia.
  escp("b11a", [ref("umarala"), ref("enfermo"), ref("rancheria")], {
    comun: `Años, luz plana. PIACHÓ ENFERMOS Y SU FAMA CORRIÓ POR TODA LA GUAJIRA: la fama se cuenta con la repetición del trabajo en sitios distintos. Objeto ancla: la misma maraca en cuartos distintos.`,
    camara: {
      a: "PLANO MACRO de la misma maraca, ya más gastada, en la mano de él.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado de la Guajira con cuatro rancherías distintas repartidas y caminos de huellas uniéndolas.",
    },
    ini: "la misma maraca, ya más gastada, en su mano.",
    fin: "desde muy arriba, cuatro rancherías distintas están repartidas por la Guajira con caminos de huellas uniéndolas.",
  }, "multitudes en extasis, adoracion, aureola, resplandor, procesion"),
  escp("b11b", [ref("mujer_mayor"), ref("chinchorro"), ref("piichi")], {
    comun: `Luz plana. AÑOS DESPUÉS ENFERMÓ LA MADRE DE UNA FAMILIA PUDIENTE: es una casa con cosas, y eso importa para lo que viene. Objeto ancla: las cosas de valor alrededor del chinchorro.`,
    camara: {
      a: "PLANO MACRO de un chinchorro de tejido fino y trabajado, con los flecos largos y la urdimbre apretada.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con la mujer tendida, tinajas grandes contra la pared y varias mantas de cenefas dobladas.",
    },
    ini: "un chinchorro de tejido fino y trabajado, con los flecos largos y la urdimbre apretada.",
    fin: "desde arriba, la mujer está tendida y en el cuarto hay tinajas grandes contra la pared y varias mantas de cenefas dobladas.",
  }, "llagas, pustulas, sangre, medicos, hospital, agonia teatral"),

  // b12 — Caminaron dos días y lo hallaron anciano, torciendo maguey.
  escp("b12a", [ref("indio_rico"), ref("caballo"), ref("llanura_cardonal")], {
    comun: `Dos días de camino. CAMINARON DOS DÍAS HASTA JARARA: el esfuerzo de ir a buscarlo es parte del respeto. Objeto ancla: la comitiva cruzando la llanura.`,
    camara: {
      a: "PLANO DETALLE de cascos y pies avanzando juntos por la arena, a paso sostenido.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la llanura con cuatro figuras y dos animales cruzándola, pequeños y en fila.",
    },
    ini: "cascos y pies avanzan juntos por la arena, a paso sostenido.",
    fin: "desde muy arriba, cuatro figuras y dos animales cruzan la llanura, pequeños y en fila.",
  }, "caravana, camellos, dunas, uniformes, banderas"),
  escp("b12b", [ref("umarala"), ref("jarara"), ref("cordeleria")], {
    comun: `Tarde. LO HALLARON ANCIANO, TORCIENDO MAGUEY: no lo encuentran en un trance, lo encuentran trabajando. ${UM}, ya viejo. Objeto ancla: la fibra de maguey torciéndose.`,
    camara: {
      a: "PLANO MACRO de dos manos viejas torciendo fibra de maguey sobre el muslo, haciendo cordel.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él sentado en el suelo a la sombra, siguiendo con el trabajo, y la comitiva parada a unos pasos esperando.",
    },
    ini: "dos manos viejas tuercen fibra de maguey sobre el muslo, haciendo cordel.",
    fin: "él sigue sentado a la sombra con su trabajo y la comitiva espera parada a unos pasos.",
  }, "aureola, ermitaño mistico, trance, resplandor, adoracion, arrodillarse"),

  // b13 — No aceptaba oro antes de sanar. Mandó dejarla sola con dos botellas.
  escp("b13a", [ref("umarala"), ref("adorno_y_valor"), ref("indio_rico")], {
    comun: `Tarde. LE TRAÍAN UNA SARTA DE ORO Y MULA, Y NO ACEPTABA ORO ANTES DE SANAR: la negativa es lo que lo separa de los piaches del primer bloque. Objeto ancla: la sarta de oro que no se coge.`,
    camara: {
      a: "PLANO MACRO de una sarta de oro extendida en unas manos abiertas, ofrecida.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO de él sentado sin levantar las manos del cordel, y la sarta quedándose en el aire delante de él.",
    },
    ini: "una sarta de oro extendida en unas manos abiertas, ofrecida.",
    fin: "él sigue sentado sin levantar las manos del cordel, y la sarta se queda en el aire delante de él.",
  }, "avaricia, monedas, tesoro, caricatura, orgullo dibujado, aureola"),
  esc("b13b", [ref("recipientes"), ref("chinchorro"), ref("piichi")], {
    comun: `Anochecer. MANDÓ DEJARLA SOLA TODA LA NOCHE CON DOS BOTELLAS DE RON: la instrucción es exacta y práctica. Sin figuras. Objeto ancla: las dos botellas junto al chinchorro.`,
    camara: {
      a: "PLANO MACRO de dos botellas de vidrio oscuro puestas de pie en la arena, juntas.",
      b: "la cámara ha RETROCEDIDO hasta la puerta: PLANO GENERAL del cuarto con la enferma sola en el chinchorro, las dos botellas al lado y el vano cerrándose.",
    },
    ini: "dos botellas de vidrio oscuro puestas de pie en la arena, juntas.",
    fin: "desde la puerta, la enferma está sola en el chinchorro con las dos botellas al lado y el vano se cierra.",
  }, "ritual, velas, circulos, simbolos, sacrificio, sangre, espiritus"),

  // b14 — A medianoche entró un tropel y sonaron el canto y la maraca.
  esc("b14a", [ref("piichi"), ref("llanura_cardonal"), ref("constelaciones")], {
    comun: `Medianoche. A MEDIANOCHE ENTRÓ UN TROPEL DE CABALLOS Y SONARON EL CANTO Y LA MARACA: SUCEDE FUERA DE CUADRO. EL PLANO SE QUEDA AFUERA: la casa por fuera, de noche, y nada que se vea entrar. Objeto ancla: el polvo levantado delante de la casa.`,
    camara: {
      a: "PLANO MACRO de la arena del patio con el polvo levantándose de golpe, sin nada que lo levante en cuadro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL nocturno de la casa cerrada por fuera, con el patio revuelto de polvo y ni una figura ni un animal en ninguna parte.",
    },
    ini: "la arena del patio se levanta de golpe en polvo, sin nada que lo levante en cuadro.",
    fin: "desde arriba, la casa está cerrada por fuera, el patio revuelto de polvo y no hay ni una figura ni un animal en ninguna parte.",
  }, "caballos visibles, jinetes, fantasmas, espectros, resplandor, humo, figuras"),
  esc("b14b", [ref("piichi"), ref("recipientes"), ref("chinchorro")], {
    comun: `Amanecer. AL OTRO DÍA AMANECIÓ SANA: la cura se comprueba con el cuarto por dentro, las botellas vacías y la enferma levantada. Objeto ancla: las dos botellas vacías.`,
    camara: {
      a: "PLANO MACRO de las dos botellas volcadas y vacías en la arena, con la luz del amanecer encima.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con el chinchorro vacío y recogido y la puerta abierta de par en par.",
    },
    ini: "las dos botellas volcadas y vacías en la arena, con la luz del amanecer encima.",
    fin: "desde arriba, el chinchorro está vacío y recogido y la puerta abierta de par en par.",
  }, "milagro dibujado, aureola, resplandor, angeles, aplausos, agradecimiento teatral"),

  // b15 — El siervo lo halló sobre una mula mora. Esperaba a dos hombres.
  escp("b15a", [ref("siervo"), ref("umarala"), ref("burro_mula")], {
    comun: `Alba. EL SIERVO LO HALLÓ SOBRE UNA MULA MORA CON LA MARACA: ya está listo para irse, y el siervo llega tarde. Objeto ancla: la mula ensillada al amanecer.`,
    camara: {
      a: "PLANO MACRO del pelaje oscuro y salpicado de una mula, con la maraca colgada del apero.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él montado y quieto en mitad del patio, de perfil, con el siervo parado a unos pasos.",
    },
    ini: "el pelaje oscuro y salpicado de la mula, con la maraca colgada del apero.",
    fin: "él está montado y quieto en mitad del patio, de perfil, con el siervo parado a unos pasos.",
  }, "aureola, resplandor, despedida teatral, llanto, aplausos"),
  escp("b15b", [ref("hombre_de_macuira"), ref("hombre_de_parashi"), ref("llanura_cardonal")], {
    comun: `Alba. ESPERABA A DOS HOMBRES, DE MACUIRA Y DE PARASHI: NO SON ESCOLTA, SON PIACHES CON PODER PROPIO. El de Parashi viene vestido con cuero de venado, y es UN HOMBRE, no un híbrido. Objeto ancla: los dos llegando por caminos distintos.`,
    camara: {
      a: "PLANO MEDIO CORTO del cuero de venado terciado sobre el hombro de uno de ellos, con el pelo del animal a la vista.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del alba con los dos acercándose por dos trochas distintas y la mula esperando en el cruce.",
    },
    ini: "el cuero de venado terciado sobre el hombro de uno de ellos, con el pelo del animal a la vista.",
    fin: "desde arriba, los dos se acercan por dos trochas distintas y la mula espera en el cruce.",
  }, "hibrido, cuernos en una persona, transformacion a medias, resplandor, escolta armada"),

  // b16 — Los tres tomaron el occidente. Le prohibió contar lo visto.
  escp("b16a", [ref("umarala"), ref("hombre_de_macuira"), ref("hombre_de_parashi")], {
    comun: `Mañana. LOS TRES TOMARON EL CAMINO DEL OCCIDENTE: van juntos y de igual a igual. Objeto ancla: los tres en fila hacia el poniente.`,
    camara: {
      a: "PLANO MEDIO lateral de los tres montados de perfil, uno al lado del otro, arrancando.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la llanura con los tres diminutos alejándose hacia el occidente por una sola trocha.",
    },
    ini: "los tres montados de perfil, uno al lado del otro, arrancando.",
    fin: "desde muy arriba, los tres se alejan diminutos hacia el occidente por una sola trocha.",
  }, "comitiva, escolta, banderas, resplandor, portal, apoteosis"),
  escp("b16b", [ref("umarala"), ref("siervo"), ref("llanura_cardonal")], {
    comun: `Mañana. SE DESPIDIÓ Y LE PROHIBIÓ CONTAR LO VISTO, O MORIRÍA: la prohibición es explícita y el siervo la oye bien. Objeto ancla: la cara del siervo recibiendo la prohibición.`,
    camara: {
      a: "PLANO MEDIO CORTO de Umaralá de perfil, hablándole desde la mula, corto y serio.",
      b: "la cámara ha GIRADO 180 grados y ha retrocedido: PLANO GENERAL con el siervo parado solo en la trocha y los tres ya alejándose al fondo.",
    },
    ini: "Umaralá, de perfil desde la mula, le habla corto y serio.",
    fin: "al girar, el siervo queda parado solo en la trocha y los tres ya se alejan al fondo.",
  }, "amenaza dibujada, calavera, maldicion, resplandor, texto en pantalla"),

  // b17 — Siguió sus huellas hasta las tumbas. Oyó lamentos sin ver a nadie.
  escp("b17a", [ref("siervo"), ref("del_camino"), ref("cementerio")], {
    comun: `Tarde. TENTADO, EL SIERVO SIGUIÓ SUS HUELLAS HASTA LAS TUMBAS: va detrás sabiendo que no debe. Objeto ancla: las huellas de la mula que sigue.`,
    camara: {
      a: "PLANO CENITAL MACRO de una huella de casco de mula en la arena, con un pie descalzo posándose al lado.",
      b: "la cámara se ha ELEVADO y ha avanzado siguiendo el rastro: GRAN PLANO GENERAL en picado del rastro entrando en el bosque del cementerio y él pequeño siguiéndolo.",
    },
    ini: "una huella de casco de mula en la arena, con un pie descalzo posándose al lado.",
    fin: "desde arriba, el rastro entra en el bosque del cementerio y él lo sigue, pequeño.",
  }, "monstruos, sombras acechando, ojos, niebla siniestra, terror"),
  esc("b17b", [ref("cementerio"), ref("choza_del_duelo"), ref("serrania_baja")], {
    comun: `Última luz. OYÓ LAMENTOS SIN VER A NADIE: ERA UMARALÁ LLORANDO. NO SE VE A NADIE, y eso es lo que el canon pide. El cuadro es el cementerio vacío con las fogatas encendidas. Sin figuras. Objeto ancla: las fogatas ardiendo solas.`,
    camara: {
      a: "PLANO MACRO de una fogata pequeña ardiendo sola entre las sepulturas, sin nadie cerca.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cementerio al anochecer con cuatro fogatas encendidas en sitios distintos y ninguna figura en todo el claro.",
    },
    ini: "una fogata pequeña arde sola entre las sepulturas, sin nadie cerca.",
    fin: "desde arriba, cuatro fogatas arden en sitios distintos del cementerio y no hay ninguna figura en todo el claro.",
  }, "fantasmas, figuras llorando, espectros, calaveras, resplandor, niebla"),

  // b18 — Contó lo visto y murió ciego. Uno llamaba la lluvia; el otro, venado.
  escp("b18a", [ref("siervo"), ref("primeros_wayuu"), ref("pago_y_fiesta")], {
    comun: `Noche de fiesta. EN UNA FIESTA CONTÓ TODO: rompe la prohibición delante de todos. Y MURIÓ CIEGO: la ceguera y la muerte NO se muestran; se cuentan con la boca que habla y después con las manos buscando. Objeto ancla: la boca contándolo.`,
    camara: {
      a: "PLANO MEDIO CORTO de él hablando en el corro, animado, con la gente escuchándolo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la fiesta con él en el centro, ya parado y con las dos manos abiertas por delante, palpando el aire.",
    },
    ini: "habla en el corro, animado, con la gente escuchándolo.",
    fin: "desde arriba, él está en el centro, ya parado y con las dos manos abiertas por delante, palpando el aire.",
  }, "ojos blancos, cuencas vacias, sangre, flecha, agonia, cadaver, gore"),
  esc("b18b", [ref("hombre_de_parashi"), ref("venado"), ref("chubasco")], {
    comun: `Última luz. EL EPÍLOGO CIERRA LA FICHA: UNO LLAMABA LA LLUVIA; EL OTRO SE HACÍA VENADO. Son dos hechos, y el venado es UN VENADO ENTERO, nunca un híbrido. Objeto ancla: la lluvia por un lado y el venado por el otro.`,
    camara: {
      a: "PLANO MACRO de las primeras gotas gruesas reventando en la arena seca y abriendo cráteres.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final con una cortina de lluvia cayendo sobre un trecho de la llanura y, en otro trecho lejano, un venado cruzando solo.",
    },
    ini: "las primeras gotas gruesas revientan en la arena seca y abren cráteres.",
    fin: "desde muy arriba, una cortina de lluvia cae sobre un trecho de la llanura y, en otro trecho lejano, un venado cruza solo.",
  }, "hibrido, transformacion dibujada, resplandor, cuernos, apoteosis, texto, moraleja"),
]);
