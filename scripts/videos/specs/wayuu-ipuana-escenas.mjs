// Keyframes de El Ipuana al que no le entraba la muerte — 18 bloques × 2 escenas
// × 2 cuadros = 72 imágenes ≈ 180 s.
// Guion: guion-el-indio-guerrero-ipuana-v2.json (N=18) · Acta: acta-el-indio-guerrero-ipuana.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · LA INVULNERABILIDAD ES TÉCNICA, NO DIVINA: son CONTRAS, y el canon lo dice.
//   La punta enterrada la bota. NADA DE AURA NI DE RESPLANDOR: si una imagen le
//   pone brillo al cuerpo, contradice el mito entero.
// · LAS TRES MUERTES SON DISTINTAS y la dirección de arte las distingue: las
//   flechas que no entran, el ARMA DE FUEGO que sí, y la CABEZA CORTADA que es
//   la definitiva.
// · LA GUERRA ES DE CASTAS —Ipuana contra Jayariyú—, NO de pueblos contra
//   colonos. El canon precisa que en aquel entonces no había civilizados, y eso
//   va en cuadro (b6): nada de armaduras, carabelas ni uniformes.
// · LA BOTELLA DE RON QUE HABLA NO ES BORRACHERA NI HUMOR: es un aviso que él
//   aprovecha a medias, igual que el sueño que después desoye. Se trata con la
//   misma seriedad que el sueño.
// · EL CARDÓN NO ES ADORNO DEL PAISAJE: es el PROCEDIMIENTO que lo habría
//   resucitado. Que los compañeros no lo supieran es el nudo del final.
// · LAS DOS CONDICIONALES DEL CIERRE ESTÁN EN EL CANON y se conservan. El mito
//   termina midiendo LO QUE NO PASÓ, no lo que pasó: por eso el último bloque
//   se resuelve con un cardón VACÍO y una majayura que no está.
// · EL HIJO MUERE POR ATROPELLAR AL VENADO CON SU PROPIO CABALLO. No lo mata un
//   enemigo ni un espíritu: LO MATA NO CREER.
// · LA MAJAYURA DEL SUEÑO NO ES la de «la-majayura-que-pierde-a-los-hombres».
//   Aquí es la que lo habría salvado, no la que pierde. No se cruzan.
//
// El inventario EXCLUYE `cuerpo_sin_cabeza` con razón declarada —mutilación— y
// dice con qué se cubre: EL CARDÓN VACÍO. Ni la decapitación ni el cuerpo
// extendido entran en cuadro en ningún momento.
//
// GUION DE LUZ: mediodía duro de la guerra de castas → flechas que rebotan →
// monte de la busca → disparo al atardecer → dos amaneceres de arena removida →
// luz plana del mundo sin civilizados → verano blanco que agrieta → emboscada en
// la trocha → cardón vacío al anochecer → mañana del rastro → camino a Puerto
// Estrella → penumbra del cuarto y la botella → noche del sueño → mañana de la
// cacería → mediodía del galope → polvo del choque → tarde del error → última
// luz sobre el cardón que nadie usó.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-ipuana-escenas";
export const OUT_DIR = "wayuu/videos/el-indio-guerrero-ipuana/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; aura, halo, resplandor, escudo de energia, brillo sobre el cuerpo, particulas magicas; decapitacion, cabeza cortada, cuerpo sin cabeza, mutilacion, miembros sueltos; sangre abundante, visceras, heridas abiertas, cadaveres a la vista; conquistadores, colonos, armaduras, carabelas, uniformes, banderas coloniales; borrachera, juerga, botellas rotas, humor, caricatura; fantasmas, esqueletos, espectros, zombis, tumbas con lapida; superheroe, pose heroica, musculatura exagerada, capa";
export const PALETTE =
  PALETTE_BASE + "; el blanco calcareo del verano largo domina del bloque siete en adelante; el verde del venado y del arroyo de Wina es el unico respiro";

const IP =
  "EL MISMO guerrero Ipuana de la referencia (hombre wayúu adulto y fuerte, pelo negro recogido, torso descubierto y wayuco con faja tejida de kanas, contras de fibra y semillas atadas al brazo y al cuello, descalzo, sin nada de metal encima)";
const HI =
  "EL MISMO hijo del Ipuana de la referencia (hombre joven wayúu, pelo negro corto, manta de algodón crudo terciada, faja tejida, descalzo)";

