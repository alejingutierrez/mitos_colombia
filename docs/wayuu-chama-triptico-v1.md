# La Chama · tríptico narrativo y huella simbólica

Estado: publicado aditivamente y verificado en datos, archivos y navegador. Ola 21; mito 22 de 27.
Alcance: La Chama dentro de los 27 mitos autorizados; no cambia el corpus ni se edita texto público.

## Investigación y procedencia

Artículo principal identificado: Roberto Pineda Giraldo, *La chama, un mito guajiro*, Revista de Folklore 2 (1947), pp. 113–126. [Biblioteca Digital de Bogotá](https://www.bibliotecadigitaldebogota.gov.co/resources/2910662/) y [Colombia Aprende](https://redaprende.colombiaaprende.edu.co/metadatos/recurso/la-chama-un-mito-guajiro/) corroboran la identidad bibliográfica. No es un artículo de Chaves.
El enlace de BDB abrió el [registro de Biblioteca Nacional](https://catalogoenlinea.bibliotecanacional.gov.co/client/es_ES/search/asset/161873), pero no entregó facsímil legible en esta sesión; la consulta web devolvió cache miss. No se afirma haber leído el facsímil completo ahora.

Se contrastó la sección 4.7 de la [compilación de Eugenia Villa Posse](https://studylib.es/doc/8316192/mitos-y-leyendas), pp. 84–87: fuente secundaria que reproduce un pasaje atribuido a Pineda, no otra entrevista. La lectura se cruza con el expediente de Biblia lote 23 y el relato objetivo congelado.

Relato objetivo: `content/mitos-visuales/production/wayuu-2026-09-05/narratives/la-chama.json`.
SHA-256: `93461758732b5d6028affe6246ca8342486b5e9bb310cf0976ae15a07f72a627`.

La carga renovada y el cuidado del huésped están en el núcleo compartido. La persecución de cinco días es del hombre detrás de La Chama, no al revés. El alias Kalamantuunay y la atribución a Chaves del texto público difieren de la reauditoría; el pasaje secundario revisado tampoco respalda la venganza posterior añadida a la edición. Se omiten esas discrepancias en imágenes sin modificar la página. La representación no contiene violencia, sexualización ni uso medicinal del cabello.

## Memoria visual previa

Referencias inspeccionadas: `03b239b5132d895f4c18` H y `fd86b4d337874421bcd6` V. Capturas: `output/playwright/wayuu-campaign/chama-before-1.png` y `chama-before-0.png`.
Se conserva profundidad de roca, contraste azul/ocre y territorio amplio. Se descartan dos mujeres simultáneas como personajes distintos, espalda descubierta, vestido decorado, mar no necesario y encuadre corporal cercano. PNG anterior sigue inventariado sin revisión; no se supone aprobado.

Búsqueda externa acotada de ilustraciones de La Chama/Pineda: sin obra atribuible localizada. No se afirma saturación ni inexistencia de arte histórico. Catálogo y fuente textual no se cuentan como ilustraciones. Ninguna imagen previa, local o externa fue enviada a OpenAI.

## Biblia antes de producir

Once modelos seleccionados con hashes contrastados: identidad y estados de La Chama, hombre y niño; burro; ollas/mochilas; manta roja; cueva-casa; metamorfosis; transformación de carga.
Se inspeccionaron hoja de contacto del lote 23 y fichas individuales de cinco formas, carga, cueva y niño.

Una apariencia por escena: majayura en horizontal, anciana en vertical. El vestuario es traducción editorial Wayúu reversible, no descripción de corte y color atribuida a Pineda. Wayuushein larga con mangas completas, pechera y waireñas; conjunto infantil verde/arena propio. Se reduce el rostro modelado y los ojos grandes de la ficha del niño a un recorte pequeño de perfil. No se repite la estética de la Biblia si contradice la dirección de arte aprobada.

## Tres funciones, no tres recortes

- Entrada H, 1536 × 864, high: La Chama parte con hijo seguro sobre un burro; mochilas nuevas proyectan formas de ollas antiguas. La carga se transforma, sin duplicar cuerpos o animales.
- Acto V, 864 × 1536, medium: protege al hombre en el receso de una cueva. Las capas de roca se recogen como cortina para ocultarlo.
- Huella S, 1024 × 1024, medium: un solo volumen de papel entre huevo y flor, sin escenario. Ambas formas proceden del repertorio atribuido, pero no se inventa una secuencia literal de una a otra.

Sombras antiguas, roca plegada y huevo/flor son metáforas editoriales explícitas. No se declaran símbolos rituales, arquitectura universal ni hechos adicionales de la tradición.

## Trazabilidad

Planes: `content/mitos-visuales/wayuu.chama.triptico.v1.json` y `content/mitos-visuales/wayuu.chama.triptico.v1.1-entrada.json` (corrección exclusiva de H).
Paquetes: `content/mitos-visuales/_openai/wayuu/la-chama/wayuu-chama-triptych-01/` y `wayuu-chama-triptych-02-entrada/`.
Conserva prompts, jobs, plan, relato y memoria visual congelados antes de generar.
Generación: habilidad imagegen, CLI oficial OpenAI API gpt-image-2, cuenta .env ya autorizada; sólo texto, sin generación o edición raster local.

66 pruebas de pipeline, preservación, Biblia, narrativa y calidad pasaron. `git diff --check` sin incidencias.
## QA y corrección antes de publicar

H base logra mochilas y sombras de ollas, pero el grupo es mayor que lo pedido y las sombras avanzan a la izquierda. Medición en DOM de la portada real: imagen 1440 × 936, object-fit cover centrado; título x47–719, y646–740. Proyección del archivo 1536 × 864 con ese recorte indica riesgo de solapamiento con la primera sombra. Se conserva H base como descarte y se corrige sólo escala/posición, antes de subir archivos.

V base: dos adultos, La Chama de cabello largo y vestido carbón custodia al hombre en receso; estratos de roca recogen su espacio. Figuras mayores que el objetivo exacto pero subordinadas al interior; cabello llega a pantorrillas y no exactamente a tobillos; apariencia anciana sugerida por canas y no por caricatura anatómica. El hombre queda visible en parte, no totalmente oculto.
S base: cinco pétalos rojos son el reverso de segmentos marfil de un ovoide, un único objeto sin escena. Motivo mayor que 55% pedido, pero conserva margen suficiente y lectura simbólica.

Reconstrucción Docker del paquete base completada y ruta local HTTP 200. Pruebas repetidas tras corregir H: 66 aprobadas.
H corregida inspeccionada: personajes pequeños a la derecha dejan libres título y sombras. La conexión de la sombra derecha se superpone parcialmente con la de la mujer; no correspondencia geométrica perfecta. Metáfora editorial, no reconstrucción literal.

## Generaciones y aprendizaje

4 generaciones: 2 H high, 1 V medium y 1 S medium. Una corrección exclusiva de H, ningún fallo API registrado. CLI: H01 80,3 s; V01 35,9 s; S01 38,6 s; H02 77,2 s. Coste y request IDs no disponibles; no se infieren. Capturas, preparaciones y subidas no cuentan como generaciones.

Aprendizaje: medir el área real del título y el recorte de portada antes del primer prompt; reservar paisaje tranquilo allí y situar también los indicios mágicos fuera del texto. Las proporciones solicitadas requieren inspección, no son garantías del modelo.

## Cierre público

- H: `output/imagegen/wayuu/triptychs/wayuu-chama-triptych-02-entrada/entrada.jpeg`.
- V: `output/imagegen/wayuu/triptychs/wayuu-chama-triptych-01/acto.jpeg`.
- S: `output/imagegen/wayuu/triptychs/wayuu-chama-triptych-01/huella.jpeg`.
- Selección y auditoría: `content/mitos-visuales/_openai/wayuu/la-chama/wayuu-chama-final-selection/selection.json`, `iteration-audit.json` en el mismo directorio.
- Recibo: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-21/la-chama.json`.
- Verificación: `content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-21.json` (passed).
- Seis capturas inspeccionadas, 1440/390 px: `content/mitos-visuales/production/wayuu-2026-09-05/browser-review-wave-21.json` (passed_with_notes).

[La Chama publicada](https://www.mitosdecolombia.com/mitos/la-chama): tres archivos nuevos principales, dos archivos públicos anteriores disponibles; fila vertical 363 preservada y nueva 678. Relato intacto por SHA-256; historia remota contrastada. La selección conserva `published: false` como snapshot previo; el recibo posterior acredita publicación.

Título de escritorio no oculta sombras ni figuras. Portada móvil deja los adultos y pliegue sobre el título; horizontal interior completa y símbolo legible. Sin desbordamiento ni errores de página; cinco advertencias CSS al corte del archivo de consola, sin incidencia en imágenes.

La memoria visual conserva tres referencias previas y añade tres nuevas con decisiones y límites. Campaña 22/27, 66 imágenes principales nuevas y 44 archivos públicos anteriores preservados según reportes de cada ola. Restan cinco mitos: no se afirma cierre ni verificación simultánea fresca de todas las olas. Sin commit, push o despliegue de código.
