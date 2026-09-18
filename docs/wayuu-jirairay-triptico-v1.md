# Jirairay: devolver el nombre al canto

## Alcance y evidencia

La página pública es una reconstrucción editorial explicativa, no un cuento autónomo ni la biografía de una deidad. Se conserva todo su texto, congelado con SHA-256 `de3208df9c1af40319a095634d8eaadcc54882c9c643eeb8d520140a3ee5d9e2` en `content/mitos-visuales/production/wayuu-2026-09-05/narratives/jirairay.json`.

Se leyó [Pineda Giraldo, Aspectos de la magia en la Guajira, p.25, índice PDF30](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/248/272/1634?inline=1): el nombre aparece ligado al canto de invocación a Wanurü. La página 27 vuelve a alternar los términos, por lo que la fuente no se presenta como taxonomía uniforme. La publicación es de 1950; la portada de la entrega indica 1947. Las categorías médicas y religiosas del autor se contextualizan, no se adoptan como verdad clínica ni como voz comunitaria contemporánea.

La imagen sigue la edición publicada: especialista, persona atendida, relación de canto y escucha, y cuidado que continúa al amanecer. No se representa curación garantizada, procedimiento reproducible, sacrificio, violencia ni sexualidad.

## Biblia y memoria visual

Inspección directa de identidades de outsü y paciente, maraca, regla material del canto y chinchorro. Se comprobaron los hashes de seis modelos seleccionados. La identidad no obliga a repetir la pose aislada de las fichas: el paciente puede reposar en chinchorro; la especialista puede cantar. Los rostros pasan de facetas volumétricas a recortes casi planos conforme a la dirección aprobada.

Las dos imágenes anteriores del sitio se inspeccionaron y capturaron en `output/playwright/wayuu-campaign/jirairay-before-0.png` y `jirairay-before-1.png`. Se conservan azules, curvas de papel y profundidad; no se trasladan figuras con halos, encapuchado gigante, cráneo, humo, ornamentos ni identidades ajenas. Se registra la influencia por formato en la biblioteca visual. No se encontraron nuevas imágenes históricas externas verificadas en esta consulta; el PDF consultado aporta evidencia textual, no se etiqueta como referente visual inspeccionado. La búsqueda histórica visual no se declara exhaustiva.

El vestuario conserva la selección individual: outsü mayor de prenda carbón azul amplia sobre crudo, trenza gris-negra y sandalias; paciente con camisa ocre, pantalón crudo y cabello corto. La familiar es una figura editorial secundaria de manta arcilla amplia y moño bajo, diferenciada de la especialista. No se agregan motivos faciales o marcas claniles sin fundamento.

## Tres funciones

1. Entrada horizontal: voz y escucha junto al chinchorro; la noche material se despliega donde llegan las bandas del canto.
2. Acto vertical: una familiar sigue atendiendo a la persona al amanecer; un último pliegue azul conserva la memoria de la noche.
3. Huella cuadrada: una sola maraca cerrada cuya sombra se convierte en ritmo plegado, sin personas ni escena.

Bandas, noche material y sombra rítmica son metáforas editoriales, no símbolos tradicionales certificados. Se evita conectar los pulsos al cuerpo del paciente para no sugerir extracción de alma. La magia modifica la materia sin fabricar otra deidad.

## Producción y trazabilidad

Relato completo → contraste documental → entidades → modelos y memoria visual → función por formato → prompts congelados → API remota OpenAI → inspección visual → corrección puntual si hace falta → selección con hashes → publicación aditiva → verificación pública.

Plan: `content/mitos-visuales/wayuu.jirairay.triptico.v1.json`. Paquete: `content/mitos-visuales/_openai/wayuu/jirairay/wayuu-jirairay-triptych-01/`. Modelo `gpt-image-2` por CLI oficial imagegen y cuenta previamente autorizada, sin referencias locales adjuntas. Horizontal 1536×864 high; vertical 864×1536 medium; cuadrada 1024×1024 medium. Las identidades se describen dentro de cada escena para evitar que objetos o reparto de otra escena contaminen el prompt.

## Selección y aprendizaje

Cuatro imágenes generadas: horizontal 2, vertical 1, cuadrada 1. Primera horizontal descartada por ampliar la especialista hasta aproximadamente 38% de altura; la corrección aleja la cámara, fija una séptima parte de altura y distribuye arquitectura, cielo y primer plano antes de describir detalles del personaje. El resultado conserva una figura cercana a 13% de altura sin perder la conexión material del canto. No se recortaron las otras piezas ni se borró el intento descartado.

El primer lanzamiento del CLI terminó antes de contactar la API porque aún no existía `requests.jsonl`; se construyó a partir de los prompts congelados. No cuenta como generación. Las tres imágenes iniciales tardaron 80,3 / 29,0 / 36,6 segundos por trabajo; la corrección horizontal 73,4 segundos. No se infiere coste facturado.

Límites: la respuesta azul se integra visualmente con los pulsos de ida; se lee mejor la presión desplegada que la dirección de retorno. La tela corta del paciente pierde detalle en la horizontal por distancia. En vertical su cabello aparece recogido en nuca y la sombra suspendida es continua, no tres segmentos. La maraca cuadrada es lisa; el papel y el volumen quedan más explícitos en la sombra plegada. Ninguna limitación cambia la lectura principal de canto, cuidado o símbolo sin deidad personificada.

Selección y auditoría: `content/mitos-visuales/_openai/wayuu/jirairay/wayuu-jirairay-final-selection/`. Prompts finales: horizontal en `wayuu-jirairay-triptych-02-entrada/prompts/entrada.prompt.txt`; vertical y cuadrada en `wayuu-jirairay-triptych-01/prompts/`.

## Publicación

[Jirairay en el sitio público](https://www.mitosdecolombia.com/mitos/jirairay). Recibo aditivo: `content/mitos-visuales/production/wayuu-2026-09-05/publication-receipts/wayuu-wave-05/jirairay.json`. La prueba `verification-wave-05.json` confirma los tres originales por bytes, punteros principales, relato sin cambios, dos imágenes previas accesibles, historial vertical y archivo remoto preservados. Código y documentación son trabajo local; esta publicación actualiza imágenes y datos, no despliega código.

## Imágenes finales

Revisión pública a 1440 y 390 píxeles registrada en `browser-review-wave-05.json`: tres formatos cargados y sin desbordamiento; consola sin errores, con dos advertencias de CSS precargado. El título largo se superpone parcialmente al paciente en portada de escritorio; el original y la horizontal interior móvil permanecen completos. La plantilla existente no se modificó.

![Entrada horizontal](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/wayuu/triptychs/wayuu-jirairay-triptych-02-entrada/entrada.jpeg)

![Acto vertical](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/wayuu/triptychs/wayuu-jirairay-triptych-01/acto.jpeg)

![Huella simbólica](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/wayuu/triptychs/wayuu-jirairay-triptych-01/huella.jpeg)
