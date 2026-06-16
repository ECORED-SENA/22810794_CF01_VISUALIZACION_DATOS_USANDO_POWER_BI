export default {
  global: {
    Name: 'Fundamentos de analítica de datos y modelado de información',
    Description:
      'En este componente formativo se desarrollan los fundamentos de la analítica de datos y <em>Business Intelligence</em>; se identifican y priorizan requerimientos de información; se reconocen las fuentes y el ecosistema de datos; y se define un modelo de datos coherente con las necesidades del cliente, que sirve como base para la construcción de soluciones de visualización de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Introducción a la analítica de datos y <em>Business Intelligence</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La importancia de los datos en los entornos actuales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Analítica de datos y <em>Business Intelligence</em> (BI)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de analítica de datos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: '<em>Business Intelligence</em> (BI): concepto y alcance',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Identificación y priorización de requerimientos del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'El rol de los requerimientos en los proyectos de analítica de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '¿Qué se entiende por requerimientos del cliente?',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación de requerimientos de información',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Preguntas de negocio como base del análisis',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Priorización de requerimientos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Desglose práctico',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de fuentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de fuentes de datos en analítica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación de los datos según su estructura',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ecosistema de datos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Calidad de los datos y su impacto en el análisis',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Definición del modelo de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Modelo de datos: concepto y función en analítica',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Niveles de modelado: conceptual, lógico y físico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Modelos para analítica: enfoque dimensional',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Reglas básicas para definir un modelo de datos coherente',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Caso de uso: sector salud',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Fundamentos conceptuales del proceso ETL en soluciones de <em>Business Intelligence</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'El proceso ETL dentro de una solución de <em>Business Intelligence</em>',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Etapa de extracción: obtención de los datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Etapa de carga: incorporación al modelo analítico',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Etapa de transformación: preparación y calidad de los datos',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/22810794_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Analítica de datos',
      significado:
        'proceso mediante el cual se examinan, transforman y analizan datos con el fin de obtener información útil que apoye la toma de decisiones en contextos organizacionales.',
    },
    {
      termino: '<i>Business Intelligence</i> (BI)',
      significado:
        'conjunto de estrategias, metodologías y procesos orientados a convertir datos en información y conocimiento relevante para la gestión y la toma de decisiones.',
    },
    {
      termino: 'Fuentes de datos',
      significado:
        'orígenes desde los cuales se obtienen los datos utilizados en procesos de analítica, como bases de datos, archivos planos, registros (logs) o archivos de Excel.',
    },
    {
      termino: 'Ecosistema de datos',
      significado:
        'conjunto de fuentes, sistemas, procesos y actores que interactúan alrededor de los datos dentro de una organización, influyendo en su generación, gestión y uso.',
    },
    {
      termino: 'Modelo de datos',
      significado:
        'representación estructurada de la información que define entidades, atributos y relaciones, permitiendo organizar los datos de forma coherente para su análisis.',
    },
    {
      termino: 'Granularidad',
      significado:
        'nivel de detalle con el que se registran los datos en un modelo, determinando el tipo de análisis y las agregaciones que pueden realizarse.',
    },
    {
      termino: 'Proceso ETL (Extract, Transform, Load)',
      significado:
        'proceso conceptual mediante el cual los datos son extraídos desde las fuentes, transformados según reglas de negocio y cargados en un modelo analítico para su posterior análisis.',
    },
    {
      termino: 'JSON (JavaScript Object Notation)',
      significado:
        'formato de datos semiestructurados basado en texto, utilizado para el intercambio de información entre sistemas, caracterizado por su simplicidad y legibilidad.',
    },
    {
      termino: 'XML (eXtensible Markup Language)',
      significado:
        'lenguaje de marcado que permite estructurar, almacenar y transportar datos mediante etiquetas definidas por el usuario, ampliamente utilizado para el intercambio de información entre aplicaciones.',
    },
    {
      termino: 'Silos de datos',
      significado:
        'situación en la que la información se encuentra aislada en diferentes sistemas o áreas de una organización, dificultando su integración, análisis y aprovechamiento estratégico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Few, S. (2006). Information Dashboard Design: Displaying Data for At-a-glance Monitoring.',
      link:
        'https://public.magendanz.com/Temp/Information%20Dashboard%20Design.pdf',
    },
    {
      referencia:
        'Harris, J., y Davenport, T. (2007). Competing on Analytics: The New Science of Winning.',
      link: '',
    },
    {
      referencia:
        'Kenneth C., L., y Laudon, J. (2016). Sistemas de información gerencial.',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w25735w/ld-Sistemas_de_informacion_gerencial_14%20edicion.pdf',
    },
    {
      referencia:
        'Kimball, R., y Ross, M. (2013). The Data Warehouse Toolkit: The Complete Guide to Dimensional Modeling.',
      link: '',
    },
    {
      referencia:
        'Laudon, K., y Laudon, J. (2020). Sistemas de información de gestión: Gestionar la empresa digital (16 ed.).',
      link: '',
    },
    {
      referencia:
        'Provost, F., y Fawcett, T. (2013). Data Science for Business: What You Need to Know about Data Mining and Data-Analytic Thinking.',
      link: '',
    },
    {
      referencia:
        'Redman, T. (2008). Data driven: Profiting from your most important business asset.',
      link: '',
    },
    {
      referencia:
        'Silva, G. (2019). Análisis de metodologías para desarrollar Data Warehouse aplicado a la toma de decisiones. Escuela Superior Politécnica del Chimborazo.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06<br>Responsable ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderón Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodriguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Ricardo Ortiz Puentes',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
