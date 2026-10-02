> Referencia de la propuesta anterior. Sustituida por SPEC.md tras la solicitud del usuario de reducir costos. No es el diseño recomendado vigente.

# Spec de migración completa de Mitos de Colombia a AWS

Fecha: **30 de septiembre de 2026**, America/Bogota. Auditoría de lectura: 30 de septiembre por la noche; el recibo conserva la fecha UTC del 1 de octubre.

Estado: **propuesta técnica lista para revisión; implementación y corte no iniciados**. Este expediente contiene diagnóstico, decisiones recomendadas, requisitos, presupuesto, entregables y puertas de aceptación. No crea recursos, cambia DNS, publica contenido, ejecuta generación ni retira servicios.

## 1. Resultado esperado

Mitos de Colombia operará en la cuenta **907264907058**, perfil local `colombiaprojects`, junto a RAG y Cocina, con infraestructura propia. El dominio público seguirá siendo **https://www.mitosdecolombia.com**, con sus URL, diseño y contenido conservados.

La migración estará completa cuando la web, API, administración, datos publicados y editoriales, archivos, narraciones, cuentas, pedidos, trabajos, secretos, respaldos y despliegues funcionen en destino; el taller tenga almacenamiento durable y herramientas conectadas a destino; y Vercel, Blob y Neon dejen de ser dependencias operativas de Mitos. Habrá evidencia de recuperación y de funcionamiento público, además del despliegue exitoso.

La propuesta predeterminada prioriza redundancia en producción. El presupuesto aún no tiene un límite fijado por el usuario: las cifras de la sección 14 son estimaciones para revisar, **no autorización de gasto**.

### Requisitos verificables

| ID | Requisito | Evidencia de aceptación |
|---|---|---|
| R01 | Recursos propios en la cuenta destino | Inventario de ARN, cuenta, región, tags, dependencias y permisos; auditoría de aislamiento PASS. |
| R02 | Contenido completo, actual e histórico | Manifiesto del universo aprobado, conteos, claves, hashes, relaciones y archivos; diferencias justificadas y registradas. |
| R03 | Todas las funciones actuales conservadas | Matriz de rutas y flujos: lectura, búsqueda, mapa, tarot, contacto, comentarios, cuentas, administración y taller. |
| R04 | Despliegue automático por Git | Merge a `main` → imagen inmutable → validación → despliegue → comprobación pública → recibo. |
| R05 | Contenido rápido en móvil | Pruebas en condiciones definidas y medición real de LCP, INP, CLS, TTFB, imágenes, audio y caché. |
| R06 | Recuperación comprobada | Restauración a recursos nuevos, comparación y ensayo de rollback de aplicación. |
| R07 | Cero dependencia operativa de proveedores retirados | Inventario de consumidores, hosts, credenciales y llamadas; bloqueos de prueba y período de observación. |
| R08 | Comercio e identidad preservados | Contraseñas hash, sesiones válidas, pedidos, firmas, importes, estados y marcadores de conversión íntegros. |
| R09 | Continuidad SEO y analítica | URL, redirecciones, canonical, sitemap, robots, metadatos, GA4/GTM y consentimiento verificados. |
| R10 | Taller completo y recuperable | Archivo de fuentes, freezes, selecciones, binarios necesarios, ramas y cambios locales; ensayo de recuperación. |

No se cambia el corpus, la dirección artística, el estado comercial ni el proveedor creativo por migrar. OpenAI, ElevenLabs, Bold, Google, búsqueda web y cartografía siguen siendo integraciones externas donde hoy cumplen esa función. «Completo en AWS» se refiere al alojamiento, persistencia y operación propios; no exige sustituir esos productos.

## 2. Diagnóstico y límites de la evidencia

Se leyeron `ESTADO.md`, las instrucciones del repo, la configuración de Next, el Dockerfile, acceso a datos, caché, almacenamiento, autenticación, pedidos, webhook, scripts de audio y documentación del taller. Se consultaron STS, servicios y bases de RAG/Cocina, CloudFront, Route 53, disponibilidad de PostgreSQL y el catálogo público de precios. Todas las consultas externas fueron de lectura; las consultas SQL se hicieron dentro de `BEGIN READ ONLY`.

Los recibos están en [inventario-lectura.json](inventario-lectura.json), [fuentes-locales.json](fuentes-locales.json) y [precios-catalogo.json](precios-catalogo.json). El inventario local se obtuvo con `.env` y `.env.local`; **P0 debe confirmar que corresponde al proyecto/branch y configuración efectivamente publicados en Vercel**. No se exportaron secretos ni filas con datos personales.

| Componente | Observado | Consecuencia |
|---|---|---|
| Aplicación | Next **16.2.10 declarado**, React 19; producción pública en Vercel | Se conserva Next; la referencia a Next 15 en instrucciones antiguas no dimensiona esta migración. |
| Repositorio | `alejingutierrez/mitos_colombia`, rama local `main`, muchos cambios vivos | La migración se implementará en rama/worktree aislado; no se desplegará el disco local completo. |
| CI/CD de Mitos | Sin archivos bajo `.github` en el árbol inspeccionado | Crear pipeline propio, no asumir que ya existe uno de AWS. |
| Base accesible | Neon PostgreSQL **17.11**, 59.072.512 bytes, 27 tablas | Usar la base viva; no reconstruir desde Excel ni SQLite históricos. |
| Catálogo | 596 filas en `myths`; 596 en `editorial_myths`; 51 comunidades, 6 regiones, 1.108 tags | Congelar el denominador al ejecutar; no usar los conteos antiguos de documentación como manifiesto final. |
| Medios estructurados | 1.260 `vertical_images`, 78 cartas, 5 banners, 182 narraciones, 143 lechos | Migrar todas las variantes y dependencias, incluidos tiempos de palabras, másters y asociaciones. |
| Comercio y participación | 6 usuarios, 6 sesiones, 1 pedido, 2 comentarios, 4 contactos | Conservar registros y estados sin revelar datos ni activar venta por migrar. |
| SEO | 746 filas `seo_pages` | Preservar payloads y referencias, además de las páginas renderizadas. |
| Blob accesible | **5.701 objetos**, **9.236.150.891 bytes**, 6 páginas de inventario | Copiar bytes existentes e historial; no volver a generar imágenes o audio. |
| Blob por familia | 2.100 mitos, 1.351 verticales, 652 cuadrados, 663 narraciones, 604 recibos históricos; además banners, tarot y otros | Los objetos que ya no salen en una página pueden sostener restauraciones o freezes. |
| Workspace | `content/` 5,2 GB, `output/` 9,7 GB, `artifacts/` 1,8 GB, `public/` 100 MB | Inventario por archivo y hash; estos tamaños se solapan conceptualmente y no sustituyen deduplicación. |
| RAG en destino | App Runner `rag-master`, `RUNNING`, `us-east-1`; RDS privada en VPC `vpc-0037b9506edf78e25` | Su servicio, red, DB y CloudFront quedan fuera del alcance de cambios. |
| Cocina en destino | Dos App Runner `RUNNING`, `us-east-2`; RDS privada en VPC `vpc-01c0681a4e1b125cb` | Tampoco se reutilizan ni se modifican sus recursos. |
| DNS destino | No apareció zona Route 53 con `mitos` en la consulta delimitada | Falta comprobar autoridad DNS, registrador y registros completos. |

