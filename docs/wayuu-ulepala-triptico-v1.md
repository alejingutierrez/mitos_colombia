# Ulépala — tríptico narrativo V1

Estado: publicado y verificado, ola 17. Fecha: 2026-09-06.

## Relato y fuentes

Versión pública congelada en `content/mitos-visuales/production/wayuu-2026-09-05/narratives/ulepala.json`, SHA-256 `d0ee7ef1040f93122f86d2b1aa4e69b40b4464d6d37be036e8c756cb7674199b`. No se modifica el texto público.

Contraste con [Finol, Mito y cultura guajira](https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf), narración de Paz Ipuana, pp. 177–207: caverna y abrigo (183), mujeres-auyamas (193–194), corazón-cardenal (207). No importar cruce sobre agua o banco-boa de Perrin. La caverna desarrolla el viaje resumido por la edición pública.

La violencia del aprendizaje y del desenlace se registra en el contrato, pero no se escenifica. Las sombras vegetales son anticipación editorial; la fuente no describe esas sombras ni una transformación pacífica. La forma vacía del corazón es una síntesis no anatómica, no un emblema tradicional.

Referencia naturalista textual: [eBird, Vermilion Cardinal](https://ebird.org/species/vercar1). El pico gris y el pequeño mentón negro corrigen la máscara extensa y pico rojo de la ficha anterior. No se presenta esta consulta como imagen histórica del mito.

## Biblia y memoria visual

Se inspeccionaron los archivos vigentes de identidad de Ulépala y su compañera, caverna submarina, colectivo de mujeres-auyamas y cardenal. Selección de origen: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/accepted-selection.json`.

Se conservan prendas completas: Kotin azul, camisa crema, prenda inferior carbón, faja roja, pañuelo arena; manta femenina vino y abrigo índigo. Se simplifican rostros y se exige papel también en terreno, mar y piedras.

Las dos imágenes públicas previas fueron inspeccionadas y capturadas:
- `output/playwright/wayuu-campaign/ulepala-before-0.png`.
- `output/playwright/wayuu-campaign/ulepala-before-1.png`.

Se rescatan profundidad de estratos, atmósfera y cardenal; se excluyen abrazo romántico dominante, espectro blanco, torso descubierto y collage de barco, mariposas y luna. El archivo PNG antiguo inventariado sigue sin inspección: no se inventa una decisión sobre él.

Búsqueda externa acotada: “Ulépala ilustración Ramón Paz Ipuana”. Resultados de retrato del autor, otros cuentos ilustrados y nuestra página no equivalen a una representación histórica de Ulépala. Ninguna imagen externa histórica aceptada en esta búsqueda; no se declara saturación.

## Funciones y producción

| Pieza | Función | Parámetros |
|---|---|---|
| Horizontal | Compañera guía y abriga bajo el mar | 1536×864, high |
| Vertical | Conversación y sombras de auyama | 864×1536, medium |
| Cuadrada | Corazón vacío cuyo recorte se vuelve ala | 1024×1024, medium |

Modo: OpenAI API, `gpt-image-2`, CLI oficial de imagegen, texto sin imágenes locales adjuntas. No generación local ni recortes para sustituir formatos.

Planes y prompts inmutables:
- `content/mitos-visuales/wayuu.ulepala.triptico.v1.json` → `wayuu-ulepala-triptych-01`.
- `content/mitos-visuales/wayuu.ulepala.triptico.v1.1-acto.json` → `wayuu-ulepala-triptych-02-acto`.
- `content/mitos-visuales/wayuu.ulepala.triptico.v1.2-entrada.json` → `wayuu-ulepala-triptych-03-entrada`.

Los paquetes viven en `content/mitos-visuales/_openai/wayuu/ulepala/`; cada uno guarda relato, plan, memoria y prompts.

Correcciones: V inicial amplía al observador y aproxima mujer al borde; V2 aleja todo el grupo conservando las sombras conectadas. H inicial conserva mar/cueva pero no resuelve claramente mano y abrigo, añade borde ornamental y amplía figuras; H2 pide una relación más explícita y distante. S inicial conserva función simbólica y materialidad sin nueva generación.

## Comprobaciones locales

Preparación validada; conjunto de 66 pruebas aprobado y `git diff --check` sin incidencias. Contenedor recreado mediante `docker-compose up -d --build`; ruta local de Ulépala HTTP 200. La primera consulta sin acceso de red devolvió 000; la comprobación con acceso autorizado confirmó 200. Estas pruebas no acreditan publicación.

## Cierre y publicación comprobada

Cinco generaciones únicas: H2 + V2 + S1; dos correcciones. No se cuentan preparaciones, capturas o subidas como generaciones. Tiempos CLI: H1 84,7 s; V1 36,9 s; S1 37,8 s; V2 33,3 s; H2 84,9 s. No se infiere facturación ni request IDs.

Selección: `content/mitos-visuales/_openai/wayuu/ulepala/wayuu-ulepala-final-selection/selection.json`. Auditoría: misma carpeta, `iteration-audit.json`. La selección es una fotografía previa a publicación; el recibo posterior acredita el estado publicado.

Archivos elegidos:
- `output/imagegen/wayuu/triptychs/wayuu-ulepala-triptych-03-entrada/entrada.jpeg` — high, 1536×864.
- `output/imagegen/wayuu/triptychs/wayuu-ulepala-triptych-02-acto/acto.jpeg` — medium, 864×1536.
- `output/imagegen/wayuu/triptychs/wayuu-ulepala-triptych-01/huella.jpeg` — medium, 1024×1024.

Publicación aditiva: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-17/ulepala.json`. Tres URLs nuevas sin recortar ni recomprimir; dos imágenes públicas anteriores disponibles y fila vertical previa preservada. Archivo remoto conserva punteros anteriores y nuevos. Caché pública purgada.

Verificador: `content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-17.json`, estado passed; una fila de mito coincide, relato preservado, tres blobs nuevos con SHA-256 exacto, dos anteriores online, historial vertical y archivo remoto correctos, HTML incluye las tres URLs.

Navegador: `content/mitos-visuales/production/wayuu-2026-09-05/browser-review-wave-17.json`; seis imágenes decodificadas y observadas en 1440 y 390 px, sin desbordamiento horizontal ni errores de consola. Cuatro advertencias de precarga CSS. Título de escritorio no tapa pareja; título móvil no tapa auyamas; símbolo legible en pequeño.

Límites observados: H2 no logra los 125 píxeles pedidos y el contacto de manos se confunde parcialmente con tela. No se afirma un agarre inequívoco; sí se ve guía y continuidad de abrigo. V2 extiende hojas por bordes de mantas: licencia vegetal editorial, no diseño histórico de clan. S usa corazón editorial reconocible, no órgano ni emblema tradicional.

## Aprendizajes

Separar gesto y encuadre evita aceptar sólo una atmósfera bonita. En H la escala mejoró, pero pedir mano y tela simultáneas no garantiza separar visualmente esos contactos: una futura escena debe priorizar una relación legible y comprobarla en píxeles. En V, alejar a TODO el grupo corrigió tamaño del observador y margen de las mujeres conservando el prodigio. La referencia de un modelo aceptado sigue siendo revisable: color y especie del cardenal no se heredan sin contraste.

Campaña: 18/27 mitos, 54 principales nuevas, 36 anteriores conservadas; faltan nueve mitos y 27 imágenes finales. Próximo: Guanurú. No commit, push ni despliegue de código; publicación sobre datos y archivos públicos autorizados.
