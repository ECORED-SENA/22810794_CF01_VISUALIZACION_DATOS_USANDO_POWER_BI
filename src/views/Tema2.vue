<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Identificación y priorización de requerimientos del cliente
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p En este apartado se desarrollan los fundamentos necesarios para identificar, analizar y priorizar los requerimientos de información que surgen a partir de una necesidad real del cliente o del contexto organizacional. Este proceso constituye un punto de partida esencial dentro de la analítica de datos, ya que permite alinear las soluciones analíticas con los objetivos estratégicos del negocio.
        p.mb-0 En este sentido, la identificación de requerimientos implica comprender la problemática, traducirla en preguntas clave y determinar qué información es necesaria para responderlas de manera efectiva. A partir de ello, se establecen indicadores y requerimientos analíticos que orientan la construcción de un modelo de datos pertinente, coherente y útil para la toma de decisiones.
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img13.png', alt='').m-auto
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 El rol de los requerimientos en los proyectos de analítica de datos
    p.mb-5 A continuación, se presenta una explicación sobre el rol de los requerimientos en los proyectos de analítica de datos, destacando su importancia como base para orientar el proceso analítico y asegurar la generación de valor en las organizaciones.
    .row.align-items-center.m-0.mb-0
      .col-xl
        .row.align-items-center.justify-content-center.caja-podcast(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img14.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="El rol de los requerimientos en los proyectos de analítica de datos"
              :audio="require('@/assets/curso/podcast/podcast.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img15.jpg" ).m-auto
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 ¿Qué se entiende por requerimientos del cliente?
    p.mb-5 En el contexto de Power BI y la analítica de datos, un requerimiento no se limita a una lista de funcionalidades de #[i software], sino que representa la traducción de una necesidad del negocio en una estructura de datos que pueda ser consultada, analizada e interpretada de manera efectiva.
    .caja-tema1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img16.png', alt='').m-auto
        .col-xl
          p.mb-0 De este modo, los requerimientos del cliente corresponden a las necesidades de información que deben satisfacerse para respaldar la toma de decisiones. Estos deben formularse de manera clara, comprensible y medible, evitando ambigüedades, generalidades o enfoques exclusivamente técnicos que no aporten valor analítico. En este sentido, es fundamental distinguir algunos conceptos clave que estructuran el proceso de definición de requerimientos:
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img17.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Necesidad
          p.mb-0.text-center Situación, problema u oportunidad que requiere atención dentro del contexto organizacional. Constituye el origen del proceso analítico.
      .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img18.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Requerimiento
          p.mb-0.text-center Expresión estructurada de la información necesaria para atender una necesidad específica. Se formula de manera clara, medible y orientada a la toma de decisiones.
      .col-lg-4.col-md-9(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img19.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Indicador (KPI)
          p.mb-0.text-center Medida cuantitativa que permite evaluar el comportamiento de una variable relevante en función de los objetivos del negocio.
    p Desde la perspectiva de la analítica de datos, los requerimientos no surgen de manera aislada, sino que se construyen a partir de preguntas de negocio. Estas preguntas orientan el tipo de información que debe analizarse, así como la forma en que los datos deben organizarse y representarse.
    p.mb-0 Una adecuada formulación de requerimientos garantiza que el proceso analítico responda de manera efectiva a las necesidades del cliente, facilitando la generación de información útil, pertinente y alineada con los objetivos estratégicos de la organización.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Identificación de requerimientos de información
    p.mb-5 La identificación de requerimientos de información constituye un proceso analítico que parte del entendimiento del contexto del cliente o de la organización. En esta etapa, el propósito es traducir las necesidades del negocio en información estructurada que permita respaldar la toma de decisiones de manera efectiva. Este proceso implica una comprensión integral de los elementos clave que intervienen en la dinámica organizacional. A continuación, se presentan los aspectos fundamentales que deben analizarse:
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5 
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img21.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img22.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Objetivo organizacional
                p.mb-0.text-center Define el propósito estratégico del área o de la organización, el cual orienta el análisis de la información.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img23.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Decisiones a tomar
                p.mb-0.text-center Determina las acciones que requieren respaldo analítico, permitiendo enfocar el tipo de información necesaria.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img24.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Información requerida
                p.mb-0.text-center Especifica los datos necesarios para sustentar las decisiones identificadas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img25.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Actores involucrados
                p.mb-0.text-center Identifica a los usuarios que consumirán la información, así como sus necesidades y nivel de análisis.
        p.mb-5 Este proceso suele apoyarse en el análisis de escenarios, la revisión de procesos y la comprensión del contexto productivo. De acuerdo con Laudon y Laudon (2020), una adecuada identificación de requerimientos permite alinear los sistemas de información con la estrategia organizacional, evitando el desarrollo de soluciones que no generan valor.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img26.svg" style="max-width: 60px").m-auto
      .col
        h3 El proceso de mapeo 
    p.mb-5 El proceso de mapeo permite descomponer un requerimiento en sus componentes de información, identificando las fuentes de datos necesarias para su análisis. Este enfoque facilita la estructuración del modelo de datos y garantiza la coherencia entre la necesidad del negocio y la solución analítica. Para comprender su aplicación, se presenta el siguiente caso:
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img27.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h5.d-flex Caso de uso. Gestión de ventas
        p.d-flex #[b Requerimiento]: conocer la rentabilidad por vendedor en el último trimestre.
        h5 Información necesaria	
        br
        ul.fa-ul.estilo___ul_bloque.mb-0
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            |
            p.mb-0 #[b Ventas]: monto total facturado (fuente: base de datos SQL). 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            |
            p.mb-0 #[b Costos]: valor de adquisición de productos (fuente: archivo de Excel del área de compras). 
          li.mb-0.d-flex
            span.fa-li
              i.fas.fa-check-circle
            |
            p.mb-0 #[b Vendedores]: nombres y metas asignadas (fuente: archivo plano del área de talento humano).
    p.mb-0 Este ejercicio de mapeo permite evidenciar cómo un requerimiento específico se traduce en múltiples fuentes de datos que deben integrarse para generar información útil. La identificación adecuada de requerimientos no solo facilita la estructuración técnica del análisis, sino que también garantiza la pertinencia de los resultados frente a las necesidades reales del negocio.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Preguntas de negocio como base del análisis
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Las preguntas de negocio constituyen una herramienta fundamental en la formulación de requerimientos de información, ya que permiten enfocar el análisis hacia aspectos relevantes para la organización. Su adecuada formulación evita la recopilación innecesaria de datos y orienta el proceso analítico hacia la generación de valor.
        p.mb-0 En este sentido, las preguntas de negocio actúan como un puente entre la necesidad del cliente y los datos disponibles, facilitando la estructuración del análisis y la definición de indicadores pertinentes. Estas preguntas deben ser claras, específicas y alineadas con los objetivos organizacionales. A continuación, se presentan algunos ejemplos representativos de preguntas de negocio:
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img28.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img29.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center ¿Cuántos servicios se prestan en un período determinado?
            p.mb-0.text-center Cuantificación de la operación en un intervalo de tiempo específico.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img30.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center ¿Qué áreas presentan mayor demanda?
            p.mb-0.text-center Identificación de patrones de comportamiento y distribución de la demanda.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img31.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center ¿Cómo se comporta una variable a lo largo del tiempo?
            p.mb-0.text-center Análisis de tendencias y variaciones temporales.
    p.mb-0 Este tipo de preguntas se asocia directamente con la analítica descriptiva, ya que se orienta a comprender qué ha ocurrido y cómo se manifiestan los fenómenos en los datos (Few, 2006).
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Priorización de requerimientos
    p.mb-5 La priorización de requerimientos constituye una etapa fundamental dentro del proceso analítico, ya que no todos los requerimientos identificados poseen el mismo nivel de relevancia o impacto. Este proceso permite establecer un orden lógico de atención, asegurando que los esfuerzos se concentren en aquellos aspectos que generan mayor valor para la organización.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img32.png', alt='').m-auto
      .col-xl
        p En este sentido, priorizar implica evaluar los requerimientos con base en criterios estratégicos y operativos, lo que facilita la definición de un alcance viable para la solución analítica. Además, contribuye a evitar la sobrecarga de información y a enfocar el análisis en los elementos verdaderamente significativos. A continuación, se presentan los principales criterios utilizados para la priorización de requerimientos:
        .caja-tema1-3(data-aos="fade-left")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Impacto en la toma de decisiones.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Alineación con los objetivos organizacionales.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Disponibilidad y calidad de los datos.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Alcance del análisis.
    p.mb-0 La priorización contribuye a definir un #[b alcance viable] para la solución analítica y evita la sobrecarga de información. Concentrarse en los indicadores clave facilita la comprensión de la información y mejora la comunicación de los resultados.
    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Desglose práctico
    p El desglose práctico permite comprender cómo una necesidad del negocio se transforma progresivamente en un requerimiento estructurado y, posteriormente, en un indicador que facilita la toma de decisiones. Este proceso evidencia la relación directa entre el problema, la información requerida y la medición del desempeño.
    p.mb-5 En el contexto de una empresa de retail (comercio), este proceso puede entenderse de la siguiente manera:
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img33.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Necesidad (problema)
          p.mb-0.text-center “Se presentan pérdidas económicas debido al desconocimiento de los productos que permanecen en bodega durante largos periodos”.
      .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img34.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Requerimiento (solución de información)
          p.mb-0.text-center Visualizar el inventario promedio mensual en comparación con las ventas del mismo periodo, segmentado por categoría de producto.
      .col-lg-4.col-md-9(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img35.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Indicador (KPI)
          p.mb-0.text-center Índice de rotación de inventario: relación entre el costo de ventas y el promedio de inventario.
    p.mb-5 Este desglose permite evidenciar cómo una situación inicial se traduce en una necesidad concreta de información y, posteriormente, en una métrica que facilita el análisis y la toma de decisiones.
    .bg-2
      .px-5
        .caja-tema1-1.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img26.svg" style="max-width: 60px").m-auto
          .col
            h3 El requerimiento como puente
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            p El requerimiento cumple una función articuladora entre el lenguaje del negocio y el lenguaje técnico del análisis de datos. Mientras el cliente expresa necesidades en términos generales, el analista las transforma en estructuras claras, medibles y orientadas al análisis.
            p.mb-0 Un error frecuente consiste en formular solicitudes ambiguas, como “necesito un tablero bonito”. En contraste, un requerimiento bien definido se orienta a la acción, por ejemplo: identificar el top 5 de vendedores con menor margen de utilidad para implementar estrategias de mejora. A continuación, se presenta una comparación entre una solicitud general y un requerimiento estructurado:
          .col-xl-auto.col-md-9(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img36.png', alt='').m-auto
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Una vista práctica para el análisis y generación de requerimientos
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Aspecto
                    th.ajuste-border-tabla.texto-left Solicitud general (lo que el cliente dice)
                    th.texto-left Requerimiento estructurado (lo que el analista define)
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Enfoque]
                    td.ajuste-border-tabla.texto-left "Quiero ver las ventas"
                    td.texto-left "Visualizar el total de ventas brutas y netas por canal de distribución (físico vs. online) durante el último año"
                  tr
                    td.ajuste-border-tabla.texto-left #[b Temporalidad]
                    td.ajuste-border-tabla.texto-left Indefinida
                    td.texto-left Comparativa mensual y acumulada anual (#[i Year-to-Date])
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Acción]
                    td.ajuste-border-tabla.texto-left Observar
                    td.texto-left Identificar desviaciones superiores al 5 % respecto a la meta presupuestada
        .caja-tema1-1.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img26.svg" style="max-width: 60px").m-auto
          .col
            h3 Caso de uso: sector educación
        p.mb-5 Para contextualizar el proceso en otro entorno, se presenta un caso aplicado al sector educativo. En este escenario, el requerimiento surge a partir de una necesidad institucional relacionada con la permanencia estudiantil.
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Requerimiento
                p.mb-0.text-center Identificar la tasa de deserción de estudiantes en cursos virtuales, segmentada por zona geográfica y tipo de conectividad, con el fin de priorizar la entrega de kits de estudio.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Pregunta de negocio
                p.mb-0.text-center ¿En qué regiones los estudiantes presentan mayor deserción asociada a limitaciones de acceso a internet?
          .col-xl-4.col-md-9(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Datos necesarios
                p.mb-0.text-center Estado de matrícula, ubicación del estudiante y resultados de encuestas sobre acceso a tecnología.
        p.mb-0 Este ejercicio permite evidenciar cómo los requerimientos se estructuran a partir de necesidades reales, se traducen en preguntas de negocio y se materializan en datos concretos para su análisis.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
