<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Fundamentos conceptuales del proceso ETL en soluciones de #[i Business Intelligence]
    p.mb-5 En este apartado se abordan los fundamentos conceptuales del proceso ETL (#[i Extract, Transform, Load]) como componente clave dentro de las soluciones de #[b #[i Business Intelligence]]. Su comprensión permite reconocer su papel estratégico en el flujo de datos, su relación con la calidad de la información y su impacto en la confiabilidad de los análisis, sin entrar aún en herramientas o implementaciones técnicas.
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 3.
      span Proceso ETL en BI
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/img77.png', alt='Diagrama de flujo del proceso ETL en Business Intelligence, con fuentes de datos de origen, etapas de extracción, transformación y carga, y conexión hacia un modelo de datos analítico. ').m-auto
    p.mb-0 Este esquema representa el flujo general mediante el cual los datos son preparados antes de su uso analítico, conectando las fuentes de origen con los modelos de datos estructurados.
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 El proceso ETL dentro de una solución de #[i Business Intelligence]
    p En una solución de #[i Business Intelligence], los datos no suelen encontrarse listos para su análisis desde el origen. Provienen de múltiples fuentes, con estructuras, formatos y niveles de calidad heterogéneos, lo que exige un proceso previo de preparación. En este contexto, el proceso ETL cumple la función de #[b preparar los datos para el análisis], asegurando coherencia, consistencia y trazabilidad a lo largo del flujo de información.
    p.mb-5 Desde una perspectiva conceptual, el ETL se entiende como un proceso intermedio que conecta las fuentes de datos con el modelo analítico. Su correcta definición resulta determinante para la calidad de los indicadores y la confianza en la información presentada (Kimball y Ross, 2013). A continuación, se describen las etapas que componen este proceso:
    .bg-carrusel
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img78.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Extracción
                p.mb-0.text-center Conexión a las fuentes de datos identificadas, como bases de datos #[i SQL], archivos #[i Excel] o #[i CSV].
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img79.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Transformación
                p.mb-0.text-center Aplicación de reglas de negocio mediante filtros, cálculos y procesos de limpieza o depuración de datos.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img80.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Carga
                p.mb-0.text-center Integración de los datos ya transformados en el modelo dimensional, generalmente bajo un esquema estrella.
        .row.justify-content-center.align-items-center.mb-0
          .col-xl.mb-4.mb-lg-0
            p Estas etapas constituyen un conjunto de #[b reglas de negocio] que garantizan la coherencia del ecosistema de datos. Aunque en entornos productivos el proceso ETL suele ejecutarse de forma automatizada, su comprensión conceptual es esencial para definir correctamente tanto el modelo de datos como los requerimientos de información (Silva, 2019).
            p.mb-0 El proceso ETL no solo actúa como un mecanismo técnico, sino como un componente estratégico que asegura la calidad y confiabilidad de la información analítica. Su adecuada definición permite que los modelos de datos reflejen de manera fiel la realidad del negocio, estableciendo una base sólida para la toma de decisiones en entornos de Business Intelligence.
          .col-xl-auto.col-md-9(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img81.png', alt='').m-auto
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Etapa de extracción: obtención de los datos
    p.mb-5 La etapa de extracción constituye el punto de partida del proceso ETL, en el cual se identifican y obtienen los datos necesarios desde las fuentes disponibles. Estas fuentes pueden incluir bases de datos, archivos planos, sistemas operativos o servicios externos, cada uno con características particulares en cuanto a estructura y acceso. Desde un enfoque conceptual, en esta etapa se definen los criterios que orientan la captura de la información requerida:
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5 
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img82.png').m-auto
        h4.mb-3.estilo-text Datos requeridos
        p.mb-0.text-center Determinación de la información necesaria según los objetivos analíticos.
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img83.png').m-auto
        h4.mb-3.estilo-text Fuentes de origen
        p.mb-0.text-center Identificación de los sistemas o repositorios desde los cuales se obtendrán los datos.
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img84.png').m-auto
        h4.mb-3.estilo-text Periodicidad
        p.mb-0.text-center Definición de la frecuencia con la que se realizará la extracción (tiempo real, diaria, semanal, etc.).
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img85.png').m-auto
        h4.mb-3.estilo-text Restricciones de acceso
        p.mb-0.text-center Consideración de permisos, seguridad y limitaciones técnicas para acceder a los datos.
    p.mb-0 Una extracción mal definida puede introducir datos irrelevantes, incompletos o inconsistentes, lo cual afecta directamente la calidad del proceso analítico en etapas posteriores. En consecuencia, esta fase no solo implica la obtención de datos, sino la d#[b efinición estratégica de qué información ingresa al sistema analítico].
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Etapa de carga: incorporación al modelo analítico
    p.mb-5 La etapa de carga corresponde al momento en que los datos previamente transformados se incorporan al modelo de datos definido. Su propósito es garantizar que la información esté disponible para el análisis, manteniendo condiciones de integridad y consistencia. Desde una perspectiva conceptual, esta fase asegura la correcta integración entre los datos procesados y la estructura del modelo dimensional. A continuación, se presentan los principales aspectos considerados en esta etapa:
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img86.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Correspondencia con el modelo
            p.mb-0.text-center Verificación de que los datos se ajustan a la estructura del modelo dimensional definido.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img87.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Actualización histórica
            p.mb-0.text-center Gestión de datos históricos para mantener la evolución temporal de la información.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img88.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Manejo de cambios
            p.mb-0.text-center Control de modificaciones en dimensiones y hechos, como cambios en atributos o registros.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/img89.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Control y validación
            p.mb-0.text-center Implementación de mecanismos para detectar errores y validar la calidad de los datos cargados.
        p Una carga adecuada permite que el modelo de datos represente de manera fiel la realidad que se desea analizar, lo cual resulta fundamental para la generación de indicadores confiables (Kimball y Ross, 2013).
        p.mb-0 Las etapas de extracción y carga, aunque separadas conceptualmente, se encuentran estrechamente relacionadas dentro del proceso ETL. Su correcta definición garantiza que los datos fluyan de manera coherente desde las fuentes de origen hasta el modelo analítico, consolidando así una base sólida para el análisis en entornos de #[i Business Intelligence].
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Etapa de transformación: preparación y calidad de los datos
    p La etapa de transformación constituye el núcleo del proceso ETL, ya que en ella los datos extraídos se ajustan para cumplir tanto con las reglas del negocio como con la estructura definida en el modelo de datos. Su correcta ejecución determina, en gran medida, la calidad y confiabilidad de la información analítica.
    p.mb-5 Desde un enfoque conceptual, esta etapa agrupa un conjunto de procesos orientados a depurar, estandarizar e integrar los datos provenientes de distintas fuentes. A continuación, se presentan los principales procesos involucrados en la transformación:
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5 
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img90.png').m-auto
        h4.mb-3.estilo-text Limpieza de datos
        p.mb-0.text-center Eliminación de duplicados y tratamiento de valores nulos o inconsistentes.
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img91.png').m-auto
        h4.mb-3.estilo-text Estandarización
        p.mb-0.text-center Unificación de formatos como fechas, unidades de medida y códigos.
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img92.png').m-auto
        h4.mb-3.estilo-text Cálculo de campos derivados
        p.mb-0.text-center Generación de nuevos atributos a partir de datos existentes.
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img93.png').m-auto
        h4.mb-3.estilo-text Reglas de negocio
        p.mb-0.text-center Aplicación de condiciones y lógica propia del contexto organizacional.
      .tarjeta.color-acento-botones.fit___card-sinbordes
        .row.justify-content-center.mb-4
          .col-12
            img(src='@/assets/curso/temas/img94.png').m-auto
        h4.mb-3.estilo-text Integración de datos
        p.mb-0.text-center Consolidación de información proveniente de múltiples fuentes en una estructura coherente.
    p De acuerdo con (Redman, 2008), una gran proporción de los problemas de calidad de datos se origina en transformaciones deficientes o mal documentadas, lo que impacta directamente la confiabilidad de los indicadores.
    p.mb-5 En este sentido, la transformación no solo implica ajustes técnicos, sino la #[b formalización de reglas que gobiernan el significado y uso de los datos]. Para garantizar la escalabilidad de un proyecto en #[b Power BI], el analista debe comprender los siguientes fundamentos teóricos:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Normalización vs. desnormalización
                p.mb-0 La normalización busca reducir redundancia organizando los datos en múltiples tablas, mientras que la desnormalización prioriza estructuras más simples para facilitar el análisis. En #[i Business Intelligence], se busca un equilibrio entre eficiencia y facilidad de uso.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img95.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tipos de datos y conversión
                p.mb-0 Asegura que cada campo tenga el tipo adecuado (por ejemplo, moneda, número o texto), lo que permite realizar operaciones analíticas correctas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img96.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Columnas calculadas vs. medidas
                p.mb-0 Las columnas calculadas se generan durante la carga de datos, mientras que las medidas se calculan en tiempo real según los filtros aplicados por el usuario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img97.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 Estos conceptos permiten estructurar correctamente el modelo de datos y optimizar el rendimiento de las soluciones analíticas. La etapa de transformación es determinante para garantizar la calidad del dato en todo el proceso ETL. Su adecuada definición asegura que la información no solo sea técnicamente correcta, sino también coherente con las necesidades del negocio, consolidando así una base confiable para el análisis en entornos de #[i Business Intelligence].

</template>

<script>
export default {
  name: 'Tema5',
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
