// Keyframes de Kosina y el caballo que se encogía — 18 bloques × 2 escenas × 2
// cuadros = 72 imágenes ≈ 180 s.
// Guion: guion-el-pequeno-indio-kosina-v2.json (N=18) · Acta: acta-el-pequeno-indio-kosina.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · EL NUDO SOCIAL ESTÁ DESDE EL PRIMER MINUTO: a Kosina le dan carne y panela
//   y LE ECHAN SU TRUPILLO A LOS BURROS. La riqueza final responde a esa
//   humillación, así que ese plano no se puede abreviar.
// · EL CABALLO ES EL QUE SABE: habla, instruye, prohíbe, propone y decide irse.
//   KOSINA OBEDECE. La dirección de arte NO PUEDE CONVERTIRLO EN MONTURA: en
//   los planos de decisión el animal ocupa el cuadro y el jinete no.
// · EL CABALLITO FEO —corvijunto, un tropezón cada diez pasos— Y EL CABALLO
//   BONITO SON EL MISMO ANIMAL. Ese cambio a la vista de todos es EL EFECTO
//   CENTRAL DEL VIDEO y se sostiene con el mismo pelaje y la misma marca.
// · EL AMIGO QUE LO RECONOCE COMO FAMILIA no es un premio narrativo: le cuesta
//   defenderlo dos veces, y por eso recibe el hermano menor y cuatro bestias.
// · EL RELATO NO TERMINA EN LA VICTORIA DE LA CARRERA sino EN LA ENTREGA:
//   madre, hermanos, corral, de día adentro y de noche en la sabana. Ésa es la
//   riqueza.
// · EL CABALLO SE VA POR UNA CUEVA DEBAJO DE LA TIERRA Y NO VUELVE. El final es
//   DE DESPEDIDA, no de triunfo, y así se narra.
// · LA CUEVA DE AQUÍ NO ES el subterráneo de Jujía de «el-hijo-del-condor» ni
//   Jepira. Es sólo por donde se va el caballo.
// · EL REGISTRO ES DE CUENTO DE FIESTA —tambor, caja, carreras, apuestas, ron—,
//   NO cosmogónico. No se solemniza en ningún plano.
//
// El inventario marca a `kosina_nino` como `sensible` y dice cómo se resuelve:
// «figura infantil; SE RESUELVE PEQUEÑA EN EL ENCUADRE Y EN ACCIÓN, NUNCA COMO
// RETRATO DE NIÑO SOLO». Aquí es un muchacho pequeño que siempre está haciendo
// algo —cazando, tocando, montando— y nunca posando para la cámara.
//
// GUION DE LUZ: atardecer de la caza → mediodía de la humillación → noches
// perdidas de la emboscada → día entero del rastro → tarde del lazo → tambor
// de la primera fiesta → luz de la caja → carne repartida → camino del caballo
// que habla → enseñanza al trote → desprecio en la pista → polvo de la carrera
// → rabia después del triunfo → tarde de la prohibición → segunda carrera en
// pelo → queja de los dueños → entrega del hermano → última luz de la cueva.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-kosina-escenas";
export const OUT_DIR = "wayuu/videos/el-pequeno-indio-kosina/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; retrato de menor solo posando, primer plano de la cara del niño, niño llorando, niño maltratado; caballo con boca humana, caballo hablando con los labios, hibrido, unicornio, pegaso, alas; transformacion dibujada, resplandor, humo, particulas, estela magica; hipodromo, gradas, banderines, uniformes de jockey, sillas de montar inglesas; ultratumba, almas, esqueletos, portal magico, luz al fondo de la cueva; crueldad animal, latigos con pua, sangre, animal agonizando; aureola, apoteosis, monumento, pose heroica";
export const PALETTE =
  PALETTE_BASE + "; la fiesta de carreras trae el unico golpe de color de grupo del mito —mantas rojas, aperos labrados, polvo dorado—, y la pobreza de Kosina se cuenta en pardos y crudos sin un solo acento";

const KO =
  "EL MISMO Kosina de la referencia (muchacho wayúu pequeño y delgado, pelo negro, wayuco y manta corta de algodón crudo sin cenefa, descalzo), SIEMPRE a media distancia y haciendo algo, nunca posando ni en primer plano de la cara";
const CB =
  "EL MISMO caballito de la referencia (caballo de pelaje pardo con una mancha clara en la frente, crin oscura y revuelta), enteramente animal, sin un solo rasgo humano";

