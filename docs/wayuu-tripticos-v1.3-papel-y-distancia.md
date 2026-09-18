# Arámai · V1.3 · papel y distancia de cámara

Fecha: 5 de septiembre de 2026. Estado: calibración de dirección, sin aprobación.

Actualización del usuario: le gusta esta muestra como avance, pero pide cinco
opciones con más realismo mágico y relato. Continúa en
`docs/wayuu-tripticos-v1.4-cinco-opciones.md`; no se debe confundir esta
aceptación de la dirección material con aprobación del tríptico completo.

## Decisión del usuario

«ninguna me gusta, el estilo de caras e ilustración es muy pixar, los planos
están muy cerrados, aun no me gusta el punto al que estamos llegando».

Las cuatro imágenes de V1.2 quedan descartadas. Se conservan archivos, prompts
y evaluaciones previas como historial. Ninguna queda seleccionada para publicar.
La Biblia no se regenera y no se produce otro mito.

## Error de dirección

La especificación de mejillas, nariz, cejas, pelo y manos por capas favoreció
cabezas modeladas y facetadas. Pedir rostros cercanos y gestos minuciosos llevó
el encuadre al retrato y al plano medio. La textura de papel sobre ese volumen
no cambió su lectura de personaje de animación.

Los controles de relato e integridad de V1.2 siguen siendo útiles. Su éxito
técnico no resolvió el lenguaje plástico. La dirección debe comprobar por
separado la fabricación aparente de las figuras, la distancia entre planos,
el encuadre, la acción narrativa y la magia.

## Hipótesis material a comprobar

- Personas: recortes casi planos, proporciones adultas, cabeza pequeña de
  perfil. Nariz en el contorno de una sola pieza; ojo mínimo; pelo como pieza
  recortada y manos como siluetas. Ropa de dos o tres hojas amplias y pocos
  dobleces. Sin cabezas modeladas, talladas o trianguladas.
- Espacio: profundidad física entre hojas del entorno, con aire, oclusión y
  sombras; al menos ocho distancias planeadas. Los personajes pueden ser
  planos dentro de un mundo profundo. Todo el paisaje debe compartir la
  materialidad del papel, incluido el cielo.
- Cámara: gran plano general, cuerpos completos en planos intermedios,
  ninguna figura mayor al 16% de la altura en este estudio. Primer término
  abierto. Este umbral calibra la muestra; no se presenta como ley universal
  para todas las imágenes futuras.
- Acabado: fibras y cantos de piezas internas; encuadre a sangre sin base,
  respaldo, cartón corrugado, mesa ni marco exterior visibles.

Se inspeccionaron las entradas muiscas de Bachué y Bochica maestro y el acto
de Chiminigagua para comparar construcción y profundidad. No se subieron
esos archivos a la API ni se transfirieron sus paisajes o prendas al Wayúu.

## Una sola muestra, no un tríptico nuevo completo

La entrada vuelve a la petición de Arámai, situada lejos de la cámara. La
penumbra bajo la enramada contiene otra hora del día como hipótesis plástica
de una escucha no humana. Esta elección es editorial, no un símbolo ni un
episodio atribuido a la fuente histórica. La fidelidad narrativa y la fuerza
mágica siguen abiertas a revisión después de comprobar el lenguaje plástico.

Se conserva el mismo relato objetivo y su SHA-256 de V1.2. En el plan V1.3,
acto y huella son briefs provisionales pendientes, no piezas para generar en
esta tanda. El paquete de ejecución incluye únicamente `entrada`.

Plan: `content/mitos-visuales/wayuu.tripticos.v1.3.json`.
Paquete: `content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-art-13-wide-01/`.

```bash
node scripts/mitos/prepare-openai-triptych.mjs \
  --comunidad wayuu --slug aramai \
  --plan content/mitos-visuales/wayuu.tripticos.v1.3.json \
  --batch-id wayuu-aramai-art-13-wide-01 --only entrada
```

Generación remota con la API de OpenAI y `gpt-image-2`, sólo texto, sin
referencias locales adjuntas. Se usa la cuenta del `.env` ignorado. Horizontal
1536×864, 16:9 real, calidad `high`. Se mantiene `medium` para las otras
funciones; no se generan en esta tanda. El expediente congela relato, plan,
prompt, calidad y tamaño. No se altera la página ni la selección publicada.

## Evaluación obligatoria

Primero mirar la salida sin dar por cumplido el prompt: contar figuras,
comparar su altura con el encuadre, observar la construcción de sus cabezas,
identificar planos y describir qué sucede. Registrar lo que falle aunque el
archivo y sus hashes sean correctos. Mostrar esta única salida como estudio
para juicio del usuario, no como dirección conseguida ni piloto aprobado.

## Resultado observado de la única salida

Archivo: `output/imagegen/wayuu/triptychs/wayuu-aramai-art-13-wide-01/entrada.jpeg`.
La API completó una imagen en 80,9 segundos; 1536×864 píxeles verificados.

El perfil de Arámai tiene una lectura más plana y sobria; los personajes
están enteros, se ve un patio amplio y hay capas visibles en cielo y plantas.
Sin embargo, Arámai mide aproximadamente 224 de 864 píxeles de alto, un 26%
estimado visualmente: incumple el objetivo del 16%. La enramada izquierda
todavía concentra mucho peso y el suelo continuo no demuestra los ocho
planos físicos pedidos. La penumbra azul admite lectura de sombra ordinaria;
la presencia mítica no está suficientemente resuelta.

Estado: **estudio parcial, sin aprobación**. Se muestra para evaluar si el
lenguaje de recortes va en la dirección deseada, no como solución final de
magia o encuadre. No se generaron vertical ni cuadrada. Los cuatro tests de
integridad narrativa pasaron; ese resultado no aprueba la imagen.

El primer comando de generación fue rechazado localmente porque `generate`
no admite `--max-attempts`; no llegó a llamar la API. Se quitó ese argumento
y se ejecutó el CLI oficial sin modificarlo. No se hicieron reintentos de
generación ni se subieron referencias locales.
