# El Trueno · 14 keyframes en maqueta de papel

13 de septiembre de 2026. Continuación solicitada después de publicar los 26
trípticos Nasa con el estilo reforzado. Se completó la secuencia del primer mito:
14 cuadros seleccionados editorialmente, guion de 135 palabras y 84 segundos
provisionales. La selección completa está en [selection.json](selection.json).

## Entrega

- Visor: `http://127.0.0.1:8897/`.
- Archivo del visor: `output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/index.html`.
- Lámina conjunta: `output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/secuencia-completa.jpeg`.
- [Guion y tiempos por plano](../preproduccion-01/GUION-TECNICO.md).
- [Verificación de originales, referencias y secuencia](verification.json).
- Paquete: `output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01/el-trueno-keyframes-maqueta-03.zip`.
  Incluye los 14 PNG originales, 14 prompts finales, manifiesto con hashes,
  guion y lámina conjunta. [Integridad del paquete](package.json).
- [Revisión del visor y comprobación del sitio local](browser-review.json).
- Prompts finales: `prompts/` y argumentos exactos en `*.request.json`; los dos
  planos de apertura conservados tienen su solicitud en `revision-maqueta-02/`.

Todos los paths de salida anteriores son relativos a la raíz del repositorio.
Los 14 PNG originales son de 941 × 1672, proporción próxima a 9:16, sin recorte
ni redimensionamiento. Las miniaturas y la lámina son derivados para revisión.

## Qué se produjo

Se conservaron B1A y B1B de `revision-maqueta-02`, los dos cuadros que fijaron
el refuerzo de material. Se reconstruyeron B2A–B7B: doce nuevas piezas seleccionadas.
La continuación produjo 14 candidatos visuales: doce seleccionados y dos rechazados
conservados. Una llamada adicional fue rechazada por validación de argumentos
antes de generar imagen: la herramienta admite como máximo cinco referencias.

Se usó **`image_gen.imagegen` integrado**, una llamada por candidato. El modelo
exacto y la calidad de generación no están expuestos por esa herramienta.
Los originales generados se copiaron al workspace. No se usó API/CLI alternativo.

## Dirección y continuidad

Cada keyframe anterior seleccionado fue la referencia de composición, personajes
y acción. Los dos planos iniciales reforzados aportaron la construcción de papel;
el tríptico actualizado aportó material y vestuario. Un cuadro anterior revisado
apoyó la continuidad. El cierre corregido usó sólo las dos vistas de agua pertinentes.

Se reforzaron capas separadas, bordes, sombras de contacto, ropa plegada, figuras
hechas de planos de papel y profundidad de enfoque de maqueta. La puesta en escena
mantiene tres grupos distintos: Trueno, médicos C01 y autoridades visitantes C02.
La visita muestra dos varas y cuatro pies en tierra; la petición acerca la cámara
a dos puntos de contacto. El cierre vuelve al mismo detalle con agua sin varas
ni anillos, después del sendero vacío.

El guion, la fuente congelada y los 14 tiempos se conservaron. No se añadieron
episodios de otras versiones, remedios, rituales, víctimas ni una aparición final.
La secuencia es una adaptación editorial; no una certificación comunitaria.

## Correcciones comprobadas

1. **B4A:** el primer cenital tenía luz demasiado clara. Se regeneró con exposición
   baja y azul gris nocturno, manteniendo el contorno de la laguna y sin cielo.
2. **B7B:** el primer cierre arrastró personajes y un plano general desde las
   referencias de material. Se retiraron esas referencias y se conservaron sólo
   el detalle original vacío y B5B. El resultado recupera la escala y la ausencia.

Ningún candidato rechazado alimentó otras imágenes. La revisión conserva sus
archivos, solicitudes, hashes y causas en `selection.json`. También conserva
los dos rechazos de la producción histórica. La validación de argumentos se
registra aparte en [tool-validation-events.json](tool-validation-events.json).

## Comprobación y reproducción

El renderizador comprobó 14 PNG, 55 referencias históricas y 59 referencias de
la revisión; verificó fuente, plan, prompts, hashes, proporciones y continuidad
temporal. La lámina completa se revisó junto con los originales individuales.

El navegador cargó las 14 miniaturas y los originales de B4A y B7B. Se comprobó
abrir, avanzar y cerrar el visor, y que el último cuadro deshabilita el avance.
La vista de 451 × 998 no presenta desbordamiento horizontal; no se devolvieron
errores ni advertencias de consola. El contenedor se reconstruyó con
`docker-compose up -d --build`, quedó activo y el sitio local respondió HTTP 200.

```sh
node content/videos/nasa-paeces/videos/el-trueno/revision-maqueta-03/workflow.mjs status
node content/videos/nasa-paeces/videos/el-trueno/preproduccion-01/tools/render-review.mjs --revision=revision-maqueta-03
```

Las selecciones históricas permanecen intactas. El visor anterior está guardado
como `index-maqueta-02.html` y su lámina como `secuencia-maqueta-02.jpeg` en la
carpeta de salida. La revisión actual queda lista para evaluar con el usuario.
La voz grabada, animación y video final no forman parte de esta entrega de keyframes.
