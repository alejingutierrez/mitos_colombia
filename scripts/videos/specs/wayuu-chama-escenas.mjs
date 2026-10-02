// Keyframes de La Chama de los peñascos — 10 bloques × 2 escenas × 2 cuadros
// = 40 imágenes ≈ 100 s.
// Guion: guion-la-chama-v2.json (N=10) · Acta: acta-la-chama.json (20 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · LA CHAMA NO TIENE UNA FORMA FIJA, Y ÉSE ES EL NUDO: anciana, majayura,
//   tigre, flor, o un objeto tirado en el camino. LA DIRECCIÓN DE ARTE NO PUEDE
//   FIJARLE UN ROSTRO. El inventario lo dice: «el único personaje del corpus
//   cuyo contrato es no repetirse; LA CONTINUIDAD SE JUEGA EN LA MANO, NO EN LA
//   CARA». Por eso el hilo del spec es SU MANO —larga, de dedos finos, con el
//   mismo brazalete tejido— y cada bloque la muestra en otro cuerpo.
// · ELLA NO ES LA ANTAGONISTA. Protege al hombre de su propia familia, escapa
//   con él, lo cura cuando vuelve herido y lo esconde. LOS QUE MATAN SON SUS
//   HERMANOS.
// · LA PARTIDA ES DIGNA, NO DESPECHADA: se lleva LO MÁS FEO —el burro, las
//   ollas ennegrecidas, las telas gastadas— y en el camino todo se vuelve
//   magnífico. El inventario llama a ese par «el mejor del corpus» y aquí es
//   b5b→b6a: MISMO CAMINO, MISMO ENCUADRE, todo cambiado.
// · EL CANIBALISMO DE LA FAMILIA DE LA CUEVA SE NARRA Y NO SE ILUSTRA. NI LA
//   MUERTE DEL HOMBRE NI LA PREPARACIÓN DE SU CARNE SE MUESTRAN EN PLANO. El
//   inventario los marca `restringida`: «se representan como presencia y como
//   amenaza; NUNCA EL ACTO NI UN RESTO».
// · LA VENGANZA NO ES FESTIVA: la familia queda dispersa, no triunfante ella.
//   El relato CIERRA EN EL PEÑASCO, no en el ajuste de cuentas.
// · EL CABELLO COMO REMEDIO ES USO VIVO, NO CIERRE MÍTICO. Quien sube lo hace
//   sabiendo en qué dominio entra.
// · NO SE CRUZA con «las-wanulus-y-el-valle-de-la-muerte»: los wanülüü son otra
//   clase de ser y la Chama no es uno de ellos.
//
// EL ACTA DEJA UNA COSA SIN RESOLVER y aquí se respeta: el canon no dice dónde
// queda la serranía de la Chama. No se le pone topónimo ni se la sitúa en un
// lugar reconocible.
//
// GUION DE LUZ: peñascos a contraluz → mediodía del burro perdido → boca de
// cueva y su interior imposible → penumbra de la familia que come gente →
// mañana de la partida con lo feo → mediodía del camino transformado → tarde de
// los pies heridos → noche del sueño vencido → amanecer del destrozo → última
// luz sobre el peñasco.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-chama-escenas";
export const OUT_DIR = "wayuu/videos/la-chama/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; canibalismo a la vista, carne humana, huesos humanos, restos, despiece, sangre, visceras, ollas con miembros; muerte en plano, cuerpo, cadaver, agonia, gore; hibrido mujer-tigre, transformacion a medias, licantropo, garras en las manos, colmillos; resplandor, humo, particulas, estela de transformacion, magia dibujada; bruja de cuento, caldero, sombrero puntiagudo, verrugas; monstruo, demonio, ojos brillantes, sonrisa de villano; venganza festiva, pose heroica, apoteosis";
export const PALETTE =
  PALETTE_BASE + "; los peñascos traen un gris azulado de piedra que no aparece en ningun otro mito wayuu del corpus; el rojo del tigre y el de la flor son el mismo rojo, y ese eco es deliberado";

const MANO =
  "SU MANO, que es lo único que se repite de un cuerpo a otro: larga, de dedos finos y uñas cortas, con un brazalete tejido de kanas en rojo tierra y negro en la muñeca izquierda";
