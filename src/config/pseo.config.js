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
