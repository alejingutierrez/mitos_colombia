// Correcciones puntuales de la biblia muisca.
//
// Una ficha se corrige aquí cuando NO CUMPLE SU PROPIA `descripcion` del
// manifest. No es rediseño: es hacer que la imagen diga lo que el brief pedía.
//
// ── corredor_plumas (2026-09-17) ──────────────────────────────────────────
// Su descripcion del 23-ago pedía «una diadema tejida angosta con TRES plumas
// cortas al frente —sobria, NO un penacho—». La ficha salió con tres plumas
// largas y verticales rojo-blanco-rojo que sobresalen muy por encima de la
// cabeza: exactamente el penacho que el brief trataba de evitar, y que además
// el SHARED_AVOID de todas las specs prohíbe («penachos de plumas altos»).
// El error viajó a los keyframes de chaquón, que reprodujeron la ficha con
// fidelidad. Se corrige en la biblia, que es donde entró.
//
//   node scripts/videos/generate-keyframes.mjs \
//     --spec scripts/videos/specs/muisca-biblia-correcciones.mjs --force

export const SPEC_NAME = "muisca-biblia-correcciones";
export const OUT_DIR = "muiscas/biblia";

export const PALETTE =
  "crema de algodon crudo, pardos de papel kraft y tierra, negro mate del pelo; el rojo apagado y el blanco hueso SOLO en las plumas; sin saturacion ni neones";

export const SHARED_AVOID =
  "texto, letras, logos, marcas de agua, marcos o bordes; CGI, render 3D o ilustracion digital pulida; maqueta de plastilina, arcilla o resina; desenfoque fotografico de poca profundidad de campo; rasgos europeos; penacho, tocado de plumas alto, corona de plumas, plumas largas o verticales, plumas que sobresalgan por encima de la linea del pelo, abanico de plumas, plumas de aguila; iconografia de las llanuras norteamericanas; piramides o iconografia mesoamericana; coronas, diademas de metal, joyeria inventada u oro; escenario, utileria extra o fondo que no sea el crema liso";

export const ITEMS = [
  {
    id: "corredor_plumas",
    kind: "personaje",
    preset: "vertical",
    refs: [],
    scene:
      "Uno de los que corrían la tierra en la fiesta: hombre joven de unos veinticinco años, atlético y de piernas fuertes, rostro concentrado de rasgos indígenas, piel morena, cabello negro liso y corto recogido. " +
      "TOCADO (lo esencial de esta corrección): lleva UNA CINTA TEJIDA ANGOSTA de fibra cruda ceñida a la frente, y sobre ella DOS plumas CORTAS Y ANCHAS, de no más de un palmo, sujetas CASI HORIZONTALES y pegadas a la cinta, apuntando hacia atrás siguiendo la curva de la cabeza. " +
      "Las plumas NO se levantan sobre la coronilla, NO sobresalen por encima de la línea del pelo y NO forman abanico: son un adorno sobrio, casi discreto, que hay que mirar dos veces para notarlo. " +
      "Viste una manta corta de algodón crudo ceñida a la cintura y va descalzo. De pie, cuerpo entero, frontal, con el peso adelantado y los brazos algo separados, a punto de arrancar.",
    avoid:
      "plumas verticales, plumas largas, plumas por encima de la cabeza, penacho, tres o mas plumas, abanico, tocado ceremonial, pintura facial, collares",
  },
];
