# La India Worunka · tríptico narrativo y símbolo

Estado: publicado aditivamente y verificado. Ola 22; mito 23 de 27.
Alcance: `la-india-worunka`, uno de los 27 mitos autorizados. No cambia el relato público.

## Investigación y delimitación

Se leyó la sección V de [Chaves, edición conservada por ICANH](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1), pp. 312–313; cadena de informante e intérprete en p. 316. La narración atribuye la transferencia de rojo a la piedra y relaciona frutos, semillas, tumas y sequía. La mediación castellana y los juicios del investigador no se toman como doctrina Wayúu.

La edición pública da agencia espontánea a las aves y explicita sangre; en Chaves Mareiwa interviene. La imagen representa el resultado material sin recrear la intervención ni fluidos. No se fusionan gemelos, flechas o parentescos de variantes distintas. Episodios de cuerpo y alianzas quedan inventariados en la Biblia, pero fuera del recorte de este tríptico.

Relato congelado: `content/mitos-visuales/production/wayuu-2026-09-05/narratives/la-india-worunka.json`.
SHA-256: `9774ed6faf8a41db00c0496ff597e3093f69bc727491d62a5f347238b9308b6d`.

## Memoria visual y modelos

Se inspeccionaron las dos imágenes públicas previas, IDs `23a56ad5fcd7c1414238` y `4792f97e24bf81c0ce79`; capturas `output/playwright/wayuu-campaign/worunka-before-1.png` y `worunka-before-0.png`. Se retienen arroyo azul, montañas superpuestas y contraste tierra/azul. No se trasladan dientes en ropa, amenaza con piedra, grabados, estampados ni primeros planos. PNG antiguo sigue inventariado sin revisión; no se presume aprobado.

