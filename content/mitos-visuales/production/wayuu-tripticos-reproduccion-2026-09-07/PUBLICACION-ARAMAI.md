# Arámai: publicación y entrega del original horizontal

## Resultado
Publicado y verificado el 7 de septiembre de 2026 en https://www.mitosdecolombia.com/mitos/aramai. Tres imágenes nuevas; originales anteriores conservados; relato sin modificaciones. Keyframes aplazados. Los otros 26 trípticos de la reproducción no se han producido ni publicado.

El original horizontal es JPEG, generación gpt-image-2 **high**, 1536×864, 252612 bytes, SHA-256 87fff4b7ff18af2f267c63778dab603290fcfc3606e46a6096ea976a4c04d9b9. High describe la calidad de generación, no resolución 4K ni máximo detalle a cualquier tamaño de pantalla. No se regeneró ni amplió artificialmente.

## Causa y corrección
La entrega anterior era una muestra local. Se publicó con apply-myth-triptych.mjs --preserve-original, que sube los bytes sin recortar, redimensionar o recomprimir, mantiene históricos y purga caché.

La inspección posterior encontró una segunda transformación: ImageFrame aplicaba el optimizador Next con q=75. Se añadió una opción explícita unoptimized a la fuente principal y mobileUnoptimized independiente. Las horizontales en portadas de mitos y dentro del relato móvil usan el original; la fuente vertical móvil y las demás imágenes conservan la política previa. No se cambió el diseño ni object-fit.

## Aislamiento del despliegue
Base exacta de producción: a167f068cce8ae61b17df3ac6a95281e19fe3a99.
Checkout aislado: /private/tmp/aramai-original-release.CJNUId.
Cambio fuente: tres archivos y siete líneas añadidas, sin dependencias ni cambios locales ajenos.
Despliegue: dpl_F7DQy1WprEohP51McVZ3P8UCoBns, READY, Next.js 16.3.1.
URL: https://mitos-colombia-3bcfkrnyl-alejingutierrezs-projects.vercel.app.
Build completado en 60 segundos según log. Se construyó sin asignar dominio y se verificó antes de promote. El dominio se comprobó de nuevo después de promover.
Anterior: dpl_AeD4LUjhGw9MN5SbWzXKMFnSHuuC.
No commit ni push: se desplegó base + parche aislado, registrado en original-horizontal-delivery.patch. El mismo ajuste queda en el checkout principal y debe incorporarse a la rama vigente antes de futuros despliegues Git para no perderlo.

## QA
Flujo: abrir Arámai → portada de escritorio → cambiar a móvil y navegar a relato → cargar horizontal original.
Browser plugin/skill no disponible; se usó Playwright CLI siguiendo la habilidad disponible. Revisión de interfaz y despliegue guiada por habilidades específicas.

| Comprobación | Resultado |
| --- | --- |
| Identidad, contenido no vacío y sin overlay | Pasa |
| Escritorio 1440×1000 | currentSrc es URL Blob directa, sin srcset; nativeWidth 1536 y nativeHeight 864 |
| Móvil 390×844, horizontal dentro de relato | URL Blob directa; 1536×864; cargada y visible |
| Tres nuevos Blob y sus SHA-256 | Pasa; bytes idénticos al origen |
| Neon, relato, historial vertical y tres URL previas | Pasa |
| HTML público con tres archivos nuevos | Pasa |
| Consola del mito | Cero errores; advertencias preexistentes por preload CSS no usado inmediatamente |
| Errores runtime de /mitos/aramai desde 18:07 UTC | Ninguno encontrado en ventana consultada |
| Tests | 5 publicación aditiva + 4 entrega original + 4 tipografía; todos pasan |
| Contenedor local | docker-compose up -d --build completado; iniciado |

No se afirma revisión de otros navegadores ni de todos los mitos. No se configuraron monitorización o drains nuevos. El cambio mantiene las optimizaciones de tarjetas/listados y de imágenes no horizontales. La fuente horizontal original puede consumir más ancho de banda que su derivada, y una pantalla mayor o Retina sigue limitada por los 1536 píxeles nativos.

## Evidencia
- aramai.publication-selection.json: prompts/hashes/contrato narrativo usados.
- publication-receipts/aramai-rich-17-2026-09-07/aramai.json: recibo antes/después y copia remota aditiva.
- verification-aramai-after-visor.json: verificación final; SHA-256 6be73028e2fcef5a7594a4087df6a21896c22cdfbcc4c6d0254d696a6e44e4fb.
- scripts/original-horizontal-delivery.test.mjs: pruebas de entrega sin recomprimir.
- Capturas de interfaz: /private/tmp/aramai-original-production-desktop-final.png y /private/tmp/aramai-original-production-mobile.png (temporales).
