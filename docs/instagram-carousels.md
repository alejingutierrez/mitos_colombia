# Metodología de carruseles de Instagram

## Objetivo

Convertir cada mito en una narración breve para Instagram sin reducirlo a una
sinopsis genérica. Cada publicación debe sentirse parte de **Mitos de Colombia**
y, al mismo tiempo, tener una estructura visual claramente distinta de las
publicaciones cercanas.

El entregable de cada mito es:

- un plan editorial trazable;
- entre 8 y 14 láminas de 1080 × 1350 px (4:5);
- las dos imágenes canónicas usadas una sola vez;
- una tercera imagen opcional que cubra un vacío narrativo real;
- textos alternativos, caption y 3–7 hashtags;
- un registro de plantilla y activos para impedir repeticiones.

## Qué permanece y qué cambia

### Invariantes de marca

- Canvas 4:5, 1080 × 1350 px.
- Zona segura de 72 px a los lados, 72 px arriba y 96 px abajo.
- Serif editorial para titulares y sans serif para lectura.
- Papel, fibra, cartón, tinta oscura y un acento dorado contenido.
- Firma `MITOS DE COLOMBIA`, nombre del mito y folio `01 / 11`.
- Una idea por lámina, contraste AA como mínimo y texto legible en móvil.
- Imágenes sin texto generado: la tipografía se compone de forma determinista.

### Variables de cada publicación

- Plantilla de secuencia.
- Tipo de portada: imagen, frase, símbolo o territorio.
- Cadencia entre imagen, tipografía, contexto y silencio.
- Tres o más fondos dentro de la familia de marca.
- Dirección de lectura, encuadres, escala tipográfica y motivo gráfico.
- Número de láminas y lugar del clímax.

La consistencia vive en los tokens; la diferencia vive en la dramaturgia y la
puesta en página.

### Contrato de riqueza visual

- Incluso en un relato corto hay al menos cuatro fichas de historia. Con 11 o
  más secuencias, al menos tres son de densidad media o narrativa.
- Las fichas breves admiten 32 palabras, las medias 54 y las narrativas 78.
- Las imágenes se separan por un mínimo de cuatro posiciones: la portada abre,
  la segunda escena cae cerca del centro y la tercera en el último tercio.
- Al menos cinco composiciones diferentes por carrusel.
- Escala tipográfica real: microtexto de 18–24 px, lectura de 28–38 px,
  titulares de 56–120 px y palabras monumentales de hasta 260 px.
- Alternar alineaciones, posiciones, recortes, orientación y densidad; no
  centrar todo.
- Las láminas sin fotografía deben tener un dispositivo visual: territorio,
  símbolo, diagrama, multiplicación, tríptico, objeto o sistema de bloques.
- No usar líneas curvas decorativas como firma automática. Los recursos
  gráficos deben explicar ritmo, jerarquía o contenido.
- Un mismo color de fondo nunca aparece tres veces seguidas.

## Cómo decidir la longitud

No se cuenta el número de palabras del mito para llenar láminas. Primero se
identifican sus giros narrativos:

1. Gancho.
2. Territorio o estado inicial.
3. Aparición o incidente.
4. Desarrollo (dos a cinco movimientos).
5. Giro o transformación.
6. Clímax.
7. Significado.
8. Cierre.

Se parte de ocho láminas. Se suma una sólo cuando existe uno de estos elementos:

- una segunda transformación que cambia la lectura;
- un desplazamiento territorial indispensable;
- una distinción entre versión y evidencia histórica;
- un retorno o consecuencia que no cabe junto al clímax;
- una enseñanza comunitaria específica.

Guía práctica:

- Mito de un solo arco: 8–9 láminas.
- Mito medio con un giro y un retorno: 10–11.
- Mito largo con versiones o varios cambios: 12–14.

Si una lámina sólo repite lo anterior, se elimina. Catorce es un límite, no una
meta.

## Modelo editorial por lámina

- **Imagen:** una escena completa, un detalle o un cambio de escala. El texto
  superpuesto es opcional y muy breve.
- **Tipográfica:** un momento narrativo con una idea central; 32, 54 o 78
  palabras según su densidad aprobada.
- **Territorio:** ubicación verificada, expresada con tipografía, coordenadas o
  un mapa propio. No es una captura de un mapa comercial.
- **Contexto:** diferencia con cuidado relato, fuente histórica e
  interpretación.
- **Cierre:** una idea que perdura o una pregunta ligada al mito. No se usa
  “comenta y comparte” como cierre automático.

El carrusel completo suele contener entre 180 y 420 palabras. No reproduce todo
el mito, pero sí debe poder leerse como una historia autónoma y siempre enlaza a
la lectura larga.

## Política de imágenes

### Dos imágenes canónicas

Las dos imágenes actuales del mito se usan exactamente una vez dentro del
carrusel. No se recicla el mismo archivo con otro recorte para simular variedad.

### Tercera imagen

Se crea sólo cuando responde a una pregunta concreta: **¿qué escena, detalle o
transformación esencial aún no se ve?**

La generación debe:

- recibir las dos imágenes canónicas como referencias de identidad, materiales,
  paleta y tratamiento cultural;
- construir una escena nueva, no una versión del mismo encuadre;
- respetar la dirección de maqueta física de papel artesanal fotografiada;
- salir sin texto, logos ni marco;
- producirse en 4:5;
- quedar vinculada únicamente a ese mito.

Bedrock decide si la imagen hace falta y redacta el brief. El generador visual
vigente del proyecto produce la imagen; Bedrock no se usa como generador.

### Activos extraordinarios

Una portada comunitaria o una imagen de otro mito sólo puede entrar si hace
posible una relación editorial que no puede expresarse con tipografía. Reglas:

