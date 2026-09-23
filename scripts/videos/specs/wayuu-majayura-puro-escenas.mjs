// Keyframes de La majayura de Puró — 10 bloques × 2 escenas × 2 cuadros
// = 40 imágenes ≈ 100 s.
// Guion: guion-la-majayura-que-pierde-a-los-hombres-v2.json (N=10)
// Acta: acta-la-majayura-que-pierde-a-los-hombres.json (20 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · NO HAY UN PROTAGONISTA: HAY UN HOMBRE, CUALQUIERA. El relato describe lo
//   que le pasa a quien la ve, no la peripecia de alguien con nombre. LA CÁMARA
//   NO DEBE DARLE BIOGRAFÍA: va de espaldas, de lejos o cortado, y su cara sólo
//   entra cuando el asunto es callar.
// · ELLA NO ES UN ESPANTO NI UN WANÜLÜÜ. Es una MAJAYURA ELEGANTE Y BIEN
//   VESTIDA, y lo que da son SECRETOS. LO MORTAL ES SEGUIRLA, NO ELLA: ni un
//   solo plano puede hacerla amenazante.
// · PURÓ ES UNA CUEVA SAGRADA DONDE NINGÚN SER VIVIENTE PUEDE ENTRAR. Que él
//   entre es ya la transgresión. El inventario lo marca `restringida`: SE
//   REPRESENTA LA BOCA, NUNCA EL INTERIOR.
// · EL DESVÍO SE NARRA COMO PÉRDIDA DEL CAMINO, NO COMO HECHIZO VISIBLE: la
//   trocha se borra, los cerros cambian de sitio. NADA DE EFECTOS SOBRE ELLA.
// · LA PROHIBICIÓN DE CONTAR ES EL EJE MORAL y se repite TRES VECES en el canon
//   —junto al fuego, en el chinchorro, cuando preguntan—. Esa triple
//   insistencia se conserva en tres planos distintos del mismo bloque.
// · LA SEGUNDA VARIANTE, LA PIEDRA BLANCA QUE SE ALEJA, NO ES ADORNO: es la
//   misma trampa con otra forma, y termina en el mar.
// · PAPACH es la piedra en que quedan los que la alcanzan. No se confunde con
//   la piedra de «el-incesto» ni con la de «la-india-worunka».
// · EL ENCIERRO DE LA MAJAYURA aparece en otras fichas; AQUÍ LA PALABRA NOMBRA
//   A LA APARICIÓN, NO AL RITO. No se cruzan.
//
// DATO DE DIRECCIÓN DE ARTE del inventario: EL VIENTO DEL NORDESTE aparece en
// cinco mitos CON LA MISMA DIRECCIÓN. Aquí el polvo y las ropas se mueven
// siempre desde el nordeste, en todos los cuadros de exterior.
//
// GUION DE LUZ: boca de Puró a primera hora → apariciones a deshora, de día y
// de noche → mediodía de viento en el cardonal → tarde en que la trocha se
// borra → boca de la cueva al anochecer → días después, hallazgo y ausencia →
// regreso a la ranchería → tres silencios: fuego, chinchorro, pregunta → sol
// duro sobre la piedra blanca → mar al atardecer.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-majayura-puro-escenas";
export const OUT_DIR = "wayuu/videos/la-majayura-que-pierde-a-los-hombres/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; espanto, espectro, fantasma, figura translucida, monstruo, demonio, calavera; ojos brillantes, sonrisa siniestra, garras, colmillos, pelo tapando la cara; seduccion explicita, insinuacion erotica, desnudez, ropa transparente, pose sensual; resplandor, aureola, humo, particulas, hechizo dibujado, espiral hipnotica; cadaver a la vista, cuerpo, sangre, ahogamiento en plano, gore; sirena, ninfa, hada, iconografia europea; texto, rotulos, simbolos, flechas indicando el camino";
export const PALETTE =
  PALETTE_BASE + "; ella es el unico punto vestido de fiesta del mito —manta larga de rojo tierra intenso con cenefa tejida ancha— y por eso se ve a distancia; la piedra blanca y la espuma del mar son los unicos claros";

