import React from 'react';
import { ShoppingCart, ExternalLink, Star, CheckCircle, Shield } from 'lucide-react';
import {
  getProductIcon,
  Latex20LIcon,
  LatexCeilingIcon,
  EnduidoPlasticoIcon,
  KitPintorIcon,
  Esmalte3en1Icon,
  AguarrasMineralIcon,
  LijasTelaEsmerilIcon,
  PincelCerdaMetalIcon
} from './ProductIcons';

export function MaterialsQuote({ quoteData }) {
  const { materials, surfaces, meta } = quoteData;
  const isRejas = meta?.jobCategory === 'rejas';

  return (
    <section id="materiales" className="mt-14 pt-12 border-t border-slate-200 dark:border-white/10 space-y-10 animate-fade-in transition-colors">
      
      {/* Encabezado del Módulo de Materiales */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-bold text-amber-700 dark:text-yellow-300 uppercase tracking-wider mb-2.5">
            <ShoppingCart className="h-3.5 w-3.5 text-amber-600 dark:text-[#ffe600]" />
            Materiales Recomendados
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            Materiales Recomendados para tu Obra
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {isRejas
              ? `Calculamos las cantidades exactas para pintar ${surfaces.linearMeters} metros lineales aprox. (${surfaces.totalM2} m² lleno por vacío a 2 manos). Comprá directo por Mercado Libre y recibí todo en tu puerta.`
              : `Calculamos las cantidades exactas para pintar ${surfaces.totalM2} m² (2 manos completas). Comprá directo por Mercado Libre y recibí todo en tu puerta.`}
          </p>
        </div>

        {/* Total Estimado de Materiales */}
        <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/15 via-amber-500/5 dark:via-white/[0.02] to-transparent p-4 md:p-5 text-left md:text-right min-w-[220px] shadow-lg shadow-amber-500/5 dark:shadow-black/40 transition-colors">
          <span className="text-[11px] font-bold text-amber-700 dark:text-yellow-400 uppercase tracking-wider block">Costo Estimado Materiales</span>
          <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-1">
            ~${materials.estimatedCost.toLocaleString('es-AR')} <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">ARS</span>
          </p>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 block">Precios promedio en Mercado Libre</span>
        </div>
      </div>

      {/* Resumen Rápido de Insumos con Iconos */}
      {isRejas ? (
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

      {/* Grid del Catálogo de Productos con Iconos Vectoriales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.itemsList.map((item, index) => (
          <div
            key={item.id || index}
            className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/90 p-6 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:border-[#ff6a00]/40 hover:bg-slate-50/70 dark:hover:bg-[#141d30] hover:shadow-[0_20px_45px_-12px_rgba(255,106,0,0.15)]"
          >
            <div className="space-y-4">
              
              {/* Header de la Card: Icono SVG + Categoría y Badge */}
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff6a00]/10 dark:from-[#ff6a00]/20 via-slate-100 dark:via-white/[0.04] to-transparent border border-[#ff6a00]/20 dark:border-[#ff6a00]/30 p-2.5 flex items-center justify-center text-[#ea580c] dark:text-[#ff7d1a] shadow-inner group-hover:scale-105 group-hover:border-[#ff6a00]/60 transition-all duration-300">
                  {getProductIcon(item.id, "w-full h-full text-[#ff6a00]")}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 dark:text-yellow-300">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#ea580c] dark:group-hover:text-[#ff7d1a] transition-colors leading-snug">
                    {item.name}
                  </h4>
                </div>
              </div>

              {/* Marca recomendada */}
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pl-0.5">
                <span>Marcas sugeridas:</span>
                <span className="text-slate-700 dark:text-slate-200 font-medium">{item.brand}</span>
              </div>

              {/* Cantidad Calculada */}
              <div className="rounded-2xl border border-[#ff6a00]/25 dark:border-[#ff6a00]/30 bg-orange-500/5 dark:bg-gradient-to-r dark:from-[#ff6a00]/15 dark:via-[#ff6a00]/10 dark:to-transparent p-3.5 shadow-sm">
                <span className="text-[10px] uppercase font-black tracking-wider text-[#ea580c] dark:text-[#ff7d1a] block mb-1">
                  Cantidad calculada para tu espacio ({surfaces.totalM2} m²):
                </span>
                <p className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#ff6a00] flex-shrink-0" />
                  <span>{item.quantityLabel}</span>
                </p>
              </div>

              {/* Tagline */}
              <p className="text-xs text-slate-600 dark:text-slate-300/90 leading-relaxed min-h-[38px] pt-1">
                {item.tagline}
              </p>

              {/* Ratings & Precio Estimado */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] px-2.5 py-1 rounded-lg border border-slate-200 dark:border-white/5">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{item.rating}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">({item.reviewsCount})</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium">Estimado Mercado Libre</span>
                  <span className="text-xs font-black text-slate-900 dark:text-white tracking-wide">{item.estimatedPrice}</span>
                </div>
              </div>
            </div>

            {/* Botón de Afiliado Mercado Libre */}
            <div className="mt-6 pt-2">
              <a
                href={item.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#ffe600] px-4 text-xs font-black text-slate-900 shadow-lg shadow-yellow-500/15 transition-all hover:bg-[#fff04d] hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingCart className="h-4 w-4 text-slate-900" />
                <span>Comprar en Mercado Libre</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-900/80 ml-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

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
