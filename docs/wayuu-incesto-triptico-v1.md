# El incesto — tríptico de memoria territorial

Estado: publicado y verificado; 11/27 trípticos de campaña completados.
Fecha: 2026-09-06. Campaña Wayúu de 27 mitos / 81 imágenes.

## Relato y decisión de dirección

Se leyó completo el contenido congelado en
`content/mitos-visuales/production/wayuu-2026-09-05/narratives/el-incesto.json`.
SHA-256: `9491938e8823d014380f75ac41188ca4ff644735a7d9dd41e147bbcf41ff9ef0`.

El tríptico mantiene separados los episodios de la hermana litoral y de la
hija asociada a Katetamana. No muestra actos sexuales, violencia, autolesión,
muerte, embarazo enfatizado o cuerpos suspendidos. Tampoco sustituye el relato
por un paisaje genérico: la transformación se concreta en continuidad material
de pliegues y estratos.

La fuente histórica de [Chaves, páginas 311–312](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1)
atribuye a Mareiwa la transformación de la hermana y, en otro episodio, de la
hija en Katetamana. No afirma la petrificación del hermano. Nuestra versión
publicada amplía la fuga y transformación a ambos hermanos y también difiere
en la descripción de la muerte de la hija. Se registra esta diferencia sin
reescribir el texto público durante una campaña autorizada de imágenes.
La imagen elige el núcleo compartido, no convierte esa ampliación en fuente
histórica. [Pineda](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/248/272/1634?inline=1)
conserva otra variante de Katetamana; sus juicios culpabilizantes no se adoptan.

## Biblia e inspección visual

Se verificaron los SHA de las fichas aprobadas de hermana, hija y cerro.
Se inspeccionaron directamente identidad y estado de la hermana, estado de la
hija y modelo espacial del cerro. Conservamos la manta cerrada verde mar, womu
bajo, waireñas, identidad ocre de la hija y gramática de cresta/collado/cauces.
Los rostros del tríptico se simplifican a recorte plano; no se hereda el
modelado facial de las fichas.

Referencias públicas inspeccionadas mediante Playwright:

- `88ace892a25f73934a2b`: horizontal, captura `output/playwright/wayuu-campaign/incesto-before-0.png`.
- `55e927122f96c4294e35`: vertical, captura `output/playwright/wayuu-campaign/incesto-before-1.png`.

Rescatamos mar azul en capas, contraste mineral ocre y contornos internos de
papel. No trasladamos gigantismo, ornamentación sin fundamento, figuras
suspendidas o mezcla de ambos episodios en una sola escena. Las imágenes
anteriores se conservan: inspiración no equivale a aprobación de cada detalle.

Las búsquedas `"Katetamana" ilustración mito` y `"El incesto" "Wayuu" imagen`
devolvieron fuentes textuales y distribución del podcast del propio proyecto.
No se incorporó una imagen histórica externa sin atribución comprobable;
no se afirma saturación de búsqueda ni se confunde una generación antigua con
iconografía histórica. La tercera versión almacenada queda inventariada, no
marcada como inspeccionada.

## Tres funciones y prompts

Plan: `content/mitos-visuales/wayuu.incesto.triptico.v1.json`.
Paquete inmutable: `content/mitos-visuales/_openai/wayuu/el-incesto/wayuu-incesto-triptych-01/`.

| Pieza | Acción visual | Calidad y tamaño |
| --- | --- | --- |
| Entrada | Mujer pequeña en costa llana: pliegue de manta verde continúa dentro de una veta de roca no humana | high · 1536×864 |
| Acto | Katetamana sin cuerpos: estrato ocre conserva pliegues blandos entre capas minerales con aire real | medium · 864×1536 |
| Huella | Dos fragmentos minerales separados conservan pliegues verde y ocre; símbolo de dos memorias distintas, no tercera escena | medium · 1024×1024 |

Los pliegues cromáticos son metáforas editoriales, no objetos tradicionales,
pruebas topográficas o marcas claniles. No se igualan responsabilidades por
mostrar dos huellas. H reserva el sector inferior izquierdo para el título y
mantiene su acción dentro del margen de recorte de portada.

Skill imagegen, modo CLI/API expresamente autorizado: `gpt-image-2`, JPEG,
texto sin subir imágenes locales, herramienta oficial sin modificar,
`--no-augment`. La skill de credenciales se aplica a la cuenta ya elegida por
el usuario; se verifica presencia, nunca se muestra la clave.

## QA y publicación

- H01: descartada. Manta y roca producen dos tiras verdes desconectadas.
  Compartir color no hace visible la transformación. Figura mayor que pedida.
- H02: la conexión ya es única y continua, pero aparece una roseta vegetal
  excluida por el contrato de esta pieza. No es una afirmación de ausencia
  botánica en toda La Guajira: es una decisión de no añadir ese referente aquí.
