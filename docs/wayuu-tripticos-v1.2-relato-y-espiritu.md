# Arámai · revisión V1.2 de relato, espíritu y lenguaje visual

Fecha: 5 de septiembre de 2026. Estado: las cuatro muestras V1.2 fueron rechazadas por el usuario.

Actualización posterior al QA interno: el usuario rechaza el estilo de caras
semejante a Pixar y los planos demasiado cerrados en las cuatro salidas. La
consideración de una huella como «prometedora» más abajo queda como registro
histórico del juicio del agente, no como selección vigente. La siguiente
calibración está en `docs/wayuu-tripticos-v1.3-papel-y-distancia.md`.

## El error que reabre el piloto

La revisión V1.1 mejoró la fabricación de personajes, pero el usuario rechazó
su nivel de realismo mágico y fidelidad. Su QA interno anterior no equivale a
aprobación editorial. El pliegue gigante, la cesta cartográfica y las tres
rancherías eran decisiones de arte nuestras; acabaron ocupando el lugar de la
acción y de sus consecuencias humanas.

Se detectó además una contradicción decisiva: V1.1 ilustró sólo la transcripción
de Chaves y eliminó el regreso y el cuidado de Arámai, mientras el relato actual
del sitio sí contiene esos momentos. El proceso estaba ilustrando un texto
distinto al que iba a acompañar.

## Texto objetivo y niveles de evidencia

La referencia narrativa es `myths.content`, slug `aramai`, leída en PostgreSQL
sin modificarla. Se conserva completa en
`content/mitos-visuales/research/aramai-narrative-2026-09-05.json`, con hash SHA-256
`a949509df6e51454154a33e3e11979dc5a236ea8065cc1af1aa3d2eba5a0db1d`.

El núcleo histórico consta en [Chaves, 1946, relato VI, página 314](https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1):
escasez, petición de Arámai, respuesta de Mareiwa, recorrido de Wanurú y
responsabilidad atribuida al protagonista. La procedencia oral y la mediación
del intérprete se consignan al final del relato VIII. Es un testimonio situado,
no una voz universal o sin mediaciones.

La petición de cese y el cuidado son ampliaciones literarias de la página.
Se pueden ilustrar con fidelidad a esa edición, pero no atribuir a la
transcripción de 1946. Esta revisión no reescribe el texto publicado.

Las sombras autónomas, la iluminación y el chinchorro de las muestras son
puesta en escena editorial. No constituyen símbolos, rituales ni nuevos
sucesos tradicionales. Cada imagen declara esta distinción en su expediente.

