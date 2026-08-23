# Dirección visual del archivo

Cómo se compone, en qué época ocurre y con qué lenguaje se viste cada imagen de
mitosdecolombia.com. Aplica igual a las imágenes del sitio y a los keyframes de
video: las reglas viven en `src/lib/visual-direction.js`, que importan los dos
pipelines, para que una mejora escrita una vez llegue a los dos.

## Por qué existe este documento

Auditamos los primeros doce trípticos publicados. Las tres veces que un prompt
fijó la posición del personaje, dijo **"tercio derecho"**. Cero izquierda, cero
centro. Y al etiquetar escena por escena apareció algo más preciso: el sesgo no
estaba repartido, estaba **concentrado al 100% en la entrada horizontal, 4 de 4**.
Las verticales y las cuadradas sí variaban.

No fue gusto. Fue que cada prompt nuevo se copió del anterior, porque copiarlo
era justo lo que garantizaba que la cara del personaje no cambiara. **El mismo
mecanismo que da continuidad da monotonía.** Contra eso no sirve pedir variedad:
hay que nombrarla, declararla y contarla.

## 1 · La técnica es frontal; la cámara, no

El estilo es una maqueta física de papel artesanal fotografiada — paper cut,
paper relief y quilling, con cortes visibles, fibras, micro-sombras y volumen
bajo. Eso no cambia nunca: **es una pieza construida a mano, no un render.**

Lo que sí cambia es dónde se pone la cámara. Hasta ahora el sistema exigía
"composición frontal y estable" en seis lugares distintos, así que pedirle
dinamismo era pedirle que desobedeciera sus propias reglas. Ahora la frontalidad
describe la **técnica** (se fotografía de frente una pieza real, sin perspectivas
imposibles de render 3D) y no la **composición**: la cámara puede bajar, subir o
mirar a plomo cuando la escena lo pida.

## 2 · Catálogo de esquemas de composición

Nueve esquemas nombrados. Cada escena declara el suyo en el manifiesto.

| esquema | qué hace |
|---|---|
| **umbral** | la figura entra por el borde, medio cuerpo fuera; delante, el mundo aún sin ella |
| **peso contrario** | figura en el tercio **izquierdo**, la masa del mundo pesando al otro lado |
| **simetría de altar** | centrada, frontal, solemne — para apariciones, juicios y entregas |
| **figura pequeña** | el territorio manda; la persona da la medida y hay que buscarla |
| **diagonal** | la acción cruza el cuadro de esquina a esquina; nada paralelo a los bordes |
| **primer plano dominante** | un objeto grande manda, la figura queda al fondo |
| **contrapicado** | cámara baja, la figura contra el cielo, horizonte abajo |
| **cenital** | a plomo sobre el suelo, sin cielo: la escena se vuelve signo |
| **enfrentados** | dos figuras fuera del eje; el aire entre ellas es el centro real |

Dos reglas de uso:

- **`simetría` se gana, no se cae en ella.** Es la única que centra, y por eso es
  la única que hay que justificar.
- **El esquema sale de la escena, no del turno.** Rotarlos mecánicamente cambia
  una monotonía por otra.

### El sistema se mide a sí mismo

```bash
node scripts/contar-composiciones.mjs
```

Reporta el reparto, marca los esquemas sin estrenar y lista las escenas
heredadas. Es lo que convierte "hay que variar más" en un número que se puede
mirar antes de generar la siguiente tanda.

## 3 · Época

El corpus no es todo prehispánico. **`Mestizo` son 184 mitos y `Mixto` 69: el 42%
del archivo.** Son las ánimas, los duendes y los caminos reales de la Colombia
rural colonial y republicana. Vestirlos con lenguaje territorial prehispánico es
un error de época tan grave como ponerle una cruz a Bochica.

| registro | qué entra | qué queda prohibido |
|---|---|---|
| **prehispánico** | algodón hilado, fique, barro, madera, piedra, paja, oro martillado | hierro, rueda, cruz, iglesia, teja, caballo, gallina, trigo, ruana, vidrio |
| **colonial rural** | bahareque, teja de barro, ruana, sombrero de ala, quinqué, camino real, capilla | malocas, tunjos, penachos, orfebrería ceremonial |
| **indeterminado** | mundo material sobrio, sin objetos que delaten un siglo | ante la duda, quitar el objeto en vez de inventarlo |

El registro se deduce de la comunidad y se puede forzar por mito.

## 4 · Comunidades: mejor sobrio que falso

El diccionario cubría 7 comunidades de las 41 del archivo. Ahora cubre 21, con
las que más mitos aportan: Ette Ennaka, Chamí, Huitoto/Murui-Muina, Katíos,
Andoque, U'wa, Misak, Zenú, Ticuna, Wounaan, Barí, Quillacingas.

**Regla de honestidad:** una comunidad entra al diccionario sólo cuando hay con
qué describirla sin inventar. Una entrada fabricada es peor que ninguna, porque
le atribuye a un pueblo real una iconografía que nadie verificó y además la
vuelve canon del archivo. Sin entrada, el prompt cae a la geografía de la región
y **prohíbe explícitamente** inventar símbolos, patrones textiles, máscaras o
tocados.

Ampliar el diccionario es trabajo de investigación, no de redacción.

## 5 · Personajes: la biblia manda

Un personaje se crea una vez, como ficha de cuerpo entero sobre fondo mate, y a
partir de ahí **se cita**: toda escena que lo incluya pasa su jpg como
referencia. Así el rostro, la manta y los materiales no se mueven entre imágenes
ni entre mitos.

Cuando un mito estrena personaje, ese personaje entra a `biblia/` con su entrada
en el manifiesto. Nada de personajes de un solo uso.

Y una línea roja aprendida a golpes: **el arte puede apartarse de la letra del
relato cuando la letra arrastra iconografía colonial.** El texto de Bochica lo
describe con barba larga hasta la cintura y túnica; el arte lo mantiene como
anciano muisca porque la auditoría del sitio prohíbe el Bochica europeo. Es una
decisión deliberada y queda escrita en el manifiesto del mito.

## 6 · Deslinde entre mitos de un mismo ciclo

Tres mitos comparten a Bochica y **no comparten ni una escena**: la vara de oro y
la cascada son del Tequendama; el telar, del maestro; la acequia y la huella del
pie, del camino. Al escribir un mito de un ciclo ya empezado, revisar los
manifiestos de sus hermanos antes de elegir escenas.
