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
