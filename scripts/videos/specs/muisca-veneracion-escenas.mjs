// Keyframes de Ante el rostro del zaque — 9 bloques × 2 escenas × 2 cuadros
// = 36 imágenes ≈ 90 s.
// Guion: guion-veneracion-a-los-soberanos-v2.json (N=9)
// Acta:  acta-veneracion-a-los-soberanos.json (18 nudos)
// DOCTRINA v4: cada par es UN PLANO CON MOVIMIENTO (ver _muisca-comun.mjs).
//
// DESLINDES DEL ACTA (mandan sobre cualquier idea visual):
// · El zaque NO CASTIGA LA MIRADA: lo mira un instante, ordena la ayuda que
//   el mensajero vino a pedir y sólo después le dice que vuelva a mirar el
//   suelo. La reverencia se restablece SIN VIOLENCIA, y esa contención es el
//   mito. Nada de guardias, gritos ni represalias.
// · La ayuda NO es recompensa por haberlo mirado ni indulto: la orden llega
//   con la misma voz sin prisa, como si nada hubiera pasado.
// · El funcionario de la totuma NO ES RIDÍCULO: la fuente lo describe con
//   respeto —camina como quien carga un fuego que no debe apagarse— y el
//   mensajero lo acompaña un trecho sin hablar. NO convertir el rito en burla.
// · Lo que el mensajero ve NO es debilidad: es FATIGA. Y el relato dice qué
//   hace la reverencia con ella: NO LA DEJA VER.
// · El relato NO dice que el mensajero se arrepienta ni que se salve: agradece
//   con la cabeza inclinada y sale. Sigue dentro de la regla; lo único que
//   cambió es lo que sabe.
//
// RECURSO DE CÁMARA: durante casi todo el video la altura de la cámara es la
// de una cabeza inclinada —pies, bordes de manta, tierra barrida—, y sólo
// sube a la altura de los ojos en el bloque b6, cuando él levanta el rostro.
// Ese es el único plano frontal del zaque en todo el video.
//
// GUION DE LUZ: tres días de camino → puerta del cercado → tierra barrida →
// totuma detrás del zaque → palabras del mensajero → el rostro levantado →
// la orden sin prisa → salida con la cabeza inclinada → última luz sobre la
// totuma.

import { DIRECCION, AVOID_BASE, ref, esc, escp, armar } from "./_muisca-comun.mjs";

export const SPEC_NAME = "muisca-veneracion-escenas";
export const OUT_DIR = "muiscas/videos/veneracion-a-los-soberanos/keyframes";
export { DIRECCION };
export const SHARED_AVOID =
  AVOID_BASE + "; castigo por mirar, guardias sujetando, golpes, latigos, ejecucion, cadenas; burla del rito, caricatura, gestos grotescos, comedia; trono elevado, corona, cetro, palio, alfombra roja; aureola, resplandor sobre el soberano, rayos; multitudes aclamando, banderas, musica triunfal";
export const PALETTE =
  "pardo de tierra apisonada y barrida, crema de algodon crudo, ocre y verde de las cenefas del zaque, ocre rojizo de la totuma de barro, gris de polvo de camino; la ultima luz naranja solo en el cierre; sin saturacion";

const MENSAJERO =
  "EL MISMO mensajero de la referencia (hombre de unos treinta años, delgado y cansado, rostro atento, pelo negro liso recogido, manta de algodón crudo gastada con barro seco en el borde inferior ceñida con un cordón de fique, descalzo y con los pies muy sucios de camino, cuello completamente desnudo)";
const ZAQUE =
  "EL MISMO zaque de Tunja de la referencia (hombre de unos cincuenta y cinco años, rostro sereno y con una FATIGA marcada alrededor de los ojos —ojeras hondas y párpados pesados—, pelo negro con canas recogido bajo una diadema tejida ancha, manta de algodón de tejido muy fino anudada al hombro con tres cenefas geométricas sobrias en ocre y verde)";
const TOTUMA =
  "EL MISMO funcionario de la totuma de la referencia (hombre de porte grave, manta de algodón crudo, que camina despacio sosteniendo en alto una escudilla de barro cocido ocre con las dos manos, como quien carga un fuego que no debe apagarse)";

