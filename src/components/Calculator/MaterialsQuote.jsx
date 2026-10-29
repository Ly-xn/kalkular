import React from 'react';
import { 
  ShoppingCart, 
  ExternalLink, 
  Star, 
  CheckCircle, 
  Shield, 
  Truck, 
  CreditCard, 
  MessageCircle 
} from 'lucide-react';
import {
  getProductIcon,
  Latex20LIcon,
  LatexCeilingIcon,
  EnduidoPlasticoIcon,
  KitPintorIcon,
  Esmalte3en1Icon,
  AguarrasMineralIcon,
  LijasTelaEsmerilIcon,
  PincelCerdaMetalIcon,
  AcSplitUnitIcon,
  AcInstallKitIcon,
  AcVoltageProtectorIcon,
  AcElectricBreakerIcon
} from './ProductIcons';
import { buildWhatsAppMaterialsShareUrl } from '../../utils/exportPdf.js';

export function MaterialsQuote({ quoteData }) {
  const { materials, surfaces, meta } = quoteData;
  const isRejas = meta?.jobCategory === 'rejas';
  const isAc = meta?.jobCategory === 'ac';

  const handleShareWhatsAppMaterials = () => {
    const url = buildWhatsAppMaterialsShareUrl(quoteData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="materiales" className="mt-14 pt-12 border-t border-slate-200 dark:border-white/10 space-y-10 animate-fade-in transition-colors">
      
      {/* Encabezado del Módulo de Materiales */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2.5 ${
            isAc
              ? 'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300'
              : 'border-amber-400/30 bg-amber-400/10 text-amber-700 dark:text-yellow-300'
          }`}>
            <ShoppingCart className={`h-3.5 w-3.5 ${isAc ? 'text-sky-600 dark:text-sky-400' : 'text-amber-600 dark:text-[#ffe600]'}`} />
            {isAc ? 'Equipo e Insumos de Instalación' : 'Materiales Recomendados'}
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            {isAc ? 'Equipo Split y Kit de Instalación en Mercado Libre' : 'Materiales Recomendados para tu Obra'}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {isAc
              ? `Seleccionamos el Aire Acondicionado Split exacto (${quoteData.thermal?.recommendedUnit?.commercialFrigoriasLabel}), el Kit de Cañería de Cobre de ${materials.pipeDiameters} y las protecciones eléctricas reglamentarias de 20A. Comprá directo en Tiendas Oficiales por Mercado Libre.`
              : isRejas
              ? `Calculamos las cantidades exactas para pintar ${surfaces.linearMeters} metros lineales aprox. (${surfaces.totalM2} m² lleno por vacío a 2 manos). Comprá directo en Tiendas Oficiales por Mercado Libre y recibí todo en tu puerta.`
              : `Calculamos las cantidades exactas para pintar ${surfaces.totalM2} m² (2 manos completas). Comprá directo en Tiendas Oficiales por Mercado Libre y recibí todo en tu puerta.`}
          </p>
        </div>

        {/* Total Estimado de Materiales */}
        <div className={`rounded-2xl border p-4 md:p-5 text-left md:text-right min-w-[220px] shadow-lg transition-colors ${
          isAc
            ? 'border-sky-500/30 bg-gradient-to-br from-sky-500/15 via-blue-500/5 dark:via-white/[0.02] to-transparent shadow-sky-500/5 dark:shadow-black/40'
            : 'border-amber-400/30 bg-gradient-to-br from-amber-400/15 via-amber-500/5 dark:via-white/[0.02] to-transparent shadow-amber-500/5 dark:shadow-black/40'
        }`}>
          <span className={`text-[11px] font-bold uppercase tracking-wider block ${
            isAc ? 'text-sky-700 dark:text-sky-400' : 'text-amber-700 dark:text-yellow-400'
          }`}>
            {isAc ? 'Costo Estimado Kit Instalación' : 'Costo Estimado Materiales'}
          </span>
          <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-1">
            ~${materials.estimatedCost.toLocaleString('es-AR')} <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">ARS</span>
          </p>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 block">
            {isAc && materials.estimatedEquipmentCost
              ? `Equipo Split: ~$${materials.estimatedEquipmentCost.toLocaleString('es-AR')} ARS`
              : 'Precios promedio en Mercado Libre'}
          </span>
        </div>
      </div>

      {/* Botón Práctico WhatsApp: Guardar / Enviar Lista y Presupuesto */}
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/5 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
            <MessageCircle className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              {isAc
                ? '¿Querés guardar esta ficha técnica o enviársela a tu instalador matriculado?'
                : '¿Querés guardar esta lista o enviársela a tu pintor?'}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
              {isAc
                ? 'Armá un mensaje con las frigorías calculadas, tarifa de mano de obra CACAAV y los links directos al equipo y kit de cañería en Mercado Libre.'
                : 'Armá un mensaje con los m² calculados, costos estimados de mano de obra y los links directos a cada material en Mercado Libre.'}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleShareWhatsAppMaterials}
          className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold px-5 py-3 shadow-md shadow-emerald-600/25 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Enviar Presupuesto y Lista por WhatsApp</span>
        </button>
      </div>

      {/* Resumen Rápido de Insumos con Iconos */}
      {isAc ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-sky-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 p-2 flex items-center justify-center text-sky-600 dark:text-sky-400 flex-shrink-0">
              <AcSplitUnitIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Equipo Split</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">
                {quoteData.thermal?.recommendedUnit?.commercialFrigoriasLabel}
              </p>
              <span className="text-[10px] text-sky-600 dark:text-sky-400 font-semibold">
                {quoteData.thermal?.recommendedUnit?.commercialWattsLabel} Frío/Calor
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-sky-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 p-2 flex items-center justify-center text-sky-600 dark:text-sky-400 flex-shrink-0">
              <AcInstallKitIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Kit Cañería 3m</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">
                Caños {materials.pipeDiameters}
              </p>
              <span className="text-[10px] text-sky-600 dark:text-sky-400 font-semibold">
                Cobre + aislantes + TPR
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-sky-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 p-2 flex items-center justify-center text-sky-600 dark:text-sky-400 flex-shrink-0">
              <AcElectricBreakerIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Soporte Exterior</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">
                Ménsulas {materials.bracketSize}
              </p>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                Epoxi + tacos goma
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-sky-500/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/30 p-2 flex items-center justify-center text-amber-600 dark:text-yellow-300 flex-shrink-0">
              <AcVoltageProtectorIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Protección 20A</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">
                Protector + {materials.breakerAmps}
              </p>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                Alta/Baja tensión
              </span>
            </div>
          </div>
        </div>
      ) : isRejas ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-[#ff6a00]/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-[#ff6a00]/15 border border-[#ff6a00]/30 p-2 flex items-center justify-center text-[#ea580c] dark:text-[#ff7d1a] flex-shrink-0">
              <Esmalte3en1Icon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Esmalte 3 en 1</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">{materials.enamelContainersDescription || materials.wallPaintContainers.description}</p>
              <span className="text-[10px] text-[#ea580c] dark:text-[#ff7d1a] font-semibold">~{materials.enamelLiters || materials.latexWallLiters}L netos</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-sky-400/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-sky-400/15 border border-sky-400/30 p-2 flex items-center justify-center text-sky-600 dark:text-sky-400 flex-shrink-0">
              <AguarrasMineralIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Solvente</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">{materials.aguarrasLiters || 1}L Aguarrás</p>
              <span className="text-[10px] text-sky-600 dark:text-sky-400 font-semibold">Desengrase y dilución</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-[#ff6a00]/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-[#ff6a00]/15 border border-[#ff6a00]/30 p-2 flex items-center justify-center text-[#ea580c] dark:text-[#ff7d1a] flex-shrink-0">
              <LijasTelaEsmerilIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Desoxidado</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">{materials.lijaSheets} telas esmeril</p>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Cepillo + lija metal</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-yellow-400/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/30 p-2 flex items-center justify-center text-amber-600 dark:text-yellow-300 flex-shrink-0">
              <PincelCerdaMetalIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Aplicación</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">1 Pincel Herrería</p>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Virola 1 cerda pura</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-[#ff6a00]/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-[#ff6a00]/15 border border-[#ff6a00]/30 p-2 flex items-center justify-center text-[#ea580c] dark:text-[#ff7d1a] flex-shrink-0">
              <Latex20LIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Látex Paredes</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">{materials.wallPaintContainers.description}</p>
              <span className="text-[10px] text-[#ea580c] dark:text-[#ff7d1a] font-semibold">~{materials.latexWallLiters}L netos</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-emerald-400/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-emerald-400/15 border border-emerald-400/30 p-2 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <LatexCeilingIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Cielorraso</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">{materials.ceilingPaintContainers.description}</p>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Antihongo Mate</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-[#ff6a00]/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-[#ff6a00]/15 border border-[#ff6a00]/30 p-2 flex items-center justify-center text-[#ea580c] dark:text-[#ff7d1a] flex-shrink-0">
              <EnduidoPlasticoIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Preparación</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">
                {materials.enduidoKg > 0 ? `${materials.enduidoKg} kg Enduido` : 'Superficie Lista'}
              </p>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">{materials.lijaSheets} pliegos lija</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all shadow-sm dark:shadow-none hover:border-yellow-400/30 hover:bg-slate-50 dark:hover:bg-white/[0.05]">
            <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/30 p-2 flex items-center justify-center text-amber-600 dark:text-yellow-300 flex-shrink-0">
              <KitPintorIcon className="w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">Kit Pintor</p>
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate mt-0.5">1 Kit Completo</p>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">{materials.cintaRolls} rollos + plástico</span>
            </div>
          </div>
        </div>
      )}

      {/* 💡 Bloque Visual: Tip de Ahorro y Logística */}
      <div className={`rounded-3xl border p-5 sm:p-6 backdrop-blur-md shadow-xs ${
        isAc
          ? 'border-sky-500/40 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-transparent'
          : 'border-amber-400/40 bg-gradient-to-r from-amber-400/10 via-orange-500/10 to-transparent'
      }`}>
        <div className="flex items-start gap-3.5 sm:gap-4">
          <div className={`flex h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-2xl text-xl font-black ${
            isAc
              ? 'bg-sky-500/20 text-sky-600 dark:text-sky-400'
              : 'bg-amber-400/20 text-amber-600 dark:text-yellow-400'
          }`}>
            {isAc ? '❄️' : '💡'}
          </div>
          <div className="space-y-1.5 min-w-0">
            <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span>
                {isAc
                  ? 'Tip de Ahorro Energético y Obra: Tecnología Inverter + Kit de Cobre Propio'
                  : 'Tip de Ahorro y Logística: Comprá los baldes pesados con envío a domicilio'}
              </span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {isAc ? (
                <>
                  Elegir un equipo <strong className="text-slate-900 dark:text-white">Inverter</strong> reduce entre un <strong className="text-slate-900 dark:text-white">35% y un 40%</strong> el consumo eléctrico mensual frente a un Split tradicional On/Off. Además, comprar el <strong className="text-slate-900 dark:text-white">Kit de Instalación de Cobre de 3 metros</strong> por Mercado Libre te permite ahorrar hasta un 30% en materiales y financiar en cuotas junto con el equipo.
                </>
              ) : (
                <>
                  Un balde de pintura de 20 litros pesa más de <strong className="text-slate-900 dark:text-white">30 kg</strong>. Comprarlo por Mercado Libre te ahorra el costo de contratar un flete o furgón particular y te permite financiar en <strong className="text-slate-900 dark:text-white">hasta 6 cuotas</strong> en Tiendas Oficiales (Alba, Tersuave, Sherwin Williams), recibiendo todo en tu puerta antes de que el pintor empiece el trabajo.
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Grid del Catálogo de Productos con Iconos Vectoriales y Optimización CRO */}
      {(() => {
        const renderProductCard = (item, index) => (
          <div
            key={item.id || index}
            className={`group relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/90 p-5 sm:p-6 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:bg-slate-50/70 dark:hover:bg-[#141d30] ${
              isAc
                ? 'hover:border-sky-500/40 hover:shadow-[0_20px_45px_-12px_rgba(14,165,233,0.15)]'
                : 'hover:border-[#ff6a00]/40 hover:shadow-[0_20px_45px_-12px_rgba(255,106,0,0.15)]'
            }`}
          >
            <div className="space-y-3.5">
              
              {/* Fila Superior Horizontal Limpia: Ícono + Categoría a la izq, Badge a la der */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br via-slate-100 dark:via-white/[0.04] to-transparent border p-2 flex items-center justify-center shadow-inner group-hover:scale-105 transition-all duration-300 ${
                    isAc
                      ? 'from-sky-500/10 dark:from-sky-500/20 border-sky-500/20 dark:border-sky-500/30 text-sky-600 dark:text-sky-400 group-hover:border-sky-500/60'
                      : 'from-[#ff6a00]/10 dark:from-[#ff6a00]/20 border-[#ff6a00]/20 dark:border-[#ff6a00]/30 text-[#ea580c] dark:text-[#ff7d1a] group-hover:border-[#ff6a00]/60'
                  }`}>
                    {getProductIcon(item.id, isAc ? "w-full h-full text-sky-500" : "w-full h-full text-[#ff6a00]")}
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 truncate">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-amber-600 dark:text-yellow-400 font-semibold inline-flex items-center gap-1 mt-0.5">
                      <Shield className="h-3 w-3 flex-shrink-0" /> Tienda Oficial
                    </span>
                  </div>
                </div>

                <span className={`inline-flex flex-shrink-0 items-center gap-1 rounded-full border px-3 py-1 text-[10px] font-bold ${
                  isAc
                    ? 'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300'
                    : 'border-amber-400/30 bg-amber-400/10 text-amber-700 dark:text-yellow-300'
                }`}>
                  {item.badge}
                </span>
              </div>

              {/* Título del Producto Espacioso y Sin Desborde */}
              <h4 className={`text-lg font-bold leading-snug break-words text-slate-900 dark:text-white transition-colors ${
                isAc ? 'group-hover:text-sky-600 dark:group-hover:text-sky-400' : 'group-hover:text-[#ea580c] dark:group-hover:text-[#ff7d1a]'
              }`}>
                {item.name}
              </h4>

              {/* Marca recomendada */}
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                <span>Marcas sugeridas:</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{item.brand}</span>
              </div>

              {/* Recuadro Compacto de Especificación Técnica / Cantidad Calculada */}
              <div className={`p-3 rounded-xl border shadow-2xs ${
                isAc
                  ? 'border-sky-500/25 dark:border-sky-500/30 bg-sky-500/5 dark:bg-gradient-to-r dark:from-sky-500/15 dark:via-sky-500/10 dark:to-transparent'
                  : 'border-[#ff6a00]/25 dark:border-[#ff6a00]/30 bg-orange-500/5 dark:bg-gradient-to-r dark:from-[#ff6a00]/15 dark:via-[#ff6a00]/10 dark:to-transparent'
              }`}>
                <span className={`text-[10px] uppercase font-black tracking-wider block mb-0.5 ${
                  isAc ? 'text-sky-600 dark:text-sky-400' : 'text-[#ea580c] dark:text-[#ff7d1a]'
                }`}>
                  {isAc
                    ? `Especificación Técnica (${surfaces.volumeM3} m³ · ${quoteData.thermal?.exactFrigorias} fg)`
                    : `Cantidad Calculada (${surfaces.totalM2} m²)`}
                </span>
                <p className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle className={`h-4 w-4 flex-shrink-0 ${isAc ? 'text-sky-500' : 'text-[#ff6a00]'}`} />
                  <span className="break-words">{item.quantityLabel}</span>
                </p>
              </div>

              {/* Tagline */}
              <p className="text-xs text-slate-600 dark:text-slate-300/90 leading-relaxed">
                {item.tagline}
              </p>

              {/* Micro-Badges + Ratings & Precio Estimado */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] px-2.5 py-1 rounded-lg border border-slate-200 dark:border-white/5">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold">{item.rating}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">({item.reviewsCount})</span>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <Truck className="h-3.5 w-3.5" /> Envío a domicilio
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium">Estimado Mercado Libre</span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white tracking-wide">{item.estimatedPrice}</span>
                </div>
              </div>
            </div>

            {/* Botón de Afiliado Mercado Libre Optimizado (Siempre Amarillo/Ámbar ML) */}
            <div className="mt-5 pt-1">
              <a
                href={item.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#ffe600] px-4 text-xs sm:text-sm font-black text-slate-900 shadow-lg shadow-yellow-500/15 transition-all hover:bg-[#fff04d] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <ShoppingCart className="h-4 w-4 text-slate-900 flex-shrink-0" />
                <span>Comprar en Mercado Libre</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-900/80 ml-0.5 flex-shrink-0" />
              </a>
              <p className="text-[10px] text-center text-slate-500 dark:text-slate-400 mt-1.5">
                Tienda Oficial · Compra Protegida · Cuotas disponibles
              </p>
            </div>
          </div>
        );

        if (isAc) {
          const primaryAcItems = materials.itemsList.slice(0, 2);
          const protectionAcItems = materials.itemsList.slice(2);

          return (
            <div className="space-y-8">
              {/* Subsección 1: 2 Ítems Principales */}
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500 text-white text-xs font-black">1</span>
                    <span>Equipo Split Recomendado y Kit de Instalación Completo (3m)</span>
                  </h4>
                  <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
                    Ítems Principales de Climatización
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {primaryAcItems.map((item, idx) => renderProductCard(item, idx))}
                </div>
              </div>

              {/* Subsección 2: 2 Accesorios de Protección Eléctrica */}
              {protectionAcItems.length > 0 && (
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500 text-white text-xs font-black">2</span>
                      <span>Accesorios de Protección Eléctrica Reglamentaria (20A)</span>
                    </h4>
                    <span className="text-[11px] font-bold text-amber-700 dark:text-yellow-400 bg-amber-400/10 border border-amber-400/25 px-3 py-1 rounded-full">
                      Seguridad ante Baja/Alta Tensión
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {protectionAcItems.map((item, idx) => renderProductCard(item, idx + 2))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        const gridColsClass =
          materials.itemsList.length === 3
            ? 'grid-cols-1 md:grid-cols-3 gap-6'
            : 'grid-cols-1 md:grid-cols-2 gap-6';

        return (
          <div className={`grid ${gridColsClass}`}>
            {materials.itemsList.map((item, index) => renderProductCard(item, index))}
          </div>
        );
      })()}

      {/* Banner Informativo y Transparencia de Afiliación */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.02] p-5 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-3.5 leading-relaxed transition-colors">
        <Shield className="h-5 w-5 text-amber-500 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
        <p>
          <strong className="text-slate-900 dark:text-white">Aviso de Afiliación & Compras Seguras:</strong> En calidad de afiliados de Mercado Libre, podemos percibir una pequeña comisión por las compras realizadas a través de estos enlaces. Esto <strong className="text-slate-900 dark:text-white">no modifica ni aumenta en nada el precio final para vos</strong> y nos permite mantener esta calculadora técnica gratuita, libre de suscripciones y en constante actualización.
        </p>
      </div>

    </section>
  );
}
