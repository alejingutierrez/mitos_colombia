---
name: enriquecimiento-mitos
description: Reescribir y enriquecer el texto y las fuentes de los mitos publicados, por comunidad completa, contra Neon — Fase A (relato, cuatro capas, lección) y Fase B (fuentes relevantes y verificadas). Úsalo cuando haya que enriquecer fuentes de una comunidad, reescribir un relato o una capa, auditar si lo publicado cumple el contrato, o reconciliar un módulo del repo con lo que hay en producción. No cubre imágenes ni video: eso es produccion-mitos.
---

# Enriquecimiento de mitos

La metodología vive en `docs/metodologia-revision-mitos.md` y el proceso
operativo en `docs/spec-reescritura-y-fuentes.md`. Este skill es la versión
ejecutable: qué es verdad, en qué orden se hace y con qué comandos.

## La regla que gobierna todo: el módulo es la verdad, Neon es lo publicado

Cada mito tiene un módulo en `editorial/<comunidad>/` (`myths/<slug>.mjs` en
muisca, wayuu y nasa; `definitions.mjs` con entradas `myth({…})` en chimila y
otras, compuestas por `records.mjs`). `consolidar-fuentes` e `importar-texto`
entienden las dos disposiciones. **Todo cambio de texto o de
fuentes se escribe primero en el módulo** y de ahí se aplica a Neon con los
scripts de este kit. Un `UPDATE` directo a Neon con un script suelto es
**deriva**: el repo deja de poder reproducir producción, el siguiente `sync`
lo revierte en silencio y no queda respaldo. Así se perdieron de vista las 72
fuentes wayuu de la sesión del 2026-09-16, que hubo que reconciliar a mano.

Dos tablas, dos lecturas:

| qué | lo lee la página desde | lo escribe |
|---|---|---|
| título, mito, historia, versiones, leccion, similitudes, content, excerpt, seo | `myths` (y copia en `editorial_myths`) | `aplicar-texto.mjs` |
| `sources_json`, `key_sources_json` | `editorial_myths` | `aplicar-fuentes.mjs` |

Después de escribir, la página **no cambia sola**: ISR de una hora más
`unstable_cache`. Se purga con `revalidar.mjs`. **`vercel --prod` no es el
camino**: sube el disco local y puede revertir lo que Git ya publicó.

## El kit

```bash
npm run mitos:enriquecer:exportar  -- --comunidad=wayuu            # preflight: respaldo + estado + deriva módulo↔Neon
npm run mitos:enriquecer:auditar   -- --comunidad=wayuu            # relevancia, duplicados, salud de URLs (desde módulos)
npm run mitos:enriquecer:auditar   -- --comunidad=nasa --desde=neon # lo publicado, para comunidades sin módulos
npm run mitos:enriquecer:consolidar -- --comunidad=wayuu --propuestas=<dir>  # Fase B: propuestas de agentes → módulos
npm run mitos:enriquecer:importar  -- --comunidad=wayuu --reescrituras=<dir>  # Fase A: JSON de redactores → módulos
npm run mitos:enriquecer:texto     -- --comunidad=wayuu            # Fase A, dry-run
npm run mitos:enriquecer:fuentes   -- --comunidad=wayuu            # Fase B, dry-run
npm run mitos:enriquecer:verificar -- --comunidad=wayuu [--vivo]   # módulo ↔ Neon ↔ página pública
npm run mitos:enriquecer:revalidar -- --comunidad=wayuu --slugs=a,b
```

Todos aceptan `--env=<ruta>` (por defecto `.env`) y `--slugs=a,b` para
acotar. Escribir exige `--apply --confirm=<comunidad>-texto` o
`--confirm=<comunidad>-fuentes`; antes de escribir dejan un respaldo en
`artifacts/editorial-backups/` y escriben en una transacción. `aplicar-fuentes`
se niega si el texto del módulo difiere de Neon, salvo `--ignorar-texto`.

**Nunca uses `apply-editorial-myth.mjs` para un cambio de texto** de un mito
que ya pasó por el pipeline de imágenes: reescribe `image_url` desde
`media.mjs`, que suele estar desactualizado, y revertiría la portada.

## Fase A · reescritura

1. `exportar` para tener el respaldo y el estado inicial.
2. Investigación y matriz de evidencia (metodología §2-§4). No se redacta
   sin ≥5 fuentes útiles y distintas.
