# Metodología editorial para carruseles de mitos

## Resultado esperado

Cada mito produce un carrusel de 8 a 14 láminas verticales de 1080 × 1350 px. La publicación conserva la identidad de Mitos de Colombia —Metamorphous para voz editorial, Readex Pro para lectura— pero su secuencia, ritmo, color y composición cambian entre mitos.

La variedad no depende de improvisar cada post desde cero. El sistema separa tres decisiones:

1. El agente editorial comprime el mito y decide cuántas láminas necesita, qué dice cada una, qué función narrativa cumple y qué activo usa.
2. El compositor escoge aleatoriamente una plantilla aprobada compatible con esa función.
3. El renderizador produce los PNG finales y bloquea dimensiones, cortes o archivos incompletos.

## Contrato narrativo

- 8 láminas: relato breve con pocos giros.
- 9 a 11: relato medio con origen, desarrollo, giro y desenlace.
- 12 a 14: relato largo cuya comprensión perdería precisión si se comprime más.
- La portada siempre usa la imagen vertical canónica como protagonista. Sólo muestra el nombre del mito y, cuando aporta contexto, la comunidad o cultura.
- Las dos imágenes canónicas se usan una vez cada una.
- Una tercera imagen se genera únicamente si existe una escena o detalle narrativo ausente. Debe mantener materiales, paleta, iluminación y lenguaje artesanal de las dos referencias, sin copiarlas.
- Un mapa cuenta como lámina visual, no como ficha de texto. Se usa cuando el territorio ayuda a comprender el mito.
- Imágenes de otro mito, otra comunidad o una portada comunitaria son recursos extraordinarios; requieren aprobación explícita y no entran en la rotación normal.
- Cada lámina tipográfica desarrolla un momento del relato, aunque conserve una
  sola idea central. Las 10 fichas breves admiten hasta 32 palabras, las 10
  medias hasta 54 y las 10 narrativas hasta 78.
- Incluso el mito más corto incluye por lo menos cinco fichas de relato; si no
  necesita mapa, conserva seis. Al menos dos fichas son de densidad media o
  narrativa. Con 11 o más secuencias debe haber por lo menos tres fichas medias
  o narrativas.
- Las tres imágenes, cuando existen, se distribuyen como hitos: la primera abre,
  la segunda aparece cerca del centro y la tercera en el último tercio. Entre
  dos imágenes deben existir al menos tres láminas completas.
- Un mapa nunca queda pegado a una imagen. Se introduce después de que el relato
  ya abrió una pregunta territorial y funciona como una pausa visual.

## Biblioteca aprobada

La biblioteca contiene 85 plantillas 4:5:

| Familia | Cantidad | Uso |
| --- | ---: | --- |
| Portada | 10 | Identidad y entrada |
| Tipográfica | 30 | Desarrollo, contexto, pausas, símbolos y cierre |
| Imagen secundaria | 20 | La segunda escena canónica |
| Imagen terciaria | 20 | La escena nueva o detalle de clímax |
| Mapa | 5 | Atlas, coordenadas, localizador, ruta y topografía |

Las 85 están aprobadas bajo la revisión visual `v8`. Cada registro conserva un
contrato verificable de lienzo 1080 × 1350, proporción 4:5, zona segura,
retícula compartida y revisión a tamaño nativo. La revisión `v8` unifica la retícula, el material
editorial y la jerarquía de lectura, pero no uniforma las composiciones:

- las portadas conservan la imagen vertical como protagonista y reducen el
  texto a título y comunidad;
- las fichas tipográficas reservan zonas de lectura reales para cuerpos breves,
  medios y narrativos;
- las imágenes secundarias y terciarias separan escena, rótulo y desarrollo
  para evitar colisiones;
- los mapas aumentan la presencia del pin y subordinan el nombre del lugar a la
  cartografía;
- las imágenes se sirven desde su archivo nativo y las escenas horizontales se
  mantienen en marcos panorámicos, sin ampliarlas desde miniaturas;
- los mapas emplean teselas reales de OpenStreetMap u OpenTopoMap a su tamaño
  nativo, con atribución visible y sin filtros que borren topónimos;
- la profundidad se construye con planos, bordes y espacio; las sombras
  decorativas y los velos que apagan una imagen quedan fuera del sistema;
- una textura material muy tenue conecta las familias sin recurrir a adornos
  repetidos;
- un sello de origen, marcas de registro y un folio de secuencia construyen la
  marca visual del carrusel;
- esos signos se distribuyen en cinco tratamientos —riel izquierdo, esquina,
  riel derecho, línea base y registro— para evitar que la marca se convierta en
  una plantilla repetida.
- cada pieza de texto y marca expone un rol editorial verificable; el control
  geométrico bloquea cruces entre título, cuerpo, folio, sello y riel;
- el mismo control se ejecuta primero sobre las 85 plantillas y después sobre
  el carrusel ya compuesto con sus textos definitivos.

Las 30 tipográficas se dividen en tres capacidades:

