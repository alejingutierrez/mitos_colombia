# Spec: proceso de reescritura editorial y enriquecimiento de fuentes

**Versión 1.1 · 17 de septiembre de 2026** (v1.0: 16 de septiembre de 2026)

Este documento describe, de forma completa y operativa, cómo se reescriben y
enriquecen los mitos del catálogo, y hasta dónde se ha aplicado hasta hoy. Es
la especificación del proceso; la metodología de fondo vive en
[`docs/metodologia-revision-mitos.md`](metodologia-revision-mitos.md) y este
spec la vuelve ejecutable contra la base de datos de producción (Neon). La
versión ejecutable para agentes es el skill
[`.claude/skills/enriquecimiento-mitos/`](../.claude/skills/enriquecimiento-mitos/SKILL.md)
y su kit en [`scripts/editorial/enriquecimiento/`](../scripts/editorial/enriquecimiento/).

## 0. Qué cambió en la v1.1

La v1.0 se escribió al cierre de una sesión que aplicó la Fase B a muiscas y
wayúu con scripts sueltos (`/var/folders/.../opencode/aplicar-*.js`) que
hacían `UPDATE editorial_myths` directo contra Neon. Al revisar el resultado
con el verificador del repo (`scripts/editorial/verify-wayuu-sync.mjs`)
aparecieron 110 desajustes: las 72 fuentes wayúu vivían sólo en Neon, los
módulos de `editorial/wayuu/` seguían con las 24 fuentes de julio, y un
`sync --apply` posterior las habría borrado sin aviso. Además había citas
duplicadas dentro de un mismo mito, fichas bibliográficas contradictorias
para una misma URL (Chaves 1946 y 1953 en la misma página), catorce mitos
citando una URL de la ONIC que ya no existe, y el paso de despliegue proponía
`vercel --prod`, que este repo prohíbe.

La v1.1 corrige el proceso en cuatro puntos: **el módulo del repo es la
verdad y Neon lo publicado**; texto y fuentes viven en tablas distintas; la
purga de caché es un endpoint, no un despliegue; y las reglas de fuentes
distinguen fuentes fundacionales, comparativas y específicas.

## 1. Objetivo

Cada mito del catálogo debe tener, en producción:

1. **Un relato literario** propio (campo `mito`): 300-650 palabras, solo la
   historia, sin referencias a cronistas ni discusiones académicas.
2. **Tres capas editoriales** separadas (`historia`, `versiones`, `similitudes`)
   que sostienen el relato desde fuera.
3. **Una lección** (`leccion`): una sola frase filosófica de 8 a 22 palabras.
4. **Fuentes relevantes y verificadas** (`key_sources_json` + `sources_json`):
   mínimo 5 útiles en total, meta 8+; sin fuentes genéricas de relleno.
5. **El campo compuesto `content` sincronizado** con los cinco campos.
6. **El módulo del repo idéntico a lo publicado**: `verificar.mjs` sin
   desajustes.

## 2. Dónde vive cada cosa

| qué | fuente de verdad | lo lee la página desde | lo escribe |
|---|---|---|---|
| título, cinco campos, `content`, `excerpt`, `seo_*` | `editorial/<comunidad>/` | `myths` (copia en `editorial_myths`) | `aplicar-texto.mjs` |
| `key_sources_json`, `sources_json` | `editorial/<comunidad>/` | `editorial_myths` | `aplicar-fuentes.mjs` |
| imágenes, taxonomía, coordenadas | pipelines propios | `myths`, `vertical_images` | fuera de este proceso |

Un cambio hecho sólo en Neon es **deriva** y se detecta con
`exportar.mjs`/`verificar.mjs` (columna `modulo`: `sync`, `DERIVA:<campos>`
o `SIN_MODULO`). Las comunidades sin módulos empiezan por escribirlos a
partir del respaldo que deja `exportar.mjs`.

## 3. Las dos fases del proceso

Se ejecutan por comunidad completa (nunca con muestras). Todos los comandos
aceptan `--env=<ruta>` y `--slugs=a,b`.

### Fase A — Reescritura editorial (texto)

1. **Preflight**: `npm run mitos:enriquecer:exportar -- --comunidad=<c>`.
   Respaldo en `artifacts/editorial-backups/` y tabla de estado.
2. **Investigación**: dossier (≥5 fuentes consultables y distintas) y matriz
   de evidencia (metodología §2-§4).
