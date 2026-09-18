# Jururiana y la gran lluvia — tríptico

Estado: publicado y verificado; tres archivos nuevos principales, dos anteriores preservados.
Fecha: 2026-09-06. Slug estable: `el-indio-jururiana`.

## Relato y procedencia

Se leyó el contenido completo congelado en
`content/mitos-visuales/production/wayuu-2026-09-05/narratives/el-indio-jururiana.json`.
SHA: `f20ab5c6a73667df8cfaf3d9c81ec163dfd5573b1efde6255c273d6530d3eb63`.

[Chaves, páginas 314–315](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1)
registra semillas y chivos negros reunidos hacia Patsuo, un chubasco que borra
huellas y a Warir vinculando sus secretos con la Tierra-abuela. La transcripción
es ambigua sobre el sujeto de la prueba oscura; la respuesta sobre la Tierra
ocurre en otro momento. La página pública amplía sueño, preparación, reparto y
la escena de palmas sobre el suelo con el abuelo presente. V sigue esa escena
editorial explícitamente, sin atribuirla como diálogo literal de 1946.

No se representan enfermedad, muerte, sacrificio animal, diluvio mundial o
conocimiento omnisciente. El relato público no se reescribe en esta campaña.

## Biblia y memoria visual

Se verificaron los SHA de los ocho modelos específicos del lote 13 y se
inspeccionaron sus imágenes. Selección global:
`content/mitos-visuales/_openai/wayuu/biblia-v3-production/accepted-selection.json`.

Hallazgo importante: `jururiana__state_sheet` ahora apunta a una corrección del
lote Umaralá. Mantiene identidad, pero introduce burro, otros estados y paisaje
propios de ese recorrido. No se usa ese montaje como escena de este mito ni
se incluye en `canon_models`. Revisar el archivo real evita importar utilería
ajena sólo porque el identificador del personaje coincide.

Identidades: Jururiana conserva Kotin carbón con reverso ocre, conjunto
inferior arena/arcilla, womu y waireñas; paipai solar ciena uniforme, sin
motivos. Warir usa camisa índigo, wayuco carbón estrecho, si'ira ocre,
Asheinpalajanaa lisa arena rojiza sobre hombro y waireñas; sin pintura facial.
Los rostros se aplanan a recortes, no se hereda modelado de las fichas.

La habitación vacía del modelo se puebla según la escena editorial publicada;
semillas sin especie afirmada, paquetes lisos, chivos negros sin simbolismo
demoníaco y planicie costera aproximada siguen el lote 13.

Imágenes actuales inspeccionadas en navegador:

- H `b2cde9ba6c5e3ae25d31`: `output/playwright/wayuu-campaign/jururiana-before-0.png`.
- V `d73a4e17adef4824ae60`: `output/playwright/wayuu-campaign/jururiana-before-1.png`.

Se conservan ocre/azul, capas y presencia de reservas. Se descartan bastón,
cayado, tocado, bolsa decorada, gigantismo central, estrellas/espirales como
magia genérica, rosetas y serranías añadidas. La versión almacenada restante
no se marca como inspeccionada. Las anteriores permanecen en la biblioteca.

Las búsquedas `"Jururiana" ilustración` y `"Warir" "Jururiana" imagen`
devolvieron fuentes textuales, reediciones y páginas del propio proyecto.
No se incorporó una imagen histórica independiente con atribución visual
comprobada, ni se declara búsqueda exhaustiva. Una generación anterior no
cuenta como iconografía histórica.

## Funciones y prompts

Plan: `content/mitos-visuales/wayuu.jururiana.triptico.v1.json`.
Paquete: `content/mitos-visuales/_openai/wayuu/el-indio-jururiana/wayuu-jururiana-triptych-01/`.

| Formato | Función | Configuración |
| --- | --- | --- |
| H | Jururiana pequeño y recursos preparados; lluvia de tiras materiales borra un único rastro | 1536×864, high |
| V | Warir toca tierra en habitación oscura y ésta responde con una ondulación continua, sin rostro de Mma | 864×1536, medium |
| S | Paquete de semillas seco en un vacío entre tiras de lluvia que se apartan; símbolo del cuidado | 1024×1024, medium |

Las transformaciones materiales son metáforas editoriales: no nuevos hechos
ancestrales, amuletos ni ceremonias. La horizontal reserva el área inferior
izquierda para el título largo de la página y concentra la acción arriba.
El símbolo no hereda reparto o arquitectura de las escenas.

