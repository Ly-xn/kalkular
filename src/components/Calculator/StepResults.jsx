import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { exportQuoteToPdf, buildWhatsAppShareUrl } from '../../utils/exportPdf.js';
import { MaterialsQuote } from './MaterialsQuote.jsx';
import { 
  CheckCircle2, 
  Download, 
  Share2, 
  Clock, 
  Users, 
  RotateCcw, 
  Palette,
  Shield,
  Snowflake,
  Zap,
  Ruler,
  Wind
} from 'lucide-react';

export function StepResults({ quoteData, onEditInputs }) {
  const [currencyMode, setCurrencyMode] = useState('ARS'); // 'ARS' | 'USD'
  const usdRate = 1250;

  const { labor, surfaces, materials, combinedTotal, meta, thermal } = quoteData;
  const isRejas = meta.jobCategory === 'rejas';
  const isAc = meta.jobCategory === 'ac';

  useEffect(() => {
    // Disparar confetti suave al mostrar resultados
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: isAc
          ? ['#0ea5e9', '#38bdf8', '#2563eb', '#ffffff']
          : ['#ff6a00', '#f97316', '#ffe600', '#ffffff']
      });
    } catch {
      // Ignore if confetti fails
    }
  }, [isAc]);

  const formatPrice = (amount) => {
    if (currencyMode === 'USD') {
      const inUsd = Math.round(amount / usdRate);
      return `US$ ${inUsd.toLocaleString('es-AR')}`;
    }
    return `$${amount.toLocaleString('es-AR')}`;
  };

  const handleDownloadPdf = () => {
    exportQuoteToPdf(quoteData, 'Cliente');
  };

  const handleShareWhatsApp = () => {
    const url = buildWhatsAppShareUrl(quoteData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header de Éxito */}
      <div className="text-center max-w-xl mx-auto">
        <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2 ${
          isAc
            ? 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400'
            : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
        }`}>
          {isAc ? (
            <Snowflake className="h-3.5 w-3.5 text-sky-500 dark:text-sky-400" />
          ) : (
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
          )}
          {isAc ? 'Balance Térmico & Presupuesto Listo' : 'Presupuesto Calculado con Éxito'}
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
          {isAc
            ? 'Diagnóstico de Frigorías e Instalación Split'
            : isRejas
            ? 'Presupuesto para Rejas y Herrería'
            : 'Presupuesto Estimado de Pintura'}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm mt-1">
          {isAc
            ? `${meta.roomLabel} · ${surfaces.totalM2} m² de planta (${surfaces.volumeM3} m³ de volumen con techo de ${surfaces.roomHeight}m)`
            : isRejas
            ? `${meta.roomLabel} · ${surfaces.linearMeters} ml equiv. (${surfaces.totalM2} m² lleno por vacío a 2 manos)`
            : `${meta.roomLabel} · ${surfaces.totalM2} m² totales (${surfaces.wallM2} m² paredes ${surfaces.ceilingM2 > 0 ? `+ ${surfaces.ceilingM2} m² techo` : ''})`}
        </p>
      </div>

      {/* Selector de Moneda y Acciones Rápidas */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-1 text-xs transition-colors">
          <span className="text-slate-500 dark:text-slate-400 px-2 font-medium">Moneda:</span>
          <button
            onClick={() => setCurrencyMode('ARS')}
            className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
              currencyMode === 'ARS'
                ? isAc ? 'bg-sky-600 text-white shadow' : 'bg-[#ff6a00] text-white shadow'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            ARS ($)
          </button>
          <button
            onClick={() => setCurrencyMode('USD')}
            className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
              currencyMode === 'USD'
                ? isAc ? 'bg-sky-600 text-white shadow' : 'bg-[#ff6a00] text-white shadow'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            USD (Ref)
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onEditInputs}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Ajustar datos</span>
          </button>
        </div>
      </div>

      {/* DIAGNÓSTICO TERMOMECÁNICO DESTACADO (EXCLUSIVO PARA CLIMATIZACIÓN 'ac') */}
      {isAc && thermal && (
        <div className="relative overflow-hidden rounded-3xl border-2 border-sky-400/50 dark:border-sky-500/40 bg-gradient-to-br from-sky-500/15 via-blue-600/5 to-white dark:from-sky-500/20 dark:via-[#111b30] dark:to-[#0d1322] p-6 md:p-8 shadow-xl shadow-sky-500/10">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Columna Izquierda: Demanda Térmica Exacta */}
            <div className="lg:col-span-5 space-y-2 border-b lg:border-b-0 lg:border-r border-sky-200/70 dark:border-white/10 pb-5 lg:pb-0 lg:pr-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 border border-sky-500/30 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-sky-700 dark:text-sky-300">
                <Snowflake className="h-3 w-3" />
                Demanda Térmica Real (CACAAV)
              </div>
              <div className="flex items-baseline gap-2.5">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                  {thermal.exactFrigorias.toLocaleString('es-AR')}
                </span>
                <span className="text-base font-extrabold text-sky-600 dark:text-sky-400">
                  Frigorías
                </span>
              </div>
              <p className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-amber-500" />
                <span>Equivalencia térmica: <strong className="text-slate-900 dark:text-white">{thermal.exactWatts.toLocaleString('es-AR')} Watts (W)</strong></span>
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Calculado para {surfaces.volumeM3} m³ ({surfaces.totalM2} m² × {surfaces.roomHeight}m) incluyendo corrección por techo, sol y ganancias internas.
              </p>
            </div>

            {/* Columna Derecha: Equipo Comercial Recomendado en Argentina */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400 block">
                  Equipo Comercial Recomendado en Argentina:
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-0.5">
                  Split de {thermal.recommendedUnit.commercialFrigoriasLabel}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-sky-700 dark:text-sky-300 mt-0.5">
                  Potencia en etiqueta IRAM: {thermal.recommendedUnit.commercialWattsLabel} (Inverter o Tradicional)
                </p>
              </div>

              {/* Fichas técnicas rápidas de instalación (Caños, Ménsula, Térmica) */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="rounded-xl bg-white/90 dark:bg-white/[0.05] border border-sky-200/80 dark:border-white/10 p-2.5">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Cañería Cobre</span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    {thermal.recommendedUnit.pipeDiameters}
                  </span>
                </div>
                <div className="rounded-xl bg-white/90 dark:bg-white/[0.05] border border-sky-200/80 dark:border-white/10 p-2.5">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Ménsulas Ext.</span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    {thermal.recommendedUnit.bracketSize}
                  </span>
                </div>
                <div className="rounded-xl bg-white/90 dark:bg-white/[0.05] border border-sky-200/80 dark:border-white/10 p-2.5">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Protección Eléc.</span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    {thermal.recommendedUnit.BreakerAmps}
                  </span>
                </div>
              </div>

              {thermal.isMultiSplitRecommended && (
                <div className="rounded-xl bg-amber-500/15 border border-amber-500/30 p-3 text-xs text-amber-800 dark:text-amber-200">
                  <strong>Nota de Ingeniería (&gt;6.350 fg):</strong> Para salones de gran volumen recomendamos instalar <strong>2 equipos Split independientes</strong> (ej. 2x 3.000 fg o 2x 4.500 fg) para distribuir el flujo de aire de forma homogénea.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TARJETA PRINCIPAL DEL PRESUPUESTO (Estilo Proforma de Obra) */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-gradient-to-b dark:from-[#131b2e] dark:to-[#0d1322] p-6 md:p-8 shadow-xl dark:shadow-2xl transition-colors">
        
        {/* Glow de acento */}
        <div className={`pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full blur-3xl ${
          isAc ? 'bg-sky-500/10 dark:bg-sky-500/15' : 'bg-[#ff6a00]/10 dark:bg-[#ff6a00]/15'
        }`} />

        {/* Cifra Principal: Presupuesto Recomendado */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center pb-8 border-b border-slate-200 dark:border-white/10">
          
          <div className="lg:col-span-2">
            <span className={`text-xs font-bold uppercase tracking-wider ${
              isAc ? 'text-sky-600 dark:text-sky-400' : 'text-[#ea580c] dark:text-[#ff7d1a]'
            }`}>
              {isAc
                ? 'Presupuesto Mano de Obra de Instalación (CACAAV)'
                : isRejas
                ? 'Mano de Obra Especializada en Herrería'
                : 'Presupuesto Mano de Obra Recomendado'}
            </span>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
                {formatPrice(labor.recommended)}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {isAc ? '(Técnico Matriculado con Garantía)' : '(Precio promedio justo de mercado)'}
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
              {isAc
                ? `Incluye colocación de unidad interior y exterior, pase de pared, conexión de ${labor.pipeMeters}m de cañería, presurización con nitrógeno y vacío obligatorio con bomba.`
                : isRejas
                ? 'Incluye desoxidado, cepillado manual barrote por barrote, tratamiento convertidor y 2 manos de esmalte 3 en 1.'
                : 'Incluye 2 manos completas de pintura, preparación de superficie y recargos por dificultades seleccionadas.'}
            </p>
          </div>

          {/* Tarjeta de Tiempos */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] p-4 space-y-3 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                isAc ? 'bg-sky-500/15 text-sky-500' : 'bg-[#ff6a00]/15 text-[#ff7d1a]'
              }`}>
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Tiempo de ejecución</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {isAc ? labor.estimatedHoursLabel : `${labor.estimatedDays} días hábiles aprox.`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Equipo sugerido</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{labor.workforceAdvice}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Rangos de Mercado: Mínimo vs Recomendado vs Máximo */}
        <div className="py-6 border-b border-slate-200 dark:border-white/10">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Rango de Precios de Mercado para este trabajo:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-3.5 transition-colors">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Tarifa Mínima</span>
              <p className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-0.5">{formatPrice(labor.min)}</p>
              <span className="text-[10px] text-slate-500">
                {isAc ? 'Instalador particular / sin matrícula' : 'Pintor particular / sin garantía formal'}
              </span>
            </div>

            <div className={`rounded-2xl border p-3.5 transition-colors ${
              isAc
                ? 'border-sky-500/40 bg-sky-500/10 shadow-[0_0_20px_-5px_rgba(14,165,233,0.25)]'
                : 'border-[#ff6a00]/40 bg-orange-500/10 dark:bg-[#ff6a00]/10 shadow-[0_0_20px_-5px_rgba(255,106,0,0.2)] dark:shadow-[0_0_20px_-5px_rgba(255,106,0,0.3)]'
            }`}>
              <span className={`text-[11px] font-bold block ${
                isAc ? 'text-sky-600 dark:text-sky-400' : 'text-[#ea580c] dark:text-[#ff7d1a]'
              }`}>
                {isAc ? 'Recomendado (Matriculado CACAAV)' : 'Recomendado / Promedio'}
              </span>
              <p className="text-xl font-black text-slate-900 dark:text-white mt-0.5">{formatPrice(labor.recommended)}</p>
              <span className={`text-[10px] font-medium ${
                isAc ? 'text-sky-700 dark:text-sky-300' : 'text-[#c2410c] dark:text-[#ffb480]'
              }`}>
                {isAc ? 'Valida la garantía oficial del fabricante' : 'Excelente balance calidad / precio'}
              </span>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-3.5 transition-colors">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Tarifa Máxima / Empresa</span>
              <p className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-0.5">{formatPrice(labor.max)}</p>
              <span className="text-[10px] text-slate-500">Empresas con seguro y garantía formal</span>
            </div>
          </div>
        </div>

        {/* Desglose Transparente */}
        <div className="py-6 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Desglose de Costos de este Presupuesto:
          </p>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-white/5">
              <span className="text-slate-600 dark:text-slate-300">
                {isAc
                  ? `Instalación básica reglamentaria (${thermal?.recommendedUnit?.commercialFrigoriasLabel} - hasta 3m):`
                  : isRejas
                  ? `Mano de obra base (${meta.roomLabel} - 2 manos terminadas):`
                  : `Paredes (${surfaces.wallM2} m² a 2 manos terminadas):`}
              </span>
              <span className="font-semibold text-slate-900 dark:text-white">{formatPrice(labor.baseWallLabor)}</span>
            </div>

            {!isRejas && !isAc && surfaces.ceilingM2 > 0 && (
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-white/5">
                <span className="text-slate-600 dark:text-slate-300">
                  Cielorraso / Techo ({surfaces.ceilingM2} m² con antihongo):
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">{formatPrice(labor.baseCeilingLabor)}</span>
              </div>
            )}

            {isAc && labor.extraPipeMeters > 0 && (
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-white/5">
                <span className="text-slate-600 dark:text-slate-300">
                  Cañería adicional ({labor.extraPipeMeters}m extra sobre los 3m base · cobre + aislación):
                </span>
                <span className="font-semibold text-sky-600 dark:text-sky-400">+{formatPrice(labor.extraPipeCost)}</span>
              </div>
            )}

            {labor.conditionSurchargesTotal > 0 && (
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-white/5">
                <span className="text-slate-600 dark:text-slate-300">
                  {isAc
                    ? `Adicionales de dificultad en obra (${meta.activeConditionsDetails.length} seleccionados):`
                    : isRejas
                    ? `Dificultades y preparación de herrería (${meta.activeConditionsDetails.length} adicionales aplicadas):`
                    : `Tareas de preparación y dificultades (${meta.activeConditionsDetails.length} seleccionadas):`}
                </span>
                <span className={`font-semibold ${isAc ? 'text-sky-600 dark:text-sky-400' : 'text-[#ea580c] dark:text-[#ff7d1a]'}`}>
                  +{formatPrice(labor.conditionSurchargesTotal)}
                </span>
              </div>
            )}

            <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-white/5">
              <span className="text-slate-600 dark:text-slate-300">
                {isAc
                  ? `Kit de Instalación 3m (${materials.pipeDiameters}) + Ménsulas + Protector 20A:`
                  : isRejas
                  ? 'Materiales estimados (Esmalte 3 en 1, convertidor, aguarrás, telas esmeril):'
                  : 'Materiales estimados (Látex, enduido, lijas, kit pintor):'}
              </span>
              <span className="font-semibold text-amber-600 dark:text-yellow-400">
                ~{formatPrice(materials.estimatedCost)}
                <span className="text-[10px] text-slate-500 dark:text-slate-400 ml-1">
                  ({meta.materialsBuyer === 'client' ? 'Comprando en Mercado Libre' : 'Provistos por el técnico'})
                </span>
              </span>
            </div>

            {/* Total Combinado */}
            <div className="flex justify-between items-center pt-3 text-sm font-bold">
              <span className="text-slate-900 dark:text-white">
                {isAc
                  ? 'Total Instalación Completa (Mano de Obra + Kit de Materiales):'
                  : 'Presupuesto Global Estimado (Mano de Obra + Materiales):'}
              </span>
              <span className={`text-lg ${isAc ? 'text-sky-600 dark:text-sky-400' : 'text-[#ff6a00]'}`}>
                {formatPrice(combinedTotal.recommended)}
              </span>
            </div>
          </div>
        </div>

        {/* Aclaración Técnica / Notas según categoría */}
        {isAc ? (
          <div className="my-6 rounded-2xl border border-sky-300 dark:border-sky-500/30 bg-sky-50/80 dark:bg-sky-500/10 p-4 flex items-start gap-3.5 text-xs transition-colors">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 flex-shrink-0 mt-0.5">
              <Wind className="h-4 w-4" />
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-sky-900 dark:text-sky-300 text-xs flex items-center gap-1.5">
                <span>Requisitos obligatorios para conservar la garantía oficial (CACAAV)</span>
              </h5>
              <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                Exigí siempre que el instalador coloque un <strong className="text-slate-900 dark:text-white font-semibold">mínimo de 3 metros lineales de caño de cobre</strong> y realice <strong className="text-slate-900 dark:text-white font-semibold">vacío con bomba de vacío durante 20 a 30 minutos</strong> antes de liberar el gas refrigerante R410A/R32. Instalar menos de 3m o "purgar a gas" produce ruidos, quema el compresor y anula la garantía de fábrica.
              </p>
            </div>
          </div>
        ) : isRejas ? (
          <div className="my-6 rounded-2xl border border-blue-300 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-500/10 p-4 flex items-start gap-3.5 text-xs transition-colors">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 flex-shrink-0 mt-0.5">
              <Shield className="h-4 w-4" />
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-blue-900 dark:text-blue-300 text-xs flex items-center gap-1.5">
                <span>Regla de oro sobre la pintura de herrería en obra</span>
              </h5>
              <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                El <strong className="text-slate-900 dark:text-white font-semibold">70% del valor de la mano de obra</strong> corresponde al trabajo artesanal e intensivo de rasquetear, cepillar con alambre, lijar y desengrasar barrote por barrote. Sin esta preparación minuciosa, cualquier pintura se engloba y salta a los pocos meses de intemperie. Los esmaltes 3 en 1 calculados vienen en colores de catálogo (Negro, Blanco, Gris, Verde Noche, etc.) listos para aplicar sin requerir entonadores.
              </p>
            </div>
          </div>
        ) : (
          <div className="my-6 rounded-2xl border border-amber-300 dark:border-amber-400/30 bg-amber-50 dark:bg-amber-400/10 p-4 flex items-start gap-3.5 text-xs transition-colors">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-400/20 text-amber-700 dark:text-amber-300 flex-shrink-0 mt-0.5">
              <Palette className="h-4 w-4" />
            </div>
            <div className="space-y-1">
              <h5 className="font-bold text-amber-800 dark:text-amber-300 text-xs flex items-center gap-1.5">
                <span>Nota importante sobre el color de la pintura y entonadores</span>
              </h5>
              <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                Este presupuesto está calculado sobre la base de látex blanco estándar de primera calidad. <strong className="text-slate-900 dark:text-white font-semibold">No incluye color de pintura preparado a máquina ni entonadores</strong>, ya que creemos que es fundamental que la elección del tono o paleta de color la hagas personalmente en la pinturería física o con muestrario en mano para verificar la tonalidad real bajo la luz de tus ambientes.
              </p>
            </div>
          </div>
        )}

        {/* Botones de Acción: Descargar PDF & Compartir WhatsApp */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row gap-3">
          <button
            id="btn-descargar-pdf"
            onClick={handleDownloadPdf}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 py-3.5 text-xs md:text-sm font-bold text-slate-800 dark:text-white transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Download className={`h-4 w-4 ${isAc ? 'text-sky-500' : 'text-[#ff6a00]'}`} />
            <span>Descargar Presupuesto en PDF</span>
          </button>

          <button
            id="btn-compartir-whatsapp"
            onClick={handleShareWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 py-3.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Share2 className="h-4 w-4" />
            <span>Compartir por WhatsApp</span>
          </button>
        </div>

      </div>

      {/* MÓDULO DE MATERIALES Y CATÁLOGO DE AFILIADOS DE MERCADO LIBRE */}
      <MaterialsQuote quoteData={quoteData} />

    </div>
  );
}
