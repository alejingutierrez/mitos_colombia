# Carruseles como relatos ilustrados

**Proceso vigente, adoptado por el usuario el 22 de septiembre de 2026.**
Este es el flujo predeterminado para los carruseles nuevos. Las notas históricas
y los comandos anteriores se conservan para reproducibilidad.

Taller local en
`/design-system/instagram-story`. La implementación pública del sitio no cambia.

## Secuencia de trabajo vigente

1. Inventariar las imágenes del mito y revisar su acta, guion y biblia visual.
2. Preparar diez láminas: portada con solo el título, siete momentos narrativos,
   cierre e invitación a leer. Revisar el contenido visible, no solo los ids de
   nudos: el texto editorial de portada conservado en JSON no se imprime.
3. Usar Asimovian y Noto Sans Display, la paleta aprobada y las imágenes del
   archivo. Elegir entre cinco variantes por tipo y comparar el carrusel completo.
4. Resolver el contraste con ubicación, encuadre y tinta antes de recurrir a
   sombras. Revisar rostros, imágenes protagonistas, párrafos y lectura en móvil.
5. Guardar el guion. Exportar a una nueva `prepared-NN`; el QA bloquea contraste
   insuficiente, imágenes incompletas, desbordamientos y cruces. Para revisar
   cambios de plantillas, `npm run instagram:variants` verifica las 50 láminas
   de Bachué y `npm run instagram:test` comprueba el contrato del pipeline.
6. Versionar fuentes, decisiones, iconos pagados y freezes; conservar los PNG y
   ZIP regenerables en `output/instagram/`. La aprobación del proceso no aprueba
   automáticamente un mito, una imagen nueva ni su publicación.

La referencia visual verificada es Bachué, en `prepared-119` a `prepared-123`.
Los demás mitos requieren revisión editorial y visual propia. La conexión del
planificador con Bedrock tiene pruebas locales; no se ha validado una llamada
real del nuevo prompt al proveedor.

## Contrato actual: diez láminas y veinticinco versiones

Desde la revisión de variantes del 19 de septiembre de 2026, todo carrusel
nuevo contiene **exactamente diez láminas**. Esta decisión reemplaza el rango
8–14 y el cierre combinado descritos en las notas históricas de abajo.

| Posición | Tipo visual | Versiones |
|---|---|---|
| 1 | Portada | A sangre, Cielo abierto, Tipográfica, Lateral, Manifiesto |
| 2–8 | Slide 1 · Escena | Cinemática, Luz lateral, Contracampo, Horizonte, Nota de campo |
| 2–8 | Slide 2 · Detalle | Acercamiento, Nota al pie, Revelación, Diagonal, Resonancia |
| 9 | Cierre | Pregunta, Contrapunto, Umbral, Colofón, Memoria |
| 10 | Invitación a leer | Continúa, Señal, Índice, Postal, Puerta abierta |

Los tipos visuales Slide 1 y Slide 2 son familias reutilizables dentro del
relato; no reemplazan las funciones narrativas de origen, giro o clímax.
El cierre concluye la reflexión; la invitación tiene su propia lámina y muestra
la ruta exacta `/mitos/<slug>` junto al dominio. No se añade una lámina 11.

El contrato está en el validador compartido, el prompt y el esquema del
planificador. Las láminas 9 y 10 son tipográficas; la regla que prohíbe pausas
consecutivas se aplica al arco anterior. Se mantiene al menos 60 % de imágenes,
con acción y consecuencia en láminas distintas.

**Referencia Bachué:** se agrupan aparición y primer hogar; crecimiento y
poblamiento; envejecimiento y regreso. Se mantienen los 15 nudos sin omisiones,
7 imágenes distintas y los mismos límites de palabras. Una portada tipográfica
conserva 6 imágenes, suficientes para el contrato.

