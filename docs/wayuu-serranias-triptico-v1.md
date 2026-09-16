# Serranías de La Guajira · tríptico

Estado: publicado y verificado, ola23, mito24/27.

Recibo aditivo y reporte `verification-wave-23.json`: passed, tres nuevos blobs, dos anteriores accesibles, relato intacto, filas verticales preservadas e historia remota coincidente. Seis vistas a1440/390 inspeccionadas; imágenes cargadas y sin desbordamiento. El primer símbolo escritorio se capturó antes de cargar; la toma final tras decode muestra el símbolo completo. Personaje y mar no quedan tapados por títulos. `browser-review-wave-23.json` conserva evidencias. Sin commit, push ni despliegue de código.

## Evidencia y recorte
Relato congelado y hash en el plan `content/mitos-visuales/wayuu.serranias.triptico.v1.json`. Relectura de la sección II de [Chaves 1946, pp.310–311](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1), cadena Juancito Iguarán/Roberto Iguarán p.316. Viajeros y relieve, mar retirado y pozos pertenecen a esta versión. Dispersión de semillas y organización clanil detectadas pero no escenificadas; su inventario sigue en Biblia. No se edita el relato ni se fusiona con Mareiwa, Creación o Worunka.

La búsqueda acotada de imágenes históricas encontró reediciones y [Relatos con GPS](https://geografiasmiticasguajira.com/), contexto territorial, sin seleccionar obra artística externa atribuible para el prompt. No se declara búsqueda exhaustiva. Falló captura PDF web por cache miss, pero la sección completa fue legible en extracción textual. Ninguna imagen externa descargada ni enviada a OpenAI.

## Memoria y Biblia
Dos imágenes previas inspeccionadas en navegador: capturas `output/playwright/wayuu-campaign/serranias-before-{0,1}.png`. Se rescatan capas y color; se excluyen cabezas monumentales, atuendo ornamental del creador, rosetas y collage de episodios. PNG antiguo conservado sin presumir aprobación.
Hoja de contacto completa del lote25 inspeccionada, más Wojoro/estado y presencia Mareiwa. Seis modelos seleccionados por el plan. Wojoro conserva envolvente arena sobre camisa y pieza terracota, sombrero y sandalias; se simplifica a recorte pequeño. Agencia de Mareiwa fuera de campo en vertical, no avatar inventado.

## Dirección y QA
H high1536×864: Wojoro se vuelve loma por continuidad de capas del vestido; un personaje, no estatua duplicada. V medium864×1536: mar que se despega de tierra, piedra Kasuto, honda en reposo y tres pozos. S medium1024²: sandalia-relieve única. Pliegues, disposición y conteos son traducción editorial, no cartografía o objetos etnográficos literales.
Tres generaciones, H1/V1/S1, cero correcciones. CLI85.5/33.3/47.7segundos; coste e IDs no disponibles. H tiene loma hasta borde derecho y rostro algo volumétrico pequeño. V pozos/honda algo naturalistas dentro de mundo de papel; no se afirma instante exacto del lanzamiento. S dos tiras no cruzadas: motivo de sandalia, no ficha técnica waireña. Revisadas las tres originales, no raster local editado.

## Pipeline
Guía imagegen aplicada: CLI oficial OpenAI/gpt-image-2 desde texto y cuenta .env autorizada; paquetes inmutables. Guía Vercel Storage aplicada mediante subida aditiva y conservación de historia. Guía Playwright para revisar imágenes previas y portada/interiores a1440/390.
34 tests relevantes aprobados. Selección y auditoría: `content/mitos-visuales/_openai/wayuu/serranias-de-la-guajira/wayuu-serranias-final-selection/`. Publicación sólo con --preserve-original y ensayo previo. El campo published:false de selección es snapshot previo; recibo determinará el estado público.
