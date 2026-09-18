# Trípticos Wayúu V1

## Estado

Actualización 2026-09-05: el usuario rechazó V1.1 y las cuatro muestras V1.2.
El piloto está reabierto. La calibración vigente está en
[V1.3: papel y distancia](wayuu-tripticos-v1.3-papel-y-distancia.md); se conserva
el diagnóstico narrativo de [V1.2](wayuu-tripticos-v1.2-relato-y-espiritu.md).
Los resultados y QA de este documento se conservan como historial, no como
aprobación del nuevo lenguaje.

La producción empieza con un único piloto: **Arámai**. Las otras historias no
se preparan ni se generan hasta que el editor apruebe las tres piezas juntas.

## Orden obligatorio del pipeline

1. Leer la narración completa y registrar fuente, fecha, alcance y conflictos.
2. Cruzar personajes, fuerzas, objetos, lugares y fenómenos contra la selección
   aceptada de la Biblia V3.
3. Corregir en el expediente del tríptico cualquier contradicción demostrable
   entre una fuente primaria y una ficha visual previa; no copiar el error por
   continuidad automática.
4. Fijar la gramática mítica: mundo ordinario, hecho imposible, regla, límite,
   transformación, huella y centro emocional.
5. Escribir las tres escenas como funciones distintas: entrada, acto y huella.
6. Preparar un paquete inmutable con prompts y hashes; nunca sobrescribirlo.
7. Generar con `gpt-image-2`: entrada 16:9 en `high`, acto 9:16 en `medium` y
   huella 1:1 en `medium`.
8. Hacer QA individual y del conjunto. Un fallo abre un lote de corrección que
   contiene sólo las piezas rechazadas.
9. Mostrar el tríptico al editor. Sólo una aprobación explícita desbloquea la
   planificación y producción de las siguientes historias.

## Revisión V1.1 · recuperar magia y misticismo

El primer piloto demostró que la fidelidad cultural puede convivir con una
imagen demasiado documental. La corrección del proceso separa dos ámbitos:

- **canon cultural protegido:** identidad, edad, cuerpo, vestuario, arquitectura,
  objetos documentados y relaciones sociales no se inventan ni deforman;
- **campo de imaginación mítica:** territorio, luz, sombra, escala, tiempo,
  distancia y materia pueden actuar de manera físicamente imposible si expresan
  la regla particular del mito.

Cada mito debe declarar además:

1. una imagen imposible dominante que ocupe una porción sustancial del cuadro;
2. cómo evoluciona el mismo motivo entre entrada, acto y huella;
3. una luz mística propia, no un filtro oscuro o un aura genérica;
4. una prueba de asombro inmediato: la escena no puede confundirse con un
   documental cultural;
5. una prueba de memoria: al cerrar la imagen debe quedar una frase visual
   singular y recordable.

Las prohibiciones siguen protegiendo la cultura, pero ya no pueden reducir el
prodigio a un pequeño detalle. Mística no significa humo, chispas, runas o
fantasía intercambiable: significa que el mundo material reconoce lo imposible
como una de sus leyes.

### Tratamiento obligatorio de personajes

Los personajes no pueden ser ilustraciones realistas cubiertas por una textura
de papel. Deben parecer objetos físicos construidos y fotografiados:

- rostro, nariz, pómulos, cejas, pelo, cuello y manos hechos con pocas piezas
  recortadas y superpuestas;
- rostro de bajo relieve con cinco a nueve planos visibles; nariz plegada y
  angular, pómulos planos y ojos resueltos como ranuras de papel, nunca una
  cabeza redondeada esculpida;
- prendas y calzado como volúmenes independientes, con cantos y sombras en cada
  unión;
- edad e identidad por silueta, proporción, postura, color y pliegues físicos;
- prohibidos piel fotográfica, poros, arrugas pintadas, degradados, aerógrafo,
  muñeco plástico, arcilla, madera tallada y silueta impresa.

Una imagen falla aunque la ropa sea correcta si el personaje sigue pareciendo
dibujado en vez de fabricado con papel.

