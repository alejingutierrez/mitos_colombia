# Implementación y migración AWS de Mitos

Actualizado: 1 de octubre de 2026. Rama `codex/aws-migration`; base publicada `582d4b4f653c5e983fb39bfab537c4f768a37bb4`. Worktree aislado; los cambios locales del home y del taller no se modifican.

La migración está en curso. La web pública continúa en Vercel y Neon sigue siendo el writer. No se cambió DNS, no se corrieron seeds ni campañas de IA y no se retiraron servicios.

## Estado de las puertas

| Puerta | Estado real | Lo que falta |
|---|---|---|
| P0 inventario | Parcial | Vincular conexiones y Blob locales a las variables reales del deployment; propietarios de seis tablas sin consumidor; tráfico y baseline colombiano comparable. |
| P1 aplicación | Build y contratos locales pasan | Integración completa con RDS/S3, restore y conmutación ensayada; sacar generación/exportaciones largas del proceso HTTP. |
| P2 destino | Base propia creada | CDN, WAF, TLS, observación completa, jobs bajo demanda y entorno temporal de QA. |
| P3 ensayo/copia | Respaldo inicial local verificado | Universo Blob ligado a producción, DB de ensayo, mapa de URLs, paridad final y restauración. |
| P4 QA | Smoke local de lectura | Edición/publicación de fixtures, auth, pagos test, RSC, medios y taller en AWS. |
| P5 carga/fallos | Pendiente | Carga, créditos CPU, memoria, pérdida del host, restore, deploy fallido y conciliación de cola. |
| P6 corte | Bloqueado por las puertas previas | Freeze, callback inbox provisional, dump final, un writer, DNS/CDN y smoke público. |
| P7/P8 | Pendientes | Observación, compatibilidad y retiro de origen con allowlist. |

## Infraestructura provisionada

Cuenta `907264907058`, región `us-east-1`, tres stacks propios:

- `mitos-colombia-foundation`: VPC `10.77.0.0/16`, subred pública para salida sin NAT, RDS PostgreSQL 17.11 privada `db.t4g.micro` SingleAZ, 20 GB gp3; tres buckets privados versionados; ECR inmutable; SQS de pagos y DLQ; secretos propios y roles de runtime/job.
- `mitos-colombia-runtime`: EC2 ARM64 `t4g.small`, 30 GB cifrados, IMDSv2, sin SSH; acceso 443 solo desde la lista de orígenes CloudFront. El host está instalado por SSM y mantiene respuesta 503 local; no tiene la aplicación ni credenciales productivas cargadas.
- `mitos-colombia-ci`: roles OIDC del repo y documento SSM que admite SHA/digest validados. El environment `mitos-aws-production` solo admite `main`.

RDS tiene protección contra borrado y 35 días de backups. Foundation/runtime tienen protección de terminación. La política de stack bloquea sustitución/borrado de base, buckets, zona y secretos.

El primer arranque falló porque el endpoint S3 solo admitía nuestros buckets y bloqueaba los repositorios de Amazon Linux. Se corrigió mediante un change set que modificó únicamente ese endpoint: GET a los paquetes regionales de Amazon y al bucket regional de capas ECR. Docker, Nginx y PostgreSQL CLI están instalados; SSM responde. No se abrieron permisos a buckets de otros proyectos.

Los tres servicios de RAG/Cocina permanecen `RUNNING` y su raíz HTTP respondió 200 después de esta provisión. Ese smoke no sustituye sus suites funcionales; ver [peer-health.json](receipts/peer-health.json).

## Cambios de aplicación

- Driver `pg` con SQL parametrizado, pool acotado y conexión fijada para transacciones; AWS exige RDS y CA verificada.
- Adaptador S3 con URLs propias, tipos MIME, objetos inmutables por defecto, paginación y borrado mediante marcadores de versión. AWS rechaza fallback a Blob.
- Caché de disco exclusiva del build AWS, separada por release y con invalidación de tags compartida; no se introduce Redis.
- Snapshot de build en transacción PostgreSQL de solo lectura. Incluye datos usados por el catálogo y únicamente comentarios aprobados; excluye emails privados, cuentas, pedidos, sesiones y expedientes. El build no ejecuta seeds ni escritura SQLite.
- Contenedor standalone, CA RDS, secretos leídos en memoria desde el secret propio, guard de cuenta/rol y endpoints live/ready/version.
- Autenticación AWS con contadores PostgreSQL distintos por IP y cuenta; el proxy debe sobrescribir la IP con `CloudFront-Viewer-Address`.
- Webhook AWS confirma SQS antes de 2xx. Worker separado, deduplicación/lease y DLQ. Faltan pruebas integradas con datos sintéticos y el inbox provisional para propagación DNS.
- DDL retirado del arranque AWS; migraciones con digest y advisory lock. Se ejecutarán después de importar el esquema real, no para recrear el catálogo desde Excel.
- Next.js actualizado a 16.3.8 por parches de seguridad; `npm audit` quedó en cero. OpenGraph usa Node. Los clientes de IA se inicializan solo al invocarlos, de modo que el build no usa sus claves.

