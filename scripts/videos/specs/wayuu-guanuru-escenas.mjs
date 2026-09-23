// Keyframes de Guanurú y la casa cerrada — 16 bloques × 2 escenas × 2 cuadros
// = 64 imágenes ≈ 160 s.
// Guion: guion-guanuru-v2.json (N=16) · Acta: acta-guanuru.json (32 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · GUANURÚ NO SE VE NUNCA. Vive en las casas desocupadas, y LO ÚNICO QUE SE
//   MUESTRA DE ÉL ES LO QUE DEJA: la fiebre, la cabra tendida, la patilla
//   doblada. El inventario lo dice sin margen: «así se dibuja Guanurú, por tres
//   efectos concretos, nunca por un cuerpo».
// · EL RELATO ESTÁ CONSTRUIDO EN ESPEJO: DOS CASAS reciben la misma mariposa y
//   hacen lo contrario. LA DIRECCIÓN DE ARTE DEBE HACER LEGIBLE ESA SIMETRÍA,
//   y por eso los bloques 3–7 y 8–10 comparten tipos de plano.
// · LA MARIPOSA BLANCA NO ES GUANURÚ: es UN MUERTO DE LA CASA QUE VIENE DE
//   VISITA. Matarla es lo que abre la puerta al daño.
// · COMPARTE CON «jirairay» la piachada, la mariposa y el reclamo del muerto en
//   sueños. Son dos fichas del mismo sistema de creencia y NO SE CRUZAN: allá
//   el tema es el canto, aquí LA CASA.
// · LA CALAVERA DE CABALLO EN LA ENTRADA y LAS SEMILLAS DE ALGODÓN CON SAL EN
//   LAS BRASAS SON REMEDIOS CONCRETOS, NO SÍMBOLOS. Se muestran como se usan.
// · LA MANTIS SOBRE LA PIEDRA DEL FOGÓN es un SEGUNDO AVISO, no un monstruo.
//   Tampoco se toca.
// · EL DAÑO ALCANZA A PERSONAS, ANIMALES Y PLANTAS POR IGUAL, y el canon lo
//   dice EN ESE ORDEN. La secuencia de planos lo respeta.
// · EL CIERRE VUELVE AL PRIMER PLANO —el viento moviendo lo colgado en la casa
//   cerrada—. El video termina donde empezó, y eso NO ES ADORNO: Guanurú sigue
//   ahí. Los cuadros b1a y b16b son el mismo sitio y el mismo encuadre de
//   apertura.
//
// El gesto de la mujer más vieja está escrito en el inventario y es la ficha
// entera: LAS DOS MANOS JUNTAS, SIN APRETAR.
//
// GUION DE LUZ: viento del nordeste en la casa cerrada → noche de los que
// apuran el paso → última luz cuando entra la mariposa → penumbra del cuarto de
// los chinchorros → mano detenida a media altura → noche entera de aleteo →
// aire frío de antes del amanecer → otra casa, otra tarde → noche del sueño →
// amanecer con el fogón en ceniza → mediodía de la cabra → tarde de las
// patillas → llegada de la piache → noche de la maraca → amanecer con la fiebre
// floja → viento otra vez en la casa cerrada.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-guanuru-escenas";
export const OUT_DIR = "wayuu/videos/guanuru/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; monstruo, demonio, espectro, figura encapuchada, sombra con forma humana, calavera con ojos, guadaña; personificacion de la enfermedad, criatura alada gigante, mariposa monstruosa o con cara; lesiones, pustulas, erupciones o manchas en la piel, llagas, sangre; cadaveres, ataudes, cruces, lapidas, funeral cristiano; brujeria de pelicula, circulos rituales, velas negras, pentagramas, humo de colores; medico, hospital, jeringas, mascarillas; resplandor, aureola, particulas, magia dibujada";
export const PALETTE =
  PALETTE_BASE + "; el blanco de la mariposa es el unico blanco del mito y por eso se ve desde lejos; la casa cerrada va siempre en la misma luz gris de viento, tanto al abrir como al cerrar";

const MV =
  "LA MISMA mujer mayor de la referencia (mujer wayúu muy anciana, pelo blanco recogido, manta larga de algodón crudo con cenefa tejida en el ruedo, cara tranquila y mandona, descalza)";
const PC =
  "EL MISMO pastor de cabras de la referencia (hombre wayúu adulto, curtido, manta corta terciada y faja tejida, waireñas de suela plana, cara cansada)";
const OU =
  "LA MISMA outsu de la referencia (mujer wayúu mayor, piache, manta larga oscura, collares de tumas, pelo recogido, cara concentrada)";

