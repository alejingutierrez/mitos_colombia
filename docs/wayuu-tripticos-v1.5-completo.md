# Arámai · primer tríptico con la dirección elegida

Actualización posterior: el usuario pide sustituir la cuadrada por una imagen
más simbólica, no una escena. La propuesta vigente y la auditoría completa están
en [V1.6](./wayuu-tripticos-v1.6-aprendizajes.md). Este documento y sus archivos
se conservan como historial; horizontal y vertical no se regeneran.

Fecha: 5 de septiembre de 2026. Alcance: producir y mostrar las tres piezas,
sin publicar, sin otro mito y sin regenerar la Biblia.

## Decisión y arco

El usuario eligió las opciones 1 y 5 de V1.4 y autorizó completar el tríptico.
El aprendizaje general está implementado y documentado en
[Prompting: realismo mágico en lo cotidiano](./prompting-realismo-magico.md).

| Pieza | Acción | Evolución de la magia | Formato/calidad |
|---|---|---|---|
| Entrada | Arámai pide por temor a la escasez. | Una noche profunda habita bajo una enramada diurna. | 1536×864 · high |
| Acto | Arámai pide el cese; lo enviado continúa. | La misma noche aparece dentro de casas distantes aún iluminadas por fuera. | 864×1536 · medium |
| Huella | Reparte agua, mientras persisten responsabilidad y pérdida. | El jagüey conserva un reflejo nocturno de casas sin los habitantes que viven en la orilla. | 1024×1024 · medium |

La huella adapta la opción 5 de anticipación a memoria. No predice la muerte
futura de las personas representadas, no devuelve muertos ni atribuye un poder
adivinatorio a Arámai. La noche interior tampoco fija un santuario, rito,
anatomía o símbolo tradicional: es la puesta en escena elegida. El cuidado y
el cese pertenecen al desarrollo editorial de la página; su procedencia sigue
separada del núcleo histórico.

## Preparación y generación

Plan inicial: `content/mitos-visuales/wayuu.tripticos.v1.5.json`.
Perfil: `story_first_v2_magic_in_the_ordinary`.
Paquete inicial:
`content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-triptych-15-01/`.

Se congelaron relato, plan, contratos de magia, prompts, parámetros y hashes.
El relato objetivo sigue siendo la instantánea PostgreSQL de Arámai con SHA-256
`a949509df6e51454154a33e3e11979dc5a236ea8065cc1af1aa3d2eba5a0db1d`.

```bash
node scripts/mitos/prepare-openai-triptych.mjs \
  --comunidad wayuu --slug aramai \
  --plan content/mitos-visuales/wayuu.tripticos.v1.5.json \
  --batch-id wayuu-aramai-triptych-15-01
```

La ejecución utilizó el CLI oficial de la habilidad de imágenes, API OpenAI,
`gpt-image-2` y cuenta del `.env` ignorado. Las llamadas efectivamente ejecutadas
fueron exclusivamente desde texto. No hubo generación local de píxeles,
subida de referencias, recorte que sustituyera una pieza ni cambios de cuenta.

## QA e iteración

La tanda inicial completó tres imágenes: entrada en 79,5 s, acto en 34,6 s y
huella en 46 s. No se confundió esa finalización técnica con selección:

- La entrada nueva acercó demasiado a Arámai y se apartó de la composición
  elegida. Se conserva como intento, pero se recupera la horizontal 1 de V1.4.
- El acto conserva cuerpos enteros, capas de papel y exteriores diurnos con
  puertas nocturnas en varias distancias. Se mantiene como candidato del conjunto.
- La primera huella reflejó a las tres personas, eliminando la ausencia
  prevista. No se selecciona aunque conserve noche y estrellas en el agua.
- La huella 02 corrigió la ausencia de reflejos humanos, pero añadió postes
  con travesaños, de lectura ambigua entre cruces e infraestructura. Se hizo
  una huella 03 desde texto para retirar esos elementos no pedidos.

Se intentó preparar una edición precisa de dos imágenes. El control de
permisos rechazó el envío del primer archivo antes de iniciar el proceso;
no hubo ninguna llamada de edición ni subida de imagen. No se reintentó por
otra vía. El expediente `wayuu-aramai-triptych-15-correction-01/status.json`
registra ese intento no ejecutado y la alternativa segura desde texto.

La selección final reúne los archivos realmente escogidos de sus tandas de
origen; no finge que los tres salieron del mismo trabajo inicial. Cada pieza
conserva su prompt, tamaño, calidad y SHA-256. Las observaciones visuales y
limitaciones se registran junto a la selección, separadas de la evaluación
del usuario del tríptico completo.

## Cambio general del proceso, verificado

El módulo compartido de magia cotidiana alimenta el nuevo perfil narrativo,
el compositor artesanal de trípticos y keyframes y el helper del sitio. Se
corrigieron las reglas que pedían rostros facetados, que la figura siempre
dominara por tamaño, foco exclusivo sobre el protagonista y huellas vacías
de personas. Las fichas de identidad sin prodigio siguen sin añadir magia.

82 tests pasan: 66 de Biblia, narrativa, dirección y política de calidad;
16 del generador compartido del sitio. Verifican integridad, propagación y
ausencia de contradicciones de configuración, no belleza ni aprobación
visual. Los prompts históricos y los activos Muiscas/Wayúu previos se conservan.

## Conjunto reunido para revisión conjunta

Las tres piezas verificadas están en
`output/imagegen/wayuu/triptychs/wayuu-aramai-triptych-15-selected/`, con
`LEEME.md` que muestra cada imagen y enlaza su prompt real de origen.
La selección y los hashes están en
`content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-triptych-15-selection/selection.json`.

Se conserva la entrada 01 de V1.4, se selecciona el acto de la primera tanda
V1.5 y la huella 03. La última cuadrada mantiene tres personas vivas sobre
la orilla, cero reflejos humanos y ningún poste con travesaños; completó en
42,9 segundos. El agua sigue ocupando casi media imagen como en la dirección
elegida; esa extensión es compositiva, no una medida del recurso disponible.

La horizontal conserva una figura doméstica adicional dentro de la enramada.
No se la identifica automáticamente como Mareiwa; la ambigüedad del destinatario
se registra para la revisión del conjunto. Conservar la imagen escogida no
convierte todos los detalles producidos por el modelo en hechos del relato.

Tamaños, calidades solicitadas, hashes de prompts y copias binarias verificados.
Contenedor local recreado y sitio local HTTP 200. Estado: conjunto de tres
archivos completo para revisión; no publicación ni aprobación del editor del
tríptico final. No se generó otro mito.