Skill imagegen en modo CLI/API autorizado: `gpt-image-2`, JPEG nativo,
`--no-augment`, sin subir imágenes locales y sin modificar la CLI oficial.
La cuenta elegida por el usuario se conserva; la comprobación de credenciales
sólo informa presencia y no imprime secretos. Playwright se usa para
inspección de referencias y posteriormente publicación.

## QA del primer lote

- H01: lluvia material y rastro presentes, pero Jururiana ocupa cerca del 40%
  de altura y un chivo se corta en el borde derecho. Se rechaza el encuadre.
- V01: manos sobre suelo y rostros planos, pero el mayor pierde el womu,
  cambia a cabello recogido y la respuesta de tierra parece fisura longitudinal.
  Se rechaza por continuidad y lectura de la magia.
- S01: paquete seco con semillas y tiras azules que se apartan. Una tira
  central se interrumpe en vez de continuar; se conserva como límite visible,
  pues el símbolo sigue siendo reserva seca entre lluvia, sin tercera escena.

Corrección sólo H/V: `content/mitos-visuales/wayuu.jururiana.triptico.v1.1-escenas.json`,
paquete `wayuu-jururiana-triptych-02-escenas`. H usa mirada alta y grupo completo
dentro de márgenes; V exige sombrero, cabello corto y hoja de tierra sin cortar
con ondulación transversal. No se sobrescribe el primer lote.

## Selección final e iteraciones

Cinco imágenes generadas únicas: H01, V01, S01, H02 y V02. Selección final:
H02 + V02 + S01. No se cuentan preparaciones ni capturas como generaciones.
La auditoría por SHA y la integridad de los prompts se comprobaron nuevamente
durante el cierre. No se infieren coste ni llamadas fallidas sin artefacto.

- H02 abre el encuadre: cinco chivos completos y Jururiana de aproximadamente
  un sexto de altura. El rastro se pierde en la lluvia; termina cerca de las
  reservas, no exactamente en el talón. El paipai es demasiado pequeño para
  afirmar precisión del pigmento.
- V02 conserva womu, cabello corto y Kotin del mayor. Warir toca una hoja
  continua de tierra elevada transversalmente. El mayor ocupa cerca de un
  tercio de altura, más de lo pedido, pero ambos cuerpos están completos y
  la arquitectura domina. La postura oculta parte del wayuco.
- S01 conserva el paquete seco y vacío entre tiras; se acepta la interrupción
  de una tira central como límite de la metáfora, no como amuleto tradicional.

Duraciones informadas por CLI, no tiempo total de trabajo: H01 82,4 s;
V01 35,9 s; S01 38,9 s; H02 74,1 s; V02 33,4 s.

Selección y auditoría inmutables previas a la publicación:
`content/mitos-visuales/_openai/wayuu/el-indio-jururiana/wayuu-jururiana-final-selection/`.
El campo `published: false` describe ese momento; el recibo posterior acredita
la publicación y no se altera el documento histórico.

## Publicación y verificación

Publicado como [Jururiana y la gran lluvia](https://www.mitosdecolombia.com/mitos/el-indio-jururiana).
Recibo: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-11/el-indio-jururiana.json`.

Se subieron tres JPEG nuevos con sus bytes originales y sufijos independientes;
no se sobrescribió ni borró ninguna imagen anterior. Nueva fila vertical 668;
fila 351 preservada. Se archivó el estado anterior remotamente y la purga de
caché respondió correctamente. El hash del relato permanece idéntico.

Evidencia: `content/mitos-visuales/production/wayuu-2026-09-05/verification-wave-11.json`,
recomprobación `verification-wave-11-recheck.json` y
`browser-review-wave-11.json`. La recomprobación confirma base, tres imágenes
nuevas con hashes exactos, dos anteriores disponibles, historial vertical,
archivo remoto y HTML público. La revisión visual usa Playwright en 1440 y
390 px: el título no oculta la acción principal, los dos hombres permanecen
visibles en móvil y el símbolo se reconoce pequeño. Hay advertencia de
precarga CSS, sin errores de consola.

El contenedor fue reconstruido durante la producción de esta unidad y la
ruta local respondió HTTP 200. El cierre documental no modifica código de
aplicación ni requiere otra publicación. No se hizo commit ni push.

## Aprendizajes incorporados

Un modelo compartido de personaje no autoriza trasladar escenas, objetos o
estados de otro mito. Además de pedir plano abierto, especificar escala del
reparto, márgenes completos de animales y relación física de la magia ayuda a
detectar qué formato necesita corrección. Se conserva el símbolo que funciona;
no se regenera el tríptico entero.

Campaña: **12 de 27 mitos / 36 de 81 imágenes principales**; quedan 15 mitos.
Próxima unidad: El indio Pushaina (`el-indio-pushalna`). La campaña no está cerrada.