const MJ =
  "LA MISMA majayura de Puró de la referencia (mujer wayúu joven, MUY BIEN VESTIDA: manta larga hasta el tobillo de rojo tierra intenso con cenefa tejida ancha en el ruedo, collares de tumas, pelo negro recogido y limpio, descalza), de aspecto enteramente humano y tranquilo, NUNCA amenazante";
const HB =
  "UN HOMBRE wayúu cualquiera, adulto, manta corta terciada y faja tejida, waireñas de suela plana, SIN NADA QUE LO DISTINGA: no es un personaje, es cualquiera";

export const ITEMS = armar([
  // b1 — Puró es una cueva sagrada. Allí vive una majayura bien vestida.
  esc("b1a", [ref("puro"), ref("serrania_baja"), ref("cardon")], {
    comun: `Primera hora, viento del nordeste. PURÓ ES UNA CUEVA SAGRADA Y NINGÚN SER VIVIENTE PUEDE ENTRAR: SE REPRESENTA LA BOCA, NUNCA EL INTERIOR. Sin figuras. Objeto ancla: la boca de la cueva.`,
    camara: {
      a: "PLANO MACRO del canto de piedra de la boca de la cueva, pulido por el viento, con el polvo pasando desde el nordeste.",
      b: "la cámara ha RETROCEDIDO muchísimo: GRAN PLANO GENERAL de la ladera con la boca de Puró pequeña y oscura en mitad de la piedra, y ni un camino que llegue hasta ella.",
    },
    ini: "el canto de piedra de la boca, pulido por el viento, con el polvo pasando desde el nordeste.",
    fin: "desde lejos, la boca de Puró es pequeña y oscura en mitad de la piedra, y no hay ningún camino que llegue hasta ella.",
  }, "interior de la cueva, luz al fondo, portal, altar, simbolos, monstruo"),
  escp("b1b", [ref("majayura_puro"), ref("serrania_baja")], {
    comun: `Primera hora. ALLÍ VIVE UNA MAJAYURA ELEGANTE Y BIEN VESTIDA. ${MJ}. Es el único punto de fiesta del mito y se ve desde lejos. Objeto ancla: la cenefa tejida del ruedo.`,
    camara: {
      a: "PLANO MACRO de la cenefa tejida ancha del ruedo de la manta roja, moviéndose con el viento.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ladera con ella de pie junto a la boca de la cueva, pequeña pero perfectamente visible por el color.",
    },
    ini: "la cenefa tejida ancha del ruedo de la manta roja se mueve con el viento.",
    fin: "desde arriba está de pie junto a la boca de la cueva, pequeña pero perfectamente visible por el color.",
  }, "espectro, translucida, resplandor, pose sensual, pelo tapando la cara, garras"),

  // b2 — Se deja ver por unos pocos. Sale en ciertas épocas, de día o de noche.
  escp("b2a", [ref("majayura_puro"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Mediodía. SE DEJA VER POR UNOS POCOS Y LES REVELA SECRETOS: aparece a plena luz, en el camino, como cualquiera. Objeto ancla: la figura roja entre los cardones.`,
    camara: {
      a: "PLANO GENERAL de la llanura a mediodía con los cardones y nada más, vacía.",
      b: "la cámara ha hecho un PANORÁMICO corto hacia un lado: PLANO GENERAL del mismo terreno con ella ya de pie entre dos cardones, sin que se haya visto llegar.",
    },
    ini: "la llanura a mediodía está vacía, con los cardones y nada más.",
    fin: "al barrer hacia un lado aparece ella de pie entre dos cardones, sin que se la haya visto llegar.",
  }, "aparicion con humo, resplandor, translucida, teletransporte dibujado, espectro"),
  escp("b2b", [ref("majayura_puro"), ref("constelaciones"), ref("llanura_cardonal")], {
    comun: `Noche. SALE EN CIERTAS ÉPOCAS, DE DÍA O DE NOCHE: la misma figura, de noche, igual de corriente. Objeto ancla: la manta roja bajo las estrellas.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de perfil de noche, tranquila, sin nada raro en los ojos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL nocturno de la llanura con ella diminuta y el punto rojo de la manta apenas distinguible.",
    },
    ini: "de perfil y de noche, la cara está tranquila y no hay nada raro en sus ojos.",
    fin: "desde muy arriba es diminuta y el punto rojo de la manta apenas se distingue en la llanura.",
  }, "ojos brillantes, resplandor, luna llena dramatica, niebla, espectro, lobos"),

  // b3 — Un hombre camina solo con el nordeste en la cara. Ella aparece.
  escp("b3a", [ref("hombre_que_la_sigue"), ref("llanura_cardonal"), ref("trupillo")], {
    comun: `Mediodía de viento. ${HB} CAMINA SOLO ENTRE CARDONES, CON EL NORDESTE EN LA CARA. No tiene biografía: va de espaldas o cortado. Objeto ancla: el polvo que le da de frente.`,
    camara: {
      a: "PLANO DETALLE del borde de su manta y el pelo empujados todos hacia el mismo lado por el viento, sin que se vea la cara.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: GRAN PLANO GENERAL en picado de la llanura con él diminuto y solo en la trocha, y el polvo cruzando en diagonal desde el nordeste.",
    },
    ini: "el borde de la manta y el pelo empujados hacia el mismo lado por el viento, sin que se vea la cara.",
    fin: "desde muy arriba es diminuto y va solo por la trocha, con el polvo cruzando en diagonal desde el nordeste.",
  }, "primer plano de su cara, biografia, retrato, heroe, pose"),
  escp("b3b", [ref("majayura_puro"), ref("hombre_que_la_sigue"), ref("llanura_cardonal")], {
    comun: `Mediodía. ELLA APARECE ADELANTE Y LE GUSTA: está más allá en el camino, de espaldas, andando. Nada de seducción ni de mirada. Objeto ancla: la distancia entre los dos.`,
    camara: {
      a: "PLANO MEDIO por encima de su hombro, de espaldas, con la trocha abierta delante y algo rojo al fondo.",
      b: "la cámara ha AVANZADO por la trocha hasta ella y ha girado al costado: PLANO MEDIO lateral de ella andando tranquila, sin volverse, con él ya pequeño y lejos detrás.",
    },
    ini: "por encima de su hombro, la trocha se abre delante y al fondo hay algo rojo.",
    fin: "de costado, ella anda tranquila y sin volverse, y él ya queda pequeño y lejos detrás.",
  }, "mirada seductora, sonrisa, gesto de llamar, insinuacion, resplandor, hechizo"),

  // b4 — Él la mira y la trocha se le borra. Va detrás hasta Puró.
  esc("b4a", [ref("llanura_cardonal"), ref("cardon"), ref("serrania_baja")], {
    comun: `Tarde. LA TROCHA SE LE BORRA BAJO LOS PIES: el desvío es PÉRDIDA DEL CAMINO, no hechizo visible. Los cerros cambian de sitio. Sin figuras ni efectos. Objeto ancla: la trocha que desaparece.`,
    camara: {
      a: "PLANO CENITAL MACRO de la trocha de arena difuminándose hasta perderse en el terreno suelto.",
      b: "la cámara se ha ELEVADO y ha girado sobre sí misma: GRAN PLANO GENERAL en picado del terreno sin un solo camino en ninguna dirección y los cerros del fondo en un orden que no cuadra.",
    },
    ini: "la trocha de arena se difumina hasta perderse en el terreno suelto.",
    fin: "desde arriba y girando, no hay un solo camino en ninguna dirección y los cerros del fondo están en un orden que no cuadra.",
  }, "espiral hipnotica, niebla magica, portal, resplandor, simbolos en el suelo, flechas"),
  escp("b4b", [ref("hombre_que_la_sigue"), ref("puro"), ref("serrania_baja")], {
    comun: `Anochecer. VA DETRÁS HASTA LA BOCA DE PURÓ: entrar es YA la transgresión, antes de cualquier otra cosa. Objeto ancla: sus pies en el umbral de piedra.`,
    camara: {
      a: "PLANO MEDIO de él de espaldas, pequeño, subiendo la última pendiente de piedra hacia la boca.",
      b: "la cámara ha AVANZADO hasta el umbral y ha bajado al suelo: PLANO MACRO de sus pies pasando el canto de piedra de la entrada, con la sombra tragándoselos.",
    },
    ini: "de espaldas y pequeño, sube la última pendiente de piedra hacia la boca.",
    fin: "en el umbral, sus pies pasan el canto de piedra y la sombra se los traga.",
  }, "interior visible, luz al fondo, portal, monstruo esperando, resplandor, ojos"),

  // b5 — Adentro ella le revela los secretos. Queda encantado y no vuelve.
  esc("b5a", [ref("puro"), ref("serrania_baja")], {
    comun: `Anochecer. ADENTRO ELLA LE REVELA LOS SECRETOS QUE LA CUEVA ALBERGA: EL INTERIOR NO SE MUESTRA NUNCA. El cuadro se queda fuera, en la boca, y ahí se queda. Sin figuras. Objeto ancla: la boca oscura desde fuera.`,
    camara: {
      a: "PLANO MEDIO de la boca de la cueva desde fuera, ya sin nadie, con la última luz dándole de lado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL de la serranía al anochecer con la boca reducida a un punto negro y la llanura entera vacía debajo.",
    },
    ini: "la boca de la cueva desde fuera, ya sin nadie, con la última luz dándole de lado.",
    fin: "desde muy arriba, la boca es un punto negro y la llanura entera está vacía debajo.",
  }, "interior, tesoro, luz magica, altar, simbolos, secretos dibujados, texto"),
  esc("b5b", [ref("llanura_cardonal"), ref("rancheria"), ref("constelaciones")], {
    comun: `Noche. QUEDA TAN ENCANTADO QUE SE QUEDA Y NO VUELVE: la ausencia se cuenta DESDE LA RANCHERÍA, con el sitio que él no ocupa. Objeto ancla: el chinchorro vacío que nadie descuelga.`,
    camara: {
      a: "PLANO MACRO de un chinchorro colgado y vacío, quieto, con la cuerda tensa.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL nocturno de la ranchería con los demás chinchorros ocupados y ése solo, vacío, en el medio.",
    },
    ini: "un chinchorro colgado y vacío, quieto, con la cuerda tensa.",
    fin: "desde arriba, los demás chinchorros están ocupados y ése queda solo y vacío en el medio.",
  }, "fantasma, aparicion, resplandor, cadaver, tumba, llanto teatral"),

  // b6 — Muchas veces hallan el cadáver. Otras el hombre desaparece.
  esc("b6a", [ref("llanura_cardonal"), ref("cardon"), ref("gallinazo")], {
    comun: `Días después, luz dura. MUCHAS VECES LA GENTE HALLA DESPUÉS AL HOMBRE PERDIDO: NO SE MUESTRA EL CUERPO. Lo que hay en cuadro es el sitio donde lo encontraron —las waireñas, la manta— y las aves girando alto. Objeto ancla: las waireñas dejadas en la arena.`,
    camara: {
      a: "PLANO CENITAL MACRO de unas waireñas de suela plana caídas en la arena, una boca arriba y otra de lado.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del cardonal con ese punto pequeño abajo y tres aves girando en alto, muy separadas.",
    },
    ini: "unas waireñas de suela plana caídas en la arena, una boca arriba y otra de lado.",
    fin: "desde muy arriba, ese punto es pequeño en el cardonal y tres aves giran en alto, muy separadas.",
  }, "cadaver, cuerpo, huesos, sangre, carrona, gore, buitres comiendo"),
  esc("b6b", [ref("llanura_cardonal"), ref("del_camino")], {
    comun: `Luz dura. OTRAS VECES EL HOMBRE DESAPARECE PARA SIEMPRE: no queda ni eso. El cuadro es un rastro que se corta a mitad de la arena. Objeto ancla: las huellas que terminan sin llegar a nada.`,
    camara: {
      a: "PLANO CENITAL MACRO de una última huella descalza, nítida, con la arena lisa por delante.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con el rastro entrando en el cuadro desde un borde y cortándose en mitad de la nada, sin seguir a ningún sitio.",
    },
    ini: "una última huella descalza, nítida, con la arena lisa por delante.",
    fin: "desde muy arriba, el rastro entra por un borde del cuadro y se corta en mitad de la nada, sin llegar a ninguna parte.",
  }, "portal, resplandor, ropa abandonada, sangre, monstruo, niebla"),

  // b7 — Alguno logra regresar con los secretos. Le está prohibido contarlos.
  escp("b7a", [ref("hombre_que_la_sigue"), ref("rancheria"), ref("enramada")], {
    comun: `Mañana. ALGUNO LOGRA REGRESAR A SU RANCHERÍA CON LOS SECRETOS QUE CONOCIÓ: vuelve, y se le nota que trae algo dentro. Objeto ancla: la figura que llega por el camino.`,
    camara: {
      a: "GRAN PLANO GENERAL de la llanura con una figura pequeñísima acercándose por la trocha.",
      b: "la cámara ha AVANZADO hasta la ranchería y ha girado: PLANO MEDIO de él entrando bajo la enramada, con la gente levantándose a mirarlo.",
    },
    ini: "una figura pequeñísima se acerca por la trocha, vista desde muy lejos.",
    fin: "entra bajo la enramada y la gente se levanta a mirarlo.",
  }, "aureola, resplandor, marca en la piel, ojos cambiados, locura dibujada"),
  escp("b7b", [ref("hombre_que_la_sigue"), ref("primeros_wayuu"), ref("enramada")], {
    comun: `Mañana. LE ESTÁ PROHIBIDO CONTAR LO QUE VIO: la prohibición no se la impone nadie en cuadro; la lleva él. Objeto ancla: la boca que se cierra.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara empezando a abrir la boca y parándose, con los labios cerrándose otra vez.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con seis personas alrededor esperando y él callado en el centro.",
    },
    ini: "empieza a abrir la boca y se para, y los labios se le cierran otra vez.",
    fin: "desde arriba, seis personas alrededor esperan y él sigue callado en el centro.",
  }, "mordaza, cadenas, mano tapando la boca, violencia, simbolos, texto"),

  // b8 — Calla junto al fuego, en el chinchorro, cuando preguntan. (CITA)
  escp("b8a", [ref("hombre_que_la_sigue"), ref("fuego_y_cocina"), ref("chinchorro")], {
    comun: `Noche. LOS DOS PRIMEROS SILENCIOS: CALLA JUNTO AL FUEGO y CALLA EN EL CHINCHORRO. La triple insistencia del canon se conserva, y aquí van dos. Objeto ancla: la boca cerrada en dos sitios distintos.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara junto al fogón, iluminada desde abajo, callada mientras alrededor se habla.",
      b: "la cámara ha RETROCEDIDO y ha girado hasta el chinchorro: PLANO MEDIO de él ya tumbado con los ojos abiertos en la oscuridad, sin dormir y sin decir nada.",
    },
    ini: "junto al fogón, la cara iluminada desde abajo está callada mientras alrededor se habla.",
    fin: "ya en el chinchorro, está tumbado con los ojos abiertos en la oscuridad, sin dormir y sin decir nada.",
  }, "locura, terror, gritos, autolesion, mordaza, resplandor"),
  escp("b8b", [ref("hombre_que_la_sigue"), ref("primeros_wayuu"), ref("enramada")], {
    comun: `Mañana. EL TERCER SILENCIO: CALLA CUANDO PREGUNTAN. Y LA CITA es el precepto del mito: si lo cuenta, llega la muerte. Objeto ancla: la cara que no contesta.`,
    camara: {
      a: "PLANO MEDIO CORTO de otra persona preguntándole de frente, insistiendo.",
      b: "la cámara ha GIRADO 180 grados y ha cerrado: PRIMER PLANO de él con la mandíbula apretada, negando muy despacio con la cabeza.",
    },
    ini: "otra persona le pregunta de frente, insistiendo.",
    fin: "al girar, él aprieta la mandíbula y niega muy despacio con la cabeza.",
  }, "mordaza, violencia, gritos, locura, texto en pantalla, calavera"),

  // b9 — También aparece como una piedra blanca. Da pasos y ella se aleja.
  esc("b9a", [ref("piedras_y_huesos"), ref("llanura_cardonal"), ref("costa_penascos")], {
    comun: `Sol duro. LA SEGUNDA VARIANTE, Y ES LA MISMA TRAMPA CON OTRA FORMA: APARECE COMO UNA PIEDRA BLANCA MUY CERCA, que el hombre desea alcanzar. Sin figuras. Objeto ancla: la piedra blanca al alcance de la mano.`,
    camara: {
      a: "PLANO MACRO de una piedra blanca lisa en la arena, aparentemente a un paso, con la luz dura encima.",
      b: "la cámara ha RETROCEDIDO en travelling: PLANO GENERAL del mismo terreno con la misma piedra ya mucho más lejos de lo que parecía, pequeña en la distancia.",
    },
    ini: "una piedra blanca lisa en la arena, aparentemente a un paso, con la luz dura encima.",
    fin: "al retroceder, la misma piedra está mucho más lejos de lo que parecía y se ve pequeña en la distancia.",
  }, "resplandor, brillo magico, levitacion, simbolos, ojos en la piedra"),
  escp("b9b", [ref("hombre_que_la_sigue"), ref("piedras_y_huesos"), ref("costa_penascos")], {
    comun: `Tarde. DA PASOS Y ELLA SE ALEJA: el hombre avanza y la distancia no baja. La trampa es de perspectiva, no de magia. Objeto ancla: los pasos que no acortan nada.`,
    camara: {
      a: "PLANO DETALLE de unos pies dando tres pasos seguidos sobre la arena, decididos.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con él avanzando por la playa y la piedra blanca siempre a la misma distancia, ya cerca de la orilla.",
    },
    ini: "unos pies dan tres pasos seguidos sobre la arena, decididos.",
    fin: "desde muy arriba, él avanza por la playa y la piedra blanca sigue a la misma distancia, ya cerca de la orilla.",
  }, "hechizo dibujado, espiral, resplandor, ojos en blanco, sonambulismo"),

  // b10 — La piedra entra al mar. A quien la alcanza lo vuelve piedra: Papach.
  esc("b10a", [ref("costa_penascos"), ref("piedra_entre_las_olas")], {
    comun: `Atardecer. LA PIEDRA ENTRA AL MAR Y EL HOMBRE SE AHOGA DETRÁS: EL AHOGAMIENTO NO SE MUESTRA. El cuadro es la piedra blanca metiéndose en el agua y las huellas que terminan en la orilla. Objeto ancla: las huellas que entran al agua.`,
    camara: {
      a: "PLANO CENITAL MACRO de las últimas huellas en la arena de la orilla, con el agua borrándolas por el borde.",
      b: "la cámara ha BASCULADO hacia el mar y ha retrocedido: PLANO GENERAL del agua al atardecer con la piedra blanca alejándose entre las olas y nada más en cuadro.",
    },
    ini: "las últimas huellas en la arena de la orilla, con el agua borrándolas por el borde.",
    fin: "en el mar al atardecer, la piedra blanca se aleja entre las olas y no hay nada más en cuadro.",
  }, "cuerpo, ahogamiento, brazos en el agua, sangre, criaturas marinas, sirena"),
  esc("b10b", [ref("piedra_entre_las_olas"), ref("costa_penascos")], {
    comun: `Última luz. A QUIEN LA ALCANZA LO VUELVE PIEDRA: PAPACH. Es una roca en el agua, erosionada, sin forma humana reconocible. NO se confunde con la piedra de «el-incesto» ni con la de «la-india-worunka». Objeto ancla: la roca en el agua.`,
    camara: {
      a: "PLANO MACRO de la superficie erosionada de una roca batida por el agua, con la sal y el desgaste a la vista.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final de la costa al atardecer con varias rocas repartidas entre las olas, todas iguales, sin saber cuál es cuál.",
    },
    ini: "la superficie erosionada de una roca batida por el agua, con la sal y el desgaste a la vista.",
    fin: "desde muy arriba, varias rocas repartidas entre las olas se ven todas iguales y no se sabe cuál es cuál.",
  }, "estatua, figura humana en la roca, cara tallada, monumento, placa, texto"),
]);
