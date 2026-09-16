# Arámai · V1.4 · cinco alternativas de realismo mágico

Fecha: 5 de septiembre de 2026. Estado: cinco opciones generadas y revisadas; elección editorial pendiente.

Actualización: el usuario eligió **1 y 5** y autorizó mejorar el proceso general
y completar el tríptico de Arámai. Ver `editorial-choice-2026-09-05.json` del
paquete y [la ejecución V1.5](./wayuu-tripticos-v1.5-completo.md). El resto de
este documento conserva el registro previo a esa elección.

## Encargo y continuidad

El usuario valora positivamente el estudio V1.3 de figuras recortadas y plano
abierto, pero considera insuficientes su magia y relación con el relato. Pide
cinco opciones visuales para escoger. Esto valida la dirección material como
base de exploración; no aprueba el tríptico ni la producción de otros mitos.

Se conservan personas de papel casi plano, proporciones adultas, rostros de
perfil mínimos, prendas Wayúu completas y amplias, mundo a sangre y profundidad
física entre hojas. Se mantienen planos generales con figuras pequeñas. La
imagen V1.3 se inspecciona localmente para orientar la continuidad; no se
sube a la API. Son cinco composiciones nuevas desde texto.

## Cinco mecanismos diferentes, una misma historia

Todas son alternativas horizontales para la entrada de Arámai: petición,
escucha, comienzo de una consecuencia autónoma o anticipación del desenlace.
No son cinco nuevos episodios tradicionales. Cada propuesta separa acciones
del relato y licencia de puesta en escena.

| Nº | Opción | Mecanismo plástico | Relación narrativa |
|---|---|---|---|
| 1 | La noche que escucha | Una noche profunda habita bajo una enramada a pleno día. | La petición encuentra una escucha no humana. |
| 2 | El cielo se inclina a escuchar | Las hojas del cielo descienden entre las casas hacia quien llama. | Una voluntad responde al llamado, sin cuerpo divino fijado. |
| 3 | Las huellas sin caminante | Pisadas de noche atraviesan arena, pared y aire sin un cuerpo. | El recorrido de Wanurü cobra autonomía. |
| 4 | Wanurü entre los planos | Distintas hojas de penumbra insinúan una presencia en movimiento. | La respuesta enviada actúa independientemente de Arámai. |
| 5 | El agua recuerda el futuro | El jagüey refleja las mismas casas nocturnas sin sus habitantes presentes. | Anticipación de la pérdida y responsabilidad, desde el desenlace editorial. |

La opción 4 explora más figuración que las otras: su silueta, tamaño y
construcción no son una anatomía certificada de Wanurü. La opción 5 es una
anticipación para el espectador; no atribuye adivinación a Arámai. Noche,
huellas imposibles, cielo inclinado y reflejo temporal son hipótesis de arte,
no símbolos, rituales o sucesos que se atribuyan a la fuente histórica.

La libertad visual no se mide por cantidad de adornos. Cada anomalía debe
actuar dentro del espacio habitado y tener una relación concreta con el
llamado, la respuesta o su consecuencia. Se mantiene ausencia de violencia
gráfica y sexualización, sin borrar enfermedad, temor ni responsabilidad de
la lectura del mito.

## Preparación reproducible

Paquete inmutable:
`content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-magic-14-options-01/`.

Contiene `plan.snapshot.json` (base común y cinco variaciones),
`narrative.snapshot.json`, `jobs.json` y cinco archivos `prompts/*.prompt.txt`.
Se conserva el mismo relato objetivo de V1.2/V1.3 y su SHA-256:
`a949509df6e51454154a33e3e11979dc5a236ea8065cc1af1aa3d2eba5a0db1d`.

Cada variante se combina con la base común, se valida con
`validateNarrativePlan` y se compone mediante `buildStoryFirstPrompt`, ambos
del módulo existente `scripts/mitos/triptych-story-direction.mjs`. No hay
un generador de imágenes local ni un cliente SDK nuevo. La preparación
produce un JSONL temporal para el CLI oficial de la habilidad de imágenes.

