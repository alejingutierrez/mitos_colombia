# Implementación y migración AWS de Mitos

Actualizado: 1 de octubre de 2026. Rama `codex/aws-migration`; base publicada `582d4b4f653c5e983fb39bfab537c4f768a37bb4`. Se trabaja en un worktree aislado; el home y el taller locales no se modifican.

**Migración en curso. El DNS autoritativo ya está en AWS. La web pública y las ventas continúan en Vercel; Neon sigue siendo el writer.** El nuevo sitio está en staging restringido. No se ejecutó el seed Excel, ninguna campaña de IA ni retiro del origen.

## Estado actual

| Parte | Evidencia real | Pendiente |
|---|---|---|
| DNS | Delegación GoDaddy y registro `.com` confirman los cuatro NS de Route 53. Registros existentes preservados. | Corte de apex/www después de aceptación. |
| Registro del dominio | Continúa en GoDaddy, bloqueado para transferencia; AWS confirma `UNTRANSFERABLE`. | Verificación SMS del titular, desbloqueo y traslado del registro. |
| Base | 21 tablas propias restauradas; roles separados; migraciones 000, 001 y 002 aplicadas; app sin CREATE. | Freeze y copia/paridad final; el origen activo volvió a modificar tarot_cards. |
| Medios | 5.701 objetos, 9.236.150.891 bytes, SHA y versión S3 comprobados. CDN HTTPS propia entrega JPEG/MP3 y rango 206. | Delta final bajo freeze. |
| URLs | 3.546 referencias en 12 columnas de la copia RDS; 407 referencias en 26 módulos públicos. Todas tienen objeto copiado. | Paridad normalizada final; los freezes históricos conservan procedencia original. |
| Aplicación | Imagen 45bed ARM saludable, URLs propias, probe editorial y auth integrados en staging. | Pagos test/config completa, corrección/QA de invalidación editorial y corte público. |
| Configuración | Config recuperable de Vercel trasladada por allowlist en memoria; RDS usa mitos_app; token interno propio. | Claves privadas Bold y configuración comercial Secret originales. |
| Automatización | GitHub OIDC, ARM, scan, estáticos por SHA; snapshot público de solo lectura con publicación atómica y documento SSM limitado. | Ensayo real del refresco después de aceptar el writer. Gate público sigue cerrado. |
| Taller | Archivo inicial + 16.672 archivos/17.615.054.369 bytes de overlays de 15 worktrees; bundle de 100 ramas; lectura propia con TLS y 41 muiscas. | Delta final y activación de publicación tras aceptar RDS como writer. |

## Infraestructura propia

Cuenta `907264907058`, `us-east-1`. Stacks: foundation, runtime, ci, certificate, origin-dns, media y web; todos pertenecen a Mitos.

- VPC `10.77.0.0/16`, RDS PostgreSQL 17.11 privada `db.t4g.micro` SingleAZ/20 GB gp3, 35 días de backups y protección de borrado.
- EC2 ARM64 `t4g.small`, disco 30 GB cifrado, IMDSv2, sin SSH; 443 solo desde CloudFront. Docker/Nginx/PostgreSQL CLI/SSM instalados.
- Buckets media/archive/operations privados, cifrados, versionados y con bloqueo de acceso público. Solo CloudFront OAC propio puede GET al bucket de medios; acceso S3 anónimo respondió 403.
- ECR inmutable por SHA, SQS propia de pagos y DLQ. Roles runtime/job y OIDC propios; ningún permiso nuevo a recursos de RAG/Cocina.
- ACM emitió apex + wildcard. El origen usa certificado DNS-01 y renovación systemd dos veces al día; dry-run de renovación pasó. El respaldo de claves/certificados permanece únicamente en operations privado.
- CloudFront web `E12OCIT65B9EUU`: HTTPS al origen, header propio, RSC/cookies/query reenviados y caché HTML/API desactivada. `/_next/image` usa un caché propio por Accept, URL, ancho, calidad y marcador staging confiable; no reenvía cookies/Authorization. WAF propio con reglas administradas/rate limit; staging permanece limitado a operadores incluso tras abrir www.
- CloudFront media `E10WLYMIZWFTI`: S3 con firma SigV4, HTTP2/3, compresión, CORS para medios públicos y caché por MIME. Imágenes/audio copiados son inmutables; se conserva reproducción por rangos.

