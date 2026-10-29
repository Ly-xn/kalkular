/**
 * Configuración de Precios de Mano de Obra y Rendimientos de Pintura (2025/2026)
 * Todos los valores monetarios están en Pesos Argentinos (ARS) de base,
 * pero pueden ser adaptados o ajustados dinámicamente.
 */

export const PRICING_CONFIG = {
  // Moneda y formato
  currency: 'ARS',
  currencySymbol: '$',
  usdRateEstimate: 1250, // Cotización referencial para visualización opcional en USD

  // Costo de Mano de Obra por m² (2 manos de látex terminadas)
  laborRates: {
    wallStandard: {
      min: 3500,
      recommended: 4500,
      max: 6000,
      description: 'Pintura látex estándar en paredes (2 manos terminadas, lijado suave)'
    },
    ceilingStandard: {
      min: 4200,
      recommended: 5300,
      max: 7000,
      description: 'Pintura látex en cielorrasos (mayor dificultad postural y antihongos)'
    }
  },

  // Recargos / Adicionales por estado de la pared y dificultades
  conditionSurcharges: {
    minorCracks: {
      id: 'minorCracks',
      label: 'Grietas pequeñas / Agujeros de tacos',
      description: 'Apertura de fisuras, aplicación de enduido puntual y lijado fino.',
      ratePerM2: 1500,
      requiresEnduido: true,
      requiresLija: true,
    },
    fullEnduido: {
      id: 'fullEnduido',
      label: 'Enduido completo (Planchado total de pared)',
      description: 'Alisado total con llana en 2 manos para emparejar revoques rústicos.',
      ratePerM2: 5500,
      requiresEnduidoLarge: true,
      requiresFijador: true,
      requiresLijaExtra: true,
    },
    moldMoisture: {
      id: 'moldMoisture',
      label: 'Manchas de humedad o moho',
      description: 'Lavado desinfectante fungicida + fijador al aguarrás bloqueador.',
      ratePerM2: 2000,
      requiresFungicida: true,
      requiresFijadorAguarras: true,
    },
    peelingPaint: {
      id: 'peelingPaint',
      label: 'Pintura descascarada / ampollas',
      description: 'Raspado manual intenso con espátula, remoción de capas sueltas.',
      ratePerM2: 2500,
      requiresEspatula: true,
      requiresFijador: true,
    },
    highCeiling: {
      id: 'highCeiling',
      label: 'Techos altos (Más de 2.80m de altura)',
      description: 'Trabajo en altura con escaleras extensibles o andamio reglamentario.',
      percentSurcharge: 0.20, // +20% sobre la mano de obra total
    },
    furnishedRoom: {
      id: 'furnishedRoom',
      label: 'Ambiente amoblado (Mover y tapar muebles)',
      description: 'Corrimiento de muebles al centro y cobertura hermética con nylon.',
      percentSurcharge: 0.15, // +15% sobre la mano de obra total
      requiresPlasticoExtra: true,
    }
  },

  // Rendimiento técnico de los insumos
  yields: {
    // 1 litro rinde 11 m² por mano -> 5.5 m² para 2 manos terminadas
    latexWallM2PerLiter2Coats: 5.5,
    latexCeilingM2PerLiter2Coats: 4.8,
    // 1 litro de fijador concentrado rinde ~35 m²
    fijadorM2PerLiter: 35,
    // 1 kg de enduido rinde 1 m² para planchado total o cubre unos 20 m² de retoques leves
    enduidoRetoquePerRoomKg: 2,
    enduidoPlanchadoKgPerM2: 0.8,
    // 1 pliego de lija cada 15 m²
    lijaM2PerSheet: 15,
    // 1 rollo de cinta de 50m cada 35 m² de pared
    cintaM2PerRoll: 35,
  },

  // Precios referenciales estimados de materiales para desglose orientativo
  materialEstimatedPrices: {
    latex20L: 95000,
    latex10L: 52000,
    latex4L: 26000,
    latex1L: 8500,
    cielorraso4L: 28000,
    fijador4L: 18000,
    fijador1L: 6500,
    enduido20kg: 38000,
    enduido4kg: 12000,
    enduido1kg: 4500,
    kitPintorCompleto: 24000,
    cintaPintorRoll: 3800,
    lijaHoja: 900,
    plasticoCubrePiso: 5500,
  },

  // Tamaños predefinidos de habitaciones comunes (Largo x Ancho x Alto estándar 2.5m)
  presetRooms: [
    {
      id: 'room_small',
      name: 'Habitación Chica',
      dimensions: '3m x 3m (2.5m alto)',
      length: 3.0,
      width: 3.0,
      height: 2.5,
      openingsDeductionM2: 3.0, // 1 puerta + 1 ventana pequeña
      defaultCeiling: true,
      description: 'Ideal para dormitorio individual, estudio o lavadero.',
      badge: 'Más común'
    },
    {
      id: 'room_medium',
      name: 'Habitación Mediana',
      dimensions: '4m x 3.5m (2.5m alto)',
      length: 4.0,
      width: 3.5,
      height: 2.5,
      openingsDeductionM2: 3.5, // 1 puerta + 1 ventana mediana
      defaultCeiling: true,
      description: 'Dormitorio matrimonial o living comedor estándar.',
      badge: 'Popular'
    },
    {
      id: 'room_large',
      name: 'Habitación Grande / Living',
      dimensions: '5m x 4m (2.6m alto)',
      length: 5.0,
      width: 4.0,
      height: 2.6,
      openingsDeductionM2: 5.0, // Ventanal grande + puerta doble
      defaultCeiling: true,
      description: 'Living amplio, quincho cerrado o salón.',
      badge: 'Espacioso'
    },
    {
      id: 'bathroom',
      name: 'Baño Estándar',
      dimensions: '2m x 2m (solo paredes altas y techo)',
      length: 2.0,
      width: 2.0,
      height: 2.4,
      openingsDeductionM2: 8.0, // Azulejos hasta 1.8m + puerta
      defaultCeiling: true,
      description: 'Pintura antihongo para friso superior y cielorraso.',
      badge: 'Antihongo'
    },
    {
      id: 'kitchen',
      name: 'Cocina Estándar',
      dimensions: '3.5m x 2.5m (zonas no azulejadas)',
      length: 3.5,
      width: 2.5,
      height: 2.5,
      openingsDeductionM2: 9.0, // Descuento de alacenas y azulejos
      defaultCeiling: true,
      description: 'Zonas libres de azulejos y cielorraso lavable.',
      badge: 'Lavable'
    },
    {
      id: 'custom',
      name: 'Medidas Personalizadas / Metros Libres',
      dimensions: 'Ingresá tus m² exactos o medidas',
      length: 0,
      width: 0,
      height: 2.5,
      openingsDeductionM2: 0,
      defaultCeiling: false,
      description: 'Calculá cualquier superficie puntual o departamento entero.',
      badge: 'Libre'
    }
  ]
};

