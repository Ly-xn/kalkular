import React, { useState } from 'react';
import { PRICING_CONFIG, REJAS_PRICING_CONFIG } from '../../config/pricing.config.js';
import { RoomMeasureModal } from './RoomMeasureModal.jsx';
import { 
  Home, 
  Bed, 
  Bath, 
  UtensilsCrossed, 
  Maximize, 
  Ruler, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Shield, 
  Grid, 
  DoorClosed, 
  Warehouse, 
  Maximize2, 
  Sliders, 
  Plus, 
  Minus 
} from 'lucide-react';

export function StepRooms({ inputs, onChangeInputs, onNextStep }) {
  const [modalOpen, setModalOpen] = useState(false);
  const isRejas = inputs.jobCategory === 'rejas';

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

  const getRejaIcon = (id) => {
    switch (id) {
      case 'standard_window': return Grid;
      case 'door_grille': return DoorClosed;
      case 'garage_gate': return Warehouse;
      case 'balcony_window': return Maximize2;
      case 'perimeter_fence': return Ruler;
      case 'custom_grille': return Sliders;
      default: return Shield;
    }
  };

  const handleSelectRoom = (preset) => {
    if (preset.id === 'custom') {
      onChangeInputs({
        roomType: 'custom',
        useManualM2: true,
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

  const handleSelectReja = (preset) => {
    onChangeInputs({
      rejaType: preset.id,
    });
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

  const isFixedUnit = ['standard_window', 'door_grille', 'garage_gate', 'balcony_window'].includes(inputs.rejaType || 'standard_window');

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Selector Principal de Categoría de Trabajo: Paredes vs Rejas */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-inner max-w-full overflow-x-auto">
          <button
            type="button"
            onClick={() => onChangeInputs({ jobCategory: 'walls' })}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              !isRejas
                ? 'bg-[#ff6a00] text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            <Home className="h-4 w-4" />
            <span>Paredes y Cielorrasos</span>
          </button>
          
          <button
            type="button"
            onClick={() => onChangeInputs({ jobCategory: 'rejas' })}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              isRejas
                ? 'bg-[#ff6a00] text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            <Shield className="h-4 w-4" />
            <span>Rejas y Portones</span>
          </button>
        </div>
      </div>

      {/* Header del Paso */}
      <div className="text-center max-w-xl mx-auto">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff6a00]/10 border border-[#ff6a00]/25 px-3 py-1 text-xs font-bold text-[#ea580c] dark:text-[#ff7d1a] uppercase tracking-wider mb-2">
          Paso 1 de 3
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
          {isRejas ? '¿Qué tipo de herrería vas a pintar?' : '¿Qué tipo de espacio vas a pintar?'}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1">
          {isRejas
            ? 'Elegí el tipo de abertura, portón o cerco perimetral para calcular el desoxidado y esmalte 3 en 1.'
            : 'Elegí una medida estándar sugerida o introducí tus metros cuadrados exactos.'}
        </p>
      </div>

      {/* RENDER CATEGORÍA: PAREDES */}
      {!isRejas && (
        <>
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
                        ? 'border-[#ff6a00]/40 bg-[#ff6a00]/20 text-[#ea580c] dark:text-[#ff7d1a]'
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
                  <p className="text-xs text-[#ea580c] dark:text-[#ff7d1a] font-bold mt-0.5">
                    {preset.dimensions}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {preset.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Modo Manual o Personalizado para Paredes */}
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

          {/* Asistente de Medidas y Opción de Techo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white shadow-xs p-4 text-left hover:border-[#ff6a00]/40 hover:bg-[#ff6a00]/5 transition-all group dark:border-white/10 dark:bg-white/[0.03] cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#ea580c] dark:text-[#ff7d1a] group-hover:bg-[#ff6a00] group-hover:text-white transition-colors dark:bg-white/5">
                  <Ruler className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">¿No sabés cómo medir tus paredes?</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Abrir instructivo interactivo con resta de aberturas</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#ff6a00] transition-colors" />
            </button>

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
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Añade látex especial antihongo mate</p>
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
        </>
      )}

      {/* RENDER CATEGORÍA: REJAS Y PORTONES */}
      {isRejas && (
        <div className="space-y-6">
          {/* Grid de Herrería */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {REJAS_PRICING_CONFIG.modalities.fixedUnits.map((preset) => {
              const Icon = getRejaIcon(preset.id);
              const isSelected = (inputs.rejaType || 'standard_window') === preset.id;

              return (
                <div
                  key={preset.id}
                  onClick={() => handleSelectReja(preset)}
                  className={`group relative cursor-pointer rounded-2xl p-4 md:p-5 transition-all duration-300 border ${
                    isSelected
                      ? 'border-[#ff6a00] bg-gradient-to-b from-[#ff6a00]/15 via-[#ff6a00]/5 to-transparent dark:to-[#131b2e] shadow-md shadow-orange-500/15 scale-[1.02]'
                      : 'border-slate-200/90 bg-white hover:border-[#ff6a00]/40 hover:bg-slate-50/80 shadow-xs dark:border-white/10 dark:bg-[#111726]/60 dark:hover:border-white/20 dark:hover:bg-[#111726]/90'
                  }`}
                >
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${
                      isSelected ? 'bg-[#ff6a00] text-white shadow-lg shadow-[#ff6a00]/40' : 'bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                      isSelected 
                        ? 'border-[#ff6a00]/40 bg-[#ff6a00]/20 text-[#ea580c] dark:text-[#ff7d1a]'
                        : 'border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-400'
                    }`}>
                      {preset.badge}
                    </span>
                  </div>

                  {/* Título & Dimensiones */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>{preset.name}</span>
                    {isSelected && <Check className="h-4 w-4 text-[#ff6a00]" />}
                  </h3>
                  <p className="text-xs text-[#ea580c] dark:text-[#ff7d1a] font-bold mt-0.5">
                    {preset.dimensions}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {preset.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Selector de Cantidad para Aberturas Fijas */}
          {isFixedUnit && (
            <div className="rounded-2xl border border-slate-200/90 bg-white dark:border-white/10 dark:bg-white/[0.03] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  ¿Cuántas aberturas de este tipo vas a pintar?
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Podés sumar varias ventanas o puertas iguales para calcular la mano de obra y pintura total.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-slate-100 dark:bg-white/5 p-1.5 rounded-xl border border-slate-200 dark:border-white/10 self-start sm:self-center">
                <button
                  type="button"
                  onClick={() => onChangeInputs({ rejaQuantity: Math.max(1, (inputs.rejaQuantity || 1) - 1) })}
                  className="h-8 w-8 rounded-lg bg-white dark:bg-white/10 flex items-center justify-center text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-colors shadow-xs cursor-pointer"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-base font-black text-slate-900 dark:text-white min-w-[2.5rem] text-center">
                  {inputs.rejaQuantity || 1}
                </span>
                <button
                  type="button"
                  onClick={() => onChangeInputs({ rejaQuantity: (inputs.rejaQuantity || 1) + 1 })}
                  className="h-8 w-8 rounded-lg bg-[#ff6a00] text-white flex items-center justify-center hover:bg-[#ea580c] transition-colors shadow-xs cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Configuración para Reja Perimetral por Metros Lineales */}
          {inputs.rejaType === 'perimeter_fence' && (
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/80 p-5 md:p-6 backdrop-blur-md dark:border-[#ff6a00]/30 dark:bg-[#131b2e]/80">
              <div className="pb-3 border-b border-slate-200 dark:border-white/10 mb-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-[#ff6a00]" />
                  <span>Medidas de la Reja Perimetral / Frente</span>
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Cotización por metro lineal (ml) continuo. La altura estándar de referencia es de hasta 1.50m.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Longitud total de reja (Metros lineales):
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="500"
                      step="0.5"
                      value={inputs.rejaLength || 10}
                      onChange={(e) => onChangeInputs({ rejaLength: Math.max(1, parseFloat(e.target.value) || 0) })}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-base font-bold text-slate-900 shadow-inner focus:border-[#ff6a00] focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                      placeholder="Ej: 12"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                      ml
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Altura aproximada (m):
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="0.5"
                      max="4.0"
                      step="0.1"
                      value={inputs.rejaHeight || 1.2}
                      onChange={(e) => onChangeInputs({ rejaHeight: Math.max(0.4, parseFloat(e.target.value) || 0) })}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-base font-bold text-slate-900 shadow-inner focus:border-[#ff6a00] focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                      placeholder="Ej: 1.2"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                      metros
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Configuración para Medidas Libres / Paño a Medida (Lleno por Vacío) */}
          {inputs.rejaType === 'custom_grille' && (
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/80 p-5 md:p-6 backdrop-blur-md dark:border-[#ff6a00]/30 dark:bg-[#131b2e]/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-200 dark:border-white/10 mb-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sliders className="h-4 w-4 text-[#ff6a00]" />
                    <span>Cálculo por Superficie "Lleno por Vacío"</span>
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Se toma el vano total (Ancho x Alto) sin descontar huecos porque cada barrote tiene 4 caras a pintar.
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-slate-200/70 dark:bg-white/5 p-1 rounded-xl border border-slate-300/60 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => onChangeInputs({ useManualRejaM2: false })}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      !inputs.useManualRejaM2
                        ? 'bg-[#ff6a00] text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                    }`}
                  >
                    Ancho x Alto
                  </button>
                  <button
                    type="button"
                    onClick={() => onChangeInputs({ useManualRejaM2: true })}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      inputs.useManualRejaM2
                        ? 'bg-[#ff6a00] text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                    }`}
                  >
                    m² Totales
                  </button>
                </div>
              </div>

              {!inputs.useManualRejaM2 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Ancho del paño (m):
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputs.rejaWidth || 2.0}
                      onChange={(e) => onChangeInputs({ rejaWidth: Math.max(0.5, parseFloat(e.target.value) || 0) })}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-base font-bold text-slate-900 shadow-inner focus:border-[#ff6a00] focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Alto del paño (m):
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputs.rejaHeight || 2.0}
                      onChange={(e) => onChangeInputs({ rejaHeight: Math.max(0.5, parseFloat(e.target.value) || 0) })}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-base font-bold text-slate-900 shadow-inner focus:border-[#ff6a00] focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                    />
                  </div>
                </div>
              ) : (
                <div className="max-w-sm">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Superficie geométrica total del paño:
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      step="0.5"
                      value={inputs.manualRejaM2 || 4}
                      onChange={(e) => onChangeInputs({ manualRejaM2: Math.max(0.5, parseFloat(e.target.value) || 0) })}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-lg font-bold text-slate-900 shadow-inner focus:border-[#ff6a00] focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white"
                      placeholder="Ej: 6"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                      m²
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Nota técnica sobre herrería */}
          <div className="rounded-2xl border border-amber-300 dark:border-amber-400/20 bg-amber-50/80 dark:bg-amber-400/5 p-4 flex items-start gap-3 text-xs">
            <Shield className="h-5 w-5 text-amber-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Cómputo métrico profesional:</strong> La pintura de rejas exteriores contempla 2 manos terminadas con Esmalte Sintético 3 en 1 o esquema con convertidor de óxido, cubriendo las 4 caras de los barrotes, marco perimetral y puntos de anclaje.
            </p>
          </div>
        </div>
      )}

      {/* Botón Continuar */}
      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={onNextStep}
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff6a00] to-[#ea580c] px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_0_25px_-5px_rgba(255,106,0,0.5)] transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
        >
          <span>
            {isRejas
              ? 'Siguiente: Estado de la Reja o Portón & Óxido'
              : 'Siguiente: Estado de Paredes & Dificultades'}
          </span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Modal Instructivo para Paredes */}
      {!isRejas && (
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
      )}
    </div>
  );
}
