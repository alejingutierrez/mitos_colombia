# La majayura de Puró — tríptico V1

Estado: publicado y verificado — ola 19. Fecha: 2026-09-06.
Unidad: `la-majayura-que-pierde-a-los-hombres`, incluida en el alcance congelado de 27 mitos.

## Relato, fuente y discrepancias

Texto objetivo congelado en `content/mitos-visuales/production/wayuu-2026-09-05/narratives/la-majayura-que-pierde-a-los-hombres.json`, SHA-256 `cf37022e776485ed07d5a9b5cff160e097890c3d726bb002fd11804108b01097`.

Lectura directa de Milcíades Chaves Ch., *Mitos, leyendas y cuentos de la Guajira* (1946), [edición ICANH](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1), PDF índice 5. La extracción sitúa el relato bajo la página 309 y antes del encabezado 310; el documento del lote de Biblia citaba 310. La captura PDF falló, pero la extracción completa del pasaje fue accesible.

Núcleos compartidos entre fuente y página: aparición de una majayura bien vestida, extravío hacia Puró, conocimiento sujeto a silencio y apariencia de piedra blanca que se retira hacia el mar. El tríptico interpreta esos núcleos, no todos los episodios de la ampliación editorial.

**Discrepancia pendiente del texto, no de la imagen:** la transcripción nombra Papach como piedra resultante, no como sabedor. Tampoco sostiene la expedición detallada, bienes y diálogos de la reescritura pública. No se inventa un Papach humano ni se ilustra esa ampliación como testimonio histórico. El texto no se modifica en esta campaña autorizada de imágenes. El ahogamiento y la muerte se reconocen como desenlaces narrados, pero no se representan.

## Memoria visual incorporada antes del prompt

Dos imágenes previas inspeccionadas en navegador:

- `output/playwright/wayuu-campaign/puro-before-0.png`: cueva y costa en capas, vestido estrellado, hombre con piedra en mano y título superpuesto.
- `output/playwright/wayuu-campaign/puro-before-1.png`: mujer ante cueva, hombre con torso descubierto, mar y luna; planos cercanos.

Se conservan continuidad territorial y profundidad; se retiran estrellas, proximidad, exposición corporal y piedra poseída en la mano. El PNG antiguo queda inventariado como no inspeccionado.

