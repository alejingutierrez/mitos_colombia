// Keyframes de Bachué — 9 bloques × 2 escenas × 2 cuadros = 36 imágenes ≈ 90 s.
// Guion: guion-bachue-v6.json (N=9) · Acta: acta-bachue.json (15 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// REHECHO: este mito ya tenía un video producido con la tubería vieja. Se
// rehace entero con la estructura nueva, por decisión del usuario del
// 2026-09-17. El spec viejo (`muisca-bachue-escenas.mjs`, ids descriptivos y
// un cuadro por escena) queda como estaba, sin tocar, porque de él salió el
// video que está publicado.
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · LA CITA es «el agua es de todos», la única que trae el canon. La v5 puso
//   en su boca una frase inventada y la v6 lo corrige: es exactamente el tipo
//   de invención que el acta existe para atrapar.
// · Bachué NO es una diosa que castiga ni que promete: lo que deja es
//   consejo. Nada de aureolas, milagros ni entregas de semillas.
// · El niño que sale con ella del agua ES DESPUÉS SU COMPAÑERO. La fuente lo
//   dice sin rodeos y el guion no lo suaviza ni lo subraya.
// · La despedida NO es una muerte: entran los dos, se vuelven serpientes y el
//   agua se cierra detrás. La laguna GUARDA, no traga.
// · Iguaque NO es escenario: es de donde salen y adonde vuelven. La imagen
//   sostiene el páramo, los frailejones y la niebla, NO un templo.
//
// DESLINDE CONTRA `creacion-muiscas` Y `la-madre-de-los-hombres`: aquéllos
// cuentan la costura de los dos orígenes y la enseñanza. Aquí el mito es el
// CICLO del agua: sale, puebla y vuelve, y por eso el primer y el último par
// son el mismo sitio.
//
// GUION DE LUZ: silencio de Iguaque antes de todo → círculos en el agua →
// primer fuego → años de casa → caminos que se llenan → consejo → trenza de
// plata → subida con la multitud → agua que se cierra.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-bachue-v4-escenas";
export const OUT_DIR = "muiscas/videos/bachue/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; aureola, resplandor, rayos, milagros, diosa flotando; templos, altares, idolos, culto; serpientes monstruosas, colmillos, lenguas bifidas amenazantes; ahogamiento, forcejeo, cadaveres, duelo, llanto colectivo; bebes de pecho o recien nacidos en primer plano; escenas de alcoba, desnudez, sexualizacion";
export const PALETTE =
  "azul mineral de laguna de paramo, verde de frailejon, blanco de niebla, crema de algodon crudo, pardo de barro y paja, naranja de fogon; sin saturacion ni neones";

const BACHUE =
  "LA MISMA Bachué adulta de la referencia (mujer de rostro sereno y firme, pelo negro largo, manta de algodón crudo anudada al hombro, descalza)";
const ANCIANA =
  "LA MISMA Bachué anciana de la referencia (mujer mayor, pelo blanco en trenza, espalda algo encorvada, manta de algodón crudo anudada al hombro, descalza)";
const COMPANERO =
  "EL MISMO compañero anciano de la referencia (hombre mayor, pelo blanco, manta de algodón crudo al hombro, descalzo)";

