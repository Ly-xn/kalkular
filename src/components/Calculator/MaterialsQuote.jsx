import React from 'react';
import { ShoppingCart, ExternalLink, Star, CheckCircle, Package, Shield, Sparkles } from 'lucide-react';
import {
  getProductIcon,
  Latex20LIcon,
  LatexCeilingIcon,
  EnduidoPlasticoIcon,
  KitPintorIcon
} from './ProductIcons';

export function MaterialsQuote({ quoteData }) {
  const { materials, surfaces } = quoteData;

  return (
    <section id="materiales" className="mt-14 pt-12 border-t border-white/10 space-y-10 animate-fade-in">
      
      {/* Encabezado del Módulo de Materiales */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3.5 py-1 text-xs font-bold text-yellow-300 uppercase tracking-wider mb-2.5">
            <ShoppingCart className="h-3.5 w-3.5 text-[#ffe600]" />
            Catálogo & Afiliados Oficiales Mercado Libre
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white">
            Materiales Recomendados para tu Obra
          </h3>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Calculamos las cantidades exactas para pintar <strong className="text-white font-bold">{surfaces.totalM2} m²</strong> (2 manos completas). Comprá directo por Mercado Libre y recibí todo en tu puerta.
          </p>
        </div>

        {/* Total Estimado de Materiales */}
        <div className="rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 via-white/[0.02] to-transparent p-4 md:p-5 text-left md:text-right min-w-[220px] shadow-lg shadow-black/40">
          <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider block">Costo Estimado Materiales</span>
          <p className="text-2xl md:text-3xl font-black text-white mt-1">
            ~${materials.estimatedCost.toLocaleString('es-AR')} <span className="text-xs text-slate-400 font-normal">ARS</span>
          </p>
          <span className="text-[11px] text-slate-400 mt-0.5 block">Precios promedio en Mercado Libre</span>
        </div>
      </div>

      {/* Resumen Rápido de Insumos con Iconos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all hover:border-[#ff6a00]/30 hover:bg-white/[0.05]">
          <div className="w-11 h-11 rounded-xl bg-[#ff6a00]/15 border border-[#ff6a00]/30 p-2 flex items-center justify-center text-[#ff7d1a] flex-shrink-0">
            <Latex20LIcon className="w-full h-full" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] text-slate-400 truncate">Látex Paredes</p>
            <p className="text-xs sm:text-sm font-black text-white truncate mt-0.5">{materials.wallPaintContainers.description}</p>
            <span className="text-[10px] text-[#ff7d1a] font-semibold">~{materials.latexWallLiters}L netos</span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all hover:border-emerald-400/30 hover:bg-white/[0.05]">
          <div className="w-11 h-11 rounded-xl bg-emerald-400/15 border border-emerald-400/30 p-2 flex items-center justify-center text-emerald-400 flex-shrink-0">
            <LatexCeilingIcon className="w-full h-full" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] text-slate-400 truncate">Cielorraso</p>
            <p className="text-xs sm:text-sm font-black text-white truncate mt-0.5">{materials.ceilingPaintContainers.description}</p>
            <span className="text-[10px] text-emerald-400 font-semibold">Antihongo Mate</span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all hover:border-[#ff6a00]/30 hover:bg-white/[0.05]">
          <div className="w-11 h-11 rounded-xl bg-[#ff6a00]/15 border border-[#ff6a00]/30 p-2 flex items-center justify-center text-[#ff7d1a] flex-shrink-0">
            <EnduidoPlasticoIcon className="w-full h-full" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] text-slate-400 truncate">Preparación</p>
            <p className="text-xs sm:text-sm font-black text-white truncate mt-0.5">
              {materials.enduidoKg > 0 ? `${materials.enduidoKg} kg Enduido` : 'Superficie Lista'}
            </p>
            <span className="text-[10px] text-slate-400">{materials.lijaSheets} pliegos lija</span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex items-center gap-3.5 transition-all hover:border-yellow-400/30 hover:bg-white/[0.05]">
          <div className="w-11 h-11 rounded-xl bg-yellow-400/15 border border-yellow-400/30 p-2 flex items-center justify-center text-yellow-300 flex-shrink-0">
            <KitPintorIcon className="w-full h-full" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] text-slate-400 truncate">Kit Pintor</p>
            <p className="text-xs sm:text-sm font-black text-white truncate mt-0.5">1 Kit Completo</p>
            <span className="text-[10px] text-slate-400">{materials.cintaRolls} rollos + plástico</span>
          </div>
        </div>
      </div>

      {/* Grid del Catálogo de Productos con Iconos Vectoriales y Mayor Espaciado */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.itemsList.map((item, index) => (
          <div
            key={item.id || index}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111726]/90 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#ff6a00]/40 hover:bg-[#141d30] hover:shadow-[0_20px_45px_-12px_rgba(255,106,0,0.18)]"
          >
            <div className="space-y-4">
              
              {/* Header de la Card: Icono SVG + Categoría y Badge */}
              <div className="flex items-start gap-4">
                {/* Contenedor del Icono Vectorial SVG */}
                <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff6a00]/20 via-white/[0.04] to-transparent border border-[#ff6a00]/30 p-2.5 flex items-center justify-center text-[#ff7d1a] shadow-inner group-hover:scale-105 group-hover:border-[#ff6a00]/60 transition-all duration-300">
                  {getProductIcon(item.id, "w-full h-full text-[#ff6a00]")}
                </div>

                {/* Título & Categoría */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-2.5 py-0.5 text-[10px] font-bold text-yellow-300">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[#ff7d1a] transition-colors leading-snug">
                    {item.name}
                  </h4>
                </div>
              </div>

              {/* Marca recomendada */}
              <div className="text-xs text-slate-400 flex items-center gap-1.5 pl-0.5">
                <span className="text-slate-500">Marcas sugeridas:</span>
                <span className="text-slate-200 font-medium">{item.brand}</span>
              </div>

              {/* Cantidad Calculada para este usuario */}
              <div className="rounded-2xl border border-[#ff6a00]/30 bg-gradient-to-r from-[#ff6a00]/15 via-[#ff6a00]/10 to-transparent p-3.5 shadow-sm">
                <span className="text-[10px] uppercase font-black tracking-wider text-[#ff7d1a] block mb-1">
                  Cantidad calculada para tu espacio ({surfaces.totalM2} m²):
                </span>
                <p className="text-sm font-black text-white flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#ff6a00] flex-shrink-0" />
                  <span>{item.quantityLabel}</span>
                </p>
              </div>

              {/* Tagline / Ventaja Técnica con buena legibilidad */}
              <p className="text-xs text-slate-300/90 leading-relaxed min-h-[38px] pt-1">
                {item.tagline}
              </p>

              {/* Ratings & Precio Estimado */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/5">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{item.rating}</span>
                  <span className="text-[10px] text-slate-400">({item.reviewsCount})</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-medium">Estimado Mercado Libre</span>
                  <span className="text-xs font-black text-white tracking-wide">{item.estimatedPrice}</span>
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
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs text-slate-300 flex items-start gap-3.5 leading-relaxed">
        <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
        <p>
          <strong className="text-white">Aviso de Afiliación & Compras Seguras:</strong> En calidad de afiliados de Mercado Libre, podemos percibir una pequeña comisión por las compras realizadas a través de estos enlaces. Esto <strong className="text-white">no modifica ni aumenta en nada el precio final para vos</strong> y nos permite mantener esta calculadora técnica gratuita, libre de suscripciones y en constante actualización.
        </p>
      </div>

    </section>
  );
}
