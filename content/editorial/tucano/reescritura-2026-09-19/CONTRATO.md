# Contrato de reescritura · bloque amazónico · 2026-09-19

Vale para desana, tucano, barasana, ticuna y makaguán. **Cada comunidad se
escribe por separado y con sus propias fuentes**: comparten este método y no
comparten ni una frase, ni un marco interpretativo, ni un paralelo.

## Lo que se encontró, y es común

El diagnóstico midió lo mismo en las cinco: **cerca de la mitad de las oraciones
se repiten entre las fichas de una misma comunidad** —53,8 % en desana, 52,8 %
en tucano, 53,4 % en barasana, 48,7 % en ticuna, 48,8 % en makaguán— y **casi
todos los Relatos llevan aparato crítico dentro**. La dispersión de longitudes
lo confirma: Historia mide lo mismo, con cuatro o siete palabras de diferencia,
en todas las fichas de una comunidad. Es un molde aplicado a un lote.

## Reglas

- **El Relato cuenta la historia y nada más.** Sin «según», sin «el corpus»,
  sin «la investigación», sin notas de método, sin declarar lo que falta.
- **El contenido heredado no se tira**: se conserva lo que cuenta, se reescribe
  la prosa y se precisa con las fuentes verificadas.
- **No se declara en el texto publicado que no se encontró más.** Eso va al
  expediente, en `dudas`.
- **Las fichas de una comunidad tienen que quedar distintas entre sí.** Nada de
  párrafos que sirvan igual para cualquiera.
- **Quien narró va en Historia, con su nombre y su fecha cuando la fuente los
  dé.** Es lo que más falta en todo el sitio.
- **Lo vecino se marca como vecino.** Tukano oriental no es ticuna; sikuani no
  es kuiva ni makaguán; una fuente brasileña del alto río Negro es vecina de la
  desana colombiana, no la misma. Una fuente de otro pueblo se cita como
  paralelo documentado, jamás como creencia propia.
- **Si un resultado reproduce el texto del sitio, no es una fuente.** Buscando
  dos nombres propios de una ficha de este mismo bloque, `mitosdecolombia.com`
  sale tercero en Bing y no hay ningún otro resultado. Si los nombres propios de
  una ficha no aparecen en ninguna parte salvo en ella misma, la ficha no está
  corroborada, y eso va a `dudas`.
- **Similitudes nombra paralelos que una fuente citada sostenga.**
- Rangos: Relato 300-650 palabras, Historia 220-600, Versiones 170-550, Lección
  una sola frase de 8 a 22 palabras sin nombres propios ni orden moral,
  Similitudes 150-450. Si un Relato no llega a 300 sin inventar, se declara
  `relatoCorto: "<razón>"` en el JSON y el piso baja a 70.

## Entrega

Un JSON por ficha en `content/editorial/<comunidad>/reescritura-2026-09-19/<slug>.json`
con `slug`, `mito`, `historia`, `versiones`, `leccion`, `similitudes`, más
`fuentes` (obras por nombre corto) y `dudas` (lista de cadenas, para el
expediente, nunca para la página). **Cuenta las palabras de cada campo antes de
entregar.**