/**
 * Configuración Especializada para Rejas, Portones y Herrería (2025/2026)
 * Validada según normativas de cómputo y relevamiento en el mercado argentino.
 */
export const REJAS_PRICING_CONFIG = {
  // Modalidades de cobro
  modalities: {
    // 1. Por metro lineal
    linearMeter: {
      id: 'linearMeter',
      label: 'Por Metro Lineal (ml)',
      unit: 'ml',
      heightLimit: 1.5,
      rates: {
        maintenance: {
          min: 6000,
          recommended: 7500,
          max: 9000,
          label: 'Repintado / Mantenimiento leve',
          description: 'Lijado superficial y 2 manos de esmalte sintético.'
        },
        standard: {
          min: 8500,
          recommended: 10500,
          max: 12500,
          label: 'Estándar (óxido puntual y lijado)',
          description: 'Cepillado de óxido, convertidor en partes afectadas y 2 manos de esmalte 3 en 1.'
        },
        heavyRust: {
          min: 12000,
          recommended: 14000,
          max: 16500,
          label: 'Óxido severo / Decapado',
          description: 'Rasqueteado profundo, tratamiento desoxidante y 3 manos completas.'
        }
      }
    },

    // 2. Por superficie "Lleno por Vacío"
    fullVoidM2: {
      id: 'fullVoidM2',
      label: 'Lleno por Vacío (m² de paño)',
      unit: 'm2',
      rates: {
        sheetMetal: {
          min: 6500,
          recommended: 8000,
          max: 10000,
          label: 'Chapa ciega / Portón liso'
        },
        standardBars: {
          min: 8500,
          recommended: 11000,
          max: 14000,
          label: 'Reja de barrotes estándar'
        },
        heavyMeshOrArtistic: {
          min: 12000,
          recommended: 15000,
          max: 18500,
          label: 'Malla tupida o herrería artística'
        }
      }
    },

    // 3. Módulos / Aberturas Estandarizadas
    fixedUnits: [
      {
        id: 'standard_window',
        name: 'Ventana Estándar con Reja',
        dimensions: '1.50m x 1.20m',
        recommendedPrice: 38000,
        minPrice: 28000,
        maxPrice: 50000,
        areaM2: 1.8,
        linearMetersEquiv: 3.5,
        badge: 'Más común',
        description: 'Ventana de dormitorio o living estándar (2 hojas).'
      },
      {
        id: 'door_grille',
        name: 'Puerta Reja de Entrada',
        dimensions: '0.90m x 2.00m',
        recommendedPrice: 48000,
        minPrice: 35000,
        maxPrice: 65000,
        areaM2: 1.8,
        linearMetersEquiv: 4.5,
        badge: 'Seguridad',
        description: 'Puerta de reja exterior con marco y cerradura.'
      },
      {
        id: 'garage_gate',
        name: 'Portón Garaje / Vehicular',
        dimensions: '3.00m x 2.10m',
        recommendedPrice: 95000,
        minPrice: 70000,
        maxPrice: 140000,
        areaM2: 6.3,
        linearMetersEquiv: 10.0,
        badge: 'Vehicular',
        description: 'Portón corredizo, levadizo o 2 hojas de abrir.'
      },
      {
        id: 'balcony_window',
        name: 'Ventanal Balcón / Baranda',
        dimensions: '2.00m x 2.00m',
        recommendedPrice: 65000,
        minPrice: 48000,
        maxPrice: 85000,
        areaM2: 4.0,
        linearMetersEquiv: 6.0,
        badge: 'Balcón',
        description: 'Puerta ventana balcón o paño de baranda corrida.'
      },
      {
        id: 'perimeter_fence',
        name: 'Reja Perimetral / Frente',
        dimensions: 'Metros lineales a medida (hasta 1.50m)',
        recommendedPrice: 10500, // valor base por metro lineal
        minPrice: 8500,
        maxPrice: 12500,
        isLinear: true,
        defaultMeters: 10,
        badge: 'Por metro',
        description: 'Reja de frente sobre murete o cerco perimetral.'
      },
      {
        id: 'custom_grille',
        name: 'Medidas Libres / Portón a Medida',
        dimensions: 'Ingresá Ancho x Alto o m² exactos',
        recommendedPrice: 11000, // por m2 vano completo
        minPrice: 8500,
        maxPrice: 14000,
        isCustom: true,
        badge: 'A medida',
        description: 'Cálculo por superficie "lleno por vacío" para cualquier diseño.'
      }
    ]
  },

  // Recargos acumulables por dificultad
  difficultySurcharges: {
    // 1. Grado de Oxidación y Deterioro
    rustState: {
      light: {
        id: 'light',
        label: 'Superficial / Sano',
        badge: 'Leve (0%)',
        description: 'Pintura anterior firme o tono gastado. Solo lija fina de anclaje y limpieza.',
        percent: 0,
        tagColor: 'emerald'
      },
      medium: {
        id: 'medium',
        label: 'Óxido medio / Ampollas',
        badge: 'Medio (+25%)',
        description: 'Burbujas de pintura y óxido en uniones. Requiere cepillado manual y convertidor localizado.',
        percent: 0.25,
        tagColor: 'amber'
      },
      heavy: {
        id: 'heavy',
        label: 'Óxido severo / Escamado',
        badge: 'Severo (+50%)',
        description: 'Cascarones desprendidos y corrosión profunda. Exige amoladora, disco flap y desoxidante.',
        percent: 0.50,
        tagColor: 'rose'
      }
    },

    // 2. Complejidad del Diseño de Herrería
    designComplexity: {
      straight: {
        id: 'straight',
        label: 'Barrotes rectos simples',
        badge: 'Estándar (0%)',
        description: 'Caños tubulares o cuadrados lisos sin adornos.',
        percent: 0
      },
      twistedOrMesh: {
        id: 'twistedOrMesh',
        label: 'Torsionados o metal desplegado',
        badge: 'Recovecos (+20%)',
        description: 'Hierros retorcidos o malla romboidal con esquinas.',
        percent: 0.20
      },
      artisticColonial: {
        id: 'artisticColonial',
        label: 'Herrería Artística Colonial',
        badge: 'Complejo (+40%)',
        description: 'Volutas, flores de fundición, remaches y detalles finos.',
        percent: 0.40
      }
    },

    // 3. Accesibilidad y Entorno
    environment: {
      groundFloor: {
        id: 'groundFloor',
        label: 'Planta baja cómoda',
        badge: 'Normal (0%)',
        description: 'Trabajo accesible a pie firme sin escaleras altas.',
        percent: 0
      },
      heightOrBalcony: {
        id: 'heightOrBalcony',
        label: 'En altura / Balcón / Andamio',
        badge: 'Altura (+30%)',
        description: 'Requiere escaleras extensibles o trabajo en balcón sobre el vacío.',
        percent: 0.30
      },
      tightGlassAccess: {
        id: 'tightGlassAccess',
        label: 'Muy pegada al vidrio (< 8cm)',
        badge: 'Precisión (+25%)',
        description: 'Poco espacio de maniobra contra cristales; exige encintado perimetral.',
        percent: 0.25
      }
    }
  },

  // Rendimientos técnicos para cotizar materiales
  yields: {
    enamelLinearMetersPerLiter2Coats: 5.0, // 1 litro rinde 5 metros lineales a 2 manos
    enamelFullVoidM2PerLiter2Coats: 4.5,     // 1 litro rinde 4.5 m2 paño completo a 2 manos
    thinnerLitersPerEnamelLiter: 0.25,      // 0.25 litros de aguarrás por litro de esmalte
    sandpaperSheetsPerLinearMeter: 0.35,    // pliegos de tela esmeril por metro lineal
    sandpaperSheetsPerM2: 0.5,
    desoxidanteLitersPerM2: 0.08
  },

  // Precios referenciales estimados de materiales de herrería
  materialEstimatedPrices: {
    enamel3in1_4L: 78000,
    enamel3in1_1L: 22000,
    convertidor1L: 18000,
    desoxidante1L: 12000,
    aguarras1L: 8500,
    aguarras4L: 22000,
    telaEsmerilHoja: 1800,
    cepilloAlambre: 4500,
    pincelCerdaMetal: 6500,
    cintaPintor24mm: 3800
  }
};

