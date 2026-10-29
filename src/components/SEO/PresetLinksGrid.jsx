import React, { useState, useEffect } from 'react';
import { Home, Shield, Snowflake, ArrowRight, Sparkles, Paintbrush } from 'lucide-react';
import { PSEO_PAGES } from '../../config/pseo.config.js';

export function PresetLinksGrid({ currentPath, isAcMode = false }) {
  const [activeFilter, setActiveFilter] = useState(() => (isAcMode ? 'ac' : 'paint')); // 'paint' | 'ac' | 'all'

  // Sincronizar automáticamente la pestaña cuando cambia la categoría activa (Pintura/Rejas vs Aires)
  useEffect(() => {
    setActiveFilter(isAcMode ? 'ac' : 'paint');
  }, [isAcMode]);

  // Separar páginas de Pintura/Herrería vs Aires Acondicionados
  const acPages = PSEO_PAGES.filter(p => p.calculatorPreset?.jobCategory === 'ac');
  const paintPages = PSEO_PAGES.filter(p => p.calculatorPreset?.jobCategory !== 'ac');

  const roomPages = paintPages.filter(p => p.category === 'presupuesto' && !p.slug.includes('reja') && !p.slug.includes('porton'));
  const ironAndGuides = paintPages.filter(p => p.slug.includes('reja') || p.slug.includes('porton') || p.category === 'precios');

  const showPaint = activeFilter === 'all' || activeFilter === 'paint';
  const showAc = activeFilter === 'all' || activeFilter === 'ac';

  return (
    <section id="presupuestos-frecuentes" className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-[#070a10] transition-colors">
      <div className="mx-auto max-w-6xl px-4 md:px-8 space-y-12">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2.5 transition-colors ${
            isAcMode
              ? 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400'
              : 'border-[#ff6a00]/30 bg-[#ff6a00]/10 text-[#ea580c] dark:text-[#ff7d1a]'
          }`}>
            {isAcMode ? (
              <Snowflake className="h-3.5 w-3.5 text-sky-500" />
            ) : (
              <Sparkles className="h-3.5 w-3.5 text-[#ff6a00]" />
            )}
            Presupuestos Frecuentes · Guías Técnicas 2026
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            {isAcMode
              ? 'Calculadoras de Frigorías y Presupuestos de Climatización'
              : 'Calculadoras y Presupuestos de Obra en Argentina'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
            Explorá nuestras guías de precios y calculadoras pre-configuradas de <strong className="text-slate-800 dark:text-slate-200">Pintura, Herrería y Climatización (Frigorías e Instalación Split)</strong> con tarifas actualizadas a 2026.
          </p>

          {/* Pestañas de Filtro Rápido */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726] p-1.5 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveFilter('paint')}
              className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                activeFilter === 'paint'
                  ? 'bg-[#ff6a00] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-[#ff6a00]'
              }`}
            >
              <span>🎨 Presupuestos de Pintura y Herrería ({paintPages.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('ac')}
              className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                activeFilter === 'ac'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-sky-500'
              }`}
            >
              <span>❄️ Calculadoras de Frigorías y Aires ({acPages.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`rounded-xl px-4 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? isAcMode
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-[#ff6a00] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Ver Todos ({PSEO_PAGES.length})
            </button>
          </div>
        </div>

        {/* SECCIÓN CLIMATIZACIÓN (Primero si isAcMode, o después si Pintura) */}
        {isAcMode && showAc && (
          <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base md:text-lg">
                <Snowflake className="h-5 w-5 text-sky-500" />
                <h3>❄️ Calculadoras de Frigorías y Aires Acondicionados</h3>
              </div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
                Balance Térmico + Tarifas CACAAV 2026
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {acPages.map((page) => {
                const isActive = currentPath === page.path;
                return (
                  <a
                    key={page.slug}
                    href={page.path}
                    className={`group relative flex flex-col justify-between rounded-2xl border p-4.5 transition-all duration-300 backdrop-blur-md cursor-pointer ${
                      isActive
                        ? 'border-sky-500 bg-sky-500/10 shadow-md shadow-sky-500/10'
                        : 'border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/80 hover:border-sky-500/50 hover:bg-slate-50 dark:hover:bg-[#151c2e] hover:scale-[1.02] shadow-xs'
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/25">
                        {page.badge}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                        {page.h1.replace(' en Argentina (2026)', '').replace(' (2026)', '')}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                        Instalación ref.: <strong className="text-slate-700 dark:text-slate-300">{page.seoContent?.metrics?.laborFairPrice}</strong>
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400">
                      <span>Abrir calculadora</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* SECCIÓN PINTURA Y HERRERÍA */}
        {showPaint && (
          <>
            {/* Grupo 1: Ambientes y Departamentos */}
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base md:text-lg">
                  <Home className="h-5 w-5 text-[#ff6a00]" />
                  <h3>🎨 Presupuestos de Pintura: Habitaciones y Departamentos</h3>
                </div>
                <span className="text-xs font-bold text-[#ea580c] dark:text-[#ff7d1a] bg-[#ff6a00]/10 border border-[#ff6a00]/20 px-3 py-1 rounded-full">
                  Cómputo de m² y Litros de Látex
                </span>
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
                <h3>🛡️ Pintura de Herrería, Portones y Guías de Precios</h3>
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
          </>
        )}

        {/* SECCIÓN CLIMATIZACIÓN (Cuando no está en modo AC primero, se muestra acá) */}
        {!isAcMode && showAc && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-extrabold text-base md:text-lg">
                <Snowflake className="h-5 w-5 text-sky-500" />
                <h3>❄️ Calculadoras de Frigorías y Aires Acondicionados</h3>
              </div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
                Balance Térmico + Tarifas CACAAV 2026
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {acPages.map((page) => {
                const isActive = currentPath === page.path;
                return (
                  <a
                    key={page.slug}
                    href={page.path}
                    className={`group relative flex flex-col justify-between rounded-2xl border p-4.5 transition-all duration-300 backdrop-blur-md cursor-pointer ${
                      isActive
                        ? 'border-sky-500 bg-sky-500/10 shadow-md shadow-sky-500/10'
                        : 'border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/80 hover:border-sky-500/50 hover:bg-slate-50 dark:hover:bg-[#151c2e] hover:scale-[1.02] shadow-xs'
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/25">
                        {page.badge}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                        {page.h1.replace(' en Argentina (2026)', '').replace(' (2026)', '')}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                        Instalación ref.: <strong className="text-slate-700 dark:text-slate-300">{page.seoContent?.metrics?.laborFairPrice}</strong>
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400">
                      <span>Abrir calculadora</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
