import { AFFILIATES_CONFIG } from '../config/affiliates.config.js';
import { PRICING_CONFIG, REJAS_PRICING_CONFIG } from '../config/pricing.config.js';

/**
 * Motor de cálculo de presupuestos de pintura y materiales
 */
export function calculateQuote(inputs) {
  if (inputs && inputs.jobCategory === 'rejas') {
    return calculateRejasQuote(inputs);
  }

  const {
    roomType = 'room_medium',
    useManualM2 = false,
    manualM2 = 35,
    length = 4,
    width = 3.5,
    height = 2.5,
    openingsDeductionM2 = 3.5,
    paintCeiling = true,
    selectedConditions = [], // array of condition ids
    materialsBuyer = 'client' // 'client' | 'painter'
  } = inputs || {};

  // 1. Cálculo de Metros Cuadrados
  let wallM2 = 0;
  let ceilingM2 = 0;

  if (useManualM2) {
    const validManual = Math.max(1, parseFloat(manualM2) || 0);
    wallM2 = validManual;
    ceilingM2 = paintCeiling ? Math.round(validManual * 0.3) : 0;
  } else {
    const l = Math.max(1, parseFloat(length) || 0);
    const w = Math.max(1, parseFloat(width) || 0);
    const h = Math.max(1.8, parseFloat(height) || 2.5);
    const deduction = Math.max(0, parseFloat(openingsDeductionM2) || 0);

    const perimeter = 2 * (l + w);
    const grossWalls = perimeter * h;
    wallM2 = Math.max(4, Math.round((grossWalls - deduction) * 10) / 10);
    ceilingM2 = paintCeiling ? Math.round((l * w) * 10) / 10 : 0;
  }

  const totalM2 = Math.round((wallM2 + ceilingM2) * 10) / 10;

  // 2. Cálculo de Mano de Obra
  const { laborRates, conditionSurcharges, yields, materialEstimatedPrices } = PRICING_CONFIG;

  const baseWallLaborRec = wallM2 * laborRates.wallStandard.recommended;
  const baseCeilingLaborRec = ceilingM2 * laborRates.ceilingStandard.recommended;

  // Recargos por dificultades seleccionadas
  let conditionFixedSum = 0;
  let percentSurchargeTotal = 0;
  const activeConditionsDetails = [];

  selectedConditions.forEach(condId => {
    const condConfig = conditionSurcharges[condId];
    if (condConfig) {
      activeConditionsDetails.push(condConfig);
      if (condConfig.ratePerM2) {
        conditionFixedSum += condConfig.ratePerM2 * wallM2;
      }
      if (condConfig.percentSurcharge) {
        percentSurchargeTotal += condConfig.percentSurcharge;
      }
    }
  });

  const subtotalLaborRec = (baseWallLaborRec + baseCeilingLaborRec + conditionFixedSum);
  const recommendedLabor = Math.round(subtotalLaborRec * (1 + percentSurchargeTotal));
  const minLabor = Math.round(recommendedLabor * 0.85);
  const maxLabor = Math.round(recommendedLabor * 1.22);

  // Estimación de tiempo (Días hábiles de 1 a 2 pintores)
  const baseDays = Math.ceil(totalM2 / 25);
  const conditionDaysExtra = (selectedConditions.includes('fullEnduido') ? 1.5 : 0) +
                             (selectedConditions.includes('moldMoisture') ? 0.5 : 0) +
                             (selectedConditions.includes('peelingPaint') ? 0.5 : 0);
  const estimatedDays = Math.max(1, Math.round(baseDays + conditionDaysExtra));

  // 3. Cálculo Inteligente de Materiales
  // Litros para 2 manos en paredes
  const rawLatexWallLiters = wallM2 / yields.latexWallM2PerLiter2Coats;
  const latexWallLiters = Math.ceil(rawLatexWallLiters);

  // Optimización de envases comerciales (20L, 10L, 4L, 1L)
  const wallPaintContainers = optimizeContainers(latexWallLiters);

  // Cielorraso
  const rawLatexCeilingLiters = ceilingM2 > 0 ? ceilingM2 / yields.latexCeilingM2PerLiter2Coats : 0;
  const latexCeilingLiters = Math.ceil(rawLatexCeilingLiters);
  const ceilingPaintContainers = optimizeCeilingContainers(latexCeilingLiters);

  // Fijador Sellador al Agua
  const needsFijador = selectedConditions.some(c => 
    ['minorCracks', 'fullEnduido', 'peelingPaint'].includes(c)
  ) || wallM2 > 40;
  const fijadorLiters = needsFijador ? (wallM2 > 50 ? 4 : 1) : 0;

  // Enduido Plástico
  let enduidoKg = 0;
  if (selectedConditions.includes('fullEnduido')) {
    enduidoKg = Math.max(10, Math.ceil(wallM2 * yields.enduidoPlanchadoKgPerM2));
  } else if (selectedConditions.includes('minorCracks')) {
    enduidoKg = wallM2 > 30 ? 4 : 1;
  }

  // Lijas de papel
  const lijaSheets = Math.max(2, Math.ceil(wallM2 / yields.lijaM2PerSheet) + (selectedConditions.includes('fullEnduido') ? 4 : 0));

  // Cinta de enmascarar
  const cintaRolls = Math.max(1, Math.ceil(wallM2 / yields.cintaM2PerRoll));

  // Plástico protector cubre piso
  const plasticoRolls = Math.max(1, Math.ceil((totalM2 * 0.4) / 20));

  // 4. Estimación de Costo Total de Materiales
  let materialsCostEstimate = 0;
  materialsCostEstimate += wallPaintContainers.estimatedCost;
  materialsCostEstimate += ceilingPaintContainers.estimatedCost;
  if (fijadorLiters === 4) materialsCostEstimate += materialEstimatedPrices.fijador4L;
  else if (fijadorLiters === 1) materialsCostEstimate += materialEstimatedPrices.fijador1L;

  if (enduidoKg >= 20) materialsCostEstimate += materialEstimatedPrices.enduido20kg;
  else if (enduidoKg >= 4) materialsCostEstimate += materialEstimatedPrices.enduido4kg;
  else if (enduidoKg >= 1) materialsCostEstimate += materialEstimatedPrices.enduido1kg;

  materialsCostEstimate += materialEstimatedPrices.kitPintorCompleto;
  materialsCostEstimate += cintaRolls * materialEstimatedPrices.cintaPintorRoll;
  materialsCostEstimate += lijaSheets * materialEstimatedPrices.lijaHoja;
  materialsCostEstimate += plasticoRolls * materialEstimatedPrices.plasticoCubrePiso;

  // 5. Preparar Catálogo de Materiales con Enlaces de Afiliados a Mercado Libre
  const recommendedMaterialsList = [];

  // Látex Paredes
  if (wallPaintContainers.buckets20L > 0) {
    const prod = AFFILIATES_CONFIG.products.latex20L;
    recommendedMaterialsList.push({
      ...prod,
      quantityLabel: `${wallPaintContainers.buckets20L} Lata${wallPaintContainers.buckets20L > 1 ? 's' : ''} de 20 Litros`,
      calculatedQty: wallPaintContainers.buckets20L,
      affiliateUrl: prod.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl(`pintura latex interior 20 litros lavable mate`)
    });
  }
  if (wallPaintContainers.buckets10L > 0) {
    const prod = AFFILIATES_CONFIG.products.latex10L;
    recommendedMaterialsList.push({
      ...prod,
      quantityLabel: `${wallPaintContainers.buckets10L} Lata${wallPaintContainers.buckets10L > 1 ? 's' : ''} de 10 Litros`,
      calculatedQty: wallPaintContainers.buckets10L,
      affiliateUrl: prod.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl(`pintura latex interior 10 litros`)
    });
  }
  if (wallPaintContainers.buckets4L > 0) {
    const prod = AFFILIATES_CONFIG.products.latex4L;
    recommendedMaterialsList.push({
      ...prod,
      quantityLabel: `${wallPaintContainers.buckets4L} Lata${wallPaintContainers.buckets4L > 1 ? 's' : ''} de 4 Litros`,
      calculatedQty: wallPaintContainers.buckets4L,
      affiliateUrl: prod.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl(`pintura latex interior 4 litros`)
    });
  }

  // Látex Cielorraso
  if (ceilingM2 > 0 && latexCeilingLiters > 0) {
    const prod = AFFILIATES_CONFIG.products.latexCeiling4L;
    recommendedMaterialsList.push({
      ...prod,
      quantityLabel: `${ceilingPaintContainers.description} (${latexCeilingLiters}L calculados)`,
      calculatedQty: ceilingPaintContainers.totalLiters,
      affiliateUrl: prod.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl(`pintura cielorraso antihongo ${ceilingPaintContainers.suggestedQuery}`)
    });
  }

  // Fijador Sellador
  if (needsFijador) {
    const prod = AFFILIATES_CONFIG.products.fijadorSellador;
    recommendedMaterialsList.push({
      ...prod,
      quantityLabel: fijadorLiters === 4 ? '1 Bidón de 4 Litros (Concentrado)' : '1 Botella de 1 Litro',
      calculatedQty: fijadorLiters,
      affiliateUrl: prod.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl(`fijador sellador al agua ${fijadorLiters} litros`)
    });
  }

  // Enduido
  if (enduidoKg > 0) {
    const prod = AFFILIATES_CONFIG.products.enduidoPlastico;
    recommendedMaterialsList.push({
      ...prod,
      quantityLabel: enduidoKg >= 20 ? '1 Balde de 20 kg (Planchado completo)' : (enduidoKg >= 4 ? '1 Pote de 4 kg' : '1 Pote de 1 kg'),
      calculatedQty: enduidoKg,
      affiliateUrl: prod.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl(`enduido plastico interior ${enduidoKg >= 20 ? '20kg' : '4kg'}`)
    });
  }

  // Kit Pintor
  const kitProd = AFFILIATES_CONFIG.products.kitPintor;
  recommendedMaterialsList.push({
    ...kitProd,
    quantityLabel: '1 Kit Completo (Rodillo 22cm + Bandeja + Pincel cerda + Cinta)',
    calculatedQty: 1,
    affiliateUrl: kitProd.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('kit pintor rodillo bandeja pincel cinta')
  });

  // Cinta de Enmascarar
  const cintaProd = AFFILIATES_CONFIG.products.cintaEnmascarar;
  recommendedMaterialsList.push({
    ...cintaProd,
    quantityLabel: `${cintaRolls} Rollo${cintaRolls > 1 ? 's' : ''} de 24mm x 50m`,
    calculatedQty: cintaRolls,
    affiliateUrl: cintaProd.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('cinta de enmascarar de papel pintor 24mm')
  });

  // Lijas
  const lijaProd = AFFILIATES_CONFIG.products.lijasPack;
  recommendedMaterialsList.push({
    ...lijaProd,
    quantityLabel: `${lijaSheets} Pliegos surtidos (Granos 120 y 180)`,
    calculatedQty: lijaSheets,
    affiliateUrl: lijaProd.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('lijas para pared grano 120 180')
  });

  // Plástico Protector
  const plasticoProd = AFFILIATES_CONFIG.products.plasticoProtector;
  recommendedMaterialsList.push({
    ...plasticoProd,
    quantityLabel: `${plasticoRolls} Paquete${plasticoRolls > 1 ? 's' : ''} de 4x5m (Cubre pisos y muebles)`,
    calculatedQty: plasticoRolls,
    affiliateUrl: plasticoProd.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('plastico cubre piso pintor 4x5')
  });

  return {
    surfaces: {
      wallM2,
      ceilingM2,
      totalM2,
      openingsDeductionM2: useManualM2 ? 0 : openingsDeductionM2,
    },
    labor: {
      min: minLabor,
      recommended: recommendedLabor,
      max: maxLabor,
      baseWallLabor: baseWallLaborRec,
      baseCeilingLabor: baseCeilingLaborRec,
      conditionSurchargesTotal: Math.round(conditionFixedSum + (subtotalLaborRec * percentSurchargeTotal)),
      estimatedDays,
      workforceAdvice: estimatedDays > 3 ? '2 Pintores recomendados' : '1 Pintor profesional',
    },
    materials: {
      estimatedCost: materialsCostEstimate,
      latexWallLiters,
      latexCeilingLiters,
      wallPaintContainers,
      ceilingPaintContainers,
      fijadorLiters,
      enduidoKg,
      lijaSheets,
      cintaRolls,
      plasticoRolls,
      itemsList: recommendedMaterialsList,
    },
    combinedTotal: {
      min: minLabor + (materialsBuyer === 'client' ? 0 : materialsCostEstimate),
      recommended: recommendedLabor + materialsCostEstimate,
      max: maxLabor + Math.round(materialsCostEstimate * 1.15),
    },
    meta: {
      materialsBuyer,
      activeConditionsDetails,
      dateCalculated: new Date().toLocaleDateString('es-AR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      roomLabel: PRICING_CONFIG.presetRooms.find(r => r.id === roomType)?.name || 'Ambiente Personalizado'
    }
  };
}

/**
 * Optimiza la compra de latas de látex para pared
 */
function optimizeContainers(liters) {
  if (liters <= 0) return { buckets20L: 0, buckets10L: 0, buckets4L: 0, description: 'Sin pintura requerida', estimatedCost: 0 };

  let buckets20L = 0;
  let buckets10L = 0;
  let buckets4L = 0;

  if (liters >= 16) {
    buckets20L = Math.floor(liters / 20);
    const rem = liters % 20;
    if (rem > 14) {
      buckets20L += 1;
    } else if (rem > 6) {
      buckets10L += 1;
    } else if (rem > 0) {
      buckets4L += 1;
    }
    if (buckets20L === 0 && buckets10L === 0 && buckets4L === 0) {
      buckets20L = 1;
    }
  } else if (liters >= 8) {
    buckets10L = 1;
    const rem = liters - 10;
    if (rem > 2) buckets4L = 1;
  } else {
    buckets4L = Math.max(1, Math.ceil(liters / 4));
  }

  const parts = [];
  if (buckets20L > 0) parts.push(`${buckets20L} Lata${buckets20L > 1 ? 's' : ''} de 20L`);
  if (buckets10L > 0) parts.push(`${buckets10L} Lata${buckets10L > 1 ? 's' : ''} de 10L`);
  if (buckets4L > 0) parts.push(`${buckets4L} Lata${buckets4L > 1 ? 's' : ''} de 4L`);

  const { materialEstimatedPrices } = PRICING_CONFIG;
  const estimatedCost = (buckets20L * materialEstimatedPrices.latex20L) +
                        (buckets10L * materialEstimatedPrices.latex10L) +
                        (buckets4L * materialEstimatedPrices.latex4L);

  return {
    buckets20L,
    buckets10L,
    buckets4L,
    totalLiters: (buckets20L * 20) + (buckets10L * 10) + (buckets4L * 4),
    description: parts.join(' + ') || `${buckets4L} Lata de 4L`,
    estimatedCost
  };
}

/**
 * Optimiza envases de pintura para cielorraso
 */
function optimizeCeilingContainers(liters) {
  if (liters <= 0) return { totalLiters: 0, description: 'No incluye cielorraso', suggestedQuery: '', estimatedCost: 0 };
  const { materialEstimatedPrices } = PRICING_CONFIG;

  if (liters <= 4) {
    return {
      totalLiters: 4,
      description: '1 Lata de 4 Litros',
      suggestedQuery: '4 litros',
      estimatedCost: materialEstimatedPrices.cielorraso4L
    };
  } else if (liters <= 10) {
    return {
      totalLiters: 10,
      description: '1 Lata de 10 Litros',
      suggestedQuery: '10 litros',
      estimatedCost: Math.round(materialEstimatedPrices.cielorraso4L * 2.2)
    };
  } else {
    const cans20 = Math.ceil(liters / 20);
    return {
      totalLiters: cans20 * 20,
      description: `${cans20} Lata${cans20 > 1 ? 's' : ''} de 20 Litros`,
      suggestedQuery: '20 litros',
      estimatedCost: cans20 * 85000
    };
  }
}

/**
 * Motor de cálculo especializado para Rejas, Portones y Herrería
 */
function calculateRejasQuote(inputs) {
  const {
    rejaType = 'standard_window',
    rejaQuantity = 1,
    rejaLength = 10,
    rejaHeight = 1.2,
    rejaWidth = 2.0,
    useManualRejaM2 = false,
    manualRejaM2 = 4,
    rejaRust = 'light',
    rejaDesign = 'straight',
    rejaEnvironments = [],
    materialsBuyer = 'client'
  } = inputs || {};

  const { modalities, difficultySurcharges, yields, materialEstimatedPrices } = REJAS_PRICING_CONFIG;

  let baseLabor = 0;
  let linearMeters = 0;
  let areaM2 = 0;
  let roomLabel = 'Herrería';

  if (rejaType === 'perimeter_fence') {
    // Modalidad A: Metro Lineal
    linearMeters = Math.max(1, parseFloat(rejaLength) || 10);
    const h = Math.max(0.4, parseFloat(rejaHeight) || 1.2);
    // Factor de altura (>1.5m)
    const heightFactor = h > 1.5 ? Math.min(1.5, 1 + (h - 1.5) * 0.4) : 1.0;
    const rate = modalities.linearMeter.rates.maintenance.recommended;
    baseLabor = Math.round(linearMeters * rate * heightFactor);
    areaM2 = Math.round(linearMeters * h * 10) / 10;
    roomLabel = `Reja Perimetral (${linearMeters} ml, ${h}m alto)`;
  } else if (rejaType === 'custom_grille') {
    // Modalidad B: Lleno por Vacío m2
    if (useManualRejaM2) {
      areaM2 = Math.max(0.5, parseFloat(manualRejaM2) || 4);
      linearMeters = Math.round(areaM2 * 1.5 * 10) / 10;
      roomLabel = `Herrería a Medida (${areaM2} m² vano completo)`;
    } else {
      const w = Math.max(0.5, parseFloat(rejaWidth) || 2.0);
      const h = Math.max(0.5, parseFloat(rejaHeight) || 2.0);
      areaM2 = Math.round(w * h * 10) / 10;
      linearMeters = Math.round(areaM2 * 1.5 * 10) / 10;
      roomLabel = `Herrería / Portón (${w}m x ${h}m = ${areaM2} m²)`;
    }
    const rate = modalities.fullVoidM2.rates.standardBars.recommended;
    baseLabor = Math.round(areaM2 * rate);
  } else {
    // Modalidad C: Unidad Fija Estandarizada
    const preset = modalities.fixedUnits.find(u => u.id === rejaType) || modalities.fixedUnits[0];
    const qty = Math.max(1, parseInt(rejaQuantity) || 1);
    baseLabor = preset.recommendedPrice * qty;
    areaM2 = Math.round((preset.areaM2 || 1.8) * qty * 10) / 10;
    linearMeters = Math.round((preset.linearMetersEquiv || 3.5) * qty * 10) / 10;
    roomLabel = `${preset.name} (${qty} ${qty === 1 ? 'unidad' : 'unidades'})`;
  }

  // Recargos acumulados por dificultad
  let percentSurchargeTotal = 0;
  const activeConditionsDetails = [];

  // 1. Estado del óxido
  const rustCfg = difficultySurcharges.rustState[rejaRust];
  if (rustCfg) {
    if (rustCfg.percent > 0) {
      percentSurchargeTotal += rustCfg.percent;
    }
    activeConditionsDetails.push({
      ...rustCfg,
      categoryName: 'Estado del Óxido'
    });
  }

  // 2. Complejidad del diseño
  const designCfg = difficultySurcharges.designComplexity[rejaDesign];
  if (designCfg) {
    if (designCfg.percent > 0) {
      percentSurchargeTotal += designCfg.percent;
    }
    activeConditionsDetails.push({
      ...designCfg,
      categoryName: 'Diseño de Herrería'
    });
  }

  // 3. Entorno y accesibilidad
  const envList = Array.isArray(rejaEnvironments) ? rejaEnvironments : [rejaEnvironments].filter(Boolean);
  envList.forEach(envId => {
    const envCfg = difficultySurcharges.environment[envId];
    if (envCfg) {
      if (envCfg.percent > 0) {
        percentSurchargeTotal += envCfg.percent;
      }
      activeConditionsDetails.push({
        ...envCfg,
        categoryName: 'Accesibilidad'
      });
    }
  });

  const conditionSurchargesTotal = Math.round(baseLabor * percentSurchargeTotal);
  const recommendedLabor = Math.round(baseLabor + conditionSurchargesTotal);
  const minLabor = Math.round(recommendedLabor * 0.82);
  const maxLabor = Math.round(recommendedLabor * 1.25);

  // Estimación de tiempo (Días hábiles)
  // 5 a 6 metros lineales o 3 m2 por jornada de oficial pintor
  const baseDays = Math.ceil(linearMeters / 6);
  const rustDaysExtra = rejaRust === 'heavy' ? 1.5 : (rejaRust === 'medium' ? 0.5 : 0);
  const estimatedDays = Math.max(1, Math.round(baseDays + rustDaysExtra));
  const workforceAdvice = estimatedDays >= 3 ? '1 a 2 Oficiales especializados' : '1 Oficial pintor especialista';

  // Rendimientos y cálculo de materiales
  const rawEnamelLiters = linearMeters / yields.enamelLinearMetersPerLiter2Coats;
  const enamelLiters = Math.max(1, Math.ceil(rawEnamelLiters));

  // Envases de Esmalte 3 en 1
  let cans4L = 0;
  let cans1L = 0;
  if (enamelLiters >= 3) {
    cans4L = Math.floor(enamelLiters / 4);
    const rem = enamelLiters % 4;
    if (rem >= 3) {
      cans4L += 1;
    } else if (rem > 0) {
      cans1L = rem;
    }
    if (cans4L === 0 && cans1L === 0) cans4L = 1;
  } else {
    cans1L = enamelLiters;
  }

  const enamelParts = [];
  if (cans4L > 0) enamelParts.push(`${cans4L} Lata${cans4L > 1 ? 's' : ''} de 4L`);
  if (cans1L > 0) enamelParts.push(`${cans1L} Lata${cans1L > 1 ? 's' : ''} de 1L`);
  const enamelDescription = enamelParts.join(' + ') || `${cans1L} Lata de 1L`;

  // Aguarrás
  const aguarrasLiters = Math.max(1, Math.ceil(enamelLiters * yields.thinnerLitersPerEnamelLiter));

  // Convertidor y Desoxidante
  const needsConvertidor = rejaRust === 'medium' || rejaRust === 'heavy';
  const convertidorLiters = needsConvertidor ? Math.max(1, Math.ceil(enamelLiters * 0.5)) : 0;

  const needsDesoxidante = rejaRust === 'heavy';
  const desoxidanteLiters = needsDesoxidante ? 1 : 0;

  // Lijas tela esmeril
  const lijaSheets = Math.max(2, Math.ceil(linearMeters * yields.sandpaperSheetsPerLinearMeter) + (rejaRust === 'heavy' ? 2 : 0));

  // Cepillo de alambre
  const needsCepillo = rejaRust === 'medium' || rejaRust === 'heavy';

  // Cinta de enmascarar
  const needsCinta = envList.includes('tightGlassAccess') || ['standard_window', 'balcony_window'].includes(rejaType);
  const cintaRolls = needsCinta ? 1 : 0;

  // Costo total de materiales
  let materialsCostEstimate = 0;
  materialsCostEstimate += cans4L * materialEstimatedPrices.enamel3in1_4L;
  materialsCostEstimate += cans1L * materialEstimatedPrices.enamel3in1_1L;
  materialsCostEstimate += aguarrasLiters * materialEstimatedPrices.aguarras1L;
  if (needsConvertidor) materialsCostEstimate += convertidorLiters * materialEstimatedPrices.convertidor1L;
  if (needsDesoxidante) materialsCostEstimate += desoxidanteLiters * materialEstimatedPrices.desoxidante1L;
  materialsCostEstimate += lijaSheets * materialEstimatedPrices.telaEsmerilHoja;
  if (needsCepillo) materialsCostEstimate += materialEstimatedPrices.cepilloAlambre;
  materialsCostEstimate += materialEstimatedPrices.pincelCerdaMetal;
  if (cintaRolls > 0) materialsCostEstimate += cintaRolls * materialEstimatedPrices.cintaPintor24mm;

  // Lista recomendada para Mercado Libre
  const recommendedMaterialsList = [];

  if (cans4L > 0) {
    const prod = AFFILIATES_CONFIG.products.esmalte3en1_4L;
    recommendedMaterialsList.push({
      ...prod,
      quantityLabel: `${cans4L} Lata${cans4L > 1 ? 's' : ''} de 4 Litros (Esmalte 3 en 1)`,
      calculatedQty: cans4L,
      affiliateUrl: prod.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('esmalte sintetico 3 en 1 4 litros albalux tersuave')
    });
  }

  if (cans1L > 0) {
    const prod = AFFILIATES_CONFIG.products.esmalte3en1_1L;
    recommendedMaterialsList.push({
      ...prod,
      quantityLabel: `${cans1L} Lata${cans1L > 1 ? 's' : ''} de 1 Litro (Esmalte 3 en 1)`,
      calculatedQty: cans1L,
      affiliateUrl: prod.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('esmalte sintetico 3 en 1 1 litro')
    });
  }

  const aguarrasProd = AFFILIATES_CONFIG.products.aguarrasMineral1L;
  recommendedMaterialsList.push({
    ...aguarrasProd,
    quantityLabel: `${aguarrasLiters} Botella${aguarrasLiters > 1 ? 's' : ''} de 1 Litro (Solvente puro)`,
    calculatedQty: aguarrasLiters,
    affiliateUrl: aguarrasProd.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('aguarras mineral 1 litro puro')
  });

  if (needsConvertidor) {
    const convProd = AFFILIATES_CONFIG.products.convertidorOxido1L;
    recommendedMaterialsList.push({
      ...convProd,
      quantityLabel: `${convertidorLiters} Lata${convertidorLiters > 1 ? 's' : ''} de 1 Litro (Fondo convertidor)`,
      calculatedQty: convertidorLiters,
      affiliateUrl: convProd.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('convertidor de oxido 1 litro')
    });
  }

  if (needsDesoxidante) {
    const desoxProd = AFFILIATES_CONFIG.products.desoxidanteFosfatizante1L;
    recommendedMaterialsList.push({
      ...desoxProd,
      quantityLabel: '1 Botella de 1 Litro (Neutralizador químico fosfatizante)',
      calculatedQty: 1,
      affiliateUrl: desoxProd.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('desoxidante fosfatizante 1 litro')
    });
  }

  if (needsCepillo) {
    const cepilloProd = AFFILIATES_CONFIG.products.cepilloAlambre;
    recommendedMaterialsList.push({
      ...cepilloProd,
      quantityLabel: '1 Cepillo de alambre de acero con mango',
      calculatedQty: 1,
      affiliateUrl: cepilloProd.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('cepillo de alambre de acero manual')
    });
  }

  const lijaProd = AFFILIATES_CONFIG.products.lijasTelaEsmeril;
  recommendedMaterialsList.push({
    ...lijaProd,
    quantityLabel: `${lijaSheets} Pliegos de tela esmeril para metal (G80 y G150)`,
    calculatedQty: lijaSheets,
    affiliateUrl: lijaProd.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('lija tela esmeril metal')
  });

  const pincelProd = AFFILIATES_CONFIG.products.pincelCerdaMetal;
  recommendedMaterialsList.push({
    ...pincelProd,
    quantityLabel: '1 Pincel de cerda virola 1 (1½" o 2") para herrería',
    calculatedQty: 1,
    affiliateUrl: pincelProd.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('pincel cerda virola 1')
  });

  if (cintaRolls > 0) {
    const cintaProd = AFFILIATES_CONFIG.products.cintaEnmascarar;
    recommendedMaterialsList.push({
      ...cintaProd,
      quantityLabel: '1 Rollo de cinta de enmascarar (Protección vidrio/pared)',
      calculatedQty: 1,
      affiliateUrl: cintaProd.affiliateUrl || AFFILIATES_CONFIG.generateAffiliateSearchUrl('cinta de enmascarar de papel pintor 24mm')
    });
  }

  return {
    jobCategory: 'rejas',
    surfaces: {
      wallM2: 0,
      ceilingM2: 0,
      totalM2: areaM2,
      linearMeters,
      areaM2,
      openingsDeductionM2: 0,
      isRejas: true,
      rejaUnitLabel: roomLabel,
    },
    labor: {
      min: minLabor,
      recommended: recommendedLabor,
      max: maxLabor,
      baseWallLabor: baseLabor,
      baseCeilingLabor: 0,
      conditionSurchargesTotal,
      estimatedDays,
      workforceAdvice,
    },
    materials: {
      estimatedCost: materialsCostEstimate,
      latexWallLiters: enamelLiters,
      latexCeilingLiters: 0,
      enamelLiters,
      enamelContainersDescription: enamelDescription,
      aguarrasLiters,
      fijadorLiters: 0,
      enduidoKg: 0,
      lijaSheets,
      cintaRolls,
      plasticoRolls: 0,
      itemsList: recommendedMaterialsList,
      wallPaintContainers: {
        description: `${enamelDescription} (Esmalte 3 en 1)`,
        estimatedCost: (cans4L * materialEstimatedPrices.enamel3in1_4L) + (cans1L * materialEstimatedPrices.enamel3in1_1L)
      },
      ceilingPaintContainers: {
        description: 'No aplica en herrería',
        estimatedCost: 0
      }
    },
    combinedTotal: {
      min: minLabor + (materialsBuyer === 'client' ? 0 : materialsCostEstimate),
      recommended: recommendedLabor + materialsCostEstimate,
      max: maxLabor + Math.round(materialsCostEstimate * 1.15),
    },
    meta: {
      jobCategory: 'rejas',
      materialsBuyer,
      activeConditionsDetails,
      dateCalculated: new Date().toLocaleDateString('es-AR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      roomLabel,
      rejaRust,
      rejaDesign,
      rejaEnvironments: envList,
      isMetalwork: true,
    }
  };
}

