/**
 * =========================================================================
 * 🚀 CONFIGURACIÓN CENTRAL DE SEO PROGRAMÁTICO (pSEO) — KalkulAR 2026
 * Matriz de datos para las 12 landing pages de alta intención de búsqueda.
 * Mercado objetivo: Argentina (Construcción, Pintura, Mano de Obra y Afiliados ML)
 * =========================================================================
 */

export const PSEO_PAGES = [
  // 1. Habitación 3x3
  {
    slug: 'pintar-habitacion-3x3',
    path: '/presupuesto/pintar-habitacion-3x3',
    category: 'presupuesto',
    badge: 'Preset Dormitorio 3x3',
    title: 'Presupuesto para Pintar Habitación 3x3 en Argentina (2026) | KalkulAR',
    metaDescription: 'Calculá cuánto cuesta pintar una habitación de 3x3 en Argentina (2026). Mano de obra estimada entre $120.000 y $170.000 ARS y materiales desde $55.000 con envío por Mercado Libre.',
    h1: 'Presupuesto para Pintar Habitación de 3x3 en Argentina (2026)',
    subtitle: 'Cálculo de mano de obra por m², litros de látex para 2 manos completas y lista de materiales lista para pedir en Mercado Libre.',
    calculatorPreset: {
      jobCategory: 'walls',
      roomType: 'room_small',
      length: 3.0,
      width: 3.0,
      height: 2.5,
      openingsDeductionM2: 3.0,
      paintCeiling: true,
      selectedConditions: ['minorCracks'],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Pintar una habitación de 3x3 metros (27 m² netos de pared más 9 m² de cielorraso) tiene un costo de mano de obra en Argentina (2026) de entre $120.000 y $170.000 ARS (promedio justo: $140.000 ARS). En materiales se estiman entre $55.000 y $85.000 ARS.',
      metrics: {
        totalM2: 36,
        wallM2: 27,
        ceilingM2: 9,
        paintLiters: '8 a 10 Litros (Látex interior)',
        ceilingLiters: '2 Litros (Antihongo ultra mate)',
        laborFairPrice: '$140.000 ARS',
        laborRange: '$120.000 a $170.000 ARS',
        materialsCost: '~$68.000 ARS',
        estimatedDays: '1 a 2 días hábiles'
      },
      editorialParagraphs: [
        'Una habitación cuadrada de 3x3 metros con 2.5 metros de altura tiene un perímetro de 12 metros lineales, lo que equivale a 30 m² brutos de pared. Al descontar las aberturas estándar en viviendas argentinas (una puerta de 0.80x2.00m y una ventana de 1.20x1.20m), la superficie neta real a pintar se reduce a 27 m².',
        'Para cubrir esa superficie con 2 manos completas de pintura látex de primera calidad (rendimiento 5.5 m²/litro), se requieren 5 litros para las paredes y 2 litros de pintura especial para cielorrasos. Conviene adquirir un balde de 10 litros o 2 latas de 4 litros para disponer de sobrante para futuros retoques.',
        'En cuanto a mano de obra, el trabajo incluye el encintado perimetral de zócalos, masillado de pequeñas fisuras con enduido plástico al agua, lijado general y aplicación de 2 manos cruzadas a rodillo y pincel.'
      ],
      faqs: [
        {
          q: '¿Cuánta pintura necesito exactamente para pintar una pieza de 3x3?',
          a: 'Para pintar las cuatro paredes a dos manos necesitás entre 5 y 6 litros de látex interior mate, más 2 litros de látex antihongo para el cielorraso. Lo más económico es comprar 1 balde de 10L o 2 latas de 4L de primeras marcas en Mercado Libre.'
        },
        {
          q: '¿Cuánto tiempo tarda un pintor en pintar una habitación 3x3?',
          a: 'Un pintor oficial trabajando solo demora entre 1 y 2 jornadas de trabajo (8 horas cada una). El primer día se realiza la preparación, enduido y primera mano; el segundo día se aplica la segunda mano y se retiran las protecciones.'
        },
        {
          q: '¿Qué reparaciones previas son comunes en una habitación 3x3?',
          a: 'Lo más habitual es tapar agujeros de tacos fisher, fisuras de revoque con enduido y lijar asperezas. Si la pared estuvo empapelada o tiene pintura a la cal vieja, se debe fijar previamente con fijador al agua concentrado.'
        }
      ]
    }
  },

  // 2. Habitación 4x4
  {
    slug: 'pintar-habitacion-4x4',
    path: '/presupuesto/pintar-habitacion-4x4',
    category: 'presupuesto',
    badge: 'Preset Dormitorio 4x4 / Matrimonial',
    title: 'Presupuesto para Pintar Habitación 4x4 en Argentina (2026) | KalkulAR',
    metaDescription: '¿Cuánto cuesta pintar una habitación de 4x4 en Argentina? Mano de obra entre $160.000 y $230.000 ARS y materiales desde $75.000. Calculá m², litros exactos y pedí los insumos con envío rápido.',
    h1: 'Presupuesto para Pintar Habitación de 4x4 en Argentina (2026)',
    subtitle: 'Costos actualizados de mano de obra, cálculo de baldes de 10L o 20L y materiales recomendados con entrega a domicilio.',
    calculatorPreset: {
      jobCategory: 'walls',
      roomType: 'room_medium',
      length: 4.0,
      width: 4.0,
      height: 2.5,
      openingsDeductionM2: 3.5,
      paintCeiling: true,
      selectedConditions: ['minorCracks'],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Pintar una habitación de 4x4 metros (36.5 m² netos de pared y 16 m² de techo) cuesta en Argentina (2026) entre $160.000 y $230.000 ARS de mano de obra (promedio recomendado: $195.000 ARS). En materiales se estiman entre $75.000 y $110.000 ARS.',
      metrics: {
        totalM2: 52.5,
        wallM2: 36.5,
        ceilingM2: 16,
        paintLiters: '12 a 14 Litros (Látex interior)',
        ceilingLiters: '3 a 4 Litros (Antihongo)',
        laborFairPrice: '$195.000 ARS',
        laborRange: '$160.000 a $230.000 ARS',
        materialsCost: '~$92.000 ARS',
        estimatedDays: '2 días hábiles'
      },
      editorialParagraphs: [
        'El dormitorio de 4x4 metros es la tipología más frecuente para dormitorios principales o matrimoniales en departamentos y casas de Argentina. Posee 16 metros de perímetro que, multiplicados por 2.5m de altura estándar, dan 40 m² brutos de pared. Descontando aberturas habituales, quedan 36.5 m² netos más 16 m² de cielorraso.',
        'La superficie total a pintar asciende a 52.5 m². Con dos manos de pintura se consumen unos 7 litros de látex para paredes y 3 litros para el techo. La mejor decisión económica en este metraje es comprar 1 balde de 10L para pared y una lata de 4L para cielorraso, o saltar directamente al balde de 20L que reduce el costo por litro hasta un 30%.',
        'El presupuesto de mano de obra incluye dos jornadas completas de pintor oficial, incluyendo preparación con enduido, lijado fino grano 180, dos manos de pintura y limpieza final de pisos.'
      ],
      faqs: [
        {
          q: '¿Alcanza un balde de 10 litros para una habitación 4x4?',
          a: 'Sí, un balde de 10 litros de látex de primera calidad cubre entre 50 y 55 m² a dos manos, por lo que alcanza perfectamente para los 36.5 m² de pared de una habitación 4x4 y deja sobrante para retoques.'
        },
        {
          q: '¿Por qué conviene incluir el cielorraso en el presupuesto?',
          a: 'Pintar las paredes sin pintar el techo hace que el cielorraso se vea amarillento o apagado por contraste. Además, el costo adicional de mano de obra por incluir el techo es de apenas un 20% a 25% más.'
        },
        {
          q: '¿Cuánto enduido se calcula para una habitación 4x4?',
          a: 'Si las paredes están en estado normal con fisuras menores, un pote de 4 kg de enduido plástico es suficiente. Si se busca un alisado total (planchado), se precisan entre 15 y 20 kg de enduido.'
        }
      ]
    }
  },

  // 3. Living Comedor
  {
    slug: 'pintar-living-comedor',
    path: '/presupuesto/pintar-living-comedor',
    category: 'presupuesto',
    badge: 'Preset Espacios Amplios 5x4m',
    title: 'Presupuesto para Pintar Living Comedor en Argentina (2026) | KalkulAR',
    metaDescription: 'Cotizá la pintura de tu living comedor en Argentina. Metraje neto, mano de obra de pintor oficial ($220.000 a $320.000 ARS) y balde de 20L con envío gratis por Mercado Libre.',
    h1: 'Presupuesto para Pintar Living Comedor en Argentina (2026)',
    subtitle: 'Calculá el metraje de paredes altas, ventanales grandes y cielorraso con costos testigo de pintores calificados.',
    calculatorPreset: {
      jobCategory: 'walls',
      roomType: 'room_large',
      length: 5.0,
      width: 4.0,
      height: 2.6,
      openingsDeductionM2: 5.0,
      paintCeiling: true,
      selectedConditions: ['minorCracks'],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Pintar un living comedor amplio de 5x4 metros (41.8 m² de pared neta y 20 m² de cielorraso) tiene un costo de mano de obra en 2026 de entre $220.000 y $320.000 ARS. En materiales, el balde de 20 litros y complementos rondan los $110.000 a $150.000 ARS.',
      metrics: {
        totalM2: 61.8,
        wallM2: 41.8,
        ceilingM2: 20,
        paintLiters: '15 a 18 Litros (Balde 20L ideal)',
        ceilingLiters: '4 Litros (Látex cielorraso)',
        laborFairPrice: '$265.000 ARS',
        laborRange: '$220.000 a $320.000 ARS',
        materialsCost: '~$125.000 ARS',
        estimatedDays: '2 a 3 días hábiles'
      },
      editorialParagraphs: [
        'Los livings comedores son ambientes de alto tránsito familiar y social. Cuentan frecuentemente con puertas balcón, ventanales de 2 o 3 hojas y vanos de paso hacia pasillos o cocinas, sumando aproximadamente 5 m² de deducción por aberturas.',
        'Por su exposición constante a la luz natural rasante, cualquier ondulación o imperfección se nota con facilidad. Por eso los profesionales recomiendan utilizar pinturas látex lavables satinadas o mates antirreflejo de alto poder cubritivo (Alba Albalatex o Sherwin Williams Quantum).',
        'Para esta escala de metros (más de 60 m² totales con cielorraso), la recomendación técnica es comprar directamente 1 balde de látex de 20 litros y una lata de 4 litros de cielorraso. Comprar el balde grande genera un ahorro inmediato del 35% por litro frente a envases fraccionados.'
      ],
      faqs: [
        {
          q: '¿Conviene acabado mate o satinado para el living comedor?',
          a: 'Si la pared tiene ondulaciones o revoque imperfecto, el mate disimula las fallas. Si tenés niños pequeños o mascotas y buscás máxima lavabilidad contra roces, el satinado o semimate es la mejor opción.'
        },
        {
          q: '¿Qué se hace con los muebles del living durante la pintura?',
          a: 'Se concentran en el centro de la sala y se cubren con plástico protector de 4x5 metros y cinta de pintor. Es importante proteger sillones, mesas y aparatos electrónicos del polvillo de lijado.'
        },
        {
          q: '¿Cuántos días de trabajo requiere un living grande?',
          a: 'Un equipo de 1 pintor oficial y un ayudante lo completa en 2 días; un pintor trabajando solo suele demorar entre 3 y 4 jornadas completas.'
        }
      ]
    }
  },

  // 4. Baño
  {
    slug: 'pintar-bano',
    path: '/presupuesto/pintar-bano',
    category: 'presupuesto',
    badge: 'Preset Baño Antihongo',
    title: 'Presupuesto para Pintar Baño en Argentina (2026) | KalkulAR',
    metaDescription: 'Cotizá la pintura antihongo de tu baño: friso superior, cielorraso y paredes libres de azulejos. Mano de obra justa ($60.000 a $95.000 ARS) y productos antihongos en Mercado Libre.',
    h1: 'Presupuesto para Pintar Baño en Argentina (2026)',
    subtitle: 'Tratamiento contra vapor, manchas de moho y hongos con látex antihongo de máxima resistencia a la humedad.',
    calculatorPreset: {
      jobCategory: 'walls',
      roomType: 'bathroom',
      length: 2.0,
      width: 2.0,
      height: 2.4,
      openingsDeductionM2: 8.0,
      paintCeiling: true,
      selectedConditions: ['humidityStains'],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Pintar las partes altas y el cielorraso de un baño estándar de 2x2 metros cuesta en Argentina (2026) entre $60.000 y $95.000 ARS de mano de obra (promedio: $75.000 ARS). En materiales antihongos e insumos se gastan entre $30.000 y $45.000 ARS.',
      metrics: {
        totalM2: 15.2,
        wallM2: 11.2,
        ceilingM2: 4,
        paintLiters: '4 Litros (Látex Antihongo especial)',
        ceilingLiters: 'Incluido en lata 4L',
        laborFairPrice: '$75.000 ARS',
        laborRange: '$60.000 a $95.000 ARS',
        materialsCost: '~$38.000 ARS',
        estimatedDays: '1 día hábil'
      },
      editorialParagraphs: [
        'En los baños argentinos, gran parte de las paredes están revestidas con azulejos o cerámicos hasta una altura de 1.80m a 2.00m. La pintura se concentra en el friso perimetral superior (de 40 a 60 cm) y el cielorraso, sumando entre 12 y 16 m² netos.',
        'La dificultad principal de un baño radica en la condensación continua de vapor caliente de la ducha, que propicia la aparición de manchas negras de moho (*Cladosporium*). Por eso, jamás se debe aplicar látex común sobre el hongo sin antes aplicar lavandina o líquido fungicida desinfectante.',
        'Para el acabado final se utiliza látex específico para baños o cielorrasos con triple concentración de aditivos fungicidas, que impiden la proliferación de esporas durante 3 a 5 años.'
      ],
      faqs: [
        {
          q: '¿Se puede pintar arriba de las manchas negras de humedad en el baño?',
          a: 'No. Pintar directamente sobre el moho hace que el hongo brote a través de la pintura en menos de 3 semanas. Hay que pulverizar agua con lavandina al 50%, dejar actuar 30 minutos, rasquetear y pasar fijador antes de pintar.'
        },
        {
          q: '¿Cuánta pintura lleva un baño de 2x2 metros?',
          a: 'Con una lata de 4 litros de látex para baños y cielorrasos antihongo alcanza con holgura para dar 2 manos a la parte alta de las paredes y al techo.'
        },
        {
          q: '¿Cuánto tiempo después de pintar el baño se puede usar la ducha caliente?',
          a: 'Se debe esperar un mínimo de 24 a 48 horas con buena ventilación antes de generar vapor caliente, para que la película de pintura complete su curado químico.'
        }
      ]
    }
  },

  // 5. Cocina
  {
    slug: 'pintar-cocina',
    path: '/presupuesto/pintar-cocina',
    category: 'presupuesto',
    badge: 'Preset Cocina Lavable',
    title: 'Presupuesto para Pintar Cocina en Argentina (2026) | KalkulAR',
    metaDescription: 'Cotizá la pintura de tu cocina en Argentina: desengrase previo, látex ultralavable para paredes y cielorraso. Mano de obra testigo de $85.000 a $130.000 ARS.',
    h1: 'Presupuesto para Pintar Cocina en Argentina (2026)',
    subtitle: 'Tratamiento desengrasante y pintura látex ultralavable de alta resistencia al calor y salpicaduras.',
    calculatorPreset: {
      jobCategory: 'walls',
      roomType: 'kitchen',
      length: 3.5,
      width: 2.5,
      height: 2.5,
      openingsDeductionM2: 9.0,
      paintCeiling: true,
      selectedConditions: ['minorCracks'],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Pintar una cocina estándar de 3.5x2.5 metros (restando alacenas, bajomesada y azulejos) cuesta entre $85.000 y $130.000 ARS de mano de obra en Argentina (2026). En materiales lavables se estiman entre $45.000 y $65.000 ARS.',
      metrics: {
        totalM2: 29.7,
        wallM2: 21,
        ceilingM2: 8.75,
        paintLiters: '6 a 8 Litros (Látex ultralavable)',
        ceilingLiters: '2 Litros (Cielorraso mate)',
        laborFairPrice: '$110.000 ARS',
        laborRange: '$85.000 a $130.000 ARS',
        materialsCost: '~$52.000 ARS',
        estimatedDays: '1 a 2 días hábiles'
      },
      editorialParagraphs: [
        'En la cocina coexisten alacenas empotradas, campana extractora y cerámicos sobre mesada. Descontando estos elementos, la superficie neta ronda los 21 m² de pared más 8.75 m² de cielorraso.',
        'El desafío técnico de pintar una cocina es la película microscópica de grasa vegetal que se deposita en las paredes altas y el techo. Aplicar pintura sobre grasa provoca falta de adherencia inmediata y manchas aceitosas que traspasan la pintura.',
        'Es mandatorio realizar un lavado previo con agua tibia y detergente desengrasante o amoníaco diluido, enjuagar, dejar secar y luego aplicar látex acrílico ultralavable de alta resistencia química.'
      ],
      faqs: [
        {
          q: '¿Qué pintura se recomienda para las paredes de la cocina?',
          a: 'Látex acrílico premium ultralavable (como Albalatex Toque Sublim o Sherwin Williams Loxon). Permite frotar con esponja y jabón sin desgastar el color ante salpicaduras de salsa o aceite.'
        },
        {
          q: '¿Es necesario desengrasar las paredes antes de pintar?',
          a: 'Sí, es el paso más importante. Si no se desengrasa a fondo, la pintura se ampollará o desprenderá en tiras al poco tiempo.'
        },
        {
          q: '¿El cielorraso de la cocina lleva la misma pintura que la pared?',
          a: 'No. El cielorraso requiere látex antihongo ultra mate transpirable para no retener la humedad generada al hervir alimentos.'
        }
      ]
    }
  },

  // 6. Departamento 2 Ambientes
  {
    slug: 'pintar-departamento-2-ambientes',
    path: '/presupuesto/pintar-departamento-2-ambientes',
    category: 'presupuesto',
    badge: 'Preset Depto 2 Ambientes (~45m² planta)',
    title: 'Presupuesto para Pintar Depto 2 Ambientes en Argentina (2026) | KalkulAR',
    metaDescription: '¿Cuánto cuesta pintar un departamento de 2 ambientes en Argentina (2026)? Mano de obra estimada entre $380.000 y $560.000 ARS. Metros cuadrados, baldes de 20L y materiales con envío a domicilio.',
    h1: 'Presupuesto para Pintar Departamento de 2 Ambientes en Argentina (2026)',
    subtitle: 'Cotización integral para living comedor, dormitorio matrimonial, pasillo, baño y cocina con costos testigo de obra.',
    calculatorPreset: {
      jobCategory: 'walls',
      roomType: 'custom',
      useManualM2: true,
      manualM2: 95,
      paintCeiling: true,
      selectedConditions: ['minorCracks'],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Pintar un departamento de 2 ambientes estándar en Argentina (aproximadamente 95 m² netos de pared más 42 m² de techos) tiene un costo de mano de obra en 2026 de entre $380.000 y $560.000 ARS (promedio: $460.000 ARS). En materiales se estiman entre $180.000 y $260.000 ARS.',
      metrics: {
        totalM2: 137,
        wallM2: 95,
        ceilingM2: 42,
        paintLiters: '2 Baldes de 20 Litros (Látex interior)',
        ceilingLiters: '1 Balde de 10 Litros (Cielorraso)',
        laborFairPrice: '$460.000 ARS',
        laborRange: '$380.000 a $560.000 ARS',
        materialsCost: '~$210.000 ARS',
        estimatedDays: '4 a 6 días hábiles'
      },
      editorialParagraphs: [
        'Un departamento de dos ambientes típico en la Ciudad de Buenos Aires, Córdoba, Rosario o La Plata cuenta con unos 40 a 48 m² de superficie de planta. El metraje vertical a pintar (descontando aberturas y cerámicos) ronda entre 90 y 105 m² netos de pared, más unos 42 m² de cielorrasos.',
        'La economía de escala de pintar un departamento completo permite negociar mejores tarifas por m² con el pintor respecto a pintar un solo cuarto. El pintor optimiza tiempos de secado rotando entre ambientes.',
        'Para esta cantidad de metraje, la logística ideal es comprar 2 baldes de látex interior de 20 litros y 1 balde de 10 litros de cielorraso con envío a domicilio por Mercado Libre, ahorrando flete y facilitando la financiación en cuotas.'
      ],
      faqs: [
        {
          q: '¿Cuánto tiempo lleva pintar un departamento de 2 ambientes vacío?',
          a: 'Si el departamento está desocupado, 2 pintores oficiales completan el trabajo en 3 a 4 días hábiles. Si está habitado con muebles, el trabajo demora de 5 a 6 días.'
        },
        {
          q: '¿Se cobra más caro si el departamento está amoblado?',
          a: 'Sí, habitualmente los pintores cobran entre un 15% y un 25% extra por mover muebles, encintar zócalos y proteger artefactos en cada cambio de habitación.'
        },
        {
          q: '¿Qué conviene comprar para un 2 ambientes completo?',
          a: 'Dos baldes de 20L de látex interior mate lavable, 1 balde de 10L para cielorrasos, 1 pote de 4kg de enduido plástico, 2 litros de fijador sellador y un kit completo de rodillos y cintas.'
        }
      ]
    }
  },

  // 7. Departamento 3 Ambientes
  {
    slug: 'pintar-departamento-3-ambientes',
    path: '/presupuesto/pintar-departamento-3-ambientes',
    category: 'presupuesto',
    badge: 'Preset Depto 3 Ambientes (~70m² planta)',
    title: 'Presupuesto para Pintar Depto 3 Ambientes en Argentina (2026) | KalkulAR',
    metaDescription: 'Cotizá pintar tu departamento de 3 ambientes en Argentina (2026). Mano de obra testigo de $620.000 a $900.000 ARS, cálculo de m² y combos de baldes de 20L con cuotas y envío gratis.',
    h1: 'Presupuesto para Pintar Departamento de 3 Ambientes en Argentina (2026)',
    subtitle: 'Living comedor amplio, 2 dormitorios, distribución, baño y cocina con desglose de mano de obra y materiales.',
    calculatorPreset: {
      jobCategory: 'walls',
      roomType: 'custom',
      useManualM2: true,
      manualM2: 160,
      paintCeiling: true,
      selectedConditions: ['minorCracks'],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Pintar un departamento de 3 ambientes (unos 160 m² netos de pared más 65 m² de cielorrasos) cuesta en Argentina (2026) entre $620.000 y $900.000 ARS de mano de obra (promedio: $740.000 ARS). En materiales se estiman entre $280.000 y $420.000 ARS.',
      metrics: {
        totalM2: 225,
        wallM2: 160,
        ceilingM2: 65,
        paintLiters: '3 Baldes de 20 Litros (Látex interior)',
        ceilingLiters: '1 Balde de 20 Litros (Cielorraso)',
        laborFairPrice: '$740.000 ARS',
        laborRange: '$620.000 a $900.000 ARS',
        materialsCost: '~$340.000 ARS',
        estimatedDays: '6 a 9 días hábiles'
      },
      editorialParagraphs: [
        'Un departamento de 3 ambientes (65 a 75 m² de planta) alberga dos dormitorios, living comedor, hall de entrada, pasillo de distribución, baño y cocina. Su metraje vertical total a pintar asciende a unos 225 m² considerando techos.',
        'En obras de este volumen, la calidad de la pintura es crítica: utilizar segundas marcas con bajo poder cubritivo obliga a dar una tercera mano, duplicando el tiempo de trabajo y encareciendo la mano de obra.',
        'Se recomienda abastecer la obra con 3 baldes de 20L de látex para paredes y 1 balde de 20L para cielorrasos. Comprar los combos completos por Mercado Libre asegura entrega sin costo de flete directo en el edificio y financiación bancaria.'
      ],
      faqs: [
        {
          q: '¿Cuántos litros de pintura lleva un departamento de 3 ambientes?',
          a: 'Aproximadamente 60 litros de látex interior de pared (3 baldes de 20L) y unos 15 a 20 litros de látex especial para cielorrasos.'
        },
        {
          q: '¿Se puede habitar el departamento mientras se pinta?',
          a: 'Sí, pero requiere pintar por etapas: primero el living comedor y un dormitorio, y luego el resto. Las pinturas látex al agua modernas prácticamente no despiden olor y secan al tacto en 2 horas.'
        },
        {
          q: '¿Cuánto tiempo dura el trabajo en un 3 ambientes?',
          a: 'Una cuadrilla de 2 pintores profesionales completa el departamento en 6 a 8 días hábiles, trabajando ambiente por ambiente.'
        }
      ]
    }
  },

  // 8. Rejas de Ventana
  {
    slug: 'pintar-rejas-ventanas',
    path: '/presupuesto/pintar-rejas-ventanas',
    category: 'presupuesto',
    badge: 'Preset Herrería Ventana 1.5x1.2m',
    title: 'Precio para Pintar Rejas de Ventana en Argentina (2026) | KalkulAR',
    metaDescription: '¿Cuánto cuesta pintar rejas de ventana en Argentina? Mano de obra testigo de $28.000 a $50.000 ARS por ventana. Desoxidado, esmalte 3 en 1 y compra de insumos en Mercado Libre.',
    h1: 'Precio para Pintar Rejas de Ventana en Argentina (2026)',
    subtitle: 'Costos por abertura con desoxidado mecánico, tratamiento pasivador y 2 manos de esmalte sintético 3 en 1.',
    calculatorPreset: {
      jobCategory: 'rejas',
      rejaType: 'standard_window',
      rejaQuantity: 1,
      rejaLength: 10,
      rejaHeight: 1.2,
      rejaWidth: 1.5,
      rejaRust: 'light',
      rejaDesign: 'straight',
      rejaEnvironments: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Pintar una reja de ventana estándar (1.50x1.20 metros) cuesta en Argentina (2026) entre $28.000 y $50.000 ARS de mano de obra (promedio recomendado: $38.000 ARS). En materiales (esmalte 3 en 1, lija y solvente) se gastan unos $22.000 a $30.000 ARS.',
      metrics: {
        totalM2: 1.8,
        linearMetersEquiv: '3.5 metros lineales',
        paintLiters: '1 Litro de Esmalte 3 en 1',
        solvents: '1 Litro de Aguarrás Mineral',
        laborFairPrice: '$38.000 ARS / ventana',
        laborRange: '$28.000 a $50.000 ARS',
        materialsCost: '~$25.000 ARS',
        estimatedDays: '1 jornada'
      },
      editorialParagraphs: [
        'Las rejas de ventana estándar de 1.50m x 1.20m protegen ventanales corredizos y suelen contar con barrotes redondos de 1/2 pulgada o planchuelas cruzadas. En herrería se utiliza el cómputo de "lleno por vacío", ya que pintar las 4 caras de cada barrote compensa los huecos.',
        'El 70% del valor de mano de obra en herrería corresponde a la remoción mecánica de óxido, raspado de soldaduras y encintado perimetral contra los vidrios de la ventana para no mancharlos.',
        'Para pintar 1 a 2 ventanas alcanza con 1 lata de 1 litro de Esmalte Sintético 3 en 1 (antióxido + convertidor + terminación), 1 litro de aguarrás mineral para desengrase y pinceles finos de cerda pura.'
      ],
      faqs: [
        {
          q: '¿Cómo se protegen los vidrios de la ventana al pintar la reja?',
          a: 'Se coloca cinta de enmascarar de 24mm sobre el perímetro del vidrio pegado a la reja y cartón o papel de diario detrás de los barrotes para evitar salpicaduras directas.'
        },
        {
          q: '¿Conviene esmalte 3 en 1 o pintura tradicional con convertidor aparte?',
          a: 'El esmalte sintético 3 en 1 de primeras marcas (Albalux, Tersuave o Sinteplast) ahorra tiempo y dinero al combinar anticorrosivo y color brillante o satinado en una sola aplicación a 2 manos.'
        },
        {
          q: '¿Cuánto se cobra por pintar varias ventanas juntas?',
          a: 'Cuando se pintan 3 o más ventanas en la misma casa, los herreros y pintores suelen aplicar un descuento del 15% al 20% por abertura al optimizar el armado de andamios y materiales.'
        }
      ]
    }
  },

  // 9. Puerta Reja
  {
    slug: 'pintar-puerta-reja',
    path: '/presupuesto/pintar-puerta-reja',
    category: 'presupuesto',
    badge: 'Preset Puerta Reja Exterior 0.9x2.0m',
    title: 'Precio para Pintar Puerta Reja en Argentina (2026) | KalkulAR',
    metaDescription: 'Cotizá el repintado de tu puerta reja de entrada en Argentina. Mano de obra ($35.000 a $65.000 ARS), desengrase, esmalte 3en1 y entrega de materiales por Mercado Libre.',
    h1: 'Precio para Pintar Puerta Reja de Entrada en Argentina (2026)',
    subtitle: 'Marco perimetral, cerradura, cerrojos y barrotes con protección anticorrosiva para intemperie.',
    calculatorPreset: {
      jobCategory: 'rejas',
      rejaType: 'door_grille',
      rejaQuantity: 1,
      rejaLength: 10,
      rejaHeight: 2.0,
      rejaWidth: 0.9,
      rejaRust: 'light',
      rejaDesign: 'straight',
      rejaEnvironments: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Pintar una puerta reja de entrada exterior estándar (0.90x2.00 metros con marco) cuesta entre $35.000 y $65.000 ARS de mano de obra en Argentina (2026). El costo de materiales ronda los $24.000 a $32.000 ARS.',
      metrics: {
        totalM2: 1.8,
        linearMetersEquiv: '4.5 metros lineales',
        paintLiters: '1 a 1.5 Litros de Esmalte 3 en 1',
        solvents: '1 Litro de Aguarrás Mineral',
        laborFairPrice: '$48.000 ARS',
        laborRange: '$35.000 a $65.000 ARS',
        materialsCost: '~$28.000 ARS',
        estimatedDays: '1 jornada'
      },
      editorialParagraphs: [
        'La puerta reja de entrada principal está sometida a la intemperie directa: lluvia, rocío nocturno y rayos solares. Es habitual que presente oxidación en la base inferior del zócalo de chapa y alrededor de la cerradura.',
        'El trabajo correcto exige rasquetear con cepillo de alambre el óxido desprendido, aplicar desoxidante fosfatizante si el metal está picado, encintar cilindros y manijas, y dar 2 manos generosas de esmalte sintético 3 en 1.',
        'Se recomienda utilizar acabado satinado o brillante de alta resistencia química para facilitar la limpieza periódica con trapo húmedo.'
      ],
      faqs: [
        {
          q: '¿Cómo evitar que la pintura se despegue en la base de la puerta reja?',
          a: 'La base de la reja absorbe agua de lluvia y baldeos de piso. Hay que retirar todo el óxido con cepillo de acero hasta ver metal brillante y aplicar 1 mano de convertidor puro antes del esmalte.'
        },
        {
          q: '¿Se debe desarmar la cerradura para pintar la puerta reja?',
          a: 'No es indispensable desmontarla; se puede enmascarar con cinta de papel de pintor de precisión tapando el cilindro de la llave para que no ingrese pintura en el mecanismo.'
        },
        {
          q: '¿Qué brocha o pincel se usa en herrería?',
          a: 'Pinceles chatos de cerda pura con virola metálica n° 15 o n° 20. Permiten pintar entre los barrotes sin salpicar ni dejar marcas de pincelada.'
        }
      ]
    }
  },

  // 10. Portón de Garage
  {
    slug: 'pintar-porton-garage',
    path: '/presupuesto/pintar-porton-garage',
    category: 'presupuesto',
    badge: 'Preset Portón 3.0x2.1m',
    title: 'Presupuesto para Pintar Portón de Garage en Argentina (2026) | KalkulAR',
    metaDescription: 'Cotizá la pintura de tu portón de cochera (corredizo, levadizo o 2 hojas) en Argentina. Mano de obra de $70.000 a $140.000 ARS y esmalte 3 en 1 en Mercado Libre.',
    h1: 'Presupuesto para Pintar Portón de Garage en Argentina (2026)',
    subtitle: 'Portones levadizos, corredizos o batientes de chapa o barrotes con remoción profunda de óxido y acabado profesional.',
    calculatorPreset: {
      jobCategory: 'rejas',
      rejaType: 'garage_gate',
      rejaQuantity: 1,
      rejaLength: 10,
      rejaHeight: 2.1,
      rejaWidth: 3.0,
      rejaRust: 'medium',
      rejaDesign: 'straight',
      rejaEnvironments: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Pintar un portón de garaje estándar de 3.00x2.10 metros (chapa plegada o barrotes con marco) tiene un costo de mano de obra en 2026 de entre $70.000 y $140.000 ARS (promedio justo: $95.000 ARS). En materiales se estiman entre $45.000 y $75.000 ARS.',
      metrics: {
        totalM2: 6.3,
        linearMetersEquiv: '10 metros lineales',
        paintLiters: '4 Litros de Esmalte Sintético 3 en 1',
        solvents: '2 Litros de Aguarrás Mineral',
        laborFairPrice: '$95.000 ARS',
        laborRange: '$70.000 a $140.000 ARS',
        materialsCost: '~$58.000 ARS',
        estimatedDays: '1 a 2 jornadas'
      },
      editorialParagraphs: [
        'Los portones vehiculares residenciales poseen una superficie amplia (más de 6 m² por cara) expuesta al tránsito de autos, gases de combustión y lluvia directa. Muchos portones levadizos combinan chapa plegada ciega en la parte inferior con barrotes o metal desplegado superior.',
        'Si el portón presenta óxido escamado, la preparación exige amoladora con disco flap o cepillo de alambre de copa para desbastar las capas sueltas hasta llegar al metal sano. Este proceso representa más del 60% del tiempo total de la obra.',
        'La presentación ideal de pintura para un portón de 3x2.1m es una lata de 4 Litros de Esmalte Sintético 3 en 1 (Alba, Tersuave o Sinteplast), que asegura cantidad suficiente para cubrir las dos caras a 2 manos y los rieles guía.'
      ],
      faqs: [
        {
          q: '¿Conviene pintar el portón a pincel, rodillo o soplete?',
          a: 'Las partes de chapa lisa quedan mejor con rodillo de espuma compacta o soplete; los barrotes y guías se pintan a pincel de cerda fina. El rodillo evita marcas de brocha en paños ciegos.'
        },
        {
          q: '¿Se pintan los cables de acero o cadenas del portón levadizo?',
          a: 'No. Los cables de acero, poleas y engranajes mecánicos deben engrasarse con grasa grafitada, nunca pintarse, ya que la pintura reseca el cable y traba el motor.'
        },
        {
          q: '¿Cuánta pintura se necesita para pintar ambas caras del portón?',
          a: 'Para pintar las dos caras (interior y exterior) a dos manos se precisan entre 3.5 y 4 litros de esmalte sintético 3 en 1.'
        }
      ]
    }
  },

  // 11. Reja Perimetral
  {
    slug: 'pintar-reja-perimetral',
    path: '/presupuesto/pintar-reja-perimetral',
    category: 'presupuesto',
    badge: 'Preset Cerco Perimetral por Metro',
    title: 'Precio para Pintar Reja Perimetral por Metro en Argentina (2026) | KalkulAR',
    metaDescription: 'Cotizá el costo por metro lineal de pintar rejas de frente y cercos perimetrales en Argentina ($8.500 a $12.500 ARS/ml). Calculá litros de esmalte y pedí todo en Mercado Libre.',
    h1: 'Precio para Pintar Reja Perimetral por Metro Lineal en Argentina (2026)',
    subtitle: 'Tarifas actualizadas de mano de obra por metro lineal (ml) con desoxidado, convertidor y esmalte para rejas de frente.',
    calculatorPreset: {
      jobCategory: 'rejas',
      rejaType: 'perimeter_fence',
      rejaQuantity: 1,
      rejaLength: 10,
      rejaHeight: 1.5,
      rejaWidth: 2.0,
      rejaRust: 'medium',
      rejaDesign: 'straight',
      rejaEnvironments: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'El precio de mano de obra para pintar rejas perimetrales de frente en Argentina (2026) se cobra por metro lineal (ml) y oscila entre $8.500 y $12.500 ARS por ml terminado a 2 manos (promedio justo: $10.500 ARS/ml). Para un frente de 10 metros lineales, el presupuesto ronda los $105.000 ARS de mano de obra.',
      metrics: {
        totalM2: 15,
        linearMetersEquiv: '10 metros lineales base',
        paintLiters: '2 a 4 Litros de Esmalte 3 en 1',
        solvents: '1 a 2 Litros de Aguarrás Mineral',
        laborFairPrice: '$10.500 ARS / ml',
        laborRange: '$8.500 a $12.500 ARS / ml',
        materialsCost: '~$45.000 ARS (10 metros)',
        estimatedDays: '1 a 2 días hábiles'
      },
      editorialParagraphs: [
        'Las rejas de frente montadas sobre muretes de mampostería son la primera barrera de seguridad y la cara visible de una casa. Suelen tener alturas de 1.20 a 1.80 metros y una longitud de 8 a 15 metros lineales en terrenos residenciales estándar.',
        'La modalidad de cobro profesional en Argentina para rejas corridas no es por m², sino por metro lineal (ml). Esta unidad compensa el tiempo minucioso de pintar barrote por barrote, lanzas superiores, pasadores y bisagras de la puerta peatonal y vehicular.',
        'Si la reja posee óxido en uniones soldadas, se aplica un cepillado enérgico y pasivador antes de las dos manos de esmalte 3 en 1. Cada litro de esmalte rinde aproximadamente 5 metros lineales completos a dos manos.'
      ],
      faqs: [
        {
          q: '¿Cómo se mide una reja perimetral para pedir presupuesto?',
          a: 'Se mide con cinta métrica la longitud total horizontal del frente de extremo a extremo. Esa cantidad de metros lineales se multiplica por la tarifa por metro (promedio $10.500 ARS/ml).'
        },
        {
          q: '¿Qué pasa si la reja tiene volutas o detalles artísticos coloniales?',
          a: 'La herrería artística colonial con rulos, flores y adornos tiene un recargo del 30% al 40% en mano de obra debido a la cantidad de recovecos inaccesibles que requieren pintura a pincel fino.'
        },
        {
          q: '¿Cuánto rinde una lata de 4 litros en rejas perimetrales?',
          a: 'Una lata de 4 litros de esmalte sintético 3 en 1 cubre unos 18 a 20 metros lineales de reja estándar de 1.5m de altura a 2 manos completas.'
        }
      ]
    }
  },

  // 12. Guía Tarifaria Mano de Obra
  {
    slug: 'mano-de-obra-pintor-m2',
    path: '/precios/mano-de-obra-pintor-m2',
    category: 'precios',
    badge: 'Guía Tarifaria Oficial 2026',
    title: 'Precio Mano de Obra Pintor por m² en Argentina (2026) | Guía Tarifaria KalkulAR',
    metaDescription: '¿Cuánto cobra un pintor por metro cuadrado en Argentina en 2026? Tarifas testigo actualizadas: látex interior ($4.500 ARS/m²), cielorrasos, enduido y jornal de 8 horas.',
    h1: 'Precio de Mano de Obra de Pintor por m² en Argentina (2026)',
    subtitle: 'Guía tarifaria completa y valores testigo de mercado por metro cuadrado, jornal de 8 horas y recargos por preparación.',
    calculatorPreset: {
      jobCategory: 'walls',
      roomType: 'room_medium',
      length: 4.0,
      width: 3.5,
      height: 2.5,
      openingsDeductionM2: 3.5,
      paintCeiling: true,
      selectedConditions: ['minorCracks'],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'En 2026, un pintor profesional cobra en Argentina entre $3.500 y $6.000 ARS por m² para pintura látex interior en paredes a dos manos, con una media justa de $4.500 ARS/m². En cielorrasos promedia $5.300 ARS/m², en herrería $10.500 ARS/ml y el jornal oficial de 8 horas ronda los $40.000 ARS.',
      metrics: {
        totalM2: 'Por unidad de cómputo',
        wallM2: '$4.500 ARS / m² justo',
        ceilingM2: '$5.300 ARS / m² justo',
        paintLiters: '5.5 m² / Litro estándar',
        solvents: 'Aguarrás para esmaltes',
        laborFairPrice: '$4.500 ARS / m²',
        laborRange: '$3.500 a $6.000 ARS / m²',
        materialsCost: 'Variable según m²',
        estimatedDays: 'Según escala'
      },
      editorialParagraphs: [
        'El costo de pintar una vivienda en Argentina está compuesto por dos variables independientes: la mano de obra calificada del pintor y el valor de los materiales en pinturerías o plataformas online como Mercado Libre.',
        'La tarifa testigo promedio para pintura látex en paredes interiores se ubica en $4.500 ARS por metro cuadrado neto. Este valor asume superficies con mantenimiento regular que solo demandan lijado superficial y dos manos cruzadas.',
        'Las tareas de preparación intensiva se cobran como adicionales por m²: el enduido total o planchado a llana suma $5.500 ARS/m², el tratamiento de humedad y hongos $2.000 ARS/m², y la apertura y sellado de grietas estructurales $1.500 ARS/m².'
      ],
      faqs: [
        {
          q: '¿Cómo se calcula el metro cuadrado neto para presupuestar pintura?',
          a: 'Se calcula el perímetro del ambiente multiplicado por la altura de las paredes y se restan las superficies de puertas y ventanas. Esto evita pagar mano de obra sobre vanos donde no se aplica pintura.'
        },
        {
          q: '¿Cuánto cobra un pintor oficial por día de trabajo en 2026?',
          a: 'El jornal promedio en Argentina de un pintor oficial calificado para una jornada de 8 horas oscila entre $35.000 y $55.000 ARS, con un promedio de $40.000 ARS por día.'
        },
        {
          q: '¿Por qué conviene comprar uno mismo los materiales y no que los compre el pintor?',
          a: 'Comprar por tu cuenta en Mercado Libre te permite acceder a Tiendas Oficiales con descuentos, financiar en cuotas sin interés y evitar el recargo por flete y gestión que cobran los contratistas (habitualmente un 15% a 25% extra).'
        }
      ]
    }
  }
];

