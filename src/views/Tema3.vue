<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Tipos de fuentes
    p.mb-5 En este apartado se abordan los conceptos relacionados con las fuentes de datos y el ecosistema de datos, reconociendo su papel dentro de los procesos de analítica de datos y #[i Business Intelligence] (BI). El propósito es comprender el origen de los datos, su clasificación y las características que deben considerarse para garantizar su pertinencia y confiabilidad en la construcción de modelos de datos alineados con los requerimientos del cliente.
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-xl-auto
        .caja-tema3
          p.mb-0.text-center #[b Los datos como insumo fundamental de la analítica.]
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .caja-intro-1.ajuste-intro-1(data-aos="fade-right")
          p.mb-0 Los datos constituyen el insumo principal de cualquier proceso analítico. Sin la disponibilidad de datos adecuados, oportunos y confiables, no es posible generar información útil ni respaldar la toma de decisiones dentro de una organización.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img38.jpg', alt='').m-auto
      .col-xl
        figure.d-none.d-xl-block.mb-1(data-aos="fade-left")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 65px")
        p.mb-0 Sin embargo, no todos los datos poseen el mismo valor, ni todas las fuentes resultan pertinentes para un análisis específico. Por esta razón, la selección de fuentes de datos debe realizarse de manera estratégica, evitando la acumulación de información que no aporte valor al objetivo analítico. De acuerdo con Harris  y Davenport (2007), uno de los retos más frecuentes en los proyectos de analítica consiste en identificar las fuentes de datos correctas, asegurando su alineación con los requerimientos definidos y con los objetivos del negocio.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Tipos de fuentes de datos en analítica
    p.mb-5 Una fuente de datos se define como el origen desde el cual se obtiene la información que será utilizada en un proceso de análisis. Estas fuentes pueden variar según el contexto organizacional, el sector productivo y la naturaleza de los requerimientos de información. En términos generales, las fuentes de datos se clasifican según su procedencia, lo que permite comprender su nivel de control, confiabilidad y disponibilidad dentro del proceso analítico. Se presentan las principales categorías de fuentes de datos:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img40.png', alt="" ).m-auto
            h4.text-center Fuentes internas
            p.mb-0.text-center Generadas dentro de la organización, como sistemas de información, bases de datos operativas y archivos administrativos. Se caracterizan por un mayor control y alineación con los procesos del negocio.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-tema3-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img41.png', alt="" ).m-auto
            h4.text-center Fuentes externas
            p.mb-0.text-center Provenientes de entidades externas, como organismos oficiales, proveedores, clientes o fuentes abiertas. Aportan contexto adicional, pero pueden requerir validación y ajustes.
    p Reconocer el origen de los datos permite evaluar aspectos clave como su confiabilidad, actualidad y pertinencia para el análisis, lo cual resulta fundamental en la toma de decisiones (Kenneth C. y Laudon, 2016).
    p.mb-5 Más allá de su origen, es necesario identificar el tipo de repositorio o formato en el que reside la información, ya que esto determina el tratamiento técnico requerido para su integración y análisis. A continuación, se presentan los principales tipos de fuentes según su estructura y almacenamiento:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img42.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Bases de datos relacionales").ajuste-cajaAcordion
            p.mb-3 Sistemas estructurados como SQL u Oracle. Presentan alta integridad de los datos, ya que almacenan información organizada en tablas relacionadas. Son comunes en sistemas transaccionales y permiten acceso a datos históricos y actualizados.
          .row(titulo="Archivos planos (CSV/TXT)").ajuste-cajaAcordion
            p.mb-3 Datos exportados desde otros sistemas. Requieren procesos de limpieza y depuración más rigurosos debido a posibles inconsistencias o falta de estructura.
          .row(titulo="<em>Logs</em> o registros").ajuste-cajaAcordion
            p.mb-3 Registros de eventos o transacciones. Se utilizan para analizar comportamientos, frecuencias, patrones de uso y procesos de auditoría.
          .row(titulo="Archivos de Excel").ajuste-cajaAcordion
            p.mb-3 Fuente ampliamente utilizada en entornos organizacionales. Son accesibles y flexibles, pero requieren control en la calidad, consistencia y estandarización de los datos.
    p.mb-0 Cada tipo de fuente presenta ventajas y limitaciones que deben ser evaluadas en función del requerimiento analítico y del modelo de datos que se desea construir (Kimball y Ross, 2013).
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Clasificación de los datos según su estructura
    p Desde la perspectiva del ecosistema de datos, estos pueden clasificarse según su nivel de estructura, lo que determina la forma en que pueden ser almacenados, procesados y analizados dentro de un entorno organizacional.
    p.mb-5 Esta clasificación resulta fundamental en la analítica de datos, ya que condiciona las técnicas, herramientas y modelos que pueden aplicarse para transformar los datos en información útil. A continuación, se presentan los principales tipos de datos según su estructura:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-0 Datos estructurados
                P.
                p.mb-5 Se organizan en esquemas definidos, generalmente en tablas con filas y columnas, como en las bases de datos relacionales. Facilitan su almacenamiento, consulta y análisis mediante herramientas tradicionales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img43.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-0 Datos semiestructurados
                P.
                p.mb-5 Poseen cierta organización, pero no siguen un esquema rígido. Ejemplos comunes incluyen archivos JSON o XML, donde la información se estructura mediante etiquetas o claves.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img44.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4.mb-0 Datos no estructurados
                P.
                p.mb-5 No presentan una estructura predefinida. Incluyen textos libres, imágenes, audios o videos, lo que dificulta su procesamiento mediante métodos tradicionales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img45.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 En el contexto de la analítica descriptiva y la visualización de datos, los datos estructurados y semiestructurados son los más utilizados, debido a su facilidad de procesamiento y análisis mediante herramientas especializadas (Provost y Fawcett, 2013).
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in")
      .col-xl-10
        .caja-tema3.ajuste-color-1
          p.mb-0 Con el avance de la Inteligencia Artificial, el uso de fuentes no estructuradas se procesa e interpreta a partir de sensaciones en redes sociales, reputaciones y comentarios para generar conclusiones objetivas y medibles a partir de este tipo de datos.
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Ecosistema de datos
    p El ecosistema de datos se refiere al conjunto de fuentes, sistemas, procesos y actores que interactúan alrededor de los datos dentro de una organización. Este ecosistema incluye no solo los datos en sí, sino también los procesos mediante los cuales se generan, almacenan, transforman y utilizan.
    p.mb-5 Comprender el ecosistema de datos permite identificar dependencias, flujos de información y posibles limitaciones que pueden afectar el análisis. Según Kimball y Ross (2013), una visión integral del ecosistema facilita la integración de datos y la coherencia de las soluciones analíticas. Un ecosistema de datos eficiente no es solo una conexión de cables y servidores; es la infraestructura estratégica que permite que la analítica descriptiva, diagnóstica, predictiva y prospectiva tenga lugar. A continuación, se presentan los principios clave para su diseño:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Enfoque de negocio
            p.mb-0.text-center El ecosistema se diseña en función de las preguntas de negocio que se deben responder.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Coherencia
            p.mb-0.text-center Los datos deben ser consistentes entre áreas; diferencias en cifras indican fallas que requieren procesos de validación y limpieza.
    p.mb-0 El ecosistema de datos debe responder a necesidades reales del negocio y garantizar la consistencia de la información para que el análisis genere valor.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Calidad de los datos y su impacto en el análisis
    p.mb-5 La calidad de los datos es un aspecto crítico en cualquier proceso de analítica. Datos incompletos, duplicados o inconsistentes pueden conducir a conclusiones erróneas y afectar la toma de decisiones. A continuación, se integran los aspectos más relevantes de la calidad de los datos:
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Integridad de la información").ajuste-cajaAcordion
            p Asegura que los datos sigan reglas lógicas y que no existan vacíos que rompan el análisis.
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Integridad referencial]: garantiza que cada registro de venta esté asociado a un cliente o producto existente en el modelo de datos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Completitud]: un requerimiento de información no puede satisfacerse si faltan atributos clave; por ejemplo, si un log de servidor no registra la fecha, no se puede realizar analítica descriptiva temporal.
          .row(titulo="Consistencia entre fuentes").ajuste-cajaAcordion
            p En proyectos de #[i Business Intelligence (BI)] se integran datos desde diferentes fuentes (Excel, SQL, archivos planos). La consistencia garantiza que el dato signifique lo mismo en todo el ecosistema.
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Estandarización]: si una fuente registra “COL” y otra “Colombia”, la integración falla.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Unicidad de la verdad]: evita criterios contradictorios entre departamentos (silos de datos), asegurando una visión coherente.
          .row(titulo="Actualización y vigencia de los datos").ajuste-cajaAcordion
            p La utilidad de la analítica depende de qué tan reciente sea la información para la toma de decisiones.
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Latencia]: tiempo entre la ocurrencia del hecho y su disponibilidad en Power BI u otra herramienta.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Configuración de tiempos]: programación del cargue automático de datos para reflejar la realidad actual.
          .row(titulo="Ausencia de duplicados y depuración de valores").ajuste-cajaAcordion
            p La depuración de datos es obligatoria antes de generar reportes.
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Limpieza]: eliminación de registros duplicados que inflan artificialmente los indicadores (KPI).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tratamiento de nulos]: decisión sobre valores faltantes (eliminar, imputar o clasificar como “Desconocido”) para evitar sesgos en la analítica descriptiva.
    p.mb-5 Este enfoque permite analizar de manera estructurada los factores que afectan la confiabilidad de los datos.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img26.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejemplo práctico: el costo de la mala calidad
    p.mb-5 Para evidenciar el impacto de una deficiente calidad de datos, se presenta el siguiente caso:
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img46.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Duplicados
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | El sistema de reservas registró dos veces el mismo #[i check-in].
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | La ocupación aparece al 120 %, lo cual es un valor imposible.
      .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img47.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Falta de vigencia
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | El reporte se actualizó hace 48 horas.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | El gerente toma decisiones con información desactualizada.
      .col-lg-4.col-md-9(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img48.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Inconsistencia
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Un hotel usa “Sencilla” y otro “#[i Single]”.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | El reporte muestra dos categorías distintas para el mismo tipo de habitación.
    p La evaluación de la calidad de los datos debe realizarse desde etapas tempranas, incluso antes de definir el modelo de datos, ya que impacta directamente la viabilidad de la solución analítica (Redman, 2008).
    p.mb-0 Los datos constituyen la base de los procesos de analítica y #[i Business Intelligence (BI)]. Comprender su origen, estructura, ecosistema y calidad permite desarrollar soluciones analíticas coherentes y alineadas con las necesidades del negocio. En este sentido, la correcta selección y validación de los datos garantiza que la información generada sea confiable y útil para la toma de decisiones organizacionales.
</template>

<script>
export default {
  name: 'Tema3',
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
