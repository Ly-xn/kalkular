import React from 'react';
import { ShieldCheck, Calculator, TrendingUp, Layers } from 'lucide-react';

export function TransparencySection() {
  return (
    <section id="transparencia" className="scroll-mt-24 py-16 md:py-24 border-t border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-[#080b11] relative overflow-hidden transition-colors">
      
      {/* Background Subtle Mesh */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#ff6a00]/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/10 px-3.5 py-1 text-xs font-bold text-[#ea580c] dark:text-[#ff7d1a] uppercase tracking-wider mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-[#ff6a00]" />
            100% Transparencia & Metodología Abierta
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            ¿Cómo calculamos tu presupuesto?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 leading-relaxed">
            Eliminamos la incertidumbre de no saber cuánto cuesta un trabajo. Te mostramos las fórmulas matemáticas, los costos testigo de mano de obra y los rendimientos oficiales de fábrica.
          </p>
        </div>

        {/* 3 Pilares de Transparencia */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          
          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/70 p-6 backdrop-blur-md shadow-sm dark:shadow-none transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff6a00]/15 text-[#ff7d1a] mb-4">
              <Calculator className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">1. Medición Neta Real</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Calculamos el perímetro multiplicado por la altura y <strong className="text-slate-800 dark:text-slate-200">descontamos puertas y ventanas</strong>. No te cobramos por pintar el aire ni por vanos que no llevan pintura.
            </p>
            <div className="mt-4 rounded-xl bg-orange-500/10 dark:bg-white/5 p-3 text-[11px] font-mono text-[#c2410c] dark:text-[#ffb480]">
              Área Neta = (2 × (L + A) × Alto) - Aberturas
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/70 p-6 backdrop-blur-md shadow-sm dark:shadow-none transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15 dark:bg-yellow-400/15 text-amber-600 dark:text-yellow-400 mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">2. Tarifas Testigo por m²</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Monitoreamos los valores promedio cobrados por pintores matriculados y particulares en Argentina: entre <strong className="text-slate-800 dark:text-slate-200">$3.500 y $6.000 ARS/m²</strong> para dos manos terminadas.
            </p>
            <div className="mt-4 rounded-xl bg-amber-500/10 dark:bg-white/5 p-3 text-[11px] font-mono text-amber-700 dark:text-yellow-300">
              Promedio recomendado: $4.500/m² (ARS)
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/70 p-6 backdrop-blur-md shadow-sm dark:shadow-none transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mb-4">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">3. Rendimiento de Fábrica</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Usamos la norma técnica de marcas líderes (Alba, Sherwin, Tersuave): <strong className="text-slate-800 dark:text-slate-200">5.5 m² por litro terminado</strong> (2 manos). Así evitás comprar latas de más.
            </p>
            <div className="mt-4 rounded-xl bg-emerald-500/10 dark:bg-white/5 p-3 text-[11px] font-mono text-emerald-700 dark:text-emerald-300">
              Litros = ⌈(Metros² × 2 Manos) ÷ 11⌉
            </div>
          </div>

        </div>

        {/* Tabla Comparativa de Dificultades */}
        <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/50 p-6 md:p-8 backdrop-blur-xl shadow-sm dark:shadow-none transition-colors">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            ¿Por qué algunas paredes tienen costo extra?
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
            El 60% del trabajo de pintura es la preparación previa. Estos son los costos justos adicionales según el estado:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                  <th className="pb-3 font-semibold">Estado de la pared / Tarea</th>
                  <th className="pb-3 font-semibold">¿Qué trabajo requiere?</th>
                  <th className="pb-3 font-semibold">Material indispensable</th>
                  <th className="pb-3 font-semibold text-right">Incidencia en precio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="py-3 font-bold text-slate-900 dark:text-white">Pared en buen estado</td>
                  <td className="py-3">Lijado superficial y 2 manos de látex</td>
                  <td className="py-3">Látex interior mate</td>
                  <td className="py-3 text-right text-emerald-600 dark:text-emerald-400 font-semibold">Tarifa base (1.0x)</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-slate-900 dark:text-white">Grietas y agujeros de tacos</td>
                  <td className="py-3">Apertura de fisuras, enduido y lijado</td>
                  <td className="py-3">Enduido plástico + Lija 120</td>
                  <td className="py-3 text-right text-[#ea580c] dark:text-[#ff7d1a] font-semibold">+$1.500/m²</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-slate-900 dark:text-white">Enduido total (Planchado)</td>
                  <td className="py-3">Alisado en 2 manos a llana de toda la pared</td>
                  <td className="py-3">Balde 20kg enduido + Fijador</td>
                  <td className="py-3 text-right text-[#ea580c] dark:text-[#ff7d1a] font-semibold">+$5.500/m²</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-slate-900 dark:text-white">Manchas de humedad / Moho</td>
                  <td className="py-3">Desinfección fungicida + fijador aguarrás</td>
                  <td className="py-3">Líquido antihongos + Fijador</td>
                  <td className="py-3 text-right text-[#ea580c] dark:text-[#ff7d1a] font-semibold">+$2.000/m²</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-slate-900 dark:text-white">Pintura descascarada</td>
                  <td className="py-3">Raspado intenso a espátula antes de pintar</td>
                  <td className="py-3">Espátula + Fijador sellador</td>
                  <td className="py-3 text-right text-[#ea580c] dark:text-[#ff7d1a] font-semibold">+$2.500/m²</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-slate-900 dark:text-white">Techo / Cielorraso</td>
                  <td className="py-3">Dificultad postural y pintura especial mate</td>
                  <td className="py-3">Látex cielorraso antihongo</td>
                  <td className="py-3 text-right text-amber-600 dark:text-yellow-400 font-semibold">+18% a +25%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
