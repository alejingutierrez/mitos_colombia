# Guanurú — tríptico y memoria visual

Estado: publicado y verificado — ola 18. Fecha: 2026-09-06.

## Relato y evidencia

La página objetivo es una **reconstrucción editorial de creencias registradas**, no la transcripción de un cuento tradicional autónomo. Se conserva el texto público, congelado en `content/mitos-visuales/production/wayuu-2026-09-05/narratives/guanuru.json`, SHA-256 `543da024fcad6d8ed839c3a51b3b918201e07a3443f8fb3cbde4cd6c26de69ea`.

Fuente principal ya contrastada en la preparación: Roberto Pineda Giraldo, *Aspectos de la magia en la Guajira*, [edición digital del ICANH](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/248/272/1634?inline=1), pasajes de casas y apariciones (pp. 80–83), terminología histórica (p. 144) y visitas, mariposas y sueños (pp. 147–149). Las categorías del recopilador no se presentan como una teología universal.

Guanurú, Wanurü, Yolujaa y una mariposa visitante no se convierten en un solo personaje. No se prescribe un rito, diagnóstico ni causalidad de enfermedad. El tríptico separa presencia doméstica, recuerdo del pariente y acogida.

## Referencias vistas antes del prompt

Las dos imágenes públicas anteriores fueron inspeccionadas en navegador: `output/playwright/wayuu-campaign/guanuru-before-0.png` y `guanuru-before-1.png`. Se rescatan profundidad física, penumbra doméstica, ocre e índigo. Se descarta el collage de cama europea, mantis, cráneo, algodón y mariposas como supuesto ritual único.

La versión PNG almacenada permanece registrada como no inspeccionada. La búsqueda externa no localizó una representación histórica específica aceptable: la imagen principal de la ficha de *Yolüja* en Premio Gabo resultó ser un retrato de Fernanda Pineda, no una ilustración de Guanurú. El texto de Baudó fue accesible, pero su galería no llegó a inspeccionarse. No se importó ninguna imagen externa ni se declara búsqueda exhaustiva.

Biblioteca: `content/mitos-visuales/wayuu.visual-memory.v1.json`. Su revisión se congela con cada paquete, para distinguir lo observado de lo inferido.

## Biblia y continuidad

Cinco modelos aprobados: presencia de Guanurú, gramática de familia, identidad del pariente muerto, casa desocupada y mariposa blanca. Se verificaron sus cinco hashes contra `accepted-selection.json`.

Mujer con Wayuushein verde y pechera crema; pariente con Kotin ocre, Kemiisa crema, faja oscura y sandalias abiertas. Rostros planos y mínimos. Sin pintura facial inventada. La mariposa no fija la anatomía de Guanurú. No se regeneran las fichas.

## Dirección de las tres piezas

- **Entrada:** la ausencia se vuelve material. Un chinchorro vacío y las láminas del suelo se deforman hacia un punto sin cuerpo, con aire entre ellos. Traducción editorial de la presencia, no suceso literal documentado.
- **Acto:** una mujer duerme; el papel nocturno del cuarto se pliega y deja aparecer el recuerdo diurno de un pariente opaco, vestido y tranquilo. La simultaneidad de tiempos es una metáfora editorial.
- **Huella:** una sola mariposa blanca abre un ala y deja un espacio cálido. Síntesis de hospitalidad, sin paisaje, rito, personaje oculto ni emblema tradicional inventado.

Mundo inmersivo de papel recortado, láminas a distintas distancias y sombras físicas. Sin perímetro de maqueta, base o cartón exterior.

## Producción e iteraciones

OpenAI API mediante el CLI oficial de imagegen; `gpt-image-2`; cuenta autorizada en `.env` ignorado. Generación desde texto sin subir referencias locales. Sólo la horizontal usa high (1536 × 864); vertical medium (864 × 1536); cuadrada medium (1024 × 1024).

