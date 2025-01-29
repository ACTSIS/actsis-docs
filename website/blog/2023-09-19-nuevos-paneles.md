---
title: Nuevos paneles
description: Se agregaron nuevos paneles al tablero de monitoreo y pruebas de rendimiento.
slug: nuevos-paneles
authors: rondon

date: 2023-09-19
tags: [actsis, monitoreo, disponibilidad, promedio]
hide_table_of_contents: false
---

Para el continuo mejoramiento de nuestros servicios, hemos agregado nuevos paneles al tablero de monitoreo y pruebas de rendimiento. Estos paneles proporcionan información valiosa sobre la disponibilidad y el rendimiento de nuestros servicios, lo que nos permite identificar y resolver problemas de manera proactiva.
<!--truncate-->

## Panel de Tasa de Disponibilidad en dashboard de monitoreo

La tasa de disponibilidad se refiere a la proporción de tiempo que un servicio está disponible durante un período de tiempo determinado. Por ejemplo, si un servicio está disponible el 99% del tiempo, su tasa de disponibilidad es del 99%.

Utilizamos una escala de colores que va desde rojo (muy malo) hasta verde (muy bueno) para proporcionar una rápida evaluación visual de la calidad de la disponibilidad. Un mayor porcentaje indica un mejor rendimiento y una mayor disponibilidad del sistema, mientras que un menor porcentaje puede indicar problemas de disponibilidad. Utilice este panel para monitorear y evaluar el rendimiento y la confiabilidad del sistema en tiempo real.

![Panel](/img/docs/artemis/monitoreo/tasa-disponibilidad.webp)

## Promedio General de Respuesta en dashboard de pruebas de rendimiento

Este panel muestra el tiempo de respuesta promedio de todas las solicitudes realizadas durante la ejecución del plan de pruebas. Proporciona información sobre el rendimiento promedio de la aplicación y cómo está respondiendo a las solicitudes en general.

![Promedio General de Respuesta](/img/docs/artemis/performance/promedio-general-respuesta.webp)

| Status | Time |color|
|--------|------|-----|
| Bueno | Menor a 1 segundo | Verde |
| Regular | Entre 1 y 3 segundos | Amarillo |
| Malo | Mayor a 3 segundos | Rojo |

> Actsis le garantiza a sus clientes un tiempo de respuesta menor a 5 segundo.

## Dashboard de inicio

Se agregó un nuevo panel al dashboard de inicio, el cual muestra el estado de los servicios de Actsis de forma general para una visión rápida.

- Se agregó panel con reloj de la hora actual en Bogotá/Colombia.
- Se agregó panel con reloj de la hora actual en UTC.
- Conversión de hora de Bogotá/Colombia a UTC.
- Lista de dashboards disponibles.
- Link para la documentación de Artemis.

![Dashboard de inicio](/img/docs/artemis/dashboard-inicio.webp)