/**
 * =========================================================================
 * ❄️ PÁGINAS DE SEO PROGRAMÁTICO — CLIMATIZACIÓN Y AIRES ACONDICIONADOS (2026/2027)
 * =========================================================================
 */
export const AC_PSEO_PAGES = [
  // 1. Calculadora de Frigorías (Landing Pilar de Herramienta)
  {
    slug: 'calculadora-frigorias-aire-acondicionado',
    path: '/calculadora-frigorias-aire-acondicionado',
    category: 'herramienta',
    badge: 'Calculadora Oficial CACAAV 2026',
    title: 'Calculadora de Frigorías por m² y m³ en Argentina (2026) | KalkulAR',
    metaDescription: 'Calculá gratis cuántas frigorías y watts necesita tu habitación o living en Argentina. Fórmula exacta por m³, techo, orientación solar y costo de instalación CACAAV.',
    h1: 'Calculadora de Frigorías y Costo de Instalación de Aire Acondicionado (2026)',
    subtitle: 'Dimensionamiento térmico exacto por volumen (m³), exposición solar, tipo de techo y presupuesto de mano de obra de instalación en Argentina.',
    calculatorPreset: {
      jobCategory: 'ac',
      acRoomType: 'ac_bedroom_medium',
      length: 4.0,
      width: 3.5,
      height: 2.5,
      acRoofType: 'slab_covered',
      acSunExposure: 'low_south',
      acInternalLoads: [],
      acPipeMeters: 3,
      acInstallConditions: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Para calcular las frigorías exactas de un aire acondicionado en Argentina se multiplica el volumen del ambiente (Largo × Ancho × Alto en m³) por 50 frigorías/m³ (equivalente a 125 frigorías por m² en techos de 2.50m). Si el ambiente tiene losa expuesta al sol, techo de chapa o ventanal al Norte/Oeste, se adiciona entre un 15% y un 40% extra.',
      metrics: {
        totalM2: '50 fg por m³ (Base)',
        wallM2: '125 a 165 fg por m²',
        ceilingM2: '1 fg = 1.163 Watts',
        paintLiters: '2250 / 3000 / 4500 / 6000 fg',
        ceilingLiters: 'Kit 3m (1/4" y 3/8" o 1/2")',
        laborFairPrice: '$155.000 ARS (Base 3000fg)',
        laborRange: '$125.000 a $240.000 ARS',
        materialsCost: '~$94.000 ARS (Kit 3m)',
        estimatedDays: '3 a 4 horas de instalación'
      },
      editorialParagraphs: [
        'El error más frecuente al comprar un aire acondicionado en Argentina es guiarse únicamente por los metros cuadrados de piso sin evaluar la altura del techo ni la carga térmica solar. Un dormitorio en planta baja con otro departamento arriba requiere un 30% menos de potencia frigorífica que el mismo cuarto ubicado en un último piso con terraza expuesta al sol de enero o techo de chapa y machimbre.',
        'La normativa técnica empleada por los matriculados de CACAAV parte de una base volumétrica de 50 frigorías por metro cúbico (m³) para zonas templadas (AMBA, Córdoba, Rosario, Mendoza) y aplica factores de corrección por orientación Norte/Oeste (+15%), cubierta expuesta (+15% a +25%), cantidad de ocupantes (+150 fg por persona extra) y artefactos calóricos como heladeras o computadoras.',
        'Una vez obtenidas las frigorías reales, nuestra calculadora mapea automáticamente el resultado al escalón comercial exacto que se vende en Argentina (2.250 fg / 2.600W, 3.000 fg / 3.500W, 4.500 fg / 5.200W o 6.000 fg / 6.500W) y desglosa cuánto cuesta la mano de obra del instalador junto con el kit de caños de cobre en Mercado Libre.'
      ],
      faqs: [
        {
          q: '¿Cómo se calculan las frigorías de un aire acondicionado por metro cuadrado y cúbico?',
          a: 'Multiplicá Largo x Ancho x Alto de la habitación para obtener los metros cúbicos (m³) y multiplicalos por 50. Por ejemplo, un cuarto de 4m x 3.5m x 2.5m tiene 35 m³ x 50 = 1.750 frigorías base. Si recibe sol directo de tarde, sumá un 15% (2.012 fg), correspondiendo un equipo comercial de 2.250 o 3.000 frigorías.'
        },
        {
          q: '¿Qué pasa si compro un aire acondicionado con menos frigorías de las necesarias?',
          a: 'Un equipo subdimensionado nunca llega a cortar por termostato en los días de más de 35°C. El motocompresor funciona al 100% de manera continua, disparando el consumo eléctrico hasta un 40% más y reduciendo drásticamente su vida útil.'
        },
        {
          q: '¿Es mejor que sobren frigorías o comprar el equipo justo?',
          a: 'Siempre conviene elegir el escalón comercial inmediatamente superior cuando el cálculo queda al límite, especialmente si elegís tecnología Inverter. Un equipo Inverter regula las revoluciones del compresor y consume sólo la energía necesaria sin desperdiciar electricidad.'
        }
      ]
    }
  },

  // 2. Precio de Instalación de Aire Acondicionado en Argentina (Tarifario CACAAV)
  {
    slug: 'instalacion-aire-acondicionado-argentina',
    path: '/precios/instalacion-aire-acondicionado-argentina',
    category: 'precios',
    badge: 'Tarifario Oficial 2026/2027',
    title: 'Precio Instalación de Aire Acondicionado en Argentina (2026/2027) | Tarifario CACAAV',
    metaDescription: '¿Cuánto cuesta instalar un aire acondicionado Split en Argentina en 2026/2027? Mano de obra oficial CACAAV desde $155.000 ARS, costo por metro de caño y kit de materiales.',
    h1: 'Precio de Instalación de Aire Acondicionado Split en Argentina (Temporada 2026/2027)',
    subtitle: 'Guía actualizada de tarifas de mano de obra de técnicos matriculados por frigorías, metro lineal extra de cañería y adicionales de obra.',
    calculatorPreset: {
      jobCategory: 'ac',
      acRoomType: 'ac_bedroom_medium',
      length: 4.0,
      width: 3.5,
      height: 2.5,
      acRoofType: 'slab_covered',
      acSunExposure: 'direct_north_west',
      acInternalLoads: [],
      acPipeMeters: 3,
      acInstallConditions: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'En la temporada 2026/2027 en Argentina, el precio de mano de obra para instalar un aire acondicionado Split de 2.250 a 3.000 frigorías oscila entre $125.000 y $195.000 ARS (promedio justo matriculado CACAAV: $155.000 ARS). Para equipos de 4.500 frigorías promedia $190.000 ARS y para 6.000 frigorías $225.000 ARS, sin incluir el kit de materiales ($94.000 a $115.000 ARS).',
      metrics: {
        totalM2: 'Hasta 3m de caño',
        wallM2: '$155.000 ARS (2250/3000 fg)',
        ceilingM2: '$190.000 ARS (4500 fg)',
        paintLiters: '$225.000 ARS (6000 fg)',
        ceilingLiters: '$35.000 a $44.000 / m extra',
        laborFairPrice: '$155.000 ARS',
        laborRange: '$125.000 a $240.000 ARS',
        materialsCost: '~$94.000 ARS (Kit 3m)',
        estimatedDays: '3 horas en domicilio'
      },
      editorialParagraphs: [
        'El costo de colocación de un aire acondicionado Split en Argentina se divide en dos componentes: la tarifa de mano de obra profesional del técnico matriculado y el valor de los materiales de interconexión (caños de cobre de alta y baja, aislantes elastoméricos, ménsulas, cable TPR y manguera de desagüe).',
        'Una instalación reglamentaria avalada por CACAAV y las marcas oficiales (BGH, Surrey, Philco, Samsung, LG) exige obligatoriamente respetar un recorrido mínimo de 3 metros de cañería de cobre y realizar vacío del circuito con bomba de vacío durante al menos 20 a 30 minutos. Omitir la bomba de vacío ("purgado a gas") contamina el aceite del compresor con humedad y anula inmediatamente la garantía de fábrica.',
        'Para ahorrar entre un 25% y un 35% en el presupuesto total, la modalidad más conveniente es contratar al técnico únicamente por la mano de obra y comprar por tu cuenta el Kit de Instalación Completo de 3 metros con ménsulas en Mercado Libre con envío gratis y cuotas.'
      ],
      faqs: [
        {
          q: '¿Cuánto cuesta la mano de obra para instalar un aire acondicionado de 3000 frigorías en 2026?',
          a: 'La mano de obra pura de un instalador matriculado para un equipo de hasta 3.000 frigorías tiene un valor promedio de $155.000 ARS (con un rango de mercado de $125.000 a $195.000 ARS según zona y garantía).'
        },
        {
          q: '¿Qué incluye el precio básico de instalación de un aire acondicionado Split?',
          a: 'Incluye el amurado de la unidad interior y de las ménsulas exteriores en pared accesible (balcón, patio o terraza), un pase de pared estándar de 15cm, la conexión de hasta 3 metros de cañería, presurización, vacío con bomba y prueba de funcionamiento.'
        },
        {
          q: '¿Cuánto se cobra el metro adicional de cañería si supera los 3 metros?',
          a: 'Cada metro lineal extra por encima de los 3 metros estándar cuesta entre $35.000 ARS/m (para equipos de 2250 y 3000 frigorías con caño de 1/4" y 3/8") y $44.000 ARS/m (para equipos de 4500 y 6000 frigorías con caño de 1/4" y 1/2"), incluyendo caño de cobre, aislante, cable y mano de obra.'
        }
      ]
    }
  },

  // 3. Habitación 3x3
  {
    slug: 'aire-acondicionado-habitacion-3x3',
    path: '/presupuesto/aire-acondicionado-habitacion-3x3',
    category: 'presupuesto',
    badge: 'Preset Dormitorio Chico 3x3m',
    title: '¿Cuántas Frigorías Necesita una Habitación de 3x3? Precio e Instalación (2026) | KalkulAR',
    metaDescription: 'Descubrí cuántas frigorías lleva un dormitorio de 3x3 metros (9 m²). Cálculo térmico exacto (2250 fg / 2600W), precio de mano de obra de instalación y kit en Mercado Libre.',
    h1: 'Aire Acondicionado para Habitación de 3x3: Frigorías y Presupuesto de Instalación (2026)',
    subtitle: 'Cálculo térmico para 9 m² (22.5 m³), equipo Split recomendado y costos de colocación con materiales.',
    calculatorPreset: {
      jobCategory: 'ac',
      acRoomType: 'ac_bedroom_small',
      length: 3.0,
      width: 3.0,
      height: 2.5,
      acRoofType: 'slab_covered',
      acSunExposure: 'low_south',
      acInternalLoads: [],
      acPipeMeters: 3,
      acInstallConditions: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Una habitación de 3x3 metros (9 m² de planta y 22.5 m³ de volumen) necesita entre 1.125 y 1.650 frigorías reales según la exposición solar. El equipo comercial exacto a comprar en Argentina es un Aire Acondicionado Split de 2.250 a 2.300 frigorías (2.600W - 2.700W). El costo de mano de obra de instalación ronda los $155.000 ARS y el kit de materiales unos $94.000 ARS.',
      metrics: {
        totalM2: '9 m² (22.5 m³)',
        wallM2: '1.125 a 1.650 fg reales',
        ceilingM2: 'Split 2.250 Frigorías (2600W)',
        paintLiters: 'Caños de cobre 1/4" y 3/8"',
        ceilingLiters: 'Ménsulas de 42 cm',
        laborFairPrice: '$155.000 ARS',
        laborRange: '$125.000 a $195.000 ARS',
        materialsCost: '~$94.000 ARS (Kit 3m)',
        estimatedDays: '3 horas de trabajo'
      },
      editorialParagraphs: [
        'Un dormitorio individual o escritorio de 3x3 metros con altura estándar de 2.50 metros encierra un volumen de aire de 22.5 m³. Aplicando la regla termomecánica de 50 frigorías por m³, la demanda base es de apenas 1.125 frigorías (o unas 1.575 frigorías si el cuarto tiene techo de chapa o sol directo del oeste por la tarde).',
        'Dado que el escalón comercial más pequeño fabricado en Argentina para equipos Split de pared es el de 2.250 a 2.300 frigorías (aproximadamente 2.600W a 2.750W), este equipo cubre la habitación con una holgura térmica ideal, logrando enfriar o calefaccionar el cuarto en menos de 10 minutos.',
        'Para la instalación se utiliza el kit estándar de 3 metros con cañería de cobre de 1/4" y 3/8", ménsulas epoxi de 42 cm y protector de tensión enchufable de 20A.'
      ],
      faqs: [
        {
          q: '¿Alcanza un aire de 2250 frigorías para una habitación de 3x3?',
          a: 'Sí, sobra capacidad. Una pieza de 3x3m demanda alrededor de 1.125 a 1.650 frigorías reales, por lo que un Split de 2.250 frigorías (2.600W) trabajará muy descansado y con bajo nivel de ruido.'
        },
        {
          q: '¿Cuándo conviene poner un aire de 3000 frigorías en un cuarto de 3x3?',
          a: 'Prácticamente en ningún caso residencial normal; el equipo de 2.250 frigorías ya ofrece un 40% de margen de reserva incluso con techo expuesto al sol y ventana al oeste.'
        },
        {
          q: '¿Qué caños lleva un aire de 2250 frigorías para un dormitorio de 3x3?',
          a: 'Lleva caño de cobre de 1/4 pulgada para la línea de líquido y de 3/8 pulgada para la línea de gas, junto con cable tipo taller de 5x1.5 mm².'
        }
      ]
    }
  },

  // 4. Habitación 4x4
  {
    slug: 'aire-acondicionado-habitacion-4x4',
    path: '/presupuesto/aire-acondicionado-habitacion-4x4',
    category: 'presupuesto',
    badge: 'Preset Dormitorio 4x4m (16 m²)',
    title: '¿Cuántas Frigorías Necesita una Habitación de 4x4 (16 m²)? Presupuesto 2026 | KalkulAR',
    metaDescription: 'Calculá qué aire acondicionado necesita un dormitorio de 4x4 metros (16 m²). Frigorías recomendadas (2250 vs 3000 fg), mano de obra de instalación y equipos en oferta.',
    h1: 'Aire Acondicionado para Habitación de 4x4: Frigorías y Costo de Instalación (2026)',
    subtitle: 'Dimensionamiento térmico para dormitorios matrimoniales de 16 m² (40 m³), comparativa 2250 vs 3000 fg y costos de obra.',
    calculatorPreset: {
      jobCategory: 'ac',
      acRoomType: 'ac_bedroom_medium',
      length: 4.0,
      width: 4.0,
      height: 2.5,
      acRoofType: 'slab_exposed',
      acSunExposure: 'direct_north_west',
      acInternalLoads: [],
      acPipeMeters: 3,
      acInstallConditions: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Una habitación de 4x4 metros (16 m² y 40 m³ de volumen) requiere 2.000 frigorías en condiciones de sombra y sube a 2.600 frigorías si tiene losa expuesta al sol o ventana al Norte/Oeste. Por eso, la recomendación segura en Argentina es instalar un Split de 3.000 frigorías (3.400W - 3.550W). Su instalación cuesta unos $155.000 ARS de mano de obra más $94.000 ARS del kit.',
      metrics: {
        totalM2: '16 m² (40 m³)',
        wallM2: '2.000 a 2.600 fg reales',
        ceilingM2: 'Split 3.000 Frigorías (3500W)',
        paintLiters: 'Caños de cobre 1/4" y 3/8"',
        ceilingLiters: 'Ménsulas de 42 cm',
        laborFairPrice: '$155.000 ARS',
        laborRange: '$125.000 a $195.000 ARS',
        materialsCost: '~$94.000 ARS (Kit 3m)',
        estimatedDays: '3 horas de trabajo'
      },
      editorialParagraphs: [
        'El dormitorio de 4x4 metros (16 m²) es el caso donde más dudas surgen entre comprar un equipo de 2.250 frigorías o saltar al de 3.000 frigorías. Si el cuarto está en un piso intermedio sin sol directo de tarde, su carga térmica es de 2.000 frigorías y un equipo de 2.250 fg alcanza.',
        'Sin embargo, apenas la habitación tiene techo de losa expuesto al sol (+15%), techo de machimbre/chapa (+25%) o un ventanal orientado al Norte u Oeste (+15%), la carga térmica real trepa a 2.600 frigorías. En ese escenario, un aire de 2.250 fg queda chico en las tardes de enero, siendo indispensable elegir un Split de 3.000 frigorías (3.400W - 3.550W).',
        'La ventaja económica es que el Split de 3.000 frigorías paga exactamente la misma tarifa de mano de obra de instalación ($155.000 ARS promedio) y utiliza el mismo kit de caños de 1/4" y 3/8" que el de 2.250 frigorías.'
      ],
      faqs: [
        {
          q: '¿Para una habitación de 4x4 conviene 2250 o 3000 frigorías?',
          a: 'Si la habitación recibe sol por la tarde o está en un último piso o casa con techo expuesto, elegí sin dudar 3.000 frigorías (3.500W). Además, la diferencia de precio del equipo es de apenas un 10% y el costo de instalación es idéntico.'
        },
        {
          q: '¿Cuánto cuesta instalar un Split de 3000 frigorías en un dormitorio 4x4?',
          a: 'El costo de mano de obra de un técnico matriculado CACAAV promedia los $155.000 ARS, mientras que el kit completo de instalación de 3 metros con ménsulas ronda los $94.000 ARS en Mercado Libre.'
        },
        {
          q: '¿Cuánto consume por hora un aire Inverter de 3000 frigorías en un dormitorio?',
          a: 'En régimen de mantenimiento nocturno a 24°C, un Split Inverter de 3.000 frigorías consume entre 0.35 y 0.55 kWh por hora, ahorrando hasta un 40% de electricidad frente a un equipo tradicional On/Off.'
        }
      ]
    }
  },

  // 5. Living Comedor
  {
    slug: 'aire-acondicionado-living-comedor',
    path: '/presupuesto/aire-acondicionado-living-comedor',
    category: 'presupuesto',
    badge: 'Preset Living Comedor 5x4m (20 m²)',
    title: 'Aire Acondicionado para Living Comedor (5x4m): Frigorías y Presupuesto 2026 | KalkulAR',
    metaDescription: '¿Qué aire acondicionado comprar para un living comedor de 20 a 30 m²? Cálculo de 3000 vs 4500 frigorías, costo de instalación matriculada y kits de 1/4 y 1/2 en Mercado Libre.',
    h1: 'Presupuesto de Aire Acondicionado para Living Comedor en Argentina (2026)',
    subtitle: 'Cálculo térmico para salas de estar con ventanales, circulación de personas y presupuesto de instalación para 4.500 frigorías.',
    calculatorPreset: {
      jobCategory: 'ac',
      acRoomType: 'ac_living_medium',
      length: 5.0,
      width: 4.0,
      height: 2.6,
      acRoofType: 'slab_covered',
      acSunExposure: 'direct_north_west',
      acInternalLoads: ['extraPeople'],
      acPipeMeters: 3,
      acInstallConditions: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Un living comedor estándar de 5x4 metros con 2.60m de altura (20 m² de planta y 52 m³) y ventanal requiere entre 3.000 y 3.650 frigorías reales considerando reuniones familiares y TV. El equipo recomendado para climatizar sin esfuerzo es un Split de 4.500 frigorías (5.100W - 5.300W). La mano de obra de instalación promedia $190.000 ARS y el kit de caños de 1/4" y 1/2" ronda los $115.000 ARS.',
      metrics: {
        totalM2: '20 m² (52 m³)',
        wallM2: '3.000 a 3.650 fg reales',
        ceilingM2: 'Split 4.500 Frigorías (5200W)',
        paintLiters: 'Caños de cobre 1/4" y 1/2"',
        ceilingLiters: 'Ménsulas reforzadas 52 cm',
        laborFairPrice: '$190.000 ARS',
        laborRange: '$155.000 a $240.000 ARS',
        materialsCost: '~$115.000 ARS (Kit 1/4 y 1/2)',
        estimatedDays: '3.5 a 4 horas de trabajo'
      },
      editorialParagraphs: [
        'Los livings comedores presentan tres desafíos térmicos que no existen en un dormitorio: mayor altura de cielorraso (2.60m a 2.80m), grandes paños vidriados de puertas balcón y apertura constante hacia pasillos o cocinas.',
        'Un ambiente de 5x4 metros (52 m³) parte de 2.600 frigorías base, pero al sumar la incidencia solar del ventanal (+15%) y la presencia de 4 a 5 personas durante almuerzos o cenas (+450 fg), la demanda real asciende a 3.440 frigorías. Instalar un equipo de 3.000 frigorías lo obligaría a trabajar forzado al máximo; por ello, el estándar profesional para livings de 20 a 30 m² es el Split de 4.500 frigorías (5.200W).',
        'A nivel técnico, los equipos de 4.500 frigorías requieren cañería de cobre de 1/4" y 1/2" y ménsulas reforzadas de 52 cm debido al mayor tamaño y peso del motocompresor exterior.'
      ],
      faqs: [
        {
          q: '¿Cuántas frigorías necesito para un living comedor de 5x4 metros (20 m²)?',
          a: 'Si el living es cerrado, sombreado y en piso intermedio, un equipo de 3.000 frigorías llega justo. Pero si tiene puerta balcón, sol de tarde, techo expuesto o se integra con pasillos, necesitás un Split de 4.500 frigorías (5.200W).'
        },
        {
          q: '¿Por qué la instalación de un aire de 4500 frigorías es más cara que uno de 3000?',
          a: 'Porque lleva caños de cobre de mayor diámetro (1/2 pulgada en lugar de 3/8), ménsulas más largas de 52 cm y una unidad exterior más pesada de manipular. La mano de obra promedia los $190.000 ARS.'
        },
        {
          q: '¿Dónde conviene ubicar la unidad interior en el living comedor?',
          a: 'Conviene instalarla orientando el flujo de aire a lo largo del salón hacia la mesa o los sillones, evitando colocarla justo encima de televisores o frente a un pasillo abierto por donde se escape el aire frío.'
        }
      ]
    }
  },

  // 6. Monoambiente / Quincho
  {
    slug: 'aire-acondicionado-monoambiente-quincho',
    path: '/presupuesto/aire-acondicionado-monoambiente-quincho',
    category: 'presupuesto',
    badge: 'Preset Quincho / Monoambiente 30 m²',
    title: 'Aire Acondicionado para Quincho o Monoambiente (30 m²): Frigorías y Costos 2026 | KalkulAR',
    metaDescription: 'Calculá las frigorías para un monoambiente con cocina integrada o quincho de 30 m² (6x5m). Comparativa 4500 vs 6000 frigorías, costo de instalación y equipos Split.',
    h1: 'Aire Acondicionado para Monoambiente o Quincho (30 m²): Cálculo y Presupuesto (2026)',
    subtitle: 'Cálculo térmico con carga de cocina/parrilla integrada, techo expuesto y presupuesto de instalación para alta capacidad.',
    calculatorPreset: {
      jobCategory: 'ac',
      acRoomType: 'ac_quincho_mono',
      length: 6.0,
      width: 5.0,
      height: 2.6,
      acRoofType: 'slab_exposed',
      acSunExposure: 'direct_north_west',
      acInternalLoads: ['integratedKitchen', 'extraPeople'],
      acPipeMeters: 3,
      acInstallConditions: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Un monoambiente amplio o quincho cerrado de 6x5 metros (30 m² y 78 m³) requiere 3.900 frigorías base, llegando a 5.400 - 5.800 frigorías cuando se suma techo expuesto o de chapa, ventanales y calor de cocina o reuniones. El equipo recomendado es un Split de 5.500 a 6.000 frigorías (6.300W - 6.800W) (o 4.500 fg si es piso intermedio sin sol). La instalación cuesta unos $225.000 ARS de mano de obra.',
      metrics: {
        totalM2: '30 m² (78 m³)',
        wallM2: '4.250 a 5.800 fg reales',
        ceilingM2: 'Split 5.500 / 6.000 fg (6500W)',
        paintLiters: 'Caños de cobre 1/4" y 1/2" (o 5/8")',
        ceilingLiters: 'Ménsulas reforzadas 52 cm',
        laborFairPrice: '$225.000 ARS',
        laborRange: '$185.000 a $280.000 ARS',
        materialsCost: '~$115.000 ARS (Kit 3m)',
        estimatedDays: '4 a 5 horas de trabajo'
      },
      editorialParagraphs: [
        'Climatizar un quincho vidriado o un monoambiente grande de 30 m² exige contemplar las cargas térmicas internas: una heladera funcionando permanentemente, anafes u hornos y grupos de 6 a 10 personas en reuniones aportan hasta 800 frigorías adicionales que un cálculo simple por m² ignora.',
        'Además, la mayoría de los quinchos en Argentina poseen cubierta de losa sin piso superior (+15%) o techo de chapa y madera (+25%) más amplios ventanales hacia el jardín o patio (+15%). Esto eleva la demanda de un salón de 6x5m desde 3.900 fg base hasta unas 5.500 frigorías reales en las tardes de verano.',
        'Para esta escala se recomienda un Split de 5.500 a 6.000 frigorías (6.300W a 6.800W), cuya instalación requiere línea eléctrica dedicada con llave térmica de 20A/25A y ménsulas de 52 cm.'
      ],
      faqs: [
        {
          q: '¿Cuánto influye la cocina integrada o la parrilla en el cálculo de frigorías?',
          a: 'El motor de la heladera, la cocción y el calor corporal de varios invitados suman entre 500 y 800 frigorías extras. Si estás al límite entre 4.500 y 6.000 frigorías, siempre elegí el equipo de 6.000 frigorías.'
        },
        {
          q: '¿Qué pasa si el quincho tiene techo de chapa o madera a la vista?',
          a: 'Los techos de chapa o machimbre transmiten mucho más calor por radiación solar que una losa con un piso arriba, sumando un 25% extra al requerimiento de frigorías.'
        },
        {
          q: '¿Qué instalación eléctrica requiere un aire de 4500 o 6000 frigorías?',
          a: 'Debe conectarse a un circuito independiente desde el tablero con cable de 2.5 mm² a 4 mm², llave térmica bipolar propia de 20A o 25A y protector de alta/baja tensión de 20A.'
        }
      ]
    }
  },

  // 7. Guía: ¿Cuántas frigorías necesito por m2?
  {
    slug: 'cuantas-frigorias-necesito-por-m2',
    path: '/guia/cuantas-frigorias-necesito-por-m2',
    category: 'guia',
    badge: 'Guía Técnica y Tabla 2026',
    title: '¿Cuántas Frigorías Necesito por m² en Argentina? Tabla y Fórmula Oficial (2026) | KalkulAR',
    metaDescription: 'Tabla completa de frigorías por m² y m³ para Argentina (10 m², 15 m², 20 m², 30 m² y 40 m²). Aprendé la regla de las 50 frigorías por m³ y calculá tu equipo exacto.',
    h1: '¿Cuántas Frigorías Necesito por Metro Cuadrado (m²) en Argentina? Guía y Tabla 2026',
    subtitle: 'Tabla de referencia rápida para 10, 15, 20, 30 y 40 m² y fórmula de balance térmico por volumen (50 fg/m³).',
    calculatorPreset: {
      jobCategory: 'ac',
      acRoomType: 'ac_bedroom_medium',
      length: 4.0,
      width: 3.5,
      height: 2.5,
      acRoofType: 'slab_covered',
      acSunExposure: 'low_south',
      acInternalLoads: [],
      acPipeMeters: 3,
      acInstallConditions: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'En Argentina se calculan 50 frigorías por metro cúbico (m³), lo que equivale a 125 frigorías por metro cuadrado (m²) para un techo estándar de 2.50 metros de altura en condiciones normales, o 150 a 165 frigorías por m² en ambientes calurosos con sol de tarde o techo expuesto. Así: hasta 15 m² lleva 2.250 fg; de 15 a 22 m² lleva 3.000 fg; de 23 a 34 m² lleva 4.500 fg; y de 35 a 48 m² lleva 6.000 fg.',
      metrics: {
        totalM2: '125 a 165 fg / m²',
        wallM2: '10 a 15 m² -> 2.250 fg',
        ceilingM2: '15 a 22 m² -> 3.000 fg',
        paintLiters: '23 a 34 m² -> 4.500 fg',
        ceilingLiters: '35 a 48 m² -> 6.000 fg',
        laborFairPrice: '50 fg / m³ (Base CACAAV)',
        laborRange: '40 a 65 fg / m³ según clima',
        materialsCost: 'Ajuste +15% a +25% por sol/techo',
        estimatedDays: 'Cálculo instantáneo'
      },
      editorialParagraphs: [
        'Aunque popularmente se suele hablar de "100 frigorías por metro cuadrado", esa regla antigua quedó obsoleta para los veranos actuales en Argentina, donde las olas de calor superan los 36°C a 40°C en gran parte del país. Hoy el estándar técnico de CACAAV establece 50 frigorías por metro cúbico (m³), que multiplicadas por 2.50 metros de altura arrojan un piso real de 125 frigorías por m².',
        'Cuando el ambiente se ubica en el último piso de un edificio (losa expuesta al sol), tiene techo de chapa/machimbre o cuenta con ventanas orientadas al Norte o al Oeste, el requerimiento real sube a 150 - 165 frigorías por m².',
        'Por eso es fundamental ingresar el Largo, Ancho y Alto de tu ambiente en la calculadora superior y tildar el tipo de techo antes de elegir qué aire acondicionado comprar.'
      ],
      faqs: [
        {
          q: '¿Cuántas frigorías se calculan por metro cuadrado en Argentina?',
          a: 'Para un techo normal de 2.50 metros de alto se calculan 125 frigorías por m² en ambientes sombreados o pisos intermedios, y 150 a 165 frigorías por m² en ambientes con sol directo de tarde o losa expuesta.'
        },
        {
          q: '¿Qué aire necesito para 10, 15, 20, 30 y 40 metros cuadrados?',
          a: 'Para 10 a 14 m²: Split de 2.250 frigorías (2600W). Para 15 a 22 m²: Split de 3.000 frigorías (3500W). Para 23 a 34 m²: Split de 4.500 frigorías (5200W). Para 35 a 48 m²: Split de 6.000 frigorías (6500W).'
        },
        {
          q: '¿Por qué los ingenieros calculan por metro cúbico (m³) y no por metro cuadrado (m²)?',
          a: 'Porque el aire acondicionado climatiza todo el volumen de aire del cuarto. Un PH antiguo con techos de 3.60 metros de altura tiene un 44% más de volumen de aire que un departamento moderno de 2.50 metros con los mismos m² de piso.'
        }
      ]
    }
  },

  // 8. Guía: Equivalencia de Frigorías a Watts
  {
    slug: 'equivalencia-frigorias-a-watts-aire-acondicionado',
    path: '/guia/equivalencia-frigorias-a-watts-aire-acondicionado',
    category: 'guia',
    badge: 'Conversor Watts ↔ Frigorías',
    title: 'Tabla de Equivalencia Frigorías a Watts en Aires Acondicionados (Argentina 2026) | KalkulAR',
    metaDescription: 'Convertí Watts a Frigorías al instante: ¿Cuántas frigorías son 2600W, 3400W, 3500W, 5200W y 6500W? Tabla oficial del mercado argentino y calculadora térmica.',
    h1: 'Equivalencia de Frigorías a Watts en Aires Acondicionados (Tabla Argentina 2026)',
    subtitle: 'Cómo convertir la potencia en Watts (W) de las etiquetas de Mercado Libre a Frigorías reales sin confundirte.',
    calculatorPreset: {
      jobCategory: 'ac',
      acRoomType: 'ac_bedroom_medium',
      length: 4.0,
      width: 3.5,
      height: 2.5,
      acRoofType: 'slab_covered',
      acSunExposure: 'low_south',
      acInternalLoads: [],
      acPipeMeters: 3,
      acInstallConditions: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Para convertir Watts térmicos a Frigorías se multiplica por 0.86 (o se divide por 1.163). En el mercado argentino las equivalencias comerciales exactas son: 2.600W a 2.750W = 2.250 a 2.300 Frigorías; 3.400W a 3.550W = 3.000 Frigorías; 5.100W a 5.300W = 4.500 Frigorías; y 6.300W a 6.800W = 5.500 a 6.000 Frigorías.',
      metrics: {
        totalM2: '1 Frigoría = 1.163 Watts',
        wallM2: '2.650 W = 2.250 Frigorías',
        ceilingM2: '3.500 W = 3.000 Frigorías',
        paintLiters: '5.200 W = 4.500 Frigorías',
        ceilingLiters: '6.500 W = 5.600 / 6.000 fg',
        laborFairPrice: 'Factor: Watts × 0.86',
        laborRange: 'Consumo eléctrico ≈ Watts / 3.3',
        materialsCost: 'Norma IRAM 62406',
        estimatedDays: 'Conversión exacta'
      },
      editorialParagraphs: [
        'Por disposición de la normativa IRAM de etiquetado energético en Argentina, todas las cajas y publicaciones de aires acondicionados (BGH, Surrey, Philco, Samsung, LG) expresan su capacidad de refrigeración en Watts (W), mientras que los usuarios e instaladores siguen utilizando las Frigorías.',
        'Esto suele generar confusiones al comprar online: muchos compradores ven un equipo publicado como "3500W" y creen que es de 3.500 frigorías, cuando en realidad 3.500 Watts térmicos multiplicados por 0.86 equivalen a 3.010 frigorías.',
        'También es fundamental no confundir los Watts de capacidad frigorífica con los Watts de potencia eléctrica consumida de la red: un aire de 3.500W frigoríficos (3.000 fg) con eficiencia Clase A consume apenas entre 950W y 1.080W eléctricos.'
      ],
      faqs: [
        {
          q: '¿Cómo pasar de Watts a Frigorías en un aire acondicionado?',
          a: 'Multiplicá los Watts de capacidad de refrigeración que figuran en la ficha técnica por 0.86 (o dividilos por 1.163). Ejemplo: 3500W x 0.86 = 3.010 frigorías.'
        },
        {
          q: '¿Cuántas frigorías son 2600W, 3400W y 5200W?',
          a: 'Un equipo de 2.600W a 2.700W equivale a 2.250 - 2.300 frigorías; uno de 3.400W a 3.550W equivale a 3.000 frigorías; y uno de 5.100W a 5.300W equivale a 4.500 frigorías.'
        },
        {
          q: '¿Los Watts de capacidad de refrigeración son lo mismo que los Watts de consumo eléctrico?',
          a: 'No. La capacidad de refrigeración (ej. 3.500W) mide cuánto calor extrae del ambiente, mientras que el consumo eléctrico de la red es más de 3 veces menor (unos 980W en equipos Clase A o menos aún en modelos Inverter).'
        }
      ]
    }
  },

  // 9. Precio de Kit de Instalación y Materiales
  {
    slug: 'kit-instalacion-aire-acondicionado-materiales',
    path: '/precios/kit-instalacion-aire-acondicionado-materiales',
    category: 'precios',
    badge: 'Guía de Materiales y Kits 2026',
    title: 'Materiales para Instalar un Aire Acondicionado Split y Precios de Kits (2026) | KalkulAR',
    metaDescription: 'Lista exacta de materiales para instalar un aire acondicionado Split de 2250, 3000, 4500 y 6000 frigorías. Diámetros de caño de cobre, ménsulas y precios en Mercado Libre.',
    h1: 'Lista de Materiales y Precio del Kit para Instalar un Aire Acondicionado Split (2026)',
    subtitle: 'Qué lleva el kit reglamentario de 3 metros según las frigorías de tu equipo y cuánto ahorrás comprándolo en Mercado Libre.',
    calculatorPreset: {
      jobCategory: 'ac',
      acRoomType: 'ac_bedroom_medium',
      length: 4.0,
      width: 3.5,
      height: 2.5,
      acRoofType: 'slab_covered',
      acSunExposure: 'low_south',
      acInternalLoads: [],
      acPipeMeters: 3,
      acInstallConditions: [],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'Para instalar un aire acondicionado Split en Argentina necesitás un Kit de Instalación de 3 metros compuesto por: 2 rollos de 3m de caño de cobre (1/4" y 3/8" para 2250/3000 fg, o 1/4" y 1/2" para 4500/6000 fg), tubos aislantes negros, par de ménsulas epoxi (42cm o 52cm) con tirafondos y tacos de goma, 3.5m de cable TPR 5x1.5mm, 3m de manguera cristal y cinta PVC. En Mercado Libre el kit completo cuesta entre $82.000 y $135.000 ARS.',
      metrics: {
        totalM2: '3 metros (Mínimo Garantía)',
        wallM2: '2250/3000 fg -> 1/4" y 3/8"',
        ceilingM2: '4500/6000 fg -> 1/4" y 1/2"',
        paintLiters: 'Kit 1/4 y 3/8: ~$94.000 ARS',
        ceilingLiters: 'Kit 1/4 y 1/2: ~$115.000 ARS',
        laborFairPrice: '$155.000 ARS (Mano de obra)',
        laborRange: 'Ahorro 30% comprando Kit ML',
        materialsCost: '$94.000 a $115.000 ARS',
        estimatedDays: 'Envío gratis a domicilio'
      },
      editorialParagraphs: [
        'Las terminales fabricantes de aires acondicionados en Argentina ya no incluyen los caños de cobre ni las ménsulas dentro de la caja del equipo. Para conservar la garantía oficial de 1 a 3 años, todos los manuales exigen instalar un mínimo de 3 metros lineales de cañería de cobre sin costura.',
        'El detalle clave antes de pedir el kit en Mercado Libre es verificar las frigorías del equipo para elegir el diámetro correcto del caño grueso (succión/baja): los equipos de 2.250 a 3.000 frigorías utilizan caños de 1/4" y 3/8" con ménsulas de 42 cm, mientras que los de 4.500 a 6.000 frigorías llevan caños de 1/4" y 1/2" con ménsulas reforzadas de 52 cm.',
        'Además del kit mecánico, es altamente recomendable sumar al carrito un protector de alta y baja tensión digital de 20 Amperes ($35.000 ARS aprox.) para resguardar la placa electrónica ante cortes de luz en verano.'
      ],
      faqs: [
        {
          q: '¿Qué trae un kit de instalación completo para aire acondicionado Split?',
          a: 'Trae 3 metros de caño de cobre de alta (1/4") y 3 metros de baja (3/8" o 1/2"), 6 metros de aislante elastomérico negro, 1 juego de ménsulas pintadas epoxi con tirafondos, tarugos y patas de goma antivibratorias, 3.5 metros de cable tipo taller 5x1.5mm, 3 metros de manguera cristal de desagüe y 1 o 2 rollos de cinta PVC blanca.'
        },
        {
          q: '¿Qué medida de caño de cobre lleva un aire de 3000 y de 4500 frigorías?',
          a: 'Los aires de 2.250 y 3.000 frigorías llevan caños de 1/4" y 3/8". Los aires de 4.500 y 6.000 frigorías llevan caños de 1/4" y 1/2" (algunos modelos de 6.000 fg requieren 1/4" y 5/8", verificable en la etiqueta lateral del equipo).'
        },
        {
          q: '¿Por qué exigen mínimo 3 metros de caño aunque la unidad exterior esté detrás de la misma pared?',
          a: 'Porque una cañería menor a 2.5 o 3 metros transmite la vibración y el zumbido del compresor directamente a la unidad interior, puede provocar retornos de refrigerante líquido y anula la garantía oficial de fábrica.'
        }
      ]
    }
  },

  // 10. Precio de Desinstalación y Traslado por Mudanza
  {
    slug: 'desinstalacion-y-traslado-aire-acondicionado',
    path: '/precios/desinstalacion-y-traslado-aire-acondicionado',
    category: 'precios',
    badge: 'Guía Mudanza y Reinstalación 2026',
    title: 'Precio de Desinstalación y Traslado de Aire Acondicionado en Argentina (2026) | KalkulAR',
    metaDescription: '¿Cuánto cuesta desinstalar un aire acondicionado Split por mudanza y volver a instalarlo en 2026? Tarifas oficiales CACAAV, recupero de gas y materiales nuevos.',
    h1: 'Precio de Desinstalación y Reinstalación de Aire Acondicionado en Argentina (2026)',
    subtitle: 'Costos de desmonte con recuperación de gas refrigerante (pump down), reinstalación en nuevo domicilio y recambio de cañerías.',
    calculatorPreset: {
      jobCategory: 'ac',
      acRoomType: 'ac_bedroom_medium',
      length: 4.0,
      width: 3.5,
      height: 2.5,
      acRoofType: 'slab_covered',
      acSunExposure: 'low_south',
      acInternalLoads: [],
      acPipeMeters: 3,
      acInstallConditions: ['removeOldUnit'],
      materialsBuyer: 'client'
    },
    seoContent: {
      quickAnswer: 'En Argentina (temporada 2026/2027), desinstalar un aire acondicionado Split de hasta 4.500 frigorías cuesta entre $75.000 y $105.000 ARS (promedio justo: $85.000 ARS), incluyendo el envasado del gas refrigerante dentro del compresor. Si contratás el combo completo de desinstalación + reinstalación en el nuevo domicilio, la mano de obra total ronda los $240.000 ARS más el kit de caños nuevos.',
      metrics: {
        totalM2: 'Desmonte + Pump Down',
        wallM2: 'Desinstalación: $85.000 ARS',
        ceilingM2: 'Reinstalación: $155.000 ARS',
        paintLiters: 'Combo Mudanza: ~$240.000 ARS',
        ceilingLiters: 'Recupero 100% del gas R410A',
        laborFairPrice: '$240.000 ARS (Desmonte + Colocación)',
        laborRange: '$200.000 a $290.000 ARS',
        materialsCost: '~$94.000 ARS (Si renueva caños)',
        estimatedDays: '1 jornada (Ambos domicilios)'
      },
      editorialParagraphs: [
        'Al mudarse de departamento o casa, jamás se deben aflojar las tuercas de un aire acondicionado sin antes realizar la maniobra técnica de "pump down" (recuperación de refrigerante). Si se desconectan los caños directamente, se libera todo el gas R410A a la atmósfera, entra humedad al circuito y luego habrá que pagar más de $90.000 ARS adicionales por una carga completa de gas.',
        'Un técnico matriculado enciende el equipo en modo Frío, cierra la válvula de alta presión con llave Allen, espera unos 45 a 60 segundos hasta que el manómetro marque vacío (envasando todo el gas dentro de la unidad exterior), cierra la válvula de baja y apaga el equipo en el acto. Así el gas original se conserva intacto para el nuevo hogar.',
        'Al reinstalar el equipo en la nueva vivienda, los profesionales aconsejan utilizar un kit nuevo de caños de cobre y aislantes si los caños anteriores quedaron endurecidos o estrangulados durante el desmonte.'
      ],
      faqs: [
        {
          q: '¿Cuánto cobra un técnico por desinstalar un aire acondicionado Split en 2026?',
          a: 'El servicio de desinstalación profesional con recupero de gas refrigerante, retiro de unidad interior, exterior y ménsulas tiene un valor promedio de $85.000 ARS (entre $75.000 y $105.000 ARS según dificultad de acceso).'
        },
        {
          q: '¿Se pierde el gas refrigerante al desinstalar el aire acondicionado?',
          a: 'No. Si la desinstalación la realiza un técnico calificado cerrando las válvulas de servicio con manómetro (pump down), se recupera casi el 100% del gas dentro del motocompresor y no necesitás pagar una carga de gas nueva al reinstalarlo.'
        },
        {
          q: '¿Se pueden reutilizar los caños de cobre viejos al mudar el aire acondicionado?',
          a: 'El cobre sufre endurecimiento mecánico con el tiempo y los ciclos térmicos. Intentar enderezar y volver a doblar un caño viejo suele provocar estrangulamientos o microperforaciones, por lo que casi siempre conviene instalar un kit de caños nuevos.'
        }
      ]
    }
  }
];

// Incorporar las 10 páginas de Climatización a la lista principal PSEO_PAGES
PSEO_PAGES.push(...AC_PSEO_PAGES);

/**
 * Busca una página de SEO programático a partir de la ruta actual
 */
export function getPseoPageByPath(pathname) {
  if (!pathname || pathname === '/' || pathname === '') return null;
  // Normalizar ruta quitando barras finales
  const cleanPath = pathname.replace(/\/+$/, '');
  return PSEO_PAGES.find(p => p.path === cleanPath || p.path === `${cleanPath}/`) || null;
}

/**
 * Retorna todas las rutas para sitemap y prerendering
 */
export function getAllPseoPaths() {
  return PSEO_PAGES.map(p => p.path);
}
