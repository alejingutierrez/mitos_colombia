// Keyframes de Los dominios de Juyá — 18 bloques × 2 escenas × 2 cuadros
// = 72 imágenes ≈ 180 s.
// Guion: guion-los-dominios-de-juya-v2.json (N=18) · Acta: acta-los-dominios-de-juya.json (36 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _wayuu-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · ULÉPALA LLEGA POR HAMBRE Y POR RASTRO, NO POR ELECCIÓN: sigue huellas de
//   ganado para no morir en el desierto.
// · JUYÁ NO ES UN DIOS SEVERO: JUEGA CON EL HUÉSPED, le convierte el banco en
//   jabalí y SE RÍE. LA DOMESTICACIÓN EMPIEZA EN BROMA.
// · LOS ANIMALES DE CAZA **SON** JÓVENES, CACTOS, TUNAS, MUJERES. El
//   aprendizaje consiste en VER LO QUE HAY DEBAJO DE LA FORMA, y el canon lo
//   repite cinco veces. Cada par de estos bloques es exactamente eso: A muestra
//   una cosa y B muestra la otra, SIN transición ni efecto.
// · ULÉPALA FALLA POR PIEDAD, NO POR TORPEZA: vuelve sin nada porque los ve
//   cortejándose, y duda de torcerle el cuello a las majayuras.
// · CADA ACIERTO DEJA UNA ETIOLOGÍA VISIBLE: las auyamas tiernas y jechas, las
//   flores amarillas que fueron labios, el murmullo del viento entre las hojas.
// · EL DESENLACE NO ES DOMINIO SINO OFICIO: enlazar, domar, arrear, tejer
//   sogas, cultivar, recoger miel, cantar jayeechis. LO QUE GANA ES UN
//   REPERTORIO DE TRABAJO, y el inventario lo llama «la lista de vida que el
//   encargo pide, y sale del propio texto».
// · LA ADOPCIÓN CIERRA EL RELATO PERO NO BORRA EL COMIENZO: Ulépala sigue
//   subiendo a las colinas a tocar sonidos de amores y de recuerdos.
//
// CONTRASTE CROMÁTICO QUE MANDA EN TODO EL SPEC: el inventario define los
// dominios de Juyá como «LA ANTÍTESIS CROMÁTICA EXACTA DEL CORPUS: verde,
// húmedo, nublado, gigante; ES EL CONTRASTE QUE HACE LEGIBLE EL CALOR DEL
// RESTO». Los dos primeros cuadros son desierto blanco; de b2 en adelante el
// mundo es verde y todo está sobredimensionado.
//
// El «casquete empenachado» de los jóvenes es del canon y el inventario obliga
// a declararlo: se resuelve como CASQUETE CEÑIDO CON PENACHO CORTO, y NO como
// tocado de plumas de praderas norteamericanas.
//
// DESLINDE CON `ulepala` y `el-viaje-del-mas-alla`: la caza que es gente
// aparece en las tres. Son fichas distintas y aquí el tema es EL APRENDIZAJE.

import { CONTEXTO, DIRECCION, AVOID_BASE, PALETTE_BASE, ref, esc, escp, armar } from "./_wayuu-comun.mjs";

