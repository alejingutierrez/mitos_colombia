# Certificación de cierre visual muisca — 2026-08-26

## Decisión de cierre

El 2026-08-26 el usuario aceptó como cumplido el objetivo de producción visual
muisca con el corpus efectivamente producido. El cierre no declara como
generadas las escenas que no existen: registra **789 de 873 piezas únicas del
plan** y acepta expresamente las **84 escenas de video no generadas** como
fuera del alcance final.

La biblia, los trípticos, los keyframes, sus manifiestos, los identificadores
de Higgsfield, los recibos de publicación y los archivos de certificación
permanecen guardados bajo `content/videos/muiscas/`. No se borró ni reemplazó
ningún archivo de imagen local.

## Inventario certificado

| Capa | Resultado de cierre |
|---|---:|
| Mitos muiscas con plan editorial | 41/41 |
| Biblia declarada por el plan | 130/130 |
| Biblia física, incluidas 21 fichas heredadas | 151 |
| Trípticos | 123/123 |
| Keyframes de video | 536/620 |
| Omisiones de video aceptadas | 84 |
| Piezas únicas cumplidas al cierre | 789/873 |
| Imágenes físicas legibles | 1.681/1.681 |
| JPG maestros | 829 |
| JPG derivados/recortes | 747 |
| PNG conservados | 105 |

Las 84 omisiones aceptadas quedan enumeradas una por una en el certificado y
se distribuyen así:

| Mito | Escenas no generadas aceptadas |
|---|---:|
| `el-bermejo-aspira-a-ser-rey` | 9 |
| `campos-eliseos` | 15 |
| `el-hijo-del-sol-goranchacha` | 15 |
| `el-primero-de-los-reyes` | 15 |
| `popon` | 15 |
| `pacanchique` | 15 |

## Evidencia local y reproducible

- Certificado: `content/videos/muiscas/certificacion/cierre-muisca-2026-08-26.json`
- Checksums: `content/videos/muiscas/certificacion/cierre-muisca-2026-08-26.SHA256SUMS`
- SHA-256 del archivo de checksums:
  `fefc32cf8f7c6989904ea1cd581dd0458d222b520fe5c9e89b370476b93faa72`
- Verificación de producción:
  `content/videos/muiscas/certificacion/verificacion-produccion-cierre-muisca-2026-08-26.json`
- SHA-256 del informe de producción:
  `8b4b6d76cc489f14faf084bb25e40b3faf121a2379ed13de9f7021bbbe096581`
- Recibos antes/después de los 41 mitos:
  `content/videos/muiscas/publication-receipts/cierre-muisca-2026-08-26/`

Para regenerar el certificado y verificar todos los hashes:

```bash
node scripts/mitos/certificar-cierre.mjs \
  --accepted-final \
  --date 2026-08-26 \
  --publication-id cierre-muisca-2026-08-26
sha256sum -c content/videos/muiscas/certificacion/cierre-muisca-2026-08-26.SHA256SUMS
```

El archivo de checksums excluye la carpeta `certificacion/` para evitar un
hash circular, pero incluye imágenes, planes, manifiestos, bloques de video,
identificadores y los 41 recibos de publicación.

## Publicación aditiva en producción

La publicación `cierre-muisca-2026-08-26` sustituyó el tríptico visible de
los 41 mitos muiscas por 123 Blobs nuevos con sufijo aleatorio. El proceso fue
deliberadamente aditivo:

- no llamó ninguna operación de borrado de Blob;
- conservó las 86 URL anteriores no nulas y comprobó que siguen en línea;
- insertó 41 filas verticales nuevas, sin actualizar ni borrar el historial;
- guardó en cada recibo los URL anteriores, los URL nuevos, los SHA-256 y las
  dimensiones locales;
- purgó `/mitos/<slug>` y `/mitos` después de cada publicación.

La verificación posterior obtuvo:

| Prueba de producción | Resultado |
|---|---:|
| Recibos de publicación | 41/41 |
| Filas actuales de base de datos coincidentes | 41/41 |
| Historiales verticales anteriores preservados | 41/41 |
| Blobs nuevos en línea | 123/123 |
| Blobs anteriores en línea | 86/86 |
| Páginas públicas con el nuevo tríptico | 41/41 |

La comprobación visual se hizo en la misma sesión de Google Chrome usada para
la producción. Se revisaron las tres posiciones editoriales de Bachué
—portada, acto vertical y huella cuadrada— y una muestra representativa de
cinco mitos. Además, la página de archivo `/mitos` respondió y mostró los 596
relatos. En la sesión instrumentada, la navegación directa al optimizador de
la portada de `el-bermejo-aspira-a-ser-rey` fue bloqueada por el propio cliente
(`ERR_BLOCKED_BY_CLIENT`); no fue un fallo del archivo ni del servicio: tanto
el Blob original como `/_next/image` respondieron HTTP 200 y la verificación
servidor-a-servidor de los 41 mitos pasó.

## Repetición y reversión

Verificación de sólo lectura contra Neon, Blob y las páginas públicas:

```bash
node scripts/mitos/verificar-publicacion.mjs \
  --publication-id cierre-muisca-2026-08-26 \
  --site https://www.mitosdecolombia.com
```

Cada recibo contiene `before` y `after`. Si alguna vez se decide revertir una
imagen, se deben usar los URL de `before` para crear una nueva versión o
restaurar los campos visibles; no se deben borrar las filas verticales ni los
Blobs nuevos. Así la reversión también conserva la historia completa.

## Estado de resguardo

El corpus ocupa aproximadamente **2,0 GB** en el workspace. Está físicamente
guardado y checksummed, pero este cierre no lo añadió automáticamente a Git:
el repositorio no tiene Git LFS y la operación habría mezclado más de mil
archivos binarios con otros cambios locales del usuario. La certificación
registra que el árbol de trabajo estaba sucio y fija el `git_head` de origen
para mantener la trazabilidad sin afirmar un commit inexistente.