La búsqueda externa acotada encontró bibliografía, narraciones, mención teatral y [Arijuna, ensayo de Alejandro Vega Carvajal](https://revistacronopio.com/arijuna-alejandro-vega-carvajal/). No se verificó una obra visual atribuible para este prompt; no se declara inexistencia ni búsqueda exhaustiva. No se descargó ni adjuntó imagen externa a OpenAI.

Dieciocho modelos del lote 24 contrastados por hash; once seleccionados como contrato de este tríptico. Inspección de hoja de contacto y fichas de Worunka, estados, color de aves y origen de tumas. Las fichas humanas conservan un conjunto Wayuushein azul noche, pechera terracota, trenza y waireñas; no se reproduce un retrato ni se añade figura humana a escenas que usan el estado pétreo o el subsuelo. Ave Sangre Toro no se confunde con la planta homónima del mito de Serranías.

## Dirección y función

- H 1536 × 864, high: una piedra abstracta como memoria de Worunka; una veta roja se vuelve papel de plumas en tres aves distintas. Grupo pequeño a la derecha, arroyo y siete planos. No estatua detallada, anatomía o violencia.
- V 864 × 1536, medium: una cavidad orgánica de suelo conserva seis tumas coral, dos grupos de tres; plantas secas, tinaja intacta y lluvia distante. Una escena, no cuatro paneles.
- S 1024 × 1024, medium: una sola semilla mineral con raíz de papel, sin paisaje. Síntesis editorial, no emblema tradicional ni afirmación de germinación real de piedras.

Papel rojo que se vuelve pluma, tierra envolvente y raíz mineral son metáforas editoriales explícitas. Conteos, coloración de puesta en escena y geometrías no se atribuyen como datos etnográficos. No se exige representar todos los episodios en tres imágenes: su exclusión queda trazada, sin confundir tríptico y catálogo completo de Biblia.

Medición previa de portada real: imagen 1440 × 936 con cover centrado; título de dos líneas x47–815, y552–740. Se reservan izquierda y parte inferior para texto; el motivo debe quedar fuera del área medida incluso tras recorte.

## Pipeline

Plan: `content/mitos-visuales/wayuu.worunka.triptico.v1.json`.
Paquete inmutable: `content/mitos-visuales/_openai/wayuu/la-india-worunka/wayuu-worunka-triptych-01/`.
Habilidad imagegen, CLI oficial con OpenAI API y gpt-image-2; cuenta .env autorizada; texto solamente, ninguna generación o edición raster local.
32 pruebas de memoria visual, narrativa, iteraciones, preservación y calidad aprobadas; diff-check correcto antes de generar.

## QA e iteraciones

Cinco generaciones: H01 83,3 s, V01 35,4 s, S01 42,1 s, H02 76,6 s, V02 43,7 s. Dos correcciones de orientación, ningún fallo API registrado. Coste e IDs de petición no disponibles; no se infieren.
H01 se conserva como descarte: aves demasiado grandes, rosetas no pertinentes y riesgo de recorte. V01 se conserva como descarte: tres aves importadas del episodio horizontal, aunque la escena debía ser subsuelo. S01 seleccionada: un motivo orgánico coral con raíces, más cercano a semilla/hoja que a reproducción mineral literal; su función es simbólica.

H02: tres aves conectadas a piedra única, sin vegetación; conjunto mayor de lo pedido pero a la derecha. El carpintero tiene rojo también en ala y la cinta llega al cuerpo, no al copete: límite explícito de metáfora de transferencia, no referencia zoológica. V02: seis piedras sólidas en dos grupos bajo cavidad, sin aves; su posición es algo más baja que el objetivo y se verificará el título móvil. Color y cavidad legibles; textura mineral algo naturalista dentro de un mundo de papel.

## Aprendizaje incorporado al proceso

El resumen general y la continuidad común mencionaban aves en el prompt vertical. Esa es una causa probable de contaminación entre episodios, no certeza sobre el funcionamiento del modelo. El compositor admite ahora `narrative_summary` y `continuity_contract` por escena; evita heredar los globales cuando se declaran locales. Dos pruebas añadidas verifican aislamiento y valores no vacíos. No se modifica el relato íntegro ni los prompts históricos. La mejora se documenta en `docs/prompting-realismo-magico.md` y se usó para el segundo paquete.

Plan corregido: `content/mitos-visuales/wayuu.worunka.triptico.v1.1-escenas.json`.
Paquete corregido: `content/mitos-visuales/_openai/wayuu/la-india-worunka/wayuu-worunka-triptych-02-escenas/`.
Selección: `content/mitos-visuales/_openai/wayuu/la-india-worunka/wayuu-worunka-final-selection/selection.json`; auditoría de cinco imágenes al lado, hashes y dimensiones correctos.

72 pruebas aprobadas después del ajuste, diff-check correcto. Docker reconstruido tras ambos paquetes y ruta local HTTP 200 en puerto 3003. Son verificaciones locales, no cierre público.
## Publicación y verificación

[La India Worunka publicada](https://www.mitosdecolombia.com/mitos/la-india-worunka).
- Recibo: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-22/la-india-worunka.json`.
- Verificación de base, bytes, antiguos archivos, historia y HTML: `content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-22.json`, passed.
- Seis capturas inspeccionadas a 1440/390 px: `content/mitos-visuales/production/wayuu-2026-09-05/browser-review-wave-22.json`, passed_with_notes.

Se subieron tres archivos nuevos sin recortar o recomprimir y se promovieron como principales. Los dos archivos públicos anteriores siguen disponibles; fila vertical 352 preservada y nueva 679. Relato intacto por SHA-256; historia remota coincide con el recibo y caché purgada. `published:false` en selección es el snapshot previo, no el estado posterior acreditado por recibo.

En escritorio el título no tapa piedra, aves ni cintas. Puntas de cola del guacamayo llegan al borde derecho del recorte de portada, sin afectar lectura; original e interior móvil completos. En móvil las seis piedras quedan sobre el título; se recorta parte de la nube superior, no la lluvia. Símbolo legible como semilla/hoja con raíz; no se presenta como fotografía de tuma. Sin desbordamiento ni errores de página; siete avisos de precarga CSS acumulados al corte.

Memoria visual actualizada sin borrar: tres referencias previas y tres nuevas para este mito. Campaña 23/27, 69 imágenes nuevas principales y 46 imágenes públicas anteriores preservadas según reportes de cada ola; restan cuatro mitos. Esto no equivale a una relectura simultánea actual de todas las olas ni al cierre del objetivo completo.

La guía de almacenamiento de Vercel se aplicó mediante archivos públicos aditivos, sufijos nuevos e historia preservada. Código y documentación locales; sin commit, push o despliegue de código.