## Automatización preparada

`.github/workflows/aws.yml` hace checks, build ARM64, scan ECR, publicación de estáticos por SHA y recibo SHA → digest → snapshot. OIDC no necesita llaves AWS permanentes en GitHub. Antes de publicar la imagen se ejercitan sus bindings ARM64 de imagen/SQLite, el driver pg y los SDK directos del entrypoint sin secretos ni llamadas externas. Cada job tiene timeout y los reintentos reutilizan una imagen existente únicamente si coinciden SHA, snapshot, procedencia verificada e IDs públicos; nunca reemplazan una etiqueta inmutable. La rama de migración tiene deshabilitados previews Vercel para impedir builds contra la base viva durante esta preparación. CI trae únicamente los archivos necesarios para aplicación/pruebas, rutas y módulos community/media: el ensayo sparse conserva las 112 pruebas y trae 107.909.902 bytes frente al corpus de contenido versionado de casi 2,9 GB. El índice Git sigue completo para chequear rutas de secretos. Las actualizaciones exclusivas del expediente de migración o de ESTADO no reconstruyen imágenes; los PR mantienen sus checks.

`MITOS_AWS_BUILD_ENABLED=true` habilita probar imágenes. `MITOS_AWS_CUTOVER_COMPLETE=false` mantiene bloqueado el deploy público. El snapshot inicial conserva `sourceVerified=false`; esa marca no se cambia para hacer pasar una puerta.

`infra/aws/host/deploy.sh` está preparado para readiness/calentar un candidato, comprobar margen de RAM, conmutar el proxy, smoke público y volver a la imagen anterior sobre la misma RDS ante fallo. El worker se drena aparte. La reversión arranca/verifica la imagen previa antes de devolverle tráfico; si no puede recuperarla, conserva el candidato y reporta atención manual. Pasan siete ensayos de fallos con CLI simuladas: smoke público, validación Nginx, worker, recibo final, primer release, reintento y predecesor no recuperable. El ensayo real en EC2/RDS sigue pendiente; no se confunden esas simulaciones con recuperación productiva. No se instala ni activa como release de producción hasta P3–P5.

Antes de habilitar releases ordinarios falta automatizar refresco de snapshot desde RDS verificada, migraciones con rol separado y QA temporal. No basta con cambiar la variable del corte a true.