Paquete inicial: `content/mitos-visuales/_openai/wayuu/guanuru/wayuu-guanuru-triptych-01/`.
Corrección horizontal: `content/mitos-visuales/_openai/wayuu/guanuru/wayuu-guanuru-triptych-02-entrada/`.
Planes: `wayuu.guanuru.triptico.v1.json` y `wayuu.guanuru.triptico.v1.1-entrada.json`.

H1 conserva buena materialidad pero la caída del chinchorro parece normal: rechazado por falta de anomalía visible. La segunda preparación modifica únicamente H: tejido casi horizontal hundido en un punto y suelo levantado hacia él. V1 y S1 se conservan tras revisión pública. H2 seleccionada: embudo de tejido y tres láminas de suelo enfrentadas, con una pequeña separación de aire.

**Aprendizaje:** “peso invisible” no basta si el objeto ya se hunde naturalmente. Especificar un comportamiento que contradiga su caída habitual y comprobarlo en la imagen, no sólo en el prompt. El contraste noche/día y el ala abierta sí ofrecen signos materiales visibles desde la primera ronda.

## Verificación y publicación

Antes de publicar: 66 pruebas del pipeline aprobadas; contenedor recreado con `docker-compose up -d --build`; página local HTTP 200; cinco modelos sin cambios de hash.

Publicación aditiva completada: tres archivos nuevos y promoción de punteros, sin borrar las dos URLs previas ni la fila vertical 360. Archivo remoto histórico y caché purgada. El relato conserva su hash.

- Selección y auditoría: `content/mitos-visuales/_openai/wayuu/guanuru/wayuu-guanuru-final-selection/`.
- Recibo: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-18/guanuru.json`.
- Verificación: `content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-18.json` — passed; 3 bytes/hashes remotos coinciden, 2 imágenes previas accesibles, historia vertical y remota preservadas, DB y HTML correctos.
- Navegador: `content/mitos-visuales/production/wayuu-2026-09-05/browser-review-wave-18.json` — seis imágenes cargadas e inspeccionadas, a 1440 y 390 px; sin desbordamiento horizontal ni errores. Cuatro advertencias de precarga CSS no impiden las imágenes.

El título de escritorio deja libre el punto de deformación. En la miniatura horizontal móvil la separación entre puntas es pequeña, pero la deformación sigue legible. En la portada móvil las dos figuras y el pliegue quedan completos, por encima del título. La mariposa conserva lectura simbólica pequeña.

**Conteo final: 4 generaciones, 2 H + 1 V + 1 S; una corrección.** Se conservan el intento descartado y los prompts inmutables. Los tiempos de CLI fueron 78,9 / 35,8 / 45,1 / 75,7 s; no se infiere facturación ni IDs de petición no registrados.

Archivos seleccionados:
- entrada: `output/imagegen/wayuu/triptychs/wayuu-guanuru-triptych-02-entrada/entrada.jpeg`; prompt `content/mitos-visuales/_openai/wayuu/guanuru/wayuu-guanuru-triptych-02-entrada/prompts/entrada.prompt.txt`.
- acto: `output/imagegen/wayuu/triptychs/wayuu-guanuru-triptych-01/acto.jpeg`; prompt `content/mitos-visuales/_openai/wayuu/guanuru/wayuu-guanuru-triptych-01/prompts/acto.prompt.txt`.
- huella: `output/imagegen/wayuu/triptychs/wayuu-guanuru-triptych-01/huella.jpeg`; prompt `content/mitos-visuales/_openai/wayuu/guanuru/wayuu-guanuru-triptych-01/prompts/huella.prompt.txt`.

La selección conserva `published: false` como instantánea previa a la promoción; el recibo posterior acredita la publicación. No se modifica ese registro histórico. Progreso de campaña: 19/27 mitos, 57 imágenes nuevas principales, 38 previas conservadas y 8 mitos/24 imágenes pendientes. No se declara cierre global. Sin commit, push ni despliegue de código.
