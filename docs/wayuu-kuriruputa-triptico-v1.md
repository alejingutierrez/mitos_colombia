# El indio Kuriruputá · primer tríptico

Fecha: 2026-09-05. Aplicación del proceso aprendido con Arámai, perfil `story_first_v3_symbolic_huella`.

## Alcance y elección

El usuario autoriza hacer el siguiente mito Wayúu. Se elige Kuriruputá porque sigue a Arámai en la secuencia de producción de la Biblia (`docs/wayuu-biblia-visual-v3.md`, lotes 02–03); no se inventa una cola de trípticos previamente aprobada.

Este lote contiene exactamente tres imágenes nuevas. No incluye otros mitos, keyframes, publicación, escrituras en la base de datos ni cambios de cuenta. La aceptación visual final corresponde al usuario.

## Investigación antes del prompt

Se lee el relato vigente mediante consulta PostgreSQL de sólo lectura, se conserva completo en `content/mitos-visuales/research/kuriruputa-narrative-2026-09-05.json` y se valida su SHA-256 `c429661b841073b2f2436a91d41d047fd05fadf25a12b2df0226192fcd239c91`.

Se coteja con [Milcíades Chaves, 1946, IX: El Indio Kuriruputá](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1), pp. impresas 316–317, índices PDF 12–13. Es memoria histórica/postcontacto, no cosmogonía. La atribución a Ana Isolina Ipuana y la intérprete Ana Ofelia Ortíz aparece al cierre del bloque IX–X, p.319; la atribución precedente a Juancito Iguarán corresponde a los cuentos anteriores. Se pudo consultar texto; las capturas del PDF fallaron con `Cache miss`.