- máximo un activo prestado por carrusel;
- procedencia y crédito obligatorios;
- no usarlo en los 40 posts siguientes;
- máximo tres usos históricos;
- nunca quitarle al mito dueño su propia imagen de portada.

Por defecto, el agente no recibe estos activos y no puede escogerlos.

## Antirrepetición

El historial de publicaciones es un archivo JSONL. Antes de planear:

- la misma plantilla no puede repetirse dentro de los últimos 20 posts;
- el mismo motivo gráfico no puede repetirse en los últimos 3;
- el mismo modo de portada no aparece más de dos veces seguidas;
- una imagen canónica sólo pertenece al post de su mito;
- una tercera imagen es exclusiva del mito para el que se generó;
- un layout no debe ocupar tres láminas consecutivas.

El sistema cae de una restricción estricta a una rotación de plantilla si el
catálogo todavía no tiene suficiente historia, pero nunca permite reutilizar un
activo dentro del mismo carrusel.

## Biblioteca inicial de 20 plantillas

1. `umbral_de_agua` — entrada lenta desde el territorio.
2. `secuencia_serpentina` — curvas, retorno y transformación.
3. `archivo_fragmentado` — expediente, notas y hallazgos.
4. `mapa_de_ecos` — cada movimiento es una coordenada.
5. `testimonio_oral` — voz, pausas y frases contadas.
6. `ciclo_cosmico` — ascenso y cierre circular.
7. `expediente_del_territorio` — paisaje y evidencia en capas.
8. `doble_tiempo` — relato y lectura contemporánea.
9. `anatomia_del_simbolo` — un símbolo organiza la secuencia.
10. `camino_de_regreso` — el desenlace abre la historia.
11. `coro_de_voces` — varias voces sostienen una idea.
12. `noche_y_presagio` — contraste alto y revelación tardía.
13. `objeto_sagrado` — un material activa la memoria.
14. `retrato_en_capas` — personaje, gesto, entorno y legado.
15. `cronica_de_lugar` — el territorio entra antes que el personaje.
16. `preguntas_al_mito` — giros construidos como preguntas precisas.
17. `ritual_de_color` — cambios narrativos mediante bloques cromáticos.
18. `margen_anotado` — folios, apostillas y observaciones.
19. `paisaje_vertical` — profundidad territorial como eje.
20. `latido_y_silencio` — impacto y respiración alternados.

La fuente ejecutable está en
`scripts/instagram/lib/templates.mjs`.

## Flujo de producción

### 1. Preparación

Copiar sólo las credenciales necesarias desde ODA Storefront a `.env` local:

```bash
npm run instagram:env:copy
```

El script no imprime secretos, no los lleva a Git y deja el archivo con permisos
`0600`.

Si existe un perfil AWS local válido, es preferible a una clave estática:

```bash
npm run instagram:env:copy -- --profile oda-comarca
```

Cuando se configura `INSTAGRAM_BEDROCK_PROFILE`, el cliente ignora las
credenciales estáticas copiadas y usa el proveedor local de AWS.

Después de confirmar el perfil, se pueden retirar las copias de credenciales
estáticas y conservar sólo el perfil:

```bash
npm run instagram:env:copy -- --profile-only
```

El modelo puede fijarse de forma explícita sin editar secretos:

```bash
npm run instagram:env:copy -- \
  --profile oda-comarca \
  --model us.anthropic.claude-sonnet-4-6
```

### 2. Plan editorial

```bash
npm run instagram:plan -- --slug bachue
```

El planificador:

- lee el mito editorial vigente desde Neon;
- carga las dos imágenes canónicas para que el modelo pueda verlas;
- filtra las plantillas según el historial;
- fuerza una salida estructurada;
- valida longitud, orden, presupuesto de imágenes, textos alternativos y
  ausencia de reutilización;
- reintenta una vez si Bedrock incumple el contrato.

### 3. Generación de la tercera imagen

Sólo si `plan.generated_image.needed` es verdadero. Se usan las dos imágenes
canónicas como referencias y se conserva el prompt final junto al artefacto.

### 4. Render determinista

```bash
npm run instagram:compose -- \
  --plan artifacts/instagram/bachue/plan-v4.json \
  --copy artifacts/instagram/bachue/copy-v4.json \
  --output artifacts/instagram/bachue/composition-v8.json \
  --seed bachue-v8-1

npm run instagram:render:editorial -- \
  --slug bachue \
  --edition v8
```

Se producen PNG 1080 × 1350, contact sheet, caption, textos alternativos y
manifest.

### 5. Control de calidad

Una publicación no está lista hasta pasar cuatro puertas:

1. **Editorial:** el relato se entiende sin haber leído la web.
2. **Factual y cultural:** no inventa detalles ni confunde versión, crónica e
   interpretación.
3. **Visual:** no hay repeticiones, recortes torpes, texto pequeño, contraste
   insuficiente ni cruces entre título, cuerpo, imagen y marcas editoriales. La
   geometría se comprueba tanto con el contenido de muestra como con el texto
   definitivo de la composición.
4. **Operativa:** 8–14 archivos, todos 4:5, orden correcto, caption, alt text y
   créditos.

Después de publicar se agrega una línea al historial con `slug`, fecha,
`template_id`, motivo, paleta, modo de portada y activos usados.

## Definición de terminado

Un carrusel está terminado cuando el plan proviene de Bedrock y pasó la
validación local, la tercera imagen —si existe— fue revisada visualmente, todos
los PNG miden 1080 × 1350, las 85 plantillas conservan su geometría aprobada, el
contact sheet fue aprobado y el historial quedó actualizado. Generar archivos
sin estas comprobaciones no cuenta como producción.