const CC =
  "EL MISMO cuidador de caballos de la referencia (hombre wayúu adulto, pelo negro, manta corta terciada, faja tejida, waireñas de suela plana)";

export const ITEMS = armar([
  // b1 — Vivía en los peñascos y nadie la vio dos veces igual.
  esc("b1a", [ref("serrania_baja"), ref("costa_penascos")], {
    comun: `Contraluz de la mañana. LA CHAMA VIVÍA EN LOS PEÑASCOS: una serranía sin nombre, porque el canon no dice dónde queda. Sin figuras. Objeto ancla: la pared de piedra.`,
    camara: {
      a: "PLANO MACRO de la roca gris azulada de un peñasco, con las vetas y el liquen a contraluz.",
      b: "la cámara ha RETROCEDIDO muchísimo y ha bajado: GRAN PLANO GENERAL de la serranía entera de peñascos contra el cielo, sin un camino ni una casa.",
    },
    ini: "la roca gris azulada del peñasco muestra sus vetas y el liquen a contraluz.",
    fin: "desde lejos se ve la serranía entera de peñascos contra el cielo, sin un camino ni una casa.",
  }, "castillo, ruinas, templo, rostro tallado en la roca, monstruo, nombre escrito"),
  escp("b1b", [ref("la_chama"), ref("majayulu"), ref("serrania_baja")], {
    comun: `Contraluz. NADIE LA VIO DOS VECES IGUAL: ANCIANA, MAJAYURA, TIGRE, FLOR. Las cuatro en el mismo cuadro y en sitios distintos del peñasco, SIN transición ni efecto: son cuatro presencias, no una que se transforma. ${MANO} está en todas. Objeto ancla: el brazalete tejido.`,
    camara: {
      a: "PLANO MACRO del brazalete tejido de kanas en una muñeca, con los dedos finos abiertos contra la piedra.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del peñasco con una anciana sentada en un canto, una joven de pie más arriba, un tigre echado en una repisa y una flor roja abierta en una grieta, los cuatro a la vez.",
    },
    ini: "el brazalete tejido de kanas en la muñeca, con los dedos finos abiertos contra la piedra.",
    fin: "desde arriba, en el peñasco hay a la vez una anciana sentada, una joven de pie, un tigre echado y una flor roja abierta en una grieta.",
  }, "hibrido, transformacion a medias, resplandor, humo, estela, monstruo, garras"),

  // b2 — Su forma no se quedaba quieta. Un hombre siguió a una joven.
  esc("b2a", [ref("la_chama"), ref("serrania_baja"), ref("del_camino")], {
    comun: `Mañana. SU FORMA NO SE QUEDABA QUIETA: lo que hay en el camino es un objeto tirado, que también es ella. El inventario le da ese estado. Objeto ancla: el objeto abandonado en la trocha.`,
    camara: {
      a: "PLANO CENITAL MACRO de una mochila tejida caída en mitad de la trocha, con el asa extendida en la arena.",
      b: "la cámara se ha ELEVADO y ha retrocedido: PLANO GENERAL de la trocha vacía con el objeto pequeño en el centro y nadie en todo el trayecto.",
    },
    ini: "una mochila tejida caída en mitad de la trocha, con el asa extendida en la arena.",
    fin: "desde arriba, la trocha está vacía con ese objeto pequeño en el centro y nadie en todo el trayecto.",
  }, "trampa dibujada, resplandor, ojos en el objeto, monstruo, humo"),
  escp("b2b", [ref("cuidador_de_caballos"), ref("majayulu"), ref("burro_mula")], {
    comun: `Mediodía. UN HOMBRE QUE CUIDABA CABALLOS SIGUIÓ A UNA JOVEN QUE BUSCABA UN BURRO. ${CC}. Es un encuentro corriente: ella busca, él ayuda. Objeto ancla: las dos figuras a distancia en el camino.`,
    camara: {
      a: "PLANO MEDIO CORTO de él de perfil, parándose al ver a alguien fuera de cuadro.",
      b: "la cámara ha GIRADO siguiendo su mirada y ha retrocedido: PLANO GENERAL del camino con una joven de espaldas más adelante y él empezando a seguirla, separados por veinte pasos.",
    },
    ini: "de perfil, se para al ver a alguien que está fuera de cuadro.",
    fin: "en la dirección que mira hay una joven de espaldas más adelante y él empieza a seguirla, a veinte pasos.",
  }, "seduccion, insinuacion, romance, acoso, resplandor, ojos brillantes"),

  // b3 — Entró en una cueva que por dentro parecía una casa.
  esc("b3a", [ref("cueva"), ref("serrania_baja")], {
    comun: `Mediodía fuera, sombra dentro. ELLA ENTRÓ EN UNA CUEVA: por fuera es un hueco cualquiera en la piedra. Objeto ancla: la boca de la cueva.`,
    camara: {
      a: "PLANO MEDIO de la boca de la cueva desde fuera, estrecha y baja, con matorral alrededor.",
      b: "la cámara ha ATRAVESADO la boca y ha girado hacia el interior: PLANO GENERAL del adentro, mucho más ancho y alto de lo que la entrada dejaba suponer.",
    },
    ini: "desde fuera, la boca de la cueva es estrecha y baja, con matorral alrededor.",
    fin: "al pasar adentro, el espacio es mucho más ancho y alto de lo que la entrada dejaba suponer.",
  }, "portal, resplandor, luz magica, simbolos, runas, escaleras talladas"),
  esc("b3b", [ref("cueva"), ref("piichi"), ref("chinchorro")], {
    comun: `Sombra. QUE POR DENTRO PARECÍA UNA CASA: chinchorros colgados de la roca, fogón, ollas, esteras. Doméstico dentro de la piedra, y por eso inquieta. Sin figuras. Objeto ancla: el chinchorro colgado de la roca.`,
    camara: {
      a: "PLANO MACRO del cabo de un chinchorro amarrado directamente a un saliente de piedra.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la sala con cuatro chinchorros colgados de la roca, un fogón encendido en el suelo y ollas alineadas contra la pared.",
    },
    ini: "el cabo de un chinchorro amarrado directamente a un saliente de piedra.",
    fin: "desde arriba, la sala tiene cuatro chinchorros colgados de la roca, un fogón encendido y ollas alineadas contra la pared.",
  }, "huesos, restos, carne colgada, sangre, calaveras, jaulas, gore"),

  // b4 — Adentro comían gente. Ella lo protegió. Tuvieron un hijo lejos.
  escp("b4a", [ref("familia_de_la_cueva"), ref("cuidador_de_caballos"), ref("cueva")], {
    comun: `Sombra. ADENTRO ESTABA UNA FAMILIA QUE COMÍA GENTE: SE NARRA Y NO SE ILUSTRA. Son PRESENCIA Y AMENAZA —caras vueltas, cuerpos que se levantan—, nunca el acto ni un resto. Objeto ancla: las caras que se giran a la vez.`,
    camara: {
      a: "PLANO MEDIO CORTO de él de espaldas en el umbral de la sala, parado en seco.",
      b: "la cámara ha GIRADO por encima de su hombro hacia el fondo: PLANO GENERAL de la sala con seis personas alrededor del fogón, todas con la cara vuelta hacia él y levantándose despacio.",
    },
    ini: "de espaldas en el umbral de la sala, se para en seco.",
    fin: "por encima de su hombro, seis personas alrededor del fogón tienen la cara vuelta hacia él y se van levantando despacio.",
  }, "canibalismo, carne humana, huesos, restos, sangre, colmillos, monstruos"),
  escp("b4b", [ref("la_chama"), ref("cuidador_de_caballos"), ref("cueva")], {
    comun: `Sombra. PIDIÓ QUE NO LO MATARAN Y LA CHAMA LO PROTEGIÓ DE LOS SUYOS: ELLA NO ES LA ANTAGONISTA, y éste es el plano que lo fija. ${MANO} extendida delante de él. Objeto ancla: el brazo que se interpone.`,
    camara: {
      a: "PLANO MACRO del brazo con el brazalete tejido extendido en horizontal, cortando el cuadro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la sala con ella de pie entre él y su familia, la familia parada donde estaba.",
    },
    ini: "el brazo con el brazalete tejido, extendido en horizontal, corta el cuadro.",
    fin: "desde arriba, ella está de pie entre él y su familia, y la familia se ha quedado parada donde estaba.",
  }, "pelea, armas, sangre, forcejeo, monstruo, garras, colmillos"),

  // b5 — Él empezó otra relación. Tomó al niño, el burro más feo y las ollas.
  escp("b5a", [ref("cuidador_de_caballos"), ref("hijo_de_la_chama"), ref("rancheria")], {
    comun: `Mañana. TUVIERON UN HIJO LEJOS DE ALLÍ, y DESPUÉS ÉL EMPEZÓ OTRA RELACIÓN Y ELLA NO DISCUTIÓ. La dignidad de ella empieza aquí: no hay escena, hay una decisión. Objeto ancla: las dos casas del mismo patio.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara de ella de perfil, quieta, mirando hacia un lado sin decir nada.",
      b: "la cámara ha GIRADO siguiendo esa mirada y ha retrocedido: PLANO GENERAL del patio con él entrando en otra enramada y una segunda mujer dentro.",
    },
    ini: "la cara de ella, de perfil y quieta, mira hacia un lado sin decir nada.",
    fin: "en la dirección que miraba, él entra en otra enramada donde hay una segunda mujer.",
  }, "pelea, gritos, llanto teatral, celos, violencia, despecho"),
  esc("b5b", [ref("burro_mula"), ref("recipientes"), ref("manta_wayuu")], {
    comun: `Mañana. TOMÓ AL NIÑO, EL BURRO MÁS FEO Y LAS OLLAS: SE LLEVA LO PEOR. Burro flaco y pelón, ollas ennegrecidas, telas gastadas. ESTE ENCUADRE SE REPITE EXACTO EN b6a. Objeto ancla: la carga miserable en el camino.`,
    camara: {
      a: "PLANO MACRO del costado pelado de un burro flaco, con una olla ennegrecida atada con cordel deshilachado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado en diagonal: PLANO GENERAL del principio del camino con el burro flaco cargado de ollas negras y telas gastadas, y dos figuras pequeñas al lado.",
    },
    ini: "el costado pelado de un burro flaco, con una olla ennegrecida atada con cordel deshilachado.",
    fin: "desde arriba, en el principio del camino va el burro flaco cargado de ollas negras y telas gastadas, con dos figuras pequeñas al lado.",
  }, "miseria explotada, mendicidad, animal agonizando, llanto, caricatura"),

  // b6 — El burro se volvió magnífico y las telas se hicieron otras.
  esc("b6a", [ref("burro_mula"), ref("aperos"), ref("manta_wayuu")], {
    comun: `Mediodía. ANDANDO, EL BURRO SE VOLVIÓ MAGNÍFICO Y LAS TELAS GASTADAS SE HICIERON OTRAS. ES EL MISMO ENCUADRE QUE b5b, EL MISMO CAMINO, Y TODO HA CAMBIADO. El inventario llama a este par «el mejor del corpus». Sin efecto de transformación: sólo el antes y el después. Objeto ancla: la misma carga, ahora nueva.`,
    camara: {
      a: "PLANO MACRO del costado de un burro lustroso y bien criado, con un apero labrado y una mochila nueva de kanas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado en diagonal, EXACTAMENTE COMO EN b5b: PLANO GENERAL del mismo camino con el burro magnífico cargado de mochilas nuevas y mantas de colores, y las dos figuras al lado.",
    },
    ini: "el costado de un burro lustroso y bien criado, con un apero labrado y una mochila nueva de kanas.",
    fin: "desde el mismo sitio de antes se ve el mismo camino, y ahora el burro es magnífico y va cargado de mochilas nuevas y mantas de colores.",
  }, "resplandor, particulas, transformacion dibujada, humo, magia, destellos"),
  escp("b6b", [ref("cuidador_de_caballos"), ref("del_camino"), ref("serrania_baja")], {
    comun: `Tarde. EL HOMBRE LA SIGUIÓ HASTA HERIRSE: camina detrás por terreno malo hasta que los pies no dan más. Objeto ancla: los pies en la piedra suelta.`,
    camara: {
      a: "PLANO MACRO de unos pies avanzando sobre piedra suelta y filosa, con las waireñas ya deshechas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado de la subida a los peñascos con él diminuto y atrasado, y la comitiva de ella muy por delante.",
    },
    ini: "unos pies avanzan sobre piedra suelta y filosa, con las waireñas ya deshechas.",
    fin: "desde muy arriba se le ve diminuto y atrasado en la subida, con la comitiva de ella muy por delante.",
  }, "sangre, heridas abiertas, carne, gore, agonia, llanto teatral"),

  // b7 — Ella le lavó las heridas y lo escondió. La fatiga la venció.
  escp("b7a", [ref("la_chama"), ref("cuidador_de_caballos"), ref("cueva")], {
    comun: `Tarde. ELLA LE LAVÓ LAS HERIDAS Y LO ESCONDIÓ DE SUS PARIENTES: lo cuida, que es lo contrario de lo que hará su familia. ${MANO} trabajando. La cura se cuenta con el agua y el paño, sin herida a la vista. Objeto ancla: la mano con el paño.`,
    camara: {
      a: "PLANO MACRO de la mano del brazalete escurriendo un paño de algodón sobre una totuma.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de un rincón apartado de la cueva con él sentado contra la pared y ella tapando la entrada del hueco con una manta.",
    },
    ini: "la mano del brazalete escurre un paño de algodón sobre una totuma.",
    fin: "desde arriba, en un rincón apartado de la cueva, él está sentado contra la pared y ella tapa el hueco con una manta.",
  }, "sangre, heridas abiertas, carne, vendas ensangrentadas, gore, romance"),
  escp("b7b", [ref("la_chama"), ref("chinchorro"), ref("cueva")], {
    comun: `Noche. LA FATIGA LA VENCIÓ Y SE DURMIÓ: ese sueño es lo que permite todo lo que viene, y es un fallo humano, no una traición. ${MANO} colgando fuera del chinchorro. Objeto ancla: la mano dormida.`,
    camara: {
      a: "PLANO MACRO de la mano del brazalete colgando floja fuera del borde del chinchorro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la sala de la cueva a oscuras con su chinchorro quieto y los otros ya vacíos.",
    },
    ini: "la mano del brazalete cuelga floja fuera del borde del chinchorro.",
    fin: "desde arriba, la sala está a oscuras: su chinchorro quieto y los otros ya vacíos.",
  }, "pesadilla dibujada, monstruos, sombras acechando, resplandor, ojos"),

  // b8 — Sus hermanos lo hallaron y lo mataron. Atacaron al niño.
  escp("b8a", [ref("familia_de_la_cueva"), ref("cueva")], {
    comun: `Noche. SUS HERMANOS LO HALLARON: LO QUE SE MUESTRA ES LA BÚSQUEDA, NO LO QUE VIENE DESPUÉS. La manta del escondite apartada y el hueco vacío. Objeto ancla: la manta corrida.`,
    camara: {
      a: "PLANO MACRO de una mano apartando el borde de la manta que tapaba el hueco.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL del pasillo de la cueva con tres figuras alejándose hacia el fondo y el hueco ya vacío detrás de ellas.",
    },
    ini: "una mano aparta el borde de la manta que tapaba el hueco.",
    fin: "desde el pasillo, tres figuras se alejan hacia el fondo y el hueco queda vacío detrás.",
  }, "muerte en plano, cuerpo, cadaver, sangre, arrastre, gore, canibalismo"),
  esc("b8b", [ref("cueva"), ref("fuego_y_cocina")], {
    comun: `Noche. NI LA MUERTE NI LA PREPARACIÓN DE SU CARNE SE MUESTRAN. El cuadro es el fogón encendido al fondo de la cueva, visto de lejos, y nada identificable en él. Sin figuras. Objeto ancla: el resplandor del fogón al fondo.`,
    camara: {
      a: "PLANO GENERAL del pasillo de la cueva desde este lado, oscuro, con un resplandor naranja al fondo.",
      b: "la cámara ha RETROCEDIDO hacia el rincón donde dormía ella y ha girado: PLANO MEDIO del chinchorro quieto en primer término y el resplandor lejano reducido a un punto detrás.",
    },
    ini: "el pasillo de la cueva está oscuro y al fondo hay un resplandor naranja.",
    fin: "en el rincón donde ella duerme, el chinchorro está quieto en primer término y aquel resplandor queda reducido a un punto al fondo.",
  }, "carne, huesos, ollas con restos, sangre, canibalismo, cuerpos, gore"),

  // b9 — Al despertar entendió. Salió tras ellos cambiando de cuerpo.
  escp("b9a", [ref("la_chama"), ref("hijo_de_la_chama"), ref("cueva")], {
    comun: `Amanecer. AL DESPERTAR ENTENDIÓ QUE SU FAMILIA HABÍA DESTRUIDO LO QUE ELLA GUARDABA: también atacaron al niño mientras dormía. El daño se cuenta con el sitio vacío, nunca con el cuerpo. Objeto ancla: la mano que despierta y encuentra el hueco vacío.`,
    camara: {
      a: "PLANO MACRO de la mano del brazalete abriéndose de golpe y palpando el chinchorro de al lado, vacío.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la sala al amanecer con ella de pie en el centro, sola, y los dos sitios vacíos a cada lado.",
    },
    ini: "la mano del brazalete se abre de golpe y palpa el chinchorro de al lado, vacío.",
    fin: "desde arriba, ella está de pie en el centro de la sala, sola, con los dos sitios vacíos a cada lado.",
  }, "cuerpo, cadaver, sangre, niño herido, gore, llanto teatral, grito"),
  esc("b9b", [ref("la_chama"), ref("tigre_devorador"), ref("serrania_baja")], {
    comun: `Amanecer. SALIÓ TRAS ELLOS CAMBIANDO DE CUERPO: el cambio se cuenta POR CORTE entre cuerpos enteros, con ${MANO} o su equivalente animal como único hilo. Sin transición dibujada. Objeto ancla: la huella que cambia de forma.`,
    camara: {
      a: "PLANO CENITAL MACRO de una huella de pie humano en la arena del peñasco, con el brazalete rozándola al pasar.",
      b: "la cámara ha AVANZADO siguiendo el rastro y ha subido: PLANO GENERAL de la ladera con una huella de zarpa grande en el mismo trazo, más adelante, y un tigre alejándose entre las rocas.",
    },
    ini: "una huella de pie humano en la arena del peñasco, con el brazalete rozándola al pasar.",
    fin: "más adelante en el mismo trazo hay una huella de zarpa grande, y un tigre se aleja entre las rocas.",
  }, "hibrido, transformacion a medias, licantropo, resplandor, humo, garras humanas"),

  // b10 — La familia quedó dispersa. Todavía suben por un cabello.
  esc("b10a", [ref("cueva"), ref("serrania_baja")], {
    comun: `Tarde. LA FAMILIA DE LA CUEVA QUEDÓ DISPERSA: LA VENGANZA NO ES FESTIVA y ella no aparece triunfante. Se cuenta con la cueva abandonada, el fogón apagado y los chinchorros descolgados. Sin figuras. Objeto ancla: el fogón frío.`,
    camara: {
      a: "PLANO MACRO de la ceniza fría del fogón de la cueva, con las piedras desplazadas.",
      b: "la cámara ha RETROCEDIDO hasta la boca: PLANO GENERAL de la sala vacía con los cabos de los chinchorros colgando sueltos y las ollas volcadas, y nadie dentro.",
    },
    ini: "la ceniza fría del fogón de la cueva, con las piedras desplazadas.",
    fin: "desde la boca, la sala está vacía, con los cabos de los chinchorros colgando sueltos y las ollas volcadas.",
  }, "cuerpos, cadaveres, sangre, destruccion epica, fuego, pose heroica, apoteosis"),
  escp("b10b", [ref("la_chama"), ref("primeros_wayuu"), ref("serrania_baja")], {
    comun: `Última luz. TODAVÍA SUBEN POR UN CABELLO: ES USO VIVO, y quien sube lo hace sabiendo en qué dominio entra. EL RELATO CIERRA EN EL PEÑASCO. Objeto ancla: el cabello largo enredado en la roca.`,
    camara: {
      a: "PLANO MACRO de un cabello negro larguísimo enredado en una arista de piedra, moviéndose con el aire.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final de la serranía al atardecer con dos personas subiendo por la ladera, diminutas, y los peñascos enteros encima de ellas.",
    },
    ini: "un cabello negro larguísimo enredado en una arista de piedra, moviéndose con el aire.",
    fin: "desde muy arriba, dos personas suben por la ladera, diminutas, y los peñascos enteros quedan encima de ellas.",
  }, "aparicion, fantasma, monstruo, resplandor, altar, ofrendas, texto, moraleja"),
]);