El panel Diseño muestra las cinco variantes del tipo actual como miniaturas
reales. Elegir otra composición conserva textos e imagen; las portadas
puramente tipográficas guardan la selección de imagen para recuperarla al
volver. El catálogo `?variants=1` muestra las cinco versiones completas (50 láminas),
con ampliación y navegación; `&view=families` agrupa las 25 composiciones por
tipo. Ambos usan el componente que produce el PNG final.

Los borradores de diez láminas se guardan en una clave de navegador versionada
`:ten-v1`. El borrador anterior no se sobrescribe y puede descargarse desde el
taller. La adaptación a diez no recorta automáticamente un guion del usuario.

Registro: `src/lib/instagram-story-variants.js`. Compositor:
`src/components/instagram/StoryVariant.js` y `variants.module.css`.

```bash
npm run instagram:variants  # cinco carruseles de referencia; verifica 50 láminas
npm run instagram:test
```

Registro histórico de la primera revisión de variantes: el carrusel mixto
de diez láminas se exportó en `prepared-37`.
La revisión de las 25 versiones está en
`output/instagram/variants/atlas-prepared-31/25-versiones.png`. Las ediciones
`prepared-31` a `prepared-35` pasan la comprobación geométrica de los 50 PNG.
Además pasan 60 pruebas de Instagram, 5 de tipografía y la prueba de interacción
en Chrome a 1440 × 1100 y 390 × 844: 25 opciones, persistencia, borrador anterior,
catálogo y descarga de diez láminas, sin errores de ejecución ni desbordamiento
horizontal. Otros mitos y sus titulares largos requieren su propia revisión;
la exportación bloquea texto que no cabe en la composición elegida.

## Dirección visual y paleta · revisión 2026-09-19

Se conservan los 25 ids y los textos completos. Las trece variantes que admiten
imagen usan el lienzo entero, sin velos, degradados, filtros, placas de color ni
fondos detrás de las palabras. La tipografía nativa usa una escala común de 0,8;
Asimovian y Noto Sans Display se mantienen. Los bloques se desplazan para dejar
libres los personajes y el centro de la escena. Se retiró la curva decorativa que
atravesaba algunos párrafos.

La paleta del adjunto del usuario está registrada en
`content/instagram/design/paleta-20260919/palette.json`: bosque `#273a2a`, selva
`#2e4b2d`, azul `#4c81dc`, cielo `#bdd0f9`, coral `#df745c`, amarillo `#f6cf5a`
y oliva `#b2aa7f`. Son valores aproximados muestreados de la captura convertida
a sRGB. Las siete combinaciones están disponibles en el taller. Azul y coral
usan tinta neutra casi negra para alcanzar contraste de texto normal; blanco
sobre azul no alcanza 4,5:1. Los pares de texto/fondo sólidos miden entre 4,76:1
y 8,11:1. Las fotografías conservan sus colores originales.

Sobre foto, las sombras difusas pertenecen exclusivamente a los trazos de la
tipografía, sin contorno. El QA de `story-photo-contrast.mjs` oculta el relleno
conservando el halo renderizado; una segunda captura aísla una máscara de tinta.
Se verifica el fondo efectivo en los píxeles opacos de cada bloque, con un mínimo
de 4,5:1. No se trata del contraste contra la fotografía desnuda ni de una
certificación de legibilidad de todos los bordes suavizados. Las pruebas de
control rechazan blanco sobre blanco sin halo, rechazan un halo blanco inútil y
aceptan negro sobre blanco o blanco con halo oscuro. No se exime a una sombra del
control por el mero hecho de existir.

La exportación conserva el control de geometría, imágenes rotas, fuentes y
superposiciones entre texto y adornos. El QA visual de Bachué corrigió además
textos que tapaban rostros: un resultado técnicamente válido puede seguir
necesitando ajustes de composición. Otros mitos y otros encuadres necesitan su
propia revisión visual. La exportación no detecta rostros automáticamente.