export const ITEMS = armar([
  // b1 — La casta Ipuana peleaba con la Jayariyú. Uno al que no le entraba la muerte.
  escp("b1a", [ref("jayariyu"), ref("llanura_cardonal"), ref("arco_flechas")], {
    comun: `Mediodía duro. LA GUERRA ES DE CASTAS: dos grupos wayúu enfrentados entre los cardones, con arcos y flechas. Ni un solo forastero en cuadro. Objeto ancla: las dos líneas separadas por la arena.`,
    camara: {
      a: "PLANO MEDIO de tres hombres de una casta agachados detrás de un trupillo, con los arcos montados.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con los dos grupos enfrentados a cien pasos uno del otro y la arena vacía en medio.",
    },
    ini: "tres hombres agachados detrás del trupillo tienen los arcos montados.",
    fin: "desde muy arriba se ven los dos grupos enfrentados a cien pasos y la arena vacía entre ellos.",
  }, "armaduras, cascos, fusiles modernos, uniformes, banderas, colonos, caballeria"),
  escp("b1b", [ref("guerrero_ipuana"), ref("llanura_cardonal")], {
    comun: `Mediodía duro. ENTRE ELLOS HABÍA UNO AL QUE NO LE ENTRABA LA MUERTE. ${IP}, de pie donde los otros se agachan. Sin aura, sin brillo, sin pose heroica: sólo un hombre que no se cubre. Objeto ancla: las contras atadas al brazo.`,
    camara: {
      a: "PLANO MACRO de las contras —fibra trenzada y semillas oscuras— atadas al antebrazo, tan cerca que se ven los nudos.",
      b: "la cámara ha RETROCEDIDO y ha subido en diagonal: PLANO GENERAL del campo con él de pie y entero en mitad del claro, y todos los demás agachados detrás de las matas.",
    },
    ini: "las contras de fibra trenzada y semillas atadas al antebrazo llenan el cuadro; se ven los nudos.",
    fin: "desde arriba, él está de pie en mitad del claro y todos los demás siguen agachados detrás de las matas.",
  }, "aura, halo, resplandor, escudo de energia, capa, musculatura exagerada, pose heroica"),

  // b2 — Le tiraban rayas y flechas envenenadas y no le hacían daño.
  esc("b2a", [ref("arco_flechas"), ref("llanura_cardonal")], {
    comun: `Mediodía. LE TIRABAN RAYAS Y FLECHAS ENVENENADAS: las puntas son de raya y espina, con la pasta oscura del veneno en el filo. Sin figuras. Objeto ancla: la punta envenenada.`,
    camara: {
      a: "PLANO MACRO de la punta de una flecha con la pasta oscura del veneno seca sobre el filo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado siguiendo el vuelo: PLANO GENERAL con una docena de flechas cruzando el aire a la vez sobre la arena.",
    },
    ini: "la punta de la flecha lleva la pasta oscura del veneno seca sobre el filo.",
    fin: "desde arriba, una docena de flechas cruza el aire a la vez sobre la arena.",
  }, "explosiones, fuego, magia, resplandor, escudos de energia"),
  escp("b2b", [ref("guerrero_ipuana"), ref("llanura_cardonal")], {
    comun: `Mediodía. LA PUNTA ENTERRADA LA BOTABA Y SEGUÍA ANDANDO. Es TÉCNICA, no milagro: el cuerpo expulsa la punta y él sigue. Sin herida abierta ni sangre en cuadro. Objeto ancla: la punta caída en la arena.`,
    camara: {
      a: "PLANO CENITAL MACRO de una punta de flecha caída en la arena, limpia, con la sombra de un pie pasando al lado.",
      b: "la cámara se ha ELEVADO y ha girado a su espalda: PLANO GENERAL con él alejándose entre los cardones, andando normal, y cuatro puntas más caídas en la arena por donde pasó.",
    },
    ini: "una punta de flecha está caída y limpia en la arena y la sombra de un pie pasa al lado.",
    fin: "desde atrás y arriba se le ve alejarse andando normal, y en la arena quedan otras cuatro puntas por donde pasó.",
  }, "sangre, herida abierta, carne, aura, resplandor, magia, dolor teatral"),

  // b3 — Usaba varias contras. Lo buscaban entre cardones y trupillos.
  esc("b3a", [ref("piedras_y_huesos"), ref("adorno_y_valor")], {
    comun: `Luz plana. USABA VARIAS CONTRAS: son objetos concretos —semillas, fibras trenzadas, piedrecitas atadas—, dispuestos sobre una tela como quien revisa su equipo. Sin personas. Objeto ancla: las contras alineadas.`,
    camara: {
      a: "PLANO MACRO de tres contras distintas alineadas sobre una tela: una de semillas, una de fibra trenzada, una con piedrecita.",
      b: "la cámara ha RETROCEDIDO y ha subido a cenital: PLANO EN PICADO de la tela entera extendida con ocho o diez contras repartidas, todas distintas.",
    },
    ini: "tres contras distintas, de semillas, de fibra y con piedrecita, alineadas sobre la tela.",
    fin: "desde arriba, la tela entera tiene ocho o diez contras repartidas y todas son distintas.",
  }, "amuletos fantasticos, runas, cristales magicos, simbolos, resplandor"),
  escp("b3b", [ref("jayariyu"), ref("cardon"), ref("trupillo")], {
    comun: `Luz plana de la mañana. IBA AL COMBATE COMO OTROS VAN AL MONTE, y por eso LO BUSCABAN entre cardones y trupillos: es una batida, no una batalla. Objeto ancla: los que rastrean entre las matas.`,
    camara: {
      a: "PLANO MEDIO CORTO de una cara asomándose entre dos brazos de cardón, buscando.",
      b: "la cámara ha RETROCEDIDO y se ha elevado mucho: GRAN PLANO GENERAL en picado del cardonal con seis hombres repartidos, separados entre sí, peinando el terreno.",
    },
    ini: "una cara se asoma entre dos brazos de cardón, buscando.",
    fin: "desde muy arriba se ve el cardonal con seis hombres repartidos y separados, peinando el terreno.",
  }, "ejercito, formacion militar, uniformes, perros de presa, antorchas"),

  // b4 — Ninguno lograba herirlo. Un día lo mataron con un arma de fuego.
  escp("b4a", [ref("guerrero_ipuana"), ref("jayariyu"), ref("llanura_cardonal")], {
    comun: `Tarde. NINGUNO LOGRABA HERIRLO DE MUERTE, PERO NO SE DESANIMABAN: la escena es la testarudez de los otros, no su gloria. Objeto ancla: las caras que insisten.`,
    camara: {
      a: "PLANO GENERAL de él pasando de largo, entero, y de dos hombres bajando el arco al verlo.",
      b: "la cámara ha GIRADO hacia los dos y ha avanzado: PLANO MEDIO CORTO de sus caras, volviendo a montar el arco, sin desanimarse.",
    },
    ini: "él pasa de largo, entero, y dos hombres bajan el arco al verlo.",
    fin: "de cerca se les ve volver a montar el arco: no se han desanimado.",
  }, "aura, resplandor, pose heroica, camara lenta dibujada, musculatura exagerada"),
  esc("b4b", [ref("armas"), ref("llanura_cardonal")], {
    comun: `Atardecer. LO QUE LO MATA NO SON LAS FLECHAS: es un ARMA DE FUEGO. La distinción importa, así que el cuadro es el arma y el humo, no el cuerpo. Objeto ancla: el humo saliendo del cañón.`,
    camara: {
      a: "PLANO MACRO de la boca de un cañón de fusil antiguo con el humo blanco saliendo todavía.",
      b: "la cámara ha RETROCEDIDO y se ha elevado mucho: GRAN PLANO GENERAL en picado de la llanura al atardecer con la nube de humo pequeña en un punto y el resto vacío.",
    },
    ini: "de la boca del cañón sale todavía el humo blanco.",
    fin: "desde muy arriba, la nube de humo es un punto pequeño en la llanura al atardecer y no hay nada más en cuadro.",
  }, "cuerpo, cadaver, sangre, herida, soldados, uniformes, armaduras"),

  // b5 — Lo enterraron y resucitó. Lo volvieron a matar y resucitó otra vez.
  esc("b5a", [ref("cementerio"), ref("llanura_cardonal")], {
    comun: `Amanecer. LO ENTERRARON Y ÉL RESUCITÓ: se cuenta con la arena removida desde dentro y las huellas que salen de ahí. Sin cuerpo en cuadro. Objeto ancla: la arena reventada por dentro.`,
    camara: {
      a: "PLANO CENITAL MACRO de la arena de una fosa reciente abierta desde abajo, con los terrones volcados hacia fuera.",
      b: "la cámara se ha ELEVADO y ha basculado: PLANO GENERAL del sitio al amanecer con el hoyo vacío y una línea de huellas descalzas saliendo de él hacia el horizonte.",
    },
    ini: "la arena de la fosa está reventada desde abajo y los terrones volcados hacia fuera.",
    fin: "desde arriba, el hoyo está vacío y una línea de huellas descalzas sale de él hacia el horizonte.",
  }, "cadaver, esqueleto, zombi, mano saliendo de la tierra, lapida, cruces, niebla siniestra"),
  escp("b5b", [ref("guerrero_ipuana"), ref("llanura_cardonal"), ref("cementerio")], {
    comun: `Amanecer. LO VOLVIERON A MATAR Y A ENTERRAR, Y ENSEGUIDA RESUCITÓ OTRA VEZ: ${IP} SACUDIÉNDOSE LA ARENA, que es la imagen literal del canon. Entero, sin heridas, sin brillo. Objeto ancla: la arena cayéndole de los hombros.`,
    camara: {
      a: "PLANO MACRO de la arena escurriéndose de un hombro desnudo, grano a grano.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con él de pie junto al hoyo abierto, sacudiéndose, y el sol saliendo detrás.",
    },
    ini: "la arena se escurre de un hombro desnudo, grano a grano.",
    fin: "desde arriba está de pie junto al hoyo abierto, sacudiéndose la arena, con el sol saliendo detrás.",
  }, "zombi, piel podrida, heridas, sangre, aura, resplandor, niebla siniestra"),

  // b6 — Dos veces le dieron muerte y dos veces regresó. No había civilizados.
  esc("b6a", [ref("cementerio"), ref("llanura_cardonal")], {
    comun: `Luz plana. DOS VECES: el cuadro cuenta dos, y se cuentan porque están los dos hoyos, uno al lado del otro, los dos abiertos. Sin figuras. Objeto ancla: los dos hoyos vacíos.`,
    camara: {
      a: "PLANO MEDIO de un hoyo abierto y vacío en la arena, con los bordes desmoronados.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado con los DOS hoyos abiertos a pocos pasos uno del otro y dos rastros de huellas saliendo, cada uno del suyo.",
    },
    ini: "un hoyo abierto y vacío, con los bordes desmoronados.",
    fin: "desde arriba se ven los dos hoyos a pocos pasos y dos rastros de huellas, cada uno saliendo del suyo.",
  }, "cadaveres, esqueletos, lapidas, cruces, ataudes, fantasmas"),
  escp("b6b", [ref("rancheria"), ref("enramada"), ref("primeros_wayuu")], {
    comun: `Luz plana. EN AQUEL ENTONCES NO HABÍA CIVILIZADOS, y el canon lo precisa: el mundo en cuadro es enteramente wayúu. Ni un forastero, ni una prenda ajena, ni un objeto de fuera. Objeto ancla: la ranchería sola en el mundo.`,
    camara: {
      a: "PLANO MEDIO de la vida bajo la enramada: alguien tejiendo, alguien con las cabras, todo wayúu.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado de la Guajira entera con rancherías dispersas y ni un camino, cerca o construcción ajena en ninguna parte.",
    },
    ini: "bajo la enramada alguien teje y alguien anda con las cabras.",
    fin: "desde muy arriba, la Guajira entera son rancherías dispersas y no hay un solo camino ni construcción que venga de fuera.",
  }, "colonos, carabelas, iglesias, caminos empedrados, cercas de alambre, ropa europea"),

  // b7 — Vino un verano largo. Él viajó hacia Taiway.
  esc("b7a", [ref("jaguey"), ref("chivos"), ref("llanura_cardonal")], {
    comun: `Mediodía blanco. VINO UN VERANO LARGO: los jagüeyes se agrietaron y las cabras enflaquecieron. Objeto ancla: la grieta del jagüey.`,
    camara: {
      a: "PLANO MACRO de una grieta ancha abriéndose en el barro del jagüey, tan honda que se pierde la vista dentro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del jagüey seco entero con las cabras flacas alrededor buscando en el lecho.",
    },
    ini: "una grieta ancha se abre en el barro y es tan honda que no se le ve el fondo.",
    fin: "desde arriba, el jagüey está seco del todo y las cabras flacas buscan algo en el lecho.",
  }, "cadaveres de animales, esqueletos, carronia, miseria explotada"),
  escp("b7b", [ref("guerrero_ipuana"), ref("taiway"), ref("llanura_cardonal")], {
    comun: `Mediodía blanco. ÉL VIAJÓ HACIA TAIWAY, cerca de Sinamaica: sale solo por la trocha, con lo puesto. Objeto ancla: la trocha larga hacia el norte.`,
    camara: {
      a: "PLANO DETALLE de sus pies descalzos levantando polvo blanco en la trocha.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la trocha cruzando la llanura blanca de verano, con él minúsculo a mitad de camino.",
    },
    ini: "los pies descalzos levantan polvo blanco en la trocha.",
    fin: "desde muy arriba se ve la trocha entera cruzando la llanura blanca y él minúsculo a mitad de camino.",
  }, "caravana, comitiva, carros, caballos, escolta"),

  // b8 — Le pusieron una emboscada. Peleó, y esta vez lo mataron.
  escp("b8a", [ref("jayariyu"), ref("trupillo"), ref("llanura_cardonal")], {
    comun: `Tarde. SUS ENEMIGOS LO SUPIERON Y LE PUSIERON UNA EMBOSCADA EN EL CAMINO: están escondidos y quietos a los dos lados de la trocha. Objeto ancla: los cuerpos agazapados junto al camino.`,
    camara: {
      a: "PLANO MACRO de una mano quieta apoyada en la arena detrás de un trupillo, con el arco al lado.",
      b: "la cámara se ha ELEVADO en vertical: PLANO CENITAL de la trocha con seis hombres agazapados repartidos a los dos lados y el camino vacío en medio.",
    },
    ini: "una mano quieta se apoya en la arena detrás del trupillo, con el arco al lado.",
    fin: "desde arriba se ve la trampa entera: seis hombres agazapados a los dos lados y el camino vacío en medio.",
  }, "ejercito, uniformes, armaduras, artilleria, banderas"),
  esc("b8b", [ref("llanura_cardonal"), ref("arco_flechas"), ref("trupillo")], {
    comun: `Tarde. PELEÓ, Y ESTA VEZ LO MATARON: la pelea NO se muestra. Lo que queda en cuadro es el sitio después —la arena removida, las armas caídas, el polvo bajando— y ningún cuerpo. Objeto ancla: el polvo que se asienta.`,
    camara: {
      a: "PLANO MACRO de un arco partido caído en la arena removida, con el polvo todavía en suspensión.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del tramo de trocha revuelto de pisadas, con armas sueltas repartidas y nadie en cuadro.",
    },
    ini: "un arco partido está caído en la arena removida y el polvo sigue en suspensión.",
    fin: "desde arriba, el tramo de trocha está revuelto de pisadas con armas sueltas repartidas y no hay nadie.",
  }, "cuerpo, cadaver, sangre, heridas, decapitacion, miembros, gore"),

  // b9 — Le cortaron la cabeza y se la llevaron. Dejaron el cuerpo.
  esc("b9a", [ref("llanura_cardonal"), ref("jayariyu")], {
    comun: `Anochecer. NO LO ENTERRARON ENTERO: SE LLEVARON ALGO. La mutilación está EXCLUIDA del inventario y no entra en cuadro de ninguna forma: se cuenta con un grupo que se aleja llevando un bulto envuelto en tela, visto de muy lejos y de espaldas. Objeto ancla: el bulto envuelto.`,
    camara: {
      a: "PLANO MEDIO de un bulto pequeño envuelto en tela burda, colgando de una mano, visto de espaldas.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado del anochecer con el grupo alejándose diminuto por la trocha y el sitio de la pelea quedando atrás, vacío.",
    },
    ini: "un bulto pequeño envuelto en tela burda cuelga de una mano, visto de espaldas.",
    fin: "desde muy arriba, el grupo se aleja diminuto por la trocha y el sitio de la pelea queda atrás, vacío.",
  }, "cabeza, cabeza cortada, sangre, cuerpo, cadaver, mutilacion, trofeo humano, gore"),
  esc("b9b", [ref("cardon"), ref("llanura_cardonal")], {
    comun: `Anochecer. EL CARDÓN VACÍO es lo que el inventario pone en lugar del cuerpo, y es también el nudo del final: ahí es donde debió quedar. Sin nada encima. Objeto ancla: la mata de cardón sola.`,
    camara: {
      a: "PLANO MACRO de la corona de espinas del brazo de un cardón contra el cielo del anochecer.",
      b: "la cámara ha RETROCEDIDO y ha bajado: PLANO GENERAL del cardón entero de pie en la llanura vacía, sin nada encima ni alrededor.",
    },
    ini: "la corona de espinas del brazo del cardón se recorta contra el cielo del anochecer.",
    fin: "desde lejos, el cardón está solo y entero en la llanura vacía, sin nada encima ni alrededor.",
  }, "cuerpo sobre el cardon, cadaver, sangre, buitres, esqueleto"),

  // b10 — Así no resucitó más. El hijo salió un día tras un rastro.
  esc("b10a", [ref("cementerio"), ref("llanura_cardonal")], {
    comun: `Mañana. ASÍ NO RESUCITÓ MÁS: esta vez la arena NO está removida. La diferencia con b5a es el cuadro entero. Objeto ancla: la arena intacta.`,
    camara: {
      a: "PLANO CENITAL MACRO de arena lisa y asentada, sin una sola huella ni terrón volcado.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del sitio con la señal del enterramiento quieta y ningún rastro saliendo de ella en ninguna dirección.",
    },
    ini: "la arena está lisa y asentada: ni una huella, ni un terrón volcado.",
    fin: "desde muy arriba, el sitio está quieto y no sale ningún rastro de él hacia ninguna parte.",
  }, "fantasma, espectro, esqueleto, lapida, cruces, flores, ofrendas"),
  escp("b10b", [ref("hijo_del_ipuana"), ref("llanura_cardonal"), ref("del_camino")], {
    comun: `Mañana. ESTE IPUANA TUVO UN HIJO, Y EL HIJO SALIÓ UN DÍA TRAS UN RASTRO. ${HI}, agachado leyendo el suelo. Objeto ancla: la huella que sigue.`,
    camara: {
      a: "PLANO CENITAL MACRO de una huella de casco en la arena, nítida y reciente.",
      b: "la cámara ha SUBIDO y ha girado al frente: PLANO MEDIO de él agachado sobre la huella, levantando la cara hacia la dirección en que sigue el rastro.",
    },
    ini: "una huella de casco, nítida y reciente, vista desde arriba.",
    fin: "él está agachado sobre ella y levanta la cara hacia donde sigue el rastro.",
  }, "lupa, mapas, instrumentos, perros de presa, uniformes"),

  // b11 — Montó a caballo y lo siguió hasta Puerto Estrella.
  escp("b11a", [ref("hijo_del_ipuana"), ref("caballo"), ref("llanura_cardonal")], {
    comun: `Mediodía. MONTÓ A CABALLO Y LO SIGUIÓ: días de camino resumidos en una cabalgada larga por la llanura. Objeto ancla: el caballo al paso.`,
    camara: {
      a: "PLANO DETALLE de los cascos del caballo pisando la arena, a ras de suelo.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la llanura con el jinete minúsculo y una línea larga de huellas detrás de él.",
    },
    ini: "los cascos pisan la arena, vistos a ras de suelo.",
    fin: "desde muy arriba, el jinete es minúsculo y detrás de él queda una línea larguísima de huellas.",
  }, "caballeria, comitiva, carros, persecucion con armas, uniformes"),
  escp("b11b", [ref("hijo_del_ipuana"), ref("costa_penascos"), ref("primeros_wayuu")], {
    comun: `Tarde. HASTA PUERTO ESTRELLA: allí LE DIERON NOTICIA de que por allí había pasado. Alguien le señala una dirección. Objeto ancla: el brazo que señala.`,
    camara: {
      a: "PLANO MEDIO CORTO de él escuchando, de perfil, con la cara atenta.",
      b: "la cámara ha GIRADO siguiendo el brazo del que habla y ha retrocedido: PLANO GENERAL de la costa con la dirección señalada abriéndose hacia el fondo.",
    },
    ini: "escucha de perfil, con la cara atenta.",
    fin: "la cámara sigue el brazo que señala y se abre hacia el fondo de la costa, en la dirección que le indican.",
  }, "puerto moderno, barcos, muelles, grúas, edificios"),

  // b12 — Una botella de ron le habló y le pidió que la sacara. Halló su caballo.
  esc("b12a", [ref("recipientes"), ref("piichi")], {
    comun: `Penumbra de un cuarto. LA BOTELLA QUE HABLA NO ES BORRACHERA NI HUMOR: es un aviso, y se trata con la misma seriedad que el sueño. Una botella de vidrio oscuro, sola, en la penumbra. Objeto ancla: la botella.`,
    camara: {
      a: "PLANO MACRO del cuello de la botella de vidrio oscuro con un reflejo de luz corriendo por el vidrio.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cuarto en penumbra con la botella pequeña y sola en un rincón del suelo de arena.",
    },
    ini: "un reflejo de luz corre por el cuello de la botella de vidrio oscuro.",
    fin: "desde arriba, la botella es pequeña y está sola en un rincón del suelo de arena del cuarto.",
  }, "borrachera, juerga, botellas rotas, humor, caricatura, cara en la botella, genio, humo magico"),
  escp("b12b", [ref("hijo_del_ipuana"), ref("caballo"), ref("corral")], {
    comun: `Penumbra y luz de la puerta. ENTRÓ Y HALLÓ ALLÍ SU CABALLO: el aviso servía, y él lo aprovecha. Reconocimiento, no pelea. Objeto ancla: el caballo reconocido.`,
    camara: {
      a: "PLANO MACRO del ojo de un caballo y de la marca del anca justo debajo del pelo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del corral con él de pie junto al caballo y la mano ya en la crin.",
    },
    ini: "el ojo del caballo y la marca del anca, muy de cerca.",
    fin: "desde arriba, él está de pie junto al caballo con la mano en la crin.",
  }, "robo violento, pelea, armas, gritos, humor, borrachera"),

  // b13 — Soñó una voz: «Coge esa majayura, o morirás». No hizo caso. (CITA)
  escp("b13a", [ref("hijo_del_ipuana"), ref("chinchorro"), ref("enramada")], {
    comun: `Noche cerrada. SOÑÓ UNA VOZ: el sueño se cuenta desde fuera, con él dormido en el chinchorro, no con visiones dibujadas. Objeto ancla: la cara dormida.`,
    camara: {
      a: "PLANO GENERAL nocturno de la enramada con el chinchorro colgado y él dentro, visto de lejos.",
      b: "la cámara ha AVANZADO hasta el chinchorro y ha bajado: PLANO MEDIO CORTO de su cara dormida, con el ceño moviéndose.",
    },
    ini: "desde lejos, el chinchorro cuelga de la enramada y él está dentro.",
    fin: "de cerca se le ve la cara dormida y el ceño moviéndose: está oyendo algo.",
  }, "vision dibujada, fantasma, espectro, resplandor, humo, figuras flotando, texto"),
  escp("b13b", [ref("hijo_del_ipuana"), ref("majayulu"), ref("rancheria")], {
    comun: `Mañana. LA CITA era coger a esa majayura o morir, y NO LE PRESTÓ ATENCIÓN: ella está ahí, a la vista, y él pasa de largo sin mirarla. Todo el final cuelga de este plano. Objeto ancla: el cruce sin mirada.`,
    camara: {
      a: "PLANO MEDIO de una majayura de pie junto a la enramada, quieta, mirando hacia el camino.",
      b: "la cámara ha hecho un PANORÁMICO al camino y ha retrocedido: PLANO GENERAL con él pasando de largo a caballo sin volver la cabeza y ella quedándose atrás en el cuadro.",
    },
    ini: "una majayura está de pie junto a la enramada, quieta, mirando al camino.",
    fin: "él pasa de largo a caballo sin volver la cabeza y ella se queda atrás en el cuadro.",
  }, "romance, insinuacion, seduccion, desnudez, bruja, presagio dibujado"),

  // b14 — Lo invitaron a una cacería de venado. Subió su perra al anca.
  escp("b14a", [ref("hijo_del_ipuana"), ref("primeros_wayuu"), ref("caballo")], {
    comun: `Mañana. LO INVITARON A UNA CACERÍA DE VENADO: cinco o seis jinetes juntándose, ambiente de salida, nada solemne. Objeto ancla: los caballos reuniéndose.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos hombres hablándose a caballo, muy cerca uno del otro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con seis jinetes reunidos en la arena y los caballos moviéndose en círculo.",
    },
    ini: "dos hombres se hablan a caballo, muy cerca.",
    fin: "desde arriba se ve el grupo entero: seis jinetes reunidos y los caballos moviéndose en círculo.",
  }, "uniformes, cuernos de caza, jaurias europeas, escopetas modernas"),
  escp("b14b", [ref("hijo_del_ipuana"), ref("perros"), ref("caballo")], {
    comun: `Mañana. SUBIÓ SU PERRA CAZADORA AL ANCA Y SE FUE: el detalle exacto del canon, y es un gesto de afecto y de oficio. Objeto ancla: la perra en el anca.`,
    camara: {
      a: "PLANO MACRO de las manos levantando a la perra por el pecho para subirla.",
      b: "la cámara ha RETROCEDIDO y ha girado al costado: PLANO GENERAL lateral del caballo saliendo al trote con la perra ya sentada en el anca detrás del jinete.",
    },
    ini: "las manos levantan a la perra por el pecho para subirla.",
    fin: "de costado se ve al caballo salir al trote con la perra sentada en el anca detrás del jinete.",
  }, "jauria, perros de presa, collares de puas, crueldad animal"),

  // b15 — Junto al arroyo de Wina salió el venado. Lo atropelló con el caballo.
  esc("b15a", [ref("wina"), ref("venado"), ref("arroyo_seco")], {
    comun: `Mediodía. JUNTO AL ARROYO DE WINA SALIÓ EL VENADO: arranca de golpe desde la mata. Objeto ancla: el venado saliendo.`,
    camara: {
      a: "PLANO MACRO de las patas traseras de un venado impulsándose desde la arena del cauce.",
      b: "la cámara ha RETROCEDIDO y ha subido siguiéndolo: PLANO GENERAL del cauce con el venado ya en carrera abierta y el polvo levantándose detrás.",
    },
    ini: "las patas traseras del venado se impulsan desde la arena del cauce.",
    fin: "desde arriba, el venado va ya en carrera abierta y levanta polvo detrás.",
  }, "sangre, herida, animal sufriendo, venado fantastico, cuernos enormes"),
  escp("b15b", [ref("hijo_del_ipuana"), ref("caballo"), ref("venado"), ref("wina")], {
    comun: `Mediodía. LO PERSIGUIÓ A GALOPE Y LO ATROPELLÓ CON EL CABALLO: es un choque entre dos animales lanzados, y es un error de jinete. El impacto NO se muestra. Objeto ancla: la distancia que se cierra.`,
    camara: {
      a: "PLANO MEDIO lateral del galope con el caballo ganando terreno y el venado a dos cuerpos por delante.",
      b: "la cámara se ha ADELANTADO y ha subido a picado: PLANO GENERAL cenital con los dos animales ya casi encima uno del otro y el polvo cerrándose alrededor.",
    },
    ini: "a la carrera, el caballo gana terreno y el venado va dos cuerpos por delante.",
    fin: "desde arriba los dos animales están ya casi encima uno del otro y el polvo se cierra alrededor.",
  }, "impacto, sangre, animales despedazados, cuerpo volando, gore"),

  // b16 — Cayó y murió allí mismo. Sólo el caballo quedó vivo.
  esc("b16a", [ref("wina"), ref("arroyo_seco")], {
    comun: `Mediodía. EN EL CHOQUE CAYÓ Y MURIÓ ALLÍ MISMO. No se muestra: el cuadro es el polvo asentándose sobre la arena revuelta. Objeto ancla: el polvo bajando.`,
    camara: {
      a: "PLANO MACRO del polvo suspendido bajando sobre la arena revuelta, con la luz atravesándolo.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cauce con el surco largo que dejó el arrastre y nadie en cuadro.",
    },
    ini: "el polvo suspendido baja sobre la arena revuelta y la luz lo atraviesa.",
    fin: "desde arriba se ve el surco largo que dejó el arrastre en el cauce, y no hay nadie.",
  }, "cuerpo, cadaver, sangre, boca, orejas, herida, gore"),
  escp("b16b", [ref("caballo"), ref("perros"), ref("wina")], {
    comun: `Mediodía. SÓLO EL CABALLO QUEDÓ VIVO: está de pie, temblando, con las riendas sueltas, y la perra da vueltas cerca. El dato de la sangre lo lleva la narración, no la imagen. Objeto ancla: las riendas sueltas.`,
    camara: {
      a: "PLANO MACRO de unas riendas sueltas colgando y arrastrando por la arena.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cauce con el caballo solo de pie, la perra dando vueltas alrededor y nadie más.",
    },
    ini: "unas riendas sueltas cuelgan y arrastran por la arena.",
    fin: "desde arriba, el caballo está solo de pie y la perra da vueltas alrededor: no hay nadie más.",
  }, "cadaver, sangre, herida, animal sufriendo, gore"),

  // b17 — Ninguno sabía que había que ponerlo encima del cardón.
  escp("b17a", [ref("primeros_wayuu"), ref("wina"), ref("arroyo_seco")], {
    comun: `Tarde. NINGUNO SABÍA QUE HABÍA QUE PONERLO ENCIMA DEL CARDÓN: los compañeros llegan y hacen lo normal, que es justo lo que no había que hacer. El error es de ignorancia, no de mala fe. Objeto ancla: las caras que no saben.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos caras mirando al suelo, serias, sin saber qué hacer.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del cauce con cinco personas de pie en corro alrededor de un punto y, a veinte pasos, un cardón alto al que nadie mira.",
    },
    ini: "dos caras miran al suelo, serias, sin saber qué hacer.",
    fin: "desde arriba: cinco personas en corro alrededor de un punto y, a veinte pasos, un cardón alto al que ninguna mira.",
  }, "cuerpo, cadaver, sangre, camilla, ataud, llanto teatral"),
  esc("b17b", [ref("cementerio"), ref("llanura_cardonal")], {
    comun: `Tarde. LO DEJARON EN LA ARENA Y QUEDÓ DEFINITIVAMENTE MUERTO: la arena queda lisa, como en b10a, y esta vez para siempre. Sin figuras. Objeto ancla: la arena que no se mueve.`,
    camara: {
      a: "PLANO CENITAL MACRO de arena removida y luego alisada, con la última huella de una mano al borde.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del sitio al atardecer, quieto, sin ningún rastro saliendo de él.",
    },
    ini: "arena removida y luego alisada, con la última huella de una mano en el borde.",
    fin: "desde muy arriba, el sitio está quieto al atardecer y no sale ningún rastro de él.",
  }, "fantasma, esqueleto, lapida, cruz, cuerpo, ataud"),

  // b18 — Puesto sobre el cardón habría resucitado. No creyó el sueño.
  esc("b18a", [ref("cardon"), ref("llanura_cardonal")], {
    comun: `Última luz. LA PRIMERA CONDICIONAL: puesto sobre el cardón habría resucitado. El mito TERMINA MIDIENDO LO QUE NO PASÓ, así que el cuadro es el cardón VACÍO —el mismo de b9b—, esperando algo que nadie le puso. Objeto ancla: la copa vacía del cardón.`,
    camara: {
      a: "PLANO CENITAL MACRO de la copa de un brazo de cardón, con las espinas y nada encima.",
      b: "la cámara se ha ELEVADO y ha retrocedido: GRAN PLANO GENERAL del cardonal al atardecer con decenas de cardones de pie y todos vacíos.",
    },
    ini: "la copa del brazo del cardón, con sus espinas y nada encima.",
    fin: "desde arriba, el cardonal entero al atardecer tiene decenas de cardones de pie y todos están vacíos.",
  }, "cuerpo sobre el cardon, cadaver, resurreccion dibujada, resplandor, aureola, buitres"),
  escp("b18b", [ref("majayulu"), ref("rancheria"), ref("llanura_cardonal")], {
    comun: `Última luz. LA SEGUNDA CONDICIONAL: con la majayura no le habría pasado nada. NO CREYÓ EL SUEÑO, y ése es el final. El cuadro cierra con ella todavía ahí, de pie donde estaba, y el camino vacío. Objeto ancla: ella, que sigue en su sitio.`,
    camara: {
      a: "PLANO MEDIO de la majayura de pie junto a la enramada, en la misma postura de b13b, mirando al camino.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final con ella pequeña junto a la enramada y el camino entero vacío hasta el horizonte.",
    },
    ini: "la majayura sigue de pie junto a la enramada, en la misma postura, mirando al camino.",
    fin: "desde muy arriba, ella es pequeña junto a la enramada y el camino está vacío hasta el horizonte.",
  }, "romance, boda, aureola, fantasma, monumento, texto, moraleja dibujada"),
]);