3. Escribir. A escala, con redactores en paralelo (4 mitos por agente): un
   expediente por mito con el texto primario recortado (extraído con
   `pdftotext` de Chaves, Pineda, Finol…), la ficha actual, las fuentes y las
   comparativas que Similitudes debe nombrar, más el contrato de redacción
   (`content/editorial/wayuu/reescritura-2026-09-17/CONTRATO-REDACCION.md`
   es el modelo). Cada redactor devuelve un JSON con los cinco campos, una
   matriz elemento→fuente y sus dudas; `importar-texto.mjs` valida (rangos,
   lección, ninguna mención a recopiladores en el Relato) y escribe los
   módulos. El editor lee varios relatos completos antes de aplicar y decide
   los cortes de material no publicable (sexual explícito, generalizaciones
   del recopilador). Relato 300-650 palabras, sólo la historia, sin
   cronistas ni fuentes; historia 220-600; versiones 170-550; similitudes
   150-450 con ≥2 paralelos documentados; **lección: una sola frase de 8-22
   palabras**, sin nombres propios ni órdenes morales. Sin fórmulas
   («desde tiempos inmemoriales», «misterio ancestral»): el validador las
   rechaza. `content` lo compone el módulo; nunca se escribe a mano.
   **Buscar antes la plantilla compartida**: varias comunidades componen
   Historia, Versiones y Similitudes como un párrafo propio más tres idénticos
   para toda la comunidad (`composeNasaHistory`, los `…Core` de chimila). Es
   la causa de que las fichas se lean igual y midan todas lo mismo; se detecta
   comparando longitudes, y si los mitos caen en veinte palabras unos de otros
   hay plantilla. Se abre el constructor para que el módulo dé el campo entero
   y se reescribe por mito. Al terminar, contar oraciones repetidas entre
   fichas: deben quedar en cero salvo constataciones de hecho.
   **Relato por debajo del mínimo**: cuando la fuente primaria es tan breve que
   llegar a 300 palabras sólo se consigue repitiendo, se publica corto. El JSON
   de reescritura lleva `relato_corto: "<razón>"`, el validador baja el piso a
   90 y lo imprime en cada pasada, y el test del corpus lista el slug. Se mide,
   no se opina: la riqueza léxica (palabras distintas sobre total) delata el
   relleno, 0,30 frente a 0,45 del resto del corpus.
4. `node --test scripts/editorial/<comunidad>-corpus.test.mjs`. **Comprobar
   `ℹ fail 0` y el código de salida**, no que el comando imprima algo: un
   `&& grep` encadenado ya escondió un test rojo. Los tests viejos suelen
   afirmar frases de la plantilla o exigir un número fijo de fuentes; cuando
   fallan por eso se reescribe la aserción sobre la sustancia, no se borra.
5. **Antes de aplicar, mostrar al editor humano una ficha completa** (los cinco
   campos) y esperar su aprobación; sólo entonces `texto` dry-run → `--apply`
   → `revalidar` → `verificar --vivo`. En wayuu se aplicó sin ese paso y hubo
   que enseñarla después: no repetirlo.

## Fase B · fuentes

0. **Abrir el módulo antes de consolidar.** Cuatro comunidades seguidas han
   fallado en el mismo punto, así que va de checklist:
   - `pick<Comunidad>Sources` tiene que aceptar `{ key, summary, limitation }`
     además de cadenas, o `consolidar` escribe y el módulo revienta con
     «Fuente desconocida: [object Object]» al recargar;
   - el `define…Myth` tiene que honrar `sourceKeys` propias por mito y no
     imponer la lista compartida, ni exigir un número fijo de fuentes;
   - el constructor tiene que aceptar `historia`/`versiones`/`similitudes`
     completas y dejar pasar `relatoCorto`.
   Se comprueba cargando `records.mjs` y corriendo el test del corpus **antes**
   de lanzar los agentes.
1. `auditar` desde módulos (o desde Neon si la comunidad no tiene módulos:
   entonces el primer paso de Fase B es **escribir los módulos** a partir
   del respaldo de `exportar`).
2. **Comprobar que la fuente narrativa contenga texto, no sólo que responda
   200.** En andoque, once de catorce fichas declaraban como `narrativeSource`
   la portada de Google Books del libro del que salían, y el propio módulo lo
   admitía: «el índice y los fragmentos consultables confirman los once títulos
   heredados». Una portada de catálogo, una ficha de Open Library o un registro
   de metadatos responden 200 y no sostienen nada. Abrir la URL de la fuente
   narrativa de cada mito y ver si ahí está el relato.
3. Leer el informe en `content/editorial/<comunidad>/auditoria-fuentes-<fecha>.json`.
   Bloqueos: mito con <5 fuentes, URL caída o que redirige a portada, URL
   con punto final, **fuente comparativa (Ovidio, Popol Vuh, Hesíodo) en
   un mito cuyas Similitudes no nombran ese paralelo**. Avisos: <8 fuentes,
   dominio débil, `http`, misma obra en varias URLs, misma URL con fichas
   bibliográficas distintas, restringida (403/captcha: comprobar a mano).
4. **Cuidado con la circularidad: el sitio se cita a sí mismo.** Al buscar
   «Méneri-Ya» y «Warimi» —dos nombres propios de la ficha barasana de la
   luna—, `mitosdecolombia.com` sale **tercero en Bing**, por encima de los
   catálogos de la obra que supuestamente la sostiene, y el buscador devuelve
   el texto del sitio como si fuera un hallazgo. Con la grafía exacta de la
   ficha no hay ningún otro resultado en la web indexada. Regla: **si un
   resultado reproduce el texto del sitio, no es una fuente**; se descarta y se
   dice. Y si los nombres propios de una ficha no aparecen en ninguna parte
   salvo en ella misma, esa ficha no está corroborada, por más plausible que
   suene.
