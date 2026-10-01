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
| Aplicación | Imagen inicial ARM real saludable contra RDS en staging por CloudFront Bogotá. | Nueva imagen con URLs propias y workers, QA completa y fallo/rollback real. |
| Configuración | Config recuperable de Vercel trasladada por allowlist en memoria; RDS usa mitos_app; token interno propio. | Claves privadas Bold y configuración comercial Secret originales. |
| Automatización | GitHub OIDC, ARM, scan, estáticos por SHA; snapshot público de solo lectura con publicación atómica y documento SSM limitado. | Ensayo real del refresco después de aceptar el writer. Gate público sigue cerrado. |
| Taller | Archivo privado inicial de 39.078 archivos/17.914.015.376 bytes; restauración de edición completa y muestras por versión/hash. | Ramas, overlays vivos y reconexión operativa del taller. |

## Infraestructura propia

Cuenta `907264907058`, `us-east-1`. Stacks: foundation, runtime, ci, certificate, origin-dns, media y web; todos pertenecen a Mitos.

- VPC `10.77.0.0/16`, RDS PostgreSQL 17.11 privada `db.t4g.micro` SingleAZ/20 GB gp3, 35 días de backups y protección de borrado.
- EC2 ARM64 `t4g.small`, disco 30 GB cifrado, IMDSv2, sin SSH; 443 solo desde CloudFront. Docker/Nginx/PostgreSQL CLI/SSM instalados.
- Buckets media/archive/operations privados, cifrados, versionados y con bloqueo de acceso público. Solo CloudFront OAC propio puede GET al bucket de medios; acceso S3 anónimo respondió 403.
- ECR inmutable por SHA, SQS propia de pagos y DLQ. Roles runtime/job y OIDC propios; ningún permiso nuevo a recursos de RAG/Cocina.
- ACM emitió apex + wildcard. El origen usa certificado DNS-01 y renovación systemd dos veces al día; dry-run de renovación pasó. El respaldo de claves/certificados permanece únicamente en operations privado.
- CloudFront web `E12OCIT65B9EUU`: HTTPS al origen, header propio, RSC/cookies/query reenviados y caché CDN desactivada. WAF propio con reglas administradas/rate limit; staging permanece limitado a operadores incluso tras abrir www.
- CloudFront media `E10WLYMIZWFTI`: S3 con firma SigV4, HTTP2/3, compresión, CORS para medios públicos y caché por MIME. Imágenes/audio copiados son inmutables; se conserva reproducción por rangos.

Foundation/runtime mantienen protección de terminación y una política que impide sustituir/borrar base, buckets, zona y secretos. El endpoint S3 admite solo nuestros buckets y GET a los repositorios regionales de Amazon Linux/ECR requeridos para bootstrap.

No se cambió el origen público: apex conserva A anterior y www su CNAME Vercel. `origin`, `media` y `staging` ya pertenecen al destino AWS. Se preservaron `_domainconnect` y `_dmarc`; no existían MX/CAA y DNSSEC estaba apagado.

## Copia y restauración

El snapshot inicial se obtuvo de la conexión local después de contrastar identidad y credencial con la configuración del deployment publicado. Dump PostgreSQL bajo snapshot exportado de transacción de solo lectura, con tablas y secuencias propias. Ningún seed ni DDL en el origen.

Las 21 tablas incluyen catálogo, editoriales, imágenes, narraciones, tarot, comentarios, contactos, cuentas, sesiones y pedidos. Los 21 hashes de filas coincidieron después del restore inicial. Un control posterior encontró cambio en `tarot_cards` mientras Neon seguía activo: ese drift está registrado y obliga a repetir copia/paridad en el corte. Se excluyeron sin tocarlas seis tablas sin consumidor Mitos y sin FK hacia ellas: analysis_results, backlinks_checks, backlinks_messages, backlinks_prospects, insights y news_articles.

El dump inicial tiene 10.767.147 bytes y SHA `0b80985eda0c59d1eb187802a7d21da7181e8e705753f4a6d4524213f25855af`. Está guardado como una versión inmutable en archive privado. Los recibos públicos conservan conteos/estado; dumps, payloads privados, manifests completos y credenciales quedan fuera del repo.

Blob se inventarió antes y después de la copia, sin cambios durante esa tanda: 5.701 objetos y cero fallos, con checksum SHA-256 y HEAD de versión específica. La fuente sigue activa: esta copia inicial no es una garantía de paridad final.

Se conservan [recibo de DB](receipts/database-initial-copy.json), [backup](receipts/database-backup.json), [Blob](receipts/blob-initial-copy.json), [reescritura](receipts/media-rewrite.json) y [CDN](receipts/media-cdn.json). Los recibos son puntos en el tiempo, no certificaciones del corte.

## Aplicación y trabajos largos

Runtime `pg` con parámetros, pool acotado y TLS/CA RDS; S3 reemplaza Blob; standalone ARM no incluye taller, fuentes privadas ni secretos. AWS rechaza credenciales Blob, bearer Bedrock ajeno y perfiles explícitos. Secrets Manager inyecta únicamente la allowlist en memoria; el contenedor no contiene claves.