Evidencia final: `atlas-prepared-79` reúne `prepared-79`, `prepared-78`,
`prepared-81`, `prepared-82` y `prepared-83` (50 láminas). Entrega mixta:
`output/instagram/muiscas/bachue/prepared-80/bachue-carrusel.zip`.
60 pruebas del pipeline y 5 de tipografía aprobadas, más ESLint. Chrome aislado
verificó 25 cambios de variante, las siete paletas, conservación de textos y
borradores, descarga ZIP, ausencia de errores y anchura de escritorio/móvil
(1440×1100 y 390×844). La sesión del usuario no se usó para pruebas de escritura.

### Contraste y títulos · 2026-09-21

El nombre del mito usa escala independiente 1,05 frente al 0,8 anterior:
31,25 % mayor en las cinco portadas. Se ajusta la posición de la portada inferior
para conservar separación entre nombre, titular y párrafo. El resto mantiene su
tamaño: sobre foto, el cuerpo pasa a peso 600, tinta blanca y halo de mayor radio
limitado a las letras, con contorno de 2,4 px en títulos y 1,5 px en cuerpo.
La foto no lleva filtros ni capas de oscurecimiento.

QA: 50 láminas sin errores de contraste/geometría (`prepared-84` a `prepared-88`),
60 pruebas del pipeline y ESLint. Se comparó antes/después a 390 px y se probaron
las 25 opciones, persistencia y descarga en 1440×1100 y 390×844. Atlas:
`output/instagram/variants/atlas-prepared-84/25-versiones.png`. Entrega mixta:
`output/instagram/muiscas/bachue/prepared-90/bachue-carrusel.zip`.

### Pruebas de dispersión de sombra

`?myth=bachue&community=muiscas&shadows=1` abre un comparador independiente:
referencia actual y cuatro pruebas sin contorno (A suave, B equilibrada, C amplia,
D atmosférica). Permite recorrer las siete imágenes y alternar tamaño de móvil
con vista amplia. Conserva imagen, texto, peso y composición para aislar el efecto.
Los presets están en `StoryShadowGallery.js`, con estilos encapsulados en
`shadows.module.css`. El usuario eligió D (atmosférica), ahora aplicada en `variants.module.css`.
La revisión amplía la dispersión a 8–72 px en títulos y 8–48 px en textos
pequeños. Las capas se centran en las letras, sin desplazamiento vertical ni
trazo. La ubicación en portada añade dos capas de 8 px para conservar contraste
sobre cielos claros. Cuerpo sobre fotografía mínimo 32 px; marca, folio y etiquetas 24 px.
Se reajustaron las posiciones para evitar cruces con numeración y adornos.
El comparador muestra el resultado aplicado a la izquierda; D usa directamente
el mismo estilo para evitar diferencias con la exportación. A, B y C conservan
las pruebas anteriores. No se modifican los textos ni el almacenamiento de borradores.

QA de esta dispersión: 50 láminas (`prepared-113`, `114`, `116`, `117`, `118`)
pasan geometría y contraste; las siete escenas y cuatro opciones pasan el
comparador en 1440×1100 y 390×844, sin errores de ejecución. ESLint pasa.
Atlas `atlas-prepared-113`; entrega de diez láminas `prepared-115`.
Las 60 pruebas del pipeline y la descarga del editor pasaron en la revisión
anterior; este cambio de sombras no modifica esos flujos.

## Notas históricas de la primera implementación

## Qué cambia

El guion antiguo recibía dos imágenes y una ranura para generar una tercera.
Las plantillas imponían recortes, zooms y capacidades que podían terminar
truncando el texto. Las imágenes eran excepciones entre fichas tipográficas.

Ahora la unidad es una **escena del relato**: una acción, sus nudos del acta,
una imagen identificada por su procedencia y la razón de usarla. El compositor
ofrece plantillas que conservan la imagen completa y plantillas a sangre con
foco ajustable. No reduce el cuerpo para encajar ni corta frases.

