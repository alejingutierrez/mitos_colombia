# Arámai · qué aprendimos y cuántas iteraciones costó

Fecha editorial: 2026-09-05, America/Bogota. Alcance: piloto de tríptico Arámai,
desde el primer lote local hasta la nueva cuadrada simbólica. No incluye Biblia,
Muiscas, otros mitos, ni posibles llamadas sin artefacto local verificable.

## Resultado y estado actual

La horizontal y la vertical seleccionadas se conservan byte por byte. Sólo se
genera una nueva cuadrada **1024×1024, medium**, mediante API OpenAI desde texto.
La nueva intención es **el vacío pesa**: un chinchorro vacío sostiene una noche
profunda. Es una metáfora editorial de la pérdida irreversible, no otra escena
del reparto de agua ni un símbolo tradicional Wayúu certificado.

La nueva cuadrada salió en **una generación, 38,3 segundos, cero correcciones**
en este turno. Se presenta para revisión del usuario. No está aprobada por haber
completado la API o pasado el QA técnico, ni demuestra todavía una reducción
estadística de las iteraciones. No se publica ni se produce otro mito.

## Cuenta verificable: imágenes y rondas son cosas diferentes

| Pieza | Antes de este turno | Nuevas ahora | Total de imágenes únicas | Rondas de preparación |
|---|---:|---:|---:|---:|
| Horizontal / entrada | 9 | 0 | 9 | 5 |
| Vertical / acto | 7 | 0 | 7 | 7 |
| Cuadrada / huella | 7 | 1 | 8 | 8 |
| Total | 23 | 1 | 24 | No sumar como rondas conjuntas |

Las cinco alternativas solicitadas por el usuario son **cinco horizontales en
una ronda exploratoria**, no cinco correcciones sucesivas. La opción 5, aunque
inspiró la huella, cuenta como horizontal porque así se generó. La horizontal
elegida salió en la cuarta ronda horizontal; después se produjo una quinta
ronda innecesaria y se volvió al archivo elegido. La vertical actual es la
séptima generación vertical; la cuadrada nueva es la octava cuadrada histórica,
pero la primera del nuevo brief simbólico.

No se cuentan dos montajes `triptych-review.jpeg`, las tres copias binarias del
directorio `15-selected`, dry-runs, errores del CLI sin llamada ni ediciones
rechazadas antes de subir archivos. No hubo subidas en esta corrección.
El denominador de «imágenes aprobadas» del tríptico completo sigue abierto;
**24/3 no es una tasa de iteraciones por imagen aprobada**.

### Cronología de las imágenes producidas

| Etapa / lotes | Horizontal | Vertical | Cuadrada | Qué ocurrió y qué aprendemos |
|---|---:|---:|---:|---|
| Piloto 01 + corrección 01 | 1 | 2 | 1 | Cultura reconocible; acto con testigos y monumentalidad no pedidos. El QA interno no fijó la dirección del editor. |
| Magic calibration 01/02 + magic triptych 01 | 1 | 2 | 1 | Pliegues gigantes y cesta cartográfica: espectacularidad sin suficiente relato; el rostro por facetas seguía alejándose del papel buscado. |
| Story 12, estudios 01 y 02 | 0 | 2 | 2 | Se recuperó el texto de la página, pero cinta/silueta genérica, caras de animación y planos cerrados. El usuario rechazó las cuatro. |
| Art 13 wide 01 | 1 | 0 | 0 | Figuras más planas y plano abierto: avance material. La noche aún podía confundirse con sombra ordinaria. |
| Magic 14 options 01 | 5 | 0 | 0 | Cinco mecanismos distintos. El usuario eligió 1 y 5: lo cotidiano contiene una contradicción imposible con efecto narrativo. |
| Triptych 15 01 | 1 | 1 | 1 | La nueva horizontal se acercó demasiado: retrabajo evitable, se reutilizó la 1 elegida. La vertical quedó como candidato. La cuadrada reflejó personas y anuló la ausencia. |
| Triptych 15 huella 02 | 0 | 0 | 1 | Corrigió reflejos, añadió travesaños ambiguos. Un arreglo puede introducir otra desviación. |
| Triptych 15 huella 03 | 0 | 0 | 1 | Retiró travesaños. Seguía siendo una escena: resolver detalles no resuelve la función editorial. |
| Symbolic 16 01, este turno | 0 | 0 | 1 | Se cambia la función antes del prompt: un motivo y una operación simbólica, sin reparto ni acción humana. Pendiente del usuario. |
| Total | 9 | 7 | 8 | 24 archivos generados únicos verificados por SHA-256. |

Los lotes y cada archivo, dimensión real, calidad solicitada, hash e integridad
del prompt están en
`content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-symbolic-16-01/iterations-audit.json`.

Reproducir sin modificar archivos ni llamar API:

```bash
node scripts/mitos/audit-triptych-iterations.mjs content/mitos-visuales/_openai/wayuu/aramai
```

Los ocho prompts más antiguos guardaron el hash del texto sin el salto final;
los dieciséis siguientes guardaron bytes exactos. La auditoría registra ambas
convenciones sin reescribir el historial ni confundirlas con corrupción. Todas
las dimensiones coinciden con lo solicitado, aunque los primeros lotes tenían
3:2/2:3 mal rotulados en documentación como 16:9/9:16; eso se corrigió desde V1.2.
Esto es auditoría de archivos locales, **no facturación ni log completo de API**.

## Cómo nos acercamos al resultado

El avance no fue añadir adjetivos al prompt. Fueron decisiones separables:

1. **Texto correcto:** congelar el relato que acompaña la imagen, separando
   transcripción histórica, ampliación de la página y puesta en escena. La
   Biblia aporta identidad, no sustituye la narración.
