# Biblia chamí V1 · plan de tandas

**118 fichas** en cuatro capas, en el orden que fija el taller: personas →
animales → atrezo → mundo. Denominador en
`content/mitos-visuales/chami.v1.inventario.json`.

| capa | fichas | tandas |
|---|---|---|
| 1 · personas, fuerzas y colectivos | 36 | 3 |
| 2 · animales y criaturas | 24 | 2 |
| 3 · atrezo, objetos y plantas | 34 | 3 |
| 4 · arquitectura, paisaje y fenómenos | 24 | 2 |

## Tanda 01 · personas (hecha)

Doce fichas: seis tipos —hombre, mujer, mujer joven, niño, anciano, anciana— y
seis figuras nombradas: Karagabí, Karagabí rejuvenecido, el hijo de Karagabí, la
mujer de Karagabí, el primer hombre y el muchacho sirviente.

Congelada en `tanda-01-personas/freeze.v1.json`.

## Tres reglas del repo que hubo que corregir ANTES de generar

1. **`COMMUNITY_CRAFT.Chamí`** decía «montaña húmeda del eje cafetero»,
   «chaquira de colores en pechera» y «pintura corporal de jagua en trazos
   geométricos». Los tres contradicen la investigación: el corpus es de Río
   Frío, el okama de pechera es adorno contemporáneo, y la pinta de jagua
   identifica al grupo —un trazo genérico inventa una filiación—.
2. **`REGION_CRAFT.Andina`** habría metido «páramo altoandino, frailejones,
   niebla fría y geometría muisca sobria». Es la contaminación muisca por otra
   vía. Se añadió **«Cordillera Occidental»**.
3. **La época `prehispanico`** prohíbe el metal, y con ello **el hacha con la
   que Karagabí abre la palma de la que sale la gente**. El corpus chamí trae
   hacha, machete, serrucho y hasta pesos y centavos: se añadió
   **`mitico_chami`**, tiempo mítico narrado en 1945.

## Los tres pilotos, y qué enseñó cada uno

**v1 · rechazado.** El formato, el vestuario y las prohibiciones salieron bien
—ni torso desnudo, ni plumas, ni okama, ni nariguera— pero **los cuerpos
salieron esculpidos**: volumen anatómico, piel en degradado, cabeza modelada.
Es el mismo fallo que en wayuu costó una tanda entera.

**v2 · parcial.** Se añadió un **bloque de apertura** que declara la técnica
por encima de todo lo que venga después y ataca el cuerpo por su nombre:
«torso, brazos y piernas son RECORTES PLANOS con el canto del corte visible».
El cuerpo se arregló. **El rostro seguía con volumen pintado.**

**v3 · aprobado.** Regla específica de rostro: **óvalo plano de un solo tono
parejo, sin sombra ni luz dentro**, y encima el pelo, dos cejas, dos ojos
mínimos y una boca como piezas recortadas aparte, con la nariz insinuada por el
borde del recorte y nunca sombreada.

**La lección, para las tandas que siguen:** el modelo esculpe por defecto. No
basta con prohibir el volumen al final del prompt; hay que **abrir con la
técnica**, nombrar **el cuerpo** y nombrar **la cara** por separado, porque se
arreglan en pasos distintos.

18 imágenes generadas, 12 conservadas.

## Vestuario: la decisión y su razón

El corpus **no describe la hechura** de la ropa. Nombra telas sencillas, falda
de envolver, majagua blanca y chaquira blanca **en la cabeza y en las manos**.
Eso es lo que se dibuja, y el corte es decisión editorial declarada.

Queda fuera, por anacronismo o por falta de fuente: **okama y pechera de
chaquira contemporánea, raso y encaje, tocado de plumas, orejeras de disco,
nariguera y corona**.

Y una distinción que hay que sostener: Reichel anotó en 1945 que los chamí de
Corozal **ya vestían indumentaria europea**. Eso describe a **los narradores**,
no a los personajes del relato, que están en tiempo mítico. Por eso las fichas
de la biblia no van en ropa criolla —pero una lámina que quisiera representar
la recolección de 1945 sí tendría que ir así.

## Correcciones pendientes de esta tanda

- El **anciano** y la **anciana** traen algunas arrugas pintadas en la frente.
  La técnica pide que la edad se lea por proporción, postura y pelo blanco.
- **Karagabí rejuvenecido** debería leerse como la misma persona que Karagabí
  con otro cuerpo; hoy son dos rostros distintos. Revisar al cerrar la capa.

---

## Variante B · la corrección del vestuario

El editor dudó de que las figuras representaran a los chamí, y tenía razón.

**Qué salió mal en la variante A.** El corpus no describe la hechura de la ropa.
Descarté el okama y la pechera de chaquira por anacronismo, y en vez de ir a
buscar qué sí está documentado, **rellené el hueco con una camisa cruda
inventada**. El resultado era prudente y no representaba a nadie. Una decisión
editorial que produce una figura genérica no es cautela: es un vacío.

