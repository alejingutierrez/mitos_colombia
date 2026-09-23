// Keyframes de La hermana que vengó a su hermano — 18 bloques × 2 escenas × 2
// cuadros = 72 imágenes ≈ 180 s.
// Guion: guion-los-dos-hermanos-v2.json (N=18) · Acta: acta-los-dos-hermanos.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · LA PROTAGONISTA ES ELLA, NO ÉL. El hermano es el que falla, el que cuenta
//   mal, el que llora y el que muere. EL RELATO MIDE A LOS DOS Y SE QUEDA CON
//   LA HERMANA. El inventario lo repite: «protagonista absoluta; tiene mejor
//   puntería, mejor pulso, mejor cuenta y gana la guerra; LA FICHA MANDA SOBRE
//   LA DEL HERMANO».
// · LOS CUATRO DUELOS —caricari, alcaraván, aguja, ave— NO SON ADORNO NI
//   CHISTE: SON EL PRONÓSTICO. Por eso ella le dice que va a perder antes de
//   que nadie lo mate.
// · EL CONTEO DISCORDANTE de ovejas y caballos es del mismo orden: él ve diez
//   donde faltan treinta. LA CÁMARA LO TRATA COMO PRESAGIO, no como aritmética.
// · LA CONTRA ES LO QUE LA HACE INVULNERABLE, y SE LA APLICA TRES VECES Y
//   TAMBIÉN A LA CRIADA. NO ES MAGIA DECORATIVA: ES PREPARACIÓN, y está
//   declarada antes de la pelea. Nada de auras ni destellos.
// · EL FINAL NO ES RECONCILIACIÓN NI JUSTICIA MEDIDA: arrasa con todas las
//   castas y QUEDA RICA CON LOS ANIMALES DE LOS MUERTOS. SE NARRA SIN SUAVIZAR
//   Y SIN CELEBRAR.
// · LA MATANZA NO SE REPRESENTA: SE NARRA. Ni el degüello ni los cadáveres
//   quemados se muestran en plano. El inventario marca `hombres_de_la_lena`
//   como sensible: «se representa EL ANTES —ella plantada frente a ellos— Y
//   NUNCA LOS CUERPOS».
// · EL CARICARI Y EL ALCARAVÁN son aves de agüero en varias fichas. AQUÍ VALEN
//   COMO PRESAGIO PROPIO y no se cruzan con «el-viaje-del-mas-alla», donde el
//   alcaraván es un anfitrión.
//
// EL ACTA DEJA SIN RESOLVER que el canon NO NOMBRA a ninguno de los dos
// hermanos ni a la casta enemiga, y aquí se respeta: nadie lleva nombre en
// cuadro y los enemigos no tienen distintivo de casta.
//
// GUION DE LUZ: mañana del paseo a caballo → llanto del caricari → mediodía de
// la puntería → pulso de la aguja → sombra del cayusí → tarde de la cuenta que
// no cuadra → noche inquieta → mañana del reparto → rastro de los caballos →
// pozo y disparo → mediodía de la emboscada → mula que vuelve al atardecer →
// noche del juramento → amanecer de la contra → sol alto del desafío → balas
// que no pegan → humo lejano de la quema → última luz sobre el ganado ajeno.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-dos-hermanos-escenas";
export const OUT_DIR = "wayuu/videos/los-dos-hermanos/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; degollamiento, cabezas cortadas, cuerpos, cadaveres, pilas de muertos, sangre, visceras, gore; cuerpos ardiendo, piras con cadaveres, huesos calcinados, humo con figuras; aura, escudo de energia, balas rebotando con destellos, camara lenta dibujada, resplandor; western, sombreros de vaquero, saloon, duelo al sol, revolveres de pelicula; heroina vengadora estilizada, pose de accion, musculatura exagerada, capa; celebracion de la matanza, triunfo, apoteosis, monumento; aves monstruosas, ojos brillantes, presagios dibujados con simbolos";
export const PALETTE =
  PALETTE_BASE + "; las cuatro aves del preludio traen los unicos acentos —el pardo del caricari, el crema del alcaravan— y despues el mito se cierra en ocres y polvo; el fuego final NO se ve, solo su humo a distancia";

const HM =
  "LA MISMA hermana de la referencia (mujer wayúu adulta, manta larga hasta el tobillo con cenefa tejida en el ruedo, pelo negro recogido, cara serena y firme, descalza), que en todos los planos de puntería y decisión ocupa el cuadro más que él";
const HR =
  "EL MISMO hermano de la referencia (hombre wayúu adulto, manta corta terciada, faja tejida, waireñas de suela plana), siempre un poco por detrás o más pequeño en el encuadre";

