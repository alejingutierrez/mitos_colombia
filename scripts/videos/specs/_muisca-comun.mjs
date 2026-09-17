// Base común de los specs de escena muiscas. Existe porque son 37 mitos y las
// reglas que valen para todos tienen que estar en un solo sitio.
//
// ── DOCTRINA v3: CADA ESCENA ES UN PAR A→B ────────────────────────────────
// Decisión del usuario (2026-09-17): todos los mitos pasan a fotograma inicial
// Y final. Seedance 2.5 lo admite —`models_explore` del 16-sep da
// `medias.roles = [start_image, end_image, ...]`— y hasta ahora el canal nunca
// lo había usado: era capacidad disponible y sin estrenar.
//
// Estructura: 1 bloque de guion = 2 escenas = 2 clips de 5 s (se conserva el
// ritmo y el `window: 9.5` del guion). Cada escena son DOS imágenes:
//     <id>-A   fotograma inicial del clip
//     <id>-B   fotograma final del mismo clip
// Para N=9 eso da 18 escenas y 36 imágenes.
//
// `-B` LLEVA `-A` COMO REFERENCIA. El generador resuelve las dependencias por
// olas (un ref sin «/» es un hermano de la misma spec), así que el fotograma
// final se dibuja SOBRE el inicial y hereda encuadre, luz y personajes. Eso es
// lo que hace que el par sea un plano y no dos imágenes parecidas.
//
// Lo que cambia respecto de la v2: el estado final ya no se confía al texto del
// prompt de movimiento, se FIJA en una imagen aprobada. Por eso `fin` describe
// el resultado de la acción, no otra acción distinta.
//
// ── Reglas heredadas ──────────────────────────────────────────────────────
// De bochica (único video aprobado): cada escena declara ESCALA + LUZ + OBJETO
// ANCLA + CAPA DE PRIMER PLANO, y ancla identidad con EL MISMO / LA MISMA ...
// de la referencia.
// LO MÍTICO SE MUESTRA: no se inventan símbolos ajenos a la fuente, pero lo que
// la fuente SÍ dice se ve entero y grande.
// CONTINUIDAD: cada personaje recurrente repite sus rasgos fijos.
//
// ── CORRECCIÓN DEL CANDADO DE VESTUARIO ───────────────────────────────────
// (2026-09-17, tras montar la hoja de contacto de las 151 fichas y MIRARLAS.)
// Las vueltas anteriores prohibían «cenefas», «grecas» y «oro en el cuerpo» y
// obligaban a que todos fueran descalzos y con el torso cubierto. Eso
// contradice la biblia:
//   · zaque_tunja, zaque_hunza, zipa_bacata, tomagata_zaque, nemequene_zipa,
//     cacica_guatavita, esposa_principal y una docena más llevan CENEFAS
//     TEJIDAS geométricas; zaque_tunja lleva además una greca de meandro.
//   · zaque_tunja y zipa_bacata llevan PECTORAL DE ORO.
//   · heredero_dorado, corredor_plumas, sesquile_corredor, muchacho_cuca,
//     tintoba_joven y toquecha_alfarero van con TORSO DESNUDO y guayuco.
//   · familias_muiscas lleva CALZADO.
// Lo que hay que impedir no es el tejido muisca sino la invención ajena.

export const DIRECCION =
  "los cuadros van en pares: el que dice FOTOGRAMA INICIAL abre un clip de 5 s y el que dice FOTOGRAMA FINAL lo cierra. El par es UN MISMO PLANO: misma cámara, misma distancia, misma luz, mismos personajes y mismo decorado; entre los dos sólo ha avanzado la acción que la escena describe. Un modelo de video rellenará lo que pasa en medio.";

export const VESTUARIO =
  " Vestuario como en las fichas de la biblia: manta de algodón crudo anudada al hombro, por la rodilla o algo más abajo, con cenefa tejida geométrica en el borde en la gente de rango y lisa en la gente común; los hombres jóvenes y los corredores van con el torso desnudo y guayuco; pies descalzos salvo donde la referencia calce.";

export const AVOID_BASE =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; miniatura tilt-shift; maqueta de plastilina, arcilla o resina; terreno o vegetacion modelados en 3D; musgo o cesped realista; desenfoque fotografico de poca profundidad de campo; cielo fotografico o en degradado liso; cabezas modeladas y redondeadas con piel lisa; rasgos europeos en cualquier persona; togas romanas o griegas, mantos largos hasta el suelo, capuchas, velos; camisas, pantalones, botas, sandalias de correas; coronas, tronos, cetros, templos europeos o cruces; piramides, penachos de plumas altos o iconografia mesoamericana; armaduras, cascos, escudos, espadas o armas de metal; banderas, estandartes o insignias; simbolos espirituales inventados; desnudez integral, sexualizacion o poses insinuantes; sangre abundante, vísceras o cadaveres amontonados; cambiar los rostros, mantas o materiales de los personajes de referencia; gigantes o cuerpos fuera de escala salvo donde la escena lo pida";

export const PALETTE_BASE =
  "crema de algodon crudo, pardos de barro y paja, verdes apagados de sabana, gris mineral de piedra, azules frios de agua y noche; los hilos de color solo en las cenefas tejidas; sin saturacion ni neones";

const B = "muiscas/biblia";
export const ref = (n) => `${B}/${n}`;

// Candado que hace del par un plano: el FINAL se dibuja sobre el INICIAL.
const LOCK =
  " Es el FOTOGRAMA FINAL del mismo plano: se conserva EXACTAMENTE el encuadre, la distancia de cámara, la luz, el decorado y los personajes de la imagen de referencia del plano inicial, y lo ÚNICO que ha cambiado es la acción descrita.";

/**
 * Una escena = un clip = dos imágenes.
 *
 * esc(id, refs, { comun, ini, fin }, avoid) devuelve `<id>-A` y `<id>-B`.
 * `comun` es lo que no cambia entre los dos (escala, luz, decorado, ancla);
 * `ini` y `fin` son los dos estados de la acción.
 *
 * `-B` recibe `<id>-A` como referencia extra para heredar el plano.
 * `conFiguras: true` añade el candado de vestuario a los dos.
 */
export function esc(id, refs, { comun, ini, fin }, avoid, conFiguras = false) {
  const v = conFiguras ? VESTUARIO : "";
  return [
    { id: `${id}-A`, kind: "keyframe", preset: "vertical", refs,
      scene: `${comun} FOTOGRAMA INICIAL: ${ini}${v}`, avoid },
    { id: `${id}-B`, kind: "keyframe", preset: "vertical", refs: [...refs, `${id}-A`],
      scene: `${comun} FOTOGRAMA FINAL: ${fin}${LOCK}${v}`, avoid },
  ];
}

// Azúcar para escenas con figuras humanas.
export const escp = (id, refs, partes, avoid) => esc(id, refs, partes, avoid, true);

/** Aplana la lista de pares en el array ITEMS que consume el generador. */
export const armar = (pares) => pares.flat();