**Lo que dicen las fuentes, y que yo tenía sin usar.**

1. **Reichel 1945, en Corozal**, describe los cántaros antropomorfos con
   **«líneas incisas que representan la pintura facial»**. La pintura facial
   estaba viva **en el sitio y el año del corpus**. Excluirla fue el error.
2. **Robinson & Bridgman 1969, p. 174**, sobre los chamí del Calima: sus
   vestidos «no se diferencian de los que usan los campesinos colombianos»,
   pero **las mujeres escogen colores brillantes** y **se pintan** con lápices
   rojos o azules comprados en el pueblo o con una tintura vegetal amarilla que
   llaman **azafrán**.
3. **Chaves 1945, relato I**: chaquira blanca en la cabeza y en las manos, y la
   pinta de jagua como marca de grupo.

**Qué cambia en B:** entra la **pintura facial** en el repertorio documentado
—tres o cuatro líneas paralelas en cada pómulo y una línea vertical desde el
labio inferior—, la **paruma** pasa a color fuerte y saturado, la chaquira
blanca va en cabeza y muñecas, y la ropa de los hombres se nombra como
**majagua**. Los niños no llevan pintura.

**La decisión de fondo, que conviene tener a la vista.** Hay dos registros
posibles y elegí uno:

- el de los **narradores de 1945**, que vestían ropa comprada en el pueblo;
- el de la **autorrepresentación chamí viva** —paruma, jagua, chaquira—, que es
  continua con lo que Chaves documenta dentro del relato y con la pintura facial
  que Reichel encontró incisa en los cántaros.

La biblia ilustra **los mitos**, que están en tiempo mítico, no la recolección
de 1945. Por eso va el segundo registro. Una lámina que quisiera representar la
expedición de Chaves y Reichel sí tendría que ir con ropa de campesino.

30 imágenes generadas en total, 12 conservadas.

## Variante C · el okama, y cómo se usa sin copiarlo

El editor señaló que los chamí se visten también con collares de cuentas de
patrones muy específicos, y que algunos personajes deberían llevarlos.

Yo había excluido el okama dos veces: primero por anacronismo y después por
riesgo de apropiación. La primera razón no se sostenía —la chaquira está
documentada en el corpus de 1945— y la segunda **no era razón para omitir sino
para acotar**. La regla que ya había escrito para la jagua vale igual aquí:
**el lenguaje sí, el ejemplar no.**

**Qué entra:** el okama como pectoral ancho que cubre los hombros como una
esclavina, de tres o cuatro **bandas concéntricas** rematadas en un **fleco
corto**, construido como papel recortado —tiras planas superpuestas con el canto
visible, cuentas sugeridas con puntos mates, sin brillo ni relieve—.

**Qué no entra:** ningún patrón identificable. La geometría se limita a
**triángulos y rombos simples** alternando color banda por banda. Nada de
grecas complejas, figuras ni motivos reconocibles. En las fotografías que aportó
el editor esas piezas estaban **expuestas para la venta**: copiar un diseño real
sería copiarle el trabajo a una artesana concreta.

**Quién lo lleva, y por qué no todos.** El corpus distingue el diario de lo
arreglado: la mujer de Karagabí **«se arregló»** para el baile y él **«se adornó
bien bonito»** para llegar de forastero. Llevan okama la mujer de Karagabí,
Karagabí rejuvenecido, la mujer joven y la anciana. Van sin él Karagabí —cuya
autoridad se lee en la quietud—, su hijo, el primer hombre, el muchacho
sirviente y las figuras de tipo cotidiano. **Ese contraste es lo que le da
sentido a la pieza**: si la llevaran todos, dejaría de significar que alguien se
arregló.

42 imágenes generadas en total a lo largo de las tres variantes, 12 conservadas.

## Tanda 02 · personas 2 (hecha)

Los doce mortales con función en el relato: el hijo de la nutria, el pescador,
la viuda del monte, el hijo pescador, la mujer embijada, la mujer raptada, el
hijo del oso, los dos hermanos capturados, el vigilante disfrazado, el jefe
siebidá, el jefe erubidá y el hombre que cava el árbol.

**Sin pilotos**: la cadena quedó aprobada en la tanda 01 y las doce salieron a la
primera. 12 imágenes generadas, 12 conservadas.

**Los dos jefes son la investigación hecha imagen.** El corpus distingue a los
dos pueblos por su adorno y por nada más, así que las fichas lo respetan al pie:
el **siebidá** lleva **majagua blanca y el andea** en la cabeza; el **erubidá**
lleva **chaquira blanca en la cabeza y en las manos** y la **pinta de jagua**
cargada. Quien mire las dos láminas puede decir cuál es cuál sin leer el título.

