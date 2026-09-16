# Mareiwa · tríptico y memoria visual

Estado: publicado y verificado en producción el 2026-09-06. Mito `maleiwa`. Campaña: 9/27 trípticos publicados; quedan 18. La selección es de agente bajo la autorización global del usuario, no una aprobación individual atribuida al usuario.

## Relato, fuentes y alcance

Se leyó el relato público completo congelado en `content/mitos-visuales/production/wayuu-2026-09-05/narratives/maleiwa.json`, SHA-256 `e9df8208648a3b896a6628865cdb903acea0de2cfb7d72ea3a40ff94e21d6c6c`. No se modifica su texto. Mareiwa no se fusiona con Creación Wayuu, Serranías ni los mellizos.

Se contrastó la retirada del mar y la dispersión de semillas con Chaves, página impresa 311 (PDF índice 7), [registro del ICANH](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1). El registro describe la honda, la piedra, pozos residuales, pavas y turpiales. Morva es un arbusto, no una paloma. Su marco colonial no se adopta como interpretación cultural vigente.

La Biblia conserva otras variantes investigadas en `docs/wayuu-lote-10-maleiwa-v3.md`. Este tríptico elige hacer habitable el territorio, no intenta ilustrar toda la biografía ni representar marcas claniles. La presencia no corporal es una decisión artística de la Biblia; no se presenta como apariencia universal de Mareiwa.

## Memoria visual consultada

Se inspeccionaron las dos imágenes públicas actuales en navegador: `mareiwa-before-0.png` y `mareiwa-before-1.png`, bajo `output/playwright/wayuu-campaign/`. Se retienen azules minerales, arena y curvas superpuestas; se excluyen figura con poncho, rapaz monumental, felino, casa redonda, velero y picos claros que no corresponden a estas acciones. La tercera versión almacenada permanece inventariada pero no inspeccionada.

Una búsqueda externa por Mareiwa/Maleiwa, honda y mar no aportó una representación histórica específica utilizable: predominan imágenes propias, algunas de otros mitos, mapas y arte territorial. No se declara saturación ni se atribuye autoridad a las descripciones del buscador.

Se inspeccionaron modelos de presencia y estados de Mareiwa, el tablero seleccionado del lote 10 y el turpial ampliado. Se comprobaron los hashes de los modelos pertinentes. La honda conserva dos cordones y bolsa; el turpial negro/naranja/blanco y la pava parda conservan identidad, sin copiar encuadre de ficha. Las referencias se traducen a contratos de texto, no se adjuntan a OpenAI.

## Tres funciones

- Horizontal: el mar deja tierra y pozos salados; honda quieta después del lanzamiento. La revisión hace que una lámina de agua se levante y deje aire y suelo visibles debajo.
- Vertical: aves pequeñas dispersan semillas; una cubierta de semilla se abre en pala vegetal y raíz. Es compresión editorial del tiempo de germinación, no afirmación botánica literal.
- Cuadrada: la bolsa de la honda se despliega en suelo que recibe una semilla y un brote. Es símbolo editorial, no amuleto, iconografía tradicional o tercera escena.

## Producción y primera revisión

H: 1536 × 864 high. V: 864 × 1536 medium. S: 1024 × 1024 medium. OpenAI API, `gpt-image-2`, CLI oficial de imagegen; `text_only_no_local_references`. JPEG nativo sin retoque ni generación local.

Paquete inicial: `content/mitos-visuales/_openai/wayuu/maleiwa/wayuu-mareiwa-triptych-01/`, con prompts, relato, plan, memoria visual y solicitudes JSONL congelados. Tiempos CLI: H 80,5 s; V 32,7 s; S 37,6 s. No se deduce facturación de esos tiempos.

La primera H respeta objetos y terreno, pero sus bandas de mar pueden leerse como oleaje normal. Se conserva rechazada: le falta una transformación imposible legible. La corrección `wayuu-mareiwa-triptych-02-entrada` cambia sólo esa orientación y explicita una lámina de agua levantada con hueco de aire y suelo debajo. V y S se mantienen: escala de aves y profundidad adecuadas, símbolo material reconocible.

Los archivos generados, selecciones y recibos se preservan por separado. Generar no equivale a publicar.

## Selección final e iteraciones

Cuatro imágenes generadas: H 2, V 1, S 1. Corrección H: 72,1 s. No se cuentan preparaciones, capturas ni copias. Auditoría por SHA en `content/mitos-visuales/_openai/wayuu/maleiwa/wayuu-mareiwa-final-selection/iteration-audit.json`.

- H: `output/imagegen/wayuu/triptychs/wayuu-mareiwa-triptych-02-entrada/entrada.jpeg`.
- V: `output/imagegen/wayuu/triptychs/wayuu-mareiwa-triptych-01/acto.jpeg`.
- S: `output/imagegen/wayuu/triptychs/wayuu-mareiwa-triptych-01/huella.jpeg`.

La H final hace visible aire y tierra bajo el mar levantado. Honda algo mayor que lo pedido, pero subordinada al territorio. La V mantiene aves pequeñas y vegetación localizada; no afirma especie exacta de pava. La S ocupa más campo que lo solicitado, manteniendo el carácter de símbolo. Estas diferencias se registraron, no se califican como cumplimiento geométrico exacto.

Aprendizaje añadido al prompting general: el material de papel no basta para comunicar un prodigio. Especificar la relación imposible —aquí agua levantada, conexión al mar, vacío y sombra— desde la primera composición cuando la escena lo necesite.

## Publicación aditiva y prueba pública

[Mareiwa publicada](https://www.mitosdecolombia.com/mitos/maleiwa). Tres URLs nuevas, JPEG nativo con bytes preservados; las dos imágenes anteriores siguen en línea. Se conservó la fila vertical 341 y se añadió la 665. Texto sin cambios. Archivo histórico remoto conserva URLs y prompts anteriores junto con los nuevos.

Evidencia bajo `content/mitos-visuales/production/wayuu-2026-09-05/`:

- `publication-receipts/wayuu-wave-08/maleiwa.json`: subida, promoción y purga de caché exitosas.
- `verification-wave-08.json`: base coincide, tres blobs nuevos con hashes correctos, dos anteriores disponibles, historial vertical y remoto preservados, HTML con las tres nuevas imágenes.
- `browser-review-wave-08.json`: seis imágenes cargadas en 1440/390 px, sin desbordamiento ni errores de consola. Advertencia preexistente de preload CSS.

La portada de escritorio deja el título fuera de los elementos principales. En móvil el título/degradado oscurecen parte baja de la raíz; aves, semillas y brote siguen visibles, y la vertical interior de escritorio conserva la pieza completa. La cuadrada se reconoce a tamaño pequeño.

La selección inmutable conserva `published: false` porque se congeló antes de publicar; el recibo posterior es la autoridad de publicación. No se sobrescribe la evidencia previa para simular simultaneidad.

Verificación local complementaria: 66 pruebas relevantes aprobadas, `git diff --check` limpio, `docker-compose up -d --build` completado y `/mitos/maleiwa` con HTTP 200 en puerto 3003. No se hizo commit, push ni despliegue de código; la publicación pública corresponde a datos e imágenes.
