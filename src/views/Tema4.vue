<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Definición del modelo de datos
    p.mb-5 En este apartado  se desarrollan los elementos conceptuales y aplicados para definir un modelo de datos alineado con los requerimientos del cliente. Se establecen criterios para estructurar los datos mediante entidades o tablas, atributos, relaciones, granularidad y reglas de calidad, con el propósito de disponer una base coherente para procesos de analítica descriptiva y visualización (Kimball y Ross, 2013).
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Modelo de datos: concepto y función en analítica
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p Un modelo de datos corresponde a una representación estructurada de la información necesaria para analizar un fenómeno o proceso organizacional. Su función principal consiste en garantizar que los datos requeridos para responder los requerimientos estén organizados de manera consistente, comprensible y reutilizable.
        p.mb-0 Un modelo bien definido reduce ambigüedades, facilita la integración de fuentes y mejora la confiabilidad de los resultados analíticos (Kenneth C. y Laudon, 2016). En el contexto de la analítica descriptiva, el modelo de datos se convierte en un elemento articulador entre diferentes componentes del proceso analítico:
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img49.png', alt='').m-auto
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Requerimientos priorizados
            p.mb-0.text-center Definen lo que se necesita responder desde el negocio.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Fuentes de datos
            p.mb-0.text-center Representan la información disponible para el análisis.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Estructura analítica
            p.mb-0.text-center Define cómo se organizan los datos para permitir medición, comparación y análisis.
    p.mb-5 Este enfoque permite comprender el modelo de datos como un puente entre la necesidad del negocio y la solución analítica (Davenport y Harris, 2007).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img26.svg" style="max-width: 60px").m-auto
      .col
        h3 Elementos fundamentales del modelo de datos
    p.mb-5 Un modelo de datos bien estructurado permite que una herramienta de #[i Business Intelligence] (BI) pase de presentar datos aislados a habilitar análisis multidimensionales. Para su definición, se consideran los siguientes elementos:
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5 
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img50.png').m-auto
        h4.mb-3.estilo-text Entidades o tablas
        p.mb-0.text-center Corresponden a conjuntos de datos con un propósito común (por ejemplo: atenciones, usuarios, servicios, sedes).
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img51.png').m-auto
        h4.mb-3.estilo-text Registros
        p.mb-0.text-center Representan instancias específicas de una entidad (por ejemplo: una atención o un usuario particular).
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img52.png').m-auto
        h4.mb-3.estilo-text Atributos o campos
        p.mb-0.text-center Son las características que describen una entidad (por ejemplo: fecha de atención, tipo de servicio, sede, duración).
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img53.png').m-auto
        h4.mb-3.estilo-text Relaciones
        p.mb-0.text-center Definen cómo se conectan las entidades entre sí (por ejemplo: una sede registra múltiples atenciones; un servicio aparece en múltiples registros).
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img54.png').m-auto
        h4.mb-3.estilo-text Claves (identificadores)
        p.mb-0.text-center Permiten identificar registros de manera única y establecer relaciones entre tablas (por ejemplo: id_atención, id_sede, id_servicio).
    p.mb-0 Este conjunto de elementos permite estructurar los datos de manera lógica y coherente, facilitando su análisis y garantizando la consistencia de la información.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Niveles de modelado: conceptual, lógico y físico
    p.mb-5 En la práctica, el modelado de datos se describe en diferentes niveles que permiten organizar el proceso desde una visión general del negocio hasta su implementación técnica. Esta estructura facilita la comprensión progresiva de los datos y su adecuada organización dentro del modelo. A continuación, se presentan los niveles de modelado con sus características principales:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Conceptual
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Enfoque en la visión de negocio.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Responde a la pregunta: ¿Qué información se necesita?
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Entregable típico: mapa de entidades principales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img55.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Lógico
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Enfoque en la estructura y relaciones de los datos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Responde a la pregunta: ¿Cómo se relacionan los datos?
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Entregable típico: diagrama con atributos y relaciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img56.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Físico
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Enfoque en la implementación en un sistema.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Responde a la pregunta: ¿Cómo se almacena técnicamente?
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Entregable típico: script o estructura específica del motor de base de datos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img57.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 Para el caso de esta formación, orientada a la analítica descriptiva, el énfasis se ubica en el modelo lógico, ya que permite garantizar coherencia entre los requerimientos, las fuentes de datos y la estructura analítica (Kimball y Ross, 2013).
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Modelos para analítica: enfoque dimensional
    p.mb-5 En soluciones de #[i Business Intelligence (BI)] y analítica descriptiva, el modelado dimensional facilita consultas, métricas y comparaciones. Este enfoque distingue componentes clave que estructuran el análisis. A continuación, se presenta el desarrollo completo:
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Tablas de hechos (<em>Fact Tables</em>)").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Contienen los eventos cuantitativos o métricas (ventas, atenciones, transacciones, solicitudes, #[i logs]).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Incluyen medidas cuantitativas (conteos, sumas, duraciones, costos).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Incorporan claves hacia dimensiones (fecha, sede, servicio). (Kimball y Ross, 2013).
          .row(titulo="Tablas de dimensiones (<em>Dim Tables</em>)").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Contienen datos descriptivos que dan contexto a los hechos (usuarios, sedes, tiempo).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Permiten responder preguntas como: ¿cuándo?, ¿dónde?, ¿qué?, ¿quién?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | “El propósito no se centra en memorizar estructuras, sino en comprender que un modelo analítico debe facilitar preguntas del negocio con claridad, trazabilidad y consistencia”. (Few, 2006).
          .row(titulo="Registros y atributos (granularidad)").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La calidad del análisis depende del nivel de detalle de los registros.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Registros]: filas de la tabla; en dimensiones deben ser únicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Atributos]: columnas; deben estar normalizados y con tipos de datos correctos (fecha, texto, número).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Definir la granularidad afecta:
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Tipo de preguntas que se pueden responder.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Forma de agregar y comparar datos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Volumen de datos y rendimiento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ejemplo:
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Por atención: permite analizar cada evento.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Por día: mejora rendimiento, pero reduce detalle.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La granularidad debe alinearse con los requerimientos priorizados (Kimball y Ross, 2013).
          .row(titulo="Claves e identificadores").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Permiten garantizar la integridad de los datos y conectar tablas de forma consistente.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Clave primaria (PK)]: identifica de forma única cada registro (ej. ID_Sede).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Clave foránea (FK)]: conecta la tabla de hechos con dimensiones mediante referencia a la PK.
          .row(titulo="Relaciones y cardinalidad").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Permiten integrar datos de diferentes fuentes como un solo conjunto.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Relación más común: uno a varios (1:*).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img26.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejemplo: modelo de datos para el sector salud
    .bg-1
      .px-5
        p.mb-5 Siguiendo tu ejemplo de "Atenciones", así se vería el diseño técnico para una solución de analítica:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Estructura del modelo de datos y su función en el reporte
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Elemento
                    th.ajuste-border-tabla.texto-left Ejemplo Técnico
                    th.texto-left Función en el Reporte
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Entidad (Hecho)]
                    td.ajuste-border-tabla.texto-left Fact_atenciones
                    td.texto-left Contiene el volumen de citas y duración
                  tr
                    td.ajuste-border-tabla.texto-left #[b Entidad (Dimensión)]
                    td.ajuste-border-tabla.texto-left Dim_servicios
                    td.texto-left Permite filtrar por tipo (urgencias, consulta general)
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Atributo]
                    td.ajuste-border-tabla.texto-left Fecha_atencion
                    td.texto-left Permite crear líneas de tiempo y tendencias
                  tr
                    td.ajuste-border-tabla.texto-left #[b Clave (PK)]
                    td.ajuste-border-tabla.texto-left ID_usuario
                    td.texto-left Asegura que no haya usuarios duplicados en el maestro
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Relación]
                    td.ajuste-border-tabla.texto-left Dim_Sedes 1---* Fact_Atenciones
                    td.texto-left Permite ver cuántas atenciones tuvo cada sede física
        p.mb-5 #[b Integridad referencial]. Si en la tabla de Atenciones aparece una #[b ID_Sede = 500], pero en la tabla de #[b Sedes] solo existen las IDs del 1 al 100, se rompe la #[b integridad de los datos]. Power BI mostrará un valor en blanco o un error, lo cual afecta la "validación de la solución" según criterios técnicos.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 1.
          span Vista del ejemplo de un modelo del Sector Salud
        figure(data-aos="zoom-in").mb-5
          img(src='@/assets/curso/temas/img58.png', alt='Diagrama de modelo de datos del sector salud con estructura estrella, compuesto por una tabla central de atenciones y dimensiones de pacientes, médicos, tiempo, servicios y sedes. ').m-auto
    p.mb-5 La figura anterior presenta un esquema estrella, fundamental para una analítica descriptiva eficiente. Este tipo de modelo organiza la información en torno a una tabla central de hechos y múltiples tablas de dimensiones que aportan contexto. A continuación, se describe su estructura:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Centro (hechos)")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img59.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Centro (hechos)
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La tabla #[b Fact_Encounters (atenciones)] constituye el núcleo del modelo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Contiene las métricas principales (duración, costo).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Incluye las claves foráneas (FK) que permiten la conexión con las dimensiones.
      .py-3.py-md-4(titulo="Periferia (dimensiones)")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img60.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Periferia (dimensiones)
            p Cinco tablas dimensionales rodean la tabla de hechos:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Dim_Patients]: pacientes (¿quién?).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Dim_Doctors]: médicos (¿quién atiende?).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Dim_Time]: tiempo (¿cuándo?).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Dim_Services]: servicios (¿qué?).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Dim_Sedes]: sedes (¿dónde?).
      .py-3.py-md-4(titulo="Relaciones y cardinalidad")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img61.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Relaciones y cardinalidad
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Todas las relaciones son de tipo uno a varios (1:*).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Un registro de una dimensión puede aparecer múltiples veces en la tabla de hechos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Las relaciones conectan las claves primarias (PK) de las dimensiones con las claves foráneas (FK) en la tabla de hechos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Esta estructura garantiza la integridad de los datos.
    p.mb-0 Este esquema permite organizar la información de forma clara y eficiente, facilitando el análisis multidimensional y la generación de indicadores en herramientas de #[i Business Intelligence (BI)].
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Reglas básicas para definir un modelo de datos coherente
    p.mb-5 Para garantizar coherencia y calidad en un proyecto de #[i Business Intelligence (BI)], es necesario aplicar reglas que aseguren la relación adecuada entre requerimientos, datos, métricas, dimensiones y documentación. Estas reglas permiten estructurar un modelo de datos sólido, consistente y alineado con las preguntas del negocio. A continuación, se presentan las reglas básicas para definir un modelo de datos coherente:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Regla 1: cada requerimiento debe estar trazado a datos específicos
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Todos los requerimientos priorizados deben asociarse a una o varias medidas, es decir, qué se calcula.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | También deben asociarse a una o varias dimensiones, es decir, cómo se segmenta la información.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Esta trazabilidad asegura que cada necesidad del negocio tenga correspondencia directa en el modelo de datos (Kimball y Ross, 2013).
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img62.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Regla 2: evitar ambigüedades en nombres y significados
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Se recomienda establecer definiciones consistentes para cada término del modelo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Por ejemplo, el término “atención” puede referirse a evento, caso o solicitud; por tanto, debe definirse con precisión.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Esta claridad reduce interpretaciones erróneas y mejora la coherencia analítica (Laudon y Laudon, 2020).
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img63.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Regla 3: definir claves y relaciones sin duplicar eventos
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Las relaciones mal definidas pueden duplicar registros y alterar indicadores.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Esta situación conduce a conclusiones erróneas dentro del análisis.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Como se planteó en el ejemplo del sector salud, la tabla de hechos contiene los campos FK y se relaciona con cada tabla dimensional por medio de su PK.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Esta definición permite conservar consistencia en la integración de los datos (Redman, 2008).
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Regla 4: documentar supuestos y reglas de negocio
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Toda regla debe quedar explícita dentro del modelo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Es necesario documentar cómo se trata un valor nulo, cómo se calcula un KPI y qué elementos se excluyen del análisis.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La documentación mejora la trazabilidad y fortalece la confiabilidad de la solución analítica (Redman, 2008).
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 La aplicación de estas reglas permite construir un modelo de datos consistente y alineado con las necesidades del negocio, reduciendo errores de interpretación y problemas de calidad analítica.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img26.svg" style="max-width: 60px").m-auto
      .col
        h3 Diccionario de datos: lo mínimo de documentación
    p.mb-5 El diccionario de datos describe los campos y las reglas del modelo. Su función es estandarizar significados, disminuir interpretaciones erróneas y facilitar el mantenimiento de la solución analítica. A continuación, se presenta una estructura básica para su documentación:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img66.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center fecha_atención
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Tipo]: fecha.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Descripción]: fecha del evento.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Regla/validación]: no futura.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Fuente]: base de datos operativa.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img67.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center tiempo_espera
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Tipo]: número.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Descripción]: minutos de espera.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Regla/validación]: mayor o igual a 0.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Fuente]: sistema de turnos.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img68.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center servicio
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Tipo]: texto.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Descripción]: tipo de servicio.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Regla/validación]: catálogo oficial.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Fuente]: archivo de Excel del catálogo.
    p.mb-5 El diccionario de datos contribuye a consolidar una base común para el uso e interpretación de la información dentro del proyecto analítico (Redman, 2008).
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img26.svg" style="max-width: 60px").m-auto
      .col
        h3 Procedimiento sugerido para definir el modelo de datos
    p.mb-5 Para organizar el proceso de modelado, se propone una ruta práctica y ordenada que articula requerimientos, fuentes, estructura y validación del modelo. A continuación, se presenta el procedimiento sugerido:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        ol.lista-ol--cuadro.mb-0
          li.d-flex
            .lista-ol--cuadro__vineta
              span 1
            | 
            p.mb-0 #[b Se revisan requerimientos priorizados] (preguntas e indicadores).
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 2
            | 
            p.mb-0 #[b Se define el evento central] a medir (hecho): ¿qué ocurrencia se analizará?
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 3
            | 
            p.mb-0 #[b Se establece la granularidad] del hecho.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 4
            | 
            p.mb-0 #[b Se identifican dimensiones] necesarias (tiempo, sede, servicio, usuario, etc.).
          li.d-flex
            .lista-ol--cuadro__vineta
              span 5
            | 
            p.mb-0 #[b Se listan campos disponibles por fuente] y se valida pertinencia.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 6
            | 
            p.mb-0 #[b Se definen claves y relaciones] entre tablas.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 7
            | 
            p.mb-0 #[b Se documenta el diccionario de datos] y reglas de negocio.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 8
            | 
            p.mb-0 #[b Se valida el modelo] contra los requerimientos: cada pregunta debe poder responderse con el modelo.
        p.mb-0 Este procedimiento permite desarrollar el modelo de datos de forma ordenada y coherente, asegurando correspondencia entre la estructura técnica y las necesidades analíticas del negocio.
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img69.png', alt='').m-auto
    p.mb-0 La definición del modelo de datos integra los aprendizajes de este componente: los requerimientos priorizados se conectan con las fuentes disponibles y se estructuran en entidades, atributos y relaciones coherentes. Un modelo claro, documentado y validado frente a las preguntas del negocio permite asegurar consistencia en las métricas y confiabilidad en los análisis, preparando el camino para etapas posteriores de analítica descriptiva y tratamiento de datos (Kimball y Ross, 2013; Redman, 2008).
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Caso de uso: sector salud
    .caja-tema1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img70.png', alt='').m-auto
        .col-xl
          p.mb-0 Una institución prestadora de servicios de salud (IPS) ha identificado dificultades para comprender el comportamiento de la atención a los usuarios. Aunque se cuenta con registros operativos diarios, la información se encuentra dispersa en diferentes fuentes y no se dispone de una visión clara que permita apoyar la toma de decisiones estratégicas.
    p.mb-5 La dirección de la institución requiere comprender cómo se comportan las atenciones en el tiempo, qué servicios presentan mayor demanda, cuáles sedes concentran mayor volumen y cómo varían los tiempos de atención. Para ello, se plantea la necesidad de construir una solución de Business Intelligence, iniciando por una correcta definición del modelo de datos.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img26.svg" style="max-width: 60px").m-auto
      .col
        h3 Comprensión del problema desde la analítica de datos
    p.mb-5 En este escenario se reconoce lo siguiente:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Disponibilidad de datos
            p.mb-0.text-center Los datos existen, pero no están organizados para el análisis.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Tipo de analítica
            p.mb-0.text-center No se requiere predicción ni simulación de escenarios futuros.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Enfoque analítico
            p.mb-0.text-center El valor está en describir y comprender el comportamiento histórico de la atención.
    p.mb-5 Antes de presentar los pasos, se organiza el proceso metodológico que permite pasar de la comprensión del problema a la preparación de los datos, asegurando coherencia entre los requerimientos del negocio, las fuentes de información y la calidad de los datos.
    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Paso 1: identificación y priorización de requerimientos").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El proceso inicia con la comprensión del cliente, antes del uso de herramientas como Power BI.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Se realiza un análisis conceptual desde la analítica descriptiva.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Requerimientos de negocio:]
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Comportamiento de las atenciones en el tiempo (tendencias).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Servicios con mayor demanda (volumen).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Sedes con mayor concentración de pacientes (geografía).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Variación de los tiempos de atención (eficiencia).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Priorización:]
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Enfoque en el “qué pasó”.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Prioridad en volumen y tiempos para optimizar la operación.
          .row(titulo="Paso 2: identificación del ecosistema de datos").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Se identifican las fuentes de información necesarias.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fuentes:]
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Sistema de atención (SQL Server): datos estructurados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Archivo Excel (servicios y médicos): riesgo de errores y duplicados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Archivo CSV (sedes): requiere normalización.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Las fuentes son internas y con estructuras diferentes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Se requiere integración para el análisis.
          .row(titulo="Paso 3: aseguramiento de la calidad y depuración").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Se realiza validación antes del modelado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Criterios:]
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Fechas completas.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Tiempos no negativos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Servicios normalizados. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Identificadores únicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Problemas identificados:]
                ul.fa-ul.estilo___ul-1.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Inconsistencia: “Centro” vs. “Sede C”.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Duplicados en registros de médicos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    |  Valores nulos en duración (5 %).
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Se requiere limpieza y transformación de datos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                |   Uso de herramientas como Power Query para depuración y tratamiento de nulos.
    .caja-tema1-1.ajustar-caja-tema1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img26.svg" style="max-width: 60px").m-auto
      .col
        h3 Modelación de datos: definición del evento central y la granularidad
    p.mb-5 En esta etapa, el analista diseña un #[b esquema estrella] con el propósito de lograr un análisis multidimensional eficiente en #[b Power BI]. A partir de los requerimientos priorizados, se establece con precisión cuál es el hecho principal que se analizará y con qué nivel de detalle se registrará la información. Para estructurar esta decisión, se definen los elementos centrales del modelo dimensional:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Evento central
            p.mb-0.text-center Cada atención realizada a un usuario.
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img37.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Granularidad
            p.mb-0.text-center Un registro por atención.
    p Esta granularidad permite calcular #[b volúmenes, promedios y segmentaciones] sin pérdida de detalle. Además, responde de manera consistente a los requisitos planteados, ya que se estableció la necesidad de trabajar sobre servicios y tiempos, pero no se incluyó seguimiento ni reportes de pacientes específicos. En consecuencia, esta decisión garantiza #[b flexibilidad analítica y coherencia con los requerimientos del negocio].
    p.mb-5 #[b La tabla de hechos] concentra las métricas principales del proceso analítico y registra cada atención como unidad de análisis.
    .row.justify-content-center.mb-5
      .col-xl-6
        .caja-tema4-1(data-aos="zoom-in")
          h5 Fact_atenciones
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | id_atención
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | fecha_id
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | sede_id
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | servicio_id
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | medico_id
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | tiempo_espera
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | tiempo_atención
    p.mb-5 #[b Las dimensiones] aportan el contexto necesario para interpretar la información contenida en la tabla de hechos. A través de ellas es posible segmentar, filtrar y analizar cada atención desde distintas perspectivas.
    .row.justify-content-center.mb-5
      .col-xl-6
        .caja-tema4-1(data-aos="zoom-in")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Dim_medicos] (¿Quién?)
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Dim_servicios] (¿Qué prestamos?)
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Dim_sedes] (¿Dónde?)
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Dim_tiempo] (¿Cuándo?)
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 2.
      span Ejemplo de un esquema del modelo dimensional
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/img71.png', alt='Diagrama de esquema estrella para analítica en salud, con una tabla central de hechos de atenciones y tablas de dimensiones de médicos, servicios, sedes y tiempo. ').m-auto
    p.mb-5 Esta figura acompaña la comprensión estructural del esquema estrella y fortalece la interpretación técnica del modelo propuesto.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img26.svg" style="max-width: 60px").m-auto
      .col
        h3 #[i Checklist] de validación técnica
    p.mb-5 Antes de implementar el modelo en #[b #[i Power BI]], se realiza una validación técnica para garantizar su consistencia estructural y su utilidad analítica.
    .row.align-items-center.mb-5 
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img73.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Integridad referencial
            p.mb-0.text-center ¿Todos los #[b servicios_id] en la tabla de hechos existen en la tabla #[b Dim_servicios]?
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img74.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Granularidad
            p.mb-0.text-center ¿El modelo permite obtener el total por mes y también el detalle por cita individual?
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img75.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Cardinalidad
            p.mb-0.text-center ¿Todas las relaciones son de #[b uno a muchos (1:*)]?
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img76.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Usabilidad
            p.mb-0.text-center ¿Los nombres de los campos son claros para el usuario final, por ejemplo, reemplazar #[b servicio_id] por #[b Nombre Servicio]?
    p Como resultado de esta validación, el modelo dimensional definido queda #[b técnicamente validado] y listo para su implementación en #[b Power BI].
    p.mb-0 Este caso evidencia que una solución de #[i Business Intelligence] no inicia con una herramienta, sino con la comprensión del problema, la identificación de requerimientos, el análisis de fuentes y la definición de un modelo de datos coherente. Estos pasos constituyen la base fundamental para la construcción de tableros y soluciones analíticas confiables, los cuales se desarrollarán en el siguiente componente formativo.
</template>

<script>
export default {
  name: 'Tema4',
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