### Hallazgos que cambian el diseño

1. **`@vercel/postgres` no es un cliente TCP genérico de RDS.** El paquete instalado usa `@neondatabase/serverless` y transporte Neon. Hay que sustituir el adaptador por `pg`, promover `pg` a dependencia de runtime y adaptar también los scripts. Cambiar únicamente el connection string no basta.
2. Se encontraron **41 archivos** con importación de Blob y **12** con importación de Postgres de Vercel bajo `src/` y `scripts/`. La eliminación de dependencia se comprobará por consumidores, no solo por `src/lib/db.js`.
3. El webhook Bold devuelve 200 y procesa con `after()`. Antes del corte necesita una recepción durable: un reinicio o deploy no debe perder un pago reconocido como recibido.
4. La autenticación limita intentos con un `Map` por proceso. Con varias réplicas necesita límites compartidos y una política de IP de cliente fiable.
5. `assertBedrockConfigured` acepta claves/perfiles/bearer pero no reconoce por sí solo el rol de tarea como configuración válida. Hay que habilitar y verificar la cadena de credenciales de runtime; no trasladar un bearer que pueda facturar en otra cuenta.
6. La caché actual usa `unstable_cache`, tags y revalidación. Dos servidores requieren caché e invalidación coordinadas.
7. La base contiene seis tablas sin consumidores encontrados en el código inspeccionado: `analysis_results`, `backlinks_checks`, `backlinks_messages`, `backlinks_prospects`, `insights`, `news_articles`. **Su propiedad está pendiente; no se autoriza copiar, congelar ni eliminar esas tablas por asociación con el mismo endpoint.**
8. El Dockerfile actual hace `npm install`, copia el árbol y no usa salida standalone; `.dockerignore` no excluye `content/`. Su imagen no es el artefacto de producción propuesto.
9. `docs/deploy-vercel.md` incluye un seed de arranque. Es documentación histórica; su importador destructivo está prohibido en esta migración.

Las sondas públicas dieron 200 en `/`, `/mitos`, `/tarot`, sitemap y robots. `/api/taxonomy` agotó el tiempo de una sonda y debe repetirse en P0; no se diagnostica un fallo permanente con ese resultado. Los tiempos del recibo son de una sola petición desde la máquina auditora, **no una línea base de rendimiento colombiano ni una revisión visual**.

## 3. Decisiones de arquitectura

**Recomendación: ECS Fargate + CloudFront + RDS PostgreSQL + S3, con caché compartida y colas propias.** Región principal `us-east-1`, dos zonas de disponibilidad admitidas para CloudFront VPC Origins. Ohio también sería viable; la presencia de RAG en Virginia facilita operación regional sin compartirle recursos. Antes de fijar subredes se elegirá CIDR sin solapamiento con las redes existentes.

| Alternativa | Evaluación | Decisión |
|---|---|---|
| App Runner propio | Coincide con servicios actuales; menor trabajo inicial. AWS cerró nuevas incorporaciones el 30/04/2026 y no prevé funciones nuevas, aunque mantiene servicios existentes. | No es la base recomendada para una instalación nueva. |
| ECS Fargate propio | Control de réplicas, red privada, separación de tareas y rollback; requiere IaC y pipeline explícitos. | **Elegida.** |
| Amplify o adaptador Next sobre Lambda | Puede simplificar hosting, pero añade otra capa de adaptación para ISR, imágenes, administración y tareas largas. | No se introduce en esta mudanza. |
| EC2 individual | Menor costo potencial; exige parcheo, operación y recuperación del servidor. | No cumple la propuesta de redundancia sin trabajo adicional. |