La compilación de Villa Posse no cuenta como versión independiente. El [contexto del sistema normativo Wayúu de UNESCO](https://ich.unesco.org/en/RL/wayuu-normative-system-applied-by-the-putchipu-ui-palabrero-00435) orienta el cuidado con mediación y relaciones, pero no prueba un protocolo particular en esta historia. No se incorpora un palabrero ni una ceremonia por asociación.

Se separan tres niveles:

- Núcleo registrado: rescate por las hermanas y sueño con tuma.
- Desarrollo de la página: deliberación compartida, mediación y lectura de continuidad relacional.
- Licencias de las imágenes: paño convertido en camino, fibras que conectan espacios y piedra fracturada mantenida unida. No son acontecimientos ni símbolos tradicionales certificados.

No se ilustra combate, daño corporal, ingestión de objetos ni cosificación de la nueva pareja. Tampoco se reescribe el relato en este encargo.

## Reconciliación con la Biblia

Se verifican existencia y SHA-256 de los siete modelos seleccionados antes de generar. Se inspeccionan visualmente identidad de Kuriruputá, hermanas y tuma; el resto se usa mediante contratos escritos, sin adjuntar archivos a la API.

- Mantener camisa terracota, pantalón crudo y cabello oscuro del protagonista.
- Mantener mantas amplias mostaza, rojo oscuro e índigo y diferencias de edad de las hermanas. Tres mujeres es el reparto de arte, no un número tradicional demostrado.
- Simplificar caras y manos a recortes casi planos. La Biblia aporta identidad; no obliga a conservar su volumen facial anterior.
- Corregir sólo en este tríptico una discrepancia: la ficha de estados coloca el paño en el antebrazo; la fuente sitúa la lesión en la pierna. No se modifica el asset previo ni se afirma un lado histórico.
- La tuma sigue siendo pequeña, irregular, mate, rojo óxido; nunca rubí facetado o amuleto inventado.
- No añadir pintura facial ni patrones codificados sin sustento específico para este momento.

## Tres funciones, un hilo propio

Tesis editorial: **lo que parecía riqueza individual se sostiene entre varias personas**. Se reutiliza el método de Arámai, no su noche, estrellas o chinchorro.

| Pieza | Acción o símbolo | Contradicción material | Calidad y tamaño |
| --- | --- | --- | --- |
| Entrada horizontal | Las hermanas sostienen y guían el regreso | El paño del rescate se prolonga en camino suspendido | high · 1536×864 · 16:9 |
| Acto vertical | Kuriruputá cuenta; sus hermanas deliberan | Fibras de la tuma se convierten en sendas entre umbrales | medium · 864×1536 · 9:16 |
| Huella cuadrada | Lo valioso permanece unido por vínculos | Una sola piedra abierta se sostiene por fibras entre sus fragmentos | medium · 1024×1024 · 1:1 |

El formato vertical usa altura para profundidad territorial, no para acercar caras. La cuadrada tiene contrato propio: no hereda reparto, vestuario ni escena de conversación.

## Ejecución reproducible

Plan: `content/mitos-visuales/wayuu.kuriruputa.triptico.v1.json`.

Paquete inmutable: `content/mitos-visuales/_openai/wayuu/el-indio-kuriruputa/wayuu-kuriruputa-triptych-01/`.

1. Validar el relato congelado y la cobertura de acciones con procedencia.
2. Verificar modelos canónicos, funciones editoriales y contrato de magia cotidiana.
3. Preparar prompts, tamaños, calidades, hashes y snapshots con `prepare-openai-triptych.mjs`.
4. Crear `requests.jsonl` desde esos prompts exactos y ejecutar dry-run.
5. Generar mediante el CLI oficial de la skill imagegen: OpenAI `gpt-image-2`, tres solicitudes, concurrencia 3, un intento máximo por solicitud, sin augmentación ni referencias locales.
6. Inspeccionar cada imagen sin dar por cumplido el prompt; separar narrativa, arte, técnica y aprobación editorial.
7. Si falla una pieza, abrir otro paquete sólo para ella; conservar todos los intentos y sus motivos.
8. Registrar selección candidata, hashes, límites observados e iteraciones reales. No sustituir archivos canónicos ni publicar sin autorización.

La clave se carga exclusivamente desde el `.env` local ignorado. No se copia en documentación, manifiestos o logs. No hay generación local del contenido visual; sólo preparación, descarga y revisión de resultados remotos.

## Criterios de revisión

- Las hermanas deben actuar; Kuriruputá no es héroe triunfal ni hechicero.
- Adultos de papel casi plano, cabeza pequeña y rostro mínimo; no Pixar, low-poly ni muñecos.
- Profundidad entre planos con aire y sombras; no una ilustración texturizada plana.
- Encuadre inmersivo a sangre, sin soporte exterior ni cartón corrugado. Los cantos internos finos sí pertenecen a la construcción de papel.
- La magia cambia una relación del relato; no es brillo decorativo.
- La huella debe funcionar como un motivo único también en miniatura.
- La continuidad de vestuario se evalúa entre las dos escenas; no se exige ropa ni personas al símbolo.

## Resultado de la primera ejecución

Tres archivos únicos generados y revisados individualmente: **una generación por pieza, una ronda por pieza, cero repeticiones**. El contador mide producción, no aprobación. No se afirma todavía una tasa mejorada de aceptación: el usuario debe revisar este tríptico.

Los tamaños reales coinciden con los solicitados; los hashes de prompts coinciden byte por byte con el paquete. La API completó las tres solicitudes sin reintentos; el CLI reportó 89,4 s para horizontal, 36,5 s para vertical y 38,1 s para cuadrada, ejecutadas en paralelo. No expuso tokens ni costos, por lo que no se estiman como datos reales.

Revisión visual con observaciones, no aprobación automática:

- Horizontal: paño-camino, papel recortado, vestuario y agencia de la hermana que guía se leen bien. El apoyo corporal es más sutil que el rescate previsto; el paño de la rodilla no resulta inequívoco. Las figuras son algo mayores de lo solicitado, aunque el territorio domina.
- Vertical: se ve conversación entre el protagonista y la hermana mayor, con las demás presentes y sendas en gran profundidad. Una senda termina en el corral en vez de un tercer umbral; la tuma es más angulosa que en la Biblia. El suelo muestra menos estratos abiertos que la horizontal.
- Cuadrada: un único motivo rojo unido por fibras, sin escena o personajes. La silueta es más aplanada que una piedra gruesa y la suspensión no es inequívoca; la operación de unión sí se ve.

Se conservan como **candidatas pendientes de revisión del usuario**. No se generan alternativas por anticipación ni se ocultan las diferencias entre lo pedido y lo obtenido.

Pruebas: 90 tests existentes del pipeline aprobados; preflight específico de relato, cobertura de eventos, aislamiento del prompt simbólico, tamaños, calidades y ausencia de referencias adjuntas aprobado. Estos tests no certifican calidad artística. Contenedor local reconstruido mediante `docker-compose up -d --build`; home en `http://localhost:3003` responde HTTP 200. No se hizo despliegue ni publicación de imágenes.

[Ver las tres piezas, prompts y revisión detallada](/Users/alegut/MyApps/Personal/mitos_colombia/output/imagegen/wayuu/triptychs/wayuu-kuriruputa-triptych-01/LEEME.md).

Aprendizaje transferido: definir primero la acción y la relación humana, elegir un vehículo mágico propio del relato, separar los contratos por función y congelar el prompt antes de generar. Los ajustes potenciales detectados —sostén corporal, escala de figuras y forma de la piedra— quedan nombrados para una eventual corrección de una sola variable, si el usuario la solicita.
