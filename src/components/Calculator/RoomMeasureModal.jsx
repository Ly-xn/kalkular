import React, { useState } from 'react';
import { X, Ruler, Check, Info, Minus, Plus } from 'lucide-react';

export function RoomMeasureModal({ isOpen, onClose, onApplyMeasurements, initialValues }) {
  if (!isOpen) return null;

  const [length, setLength] = useState(initialValues?.length || 4);
  const [width, setWidth] = useState(initialValues?.width || 3.5);
  const [height, setHeight] = useState(initialValues?.height || 2.5);
  const [doors, setDoors] = useState(1);
  const [windows, setWindows] = useState(1);

  // Cálculos en tiempo real
  const perimeter = 2 * (parseFloat(length) + parseFloat(width));
  const grossWallM2 = perimeter * parseFloat(height);
  const doorDeduction = doors * 1.6; // 1.6 m² promedio por puerta
  const windowDeduction = windows * 1.5; // 1.5 m² promedio por ventana
  const totalDeduction = Math.round((doorDeduction + windowDeduction) * 10) / 10;
  const netWallM2 = Math.max(2, Math.round((grossWallM2 - totalDeduction) * 10) / 10);
  const ceilingM2 = Math.round((parseFloat(length) * parseFloat(width)) * 10) / 10;

  const handleApply = () => {
    onApplyMeasurements({
      length: parseFloat(length),
      width: parseFloat(width),
      height: parseFloat(height),
      openingsDeductionM2: totalDeduction,
      netWallM2,
      ceilingM2
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-[#0f172a] p-6 md:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6a00]/15 text-[#ff7d1a] border border-[#ff6a00]/30">
              <Ruler className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">¿Cómo calcular los m²?</h3>
              <p className="text-xs text-slate-400">Asistente instructivo de medición de paredes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Formulario Interactivo */}
        <div className="mt-5 space-y-4">
          
          {/* Largo y Ancho */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Largo de la habitación (m)
              </label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="30"
                value={length}
                onChange={(e) => setLength(Math.max(0.5, parseFloat(e.target.value) || 0))}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white focus:border-[#ff6a00] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Ancho de la habitación (m)
              </label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="30"
                value={width}
                onChange={(e) => setWidth(Math.max(0.5, parseFloat(e.target.value) || 0))}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white focus:border-[#ff6a00] focus:outline-none"
              />
            </div>
          </div>

          {/* Altura del techo */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-semibold text-slate-300">
                Altura del techo: <strong className="text-[#ff6a00]">{height} m</strong>
              </label>
              <span className="text-[11px] text-slate-400">Estándar: 2.4m - 2.6m</span>
            </div>
            <input
              type="range"
              min="2.0"
              max="4.0"
              step="0.1"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
              className="w-full accent-[#ff6a00] cursor-pointer"
            />
          </div>

          {/* Descuento de Puertas y Ventanas */}
          <div className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-xs font-semibold text-slate-300 mb-2.5 flex items-center gap-1.5">
              <Info className="h-3.5 w-3.5 text-[#ff7d1a]" />
              Restar aberturas (no se pintan)
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                <span className="text-xs text-slate-300">Puertas</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setDoors(Math.max(0, doors - 1))}
                    className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-sm font-bold text-white w-4 text-center">{doors}</span>
                  <button
                    type="button"
                    onClick={() => setDoors(doors + 1)}
                    className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                <span className="text-xs text-slate-300">Ventanas</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setWindows(Math.max(0, windows - 1))}
                    className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-sm font-bold text-white w-4 text-center">{windows}</span>
                  <button
                    type="button"
                    onClick={() => setWindows(windows + 1)}
                    className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta de Resumen en Tiempo Real */}
          <div className="rounded-2xl border border-[#ff6a00]/30 bg-gradient-to-br from-[#ff6a00]/10 to-transparent p-4">
            <div className="flex justify-between items-center text-xs text-slate-300 mb-1">
              <span>Superficie neta de paredes:</span>
              <strong className="text-sm font-bold text-white">{netWallM2} m²</strong>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-300 mb-1">
              <span>Superficie de techo (opcional):</span>
              <strong className="text-sm font-bold text-white">{ceilingM2} m²</strong>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-400 pt-1 border-t border-white/10">
              <span>Aberturas descontadas:</span>
              <span>-{totalDeduction} m²</span>
            </div>
          </div>

        </div>

        {/* Botón Aplicar */}
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-white/15 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/5"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ea580c] py-2.5 text-xs font-bold text-white shadow-lg shadow-[#ff6a00]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Check className="h-4 w-4" />
            <span>Aplicar estas Medidas</span>
          </button>
        </div>

      </div>
    </div>
  );
}
