# Decisiones del propietario editorial, abiertas al cerrar la Etapa 1

Ninguna bloquea el inventario, que está congelado y en PASS en los 42 corpus.
Todas muerden **antes de generar**.

## 1 · El peso del prompt — la única que bloquea la generación

`docs/biblias-peso-del-prompt.md` tiene la medición. Resumen: 7.477 caracteres
de media contra los 5.022 que salieron en papel y los 6.341 que salieron
fotorrealistas. Cuatro recortes sin pérdida llegan a 6.357; hacen falta dos más
y ésos sí quitan información. Tres salidas, con recomendación:

1. **Estrechar `era` por ficha** en vez de borrarlo — hoy katíos enumera los
   tres estratos cuando a cada ficha le aplica uno, y `design.continuity` suele
   nombrar cuál. Conserva la defensa contra el anacronismo.
2. **Plegar `style_medium` dentro de `technique_first`** — la técnica se dice
   una sola vez y más fuerte, que es la lección de la tanda 02. Sólo llega a
   ~5.900.
3. **Aplicar los seis y fijar el tope en el piloto** — 5.212, y lo que se
   pierda se ve en las primeras doce láminas.

**Recomendación: 1 + 2.** Es la única combinación que baja de 5.022 sin quitarle
al prompt nada que el modelo necesite. `models` es enteramente derivado, así que
se aplica de una pasada sobre los 42 sin perder nada escrito.

## 2 · Las exclusiones que nadie volvió a mirar

`docs/biblias-exclusiones-sin-revisar.md`. 31 exclusiones ciegas en 13 corpus, y
58 revisadas cuyo veredicto puede no coincidir. El único error confirmado
—Cirigua, con el único retrato físico de su corpus— venía del montón revisado,
no de las ciegas. Ya corregido; el resto sigue en pie.

## 3 · Cartagena: doce personas con ficha y ocho embebidas

`bolivar-cartagena-mestizo` da ficha propia a Blas de Lezo, Macu, Simón
Casiano, Estrellita Azuaga y sor Ana, y embebe a ocho más —cinco de ellas
parejas— en tipos de época. No es criterio, es inconsistencia. El arreglo
aplicado es el mínimo reversible y cuesta cero láminas. Si esas ocho merecen
ficha, son ocho láminas más; si no, sobran doce.

## 4 · La página nɨkak ilustrada con una imagen chimila

En producción, `creacion-nukak-maku` muestra
`yunari-y-las-cinco-tierras-…jpg`, y su categoría dice «Nukak Makú». Es
iconografía de un pueblo sobre la página de otro: el deslinde que esta biblia
existe para sostener, roto en la web pública.

## 5 · Catalina la Napanga

El expediente de 1591 no existe. El localizable es de **1566, Cartagena, con
una protagonista afrodescendiente esclavizada**. La ficha declara la elección
abierta entre las dos mujeres y no la resuelve.

## 6 · La enmienda escrita para el anexo dóbida

El relato embera queda escrito completo, pero su reubicación dentro del
expediente Katío necesita dos cosas: un **cuarto estrato de época** —hay hachas
y machetes de hierro forjado que el estrato de fundación katío prohíbe— y una
**enmienda escrita del editor**, porque el dossier katío declara que no
autoriza extender lo suyo al dóbida.

## 7 · Escribir a ACAIPI antes de generar barasana

ACAIPI y el Consejo Indígena del Pirá Paraná publican y son contactables. Las
fichas más expuestas —Jaguares de Yuruparí, Gente del Cielo,
Cerros-Estantillos— dejan escrito que nada de lo decidido da esa consulta por
cerrada. Y en wounaan existe un **protocolo publicado de ilustración** del WPNP
—concurso de ilustrador, revisión de la junta— que este trabajo no cumple.

## 8 · Las 166 referencias sin clasificar

`content/mitos-visuales/referencias-2026-09-18.json`. Todas en
`unclassified`. Hasta que alguien diga cuáles son `form_reference` y cuáles
`study_only`, ninguna puede entrar a un prompt.

## 9 · Divergencias que las fichas dejaron a la vista a propósito

- **Srekollimisak**: el canon dice «las manos llenas de llagas»; el libro del
  propio Cabildo dice pies rajados y cuerpo reventado.
- **El Mono de la Pila**: Neptuno tosco con el brazo roto, o San Juan Bautista
  en la réplica de 1960. La ficha dibuja sólo lo que las dos comparten y queda
  deliberadamente pobre.
- **`roble_del_parque_caldas`**: marcado para retiro como el rosario del
  Riviel, sin texto que lo sostenga, y no retirado porque nadie lo ordenó.
- **El conflicto de técnica de Caldas y Risaralda**: cinco dossiers levantan
  que sus mitos congelados prohíben «maqueta, diorama, CGI ni render 3D» y
  piden 2D plano, mientras el kit pide papel fotografiado como maqueta. Se
  siguió el kit y la contradicción quedó escrita en seis fichas. **Es decisión
  de canon, no de lámina.**