El inventario recorre **los 41 muiscas**. Lee sus manifiestos de keyframes,
trípticos y las fichas de biblia referenciadas en ellos; no mezcla mitos buscando
nombres parecidos. Resuelve también la migración de los archivos de tríptico a
`entrada.jpg`, `acto.jpg` y `huella.jpg`. Declara referencias ausentes y archivos
ilegibles. Un activo disponible no se convierte por ello en uno aprobado.

La versión inicial incluye el relato completo de Bachué: **12 láminas, 10
imágenes diferentes y 15/15 nudos cubiertos**, sin descartes narrativos. Esto
demuestra el generador; **no significa que los otros 40 carruseles estén
producidos ni aprobados**. Su archivo completo está accesible para prepararlos.

## Dirección editorial

- La evidencia y los deslindes del acta prevalecen sobre un guion o una biblia
  visual anterior. En Bachué se bloquean las antiguas escenas de entrega de
  semillas. Las correcciones se guardan en `content/instagram/asset-reviews/`.
- Entre 8 y 14 momentos. Entrada fotográfica o tipográfica, desarrollo causal, acción del
  clímax y consecuencia en momentos consecutivos, cierre relacionado con el mito.
- Cada nudo queda contado o tiene un descarte razonado. Los ids permiten
  auditar cobertura; **no prueban por sí solos fidelidad semántica**.
- Al menos 60 % de las láminas usa imágenes. Pueden ir seguidas: la separación
  depende del relato. Nunca dos pausas sin imagen consecutivas.
- Hasta 10 palabras / 76 caracteres en el titular y 38 palabras / 245 caracteres
  en el cuerpo. El control geométrico final puede exigir una redistribución
  editorial adicional; esos máximos no garantizan cabida en todas las proporciones.
- Caption, fuentes y textos alternativos son parte del guion. Los textos
  alternativos describen la imagen; la explicación editorial vive por separado.

## Diseño

Lienzo de 1080 × 1350. Asimovian para los titulares y Noto Sans Display para
lectura y controles, heredadas del layout raíz mediante `--font-display` y
`--font-body`. La primera implementación sustituyó estas fuentes por error;
la corrección restaura la identidad aprobada, sin fuentes paralelas en el taller. Papel claro, selva y río con pares de tinta
y fondo medidos: todos los colores de texto superan contraste 4,5:1. Sobre imágenes
a sangre, el texto siempre tiene una placa opaca del color de la paleta. El
cuerpo habitual es de 38–40 px en el archivo nativo.
La marca y el folio tienen su propio espacio.

El panel **Diseño** ofrece diez composiciones: tres portadas (imagen protagonista,
editorial y tipográfica), escena inmersiva, retrato a ambos lados, panorama,
pieza cuadrada, pausa ilustrada y cierre. La proporción y función filtran las
opciones compatibles. Las portadas tipográficas no exigen imagen; volver a una
portada fotográfica recupera la selección anterior. El color acompaña los giros
y el final, con tres paletas elegibles.

El selector incorpora **50 PNG abstractos nuevos**, generados mediante la API de
OpenAI con `gpt-image-2.5-sunburst`, calidad media y transparencia nativa.
Diez familias reúnen formas de origen, flujo, vínculo, cambio, territorio,
tiempo, memoria, paso, equilibrio y expansión. Son recursos gráficos compartidos,
sin atribución a una comunidad ni pretensión de representar símbolos tradicionales.

Las imágenes originales de 1024 × 1024 están en
`public/motifs/carousel/abstract-v4/`. Los prompts, parámetros y SHA-256 viven en
`content/instagram/iconography/abstract-v4/`. Se conserva cada original pagado;
la lámina puede mostrar su color o aplicar tinta mediante una máscara CSS, sin
modificar el PNG. La opción de tinta se activa por defecto en fondos oscuros.
Los 27 recursos anteriores siguen disponibles para leer guiones antiguos; los
borradores del navegador actualizan sus adornos sin alterar textos o imágenes.