- **Breve:** titular, gesto gráfico y desarrollo de hasta 32 palabras.
- **Media:** titular más explicación de hasta 54 palabras.
- **Narrativa:** jerarquía menor, cuerpo legible y hasta 78 palabras para conservar un tramo de la historia que no debe reducirse a eslogan.

La capacidad cuenta el conjunto de titular y cuerpo. El compositor valida ambas
piezas antes de escoger una plantilla.

Dos fichas narrativas no pueden aparecer consecutivamente. El carrusel recupera aire con una imagen, un mapa o una ficha breve.

Una plantilla queda aprobada sólo si cumple:

- jerarquía tipográfica visible a tamaño móvil;
- cuerpo narrativo de 28–34 px como objetivo a 1080 px de ancho, con un piso
  absoluto de 26 px para detalles secundarios;
- interlineado de 0.96–1.05 en titulares de exhibición y de 1.40–1.48 en
  párrafos, ajustado según longitud y ancho de columna;
- texto dentro del lienzo y sin glifos cortados;
- masa visual distribuida sobre una retícula reconocible: el centrado y la
  asimetría deben ser deliberados, nunca consecuencia de un bloque anclado por
  accidente al borde superior;
- encuadre que respeta al protagonista;
- contraste suficiente;
- zona segura editorial;
- en mapas, pin inequívoco y rótulo conectado al punto; el topónimo actúa como
  contexto y nunca compite en escala con la cartografía;
- una composición distinguible de las demás;
- adaptación a contenido real, no sólo al texto de muestra;
- estado `approved` en la biblioteca canónica.

## Cómo decide el sistema

El agente Bedrock entrega la arquitectura narrativa. No escoge un diseño concreto: define `kind`, `narrative_role`, `design_role`, `text_density`, texto, activo y necesidad de tercera imagen.

El compositor aplica después una aleatoriedad controlada:

- sólo usa plantillas aprobadas;
- prioriza coincidencia de función narrativa o intención de diseño;
- no repite una plantilla dentro del carrusel;
- evita tres paletas iguales consecutivas;
- evita dos fichas tipográficas silenciosas seguidas;
- evita dos fichas de densidad narrativa seguidas;
- evita repetir el mismo tratamiento de marca en dos láminas consecutivas;
- exige cuerpo narrativo visible en las 30 plantillas tipográficas;
- separa las imágenes por un mínimo de cuatro posiciones de secuencia;
- evita que un mapa quede inmediatamente antes o después de una imagen;
- obliga a extender el carrusel a por lo menos 10 láminas cuando existe una
  tercera imagen;
- cruza la cantidad real de palabras con la capacidad declarada por cada plantilla;
- respeta el máximo de caracteres declarado por folios y rieles sensibles;
- reduce la probabilidad de usar plantillas presentes en el historial reciente;
- usa una semilla para poder reproducir exactamente una composición aprobada.

Así, dos mitos pueden compartir sistema sin verse como variaciones de la misma maqueta.

## Flujo operativo

1. Preparar el mito y sus dos imágenes canónicas.
2. Ejecutar el plan editorial:

   ```bash
   npm run instagram:plan -- --slug <slug>
   ```

3. Revisar hechos, síntesis, alt text y brief de la tercera imagen.
4. Generar la tercera imagen sólo si el plan la exige.
5. Resolver plantillas con una semilla:

   ```bash
     npm run instagram:compose -- \
       --plan artifacts/instagram/<slug>/plan.json \
       --copy artifacts/instagram/<slug>/copy.json \
       --output artifacts/instagram/<slug>/composition-v8.json \
       --seed <semilla> \
       --record
   ```

6. Revisar el contacto visual. Si una semilla es válida pero el ritmo no funciona, se cambia la semilla; no se deforma una plantilla para salvar una mala secuencia.
7. Renderizar:

   ```bash
   npm run instagram:render:editorial -- --slug <slug> --edition v8
   ```

8. Ejecutar pruebas, geometría visual y QA de publicación.

## Bachué: composición revisada

Bachué quedó resuelto en 12 secuencias. La versión de contenido `v4` se conserva
sin reescribir el mito; la revisión `v8` vuelve a componerlo con la biblioteca
visual mejorada y la semilla reproducible `bachue-v8-1`:

1. Portada con la imagen vertical.
2. El territorio antes de la primera casa.
3. Atlas territorial de Iguaque.
4. La aparición como campo de palabras.
5. Segunda imagen: Bachué sale acompañada.
6. Farachogua y el nombre conservado por las crónicas.
7. La multiplicación de las familias en cascada.
8. La enseñanza como doble columna.
9. La vejez y el regreso como voz oral.
10. Tercera imagen: entrada al agua y transformación, sin texto sobre la escena.
11. Lectura del regreso en una retícula de cierre.
12. Pregunta final.

La composición usa doce plantillas distintas. Las imágenes ocupan las
secuencias 1, 5 y 10; el mapa ocupa la 3. Así ninguna escena visual sustituye el
desarrollo narrativo que le corresponde al carrusel.
