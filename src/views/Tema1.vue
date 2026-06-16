<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Introducción a la analítica de datos y #[i Business Intelligence]
    p.mb-5 En este apartado, se abordan los fundamentos de la analítica de datos y el #[i Business Intelligence] (BI) como ejes clave para la toma de decisiones en los entornos organizacionales. A partir de una comprensión general de estos conceptos, se busca establecer un marco conceptual que permita reconocer el valor de los datos, su análisis y su uso estratégico antes de abordar procesos técnicos o herramientas específicas.
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 La importancia de los datos en los entornos actuales
    p.mb-5 A continuación, se presenta una explicación sobre la importancia de los datos en los entornos actuales, destacando su papel en la generación de información útil, la optimización de procesos y el fortalecimiento de la toma de decisiones en las organizaciones.
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-pX4_R0sxYQ?si=mVkDAjq7dk3r4YEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. La importancia de los datos en los entornos actuales.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Analítica de datos y #[i Business Intelligence] (BI)
    p.mb-5 La analítica de datos se comprende como el conjunto de procesos y técnicas orientadas a examinar, transformar y analizar datos con el propósito de obtener información significativa que respalde la toma de decisiones. Este enfoque inicia con la comprensión del problema, la formulación de preguntas clave y la identificación de los datos necesarios para responderlas. En este sentido, la analítica de datos permite evolucionar desde una gestión basada en la intuición hacia una gestión fundamentada en evidencia, donde las decisiones se apoyan en información confiable, estructurada y pertinente.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/img1.png', alt='').m-auto
      .col-xl
        .row.align-items-center.mb-3
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img2.svg', alt='').m-auto
          .col-xl
            p.mb-0 Por su parte, el #[i Business Intelligence] (BI) constituye un primer acercamiento al ecosistema de inteligencia de negocios, centrado en el uso de herramientas de visualización que convierten los datos en información accionable para las organizaciones.
        p.mb-0 Es relevante reconocer que, aunque la analítica de datos y el BI están estrechamente relacionados dentro del contexto de la industria 4.0, presentan diferencias en su enfoque, alcance y aplicación estratégica. A continuación, se presenta la comparación técnica basada en las necesidades de los sectores productivos y la transformación digital:
    .bg-1
      .px-5 
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Diferencias: Inteligencia de Negocios (BI) vs. Analítica de datos
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Característica
                    th.ajuste-border-tabla.texto-left Inteligencia de Negocios (BI)
                    th.texto-left Analítica de datos
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Enfoque temporal]
                    td.ajuste-border-tabla.texto-left Se centra en el #[b pasado y el presente] para entender qué sucedió
                    td.texto-left Se centra en el #[b futuro y las tendencias] para predecir qué podría pasar
                  tr
                    td.ajuste-border-tabla.texto-left #[b Objetivo principal]
                    td.ajuste-border-tabla.texto-left Lograr autonomía, disponibilidad y facilidad de acceso a la información estratégica
                    td.texto-left Examinar datos en bruto para descubrir patrones, correlaciones y nuevas perspectivas
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Pregunta clave]
                    td.ajuste-border-tabla.texto-left ¿Qué pasó y cómo podemos optimizar lo que tenemos hoy?
                    td.texto-left ¿Por qué sucedió y qué es probable que ocurra después?
                  tr
                    td.ajuste-border-tabla.texto-left #[b Uso de herramientas]
                    td.ajuste-border-tabla.texto-left Visualización de datos (como Power BI) para la creación de #[i dashboards] y reportes
                    td.texto-left Minería de datos, #[i Big Data] y modelos estadísticos complejos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Resultado]
                    td.ajuste-border-tabla.texto-left Toma de decisiones basadas en datos para la eficiencia operativa actual
                    td.texto-left Transformación digital a través de modelos predictivos y prospectivos
        Separador
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Tipos de analítica de datos
        p La analítica de datos no constituye un proceso estático; por el contrario, evoluciona desde la interpretación de hechos pasados hasta la construcción de escenarios futuros complejos. Esta progresión permite a las organizaciones incrementar su capacidad de comprensión, anticipación y acción estratégica.
        p.mb-5 En este contexto, se reconocen diferentes tipos de analítica, cada uno con un propósito específico dentro del proceso de toma de decisiones. Aunque este componente se centra principalmente en la analítica descriptiva, es fundamental comprender el panorama completo para dimensionar su alcance. A continuación, se presentan los principales tipos de analítica de datos, organizados según su nivel de complejidad y propósito:
        .bg-slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4.mb-0 Analítica descriptiva 
                    p (¿Qué pasó?)
                    p Es el nivel base y el enfoque principal de este programa de formación mediante el uso de #[b Power BI].
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Objetivo]: condensar grandes volúmenes de datos en información comprensible. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Herramientas clave]: #[i dashboards], tablas, gráficos de barras y líneas, especialmente en herramientas como Power BI. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo]: reporte de ventas mensuales que evidencia una disminución del 10 % en la región andina.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4.mb-0 Analítica diagnóstica 
                    p (¿Por qué pasó?)
                    p Busca las causas raíz de los eventos detectados en la etapa descriptiva.
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Objetivo]: identificar causas raíz de los eventos detectados. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Herramientas clave]: minería de datos y técnicas de descubrimiento de datos.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo]: determinación de que la caída del 10 % en ventas se originó en un retraso logístico en la cadena de frío de la agroindustria.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4.mb-0 Analítica predictiva 
                    p (¿Qué pasará?)
                    p Utiliza modelos estadísticos y algoritmos de tendencia para estimar resultados futuros.
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Objetivo]: anticipar comportamientos futuros a partir de datos históricos. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Herramientas clave]: modelos de regresión, series de tiempo y técnicas asociadas a la industria 4.0. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo]: estimación del volumen de ventas para el próximo trimestre con base en datos históricos de tres años.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4.mb-0 Analítica prospectiva o prescriptiva 
                    p (¿Cómo hacer que ocurra?)
                    p Es el nivel más avanzado, donde el sistema sugiere acciones para alcanzar un objetivo específico.
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Objetivo]: recomendar acciones óptimas para alcanzar objetivos estratégicos. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Herramientas clave]: algoritmos de optimización y simulación de escenarios. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo]: sistema que sugiere ajustar niveles de inventario y rutas de distribución para prevenir pérdidas futuras.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 #[i Business Intelligence] (BI): concepto y alcance
    p #[i Business Intelligence], o Inteligencia de Negocios, hace referencia al conjunto de estrategias, metodologías y herramientas que permiten #[b convertir los datos en información y conocimiento útil para la organización]. El BI integra la analítica de datos con procesos de gestión, orientando el análisis hacia los objetivos del negocio.
    p.mb-5 Desde esta perspectiva, el BI no se limita a la generación de reportes, sino que busca ofrecer una visión clara del desempeño organizacional, apoyar la planeación estratégica y facilitar el #[b seguimiento a indicadores clave]. La correcta implementación de iniciativas de BI depende, en gran medida, de la calidad del análisis previo y de la adecuada estructuración de los datos. A continuación, se presenta la transformación de los datos en valor estratégico, desde su recolección hasta la toma de decisiones fundamentadas en evidencia: 
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Datos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img9.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Datos
            p ¿Qué hay disponible? 
            p.mb-0 Transacciones sin procesar provenientes de bases de datos, archivos planos, Excel, #[i logs] y encuestas. Corresponde a colecciones de datos. Incluye procesos de extracción, transformación y carga (ETL).
      .py-3.py-md-4(titulo="Información")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img10.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Información
            p ¿Qué pasó?
            p.mb-0  Datos organizados, estructurados y con textos. Incluye reportes descriptivos, resumen de ventas y #[i dashboard] (BI). Se relaciona con la analítica descriptiva y el análisis exploratorio, correlaciones y modelados.
      .py-3.py-md-4(titulo="Conocimiento")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img11.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Conocimiento
            p ¿Por qué pasó?  ¿Qué pasará?
            p.mb-0 Identificación de patrones, tendencias e #[i insight]. Incluye analítica diagnóstica (causa), analítica predictiva (tendencias futuras) y modelos estadísticos y de #[i machine learning]. Se vincula con la Industria 4.0 y la minería de datos, además de la contextualización, experiencia y simulación de escenarios.
      .py-3.py-md-4(titulo="Decisión")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img12.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Decisión
            p ¿Qué se debe hacer? 
            p.mb-0 Acción basada en evidencia y estrategia. Incluye analítica prescriptiva (acciones sugeridas), decisiones basadas en datos, transformación digital, mejora de eficiencia y automatizaciones.
    p.mb-0 La analítica de datos y el #[i Business Intelligence] proporcionan el marco conceptual necesario para comprender cómo los datos pueden convertirse en un recurso estratégico. 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
