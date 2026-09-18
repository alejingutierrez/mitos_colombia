# Nasa–Paeces · punto de traspaso

Corte actualizado: 13 de septiembre de 2026, America/Bogota. Por petición del
usuario, los 26 trípticos se reconstruyeron con el refuerzo de maqueta 3D de
papel cortado y se actualizaron en el sitio. Después se retomaron los keyframes
de El Trueno: la secuencia completa de 14 cuadros ya incorpora ese mismo refuerzo.
Por nueva solicitud del usuario se abrió la producción de keyframes de toda la
comunidad: [campaña de los 26 mitos](keyframes-comunidad-20260913/README.md).
Su producción está completa: **270 cuadros seleccionados, 14 conservados y 256 nuevos**,
con los 26 guiones, revisión de secuencias, galería local y paquetes descargables.

## Dónde quedamos

| Fase | Estado | Evidencia |
|---|---|---|
| Corpus de producción | 26 mitos: IDs 429–453 y 553. No ampliar ni reiniciar. | [Dossiers](biblia/DOSSIERS-20260912.md) y [biblia](biblia/BIBLIA-NASA.md) |
| Biblia visual | 60 referencias canónicas seleccionadas; referencia editorial, no certificación cultural. | [Selección v2](biblia/produccion-api-02/selection.v2.json) y [estado de la biblia](biblia/produccion-api-02/ESTADO.md) |
| Trípticos | 26/26 reconstruidos; 78 nuevas maquetas de papel con QA individual y originales conservados. | [Campaña de maqueta 3D](tripticos/maqueta-3d-20260913/README.md) |
| Publicación | Las 78 imágenes están publicadas; el informe del lote registra la comprobación de páginas, archivos, textos e historial. | [Verificación actual](tripticos/maqueta-3d-20260913/verification-all-26.json), [cierre](tripticos/maqueta-3d-20260913/closure.json) |
| Guion y keyframes | 26/26 secuencias completas: 270 PNG, 256 nuevos y 14 conservados. Guiones y planos ordenados, revisión visual y 27 ZIP verificados. Listos para revisión del usuario. | [Entrega](keyframes-comunidad-20260913/README.md), [verificación HTTP](keyframes-comunidad-20260913/http-verification.json), [paquetes](keyframes-comunidad-20260913/packages.json) |
| Video final | No producido. | Voz, animación, montaje y publicación audiovisual quedan fuera de este cierre. |

La biblia comprende 17 personajes, 7 entidades/animales, 10 paisajes maestros,
8 variaciones, 12 paquetes de utilería y 6 paquetes de elencos. Son 60 unidades
de referencia, no 60 objetos individuales. El digest del corpus usado es
`967750618150fd26c0087402136d9a0a3c615ffdc8d201612c02155a4fd49533`.

El cierre del 12 de septiembre queda como historial de la versión anterior.
La campaña `nasa-maqueta-3d-20260913` usa como referencias de material los dos
keyframes reforzados de El Trueno, y conserva las escenas, identidades y objetos
de los trípticos previos. La actualización pública se hizo mediante datos,
archivos y revalidación; no requirió desplegar código de la app.

## Aprendizajes que sí se pueden reutilizar

- Inventario acotado con maestros compartidos y variantes dependientes de ellos.
- Identidad y cambios de estado separados; una transformación no exige inventar
  otro personaje. El vestuario y la cultura Nasa no se transfieren a otros pueblos.
- QA antes de seleccionar: 15 de las 60 referencias iniciales necesitaron reparación
  editorial; hubo 16 solicitudes de corrección. No confundir correcciones con errores API.
- En el cierre de los últimos 15 trípticos se conservaron seis versiones rechazadas.
  Mantener originales, rechazos, selección y recibos; no usar sobrescritura para ocultarlos.
- Tríptico completo en cada formato, no un recorte de un solo panel. El cuadrado
  necesitó instrucciones propias; la composición se revisó antes de publicar.
- En la producción anterior se usó API directa con `gpt-image-2.5-sunburst`.
  Se observaron cuatro solicitudes simultáneas; no se probó el límite máximo de cuenta
  ni se hizo una comparación controlada de costes o velocidad.

## Continuidad de producción

Los 26 trípticos ya se regeneraron por solicitud expresa del usuario. No eliminar
imágenes anteriores, modificar relatos ni expandir el manifiesto por iniciativa
propia. La biblia no fue regenerada. El piloto audiovisual del primer mito,
El Trueno, ya se retomó con `revision-maqueta-03` tras completar los trípticos.
Su guion/storyboard y 14 keyframes en maqueta están revisados editorialmente;
la revisión del usuario, voz, animación y montaje siguen pendientes. La entrega
navegable está en `output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/index.html`
desde la raíz. El piloto usa image_gen integrado, sin modelo/calidad expuestos por
la herramienta; no se atribuyen los parámetros Sunburst de la biblia a estas imágenes.

La colección completa está en http://127.0.0.1:8897/comunidad-nasa/: 26 mitos con
270 keyframes, búsqueda, visor de originales, guiones y descargas individuales o
conjuntas. Se verificaron por HTTP todos los PNG seleccionados y sus huellas; los
trípticos públicos permanecen como entrega separada. Los tiempos de montaje son
provisionales hasta grabar la voz.

La nueva colección de trípticos también usa `image_gen.imagegen` integrado,
sin modelo ni calidad de generación expuestos. Su galería completa está en
`output/imagegen/nasa-paeces/tripticos/maqueta-3d-20260913/index.html`.

## Otro frente abierto en el corte anterior

[Ette Ennaka / Chimila](../chimila/README.md): investigación inicial de los 23 mitos
existentes. Ese frente de investigación permanece independiente del piloto Nasa
retomado el 13 de septiembre; no se iniciaron imágenes Ette en este piloto.