/**
 * Configuración Especializada para Climatización, Cálculo de Frigorías
 * y Mano de Obra de Instalación de Aires Acondicionados Split (Temporada 2026/2027)
 * Relevamiento validado según lineamientos técnicos CACAAV y Mercado Libre Argentina.
 */
export const AC_PRICING_CONFIG = {
  currency: 'ARS',
  currencySymbol: '$',
  usdRateEstimate: 1250,

  // Parámetros físicos de Balance Térmico (Normativa Argentina)
  thermalConstants: {
    baseFrigoriasPerM3: 50, // Estándar nacional (equiv. a 125 fg/m2 con H=2.5m)
    wattsPerFrigoria: 1.163, // 1 fg = 1.163 W | 1 W = 0.86 fg
    standardIncludedPipeMeters: 3,

    // Multiplicadores por tipo de techo / cubierta superior
    roofMultipliers: {
      slab_covered: {
        id: 'slab_covered',
        label: 'Losa con otro piso arriba',
        badge: 'Aislado (0%)',
        description: 'Departamento en piso intermedio o planta baja con piso superior construido.',
        percent: 0.00,
        tagColor: 'emerald'
      },
      slab_exposed: {
        id: 'slab_exposed',
        label: 'Último piso / Losa expuesta al sol',
        badge: 'Terraza (+15%)',
        description: 'Techo de hormigón o terraza que recibe radiación solar directa todo el día.',
        percent: 0.15,
        tagColor: 'amber'
      },
      sheet_wood_roof: {
        id: 'sheet_wood_roof',
        label: 'Techo de chapa o machimbre',
        badge: 'Alta carga (+25%)',
        description: 'Cubierta liviana de chapa, tejas o madera con baja inercia térmica.',
        percent: 0.25,
        tagColor: 'rose'
      }
    },

    // Multiplicadores por orientación solar y aberturas
    sunMultipliers: {
      low_south: {
        id: 'low_south',
        label: 'Sombra / Orientación Sur o Este',
        badge: 'Normal (0%)',
        description: 'Sin sol fuerte por la tarde y con ventanas de tamaño estándar.',
        percent: 0.00
      },
      direct_north_west: {
        id: 'direct_north_west',
        label: 'Sol directo de tarde (Norte / Oeste) o Ventanal',
        badge: 'Sol fuerte (+15%)',
        description: 'Recibe sol intenso entre las 13 y 19 hs o posee amplios ventanales / balcón.',
        percent: 0.15
      }
    },

    // Cargas térmicas internas adicionales (Suma en Frigorías)
    internalLoads: {
      extraPeople: {
        id: 'extraPeople',
        label: 'Alta ocupación (+3 personas habituales)',
        description: 'Suma +450 frigorías (150 fg por persona adicional sobre la base de 2 ocupantes).',
        addedFrigorias: 450,
        perPersonFrigorias: 150
      },
      integratedKitchen: {
        id: 'integratedKitchen',
        label: 'Cocina integrada / Heladera u horno en el ambiente',
        description: 'Compensa el calor continuo del motor de la heladera y vapores de cocción (+350 fg).',
        addedFrigorias: 350
      },
      heavyElectronics: {
        id: 'heavyElectronics',
        label: 'Oficina / PC Gamer / Iluminación comercial',
        description: 'Compensa fuentes de computadoras, monitores múltiples o vidrieras (+250 fg).',
        addedFrigorias: 250
      }
    }
  },

  // Escalones Comerciales Estándar en Argentina y Tarifas de Mano de Obra Básica (CACAAV 2026/2027)
  commercialCapacities: [
    {
      id: 'split_2250',
      maxCalculatedFrigorias: 2450,
      commercialFrigorias: 2250,
      commercialFrigoriasLabel: '2.250 a 2.300 Frigorías',
      commercialWattsLabel: '2.600W - 2.750W',
      nominalWatts: 2650,
      pipeDiameters: '1/4" y 3/8"',
      bracketSize: '42 cm',
      BreakerAmps: '16A (Toma 10A/20A)',
      extraPipeMeterRate: 35000,
      laborRates: {
        min: 125000,
        recommended: 155000,
        max: 195000
      },
      kitProductKey: 'kitInstalacion14_38',
      splitProductKey: 'acSplit2250',
      estimatedEquipmentCost: 860000,
      estimatedKitCost: 94000
    },
    {
      id: 'split_3000',
      maxCalculatedFrigorias: 3350,
      commercialFrigorias: 3000,
      commercialFrigoriasLabel: '3.000 Frigorías',
      commercialWattsLabel: '3.400W - 3.550W',
      nominalWatts: 3500,
      pipeDiameters: '1/4" y 3/8"',
      bracketSize: '42 cm',
      BreakerAmps: '16A (Toma 20A)',
      extraPipeMeterRate: 35000,
      laborRates: {
        min: 125000,
        recommended: 155000,
        max: 195000
      },
      kitProductKey: 'kitInstalacion14_38',
      splitProductKey: 'acSplit3000',
      estimatedEquipmentCost: 960000,
      estimatedKitCost: 94000
    },
    {
      id: 'split_4500',
      maxCalculatedFrigorias: 4850,
      commercialFrigorias: 4500,
      commercialFrigoriasLabel: '4.500 Frigorías',
      commercialWattsLabel: '5.100W - 5.300W',
      nominalWatts: 5200,
      pipeDiameters: '1/4" y 1/2"',
      bracketSize: '52 cm reforzada',
      BreakerAmps: '20A (Toma 20A)',
      extraPipeMeterRate: 44000,
      laborRates: {
        min: 155000,
        recommended: 190000,
        max: 240000
      },
      kitProductKey: 'kitInstalacion14_12',
      splitProductKey: 'acSplit4500',
      estimatedEquipmentCost: 1450000,
      estimatedKitCost: 115000
    },
    {
      id: 'split_6000',
      maxCalculatedFrigorias: 99999,
      commercialFrigorias: 6000,
      commercialFrigoriasLabel: '5.500 a 6.000 Frigorías',
      commercialWattsLabel: '6.300W - 7.000W',
      nominalWatts: 6500,
      pipeDiameters: '1/4" y 1/2" (o 5/8")',
      bracketSize: '52 cm reforzada',
      BreakerAmps: '25A (Línea dedicada)',
      extraPipeMeterRate: 44000,
      laborRates: {
        min: 185000,
        recommended: 225000,
        max: 280000
      },
      kitProductKey: 'kitInstalacion14_12',
      splitProductKey: 'acSplit6000',
      estimatedEquipmentCost: 1820000,
      estimatedKitCost: 115000
    }
  ],

  // Adicionales de Dificultad en Obra (Paso 2 del Wizard)
  installationSurcharges: {
    heightWork: {
      id: 'heightWork',
      label: 'Trabajo en altura / Al vacío (2do piso o superior sin balcón)',
      description: 'Colocación de unidad exterior sobre fachada al vacío con arnés de seguridad, silleta o escalera extensible.',
      fixedPrice: 65000
    },
    concreteWallPass: {
      id: 'concreteWallPass',
      label: 'Pase de viga o pared de hormigón / Ladrillo macizo 30cm',
      description: 'Perforación de alta dureza con mecha copa diamantada en muro portante de 30cm o tabique de hormigón.',
      fixedPrice: 38000
    },
    ductingOrPreinstall: {
      id: 'ductingOrPreinstall',
      label: 'Cablecanal estético PVC o Conexión en pre-instalación embutida',
      description: 'Provisión y montaje de conducto cablecanal estético o nitrógeno/limpieza para conectar sobre caja de pre-instalación.',
      fixedPrice: 42000
    },
    removeOldUnit: {
      id: 'removeOldUnit',
      label: 'Desinstalación de equipo viejo (con recupero de gas)',
      description: 'Envasado ecológico del refrigerante en el compresor (pump down), desmonte del equipo anterior y retiro de ménsulas.',
      fixedPrice: 85000
    },
    dedicatedElectricLine: {
      id: 'dedicatedElectricLine',
      label: 'Toma eléctrico dedicado de 20A con llave térmica',
      description: 'Mano de obra por tendido de línea eléctrica dedicada de hasta 5m, colocación de caja exterior, térmica bipolar y toma 20A.',
      fixedPrice: 58000,
      requiresElectricKit: true
    }
  },

  // Precios referenciales de accesorios eléctricos y kits para el desglose
  materialEstimatedPrices: {
    kitInstalacion14_38: 94000,
    kitInstalacion14_12: 115000,
    protectorTension20A: 35000,
    kitElectricoToma20A: 21000
  },

  // Los 6 Presets de Ambientes para el Paso 1 (StepRooms.jsx)
  presetRooms: [
    {
      id: 'ac_bedroom_small',
      name: 'Dormitorio Chico',
      dimensions: '3m x 3m (9 m² · 2.5m alto)',
      length: 3.0,
      width: 3.0,
      height: 2.5,
      defaultRoof: 'slab_covered',
      defaultSun: 'low_south',
      description: 'Dormitorio individual, cuarto infantil o escritorio tranquilo.',
      badge: '2250 fg ideal'
    },
    {
      id: 'ac_bedroom_medium',
      name: 'Dormitorio Estándar / Estudio',
      dimensions: '4m x 3.5m (14 m² · 2.5m alto)',
      length: 4.0,
      width: 3.5,
      height: 2.5,
      defaultRoof: 'slab_covered',
      defaultSun: 'low_south',
      description: 'Dormitorio matrimonial estándar o consultorio profesional.',
      badge: 'Más común'
    },
    {
      id: 'ac_living_medium',
      name: 'Living Comedor',
      dimensions: '5m x 4m (20 m² · 2.6m alto)',
      length: 5.0,
      width: 4.0,
      height: 2.6,
      defaultRoof: 'slab_covered',
      defaultSun: 'direct_north_west',
      description: 'Sala de estar y comedor familiar con puerta balcón o ventanal.',
      badge: 'Popular'
    },
    {
      id: 'ac_quincho_mono',
      name: 'Monoambiente / Quincho',
      dimensions: '6m x 5m (30 m² · 2.6m alto)',
      length: 6.0,
      width: 5.0,
      height: 2.6,
      defaultRoof: 'slab_exposed',
      defaultSun: 'direct_north_west',
      defaultKitchen: true,
      description: 'Espacio integrado con cocina, heladera, parrilla o reuniones.',
      badge: 'Espacioso'
    },
    {
      id: 'ac_commercial',
      name: 'Local Comercial / Oficina',
      dimensions: '7m x 5m (35 m² · 3.0m alto)',
      length: 7.0,
      width: 5.0,
      height: 3.0,
      defaultRoof: 'slab_exposed',
      defaultSun: 'direct_north_west',
      defaultElectronics: true,
      description: 'Local con vidriera, oficina grupal o salón de atención al público.',
      badge: 'Comercial'
    },
    {
      id: 'ac_custom',
      name: 'Medidas Personalizadas',
      dimensions: 'Ingresá tus m² o Largo x Ancho x Alto',
      length: 4.0,
      width: 4.0,
      height: 2.5,
      defaultRoof: 'slab_covered',
      defaultSun: 'low_south',
      description: 'Calculá las frigorías y el costo de instalación para cualquier medida.',
      badge: 'A medida'
    }
  ]
};