La búsqueda externa localizó un retrato titulado *MAJAYURA*, atribuido a **Julio Ariza Urbina** por un [blog de 2012](https://lecturas-yantares-placeres.blogspot.com/2012/07/la-majayura-misteriosa-princesa-wayuu.html). Se inspeccionaron la leyenda y la obra completa en `puro-reference-ariza.png` y `puro-reference-ariza-complete.png`. Es referente artístico contextual, no representación demostrada del episodio de Puró. Fecha de obra, colección, atribución independiente y licencia no verificadas.

Se rescatan dignidad, quietud y contraste rojo/verde; no se copian rostro, tocado, collares, motivos o pintura facial. No se descarga el original, publica ni envía a OpenAI. El blog contiene otra reescritura y errores/discusiones terminológicas: no se adopta como autoridad cultural. La clasificación de un sitio de monstruos no fue usada. Búsqueda no exhaustiva.

La biblioteca pasa de 172 a 173 referencias por este referente contextual; su procedencia y revisión quedan congeladas en el paquete. Incorporar una referencia no equivale a aprobarla como modelo o a tener derechos para republicarla.

## Modelos y dirección

Se inspeccionaron siete modelos; se seleccionan seis para el plan: identidad de majayura, gramática de hombres, cueva, desorientación, secreto y piedra móvil. Los seis hashes coinciden con la selección vigente. Papach fue inspeccionado para confirmar que su ficha es pétrea, pero no entra en el reparto.

Majayura: Wayuushein índigo amplia, pechera arcilla, sombrero ocre bajo, trenza negra y sandalias oscuras abiertas. Hombre anónimo: Kotin ocre sobre Kemiisa crema, faja carbón, sombrero ocre y calzado tejido oscuro. Las cuatro alternativas de su ficha no constituyen un grupo viajando junto. Figuras pequeñas, rostros de recorte casi plano.

- **Entrada:** tierra-camino plegada en acordeón entre viajero y majayura ante cueva; la distancia crece. Metáfora editorial del extravío, no geografía literal.
- **Acto:** piedra blanca única alejándose hacia el mar, dos posiciones vacías y observador en tierra. La estela y los vacíos son traducción editorial de movimiento.
- **Huella:** cueva condensada en pliegue que guarda su acceso. Síntesis del secreto, sin escenario ni Papach.

## Producción reproducible

Plan: `content/mitos-visuales/wayuu.puro.triptico.v1.json`.
Paquete inmutable: `content/mitos-visuales/_openai/wayuu/la-majayura-que-pierde-a-los-hombres/wayuu-puro-triptych-01/`.
Allí están los tres prompts, sus hashes, narrativa y memoria visual congeladas.

OpenAI API, CLI oficial de imagegen, `gpt-image-2`, cuenta ya autorizada en `.env` ignorado. Texto solamente, sin referencias subidas. Horizontal high 1536 × 864; vertical medium 864 × 1536; cuadrada medium 1024 × 1024. Archivos en `output/imagegen/wayuu/triptychs/wayuu-puro-triptych-01/`.

66 pruebas relevantes aprobadas y `git diff --check` limpio. Contenedor recreado mediante `docker-compose up -d --build`, ruta local HTTP 200. Tres imágenes producidas y seleccionadas: 1 H, 1 V, 1 S, ninguna corrección. El reintento de lectura HTML no es una generación de imagen.

## Aprendizajes y límites observados

Separar belleza y autonomía de adornos o seducción; separar inspiración artística de evidencia del mito. Describir la anomalía como una relación material visible y comprobar que no parezca un camino normal. No convertir las variantes de una ficha de grupo en una expedición narrativa. Mantener las diferencias de fuentes documentadas sin reescribir el texto fuera de la autorización.

## Selección y revisión visual

- **entrada:** Dos figuras pequeñas separadas por un camino de papel que se levanta en tres pliegues altos; mujer índigo cerca de cueva, hombre ocre más próximo. Acantilado estratificado, mar al fondo y terreno continuo sin base exterior. Límites: El hombre está más a la izquierda que el objetivo; comprobar título largo en portada. El acordeón afecta sobre todo a la tira del camino, no a todo el ancho del terreno. La multiplicación de recorrido queda visible. Desorientación traducida editorialmente, no forma real de Puró.
  Archivo: `output/imagegen/wayuu/triptychs/wayuu-puro-triptych-01/entrada.jpeg`.
  Prompt: `content/mitos-visuales/_openai/wayuu/la-majayura-que-pierde-a-los-hombres/wayuu-puro-triptych-01/prompts/entrada.prompt.txt`.
- **acto:** Hombre ocre en tierra seca observa una piedra blanca única en borde del agua. Dos hendiduras vacías y estela clara alineadas con la piedra. Mar de láminas azules con sombras y primer plano despejado. Límites: Hombre de alrededor de un quinto de altura, mayor que objetivo de un octavo pero sin retrato ni primer plano. Estela doble se lee como rastro material; los vacíos no reproducen exactamente todas las facetas de la piedra. Vacíos y estela son metáforas del desplazamiento, no marcas documentadas.
  Archivo: `output/imagegen/wayuu/triptychs/wayuu-puro-triptych-01/acto.jpeg`.
  Prompt: `content/mitos-visuales/_openai/wayuu/la-majayura-que-pierde-a-los-hombres/wayuu-puro-triptych-01/prompts/acto.prompt.txt`.
- **huella:** Forma compacta de láminas carbón superpuestas, abertura oscura y tira arena que entra y desaparece bajo un pliegue. Sin personas ni paisaje; fondo verde gris y sombras físicas. Límites: La abertura es mayor que la rendija pedida y la tira asoma hacia fuera; el camino termina oculto, no hay cierre hermético. Síntesis editorial de acceso y secreto; no Papach, objeto ritual o emblema tradicional.
  Archivo: `output/imagegen/wayuu/triptychs/wayuu-puro-triptych-01/huella.jpeg`.
  Prompt: `content/mitos-visuales/_openai/wayuu/la-majayura-que-pierde-a-los-hombres/wayuu-puro-triptych-01/prompts/huella.prompt.txt`.

Los tamaños coinciden con las solicitudes; hashes de imágenes y prompts exactos. Tiempos informados por CLI: H 77,7 s; V 33,7 s; S 43,7 s. No se infieren costo ni IDs de petición ausentes. La cueva simbólica conserva abertura mayor que la rendija solicitada: comunica acceso oculto, no cierre hermético. El acordeón transforma principalmente la tira del camino, no todo el terreno. Las cifras de escala de prompt son objetivos, no mediciones certificadas.

## Publicación aditiva y prueba pública

- Selección y auditoría: `content/mitos-visuales/_openai/wayuu/la-majayura-que-pierde-a-los-hombres/wayuu-puro-final-selection/`.
- Recibo: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-19/la-majayura-que-pierde-a-los-hombres.json`.
- Verificador inicial: `content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-19.json` — fallo de conexión `fetch failed` al leer HTML; DB, 3 archivos nuevos, 2 anteriores y archivo remoto ya correctos.
- Verificación repetida: `content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-19-recheck.json` — passed, sin nueva generación ni subida.
- Navegador: `content/mitos-visuales/production/wayuu-2026-09-05/browser-review-wave-19.json` — seis imágenes cargadas e inspeccionadas a 1440/390 px, cero desbordamiento y errores; cuatro advertencias de precarga CSS.

Título de escritorio deja al viajero completo justo por encima; recorte roza extremo derecho de cueva, pero acceso y majayura siguen visibles. Original e imagen interior móvil completos. Título móvil no tapa viajero, vacíos, piedra o estela. La huella mantiene su lectura a 184 px.

Las dos imágenes antiguas siguen accesibles y la fila vertical 345 se conserva. Tres archivos nuevos con sufijos únicos, archivo histórico remoto, promoción atómica y caché purgada. Relato conserva SHA-256; su discrepancia editorial queda documentada, no resuelta por publicar imágenes. La selección mantiene `published: false` como registro anterior a la publicación; el recibo posterior acredita la promoción.

Campaña: 20/27 mitos, 60 imágenes principales nuevas, 40 anteriores conservadas, 7 mitos/21 imágenes pendientes. Memoria visual: 176 referencias (173 antes de añadir estas tres nuevas). Próximo: Umaralá. No hay commit, push ni despliegue de código; sí publicación de imágenes en los datos públicos. No se declara cierre global.