La composición usa imágenes a sangre, columnas laterales y bandas continuas de
lectura, alternadas con títulos amplios y formas abstractas. El ajuste permite
llenar el espacio o conservar la imagen completa; el encuadre desplaza el foco.
Los PNG seleccionados se fijan por hash junto a las imágenes. La exportación
verifica que no cambien y sirve los bytes comprobados.

La revisión geométrica sigue bloqueando desbordamientos y cruces. Solo admite
superposición sobre una imagen de fondo cuando el texto queda dentro de una
placa opaca del color comprobado; no exime cruces entre textos o adornos.
El taller y el render usan **el mismo componente**. Los estilos globales del
sitio no pueden imponer a los títulos su color o peso.

## Operación

```bash
npm run instagram:studio
# Abrir http://127.0.0.1:3111/design-system/instagram-story

npm run instagram:story:inventory -- --community muiscas
npm run instagram:story:render -- --slug bachue

# Guion nuevo mediante el proveedor configurado; consume una petición al modelo.
npm run instagram:story:plan -- --slug bochica
# Puede añadirse --render para componer y exportar en la misma ejecución.

# Exportar un guion editado y descargado del taller:
npm run instagram:story:render -- --slug bachue --story /ruta/bachue-relato.json
npm run instagram:test
```

El taller permite recorrer las láminas, editar textos, elegir entre las imágenes
del mito, consultar evidencias y descargar guion o carrusel. Cambiar una imagen
exige escribir de nuevo su intención y su texto alternativo antes de exportar.
Los cambios se conservan en el navegador; **descargar el guion o exportar el
carrusel** los guarda como archivos. El almacenamiento del navegador no sustituye git.

El planificador usa la configuración local de Bedrock existente, sin proveedor
alternativo silencioso. Envía acta, guion y descripciones de activos; no envía los
binarios. Hasta tres intentos corrigen fallos de estructura y cobertura. El
resultado siempre es un borrador pendiente de revisión de texto e imagen.

El render necesita Google Chrome y la dependencia de desarrollo Playwright,
además del servidor local. Renderiza tres láminas a la vez, espera las fuentes y
la decodificación de las imágenes, mide geometría y bloquea cruces, faltantes o
desbordamientos. Los bytes de cada imagen se verifican contra su SHA-256 y se
fijan durante la captura. Un fallo conserva el diagnóstico, pero no entrega ZIP.

## Fuente, edición y salida

- `content/instagram/stories/<comunidad>/<mito>.json`: guion editorial fuente.
- `content/instagram/asset-reviews/`: exclusiones y motivos, sin borrar originales.
- `content/instagram/editions/<comunidad>/<mito>/prepared-NN/`: guion, composición
  y freeze inmutables. Cada exportación reserva un directorio nuevo.
- `output/instagram/<comunidad>/<mito>/prepared-NN/`: PNG, contact sheet,
  caption, alt text, manifiesto y ZIP. Salida regenerable; no se versiona.

El freeze registra la fuente, la selección, sus hashes y los archivos del motor
que produjeron la composición. Los borradores no se añaden al historial aprobado.
La aprobación editorial y la publicación siguen siendo decisiones separadas.
El exportador reutiliza el archivo y no escribe en PostgreSQL. La generación
de la colección abstracta es un proceso separado, ya completado.

Los endpoints y la página del taller están deshabilitados en producción. Las
API solo admiten el servidor local y rechazan orígenes externos. El catálogo
resuelve archivos dentro de `content/videos`, incluyendo la comprobación de
rutas reales para evitar enlaces simbólicos fuera del archivo visual.

## Relación con las versiones anteriores