export const ITEMS = armar([
  // b1 — Salió de caza y volvió con lagartijas. Guardó el trupillo sancochado.
  escp("b1a", [ref("kosina_nino"), ref("lagartijas"), ref("llanura_cardonal")], {
    comun: `Atardecer. ${KO} vuelve de cazar con unas lagartijas colgando de un cordel. Es la caza que le toca, y el cuadro no la compadece. Objeto ancla: las lagartijas en el cordel.`,
    camara: {
      a: "PLANO MACRO de tres lagartijas atadas por la cola a un cordel, colgando y balanceándose.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del atardecer con él pequeño, de espaldas, cruzando la llanura con el cordel al hombro.",
    },
    ini: "tres lagartijas atadas por la cola a un cordel, colgando y balanceándose.",
    fin: "desde arriba se le ve pequeño y de espaldas, cruzando la llanura con el cordel al hombro.",
  }, "primer plano del niño, niño llorando, miseria explotada, crueldad animal, sangre"),
  escp("b1b", [ref("madre_de_kosina"), ref("trupillo"), ref("fuego_y_cocina")], {
    comun: `Noche de fogón. GUARDÓ EL TRUPILLO SANCOCHADO PARA EL OTRO DÍA: las vainas de trupillo cocidas son la comida de la casa, y se guardan. Objeto ancla: las vainas en la olla.`,
    camara: {
      a: "PLANO MACRO de vainas de trupillo cocidas dentro de una olla de barro, brillantes de caldo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de la madre tapando la olla y dejándola a un lado del fogón, con el muchacho de espaldas al fondo.",
    },
    ini: "las vainas de trupillo cocidas brillan de caldo dentro de la olla de barro.",
    fin: "la madre tapa la olla y la deja a un lado del fogón, con el muchacho de espaldas al fondo.",
  }, "hambre explotada, cuerpos demacrados, llanto, primer plano del niño"),

  // b2 — Unos ricos le dieron carne y panela. Su trupillo se lo echaron a los burros.
  escp("b2a", [ref("indio_rico"), ref("kosina_nino"), ref("enramada")], {
    comun: `Mediodía. UNOS RICOS LE DIERON CARNE Y PANELA: el regalo parece generoso y el cuadro lo deja parecerlo. Objeto ancla: la carne y la panela cambiando de manos.`,
    camara: {
      a: "PLANO MACRO de un trozo de carne y una panela oscura puestos en unas manos pequeñas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con gente de rango en sus mantas de cenefas y él pequeño en un borde, recibiendo.",
    },
    ini: "un trozo de carne y una panela oscura puestos en unas manos pequeñas.",
    fin: "desde arriba, la enramada está llena de gente de rango con mantas de cenefas y él, pequeño, recibe en un borde.",
  }, "burla exagerada, caricatura, humillacion fisica, primer plano del niño, llanto"),
  esc("b2b", [ref("burro_mula"), ref("trupillo"), ref("corral")], {
    comun: `Mediodía. Y SU TRUPILLO SE LO ECHARON A LOS BURROS: lo que a él le alimenta, a ellos les sirve de forraje. EL EJE SOCIAL DEL MITO ESTÁ EN ESTE PLANO. Objeto ancla: las vainas en el suelo del corral.`,
    camara: {
      a: "PLANO MACRO de las mismas vainas de trupillo cayendo en la tierra del corral, delante de un hocico.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del corral con dos burros comiendo del suelo y, más allá, la enramada de la gente de rango.",
    },
    ini: "las mismas vainas de trupillo caen en la tierra del corral, delante de un hocico.",
    fin: "desde arriba, dos burros comen del suelo y más allá está la enramada de la gente de rango.",
  }, "crueldad, burla dibujada, texto, moraleja, caricatura"),

  // b3 — Un caballo se comía la siembra. Se durmió dos noches y perdió la roza.
  esc("b3a", [ref("roza"), ref("caballo")], {
    comun: `Noche. KOSINA TENÍA ROZA y UN CABALLO ENTRABA A COMERSE LA SIEMBRA: se cuenta con el destrozo, no con el animal. Objeto ancla: las matas arrancadas.`,
    camara: {
      a: "PLANO MACRO de tallos tiernos arrancados de raíz, con la tierra removida alrededor.",
      b: "la cámara se ha ELEVADO muchísimo: PLANO CENITAL de la roza entera con una franja ancha pisoteada de un extremo al otro y huellas de casco por todo el trazo.",
    },
    ini: "tallos tiernos arrancados de raíz, con la tierra removida alrededor.",
    fin: "desde arriba, una franja ancha de la roza está pisoteada de extremo a extremo y hay huellas de casco por todo el trazo.",
  }, "caballo monstruoso, ojos brillantes, sangre, destruccion epica"),
  escp("b3b", [ref("kosina_nino"), ref("roza"), ref("trupillo")], {
    comun: `Dos noches seguidas. LE PUSO EMBOSCADA Y SE DURMIÓ LAS DOS VECES, y por eso perdió la sementera. Es un fracaso de niño cansado, y no se dramatiza. Objeto ancla: el muchacho dormido en el puesto.`,
    camara: {
      a: "PLANO MEDIO de él a media distancia, sentado contra un tronco con la cabeza caída sobre el pecho, de perfil.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado de la roza al amanecer con él todavía dormido en un borde y el destrozo entero delante.",
    },
    ini: "a media distancia, está sentado contra un tronco con la cabeza caída sobre el pecho.",
    fin: "desde arriba, sigue dormido en un borde de la roza y delante se ve el destrozo entero.",
  }, "primer plano del niño, llanto, castigo, regañina, miseria"),

  // b4 — Siguió el rastro y las huellas se hacían más pequeñas.
  escp("b4a", [ref("kosina_nino"), ref("del_camino"), ref("llanura_cardonal")], {
    comun: `Día entero, de la mañana a la tarde. SIGUIÓ EL RASTRO Y LAS HUELLAS SE HACÍAN MÁS PEQUEÑAS: ése es el prodigio, y está en el suelo. Objeto ancla: las huellas menguando.`,
    camara: {
      a: "PLANO CENITAL MACRO de una huella de casco grande en la arena, con el borde nítido.",
      b: "la cámara se ha ELEVADO y ha AVANZADO a lo largo del rastro: PLANO GENERAL en picado de la línea de huellas cruzando la llanura y haciéndose visiblemente más pequeñas hacia el fondo.",
    },
    ini: "una huella de casco grande y nítida en la arena, vista desde arriba.",
    fin: "desde arriba y siguiendo el rastro, la línea de huellas cruza la llanura y se va haciendo más pequeña hacia el fondo.",
  }, "magia, resplandor, particulas, simbolos, rastro brillante"),
  esc("b4b", [ref("caballito"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Tarde. EL CABALLO GRANDE SE ENCOGIÓ MIRÁNDOLO: ${CB}, ya pequeño. El cambio NO se dibuja con efectos: el par lo cuenta con la escala del animal contra el mismo cardón. Objeto ancla: el caballo junto al cardón.`,
    camara: {
      a: "PLANO GENERAL de un caballo grande parado junto a un cardón, llegándole casi a la copa.",
      b: "la cámara ha AVANZADO y ha bajado a ras de suelo: PLANO MEDIO del mismo caballo, ahora pequeño, junto al mismo cardón, que ahora lo dobla en altura.",
    },
    ini: "un caballo grande está parado junto al cardón y le llega casi a la copa.",
    fin: "a ras de suelo, el mismo caballo es ahora pequeño y el cardón lo dobla en altura.",
  }, "transformacion dibujada, resplandor, humo, particulas, hibrido, caballo con cara humana"),

  // b5 — Lo cogió con su faja y se lo llevó. Oyó un tambor y fue.
  escp("b5a", [ref("kosina_nino"), ref("caballito"), ref("cordeleria")], {
    comun: `Tarde. LO COGIÓ POR EL PESCUEZO CON SU FAJA Y SE LO LLEVÓ A CASA: con la faja tejida, que es lo que tenía. Objeto ancla: la faja alrededor del pescuezo.`,
    camara: {
      a: "PLANO MACRO de la faja tejida de kanas dando vuelta al pescuezo del animal y anudándose.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la llanura al atardecer con el muchacho pequeño llevando de la faja a un caballito de su tamaño.",
    },
    ini: "la faja tejida de kanas da vuelta al pescuezo del animal y se anuda.",
    fin: "desde arriba, el muchacho pequeño lleva de la faja a un caballito de su mismo tamaño.",
  }, "cuerda al cuello, ahogamiento, crueldad animal, sangre, forcejeo"),
  esc("b5b", [ref("kasha"), ref("pago_y_fiesta"), ref("llanura_cardonal")], {
    comun: `Noche. OYÓ UN TAMBOR Y FUE: el sonido llega de lejos y lo saca de casa. Sin figuras en plano cerrado. Objeto ancla: la caja sonando.`,
    camara: {
      a: "PLANO MACRO del parche tensado de una caja wayúu vibrando bajo una mano.",
      b: "la cámara ha RETROCEDIDO muchísimo hacia atrás: GRAN PLANO GENERAL nocturno con la fiesta iluminada al fondo, pequeña, y la llanura oscura en todo el primer término.",
    },
    ini: "el parche tensado de la caja vibra bajo una mano, muy de cerca.",
    fin: "desde muy lejos, la fiesta se ve pequeña e iluminada al fondo y todo el primer término es llanura oscura.",
  }, "orquesta, instrumentos modernos, escenario, luces de colores"),

  // b6 — Un joven elegante lo montó al anca y lo presentó como familia.
  escp("b6a", [ref("amigo_rico"), ref("kosina_nino"), ref("caballo")], {
    comun: `Noche de fiesta. UN JOVEN ELEGANTE LO MONTÓ EN EL ANCA Y LO PRESENTÓ COMO FAMILIA: el gesto es de reconocimiento y le va a costar caro. Objeto ancla: el muchacho en el anca.`,
    camara: {
      a: "PLANO MACRO de una mano de adulto sujetando un brazo pequeño para izarlo.",
      b: "la cámara ha RETROCEDIDO y ha girado al costado: PLANO GENERAL lateral del caballo entrando a la fiesta con el joven delante y el muchacho pequeño detrás, en el anca.",
    },
    ini: "una mano de adulto sujeta un brazo pequeño para izarlo.",
    fin: "de costado, el caballo entra en la fiesta con el joven delante y el muchacho pequeño detrás, en el anca.",
  }, "primer plano del niño, niño asustado, llanto, violencia"),
  escp("b6b", [ref("indio_rico"), ref("kosina_nino"), ref("pago_y_fiesta")], {
    comun: `Noche. LOS DEMÁS SE BURLARON DEL CHIQUITO: el desprecio es de grupo y se lee en las caras, no en gestos exagerados. Objeto ancla: las caras que se ríen de lado.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos hombres de rango mirando de lado y torciendo la boca.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la fiesta con el muchacho pequeño en un borde del corro y todos los demás vueltos hacia él.",
    },
    ini: "dos hombres de rango miran de lado y tuercen la boca.",
    fin: "desde arriba, el muchacho pequeño está en un borde del corro y todos los demás se han vuelto hacia él.",
  }, "empujones, golpes, escupir, caricatura, llanto, primer plano del niño"),

  // b7 — El joven insistió y pidió la caja. Kosina tocó todos los toques.
  escp("b7a", [ref("amigo_rico"), ref("indio_rico"), ref("kasha")], {
    comun: `Noche. EL JOVEN INSISTIÓ Y PIDIÓ QUE LE DIERAN LA CAJA PARA TOCAR: defenderlo le cuesta, y ésta es la primera vez. Objeto ancla: la caja pasando de mano en mano.`,
    camara: {
      a: "PLANO MEDIO CORTO del joven hablando firme, de perfil, con la mandíbula tensa.",
      b: "la cámara ha RETROCEDIDO y ha bajado: PLANO MEDIO de la caja pasando de unas manos a otras por encima del corro, a regañadientes.",
    },
    ini: "el joven habla firme, de perfil, con la mandíbula tensa.",
    fin: "la caja pasa de unas manos a otras por encima del corro, a regañadientes.",
  }, "pelea, armas, gritos, violencia, caricatura"),
  escp("b7b", [ref("kosina_nino"), ref("kasha"), ref("pago_y_fiesta")], {
    comun: `Noche. KOSINA TOCÓ TODOS LOS TOQUES QUE SABÍA: el muchacho está haciendo algo y lo hace bien. Va a media distancia, con la caja ocupando el cuadro más que él. Objeto ancla: las manos sobre el parche.`,
    camara: {
      a: "PLANO MACRO de dos manos pequeñas golpeando el parche, con el polvo saltando de la piel.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la fiesta con él a media distancia tocando y el corro entero ya vuelto hacia el sonido, callado.",
    },
    ini: "dos manos pequeñas golpean el parche y el polvo salta de la piel.",
    fin: "desde arriba, él toca a media distancia y el corro entero se ha vuelto hacia el sonido, callado.",
  }, "primer plano del niño, niño prodigio idealizado, aureola, resplandor, aplausos"),

  // b8 — El jefe mandó sancochar la lengua. En casa avisó que correría su caballo.
  esc("b8a", [ref("ganado_vacuno"), ref("fuego_y_cocina"), ref("recipientes")], {
    comun: `Noche. EL JEFE MANDÓ SANCOCHAR PARA ÉL LA LENGUA DE UNA RES: es el reconocimiento en forma de comida, y en el canon es un honor concreto. Objeto ancla: la lengua en la olla.`,
    camara: {
      a: "PLANO MACRO de una pieza de carne dentro de una olla grande al fuego, cubierta de caldo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del fogón con la olla grande sobre las piedras y la fiesta alrededor, ya de madrugada.",
    },
    ini: "una pieza de carne dentro de la olla grande al fuego, cubierta de caldo.",
    fin: "desde arriba, la olla grande está sobre las piedras del fogón y la fiesta sigue alrededor, ya de madrugada.",
  }, "sacrificio ritual, sangre, matanza, visceras, altar"),
  escp("b8b", [ref("kosina_nino"), ref("madre_de_kosina"), ref("piichi")], {
    comun: `Mañana. EN CASA AVISÓ QUE CORRERÍA SU CABALLO: lo anuncia y en casa lo miran con duda. Objeto ancla: la cara de la madre dudando.`,
    camara: {
      a: "PLANO MEDIO de él a media distancia hablando, de perfil, con el caballito detrás.",
      b: "la cámara ha GIRADO a la madre y ha avanzado: PLANO MEDIO CORTO de su cara escuchándolo, entre la duda y las ganas de creerle.",
    },
    ini: "a media distancia y de perfil, lo anuncia, con el caballito detrás.",
    fin: "la cara de la madre lo escucha, entre la duda y las ganas de creerle.",
  }, "burla, regañina, llanto, primer plano del niño, castigo"),

  // b9 — El caballito tropezaba. En el camino habló: que no lo castigaran.
  esc("b9a", [ref("caballito"), ref("del_camino"), ref("llanura_cardonal")], {
    comun: `Mañana. EL CABALLITO ERA CORVIJUNTO Y TROPEZABA CADA DIEZ PASOS: es feo y torpe, y hay que verlo. Objeto ancla: las patas torcidas.`,
    camara: {
      a: "PLANO MACRO de dos patas delanteras juntándose por las rodillas al andar, torcidas.",
      b: "la cámara ha RETROCEDIDO en travelling y ha subido: PLANO GENERAL lateral del animal andando por la trocha y dando un tropezón, con el muchacho pequeño encima.",
    },
    ini: "dos patas delanteras se juntan por las rodillas al andar, torcidas.",
    fin: "de costado y a distancia, el animal anda por la trocha y da un tropezón, con el muchacho pequeño encima.",
  }, "caballo monstruoso, animal enfermo, sangre, crueldad, caricatura"),
  escp("b9b", [ref("caballito"), ref("kosina_nino"), ref("llanura_cardonal")], {
    comun: `Mañana. EN EL CAMINO HABLÓ: QUE NO LO CASTIGARAN CON BEJUCOS. EL CABALLO ES EL QUE SABE, así que en este plano el animal ocupa el cuadro y el jinete no. La boca del caballo es de caballo: no se le dibuja gesto humano. Objeto ancla: la cabeza del animal vuelta hacia atrás.`,
    camara: {
      a: "PLANO MEDIO del muchacho pequeño sobre el lomo, de perfil, con un bejuco en la mano.",
      b: "la cámara ha AVANZADO hasta la cabeza del caballo y ha cerrado: PRIMER PLANO del ojo y la oreja del animal vueltos hacia atrás, hacia el jinete, que queda fuera de cuadro.",
    },
    ini: "el muchacho va sobre el lomo, de perfil, con un bejuco en la mano.",
    fin: "de muy cerca, el ojo y la oreja del caballo están vueltos hacia atrás, hacia el jinete, que ya no se ve.",
  }, "boca humana en el caballo, labios, dientes humanos, bocadillo de dialogo, texto, hibrido"),

  // b10 — Que se agarrara de la crin. Le enseñó a saltar diez metros.
  escp("b10a", [ref("caballito"), ref("kosina_nino")], {
    comun: `Mañana. QUE SE AGARRARA DE LA CRIN SIN SOLTARSE: la instrucción es concreta y el muchacho obedece. Objeto ancla: los dedos cerrados en la crin.`,
    camara: {
      a: "PLANO MACRO de unos dedos pequeños cerrándose en un puñado de crin oscura.",
      b: "la cámara ha RETROCEDIDO y ha girado al costado: PLANO MEDIO del muchacho tumbado sobre el cuello, pegado al animal, sin silla ni estribos.",
    },
    ini: "unos dedos pequeños se cierran en un puñado de crin oscura.",
    fin: "de costado, el muchacho va tumbado sobre el cuello, pegado al animal, sin silla ni estribos.",
  }, "silla de montar inglesa, estribos, casco, uniforme de jockey, latigo"),
  esc("b10b", [ref("caballito"), ref("arroyo_seco"), ref("llanura_cardonal")], {
    comun: `Mañana. LE ENSEÑÓ A SALTAR DIEZ METROS Y LO LLEVÓ SUAVE: la enseñanza es del caballo al jinete. El salto se cuenta con el cauce cruzado. Objeto ancla: el cauce por debajo.`,
    camara: {
      a: "PLANO MEDIO del borde de un arroyo seco, ancho, visto desde el lado de acá.",
      b: "la cámara ha VOLADO por encima del cauce y se ha vuelto: PLANO GENERAL desde el otro lado con el animal ya en el aire por encima del cauce entero, las patas recogidas.",
    },
    ini: "el borde del arroyo seco, ancho, visto desde el lado de acá.",
    fin: "desde el otro lado, el animal ya va por el aire sobre el cauce entero, con las patas recogidas.",
  }, "alas, pegaso, resplandor, estela, magia, camara lenta dibujada"),

  // b11 — Miraban con desprecio al caballito. Cuando su amo tocó, cobró brío.
  escp("b11a", [ref("indio_rico"), ref("caballito"), ref("pago_y_fiesta")], {
    comun: `Mediodía en la pista. EN LA FIESTA MIRABAN CON DESPRECIO AL CABALLITO DE OJOS CERRADOS: el animal parece dormido y los otros caballos son estampas. Objeto ancla: el caballito con los ojos cerrados.`,
    camara: {
      a: "PLANO MACRO de la cabeza del caballito con los ojos cerrados y el belfo caído, quieto.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la pista con cuatro caballos grandes y lustrosos a un lado y el caballito pequeño y cabizbajo al otro, con gente riéndose en medio.",
    },
    ini: "la cabeza del caballito, con los ojos cerrados y el belfo caído, quieto.",
    fin: "desde arriba, cuatro caballos grandes y lustrosos a un lado y el caballito pequeño y cabizbajo al otro, con gente riéndose en medio.",
  }, "hipodromo, gradas, banderines, uniformes, caricatura, animal moribundo"),
  escp("b11b", [ref("kosina_nino"), ref("kasha"), ref("caballito")], {
    comun: `Mediodía. CUANDO SU AMO TOCÓ LA CAJA, COBRÓ BRÍO: es el tambor lo que lo enciende, y ése es el vínculo entre los dos. Objeto ancla: el ojo que se abre.`,
    camara: {
      a: "PLANO MACRO de la mano pequeña dando el primer golpe en el parche.",
      b: "la cámara ha GIRADO al animal y ha cerrado: PRIMER PLANO del ojo del caballito abriéndose de golpe y la oreja poniéndose tiesa.",
    },
    ini: "la mano pequeña da el primer golpe en el parche.",
    fin: "de muy cerca, el ojo del caballito se abre de golpe y la oreja se le pone tiesa.",
  }, "resplandor, fuego en los ojos, magia, transformacion dibujada, humo"),

  // b12 — Apostó a mitad de una carrera. El caballo se volvió bonito y ganó.
  escp("b12a", [ref("kosina_nino"), ref("indio_rico"), ref("pago_y_fiesta")], {
    comun: `Mediodía. KOSINA APOSTÓ A MITAD DE UNA CARRERA YA EMPEZADA: se mete cuando la carrera va corriendo, que es lo descarado del gesto. Objeto ancla: la mano que apuesta.`,
    camara: {
      a: "PLANO MACRO de una mano pequeña poniendo algo sobre una manta extendida, entre manos de adultos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la pista con la carrera ya lanzada al fondo y el corro de la apuesta en primer término.",
    },
    ini: "una mano pequeña pone algo sobre la manta extendida, entre manos de adultos.",
    fin: "desde arriba, la carrera ya va lanzada al fondo y el corro de la apuesta queda en primer término.",
  }, "dinero moderno, billetes, fichas, casino, caricatura"),
  esc("b12b", [ref("caballito"), ref("caballo"), ref("llanura_cardonal")], {
    comun: `Mediodía. EL CABALLO SE VOLVIÓ BONITO Y GANÓ POR VEINTE VARAS. ES EL MISMO ANIMAL: misma mancha clara en la frente, mismo pelaje pardo. Lo que cambia es el porte. Objeto ancla: la mancha de la frente.`,
    camara: {
      a: "PLANO MACRO de la mancha clara de la frente con el pelo ya liso y brillante, y el ojo encendido.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado de la pista con él cruzando delante, muy destacado, y los otros cuatro muy atrás.",
    },
    ini: "la mancha clara de la frente, con el pelo ya liso y brillante y el ojo encendido.",
    fin: "desde muy arriba cruza delante, muy destacado, y los otros cuatro van muy atrás.",
  }, "transformacion dibujada, resplandor, alas, fuego, estela, camara lenta"),

  // b13 — El asombro se volvió rabia. Le ofrecieron cuatro bestias.
  escp("b13a", [ref("indio_rico"), ref("amigo_rico"), ref("kosina_nino")], {
    comun: `Tarde. EL ASOMBRO SE VOLVIÓ RABIA Y EL AMIGO TUVO QUE DEFENDERLO: es la SEGUNDA vez que le cuesta, y por eso el caballo se lo pagará. Objeto ancla: el brazo que se interpone.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos caras de rango pasando del asombro a la rabia, muy cerca.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL con el joven de pie con el brazo extendido delante del muchacho, y cinco hombres parados enfrente.",
    },
    ini: "dos caras de rango pasan del asombro a la rabia, muy cerca de la cámara.",
    fin: "desde lejos, el joven está de pie con el brazo extendido delante del muchacho y cinco hombres parados enfrente.",
  }, "pelea, golpes, armas, sangre, linchamiento, caricatura"),
  esc("b13b", [ref("caballo"), ref("corral"), ref("pago_y_fiesta")], {
    comun: `Tarde. LE OFRECIERON CUATRO DE LAS MEJORES BESTIAS: la oferta se cuenta con los animales traídos y puestos en fila. Objeto ancla: los cuatro caballos en fila.`,
    camara: {
      a: "PLANO MACRO de un apero labrado y una crin trenzada de uno de los caballos ofrecidos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con los cuatro caballos grandes en fila, sujetos de las riendas, y el caballito pequeño aparte.",
    },
    ini: "el apero labrado y la crin trenzada de uno de los caballos ofrecidos.",
    fin: "desde arriba, los cuatro caballos grandes están en fila sujetos de las riendas y el caballito queda aparte.",
  }, "subasta, dinero, caricatura, crueldad animal, latigos"),

  // b14 — «No me vendas por ningún motivo», dijo el caballo. (CITA)
  escp("b14a", [ref("caballito"), ref("kosina_nino")], {
    comun: `Tarde. LA CITA, y es EL CABALLO QUIEN DECIDE: que no lo venda. El animal ocupa el cuadro entero y el muchacho no aparece. Objeto ancla: la cabeza del caballo.`,
    camara: {
      a: "PLANO GENERAL de los dos apartados del corro, el caballito y el muchacho pequeño, de espaldas.",
      b: "la cámara ha AVANZADO hasta el animal y ha cerrado del todo: PRIMER PLANO de la cabeza del caballito de frente, los ojos fijos, llenando el cuadro.",
    },
    ini: "los dos están apartados del corro, de espaldas: el caballito y el muchacho pequeño.",
    fin: "de muy cerca, la cabeza del caballito de frente llena el cuadro con los ojos fijos.",
  }, "boca humana, labios, dientes humanos, bocadillo, texto, hibrido, resplandor"),
  escp("b14b", [ref("caballito"), ref("indio_rico"), ref("corral")], {
    comun: `Tarde. AQUÉL LO MALTRATARÍA Y KOSINA NO GANARÍA NADA: la razón es práctica, no sentimental. Se cuenta con el corral del rico, donde los animales están sujetos corto. Objeto ancla: la cuerda corta en el corral ajeno.`,
    camara: {
      a: "PLANO MACRO de una cuerda muy corta atada a un poste, tensa contra el cuello de un animal.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del corral del rico con seis caballos atados corto y sin sitio, y el caballito fuera, suelto.",
    },
    ini: "una cuerda muy corta atada al poste, tensa contra el cuello de un animal.",
    fin: "desde arriba, en el corral del rico hay seis caballos atados corto y sin sitio, y el caballito está fuera, suelto.",
  }, "latigos con pua, sangre, animal agonizando, crueldad explicita, jaulas"),

  // b15 — Propuso correrlo y beberse lo ganado. Corrió en pelo y ganó.
  escp("b15a", [ref("kosina_nino"), ref("indio_rico"), ref("pago_y_fiesta")], {
    comun: `Tarde. NO LO VENDIÓ: PROPUSO CORRERLO Y BEBERSE LO GANADO. La salida es de fiesta, no de negocio. Objeto ancla: las totumas levantadas.`,
    camara: {
      a: "PLANO MEDIO de él a media distancia hablando y señalando la pista, de perfil.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del corro con la gente levantando las totumas y las mantas de la apuesta extendidas en el suelo.",
    },
    ini: "a media distancia y de perfil, habla y señala la pista.",
    fin: "desde arriba, la gente levanta las totumas y las mantas de la apuesta están extendidas en el suelo.",
  }, "borrachera, caricatura, pelea, dinero moderno, casino"),
  esc("b15b", [ref("caballito"), ref("caballo"), ref("llanura_cardonal")], {
    comun: `Tarde. EL CABALLO CORRIÓ EN PELO Y DEJÓ ATRÁS A CUATRO: sin apero ninguno, que es lo que remata la humillación de los otros. Objeto ancla: el lomo desnudo.`,
    camara: {
      a: "PLANO MACRO del lomo desnudo del animal a la carrera, sin manta ni silla, con el sudor brillando.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la pista con él muy por delante y los otros cuatro en un grupo compacto y atrasado.",
    },
    ini: "el lomo desnudo del animal a la carrera, sin manta ni silla, con el sudor brillando.",
    fin: "desde muy arriba va muy por delante y los otros cuatro quedan en un grupo compacto y atrasado.",
  }, "sillas, estribos, uniformes, hipodromo, alas, resplandor, camara lenta"),

  // b16 — Los dueños se quejaron. El caballo ofreció su hermano menor.
  escp("b16a", [ref("indio_rico"), ref("caballo"), ref("corral")], {
    comun: `Tarde. LOS DUEÑOS SE QUEJARON: SUS CABALLOS PERDIERON EL RENOMBRE. La queja es de prestigio, y ésa es la gracia. Objeto ancla: los caballos grandes ya sin lustre.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos hombres de rango discutiendo entre ellos, molestos, sin mirar a nadie más.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL del corral con los cuatro caballos grandes cabizbajos y la gente ya mirando hacia otro lado.",
    },
    ini: "dos hombres de rango discuten entre ellos, molestos, sin mirar a nadie más.",
    fin: "desde lejos, los cuatro caballos grandes están cabizbajos en el corral y la gente ya mira hacia otro lado.",
  }, "pelea, armas, violencia, caricatura, dinero"),
  esc("b16b", [ref("caballito"), ref("pares_de_animales"), ref("llanura_cardonal")], {
    comun: `Tarde. EL CABALLO OFRECIÓ SU HERMANO MENOR PARA EL AMIGO: lo propone él, y con eso paga las dos defensas. Objeto ancla: el segundo caballo apareciendo.`,
    camara: {
      a: "PLANO MEDIO del caballito solo, con la cabeza vuelta hacia el horizonte.",
      b: "la cámara ha GIRADO siguiendo esa dirección y ha retrocedido: PLANO GENERAL de la llanura con otro caballo joven, muy parecido, acercándose desde lejos.",
    },
    ini: "el caballito está solo, con la cabeza vuelta hacia el horizonte.",
    fin: "en la dirección que miraba, otro caballo joven muy parecido se acerca desde lejos.",
  }, "manada mitica, resplandor, alas, portal, magia, estela"),

  // b17 — El hermano forcejeó y luego siguió dócil. Kosina se lo entregó.
  escp("b17a", [ref("pares_de_animales"), ref("kosina_nino"), ref("cordeleria")], {
    comun: `Tarde. EL HERMANO FORCEJEÓ Y LUEGO SIGUIÓ DÓCIL, Y TROCHABA DE MARAVILLA: primero se resiste, después anda mejor que ninguno. Objeto ancla: la cuerda tensa y luego floja.`,
    camara: {
      a: "PLANO MACRO de una cuerda tensa al máximo entre una mano y un cabestro, vibrando.",
      b: "la cámara ha RETROCEDIDO y ha girado al costado: PLANO GENERAL lateral del animal ya andando suelto y parejo por la trocha, con la cuerda floja.",
    },
    ini: "una cuerda tensa al máximo entre una mano y un cabestro, vibrando.",
    fin: "de costado y a distancia, el animal ya anda suelto y parejo por la trocha, con la cuerda floja.",
  }, "crueldad animal, latigos, sangre, doma violenta, espuelas"),
  escp("b17b", [ref("kosina_nino"), ref("amigo_rico"), ref("kasha")], {
    comun: `Tarde. KOSINA SE LO ENTREGÓ AL AMIGO Y TOCÓ: paga la deuda y vuelve a lo suyo, que es la caja. Objeto ancla: el cabestro pasando de mano a mano.`,
    camara: {
      a: "PLANO MACRO de un cabestro pasando de una mano pequeña a una mano de adulto.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con el joven llevándose el caballo por un lado y el muchacho a media distancia, ya tocando la caja.",
    },
    ini: "un cabestro pasa de una mano pequeña a una mano de adulto.",
    fin: "desde arriba, el joven se lleva el caballo por un lado y el muchacho, a media distancia, ya está tocando la caja.",
  }, "abrazo, llanto, aureola, aplausos, primer plano del niño"),

  // b18 — El caballo entregó a su madre y hermanos. Se metió por una cueva.
  escp("b18a", [ref("pares_de_animales"), ref("corral"), ref("llanura_cardonal")], {
    comun: `Última luz. QUISIERON MATARLO, Y EL CABALLO ENTREGÓ A SU MADRE Y HERMANOS: ÉSA ES LA RIQUEZA, y aquí termina el mito de verdad. De día adentro, de noche en la sabana. Objeto ancla: el corral lleno.`,
    camara: {
      a: "PLANO MACRO de varias crines y ancas juntas dentro de un corral, apretadas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado con el corral lleno junto a la casa pequeña de Kosina y la sabana abierta detrás.",
    },
    ini: "varias crines y ancas juntas dentro del corral, apretadas.",
    fin: "desde muy arriba, el corral lleno está junto a la casa pequeña de Kosina y detrás se abre la sabana.",
  }, "matanza, sangre, animales muertos, violencia, tesoro, oro"),
  esc("b18b", [ref("caballito"), ref("cueva"), ref("llanura_cardonal")], {
    comun: `Última luz. DESPUÉS SE METIÓ POR UNA CUEVA PARA SIEMPRE. EL FINAL ES DE DESPEDIDA, NO DE TRIUNFO, y la cueva NO es Jepira ni un portal: es un hueco en la tierra. Objeto ancla: la boca de la cueva tragándose al animal.`,
    camara: {
      a: "PLANO MEDIO del caballito parado en la boca de la cueva, de espaldas, con la cabeza vuelta una última vez.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final en picado con la boca de la cueva ya vacía, pequeña en la ladera, y la llanura entera al atardecer.",
    },
    ini: "el caballito está parado en la boca de la cueva, de espaldas, con la cabeza vuelta una última vez.",
    fin: "desde muy arriba, la boca de la cueva ya está vacía, pequeña en la ladera, y la llanura entera se abre al atardecer.",
  }, "portal magico, luz al fondo, ultratumba, almas, resplandor, apoteosis, texto"),
]);
