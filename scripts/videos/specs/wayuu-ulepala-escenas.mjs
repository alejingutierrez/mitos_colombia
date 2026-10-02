// Keyframes de Ulépala y la muerta — 18 bloques × 2 escenas × 2 cuadros
// = 72 imágenes ≈ 180 s.
// Guion: guion-ulepala-v2.json (N=18) · Acta: acta-ulepala.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · ELLA NO ENGAÑA: es una yolujaa, VUELVE DE CARNE Y HUESO y él la sigue
//   sabiéndolo a medias. LO QUE LOS SEPARA ES EL TIEMPO, NO LA MENTIRA.
// · LA REGLA QUE ÉL ROMPE ES LA DE LA ESPERA. Ella se lo advierte TRES NOCHES y
//   él insiste; EL CASTIGO ES PERDERLA, no morir allí.
// · LA CACERÍA DONDE JUYÁ —los animales son gente vista de otro modo— aparece
//   igual en «el-viaje-del-mas-alla» y en «los-dominios-de-juya». SON FICHAS
//   DISTINTAS y no se cruzan en dirección de arte: aquí es un tramo corto y él
//   aprende deprisa.
// · MALEIWA AQUÍ ES CUÑADO DE JUYÁ Y COMPRA A ULÉPALA PARA COMÉRSELO. NO es el
//   creador benévolo de «maleiwa»: ESA CONTRADICCIÓN SE DECLARA Y NO SE
//   ARMONIZA.
// · LAS CONSTELACIONES NACEN DE UN ACCIDENTE: el viento esparce las joyas del
//   pago. NO ES UN ACTO DE CREACIÓN DELIBERADO.
// · EL FINAL ES CERRADO Y DOBLE: la flecha lo mata POR CONTAR, y su corazón se
//   vuelve ISHO, el cardenal que anuncia las lluvias. LO SEGUNDO NO CONSUELA LO
//   PRIMERO.
// · LA MARIPOSA BLANCA DEL SEMEN es del canon y SE NARRA SIN EUFEMISMO Y SIN
//   ILUSTRARLA COMO ESCENA SEXUAL: en cuadro sólo hay una mariposa que sube.
// · EL NOMBRE JIRAIRAÍ NO APARECE AQUÍ: pertenece a «umarala» y a «jirairay».
//
// Jepira está marcado `sensible` en el inventario y se trata como en «el-viaje-
// del-mas-alla»: NO ES CASTIGO, va en ocres calientes y los muertos viven como
// los vivos.
//
// GUION DE LUZ: mañana del pago → camino prohibido al mediodía → silueta blanca
// en la bruma → noche sin desnudarse → casa de los muertos → amanecer entre las
// tinajas → tres noches de llanto → regreso con comida → medianoche del caballo
// blanco → mar y polvo → caverna fría → Jepira y tres negativas → algodonales →
// lo que no se contuvo → mariposa que sube → desierto y ganado → cacería donde
// Juyá → polvareda de Maleiwa → constelaciones → fondo del mar con los ojos
// vendados → fiesta, flecha y cardenal.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-ulepala-escenas";
export const OUT_DIR = "wayuu/videos/ulepala/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; espectro, figura translucida, alma flotando, calavera, esqueleto, zombi, cuerpo en descomposicion; inframundo de fuego, condenados, demonios, iconografia cristiana del infierno, tunel de luz, angeles; escena sexual, desnudez, insinuacion erotica, semen, fluidos, anatomia; canibalismo a la vista, carne humana, despiece, sangre, visceras, gore; tigre monstruoso, ojos brillantes, hibrido, licantropo; constelaciones dibujadas con lineas, mapas celestes, signos del zodiaco, texto; flecha atravesando una garganta en plano, herida, agonia, cadaver; apoteosis, reencuentro feliz, aureola, monumento";
export const PALETTE =
  PALETTE_BASE + "; JEPIRA VA EN LOS MISMOS OCRES CALIENTES del corpus porque alli los muertos viven como los vivos; el unico frio del mito es la caverna bajo el mar, y el rojo del cardenal final es el mismo rojo de las tumas";

const UL =
  "EL MISMO Ulépala de la referencia (hombre wayúu adulto, manta corta terciada de algodón crudo, faja tejida de kanas, waireñas de suela plana)";
const MU =
  "LA MISMA muchacha robada de la referencia (mujer wayúu joven, manta larga hasta el tobillo con cenefa tejida, pelo negro recogido), que después vuelve DE CARNE Y HUESO: entera y sólida, NUNCA translúcida ni pálida";