Foundation/runtime mantienen protección de terminación y una política que impide sustituir/borrar base, buckets, zona y secretos. El endpoint S3 admite solo nuestros buckets y GET a los repositorios regionales de Amazon Linux/ECR requeridos para bootstrap. Roles/endpoint leen versiones únicamente en el prefijo QA de operations para verificar fixtures. Una zona privada exacta `media.mitosdecolombia.com`, asociada solo a la VPC Mitos, apunta a la misma CloudFront pública: el resolver VPC conservaba los NS GoDaddy durante la propagación; la zona no afecta otros nombres.

No se cambió el origen público: apex conserva A anterior y www su CNAME Vercel. `origin`, `media` y `staging` ya pertenecen al destino AWS. Se preservaron `_domainconnect` y `_dmarc`; no existían MX/CAA y DNSSEC estaba apagado.

## Copia y restauración

El snapshot inicial se obtuvo de la conexión local después de contrastar identidad y credencial con la configuración del deployment publicado. Dump PostgreSQL bajo snapshot exportado de transacción de solo lectura, con tablas y secuencias propias. Ningún seed ni DDL en el origen.

Las 21 tablas incluyen catálogo, editoriales, imágenes, narraciones, tarot, comentarios, contactos, cuentas, sesiones y pedidos. Los 21 hashes de filas coincidieron después del restore inicial. Un control posterior encontró cambio en `tarot_cards` mientras Neon seguía activo: ese drift está registrado y obliga a repetir copia/paridad en el corte. Se excluyeron sin tocarlas seis tablas sin consumidor Mitos y sin FK hacia ellas: analysis_results, backlinks_checks, backlinks_messages, backlinks_prospects, insights y news_articles.

La restauración real del dump descargado por versión/checksum en una base QA nueva pasó los hashes de las 21 tablas en 148 segundos, sin modificar la base runtime. [Recibo DR](receipts/database-dr.json). Un host QA nuevo recuperó imagen, configuración y certificado con TLS validado y leyó seis rutas en 314 segundos desde su creación; sin DNS público, workers ni aceptación. [Recibo host](receipts/host-recovery.json). Este ensayo no certifica un takeover público ni el writer final. El host y su EIP temporales se retiraron; el stack QA ya no existe.

El dump inicial tiene 10.767.147 bytes y SHA `0b80985eda0c59d1eb187802a7d21da7181e8e705753f4a6d4524213f25855af`. Está guardado como una versión inmutable en archive privado. Los recibos públicos conservan conteos/estado; dumps, payloads privados, manifests completos y credenciales quedan fuera del repo.

Blob se inventarió antes y después de la copia, sin cambios durante esa tanda: 5.701 objetos y cero fallos, con checksum SHA-256 y HEAD de versión específica. La fuente sigue activa: esta copia inicial no es una garantía de paridad final.

Se conservan [recibo de DB](receipts/database-initial-copy.json), [backup](receipts/database-backup.json), [Blob](receipts/blob-initial-copy.json), [reescritura](receipts/media-rewrite.json) y [CDN](receipts/media-cdn.json). Los recibos son puntos en el tiempo, no certificaciones del corte.

## Aplicación y trabajos largos

Runtime `pg` con parámetros, pool acotado y TLS/CA RDS; S3 reemplaza Blob; standalone ARM no incluye taller, fuentes privadas ni secretos. AWS rechaza credenciales Blob, bearer Bedrock ajeno y perfiles explícitos. Secrets Manager inyecta únicamente la allowlist en memoria; el contenedor no contiene claves.

La cuenta `mitos_app` hace CRUD de tablas propias, sin CREATE; `mitos_migrator` aplica SQL con digest/advisory lock y `mitos_backup` lee. La tabla de migraciones no admite escritura del rol app.

Los 16 POST largos del admin pasan a una cola RDS propia; el navegador espera su resultado mediante polling autenticado, conservando los formularios. Un contenedor editorial separado, máximo un trabajo, límite 512 MB/0,5 CPU, ejecuta la tarea fuera del proceso web. Un lock de kernel impide superponer una generación y un release. Los resultados ambiguos se marcan para revisión, sin regenerar automáticamente y duplicar créditos. Esto mantiene la variante económica sin añadir capacidad permanente. La cola pasó un probe real autenticado: 401 sin auth, 202 al encolar y éxito del worker al leer RDS y escribir/restaurar una versión S3; sin IA ni consumidor de pagos. [Recibo](receipts/editorial-job.json). El primer probe encontró GetObjectVersion denegado: se corrigió solo el prefijo QA de operations y el nuevo probe pasó. Los trabajos reales de generación siguen sin ejecutarse durante la migración.

