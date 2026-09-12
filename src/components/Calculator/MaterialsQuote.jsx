import React from 'react';
import { ShoppingCart, ExternalLink, Star, CheckCircle, Package, Sparkles, Tag, Shield } from 'lucide-react';

export function MaterialsQuote({ quoteData }) {
  const { materials, surfaces } = quoteData;

  return (
    <section id="materiales" className="mt-12 pt-10 border-t border-white/10 space-y-8 animate-fade-in">
      
      {/* Encabezado del Módulo de Materiales */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3.5 py-1 text-xs font-bold text-yellow-300 uppercase tracking-wider mb-2">
            <ShoppingCart className="h-3.5 w-3.5 text-[#ffe600]" />
            Catálogo & Afiliados Oficiales Mercado Libre
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white">
            Materiales Recomendados para tu Obra
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl">
            Calculamos las cantidades exactas para pintar <strong className="text-white font-semibold">{surfaces.totalM2} m²</strong> (2 manos completas). Comprá directo por Mercado Libre y recibí todo en tu puerta.
          </p>
        </div>

        {/* Total Estimado de Materiales */}
        <div className="rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 to-transparent p-4 text-left md:text-right min-w-[200px]">
          <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-wider">Costo Estimado Materiales</span>
          <p className="text-2xl font-black text-white mt-0.5">
            ~${materials.estimatedCost.toLocaleString('es-AR')} <span className="text-xs text-slate-400 font-normal">ARS</span>
          </p>
          <span className="text-[10px] text-slate-400">Precios promedio en Mercado Libre</span>
        </div>
      </div>

      {/* Resumen Rápido de Insumos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
          <p className="text-[11px] text-slate-400">Látex Paredes (2 manos)</p>
          <p className="text-sm font-bold text-white mt-1">{materials.wallPaintContainers.description}</p>
          <span className="text-[10px] text-[#ff7d1a]">~{materials.latexWallLiters} Litros netos</span>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
          <p className="text-[11px] text-slate-400">Pintura Cielorraso</p>
          <p className="text-sm font-bold text-white mt-1">{materials.ceilingPaintContainers.description}</p>
          <span className="text-[10px] text-slate-400">Antihongo Mate</span>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
          <p className="text-[11px] text-slate-400">Preparación & Masilla</p>
          <p className="text-sm font-bold text-white mt-1">
            {materials.enduidoKg > 0 ? `${materials.enduidoKg} kg Enduido` : 'Solo limpieza'}
          </p>
          <span className="text-[10px] text-slate-400">{materials.lijaSheets} pliegos de lija</span>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
          <p className="text-[11px] text-slate-400">Herramientas & Protección</p>
          <p className="text-sm font-bold text-white mt-1">1 Kit Pintor Completo</p>
          <span className="text-[10px] text-slate-400">{materials.cintaRolls} rollos cinta + plástico</span>
        </div>
      </div>

      {/* Grid del Catálogo de Productos con Enlaces de Afiliado */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {materials.itemsList.map((item, index) => (
          <div
            key={item.id || index}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111726]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-yellow-400/40 hover:bg-[#131b2e] hover:shadow-[0_15px_35px_-10px_rgba(250,204,21,0.15)]"
          >
            <div>
              {/* Header de Card: Categoría y Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {item.category}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-2 py-0.5 text-[10px] font-bold text-yellow-300">
                  {item.badge}
                </span>
              </div>

              {/* Título & Marca */}
              <h4 className="text-base font-bold text-white group-hover:text-yellow-300 transition-colors">
                {item.name}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Marca recomendada: <span className="text-slate-200 font-medium">{item.brand}</span>
              </p>

              {/* Cantidad Calculada para este usuario */}
              <div className="mt-3.5 rounded-xl border border-[#ff6a00]/30 bg-[#ff6a00]/10 p-2.5">
                <span className="text-[10px] uppercase font-bold text-[#ff7d1a] block">
                  Cantidad calculada para tu espacio:
                </span>
                <p className="text-xs font-black text-white mt-0.5 flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-[#ff6a00]" />
                  <span>{item.quantityLabel}</span>
                </p>
              </div>

              {/* Tagline / Ventaja Técnica */}
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                {item.tagline}
              </p>

              {/* Ratings & Precio Estimado */}
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center gap-1 text-xs text-slate-300">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{item.rating}</span>
                  <span className="text-[10px] text-slate-500">({item.reviewsCount})</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">Precio Ref.</span>
                  <span className="text-xs font-bold text-white">{item.estimatedPrice}</span>
                </div>
              </div>
            </div>

            {/* Botón de Afiliado Mercado Libre */}
            <div className="mt-5 pt-3">
              <a
                href={item.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#ffe600] px-4 text-xs font-black text-slate-900 shadow-md shadow-yellow-500/20 transition-all hover:bg-[#fff04d] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Comprar en Mercado Libre</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-900" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Informativo y Transparencia de Afiliación */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs text-slate-400 flex items-start gap-3">
        <Shield className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-slate-200">Aviso de Afiliación & Compras Seguras:</strong> En calidad de afiliados de Mercado Libre, podemos percibir una pequeña comisión por las compras realizadas a través de estos enlaces. Esto <strong className="text-white">no modifica ni aumenta en nada el precio final para vos</strong> y nos permite mantener esta calculadora técnica gratuita, libre de suscripciones y en constante actualización.
        </p>
      </div>

    </section>
  );
}
