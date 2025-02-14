---
id: dashboard-monitoreo
title: Tablero de Monitoreo
---

En ACTSIS, contamos con una amplia gama de servicios, lo que puede dificultar el seguimiento individual de sus estados. Para abordar este desafío, hemos desarrollado un **TABLERO DE MONITOREO**, este dashboard nos permite visualizar de manera centralizada la condición de cada servicio, así como sus métricas clave.

La implementación y mantenimiento de un monitoreo web efectivo desempeñan un papel fundamental en nuestra operativa. Este enfoque no solo garantiza la disponibilidad continua de nuestros servicios, sino que también capacita a los administradores de red para anticipar problemas al descubrir patrones de consumo de recursos y rendimiento que, de lo contrario, podrían pasar inadvertidos.

Nuestras herramientas avanzadas de monitoreo de nuestros servicios web ofrecen la capacidad de identificar y abordar problemas, e incluso prevenir posibles inconvenientes en el rendimiento, en una fase temprana, a menudo antes de que los usuarios sean conscientes de dichos problemas.

En resumen, nuestro **TABLERO DE MONITOREO** es un pilar esencial para mantener la calidad operativa. Proporciona una visión integral del estado de nuestros servicios, permitiendo a nuestros equipos tomar medidas proactivas y mantener altos estándares de eficiencia.

![Panel](/img/docs/artemis/fullpage-dashboard-monitoreo.webp)

## **Parámetros de Monitoreo**

### Interval

El intervalo de monitoreo se refiere al intervalo de tiempo entre cada prueba de monitoreo. Por ejemplo, si el intervalo de monitoreo es de 5 minutos, el sistema de monitoreo realizará una prueba cada 5 minutos.

### Instance

En un dashboard, los parámetros son variables dinámicas que el usuario puede ajustar para filtrar la información que desea visualizar.

El parámetro **Instance** permite seleccionar un servicio web específico para monitorear. Por defecto, está configurado en `Todo` para mostrar todos los servicios disponibles, pero el usuario puede elegir una instancia particular para enfocarse en datos específicos.

Por ejemplo, en el siguiente menú desplegable, puedes elegir entre varias instancias o servicios disponibles según tus necesidades.

![Panel](/img/docs/artemis/monitoreo/instance.webp)

## **Paneles del Tablero de Monitoreo**

Este tablero está compuesto por los siguientes paneles:

### Duración de exploración global

La gráfica representa el tiempo de respuesta del sitio web en segundos en el eje Y, en función del tiempo en el eje X durante un período de tiempo determinado. El tiempo de respuesta mide la velocidad a la que el sitio web carga y muestra la página, lo cual es crucial para la experiencia del usuario.

Por lo general, un tiempo de respuesta bajo se considera un indicativo de un sitio web rápido y un alto tiempo de respuesta puede afectar negativamente la experiencia del usuario.

![Panel](/img/docs/artemis/monitoreo/duración-exploracion-global.webp)

En el gráfico mostrado, cada línea de color representa un **servicio (o instancia)** que está siendo monitoreado. Estas líneas permiten visualizar el tiempo de respuesta específico de cada servicio web en el intervalo seleccionado. Por ejemplo:

- La línea **verde** corresponde al servicio `https://api.actsis.com/SacWs/api/version`.
- La línea **amarilla** corresponde al servicio `https://app.actsis.com/GEN/Vistas/Login/LOGIN_GEN.aspx`.

El análisis de estas líneas ayuda a identificar posibles problemas de rendimiento en servicios individuales, lo que permite tomar medidas específicas según sea necesario.

### Tasa de Disponibilidad

La tasa de disponibilidad se refiere a la proporción de tiempo que un servicio está disponible durante un período de tiempo determinado. Por ejemplo, si un servicio está disponible el 99% del tiempo, su tasa de disponibilidad es del 99%.

Utilizamos una escala de colores que va desde rojo (muy malo) hasta verde (muy bueno) para proporcionar una rápida evaluación visual de la calidad de la disponibilidad. Un mayor porcentaje indica un mejor rendimiento y una mayor disponibilidad del sistema, mientras que un menor porcentaje puede indicar problemas de disponibilidad. Utilice este panel para monitorear y evaluar el rendimiento y la confiabilidad del sistema en tiempo real.

![Panel](/img/docs/artemis/monitoreo/tasa-disponibilidad.webp)

### Status

La verificación del estado (status) se refiere a la confirmación de que el sitio web está funcionando correctamente y que se está recibiendo una respuesta del servidor.

El estado (status) más comúnmente utilizado en los sitios web es el código de respuesta HTTP 200, lo que indica que la petición se ha procesado correctamente y que se ha enviado una respuesta del servidor.

![Panel](/img/docs/artemis/monitoreo/status.webp)

### HTTP Status Code

Los códigos de estado HTTP indican si una solicitud HTTP específica se ha completado correctamente. Las respuestas se agrupan en cinco clases:

- Respuestas informativas (100–199)
- Respuestas satisfactorias (200–299)
- Redirecciones (300–399)
- Errores de los clientes (400–499)
- Errores de los servidores (500–599)

![Panel](/img/docs/artemis/monitoreo/http-status-code.webp)

### HTTP Version

