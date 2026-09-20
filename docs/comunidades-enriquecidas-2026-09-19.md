# Comunidades que han pasado por el proceso

_Al 2026-09-19. «Reescrita» quiere decir sobre sus fuentes primarias, con el
texto aplicado a Neon, la caché purgada y `verificar --vivo` en verde en todas
sus rutas._

| # | comunidad | mitos | cerrada | URLs antes → después | lo que salió a la luz |
|---|---|---|---|---|---|
| 1 | **Wayúu** | 27 | 2026-09-17 | — → 8–16 por ficha | La Fase B se había escrito directo en Neon y hubo que reconciliarla con los módulos. Chaves es de 1946, no de 1953 |
| 2 | **Nasa-Páez** | 26 | 2026-09-17 | — → 9–13 por ficha | Plantilla compartida en el constructor: `composeNasaHistory()` daba los mismos párrafos a las 26 |
| 3 | **Ette Ennaka (chimila)** | 23 | 2026-09-17 | 7 → 30 obras | Dos Relatos estaban rellenados para llegar a 300 palabras; de ahí nació la excepción del relato corto |
| 4 | **Huitoto / Murui-Muina** | 22 (21 publicados) | 2026-09-17 | 10 → 67 obras | Tres fichas se publicaban desde el índice de un libro. El PDF de Urbina había perdido todos los nueves |
| 5 | **Chamí** | 22 | 2026-09-18 | 15 → 56 obras | Trece Relatos llevaban el aparato crítico dentro. Cinco atribuciones corregidas |
| 6 | **Katío (embera eyabida)** | 19 | 2026-09-18 | 17 → 43 obras | Lo que se publicaba como mito de Dabeiba lo escribió un geógrafo en 1885. Oraciones repetidas: 43 % → 3 % |
| 7 | **Kogui (kággaba)** | 20 | 2026-09-18 | 9 → 35 obras | El corpus no era de quien lo atribuían: es de Chaves, 1947. **Fichas que nombran a su narrador: 1 → 19** |
| 8 | **Andoque (gente del hacha)** | 14 | 2026-09-18 | 7 → 19 obras | Once fichas citaban como fuente narrativa **la portada de Google Books**. Oraciones repetidas: 61 % → 0,3 % |
| 9 | **Panán (pueblo de los Pastos)** | 16 | 2026-09-19 | 10 → 24 obras | Los dieciséis slugs eran el índice del capítulo 4 de una tesis. Oraciones repetidas: 29 % → 0 % |
| | **Total** | **189** | | | |

## Aparte: muiscas

Los **41 mitos muiscas** tienen la Fase B completa en Neon desde el 2026-09-16 y
el proceso editorial cerrado por el editor, pero **sus fuentes viven sólo en
Neon y no en los módulos**. Es la deriva que este proceso existe para evitar:
mientras no se reconcilien, el repo no puede reproducir producción y el
siguiente `sync` las revierte en silencio. Es pendiente técnico, no editorial.

## El patrón que se repite

Nueve comunidades, y la misma enfermedad en casi todas:

- **La plantilla compartida.** Historia, Versiones y Similitudes compuestas como
  un párrafo propio más dos o tres idénticos para toda la comunidad. En unas
  vivía en el constructor (nasa, chimila, huitoto, andoque), en panán vivía en
  `records.mjs` y en chamí y katío estaba escrita a mano. Se detecta antes de
  leer nada: si los campos de todas las fichas miden casi lo mismo, hay
  plantilla.
- **Los narradores perdidos.** El corpus casi siempre los trae y el sitio casi
  nunca los daba. Kogui pasó de 1 a 19 fichas con narrador; andoque, de 0 a 14;
  panán, de 2 a 16.
- **Las fuentes que no sostienen nada.** Portadas de catálogo, fichas de Open
  Library, registros de metadatos y URLs caídas, citadas por toda la comunidad
  porque se repartían en bloque.
- **El descargo dentro del Relato.** Párrafos de método pegados dentro del mito,
  de hasta 96 palabras en andoque.

## Lo que falta

**596 mitos en el sitio** —contados el 2026-09-19; la cifra de 407 que traía la
spec estaba vieja—, de los cuales **188 reescritos y verificados**, más los 41
muiscas pendientes de reconciliación.

Los candidatos indígenas que siguen: **U'wa** (11, con Ann Osborn digitalizada en
Banrepcultural), **Sikuani** (10, con la plantilla más apretada vista hasta
ahora), **Desana** (8), **Misak** (7), **Tucano** (7), **Zenú** (7), **Barí**,
**Barasana**, **Quillacingas** y **Ticuna** (6 cada uno), y una cola larga.

Y el bloque grande, que es de otra naturaleza: **Mestizo, 184 mitos**, y
**Mixto, 69**. No son una comunidad sino folclor regional —espantos, entierros,
leyendas— y piden un perfil de investigación distinto: compilaciones de
folcloristas en vez de etnografías.
