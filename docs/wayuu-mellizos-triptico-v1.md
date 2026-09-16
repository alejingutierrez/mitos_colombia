# Los mellizos transformadores · tríptico v1

## Alcance y evidencia

Unidad de la campaña autorizada de 27 mitos y 81 imágenes. Publicación aditiva: archivos nuevos como principales, preservación de anteriores y recibo recuperable. Estado final de esta unidad: tres imágenes publicadas y verificadas; las dos anteriores siguen disponibles. Campaña: 8/27, aún en curso.

Relato completo leído en `content/mitos-visuales/production/wayuu-2026-09-05/narratives/los-mellizos-transformadores.json`, incluyendo Historia y Versiones. SHA-256 `43e7c6a2dfcc83a7d4f49bcb2eb94d6117305002cfed920bbf4b05f4634d9688`. No se cambia texto público.

Se verificó [Mito y cultura guajira, José Enrique Finol](https://www.joseenriquefinol.com/wp-content/uploads/2020/07/MITO-Y-CULTURA-GUAJIRA-Libro.pdf): versión Paz, páginas 133–134 y 137, y análisis de la relación vegetal de Manna en página 160. Aáner defiende su sembrado y contribuye a cuestionar el origen; Tumaju’le se vuelve nube y pasa por rendijas. La variante Perrin contiene tres muchachos: no se mezcla con el reparto de esta pieza. La fuente tiene mediación literaria y analítica, no es una voz comunitaria única.

El encuentro con un ave de anatomía natural deriva de la Biblia; no convierte a Aáner en paloma de paz ni maestra complaciente. La apertura de tierra y fibra índigo en la vertical son metáforas editoriales; no hallazgos literales. El ciclo incluye violencia: se conserva su presencia en el texto sin retratarla.

## Memoria visual

Se inspeccionaron las dos imágenes públicas anteriores mediante capturas `output/playwright/wayuu-campaign/mellizos-before-0.png` y `mellizos-before-1.png`. Se rescatan profundidad azul/arena, papel y funciones distintas. Se descartan mellizos clones, rostros ilustrados, paloma blanca sobredimensionada y nube como accesorio detrás de un cuerpo que ya camina.

La búsqueda externa de imágenes con nombres Tumajule/Peeliyuu devolvió dibujos de otros personajes, sin pertinencia atribuible: no se incorporaron ni se llamó histórica a una generación nuestra. No se declara agotada la búsqueda iconográfica. Cuatro versiones almacenadas adicionales siguen inventariadas sin fingir inspección.

Se inspeccionaron modelos aprobados de Tumaju’le (identidad y estados), Peeliyuu, Aáner y estados de Manna. Cinco hashes confirmados. Se conservan camisas completas diferenciadas, fajas, paños y sandalias; los rostros se simplifican a recortes planos. La nube conserva arena/carbón de Tumaju’le, mientras Peeliyuu mantiene arcilla/índigo. Las prendas son continuidad editorial, no reconstrucción literal de vestuario mítico.

## Tres funciones

- Horizontal: nube que se comprime en la rendija del rancho y se abre afuera hacia Peeliyuu. El obstáculo y la transformación tienen relación causal. La ubicación del hermano exterior es puesta en escena, no otro episodio atribuido a la fuente.
- Vertical: escucha incómoda ante Aáner en el sembrado de frutos. Una capa baja del suelo se abre y revela fibra índigo: conocer el origen cambia la lectura de un lugar cotidiano.
- Cuadrada: fragmento índigo, memoria vegetal amarilla y dos fibras que se vuelven materias distintas. El pliegue de origen permanece vacío; no regreso de Manna, no figura humana, no emblema tradicional.

## Producción trazable

Habilidad imagegen, CLI oficial hacia API de OpenAI, cuenta ya autorizada y `gpt-image-2`. Sólo texto, sin subir referencias locales. Horizontal 1536×864 high; vertical 864×1536 medium; cuadrada 1024×1024 medium. JPEG nativo.

Plan `content/mitos-visuales/wayuu.mellizos.triptico.v1.json`. Paquete `content/mitos-visuales/_openai/wayuu/los-mellizos-transformadores/wayuu-mellizos-triptych-01/` con prompts, solicitudes, jobs e instantáneas de relato, plan y memoria visual.

Se contará cada imagen única por SHA-256; preparaciones, capturas y publicaciones no son generaciones. No se infiere facturación.

## QA e iteraciones

Cuatro imágenes únicas: horizontal 2, vertical 1, cuadrada 1. Todas tienen dimensiones solicitadas y hashes de prompt íntegros. Primera horizontal descartada por escala y ubicación bajo el título; su nube sí cumplió la acción. La corrección conservó la nube y alejó todo el conjunto hacia la derecha. Paquete adicional `wayuu-mellizos-triptych-02-entrada`, plan `content/mitos-visuales/wayuu.mellizos.triptico.v1.1-entrada.json`.

Selección y auditoría: `content/mitos-visuales/_openai/wayuu/los-mellizos-transformadores/wayuu-mellizos-final-selection/`. Revisión de píxeles, no aprobación automática por prompt. Horizontal final con niño pequeño y casa completa al fondo; vertical con dos identidades, paloma gris y fibra revelada; cuadrada con vacío, nube y materia angular conectados a un origen índigo, sin personajes.

Límites: la abertura de salida de nube es mayor que una rendija mínima; aun así la materia se conecta a través de la pared. En vertical los niños ocupan cerca de 23% de altura y los paños son más amplios que en las fichas; no se afirma exactitud de vestuario. El significado materno de la cuadrada necesita contexto, como síntesis, no como diagrama. No se representan heridas, muerte ni antropofagia.

Aprendizaje incorporado a `docs/prompting-realismo-magico.md`: diseñar la portada con el área real del título desde la primera generación y revisar siluetas simbólicas para evitar monogramas involuntarios. No reescribir paquetes antiguos para que aparenten haber seguido una corrección posterior.

## Evidencia de publicación

Mito #551, ola `wayuu-wave-07`. Archivos JPEG nuevos conservados byte a byte, respaldo remoto de URLs y prompts anteriores, promoción atómica y fila vertical nueva sin tocar la anterior. Caché purgada. Sin modificación de relato, commit, push o despliegue de código.

Recibo: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-07/los-mellizos-transformadores.json`. Reporte `verification-wave-07.json`: tres blobs nuevos con hash correcto, dos anteriores disponibles, historia vertical y archivo remoto preservados, relato idéntico y HTML con las tres imágenes nuevas.

`browser-review-wave-07.json`: seis imágenes cargadas entre 1440 y 390 px, sin desbordamiento ni errores. Inspección visual de portada desktop, portada móvil y cuadrada pequeña. El título no tapa niño, nube o rendija; en portada desktop el recorte toca el extremo derecho de la casa sin afectar la acción. Hay una advertencia previa de preload CSS sin uso inmediato, no de imágenes.

Docker reconstruido; ruta local HTTP 200 en puerto 3003. 66 pruebas relevantes aprobadas. La selección mantiene su estado previo inmutable `published: false`; la publicación posterior se acredita mediante recibo y verificación, no reescribiendo ese historial.