5. Búsqueda profunda **por mito**, con agentes en paralelo, uno por mito o
   por grupos de 4-6. El brief lleva relato, historia, versiones y las URLs
   ya citadas. Criterio: la fuente trata DIRECTAMENTE el mito, el personaje
   o el lugar; cada URL se abre y se confirma que habla de eso; se declara
   `AGOTADO` en vez de rellenar. Meta 4-8 nuevas por mito.
6. Consolidar en el módulo con `consolidar-fuentes.mjs` (verifica URLs, casa
   por URL con el pool, crea claves o reutiliza con resumen propio; dry-run y
   `--apply`). Antes de pasarle los JSON, curarlos a mano: quitar blogs, prensa
   y fichas sin texto, y canonizar URLs. Reglas:
   - una obra = una clave del pool (`sources.mjs`) = una URL canónica.
     Preferir la página del artículo en la revista sobre el PDF de descarga,
     `https` sobre `http`, la del editor sobre el agregador (Dialnet,
     Redalyc) cuando ambas responden;
   - una obra citada por muchos mitos (Chaves 1946, Perrin, Pineda) es
     **fundacional** y se cita desde todos los que la usan: la regla «misma
     URL en dos mitos → uno solo» es para fuentes específicas, no para el
     corpus;
   - lo que cambia por mito es `summary` y `limitation`, no la ficha
     bibliográfica: en wayuu, `sourceKeys` admite `{ key, summary,
     limitation }`. Año y tipo los fija el pool (Chaves es 1946: Boletín
     de Arqueología II-4; Neon tenía 1953 por deriva);
   - las comparativas sólo entran si Similitudes nombra el paralelo. Si el
     paralelo vale la pena, se escribe el párrafo (Fase A) y entonces sí
     entra la fuente;
   - fuente caída: se reemplaza por una equivalente **verificada** (la ONIC
     rehízo su sitio en 2026: sus perfiles de pueblos ya no existen) o se
     retira; nunca se deja.
7. `auditar` de nuevo hasta cero bloqueos; `node --test` del corpus.
8. `fuentes` dry-run → `--apply --confirm` → `revalidar` → `verificar --vivo`.
9. Registrar en `docs/spec-reescritura-y-fuentes.md` §4 y en `ESTADO.md`.

## Lo que nunca se hace

- Escribir en Neon con un script suelto fuera de `scripts/`.
- Aplicar sin dry-run, sin respaldo o sin transacción.
- Rellenar hasta 5 u 8 con fuentes que no tratan el mito.
- Fundir variantes incompatibles en una sola versión.
- Crear categorías o etiquetas.
- Dar por publicado un cambio sin `verificar --vivo` en la URL pública.
- Trabajar con una muestra: el alcance es la comunidad completa.
- Dar por bueno un reparto de fuentes sin **cotejarlo** contra el JSON de la
  investigación, URL por URL: diez de las once fichas u'wa se publicaron con
  las fuentes de otra mientras todo lo demás pasaba en verde.
- Olvidar que el `<title>` de la página sale de `seo_pages` y no de
  `myths.seo_title`: se puede reescribir una ficha entera y que la pestaña siga
  diciendo el título viejo.

## Mestizos y mixtos: otro corpus, otras reglas

Los 253 que quedan —184 mestizos y 69 mixtos— **no se trabajan con este
proceso tal cual**. No son comunidades: son dos cajones administrativos, sin
pueblo, sin territorio y sin corpus cerrado. Tres diferencias que cambian el
trabajo:

- **La unidad es el ciclo, no la comunidad**: un municipio, un recopilador, un
  libro. Existen ya como 31 carpetas en `editorial/`.
- **La prensa local antigua sí es fuente**, con condiciones, porque muchas
  veces es el registro más antiguo del relato. El mínimo de fuentes sube de 5
  a 8 y la meta de 8 a 12.
- **Hay un gate nuevo antes de redactar**: el acta de procedencia, que ancla
  cada hecho del relato a una página y obliga a decir por qué el mito está en
  ese cajón.

Antes de tocar nada de ese bloque, leer
`docs/spec-mestizos-y-mixtos.md` y usar el brief de
`docs/brief-mestizos-y-mixtos.md`.

**Aviso**: hay 256 fichas ya escritas en esos módulos que nunca se aplicaron.
No sirven tal cual —242 no cumplen el contrato y `caribe-mestizo-final` tiene
el 86,6 % de sus oraciones repetidas—, pero traen narrador nombrado en la
mayoría, y ese trabajo no hay que rehacerlo.

## Mapa

| | |
|---|---|
| Metodología | `docs/metodologia-revision-mitos.md` |
| Proceso y estado por comunidad | `docs/spec-reescritura-y-fuentes.md` |
| **Mestizos y mixtos** | `docs/spec-mestizos-y-mixtos.md` + `docs/brief-mestizos-y-mixtos.md` |
| Kit | `scripts/editorial/enriquecimiento/` |
| Módulos | `editorial/<comunidad>/` |
| Auditorías | `content/editorial/<comunidad>/` |
| Respaldos | `artifacts/editorial-backups/` (fuera de git) |
| Purga de caché | `src/app/api/admin/revalidate/route.js` |