Como contexto se consultaron [Carmen Laura Paz Reverol, 2017](https://entrediversidades.unach.mx/index.php/entrediversidades/article/view/18)
y [García Gavidia y Valbuena, 2004](https://www.humanas.unal.edu.co/colantropos/files/5114/5615/3446/garcia_wayuu.pdf).
Ayudan a pensar relaciones activas entre lo cotidiano y las presencias no
humanas. No son versiones adicionales de Arámai: no se importan sueños,
Pulowi, flechas ni atributos de otros seres a su trama. La descarga HTML del
primer artículo falló; se conservan ficha y extracto consultable como contexto
limitado, no como verificación completa del artículo.

## Cambios operativos del proceso

1. Fijar qué relato se ilustra, con instantánea y hash, antes de pedir imágenes.
2. Extraer la cadena de acciones: sujeto, verbo, destinatario y consecuencia.
   Identificar la procedencia de cada acción.
3. Escribir la emoción que nace de esas acciones: en esta edición, temor,
   súplica, impotencia, responsabilidad y cuidado sin reparación total.
4. Construir la magia desde la agencia del ser mítico y sus efectos sobre la
   vida común. La magnitud del paisaje no mide el realismo mágico.
5. Usar la Biblia para continuidad de diseño. Una ficha aprobada no convierte
   piedras carbón, un pliegue ocre ni tres rancherías en hechos tradicionales.
6. Mantener una única acción principal por imagen. Los prompts de actos
   distintos no deben introducir sus objetos o efectos en los otros.
7. Registrar la licencia plástica: qué viene del texto y qué inventamos para
   hacerlo visible. La licencia no sustituye al verbo de la escena.
8. Leer la imagen producida antes de volver a su prompt. Describir literalmente
   qué hace cada figura. Si sólo vemos paisaje, pose o efecto, falta narración.

Se retiran para V1.2 las prescripciones de prodigio mayor que medio cuadro,
ausencia de personas en la huella y prohibición de recorrido entre rancherías.
Conservar cero violencia y sexualización explícitas permite mostrar presencia,
temor, cuidado y reproche; no obliga a vaciar el mundo de personas.

## La propuesta concreta

| Pieza | Acción del relato | Hipótesis plástica a comprobar |
|---|---|---|
| Entrada | Arámai pide; Mareiwa atiende | El diálogo con un interlocutor fuera de campo hace que una sombra empiece a actuar. |
| Acto | Arámai pide el cese; el recorrido continúa | Arámai suplica sentado mientras una sombra sin dueño pasa hacia las casas. La presencia actúa independientemente de sus manos. |
| Huella | Ayuda y responsabilidad persisten | Servir agua junto a un sitio vacío; la memoria de una ocupación subsiste en una sombra. Debe leerse ausencia, nunca resurrección. |

El acto y la huella se producen primero como estudios `medium`. Su evaluación
puede abrir una corrección de la pieza; no supone aprobar otro mito. La entrada
horizontal corresponde a `high` cuando se produzca.

La primera prueba del acto se descartó: la presencia parecía una cinta y las
manos podían leerse como control mágico. La segunda prueba cambia el gesto por
una súplica sentada y utiliza una sombra autónoma con indicio de paso humano.
Ese indicio es diseño reversible, no una anatomía tradicional fijada. En la
huella se separan chinchorro y sombra de los cuerpos vivos para que la anomalía
pueda reconocerse. Se precisan además cabezas descubiertas y prendas sueltas
para corregir las capuchas y siluetas semejantes a hábitos de la primera tanda.

## Materialidad y formatos

Personajes de papel cortado en bajo relieve: rostro por planos, cabello por
mechones recortados, manos y prendas por piezas. Profundidad física con aire y
oclusiones. Se permiten cantos internos que explican la construcción; el mundo
llena el encuadre y oculta soporte, cartón exterior y mesa.

La muestra V1.1 se había rotulado incorrectamente como 16:9/9:16: sus archivos
1536×1024 y 1024×1536 son 3:2/2:3. V1.2 declara y verifica proporciones reales:
1536×864 horizontal, 864×1536 vertical y 1024×1024 cuadrada, sin recorte posterior.

## Preparación y evaluación

Plan de esta iteración rechazada: `content/mitos-visuales/wayuu.tripticos.v1.2.json`.
Perfil de prompt: `story_first_v1`.

```bash
node scripts/mitos/prepare-openai-triptych.mjs \
  --comunidad wayuu --slug aramai \
  --plan content/mitos-visuales/wayuu.tripticos.v1.2.json \
  --batch-id wayuu-aramai-story-12-studies-01 --only acto,huella
```

Cada paquete conserva relato, plan, prompts, hashes y procedencia de los
eventos. La generación usa la API de OpenAI ya autorizada, `gpt-image-2`, desde
texto y con la clave del `.env` ignorado; ninguna clave se copia al expediente.

Los tests verifican integridad y cobertura de acciones, y la correspondencia
entre píxeles y proporción. No verifican belleza, mística ni fidelidad de los
píxeles: eso requiere inspección visual y el juicio del editor. Los estudios
permanecen en revisión aunque pasen los controles técnicos.

## Resultado de los estudios

Se produjeron dos tandas de acto y huella, cuatro imágenes `medium`. Sólo la
segunda huella se propone como estudio prometedor: cuidado, reclamo y ausencia
coexisten en un espacio doméstico. No constituye aprobación final.

Las dos verticales siguen descartadas como solución artística: la primera
parece una cinta manipulada y la segunda una silueta de señalética. La primera
huella presenta sombras ambiguas y vestuario con capuchas. El expediente
`content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-story-12-studies-02/review.json`
conserva observaciones, limitaciones y hashes de las cuatro salidas.

La siguiente iteración debe resolver la presencia activa del acto sin volver
a monumentalidad genérica, señalética ni control mágico de Arámai. No se ha
generado la entrada V1.2 ni otro mito. El usuario evalúa el avance del lenguaje;
no se le presenta un tríptico que el propio QA considera incompleto.
