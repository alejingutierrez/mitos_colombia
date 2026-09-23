# Las 28 comunidades que faltan · plan del bloque

_2026-09-19. Alcance: los mitos asociados a una comunidad. Mestizo (184) y mixto
(69) quedan para después, en ese orden._

## El diagnóstico, antes de abrir una ficha

`npm run mitos:enriquecer:diagnostico -- --todas` mide de una pasada las cuatro
enfermedades que nueve comunidades enseñaron a reconocer, más una quinta que
apareció al pasarlo por el sitio entero.

**112 mitos en 28 comunidades.** No se parecen entre sí, y el plan no las trata
igual.

### Grupo A · la plantilla dura, y es amazónica (42 mitos)

| comunidad | mitos | oraciones repetidas | aparato en el Relato | fuentes |
|---|---|---|---|---|
| Sikuani (Guahíbo) | 10 | **51,5 %** | 8 de 10 | 10 URLs |
| Desana | 8 | **53,8 %** | 8 de 8 | 7 URLs |
| Tucano | 7 | **52,8 %** | 7 de 7 | 8 URLs |
| Barasana | 6 | **53,4 %** | 6 de 6 | 7 URLs |
| Ticuna | 6 | **48,7 %** | 2 de 6 | 7 URLs |
| Makaguán | 3 | **48,8 %** | 3 de 3 | 7 URLs |
| Kuiva (Wamonae) | 2 | **49,5 %** | 2 de 2 | 8 URLs |

Media de campo por comunidad: los cinco campos miden casi lo mismo en todas las
fichas —la dispersión de Historia baja a 4 palabras en makaguán y a 7 en desana
y tucano—. Es un solo molde aplicado a un lote entero. Son las peores del sitio
después de andoque, y comparten área de investigación: tukano oriental del
Vaupés, ticuna del trapecio, guahibo de la Orinoquia.

### Grupo B · sin plantilla, pero sin fuentes y sin narradores (30 mitos)

| comunidad | mitos | fuentes por mito | fichas que nombran a alguien |
|---|---|---|---|
| U'wa | 11 | **0,7** | 1 de 11 |
| Barí | 6 | 1,3 | 4 de 6 |
| Wounaan | 5 | 2,4 | 1 de 5 |
| Awa | 2 | 4,5 | 0 de 2 |
| Eperara Siapidara | 2 | 4,0 | 0 de 2 |
| Umbra | 2 | 5,5 | 0 de 2 |
| Cuycuyes | 2 | 6,5 | 0 de 2 |

U'wa es el caso extremo: menos de una URL por ficha y una sola ficha que nombra
a alguien. Aquí el trabajo es de fuentes, no de desmontaje.

### Grupo C · fuentes infladas (24 mitos)

| comunidad | mitos | URLs | por mito | de catálogo |
|---|---|---|---|---|
| Zenú | 7 | **120** | 17,1 | **32** |
| Afrocolombianos | 2 | 43 | 21,5 | 6 |
| Yukpa | 2 | 40 | 20,0 | 7 |
| Yucuna | 3 | 27 | 9,0 | 3 |
| Africano | 3 | 21 | 7,0 | 5 |
| Quimbaya | 3 | 18 | 6,0 | 2 |
| Quillacingas | 6 | 13 | 2,2 | 0 |
| Ansermas | 2 | 8 | 4,0 | 3 |

El problema es el contrario del Grupo A: no faltan fuentes, sobran. Zenú cita
ciento veinte URLs para siete mitos, y treinta y dos son portadas de catálogo,
blogs o fichas sin texto. Aquí se poda y se verifica, no se busca.

### Grupo D · casi sanas (16 mitos)

Misak (7, con 22 URLs de 17 dominios y ningún aparato en el Relato),
Quillacingas (6, con las seis nombrando a alguien), y las de un solo mito:
Nɨkak, Pirsa, Embera, Ufaina/Tanimuka. Requieren una pasada corta.

### La quinta enfermedad, que nadie había mirado

**240 de las 596 fichas del sitio nunca entraron en la estructura de cinco
campos.** Tienen `mito`, `historia`, `versiones`, `leccion` y `similitudes` en
blanco y todo el texto en `content`, en un solo bloque. **No están vacías** —la
página sirve ese `content`— pero no se pueden validar campo a campo ni
reescribir con el importador hasta repartirlas.

Son **173 mestizas**, **61 mixtas** y **seis de comunidades**: los tres yucuna,
dos de africano (`anansi` y `tulavieja-tunda`) y el único de yaguas.

Y su prosa es exactamente la que este proceso existe para corregir. El `content`
de `kanuma` abre así: «En el principio de los tiempos, cuando el mundo vestía su
manto de juventud y las brumas se alzaban con timidez desde el río Mirití…».

Eso cambia el tamaño del trabajo que queda en mestizo y mixto: no es enriquecer
fuentes, es **escribir las fichas**.

## Cómo se hace el bloque

Lo que cambia respecto a las nueve anteriores:

1. **El diagnóstico va primero y es un comando**, no una inspección a mano. El
   grupo decide el tratamiento.
2. **Un lote de investigación por área cultural, no por tamaño.** Las cinco del
   Vaupés y la Orinoquia comparten bibliografía; las del Pacífico, otra; las
   andinas, otra. Se busca una vez por área y se reparte por comunidad.
3. **El corte de vecindad se declara desde el brief.** Tukano oriental no es
   ticuna, sikuani no es kuiva, y una fuente brasileña sobre ticuna es vecina.
4. **Las de uno o dos mitos no llevan lote propio**: entran en la pasada del
   área que les corresponde.
5. **Muiscas sigue aparte**: 41 fichas con la Fase B en Neon y no en los
   módulos. Es reconciliación técnica, no edición, y se hace sin reabrir el
   texto.

## Orden

1. **Grupo A**, empezando por el Vaupés (desana, tucano, barasana) y siguiendo
   con ticuna y las guahibo (sikuani, makaguán, kuiva). 42 mitos.
2. **Grupo B**, empezando por U'wa, que es el que peor está de fuentes. 30 mitos.
3. **Grupo C**, que es poda y verificación. 24 mitos.
4. **Grupo D** y las de un mito. 16 mitos.
5. **Muiscas**: reconciliar fuentes de Neon a los módulos.
6. Después, y aparte: **mestizo** (184) y **mixto** (69), donde lo primero es
   repartir el `content` en los cinco campos.
