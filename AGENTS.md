# AGENTS Guide

## Vision del proyecto
Crear un sitio web moderno de contenidos que recopile todos los mitos de Colombia. Debe sentirse actual, elegante y facil de explorar, con un enfoque editorial tipo blog. El sitio debe estar optimizado para SEO, con navegacion intuitiva y performance alta.

## Alcance inicial (fase 0)
- El repo esta vacio; se debe iniciar el proyecto desde cero.
- Definir la estructura base, componentes, estilos y librerias.
- Preparar una arquitectura que luego integre datos desde un Excel con los mitos.

## Encargo para agentes de IA
- Proponer y construir la estructura del proyecto (carpetas, rutas, layouts).
- Diseñar el header, navegacion por categorias y pagina de listado de mitos.
- Definir un sistema de diseno moderno: tipografia, paleta, espaciado, sombras.
- Implementar animaciones sutiles y modernas (page load, hover, reveal).
- Garantizar SEO (metadatos, estructura semantica, Open Graph).
- Proponer librerias actuales (ej: Tailwind, libs de animacion, UI).

## Direccion visual
- Estilo: moderno, limpio, editorial; inspirado en glass design sin excesos.
- Colores: referencia sutil a Colombia (verde selva, azul rios, dorados tierra), sin usar la bandera literal.
- Contenido: tarjetas y layouts tipo revista, con jerarquia clara.
- Ilustraciones futuras: estilo paperquilling / paper cut.

## Estructura de contenidos
- Navegacion por categorias (region, tipo de mito, tematica).
- Busqueda y filtros simples.
- Pagina individual con lectura comoda (TOC, metadata, relacionados).

## Integraciones futuras
- OpenAI para enriquecer contenido y generar imagenes.
- Pipeline para importar mitos desde Excel.

## Entregables esperados
- Layout base y paginas principales (home, categorias, detalle).
- Componentes reutilizables (cards, badges, breadcrumbs, nav).
- Tokens de diseno (variables, escalas tipograficas, colores).
- Documentacion breve de decisiones tecnicas y de diseno.

## Flujo Docker
- Despues de cada ajuste relevante, recrear el contenedor con `docker-compose up -d --build`.