La metodología anterior y los comandos v10 siguen disponibles para reproducir
ediciones existentes. El nuevo flujo se invoca explícitamente con
`instagram:story:*`; no interpreta planes legacy como relatos nuevos. Para el
taller, este documento sustituye las reglas antiguas de dos imágenes obligatorias,
tercera imagen generada, separación de tres fichas entre imágenes, 85 plantillas
e iconografía obligatoria. Permanecen la fidelidad cultural, la revisión humana,
la trazabilidad, el formato y la distinción entre borrador y publicación.

Verificación inicial: 53 pruebas del pipeline (incluido el corpus completo,
colisiones de activos, hashes y freezes), build del sitio y exportación local de
Bachué. Se verificaron navegación, edición, selección de imágenes, evidencias y
descargas desde el taller a 1440 × 1100 y 390 × 844, sin errores de ejecución ni
desbordamiento horizontal. La primera edición revisada fue `prepared-07`; las
anteriores se conservan como registro de iteración. La prueba
en vivo del nuevo prompt con Bedrock requiere autorización específica para
enviar el material editorial; las pruebas del contrato y reparación usan un
proveedor simulado.

Actualización visual: 56 pruebas del pipeline; tres modos de portada, adornos,
paletas y controles de encuadre. Se comprueba persistencia al recargar, navegación,
edición, validación y exportación PNG/ZIP desde el taller en escritorio y móvil.
Las exportaciones continúan creando preparaciones nuevas, sin sobrescribir las
ediciones anteriores. Las composiciones largas de otros mitos aún necesitan
revisión editorial y geométrica antes de exportar.

Ediciones de la revisión visual: `prepared-11` (portada tipográfica, exportada
desde la interfaz), `prepared-16` (portada editorial) y `prepared-17` (imagen
protagonista y dirección visual completa). Los PNG anteriores se conservan.

Revisión abstracta v4: 50 originales distintos, transparencia y márgenes
comprobados. `prepared-20` contiene la nueva dirección visual en 12 láminas;
`prepared-21` verifica la portada tipográfica mediante descarga desde la interfaz.
Se verificaron los 50 botones, filtros por familia, tinta de paleta, ajuste de
imagen, fuentes cargadas, persistencia y exportación en escritorio y móvil.

Cierre de verificación v4: **58 pruebas de Instagram y 5 de tipografía pasan**,
además de ESLint sobre los archivos modificados. `prepared-23` comprueba la
portada editorial; `prepared-24`, imagen completa en portada y escena, fuera
de las bandas de texto. Las tres portadas pasan la medición nativa de 1080 × 1350.

Entrega final de Bachué: `prepared-25`, con 12 PNG, índice, caption, textos
alternativos y ZIP. Conserva el guion de referencia y 10 imágenes distintas.

### Portadas y comparación completa · 21 de septiembre

Las cinco portadas muestran únicamente `story.title`. Se conservan los campos
editoriales de la fuente, pero el subtítulo, cuerpo, marca, territorio, folio y
motivo ya no se imprimen en la portada. El inspector ofrece editar el título y
oculta controles de adorno para esta familia.

En Bachué se colocó el título sobre zonas de contraste natural: portada 1 sobre
agua con una sombra única de 16 px al 50 %; portadas 2 y 4 oscuras sobre cielo,
sin sombra. Sus contrastes mínimos son 4,97, 5,39 y 5,71:1. Son posiciones
verificadas con este paisaje, no una garantía para imágenes o títulos distintos.
Las portadas 3 y 5 usan los pares de color sólidos de la paleta. La sombra
atmosférica sigue en los textos de las láminas interiores.

`?variants=1` muestra cinco carruseles completos (50 láminas). `&view=families`
agrupa 25 alternativas por familia. Cada miniatura abre un diálogo con navegación
anterior/siguiente, cierre y Escape. Se verificaron ambas vistas, texto único
en las cinco portadas y controles en 1600×1100 y 390×844. Sin errores de ejecución.
Las 50 exportaciones de `prepared-119` a `prepared-123` pasan geometría y contraste;
atlas `atlas-prepared-120`. Pasan 60 pruebas y ESLint.
