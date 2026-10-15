import React from 'react';
import { Award, ExternalLink, ShoppingCart, Sparkles } from 'lucide-react';
import { BRAND_AFFILIATE_LINKS } from '../../config/affiliates.config.js';

export function BrandComparisonTable() {
  const brands = [
    {
      name: 'Alba',
      line: 'Albalatex Ultralavable / Mate',
      yieldM2: '5.5 a 6.0 m² / Litro',
      power: 'Premium (Alta Resistencia)',
      finish: 'Mate Antirreflejo / Satinado',
      sizes: 'Balde 20L · 10L · 4L',
      badge: 'Líder en Ventas',
      url: BRAND_AFFILIATE_LINKS.alba
    },
    {
      name: 'Sherwin Williams',
      line: 'Quantum / Loxon Interior',
      yieldM2: '5.0 a 5.5 m² / Litro',
      power: 'Alto Tránsito (Ultra Cubritivo)',
      finish: 'Mate Terciopelo / Satinado',
      sizes: 'Balde 20L · 10L · 4L',
      badge: 'Calidad Profesional',
      url: BRAND_AFFILIATE_LINKS.sherwinWilliams
    },
    {
      name: 'Tersuave',
      line: 'Tersilux / Lavable',
      yieldM2: '5.2 a 5.8 m² / Litro',
      power: 'Alta Lavabilidad con Fungicida',
      finish: 'Semi mate / Mate sedoso',
      sizes: 'Balde 20L · 10L · 4L',
      badge: 'Excelente Precio/Calidad',
      url: BRAND_AFFILIATE_LINKS.tersuave
    },
    {
      name: 'Casablanca',
      line: 'Pro Obra / Interior Clásico',
      yieldM2: '4.8 a 5.2 m² / Litro',
      power: 'Estándar para grandes superficies',
      finish: 'Mate uniforme',
      sizes: 'Balde 20L · 10L',
      badge: 'Opción Económica',
      url: BRAND_AFFILIATE_LINKS.casablanca
    }
  ];

  return (
    <section id="comparativa-marcas" className="py-16 md:py-20 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#080b11] transition-colors">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-bold text-amber-700 dark:text-yellow-400 uppercase tracking-wider mb-2.5">
            <Award className="h-3.5 w-3.5 text-amber-600 dark:text-yellow-400" />
            Normas Técnicas de Fábrica · Argentina
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            Comparativa de Rendimiento de Pinturas por Marca Líder
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
            Rendimiento real a 2 manos terminadas, poder cubritivo y presentaciones comerciales de las marcas más utilizadas en obras residenciales de Argentina.
          </p>
        </div>

        {/* Tabla Comparativa */}
        <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/80 shadow-sm dark:shadow-none overflow-hidden backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-slate-500 dark:text-slate-400">
                  <th className="py-4 px-4 md:px-6 font-bold">Marca & Línea Comercial</th>
                  <th className="py-4 px-3 md:px-4 font-bold text-center">Rendimiento (2 Manos)</th>
                  <th className="py-4 px-3 md:px-4 font-bold">Poder Cubritivo & Acabado</th>
                  <th className="py-4 px-3 md:px-4 font-bold">Presentación</th>
                  <th className="py-4 px-4 md:px-6 font-bold text-right">Mercado Libre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                {brands.map((b, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 md:px-6">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-slate-900 dark:text-white text-sm md:text-base">
                          {b.name}
                        </span>
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/15 text-amber-700 dark:text-yellow-400 border border-amber-400/30">
                          {b.badge}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {b.line}
                      </div>
                    </td>
                    <td className="py-4 px-3 md:px-4 text-center">
                      <span className="font-black text-[#ea580c] dark:text-[#ff7d1a] bg-orange-500/10 dark:bg-[#ff6a00]/15 px-2.5 py-1 rounded-lg text-xs md:text-sm inline-block">
                        {b.yieldM2}
                      </span>
                    </td>
                    <td className="py-4 px-3 md:px-4">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{b.power}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">{b.finish}</div>
                    </td>
                    <td className="py-4 px-3 md:px-4 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      {b.sizes}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-right">
                      <a
                        href={b.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#ffe600] text-slate-900 text-xs font-black shadow-xs hover:bg-[#fff04d] hover:scale-[1.03] transition-all cursor-pointer whitespace-nowrap"
                      >
                        <ShoppingCart className="h-3.5 w-3.5" />
                        <span>Ver en ML</span>
                        <ExternalLink className="h-3 w-3 opacity-75" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Consejo de compra rápida */}
          <div className="p-4 md:p-5 bg-amber-500/5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#ff6a00] flex-shrink-0" />
              <span>
                <strong>Regla de oro de rendimiento:</strong> Para calcular cuántos litros comprar, dividí los metros cuadrados totales por <strong>5.5</strong>. Comprar baldes de 20L reduce el costo por litro hasta un <strong>35%</strong>.
              </span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Precios con IVA incluido y envíos a todo el país
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