3. **Borrador** según el contrato de la metodología §6, con el texto primario
   como techo. Con redactores en paralelo: un expediente por mito (primario
   recortado, ficha actual, fuentes, comparativas obligadas) y el contrato de
   `content/editorial/<c>/reescritura-<fecha>/CONTRATO-REDACCION.md`; cada uno
   devuelve los cinco campos, una matriz elemento→fuente y sus dudas, y
   `importar-texto.mjs` los valida y escribe en los módulos.
4. **Capas**: historia 220-600 palabras, versiones 170-550, similitudes
   150-450 con ≥2 paralelos documentados, lección 8-22 palabras en una sola
   oración. `content` lo compone el módulo.
5. **Pruebas**: `node --test scripts/editorial/<c>-corpus.test.mjs`.
6. **Escritura**: `npm run mitos:enriquecer:texto -- --comunidad=<c>`
   (dry-run) y después `--apply --confirm=<c>-texto`. Respaldo previo y
   transacción sobre `myths` y `editorial_myths`. No toca imágenes: por eso
   no se usa `apply-editorial-myth.mjs`, que reescribe `image_url` desde un
   `media.mjs` que suele estar desactualizado.
7. **Purga y prueba**: `revalidar` y `verificar --vivo` (§6).

### Fase B — Enriquecimiento de fuentes

1. **Auditar**: `npm run mitos:enriquecer:auditar -- --comunidad=<c>`
   (desde módulos; `--desde=neon` para medir lo publicado). Informe en
   `content/editorial/<c>/auditoria-fuentes-<fecha>.json`. Sale con error si
   hay bloqueos.
2. **Búsqueda profunda**: agentes en paralelo, uno por mito o por grupos de
   4-6. El brief lleva relato, historia, versiones y las URLs ya citadas.
   Cada URL se abre y se confirma que trata el mito; se declara AGOTADO en
   vez de rellenar. Meta 4-8 fuentes nuevas por mito.
3. **Consolidar en el módulo** con `consolidar-fuentes.mjs --propuestas=<dir>`
   (reglas de §4): verifica cada URL, la casa por URL con el pool
   `sources.mjs`, crea la clave o reutiliza la existente con `summary` y
   `limitation` propios del mito, y añade la cita al `sourceKeys`. Los JSON
   se curan antes a mano (sin blogs ni prensa salvo sin alternativa, URLs
   canónicas) y se archivan en `content/editorial/<c>/busqueda-profunda-<fecha>/`.
4. **Auditar de nuevo** hasta cero bloqueos; pruebas del corpus.
5. **Escritura**: `npm run mitos:enriquecer:fuentes -- --comunidad=<c>`
   (dry-run: el plan es la diferencia módulo↔Neon) y después
   `--apply --confirm=<c>-fuentes`. Sólo toca `editorial_myths`; se niega
   si el texto del módulo difiere de Neon.
6. **Purga y prueba**: `revalidar` y `verificar --vivo` (§6).
7. **Registro** en §5 de este documento y en `ESTADO.md`.

## 4. Reglas de fuentes (criterios operativos)

| Señal | Acción |
|---|---|
| Fuente que no trata el mito, el personaje o el lugar (Met Museum, World History Encyclopedia, Bible Gateway, plan de vida de otra comunidad) | Retirar |
| Fuente comparativa (Ovidio, Popol Vuh, Hesíodo) | Sólo si **Similitudes nombra ese paralelo**; el auditor lo bloquea si no. Si el paralelo vale, se escribe el párrafo (Fase A) y entonces entra la fuente |
| Enlace caído (4xx/5xx) o que **redirige a la portada** del sitio (la ONIC rehízo su web en 2026) | Reemplazar por fuente equivalente verificada, o retirar; nunca dejarla |
| Servidor sin respuesta (timeout) o restringido (403, captcha) | Aviso, no bloqueo: comprobar a mano antes de retirar |
| Crónica o recolección digitalizada (Chaves, Pineda, Perrin, Paz Ipuana, Simón, Piedrahíta, Zamora, Aguado…) | Alta prioridad, fuente primaria |
| Museo del Oro / ICANH / revistas UNAL / repositorios universitarios / etnografía de la comunidad | Alta prioridad |
| Blog de operador turístico / Wikipedia / divulgación sin autoría | Sólo si no existe nada mejor, nunca como fuente clave, con limitación declarada |
| Obra citada por ≥⅓ del corpus (Chaves 1946, Perrin 1980…) | **Fundacional**: una clave, una URL, citada desde todos los mitos que la usan. La regla «misma URL en dos mitos → uno solo» aplica a fuentes específicas, no al corpus |
| Misma obra en varias URLs (vista + descarga, revista + Dialnet, http + https) | Una URL canónica: página del artículo en la revista, `https`, editor sobre agregador |
| Misma URL con fichas bibliográficas distintas | La ficha (título, autor, año, tipo) la fija el pool; por mito sólo cambian `summary` y `limitation`. Chaves es 1946 (Boletín de Arqueología II-4), no 1953 |
| Misma obra citada dos veces en un mito | Una sola cita, conservando el resumen específico |