export const ITEMS = armar([
  // b1 — Salieron a pasear a caballo. Pasó llorando una guaiguaya.
  escp("b1a", [ref("la_hermana"), ref("el_hermano"), ref("caballo")], {
    comun: `Mañana. UNA HERMANA Y UN HERMANO SALIERON A PASEAR A CABALLO: van iguales y tranquilos, y el cuadro ya la pone a ella delante. ${HM} y ${HR}. Objeto ancla: los dos jinetes.`,
    camara: {
      a: "PLANO DETALLE de dos pares de cascos andando a la par sobre la arena.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la llanura con los dos a caballo, ella medio cuerpo por delante, sin prisa.",
    },
    ini: "dos pares de cascos andan a la par sobre la arena.",
    fin: "desde arriba, los dos van a caballo por la llanura, ella medio cuerpo por delante, sin prisa.",
  }, "western, sombreros de vaquero, pose heroica, presagios dibujados"),
  esc("b1b", [ref("guaiguaya"), ref("llanura_cardonal")], {
    comun: `Mañana. LEJOS DE CASA PASÓ LLORANDO UNA GUAIGUAYA, EL CARICARI: es UN AVE REAL, y el agüero está en que llora, no en su aspecto. PRIMERO DE LOS CUATRO DUELOS, que son EL PRONÓSTICO. Objeto ancla: el ave con el pico abierto.`,
    camara: {
      a: "PLANO MACRO de la cabeza de un caricari con el pico abierto, llamando, y el plumaje pardo revuelto.",
      b: "la cámara ha RETROCEDIDO siguiéndolo en vuelo: PLANO GENERAL del ave cruzando bajo sobre los cardones y los dos jinetes parados abajo, mirándola.",
    },
    ini: "la cabeza de un caricari con el pico abierto, llamando, y el plumaje pardo revuelto.",
    fin: "desde lejos, el ave cruza bajo sobre los cardones y los dos jinetes están parados abajo, mirándola.",
  }, "ave monstruosa, ojos brillantes, calavera, simbolos, resplandor, niebla"),

  // b2 — «Mátalo», dijo ella. Él disparó varias veces y falló.
  escp("b2a", [ref("la_hermana"), ref("el_hermano"), ref("armas")], {
    comun: `Mañana. MÁTALO, LE DIJO ELLA, QUE CUANDO ESE LLORA SE MUERE LA GENTE: ella sabe lo que significa y él obedece. Objeto ancla: el rifle que pasa de la orden al hombro.`,
    camara: {
      a: "PLANO MEDIO CORTO de ella de perfil, señalando el cielo con la barbilla mientras habla.",
      b: "la cámara ha GIRADO a él y ha retrocedido: PLANO MEDIO de él encarándose el rifle al hombro, apuntando hacia arriba.",
    },
    ini: "ella, de perfil, señala el cielo con la barbilla mientras habla.",
    fin: "él se encara el rifle al hombro y apunta hacia arriba.",
  }, "western, pose heroica, resplandor, simbolos, texto"),
  esc("b2b", [ref("guaiguaya"), ref("armas"), ref("llanura_cardonal")], {
    comun: `Mañana. ÉL DISPARÓ VARIAS VECES Y FALLÓ: PRIMER FALLO, y es el pronóstico. El ave sigue entera. Objeto ancla: el ave intacta y los casquillos en la arena.`,
    camara: {
      a: "PLANO MACRO del ave volando entera, sin una pluma fuera de sitio, con el humo de un disparo pasando por detrás.",
      b: "la cámara ha BAJADO al suelo y ha retrocedido: PLANO MEDIO de cuatro casquillos caídos en la arena junto a unos pies, y el ave ya lejos en el cielo.",
    },
    ini: "el ave vuela entera, sin una pluma fuera de sitio, con el humo de un disparo pasando por detrás.",
    fin: "en la arena hay cuatro casquillos caídos junto a unos pies, y el ave ya va lejos en el cielo.",
  }, "ave herida, sangre, plumas volando, explosion, western"),

  // b3 — Hallaron un alcaraván y midieron puntería. Él tiró tres veces.
  esc("b3a", [ref("alcaravan_diana"), ref("llanura_cardonal")], {
    comun: `Mediodía. HALLARON UN ALCARAVÁN Y ELLA PROPUSO MEDIR PUNTERÍA: SEGUNDO DUELO. El ave está posada, quieta, a media distancia. Objeto ancla: el alcaraván en el suelo.`,
    camara: {
      a: "PLANO MACRO del ojo grande y amarillo de un alcaraván posado, muy quieto.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la llanura con el ave pequeña en el suelo y los dos jinetes desmontando a cincuenta pasos.",
    },
    ini: "el ojo grande y amarillo de un alcaraván posado, muy quieto.",
    fin: "desde arriba, el ave es pequeña en el suelo y los dos jinetes desmontan a cincuenta pasos.",
  }, "ave monstruosa, ojos brillantes, presagio dibujado, simbolos"),
  escp("b3b", [ref("el_hermano"), ref("la_hermana"), ref("armas")], {
    comun: `Mediodía. ÉL TIRÓ TRES VECES, LA ÚLTIMA CON EL RIFLE DE ELLA: el detalle importa —ni con el arma de ella acierta—. Objeto ancla: el rifle de ella pasando a sus manos.`,
    camara: {
      a: "PLANO MACRO del rifle de ella pasando de una mano a otra, con la culata trabajada.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con él disparando por tercera vez y el ave todavía posada, sin moverse, al fondo.",
    },
    ini: "el rifle de ella pasa de una mano a otra, con la culata trabajada.",
    fin: "desde arriba dispara por tercera vez y el ave sigue posada al fondo, sin moverse.",
  }, "western, burla, caricatura, humillacion, resplandor"),

  // b4 — Ella le reventó la cabeza. Partió la aguja al primer tiro.
  esc("b4a", [ref("alcaravan_diana"), ref("llanura_cardonal")], {
    comun: `Mediodía. ELLA LE REVENTÓ LA CABEZA Y LOS SESOS CAYERON COMO AGUA: el acierto NO se muestra con el ave. Se cuenta con el humo de SU cañón y con el sitio vacío donde estaba posada. Objeto ancla: el sitio vacío.`,
    camara: {
      a: "PLANO MACRO del cañón de su rifle con el humo saliendo, bajando despacio.",
      b: "la cámara ha VOLADO hasta donde estaba el ave: PLANO MEDIO del suelo vacío con sólo dos plumas cayendo todavía, y nada más.",
    },
    ini: "el cañón de su rifle con el humo saliendo, bajando despacio.",
    fin: "donde estaba el ave sólo quedan dos plumas cayendo, y nada más.",
  }, "ave destrozada, sangre, sesos, visceras, gore, crueldad"),
  escp("b4b", [ref("la_hermana"), ref("armas"), ref("cordeleria")], {
    comun: `Mediodía. PARTIÓ LA AGUJA AL PRIMER TIRO: TERCER DUELO, y es de pulso. La aguja clavada en un palo, partida en dos por el disparo. Objeto ancla: la aguja partida.`,
    camara: {
      a: "PLANO MACRO de una aguja de hueso clavada de punta en un palo, entera, a contraluz.",
      b: "la cámara ha RETROCEDIDO un poco: PLANO DETALLE de la misma aguja partida limpiamente en dos mitades, con el palo intacto alrededor.",
    },
    ini: "una aguja de hueso clavada de punta en un palo, entera, a contraluz.",
    fin: "la misma aguja está partida limpiamente en dos mitades y el palo sigue intacto alrededor.",
  }, "explosion, destellos, camara lenta, magia, resplandor, western"),

  // b5 — Bajo el cayusí él apuntó y el ave quedó ilesa. «Vas a perder».
  escp("b5a", [ref("el_hermano"), ref("trupillo"), ref("armas")], {
    comun: `Sombra del mediodía. BAJO EL CAYUSÍ ÉL APUNTÓ Y EL AVE QUEDÓ ILESA: CUARTO Y ÚLTIMO DUELO, y vuelve a fallar. Objeto ancla: el ave que no se inmuta.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara apuntando bajo la sombra del árbol, con el ojo cerrado.",
      b: "la cámara ha GIRADO al ave y ha cerrado: PLANO MACRO del pájaro posado en la rama, entero y quieto, sin haberse movido siquiera.",
    },
    ini: "su cara apunta bajo la sombra del árbol, con el ojo cerrado.",
    fin: "el pájaro sigue posado en la rama, entero y quieto, sin haberse movido siquiera.",
  }, "burla, caricatura, humillacion, resplandor, aves monstruosas"),
  escp("b5b", [ref("la_hermana"), ref("el_hermano"), ref("trupillo")], {
    comun: `Sombra del mediodía. VAS A PERDER, LE DIJO LA HERMANA: ELLA LO SABE ANTES QUE NADIE, y eso es lo que los cuatro duelos venían anunciando. Objeto ancla: su cara diciéndolo sin dureza.`,
    camara: {
      a: "PLANO MEDIO de los dos bajo la sombra, ella de perfil y él bajando el arma.",
      b: "la cámara ha AVANZADO hasta ella: PLANO MEDIO CORTO de su cara terminando la frase, seria, sin burla ninguna.",
    },
    ini: "los dos bajo la sombra: ella de perfil y él bajando el arma.",
    fin: "de cerca termina la frase, seria y sin ninguna burla.",
  }, "burla, desprecio, profecia dibujada, resplandor, texto en pantalla"),

  // b6 — Al contar las ovejas él dijo diez y ella treinta. Igual con los caballos.
  esc("b6a", [ref("chivos"), ref("corral")], {
    comun: `Tarde. AL CONTAR LAS OVEJAS ÉL DIJO DIEZ Y ELLA TREINTA: LA CÁMARA LO TRATA COMO PRESAGIO, no como aritmética. Se cuenta con el hueco en el rebaño. Objeto ancla: el corral con más sitio del que debería.`,
    camara: {
      a: "PLANO MACRO de la cerca del corral por dentro, con la arena pisada donde antes se apretaban los animales.",
      b: "la cámara se ha ELEVADO en vertical: PLANO CENITAL del corral con el rebaño en un extremo y un trecho ancho de corral vacío.",
    },
    ini: "la cerca del corral por dentro, con la arena pisada donde antes se apretaban los animales.",
    fin: "desde arriba, el rebaño está en un extremo del corral y hay un trecho ancho vacío.",
  }, "numeros, cifras, texto, caricatura, contabilidad"),
  escp("b6b", [ref("la_hermana"), ref("el_hermano"), ref("caballo")], {
    comun: `Tarde. CON LOS CABALLOS PASÓ EXACTAMENTE LO MISMO: él ve lo que quiere ver. Objeto ancla: las dos caras contando distinto.`,
    camara: {
      a: "PLANO MEDIO CORTO de él señalando y contando con los dedos, seguro de sí.",
      b: "la cámara ha GIRADO a ella y ha retrocedido: PLANO GENERAL del corral con ella parada aparte, contando en silencio, y muchos menos animales de los que él dice.",
    },
    ini: "él señala y cuenta con los dedos, seguro de sí.",
    fin: "desde lejos, ella está parada aparte contando en silencio, y hay muchos menos animales de los que él dice.",
  }, "numeros, cifras, texto, discusion, pelea, caricatura"),

  // b7 — Los perros hallaron todo menos los caballos. Él lloró.
  escp("b7a", [ref("perros"), ref("llanura_cardonal"), ref("del_camino")], {
    comun: `Tarde. LOS PERROS HALLARON TODO, MENOS LOS CABALLOS: la búsqueda es de oficio y termina en nada. Objeto ancla: el hocico sobre el rastro que se corta.`,
    camara: {
      a: "PLANO MACRO del hocico de un perro pegado a la arena, siguiendo un rastro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con dos perros dando vueltas en un mismo punto, sin encontrar por dónde seguir.",
    },
    ini: "el hocico de un perro pegado a la arena, siguiendo un rastro.",
    fin: "desde arriba, dos perros dan vueltas en el mismo punto sin encontrar por dónde seguir.",
  }, "perros de presa, crueldad animal, sangre, jauria, violencia"),
  escp("b7b", [ref("el_hermano"), ref("la_hermana"), ref("corral")], {
    comun: `Última luz. EL HERMANO LLORÓ: SE LOS LLEVARON PARA MATARLO, Y ÉL QUERÍA VIVIR. El canon le da esa frase y no se suaviza. Objeto ancla: su cara llorando.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara con los ojos húmedos y la mandíbula temblando, hablando bajo.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL del corral al atardecer con él sentado en el suelo y ella de pie a su lado, sin consolarlo.",
    },
    ini: "su cara, con los ojos húmedos y la mandíbula temblando, habla bajo.",
    fin: "desde lejos, él está sentado en el suelo del corral y ella de pie a su lado, sin consolarlo.",
  }, "llanto teatral, caricatura, burla, desprecio, cobardia dibujada"),

  // b8 — La hermana lo hizo volver. Al otro día se repartieron los animales.
  escp("b8a", [ref("la_hermana"), ref("el_hermano"), ref("chinchorro")], {
    comun: `Noche. LA HERMANA LO HIZO VOLVER Y ÉL PASÓ LA NOCHE INQUIETO: ella decide, él obedece y no duerme. Objeto ancla: el chinchorro que no para de moverse.`,
    camara: {
      a: "PLANO MACRO del cabo de un chinchorro tensándose y aflojándose una y otra vez en la oscuridad.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada de noche con su chinchorro moviéndose y el de ella completamente quieto al lado.",
    },
    ini: "el cabo de un chinchorro se tensa y se afloja una y otra vez en la oscuridad.",
    fin: "desde arriba, su chinchorro se mueve y el de ella está completamente quieto al lado.",
  }, "pesadillas dibujadas, monstruos, fantasmas, resplandor, presagios"),
  esc("b8b", [ref("ganado_vacuno"), ref("caballo"), ref("corral")], {
    comun: `Mañana. AL OTRO DÍA SE REPARTIERON VACAS Y CABALLOS: el reparto es trabajo normal de familia. Sin figuras en plano cerrado. Objeto ancla: los animales separados en dos lotes.`,
    camara: {
      a: "PLANO MACRO de una marca en el anca de una res, con el pelo crecido alrededor.",
      b: "la cámara se ha ELEVADO muchísimo: PLANO CENITAL del corral con los animales ya separados en dos grupos por una cerca de varas.",
    },
    ini: "una marca en el anca de una res, con el pelo crecido alrededor.",
    fin: "desde arriba, los animales están ya separados en dos grupos por una cerca de varas.",
  }, "subasta, dinero, papeles, discusion, violencia"),

  // b9 — Salió con los perros y cogió caballos ajenos. Le dieron noticia.
  escp("b9a", [ref("el_hermano"), ref("perros"), ref("caballo")], {
    comun: `Mañana. SALIÓ CON LOS PERROS Y COGIÓ CABALLOS QUE NO ERAN SUYOS: el error es suyo y el canon no lo esconde. Objeto ancla: la marca ajena en el anca.`,
    camara: {
      a: "PLANO MACRO de una marca de anca distinta de la suya, en un caballo que lleva de la cuerda.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la llanura con él llevándose tres caballos y los perros delante, sin darse cuenta.",
    },
    ini: "una marca de anca distinta de la suya, en un caballo que lleva de la cuerda.",
    fin: "desde arriba se lleva tres caballos con los perros delante, sin darse cuenta.",
  }, "robo violento, armas, pelea, caricatura, western"),
  escp("b9b", [ref("el_hermano"), ref("dos_forasteros"), ref("del_camino")], {
    comun: `Mediodía. DOS HOMBRES LE DIJERON QUE PASARON TEMPRANO: le dan la pista que lo lleva a la emboscada. Objeto ancla: el brazo que señala el camino.`,
    camara: {
      a: "PLANO MEDIO CORTO de un hombre hablándole y señalando con la mano abierta hacia un lado.",
      b: "la cámara ha GIRADO siguiendo el brazo y se ha elevado: PLANO GENERAL de la trocha señalada abriéndose hacia un pozo al fondo.",
    },
    ini: "un hombre le habla y señala con la mano abierta hacia un lado.",
    fin: "en esa dirección, la trocha se abre hacia un pozo que se ve al fondo.",
  }, "traicion dibujada, sonrisa de villano, caricatura, armas escondidas"),

  // b10 — Les dio alcance en un pozo. Cargó, disparó y mató a uno.
  escp("b10a", [ref("el_hermano"), ref("jaguey"), ref("caballo")], {
    comun: `Mediodía. LES DIO ALCANCE EN UN POZO Y ERAN MUCHOS: la desproporción es el dato, y se cuenta con el picado. Objeto ancla: uno contra muchos alrededor del agua.`,
    camara: {
      a: "PLANO MEDIO de él parándose en seco a caballo, de perfil, al ver algo delante.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del pozo con una docena de hombres y caballos alrededor y él solo en un borde.",
    },
    ini: "se para en seco a caballo, de perfil, al ver algo delante.",
    fin: "desde muy arriba, hay una docena de hombres y caballos alrededor del pozo y él está solo en un borde.",
  }, "western, duelo al sol, pose heroica, banderas, uniformes"),
  esc("b10b", [ref("armas"), ref("jaguey")], {
    comun: `Mediodía. CARGÓ EL FUSIL, DISPARÓ Y MATÓ A UNO: el resultado NO se muestra. Se cuenta con el arma y con un caballo que se queda sin jinete. Objeto ancla: el caballo con la silla vacía.`,
    camara: {
      a: "PLANO MACRO de una bala entrando en la recámara y el cerrojo cerrándose.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del pozo con el humo de un disparo en el aire y un caballo alejándose solo, con la silla vacía.",
    },
    ini: "una bala entra en la recámara y el cerrojo se cierra.",
    fin: "desde arriba, el humo de un disparo queda en el aire y un caballo se aleja solo con la silla vacía.",
  }, "cuerpo, cadaver, sangre, agonia, gore, western"),

  // b11 — Le gritaron bravo sin avisar, corrieron y lo mataron.
  escp("b11a", [ref("el_hermano"), ref("jaguey"), ref("llanura_cardonal")], {
    comun: `Mediodía. LE GRITARON BRAVO SIN AVISAR, CORRIERON Y LO MATARON: LA MUERTE NO SE REPRESENTA. Se cuenta con la carga que se le viene encima y luego con el polvo asentándose. Objeto ancla: el polvo que se cierra.`,
    camara: {
      a: "PLANO MEDIO de él de espaldas, con una docena de figuras lanzándose hacia la cámara desde el fondo.",
      b: "la cámara se ha ELEVADO en vertical: PLANO CENITAL del pozo con una nube de polvo cerrándose sobre un punto y nada distinguible dentro.",
    },
    ini: "de espaldas, una docena de figuras se lanzan hacia la cámara desde el fondo.",
    fin: "desde arriba, una nube de polvo se cierra sobre un punto y no se distingue nada dentro.",
  }, "cuerpo, cadaver, sangre, golpes, degollamiento, gore, linchamiento"),
  escp("b11b", [ref("perros"), ref("burro_mula"), ref("llanura_cardonal")], {
    comun: `Tarde. EL PERRO ENVOLVIÓ EL CADÁVER Y TOMÓ EL CAMINO: el cuerpo va ENVUELTO EN LA COBIJA, atravesado en la mula, y NO SE VE. Objeto ancla: el bulto envuelto sobre la mula.`,
    camara: {
      a: "PLANO MACRO de una cobija de lana atada con cordel sobre el lomo de una mula, bien cerrada.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la llanura al atardecer con la mula andando sola por la trocha y un perro delante, marcando el camino.",
    },
    ini: "una cobija de lana atada con cordel sobre el lomo de una mula, bien cerrada.",
    fin: "desde arriba, la mula anda sola por la trocha al atardecer y un perro va delante marcando el camino.",
  }, "cuerpo visible, cara, mano colgando, sangre, gore, buitres"),

  // b12 — La hermana vio venir la mula, la oyó llorar dos veces y supo todo.
  escp("b12a", [ref("la_hermana"), ref("rancheria"), ref("enramada")], {
    comun: `Atardecer. LA HERMANA NO COMÍA, TEMIENDO POR ÉL: ya lo sabía antes de saberlo. Objeto ancla: la totuma llena sin tocar.`,
    camara: {
      a: "PLANO MACRO de una totuma llena y quieta en el suelo junto a ella, con la comida intacta.",
      b: "la cámara ha SUBIDO y ha retrocedido: PLANO MEDIO de ella sentada en el umbral, de perfil, mirando el camino.",
    },
    ini: "una totuma llena y quieta en el suelo junto a ella, con la comida intacta.",
    fin: "está sentada en el umbral, de perfil, mirando el camino.",
  }, "llanto teatral, desesperacion, presagios dibujados, fantasmas"),
  escp("b12b", [ref("burro_mula"), ref("la_hermana"), ref("rancheria")], {
    comun: `Atardecer. VIO VENIR LA MULA, LA OYÓ LLORAR DOS VECES Y SUPO TODO: el aviso es el rebuzno, dos veces, y con eso basta. Objeto ancla: la mula llegando sola.`,
    camara: {
      a: "PLANO GENERAL del camino al atardecer con la mula acercándose sola, pequeña, con el bulto encima.",
      b: "la cámara ha GIRADO a ella y ha cerrado: PRIMER PLANO de su cara al oír el segundo rebuzno, sin llorar, entendiéndolo todo.",
    },
    ini: "en el camino al atardecer, la mula se acerca sola, pequeña, con el bulto encima.",
    fin: "al girar, su cara oye el segundo rebuzno y lo entiende todo, sin llorar.",
  }, "llanto teatral, grito, desmayo, cuerpo visible, sangre"),

  // b13 — Juró vengarlo. Tomó una criada y los perros y siguió el camino.
  escp("b13a", [ref("la_hermana"), ref("armas"), ref("piichi")], {
    comun: `Noche. JURÓ DESCUBRIR AL MATADOR Y VENGARLO: el juramento es callado y se cuenta con la preparación, no con un discurso. Objeto ancla: el fusil que descuelga.`,
    camara: {
      a: "PLANO MACRO de sus manos descolgando un fusil del horcón y comprobando el cerrojo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto de noche con ella de pie, ya cargando dos fajones, y el bulto envuelto en el suelo al fondo.",
    },
    ini: "sus manos descuelgan un fusil del horcón y comprueban el cerrojo.",
    fin: "desde arriba está de pie cargando dos fajones, con el bulto envuelto en el suelo al fondo.",
  }, "pose heroica, capa, western, juramento dramatico, sangre, texto"),
  escp("b13b", [ref("la_hermana"), ref("criada"), ref("perros")], {
    comun: `Amanecer. TOMÓ UNA CRIADA Y LOS PERROS Y SIGUIÓ EL CAMINO DE LA MULA: van las dos, y las dos van armadas. Objeto ancla: las dos mujeres y los perros en la trocha.`,
    camara: {
      a: "PLANO DETALLE de dos pares de pies de mujer y cuatro patas de perro arrancando juntos por la arena.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del amanecer con las dos a caballo y los perros delante, siguiendo el rastro de la mula.",
    },
    ini: "dos pares de pies de mujer y cuatro patas de perro arrancan juntos por la arena.",
    fin: "desde arriba, las dos van a caballo con los perros delante, siguiendo el rastro de la mula.",
  }, "amazonas, uniformes, western, pose heroica, banderas"),

  // b14 — Halló hombres recogiendo leña. Se aplicó tres veces la contra.
  escp("b14a", [ref("hombre_de_parashi"), ref("maderas"), ref("llanura_cardonal")], {
    comun: `Mañana. HALLÓ HOMBRES RECOGIENDO LEÑA PARA QUEMAR EL CADÁVER: están en su faena y no la han visto. El inventario los marca sensible: SE REPRESENTA EL ANTES, NUNCA LOS CUERPOS. Objeto ancla: la leña apilada.`,
    camara: {
      a: "PLANO MACRO de unos brazos apilando ramas secas, una sobre otra, en un montón.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con ocho hombres recogiendo leña en distintos puntos y un montón grande ya hecho en el centro.",
    },
    ini: "unos brazos apilan ramas secas, una sobre otra, en un montón.",
    fin: "desde arriba, ocho hombres recogen leña en distintos puntos y hay un montón grande ya hecho en el centro.",
  }, "pira con cuerpo, cadaver, sangre, huesos, fuego encendido, gore"),
  escp("b14b", [ref("la_hermana"), ref("criada"), ref("piedras_y_huesos")], {
    comun: `Mañana. SE APLICÓ TRES VECES LA CONTRA Y TAMBIÉN A LA CRIADA: ES PREPARACIÓN, NO MAGIA DECORATIVA, y está declarada ANTES de la pelea. Sin aura ni destello. Objeto ancla: la contra atada al brazo, tres veces.`,
    camara: {
      a: "PLANO MACRO de una contra de fibra y semillas atándose alrededor de un antebrazo, apretada.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de las dos mujeres de pie, cada una con tres contras atadas en brazos y cuello, comprobándolas.",
    },
    ini: "una contra de fibra y semillas se ata alrededor de un antebrazo, apretada.",
    fin: "las dos están de pie, cada una con tres contras atadas en brazos y cuello, comprobándolas.",
  }, "aura, resplandor, particulas, runas, magia dibujada, escudo"),

  // b15 — «Aquí estoy yo, mátenme a mí». Dispararon y no le pegaban. (CITA)
  escp("b15a", [ref("la_hermana"), ref("hombre_de_parashi"), ref("llanura_cardonal")], {
    comun: `Sol alto. SE PLANTÓ ANTE ELLOS Y SE OFRECIÓ EN LUGAR DE SU HERMANO: se adelanta ella, habla de pie y sin miedo, y eso es lo que la pone en el centro del relato. ${HM}, de pie y sola delante de todos. Objeto ancla: ella plantada.`,
    camara: {
      a: "PLANO GENERAL de los hombres en el claro, parándose todos a la vez al ver algo fuera de cuadro.",
      b: "la cámara ha GIRADO 180 grados y ha avanzado: PLANO MEDIO de ella de pie, sola, con el fusil bajado y la cara tranquila, terminando la frase.",
    },
    ini: "en el claro, los hombres se paran todos a la vez al ver algo fuera de cuadro.",
    fin: "al girar aparece ella de pie, sola, con el fusil bajado y la cara tranquila, terminando la frase.",
  }, "pose heroica, capa, camara lenta, resplandor, western, musculatura, apuntar a la cara, ejecucion, ruego, suplica"),
  escp("b15b", [ref("la_hermana"), ref("armas"), ref("llanura_cardonal")], {
    comun: `Sol alto. SE BURLARON, DISPARARON Y LAS BALAS NO PEGABAN: se cuenta con EL POLVO QUE SALTA A SU ALREDEDOR, nunca con destellos ni escudos. Objeto ancla: los impactos en la arena.`,
    camara: {
      a: "PLANO MACRO de tres impactos levantando arena a un palmo de unos pies descalzos de mujer.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL con ella de pie y entera en mitad del claro, sin agacharse, y una docena de cráteres pequeños repartidos alrededor.",
    },
    ini: "tres impactos levantan arena a un palmo de unos pies descalzos de mujer.",
    fin: "desde arriba está de pie y entera en mitad del claro, sin agacharse, con una docena de cráteres pequeños alrededor.",
  }, "aura, escudo de energia, balas rebotando con destellos, camara lenta, resplandor"),

  // b16 — «Aunque seas piedra te mataremos». Al acabárseles las balas, ella.
  escp("b16a", [ref("hombre_de_parashi"), ref("armas"), ref("llanura_cardonal")], {
    comun: `Sol alto. AUNQUE SEAS PIEDRA TE MATAREMOS, DECÍAN: siguen disparando hasta quedarse sin balas. Objeto ancla: los fajones vacíos.`,
    camara: {
      a: "PLANO MACRO de una mano buscando en un fajón y sacando los dedos vacíos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con casquillos por todo el suelo y los hombres bajando las armas, quietos.",
    },
    ini: "una mano busca en un fajón y saca los dedos vacíos.",
    fin: "desde arriba, hay casquillos por todo el suelo y los hombres bajan las armas, quietos.",
  }, "panico, gritos, caricatura, cobardia, sangre, western"),
  esc("b16b", [ref("armas"), ref("llanura_cardonal"), ref("maderas")], {
    comun: `Sol alto. LES CORTÓ LA CABEZA COMO QUIEN CORTA VARAS: LA MATANZA NO SE REPRESENTA. El plano corta a una vara partida en el suelo y después al claro visto de muy lejos. Objeto ancla: la vara cortada.`,
    camara: {
      a: "PLANO MACRO de una vara verde partida limpiamente de un tajo, con el corte fresco a la vista.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del claro desde muy alto, con el suelo revuelto, las armas repartidas y ninguna figura de pie salvo dos.",
    },
    ini: "una vara verde partida limpiamente de un tajo, con el corte fresco a la vista.",
    fin: "desde muy arriba, el claro tiene el suelo revuelto, las armas repartidas y ninguna figura de pie salvo dos.",
  }, "degollamiento, cabezas, cuerpos, sangre, visceras, gore, pilas de muertos"),

  // b17 — Los últimos le rogaron. Los puso a traer leña y quemó los cadáveres.
  escp("b17a", [ref("la_hermana"), ref("hombre_de_parashi"), ref("llanura_cardonal")], {
    comun: `Tarde. LOS ÚLTIMOS LE ROGARON POR SU VIDA: de rodillas, y ella decide qué hacer con ellos. Objeto ancla: las manos levantadas pidiendo.`,
    camara: {
      a: "PLANO MACRO de dos manos de hombre levantadas y abiertas, temblando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con tres hombres de rodillas en la arena y ella de pie delante, con el fusil colgando de una mano.",
    },
    ini: "dos manos de hombre levantadas y abiertas, temblando.",
    fin: "desde arriba, tres hombres están de rodillas en la arena y ella de pie delante, con el fusil colgando de una mano.",
  }, "ejecucion, sangre, cuerpos, tortura, gore, pose heroica"),
  esc("b17b", [ref("maderas"), ref("llanura_cardonal"), ref("recipientes")], {
    comun: `Última luz. LOS PUSO A TRAER LEÑA Y QUEROSÍN, Y QUEMÓ TODOS LOS CADÁVERES: EL FUEGO NO SE VE, SÓLO SU HUMO A DISTANCIA. Sin cuerpos en ningún plano. Objeto ancla: la columna de humo vista de lejos.`,
    camara: {
      a: "PLANO MACRO de una lata de querosín volcándose sobre un montón de leña seca.",
      b: "la cámara ha RETROCEDIDO muchísimo hacia atrás y se ha elevado: GRAN PLANO GENERAL de la llanura al atardecer con una columna de humo negro subiendo lejos, pequeña, y nada más en cuadro.",
    },
    ini: "una lata de querosín se vuelca sobre un montón de leña seca.",
    fin: "desde muy lejos, una columna de humo negro sube pequeña sobre la llanura al atardecer y no hay nada más en cuadro.",
  }, "cuerpos ardiendo, pira con cadaveres, huesos, caras en el humo, gore"),

  // b18 — Arrasó con todas sus castas. Quedó sola, reinando con la suya.
  escp("b18a", [ref("la_hermana"), ref("criada"), ref("llanura_cardonal")], {
    comun: `Días. SIGUIÓ Y ARRASÓ CON TODAS SUS CASTAS: SE NARRA SIN SUAVIZAR Y SIN CELEBRAR. Se cuenta con el camino que sigue haciendo, no con lo que deja. Objeto ancla: las dos avanzando otra vez.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de perfil a caballo, sin rabia y sin satisfacción, mirando al frente.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la llanura con las dos mujeres cruzándola, pequeñas, y tres columnas de humo lejanas en tres puntos distintos.",
    },
    ini: "su cara de perfil a caballo, sin rabia y sin satisfacción, mirando al frente.",
    fin: "desde muy arriba, las dos cruzan la llanura, pequeñas, y hay tres columnas de humo lejanas en tres puntos distintos.",
  }, "triunfo, apoteosis, pose heroica, banderas, celebracion, cuerpos"),
  escp("b18b", [ref("la_hermana"), ref("ganado_vacuno"), ref("corral")], {
    comun: `Última luz. QUEDÓ SOLA, REINANDO CON LA SUYA, RICA CON LOS ANIMALES AJENOS: el cierre no es justicia medida ni reconciliación, y NO SE CELEBRA. Objeto ancla: las marcas ajenas en el ganado propio.`,
    camara: {
      a: "PLANO MACRO de dos marcas de anca distintas en dos reses que están en el mismo corral.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final en picado de la ranchería al atardecer con los corrales llenos, el ganado dentro y ella sola de pie en el patio.",
    },
    ini: "dos marcas de anca distintas en dos reses que están en el mismo corral.",
    fin: "desde muy arriba, los corrales están llenos, el ganado dentro y ella sola de pie en el patio al atardecer.",
  }, "trono, corona, apoteosis, monumento, celebracion, texto, moraleja dibujada"),
]);
