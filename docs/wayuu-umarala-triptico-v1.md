# Umaralá · tríptico narrativo y huella simbólica

Estado: **publicado y verificado**. Ola 20; avance de campaña **21/27 mitos, 63 imágenes nuevas principales, 42 imágenes públicas anteriores preservadas**.
Alcance: un mito dentro de los 27 autorizados; no cambia el corpus ni el texto público.

## Relato, investigación y decisiones

Fuente principal: Milcíades Chaves, *Mitos, leyendas y cuentos de la Guajira*, pp. 321–325, sección XIII, consultada en [ICANH](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1), índices PDF 17–21.
Relato objetivo: `content/mitos-visuales/production/wayuu-2026-09-05/narratives/umarala.json`.
SHA-256: `71517b0486e08baa34cdba4f1b92627ddb82b5df9022ac0db6a5dd39ba66af71`.

Tres núcleos: tía cuidadora y cantora; visita nocturna percibida sin ver al visitante; herencia que crea responsabilidad. Se evita la muerte y el entierro de la tía. El canto y cuidado se representan dentro de la lógica narrativa, no como prueba o instrucción médica.

La edición pública condensa el episodio de la paciente y atribuye imitadores al protagonista. En la transcripción revisada los imitadores corresponden a Jururiana. No se ilustra esta atribución ni se modifica el texto en una campaña de imágenes. La tía no se convierte en mártir universal ni espíritu gigante.

## Memoria visual antes del prompt

Se inspeccionaron las dos imágenes públicas anteriores, IDs `efdd2dddda49d59e8bf1` (H) y `d7f5dc0ea38289e3a1f1` (V), capturas `output/playwright/wayuu-campaign/umarala-before-1.png` y `umarala-before-0.png`.
Se rescatan noche índigo, contraste cálido y paisaje partícipe. Se rechazan rostro modelado, figura espectral gigante, encuadres cerrados y prendas decoradas no coincidentes con la Biblia.
La tercera versión PNG sigue inventariada sin inspección; no se inventa una aprobación.

Búsqueda externa acotada: `"Umaralá" pintura ilustración`. No se encontró representación atribuible al mito en los resultados revisados; se excluyeron homónimos geográficos de India. Esto no prueba ausencia ni saturación de arte histórico. Las imágenes propias antiguas no se clasifican como documentación histórica. No se enviaron imágenes locales o externas al generador.

## Biblia y traducción artística

Diez modelos aceptados, con hashes contrastados, quedan congelados en `jobs.json`: identidades y estados de Umaralá, tía y paciente; capote; transmisión; visita nocturna; Jarara. Se inspeccionó la hoja de contacto del lote 22 y fichas individuales de tía, Umaralá, capote y curación nocturna.

Ropa: tía Wayuushein ciruela, pechera arena, capote carbón, trenza gris y waireñas; joven Kemiisa índigo y Kotin crudo; paciente Wayuushein oliva y pechera arcilla. No se añade pintura facial sin contexto. La continuidad de prendas no obliga a repetir el modelado facial de la Biblia: los personajes se traducen a recortes casi planos, dentro de un espacio 3D con capas distantes.

## Función de cada imagen

- Entrada, 1536 × 864, high: la tía canta junto al chinchorro del joven; la noche se levanta en grandes láminas y abre un espacio de respiración. El pliegue celeste es una metáfora editorial, no anatomía de un auxiliar espiritual.
- Acto, 864 × 1536, medium: paciente sola, huellas de tropel sin caballo visible y ritmo del canto traducido en ondulaciones del suelo. Dos botellas cerradas secundarias provienen de la fuente y no muestran uso o administración.
- Huella, 1024 × 1024, medium: una maraca sostenida por un capote y un eco material que une sus lados. Síntesis del legado, no escena ni emblema ritual atribuido a la cultura.

## Paquetes y revisión

Plan base: `content/mitos-visuales/wayuu.umarala.triptico.v1.json`.
Correcciones V: `content/mitos-visuales/wayuu.umarala.triptico.v1.1-acto.json` y `content/mitos-visuales/wayuu.umarala.triptico.v1.2-acto.json`.
Paquetes inmutables en `content/mitos-visuales/_openai/wayuu/umarala/`: `wayuu-umarala-triptych-01`, `wayuu-umarala-triptych-02-acto` y `wayuu-umarala-triptych-03-acto`.
Cada paquete conserva prompts, jobs, relato, plan y memoria visual congelados.
Generador: habilidad imagegen, CLI oficial con OpenAI API gpt-image-2 y cuenta previamente autorizada de .env; sólo texto. No hay edición local de imágenes.

