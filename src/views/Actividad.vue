<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de analítica, requerimientos y modelado de datos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los fundamentos de la analítica de datos, la identificación y priorización de requerimientos, las fuentes y el ecosistema de datos, el modelado de datos y los conceptos básicos del proceso ETL, como base para soluciones de <i>Business Intelligence</i>.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'La analítica de datos se define principalmente como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El uso de herramientas tecnológicas para crear gráficos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El almacenamiento masivo de información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El conjunto de procesos orientados a analizar datos para apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La automatización de sistemas de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'La analítica descriptiva se caracteriza por responder a la pregunta:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '¿Qué debería hacerse?',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '¿Qué pasará en el futuro?',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '¿Por qué ocurrió un evento?',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '¿Qué ocurrió?',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '<i>Business Intelligence</i> tiene como propósito principal:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar los sistemas transaccionales por otros más ágiles y de mejor modelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Convertir datos en información útil para la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Automatizar procesos operativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de análisis humano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Un requerimiento de información se entiende como:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una necesidad de información formulada de manera clara y medible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un deseo general del cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una solicitud técnica de una herramienta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un indicador visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Las preguntas de negocio permiten principalmente:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seleccionar herramientas tecnológicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Formular requerimientos de información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar interfaces gráficas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Automatizar procesos ETL.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'La priorización de requerimientos busca:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar requerimientos complejos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Abordar todos los requerimientos al mismo tiempo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar cuáles requerimientos generan mayor valor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la cantidad de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Una fuente de datos interna corresponde a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Información obtenida de fuentes públicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Datos generados dentro de la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Datos estadísticos externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Información no estructurada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál de los siguientes es un ejemplo de archivo plano?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Base de datos relacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Archivo CSV.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sistema ERP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Repositorio de imágenes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'Los datos estructurados se caracterizan por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estar organizados en tablas con filas y columnas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No tener ningún tipo de organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presentarse únicamente en texto libre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser datos multimedia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'La calidad de los datos impacta directamente:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La estética de los tableros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El diseño de interfaces.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La confiabilidad de los análisis.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La velocidad de internet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'Un modelo de datos permite principalmente:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar archivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Automatizar reportes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar interfaces gráficas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Representar de forma estructurada la información.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'La granularidad en un modelo de datos define:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El formato del archivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El nivel de detalle de los registros.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tipo de gráfico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La estética.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'En un modelo dimensional, la tabla de hechos se caracteriza por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contener eventos medibles.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Almacenar descripciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir reglas de negocio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Representar catálogos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'Las dimensiones permiten principalmente:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcular indicadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proporcionar contexto para el análisis.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacenar eventos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Automatizar transformaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'El proceso ETL corresponde a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Extracción, Transformación y Lectura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluación, Transformación y Limpieza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Extracción, Transformación y Carga.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ejecución, Transferencia y Listado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Una organización desea conocer cuántos servicios presta por mes y por sede. ¿Qué tipo de analítica se aplica?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Predictiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prospectiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diagnóstica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Descriptiva.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Un cliente solicita “un tablero bonito” sin definir análisis. ¿Qué debe hacerse primero?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seleccionar gráficos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Instalar herramienta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar y formular requerimientos de información.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Construir el tablero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Un indicador presenta duplicados por relaciones incorrectas. ¿Qué falló?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Visualización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Granularidad del modelo de datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tipo de gráfico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Color del tablero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Se integran datos de Excel y base de datos, corrigiendo formatos. ¿Qué proceso es?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modelado lógico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Visualización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Auditoría.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ETL.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Un modelo de datos no responde una pregunta clave. ¿Qué debe revisarse primero?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La alineación entre requerimientos y modelo de datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La herramienta de visualización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El diseño gráfico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El formato del archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
