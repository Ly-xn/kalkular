import React from 'react';
import { Calendar, Info } from 'lucide-react';

export function LaborPriceGuideTable() {
  const laborData = [
    {
      task: 'Pintura látex interior en paredes',
      detail: '2 manos terminadas, incluye recorte de bordes y lijado suave',
      min: '$3.500',
      fair: '$4.500',
      max: '$6.000',
      unit: 'por m² neto'
    },
    {
      task: 'Pintura látex en cielorrasos (antihongo)',
      detail: 'Ultra mate transpirable, mayor dificultad postural',
      min: '$4.200',
      fair: '$5.300',
      max: '$7.000',
      unit: 'por m² neto'
    },
    {
      task: 'Enduido completo (planchado de pared)',
      detail: 'Alisado total a llana en 2 manos finas + lijado orbital',
      min: '$4.500',
      fair: '$5.500',
      max: '$7.500',
      unit: 'por m² adicional'
    },
    {
      task: 'Tratamiento de manchas de humedad y moho',
      detail: 'Lavado fungicida profundo + mano de fijador al aguarrás',
      min: '$1.500',
      fair: '$2.000',
      max: '$3.200',
      unit: 'por m² adicional'
    },
    {
      task: 'Reja estándar / portón (esmalte 3 en 1)',
      detail: 'Desengrase, lijado/desoxidado y 2 manos a pincel',
      min: '$8.500',
      fair: '$10.500',
      max: '$14.000',
      unit: 'por metro lineal (ml)'
    },
    {
      task: 'Jornal pintor oficial calificado (8 horas)',
      detail: 'Jornada laboral completa para retoques o trabajos por día',
      min: '$32.000',
      fair: '$40.000',
      max: '$55.000',
      unit: 'por día de trabajo'
    }
  ];

  return (
    <section id="precios-referencia" className="py-16 md:py-20 border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#0a0e17] transition-colors">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/10 px-3.5 py-1 text-xs font-bold text-[#ea580c] dark:text-[#ff7d1a] uppercase tracking-wider mb-2.5">
            <Calendar className="h-3.5 w-3.5 text-[#ff6a00]" />
            Valores Referenciales 2026 · Argentina
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            Costos Testigo de Mano de Obra de Pintura en Argentina
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
            Relevamiento actualizado de tarifas de mercado por metro cuadrado y jornal. Una referencia objetiva para comparar presupuestos de pintores profesionales y evitar sobreprecios.
          </p>
        </div>

        {/* Contenedor de la Tabla */}
        <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/80 shadow-sm dark:shadow-none overflow-hidden backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-slate-500 dark:text-slate-400">
                  <th className="py-4 px-4 md:px-6 font-bold">Tarea de Pintura</th>
                  <th className="py-4 px-3 md:px-4 font-bold text-center">Tarifa Mínima / Particular</th>
                  <th className="py-4 px-3 md:px-4 font-bold text-center bg-orange-500/10 dark:bg-[#ff6a00]/15 text-[#ea580c] dark:text-[#ff7d1a]">
                    Tarifa Promedio Justa
                  </th>
                  <th className="py-4 px-3 md:px-4 font-bold text-center">Tarifa Empresa / Factura</th>
                  <th className="py-4 px-4 md:px-6 font-bold text-right">Unidad de Cobro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                {laborData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 md:px-6">
                      <div className="font-bold text-slate-900 dark:text-white">{row.task}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{row.detail}</div>
                    </td>
                    <td className="py-4 px-3 md:px-4 text-center font-medium text-slate-600 dark:text-slate-400">
                      {row.min} <span className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">ARS</span>
                    </td>
                    <td className="py-4 px-3 md:px-4 text-center font-black text-slate-900 dark:text-white bg-orange-500/5 dark:bg-[#ff6a00]/10 border-x border-[#ff6a00]/20">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-[#ff6a00]/15 text-[#ea580c] dark:text-[#ff7d1a]">
                        {row.fair} ARS
                      </span>
                    </td>
                    <td className="py-4 px-3 md:px-4 text-center font-medium text-slate-600 dark:text-slate-400">
                      {row.max} <span className="text-[10px] text-slate-400 dark:text-slate-500 font-normal">ARS</span>
                    </td>
                    <td className="py-4 px-4 md:px-6 text-right font-semibold text-slate-500 dark:text-slate-400">
                      {row.unit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nota al pie técnica */}
          <div className="p-4 md:p-5 bg-slate-50/90 dark:bg-white/[0.02] border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <Info className="h-4 w-4 text-[#ff6a00] flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong className="text-slate-700 dark:text-slate-200">Nota del mercado argentino:</strong> Los valores corresponden a mano de obra sin provisión de materiales. En trabajos en altura (más de 3 metros), escaleras caracol o departamentos con muebles pesados a mover suele aplicarse un recargo del 15% al 25%.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