## 5. Aplicación hasta hoy (estado por comunidad)

Fecha de corte: **17 de septiembre de 2026**. Base: Neon (producción).

| Comunidad | Mitos | Reescritura (Fase A) | Fuentes (Fase B) | Fuentes/mito hoy | Módulo = Neon |
|---|---|---|---|---|---|
| **Wayúu** | 27 | **Reescrita entera el 2026-09-17 sobre el texto primario** (Chaves 1946, Pineda 1950, Paz Ipuana y Perrin vía Finol): siete redactores en paralelo con el contrato de `content/editorial/wayuu/reescritura-2026-09-17/`, matriz de evidencia por relato, 108 dudas registradas; tres cortes editoriales (ciempiés en Pushaina, ahorcamiento en El incesto, creación duplicada en Serranías). Sin primario consultable: La Chama, Waleker, Las Wanurü | **Completa, reconciliada y con búsqueda profunda en los 27** (2026-09-17): ONIC muerta sustituida por el Plan Especial de Salvaguardia de la Junta Mayor de Palabreros; Ovidio retirado de 3 mitos sin paralelo; 3 URLs de relleno o caídas retiradas; obras unificadas a una URL canónica; duplicados fundidos; 117 citas nuevas verificadas de 44 obras nuevas (agentes en 6 grupos de 4 + 3 individuales). Agotados en fuentes primarias: La Chama, El hijo del Cóndor, Umaralá, Jaichuasay | 8–16, promedio 13,2 (356 citas, 108 obras) | **sí** (`verificar --vivo` en las 27 rutas) |
| **Muiscas** | 41 | Completa (jul-2026) | Completa en Neon (2026-09-16). **El proceso editorial está cerrado y no se reabre.** Pendiente sólo técnico: llevar a `editorial/muisca/myths/` las fuentes que hoy viven únicamente en Neon, para que `verificar` deje de marcar deriva | 3–11, promedio 7,2 | **no** (deriva técnica, no editorial) |
| **Nasa - Paeces** | 26 | **Reescrita entera el 2026-09-17 sobre el primario** (Bernal Villa 1953, transcrito por OCR y cotejado en facsímil): fichas que dejaron de prestarse episodios, modalidades separadas por informante, seis comparativas clásicas sin respaldo retiradas, Historia y Versiones ya no son plantilla compartida; registro en `content/editorial/nasa/reescritura-2026-09-17/` | **Fase B completa** (2026-09-17): de 9 obras a 40 y de 6 a 9-13 fuentes por mito; perfil muerto de la ONIC sustituido por dos voces nasa vivas; agotados el río Páez, La cabeza y las piedras de Chaikin | 9–13, promedio 10,5 | **sí** |
| **Ette Ennaka (Chimila)** | 23 | **Reescrita entera el 2026-09-17 sobre el primario** (Reichel-Dolmatoff 1945, con capa de texto, más la *Etnografía chimila* de 1946 del mismo autor, hasta ahora sin citar): se desmontó la plantilla que daba a las 23 fichas tres párrafos idénticos de Historia, tres de Versiones y tres de Similitudes; se sacó del Relato el aparato crítico; se restituyó el texto de 1945 con su diálogo. Dos relatos se publican por debajo del mínimo de 300 palabras, con la razón escrita: su primario son 74 y 90 palabras. Registro en `content/editorial/chimila/` y transcripciones en `primarias/` | **Completa** (2026-09-17): de **7 URLs para las 23 fichas** a 30 obras y 6-12 fuentes por mito; hallazgo central la *Etnografía chimila* de 1946, que cita el cuento de los brujos por su nombre; ocho trabajos nuevos de Niño Vargas, Bolinder 1987, Herrera Ángel 2002 y Quiroga 2015. Se retiraron por mito las fuentes genéricas que no tratan el relato | 6–12, promedio 8,2 (189 citas, 30 obras) | **sí** (`verificar --vivo` en las 23 rutas) |
| **Chamí (emberá chamí)** | 22 | **Reescrita entera el 2026-09-18 sobre los dos primarios** (Reichel-Dolmatoff 1953, catorce relatos de Río Frío; Chaves 1945, con su reparto de narradores). Se desmontaron las plantillas con huecos por mito y se sacó el aparato crítico de trece Relatos. Nueve relatos cortos declarados: su transcripción es la única que existe y ocupa quince o veinte líneas | **Completa** (2026-09-18): de **15 URLs para las 22 fichas** a 56 obras. Cinco errores de atribución corregidos contra el registro: una obra citada con título y URL de otra, un título truncado que ocultaba de qué pueblo hablaba, un autor inventado partiendo un apellido, un artículo atribuido a otro historiador, y una obra duplicada en dos entradas | 7–12, promedio 9,7 (214 citas, 56 obras) | **sí** (`verificar --vivo` en las 22 rutas) |
| **Huitoto / Murui-Muina** | 21 | **Reescrita entera el 2026-09-17 sobre los primarios** (Preuss 1994, las dos partes, con los 26 mitos de la segunda hallados en un registro contiguo del repositorio de la UNAL; Urbina 2010 completo). Tres defectos encadenados: la plantilla compartida, un párrafo de descargo que el constructor pegaba dentro de los 22 Relatos, y tres fichas publicadas desde el **índice** de un libro sin acceder a su texto, cuyo Relato no narraba nada. Dos relatos cortos declarados. Registro en `content/editorial/huitoto/` y transcripciones en `primarias/` | **Completa** (2026-09-17): de **10 URLs para las 21 fichas** a 67 obras; perfil muerto de la ONIC y descarga caída de Banrepcultural reemplazados; cuatro errores bibliográficos corregidos contra el registro de origen (autoría, edición, fecha de registro y procedencia); dos fichas de catálogo del mismo volumen fundidas | 6–12, promedio 9,3 (204 citas, 67 obras) | **sí** (`verificar --vivo` en las 21 rutas) |
| Mixto | 21 | Completa | Pendiente | — | — |
| **Kogui (Kággaba)** | 20 | **Reescrita entera el 2026-09-18 sobre el primario.** El corpus no era de Reichel-Dolmatoff: es «Mitología kágaba» de Milcíades Chaves (1947), probado por las grafías, y cada relato trae narrador acreditado. **Diecinueve de las veinte fichas los nombran ahora; antes lo hacía una.** Once relatos cortos declarados | **Completa** (2026-09-18): de **9 URLs para las 20 fichas** a 35 obras. Corregidos: «Kansa María» es la casa ceremonial y no una sustancia; «Aluna» no significa pensamiento en este corpus; el título «canibalismo» es del recopilador y no del narrador; y «capuchinos» eran los misioneros, no unos monos | 7–13, promedio 9,4 (188 citas, 35 obras) | **sí** (`verificar --vivo` en las 20 rutas) |
| **Katíos (embera eyabida)** | 19 | **Reescrita entera el 2026-09-18 sobre tres primarios** (Severino 1924 vía Villa Posse, Severino 1959, y las notas de 1929 de las Hermanas misioneras). Las oraciones repetidas entre fichas pasaron del 43 % al 3 %, la proporción más alta del sitio | **Completa** (2026-09-18): de **17 URLs para las 21 fichas** a 43 obras. Dabeiba resultó ser la sección «Mitología» de Uribe Ángel (1885), no un relato emberá; el texto de 1929 no lo recogió quien lo firma y comparte fondo con el de 1924; el desenlace publicado de Costé estaba invertido | 6–12, promedio 8,0 | **sí** (`verificar --vivo` en las 19 rutas) |
| Panán | 16 | Completa | Pendiente | — | — |
| **Andoque (gente del hacha)** | 14 | **Reescrita entera el 2026-09-18.** Once de las catorce declaraban como fuente narrativa **la portada de Google Books** del libro de 1984 —el propio módulo lo decía: «el índice y los fragmentos consultables confirman los once títulos heredados»—, y el libro no está en línea en ninguna parte (comprobado en UNESDOC, HathiTrust, archive.org, HAL, Caro y Cuervo e ICANH). Las **oraciones repetidas entre fichas bajaron del 61 % al 0,3 %**, la proporción más alta del sitio. Las catorce nombran ahora a sus narradores: antes, ninguna | **Completa** (2026-09-18): de **7 URLs para las catorce** —de las que sólo una contenía narración andoque— a **19 obras**. Retiradas la portada de Google Books, la ficha de Open Library, el registro de Minciencias y una página del IGAC caída. Corregidos: los «gigantes» son los Perforadores, *Yɒ'nnkń*, «el tiempo de perforar», y comparten el mapa con las Sombras; el Caquetá es en andoque *Ḭtɵse*, río de la Danta; el «Mar de la Danta» es miraña y no andoque; y los dos retornos son padre e hijo, Plumón-amarillo (Dóñékɒi) y Plumón-de-Fiebre (Yiñeko), que es el capitán que narró el corpus | 8–10, promedio 8,5 (119 citas, 19 obras) | **sí** (`verificar --vivo` en las 14 rutas) |
| Mestizo | 11 | Completa | Pendiente | — | — |
| U'wa | 11 | Completa | Pendiente | — | — |
| Sikuani | 10 | Completa | Pendiente | — | — |
| Otras (23 comunidades) | 72 | Completa | Pendiente | — | — |
| **Total** | **407** | **Completa en 407** | **187 con Fase B en Neon; 172 reescritos sobre el primario y verificados en vivo (wayúu, nasa, chimila, huitoto, chamí, katío, kogui, andoque)** | | |

