import React from 'react';
import { PRICING_CONFIG, REJAS_PRICING_CONFIG } from '../../config/pricing.config.js';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Droplets, 
  Layers, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  ShoppingBag, 
  Building2, 
  PackageCheck,
  Flame,
  Wrench,
  Eye
} from 'lucide-react';

export function StepConditions({ inputs, onChangeInputs, onPrevStep, onCalculate }) {
  const isRejas = inputs.jobCategory === 'rejas';

  // Manejadores para paredes
  const { conditionSurcharges } = PRICING_CONFIG;

  const toggleWallCondition = (id) => {
    let current = [...(inputs.selectedConditions || [])];
    if (current.includes(id)) {
      current = current.filter(c => c !== id);
    } else {
      current.push(id);
    }
    onChangeInputs({ selectedConditions: current });
  };

  const getWallConditionIcon = (id) => {
    switch (id) {
      case 'minorCracks': return AlertTriangle;
      case 'fullEnduido': return Layers;
      case 'moldMoisture': return Droplets;
      case 'peelingPaint': return Sparkles;
      case 'highCeiling': return Building2;
      case 'furnishedRoom': return PackageCheck;
      default: return CheckCircle2;
    }
  };

  const isWallConditionSelected = (id) => (inputs.selectedConditions || []).includes(id);

  // Manejadores para herrería y rejas
  const { difficultySurcharges } = REJAS_PRICING_CONFIG;

  const toggleRejaEnvironment = (id) => {
    let current = [...(inputs.rejaEnvironments || [])];
    if (current.includes(id)) {
      current = current.filter(e => e !== id);
    } else {
      current.push(id);
    }
    onChangeInputs({ rejaEnvironments: current });
  };

  const isRejaEnvSelected = (id) => (inputs.rejaEnvironments || []).includes(id);

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header del Paso */}
      <div className="text-center max-w-xl mx-auto">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff6a00]/10 border border-[#ff6a00]/25 px-3 py-1 text-xs font-bold text-[#ea580c] dark:text-[#ff7d1a] uppercase tracking-wider mb-2">
          Paso 2 de 3
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
          {isRejas ? 'Estado de la Reja o Portón & Dificultades' : 'Estado de las Paredes & Dificultades'}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm mt-1">
          {isRejas
            ? 'El 70% del tiempo en herrería se destina al desoxidado y preparación de barrotes. Marcá el estado real para un presupuesto exacto.'
            : 'Marcá las tareas de preparación necesarias para obtener un presupuesto 100% exacto.'}
        </p>
      </div>

      {/* RENDER CONDICIONES: PAREDES */}
      {!isRejas && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {Object.values(conditionSurcharges).map((cond) => {
            const Icon = getWallConditionIcon(cond.id);
            const active = isWallConditionSelected(cond.id);

            return (
              <div
                key={cond.id}
                onClick={() => toggleWallCondition(cond.id)}
                className={`group flex items-start gap-4 p-4 md:p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                  active
                    ? 'border-[#ff6a00] bg-gradient-to-r from-[#ff6a00]/10 to-amber-500/5 dark:from-[#ff6a00]/15 dark:to-[#131b2e] shadow-[0_4px_20px_-5px_rgba(255,106,0,0.3)] dark:shadow-[0_0_25px_-5px_rgba(255,106,0,0.4)] scale-[1.01]'
                    : 'border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#111726]/60 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-[#111726]/90 shadow-sm dark:shadow-none'
                }`}
              >
                <div className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                  active ? 'bg-[#ff6a00] text-white shadow-md shadow-[#ff6a00]/40' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {cond.label}
                    </h3>
                    <div className={`h-5 w-5 rounded-lg border flex items-center justify-center transition-all ${
                      active ? 'border-[#ff6a00] bg-[#ff6a00] text-white' : 'border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5'
                    }`}>
                      {active && <CheckCircle2 className="h-3.5 w-3.5" />}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {cond.description}
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[10px] font-mono font-semibold text-[#ea580c] dark:text-[#ff7d1a] bg-[#ff6a00]/10 px-2 py-0.5 rounded border border-[#ff6a00]/20">
                      {cond.ratePerM2 ? `+$${cond.ratePerM2.toLocaleString('es-AR')}/m²` : `+${(cond.percentSurcharge * 100)}% mano de obra`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* RENDER DIFICULTADES: REJAS Y PORTONES */}
      {isRejas && (
        <div className="space-y-8">
          
          {/* 1. Nivel de Oxidación (Semáforo) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-[#ea580c] dark:text-[#ff7d1a]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                1. Nivel de Oxidación y Deterioro
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Seleccioná el estado predominante del metal para estimar las horas de raspado y convertidor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {Object.values(difficultySurcharges.rustState).map((item) => {
                const isSelected = (inputs.rejaRust || 'light') === item.id;
                
                // Colores semáforo
                const colorBorder = item.id === 'light' 
                  ? (isSelected ? 'border-emerald-500 bg-emerald-500/10' : 'hover:border-emerald-400/40') 
                  : (item.id === 'medium' 
                      ? (isSelected ? 'border-amber-500 bg-amber-500/10' : 'hover:border-amber-400/40')
                      : (isSelected ? 'border-rose-500 bg-rose-500/10' : 'hover:border-rose-400/40'));

                const badgeBg = item.id === 'light'
                  ? 'bg-emerald-500 text-white'
                  : (item.id === 'medium' ? 'bg-amber-500 text-white' : 'bg-rose-500 text-white');

                return (
                  <div
                    key={item.id}
                    onClick={() => onChangeInputs({ rejaRust: item.id })}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? `${colorBorder} shadow-md scale-[1.02]`
                        : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${badgeBg}`}>
                        {item.badge}
                      </span>
                      {isSelected && <CheckCircle2 className="h-4 w-4 text-[#ff6a00]" />}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.label}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Complejidad del Diseño de Herrería */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Wrench className="h-4 w-4 text-[#ea580c] dark:text-[#ff7d1a]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                2. Estilo y Diseño de los Barrotes
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              La cantidad de nudos, curvas y recovecos quintuplica el tiempo de pincelado por barrote.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {Object.values(difficultySurcharges.designComplexity).map((item) => {
                const isSelected = (inputs.rejaDesign || 'straight') === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => onChangeInputs({ rejaDesign: item.id })}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#ff6a00] bg-[#ff6a00]/10 shadow-md scale-[1.02]'
                        : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-[#ff6a00]/40 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c] dark:text-[#ff7d1a] bg-[#ff6a00]/10 px-2 py-0.5 rounded border border-[#ff6a00]/20">
                        {item.badge}
                      </span>
                      {isSelected && <CheckCircle2 className="h-4 w-4 text-[#ff6a00]" />}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.label}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Accesibilidad y Entorno (Opciones adicionales) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-[#ea580c] dark:text-[#ff7d1a]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                3. Accesibilidad y Factores de Entorno
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Marcá si el trabajo presenta complejidades posturales, altura o cercanía extrema con cristales.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {['heightOrBalcony', 'tightGlassAccess'].map((envId) => {
                const item = difficultySurcharges.environment[envId];
                const isSelected = isRejaEnvSelected(envId);

                return (
                  <div
                    key={envId}
                    onClick={() => toggleRejaEnvironment(envId)}
                    className={`group flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'border-[#ff6a00] bg-[#ff6a00]/10 shadow-md scale-[1.01]'
                        : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {item.label}
                        </h4>
                        <div className={`h-5 w-5 rounded-lg border flex items-center justify-center transition-all ${
                          isSelected ? 'border-[#ff6a00] bg-[#ff6a00] text-white' : 'border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5'
                        }`}>
                          {isSelected && <CheckCircle2 className="h-3.5 w-3.5" />}
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-2">
                        <span className="text-[10px] font-mono font-semibold text-[#ea580c] dark:text-[#ff7d1a] bg-[#ff6a00]/10 px-2 py-0.5 rounded border border-[#ff6a00]/20">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* Selector Común: ¿Quién compra los materiales? */}
      <div className="rounded-3xl border border-slate-200 dark:border-white/15 bg-slate-100/90 dark:bg-gradient-to-b dark:from-[#131b2e] dark:to-[#0d1322] p-6 shadow-md dark:shadow-xl transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 dark:bg-yellow-400/10 text-amber-600 dark:text-yellow-400 border border-amber-400/30 dark:border-yellow-400/20">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">¿Quién se encarga de comprar los materiales?</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">Elegí la modalidad para personalizar el desglose de tu presupuesto</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Opción 1: El cliente compra en Mercado Libre */}
          <div
            onClick={() => onChangeInputs({ materialsBuyer: 'client' })}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              inputs.materialsBuyer === 'client'
                ? 'border-amber-400 dark:border-yellow-400/80 bg-amber-500/10 dark:bg-yellow-400/10 shadow-[0_0_20px_-5px_rgba(245,158,11,0.25)] dark:shadow-[0_0_25px_-5px_rgba(250,204,21,0.25)]'
                : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-[#ffe600]">
                ⭐ Recomendado para ahorrar
              </span>
              <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                inputs.materialsBuyer === 'client' ? 'border-amber-500 bg-amber-500 dark:border-yellow-400 dark:bg-yellow-400' : 'border-slate-300 dark:border-white/20'
              }`}>
                {inputs.materialsBuyer === 'client' && <div className="h-2 w-2 rounded-full bg-white dark:bg-slate-900" />}
              </div>
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Compro yo los materiales (Mercado Libre)</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              Pagás en cuotas, elegís tus marcas preferidas y te las envían a domicilio. Te damos la lista exacta de productos recomendados.
            </p>
          </div>

          {/* Opción 2: El pintor compra los materiales */}
          <div
            onClick={() => onChangeInputs({ materialsBuyer: 'painter' })}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              inputs.materialsBuyer === 'painter'
                ? 'border-[#ff6a00] bg-[#ff6a00]/10 shadow-[0_0_20px_-5px_rgba(255,106,0,0.25)] dark:shadow-[0_0_25px_-5px_rgba(255,106,0,0.3)]'
                : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-slate-300 dark:hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Modalidad Llave en Mano
              </span>
              <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                inputs.materialsBuyer === 'painter' ? 'border-[#ff6a00] bg-[#ff6a00]' : 'border-slate-300 dark:border-white/20'
              }`}>
                {inputs.materialsBuyer === 'painter' && <div className="h-2 w-2 rounded-full bg-white dark:bg-slate-900" />}
              </div>
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">El pintor se encarga de todo</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              El profesional compra la pintura y traslada los insumos a la obra. Incluye recargo por acarreo y logística de compra.
            </p>
          </div>
        </div>
      </div>

      {/* Botones Navegación */}
      <div className="flex items-center justify-between pt-4">
        <button
          type="button"
          onClick={onPrevStep}
          className="flex items-center gap-2 rounded-2xl border border-slate-300 dark:border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver al Paso 1</span>
        </button>

        <button
          type="button"
          onClick={onCalculate}
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff6a00] to-[#ea580c] px-8 py-3.5 text-sm font-black text-white shadow-[0_0_30px_-5px_rgba(255,106,0,0.6)] transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
        >
          <Sparkles className="h-4 w-4" />
          <span>Ver Mi Presupuesto & Materiales</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
