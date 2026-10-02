# Cierre operativo de la migración

Web, comercio, contenidos, registro del dominio y despliegues operan en AWS `907264907058`, con recursos propios. RDS es el único writer desde la aceptación del 2026-10-02 a las 16:36 UTC. Apex y www usan alias A/AAAA de Route 53 a CloudFront. Registro del dominio, privacidad, bloqueo de traslado y renovación automática están confirmados; vencimiento 31 de enero de 2028 UTC.

El release publicado es `66ca01fc50a7bb6cdb47a467682004b11a18e8a5`, digest `sha256:13fb65511b26b9b4b49895ed0ac078ac722864bc5778c8d4637e467c2632f7c5`. [Pipeline completo](https://github.com/alejingutierrez/mitos_colombia/actions/runs/37042847438): checks, imagen y despliegue SUCCESS. El build refrescó el snapshot desde RDS; SSM verificó los hashes de los helpers antes de instalarlos. [Recibo](receipts/final-main-deployment.json).

## Datos, taller y conocimiento

- Copia final y paridad completa de 21 tablas, 13 secuencias y esquema; 596 mitos y los 41 muiscas conservados. Nunca repetir el restore inicial ni descongelar Neon después de abrir RDS a escrituras.
- 5.715 objetos históricos verificados por bytes, hash y versión. Originales, guiones, freezes, material pagado, ramas y overlays permanecen conservados en los respaldos privados.
- Los 14 talleres pasaron lectura TLS con rol `mitos_app`, 596 mitos y 41 muiscas, más escritura ficticia revertida y prueba S3/CDN por bytes. `runtime/workshop-env.mjs` exige cuenta, aceptación y RDS propios; usa CA/hostname verificados. Launchd mantiene el túnel SSM local 15433 con actividad SELECT 1. Los freezes conservan su procedencia y sus GET/HEAD históricos se resuelven a la copia exacta propia. [QA](receipts/local-workshops-qa.json).
- El overlay final conserva 2.442 archivos de código/runtime/guía en 14 entornos y pasa recuperación de todos sus hashes. No se alteró material pagado ni los paquetes principales congelados. [Archivo](receipts/closure-workshop-archive.json).
- La recuperación incremental de Git reconstruye el árbol completo de la revisión final y pasa `fsck`. La rama independiente del puente se conserva también como bundle completo; su recuperación reproduce `8914888e8fc3e75c85ecf6041d8e2b6adb3983f8`. [Recibo](receipts/closure-git-recovery.json). Bundles, parches y pruebas finales se descargaron por versión y hash desde el archivo privado; [archivo de cierre](receipts/final-private-closure-archive.json).

Las seis tablas fuera de la lista operativa quedan sin modificar en el origen compartido. Los dos checks históricos con target_url del dominio exacto se recuperaron por versión/hash en el archivo privado de AWS. Los prospectos, mensajes y demás filas sin atribución quedan intactos en el origen compartido; no se amplió su exportación. [Recibo](receipts/owned-legacy-seo-archive.json). No se borra el proyecto Neon compartido. Los scripts CommonJS históricos deben adoptar el adaptador antes de utilizarse; el seed Excel destructivo nunca es una rutina de publicación.

## Pruebas públicas y recuperación

- Trece rutas del dominio respondieron 200 después de pausar el origen; versión y digest coinciden. Veintiún assets nuevos usan la URL inmutable propia por SHA. Se comprobaron hits de caché de CloudFront en Bogotá, con tres descargas calientes y un mínimo observado de 17 ms; son muestras, no un percentil de toda la audiencia. [QA final](receipts/final-public-qa.json).
- Portada revisada en móvil 390 px y escritorio 1.440 px, sin desborde ni imágenes visibles fallidas. Se conserva el diseño y las ilustraciones aprobadas.
- Registro, ingreso, cierre y revocación de sesiones, cookie Secure/HttpOnly/SameSite y rechazo de CSRF; administración con crear/editar/revalidar un mito ficticio en RDS y retirarlo. Fixtures eliminados, sin IA.
- Precio COP 119.900, identidad y firma de producción, retorno canónico y orden persistida en RDS comprobados. El titular completó el pago sandbox real y el worker concilió APPROVED con el voucher del proveedor; repetición idempotente, firma y monto incorrectos se ensayaron. Las muestras fueron retiradas. [Sandbox](receipts/provider-sandbox-qa.json). No se efectuó una compra productiva como ensayo ni se reclamó compra GA4 de sandbox.
- Captura exacta de callback firmado en SQS desde CDN y dominio; firma inválida rechazada, muestra propia retirada. Workers de pagos y editorial e inbox usan el digest final, sin reinicios/OOM. Cola visible/en vuelo/diferida vacía, trece alarmas OK, RDS privada/cifrada con 35 días de backups y protección de borrado. Cocina e Historia respondieron 200.
- Recuperación en vivo: se publicó la imagen anterior y se volvió a main sobre la misma RDS. Un registro confirmado sobrevivió a ambos cambios con el mismo proceso/conexión de base; se eliminó al terminar. Sin restaurar DB, reabrir Neon ni llamar IA/proveedor. [Recibo](receipts/live-image-rollback.json).

## Retiro del origen y costos

Transcurrido el TTL máximo anterior, los resolutores 1.1.1.1 y 8.8.8.8 y el resolver local usan AWS. Vercel quedó desconectado de Git y pausado de forma reversible para este proyecto; la conexión directa al host anterior respondió 503 DEPLOYMENT_PAUSED y AWS siguió respondiendo 200. Las comprobaciones fijan conexiones independientes para evitar reutilizar un socket del mismo dominio entre proveedores. [Recibo](receipts/legacy-runtime-retired.json).

Se conservaron 47 chunks, hojas de estilo, fuentes e imágenes del despliegue anterior; sus hashes exactos pasan también desde www a través del CDN propio. Las pestañas previas pueden cargarlos sin ejecutar el host anterior. [Compatibilidad](receipts/original-static-compatibility.json). Las copias iniciales que devolvieron HTML de SSO se rechazaron y retiraron por versiones, sin usarlas en esta ruta.

El origen y sus datos históricos quedan como retención de recuperación, con la escritura Mitos congelada. Los recursos compartidos de otros productos y sus datos siguen intactos. Estimación aprobada: USD 60–80/mes de infraestructura y USD 5–15 temporales según la capacidad de release; IA, imágenes, voz, tokens y créditos quedan excluidos. Es una estimación de capacidad, no una factura medida. No hay NAT, ALB, Redis ni standby permanentes.

## Único paso pendiente del taller

Los dos asistentes editoriales que se pausaron siguen detenidos. La revisión automática rechazó SIGCONT porque sus tareas existentes podrían consumir créditos de IA o producir efectos externos. Se pidió autorización humana específica para reanudarlos; no se interpreta una autorización de infraestructura como respuesta a esa pregunta. Sus archivos y configuraciones ya están preservados y preparados para AWS. La web y su pipeline permanecen operativos mientras se resuelve esa autorización.
