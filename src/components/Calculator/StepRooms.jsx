import React, { useState } from 'react';
import { PRICING_CONFIG } from '../../config/pricing.config.js';
import { RoomMeasureModal } from './RoomMeasureModal.jsx';
import { Home, Bed, Bath, UtensilsCrossed, Maximize, Ruler, Sparkles, ArrowRight, Check } from 'lucide-react';

export function StepRooms({ inputs, onChangeInputs, onNextStep }) {
  const [modalOpen, setModalOpen] = useState(false);

  const getRoomIcon = (id) => {
    switch (id) {
      case 'room_small': return Bed;
      case 'room_medium': return Home;
      case 'room_large': return Maximize;
      case 'bathroom': return Bath;
      case 'kitchen': return UtensilsCrossed;
      default: return Ruler;
    }
  };

  const handleSelectRoom = (preset) => {
    if (preset.id === 'custom') {
      onChangeInputs({
        roomType: 'custom',
        useManualM2: true,
        // Si no tenía valor, le ponemos un valor por defecto
        manualM2: inputs.manualM2 || 40,
      });
    } else {
      onChangeInputs({
        roomType: preset.id,
        useManualM2: false,
        length: preset.length,
        width: preset.width,
        height: preset.height,
        openingsDeductionM2: preset.openingsDeductionM2,
        paintCeiling: preset.defaultCeiling,
      });
    }
  };

  const handleModalMeasurements = (measurements) => {
    onChangeInputs({
      roomType: 'custom',
      useManualM2: false,
      length: measurements.length,
      width: measurements.width,
      height: measurements.height,
      openingsDeductionM2: measurements.openingsDeductionM2,
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header del Paso */}
      <div className="text-center max-w-xl mx-auto">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff6a00]/10 border border-[#ff6a00]/25 px-3 py-1 text-xs font-bold text-[#ff7d1a] uppercase tracking-wider mb-2">
          Paso 1 de 3
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
          ¿Qué tipo de espacio vas a pintar?
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1">
          Elegí una medida estándar sugerida o introducí tus metros cuadrados exactos.
        </p>
      </div>

      {/* Grid de Ambientes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {PRICING_CONFIG.presetRooms.map((preset) => {
          const Icon = getRoomIcon(preset.id);
          const isSelected = inputs.roomType === preset.id;

          return (
            <div
              key={preset.id}
              onClick={() => handleSelectRoom(preset)}
              className={`group relative cursor-pointer rounded-2xl p-4 md:p-5 transition-all duration-300 border ${
                isSelected
                  ? 'border-[#ff6a00] bg-gradient-to-b from-[#ff6a00]/15 via-[#ff6a00]/5 to-transparent dark:to-[#131b2e] shadow-md shadow-orange-500/15 scale-[1.02]'
                  : 'border-slate-200/90 bg-white hover:border-[#ff6a00]/40 hover:bg-slate-50/80 shadow-xs dark:border-white/10 dark:bg-[#111726]/60 dark:hover:border-white/20 dark:hover:bg-[#111726]/90'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${
                  isSelected ? 'bg-[#ff6a00] text-white shadow-lg shadow-[#ff6a00]/40' : 'bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                  isSelected 
                    ? 'border-[#ff6a00]/40 bg-[#ff6a00]/20 text-[#ff7d1a]'
                    : 'border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400'
                }`}>
                  {preset.badge}
                </span>
              </div>

              {/* Titulo & Dimensiones */}
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center justify-between">
                <span>{preset.name}</span>
                {isSelected && <Check className="h-4 w-4 text-[#ff6a00]" />}
              </h3>
              <p className="text-xs text-[#ff7d1a] font-bold mt-0.5">
                {preset.dimensions}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                {preset.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Modo Manual o Personalizado */}
      {inputs.roomType === 'custom' && (
        <div className="rounded-3xl border border-slate-200/90 bg-slate-50/80 p-5 md:p-6 backdrop-blur-md dark:border-[#ff6a00]/30 dark:bg-[#131b2e]/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Ruler className="h-4 w-4 text-[#ff6a00]" />
                <span>Configuración de Metros Cuadrados</span>
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Podés ingresar el total de m² o usar medidas de largo, ancho y alto.
              </p>
            </div>

            {/* Switch: Ingreso directo de m² vs Medidas */}
            <div className="flex items-center gap-2 bg-slate-200/70 dark:bg-white/5 p-1 rounded-xl border border-slate-300/60 dark:border-white/10">
              <button
                type="button"
                onClick={() => onChangeInputs({ useManualM2: true })}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  inputs.useManualM2
                    ? 'bg-[#ff6a00] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                Ingresar m² directos
              </button>
              <button
                type="button"
                onClick={() => onChangeInputs({ useManualM2: false })}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  !inputs.useManualM2
                    ? 'bg-[#ff6a00] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                Largo x Ancho
              </button>
            </div>
          </div>

          {inputs.useManualM2 ? (
            <div className="mt-4 max-w-sm">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Total de Metros Cuadrados (m²) de pared a pintar:
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="4"
                  max="1000"
                  step="1"
                  value={inputs.manualM2 || ''}
                  onChange={(e) => onChangeInputs({ manualM2: Math.max(0, parseFloat(e.target.value) || 0) })}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-lg font-bold text-slate-900 shadow-inner focus:border-[#ff6a00] focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                  placeholder="Ej: 45"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                  m²
                </span>
              </div>
            </div>
          ) : (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1 font-medium">Largo (m)</label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.length || 4}
                  onChange={(e) => onChangeInputs({ length: parseFloat(e.target.value) || 0 })}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 focus:border-[#ff6a00] focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1 font-medium">Ancho (m)</label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.width || 3.5}
                  onChange={(e) => onChangeInputs({ width: parseFloat(e.target.value) || 0 })}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 focus:border-[#ff6a00] focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1 font-medium">Alto pared (m)</label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.height || 2.5}
                  onChange={(e) => onChangeInputs({ height: parseFloat(e.target.value) || 0 })}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 focus:border-[#ff6a00] focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-600 dark:text-slate-400 mb-1 font-medium">Descontar aberturas (m²)</label>
                <input
                  type="number"
                  step="0.5"
                  value={inputs.openingsDeductionM2 || 3}
                  onChange={(e) => onChangeInputs({ openingsDeductionM2: parseFloat(e.target.value) || 0 })}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 focus:border-[#ff6a00] focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Barra de Asistente de Medidas y Opción de Techo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Botón Asistente de Medición */}
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white shadow-xs p-4 text-left hover:border-[#ff6a00]/40 hover:bg-[#ff6a00]/5 transition-all group dark:border-white/10 dark:bg-white/[0.03] cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#ff7d1a] group-hover:bg-[#ff6a00] group-hover:text-white transition-colors dark:bg-white/5">
              <Ruler className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">¿No sabés cómo medir tus paredes?</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Abrir instructivo interactivo con resta de puertas y ventanas</p>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#ff6a00] transition-colors" />
        </button>

        {/* Toggle de Cielorraso / Techo */}
        <div
          onClick={() => onChangeInputs({ paintCeiling: !inputs.paintCeiling })}
          className={`flex items-center justify-between rounded-2xl border p-4 cursor-pointer transition-all shadow-xs ${
            inputs.paintCeiling
              ? 'border-[#ff6a00]/50 bg-[#ff6a00]/10'
              : 'border-slate-200/90 bg-white hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
              inputs.paintCeiling ? 'bg-[#ff6a00] text-white shadow-md shadow-orange-500/30' : 'bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400'
            }`}>
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">¿Pintar también el techo / cielorraso?</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Añade pintura látex especial antihongo mate</p>
            </div>
          </div>

          <div className={`h-6 w-11 rounded-full p-1 transition-colors ${
            inputs.paintCeiling ? 'bg-[#ff6a00]' : 'bg-slate-300 dark:bg-white/10'
          }`}>
            <div className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
              inputs.paintCeiling ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </div>
        </div>
      </div>

      {/* Botón Continuar */}
      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={onNextStep}
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff6a00] to-[#ea580c] px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_0_25px_-5px_rgba(255,106,0,0.5)] transition-all hover:scale-[1.03] active:scale-[0.98]"
        >
          <span>Siguiente: Estado de Paredes & Dificultades</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Modal Instructivo */}
      <RoomMeasureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onApplyMeasurements={handleModalMeasurements}
        initialValues={{
          length: inputs.length,
          width: inputs.width,
          height: inputs.height
        }}
      />
    </div>
  );
}