export const ITEMS = armar([
  // b1 — No había caminos. Una laguna quieta, cuidando la vida.
  esc("b1a", [ref("laguna_iguaque_pano"), ref("laguna_iguaque_A")], {
    comun: "Antes del primer bohío. LA MISMA laguna de Iguaque de la referencia guardando silencio, con la niebla pegada al agua y el páramo alrededor. Objeto ancla: la superficie quieta.",
    camara: {
      a: "PLANO MACRO de la superficie inmóvil con la niebla deslizándose a un palmo de ella.",
      b: "la cámara se ha ELEVADO en vertical hasta un GRAN PLANO GENERAL de la sierra fría, con la laguna encajada entre los frailejones y las cumbres cubiertas.",
    },
    ini: "el agua está lisa y la niebla pasa por encima sin rizarla.",
    fin: "desde arriba se ve la sierra entera con la laguna en su hueco: no hay una casa, ni un camino, ni un humo en ninguna parte.",
  }, "templos, altares, personas, barcas, aureola, dramatismo"),
  esc("b1b", [ref("altiplano_noche"), ref("sabana_cultivos")], {
    comun: "Nadie había hollado los caminos del altiplano. La falta se cuenta con el suelo sin pisar. Objeto ancla: la tierra sin una huella.",
    camara: {
      a: "PLANO MACRO del pasto y la tierra del altiplano, con la hierba entera y sin una sola pisada.",
      b: "la cámara se ha ELEVADO muchísimo hasta un GRAN PLANO GENERAL en picado del altiplano completo, sin un camino, sin un surco y sin un humo.",
    },
    ini: "la hierba está entera y en la tierra no hay ni una marca.",
    fin: "desde muy arriba el altiplano entero está sin caminos, sin sembrados y sin casas: nadie ha pasado todavía por aquí.",
  }, "personas, casas, humo, caminos, animales domesticos, ruinas"),

  // b2 — El agua se abrió. Salió Bachué con un niño de la mano.
  esc("b2a", [ref("laguna_iguaque_A"), ref("laguna_iguaque_pano")], {
    comun: "Una mañana la superficie se abre DESDE EL CENTRO. Objeto ancla: los círculos.",
    camara: {
      a: "PLANO MACRO del centro del agua con los primeros círculos abriéndose desde un punto, sin que se vea qué los hace.",
      b: "la cámara se ha ELEVADO hasta un CENITAL ALTO sobre la laguna: los círculos se han extendido hasta las orillas y ocupan el agua entera.",
    },
    ini: "unos círculos pequeños empiezan a abrirse desde un punto del centro.",
    fin: "desde arriba, los círculos han llegado ya a las cuatro orillas y la laguna entera se mueve desde el mismo punto.",
  }, "explosion, resplandor, figura emergiendo con luz, magia, aureola"),
  escp("b2b", [ref("kf_b2_emerge"), ref("laguna_iguaque_B"), ref("companero_nino")], {
    comun: `${BACHUE} YA EN LA ORILLA, de pie sobre la hierba y con su manta puesta, llevando de la mano a un niño pequeño que también está en tierra y vestido con su manta. Se cuenta a media distancia y de espaldas. Objeto ancla: las dos manos unidas.`,
    camara: {
      a: "PLANO GENERAL LARGO a media distancia desde detrás, los dos pequeños y de espaldas en la orilla, con los frailejones en primer término.",
      b: "la cámara ha RODEADO la orilla hasta el otro costado, sin acercarse: PLANO GENERAL a media distancia desde el lado, con los dos de perfil y el agua ya lisa detrás de ellos.",
    },
    ini: "a media distancia y de espaldas, los dos están quietos en la hierba mirando el valle.",
    fin: "desde el otro lado de la orilla se les ve de perfil, todavía a media distancia y de la mano, con el agua ya completamente lisa detrás.",
  }, "primeros planos de rostro, figuras dentro del agua, cuerpos mojados, desnudez, bebe en brazos, aureola"),

  // b3 — Armaron su casa. El fuego les contaba historias.
  escp("b3a", [ref("bachue_adulta"), ref("companero_nino"), ref("casa_barro_paja")], {
    comun: `Bajan al llano y levantan una casa de barro y paja. Objeto ancla: la casa que se levanta.`,
    camara: {
      a: "PLANO MACRO de unas manos apretando el barro contra las varas de una pared a medio hacer.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del claro con la casa ya terminada, el techo cónico de paja puesto y el valle vacío alrededor.",
    },
    ini: "unas manos aprietan el barro contra las varas de la pared.",
    fin: "desde lejos la casa está terminada, con su techo de paja, sola en mitad de un valle en el que no hay ninguna otra.",
  }, "casa monumental, ceremonia, multitud, herramientas metalicas, aureola"),
  escp("b3b", [ref("bachue_adulta"), ref("companero_nino"), ref("altiplano_noche")], {
    comun: `Encienden fuego POR PRIMERA VEZ sobre aquellos montes, y de noche el fuego les cuenta historias bajo las estrellas. A media distancia y de espaldas. Objeto ancla: la primera llama.`,
    camara: {
      a: "PLANO MACRO de una chispa prendiendo en la yesca y la primera llama levantándose.",
      b: "la cámara ha RETROCEDIDO y ha basculado hacia arriba: PLANO GENERAL nocturno a media distancia con las dos figuras de espaldas junto al fuego y el cielo estrellado ocupando dos tercios del cuadro.",
    },
    ini: "la chispa prende en la yesca y se levanta la primera llama.",
    fin: "a media distancia y de espaldas, las dos figuras están junto al fuego y encima queda un cielo estrellado enorme: es la única luz en todo el monte.",
  }, "hoguera enorme, incendio, ceremonia, aureola, multitud"),

  // b4 — El niño creció y se volvió su compañero. Nació toda la gente.
  escp("b4a", [ref("bachue_adulta"), ref("companero_adulto"), ref("casa_barro_paja")], {
    comun: `El niño crece junto a ella y, cuando su voz se hace grave, unen sus vidas. La fuente lo dice en una línea y el guion tampoco lo esconde ni lo subraya: dos adultos trabajando juntos delante de su casa. Objeto ancla: las cuatro manos en el mismo trabajo.`,
    camara: {
      a: "PLANO MACRO de cuatro manos adultas tensando juntas la misma cuerda de fique sobre el techo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de los dos adultos de pie, uno junto al otro, mirando la casa que acaban de reforzar.",
    },
    ini: "cuatro manos adultas tiran de la misma cuerda sobre el techo.",
    fin: "los dos están de pie hombro con hombro delante de la casa, adultos los dos, mirando lo que acaban de hacer.",
  }, "escena de alcoba, beso, desnudez, boda, ceremonia, escandalo dibujado"),
  escp("b4b", [ref("familias_muiscas"), ref("casa_barro_paja"), ref("poblado_nuevo")], {
    comun: "Nacían cuatro hijos de un parto; en otro, seis. Y la casa quedó chica. Se cuenta con el tamaño, no con los partos. Objeto ancla: la casa original desbordada.",
    camara: {
      a: "PLANO MEDIO de la puerta única de la casa, con gente entrando y saliendo apretada.",
      b: "la cámara se ha ELEVADO hasta un PICADO ALTO: la casa original en el centro y, alrededor, cuatro casas nuevas a medio levantar y gente repartida por todas.",
    },
    ini: "por la única puerta entra y sale gente sin parar, casi sin caber.",
    fin: "desde arriba la casa original ha quedado en medio de otras cuatro a medio hacer, con la gente repartida entre todas.",
  }, "partos explicitos, sangre, bebes en primer plano, hacinamiento miserable"),

  // b5 — Donde paraba nacía un pueblo. Sus pies sabían dónde estaba el agua.
  escp("b5a", [ref("bachue_adulta"), ref("familias_muiscas"), ref("sendero_territorio")], {
    comun: `Toman el camino y van dejando familias y fogones por laderas, valles y sabanas. Objeto ancla: los fogones que quedan atrás.`,
    camara: {
      a: "PLANO MACRO de un fogón recién encendido en un claro, con dos figuras quedándose junto a él.",
      b: "la cámara ha RETROCEDIDO y ha subido en un travelling largo: GRAN PLANO GENERAL en picado del territorio con cuatro fogones encendidos en cuatro sitios distintos y un grupo pequeño todavía en marcha entre ellos.",
    },
    ini: "un fogón nuevo arde en un claro con dos figuras quedándose a su lado.",
    fin: "desde arriba hay cuatro fogones encendidos repartidos por laderas y valles, y un grupo que sigue andando hacia el siguiente sitio.",
  }, "procesion ceremonial, aureola, estandartes, multitud aclamando"),
  escp("b5b", [ref("bachue_adulta"), ref("acequia_bosa"), ref("sabana_cultivos")], {
    comun: `Sus pies sabían dónde estaba escondida el agua. Es conocimiento, no magia: se agacha, comprueba y acierta. Objeto ancla: sus pies y la tierra.`,
    camara: {
      a: "PLANO MACRO de su pie descalzo apretando la tierra en un punto concreto, notando la humedad del suelo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL del mismo sitio con un pozo abierto ahí y agua asomando en el fondo, y gente cavando alrededor.",
    },
    ini: "el pie descalzo aprieta la tierra en un punto y nota que cede.",
    fin: "en ese mismo punto hay ahora un hoyo abierto con agua en el fondo y gente cavando alrededor: el sitio era el bueno.",
  }, "varita de zahori, magia, resplandor, aureola, milagro, agua que brota sola"),

  // b6 — Convivir cuesta más que construir. Medió disputas.
  escp("b6a", [ref("bachue_adulta"), ref("familias_muiscas"), ref("poblado_nuevo")], {
    comun: `Enseña a su gente que CONVIVIR CUESTA MÁS QUE CONSTRUIR. Las dos cosas se ven juntas para que se compare. Objeto ancla: una casa terminada y una disputa sin resolver.`,
    camara: {
      a: "PLANO MEDIO de una casa recién terminada, con el techo puesto y gente apartándose satisfecha.",
      b: "la cámara ha hecho un PANEO LATERAL hasta el patio de al lado: PLANO MEDIO de dos personas discutiendo delante de esa misma casa, sin que nadie las resuelva.",
    },
    ini: "la casa está terminada y los que la levantaron se apartan a mirarla.",
    fin: "en el patio de al lado, dos discuten delante de esa misma casa y nadie sabe cómo pararlo: eso es lo que cuesta más.",
  }, "sermon, altar, aureola, tablas de la ley, arrodillarse"),
  escp("b6b", [ref("bachue_adulta"), ref("familias_muiscas"), ref("acequia_bosa")], {
    comun: `Media disputas, siembra el consejo y recuerda que NADIE GUARDA EL AGUA SOLO PARA SÍ. Se ve en el agua repartida y en su postura de escuchar. Objeto ancla: el agua que se parte en dos.`,
    camara: {
      a: "PLANO MEDIO de ella sentada más baja que los dos que discuten, escuchándolos sin hablar.",
      b: "la cámara ha girado y BAJADO hasta el suelo: PLANO MACRO del punto donde la acequia se parte en dos ramales con una piedra plana en el medio, llevando agua a los dos lados.",
    },
    ini: "está sentada más baja que los dos que discuten y los escucha sin abrir la boca.",
    fin: "en el suelo, una piedra plana parte el agua en dos ramales iguales que se van hacia dos parcelas distintas.",
  }, "juicio, tribunal, trono, castigo, aureola, sentencia"),

  // b7 — La trenza de plata. El compañero necesitó bastón.
  escp("b7a", [ref("bachue_anciana"), ref("bachue_adulta")], {
    comun: `El cabello de ${ANCIANA} pierde el color. Los años se cuentan en un solo objeto: la trenza. Objeto ancla: la trenza.`,
    camara: {
      a: "PLANO MACRO de una trenza negra y espesa, recién hecha.",
      b: "la cámara ha RETROCEDIDO y ha subido en un movimiento que también salta en el tiempo: PLANO MEDIO CORTO de la misma trenza ya blanca sobre el hombro de ella, con la cara envejecida.",
    },
    ini: "la trenza es negra y espesa, muy de cerca.",
    fin: "la misma trenza está ahora blanca sobre su hombro y la cara que la lleva ha envejecido: entre los dos cuadros ha pasado una vida.",
  }, "aureola, resplandor, transformacion magica, rejuvenecimiento"),
  escp("b7b", [ref("companero_anciano"), ref("sendero_territorio"), ref("bachue_anciana")], {
    comun: `Y ${COMPANERO} necesita un bastón para subir la cuesta. Objeto ancla: el bastón y la cuesta.`,
    camara: {
      a: "PLANO MACRO de la punta de un bastón de madera clavándose en la tierra de una cuesta, con un pie viejo al lado.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL de la ladera con los dos viejos subiendo despacio, él apoyado en el bastón y ella a su lado.",
    },
    ini: "la punta del bastón se clava en la tierra de la cuesta, junto a un pie viejo.",
    fin: "desde lejos los dos suben la ladera despacio, él apoyado en el bastón y ella al lado, sin adelantarse.",
  }, "agonia, enfermedad, llanto, aureola, muerte, camilla"),

  // b8 — Todo el pueblo la acompañó. «El agua es de todos». (CITA)
  escp("b8a", [ref("familias_muiscas"), ref("bachue_anciana"), ref("companero_anciano"), ref("sendero_territorio")], {
    comun: `Reúnen a toda la descendencia y la multitud sube con ellos hasta Iguaque. Nadie los empuja y nadie llora. Objeto ancla: la fila que sube.`,
    camara: {
      a: "PLANO MEDIO de los dos viejos delante, subiendo, con las primeras filas detrás de ellos.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado de la ladera con la fila serpenteando entera desde el valle hasta el filo del páramo.",
    },
    ini: "los dos viejos van delante y detrás se ven las primeras filas.",
    fin: "desde muy arriba la fila baja serpenteando hasta el valle: es toda la descendencia, y la cabeza de la fila son los dos.",
  }, "procesion religiosa, estandartes, cruces, llanto colectivo, duelo"),
  escp("b8b", [ref("bachue_anciana"), ref("familias_muiscas"), ref("laguna_iguaque_B")], {
    comun: `Junto al agua pide paz, memoria y el cuidado de las leyes y el fuego, y dice que EL AGUA ES DE TODOS COMO LA MEMORIA. Ésta es la única cita que trae el canon. Objeto ancla: su cara.`,
    camara: {
      a: "PLANO GENERAL de la orilla con ella pequeña de espaldas y la multitud en la ladera detrás.",
      b: "la cámara ha RODEADO hasta ponerse delante y ha avanzado: PRIMER PLANO de su cara diciendo la frase, con las siluetas de la multitud desenfocadas detrás.",
    },
    ini: "está de espaldas en la orilla con la multitud en la ladera detrás de ella.",
    fin: "de cerca se la ve terminar la frase, con la cara seca y sin lágrimas: es consejo y no promesa.",
  }, "aureola, pulpito, sermon, arrodillarse, milagro, resplandor"),

  // b9 — Entraron al agua. Dos serpientes y la calma.
  escp("b9a", [ref("bachue_anciana"), ref("companero_anciano"), ref("laguna_iguaque_B")], {
    comun: `${ANCIANA} toma la mano de ${COMPANERO} y entran al agua DESPACITO. A media distancia y de espaldas. Objeto ancla: las dos manos unidas.`,
    camara: {
      a: "PLANO MACRO de las dos manos viejas cerrándose una sobre otra.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO GENERAL a media distancia con los dos de espaldas entrando en el agua hasta la cintura y la multitud quieta en la orilla.",
    },
    ini: "las dos manos viejas se cierran la una sobre la otra.",
    fin: "a media distancia y de espaldas, el agua les llega a la cintura y siguen andando; en la orilla, nadie se mueve ni los llama.",
  }, "ahogamiento, forcejeo, llanto, gritos, desnudez, duelo"),
  esc("b9b", [ref("serpientes_laguna"), ref("laguna_iguaque_B"), ref("laguna_iguaque_pano")], {
    comun: "Dos grandes serpientes nadan UNA VUELTA alrededor de la laguna y se hunden, y queda la calma. NO es una muerte: el agua se cierra detrás y la laguna GUARDA. Objeto ancla: el círculo que dibujan.",
    camara: {
      a: "PLANO MEDIO a ras del agua con los dos cuerpos largos y tranquilos nadando juntos hacia el centro.",
      b: "la cámara se ha ELEVADO en vertical hasta un CENITAL ALTO de la laguna entera: el círculo que dejaron sus estelas se cierra y el agua vuelve a quedar lisa, exactamente como en el primer cuadro del video.",
    },
    ini: "los dos cuerpos largos nadan juntos y tranquilos hacia el centro.",
    fin: "desde arriba han dado la vuelta entera a la laguna y se han hundido: el círculo de las estelas se cierra y el agua queda lisa, igual que al principio.",
  }, "monstruos, colmillos, lenguas bifidas, ataque, sangre, ahogamiento, tumbas"),
]);
