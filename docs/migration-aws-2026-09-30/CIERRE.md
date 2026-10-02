# Cierre operativo de la migración

La web fue aceptada en AWS el 2026-10-02 a las 16:36 UTC. RDS es el único writer. Apex y www usan alias A/AAAA de Route 53 a CloudFront; el dominio también quedó registrado en AWS, con privacidad y renovación automática. Se conserva temporalmente el puente del origen para cachés DNS anteriores.

## Evidencia ya ejecutada

- Copia final y paridad completa de 21 tablas, 13 secuencias y esquema; 596 mitos y los 41 muiscas conservados. Las seis tablas sin consumidor de la app siguen sin modificarse en el origen.
- 5.715 objetos históricos verificados por bytes, hash y versión; originales, guiones, freezes y todas las ramas conservados en los respaldos privados.
- Portada pública revisada en móvil 390 px y escritorio 1.440 px: sin desborde ni imágenes visibles fallidas. Imágenes servidas desde `media.mitosdecolombia.com`.
- Cuentas y sesiones: registro, ingreso, cierre, cookie Secure/HttpOnly/SameSite, revocación y rechazo de CSRF. Fixtures propios eliminados.
- Administración: crear, editar y revalidar un mito ficticio en RDS, verificarlo públicamente y retirarlo. No se llamó IA.
- Compra: precio COP 119.900, identidad y firma de producción, retorno canónico y orden en RDS. La muestra se retiró sin abrir el modal ni llamar al proveedor productivo. La compra sandbox real y su voucher se validaron antes del corte.
- Callback: firma de producción y captura exacta cuerpo/firma/hash en SQS desde CDN, puente y DNS público. Firma inválida rechazada; sólo muestras propias eliminadas. Workers de administración y pagos arrancados con el mismo digest, sin reinicios ni OOM.

## Taller local

`runtime/workshop-env.mjs` sólo se activa con el marcador local ignorado. Comprueba la cuenta y la aceptación, carga las credenciales del runtime en memoria, exige el RDS propio y usa TLS con CA/hostname verificados. `runtime/workshop-tunnel.mjs` mantiene el túnel SSM local 15433 mediante launchd usando el perfil existente. No se abre RDS al público. Las claves de IA existentes se conservan y no se incluyen en el presupuesto.

Los scripts existentes usan los adaptadores `runtime/postgres.mjs`, `runtime/workshop-postgres.mjs` y `runtime/storage.mjs`. Las ediciones históricas conservan sus freezes: sus GET/HEAD al host Blob auditado se resuelven a la copia exacta en el CDN propio. No se reescribe material pagado. Para scripts CommonJS históricos, migrar su conexión al adaptador antes de usarlos; el seed destructivo nunca es parte de una publicación.

Los 14 talleres conservados pasaron lectura TLS con rol `mitos_app`, 596 mitos y los 41 muiscas; cada uno insertó un fixture y revirtió la transacción. S3/CDN pasó escritura, lectura por bytes y retiro versionado de una muestra. Un asset histórico leyó su hash exacto desde AWS usando la URL conservada del freeze. El túnel mantiene actividad por SELECT 1 para evitar expiración por inactividad. Recibo: `receipts/local-workshops-qa.json`.

## Comprobaciones de cierre todavía pendientes

Primer release automático desde main y refresco del snapshot RDS; recuperación de imagen sobre la misma RDS; reanudación de los dos asistentes pausados, pendiente de autorización específica por revisión automática; propagación DNS completa y retiro por allowlist de las dependencias Mitos anteriores. No borrar el proyecto Neon compartido ni sus tablas ajenas.
