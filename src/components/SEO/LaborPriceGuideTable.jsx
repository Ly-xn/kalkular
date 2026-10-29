import React from 'react';
import { Calendar, Info, Snowflake } from 'lucide-react';

export function LaborPriceGuideTable({ isAcMode = false }) {
  const paintLaborData = [
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

  const acLaborData = [
    {
      task: 'Instalación Split 2.250 a 3.000 Frigorías (2600W-3500W)',
      detail: 'Mano de obra matriculada, interconexión de hasta 3m y vacío con bomba',
      min: '$125.000',
      fair: '$155.000',
      max: '$195.000',
      unit: 'por equipo (hasta 3m caño)'
    },
    {
      task: 'Instalación Split 4.500 Frigorías (5100W-5300W)',
      detail: 'Para livings y ambientes medianos, cañería 1/4" y 1/2" con presurización',
      min: '$155.000',
      fair: '$190.000',
      max: '$240.000',
      unit: 'por equipo (hasta 3m caño)'
    },
    {
      task: 'Instalación Split 5.500 a 6.000 Frigorías (6500W)',
      detail: 'Equipos grandes para quinchos o locales comerciales, ménsula reforzada 52cm',
      min: '$185.000',
      fair: '$225.000',
      max: '$280.000',
      unit: 'por equipo (hasta 3m caño)'
    },
    {
      task: 'Metro lineal adicional de cañería (cobre + aislante + cable)',
      detail: 'Prolongación cuando las unidades superan los 3 metros básicos de distancia',
      min: '$30.000',
      fair: '$35.000 a $44.000',
      max: '$52.000',
      unit: 'por metro lineal extra (>3m)'
    },
    {
      task: 'Desinstalación de Split con recupero de gas (Pump down)',
      detail: 'Envasado del refrigerante R410A/R32 en el compresor para mudanza o recambio',
      min: '$75.000',
      fair: '$85.000',
      max: '$105.000',
      unit: 'por unidad desmontada'
    },
    {
      task: 'Trabajo en altura al vacío / Toma eléctrico dedicado 20A',
      detail: 'Instalación exterior sobre fachada sin balcón o armado de línea eléctrica 20A',
      min: '$45.000',
      fair: '$58.000 a $65.000',
      max: '$85.000',
      unit: 'adicional por tarea'
    }
  ];

  const laborData = isAcMode ? acLaborData : paintLaborData;

  return (
    <section id="precios-referencia" className="py-16 md:py-20 border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#0a0e17] transition-colors">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2.5 transition-colors ${
            isAcMode
              ? 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400'
              : 'border-[#ff6a00]/30 bg-[#ff6a00]/10 text-[#ea580c] dark:text-[#ff7d1a]'
          }`}>
            {isAcMode ? (
              <Snowflake className="h-3.5 w-3.5 text-sky-500" />
            ) : (
              <Calendar className="h-3.5 w-3.5 text-[#ff6a00]" />
            )}
            {isAcMode ? 'Tarifario Oficial CACAAV 2026/2027 · Argentina' : 'Valores Referenciales 2026 · Argentina'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            {isAcMode
              ? 'Costos Testigo de Instalación de Aire Acondicionado en Argentina (2026/2027)'
              : 'Costos Testigo de Mano de Obra de Pintura en Argentina'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
            {isAcMode
              ? 'Relevamiento actualizado de tarifas de mano de obra de técnicos matriculados (CACAAV) sin materiales. Referencia objetiva para comparar presupuestos.'
              : 'Relevamiento actualizado de tarifas de mercado por metro cuadrado y jornal. Una referencia objetiva para comparar presupuestos de pintores profesionales y evitar sobreprecios.'}
          </p>
        </div>

        {/* Contenedor de la Tabla */}
        <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/80 shadow-sm dark:shadow-none overflow-hidden backdrop-blur-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] text-slate-500 dark:text-slate-400">
                  <th className="py-4 px-4 md:px-6 font-bold">
                    {isAcMode ? 'Servicio Termomecánico / Capacidad' : 'Tarea de Pintura'}
                  </th>
                  <th className="py-4 px-3 md:px-4 font-bold text-center">Tarifa Mínima / Particular</th>
                  <th className={`py-4 px-3 md:px-4 font-bold text-center ${
                    isAcMode
                      ? 'bg-sky-500/10 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400'
                      : 'bg-orange-500/10 dark:bg-[#ff6a00]/15 text-[#ea580c] dark:text-[#ff7d1a]'
                  }`}>
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
                    <td className={`py-4 px-3 md:px-4 text-center font-black text-slate-900 dark:text-white border-x ${
                      isAcMode
                        ? 'bg-sky-500/5 dark:bg-sky-500/10 border-sky-500/20'
                        : 'bg-orange-500/5 dark:bg-[#ff6a00]/10 border-[#ff6a00]/20'
                    }`}>
                      <span className={`inline-block px-2.5 py-1 rounded-lg ${
                        isAcMode
                          ? 'bg-sky-500/15 text-sky-600 dark:text-sky-400'
                          : 'bg-[#ff6a00]/15 text-[#ea580c] dark:text-[#ff7d1a]'
                      }`}>
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
            <Info className={`h-4 w-4 flex-shrink-0 mt-0.5 sm:mt-0 ${isAcMode ? 'text-sky-500' : 'text-[#ff6a00]'}`} />
            <p className="leading-relaxed">
              {isAcMode ? (
                <>
                  <strong className="text-slate-700 dark:text-slate-200">Nota técnica CACAAV:</strong> Los valores corresponden a la mano de obra de instalación estándar sin el kit de materiales. Comprar el Kit de Instalación de Cobre de 3 metros por tu cuenta en Mercado Libre suele representar un ahorro del 25% al 35% frente al costo de insumos en obra.
                </>
              ) : (
                <>
                  <strong className="text-slate-700 dark:text-slate-200">Nota del mercado argentino:</strong> Los valores corresponden a mano de obra sin provisión de materiales. En trabajos en altura (más de 3 metros), escaleras caracol o departamentos con muebles pesados a mover suele aplicarse un recargo del 15% al 25%.
                </>
              )}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