export const ITEMS = armar([
  // b1 — Había caminado tres días. Traía las palabras, no los ojos.
  escp("b1a", [ref("mensajero_quebrada"), ref("camino_carrera"), ref("sabana_anegada")], {
    comun: `${MENSAJERO} lleva tres días caminando desde la quebrada que se llevó el camino. Objeto ancla: sus pies.`,
    camara: {
      a: "PLANO MACRO de sus pies descalzos y muy sucios avanzando por el polvo del camino.",
      b: "la cámara ha RETROCEDIDO y ha subido: GRAN PLANO GENERAL del altiplano con él pequeño en el camino y, muy atrás, el corte de una quebrada que partió el sendero en dos.",
    },
    ini: "los pies descalzos, cubiertos de tres días de polvo, siguen andando.",
    fin: "desde arriba se ve de dónde viene: muy atrás, una quebrada ha partido el camino en dos, y él lleva andado todo lo demás.",
  }, "caballos, carruajes, sequito, aureola, dramatismo"),
  escp("b1b", [ref("mensajero_quebrada")], {
    comun: `Trae las palabras preparadas; NO trae preparados los ojos. Se cuenta con su boca ensayando y sus ojos sin saber adónde ir. Objeto ancla: su boca y sus ojos.`,
    camara: {
      a: "PLANO MACRO de su boca moviéndose sin sonido, repasando lo que va a decir.",
      b: "la cámara ha SUBIDO a los ojos: PLANO MACRO de sus ojos mirando de un lado a otro, sin fijarse en nada.",
    },
    ini: "la boca repasa las palabras en silencio, otra vez.",
    fin: "arriba, los ojos van de un lado a otro sin fijarse: eso es lo que no trae preparado.",
  }, "miedo teatral, llanto, temblores, aureola"),

  // b2 — «Baja la cabeza; nadie mira al soberano». (CITA)
  escp("b2a", [ref("mensajero_quebrada"), ref("funcionario_totuma"), ref("cercado_bacata")], {
    comun: `En la puerta del cercado un funcionario le sale al paso y le habla SIN ALZAR LA VOZ. Objeto ancla: el vano de la puerta.`,
    camara: {
      a: "PLANO MEDIO de él llegando al vano del cercado, todavía con la cabeza alta.",
      b: "la cámara ha RODEADO hasta ponerse dentro del vano, de espaldas al patio: PLANO MEDIO CORTO del funcionario hablándole bajo, con el mensajero cortado por el borde.",
    },
    ini: "llega al vano con la cabeza alta y mira hacia dentro.",
    fin: "el funcionario le está hablando bajo, muy cerca, sin levantar la voz y sin tocarlo.",
  }, "guardias con armas, empujones, gritos, cadenas, violencia"),
  escp("b2b", [ref("mensajero_quebrada"), ref("cercado_bacata")], {
    comun: `Le dice que baje la cabeza: NADIE mira el rostro del soberano. Y él baja la cabeza y entra. Desde aquí la cámara se queda a la altura de una cabeza inclinada. Objeto ancla: su barbilla bajando.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara de frente, con los ojos todavía a la altura de los del otro.",
      b: "la cámara ha DESCENDIDO con su barbilla hasta quedar a un palmo del suelo: PLANO MEDIO BAJO de la tierra apisonada del patio con sus pies entrando en cuadro.",
    },
    ini: "todavía tiene la cara de frente y los ojos a la altura de los del otro.",
    fin: "la cámara ha bajado con él hasta el suelo: lo único que se ve es la tierra del patio y sus pies entrando en ella.",
  }, "arrodillarse, postracion forzada, empujones, latigos, gritos"),

  // b3 — Vio la tierra barrida. Los pies descalzos de la escolta.
  esc("b3a", [ref("cercado_bacata")], {
    comun: "Desde la altura de una cabeza inclinada: la tierra BARRIDA del patio, sin una hoja y sin una piedra. Objeto ancla: la tierra barrida.",
    camara: {
      a: "PLANO MACRO de la tierra apisonada con las marcas paralelas de la escoba, limpísima.",
      b: "la cámara ha AVANZADO a ras de suelo por el patio: PLANO MEDIO BAJO en movimiento con las marcas de escoba extendiéndose hasta el fondo del recinto.",
    },
    ini: "las marcas de la escoba se ven una a una en la tierra apisonada.",
    fin: "avanzando a ras de suelo, las mismas marcas siguen parejas hasta el fondo del patio: alguien barrió todo esto esta mañana.",
  }, "alfombras, tapices, marmol, escalinatas, trono"),
  escp("b3b", [ref("familias_muiscas"), ref("cercado_bacata"), ref("manta_reparto")], {
    comun: `Los pies descalzos de los que escoltan al señor, y los bordes de las mantas que se tienden por donde pasa. Todo visto desde abajo. Objeto ancla: los pies y los bordes de manta.`,
    camara: {
      a: "PLANO MACRO a ras de suelo de seis pies descalzos avanzando en fila, todos al mismo paso.",
      b: "la cámara ha hecho un PANEO LATERAL a ras de tierra: PLANO MEDIO BAJO de unas manos tendiendo el borde de una manta sobre el suelo, justo delante de esos pies.",
    },
    ini: "seis pies descalzos avanzan en fila al mismo paso, muy cerca del objetivo.",
    fin: "delante de ellos, unas manos están tendiendo el borde de una manta sobre la tierra para que pasen por encima.",
  }, "alfombra roja, palio, guardias con armas, aureola, trompetas"),

  // b4 — Un funcionario recogía su saliva. «Habla».
  escp("b4a", [ref("funcionario_totuma"), ref("cercado_bacata")], {
    comun: `${TOTUMA} caminando detrás del zaque: cuando el soberano escupe, recoge la saliva ANTES de que llegue a tocar la tierra. El rito se filma con respeto, NO como burla. Objeto ancla: la totuma.`,
    camara: {
      a: "PLANO MACRO a ras de suelo de la escudilla de barro ocre sostenida en alto por dos manos, muy cerca del objetivo.",
      b: "la cámara ha SUBIDO despacio a lo largo de sus brazos: PLANO MEDIO de su cara y su postura, grave y concentrada, sin nada de cómico.",
    },
    ini: "la escudilla de barro va sostenida en alto por dos manos.",
    fin: "arriba, la cara del funcionario está concentrada y seria: lleva eso como quien lleva un fuego que no debe apagarse.",
  }, "burla, caricatura, gestos grotescos, asco, comedia, risas"),
  escp("b4b", [ref("zaque_tunja"), ref("mensajero_quebrada"), ref("cercado_bacata")], {
    comun: `La voz del zaque diciéndole que hable. NO se le ve la cara: la cámara sigue abajo. Objeto ancla: el borde de su manta.`,
    camara: {
      a: "PLANO MACRO a ras de suelo del borde de la manta de tejido muy fino del zaque, con sus tres cenefas, y sus pies descalzos detrás.",
      b: "la cámara ha girado a ras de tierra hacia el mensajero: PLANO MEDIO BAJO de él con la frente baja, oyendo la orden de hablar.",
    },
    ini: "a ras de suelo se ve el borde de la manta con sus cenefas y los pies del zaque.",
    fin: "al otro lado, el mensajero sigue con la frente baja: ha oído que le mandan hablar y todavía no ha levantado la cara.",
  }, "trono, rostro del zaque visible, corona, aureola, guardias"),

  // b5 — Habló del agua y de las manos que faltaban. Levantó el rostro.
  escp("b5a", [ref("mensajero_quebrada"), ref("sabana_anegada"), ref("cercado_bacata")], {
    comun: `Habla del agua que rompió el camino, de las familias que quedaron al otro lado y de las manos que hacen falta. Objeto ancla: lo que cuenta.`,
    camara: {
      a: "PLANO MEDIO BAJO de él hablando con la frente baja, con sólo la boca y la barbilla en cuadro.",
      b: "la cámara ha girado y AVANZADO fuera del cercado siguiendo lo que cuenta: GRAN PLANO GENERAL de la quebrada crecida que partió el camino, con las casas del otro lado aisladas.",
    },
    ini: "habla con la frente baja y sólo se le ve la boca moviéndose.",
    fin: "el cuadro se ha ido a lo que cuenta: una quebrada crecida partiendo el camino y, al otro lado, casas sin manera de cruzar.",
  }, "llanto, suplica, arrodillarse, dramatismo, cadaveres"),
  escp("b5b", [ref("mensajero_quebrada")], {
    comun: `El cuello le duele de sostener la frente baja, y EN UN DESCUIDO levanta el rostro. No es desafío: es un cuello cansado. Objeto ancla: su cuello.`,
    camara: {
      a: "PLANO MACRO de la nuca y el cuello tensos de sostener la cabeza baja, con los tendones marcados.",
      b: "la cámara ha SUBIDO con la cara al enderezarse: PLANO MEDIO CORTO de su rostro ya levantado, con los ojos abiertos y la expresión de quien acaba de darse cuenta.",
    },
    ini: "la nuca está tensa y los tendones marcados de sostener la cabeza abajo.",
    fin: "la cara ya está levantada y los ojos abiertos: se le ha escapado, y se acaba de dar cuenta.",
  }, "desafio, insolencia, valentia heroica, aureola, gritos"),

  // b6 — Vio la manta fina y la fatiga alrededor de sus ojos.
  escp("b6a", [ref("zaque_tunja"), ref("mensajero_quebrada")], {
    comun: `Lo que ve: la manta fina, los adornos del cargo, y TAMBIÉN la FATIGA alrededor de sus ojos. Éste es el ÚNICO plano frontal del zaque en todo el video. Objeto ancla: sus ojos cansados.`,
    camara: {
      a: "PLANO MEDIO del zaque de frente, entero: la manta de tejido muy fino, las tres cenefas y la diadema ancha.",
      b: "la cámara ha AVANZADO hasta su cara: PRIMER PLANO de los ojos del zaque con las ojeras hondas y los párpados pesados, muy de cerca.",
    },
    ini: "se le ve de frente y entero: la manta fina, las cenefas, la diadema del cargo.",
    fin: "de muy cerca, alrededor de sus ojos hay ojeras hondas y párpados pesados: eso es lo que la reverencia no deja ver.",
  }, "aureola, resplandor, trono, corona, rostro amenazante, ira"),
  escp("b6b", [ref("funcionario_totuma"), ref("familias_muiscas"), ref("cercado_bacata")], {
    comun: `${TOTUMA} contiene la respiración y NADIE SE MUEVE. La tensión es de contención, no de amenaza. Objeto ancla: la quietud del patio.`,
    camara: {
      a: "PLANO MEDIO CORTO del funcionario de la totuma con el pecho parado, sin respirar, sosteniendo la escudilla.",
      b: "la cámara ha RETROCEDIDO y ha subido: PICADO del patio entero con quince personas completamente inmóviles y un hueco de tierra barrida entre el mensajero y el zaque.",
    },
    ini: "el funcionario ha parado el pecho y no respira, con la escudilla en alto.",
    fin: "desde arriba, las quince personas del patio están inmóviles y entre el mensajero y el zaque hay un hueco de tierra limpia que nadie cruza.",
  }, "guardias corriendo, armas, gritos, violencia, sujetar al mensajero"),

  // b7 — Lo miró y ordenó enviar trabajadores. «Vuelve a mirar el suelo».
  escp("b7a", [ref("zaque_tunja"), ref("mensajero_quebrada")], {
    comun: `El zaque lo mira un instante en silencio, COMO SE MIRA EL HONDO DE UNA LAGUNA, y después baja los ojos. NO hay castigo. Objeto ancla: sus ojos.`,
    camara: {
      a: "PRIMER PLANO de los ojos del zaque mirándolo, quietos y sin dureza.",
      b: "la cámara ha RETROCEDIDO un poco y ha seguido sus párpados al bajar: PLANO MEDIO CORTO de su cara con los ojos ya puestos en el suelo, sin haber dicho nada todavía.",
    },
    ini: "los ojos lo miran de frente, quietos, sin dureza y sin orden.",
    fin: "ha bajado los ojos al suelo por su cuenta y sigue sin decir nada: no ha llamado a nadie.",
  }, "ira, grito, señalar, guardias, castigo, latigos, aureola"),
  escp("b7b", [ref("zaque_tunja"), ref("familias_muiscas"), ref("mensajero_quebrada")], {
    comun: `Y ordena CON LA MISMA VOZ SIN PRISA que envíen trabajadores y alimento a la quebrada. La ayuda NO es recompensa ni indulto: llega como si nada hubiera pasado. Después le dice que vuelva a mirar el suelo. Objeto ancla: la gente que se pone en marcha.`,
    camara: {
      a: "PLANO MEDIO CORTO del zaque dando la orden, con la voz igual de tranquila que antes.",
      b: "la cámara ha RETROCEDIDO y ha girado hacia el vano: PLANO GENERAL del patio con cuatro personas ya saliendo hacia el camino con herramientas y cestos.",
    },
    ini: "da la orden con la misma voz sin prisa con la que le mandó hablar.",
    fin: "por el vano ya salen cuatro personas con azadas y cestos hacia el camino: la ayuda que él vino a pedir está en marcha.",
  }, "aureola, aclamacion, agradecimiento teatral, arrodillarse, llanto"),

  // b8 — Agradeció con la cabeza inclinada y salió.
  escp("b8a", [ref("mensajero_quebrada"), ref("cercado_bacata")], {
    comun: `El mensajero vuelve a mirar el suelo y así, CON LA CABEZA INCLINADA, agradece y sale. NO se arrepiente y NO se salva: sigue dentro de la regla. Objeto ancla: su cabeza inclinada.`,
    camara: {
      a: "PLANO MEDIO CORTO de su cara con los ojos bajando otra vez hacia el suelo.",
      b: "la cámara ha DESCENDIDO con él y ha retrocedido a ras de tierra: PLANO MEDIO BAJO de sus pies saliendo del patio por el vano, con la tierra barrida detrás.",
    },
    ini: "los ojos bajan otra vez al suelo, sin que nadie se lo repita.",
    fin: "a ras de tierra, sus pies cruzan el vano hacia afuera, y detrás queda el patio barrido igual que al principio.",
  }, "castigo, expulsion, guardias, humillacion, llanto, aureola"),
  escp("b8b", [ref("mensajero_quebrada"), ref("funcionario_totuma"), ref("camino_carrera")], {
    comun: `En el camino de regreso se topa con ${TOTUMA}, que camina despacio con el recipiente alzado. Objeto ancla: el encuentro en el camino.`,
    camara: {
      a: "PLANO MEDIO BAJO del camino con unos pies descalzos acercándose de frente, despacio.",
      b: "la cámara ha SUBIDO a la altura de los ojos por primera vez fuera del cercado: PLANO MEDIO de los dos parados en el camino, mirándose, con la totuma en alto entre ellos.",
    },
    ini: "por el camino se acercan unos pies despacio, sin prisa.",
    fin: "los dos están parados frente a frente en el camino, mirándose a la cara, con la escudilla de barro sostenida en alto entre ellos.",
  }, "burla, risas, desprecio, comedia, gestos grotescos"),

  // b9 — Lo acompañó un trecho. Volvió a ver aquella fatiga.
  escp("b9a", [ref("mensajero_quebrada"), ref("funcionario_totuma"), ref("camino_carrera")], {
    comun: `Lo acompaña un trecho SIN HABLAR. El respeto entre los dos es el del que sabe lo que carga el otro. Objeto ancla: los dos andando juntos.`,
    camara: {
      a: "PLANO MEDIO lateral de los dos andando al mismo paso, sin decirse nada.",
      b: "la cámara se ha QUEDADO ATRÁS y ha subido: PLANO GENERAL del camino con los dos alejándose juntos y las colinas de Tunja al fondo.",
    },
    ini: "andan al mismo paso, uno al lado del otro, callados.",
    fin: "desde atrás se les ve alejarse juntos por el camino, sin haber cruzado una palabra, con las colinas de Tunja delante.",
  }, "conversacion animada, risas, burla, aureola, dramatismo"),
  escp("b9b", [ref("funcionario_totuma"), ref("zaque_tunja"), ref("camino_carrera")], {
    comun: `El sol se hunde en las colinas de Tunja, LA TOTUMA BRILLA un momento en la última luz, y él vuelve a ver la fatiga alrededor de los ojos del zaque, QUE LA REVERENCIA NO DEJA VER. Objeto ancla: el brillo de la totuma.`,
    camara: {
      a: "PLANO MACRO del barro ocre de la totuma encendiéndose un instante con la última luz naranja del sol.",
      b: "la cámara ha RETROCEDIDO y ha subido hasta un GRAN PLANO GENERAL final del altiplano con el sol hundiéndose en las colinas de Tunja, los dos hombres pequeños en el camino y el cercado ya lejos al fondo.",
    },
    ini: "el barro de la totuma se enciende un instante con la última luz.",
    fin: "desde muy lejos, el sol se hunde en las colinas, los dos van pequeños por el camino y el cercado ha quedado atrás: lo único que cambió es lo que él sabe.",
  }, "flashback del rostro, sobreimpresion, fantasma, aureola, texto"),
]);