export const SPEC_NAME = "wayuu-dominios-juya-escenas";
export const OUT_DIR = "wayuu/videos/los-dominios-de-juya/keyframes";
export { CONTEXTO, DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; transformacion a la vista, metamorfosis dibujada, hibrido planta-persona, cuerpo a medias, resplandor, humo, particulas; tocado de plumas de praderas norteamericanas, penacho alto, war bonnet; dios severo, trono, aureola, rayos, juicio, adoracion, arrodillarse; gigante deforme, ogro, monstruo, colmillos, ojos brillantes; sangre, degollamiento, cuellos rotos a la vista, agonia, gore; paraiso tropical, cascadas, palmeras de postal, arcoiris, selva amazonica; escuela, maestro y alumno, pizarra, texto, rotulos";
export const PALETTE =
  PALETTE_BASE + "; LOS DOMINIOS DE JUYA SON LA ANTITESIS DEL CORPUS: verde humedo, gris de nube baja, pasto alto y todo sobredimensionado, contra el blanco calcareo del desierto de los dos primeros cuadros; el amarillo de las flores de auyama es el unico acento nuevo";

const UL =
  "EL MISMO Ulépala de la referencia (hombre wayúu adulto, delgado, manta corta terciada de algodón crudo, faja tejida, descalzo), pequeño en el encuadre casi siempre porque todo lo de allí es más grande que él";
const JY =
  "EL MISMO Juyá de la referencia (hombre muy alto y panzudo, de rostro bellamente feo, CABELLERA BLANCA COMO ESPUMA, manta grande de algodón crudo, VARA DE BEJUCO en la mano), de trato burlón y nunca severo";

export const ITEMS = armar([
  // b1 — Andaba perdido por un desierto. Vio huellas de ganado hacia el norte.
  escp("b1a", [ref("ulepala"), ref("llanura_cardonal"), ref("cardon")], {
    comun: `Sol blanco. ULÉPALA ANDABA PERDIDO POR UN DESIERTO, SIN SABER DE DÓNDE VENÍA: los dos primeros cuadros son el mundo seco del resto del corpus, para que después el verde se note. ${UL}. Objeto ancla: la figura sola en lo blanco.`,
    camara: {
      a: "PLANO DETALLE de unos pies descalzos arrastrándose por arena blanca y caliente.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado del desierto con él diminuto y sin rumbo, y ni un accidente en el terreno.",
    },
    ini: "unos pies descalzos se arrastran por arena blanca y caliente.",
    fin: "desde muy arriba, él va diminuto y sin rumbo por el desierto, y no hay un accidente en el terreno.",
  }, "espejismos, oasis, dunas de arabia, camellos, buitres, agonia"),
  esc("b1b", [ref("ganado_vacuno"), ref("llanura_cardonal"), ref("del_camino")], {
    comun: `Sol blanco. VIO HUELLAS DE GANADO QUE IBAN AL NORTE: LLEGA POR HAMBRE Y POR RASTRO, no por elección. Objeto ancla: el tropel de huellas.`,
    camara: {
      a: "PLANO CENITAL MACRO de decenas de huellas de pezuña superpuestas en la arena, todas en la misma dirección.",
      b: "la cámara se ha ELEVADO y ha avanzado siguiéndolas: GRAN PLANO GENERAL en picado del rastro cruzando el desierto de sur a norte, ancho como un camino.",
    },
    ini: "decenas de huellas de pezuña superpuestas en la arena, todas en la misma dirección.",
    fin: "desde arriba, el rastro cruza el desierto de sur a norte, ancho como un camino.",
  }, "mapas, flechas, señales, resplandor, magia, portal"),

  // b2 — Las siguió. Al atardecer halló pastizales y corrales descomunales.
  esc("b2a", [ref("dominio_de_juya"), ref("llanura_cardonal")], {
    comun: `Atardecer. AQUÍ CAMBIA EL MUNDO: EL CORTE DEL BLANCO AL VERDE es la antítesis cromática del corpus entero. Objeto ancla: la línea donde empieza el pasto.`,
    camara: {
      a: "PLANO MACRO del canto exacto donde la arena blanca da paso a pasto alto y húmedo, con las gotas en las hojas.",
      b: "la cámara se ha ELEVADO muchísimo: GRAN PLANO GENERAL en picado con el desierto blanco a un lado, los pastizales verdes al otro y una nube baja cubriéndolos.",
    },
    ini: "el canto exacto donde la arena blanca da paso a pasto alto y húmedo, con las gotas en las hojas.",
    fin: "desde muy arriba, el desierto blanco queda a un lado, los pastizales verdes al otro y una nube baja los cubre.",
  }, "paraiso tropical, cascadas, palmeras, arcoiris, selva amazonica, resplandor"),
  escp("b2b", [ref("corral"), ref("ganado_vacuno"), ref("ulepala")], {
    comun: `Atardecer. HALLÓ PASTIZALES Y CORRALES DESCOMUNALES: TODO ESTÁ SOBREDIMENSIONADO, y él es pequeño al lado. Objeto ancla: la escala del corral contra su cuerpo.`,
    camara: {
      a: "PLANO MACRO de un horcón de corral tan grueso que no se le ve el canto, con la madera húmeda.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL en picado con corrales enormes llenos de ganado y él minúsculo junto a una esquina.",
    },
    ini: "un horcón de corral tan grueso que no se le ve el canto, con la madera húmeda.",
    fin: "desde muy arriba, los corrales son enormes y están llenos de ganado, y él es minúsculo junto a una esquina.",
  }, "arquitectura fantastica, castillo, ciudad, resplandor, gigantismo deforme"),

  // b3 — Los moradores avisaron de un bicho raro. Juyá fue y vio un hombre.
  escp("b3a", [ref("primeros_wayuu"), ref("corral"), ref("dominio_de_juya")], {
    comun: `Atardecer. LOS MORADORES AVISARON QUE UN BICHO RARO ANDABA JUNTO A LOS CORRALES: para ellos el raro es él. Objeto ancla: las caras que avisan señalando.`,
    camara: {
      a: "PLANO MEDIO CORTO de dos personas de allí, grandes, hablando deprisa y señalando hacia un lado.",
      b: "la cámara ha GIRADO siguiendo el brazo y ha retrocedido: PLANO GENERAL del corral con él agachado junto a la cerca, pequeño y quieto.",
    },
    ini: "dos personas de allí, grandes, hablan deprisa y señalan hacia un lado.",
    fin: "en esa dirección, él está agachado junto a la cerca del corral, pequeño y quieto.",
  }, "panico, monstruo, caricatura, burla, armas, violencia"),
  escp("b3b", [ref("juya"), ref("ulepala"), ref("corral")], {
    comun: `Atardecer. JUYÁ FUE Y VIO UN HOMBRE. ${JY}. Aparece entero y enorme, y la primera impresión es de tamaño, no de amenaza. Objeto ancla: la vara de bejuco.`,
    camara: {
      a: "PLANO MACRO de una vara de bejuco gruesa apoyada en el suelo, con la mano enorme encima.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con él de pie, altísimo y panzudo, y Ulépala pequeño a sus pies, mirándolo hacia arriba.",
    },
    ini: "una vara de bejuco gruesa apoyada en el suelo, con una mano enorme encima.",
    fin: "desde arriba está de pie, altísimo y panzudo, con Ulépala pequeño a sus pies mirándolo hacia arriba.",
  }, "ogro, monstruo, colmillos, ojos brillantes, aureola, trono, rayos"),

  // b4 — «¿Quién eres tú, que pisas mis dominios sin permiso?». (CITA)
  escp("b4a", [ref("juya"), ref("ulepala")], {
    comun: `Atardecer. LA CITA, y es lo que ABRE LA RELACIÓN: quién eres tú, que pisas mis dominios sin permiso. Lo dice desde arriba, en voz grande, y no da miedo del todo. Objeto ancla: su cara bellamente fea.`,
    camara: {
      a: "PLANO GENERAL de los dos con el contraste de tamaño, Ulépala sin llegarle a la cintura.",
      b: "la cámara ha SUBIDO hasta su cara y ha cerrado: PRIMER PLANO de Juyá, rostro grande y feo de un modo agradable, con la cabellera blanca como espuma alrededor.",
    },
    ini: "los dos juntos, con Ulépala sin llegarle a la cintura.",
    fin: "de muy cerca, el rostro de Juyá es grande y feo de un modo agradable, con la cabellera blanca como espuma alrededor.",
  }, "gesto de condena, rayos, aureola, trono, colmillos, monstruo, texto"),
  escp("b4b", [ref("ulepala"), ref("juya"), ref("dominio_de_juya")], {
    comun: `Atardecer. ULÉPALA, TEMBLANDO, CONTÓ LO POCO QUE SABÍA: el miedo es de estar perdido, no de estar amenazado. Objeto ancla: sus manos temblando a los lados.`,
    camara: {
      a: "PLANO MACRO de dos manos pequeñas temblando, abiertas a los lados del cuerpo.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él hablando hacia arriba, minúsculo contra el pasto alto, y la sombra enorme cayéndole encima.",
    },
    ini: "dos manos pequeñas tiemblan, abiertas a los lados del cuerpo.",
    fin: "él habla hacia arriba, minúsculo contra el pasto alto, con la sombra enorme cayéndole encima.",
  }, "terror, llanto, arrodillarse, suplicas, monstruo, violencia"),

  // b5 — Había olvidado su vida. Juyá lo hizo su huésped.
  escp("b5a", [ref("ulepala"), ref("llanura_cardonal")], {
    comun: `Atardecer. HABÍA OLVIDADO SU VIDA Y UNA MUJER LO ABANDONÓ: el olvido se cuenta con el desierto del que viene, visto un instante y sin nadie. Objeto ancla: el desierto vacío a su espalda.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara intentando acordarse, con la mirada perdida.",
      b: "la cámara ha GIRADO 180 grados y se ha elevado: GRAN PLANO GENERAL del desierto blanco por donde vino, vacío de punta a punta, sin un rastro ya.",
    },
    ini: "su cara intenta acordarse, con la mirada perdida.",
    fin: "al girar, el desierto blanco por donde vino está vacío de punta a punta y ya no queda un rastro.",
  }, "flashback dibujado, recuerdos flotando, resplandor, texto, fantasmas"),
  escp("b5b", [ref("juya"), ref("primeros_wayuu"), ref("dominio_de_juya")], {
    comun: `Anochecer. JUYÁ LO HIZO SU HUÉSPED Y LE TRAJERON UN BANCO: la hospitalidad es de verdad, y de ahí sale la broma. Objeto ancla: el banco puesto en el suelo.`,
    camara: {
      a: "PLANO MACRO de un banco bajo de madera maciza posándose en la hierba, con las patas hundiéndose un poco.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con Juyá señalando el banco y dos criadas retirándose, y él dudando.",
    },
    ini: "un banco bajo de madera maciza se posa en la hierba y las patas se hunden un poco.",
    fin: "desde arriba, Juyá señala el banco, dos criadas se retiran y él duda.",
  }, "trono, corte, sirvientes humillados, banquete, resplandor"),

  // b6 — El banco se volvió jabalí y Juyá se reía. Le colgaron un chinchorro.
  esc("b6a", [ref("maderas"), ref("dominio_de_juya")], {
    comun: `Anochecer. APENAS SE SENTÓ, EL BANCO SE VOLVIÓ JABALÍ FURIOSO: el cambio se cuenta POR CORTE —banco y luego animal en el mismo sitio—, SIN transición. LA DOMESTICACIÓN EMPIEZA EN BROMA. Objeto ancla: el mismo sitio, dos cosas.`,
    camara: {
      a: "PLANO MACRO de la madera maciza del banco con la veta y las marcas de uso.",
      b: "la cámara ha RETROCEDIDO de golpe y ha bajado: PLANO MEDIO de un jabalí furioso en ese mismo punto de la hierba, con las cerdas erizadas y los colmillos bajos.",
    },
    ini: "la madera maciza del banco, con la veta y las marcas de uso.",
    fin: "en ese mismo punto de la hierba hay un jabalí furioso, con las cerdas erizadas y los colmillos bajos.",
  }, "transformacion dibujada, humo, resplandor, particulas, monstruo, sangre"),
  escp("b6b", [ref("juya"), ref("ulepala"), ref("chinchorro")], {
    comun: `Noche. JUYÁ SE REÍA Y LE COLGARON UN CHINCHORRO ENORME: la risa es de broma buena, y el chinchorro es tan grande que él parece un muñeco dentro. Objeto ancla: el chinchorro desmesurado.`,
    camara: {
      a: "PLANO MEDIO CORTO de la cara de Juyá riéndose de buena gana, con los ojos cerrados.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la enramada con un chinchorro enorme colgado y él dentro, pequeñísimo, en el fondo de la tela.",
    },
    ini: "la cara de Juyá se ríe de buena gana, con los ojos cerrados.",
    fin: "desde arriba, un chinchorro enorme cuelga de la enramada y él está dentro, pequeñísimo, en el fondo de la tela.",
  }, "burla cruel, humillacion, caricatura, monstruo riendo, colmillos"),

  // b7 — Juyá era alto, panzudo, de rostro bellamente feo. Llevaba una vara.
  escp("b7a", [ref("juya")], {
    comun: `Mañana. EL RETRATO, que el canon da con detalle: ALTO, PANZUDO, DE ROSTRO BELLAMENTE FEO, CON LA CABELLERA BLANCA COMO ESPUMA. Objeto ancla: la cabellera blanca.`,
    camara: {
      a: "PLANO MACRO de la cabellera blanca y espumosa moviéndose con el aire húmedo, mechón a mechón.",
      b: "la cámara ha RETROCEDIDO y ha bajado: PLANO GENERAL de él entero de pie, altísimo y panzudo, con el pasto alto llegándole a media pierna.",
    },
    ini: "la cabellera blanca y espumosa se mueve con el aire húmedo, mechón a mechón.",
    fin: "desde lejos está entero y de pie, altísimo y panzudo, con el pasto alto llegándole a media pierna.",
  }, "ogro, gigante deforme, monstruo, aureola, trono, colmillos, barba de profeta"),
  esc("b7b", [ref("haz_de_varas"), ref("dominio_de_juya")], {
    comun: `Mañana. LLEVABA UNA VARA DE BEJUCO: es su objeto, y es de bejuco de verdad, retorcido y largo. Sin figuras. Objeto ancla: la vara entera.`,
    camara: {
      a: "PLANO MACRO de la fibra retorcida de un bejuco grueso, con la corteza a la vista.",
      b: "la cámara ha RETROCEDIDO a lo largo de ella: PLANO MEDIO de la vara entera apoyada contra un horcón, mucho más larga que un hombre.",
    },
    ini: "la fibra retorcida de un bejuco grueso, con la corteza a la vista.",
    fin: "la vara entera está apoyada contra un horcón y es mucho más larga que un hombre.",
  }, "cetro, baston magico, resplandor, runas, joyas, oro"),

  // b8 — Cada día se comía una vaca. A Ulépala le dio un cabrito para diez días.
  esc("b8a", [ref("ganado_vacuno"), ref("fuego_y_cocina"), ref("recipientes")], {
    comun: `Mediodía. CADA DÍA SE COMÍA UNA VACA ENTERA: la desmesura se cuenta con la olla y con el sitio, no con la comida cruda. Sin figuras. Objeto ancla: la olla del tamaño de un corral.`,
    camara: {
      a: "PLANO MACRO del borde de una olla de barro enorme, con la pared del grosor de una mano.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del fogón con la olla gigantesca sobre tres piedras del tamaño de una persona.",
    },
    ini: "el borde de una olla de barro enorme, con la pared del grosor de una mano.",
    fin: "desde arriba, la olla gigantesca está sobre tres piedras del tamaño de una persona.",
  }, "carne cruda, sangre, despiece, visceras, gula caricaturesca, gore"),
  escp("b8b", [ref("ulepala"), ref("chivos"), ref("recipientes")], {
    comun: `Mediodía. A ULÉPALA LE DIO UN CABRITO, Y LO HIZO DURAR DIEZ DÍAS: el inventario lo llama «el mejor dato de cocina del corpus». La frugalidad es lo que lo distingue. Objeto ancla: la ración diminuta y contada.`,
    camara: {
      a: "PLANO MACRO de una tira mínima de carne seca puesta en una totuma pequeña, sola.",
      b: "la cámara ha RETROCEDIDO y se ha elevado a cenital: PLANO EN PICADO de diez tiras iguales alineadas sobre una tela, una por día, y el resto guardado.",
    },
    ini: "una tira mínima de carne seca puesta en una totuma pequeña, sola.",
    fin: "desde arriba, diez tiras iguales están alineadas sobre una tela, una por día, y el resto guardado.",
  }, "hambre explotada, miseria, lastima, caricatura, burla"),

  // b9 — Juyá llegó con arco y flechas de tres clases. «Tráeme carne».
  esc("b9a", [ref("arco_flechas"), ref("dominio_de_juya")], {
    comun: `Mañana. UN DÍA JUYÁ LLEGÓ CON ARCO Y FLECHAS DE TRES CLASES: el detalle está en el canon y se ve —tres puntas distintas—. Sin figuras. Objeto ancla: las tres clases de punta.`,
    camara: {
      a: "PLANO MACRO de tres puntas de flecha distintas puestas en fila: una lisa, una dentada y una roma.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO del arco entero y el carcaj apoyados en la hierba, con las tres clases repartidas dentro.",
    },
    ini: "tres puntas de flecha distintas puestas en fila: una lisa, una dentada y una roma.",
    fin: "el arco entero y el carcaj están apoyados en la hierba, con las tres clases de flecha repartidas dentro.",
  }, "armas modernas, magia, resplandor, runas, flechas luminosas"),
  escp("b9b", [ref("juya"), ref("ulepala"), ref("dominio_de_juya")], {
    comun: `Mañana. VE AL MONTE Y TRÁEME CARNE DE CACERÍA: el encargo es de trabajo, y de ahí sale todo el aprendizaje. Objeto ancla: el arco pasando a sus manos.`,
    camara: {
      a: "PLANO MACRO del arco enorme pasando a unas manos pequeñas, que casi no lo abarcan.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL con él ya andando hacia el monte, el arco a la espalda y Juyá parado atrás, mirándolo irse.",
    },
    ini: "el arco enorme pasa a unas manos pequeñas, que casi no lo abarcan.",
    fin: "desde arriba ya anda hacia el monte con el arco a la espalda, y Juyá se queda atrás mirándolo irse.",
  }, "trono, orden severa, rayos, aureola, escuela, maestro y alumno"),

  // b10 — Halló jóvenes con penachos que cantaban. Volvió vacío.
  escp("b10a", [ref("jovenes_venado"), ref("dominio_de_juya")], {
    comun: `Luz verde del monte. EN LO TUPIDO HALLÓ JÓVENES CON PENACHOS QUE CANTABAN: son PERSONAS ENTERAS, y llevan CASQUETE CEÑIDO CON PENACHO CORTO —no tocado de plumas de praderas—. Objeto ancla: los jóvenes cortejándose.`,
    camara: {
      a: "PLANO MACRO de un casquete ceñido a una cabeza, con un penacho corto de plumas oscuras en lo alto.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con ocho jóvenes en corro, cantando y cortejándose, todos con su casquete.",
    },
    ini: "un casquete ceñido a una cabeza, con un penacho corto de plumas oscuras en lo alto.",
    fin: "desde arriba, ocho jóvenes están en corro cantando y cortejándose, todos con su casquete.",
  }, "war bonnet, penacho alto de praderas, hibrido con venado, cuernos, resplandor"),
  escp("b10b", [ref("ulepala"), ref("juya"), ref("dominio_de_juya")], {
    comun: `Tarde. Y VOLVIÓ VACÍO: FALLA POR PIEDAD, NO POR TORPEZA. Los vio cortejándose y no pudo. Objeto ancla: las manos vacías y el carcaj lleno.`,
    camara: {
      a: "PLANO MACRO del carcaj todavía lleno, con las tres clases de flecha sin tocar.",
      b: "la cámara ha RETROCEDIDO y ha subido: PLANO MEDIO de él delante de Juyá con las manos abiertas y vacías, y Juyá mirándolo desde arriba.",
    },
    ini: "el carcaj todavía lleno, con las tres clases de flecha sin tocar.",
    fin: "está delante de Juyá con las manos abiertas y vacías, y Juyá lo mira desde arriba.",
  }, "castigo, golpes, humillacion, rayos, ira divina, caricatura"),

  // b11 — «Me has decepcionado». Lo mandó por un puercoespín: había cactos.
  escp("b11a", [ref("juya"), ref("ulepala")], {
    comun: `Tarde. ME HAS DECEPCIONADO, DIJO JUYÁ: es reproche de patrón, no condena de dios. Objeto ancla: su cara de decepción, no de ira.`,
    camara: {
      a: "PLANO GENERAL de los dos con la diferencia de tamaño, él pequeño delante.",
      b: "la cámara ha SUBIDO hasta la cara de Juyá: PLANO MEDIO CORTO de su gesto de decepción, la boca torcida, sin nada de cólera.",
    },
    ini: "los dos juntos, con la diferencia de tamaño y él pequeño delante.",
    fin: "de cerca, la cara de Juyá tiene la boca torcida de decepción, sin nada de cólera.",
  }, "ira divina, rayos, gritos, castigo, aureola, trono"),
  esc("b11b", [ref("cardon"), ref("dominio_de_juya")], {
    comun: `Luz verde. LO MANDÓ POR UN PUERCOESPÍN, Y LOS JÓVENES YA NO ESTABAN: HABÍA CACTOS ERIZADOS. EL MISMO CLARO, OTRA COSA. Sin transición. Objeto ancla: el cacto erizado donde estaba el corro.`,
    camara: {
      a: "PLANO MACRO de las espinas apretadas de un cacto pequeño y redondo, erizado.",
      b: "la cámara ha RETROCEDIDO y se ha elevado, EXACTAMENTE COMO EN b10a: PLANO GENERAL del mismo claro con ocho cactos erizados repartidos donde antes estaban los jóvenes.",
    },
    ini: "las espinas apretadas de un cacto pequeño y redondo, erizado.",
    fin: "desde el mismo sitio de antes, en el claro hay ocho cactos erizados repartidos donde estaban los jóvenes.",
  }, "transformacion dibujada, hibrido, cara en el cacto, resplandor, humo"),

  // b12 — «Los parruluwas eran los puercoespines». Flechó tres y cayeron tres.
  escp("b12a", [ref("juya"), ref("ulepala"), ref("cardon")], {
    comun: `Tarde. LOS PARRULUWAS ERAN LOS PUERCOESPINES, LE DIJO: la enseñanza es VER LO QUE HAY DEBAJO DE LA FORMA, y el canon la repite cinco veces. Objeto ancla: la mano que señala el cacto.`,
    camara: {
      a: "PLANO MEDIO CORTO de Juyá hablándole de perfil y señalando hacia el monte con la vara.",
      b: "la cámara ha GIRADO al claro y ha retrocedido: PLANO GENERAL de los cactos erizados repartidos, iguales que antes, esperando.",
    },
    ini: "Juyá le habla de perfil y señala hacia el monte con la vara.",
    fin: "en el claro, los cactos erizados siguen repartidos, iguales que antes, esperando.",
  }, "escuela, pizarra, texto, rotulos, resplandor, magia"),
  esc("b12b", [ref("cardon"), ref("arco_flechas"), ref("dominio_de_juya")], {
    comun: `Tarde. FLECHÓ TRES CACTOS Y CAYERON TRES PUERCOESPINES: el acierto se cuenta POR CORTE, de la flecha en el cacto al animal en el suelo, entero y sin sangre. Objeto ancla: la flecha clavada y luego el animal.`,
    camara: {
      a: "PLANO MACRO de una flecha clavada en el cuerpo de un cacto erizado, vibrando.",
      b: "la cámara ha RETROCEDIDO y ha bajado al suelo: PLANO MEDIO de tres puercoespines tendidos en la hierba, enteros, con las púas intactas y ninguna herida a la vista.",
    },
    ini: "una flecha clavada en el cuerpo de un cacto erizado, vibrando.",
    fin: "en la hierba hay tres puercoespines tendidos, enteros, con las púas intactas y ninguna herida a la vista.",
  }, "sangre, herida, animal agonizando, transformacion dibujada, resplandor"),

  // b13 — Pidió diez conejos: eran tunas. Luego pidió auyamas de su conuco.
  esc("b13a", [ref("frutos_del_monte"), ref("dominio_de_juya")], {
    comun: `Mañana. PIDIÓ DIEZ CONEJOS Y HALLÓ TUNAS OREJONAS: AL FLECHARLAS CORRIERON VUELTAS CONEJOS. Mismo procedimiento, misma limpieza. Objeto ancla: la pala de tuna con forma de orejas.`,
    camara: {
      a: "PLANO MACRO de una pala de tuna con dos lóbulos alargados que parecen orejas, con la espina fina encima.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del terreno con diez conejos corriendo en distintas direcciones y las palas de tuna ya vacías en el suelo.",
    },
    ini: "una pala de tuna con dos lóbulos alargados que parecen orejas, con la espina fina encima.",
    fin: "desde arriba, diez conejos corren en distintas direcciones y las palas de tuna quedan vacías en el suelo.",
  }, "hibrido, transformacion dibujada, resplandor, humo, cara en la planta"),
  escp("b13b", [ref("juya"), ref("ulepala"), ref("huerta_melones")], {
    comun: `Mañana. LUEGO PIDIÓ AUYAMAS DE SU CONUCO: el encargo parece el más fácil y es el más difícil. Objeto ancla: la loma que hay que pasar.`,
    camara: {
      a: "PLANO MEDIO CORTO de Juyá señalando con la vara hacia detrás de una loma.",
      b: "la cámara ha GIRADO y ha avanzado hasta la cresta: PLANO GENERAL desde arriba de la loma con lo que hay del otro lado todavía sin distinguirse bien.",
    },
    ini: "Juyá señala con la vara hacia detrás de una loma.",
    fin: "desde la cresta de la loma, lo que hay del otro lado todavía no se distingue bien.",
  }, "escuela, trampa dibujada, resplandor, presagios, texto"),

  // b14 — Detrás de la loma no había conuco sino mujeres de mantas verdes.
  escp("b14a", [ref("mujeres_auyama"), ref("dominio_de_juya")], {
    comun: `Mañana. DETRÁS DE LA LOMA NO HABÍA CONUCO SINO MUJERES DE MANTAS VERDES: el canon describe su ropa con precisión —SOLAPAS VERDES— y son mujeres enteras. Objeto ancla: las solapas verdes.`,
    camara: {
      a: "PLANO MACRO de la solapa verde de una manta, con la tela gruesa y el borde vuelto.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL de la hondonada con una docena de mujeres de mantas verdes repartidas por el suelo, sentadas y de pie.",
    },
    ini: "la solapa verde de una manta, con la tela gruesa y el borde vuelto.",
    fin: "desde arriba, una docena de mujeres de mantas verdes están repartidas por la hondonada, sentadas y de pie.",
  }, "hibrido planta-mujer, cuerpos vegetales, transformacion, resplandor, desnudez"),
  escp("b14b", [ref("juya"), ref("ulepala"), ref("mujeres_auyama")], {
    comun: `Mañana. TUÉRCELES EL CUELLO Y VERÁS, DIJO JUYÁ: la instrucción es cruda y él la da sin dramatismo. Objeto ancla: el gesto que Juyá le enseña con las manos.`,
    camara: {
      a: "PLANO MACRO de las dos manos enormes de Juyá haciendo en el aire el gesto de torcer, sin nada dentro.",
      b: "la cámara ha RETROCEDIDO y ha girado: PLANO GENERAL con Ulépala parado en el borde de la hondonada, sin bajar, y las mujeres abajo.",
    },
    ini: "las dos manos enormes de Juyá hacen en el aire el gesto de torcer, sin nada dentro.",
    fin: "desde lejos, Ulépala está parado en el borde de la hondonada sin bajar, y las mujeres siguen abajo.",
  }, "estrangulamiento, cuello roto, violencia contra mujeres, sangre, gore"),

  // b15 — Sintió lástima. Tomó a una por la cabeza. «¡Mi cuello!», gritaron.
  escp("b15a", [ref("ulepala"), ref("mujeres_auyama")], {
    comun: `Mañana. ULÉPALA SINTIÓ LÁSTIMA Y SE ACORDÓ DE SUS PERCANCES: FALLA Y DUDA POR PIEDAD, y eso es lo que el mito quiere. Objeto ancla: su cara dudando.`,
    camara: {
      a: "PLANO MEDIO de él agachado junto a una de ellas, con la mano a medio levantar.",
      b: "la cámara ha AVANZADO hasta su cara: PLANO MEDIO CORTO de su gesto de lástima, con la mano quieta en el aire.",
    },
    ini: "está agachado junto a una de ellas, con la mano a medio levantar.",
    fin: "de cerca, su cara tiene un gesto de lástima y la mano se le queda quieta en el aire.",
  }, "violencia, forcejeo, terror, gritos, sangre, insinuacion"),
  escp("b15b", [ref("mujeres_auyama"), ref("ulepala"), ref("dominio_de_juya")], {
    comun: `Mañana. TOMÓ A UNA POR LA CABEZA Y TODAS GRITARON ¡MI CUELLO!: el grito es COLECTIVO y ahí está el chiste amargo del canon. El acto NO se muestra: se ve la mano en la cabeza y luego las bocas abiertas. Objeto ancla: las bocas gritando a la vez.`,
    camara: {
      a: "PLANO MACRO de una mano posándose en lo alto de una cabeza, sin apretar todavía.",
      b: "la cámara ha RETROCEDIDO de golpe y se ha elevado: PLANO GENERAL de la hondonada con TODAS las mujeres con la boca abierta gritando a la vez, todas a una.",
    },
    ini: "una mano se posa en lo alto de una cabeza, sin apretar todavía.",
    fin: "desde arriba, todas las mujeres tienen la boca abierta gritando a la vez, todas a una.",
  }, "cuello roto, estrangulamiento, sangre, cuerpos, violencia, gore"),

  // b16 — Se volvieron auyamas. Sus labios fueron las flores amarillas.
  esc("b16a", [ref("mujeres_auyama"), ref("huerta_melones")], {
    comun: `Mañana. SE VOLVIERON AUYAMAS, TIERNAS LAS DE SENO PEQUEÑO Y JECHAS LAS CABEZONAS: ETIOLOGÍA VISIBLE, y el corte es limpio. Objeto ancla: las auyamas de dos tamaños.`,
    camara: {
      a: "PLANO MACRO de dos auyamas juntas en la tierra, una pequeña y verde y otra grande y madura.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL en picado de la hondonada convertida en conuco, con auyamas de los dos tamaños repartidas donde estaban las mujeres.",
    },
    ini: "dos auyamas juntas en la tierra, una pequeña y verde y otra grande y madura.",
    fin: "desde arriba, la hondonada es ya un conuco con auyamas de los dos tamaños repartidas donde estaban las mujeres.",
  }, "hibrido, cuerpos vegetales, caras en las auyamas, sangre, resplandor"),
  esc("b16b", [ref("huerta_melones"), ref("dominio_de_juya")], {
    comun: `Mañana. SUS LABIOS PÁLIDOS FUERON LAS FLORES AMARILLAS: la segunda etiología, y el ÚNICO ACENTO NUEVO de la paleta. Con el murmullo del viento entre las hojas. Objeto ancla: la flor amarilla abierta.`,
    camara: {
      a: "PLANO MACRO de una flor amarilla de auyama abierta del todo, con los pétalos finos y pálidos por dentro.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del conuco entero con decenas de flores amarillas abiertas entre las guías y las hojas moviéndose con el viento.",
    },
    ini: "una flor amarilla de auyama abierta del todo, con los pétalos finos y pálidos por dentro.",
    fin: "desde arriba, decenas de flores amarillas están abiertas por el conuco y las hojas se mueven con el viento.",
  }, "labios dibujados, caras, sangre, resplandor, magia, fantasmas"),

  // b17 — Cuando quiso venado, flechó al más hermoso. Ya no vacilaba.
  escp("b17a", [ref("jovenes_venado"), ref("dominio_de_juya")], {
    comun: `Luz verde. CUANDO QUISO VENADO, FLECHÓ AL MÁS HERMOSO DE UNOS JÓVENES EMPENACHADOS: el inventario los marca sensible y la clave es que YA NO VACILA. El disparo NO se muestra. Objeto ancla: el joven más hermoso entre los otros.`,
    camara: {
      a: "PLANO MEDIO CORTO de un joven de casquete empenachado, de perfil, el más vistoso del grupo.",
      b: "la cámara ha RETROCEDIDO y ha girado hasta detrás de Ulépala: PLANO GENERAL por encima de su hombro con el arco ya tensado y el grupo al fondo.",
    },
    ini: "un joven de casquete empenachado, de perfil, el más vistoso del grupo.",
    fin: "por encima del hombro de Ulépala, el arco ya está tensado y el grupo está al fondo.",
  }, "war bonnet, penacho alto, hibrido, cuernos, sangre, agonia"),
  esc("b17b", [ref("venado"), ref("dominio_de_juya")], {
    comun: `Luz verde. CAYÓ VUELTO VENADO, Y YA NO VACILABA: corte limpio al animal entero, sin sangre. Objeto ancla: el venado en la hierba.`,
    camara: {
      a: "PLANO MACRO del pelaje pardo rojizo del costado de un venado tendido en la hierba alta.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del claro con el venado entero en el suelo y Ulépala acercándose sin dudar, con el arco bajado.",
    },
    ini: "el pelaje pardo rojizo del costado de un venado tendido en la hierba alta.",
    fin: "desde arriba, el venado está entero en el suelo y Ulépala se acerca sin dudar, con el arco bajado.",
  }, "sangre, herida, agonia, hibrido, casquete en el venado, gore"),

  // b18 — Aprendió los oficios. Juyá lo adoptó, y él tocaba la trompa.
  escp("b18a", [ref("ulepala"), ref("primeros_wayuu"), ref("cordeleria")], {
    comun: `Días, luz plana. APRENDIÓ A ENLAZAR, DOMAR, ARREAR, TEJER SOGAS Y CANTAR JAYEECHIS: EL DESENLACE NO ES DOMINIO SINO OFICIO, y ésta es la lista de vida que el canon da. Objeto ancla: las manos trenzando soga.`,
    camara: {
      a: "PLANO MACRO de dos manos trenzando una soga de fibra, ya con destreza, sobre la rodilla.",
      b: "la cámara ha RETROCEDIDO y se ha elevado: PLANO GENERAL del patio con él en un grupo de gente trabajando: unos enlazando, otros arreando y otros con las sogas.",
    },
    ini: "dos manos trenzan una soga de fibra, ya con destreza, sobre la rodilla.",
    fin: "desde arriba, él trabaja en un grupo: unos enlazando, otros arreando y otros con las sogas.",
  }, "escuela, maestro y alumno, pizarra, diplomas, texto, resplandor"),
  escp("b18b", [ref("ulepala"), ref("juya"), ref("dominio_de_juya")], {
    comun: `Última luz. JUYÁ LO ADOPTÓ COMO HIJO, Y ÉL TOCABA LA TROMPA: LA ADOPCIÓN NO BORRA EL COMIENZO —sigue subiendo a las colinas a tocar sonidos de amores y de recuerdos—, y por eso el último plano lo deja arriba y solo. Objeto ancla: la trompa en las colinas.`,
    camara: {
      a: "PLANO MACRO de una trompa de cuerno apoyada en unos labios, con las manos sujetándola.",
      b: "la cámara ha RETROCEDIDO y se ha elevado muchísimo: GRAN PLANO GENERAL final con él pequeño y solo en lo alto de una colina pelada, los dominios verdes abajo y el desierto blanco muy al fondo.",
    },
    ini: "una trompa de cuerno apoyada en unos labios, con las manos sujetándola.",
    fin: "desde muy arriba, él está pequeño y solo en lo alto de una colina pelada, con los dominios verdes abajo y el desierto blanco muy al fondo.",
  }, "apoteosis, aureola, trono, familia feliz, monumento, texto, moraleja"),
]);