La cuenta `mitos_app` hace CRUD de tablas propias, sin CREATE; `mitos_migrator` aplica SQL con digest/advisory lock y `mitos_backup` lee. La tabla de migraciones no admite escritura del rol app.

Los 16 POST largos del admin pasan a una cola RDS propia; el navegador espera su resultado mediante polling autenticado, conservando los formularios. Un contenedor editorial separado, máximo un trabajo, límite 512 MB/0,5 CPU, ejecuta la tarea fuera del proceso web. Un lock de kernel impide superponer una generación y un release. Los resultados ambiguos se marcan para revisión, sin regenerar automáticamente y duplicar créditos. Esto mantiene la variante económica sin añadir capacidad permanente. La cola admite un probe sintético RDS/S3 sin llamadas de IA; su ejecución real con la nueva imagen sigue pendiente.

Pagos: webhook verifica firma y exige recibo SQS antes de 2xx; worker separado deduplica por lease/hash, con reintentos acotados y DLQ. Falta QA integrada con claves test y la captura/forward durante propagación DNS. Ningún pago real se usa como fixture.

Las páginas comerciales leen configuración en runtime, evitando que un build sin secretos fije una tienda preview en el artefacto. Staging tiene noindex y no carga GTM/GA ni emite mediciones de compra.

## CI/CD

GitHub Actions verifica tests/lint/secret paths/audit, construye ARM64, ejercita codecs/SQLite/SDK/lock reales, exige escaneo ECR fresco sin HIGH/CRITICAL y publica estáticos por SHA. OIDC no emplea llaves AWS permanentes.

Tras el corte, el build invoca únicamente el documento `mitos-colombia-snapshot` del host propio. El script exige el archivo local de aceptación y una release activa sana, exporta solo catálogo/comentarios aprobados y publica dos objetos inmutables antes de cambiar un manifest atómico. No exporta cuentas, pedidos, contactos ni emails de comentarios.

`MITOS_AWS_BUILD_ENABLED=true`, `MITOS_AWS_CUTOVER_COMPLETE=false`. El snapshot nuevo de ensayo sigue `sourceVerified=false`. No se modifica esa marca ni el gate para forzar un release.

Deploy valida SHA/digest/migración, memoria, candidato/readiness, proxy y smoke público. Rollback recupera primero el predecesor sano y restaura ambos workers. Los ensayos de CLI simuladas cubren fallos de proxy, smoke, workers y recibo, reintento y predecesor irrecuperable. La prueba real y el corte siguen pendientes.

La imagen inicial corregida pasó ARM y ECR 0 HIGH/CRITICAL en [CI](https://github.com/alejingutierrez/mitos_colombia/actions/runs/36900023764); su recibo [prepared-image.json](receipts/prepared-image.json) la mantiene no aceptada. La imagen Debian anterior falló por vulnerabilidades y nunca se liberó; [first-image-scan.json](receipts/first-image-scan.json). El nuevo build con trabajos largos y URLs propias debe volver a pasar todos los gates.

## Secretos y pasos externos

Las variables Vercel Config necesarias se recuperaron por ID/allowlist y se trasladaron directamente en memoria, sin un dump global a texto plano. Se vincularon credenciales locales de DB/Blob al deployment vigente. El runtime AWS ya contiene configuración parcial, POSTGRES propio y token worker; no está vacío.

Vercel Secret no permite recuperar valores después de guardarlos: [contrato oficial](https://vercel.com/docs/environment-variables/sensitive-environment-variables). No se creó un endpoint de extracción en producción. La tienda actual sí vende a COP 119.900 y checkoutReady=true; sin sus llaves privadas Bold el corte desactivaría ventas. Sigue pendiente la fuente original de esas claves.

Se preparó una copia limitada de datos comerciales ya publicados. La revisión automática rechazó escribirlos en runtime incluso sin flags; esa copia no se ejecutó y se solicitó aprobación específica. Nunca se infieren flags de pagos listos para pasar un gate.

El DNS está migrado y [su recibo](receipts/domain-delegation.json) diferencia delegación, registrador y origen. GoDaddy exige SMS para continuar hacia el traslado del registro; no se ha desbloqueado ni pagado una transferencia. Precio AWS consultado para `.com`: USD 16 por traslado y USD 16/año de renovación; el traslado agrega un año según [AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53-expiration.html).

## Taller, recuperación y costos

Se archivaron 39.078 archivos/17.914.015.376 bytes; 66 aliases resueltos. Cinco restauraciones por versión/hash y una edición Bachué completa de 23 archivos/19.734.577 bytes pasaron, sin sobrescribir ni regenerar. [Recibos](receipts/edition-restore.json). Faltan referencias Git/overlays vivos y reconectar scripts del taller a la base/almacenamiento nuevos.

El hosting conserva el escenario económico de USD 60–80/mes y USD 5–15 temporales en meses con capacidad de release. IA, imágenes, voz, tokens y créditos están excluidos. No se añaden NAT, ALB, Redis ni standby permanentes. Durante la migración coexiste el origen; los recursos ya creados generan cargos.

El cierre requiere: claves/configuración completa, QA de lectura/edición/auth/pagos test, restauración y rollback reales, snapshot/delta bajo freeze, un único writer, corte www/apex, smoke público, observación y retiro del origen mediante allowlist. Ningún estado de staging sustituye ese cierre.