## 6. Verificación y controles de calidad

1. `verificar.mjs --comunidad=<c>`: módulo ↔ Neon en texto y fuentes,
   `content` igual a la concatenación de los cinco campos, `myths` igual a
   `editorial_myths`, lección de 8-22 palabras en una oración, ≥5 fuentes
   con URLs únicas y ≥3 dominios.
2. `revalidar.mjs`: purga las dos cachés (`unstable_cache` + HTML
   prerenderizado) vía `POST /api/admin/revalidate`. Las páginas usan ISR de
   una hora; sin la purga el cambio tarda hasta una hora en verse.
   **`vercel --prod` no se usa**: sube el disco local.
3. `verificar.mjs --vivo`: descarga cada página pública y comprueba que la
   lección y todas las URLs de fuentes están en el HTML servido.
4. Se documenta AGOTADO cuando la búsqueda no encuentra más fuentes
   específicas (no se rellena con fuentes débiles).

## 7. Contrato técnico con la base de datos

- Tablas: `myths` (lo que sirve la página) y `editorial_myths`
  (expediente; `source_myth_id` → `myths.id`). PostgreSQL en Neon.
- Fuentes: `sources_json` y `key_sources_json` (arrays de
  `{ title, author, year?, originalYear?, type, url, summary, limitation }`).
  La página muestra primero `key_sources_json` («principal») y después
  `sources_json` («contraste»), deduplicadas por URL.
