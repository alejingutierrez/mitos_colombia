# Creación Wayuu · tríptico y memoria visual

Estado: publicado y verificado el 2026-09-06. Mito `creacion-wayuu`; unidad independiente de Mareiwa y Serranías. Selección del agente bajo autorización global del usuario, no aprobación individual atribuida al usuario. Campaña: 10/27 trípticos publicados, 17 pendientes.

## Relato y fuentes

Relato completo congelado en `content/mitos-visuales/production/wayuu-2026-09-05/narratives/creacion-wayuu.json`, SHA-256 `8e39659bf2e7796d5f813cd744fdceb278176576c5d9d3c1feb76db182075b8f`. Se reconoce su naturaleza de relato compuesto; no se cambia texto público ni se presenta la secuencia como una versión antigua única.

[Chaves, página impresa 311, PDF índice 7](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1) sitúa la creación de personas en una gran cueva o pozo. La salida concreta se formula en el texto público. El modelado en barro pertenece a otra variante y queda fuera de este tríptico. No se representan signos claniles.

[Carrasquero y Finol, estudio de la yonna](https://ve.scielo.org/scielo.php?pid=S1315-95182009000400006&script=sci_arttext) describe la relación generativa de Mma y Juyá. Sólo se toma esa relación; no se transportan a estas escenas los ritos, coreografías o signos estudiados en ese contexto. Los primeros fuegos familiares y la espera de semillas se atribuyen al relato compuesto del proyecto.

## Memoria visual realmente inspeccionada

Se revisaron las dos imágenes públicas anteriores mediante capturas `creacion-before-0.png` y `creacion-before-1.png` en `output/playwright/wayuu-campaign/`. Se retienen noche azul, arena y relieve. Se descartan para esta dirección el primer plano de anciano barbado, taller, muñecos, patrones, casas redondas, canoa y velero. Las imágenes se preservan como versiones anteriores, no se invalidan ni borran.

Se localizó e inspeccionó [Cosmogonía Wayuu, de Tatiana Castrillón](https://tatocastrillon.com/cosmogonia-wayuu), concept art para Bombillo Amarillo. Su panorama conecta tierra, mar, vegetación, animales y personas mediante escalas diferentes. Se toma como inspiración analítica para pensar relaciones y amplitud; no se copia composición, iconografía, cuerpos divinos ni genealogía. No es evidencia de una versión histórica del mito.

La página indica todos los derechos reservados. Fecha de obra desconocida: el copyright 2026 del sitio no prueba la fecha de creación. Captura interna de revisión `creacion-external-castrillon.png`; no se descargó el original, no se subió a OpenAI y no se publica como imagen del mito. El extractor web recibió 403; el portafolio público cargó normalmente en navegador. La referencia permanece en la memoria visual con procedencia y límites. La versión más antigua almacenada del proyecto sigue inventariada pero no inspeccionada.

## Biblia, reparto y variantes

Se inspeccionaron el tablero del lote 11, el modelo completo de los Primeros Wayuu y la presencia de Juyá. Se verificaron hashes de los modelos pertinentes. En las escenas se conserva ropa completa y diferenciada: mujer terracota, mayor carbón-violeta con womu, hombre con camisa arena y paneles ocre, mayor con manta masculina marfil, joven salvia y niño con camisa cruda y paneles índigo. Rostros pasan a perfil de una hoja de papel, no caras modeladas. Prendas son continuidad editorial de repertorios investigados, no arqueología del origen.

La ficha del lugar omite personas porque estudia una cavidad; eso no impide incorporarlas a la escena donde el relato las necesita. No hay nacimiento anatómico, modelado corporal, rito ni deidad humana visible. En horizontal sólo aparecen mujer y niño; la vertical contiene las seis identidades.

## Tres funciones y licencias

- H: primera noche habitada, tres fuegos familiares lejanos. La luz se convierte en un camino material aún desplegándose entre dos lugares: metáfora editorial de vínculos y mundo inacabado.
- V: seis personas completas salen de una cavidad. Un estrato se abre solo a su paso: metáfora del origen terrestre, sin mezclar barro.
- S: semilla cerrada, gota que aún no llega y sombra con forma de árbol inexistente. Símbolo de vida latente; no otra escena o amuleto.

## Preparación y producción

Calidad y dimensiones: H high 1536 × 864; V medium 864 × 1536; S medium 1024 × 1024. JPEG nativo. OpenAI API, `gpt-image-2`, CLI oficial de imagegen, `text_only_no_local_references`; no generación o retoque local.

El paquete `wayuu-creacion-triptych-01` se preparó pero no se envió a la API. Antes de generar, se detectó que el contrato global enumeraba seis prendas y podía contaminar el reparto de dos personas en H. Se trasladaron las cuatro identidades exclusivas a la escena vertical y se abrió el paquete inmutable `wayuu-creacion-triptych-02`. Esta revisión de texto no cuenta como generación de imagen.

Los planes, prompts, relato, memoria y solicitudes están congelados bajo `content/mitos-visuales/_openai/wayuu/creacion-wayuu/`. Los resultados se inspeccionan antes de seleccionar y publicar.

## Primera revisión de imágenes

Paquete 02: H 81,5 s, V 33,6 s, S 38,4 s según CLI. V y S quedan seleccionables tras inspección: seis figuras diferenciadas, cavidad y estrato abierto; semilla con sombra vegetal conectada y gota separada. En V la mujer cercana ocupa aproximadamente un sexto de altura, algo más que el séptimo pedido, pero conserva plano amplio. Las solapas de los paneles masculinos son legibles a esta escala, sin afirmar precisión textil de detalle. En S la semilla tiene una junta visible en la cubierta, sin germinación corporal: el futuro vegetal permanece sólo en la sombra.

H conserva una buena conexión material entre fuegos, pero el grupo supera la escala solicitada y la prenda del niño se alarga. Se abre el paquete 03 sólo para H: posiciones y altura relativas explícitas, paneles opacos por encima de rodilla, piernas separadas visibles, cuello de mujer sin cuentas ni joyas. No se repiten V y S.

## Selección final

Cuatro imágenes generadas: H 2, V 1, S 1. La corrección H tardó 81,3 s. El grupo se reduce y el niño recupera piernas separadas bajo prenda corta; la mujer permanece aproximadamente en un sexto de altura, no en el 9% exacto solicitado. Se acepta por amplitud del territorio, ausencia de retrato y conservación del camino material. No se declara cumplimiento geométrico exacto.

- H: `output/imagegen/wayuu/triptychs/wayuu-creacion-triptych-03-entrada/entrada.jpeg`.
- V: `output/imagegen/wayuu/triptychs/wayuu-creacion-triptych-02/acto.jpeg`.
- S: `output/imagegen/wayuu/triptychs/wayuu-creacion-triptych-02/huella.jpeg`.

Auditoría y selección con hashes: `content/mitos-visuales/_openai/wayuu/creacion-wayuu/wayuu-creacion-final-selection/`. Las tres preparaciones sin imagen del paquete 01 no cuentan como generaciones. No se infiere facturación.

## Publicación y verificación

[Creación Wayuu publicada](https://www.mitosdecolombia.com/mitos/creacion-wayuu). Tres URLs nuevas con JPEG nativo sin alterar bytes. Las dos imágenes públicas anteriores siguen disponibles; fila vertical 346 preservada y fila 666 añadida. Relato sin cambios. La historia remota conserva URLs y prompts anteriores junto con las nuevas subidas.

Evidencia en `content/mitos-visuales/production/wayuu-2026-09-05/`:

- `publication-receipts/wayuu-wave-09/creacion-wayuu.json`: promoción de imágenes y purga de caché.
- `verification-wave-09.json`: base coincidente, tres blobs nuevos con hashes verificados, dos anteriores disponibles, historial vertical y remoto correctos, HTML con las tres URLs.
- `browser-review-wave-09.json`: seis imágenes cargadas a 1440/390 px, sin desbordamiento ni errores de consola. Advertencia preexistente de preload CSS.

Portada desktop: texto no oculta familia, primer fuego ni camino al segundo. Su recorte lateral sí elimina el tercer fuego extremo; el original completo y la imagen interior móvil lo preservan. La relación principal entre dos hogares sigue legible. Portada móvil: seis personas y cavidad visibles sin título sobre ellas. Cuadrada reconocible incluso pequeña.

La selección conserva `published: false` por ser una evidencia congelada antes de publicar; el recibo posterior acredita publicación. Verificación local: 66 pruebas relevantes aprobadas, `git diff --check` sin incidencias, contenedor reconstruido y ruta HTTP 200 en puerto 3003. Sin commit, push ni despliegue de código; publicación de datos e imágenes sí realizada.
