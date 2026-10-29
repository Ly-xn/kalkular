import React, { useState } from 'react';
import { ShieldCheck, Calculator, TrendingUp, Layers, Home, Shield, Sparkles, Snowflake, Sun, Wrench } from 'lucide-react';

export function TransparencySection({ isAcMode = false }) {
  const [activeTab, setActiveTab] = useState('walls'); // 'walls' | 'rejas'
  const [acActiveTab, setAcActiveTab] = useState('thermal'); // 'thermal' | 'install'

  return (
    <section id="transparencia" className="scroll-mt-24 py-16 md:py-24 border-t border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-[#080b11] relative overflow-hidden transition-colors">
      
      {/* Background Subtle Mesh */}
      <div className={`pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full blur-[120px] transition-colors duration-500 ${
        isAcMode ? 'bg-sky-500/10' : 'bg-[#ff6a00]/5'
      }`} />

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* Header con H2 Semántico */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-3 transition-colors ${
            isAcMode
              ? 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400'
              : 'border-[#ff6a00]/30 bg-[#ff6a00]/10 text-[#ea580c] dark:text-[#ff7d1a]'
          }`}>
            <ShieldCheck className={`h-3.5 w-3.5 ${isAcMode ? 'text-sky-500' : 'text-[#ff6a00]'}`} />
            {isAcMode
              ? '100% Transparencia · Normativa CACAAV & IRAM'
              : '100% Transparencia & Fórmulas de Fabricantes'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white leading-tight">
            {isAcMode
              ? 'Metodología de Balance Térmico por m³ y Tarifario Oficial CACAAV'
              : 'Metodología de Cálculo de Mano de Obra por m² y Rendimiento de Pintura'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 leading-relaxed">
            {isAcMode
              ? '¿Cómo calculamos tus frigorías y el costo de instalación? Eliminamos las estimaciones a ojo: aplicamos el cálculo volumétrico térmico en m³, las tablas de conversión a Watts y las tarifas testigo de técnicos matriculados en Argentina.'
              : '¿Cómo calculamos tu presupuesto? Eliminamos la incertidumbre de sobreprecios: te mostramos las fórmulas matemáticas, los costos testigo de mano de obra y los rendimientos oficiales de fábrica en Argentina.'}
          </p>
        </div>

        {/* 3 Pilares de Transparencia */}
        {isAcMode ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/70 p-6 backdrop-blur-md shadow-sm dark:shadow-none transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400 mb-4">
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">1. Balance Volumétrico Real</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Calculamos el volumen exacto (<strong className="text-slate-800 dark:text-slate-200">Largo × Ancho × Alto = m³</strong>) con base de 50 fg/m³ y ajustamos por exposición de techo y orientación solar.
              </p>
              <div className="mt-4 rounded-xl bg-sky-500/10 dark:bg-white/5 p-3 text-[11px] font-mono text-sky-700 dark:text-sky-300">
                FG = (m³ × 50) × Factor Sol/Techo
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/70 p-6 backdrop-blur-md shadow-sm dark:shadow-none transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">2. Tarifas Testigo CACAAV</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Relevamos los valores de técnicos matriculados en Argentina: desde <strong className="text-slate-800 dark:text-slate-200">$155.000 ARS</strong> en 2250/3000 fg hasta <strong className="text-slate-800 dark:text-slate-200">$225.000 ARS</strong> en 6000 fg.
              </p>
              <div className="mt-4 rounded-xl bg-blue-500/10 dark:bg-white/5 p-3 text-[11px] font-mono text-blue-700 dark:text-blue-300">
                3000fg: ~$155.000 · Caño extra: $35.000/m
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/70 p-6 backdrop-blur-md shadow-sm dark:shadow-none transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 mb-4">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">3. Mapeo Comercial Exacto</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Convertimos tus frigorías a Watts térmicos (<strong className="text-slate-800 dark:text-slate-200">1 fg = 1.163W</strong>) y te indicamos el diámetro exacto de caños de cobre (1/4 y 3/8 o 1/2).
              </p>
              <div className="mt-4 rounded-xl bg-cyan-500/10 dark:bg-white/5 p-3 text-[11px] font-mono text-cyan-700 dark:text-cyan-300">
                2250 · 3000 · 4500 · 6000 Frigorías
              </div>
            </div>

          </div>
        ) : (
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
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">2. Tarifas Testigo del Mercado</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Monitoreamos los valores promedio cobrados en Argentina: entre <strong className="text-slate-800 dark:text-slate-200">$3.500 y $6.000 ARS/m²</strong> en paredes, y <strong className="text-slate-800 dark:text-slate-200">$7.500 a $14.000 ARS/ml</strong> en herrería.
              </p>
              <div className="mt-4 rounded-xl bg-amber-500/10 dark:bg-white/5 p-3 text-[11px] font-mono text-amber-700 dark:text-yellow-300">
                Paredes: ~$4.500/m² · Rejas: ~$10.500/ml
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/70 p-6 backdrop-blur-md shadow-sm dark:shadow-none transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mb-4">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">3. Rendimiento de Fábrica</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Normas técnicas de marcas líderes (Alba, Sherwin, Tersuave): <strong className="text-slate-800 dark:text-slate-200">5.5 m² por litro</strong> en látex y <strong className="text-slate-800 dark:text-slate-200">5 ml por litro</strong> en esmalte 3 en 1. Evitás comprar de más.
              </p>
              <div className="mt-4 rounded-xl bg-emerald-500/10 dark:bg-white/5 p-3 text-[11px] font-mono text-emerald-700 dark:text-emerald-300">
                Látex: ~5.5 m²/L · Esmalte: ~5 ml/L (2 manos)
              </div>
            </div>

          </div>
        )}

        {/* Tabla Comparativa de Dificultades con Switch de Pestañas */}
        {isAcMode ? (
          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/50 p-6 md:p-8 backdrop-blur-xl shadow-sm dark:shadow-none transition-colors">
            
            {/* Header con Pestañas Climatización */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Snowflake className="h-5 w-5 text-sky-500" />
                  <span>¿Qué factores modifican las frigorías y el costo de instalación?</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {acActiveTab === 'thermal'
                    ? 'El calor que ingresa por el techo, las ventanas al sol y los artefactos internos exige mayor capacidad frigorífica:'
                    : 'La tarifa básica cubre hasta 3 metros de cañería en pared estándar. Estos son los adicionales de obra según CACAAV:'}
                </p>
              </div>

              {/* Pestañas: Carga Térmica vs Adicionales de Obra */}
              <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex-shrink-0 self-start sm:self-center shadow-inner">
                <button
                  type="button"
                  onClick={() => setAcActiveTab('thermal')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    acActiveTab === 'thermal'
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  <Sun className="h-3.5 w-3.5" />
                  <span>Carga Térmica (Frigorías)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setAcActiveTab('install')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    acActiveTab === 'install'
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  <Wrench className="h-3.5 w-3.5" />
                  <span>Adicionales de Obra (Instalación)</span>
                </button>
              </div>
            </div>

            {/* TABLA AC 1: CARGA TÉRMICA (FRIGORÍAS) */}
            {acActiveTab === 'thermal' && (
              <div className="overflow-x-auto animate-fade-in">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                      <th className="pb-3 font-semibold">Factor Térmico del Ambiente</th>
                      <th className="pb-3 font-semibold">Impacto físico en el recinto</th>
                      <th className="pb-3 font-semibold">Recomendación técnica</th>
                      <th className="pb-3 font-semibold text-right">Incidencia en Frigorías</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Losa cubierta (Piso intermedio)</td>
                      <td className="py-3">Otro departamento o piso climatizado arriba</td>
                      <td className="py-3">Cálculo estándar por volumen (50 fg/m³)</td>
                      <td className="py-3 text-right text-emerald-600 dark:text-emerald-400 font-semibold">Base (1.0x)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Losa expuesta al sol (Último piso)</td>
                      <td className="py-3">La terraza acumula radiación térmica toda la tarde</td>
                      <td className="py-3">Evitar equipos al límite; preferir Inverter</td>
                      <td className="py-3 text-right text-sky-600 dark:text-sky-400 font-semibold">+15% Frigorías</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Techo de chapa o machimbre</td>
                      <td className="py-3">Mayor transmisión térmica por radiación en verano</td>
                      <td className="py-3">Subir un escalón comercial si queda justo</td>
                      <td className="py-3 text-right text-sky-600 dark:text-sky-400 font-semibold">+25% Frigorías</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Sol directo Norte u Oeste / Ventanal</td>
                      <td className="py-3">Efecto invernadero por radiación solar de tarde</td>
                      <td className="py-3">Usar cortinas blackout + refuerzo térmico</td>
                      <td className="py-3 text-right text-sky-600 dark:text-sky-400 font-semibold">+15% Frigorías</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Cocina integrada / Monoambiente</td>
                      <td className="py-3">Calor latente de heladera, horno y hornallas</td>
                      <td className="py-3">Sumar carga fija calórica de artefactos</td>
                      <td className="py-3 text-right text-sky-600 dark:text-sky-400 font-semibold">+350 Frigorías</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Alta ocupación / Equipos electrónicos</td>
                      <td className="py-3">Más de 2 personas fijas o PC Gamer / Servidores</td>
                      <td className="py-3">+150 fg por persona extra / +300 fg electrónica</td>
                      <td className="py-3 text-right text-amber-600 dark:text-yellow-400 font-semibold">+300 Frigorías</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* TABLA AC 2: ADICIONALES DE OBRA (INSTALACIÓN) */}
            {acActiveTab === 'install' && (
              <div className="overflow-x-auto animate-fade-in space-y-4">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                      <th className="pb-3 font-semibold">Tarea o Dificultad en Obra</th>
                      <th className="pb-3 font-semibold">¿Qué trabajo técnico implica?</th>
                      <th className="pb-3 font-semibold">Insumo o Herramienta</th>
                      <th className="pb-3 font-semibold text-right">Valor Referencial CACAAV</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Instalación estándar (Hasta 3m caño)</td>
                      <td className="py-3">Amurado interior/exterior, interconexión y vacío con bomba</td>
                      <td className="py-3">Bomba de vacío + Manómetro</td>
                      <td className="py-3 text-right text-emerald-600 dark:text-emerald-400 font-semibold">$155.000 a $225.000</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Metro extra de cañería (&gt; 3 metros)</td>
                      <td className="py-3">Soldadura o prolongación de línea frigorífica y carga adicional</td>
                      <td className="py-3">Caño cobre + aislante + cable TPR</td>
                      <td className="py-3 text-right text-sky-600 dark:text-sky-400 font-semibold">+$35.000 a $44.000/m</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Trabajo en altura al vacío / fachada</td>
                      <td className="py-3">Colocación de unidad exterior sobre silleta, arnés o fachada sin balcón</td>
                      <td className="py-3">Arnés de seguridad + Ayudante</td>
                      <td className="py-3 text-right text-sky-600 dark:text-sky-400 font-semibold">+$65.000 ARS</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Pase en viga o muro de hormigón</td>
                      <td className="py-3">Perforación de pasamuros de 65mm en hormigón armado o pared &gt;30cm</td>
                      <td className="py-3">Mecha copa diamantada SDS Max</td>
                      <td className="py-3 text-right text-sky-600 dark:text-sky-400 font-semibold">+$38.000 ARS</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Desinstalación de equipo existente</td>
                      <td className="py-3">Recuperación de gas refrigerante al compresor (Pump down) y desmontaje</td>
                      <td className="py-3">Llaves Allen + Manómetro</td>
                      <td className="py-3 text-right text-sky-600 dark:text-sky-400 font-semibold">+$85.000 ARS</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Línea eléctrica dedicada + Térmica 20A</td>
                      <td className="py-3">Tendido de línea independiente con tomacorriente de 20A y llave térmica</td>
                      <td className="py-3">Térmica 20A + Cable 2.5mm²</td>
                      <td className="py-3 text-right text-amber-600 dark:text-yellow-400 font-semibold">+$58.000 ARS</td>
                    </tr>
                  </tbody>
                </table>

                <div className="pt-2">
                  <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-3 text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <Snowflake className="h-4 w-4 text-sky-500 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-slate-900 dark:text-white">Requisito de Garantía Oficial:</strong> Todos los fabricantes (BGH, Surrey, Samsung, LG, Philco) exigen instalar un mínimo de 3 metros de cañería de cobre y realizar vacío con bomba durante 15-20 minutos para mantener la garantía de fábrica.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/50 p-6 md:p-8 backdrop-blur-xl shadow-sm dark:shadow-none transition-colors">
            
            {/* Header con Pestañas */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#ff6a00]" />
                  <span>
                    {activeTab === 'walls' 
                      ? '¿Por qué algunas paredes tienen costo extra?' 
                      : '¿Por qué las rejas y portones tienen costos específicos?'}
                  </span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {activeTab === 'walls'
                    ? 'El 60% del trabajo de pintura es la preparación previa. Estos son los costos justos adicionales según el estado:'
                    : 'El 70% del tiempo en herrería se destina a la remoción mecánica de óxido y decapado barrote por barrote. Estos son los factores técnicos:'}
                </p>
              </div>

              {/* Pestañas: Paredes vs Rejas y Portones */}
              <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex-shrink-0 self-start sm:self-center shadow-inner">
                <button
                  type="button"
                  onClick={() => setActiveTab('walls')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'walls'
                      ? 'bg-[#ff6a00] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  <Home className="h-3.5 w-3.5" />
                  <span>Paredes</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('rejas')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'rejas'
                      ? 'bg-[#ff6a00] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  <Shield className="h-3.5 w-3.5" />
                  <span>Rejas y Portones</span>
                </button>
              </div>
            </div>

            {/* TABLA: PAREDES */}
            {activeTab === 'walls' && (
              <div className="overflow-x-auto animate-fade-in">
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
            )}

            {/* TABLA: REJAS Y PORTONES */}
            {activeTab === 'rejas' && (
              <div className="overflow-x-auto animate-fade-in space-y-4">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
                      <th className="pb-3 font-semibold">Estado de la reja / portón</th>
                      <th className="pb-3 font-semibold">¿Qué trabajo requiere?</th>
                      <th className="pb-3 font-semibold">Material indispensable</th>
                      <th className="pb-3 font-semibold text-right">Incidencia en precio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Reja en buen estado (Mantenimiento)</td>
                      <td className="py-3">Desengrase con aguarrás, lijado fino de anclaje y 2 manos</td>
                      <td className="py-3">Esmalte Sintético 3 en 1 + Aguarrás</td>
                      <td className="py-3 text-right text-emerald-600 dark:text-emerald-400 font-semibold">Tarifa base ($7.500/ml o $8.000/m²)</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Óxido medio / Ampollas</td>
                      <td className="py-3">Rasqueteo puntual, cepillado de alambre y convertidor en uniones</td>
                      <td className="py-3">Cepillo de acero + Convertidor</td>
                      <td className="py-3 text-right text-[#ea580c] dark:text-[#ff7d1a] font-semibold">+20% a +25%</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Óxido severo / Decapado</td>
                      <td className="py-3">Desbaste profundo con amoladora/disco flap, pasivador y 3 manos</td>
                      <td className="py-3">Disco Flap + Desoxidante fosfatizante</td>
                      <td className="py-3 text-right text-[#ea580c] dark:text-[#ff7d1a] font-semibold">+45% a +50%</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Barrotes torsionados o malla</td>
                      <td className="py-3">Recovecos complejos, metal desplegado o ángulos cerrados</td>
                      <td className="py-3">Pincel cerda pura virola 1</td>
                      <td className="py-3 text-right text-[#ea580c] dark:text-[#ff7d1a] font-semibold">+15% a +20%</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Herrería Artística Colonial</td>
                      <td className="py-3">Volutas, rulos, flores fundidas y detalles trabajados gota a gota</td>
                      <td className="py-3">Pinceles finos de precisión</td>
                      <td className="py-3 text-right text-[#ea580c] dark:text-[#ff7d1a] font-semibold">+35% a +40%</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Reja pegada al vidrio (&lt; 8cm)</td>
                      <td className="py-3">Poco espacio de maniobra, encintado perimetral contra cristales</td>
                      <td className="py-3">Cinta de enmascarar 24mm</td>
                      <td className="py-3 text-right text-amber-600 dark:text-yellow-400 font-semibold">+20% a +25%</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-bold text-slate-900 dark:text-white">Trabajo en altura / Balcón</td>
                      <td className="py-3">Trabajo sobre escaleras extensibles o baranda con vacío / andamio</td>
                      <td className="py-3">Escalera extensible / Andamio</td>
                      <td className="py-3 text-right text-amber-600 dark:text-yellow-400 font-semibold">+25% a +30%</td>
                    </tr>
                  </tbody>
                </table>

                <div className="pt-2">
                  <div className="rounded-xl border border-[#ff6a00]/20 bg-orange-500/5 p-3 text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <Shield className="h-4 w-4 text-[#ff6a00] flex-shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-slate-900 dark:text-white">Metodología "Lleno por Vacío":</strong> En rejas caladas no se descuentan los huecos entre barrotes, dado que pintar manualmente las 4 caras de cada caño o hierro compensa el área vacía del vano.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
