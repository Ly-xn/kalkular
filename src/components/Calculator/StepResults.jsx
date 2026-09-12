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
  Palette
} from 'lucide-react';

export function StepResults({ quoteData, onEditInputs }) {
  const [currencyMode, setCurrencyMode] = useState('ARS'); // 'ARS' | 'USD'
  const usdRate = 1250;

  useEffect(() => {
    // Disparar confetti suave al mostrar resultados
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff6a00', '#f97316', '#ffe600', '#ffffff']
      });
    } catch {
      // Ignore if confetti fails
    }
  }, []);

  const formatPrice = (amount) => {
    if (currencyMode === 'USD') {
      const inUsd = Math.round(amount / usdRate);
      return `US$ ${inUsd.toLocaleString('es-AR')}`;
    }
    return `$${amount.toLocaleString('es-AR')}`;
  };

  const { labor, surfaces, materials, combinedTotal, meta } = quoteData;

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
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
          Presupuesto Calculado con Éxito
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
          Presupuesto Estimado de Pintura
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm mt-1">
          {meta.roomLabel} · {surfaces.totalM2} m² totales a pintar ({surfaces.wallM2} m² paredes {surfaces.ceilingM2 > 0 ? `+ ${surfaces.ceilingM2} m² techo` : ''})
        </p>
      </div>

      {/* Selector de Moneda y Acciones Rápidas */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-1 text-xs transition-colors">
          <span className="text-slate-500 dark:text-slate-400 px-2 font-medium">Moneda:</span>
          <button
            onClick={() => setCurrencyMode('ARS')}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              currencyMode === 'ARS' ? 'bg-[#ff6a00] text-white shadow' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            ARS ($)
          </button>
          <button
            onClick={() => setCurrencyMode('USD')}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              currencyMode === 'USD' ? 'bg-[#ff6a00] text-white shadow' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            USD (Ref)
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onEditInputs}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Ajustar datos</span>
          </button>
        </div>
      </div>

      {/* TARJETA PRINCIPAL DEL PRESUPUESTO (Estilo Proforma de Obra) */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-gradient-to-b dark:from-[#131b2e] dark:to-[#0d1322] p-6 md:p-8 shadow-xl dark:shadow-2xl transition-colors">
        
        {/* Glow de acento */}
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#ff6a00]/10 dark:bg-[#ff6a00]/15 blur-3xl" />

        {/* Cifra Principal: Presupuesto Recomendado */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center pb-8 border-b border-slate-200 dark:border-white/10">
          
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] dark:text-[#ff7d1a]">
              Presupuesto Mano de Obra Recomendado
            </span>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
                {formatPrice(labor.recommended)}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                (Precio promedio justo de mercado)
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
              Incluye 2 manos completas de pintura, preparación de superficie y recargos por dificultades seleccionadas.
            </p>
          </div>

          {/* Tarjeta de Tiempos */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] p-4 space-y-3 transition-colors">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff6a00]/15 text-[#ff7d1a]">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Tiempo de ejecución</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{labor.estimatedDays} días hábiles aprox.</p>
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
              <span className="text-[10px] text-slate-500">Pintor particular / sin garantía formal</span>
            </div>

            <div className="rounded-2xl border border-[#ff6a00]/40 bg-orange-500/10 dark:bg-[#ff6a00]/10 p-3.5 shadow-[0_0_20px_-5px_rgba(255,106,0,0.2)] dark:shadow-[0_0_20px_-5px_rgba(255,106,0,0.3)] transition-colors">
              <span className="text-[11px] font-bold text-[#ea580c] dark:text-[#ff7d1a] block">Recomendado / Promedio</span>
              <p className="text-xl font-black text-slate-900 dark:text-white mt-0.5">{formatPrice(labor.recommended)}</p>
              <span className="text-[10px] text-[#c2410c] dark:text-[#ffb480] font-medium">Excelente balance calidad / precio</span>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-3.5 transition-colors">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Tarifa Máxima / Empresa</span>
              <p className="text-lg font-bold text-slate-800 dark:text-slate-200 mt-0.5">{formatPrice(labor.max)}</p>
              <span className="text-[10px] text-slate-500">Empresas con seguro y garantía extendida</span>
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
                Paredes ({surfaces.wallM2} m² a 2 manos terminadas):
              </span>
              <span className="font-semibold text-slate-900 dark:text-white">{formatPrice(labor.baseWallLabor)}</span>
            </div>

            {surfaces.ceilingM2 > 0 && (
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-white/5">
                <span className="text-slate-600 dark:text-slate-300">
                  Cielorraso / Techo ({surfaces.ceilingM2} m² con antihongo):
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">{formatPrice(labor.baseCeilingLabor)}</span>
              </div>
            )}

            {labor.conditionSurchargesTotal > 0 && (
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-white/5">
                <span className="text-slate-600 dark:text-slate-300">
                  Tareas de preparación y dificultades ({meta.activeConditionsDetails.length} seleccionadas):
                </span>
                <span className="font-semibold text-[#ea580c] dark:text-[#ff7d1a]">+{formatPrice(labor.conditionSurchargesTotal)}</span>
              </div>
            )}

            <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-white/5">
              <span className="text-slate-600 dark:text-slate-300">
                Materiales estimados (Látex, enduido, lijas, kit pintor):
              </span>
              <span className="font-semibold text-amber-600 dark:text-yellow-400">
                ~{formatPrice(materials.estimatedCost)}
                <span className="text-[10px] text-slate-500 dark:text-slate-400 ml-1">
                  ({meta.materialsBuyer === 'client' ? 'Los compras vos en Mercado Libre' : 'Incluidos por pintor'})
                </span>
              </span>
            </div>

            {/* Total Combinado */}
            <div className="flex justify-between items-center pt-3 text-sm font-bold">
              <span className="text-slate-900 dark:text-white">Presupuesto Global Estimado (Mano de Obra + Materiales):</span>
              <span className="text-lg text-[#ff6a00]">{formatPrice(combinedTotal.recommended)}</span>
            </div>
          </div>
        </div>

        {/* Leyenda Informativa: Color de Pintura y Entonadores */}
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

        {/* Botones de Acción: Descargar PDF & Compartir WhatsApp */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownloadPdf}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 py-3.5 text-xs md:text-sm font-bold text-slate-800 dark:text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="h-4 w-4 text-[#ff6a00]" />
            <span>Descargar Presupuesto en PDF</span>
          </button>

          <button
            onClick={handleShareWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 py-3.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
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