export const ITEMS = armar([
  // b1 — Después de una muerte la casa se cierra. El nordeste mueve lo colgado.
  esc("b1a", [ref("piichi"), ref("rancheria")], {
    comun: `Luz gris de viento. DESPUÉS DE UNA MUERTE LA CASA SE CIERRA Y NADIE VUELVE A COLGAR ALLÍ SU CHINCHORRO. ESTE ENCUADRE ES EL DEL CIERRE DEL VIDEO: la misma casa, la misma luz. Sin figuras. Objeto ancla: la puerta trancada.`,
    camara: {
      a: "PLANO MACRO de una tranca de madera atravesada en la puerta, con la fibra gastada del amarre.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la casa entera cerrada, apartada del resto de la ranchería, con el terreno alrededor sin huellas.",
    },
    ini: "una tranca de madera atravesada en la puerta, con la fibra gastada del amarre.",
    fin: "desde arriba, la casa está cerrada y apartada del resto de la ranchería, con el terreno alrededor sin una huella.",
  }, "cadaver, ataud, cruces, lapida, flores, ruinas, telarañas"),
  esc("b1b", [ref("enramada"), ref("chinchorro"), ref("piichi")], {
    comun: `Luz gris. EL VIENTO DEL NORDESTE ENTRA POR LAS RENDIJAS Y MUEVE LO QUE QUEDÓ COLGADO DE LAS VIGAS: es la imagen que abre y cierra el mito. Sin figuras. Objeto ancla: lo colgado moviéndose solo.`,
    camara: {
      a: "PLANO MACRO de un cabo de chinchorro y unas fibras colgando de una viga, moviéndose con el aire.",
      b: "la cámara ha RETROCEDIDO dentro del cuarto: PLANO GENERAL del interior vacío con tres o cuatro cosas colgadas de las vigas, todas balanceándose a la vez, y la luz entrando en rayas por las rendijas.",
    },
    ini: "un cabo de chinchorro y unas fibras cuelgan de la viga y se mueven con el aire.",
    fin: "dentro, el cuarto está vacío y tres o cuatro cosas colgadas de las vigas se balancean a la vez, con la luz entrando en rayas por las rendijas.",
  }, "fantasma, silueta, sombra humana, resplandor, niebla siniestra, ojos"),

  // b2 — Quien pasa de noche apura el paso. Allí vive Guanurú.
  escp("b2a", [ref("caminantes"), ref("piichi"), ref("constelaciones")], {
    comun: `Noche. QUIEN PASA DE NOCHE APURA EL PASO Y NO MIRA HACIA ADENTRO: el miedo se cuenta con el cuerpo, no con la cara. Objeto ancla: los pies que aceleran.`,
    camara: {
      a: "PLANO DETALLE de unos pies con waireñas acelerando el paso sobre la arena, de noche.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL nocturno con la figura pasando de largo por delante de la casa cerrada, sin volver la cabeza.",
    },
    ini: "unos pies con waireñas aceleran el paso sobre la arena, de noche.",
    fin: "desde arriba, la figura pasa de largo por delante de la casa cerrada sin volver la cabeza.",
  }, "monstruo, sombra amenazante, ojos brillantes, panico, gritos, huida"),
  esc("b2b", [ref("piichi"), ref("wina"), ref("llanura_cardonal")], {
    comun: `Noche. ALLÍ VIVE GUANURÚ, QUE TRAE LA MUERTE, y NO SE LE DA CUERPO EN NINGÚN MOMENTO: el cuadro es la casa oscura por dentro y nada más. Objeto ancla: la oscuridad del vano.`,
    camara: {
      a: "PLANO MEDIO de la rendija entre la puerta y el marco, negra, sin nada detrás que se distinga.",
      b: "la cámara ha RETROCEDIDO muchísimo: GRAN PLANO GENERAL nocturno de la llanura con las casas habitadas iluminadas a lo lejos y esa una, negra, apartada de todas.",
    },
    ini: "la rendija entre la puerta y el marco está negra y no se distingue nada detrás.",
    fin: "desde muy lejos, las casas habitadas se ven iluminadas y esa una, negra, queda apartada de todas.",
  }, "figura en la oscuridad, ojos, monstruo, espectro, calavera, niebla"),

  // b3 — Al caer la tarde una mariposa entra al cuarto de los chinchorros.
  esc("b3a", [ref("mariposa_nocturna"), ref("enramada")], {
    comun: `Última luz. PRIMERA CASA. AL CAER LA TARDE UNA MARIPOSA NOCTURNA ENTRA AL CUARTO DE LOS CHINCHORROS: ES BLANCA, COMO UNA MANO ABIERTA. No es Guanurú: es alguien de los suyos. Objeto ancla: la mariposa blanca.`,
    camara: {
      a: "PLANO MACRO de las alas blancas abiertas de una mariposa nocturna, con las nervaduras a contraluz.",
      b: "la cámara ha RETROCEDIDO siguiéndola en vuelo: PLANO GENERAL del interior de la casa con la mariposa pequeña y blanca entrando por el vano y los chinchorros colgados al fondo.",
    },
    ini: "las alas blancas abiertas de la mariposa, con las nervaduras a contraluz.",
    fin: "desde dentro se la ve entrar por el vano, pequeña y blanca, con los chinchorros colgados al fondo.",
  }, "mariposa monstruosa, cara en las alas, calavera en el dorso, resplandor, enjambre"),
  escp("b3b", [ref("primeros_wayuu"), ref("chinchorro"), ref("enramada")], {
    comun: `Última luz. LA FAMILIA ESTÁ DENTRO, en su vida normal: es una casa habitada, lo contrario de la cerrada. Objeto ancla: la vida doméstica de la tarde.`,
    camara: {
      a: "PLANO MACRO de unas manos recogiendo un tejido a medio hacer, con la luz de la tarde de lado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con cinco personas repartidas, chinchorros colgados y la mariposa blanca entrando por arriba, todavía sin que nadie la vea.",
    },
    ini: "unas manos recogen un tejido a medio hacer, con la luz de la tarde de lado.",
    fin: "desde arriba, cinco personas están repartidas por el cuarto y la mariposa blanca entra por lo alto sin que nadie la haya visto todavía.",
  }, "panico, gritos, huida, monstruo, sombras amenazantes"),

  // b4 — Roza la cara de un niño y se posa. Un muchacho levanta la mano.
  escp("b4a", [ref("mariposa_nocturna"), ref("chinchorro"), ref("primeros_wayuu")], {
    comun: `Penumbra. DA VUELTAS, ROZA LA CARA DE UN NIÑO Y SE POSA EN UNA CUERDA: el contacto es leve y el pequeño se ve a media distancia, de espaldas y dormido. Objeto ancla: la mariposa posada en el cabo.`,
    camara: {
      a: "PLANO GENERAL del cuarto en penumbra con la mariposa dando vueltas en lo alto y los chinchorros ocupados abajo.",
      b: "la cámara ha DESCENDIDO y ha cerrado: PLANO MACRO de la mariposa posada en un cabo trenzado, con las alas abiertas y quieta.",
    },
    ini: "en el cuarto en penumbra, la mariposa da vueltas en lo alto sobre los chinchorros ocupados.",
    fin: "posada en el cabo trenzado, la mariposa tiene las alas abiertas y está quieta, vista muy de cerca.",
  }, "primer plano del menor, niño asustado, llanto, monstruo, picadura, sangre"),
  escp("b4b", [ref("nino_que_entra"), ref("mariposa_nocturna"), ref("chinchorro")], {
    comun: `Penumbra. UN MUCHACHO LEVANTA LA MANO para matarla: el gesto queda a medio camino y ahí se corta. Objeto ancla: la mano abierta en el aire.`,
    camara: {
      a: "PLANO MACRO de la mariposa quieta en el cabo, ocupando el cuadro.",
      b: "la cámara ha RETROCEDIDO de golpe: PLANO MEDIO con una mano abierta detenida en el aire a un palmo de ella, y el brazo tensado.",
    },
    ini: "la mariposa está quieta en el cabo y ocupa el cuadro entero.",
    fin: "al retroceder aparece una mano abierta detenida en el aire a un palmo de ella, con el brazo tensado.",
  }, "golpe, aplastamiento, insecto destrozado, sangre, primer plano del menor"),

  // b5 — «No la toques: es alguien de los nuestros que viene de visita». (CITA)
  escp("b5a", [ref("mujer_mayor"), ref("nino_que_entra"), ref("chinchorro")], {
    comun: `Penumbra. LA MUJER MÁS VIEJA LO DETIENE. ${MV}. LA CITA es la regla que la otra casa va a desobedecer. Objeto ancla: la mano vieja sobre el brazo joven.`,
    camara: {
      a: "PLANO MACRO de una mano arrugada cerrándose sobre un antebrazo joven, firme y sin violencia.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de ella hablándole de cerca, tranquila, con el muchacho bajando el brazo.",
    },
    ini: "una mano arrugada se cierra sobre un antebrazo joven, firme y sin violencia.",
    fin: "ella le habla de cerca, tranquila, y el muchacho baja el brazo.",
  }, "regañina teatral, miedo, gritos, ritual, velas, simbolos, texto"),
  esc("b5b", [ref("mariposa_nocturna"), ref("chinchorro"), ref("piichi")], {
    comun: `Penumbra. ES ALGUIEN DE LOS NUESTROS QUE VIENE DE VISITA: el cuadro trata a la mariposa como visita, no como amenaza. Objeto ancla: la mariposa entre los chinchorros de la familia.`,
    camara: {
      a: "PLANO MACRO de las alas blancas con el polvillo y las escamas visibles, en calma.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con los chinchorros ocupados, la lámpara baja y la mariposa posada entre ellos como una cosa más de la casa.",
    },
    ini: "las alas blancas muestran el polvillo y las escamas, en calma.",
    fin: "desde arriba, el cuarto tiene los chinchorros ocupados y la mariposa posada entre ellos como una cosa más de la casa.",
  }, "aura, resplandor, rostro en las alas, fantasma, niebla, simbolos"),

  // b6 — Aletea toda la noche. La recoge con las dos manos, sin apretar.
  esc("b6a", [ref("mariposa_nocturna"), ref("chinchorro"), ref("piichi")], {
    comun: `Noche cerrada. LA MARIPOSA ALETEA TODA LA NOCHE Y NO LOS DEJA DORMIR: es una molestia real, y eso hace más difícil el gesto que viene. Objeto ancla: el aleteo contra la madera.`,
    camara: {
      a: "PLANO MACRO de las alas golpeando repetidamente contra una viga de madera en la oscuridad.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL del cuarto de noche con los chinchorros moviéndose, gente que se da la vuelta sin dormir, y la mariposa arriba.",
    },
    ini: "las alas golpean una y otra vez contra la viga de madera en la oscuridad.",
    fin: "desde lejos, los chinchorros se mueven, la gente se da la vuelta sin dormir y la mariposa sigue arriba.",
  }, "enjambre, plaga, monstruo, ojos, sombra gigante, terror"),
  escp("b6b", [ref("mujer_mayor"), ref("mariposa_nocturna")], {
    comun: `Noche. LA RECOGE CON LAS DOS MANOS, SIN APRETAR. El inventario dice que ESE GESTO ES LA FICHA ENTERA. Objeto ancla: las dos manos ahuecadas.`,
    camara: {
      a: "PLANO MACRO de dos manos viejas ahuecándose alrededor de la mariposa, dejándole aire dentro.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de ella andando despacio hacia el vano con las manos juntas por delante, mirándolas.",
    },
    ini: "dos manos viejas se ahuecan alrededor de la mariposa y le dejan aire dentro.",
    fin: "ella camina despacio hacia el vano con las manos juntas por delante, mirándolas.",
  }, "aplastar, apretar, insecto muerto, ritual, velas, simbolos, resplandor"),

  // b7 — La suelta en el aire frío. Se aleja hacia la casa cerrada.
  escp("b7a", [ref("mujer_mayor"), ref("mariposa_nocturna"), ref("rancheria")], {
    comun: `Aire frío de antes del amanecer. LA SUELTA EN EL AIRE: abre las manos y la deja ir. Objeto ancla: las manos abriéndose.`,
    camara: {
      a: "PLANO MACRO de las dos manos abriéndose despacio y la mariposa saliendo de entre ellas.",
      b: "la cámara ha SEGUIDO a la mariposa hacia arriba y ha retrocedido: PLANO GENERAL con ella pequeña en el umbral, abajo, y la mariposa ya en el aire azul del amanecer.",
    },
    ini: "las dos manos se abren despacio y la mariposa sale de entre ellas.",
    fin: "desde arriba, la mujer es pequeña en el umbral y la mariposa ya va por el aire azul del amanecer.",
  }, "resplandor, particulas, aureola, alma subiendo, angeles, magia"),
  esc("b7b", [ref("mariposa_nocturna"), ref("piichi"), ref("rancheria")], {
    comun: `Aire frío. SE ALEJA HACIA EL LADO DE LA CASA CERRADA: vuelve a donde vive. Objeto ancla: la mariposa entrando en la casa cerrada.`,
    camara: {
      a: "PLANO MEDIO de la mariposa cruzando el aire azul, pequeña, sobre los techos de palma.",
      b: "la cámara ha SEGUIDO su rumbo y se ha elevado: PLANO GENERAL en picado de la casa cerrada con la mariposa colándose por una rendija del techo y desapareciendo dentro.",
    },
    ini: "la mariposa cruza el aire azul, pequeña, por encima de los techos de palma.",
    fin: "desde arriba, la mariposa se cuela por una rendija del techo de la casa cerrada y desaparece dentro.",
  }, "portal, resplandor, humo, monstruo esperando, ojos, niebla siniestra"),

  // b8 — Más lejos, un hombre halla la misma mariposa. Le pega y se duerme.
  escp("b8a", [ref("pastor_de_cabras"), ref("chinchorro"), ref("enramada")], {
    comun: `Otra tarde, OTRA CASA: empieza el ESPEJO, y el par repite el tipo de plano de b3b. ${PC}, cansado, echándose en el chinchorro. Objeto ancla: el cuerpo que se deja caer de cansancio.`,
    camara: {
      a: "PLANO MACRO de unas waireñas cayendo al suelo de arena junto a un chinchorro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con él ya tumbado en el chinchorro, solo, y la mariposa blanca posada en el borde.",
    },
    ini: "unas waireñas caen al suelo de arena junto a un chinchorro.",
    fin: "desde arriba, él ya está tumbado en el chinchorro, solo, y la mariposa blanca está posada en el borde.",
  }, "monstruo, presagio dibujado, sombras amenazantes, ojos, niebla"),
  esc("b8b", [ref("mariposa_nocturna"), ref("chinchorro")], {
    comun: `Tarde. LE PEGA CON LA PALMA Y SE DUERME: es el gesto contrario al de b6b, hecho sin pensar y sin maldad. El golpe NO se muestra: se ve la mano bajando y después la mariposa quieta en el suelo, entera. Objeto ancla: la mariposa caída.`,
    camara: {
      a: "PLANO MEDIO de una palma abierta bajando deprisa hacia el borde del chinchorro.",
      b: "la cámara ha BAJADO al suelo de arena: PLANO MACRO de la mariposa blanca caída en la arena con las alas cerradas y quietas, entera y sin daño a la vista.",
    },
    ini: "una palma abierta baja deprisa hacia el borde del chinchorro.",
    fin: "en la arena, la mariposa blanca está caída con las alas cerradas y quietas, entera y sin daño a la vista.",
  }, "insecto aplastado, restos, sangre, gore, resplandor, humo saliendo"),

  // b9 — Entra en su sueño un muerto que conoce. Le reclama el daño.
  escp("b9a", [ref("pastor_de_cabras"), ref("chinchorro"), ref("enramada")], {
    comun: `Noche. ESA NOCHE ENTRA EN SU SUEÑO UN MUERTO QUE CONOCE: el sueño se cuenta DESDE FUERA, con él dormido, igual que en el resto del corpus. Objeto ancla: la cara dormida que se altera.`,
    camara: {
      a: "PLANO GENERAL nocturno de la enramada con el chinchorro colgado y él dentro, visto de lejos.",
      b: "la cámara ha AVANZADO hasta el chinchorro y ha bajado: PLANO MEDIO CORTO de su cara dormida, con el ceño apretándose y los labios moviéndose.",
    },
    ini: "desde lejos, el chinchorro cuelga de la enramada con él dentro.",
    fin: "de cerca se le ve la cara dormida, el ceño apretándose y los labios moviéndose.",
  }, "vision dibujada, fantasma flotando, figura translucida, resplandor, humo, calavera"),
  escp("b9b", [ref("yolujaa"), ref("piichi"), ref("constelaciones")], {
    comun: `Noche. EL MUERTO TIENE EL ROSTRO DE SIEMPRE y le reclama el daño: EL MISMO yolujaa de la referencia, con cara de persona corriente y no de espectro. Se le ve de lejos y de espaldas, nunca translúcido. Objeto ancla: la figura de espaldas en el umbral.`,
    camara: {
      a: "PLANO MEDIO de una figura de espaldas parada en el umbral de la casa cerrada, quieta, con ropa corriente.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL nocturno con esa figura pequeña en el umbral, la ranchería dormida alrededor y nadie más despierto.",
    },
    ini: "una figura de espaldas está parada en el umbral de la casa cerrada, quieta y con ropa corriente.",
    fin: "desde arriba, esa figura es pequeña en el umbral, la ranchería duerme alrededor y no hay nadie más despierto.",
  }, "espectro, translucido, calavera, ojos brillantes, resplandor, niebla, guadaña, zombi"),

  // b10 — Despierta con el pulso en la garganta y el fogón en ceniza. Fiebre.
  escp("b10a", [ref("pastor_de_cabras"), ref("fuego_y_cocina"), ref("enramada")], {
    comun: `Amanecer gris. DESPIERTA CON EL PULSO EN LA GARGANTA Y EL FOGÓN HECHO CENIZA: dos datos concretos, uno del cuerpo y otro de la casa. Objeto ancla: la ceniza fría del fogón.`,
    camara: {
      a: "PLANO MACRO de la ceniza gris y fría del fogón, sin una brasa, con las piedras alrededor.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO MEDIO de él sentado de golpe en el chinchorro, con la mano en el cuello y la cara desencajada de sueño.",
    },
    ini: "la ceniza gris y fría del fogón, sin una sola brasa, entre las piedras.",
    fin: "él está sentado de golpe en el chinchorro, con la mano en el cuello y la cara desencajada de sueño.",
  }, "sangre, herida, marcas en la piel, monstruo, espectro, medico"),
  escp("b10b", [ref("enfermo"), ref("chinchorro"), ref("piichi")], {
    comun: `Mediodía. DESPUÉS LE ENTRA UNA FIEBRE: PRIMER EFECTO DEL DAÑO, y el canon lo pone primero —personas, animales, plantas—. Se cuenta con el paño en la frente y la totuma al lado, NUNCA con lesiones en la piel. Objeto ancla: el paño doblado en la frente.`,
    camara: {
      a: "PLANO MACRO de un paño de algodón crudo doblado sobre una frente, con el pelo apartado hacia atrás.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con él en el chinchorro y dos personas alrededor, una con la totuma y otra de pie mirando.",
    },
    ini: "un paño de algodón crudo doblado sobre la frente, con el pelo apartado hacia atrás.",
    fin: "desde arriba, él está en el chinchorro y dos personas lo rodean: una con la totuma y otra de pie, mirando.",
  }, "pustulas, erupciones, llagas, manchas en la piel, sangre, hospital, jeringas"),

  // b11 — Una cabra se echa y no se levanta. Las patillas se doblan.
  esc("b11a", [ref("chivos"), ref("trupillo"), ref("llanura_cardonal")], {
    comun: `Mediodía. SEGUNDO EFECTO: UNA CABRA SE ECHA BAJO EL TRUPILLO Y NO SE LEVANTA. Está tendida y viva, sin sangre ni herida. Objeto ancla: la cabra echada a la sombra.`,
    camara: {
      a: "PLANO MACRO del costado de una cabra tendida en la sombra, con la respiración corta moviéndole el pelo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con el resto del rebaño pastando lejos y ese único animal tumbado bajo el trupillo, solo.",
    },
    ini: "el costado de una cabra tendida en la sombra, con la respiración corta moviéndole el pelo.",
    fin: "desde arriba, el resto del rebaño pasta lejos y ese único animal está tumbado bajo el trupillo, solo.",
  }, "animal muerto, sangre, visceras, carrona, buitres, crueldad"),
  esc("b11b", [ref("huerta_melones"), ref("roza"), ref("jaguey")], {
    comun: `Tarde. TERCER EFECTO: LAS PATILLAS SE DOBLAN CON EL JAGÜEY LLENO. Ahí está lo raro: hay agua de sobra y la mata se cae igual. Objeto ancla: la guía doblada junto al agua.`,
    camara: {
      a: "PLANO MACRO de una guía de patilla doblada sobre sí misma, con las hojas mustias y la tierra húmeda debajo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado de la huerta caída entera y, a pocos pasos, el jagüey lleno de agua hasta el borde.",
    },
    ini: "una guía de patilla doblada sobre sí misma, con las hojas mustias y la tierra húmeda debajo.",
    fin: "desde arriba, la huerta está caída entera y a pocos pasos el jagüey está lleno de agua hasta el borde.",
  }, "sequia, tierra agrietada, fuego, plaga de insectos, podredumbre, moscas"),

  // b12 — Guanurú daña personas, animales y plantas. Mandan buscar a la piache.
  esc("b12a", [ref("enfermo"), ref("chivos"), ref("huerta_melones")], {
    comun: `Luz plana. GUANURÚ DAÑA A LAS PERSONAS, A LOS ANIMALES Y A LAS PLANTAS, y ASÍ ES COMO SE LE DIBUJA: por los tres efectos juntos, nunca por un cuerpo. Objeto ancla: los tres daños en el mismo terreno.`,
    camara: {
      a: "PLANO MEDIO de la casa con el enfermo dentro, vista desde fuera por el vano.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado con la casa, la cabra tendida y la huerta caída visibles a la vez en el mismo terreno.",
    },
    ini: "desde fuera y por el vano se ve la casa con el enfermo dentro.",
    fin: "desde muy arriba se ven las tres cosas a la vez en el mismo terreno: la casa, la cabra tendida y la huerta caída.",
  }, "monstruo, sombra sobre el terreno, niebla siniestra, calavera, demonio"),
  escp("b12b", [ref("primeros_wayuu"), ref("caballo"), ref("llanura_cardonal")], {
    comun: `Tarde. LA FAMILIA MANDA BUSCAR A LA PIACHE: alguien sale a caballo a traerla. Es una gestión práctica. Objeto ancla: el jinete saliendo.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos personas hablando deprisa en el umbral y una señalando el camino.",
      b: "la cámara ha GIRADO al camino y se ha elevado: PLANO GENERAL con un jinete ya lanzado por la trocha y la ranchería quedando atrás.",
    },
    ini: "dos personas hablan deprisa en el umbral y una señala el camino.",
    fin: "desde arriba, un jinete ya va lanzado por la trocha y la ranchería queda atrás.",
  }, "panico, gritos, procesion, cruces, sacerdote, medico"),

  // b13 — Llega con su maraca, masca tabaco y canta jirairay.
  escp("b13a", [ref("outsu"), ref("oficio_de_curar"), ref("piichi")], {
    comun: `Tarde. LLEGA CON SU MARACA, MASCA TABACO Y SE SIENTA JUNTO AL ENFERMO. ${OU}. Es oficio, no espectáculo. Objeto ancla: la maraca en la mano.`,
    camara: {
      a: "PLANO MACRO de una maraca de calabazo con el mango labrado, sostenida quieta.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con ella ya sentada junto al chinchorro del enfermo y la familia apartada contra la pared.",
    },
    ini: "una maraca de calabazo con el mango labrado, sostenida quieta.",
    fin: "desde arriba, ella ya está sentada junto al chinchorro del enfermo y la familia se ha apartado contra la pared.",
  }, "bruja, caldero, humo de colores, pentagramas, velas negras, trance epileptico"),
  escp("b13b", [ref("outsu"), ref("enfermo"), ref("chinchorro")], {
    comun: `Anochecer. CANTA JIRAIRAY, QUE LLAMA A GUANURÚ: el canto es trabajo, con la boca y la mano. Objeto ancla: su boca cantando y la maraca en marcha.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de perfil cantando, con los ojos entrecerrados y la mandíbula moviéndose.",
      b: "la cámara ha RETROCEDIDO y ha girado alrededor: PLANO GENERAL del cuarto de noche con ella cantando a un lado del chinchorro y todas las caras de la familia vueltas hacia el enfermo.",
    },
    ini: "de perfil y cerca, canta con los ojos entrecerrados y la mandíbula moviéndose.",
    fin: "desde el otro lado del cuarto, ella canta junto al chinchorro y todas las caras de la familia están vueltas hacia el enfermo.",
  }, "trance, levitacion, resplandor, humo de colores, espiritus visibles, posesion"),

  // b14 — Lo llama porque tiene el alma apresada. El espíritu exige su regalo.
  escp("b14a", [ref("outsu"), ref("enfermo"), ref("piichi")], {
    comun: `Noche. LO LLAMA PORQUE TIENE APRESADA EL ALMA Y NO QUIERE SOLTARLA: la negociación es a oscuras, y de Guanurú no se ve nada. Objeto ancla: el cuarto a oscuras con la maraca sonando.`,
    camara: {
      a: "PLANO MACRO de la maraca sacudiéndose en la penumbra, con las semillas moviéndose dentro.",
      b: "la cámara ha RETROCEDIDO hasta la pared del fondo: PLANO GENERAL del cuarto casi a oscuras con las dos figuras pequeñas junto al chinchorro y todo lo demás en negro.",
    },
    ini: "la maraca se sacude en la penumbra y se oyen las semillas moviéndose dentro.",
    fin: "desde el fondo, el cuarto está casi a oscuras con las dos figuras pequeñas junto al chinchorro y todo lo demás en negro.",
  }, "alma visible, figura translucida, monstruo, humo, resplandor, ojos en la oscuridad"),
  escp("b14b", [ref("primeros_wayuu"), ref("adorno_y_valor"), ref("piichi")], {
    comun: `Noche. EL ESPÍRITU EXIGE SU REGALO, Y LO TRAEN: es un pago concreto, cosas de valor de la casa. Objeto ancla: el regalo puesto en el suelo.`,
    camara: {
      a: "PLANO MACRO de unas manos dejando collares de tumas y una tela doblada en el suelo de arena.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del cuarto con el regalo puesto en el centro y la familia retirándose hacia las paredes.",
    },
    ini: "unas manos dejan collares de tumas y una tela doblada en el suelo de arena.",
    fin: "desde arriba, el regalo está puesto en el centro y la familia se retira hacia las paredes.",
  }, "altar, velas, sacrificio, sangre, pentagramas, oro, tesoro"),

  // b15 — La maraca suena hasta el amanecer. Ponen una calavera en la entrada.
  escp("b15a", [ref("outsu"), ref("enfermo"), ref("chinchorro")], {
    comun: `Amanecer. LA MARACA SUENA HASTA EL AMANECER Y LA FIEBRE AFLOJA: la mejoría es discreta, un paño seco y una respiración larga. Objeto ancla: la frente ya seca.`,
    camara: {
      a: "PLANO MACRO de la frente del enfermo, ya seca, con el paño retirado a un lado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto con la primera luz entrando por el vano, la piache recogiendo su maraca y la familia dormida contra las paredes.",
    },
    ini: "la frente del enfermo ya está seca y el paño retirado a un lado.",
    fin: "desde arriba entra la primera luz por el vano, la piache recoge su maraca y la familia duerme contra las paredes.",
  }, "milagro, aureola, resplandor, curacion magica, angeles, aplausos"),
  esc("b15b", [ref("piedras_y_huesos"), ref("piichi")], {
    comun: `Mañana. PONEN UNA CALAVERA DE CABALLO EN LA ENTRADA: es UN REMEDIO CONCRETO, no un símbolo. Se muestra como se usa: atada al horcón, blanqueada por el sol. Objeto ancla: la calavera en el horcón.`,
    camara: {
      a: "PLANO MACRO del hueso blanqueado de una calavera de caballo, con la fibra que la ata al horcón.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la entrada de la casa con la calavera puesta a un lado del vano y la vida de la ranchería siguiendo detrás.",
    },
    ini: "el hueso blanqueado de la calavera de caballo, con la fibra que la ata al horcón.",
    fin: "desde arriba, la calavera está puesta a un lado del vano y detrás sigue la vida de la ranchería.",
  }, "calavera humana, craneo con ojos, altar, sangre, magia negra, pentagramas"),

  // b16 — Algodón y sal al fogón espantan la mantis. En la casa sigue el viento.
  escp("b16a", [ref("mantis"), ref("fuego_y_cocina"), ref("semillas_y_siembra")], {
    comun: `Mañana. LA MANTIS SOBRE LA PIEDRA DEL FOGÓN ES UN SEGUNDO AVISO, NO UN MONSTRUO, y tampoco se toca: ECHA AL FOGÓN ALGODÓN Y SAL, Y EL ESTALLIDO LA ESPANTA. Rito doméstico con sonido y chispa. Objeto ancla: las semillas cayendo en las brasas.`,
    camara: {
      a: "PLANO MACRO de una mantis quieta sobre la piedra caliente del fogón, con las patas delanteras plegadas.",
      b: "la cámara ha RETROCEDIDO y ha bajado a las brasas: PLANO DETALLE de un puñado de semillas de algodón y sal cayendo sobre el rescoldo y saltando en chispas, con la piedra ya vacía al fondo.",
    },
    ini: "una mantis quieta sobre la piedra caliente del fogón, con las patas delanteras plegadas.",
    fin: "un puñado de semillas de algodón y sal cae sobre el rescoldo y salta en chispas, y la piedra al fondo ya está vacía.",
  }, "insecto monstruoso, ojos gigantes, demonio, magia, humo de colores, explosion"),
  esc("b16b", [ref("piichi"), ref("enramada"), ref("rancheria")], {
    comun: `Luz gris de viento. EL CIERRE VUELVE AL PRINCIPIO: EL MISMO ENCUADRE DE b1a y b1b, la casa cerrada y el viento moviendo lo colgado. NO ES ADORNO: GUANURÚ SIGUE AHÍ. Sin figuras. Objeto ancla: lo colgado moviéndose, otra vez.`,
    camara: {
      a: "PLANO MACRO del mismo cabo de chinchorro colgando de la viga, moviéndose con el aire igual que al principio.",
      b: "la cámara ha RETROCEDIDO fuera y se ha elevado muchísimo: GRAN PLANO GENERAL final en picado de la ranchería entera viviendo su día, y esa casa cerrada y apartada en un borde, intacta.",
    },
    ini: "el mismo cabo de chinchorro cuelga de la viga y se mueve con el aire, igual que al principio.",
    fin: "desde muy arriba, la ranchería entera hace su día y esa casa sigue cerrada y apartada en un borde, intacta.",
  }, "monstruo, sombra, ojos, resplandor, ruinas, fuego, texto, moraleja dibujada"),
]);
