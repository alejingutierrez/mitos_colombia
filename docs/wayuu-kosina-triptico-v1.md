# El pequeño indio Kosina · tríptico V1

Fecha: 2026-09-06.
Estado: publicado y verificado; H02 / V01 / S01 seleccionadas.

## Relato, fuente y decisiones

Relato objetivo leído íntegro y congelado:
`content/mitos-visuales/production/wayuu-2026-09-05/narratives/el-pequeno-indio-kosina.json`.
SHA: `1e64f847e4e505f07e10ddce4e1ab058445edb5bb63c9c0413a8716be14faf4d`.
No se modifica el texto público.

Fuente primaria consultada: [Chaves, 1946, pp. 325–327](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1).
Se leyeron las líneas 684–774 del PDF (índices de página 21–23).
Las capturas de esas páginas fallaron con Cache miss; no se afirma revisión de
ilustraciones en ellas. El texto sí describe huellas menguantes, encogimiento,
faja, carreras sin silla, regalos y retorno subterráneo. No describe alas.
También el aliado propone comprar al animal en la fuente; la edición pública
suaviza ese detalle. El tríptico no representa la negociación ni añade un antagonista.

Se mantiene la polisemia de Kosina/Kusina documentada en
[el expediente de la Biblia](./wayuu-lote-17-el-pequeno-indio-kosina-v3.md):
no se infiere una etnia, clan, apariencia racial ni traje exactos. Las prendas
completas son continuidad editorial aprobada, no reconstrucción documental.

## Memoria visual e inspección de modelos

Las dos imágenes actuales se inspeccionaron en navegador:
`output/playwright/wayuu-campaign/kosina-before-0.png` (V) y
`kosina-before-1.png` (H). Se rescatan papel, crin de tiras y contraste ocre/azul.
Se rechazan alas, armas del jinete, gran disco solar, espirales decorativas y
franja de motivos no sustentados. El PNG antiguo adicional queda inventariado,
no inspeccionado. Nada se elimina.

Búsqueda externa acotada: “Kosina caballo ilustración Chaves” y
“pequeño indio Kosina imagen”. Se localizaron texto y reediciones, no una
representación histórica específica inspeccionable. Homónimos ajenos excluidos;
no se afirma saturación ni se inventan referencias para completar una cuota.

Se inspeccionaron y verificaron hashes de ocho modelos aceptados: identidad y
estados de Kosina, identidad y estados del caballo, faja, huellas, territorio y
abertura subterránea (identidad/estados cuentan por separado: ocho archivos).
La ficha de huellas muestra una división semejante a pezuña partida: se registra
la corrección explícita a casco único, sin regenerar retrospectivamente la Biblia.
Los rostros de fichas se simplifican a perfiles de papel casi planos. El tablero
de estados no obliga a duplicar animales en una escena.

## Tres funciones y magia

- H: encuentro al final de un rastro que mengua lateralmente. La primera huella
  supera al potro a una profundidad comparable. La magnitud exagerada y alineación
  lateral son traducción editorial para hacer visible el cambio de tamaño.
- V: caballo entero bajo una lámina continua de terreno, Kosina afuera. Retorno
  narrado; la visión del interior y el testigo son puesta en escena editorial.
- S: faja abierta con vacío equino comunicado al exterior. Condensa vínculo y
  libertad; no es objeto tradicional certificado ni tercera escena.

No se muestran carreras, rebaño, madre, tambor o arco simplemente porque existan
en el inventario. El tríptico selecciona tres funciones; la Biblia conserva el
reparto y los demás estados.

## Generación y primeras decisiones

OpenAI API mediante CLI oficial imagegen; `gpt-image-2`, texto solamente,
sin imágenes locales subidas. Cuenta autorizada en `.env` ignorado; no secretos.
H high 1536×864; V medium 864×1536; S medium 1024×1024; JPEG.

- Plan inicial: `content/mitos-visuales/wayuu.kosina.triptico.v1.json`.
- Paquete: `content/mitos-visuales/_openai/wayuu/el-pequeno-indio-kosina/wayuu-kosina-triptych-01/`.
- Cada prompt y sus fuentes narrativas/visuales quedan congelados antes de la API.
- H01: huellas menguantes claras, pero figura grande y rastro dentro de la zona de título.
- V01: caballo completo visible bajo tierra de papel, Kosina afuera, escala abierta;
  sin alas, daño ni control mágico humano. Selección provisional hasta revisión pública.
- S01: caballo en negativo y banda abierta, cuatro patas legibles, profundidad material.
  La forma sintetiza una faja; no se presenta como artefacto histórico.
- Corrección únicamente H: `wayuu.kosina.triptico.v1.1-entrada.json`,
  paquete `wayuu-kosina-triptych-02-entrada`. Compactar el conjunto a derecha
  con escala en píxeles y zonas explícitamente vacías; no alterar V/S.

## Verificación operativa

66 pruebas relacionadas aprobadas y `git diff --check` limpio.
Docker reconstruido y contenedor iniciado. La ruta local respondió HTTP 200.
## Cierre de producción y publicación

**4 generaciones únicas: 2 H, 1 V, 1 S.** H02 abre el plano y compacta el
rastro a la derecha; V01 y S01 se conservan sin regenerar. La figura horizontal
es mayor que los 100 px pedidos, pero mantiene espacio de título y relación
con el territorio. La marca óxido del potro cambia algo de posición; se registra
como límite de continuidad, sin afirmar identidad anatómica exacta.

[Selección y prompts finales](../content/mitos-visuales/_openai/wayuu/el-pequeno-indio-kosina/wayuu-kosina-final-selection/selection.json).
La selección prepublicación permanece inmutable; `iteration-audit.json` junto
a ella acredita imágenes únicas, tamaños y hashes de prompts. El detalle de
inspección está en `content/mitos-visuales/_openai/wayuu/el-pequeno-indio-kosina/QA.md`.
Tiempos CLI: H01 74,1 s; H02 72,2 s; V01 36,7 s; S01 35,9 s. No se infiere coste.

[Recibo de publicación](../content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-15/el-pequeno-indio-kosina.json): mito 339, tres archivos
nuevos como principales, bytes JPEG originales preservados. Fila vertical
nueva 672; fila 358 y dos URLs anteriores siguen disponibles. Archivo histórico
remoto verificado. Texto intacto y purga de página/listado confirmada.

[Verificación remota](../content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-15.json): base, tres hashes nuevos,
dos anteriores, historial vertical, archivo histórico y HTML aprobados.
[Revisión de navegador](../content/mitos-visuales/production/wayuu-2026-09-05/browser-review-wave-15.json): seis vistas cargadas en 1440/390 px,
sin desbordamiento ni errores; tres advertencias CSS. Títulos no ocultan
personajes, potro, huellas ni retorno subterráneo. Cuadrada legible en pequeño.

Aprendizaje: inspeccionar la imagen anterior y cada ficha antes de trasladar
su contenido permitió retirar alas y corregir cascos antes de gastar en
generaciones. Para el encuadre, el área explícita de exclusión del título
funcionó mejor que confiar sólo en el porcentaje de altura de la figura.
La referencia inspira, pero ni antigüedad ni estado PASS convierten todos sus
detalles en canon.

Campaña en 16/27 mitos, 48 imágenes nuevas, 32 anteriores preservadas; quedan
11 trípticos. No se hizo commit, push ni despliegue de código. Las imágenes
sí están publicadas. Siguiente unidad: El viaje del más allá.