El PR público [#76](https://github.com/alejingutierrez/mitos_colombia/pull/76) está en borrador. Los checks actuales del PR pasaron con las 112 pruebas, lint y auditorías npm en [GitHub Actions](https://github.com/alejingutierrez/mitos_colombia/actions/runs/36896708911); esa ejecución omite imagen y deploy por ser un PR. La primera construcción ARM64 por push compiló y pasó el smoke de dependencias nativas en [Actions](https://github.com/alejingutierrez/mitos_colombia/actions/runs/36893113902), pero no publicó estáticos ni recibo de release: el waiter consultó ECR antes de que hubiera resultado, y el escaneo posterior confirmó 3 hallazgos críticos y 12 altos en la base Debian. Su imagen no es elegible para release; ver [first-image-scan.json](receipts/first-image-scan.json).

La corrección usa una base Node 24 / Alpine 3.24 fijada por digest, compartida entre builder y runtime, con paquetes actualizados y compiladores solo en el builder. La [matriz de Node](https://github.com/nodejs/docker-node/blob/main/versions.json) incluye ARM64 y la [matriz de AWS](https://docs.aws.amazon.com/inspector/latest/user/supported.html) incluye su escaneo. Node advierte que sus builds musl ARM64 no reciben pruebas previas a publicación: por eso se exige nuestro smoke ARM64 real, y la validación funcional completa permanece en P4 antes del corte. La imagen corregida pasó build, smoke ARM64 y scan ECR real sin hallazgos en [CI](https://github.com/alejingutierrez/mitos_colombia/actions/runs/36897845942); se publicaron sus estáticos y recibo de preparación, con `sourceVerified=false` y deploy omitido. Ver [prepared-image.json](receipts/prepared-image.json). El gate mantiene cero hallazgos altos/críticos; espera hasta diez minutos, solicita únicamente el scan de nuestra imagen si scan-on-push no aparece y rechaza resultados ausentes, fallidos o mayores de 24 horas.

Se corrigió también una carrera en el simulador de CLI del ensayo de rollback: el archivo de estado se escribe por reemplazo atómico. El fallo de lectura parcial apareció en un run del PR; no era un fallo de rollback del host real.

## Evidencia local

- 112 tests focalizados de runtime, pagos, tarot, comentarios y escaneo: PASS local (104 anteriores + 8 escenarios del gate ECR).
- ESLint focalizado: PASS.
- Build sin secretos: 886 páginas generadas; solo aviso de fallback de Asimovian.
- Auditoría standalone: sin taller, `.env`, fuentes de archivo ni symlinks que salgan del paquete; ver [standalone-package.json](receipts/standalone-package.json).
- HTTP 200 en home, mitos, tarot, sitemap, robots, taxonomy, live y OpenGraph: [standalone-http.json](receipts/standalone-http.json).
- Navegador local: navegación del home al relato de El Alma, imagen visible cargada, sin overflow ni errores de consola en esa lectura.

Estas pruebas no prueban producción AWS ni sus objetivos de rendimiento.

## Respaldo inicial del taller

Se archivaron 39.078 archivos y 17.914.015.376 bytes desde `content`, `editorial`, `docs`, `output`, `artifacts` y `public` del checkout original. Cada objeto tiene versión S3, checksum SHA-256, tamaño y comprobación de que el archivo fuente no cambió durante la copia. Las 66 referencias por symlink apuntan a archivos también archivados; no quedan destinos sin resolver. Se excluyeron seis archivos regenerables.

El manifiesto completo y el mapa de aliases permanecen en el bucket privado. El repo público conserva únicamente el recibo agregado: [local-archive.json](receipts/local-archive.json).

Se restauraron cinco archivos de versiones concretas —freeze, audio, fuente editorial, imagen de referencia y manifiesto de hashes— y todos coincidieron por bytes y SHA-256: [representative-restore.json](receipts/representative-restore.json). Además, se recuperó una edición completa guardada de Bachué (`prepared-99`): 23 archivos, 19.734.577 bytes, sus diez láminas 1080 × 1350, freeze, fuentes y siete imágenes referenciadas; todos coinciden con hashes y versiones del archivo. Se comprobó también el hash de cada asset contra el freeze. Recibo: [edition-restore.json](receipts/edition-restore.json). La restauración ocurrió en una carpeta temporal nueva, sin modificar fuentes ni regenerar imágenes. Falta preservar bundles/overlays de las ramas y worktrees vivos, recuperar la versión histórica del renderer y reconectar el taller. Estas pruebas no sustituyen el respaldo final de Neon y Blob durante P3/P6.

## Bloqueo de secretos

La revisión automática rechazó la exportación amplia de todas las variables de Vercel a texto plano en `/private/tmp`. No se hizo ese volcado. Solo se obtuvo metadata de nombres/tipos y deployment SHA.

Está pendiente la autorización para leer únicamente variables necesarias y trasladarlas directamente a Secrets Manager de Mitos, sin mostrarlas ni persistir un archivo local con sus valores. El secreto runtime de AWS sigue vacío. No se asumen valores locales para Bold, flags comerciales o legales. Nunca se llevan tokens Blob, bearer Bedrock ajeno ni conexiones Neon al runtime final AWS.

Hay un segundo requisito de configuración: las variables `sensitive` (ahora Secret) no son recuperables después de guardarlas, incluso mediante API; ver [contrato de Vercel](https://vercel.com/docs/environment-variables/sensitive-environment-variables) y [Config/Secret](https://vercel.com/changelog/environment-variables-now-use-config-and-secret-types). El inventario incluye así las claves de Botón Bold y parte de los flags/datos comerciales. Para ellas se necesita la fuente original autorizada o una reposición coordinada; no se intenta extraerlas desde un endpoint temporal en producción. Las variables recuperables se leerán por ID y allowlist únicamente tras autorización, no mediante un dump global. Los IDs públicos de GA/GTM ya se contrastaron con la página publicada.

## Costos

Se mantiene la arquitectura económica del spec: USD 60–80/mes para hosting en el escenario definido, más USD 5–15 durante meses con capacidad temporal de release. No se incluyen IA, tokens, imágenes, voz ni créditos. No se añadieron NAT, ALB, Redis ni standby permanentes. Los recursos ya provisionados generan cargos; el origen permanece activo durante la migración.