- H03: seleccionada. Conexión verde continua, manta cerrada, sombrero y
  sandalias, roca no anatómica, playa sin vegetación. Figura aproximadamente
  un cuarto de altura, mayor que el 13% pedido, pero de cuerpo entero en un
  paisaje abierto. Verde más claro y cuello crudo más texturado que la ficha.
  Se conserva el plano por su lectura territorial y la unión visible, no se
  declara cumplimiento exacto de las coordenadas. H01/H02 siguen intactas.
- V01: cerro sin cuerpos; veta ocre con pliegue y hueco sombreado. El pliegue
  ocupa algo más de un cuarto del ancho y los cauces ramifican: no se afirma
  topografía literal ni número exacto de cursos. Sigue leyéndose como relieve.
- S01: dos fragmentos separados, vetas blandas verde y ocre, campo índigo y
  sombras. La ocre tiende a dorado respecto de V y la suspensión es sutil;
  el contraste de color y separación se conserva. No hay paisaje ni emblema.

Planes de corrección: `wayuu.incesto.triptico.v1.1-entrada.json` y
`wayuu.incesto.triptico.v1.2-entrada.json`, junto al plan base en
`content/mitos-visuales/`. Los paquetes 02 y 03 incluyen sólo la horizontal.

Auditoría: **5 generaciones únicas (H3, V1, S1), dos correcciones**. Los cinco
prompts conservan integridad de bytes y los tamaños coinciden con lo pedido.
Tiempo registrado por CLI: H01 82,7 s; V01 30,1 s; S01 38,4 s; H02 76,6 s;
H03 70,0 s. No se infieren costes ni llamadas fallidas sin imagen.

Selección y auditoría:
`content/mitos-visuales/_openai/wayuu/el-incesto/wayuu-incesto-final-selection/`.
La selección conserva `published:false` como estado previo a la subida; el
recibo posterior es la autoridad de publicación, no se reescribe el paquete.

Archivos finales:

- H: `output/imagegen/wayuu/triptychs/wayuu-incesto-triptych-03-entrada/entrada.jpeg`.
- V: `output/imagegen/wayuu/triptychs/wayuu-incesto-triptych-01/acto.jpeg`.
- S: `output/imagegen/wayuu/triptychs/wayuu-incesto-triptych-01/huella.jpeg`.

## Publicación comprobada

[El incesto en el sitio](https://www.mitosdecolombia.com/mitos/el-incesto)
usa tres JPEG nuevos, conservando bytes originales y dos imágenes anteriores.
No se borraron blobs; fila vertical anterior 349 intacta y nueva versión 667.
Se creó archivo histórico remoto, se promovieron punteros en transacción y
se purgó la caché. El SHA del contenido narrativo permanece igual.

Evidencia bajo `content/mitos-visuales/production/wayuu-2026-09-05/`:

- `publication-receipts/wayuu-wave-10/el-incesto.json`: publicación terminada.
- `verification-wave-10.json`: passed; tres nuevos blobs y dos anteriores en
  línea, hashes nuevos idénticos, DB/HTML/historial coincidentes.
- SHA del reporte: `0f4ce04bb423cb7e6a1466f36b114e2b2677174fef7210705c621d349231d75d`.
- `browser-review-wave-10.json`: seis imágenes cargadas en 1440/390, sin
  desbordamiento horizontal ni errores de consola. Advertencias preexistentes
  de preload CSS, no fallos de imagen.

Inspección directa: portada desktop muestra toda la conexión y las dos formas
por encima del título; portada móvil conserva cerro y pliegue sin solaparlos;
cuadrada pequeña permite distinguir ambas huellas. El recorte lateral de la
portada no elimina información narrativa indispensable.

La biblioteca visual pasa a 148 referencias: conserva las tres anteriores de
este mito, sus estados de inspección y decisiones, y añade los tres principales
nuevos. Campaña: 11 mitos, 33 imágenes nuevas, 22 anteriores preservadas,
16 mitos pendientes. No se declara cierre de los 27.

66 pruebas pertinentes aprobadas y `git diff --check` sin incidencias.
`docker-compose up -d --build` terminó y la página local respondió HTTP 200.
Código y documentación quedan locales; no hubo commit, push ni despliegue de
código. La publicación descrita sí afecta a los datos públicos del mito.

## Aprendizaje para reducir iteraciones

Pedir una unión conceptual no basta: especificar extremos, plano compartido,
dirección, tramo único y ausencia de líneas sueltas. La segunda horizontal
resolvió esto, pero introdujo vegetación secundaria no deseada. Cuando el
prodigio no necesita un elemento accesorio, omitirlo desde el primer prompt
reduce la superficie de deriva. No universalizar ni la playa vacía ni la tira
material: ambos recursos responden a este relato concreto.
