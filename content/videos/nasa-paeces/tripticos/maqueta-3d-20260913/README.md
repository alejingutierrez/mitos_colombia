# Nasa–Paeces · reconstrucción de los 26 trípticos en maqueta de papel

Solicitud del 13 de septiembre de 2026: rehacer todos los trípticos con el estilo
reforzado de papel cortado y dejarlos actualizados en el sitio. Alcance cerrado:
26 mitos, IDs 429–453 y 553; 78 imágenes, entrada, acto y huella de cada mito.

## Dirección aplicada

El material debe verse construido y fotografiado: espesor de cartulina, bordes
cortados, pliegues que forman cuerpos y prendas, capas separadas, sombras de
contacto y profundidad de enfoque de una maqueta. Agua, niebla, plantas, fuego
y rayos son piezas de papel. Las huellas conservan su síntesis simbólica.

Cada original anterior fue la referencia principal de escena, personajes,
vestuario, objetos y composición. Los keyframes `b1a-maqueta-v2.png` y
`b1b-maqueta-v2.png` aportaron solamente la construcción material y la iluminación.
Los paneles ya aceptados del mismo mito se añadieron como referencia de continuidad.
Los prompts, referencias y hashes de cada solicitud están guardados en `requests/`
y `prompts/`. El manifiesto conserva la selección anterior sin sobrescribirla.

## Producción y publicación

- 78 imágenes generadas mediante **`image_gen.imagegen` integrado**. La herramienta
  no expone modelo exacto ni calidad de generación; no se les atribuyen parámetros
  de la API usada en campañas anteriores.
- 78 revisiones visuales individuales registradas en `accepted/`; versión v1
  aceptada para cada pieza de esta campaña.
- Originales PNG conservados. Entrada: 1536 × 1024; acto: 1024 × 1536;
  huella: 1254 × 1254.
- Derivados JPEG de publicación a calidad de codificación 96, submuestreo 4:4:4,
  sin redimensionamiento ni recorte. Esta calidad describe la conversión de archivo,
  no la generación. El publicador conservó los bytes de esos JPEG.
- 26 recibos de publicación aditivos bajo `nasa-maqueta-3d-20260913`. Se verificaron
  identidad, selección previa, archivos, referencias y texto antes de publicar.
- Los relatos, anteriores archivos e historial vertical se conservan. Los recibos
  guardan el antes y el después y tienen copia remota. Se revalidaron las páginas.

La comprobación pública completa está en [verification-all-26.json](verification-all-26.json).
Resultado aprobado: 26 filas de datos y relatos coincidentes, 26 historiales
verticales preservados, 78 imágenes nuevas con hash correcto, 78 anteriores en
línea, 26 páginas públicas coincidentes y 26 copias remotas de historial verificadas.
La [revisión en navegador](browser-review.json) registra muestras de El Trueno
en móvil y Juan Tama en escritorio, además de la galería local.
El [cierre](closure.json) reúne los hashes de 78 originales y derivados, QA,
26 recibos y la verificación. El primer intento de lectura tuvo un fallo transitorio
`fetch failed` en El hombre flaco; se conserva en
[verification-all-26-attempt-1.json](verification-all-26-attempt-1.json).
Ese intento ya comprobó los 78 archivos nuevos, los 78 anteriores y las 26 filas
de datos. La repetición de la lectura no volvió a publicar imágenes.

## Entrega

La galería está en
`output/imagegen/nasa-paeces/tripticos/maqueta-3d-20260913/index.html`, desde la raíz.
Reúne los 26 trípticos, búsqueda por título, acceso a los PNG originales y enlaces
a los mitos publicados. El estilo reforzado queda disponible para retomar el
piloto audiovisual de El Trueno.

Se reconstruyó y arrancó el contenedor local con `docker-compose up -d --build`;
el servicio `mitos_colombia-web-1` quedó en ejecución en el puerto 3003. El registro
está en [logs/docker-build.log](logs/docker-build.log). No hubo despliegue de código
de la app: la publicación actualiza sus datos, archivos y caché.

Comandos de consulta y reconstrucción de la entrega, desde la raíz del repositorio:

```sh
node content/videos/nasa-paeces/tripticos/maqueta-3d-20260913/workflow.mjs status
node content/videos/nasa-paeces/tripticos/maqueta-3d-20260913/build-delivery.mjs
```

`build-delivery.mjs` exige la verificación pública aprobada y comprueba los hashes
de originales, derivados, prompts, solicitudes, referencias y recibos antes de
reconstruir la galería y el cierre. No genera imágenes ni escribe en producción.