2. **Papel correcto:** recortes de figuras casi planos, cabezas mínimas y
   vestuario completo; la profundidad ocurre entre planos del mundo, no en
   mejillas facetadas. Pedir muchas piezas faciales produjo volumen de animación.
3. **Cámara correcta:** abrir espacio para la relación entre persona, territorio
   y prodigio. Una cifra de tamaño humano en el prompt no garantiza su cumplimiento.
4. **Magia concreta:** ancla cotidiana → comportamiento imposible → consecuencia.
   El salto fue la noche dentro del día, no una dosis mayor de oscuridad o brillo.
5. **Decisión del editor:** comparar alternativas verdaderamente distintas
   permitió encontrar una dirección. El agente prefería otras opciones; la
   elección del usuario, no el gusto del agente, determina la continuidad.
6. **Función por formato:** horizontal/vertical narran; cuadrada sintetiza.
   La fidelidad semántica del símbolo no exige representar todo el desenlace.

## Causas del retrabajo y correcciones del proceso

| Causa | Evidencia | Regla nueva |
|---|---|---|
| Fidelidad cultural tomada como suficiencia artística | Primer piloto correcto en prendas, insuficiente en magia | Evaluar cultura, relato, magia y materialidad por separado. |
| Acumular instrucciones contradictorias | Cabezas por facetas; planos generales con emoción facial minuciosa | Eliminar reglas incompatibles antes de añadir negativas. |
| Convertir decisiones plásticas en relato | Pliegue/cesta sustituyeron acciones; se omitió la ampliación publicada | Congelar texto y declarar cada licencia; no copiar canon visual como hecho narrativo. |
| Homogeneizar una tanda regenerando lo elegido | Horizontal nueva V1.5 descartada | Conservar el archivo elegido y sus hashes; preparar sólo lo que falta. |
| Corregir detalle antes de función | Tres cuadradas V1.5 pulieron reflejos/postes, ninguna se volvió simbólica | Revisar función → sentido → magia → materia/espacio → detalle. |
| Contaminación entre piezas | Cuadrada heredaba reparto, indumentaria y verbos de una escena | Contratos específicos de símbolo, materialidad y continuidad; no inyectar el elenco ausente. |
| Confundir QA del agente con aprobación | Varias salidas con QA interno fueron rechazadas | Registrar quién decidió y qué aprobó; nunca «aprobada» por tests verdes. |

## Protocolo para la próxima producción

Antes de generar: tres frases de intención complementarias; revisión del texto
y entidades pertinentes; una anomalía por pieza; prueba visual; función explícita;
prompt final sin contradicciones; lista de archivos que se conservarán.
Para la cuadrada: tesis + motivo + operación + vínculo con el relato + lectura
en pequeño. No basta un objeto decorativo con estrellas.

Generar inicialmente una propuesta por pieza pendiente, no un nuevo tríptico
completo si ya hay piezas elegidas. Registrar el resultado y, si falla, cambiar
una causa prioritaria manteniendo lo conseguido. Tras dos correcciones con el
mismo fallo, reformular el brief antes de seguir gastando; es trabajo creativo,
no un bloqueo cultural ni una solicitud automática de autorización.

Meta con dirección estable: **una generación inicial y, si hace falta, una
corrección**. No es promesa ni tope de calidad. Para saber si mejora, medir:

- Generaciones por pieza finalmente aprobada, con su historial completo.
- Mediana y distribución por función, separadas de exploración de dirección.
- Aprobación editorial en primera salida; no sustituirla por QA técnico.
- Correcciones por causa repetida y regeneraciones evitadas por reuso.
- Coste/latencia sólo cuando haya evidencia; no inventar coste por archivo.

No hay aún muestra suficiente para afirmar que ya reducimos la tasa. Esta
cuadrada es la primera observación del brief nuevo, pendiente de aprobación.

## Implementación y verificación

Perfil nuevo: `story_first_v3_symbolic_huella`; plan
`content/mitos-visuales/wayuu.tripticos.v1.6.json`. El preparador exige la función
de cada pieza y un contrato simbólico completo. La huella usa continuidad y
materialidad propias. El compositor general de trípticos comparte la regla;
los perfiles históricos, prompts, imágenes y keyframes se conservan.

90 tests pasan, incluidos casos de aislamiento de personajes, conservación de
prompts horizontal/vertical, función simbólica sin filtrarla a keyframes,
conteo sin copias y detección de diferencias reales de hash. La generación
remota usa el CLI oficial de la habilidad `imagegen`, `gpt-image-2`, cuenta
autorizada del `.env` ignorado, sin modificación de credenciales.

Inspección de la nueva imagen: un único objeto suspendido; vacío sin cuerpo;
estratos índigo con oclusiones y sombras, estrellas discretas, exterior cálido,
sin escena, texto ni base exterior. Limitación: el tejido de tiras anchas puede
leerse cercano a cestería y la forma ahondada no es una reconstrucción literal
del chinchorro. La lectura emocional del símbolo requiere juicio del usuario.

La selección actual y la revisión están en el paquete `wayuu-aramai-symbolic-16-01`.
El conjunto anterior permanece como historial; no se sobrescribe ni se presenta
su cuadrada escénica como la propuesta vigente.

Cierre técnico: `git diff --check` sin errores, contenedor local recreado con
`docker-compose up -d --build` y sitio local HTTP 200. Se verificaron nuevamente
los tres archivos seleccionados, sus dimensiones y hashes de imagen/prompt;
horizontal y vertical permanecen intactas. No hubo commit, despliegue ni ingesta.
