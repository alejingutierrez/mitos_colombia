/**
 * Ficha comercial del tarot, versionada en el repositorio.
 *
 * Hasta ahora los hechos del producto sólo existían como variables de entorno
 * en Vercel: cambiar "qué incluye la caja" exigía entrar a la consola, y nadie
 * podía revisar el cambio en un pull request. Estos son datos públicos, no
 * secretos, así que su lugar natural es el código.
 *
 * Reglas:
 * - La variable de entorno SIGUE MANDANDO. Este archivo es sólo el respaldo.
 *   Así el cambio se puede probar en producción sin desplegar y luego bajarse
 *   al repositorio sin sorpresas.
 * - Los valores nacen vacíos a propósito. El proyecto no afirma un hecho del
 *   producto hasta poder comprobarlo, y un dato vacío mantiene la landing
 *   diciendo "pendiente de confirmación" en lugar de inventar una promesa.
 * - Las llaves de Bold, el estado del webhook y la identidad fiscal del
 *   vendedor NO van aquí: son secretos o cambian por ambiente.
 *
 * Al llenar un campo, `commercialReady` avanza y el embudo comercial
 * (`add_to_cart`) deja de degradarse a `commerce_preview_open`.
 */
export const TAROT_PRODUCT_FACTS = Object.freeze({
  /** Fecha o plazo de despacho. Ej.: "Despachamos dentro de los 5 días hábiles siguientes al pago." */
  dispatch: "",
  /** Cobertura del envío incluido. Ej.: "Envío incluido en el precio para toda Colombia." */
  shipping: "",
  /** Contenido final de la caja. Ej.: "78 cartas y una guía impresa de 24 páginas." */
  contents: "",
  /** Medidas, material y acabado verificados sobre el producto final. */
  physicalSpecs: "",
  /** Política de cambios y devoluciones. */
  returns: "",
  /**
   * Departamentos habilitados para entrega, separados por "|".
   * "ALL_COLOMBIA" habilita los 33 territorios de TAROT_COLOMBIA_REGIONS.
   */
  shippingRegions: "",
});
