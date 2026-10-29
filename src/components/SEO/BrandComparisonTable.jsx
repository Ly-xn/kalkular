import React from 'react';
import { Award, ExternalLink, ShoppingCart, Sparkles, Snowflake } from 'lucide-react';
import { BRAND_AFFILIATE_LINKS, AC_BRAND_AFFILIATE_LINKS } from '../../config/affiliates.config.js';

export function BrandComparisonTable({ isAcMode = false }) {
  const paintBrands = [
    {
      name: 'Alba',
      line: 'Albalatex Ultralavable / Mate',
      col2: '5.5 a 6.0 m² / Litro',
      col3Title: 'Premium (Alta Resistencia)',
      col3Sub: 'Mate Antirreflejo / Satinado',
      col4: 'Balde 20L · 10L · 4L',
      badge: 'Líder en Ventas',
      url: BRAND_AFFILIATE_LINKS.alba
    },
    {
      name: 'Sherwin Williams',
      line: 'Quantum / Loxon Interior',
      col2: '5.0 a 5.5 m² / Litro',
      col3Title: 'Alto Tránsito (Ultra Cubritivo)',
      col3Sub: 'Mate Terciopelo / Satinado',
      col4: 'Balde 20L · 10L · 4L',
      badge: 'Calidad Profesional',
      url: BRAND_AFFILIATE_LINKS.sherwinWilliams
    },
    {
      name: 'Tersuave',
      line: 'Tersilux / Lavable',
      col2: '5.2 a 5.8 m² / Litro',
      col3Title: 'Alta Lavabilidad con Fungicida',
      col3Sub: 'Semi mate / Mate sedoso',
      col4: 'Balde 20L · 10L · 4L',
      badge: 'Excelente Precio/Calidad',
      url: BRAND_AFFILIATE_LINKS.tersuave
    },
    {
      name: 'Casablanca',
      line: 'Pro Obra / Interior Clásico',
      col2: '4.8 a 5.2 m² / Litro',
      col3Title: 'Estándar para grandes superficies',
      col3Sub: 'Mate uniforme',
      col4: 'Balde 20L · 10L',
      badge: 'Opción Económica',
      url: BRAND_AFFILIATE_LINKS.casablanca
    }
  ];

  const acBrands = [
    {
      name: 'BGH Silent Air',
      line: 'Línea Silent Air Inverter & On-Off Frío/Calor',
      col2: 'Inverter Clase A++ / On-Off Clase A',
      col3Title: 'Garantía oficial 3 años (Compresor)',
      col3Sub: 'Repuestos y servicio técnico en todo el país',
      col4: '2300 · 3000 · 4500 · 6000 fg',
      badge: 'Líder en Argentina',
      url: AC_BRAND_AFFILIATE_LINKS.bgh
    },
    {
      name: 'Surrey',
      line: 'Smart Inverter & Vida / Prius Series',
      col2: 'Smart Inverter / Alta durabilidad',
      col3Title: 'Respaldo Carrier Argentina',
      col3Sub: 'Serpentina de cobre y alta resistencia térmica',
      col4: '2250 · 3000 · 4500 · 6000 fg',
      badge: 'Calidad Termomecánica',
      url: AC_BRAND_AFFILIATE_LINKS.surrey
    },
    {
      name: 'Philco / Sansei',
      line: 'Eco Inverter & Split Tradicional Frío/Calor',
      col2: 'Eco Inverter & Tradicional',
      col3Title: 'Amplia red de service oficial',
      col3Sub: 'Garantía Newsan en toda la Argentina',
      col4: '2250 · 2900 · 4500 · 5500 fg',
      badge: 'Mejor Precio/Calidad',
      url: AC_BRAND_AFFILIATE_LINKS.philco
    },
    {
      name: 'Samsung / LG',
      line: 'WindFree Digital Inverter / Dual Cool Inverter',
      col2: 'WindFree / Dual Cool Inverter (40% ahorro)',
      col3Title: 'Compresor Digital Inverter 10 años',
      col3Sub: 'Control Wi-Fi SmartThings / ThinQ integrado',
      col4: '3000 · 4500 · 6000 fg',
      badge: 'Tecnología Premium',
      url: AC_BRAND_AFFILIATE_LINKS.samsung
    }
  ];

  const brands = isAcMode ? acBrands : paintBrands;

  return (
    <section id="comparativa-marcas" className="py-16 md:py-20 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#080b11] transition-colors">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2.5 transition-colors ${
            isAcMode
              ? 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400'
              : 'border-amber-400/30 bg-amber-400/10 text-amber-700 dark:text-yellow-400'
          }`}>
            <Award className={`h-3.5 w-3.5 ${isAcMode ? 'text-sky-500' : 'text-amber-600 dark:text-yellow-400'}`} />
            {isAcMode ? 'Eficiencia Energética IRAM · Argentina' : 'Normas Técnicas de Fábrica · Argentina'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            {isAcMode
              ? 'Comparativa de Aires Acondicionados por Marca Líder en Argentina'
              : 'Comparativa de Rendimiento de Pinturas por Marca Líder'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
            {isAcMode
              ? 'Eficiencia energética (Inverter Clase A++ vs On/Off), respaldo de garantía oficial, disponibilidad de repuestos y capacidades comerciales de las marcas más confiables del país.'
              : 'Rendimiento real a 2 manos terminadas, poder cubritivo y presentaciones comerciales de las marcas más utilizadas en obras residenciales de Argentina.'}
          </p>
        </div>

        {/* Tabla Comparativa */}
        <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/80 shadow-sm dark:shadow-none overflow-hidden backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-slate-500 dark:text-slate-400">
                  <th className="py-4 px-4 md:px-6 font-bold">Marca & Línea Comercial</th>
                  <th className="py-4 px-3 md:px-4 font-bold text-center">
                    {isAcMode ? 'Eficiencia & Tecnología' : 'Rendimiento (2 Manos)'}
                  </th>
                  <th className="py-4 px-3 md:px-4 font-bold">
                    {isAcMode ? 'Garantía & Repuestos en Arg' : 'Poder Cubritivo & Acabado'}
                  </th>
                  <th className="py-4 px-3 md:px-4 font-bold">
                    {isAcMode ? 'Capacidades Populares' : 'Presentación'}
                  </th>
                  <th className="py-4 px-4 md:px-6 font-bold text-right">Mercado Libre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                {brands.map((b, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 md:px-6">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-extrabold text-slate-900 dark:text-white text-sm md:text-base">
                          {b.name}
                        </span>
                        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                          isAcMode
                            ? 'bg-sky-500/15 text-sky-600 dark:text-sky-300 border-sky-500/30'
                            : 'bg-amber-400/15 text-amber-700 dark:text-yellow-400 border-amber-400/30'
                        }`}>
                          {b.badge}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {b.line}
                      </div>
                    </td>
                    <td className="py-4 px-3 md:px-4 text-center">
                      <span className={`font-black px-2.5 py-1 rounded-lg text-xs md:text-sm inline-block ${
                        isAcMode
                          ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-500/15'
                          : 'text-[#ea580c] dark:text-[#ff7d1a] bg-orange-500/10 dark:bg-[#ff6a00]/15'
                      }`}>
                        {b.col2}
                      </span>
                    </td>
                    <td className="py-4 px-3 md:px-4">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">{b.col3Title}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">{b.col3Sub}</div>
                    </td>
                    <td className="py-4 px-3 md:px-4 text-xs text-slate-600 dark:text-slate-300 font-medium">
                      {b.col4}
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
          <div className={`p-4 md:p-5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-600 dark:text-slate-300 ${
            isAcMode ? 'bg-sky-500/5' : 'bg-amber-500/5'
          }`}>
            <div className="flex items-center gap-2">
              {isAcMode ? (
                <Snowflake className="h-4 w-4 text-sky-500 flex-shrink-0" />
              ) : (
                <Sparkles className="h-4 w-4 text-[#ff6a00] flex-shrink-0" />
              )}
              <span>
                {isAcMode ? (
                  <>
                    <strong>Regla de oro de eficiencia:</strong> Para uso mayor a 4 horas diarias en verano o invierno, un equipo <strong>Inverter Clase A++</strong> amortiza su diferencia de precio en menos de 2 temporadas gracias a un ahorro eléctrico del <strong>35% al 40%</strong>.
                  </>
                ) : (
                  <>
                    <strong>Regla de oro de rendimiento:</strong> Para calcular cuántos litros comprar, dividí los metros cuadrados totales por <strong>5.5</strong>. Comprar baldes de 20L reduce el costo por litro hasta un <strong>35%</strong>.
                  </>
                )}
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
