// Ampliación de la biblia muisca para el video de Bochica (video 2).
// Escribe directo a la biblioteca del pueblo: content/videos/muiscas/biblia/
// Doctrina: docs/videos/direccion-cinematografica.md · Canon: el-castigo-de-chibchachum-y-bochica
// LÍNEA ROJA del sitio: Bochica NUNCA europeo, sin cruces, arcoíris sobrio jamás vehículo.

export const SPEC_NAME = "muiscas-biblia-bochica";
export const OUT_DIR = "muiscas/biblia";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; coronas, tronos o templos europeos; piramides, penachos o iconografia mesoamericana; simbolos espirituales inventados; joyeria inventada u oro en el cuerpo; desnudez, sexualizacion o dramatismo excesivo; rasgos europeos, barba blanca abundante, tunicas de profeta, cruces";

export const PALETTE =
  "verde frio de paramo, azul gris de laguna, ocres minerales, crema de algodon crudo, blanco de niebla; acento UNICO de este mito: oro batido sobrio de la vara y luz dorada de la aparicion";

export const ITEMS = [
  {
    id: "bochica_anciano",
    kind: "personaje",
    preset: "vertical",
    scene:
      "Bochica, el sabio viajero del mito muisca: anciano de rasgos indígenas andinos, piel morena curtida, cabello gris largo y liso recogido atrás, rostro sereno y surcado de caminos, apenas un bozo escaso. Manta larga de algodón crudo anudada al hombro con UNA franja tejida ocre, y una manta corta de viaje sobre los hombros. En la mano derecha, una vara de caminante de madera oscura con un remate sencillo de oro batido. Descalzo, de pie, porte de maestro tranquilo que ha caminado mucho.",
    avoid: "aspecto europeo o de profeta biblico, barba larga, tunica blanca, baculo con cruz, aureolas",
  },
  {
    id: "vara_dorada",
    kind: "prop",
    preset: "square",
    scene:
      "La vara de Bochica: bastón recto de madera oscura pulida por el uso, con un remate superior de oro batido martillado, sobrio y pequeño, con textura de lámina precolombina; una fibra tejida ocre amarrada bajo el remate. Objeto único centrado sobre fondo mate liso color crema, construido como pieza artesanal de papel y cartón.",
    avoid: "gemas, cruces, cetro real, brillo excesivo, empuñaduras europeas",
  },
  {
    id: "sabana_cultivos",
    kind: "paisaje",
    preset: "vertical",
    scene:
      "GRAN PLANO GENERAL, luz de amanecer dorado-frío. La sabana de Bogotá fértil vista desde una loma: surcos de maíz jóvenes en primer término COMO CAPA DE PRIMER PLANO (hojas y mazorcas de papel), el río serpenteando plateado por el valle llano hacia un estrecho entre dos cerros rocosos al fondo, bohíos de paja dispersos con humos finos, cerros verdes y cielo amplio. Sin personas. Objeto ancla: las mazorcas del primer plano.",
    avoid: "personas, inundacion, lluvia",
  },
  {
    id: "rocas_tequendama",
    kind: "paisaje",
    preset: "vertical",
    refs: ["sabana_cultivos"],
    scene:
      "PLANO GENERAL, luz plomiza húmeda. El estrecho del Tequendama ANTES de abrirse: dos grandes farallones de roca de papel apretados uno contra otro, cerrando el paso del valle; el río del MISMO paisaje de referencia llega contenido y se represa contra las rocas; bosque de niebla en las laderas, vegetación andina en primer plano como capa de profundidad. Sin personas. Objeto ancla: la grieta mínima entre las dos rocas.",
    avoid: "cascada, personas, apertura ya hecha",
  },
  {
    id: "salto_tequendama",
    kind: "paisaje",
    preset: "vertical",
    refs: ["rocas_tequendama"],
    scene:
      "CONTRAPICADO GRAN GENERAL, luz limpia después de la tormenta. LAS MISMAS dos rocas de la referencia ahora ABIERTAS: entre ellas nace el Salto del Tequendama, una cascada alta y vertical de capas de papel blanco-azul cayendo al vacío, niebla de espuma de fibra de algodón abajo, paredes de roca húmedas, vegetación de niebla en los bordes como primer plano. Sin personas. Objeto ancla: la columna de agua.",
    avoid: "personas, arcoiris, edificios, el hotel del salto",
  },
];
