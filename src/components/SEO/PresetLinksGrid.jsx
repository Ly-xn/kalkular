import React from 'react';
import { Home, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { PSEO_PAGES } from '../../config/pseo.config.js';

export function PresetLinksGrid({ currentPath }) {
  // Separar en Ambientes y Herrería/Guías
  const roomPages = PSEO_PAGES.filter(p => p.category === 'presupuesto' && !p.slug.includes('reja') && !p.slug.includes('porton'));
  const ironAndGuides = PSEO_PAGES.filter(p => p.slug.includes('reja') || p.slug.includes('porton') || p.category === 'precios');

  return (
    <section id="presupuestos-frecuentes" className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-[#070a10] transition-colors">
      <div className="mx-auto max-w-6xl px-4 md:px-8 space-y-12">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/10 px-3.5 py-1 text-xs font-bold text-[#ea580c] dark:text-[#ff7d1a] uppercase tracking-wider mb-2.5">
            <Sparkles className="h-3.5 w-3.5 text-[#ff6a00]" />
            Presupuestos Frecuentes · Guías Rápidas
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            Presupuestos por Ambiente y Herrería en Argentina
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
            Elegí tu tipo de espacio para ver al instante los metros cuadrados netos, baldes de pintura recomendados y costos testigo de mano de obra para 2026.
          </p>
        </div>

        {/* Grupo 1: Ambientes y Departamentos */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base md:text-lg">
            <Home className="h-5 w-5 text-[#ff6a00]" />
            <h3>Pintura de Habitaciones y Departamentos</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {roomPages.map((page) => {
              const isActive = currentPath === page.path;
              return (
                <a
                  key={page.slug}
                  href={page.path}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-4.5 transition-all duration-300 backdrop-blur-md cursor-pointer ${
                    isActive
                      ? 'border-[#ff6a00] bg-orange-500/10 shadow-md shadow-orange-500/10'
                      : 'border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/80 hover:border-[#ff6a00]/50 hover:bg-slate-50 dark:hover:bg-[#151c2e] hover:scale-[1.02] shadow-xs'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#ff6a00]/15 text-[#ea580c] dark:text-[#ff7d1a]">
                      {page.badge}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#ff6a00] transition-colors leading-snug">
                      {page.h1.replace(' en Argentina (2026)', '')}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                      Mano de obra promedio: <strong className="text-slate-700 dark:text-slate-300">{page.seoContent?.metrics?.laborFairPrice}</strong>
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-[#ea580c] dark:text-[#ff7d1a]">
                    <span>Ver presupuesto</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Grupo 2: Herrería, Portones y Tarifas */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base md:text-lg">
            <Shield className="h-5 w-5 text-amber-500 dark:text-yellow-400" />
            <h3>Pintura de Herrería, Portones y Guías de Precios</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ironAndGuides.map((page) => {
              const isActive = currentPath === page.path;
              return (
                <a
                  key={page.slug}
                  href={page.path}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-4.5 transition-all duration-300 backdrop-blur-md cursor-pointer ${
                    isActive
                      ? 'border-[#ff6a00] bg-orange-500/10 shadow-md shadow-orange-500/10'
                      : 'border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/80 hover:border-[#ff6a00]/50 hover:bg-slate-50 dark:hover:bg-[#151c2e] hover:scale-[1.02] shadow-xs'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/15 text-amber-700 dark:text-yellow-400 border border-amber-400/30">
                      {page.badge}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#ff6a00] transition-colors leading-snug">
                      {page.h1.replace(' en Argentina (2026)', '')}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                      Tarifa referencial: <strong className="text-slate-700 dark:text-slate-300">{page.seoContent?.metrics?.laborFairPrice}</strong>
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-[#ea580c] dark:text-[#ff7d1a]">
                    <span>Ver presupuesto</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