La recomendación de contenedores concuerda con la [orientación actual de AWS para App Runner](https://aws.amazon.com/apprunner/). ECS Express Mode puede evaluarse en P0 como forma de administrar ECS, pero solo si permite el mismo contrato de red, recursos y despliegue; la especificación se basa en recursos ECS/ALB explícitos.

```mermaid
flowchart TD
  U[Lectores y administración] --> DNS[Route 53 y ACM propios]
  DNS --> WEB[CloudFront web y WAF]
  DNS --> MEDIA[CloudFront media]
  WEB --> ALB[ALB privado de Mitos]
  WEB --> ASSETS[S3 de derivados y estáticos]
  MEDIA --> ASSETS
  ALB --> ECS[ECS Fargate: dos réplicas web]
  ECS --> DB[RDS PostgreSQL Multi-AZ]
  ECS --> CACHE[ElastiCache Valkey propio]
  ECS --> QUEUE[SQS y outbox]
  QUEUE --> PAY[Lambda de pagos y conciliación]
  QUEUE --> FLOW[Step Functions y tareas editoriales Fargate]
  PAY --> DB
  FLOW --> DB
  FLOW --> ARCHIVE[S3 privado: fuentes y másters]
  FLOW --> ASSETS
  ECS --> EXT[Bold, Bedrock, búsqueda y otros proveedores]
  FLOW --> EXT
  GIT[GitHub Actions por OIDC] --> ECR[ECR: imágenes por SHA y digest]
  ECR --> ECS
  GIT --> IAC[CloudFormation propio]
```

## 4. Recursos y aislamiento

Prefijo lógico `mitos-colombia`; entornos `prod` y `staging`. Tags obligatorios: `Project=mitos-colombia`, `Environment`, `ManagedBy=CloudFormation`, `Owner` y `CostCenter`. No se buscará una DB/VPC por nombres ambiguos ni se usará la primera de una lista como fallback.

| Recurso | Configuración inicial recomendada |
|---|---|
| VPC | Propia; dos subredes públicas para NAT, dos privadas de aplicación y dos aisladas de datos. DNS interno habilitado. |
| Entrada | ALB interno en dos AZ, target groups propios; CloudFront VPC Origin como entrada pública. |
| Salida | Dos NAT zonales, uno por AZ, para Bold, Google, OpenAI, ElevenLabs y búsqueda. Gateway endpoint S3 propio; añadir endpoints de pago solo con análisis de uso/costo. |
| ECS | Cluster propio; servicio web mínimo 2, máximo inicial 6 tareas, repartidas entre AZ; 0,5 vCPU y 2 GiB por tarea, Linux x86_64. Target tracking inicial CPU 60 %, cooldown de salida 60 s y entrada 300 s; ajustar con carga medida. |
| ECR | Repositorios web/worker propios; tags SHA inmutables, promoción por digest, retención de releases recuperables. |
| RDS | PostgreSQL **17.11** disponible en la consulta regional; `db.t4g.small`, 20 GiB gp3, Multi-AZ de instancia con standby, cifrado, privada, protección de borrado. No es un clúster de tres instancias. |
| Caché | ElastiCache Valkey compatible con protocolo Redis; dos `cache.t4g.micro`, primario y réplica en AZ diferentes, failover, cifrado y autenticación. Confirmar soporte de tamaño/versión en P0 y usar `small` si el working set medido lo requiere. |
| Archivos | Tres buckets versionados: derivados/estáticos, archivo privado, operación/respaldos. Block Public Access en todos; lectura pública únicamente por CloudFront OAC donde corresponda. |
| Colas | SQS de pagos y de trabajos editoriales, cada una con DLQ; SSE y políticas limitadas a sus roles. |
| Procesamiento | Lambda para tareas breves de pagos/outbox; Step Functions y ECS RunTask para producción y render largos, con límites de concurrencia. |
| Configuración | Secrets Manager para secretos; SSM Parameter Store o parámetros IaC para configuración no secreta. Claves KMS propias para datos sensibles y archivo. |
| Edge/DNS | Distribuciones web y media propias; ACM de CloudFront en `us-east-1`; zona Route 53 propia; funciones/reglas de redirección, logs y WAF exclusivos. |
| Observación | Log groups, dashboard, alarmas, canarios y presupuesto por proyecto; retenciones explícitas. |

La VPC necesita un Internet Gateway como requisito de VPC Origins, aunque este **no transporta la entrada privada hacia el ALB**. El SG del ALB permitirá el SG administrado de CloudFront después de la creación; el SG web solo aceptará el ALB y los SG de DB/caché solo los consumidores propios. No se usarán triggers origin-request/origin-response de Lambda@Edge con esta topología. Fuente: [requisitos y restricciones de VPC Origins](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-vpc-origins.html).

Se pueden utilizar el proveedor OIDC ya existente y los servicios generales de cuenta de AWS; los **roles, policies, recursos de ejecución, datos y despliegue serán de Mitos**. Las cuotas de cuenta/región de Bedrock, Fargate, Lambda y APIs siguen siendo compartidas por AWS: aislamiento de recursos no garantiza aislamiento de cuotas. Se fijarán límites por proyecto y se comprobará margen para RAG/Cocina sin reducir sus reservas.

IaC recomendada: CloudFormation, siguiendo la operación existente de RAG/Cocina. Stacks separados `network`, `data`, `storage`, `runtime`, `jobs`, `edge`, `observability` y `staging`. `DeletionPolicy: Retain`/`UpdateReplacePolicy: Retain` y protección de stack donde haya datos; ningún cambio ordinario podrá sustituir RDS ni vaciar buckets. El rol CI estará limitado a stacks/roles/prefijos propios y a un `iam:PassRole` acotado.

## 5. Universo de datos y migración Postgres

### Tablas candidatas de Mitos

| Grupo | Tablas |
|---|---|
| Catálogo y relaciones | `myths`, `regions`, `communities`, `tags`, `myth_tags`, `myth_keywords` |
| Dossiers/editorial | `editorial_myths`, `editorial_myth_tags`, `editorial_myth_keywords`, `editorial_myth_research` |
| Medios | `vertical_images`, `tarot_cards`, `home_banners`, `myth_narrations`, `narration_beds` |
| SEO/participación | `seo_pages`, `comments`, `contact_messages` |
| Comercio | `tarot_users`, `tarot_user_sessions`, `tarot_orders` |

Son **21 tablas candidatas**, no una allowlist definitiva. P0 confirmará propietarios, dependencias, vistas, secuencias, constraints, índices, triggers, funciones y consumidores externos. Clasificará las otras seis tablas con evidencia. Si alguna también pertenece a Mitos se incorpora expresamente al manifiesto; si es ajena permanece en origen. No se congela la base compartida completa ni se retira el proyecto Neon completo sin esa clasificación.

### Método predeterminado

Dado el tamaño lógico observado, usar **`pg_dump`/`pg_restore` de PostgreSQL 17** desde una tarea de migración propia en AWS, con un ensayo previo. El dump seleccionará el universo aprobado e incluirá las dependencias verificadas; no se asumirá que `--table` exporta por sí solo todos los objetos necesarios. Los roles propietarios de Neon se mapearán a roles de Mitos, sin importar privilegios de proveedor ni superusuario.

La pausa propuesta afecta escrituras: hasta **15 minutos**, sujeta al tiempo del ensayo. La lectura continuará en la instalación antigua mientras se hace la copia final. Si la pausa medida excede el límite acordado, la puerta de corte permanece cerrada y se adopta replicación lógica/CDC después de validar permisos, replica identity, slots, DDL y secuencias. No añadir DMS permanente a una DB de este tamaño por defecto. Fuentes: [métodos nativos de migración a RDS](https://docs.aws.amazon.com/dms/latest/sbs/chap-manageddatabases.postgresql-rds-postgresql-full-load.html) y [replicación saliente de Neon](https://neon.com/blog/stream-data-from-neon-to-external-data-sources-via-logical-replication).

Procedimiento: inventario → respaldo cifrado → restauración de ensayo a DB nueva → validación → freeze de escritores propios → copia final consistente → comparación → cambio de writer → apertura. Los procesos locales, editoriales, API, administración y automatizaciones están incluidos como escritores. Registrar `T_freeze`, `T_cutover` y `T_retired` en UTC y hora local.

Preservar IDs, slugs, textos, fuentes, prompts, fechas, coordenadas, arrays/JSON, timings, hash de audio, hashes de contraseñas, sesiones, referencias e importes de pedidos. Comprobar secuencias al final, constraints y relaciones, incluso las referencias de `vertical_images`/`tarot_cards` que no tengan FK. Cambiar URLs solo mediante el mapa de activos versionado, con diff reversible y sin alterar el contenido editorial.

La comparación tendrá conteos por tabla, claves ordenadas, digest de filas con serialización definida, esquema y relaciones. El corte exige **cero diferencias inexplicadas**. Los archivos de comparación no publicarán emails, direcciones, tokens, hashes de contraseñas ni cuerpos de pedidos.

**Prohibido:** `npm run db:import:pg`, reseed de Excel, truncates, una copia antigua `mitos.db`, regeneración de contenido y sincronización destructiva del catálogo. Migraciones posteriores: versionadas, una sola ejecución por release, lock y registro; modelo expand/contract. Sacar los `CREATE/ALTER` dispersos de las rutas hacia migraciones controladas y quitar permisos DDL al runtime.

Acceso a RDS con `pg.Pool` y TLS verificado con CA RDS. Roles separados: lectura/publicación según ruta, trabajo, migración y recuperación. Pool inicial máximo 5 conexiones por proceso web, con budget global que cubra hasta **12 tareas durante el surge de un deploy**, además de workers y migración. Ajustar a `max_connections` real, reservar margen administrativo y probar reconexión durante failover. No introducir RDS Proxy sin medir una necesidad.

## 6. Medios, archivo y taller

Inventario final será la **unión** de referencias de BD, `public/`, Blob completo, fuentes, manifests, freezes, selecciones, recibos y binarios únicos de `content/`, `output/` y `artifacts/`. Resolver duplicados por SHA-256 sin perder nombres, relaciones ni procedencia. Un ETag no sustituye el hash de contenido.

| Destino | Material | Acceso |
|---|---|---|
| S3 derivados/estáticos | Imágenes publicadas, variantes web, MP3, fuentes tipográficas, iconos, motivos y archivos de runtime | OAC + CloudFront; publicación explícita por prefijo. |
| S3 archivo privado | Másters, WAV, fuentes de investigación, guiones, biblias, keyframes, preparados, freezes y material con derechos | Roles de taller/worker; URLs firmadas breves cuando hagan falta. |
| S3 operación | Dumps, bundles Git, overlays de trabajo, evidencias, paquetes de build y recibos | Privado, cifrado, roles de despliegue/recuperación. |

La clasificación conserva el acceso que necesitan los consumidores; un recurso hoy usado públicamente no se vuelve privado sin adaptar y comprobar sus consumidores. Los objetos de `triptych-history` se preservan íntegros. Los derechos de investigación no cambian: lo privado no se publica por haberlo copiado a AWS.

Crear `asset-map` con URL original, objeto/version origen disponible, clave/version destino, tamaño, MIME, SHA-256, dimensiones/duración, rol editorial y permisos. Copia reanudable, con checkpoints, reintentos y verificación de cada objeto. El manifiesto completo y los dumps estarán en S3 privado; el repo guardará resúmenes/recibos sin datos sensibles.

**Nunca modificar `freeze.json` ni una carpeta `prepared-NN` histórica.** El mapa externo resolverá sus URL antiguas a bytes equivalentes en AWS cuando el taller lea o reproduzca una edición. Preparaciones nuevas usarán recursos de AWS y una nueva carpeta. No se pierden semilla, prompt, proveedor, imagen de referencia, selección o hashes.

Preservar ramas sin fusionar y cambios locales mediante bundles y overlays sin secretos; inventariar worktrees sin borrarlos. La prueba de recuperación reconstruirá un mito con sus fuentes y una edición de diez láminas desde lo archivado, **sin volver a pagar generación**. Los binarios que costaron créditos y no existen en otro respaldo se conservan aunque hoy estén ignorados por Git. `output/`, `artifacts/` y `.mp4` no se incorporan a Git por esta migración.

El estudio vigente `/design-system/instagram-story` mantiene el flujo local, tipografías/paleta, diez láminas, variantes, QA y prepares inmutables. No se publica el editor local ni se meten sus 5 GB de fuentes dentro del contenedor web. AWS almacenará y ejecutará las tareas apropiadas; el workspace sigue siendo una herramienta de edición, conectado a almacenamiento destino con perfil/rol propio y descargas por manifiesto. La imagen del worker fija las versiones de FFmpeg, ImageMagick, Playwright/Chromium y fuentes que requieran los scripts; su QA compara renders y audio, y el contenedor web no carga esas herramientas.

Los hosts de Blob no son transferibles al dominio propio. Se actualizarán referencias operativas a **`media.mitosdecolombia.com`** y se conservará el origen durante una ventana de compatibilidad medida. Las referencias históricas inmutables se resolverán con el mapa. Antes de retirar Blob se comprobarán enlaces vivos conocidos y dependencias; no se promete redirigir un hostname que controla Vercel.

## 7. Cambios necesarios en la aplicación

| Superficie | Cambio requerido |
|---|---|
| `src/lib/db.js` y scripts Postgres | Adaptador `pg`; interfaz de queries/transactions coherente; SQLite solo local/build controlado; producción falla explícitamente si falta DB. |
| Generación/ingesta/auditoría Blob | Adaptador de storage S3 para put/get/list/delete/presign; URLs propias; borrado limitado a objetos/versiones y propiedad aprobados. |
| `next.config.js` | Standalone, hosts media propios, handler de caché compartida, ID de despliegue; conservar formatos AVIF/WebP y excluir taller. |
| Docker/lockfile | Imagen multietapa con `npm ci`, runtime no-root y Node LTS soportado elegido en implementación; dependencias nativas verificadas. |
| Caché/revalidación | Invalidación distribuida de tags/rutas + purga CDN cuando haya caché edge; versionar namespace por release y revisión de contenido. |
| API admin larga | Aceptar trabajo y devolver ID; progreso persistido, reintentos y cancelación; no depender del proceso web durante generaciones. |
| Autenticación | Mantener cookie/hash/sesión y UX; rate limit distribuido; validar Host/Origin e IP tras los proxies; sin defaults `admin/admin` en producción. |
| Bedrock | Credenciales por rol de tarea, cuenta/región verificadas y perfil de inferencia propio; eliminar prioridad silenciosa de credenciales ajenas. |
| SEO/configuración | URL pública explícita; no derivar canonical de hostname interno ni de `VERCEL_URL`. |
| Operación | `/api/health/live`, `/api/health/ready` y endpoint de versión sin secretos con SHA/digest/esquema. |

El build no tendrá credenciales productivas ni acceso público a RDS. Se preparará un **snapshot de datos publicados, sin datos personales**, para las lecturas requeridas por prerender/`generateStaticParams`; CI obtiene solo ese objeto/prefijo. El snapshot lleva versión/digest, se incorpora únicamente a la fase build y nunca es fallback de producción. Si el ensayo demuestra que una ruta debe generarse al primer acceso, se ajusta esa ruta y se precalienta; no se vuelve dinámica toda la web para resolver el pipeline.

`NEXT_PUBLIC_*` se fijan al construir. El artefacto promovido tendrá las mismas constantes públicas; staging debe desactivar analítica y proveedores reales con configuración de servidor, sin recompilar silenciosamente al promover. La imagen no contiene `.env`, credenciales AWS, SQLite de respaldo ni carpetas de producción visual. Configuración de arranque, permisos y perfil local rechazan cuentas/regiones diferentes a las esperadas; desarrollo accede a la DB privada mediante tareas propias o un túnel SSM temporal, nunca abriendo RDS a Internet.

Para varias réplicas, usar build único, `deploymentId` por SHA y la misma clave de Server Actions si se usan. Retener assets de releases anteriores para sesiones abiertas. La caché compartida tendrá TTL, límite de tamaño, política de memoria, coordinación de tags y protección frente a estampidas. Sus fallos degradan a lectura de RDS con límite de carga, sin responder contenido vacío ni contaminar versiones. Referencia: [self-hosting y coordinación de instancias en Next.js](https://nextjs.org/docs/app/guides/self-hosting), contrastada con la guía instalada en `node_modules/next/dist/docs/`.

## 8. Contenido rápido y política de caché

Velocidad es un requisito medible. Copiar la web a otra nube no garantiza mejorarla: la arquitectura y los bytes entregados se probarán.

| Tráfico | Origen/política inicial |
|---|---|
| JS/CSS con hash | S3 + CloudFront; un año `immutable`; publicados antes de admitir la nueva imagen. Prefijo de release y retención de anteriores. |
| Imágenes web | S3 + CDN; derivados existentes/nuevos por tamaño, AVIF/WebP, `srcset`/`sizes`, dimensiones explícitas; nombres inmutables. |
| MP3 público | S3 + CDN; Range/206 y seek verificados; `preload=none/metadata`; no descargar WAV al lector. |
| HTML público | ISR/caché compartida. Edge se habilita por whitelist después de pasar las pruebas HTML/RSC; TTL máximo inicial 60 s donde la ruta sea pública/cacheable. |
| API pública de catálogo | Cache solo para GET anónimo aprobado; clave conserva filtros, paginación y orden; TTL por frescura. |
| Búsqueda/mapa dinámicos | Query completa, límites y paginación; por defecto sin edge cache hasta medir cardinalidad. |
| Cuenta, checkout, pedidos, contacto, comentarios POST, admin, webhooks | Caché deshabilitada, `private/no-store`, TTL mínimo 0; cookies/auth/body encaminados sin reutilización entre usuarios. |
| Sitemap/robots | TTL corto y purga tras publicación; URL y visibilidad coherentes con el catálogo. |

CloudFront no debe asumir que `Vary` basta: conservar `_rsc` en la clave, los headers RSC/prefetch/router relevantes y los parámetros reales de cada ruta. Probar navegación cliente, prefetch y entrada directa en órdenes alternadas. No aplicar TTL mínimo positivo a rutas privadas ni guardar respuestas con `Set-Cookie`. La invalidación de Next por sí sola **no purga el CDN**; se invalidarán HTML y variantes RSC mediante evento/outbox con reintentos. Fuente: [CDN Caching de Next.js](https://nextjs.org/docs/app/guides/cdn-caching).

`/_next/image` requiere política por `url`, `w`, `q` y negociación de formato; no mezclar AVIF/WebP. La transición puede mantener el optimizador Next detrás de CDN. La salida preferida para medios publicados es generar variantes al ingerir, nunca bajo demanda en cada visita; ese cambio solo se adopta cuando preserve proporciones, foco y calidad del arte.

### Objetivos iniciales

| Métrica | Objetivo de aceptación |
|---|---|
| Disponibilidad de lectura | SLO 99,9 % mensual; verificado con canarios, no prometido por el número de recursos. |
| LCP móvil p75 | ≤ 2,5 s; muestra real suficiente después del corte. |
| INP móvil p75 / CLS | ≤ 200 ms / ≤ 0,1. |
| TTFB p95 | ≤ 300 ms para rutas públicas calientes aptas para edge; ≤ 800 ms para GET dinámico sin invocación IA, bajo carga acordada. |
| Imagen hero móvil | Presupuesto orientativo ≤ 300 KB y primera pantalla total ≤ 1 MB transferido, con excepciones artísticas medidas. |
| Caché estática/media | Hit ratio ≥ 95 % tras calentamiento de la prueba, reportado por familia. |
| Publicación | Cambio confirmado visible en todas las réplicas/CDN en ≤ 120 s; invalidación con estado verificable. |
| Audio | Inicio ≤ 1,5 s en red de prueba, seek funciona y no hay descarga de máster en la página. |

P0 obtiene línea base repetida desde Colombia, escritorio y móvil con viewport 390 px, red/CPU normalizadas y mismas rutas/medios. P5 prueba 25 req/s sostenidas 15 minutos y una ráfaga 75 req/s 2 minutos con mezcla de lectura, búsqueda y variantes; revisar contra tráfico real para no sobredimensionar. Menos de 0,5 % errores técnicos, sin timeouts generalizados, datos personales cruzados ni desbordamiento de conexiones. El sitio no debe empeorar más de 10 % frente a la línea base comparable; cada excepción queda documentada. Los objetivos de campo necesitan una ventana y tamaño de muestra: no se declaran alcanzados con Lighthouse solamente.

## 9. Pagos, trabajos y servicios externos

### Recepción durable de Bold

Flujo: cuerpo crudo → firma verificada → evento persistido/encolado → 2xx → worker → consulta de comprobante Bold → validación de referencia, moneda e importe → actualización transaccional → conversión según estado y marcadores existentes.

La persistencia precede al 2xx. Clave de deduplicación por proveedor/evento o hash estable, constraint en DB, protección frente a eventos repetidos/desordenados, reintentos exponenciales y DLQ. Los `VOID_*` se conservan. Si el comprobante todavía no existe, el trabajo se reprograma; no se convierte en rechazo ni desaparece. El cambio de estado comercial será idempotente; las llamadas externas no se describen como «exactamente una vez» por una garantía de SQS.

Para el corte habrá una recepción AWS propia provisional —HTTP API/Lambda de ingreso o equivalente— que ambos frontends puedan usar reenviando cuerpo y firma intactos. Se prueba y concilia antes del freeze. Mientras se copia la DB, se pausa procesamiento, no recepción; después de abrir RDS se drenan eventos. Así los callbacks que todavía lleguen a Vercel durante propagación DNS no se pierden. La vía provisional se retira cuando expire la compatibilidad.

Conservar flags y entorno real observado. Staging usa Bold test y datos sintéticos; no abre ventas, cobra, devuelve dinero ni emite conversiones productivas como parte de QA. Los marcadores de GA4 de pedidos existentes impiden reenviar compras históricas. Probar firma incorrecta, duplicado, monto incorrecto, demora, anulación, cambio de réplica y deploy durante procesamiento.

### Taller y generación

Trabajo persistido con ID, versión de input, hashes, proveedor/modelo, estado, lease, intento, costos y outputs. Estados mínimos: `QUEUED`, `RUNNING`, `SUCCEEDED`, `FAILED`, `CANCELLED`; distinguir producción, aprobación y publicación. No duplicar una llamada de pago cuando ya se recibió su resultado; timeout ambiguo exige conciliación antes de reintentar generación.

SQS/Step Functions admiten la tanda completa y la ejecutan con concurrencia configurable según cuota. Preservar el método V2 antes de nuevas comunidades, contraste con biblia y freezes nuevos. Ni el merge ni una cola vacía activan generación o publican material automáticamente. Migrar trabajos admitidos/pendientes con checkpoints; no iniciar campañas nuevas.

Bedrock usará rol y perfiles de inferencia de Mitos para atribución y límites. Validar región/modelos/cuotas y guard de cuenta; no fallback a cuenta de ODA/RAG/Cocina ni selección automática de modelo distinto. OpenAI de imagen y ElevenLabs de voz se mantienen, con secretos propios y consumo separado. Serper/cartografía y todas las llamadas de salida se inventarían. No se envían actas, corpus o imágenes a proveedores para probar infraestructura sin la autorización que corresponda al flujo vigente.

## 10. Despliegues automáticos

**Trigger ordinario: merge a `main`.** PR ejecuta checks; staging y producción usan GitHub Actions, OIDC y roles de Mitos. Nada de claves AWS permanentes en GitHub ni `vercel --prod` desde el workspace.

Pipeline requerido:

1. Checkout de SHA exacto; dependencias por lockfile; checks focalizados y contratos de datos/storage/caché/pagos. Escaneo de secretos de las instrucciones del repo.
2. Validar cuenta `907264907058`, región, stacks y recursos esperados. OIDC trust limitado al repo y environment reales, audiencia `sts.amazonaws.com`; verificar el formato `sub` del repositorio en vez de copiarlo a ciegas.
3. Obtener snapshot publicado autorizado; construir **una imagen**, etiquetar con SHA, obtener digest, escanear imagen y publicar a ECR. No incluir `.env`/taller.
4. Publicar estáticos inmutables a S3 y verificar referencias del build. Guardar manifiesto SHA → digest → assets → snapshot → versión de esquema.
5. Aplicar migración compatible mediante tarea propia y lock; no DDL concurrente en cada réplica.
6. Desplegar el digest candidato en staging con recursos/datos independientes; comprobar login sintético, rutas, imágenes, audio, RSC, mock/proveedor test y publicación/invalidation.
7. Promover el mismo digest a producción con rolling deployment ECS: mínimo 100 %, máximo 200 %, circuit breaker y alarmas. Antes del primer despliegue establecer una versión completada recuperable. Drenar requests y workers; trabajos largos no viven en el proceso web.
8. Esperar estabilidad, comprobar versión en todas las tareas y ejecutar smoke público. Validar, además de `RUNNING`, datos reales, recursos multimedia, sitemap y navegación. Precalentar las rutas importantes con concurrencia limitada.
9. Emitir recibo inmutable; si falla, marcar release fallido y revertir la imagen cuando el esquema sea compatible. La automatización no rebaja un esquema con escrituras nuevas.

Concurrencia por entorno, sin cancelar un deploy a mitad; timeout definido y bloqueo de una segunda migración simultánea. Los cambios de infraestructura se aplican por change set revisable; rechazar reemplazos de recursos de datos no incluidos expresamente. Retener al menos tres imágenes estables y assets de 30 días, además de releases fijados por recuperación.

El flujo automático después de `main` no exige confirmación manual en cada release ordinario. El **primer corte de proveedor/DNS**, los reemplazos de datos y el retiro sí tendrán una puerta operativa específica preparada para revisión. Esto no convierte un fallo rutinario de CI en permiso para saltarse validaciones.

Fuentes: [OIDC GitHub → AWS](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws) y [detección/rollback de despliegues ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-failure-detection.html).

## 11. DNS, SEO y continuidad pública

Crear zona propia después de obtener **todos** los registros del proveedor actual, incluyendo correo, TXT de verificaciones, CAA y DNSSEC. Probar la zona antes de delegar; tratar DS/DNSSEC con el registrador para evitar fallos de validación. El registro del dominio puede permanecer con su registrador actual; alojamiento DNS será Route 53.

Preparar `staging.mitosdecolombia.com`, restringido, `noindex` y fuera de sitemaps; no emitir compras ni analítica productiva. `media.mitosdecolombia.com` tendrá certificado y CDN propios. Mantener canonical `www`, redirección 301/308 del apex, enlaces heredados (`/post/*`, `/product-page/*`, `/todos-mitos/*`, `/tienda`, etc.) y parámetros de campañas.

Reducir TTL con anticipación y esperar el TTL anterior antes del corte; bajar TTL en el momento no invalida caches anteriores. Si delegar NS añade riesgo, el corte web inicial usa el DNS actual y la delegación completa se hace después, como hito separado requerido para cierre. No se transfieren correo ni registración a ciegas.

Crawler obtiene el conjunto entero de rutas de sitemap y sus redirecciones, no solo cinco muestras. Validar HTTP, canonical, robots, structured data, títulos, imágenes sociales, sitemap de imágenes y contraste catálogo/sitemap. Mantener propiedades de Search Console, IDs GA4/GTM y consentimiento; no se solicita cambio de dirección de sitio porque el dominio se conserva. Medir 404 y errores de medios antes/durante/después.

## 12. Respaldo, recuperación y observabilidad

RDS con PITR y retención inicial 35 días; snapshots propios antes del corte y cambios de datos. S3 versionado, checksums y retención de másters/historial sin borrado automático. Lifecycle solo para salidas temporales inequívocas después del inventario; no aplicar expiración genérica a `prepared-*`, freezes o fuentes. Copia de recuperación de DB y manifiestos críticos en `us-east-2`, con KMS y recursos también propios de Mitos; medir costo y restauración.

| Evento | Objetivo propuesto | Procedimiento |
|---|---|---|
| Release defectuoso | RTO ≤ 15 min; RPO 0 para escrituras conservadas | Revertir imagen sobre la DB actual, compatible con esquema. |
| Falla de réplica/AZ | Recuperación automática medida | ALB/ECS redistribuyen; failover RDS/caché y reconexión probados. |
| Corrupción/DB perdida | RTO ≤ 60 min; RPO ≤ 5 min como meta de PITR | Restaurar a DB nueva, validar y reconciliar escrituras antes de abrir. |
| Pérdida regional | RTO inicial ≤ 4 h; RPO ≤ 24 h de copia regional | Recuperar con IaC y copia propia; ensayo previo o límite marcado como no verificado. |
| Corte de proveedor | RPO **0 para escrituras aceptadas de Mitos** | Freeze/drenado más inbox durable; digest final y reconciliación. |

Estos tiempos son objetivos a comprobar, no garantías heredadas de AWS. Los ensayos producen duración real, diferencias y límites.

Dashboard: disponibilidad, 4xx/5xx, TTFB, target health, réplicas, CPU/memoria, pool DB, conexiones, almacenamiento, caché, revalidación, cola/edad/DLQ, pagos pendientes, generación y errores de medios. Logs con request/job/release ID y sin secretos/datos personales de compra. Live check mide proceso; readiness mide capacidad limitada y no invalida las réplicas sanas por una llamada externa de IA.

Alarmas propuestas: 5xx > 1 % durante 5 minutos con muestra mínima; targets sanos por debajo de 2; DB/caché sin margen; pagos en cola > 5 minutos; DLQ > 0; publicación sin invalidar > 120 s; variación de costo inesperada. Configurar destino de avisos con el usuario al implementar, sin suscripciones o mensajes a terceros en esta preparación. Recibos y canarios hacen visible un deploy fallido aunque GitHub haya terminado.

## 13. Plan de ejecución y puertas

| Fase | Trabajo y entregables | Puerta para avanzar |
|---|---|---|
| **P0 — cerrar inventario** | Confirmar configuración Vercel real, propietarios de 27 tablas, universo de activos/trabajos, DNS, secretos por nombre, versiones/cuotas, baseline, CIDR, costo y alcance Git. | Manifiestos con digest; ninguna dependencia crítica sin clasificar; presupuesto y pausa definidos. |
| **P1 — preparar aplicación** | Adaptadores pg/S3, caché, flags runtime, imagen mínima, build snapshot, endpoints de salud, credenciales por rol, migraciones y pruebas. | Build reproducible offline, contratos y pruebas de varias réplicas pasan. |
| **P2 — levantar destino** | IaC propia, staging, DB, storage, colas, roles OIDC, observación; guard/audit de recursos. | Aislamiento PASS y salud de RAG/Cocina igual a baseline. |
| **P3 — copiar y ensayar** | Copia completa de activos/archivo, DB de ensayo, mapa, restauración, pipeline, taller y recepción durable de webhook. | Paridad completa y copia recuperable; ensayo fija duración de freeze. |
| **P4 — QA funcional** | Todas las rutas, flujos y providers test, auth, pagos, SEO, imágenes/audio y edición/publicación de fixtures. | Matriz completa PASS, cero defectos que bloqueen corte. |
| **P5 — rendimiento y fallos** | Carga, baseline comparable, caché/RSC, cold start, caída réplica/AZ, deploy fallido, restauración y fin de worker. | Objetivos medidos o excepciones aceptadas; rollback ensayado. |
| **P6 — corte** | Freeze propios, inbox activo, dump final/diff, RDS writer, DNS/CDN, apertura controlada, smoke y recibos. | Paridad y conciliación; solo un writer activo; público correcto. |
| **P7 — observación** | 7 días iniciales, medición de campo según muestra, auditoría de dependencias, costo y salud de los tres proyectos. | Sin dependencia operativa de origen ni problemas de integridad; backups postcorte restaurados. |
| **P8 — retirar origen** | Desconectar integración Vercel, retirar deployment/Blob/credenciales propios, y solo tablas/proyecto Neon de propiedad probada; compatibilidad de medios y DNS cerrada. | Recuperación propia, allowlist exacta, ventana de compatibilidad cumplida, inventario residual y conciliación de gasto. |

Estimación inicial: **10–15 jornadas técnicas** hasta corte, más observación y compatibilidad de medios. No es calendario comprometido: P0 puede cambiar el esfuerzo por propiedad compartida, acceso DNS, tráfico, cuotas y trabajo editorial concurrente. Copias independientes pueden avanzar en paralelo; copia final, cambios de writer, DNS y retiro mantienen su orden.

### Runbook del corte

1. Confirmar SHA/digest aprobados, backups restaurables, recepciones probadas y personas responsables del corte/reversión. Conservar captura de configuración anterior.
2. Cerrar nuevas escrituras/checkouts/trabajos en origen, avisar mantenimiento dentro del producto; mantener lectura. Drenar trabajos admitidos y capturar callbacks en AWS. No bloquear tablas ajenas ni cambiar sus permisos.
3. Capturar baseline final y dump del universo aprobado; restaurar RDS y aplicar mapa de activos. Comparar hashes normalizando exclusivamente cambios declarados de URL/owner.
4. Si hay diferencias, aborto antes de abrir destino. Si pasa, registrar cambio de writer, activar workers destino, conciliar cola y abrir funciones según flags existentes.
5. Cambiar web a CloudFront, esperar propagación, precalentar, probar rutas completas y flujos críticos. El servidor antiguo sigue rechazando nuevas escrituras y reenviando callbacks durante compatibilidad.
6. Guardar recibo con cuenta, recursos, SHA/digest, esquema, DB, objetos, estado de cola, resultados públicos y tiempos. Iniciar observación; no retirar datos en el mismo paso.

### Reversión según el momento

Antes de la primera escritura en RDS, puede abortarse el corte y restaurar la admisión en origen después de conciliar inbox y jobs. Después de aceptar escrituras en RDS, **cambiar DNS a Vercel/Neon no es un rollback seguro**: dejaría registros nuevos atrás. Primero se usa rollback de imagen sobre RDS o recuperación dentro de AWS. Una vuelta a origen exige freeze, respaldo, sincronización inversa del universo propio, conciliación y paridad comprobadas, con un único writer; nunca se ejecuta automáticamente por un health check.

## 14. Presupuesto propuesto

Unidades del catálogo AWS consultado, `us-east-1`, 730 horas/mes, On-Demand; sin Free Tier, Savings Plans, impuestos o tipo de cambio. [precios-catalogo.json](precios-catalogo.json) conserva SKUs, unidades y vigencia de Fargate/RDS/Valkey/storage.

| Partida de producción redundante | Base mensual USD |
|---|---:|
| Web: 2 × (0,5 vCPU + 2 GiB) | 42,53 |
| RDS `db.t4g.small` Multi-AZ | 47,45 |
| RDS gp3 20 GiB Multi-AZ | 4,60 |
| Valkey: 2 × `cache.t4g.micro` | 18,69 |
| ALB: cargo horario, sin LCU | ≈ 16,43 |
| 2 NAT zonales, cargo horario | ≈ 65,70 |
| 2 IPv4 públicas de NAT | ≈ 7,30 |
| **Subtotal de capacidad continua** | **≈ 202,70** |
| CDN/WAF, LCU, logs, secretos/KMS, S3, backups/copia regional, colas, workers y transferencia | Variable; reservar inicialmente 40–120 |
| **Presupuesto orientativo de producción** | **≈ 245–325/mes** |

Ejemplo de precios de componentes de red: [ALB](https://aws.amazon.com/elasticloadbalancing/pricing/) y [VPC/NAT/IPv4](https://aws.amazon.com/vpc/pricing/). Las tarifas base de NAT/IPv4 deben reconfirmarse para Virginia en la cotización P0; no incluyen procesamiento por GB ni transferencia entre AZ. Cada GB de imágenes/audio se entrega por S3/CDN, no se proxyfica por NAT/web.

La reserva variable usa un escenario de planificación de **1 millón de requests CDN/mes, 100 GB de salida, 50 GB de archivo total, 5 GB de logs y actividad moderada de workers**; no son cifras observadas de tráfico. P0 sustituye esos supuestos por métricas de Vercel/Blob/analítica y tarifa regional de entrega. Los [planes flat-rate de CloudFront](https://aws.amazon.com/cloudfront/pricing/) se compararán con pago por uso sin contar dos veces WAF/DNS/logs ni repartir artificialmente beneficios entre proyectos. El valor es presupuesto, no cotización cerrada.

Staging independiente se presupuesta aparte: **≈ 40–80/mes** si se levanta en ventanas de prueba y se detiene fuera de ellas; dejar DB/red/ALB todo el mes puede superar ese rango. Definir ventanas y horas en P0. Migración/ensayos: reserva inicial **50–150 USD** por duplicación, restore y transferencias, más cargos de salida de Vercel/Neon que se medirán. El gasto normal actual de origen continúa hasta el retiro.

Alternativa económica, si el usuario la prefiere: una réplica web, RDS Single-AZ, caché simple y un NAT; referencia **120–180 USD/mes** bajo los mismos supuestos bajos de uso. Reduce resistencia a fallos y tiene recuperación con interrupción; no cumple el mismo contrato de HA. No cambiarla silenciosamente bajo presión de costo.

El presupuesto **excluye generación IA**, ElevenLabs, Bold, búsqueda externa y campañas; se controlan como partidas por trabajo/proveedor. Alarmas al 50/80/100 % del presupuesto y detección de anomalías; una alarma de AWS Budget no es un tope duro. Límite de admisión de generación independiente de lectura/pagos. No contratar Savings Plans antes de observar uso estable y validar tamaño.

## 15. Matriz mínima de QA y entrega

| Área | Pruebas obligatorias |
|---|---|
| Navegación | Home, índices/detalles de mitos, comunidades, regiones, categorías, rutas, mapa, filtros/paginación y aliases; entrada directa y navegación cliente. |
| Catálogo completo | Cada ruta del sitemap/manifest, HTTP, título/identidad/canonical; corpus y relaciones por conteo/digest. |
| Medios completos | 100 % de objetos con checksum; todas las referencias activas resolubles; dimensiones y MIME; imagen en móvil/escritorio; audio/Range/timings. |
| Editorial/admin | Autenticación, lectura, guardado, reload, publicación de fixture, revisión de imagen y revalidación entre réplicas. Ningún cambio de texto real por QA. |
| Participación | Contacto/comentario sintéticos, validación, persistencia y moderación; no enviar mensajes a terceros. |
| Cuentas/pedidos | Hash y sesiones preservados por digest privado; login sintético, acceso a pedido propio, intento de acceso ajeno, cookies/origin; flags comerciales idénticos. |
| Bold/GA4 | Fixtures/test: duplicado, orden de eventos, firma, importe, anulación, comprobante tardío, retry y deploy; compras históricas no reenviadas. |
| Taller | Recuperar fuentes/acta/biblia y edición congelada sin generación; exportar diez láminas, revisar móvil y conservar nuevo freeze cuando se prepara una nueva edición. |
| Caché/escala | Editar en una réplica y leer en otra; HTML/RSC alternados; filtros; no datos cruzados; fallo caché, DB reconectada y pools limitados. |
| Recuperación | Restore DB/archivo, versión vieja y assets vigentes, deploy fallido, proceso worker interrumpido y webhook preservado. |
| Aislamiento | Ningún ARN/env/secret/SG/endpoint de RAG/Cocina; diferencia de inventario de esos proyectos vacía y smoke igual a baseline. |

Entregables de implementación: IaC, workflows, adaptadores, scripts de inventario/copia/paridad/aislamiento/retiro, runbooks, manifests privados, recibos de builds/deploys/corte/restore, reporte de rutas y medios, resultados de rendimiento y costo. Todos identifican cuenta, región, SHA/digest, universo y fecha. Un `build` exitoso o un ECS `RUNNING` por sí solos no cierran R01–R10.

## 16. Pendientes explícitos para cerrar P0

- Confirmar límite mensual y preferencia de redundancia; la propuesta actual usa HA y costos separados.
- Confirmar propiedad/consumidores de las seis tablas no clasificadas, sin detener ni copiar proyectos ajenos.
- Vincular inventario local con el deployment/env actual de Vercel y congelar IDs/conteos/hashes finales.
- Obtener tráfico y salida reales, repetir la sonda de taxonomy y medir baseline colombiano.
- Revisar acceso DNS/registrador, zona completa, correo y DNSSEC; definir responsables y ventana de corte.
- Confirmar modelos/cuotas/credenciales actuales de todos los carriles; disponibilidad de rol propio y límites de Mitos.
- Inventariar automatizaciones/procesos y trabajos en curso, archivos únicos, ramas y worktrees; plan de archivo sin secretos.
- Ensayar selección de esquema/datos, copia y restore para fijar pausa de escrituras; comprobar staging/HA/caché y cotización final.
- Resolver compatibilidad de enlaces históricos de Blob antes de fijar fecha de retiro; ventana inicial orientativa 30 días, ampliable por consumidores comprobados.

Estos pendientes no impiden revisar el spec. Sí impiden tratar una implementación, corte, costo o retiro todavía no comprobados como completados.