Pagos: webhook verifica firma y exige recibo SQS antes de 2xx; worker separado deduplica por lease/hash, con reintentos acotados y DLQ. Falta QA integrada con claves test y la captura/forward durante propagación DNS. Ningún pago real se usa como fixture.

Las páginas comerciales leen configuración en runtime, evitando que un build sin secretos fije una tienda preview en el artefacto. Staging tiene noindex y no carga GTM/GA ni emite mediciones de compra.

## CI/CD

GitHub Actions verifica tests/lint/secret paths/audit, construye ARM64, ejercita codecs/SQLite/SDK/lock reales, exige escaneo ECR fresco sin HIGH/CRITICAL y publica estáticos por SHA. OIDC no emplea llaves AWS permanentes.

Tras el corte, el build invoca únicamente el documento `mitos-colombia-snapshot` del host propio. El script exige el archivo local de aceptación y una release activa sana, exporta solo catálogo/comentarios aprobados y publica dos objetos inmutables antes de cambiar un manifest atómico. No exporta cuentas, pedidos, contactos ni emails de comentarios.

`MITOS_AWS_BUILD_ENABLED=true`, `MITOS_AWS_CUTOVER_COMPLETE=false`. El snapshot nuevo de ensayo sigue `sourceVerified=false`. No se modifica esa marca ni el gate para forzar un release.

Deploy valida SHA/digest/migración, memoria, candidato/readiness, proxy y smoke público. Rollback recupera primero el predecesor sano y restaura ambos workers. Los ensayos de CLI simuladas cubren fallos de proxy, smoke, workers y recibo, reintento y predecesor irrecuperable. El primer cambio real de staging falló al comprobar identidad inmediatamente tras reload y recuperó el upstream anterior; el reintento con espera acotada pasó. Producción incorpora esa espera. El rollback del despliegue público permanece pendiente del corte.