## Decisiones del piloto Arámai

- Fuente primaria: Milcíades Chaves Ch., *Mitos, leyendas y cuentos de la
  Guajira*, 1946, relato VI, “Aramai”.
- La fuente llama a Arámai “viejo”; por eso el tríptico corrige la edad joven de
  la ficha previa conservando sus marcadores faciales reutilizables.
- La fuente consultada no cuenta arrepentimiento ni cuidado posterior. Esos
  estados no entran en las tres escenas.
- La indumentaria de Arámai es un conjunto completo y reversible para tiempo
  mítico no fechado: Kemiisa de mangas, Kotin amplio, S'ira y dos waireñas. No
  se presenta como reconstrucción arqueológica.
- No se autoriza pintura facial, kana, marca clanil ni patrón porque el relato
  no fija ocasión, material o motivo.
- Mareiwa y Wanurü no se antropomorfizan. La enfermedad no se representa en
  cuerpos ni como mecanismo de contagio.
- El piloto se genera desde texto. Los IDs y hashes de la Biblia se validan para
  trazabilidad, pero ninguna imagen local se adjunta o sube.

## Preparación reproducible

```bash
npm run mitos:prepare:triptych:openai -- \
  --comunidad wayuu \
  --slug aramai \
  --plan content/mitos-visuales/wayuu.tripticos.v1.json \
  --batch-id wayuu-aramai-triptych-pilot-01
```

El paquete resultante vive en
`content/mitos-visuales/_openai/wayuu/aramai/<batch-id>/`. Sus tres salidas
viven en `output/imagegen/wayuu/triptychs/<batch-id>/`.

## QA para aprobar o corregir

Cada pieza debe pasar todos estos controles:

- relación de aspecto, tamaño y calidad correctos;
- imagen nueva y no simple copia de una ficha;
- continuidad de Arámai y de la regla material de Mareiwa/Wanurü;
- vestuario Wayúu completo, contextual y sin invenciones decorativas;
- arquitectura dispersa y rectilínea, no aldea genérica de chozas cónicas;
- profundidad 3D por capas físicamente separadas, con aire, oclusiones, cantos
  internos y sombras reales;
- mundo full bleed sin base, cartón, mesa, marco o estudio visibles;
- magia propia de Arámai legible sin aura, humo, partículas o demonio genérico;
- cero texto y cero violencia, sexualización, enfermos o muerte gráfica;
- entrada, acto y huella diferentes pero pertenecientes al mismo taller.

La aprobación es del conjunto: una pieza visualmente atractiva no compensa una
ruptura cultural, narrativa o de continuidad en otra.

## Resultado del piloto 01

- Entrada: aprobada por QA interno en el lote base.
- Acto: la primera generación fue rechazada por testigos inventados y un
  pliegue de Mareiwa demasiado monumental; la corrección 01 pasó.
- Huella: aprobada por QA interno en el lote base.
- Estado del conjunto: `qa_pass_waiting_editorial_approval`.
- Registro seleccionable y hashes:
  `content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-triptych-pilot-01/selection.json`.
- Acta visual y narrativa:
  `content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-triptych-pilot-01/QA.md`.

## Resultado de la revisión mística V1.1

- Entrada y huella se regeneraron como el lote inmutable
  `wayuu-aramai-magic-triptych-01`.
- El acto necesitó dos calibraciones. La primera fijó la geografía imposible,
  pero fue rechazada porque Arámai todavía parecía modelado o ilustrado. La
  segunda consiguió el personaje como ensamblaje inequívoco de recortes y es la
  pieza seleccionada.
- El arco visual común es ahora: horizonte que se inclina hacia la cesta →
  territorio que se levanta para escuchar → cesta que proyecta una península
  imposible como huella.
- Las tres piezas pasan QA interno, pero el conjunto sigue esperando aprobación
  editorial. No se inicia el siguiente mito.
- Registro seleccionado, hashes y descarte conservado:
  `content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-magic-triptych-01/selection.json`.
- Acta de QA V1.1:
  `content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-magic-triptych-01/QA.md`.
