---
id: dashboard-performance
title: Tablero de Rendimiento
---

Para el desarrollo de este tablero se utilizó la tecnología de JMeter, la cual es una herramienta de código abierto diseñada para cargar pruebas de rendimiento funcionales y medir el rendimiento de las aplicaciones. JMeter es una herramienta de escritorio con una interfaz gráfica que utiliza Java Swing para simular un grupo de usuarios concurrentes que utilizan diferentes protocolos de comunicación.

## **Parámetros de Monitoreo**

### Bucket (Cubeta)

Se refiere a la base de datos seleccionada la cual es acorde a las pruebas de rendimiento realizadas, no se pueden seleccionar varias bases de datos a la vez.

### Solicitud - Solicitud  individual

Se refiere a la solicitud seleccionada en la parte superior del tablero, no se pueden seleccionar varias solicitudes a la vez. Esta es utilizada para la sección de [análisis por peticiones individuales.](#análisis-por-peticiones-individuales).

### Intervalo de agregación

Se refiere al intervalo de tiempo entre cada prueba de monitoreo. Por ejemplo, si el intervalo de monitoreo es de 5 minutos, el sistema de monitoreo realizará una prueba cada 5 minutos.

### ID de Ejecución

Dentro de las pruebas de rendimiento con JMeter, cada tarea de las pruebas genera un ID, está puede cambiar si se ejecuta la prueba de nuevo, por lo que se debe seleccionar el ID de la ejecución que se desea monitorear.

Se puede identificar fácilmente ya que tiene como prefijo la fecha de ejecución, por ejemplo `20230802-`.

### Tipo de muestreo

Se refiere al tipo de muestreo que se desea visualizar en el tablero, por defecto está en `Todos` para mostrar todos los tipos de muestreo.

### Test Start y Test End

Estos son utilizados para que el tablero muestre los datos de un rango cuando las pruebas han empezado y finalizado, es decir, que no se visualizarán datos de pruebas que no se han ejecutado.

## **General**

El dashboard de Grafana para el monitoreo del rendimiento de la aplicación incluye varias métricas importantes que se muestran en diferentes paneles. A continuación se detalla cada una de estas métricas:

### Usuarios Activos

Este panel muestra la cantidad de usuarios activos en la aplicación en tiempo real. Proporciona información sobre la carga actual del sistema y ayuda a identificar si hay picos de actividad que podrían afectar el rendimiento.

![Usuarios Activos](/img/docs/artemis/performance/usuarios-activos.webp)

### Rendimiento total medido en ops/s

Este panel muestra la cantidad total de operaciones por segundo (ops/s) que se están ejecutando en la aplicación. Permite evaluar la capacidad del sistema para manejar la carga de trabajo actual y si se está acercando o superando su capacidad máxima.

![Rendimiento total medido en ops/s](/img/docs/artemis/performance/rendimiento-total-ops.webp)

### Conteo de Solicitudes

Este panel muestra el recuento total de solicitudes realizadas durante la ejecución del plan de pruebas. Es una métrica útil para evaluar la cantidad de tráfico que recibe la aplicación y cómo puede afectar su rendimiento.

![Conteo de Solicitudes](/img/docs/artemis/performance/conteo-solicitudes.webp)

### Tasa de éxito

La tasa de éxito es el porcentaje de solicitudes que se completaron con éxito en comparación con el total de solicitudes enviadas. Este panel muestra la tasa de éxito en tiempo real, lo que permite evaluar la capacidad de la aplicación para manejar las solicitudes y procesarlas correctamente.

![Tasa de éxito](/img/docs/artemis/performance/tasa-exito.webp)

### Tasa de Error

La tasa de error es el porcentaje de solicitudes que fallaron en comparación con el total de solicitudes enviadas. Este panel muestra la tasa de error en tiempo real, lo que permite identificar cualquier problema o error en la aplicación que pueda estar afectando su rendimiento.

![Tasa de Error](/img/docs/artemis/performance/tasa-error.webp)

### Conteo de errores

Este panel muestra el recuento total de errores que se han producido durante la ejecución del plan de pruebas. Proporciona información detallada sobre los diferentes tipos de errores que se han encontrado, lo que ayuda a identificar y solucionar problemas en la aplicación.

![Conteo de errores](/img/docs/artemis/performance/conteo-errores.webp)

### Bytes enviados

Este panel muestra la cantidad total de bytes enviados durante la ejecución del plan de pruebas. Es una métrica útil para evaluar la carga de red y si el sistema está utilizando eficientemente los recursos de red.

![Bytes enviados](/img/docs/artemis/performance/bytes-enviados.webp)

### Bytes Recibidos

Este panel muestra la cantidad total de bytes recibidos durante la ejecución del plan de pruebas. Proporciona información sobre la cantidad de datos que se están transmitiendo desde el servidor de aplicaciones al cliente y viceversa.

![Bytes Recibidos](/img/docs/artemis/performance/bytes-recibidos.webp)

### Promedio General de Respuesta

Este panel muestra el tiempo de respuesta promedio de todas las solicitudes realizadas durante la ejecución del plan de pruebas. Proporciona información sobre el rendimiento promedio de la aplicación y cómo está respondiendo a las solicitudes en general.

![Promedio General de Respuesta](/img/docs/artemis/performance/promedio-general-respuesta.webp)

| Status | Time |
|--------|------|
| Bueno | Menor a 1 segundo |
| Regular | Entre 1 y 3 segundos |
| Malo | Mayor a 3 segundos |

### Métricas generales

Estos paneles incluye una variedad de estadísticas sobre las solicitudes realizadas durante la ejecución del plan de pruebas. Estas métricas incluyen:

| Métrica                       | Descripción                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| Conteo de solicitudes         | El número total de solicitudes realizadas.                                   |
| Media                         | El tiempo de respuesta medio de todas las solicitudes.                       |
| Máximo                        | El tiempo de respuesta máximo de todas las solicitudes.                      |
| Mediana                       | El tiempo de respuesta que divide a las solicitudes en dos partes iguales.   |
| Percentil 90%                 | El tiempo de respuesta por debajo del cual el 90% de las solicitudes se encuentran. |
| Percentil 95%                 | El tiempo de respuesta por debajo del cual el 95% de las solicitudes se encuentran. |
| Percentil 99%                 | El tiempo de respuesta por debajo del cual el 99% de las solicitudes se encuentran. |
| TPS (transacciones por segundo) | La cantidad de transacciones que se están realizando por segundo.            |
| TRM (tiempo de respuesta medio) | El tiempo de respuesta promedio de todas las transacciones.                  |
| TPH (transacciones por hora)    | La cantidad de transacciones que se están realizando por hora.               |
| Tasa de error                 | El porcentaje de solicitudes que fallaron en comparación con el total de solicitudes. |

![Métricas generales](/img/docs/artemis/performance/metricas-generales.webp)

## **Percentiles**

### Percentil 90% del tiempo de respuesta

El percentil 90% del tiempo de respuesta indica el tiempo de respuesta por debajo del cual el 90% de las solicitudes se encuentran. Es una métrica útil para evaluar el rendimiento de la aplicación en condiciones normales y cómo está respondiendo la mayoría de las solicitudes.

### Percentil 95% del tiempo de respuesta

El percentil 95% del tiempo de respuesta indica el tiempo de respuesta por debajo del cual el 95% de las solicitudes se encuentran. Es una métrica útil para evaluar el rendimiento de la aplicación y cómo está respondiendo la mayoría de las solicitudes en condiciones normales.

### Percentil 99% del tiempo de respuesta

El percentil 99% del tiempo de respuesta indica el tiempo de respuesta por debajo del cual el 99% de las solicitudes se encuentran. Es una métrica útil para evaluar el rendimiento de la aplicación y cómo está respondiendo la mayoría de las solicitudes en condiciones normales, además permite identificar cualquier solicitud que pueda ser considerada como una "solicitud lenta" o que está afectando negativamente el tiempo de respuesta promedio.

### Resumen de Errores

Este panel muestra un resumen de los errores que se han producido durante la ejecución del plan de pruebas. Proporciona un resumen de los errores encontrados durante la ejecución de un plan de pruebas, incluyendo el número total de errores, el tipo de error y la tasa de error.

![Percentiles](/img/docs/artemis/performance/percentiles.webp)

## **Throughput**

El throughput es la cantidad de solicitudes o transacciones que se están procesando por unidad de tiempo. Se mide en solicitudes por segundo (req/s) y muestra la capacidad del sistema para manejar un cierto volumen de solicitudes en un período de tiempo determinado.

### Rendimiento total (TPS y Virtual users)

Este panel muestra el rendimiento total de la aplicación en función de las transacciones por segundo (TPS) y los usuarios virtuales. El TPS indica la cantidad de transacciones que se están realizando por segundo, mientras que los usuarios virtuales representan la carga de trabajo generada en la aplicación.

![Throughput](/img/docs/artemis/performance/throughput.webp)

### Rendimiento total por solicitud

Este panel muestra el rendimiento total de la aplicación desglosado por cada tipo de solicitud. Proporciona información detallada sobre el tiempo de respuesta, la tasa de éxito y la tasa de error de cada solicitud, lo que ayuda a identificar cualquier problema o cuello de botella específico en la aplicación.

![Throughput](/img/docs/artemis/performance/throughput-solicitud.webp)

### Rendimiento Total (estado "Fallido")

Este panel muestra el rendimiento total de la aplicación en relación con las operaciones fallidas. En el eje X se representa el tiempo mientras que en el eje Y se muestra la cantidad de usuarios. Proporciona información sobre la cantidad de operaciones que han fallado en un período de tiempo determinado.

![Throughput](/img/docs/artemis/performance/throughput-fallido.webp)

### Rendimiento Total por Solicitud (Estado "éxito")

Este panel muestra el rendimiento total de la aplicación desglosado por cada tipo de solicitud en caso de éxito. En el eje Y izquierdo se muestra ops/s (operaciones por segundo) y en el eje Y derecho se muestra el número de usuarios virtuales a lo largo del tiempo. Proporciona información sobre el rendimiento de cada tipo de solicitud en términos de operaciones por segundo y la carga de trabajo generada por los usuarios virtuales.

![Throughput](/img/docs/artemis/performance/throughput-solicitud-exito.webp)

### Rendimiento Total por Solicitud (Estado "fallido")

Este panel muestra el rendimiento total de la aplicación desglosado por cada tipo de solicitud en caso de falla. En el eje Y izquierdo se muestra ops/s (operaciones por segundo) y en el eje Y derecho se muestra el número de usuarios virtuales a lo largo del tiempo. Proporciona información sobre el rendimiento de cada tipo de solicitud en términos de operaciones por segundo y la carga de trabajo generada por los usuarios virtuales, pero solo para las solicitudes que han fallado.

![Throughput](/img/docs/artemis/performance/throughput-solicitud-fallido.webp)

### Rendimiento por Código de Estado

Este panel muestra el rendimiento de la aplicación desglosado por diferentes códigos de estado HTTP. Proporciona información sobre la cantidad de solicitudes que han generado cada código de estado, lo que ayuda a identificar cualquier problema relacionado con los códigos de estado de respuesta de la aplicación.

![Throughput](/img/docs/artemis/performance/throughput-codigo-estado.webp)

## **Tiempo de respuesta A lo largo del tiempo**

Este panel muestra el tiempo de respuesta de las solicitudes a lo largo del tiempo. El tiempo de respuesta es el tiempo que le lleva a la aplicación responder a una solicitud y se mide en milisegundos. Este panel permite evaluar cómo el tiempo de respuesta varía a medida que la carga de trabajo aumenta o disminuye.

### Tiempo de Respuesta Promedio

Este panel muestra el tiempo de respuesta promedio de todas las solicitudes realizadas. Proporciona información sobre el rendimiento promedio de la aplicación y cómo está respondiendo a las solicitudes en general.

![Tiempo de Respuesta Promedio](/img/docs/artemis/performance/tiempo-respuesta-promedio.webp)

### Tiempo de Respuesta Promedio (estado "éxito")

Este panel muestra el tiempo de respuesta promedio de las solicitudes exitosas. Proporciona información sobre el rendimiento promedio de la aplicación en términos de tiempo de respuesta para las solicitudes exitosas.

![Tiempo de Respuesta Promedio](/img/docs/artemis/performance/tiempo-respuesta-promedio-exito.webp)

### Tiempo de Respuesta Promedio (estado "fallido")

Este panel muestra el tiempo de respuesta promedio de las solicitudes que han fallado. Proporciona información sobre el rendimiento promedio de la aplicación en términos de tiempo de respuesta para las solicitudes fallidas.

![Tiempo de Respuesta Promedio](/img/docs/artemis/performance/tiempo-respuesta-promedio-fallido.webp)

### Tiempo Máximo de Respuesta

Este panel muestra el tiempo de respuesta máximo de todas las solicitudes realizadas. Proporciona información sobre el peor tiempo de respuesta que la aplicación ha experimentado durante un período de tiempo determinado.

![Tiempo Máximo de Respuesta](/img/docs/artemis/performance/tiempo-maximo-respuesta.webp)

## **Resumen de Errores**

Este panel proporciona un resumen de los errores que se han producido durante la ejecución del plan de pruebas. Muestra el número total de errores de cada tipo y permite identificar los errores más comunes o críticos que deben solucionarse.

El tráfico de red se refiere a la cantidad de datos que se transmiten entre la aplicación y los clientes a través de la red. Es una métrica importante para evaluar el rendimiento de la aplicación y la eficiencia del uso de los recursos de red. Los paneles relacionados con el tráfico de red en el dashboard de Grafana son los siguientes:

## **Tráfico de red**

El tráfico de red se refiere a la cantidad de datos que se transmiten entre la aplicación y los clientes a través de la red.

Es una métrica importante para evaluar el rendimiento de la aplicación y la eficiencia del uso de los recursos de red. Los paneles relacionados con el tráfico de red en el dashboard de Grafana son los siguientes:

### Latencia

El panel de latencia muestra el tiempo que tarda un paquete de datos en viajar desde el cliente hasta el servidor y viceversa. Esta métrica es importante para evaluar la velocidad y capacidad de respuesta de la red. Un aumento repentino en la latencia puede indicar problemas de congestión o falta de ancho de banda en la red, lo que puede afectar negativamente el rendimiento de la aplicación.

![Latencia](/img/docs/artemis/performance/latencia.webp)

### Tiempo de conexión

El panel de tiempo de conexión muestra el tiempo que tarda en establecerse una conexión entre el cliente y el servidor. Esta métrica permite evaluar la eficiencia del proceso de conexión y detectar posibles problemas de conectividad. Un incremento en el tiempo de conexión puede indicar problemas de red o de rendimiento del servidor.

![Tiempo de conexión](/img/docs/artemis/performance/tiempo-conexion.webp)

### Bytes enviados en el tiempo

El panel de bytes enviados en el tiempo muestra la cantidad de bytes que se envían desde el cliente al servidor a lo largo del tiempo. Esta métrica es útil para evaluar la carga de tráfico que se está generando en la red y puede ayudar a identificar posibles cuellos de botella o problemas de congestión.

![Bytes enviados en el tiempo](/img/docs/artemis/performance/bytes-enviados-tiempo.webp)

### Bytes enviados por solicitud

El panel de bytes enviados por solicitud muestra la cantidad de bytes que se envían desde el cliente al servidor por cada solicitud realizada. Esta métrica proporciona información sobre la cantidad de datos que se están transmitiendo en cada transacción y puede ayudar a identificar solicitudes o acciones que generan un alto consumo de ancho de banda.

![Bytes enviados por solicitud](/img/docs/artemis/performance/bytes-enviados-solicitud.webp)

### Bytes recibidos por solicitud

El panel de bytes recibidos por solicitud muestra la cantidad de bytes que se reciben desde el servidor al cliente por cada solicitud realizada. Esta métrica proporciona información sobre la cantidad de datos que se están recibiendo en cada transacción y puede ayudar a identificar solicitudes o acciones que generan una alta carga de respuesta del servidor.

![Bytes recibidos por solicitud](/img/docs/artemis/performance/bytes-recibidos-solicitud.webp)

Los datos relacionados con el tráfico de red son útiles para identificar posibles problemas de rendimiento o de recursos de red. Por ejemplo, si se observa un aumento repentino en la latencia, esto podría indicar que la red está congestionada y que se deben tomar medidas para mejorar la capacidad de la red o reducir la carga de tráfico. Del mismo modo, si se detectan grandes cantidades de bytes enviados por solicitud, esto podría indicar una ineficiencia en el envío de datos y la necesidad de optimizar las interacciones entre cliente y servidor.

En resumen, el análisis del tráfico de red a través de los paneles en Grafana permite monitorear y evaluar el rendimiento de la aplicación desde una perspectiva de comunicación en red. Esto ayuda a garantizar una alta disponibilidad y calidad de servicio, identificando problemas relacionados con la latencia, el tiempo de conexión o el uso ineficiente de los recursos de red.

## **Análisis por peticiones individuales**

Esta sección del tablero, muestra paneles acordes a la petición seleccionada en la parte superior del mismo.

- Tiempo de Respuesta
- Rendimiento por Segundos
- Tasa de Error
- Código de Respuesta

Ejemplo del Login:

![Análisis por peticiones individuales](/img/docs/artemis/performance/analisis-peticiones-individuales.webp)