- Scripts, todos versionados en `scripts/editorial/enriquecimiento/`:
  `exportar`, `auditar-fuentes`, `consolidar-fuentes`, `importar-texto`,
  `aplicar-texto`, `aplicar-fuentes`, `verificar`, `revalidar`
  (`npm run mitos:enriquecer:*`). Dry-run por
  defecto; escribir exige `--apply --confirm=<comunidad>-texto|fuentes`;
  respaldo previo en `artifacts/editorial-backups/` y transacción.
- Conexión: `POSTGRES_URL_NON_POOLING` o `POSTGRES_URL` del `.env`
  (`--env=<ruta>` cuando se trabaja en un worktree sin `.env`). Purga:
  `ADMIN_USERNAME` / `ADMIN_PASSWORD` y `NEXT_PUBLIC_SITE_URL`.

## 8. Próximos pasos

1. **Ette Ennaka (Chimila)** (23 mitos), la siguiente en tamaño: es la
   primera sin módulos en `editorial/`, así que la Fase B empieza por
   escribirlos a partir del respaldo de `exportar`.
2. Muiscas: sólo la reconciliación técnica módulos ↔ Neon (respaldo →
   generador → `aplicar-fuentes`), sin reabrir la edición, que el editor da
   por cerrada.
3. Seguir con Ette Ennaka, Chamí, Huitoto, Kogui, Katíos, etc., en orden
   descendente de mitos; las que no tienen módulos empiezan por escribirlos.
4. Registrar cada lote en §5 y en `ESTADO.md` con su fecha y conteo final.