**La mujer embijada va en rojo, no en negro.** La fuente dice «toda embijada» y
es un ser que sale de la tierra: la bija roja la separa de todas las demás
figuras, que llevan jagua negra.

**El hijo del oso**: el pelo de la cintura abajo son piezas planas de papel
recortadas en dientes largos. Es su cuerpo, no un disfraz ni un pantalón de
piel.

**Ninguna figura de esta tanda lleva okama**, porque ninguna está arreglada para
fiesta. El reparto se sostiene.

## Correcciones acumuladas de la capa de personas

1. **Arrugas pintadas** en el anciano y la anciana (tanda 01) y en los dos jefes
   (tanda 02). La técnica pide que la edad se lea por proporción, postura y pelo
   blanco, no por claroscuro en la cara.
2. **Karagabí y Karagabí rejuvenecido son dos rostros distintos** y deberían ser
   la misma persona con otro cuerpo.
3. Los **dos jefes** comparten silueta —túnica pálida larga— y sólo se separan
   por la cabeza. Funciona, pero podría reforzarse en la tanda de correcciones.

## Pendiente: pasada de firmas mágicas sobre lo ya hecho

El editor pidió que los personajes se retraten de forma más mítica sin dejar de
ser fieles. La doctrina está en `firmas-magicas.md` y el piloto de cuatro quedó
aprobado.

**A regenerar con firma, de las 24 ya hechas:** Karagabí, Karagabí rejuvenecido,
el hijo de Karagabí, la mujer de Karagabí, el hijo de la nutria, la mujer
embijada, el hombre que cava el árbol y el primer hombre. Ocho.

**Se quedan sobrias:** las seis fichas de tipo y las diez figuras humanas de los
relatos de guerra y parentesco. Su fuerza es documental.

## Capa 2 · animales (cerrada)

**Tanda 04** (12): guatín, jaguar, oso, puma, nutria, Hímo la iguana,
Horchíbarí, la ballena, el otro ser acuático, el pescado grande, la lorita y el
pájaro carpintero.

**Tanda 05** (12): ardilla, zorro, venado, burro, avispa grande, hormiga
chiquita, hormiga arriera, los pájaros del oso, puerco de agua, tatabro, el
colibrí que se vuelve zahíno y la reunión de animales.

**La regla del pelaje, invertida a tiempo.** En wayuu el refuerzo de animales
pedía «cada pluma, cada escama, cada mechón como recorte independiente» y
produjo papel maché: hubo que rehacer la tanda entera. Aquí la apertura pide lo
contrario desde la primera lámina —un cuerpo peludo son dos o tres piezas planas
grandes con el borde en dientes— y las 24 salieron a la primera.

**La decisión del guatín queda resuelta**: guagua o paca, con cuatro hileras de
manchas, siguiendo la glosa de los dos recopiladores, y declarado en la ficha.
La matriz baja de cuatro asuntos `consult_required` a tres.

**Las sombras hacen casi todo el trabajo mítico en esta capa**: la iguana que
recuerda quién era, la mata de maíz que pesa más que la hoja, los pájaros
muertos que no proyectan nada y el vivo que sí, los cinco supervivientes que son
los únicos con sombra.

---

# CORRECCIÓN DE MÉTODO · 2026-09-17

El editor detectó **dos veces** que faltaban criaturas míticas: primero Surranabe,
después la culebra de las siete cabezas. Dos avisos sobre lo mismo significan que
el fallo no estaba en la ficha sino en el procedimiento. Es éste:

**El inventario de entidades se construyó SÓLO con los catorce relatos
narrables.** Las otras ocho páginas publicadas se clasificaron como «sin una
narración única que ilustrar» —lo cual es correcto **para decidir trípticos**— y
de ahí se saltó a excluirlas **también del inventario de entidades**, que es una
pregunta completamente distinta.

**Una página puede ser síntesis editorial y aun así nombrar seres documentados.**
Al barrerlas aparecieron doce, entre ellos **Dachicore**, que existía por sí
mismo y pensó los ocho mundos, narrado en emberá bedea por Alicia Guasorna,
Noralba Siagama y Delfina Wazorna.

## La regla, para que no se repita

**El barrido de entidades corre sobre TODAS las páginas publicadas de la
comunidad y sobre todos los dossiers de investigación, sin importar el tipo de
página.** El tipo de página decide **trípticos**, nunca el inventario.

## Y un error de lectura que costó una criatura

La ficha de `la-culebra-de-las-siete-cabezas` dice «DECISIÓN: retirar hidra». Se
leyó como «las siete cabezas son invento». **Era lo contrario**: lo que había que
retirar era el **marco de hidra europea** —el ritual, los siete guardianes, la
batalla— que una edición anterior había añadido. La página dice literalmente
«allí vivía una culebra enorme de siete cabezas» y remata: «las siete cabezas no
necesitan convertirse en siete personajes».

**Una nota editorial que dice «retirar X» hay que leerla contra el texto, no en
lugar del texto.**
