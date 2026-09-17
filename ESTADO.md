# Estado real del proyecto

Última auditoría: **16 de septiembre de 2026**. Este archivo es el índice: dice
dónde está cada cosa y en qué punto va cada comunidad. Si algo de aquí ya no es
cierto, corrígelo aquí primero.

## Qué es esto

Catálogo web de mitos de Colombia (Next.js 15, en producción en
www.mitosdecolombia.com) **y** el taller de producción del material visual y
audiovisual que lo alimenta: biblias visuales, trípticos por mito, keyframes,
guiones y narración.

El sitio es una parte pequeña del repo. La mayoría del peso y del trabajo vivo
está en la producción visual.

## Estado por comunidad

| comunidad | biblia | trípticos | keyframes | guiones+actas | estado |
|---|---|---|---|---|---|
| **muiscas** | 304 fichas | 351 piezas, 41 mitos | 1.282 | **6/6** | cerrada y publicada · faltan 35 guiones del corpus |
| **wayuu** | v3 + inventario | 65 specs, 24 documentados | — | **27/27** | corpus de guiones cerrado 2026-09-16 |
| **nasa-páez** | 110 | 554 | 956 | **25/25** | corpus de guiones cerrado 2026-09-16 |
| **ette-ennaka** (chimila) | 162 | 303 | 271 | **23/23** | corpus de guiones cerrado 2026-09-16 |
| **huitoto** (uitoto) | 7 fichas + 124 de investigación | 250 imágenes | — | — | recién abierta |

La columna de guiones cuenta **pares acta+guion verificados**: 81 de 81 pasan
`lint-guion` (forma) y `lint-acta` (fidelidad al canon). Ojo con la lectura: en
muiscas 6/6 significa que los seis guiones que existen están bien, no que la
comunidad esté cubierta — el corpus muisca tiene 41 mitos.

### La regla única y el acta

Desde el 2026-09-16 todo guion nace de un **acta de reducción**
(`docs/videos/<com>/actas/acta-<mito>.json`): declara los nudos irrenunciables
con la frase literal del canon que los sostiene, los deslindes, y qué se
descarta y por qué. Sin acta no hay guion.

    node scripts/videos/lint-guion.mjs <guion.json>              # forma
    node scripts/videos/lint-acta.mjs  <acta.json> --guion <g>   # fidelidad
    node scripts/videos/auditar-guiones.mjs                      # todo el repo
    node scripts/videos/auditar-cuadros.mjs                      # 16-36 cuadros

Escribir las actas retroactivas de nasa y muiscas destapó **once citas o
imágenes inventadas** en guiones que llevaban meses pasando el linter de forma
—entre ellas una cita puesta en boca de Bachué y un final entero para
el-hombre-tigre—. El linter mide la forma; el acta mide la fidelidad.

## Dónde vive cada cosa

El repo tiene un **espejo fuente ↔ binario** y conviene entenderlo antes de
tocar nada:

- `content/` — **la fuente**. Planes, prompts, guiones, selecciones,
  manifiestos, freezes. Ligero. Va a git.
- `output/` — **la salida**. Los jpeg y png que emite la tanda. 4,9 GB.
  Ignorado por git: se regenera reemitiendo.

| eje | dónde está hoy |
|---|---|
| **biblia** | doctrina en `docs/*-biblia-*.md` · generador en `editorial/<com>/visual-bible-*.mjs` · fichas en `content/videos/<com>/biblia/` · imágenes en `output/imagegen/<com>/biblia/` |
| **keyframes** | `content/videos/<com>/videos/<mito>/keyframes/` · imágenes en `output/imagegen/<com>/keyframes/` |
| **trípticos** | specs wayuu en `content/mitos-visuales/wayuu.*.json` · resto en `content/videos/<com>/tripticos/` · publicados en `content/videos/muiscas/mitos/<mito>/` |
| **prompts** | `content/videos/<com>/videos/<mito>/preproduccion-NN/prepared-NN/prompts/*.txt` — 1.767 archivos, el contrato exacto de cada pieza |
| **guiones** | `content/videos/<com>/videos/<mito>/preproduccion-NN/GUION-TECNICO.md` |
| **doctrina** | `docs/mitos-produccion-imagenes.md` (runbook de imagen) · `docs/videos/proceso-mitos-a-video.md` y `docs/videos/TRASPASO-SIGUIENTE-COMUNIDAD.md` (runbook de video) |
| **bitácora** | `docs/wayuu-*.md` — 55 documentos de por qué cada imagen wayuu se ve como se ve |

## Lo que está desordenado y ya está decidido arreglar

Auditado el 2026-09-16, pendiente de ejecutar:

1. **Tres vocabularios para lo mismo.** `tripticos` y `triptychs`; `biblia` y
   `bible`; `keyframes` y `keyframes-comunidad-20260913`.
2. **Tres árboles paralelos.** `content/videos/`, `content/mitos-visuales/` y
   `output/imagegen/` guardan las mismas etapas con estructuras distintas.
   Wayuu no usa ninguno de los dos primeros igual que las demás.
3. **`docs/` plano.** 78 archivos, de los que 55 son bitácora wayuu. La
   doctrina reutilizable —23 archivos— queda enterrada debajo.
4. **`output/` mezcla salida con conocimiento.** `output/research/uitoto-*`,
   `output/references/chimila/` y los dos PDF de `output/pdf/` no son salida
   regenerable: son investigación. Su sitio es `content/` o `docs/`.
5. **55 ramas sin fusionar.** Auditadas el 2026-09-16 en
   [`docs/ramas-sin-fusionar-2026-09-16.md`](docs/ramas-sin-fusionar-2026-09-16.md):
   son dos cadenas y 13 duplicados, así que hay 10 decisiones, no 55. La más
   grande es un tronco de 41 commits —los PR #44, #47, #48, #49 y #64— que
   `main` nunca recibió y que fusiona con un solo conflicto. Son también la
   razón de que `.git` pese 6,2 GB con un HEAD de 240 MB: arrastran historia de
   binarios ya borrados.

El destino acordado es un árbol único por comunidad:

```
comunidades/<comunidad>/
  investigacion/  biblia/  mitos/<mito>/{guion,prompts,tripticos,keyframes}/  bitacora/
output/<comunidad>/     ← espejo, sólo binarios, ignorado
docs/                   ← sólo doctrina
```

## Trampas conocidas

- **`git` no arranca en esta máquina**: `/usr/bin/git` exige aceptar la licencia
  de Xcode. Funciona `/Library/Developer/CommandLineTools/usr/bin/git`. Se
  arregla de raíz con `sudo xcodebuild -license`.
- **`vercel --prod` sube el disco, no `main`.** Puede revertir lo que la
  integración de Git ya publicó. Desplegar por Git.
- **Nunca sobrescribir un `freeze.json`.** Cada preparación va a una carpeta
  `prepared-NN` nueva.
- **`artifacts/`** son respaldos de julio y agosto, fuera de git, 1,8 GB. Nadie
  los ha tocado desde el 2026-08-20.

## Comandos que importan

```bash
npm run dev                  # el sitio
npm run mitos:estado         # en qué va la producción de imágenes
npm run mitos:tanda          # emitir una tanda
npm run mitos:test:biblia    # las pruebas del pipeline visual
npm run seo:audit:indexability
```

El runbook completo de producción está en `docs/mitos-produccion-imagenes.md`.
El de video, en `docs/videos/TRASPASO-SIGUIENTE-COMUNIDAD.md`.