Generación: API de OpenAI, `gpt-image-2`, cuenta del `.env` ignorado, cinco
trabajos independientes con concurrencia 5, sin referencias adjuntas. Todos
son alternativas de **entrada horizontal**, 1536×864, 16:9, calidad `high`.
La política general se conserva: bíblia, vertical, cuadrada y keyframes en
`medium`; solamente entrada horizontal en `high`.

```bash
set -a
source .env
set +a
/tmp/mitos-imagegen-venv-20260904/bin/python \
  /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py \
  generate-batch \
  --input content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-magic-14-options-01/requests.jsonl \
  --out-dir output/imagegen/wayuu/triptychs/wayuu-aramai-magic-14-options-01 \
  --concurrency 5 --no-augment --max-attempts 1
```

Los cinco prompts completos y parámetros del JSONL quedan conservados en los
archivos del paquete para reconstruir la llamada. No se registra ninguna
clave ni dato secreto. Los archivos previos no se sobrescriben.

El JSONL temporal se retiró después de la generación. Su copia exacta queda
archivada como `requests.jsonl` en el paquete, de modo que la llamada puede
reconstruirse sin acceder a historial de terminal. La ejecución reproducida
debe usar un directorio de salida nuevo; no sobrescribir estas cinco opciones.

## Revisión y presentación

Comprobar que existan cinco salidas distintas y que sus dimensiones y hashes
correspondan a los trabajos preparados. Inspeccionar cada imagen: personas,
construcción del papel, profundidad, encuadre, anomalía visible, acción del
relato y posibles lecturas no deseadas. Una intención escrita en el prompt
no cuenta como logro visible.

Mostrar las cinco imágenes completas, numeradas con los mismos nombres y
orden que sus expedientes. La recomendación del agente, si la hay, no
sustituye la elección del usuario. No publicar, no ingerir la selección ni
producir el resto del tríptico mientras esa elección siga pendiente.

## Resultado de la inspección

Se completaron cinco llamadas, sin reintentos, en 77–84 segundos cada una.
Los cinco JPEG son distintos, de 1536×864; los hashes de plan y prompts
coinciden con los expedientes. Los cuatro tests de integridad narrativa
pasaron. Detalles y SHA-256 en `review.json` del paquete.

Las cinco conservan figuras enteras y caras de perfil de papel, pero la
generación no respetó estrictamente el tamaño humano solicitado del 15–18%
en todas ellas. No se considera una aprobación por haberlo pedido por texto.

- **1:** noche estelar visible dentro del espacio doméstico. La enramada y
  Arámai quedaron grandes; aparece una mujer adicional bajo el techo que puede
  convertirse visualmente en destinataria del diálogo.
- **2:** cielo y comunidad tienen mayor relación de escala y capas claras.
  El brazo levantado admite lectura de control, y los arcos pueden parecer
  un telón; ambos puntos se ajustarían si se elige.
- **3:** recorrido imposible legible en suelo, pared y aire. La pared aislada
  y el patrón pueden verse diagramáticos; Arámai quedó demasiado cercano.
- **4:** presencia sobrenatural explícita construida entre recortes. Creció
  por encima de la escala pedida: es una propuesta de gigante, con menor
  legibilidad de los recortes superiores en pantallas oscuras.
- **5:** el reflejo nocturno conserva casas y omite personas diurnas. El agua
  ocupa casi media imagen y puede debilitar la escasez; la anticipación sigue
  siendo licencia editorial, no profecía atribuida al mito.

Preferencia del agente, sin sustituir elección editorial: 2 para una escucha
cósmica; 5 para una anomalía cotidiana ligada al desenlace; 4 para presencia
mítica más explícita. Ninguna fue publicada ni incorporada como selección
definitiva. Se conservan las cinco para que el usuario escoja.