H base: dos figuras pequeñas en relación al paisaje, tía algo mayor que el objetivo de 12%, pero sin plano cerrado; cielo en capas y espacio cálido claro, ropa y gesto conservados.
S base: instrumento único y prenda protectora sin escena; el capote queda orientado frontalmente y no tan recogido horizontalmente como el prompt, pero no contiene persona ni maniquí.
V base rechazada: láminas rectangulares despegadas, lectura de cartón y sólo dos elevaciones, escala de paciente mayor que objetivo. La corrección cambia exclusivamente V hacia relieve continuo y curvo. Se conserva el descarte.

## Verificación

66 pruebas de pipeline, preservación, funciones narrativas, Biblia y calidad pasaron; `git diff --check` limpio.
Primera reconstrucción Docker falló por TLS del registro; segundo intento terminó con imagen construida y contenedor iniciado. Ruta local de Umaralá HTTP 200.
V02 rechazada por huellas de pezuña partida. V03 seleccionada: huellas equinas en U, tres ondulaciones continuas y paciente sola con dos botellas. Límites: pechera con detalle añadido no asumido como canon, vegetación estilizada no botánica y extremo del chinchorro junto al borde. No se modela un resultado médico.

**Cinco generaciones**: H 1, V 3, S 1; dos correcciones, ninguna copia contada. CLI: H 74,4 s; V 37,0 + 32,1 + 32,8 s; S 42,3 s. Coste e IDs de solicitudes no disponibles, no inferidos.
Selección y auditoría: `content/mitos-visuales/_openai/wayuu/umarala/wayuu-umarala-final-selection/`. `published: false` en la selección describe su congelación previa; recibo de publicación posterior es la autoridad para el estado remoto.

Ensayo sin escritura y publicación aditiva completados con preservación de bytes originales. Recibo: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-20/umarala.json`. Nuevos archivos con sufijos distintos, historial remoto y fila vertical adicional; no se borraron versiones, ni se cambió texto. Caché purgada. Segunda reconstrucción posterior a correcciones terminada y ruta local HTTP 200.

Verificación remota pasada: base y relato coincidentes; tres archivos nuevos con SHA-256 exacto; dos imágenes anteriores disponibles; fila vertical anterior 361 intacta y nueva 677; historia remota coincidente; HTML público contiene las tres imágenes. Reporte: `content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-20.json`.

Revisión visual pública en 1440 × 1000 y 390 × 844: seis vistas cargadas e inspeccionadas, sin desbordamiento; títulos no tapan personajes ni acción principal. Símbolo legible en ambos tamaños. Casa periférica recortada en portada H; últimas huellas oscurecidas por interfaz en móvil, sin afectar tres ondulaciones ni paciente. Cero errores de consola; cinco avisos acumulados de precarga CSS, cuatro desde publicación. Reporte y capturas: `content/mitos-visuales/production/wayuu-2026-09-05/browser-review-wave-20.json`.

[Página pública de Umaralá](https://www.mitosdecolombia.com/mitos/umarala).

Archivos seleccionados:
- H: `output/imagegen/wayuu/triptychs/wayuu-umarala-triptych-01/entrada.jpeg`
- V: `output/imagegen/wayuu/triptychs/wayuu-umarala-triptych-03-acto/acto.jpeg`
- S: `output/imagegen/wayuu/triptychs/wayuu-umarala-triptych-01/huella.jpeg`

La biblioteca incorpora las tres imágenes nuevas y conserva las tres anteriores inventariadas: total comunitario 179 referencias. No se añadieron referentes externos sin atribución. Quedan seis mitos por completar, siguiente La Chama; El hijo del Cóndor sigue incluido. No hubo commit, push ni despliegue de código; la publicación descrita sí modifica los punteros de imágenes públicos autorizados.

## Aprendizajes para reducir iteraciones

Definir desde el primer prompt “terreno continuo con curvas orgánicas, sin esquinas ni tableros” cuando el suelo materialice el canto. Si aparecen huellas, especificar su morfología de acuerdo con el animal del episodio; “huellas” genérico o incluso “equinas” sin forma puede derivar a pezuña partida. Estos son aprendizajes de puesta en escena, no nuevos hechos culturales.

No se rehízo H ni S por corregir V. Los límites observados se documentan sin convertirlos en nuevas reglas de vestuario o territorio.