La imagen inicial corregida pasó ARM y ECR 0 HIGH/CRITICAL en [CI](https://github.com/alejingutierrez/mitos_colombia/actions/runs/36900023764); su recibo [prepared-image.json](receipts/prepared-image.json) la mantiene no aceptada. La imagen Debian anterior falló por vulnerabilidades y nunca se liberó; [first-image-scan.json](receipts/first-image-scan.json). La imagen `08ee0eba5d2a5b1adccae2ed8dff0f9bcccd4bd6` pasó ARM, codecs y ECR 0 HIGH/CRITICAL en [CI](https://github.com/alejingutierrez/mitos_colombia/actions/runs/36924001336); está en staging como sourceVerified=false. La continuación `45bedb83c8fbfb73991af92eafaa6edf3bff2748` pasó checks y ARM/ECR 0 HIGH/CRITICAL en [CI](https://github.com/alejingutierrez/mitos_colombia/actions/runs/36932222743), y se desplegó en staging. [Recibo](receipts/stage-45bed.json). Sigue sin aceptación pública.

## Secretos y pasos externos

Las variables Vercel Config necesarias se recuperaron por ID/allowlist y se trasladaron directamente en memoria, sin un dump global a texto plano. Se vincularon credenciales locales de DB/Blob al deployment vigente. El runtime AWS ya contiene configuración parcial, POSTGRES propio y token worker; no está vacío.

Vercel Secret no permite recuperar valores después de guardarlos: [contrato oficial](https://vercel.com/docs/environment-variables/sensitive-environment-variables). No se creó un endpoint de extracción en producción. La tienda actual sí vende a COP 119.900 y checkoutReady=true; sin sus llaves privadas Bold el corte desactivaría ventas. Sigue pendiente la fuente original de esas claves.

Se preparó una copia limitada de datos comerciales ya publicados. La revisión automática rechazó escribirlos en runtime incluso sin flags; esa copia no se ejecutó y se solicitó aprobación específica. Nunca se infieren flags de pagos listos para pasar un gate.

El DNS está migrado y [su recibo](receipts/domain-delegation.json) diferencia delegación, registrador y origen. GoDaddy exige SMS para continuar hacia el traslado del registro; no se ha desbloqueado ni pagado una transferencia. Precio AWS consultado para `.com`: USD 16 por traslado y USD 16/año de renovación; el traslado agrega un año según [AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53-expiration.html).

## Taller, recuperación y costos

Se archivaron 39.078 archivos/17.914.015.376 bytes; 66 aliases resueltos. Cinco restauraciones por versión/hash y una edición Bachué completa de 23 archivos/19.734.577 bytes pasaron, sin sobrescribir ni regenerar. [Recibos](receipts/edition-restore.json). Se preservaron además las 100 ramas/151 referencias en un bundle privado de 3.928.169.449 bytes: la copia filtra historial de .env/settings locales, conserva mapas original/restaurado y no reescribe el repo original. [Recibo Git](receipts/git-knowledge.json). La restauración completa desde su versión S3 pasó el SHA del bundle, las 151 referencias/100 ramas y git fsck en una copia nueva. [Restauración Git](receipts/git-restore.json). Se verificaron 16.672 archivos/17.615.054.369 bytes de cambios y material pagado en los 15 worktrees, incluyendo videos, con manifests privados de archivos/deleciones y versiones; los 73 paths excluidos permanecen fuera por credenciales/symlinks; los 66 aliases del archivo inicial conservan su mapa de recuperación. [Overlays](receipts/worktree-overlays.json). Cinco archivos completos recuperados en una carpeta nueva —código pendiente, freeze, video pagado e imágenes de dos worktrees— pasaron versión y SHA (35.572.351 bytes), sin escribir el origen. [Restauración de overlays](receipts/worktree-overlay-restore.json). Es una copia por archivo con tiempos registrados; el taller mutable necesita un delta final.

122 imports pg del taller pasan por un adaptador que conserva comportamiento legacy y exige la RDS/rol propios con CA/servername verificados en AWS; checks de medios aceptan S3 y ya no exigen token Blob. Se retiró el cliente Neon HTTP restante del lint de actas. `node scripts/aws/workshop.mjs read scripts/aws/workshop-check.mjs` pasó por túnel SSM: mitos_backup, 596 mitos, TLS y lectura S3. El dump de censo devolvió los 41 muiscas completos. [Recibo](receipts/workshop-read.json). `workshop.mjs write` exige el recibo privado cutover/accepted.json; no se habilita antes del writer único. Credenciales permanecen en memoria; el seed destructivo no es admitido por este wrapper.

El hosting conserva el escenario económico de USD 60–80/mes y USD 5–15 temporales en meses con capacidad de release. IA, imágenes, voz, tokens y créditos están excluidos. No se añaden NAT, ALB, Redis ni standby permanentes. Durante la migración coexiste el origen; los recursos ya creados generan cargos.

Se corrigió también el origen de autenticación en staging: solo se admite su Origin cuando el marcador sobrescrito por CloudFront confirma staging; www no puede habilitarlo por un header del cliente. La integración real pasó registro/login/logout, cookie Secure/HttpOnly/SameSite, sesión revocada, CSRF y origen ajeno 403. La cuenta ficticia .invalid se eliminó; no hubo correos ni pagos. [Recibo](receipts/stage-auth.json).

La QA real adicional confirmó AVIF 200/Hit (incluso con auth/cookie sintéticos) y WebP 200 separado. Un primer WebP dio 502 transitorio durante propagación; se conserva esa limitación en [el recibo](receipts/image-cache.json). Lectura en navegador a 390 px: imagen cargada, sin overflow ni scripts GA/GTM; la captura de pantalla falló en la herramienta, por lo que [el recibo](receipts/browser-mobile.json) acredita DOM y carga, no una revisión visual completa.

La QA de edición detectó que el PUT persistía pero el HTML conservaba el título anterior: el adaptador omitía x-next-cache-tags del APP_PAGE. La corrección y regresión HTML/RSC local pasan; falta el build y repetir el ensayo real. El fixture se retiró de RDS.

El cierre requiere: claves/configuración completa, QA de edición/pagos test, rollback público, snapshot/delta bajo freeze, un único writer, captura de callbacks durante propagación, corte www/apex, smoke público, observación y retiro del origen mediante allowlist. Ningún estado de staging sustituye ese cierre.