La versión de HTTP indica el protocolo que se utiliza para la comunicación entre el cliente (como un navegador web) y el servidor. En este caso, el número **2** se refiere a **HTTP/2**, una versión del protocolo que mejora el rendimiento y la eficiencia en comparación con versiones anteriores, como HTTP/1.1. Por ejemplo, HTTP/2 permite la multiplexación, que acelera la carga de recursos en un sitio web.

![Panel](/img/docs/artemis/monitoreo/http-version.webp)

### SSL

El protocolo SSL (Secure Sockets Layer) es un protocolo de seguridad que permite que los datos se transmitan de forma segura entre un servidor web y un navegador web. SSL garantiza que todos los datos transmitidos entre el servidor web y el navegador web permanezcan privados y seguros.

![Panel](/img/docs/artemis/monitoreo/ssl.webp)

### HTTP Duration

La duración de una solicitud HTTP (HTTP Duration) se refiere al tiempo que tarda una solicitud en completarse, es decir, desde el momento en que se envía la solicitud hasta el momento en que se recibe la respuesta. Esto incluye el tiempo que se tarda en establecer la conexión, enviar y recibir los datos y cualquier otro proceso necesario para completar la solicitud.

Se compone de varias métricas que describen diferentes partes del proceso de transmisión y procesamiento de una solicitud y su respuesta. Aquí te las explico:

- **Connect:** se refiere al tiempo que tarda en establecer una conexión con el servidor. Esta métrica incluye el tiempo que se tarda en hacer la resolución de DNS y el tiempo que se tarda en establecer una conexión TCP.

- **Resolve:** se refiere al tiempo que se tarda en resolver el nombre del dominio de la URL de la solicitud en una dirección IP.

- **Tls:** se refiere al tiempo que se tarda en establecer una conexión segura TLS/SSL con el servidor.

- **Transfer:** se refiere al tiempo que se tarda en transferir los datos de la respuesta desde el servidor al cliente.

- **Processing:** se refiere al tiempo que se tarda en procesar la respuesta recibida antes de que pueda ser renderizada en el navegador. Esta métrica incluye el tiempo que se tarda en decodificar los datos de la respuesta y el tiempo que tarda el navegador en renderizar la página.

Cada una de estas métricas puede ser medida y monitorizada por separado para identificar cuellos de botella en el proceso de transmisión y procesamiento de la solicitud y así mejorar el rendimiento del sitio web.

![Panel](/img/docs/artemis/monitoreo/http-duration.webp)

### SSL Expiry

Muestra el tiempo restante antes de que caduque el certificado SSL del sitio web. El certificado SSL es un certificado digital que se utiliza para autenticar la identidad de un sitio web y cifrar la información que se envía al servidor.

![Panel](/img/docs/artemis/monitoreo/ssl-expiry.webp)

### Duración de la prueba

Aquí tienes una versión más clara y sin términos técnicos complejos:

---

**Duración de la prueba**

La **duración de la prueba** mide el tiempo que tarda un sistema de monitoreo en obtener una respuesta de un servicio o recurso. Este indicador refleja la rapidez o lentitud con la que un servicio responde a las solicitudes.

#### ¿Por qué es importante?
La duración de la prueba es una métrica clave para evaluar el rendimiento y la estabilidad de un servicio web. Puede ayudar a identificar dos posibles situaciones:

1. **Demora excesiva:** Si el tiempo es alto (por ejemplo, varios segundos), podría significar que el servicio está sobrecargado, tiene problemas de rendimiento o enfrenta latencia en la red. Esto podría afectar negativamente la experiencia del usuario.
2. **Tiempo inusualmente corto:** Si el tiempo es demasiado bajo, podría indicar que la prueba no está evaluando completamente el estado del servicio, lo que podría generar resultados poco fiables.

#### Ejemplo:
Un sistema de monitoreo realiza pruebas periódicas para verificar que un servicio esté funcionando correctamente. Si la duración de la prueba es alta (por ejemplo, más de 3 segundos), podría ser señal de que el servicio está tardando demasiado en responder, lo que puede indicar un problema que requiere atención.

![Panel](/img/docs/artemis/grafana-panel.webp)

### Duración promedio de la prueba

Se refiere a la duración promedio de las pruebas realizadas por un sistema de monitoreo durante un período de tiempo determinado.

Es una métrica importante porque puede indicar si el sistema de monitoreo está funcionando correctamente y si se está probando adecuadamente el servicio o recurso que se desea verificar. Si el Average Probe Duration es más prolongado de lo que se espera, puede indicar un problema de rendimiento en el sistema de monitoreo o en la red que está interfiriendo con las pruebas.

![Panel](/img/docs/artemis/monitoreo/average-probe-duration.webp)

### Tiempo promedio de resolución DNS

Se refiere al tiempo promedio que tarda un sistema en resolver una dirección DNS (Domain Name System) durante un período de tiempo determinado.

Es una métrica importante porque puede indicar si el servidor DNS está funcionando correctamente y si se están resolviendo las direcciones de manera rápida y eficiente. Si el Average DNS Lookup es demasiado lento, puede indicar que el servidor DNS está sobrecargado o que hay problemas de red que están afectando el rendimiento.

![Panel](/img/docs/artemis/monitoreo/average-dns-lookup.webp)

Este grupo de paneles se duplica dependiendo de la cantidad de servicios que se estén monitorizando.