export const ITEMS = armar([
  // b1 — Se robó a una muchacha. Salió con seis hombres a pedir el pago.
  escp("b1a", [ref("ulepala"), ref("muchacha_robada"), ref("rancheria")], {
    comun: `Mañana. ULÉPALA SE ROBÓ A UNA MUCHACHA: es el rapto matrimonial del canon, y lo que viene después es pagarlo. ${UL} y ${MU}. Objeto ancla: los dos llegando juntos a la ranchería.`,
    camara: {
      a: "PLANO DETALLE de dos pares de pies llegando juntos por la arena, a paso igual.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la ranchería con los dos entrando y la gente saliendo a mirarlos.",
    },
    ini: "dos pares de pies llegan juntos por la arena, a paso igual.",
    fin: "desde arriba, los dos entran en la ranchería y la gente sale a mirarlos.",
  }, "violencia, forcejeo, secuestro dibujado, llanto, cadenas"),
  escp("b1b", [ref("ulepala"), ref("chivos"), ref("caballo")], {
    comun: `Mañana. SALIÓ CON SEIS HOMBRES A PEDIR CARNEROS, CABALLOS Y COLLARES ENTRE SUS PARIENTES: el pago se junta pidiendo, y son seis. Objeto ancla: la recua que se va formando.`,
    camara: {
      a: "PLANO MACRO de una cuerda con dos carneros pasando de una mano a otra.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la llanura con siete hombres y una recua de animales avanzando en fila.",
    },
    ini: "una cuerda con dos carneros pasa de una mano a otra.",
    fin: "desde arriba, siete hombres y una recua de animales avanzan en fila por la llanura.",
  }, "subasta, dinero, compra de personas, caricatura, cadenas"),

  // b2 — Ella tomó el camino de Malinot y un tigre la devoró.
  esc("b2a", [ref("camino_prohibido"), ref("llanura_cardonal")], {
    comun: `Mediodía. ELLA TOMÓ EL CAMINO PROHIBIDO DE MALINOT: Malinot está EXCLUIDO del inventario y no aparece. El camino sí, y se ve que nadie lo usa. Sin figuras. Objeto ancla: la trocha sin huellas.`,
    camara: {
      a: "PLANO CENITAL MACRO del arranque de una trocha con la arena lisa, sin una sola huella encima.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con dos caminos saliendo del mismo punto, uno muy pisado y el otro completamente limpio.",
    },
    ini: "el arranque de una trocha con la arena lisa, sin una sola huella encima.",
    fin: "desde muy arriba, dos caminos salen del mismo punto: uno muy pisado y el otro completamente limpio.",
  }, "monstruo, wanuru visible, señales, simbolos, calaveras, resplandor"),
  esc("b2b", [ref("tigre_devorador"), ref("camino_prohibido")], {
    comun: `Mediodía. Y UN TIGRE LA DEVORÓ: NO SE MUESTRA. El plano corta del tigre en el camino a la manta caída, y nada más. Objeto ancla: la manta en la trocha.`,
    camara: {
      a: "PLANO MEDIO de un tigre parado en mitad de la trocha, de perfil, enteramente animal.",
      b: "la cámara ha AVANZADO por la trocha dejándolo atrás y ha bajado: PLANO MACRO de una manta con cenefa tejida caída en la arena, sola, sin nada alrededor.",
    },
    ini: "un tigre parado en mitad de la trocha, de perfil, enteramente animal.",
    fin: "más adelante en la trocha hay una manta con cenefa tejida caída en la arena, sola y sin nada alrededor.",
  }, "ataque, sangre, cuerpo, despiece, colmillos, ojos brillantes, gore"),

  // b3 — Volvió hecha yolujaa. Él vio una silueta blanca y esa noche no se desnudó.
  escp("b3a", [ref("ulepala"), ref("ganado_vacuno"), ref("llanura_cardonal")], {
    comun: `Atardecer con bruma. ULÉPALA VOLVÍA CON EL GANADO Y VIO UNA SILUETA BLANCA: la ve de lejos, en la bruma, y no sabe todavía. Objeto ancla: la silueta al final del camino.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara parándose en seco, entrecerrando los ojos para ver mejor.",
      b: "la cámara ha GIRADO siguiendo su mirada y ha retrocedido: PLANO GENERAL del camino en la bruma con una figura de blanco parada al fondo, quieta.",
    },
    ini: "su cara se para en seco y entrecierra los ojos para ver mejor.",
    fin: "al fondo del camino, en la bruma, hay una figura de blanco parada y quieta.",
  }, "espectro, translucida, resplandor, niebla siniestra, calavera, terror"),
  escp("b3b", [ref("muchacha_robada"), ref("ulepala"), ref("chinchorro")], {
    comun: `Noche. ERA ELLA, CALLADA, Y ESA NOCHE NO SE DESNUDÓ: vuelve DE CARNE Y HUESO, entera y sólida. Lo que se cuenta es que no se quita la manta, y nada más. Objeto ancla: la manta que no se quita.`,
    camara: {
      a: "PLANO MACRO de una mano cerrándose sobre el borde de la manta, sujetándola en el hombro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada de noche con los dos en chinchorros separados y ella con la manta todavía puesta.",
    },
    ini: "una mano se cierra sobre el borde de la manta, sujetándola en el hombro.",
    fin: "desde arriba, los dos están en chinchorros separados y ella sigue con la manta puesta.",
  }, "desnudez, insinuacion, escena de intimidad, espectro, translucida, resplandor"),

  // b4 — «Ven conmigo a casa de mi familia». Sus padres muertos lo recibieron.
  escp("b4a", [ref("muchacha_robada"), ref("ulepala"), ref("llanura_cardonal")], {
    comun: `Amanecer. ANTES VEN CONMIGO A CASA DE MI FAMILIA, LE PIDIÓ: el viaje empieza con una invitación suya, no con un engaño. Objeto ancla: su cara pidiéndoselo de frente.`,
    camara: {
      a: "PLANO MEDIO CORTO de ella hablándole de frente al amanecer, tranquila.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de los dos ya andando por la llanura, uno al lado del otro, hacia el norte.",
    },
    ini: "ella le habla de frente al amanecer, tranquila.",
    fin: "desde arriba, los dos ya andan por la llanura uno al lado del otro, hacia el norte.",
  }, "engaño dibujado, sonrisa siniestra, resplandor, arrastre, cadenas"),
  escp("b4b", [ref("yolujaa"), ref("ulepala"), ref("enramada")], {
    comun: `Tarde. SUS PADRES MUERTOS LO RECIBIERON CON COMIDA Y CHINCHORROS: son gente corriente y la acogida es de familia política. Objeto ancla: la comida servida y el chinchorro colgado para él.`,
    camara: {
      a: "PLANO MACRO de una totuma llena posándose delante de él, en el suelo de arena.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con dos personas mayores atendiéndolo y un chinchorro nuevo colgado a un lado.",
    },
    ini: "una totuma llena se posa delante de él, en el suelo de arena.",
    fin: "desde arriba, dos personas mayores lo atienden bajo la enramada y hay un chinchorro nuevo colgado a un lado.",
  }, "espectros, calaveras, zombis, translucidos, comida podrida, gusanos"),

  // b5 — Ella desapareció y él amaneció entre las tinajas. Lloró tres noches.
  esc("b5a", [ref("cementerio"), ref("recipientes")], {
    comun: `Amanecer. ELLA DESAPARECIÓ Y ÉL AMANECIÓ ENTRE LAS TINAJAS DE UN CEMENTERIO: lo que era una casa, de día es un cementerio. Corte limpio, sin transición. Objeto ancla: las tinajas donde estaba la enramada.`,
    camara: {
      a: "PLANO MACRO del borde de una tinaja funeraria medio enterrada, con el barro cuarteado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cementerio al amanecer con las tinajas repartidas entre los árboles y una figura sentada en el suelo, sola.",
    },
    ini: "el borde de una tinaja funeraria medio enterrada, con el barro cuarteado.",
    fin: "desde arriba, las tinajas están repartidas entre los árboles y una figura está sentada en el suelo, sola.",
  }, "esqueletos, calaveras, cadaveres, ruinas, niebla siniestra, fantasmas"),
  escp("b5b", [ref("ulepala"), ref("cementerio"), ref("jepira")], {
    comun: `Tres noches. LLORÓ TRES NOCHES HASTA QUE JEPIRA INTERVINO: el llanto es lo que abre la puerta, igual que en «el-viaje-del-mas-alla». Objeto ancla: el mismo sitio en tres noches.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara llorando de noche, sucia y sin dormir.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL nocturno del cementerio con él diminuto en el mismo punto y el cielo entero encima.",
    },
    ini: "su cara llora de noche, sucia y sin dormir.",
    fin: "desde muy arriba, él sigue diminuto en el mismo punto del cementerio, con el cielo entero encima.",
  }, "fantasmas, apariciones, resplandor, monstruos, angeles, aureola"),

  // b6 — Volvió con uujolü y carne. Debía seguirla a la tierra de sus padres.
  escp("b6a", [ref("muchacha_robada"), ref("ulepala"), ref("recipientes")], {
    comun: `Noche. ELLA VOLVIÓ CON UUJOLÜ Y CARNE Y ÉL LA SINTIÓ VIVA: el alimento servido en el cuenco del hogar, y ella entera y tibia. Objeto ancla: el cuenco que le acerca.`,
    camara: {
      a: "PLANO MACRO de un cuenco de barro con comida caliente, humeando, acercándose en unas manos.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de los dos sentados frente a frente, ella entera y sólida, él comiendo y mirándola.",
    },
    ini: "un cuenco de barro con comida caliente, humeando, se acerca en unas manos.",
    fin: "los dos están sentados frente a frente: ella entera y sólida, él comiendo y mirándola.",
  }, "comida podrida, gusanos, espectro, translucida, resplandor, calavera"),
  escp("b6b", [ref("muchacha_robada"), ref("ulepala"), ref("costa_penascos")], {
    comun: `Noche. DEBÍA SEGUIRLA A LA TIERRA DE SUS PADRES: el trato queda claro y él acepta. Objeto ancla: la dirección que ella señala, hacia el mar.`,
    camara: {
      a: "PLANO DETALLE de su mano señalando hacia el norte, con el mar sonando fuera de cuadro.",
      b: "la cámara ha GIRADO siguiendo el brazo y se ha elevado: GRAN PLANO GENERAL nocturno con la línea del mar al fondo y los dos diminutos en la orilla.",
    },
    ini: "su mano señala hacia el norte, con el mar sonando fuera de cuadro.",
    fin: "en esa dirección está la línea del mar al fondo, con los dos diminutos en la orilla.",
  }, "portal, resplandor, barca, tunel de luz, monstruos marinos"),

  // b7 — Montaron un caballo blanco. Junto al mar lo azotó y se deshizo en polvo.
  escp("b7a", [ref("muchacha_robada"), ref("ulepala"), ref("caballo")], {
    comun: `Medianoche. A MEDIANOCHE MONTARON UN CABALLO BLANCO, ELLA ADELANTE: ella lleva las riendas, y eso importa. Objeto ancla: los dos sobre el mismo caballo.`,
    camara: {
      a: "PLANO MACRO de dos manos de mujer cerrándose sobre las crines blancas, con las de él detrás en la cintura.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL nocturno con el caballo blanco saliendo al galope por la llanura, los dos encima.",
    },
    ini: "dos manos de mujer se cierran sobre las crines blancas, con las de él detrás en la cintura.",
    fin: "desde arriba, el caballo blanco sale al galope por la llanura con los dos encima.",
  }, "caballo fantasma, esqueleto, fuego en los cascos, resplandor, alas"),
  esc("b7b", [ref("caballo"), ref("costa_penascos")], {
    comun: `Madrugada. JUNTO AL MAR LO AZOTÓ Y SE DESHIZO EN POLVO: el caballo se acaba ahí, y el polvo es polvo. Sin figuras en el segundo cuadro. Objeto ancla: el polvo donde estaba el animal.`,
    camara: {
      a: "PLANO MEDIO del caballo blanco parado en la orilla, de perfil, con el mar detrás.",
      b: "la cámara ha AVANZADO un paso y ha bajado al suelo: PLANO MACRO de un montón de polvo claro en la arena mojada, con el viento empezando a llevárselo.",
    },
    ini: "el caballo blanco está parado en la orilla, de perfil, con el mar detrás.",
    fin: "en la arena mojada hay un montón de polvo claro y el viento empieza a llevárselo.",
  }, "explosion, resplandor, huesos, esqueleto, magia, particulas, fuego"),

  // b8 — «Mi hombre, si eres valiente, ven». Entraron a una caverna bajo el mar. (CITA)
  escp("b8a", [ref("muchacha_robada"), ref("costa_penascos")], {
    comun: `Madrugada. LA CITA, y es EL UMBRAL DEL RELATO ENTERO: mi hombre, si eres valiente, ven. Lo dice desde el borde del agua, sin tirar de él. Objeto ancla: su cara llamándolo desde la orilla.`,
    camara: {
      a: "PLANO GENERAL de la orilla con ella pequeña ya dentro del agua hasta las rodillas, vuelta hacia atrás.",
      b: "la cámara ha AVANZADO hasta ella: PLANO MEDIO CORTO de su cara llamándolo, tranquila, con la espuma detrás.",
    },
    ini: "en la orilla, ella ya está dentro del agua hasta las rodillas, vuelta hacia atrás.",
    fin: "de cerca, su cara lo llama tranquila, con la espuma detrás.",
  }, "seduccion, sirena, desnudez, resplandor, monstruo, texto en pantalla"),
  esc("b8b", [ref("caverna_bajo_el_mar"), ref("costa_penascos")], {
    comun: `Madrugada. ENTRARON A UNA CAVERNA BAJO EL MAR, FRÍA HASTA PARALIZAR LA SANGRE: ES EL ÚNICO FRÍO DEL MITO. Sin figuras. Objeto ancla: la roca mojada y el aire helado.`,
    camara: {
      a: "PLANO MACRO de la roca de una pared con el agua escurriendo y una costra de sal blanca encima.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL de la caverna con el techo bajo, el agua en el suelo y una luz verdosa muy débil al fondo.",
    },
    ini: "la roca de una pared con el agua escurriendo y una costra de sal blanca encima.",
    fin: "la caverna tiene el techo bajo, agua en el suelo y una luz verdosa muy débil al fondo.",
  }, "monstruos marinos, esqueletos, barcos hundidos, tesoros, resplandor"),

  // b9 — Ella lo abrigó hasta Jepira. Tres noches se negó y él dejó de comer.
  escp("b9a", [ref("muchacha_robada"), ref("ulepala"), ref("caverna_bajo_el_mar")], {
    comun: `Penumbra. ELLA LO ABRIGÓ CON SUS MANTAS HASTA JEPIRA: lo cuida durante el paso, que es lo contrario de engañarlo. Objeto ancla: las mantas echadas encima.`,
    camara: {
      a: "PLANO MACRO de una manta gruesa cayendo sobre unos hombros y unas manos cerrándola por delante.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del corredor de la caverna con los dos avanzando juntos, él envuelto y ella llevándolo.",
    },
    ini: "una manta gruesa cae sobre unos hombros y unas manos la cierran por delante.",
    fin: "desde arriba, los dos avanzan juntos por el corredor: él envuelto y ella llevándolo.",
  }, "hipotermia, agonia, cadaver, espectro, resplandor, romance"),
  escp("b9b", [ref("ulepala"), ref("muchacha_robada"), ref("jepira")], {
    comun: `Tres noches en Jepira, en ocres calientes. TRES NOCHES SE NEGÓ Y ÉL DEJÓ DE COMER: LA REGLA QUE ÉL ROMPE ES LA DE LA ESPERA, y ella se lo advierte TRES VECES. Objeto ancla: los tres platos sin tocar.`,
    camara: {
      a: "PLANO CENITAL MACRO de tres platos de barro llenos y alineados, los tres intactos.",
      b: "la cámara ha SUBIDO y ha retrocedido: PLANO GENERAL de la enramada con él sentado aparte, de espaldas, y ella al otro extremo, los dos despiertos.",
    },
    ini: "tres platos de barro llenos y alineados, los tres intactos.",
    fin: "desde arriba, él está sentado aparte y de espaldas, y ella al otro extremo: los dos despiertos.",
  }, "inframundo, fuego, condenados, calaveras, azules de ultratumba, demonios"),

  // b10 — Una abuela lo mandó a desherbar. Ella le llevó comida y nada los contuvo.
  escp("b10a", [ref("mujer_mayor"), ref("ulepala"), ref("roza")], {
    comun: `Mañana. UNA ABUELA LO MANDÓ A DESHERBAR LOS ALGODONEROS: le dan trabajo, que es como se entra en una casa. Objeto ancla: las manos arrancando hierba entre las matas.`,
    camara: {
      a: "PLANO MACRO de unas manos arrancando hierba de raíz entre dos matas de algodón.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del algodonal con él trabajando en un surco, solo, y la casa al fondo.",
    },
    ini: "unas manos arrancan hierba de raíz entre dos matas de algodón.",
    fin: "desde arriba, él trabaja en un surco del algodonal, solo, con la casa al fondo.",
  }, "esclavitud, latigos, castigo, espectros, resplandor"),
  escp("b10b", [ref("muchacha_robada"), ref("ulepala"), ref("roza")], {
    comun: `Mediodía. ELLA LE LLEVÓ COMIDA CON SUS MANOS Y NADA LOS CONTUVO: lo que pasa entre los dos NO SE ILUSTRA. El cuadro se queda en las manos que se encuentran sobre el cuenco, y ahí corta. Objeto ancla: las dos manos sobre el mismo cuenco.`,
    camara: {
      a: "PLANO MACRO de dos pares de manos tocándose sobre el borde de un mismo cuenco de barro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado del algodonal con el cuenco caído en el surco y las matas altas cerrando el sitio.",
    },
    ini: "dos pares de manos se tocan sobre el borde de un mismo cuenco de barro.",
    fin: "desde muy arriba, el cuenco está caído en el surco y las matas altas cierran el sitio.",
  }, "escena sexual, desnudez, insinuacion, cuerpos, romance explicito, resplandor"),

  // b11 — «Te lo advertí, no era tiempo». Abrazaba la sombra de una muerta.
  escp("b11a", [ref("muchacha_robada"), ref("ulepala"), ref("roza")], {
    comun: `Mediodía. TE LO ADVERTÍ, NO ERA TIEMPO, ME PERDERÁS: ELLA NO ENGAÑA, y esto lo confirma. LO QUE LOS SEPARA ES EL TIEMPO. Objeto ancla: su cara diciéndolo sin reproche.`,
    camara: {
      a: "PLANO MEDIO CORTO de ella de frente, hablando bajo, con la cara triste y sin enfado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del algodonal con él de rodillas en el surco y ella ya de pie, apartándose.",
    },
    ini: "de frente, ella habla bajo, con la cara triste y sin enfado.",
    fin: "desde arriba, él está de rodillas en el surco y ella ya está de pie, apartándose.",
  }, "maldicion, grito, ira, resplandor, calavera, transformacion"),
  esc("b11b", [ref("roza"), ref("llanura_cardonal")], {
    comun: `Mediodía. AL VOLVER EN SÍ ABRAZABA LA SOMBRA DE UNA MUERTA: NO SE MUESTRA NI ELLA NI UNA SOMBRA CON FORMA. El cuadro son sus brazos cerrados sobre nada y el algodonal vacío. Objeto ancla: los brazos cerrados en el aire.`,
    camara: {
      a: "PLANO MACRO de dos brazos cerrándose sobre sí mismos, con las manos agarrándose los codos, y nada en medio.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del algodonal con él solo y de rodillas en el surco, y ni una figura más en todo el terreno.",
    },
    ini: "dos brazos se cierran sobre sí mismos, con las manos agarrándose los codos, y nada en medio.",
    fin: "desde arriba, él está solo y de rodillas en el surco, y no hay ni una figura más en todo el terreno.",
  }, "espectro, sombra con forma humana, translucida, humo, resplandor, calavera"),

  // b12 — Su semen se volvió mariposa. Siguió un ganado hasta Juyá.
  esc("b12a", [ref("mariposa_nocturna"), ref("roza")], {
    comun: `Mediodía. SU SEMEN SE VOLVIÓ MARIPOSA BLANCA: ES DEL CANON Y SE NARRA SIN EUFEMISMO, PERO NO SE ILUSTRA COMO ESCENA SEXUAL. En cuadro sólo hay UNA MARIPOSA QUE SUBE. Objeto ancla: la mariposa blanca subiendo.`,
    camara: {
      a: "PLANO MACRO de una mariposa blanca abriéndose sobre una hoja de algodón, con las alas todavía húmedas.",
      b: "la cámara la ha SEGUIDO hacia arriba y ha retrocedido: PLANO GENERAL casi todo de cielo con la mariposa pequeña subiendo y el algodonal quedando abajo.",
    },
    ini: "una mariposa blanca se abre sobre una hoja de algodón, con las alas todavía húmedas.",
    fin: "casi todo el cuadro es cielo, con la mariposa pequeña subiendo y el algodonal quedando abajo.",
  }, "semen, fluidos, anatomia, desnudez, resplandor, particulas, magia"),
  escp("b12b", [ref("ulepala"), ref("ganado_vacuno"), ref("llanura_cardonal")], {
    comun: `Días. ÉL QUEDÓ EN UN DESIERTO Y SIGUIÓ UN GANADO HASTA JUYÁ: el mismo procedimiento que en «el-viaje-del-mas-alla», y aquí es un tramo corto. Objeto ancla: el rastro de la manada.`,
    camara: {
      a: "PLANO CENITAL MACRO de huellas de pezuña frescas en arena seca, todas en la misma dirección.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del desierto con la manada cruzándolo al fondo y él diminuto siguiéndola.",
    },
    ini: "huellas de pezuña frescas en arena seca, todas en la misma dirección.",
    fin: "desde muy arriba, la manada cruza el desierto al fondo y él la sigue, diminuto.",
  }, "espejismos, oasis, dunas, camellos, agonia, buitres"),

  // b13 — Juyá le dio arco y flechas. Flechó los cactos y fueron puercoespines.
  escp("b13a", [ref("juya"), ref("ulepala"), ref("arco_flechas")], {
    comun: `Luz verde. JUYÁ LE DIO ARCO Y FLECHAS: DONDE PEDÍA PUERCOESPÍN HALLABA CACTOS. El aprendizaje aquí es rápido: una sola lección. Objeto ancla: el arco enorme en manos pequeñas.`,
    camara: {
      a: "PLANO MACRO de un arco grande pasando a unas manos que apenas lo abarcan.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con Juyá altísimo señalando el monte y él pequeño ya con el arco al hombro.",
    },
    ini: "un arco grande pasa a unas manos que apenas lo abarcan.",
    fin: "desde arriba, Juyá señala el monte, altísimo, y él ya lleva el arco al hombro, pequeño.",
  }, "trono, aureola, rayos, ogro, monstruo, adoracion"),
  esc("b13b", [ref("cardon"), ref("caza_que_es_gente"), ref("dominio_de_juya")], {
    comun: `Luz verde. FLECHÓ LOS CACTOS Y FUERON PUERCOESPINES: corte limpio del cacto al animal, sin sangre y sin transición. Objeto ancla: la flecha en el cacto y luego el animal.`,
    camara: {
      a: "PLANO MACRO de una flecha clavada en un cacto erizado, vibrando todavía.",
      b: "la cámara ha RETROCEDIDO y ha bajado al suelo: PLANO MEDIO de tres puercoespines tendidos en la hierba, enteros, con las púas intactas.",
    },
    ini: "una flecha clavada en un cacto erizado, vibrando todavía.",
    fin: "en la hierba hay tres puercoespines tendidos, enteros y con las púas intactas.",
  }, "sangre, herida, agonia, transformacion dibujada, resplandor, hibrido"),

  // b14 — Quebró la nuca de una mujer y atravesó al muchacho. Juyá lo adoptó.
  escp("b14a", [ref("mujeres_auyama"), ref("jovenes_venado"), ref("dominio_de_juya")], {
    comun: `Luz verde. QUEBRÓ LA NUCA DE UNA MUJER Y ATRAVESÓ AL MUCHACHO HERMOSO: los actos NO se muestran. El cuadro es la gente ANTES, y después las cosas en su lugar. Objeto ancla: las mujeres de verde y los jóvenes de casquete.`,
    camara: {
      a: "PLANO MEDIO CORTO de una solapa verde de manta y, al lado, un casquete ceñido con penacho corto.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con un grupo de mujeres de verde a un lado y un grupo de jóvenes de casquete al otro, todos corrientes.",
    },
    ini: "una solapa verde de manta y, al lado, un casquete ceñido con penacho corto.",
    fin: "desde arriba, hay un grupo de mujeres de verde a un lado y un grupo de jóvenes de casquete al otro, todos corrientes.",
  }, "cuello roto, sangre, flecha atravesando, cadaveres, gore, war bonnet"),
  esc("b14b", [ref("huerta_melones"), ref("venado"), ref("dominio_de_juya")], {
    comun: `Luz verde. CAYERON AUYAMAS Y VENADO, Y JUYÁ LO ADOPTÓ: el corte va de la gente a las cosas, limpio. Objeto ancla: la auyama y el venado donde estaban ellos.`,
    camara: {
      a: "PLANO MACRO de una auyama grande y madura en la tierra, con la flor amarilla al lado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con auyamas repartidas donde estaban las mujeres y un venado tendido donde estaba el joven.",
    },
    ini: "una auyama grande y madura en la tierra, con la flor amarilla al lado.",
    fin: "desde arriba, hay auyamas repartidas donde estaban las mujeres y un venado tendido donde estaba el joven.",
  }, "sangre, cuerpos, hibridos, caras en las auyamas, transformacion dibujada"),

  // b15 — Llegó Maleiwa, cuñado de Juyá. Al ver a Ulépala pidió comérselo.
  escp("b15a", [ref("mareiwa"), ref("llanura_cardonal"), ref("dominio_de_juya")], {
    comun: `Tarde. DEL NORDESTE LLEGÓ MALEIWA, CUÑADO DE JUYÁ, EN UNA POLVAREDA: AQUÍ MALEIWA NO ES EL CREADOR BENÉVOLO, Y LA CONTRADICCIÓN SE DECLARA. Llega envuelto en polvo. Objeto ancla: la polvareda que lo trae.`,
    camara: {
      a: "PLANO MACRO de una tolvanera cerrada avanzando, con la arena girando y nada visible dentro.",
      b: "la cámara ha RETROCEDIDO y ha bajado: PLANO MEDIO de una figura saliendo de la polvareda, con el manto batiéndole y la cara seria.",
    },
    ini: "una tolvanera cerrada avanza, con la arena girando y nada visible dentro.",
    fin: "de la polvareda sale una figura con el manto batiéndole y la cara seria.",
  }, "aureola, trono, resplandor, creador benevolo, angeles, adoracion"),
  escp("b15b", [ref("mareiwa"), ref("juya"), ref("ulepala")], {
    comun: `Tarde. AL VER PASAR A ULÉPALA PIDIÓ COMÉRSELO: lo pide como quien pide una cosa, y ahí está el horror. Objeto ancla: el dedo que lo señala.`,
    camara: {
      a: "PLANO MEDIO CORTO de Maleiwa señalando hacia un lado mientras habla con Juyá, sin mirar a quién.",
      b: "la cámara ha GIRADO siguiendo el brazo y ha retrocedido: PLANO GENERAL con Ulépala pequeño trabajando al fondo, sin enterarse de nada.",
    },
    ini: "Maleiwa señala hacia un lado mientras habla con Juyá, sin mirar a quién.",
    fin: "en esa dirección, Ulépala trabaja al fondo, pequeño y sin enterarse de nada.",
  }, "canibalismo, colmillos, monstruo, sangre, ogro, caricatura"),

  // b16 — Juyá se negó dos noches. El oro lo doblegó. Un viento los esparció.
  escp("b16a", [ref("juya"), ref("mareiwa"), ref("adorno_y_valor")], {
    comun: `Dos noches. JUYÁ SE NEGÓ DOS NOCHES; EL ORO Y LOS COLLARES LO DOBLEGARON: se compra a una persona, y el relato no lo suaviza. Objeto ancla: las vasijas de oro y los collares puestos delante.`,
    camara: {
      a: "PLANO MACRO de collares y piezas de metal apiladas sobre una manta extendida en la hierba.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de los dos sentados a lado y lado del pago, y Juyá asintiendo por fin.",
    },
    ini: "collares y piezas de metal apiladas sobre una manta extendida en la hierba.",
    fin: "desde arriba, los dos están sentados a lado y lado del pago y Juyá asiente por fin.",
  }, "avaricia caricaturesca, tesoro brillante, monedas, resplandor, trono"),
  esc("b16b", [ref("constelaciones"), ref("dominio_de_juya")], {
    comun: `Noche. UN VIENTO LOS ESPARCIÓ: LAS CONSTELACIONES. NACEN DE UN ACCIDENTE, no de un acto de creación deliberado, y NO SE DIBUJAN CON LÍNEAS NI CON FIGURAS. Objeto ancla: las piezas subiendo y quedándose arriba.`,
    camara: {
      a: "PLANO MACRO de la manta del pago levantándose de golpe con el viento y las piezas saltando al aire.",
      b: "la cámara ha SUBIDO con ellas y ha basculado al cielo: PLANO ENTERAMENTE DE CIELO nocturno con puntos de luz repartidos sin orden, sin una sola línea que los una.",
    },
    ini: "la manta del pago se levanta de golpe con el viento y las piezas saltan al aire.",
    fin: "el cuadro es sólo cielo nocturno, con puntos de luz repartidos sin orden y sin una sola línea que los una.",
  }, "constelaciones dibujadas con lineas, mapas celestes, zodiaco, figuras, texto"),

  // b17 — Una vieja lo sacó con los ojos vendados. No debía contarlo.
  escp("b17a", [ref("vieja_que_avisa"), ref("ulepala"), ref("caverna_bajo_el_mar")], {
    comun: `Penumbra. UNA VIEJA LO SACÓ CON LOS OJOS VENDADOS POR EL FONDO DEL MAR: la venda es lo que lo salva. Objeto ancla: la tela sobre los ojos.`,
    camara: {
      a: "PLANO MACRO de una tira de tela atándose sobre unos ojos, apretada por unas manos viejas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del corredor de la caverna con la vieja delante llevándolo de la mano y él vendado detrás.",
    },
    ini: "una tira de tela se ata sobre unos ojos, apretada por unas manos viejas.",
    fin: "desde arriba, la vieja va delante llevándolo de la mano por el corredor y él va vendado detrás.",
  }, "monstruos marinos, esqueletos, tesoros, resplandor, tunel de luz"),
  escp("b17b", [ref("ulepala"), ref("vieja_que_avisa"), ref("costa_penascos")], {
    comun: `Amanecer. NO DEBÍA CONTARLO HASTA DOS INVIERNOS: la condición es de plazo, y él ya rompió una regla de espera antes. Objeto ancla: la venda que cae en la arena.`,
    camara: {
      a: "PLANO MACRO de la tira de tela cayendo de unos ojos a la arena de la orilla, ya en seco.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la playa al amanecer con él solo de pie y la vieja ya no en cuadro.",
    },
    ini: "la tira de tela cae de unos ojos a la arena de la orilla, ya en seco.",
    fin: "desde arriba, él está solo de pie en la playa al amanecer y la vieja ya no está en cuadro.",
  }, "portal, resplandor, desaparicion con humo, angeles, aureola"),

  // b18 — Contó todo y una flecha le atravesó la garganta. Su corazón fue Isho.
  escp("b18a", [ref("ulepala"), ref("amigo_de_la_fiesta"), ref("pago_y_fiesta")], {
    comun: `Noche de fiesta. EN UNA FIESTA CONTÓ TODO: rompe la segunda condición delante de todos. LA FLECHA NO SE MUESTRA: el plano corta de la boca que habla al sitio vacío. Objeto ancla: la boca contándolo.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara en el corro, animado, contándolo con las manos.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la fiesta con el corro entero callado de golpe y un sitio vacío en el medio, donde él estaba.",
    },
    ini: "su cara en el corro, animado, contándolo con las manos.",
    fin: "desde arriba, el corro entero se ha callado de golpe y en el medio queda un sitio vacío, donde él estaba.",
  }, "flecha en la garganta, sangre, agonia, cadaver, gore, grito"),
  esc("b18b", [ref("isho"), ref("chubasco"), ref("llanura_cardonal")], {
    comun: `Amanecer. SU CORAZÓN FUE ISHO, QUE ANUNCIA LAS LLUVIAS: EL FINAL ES DOBLE Y LO SEGUNDO NO CONSUELA LO PRIMERO. El rojo del cardenal es EL MISMO ROJO de las tumas del corpus. Objeto ancla: el pájaro rojo antes de la lluvia.`,
    camara: {
      a: "PLANO MACRO del pecho rojo encendido de un cardenal posado en una rama, con el pico abierto.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final en picado de la llanura con el pájaro diminuto en su rama y una cortina de lluvia acercándose por el horizonte.",
    },
    ini: "el pecho rojo encendido de un cardenal posado en una rama, con el pico abierto.",
    fin: "desde muy arriba, el pájaro es diminuto en su rama y una cortina de lluvia se acerca por el horizonte.",
  }, "alma, resplandor, corazon dibujado, sangre, aureola, reencuentro, texto"),
]);
