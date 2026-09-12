import React, { useState, useMemo, useRef } from 'react';
import { calculateQuote } from '../../utils/calculateQuote.js';
import { StepRooms } from './StepRooms.jsx';
import { StepConditions } from './StepConditions.jsx';
import { StepResults } from './StepResults.jsx';
import { Ruler, AlertCircle, FileCheck, Sparkles, Check } from 'lucide-react';

export function CalculatorWizard() {
  const wizardRef = useRef(null);

  const [currentStep, setCurrentStep] = useState(1);

  const [inputs, setInputs] = useState({
    roomType: 'room_medium',
    useManualM2: false,
    manualM2: 35,
    length: 4.0,
    width: 3.5,
    height: 2.5,
    openingsDeductionM2: 3.5,
    paintCeiling: true,
    selectedConditions: ['minorCracks'], // por defecto pequeñas grietas habituales
    materialsBuyer: 'client', // por defecto el cliente compra en Mercado Libre
  });

  const handleUpdateInputs = (partial) => {
    setInputs(prev => ({ ...prev, ...partial }));
  };

  // Cálculo memorizado
  const quoteData = useMemo(() => {
    return calculateQuote(inputs);
  }, [inputs]);

  const scrollToWizard = () => {
    if (wizardRef.current) {
      wizardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber);
    scrollToWizard();
  };

  const stepsHeader = [
    { num: 1, title: 'Espacio y m²', desc: 'Ambiente o medidas' },
    { num: 2, title: 'Estado de Paredes', desc: 'Dificultades y extras' },
    { num: 3, title: 'Presupuesto Final', desc: 'Mano de obra y materiales' },
  ];

  return (
    <section id="calculadora" ref={wizardRef} className="scroll-mt-24 py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        
        {/* Contenedor Principal con Glassmorphism */}
        <div className="relative rounded-3xl md:rounded-[2.5rem] border border-white/10 bg-[#0d1322]/80 backdrop-blur-2xl p-5 sm:p-8 md:p-10 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.8)]">
          
          {/* Stepper Tabs Bar */}
          <div className="mb-8 md:mb-12">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {stepsHeader.map((s) => {
                const isCurrent = currentStep === s.num;
                const isPassed = currentStep > s.num;

                return (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => {
                      // Permitir navegar a pasos previos o al paso de resultado si ya se calculó
                      if (isPassed || s.num <= currentStep) {
                        goToStep(s.num);
                      }
                    }}
                    className={`flex flex-col items-center sm:items-start p-2.5 sm:p-4 rounded-2xl border transition-all text-left ${
                      isCurrent
                        ? 'border-[#ff6a00] bg-[#ff6a00]/10 shadow-[0_0_20px_-5px_rgba(255,106,0,0.4)]'
                        : isPassed
                        ? 'border-emerald-500/40 bg-emerald-500/5 hover:bg-emerald-500/10'
                        : 'border-white/5 bg-white/[0.02] opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-black ${
                        isCurrent
                          ? 'bg-[#ff6a00] text-white'
                          : isPassed
                          ? 'bg-emerald-500 text-white'
                          : 'bg-white/10 text-slate-400'
                      }`}>
                        {isPassed ? <Check className="h-3.5 w-3.5" /> : s.num}
                      </span>
                      <span className="hidden sm:inline text-xs font-bold text-white">
                        {s.title}
                      </span>
                    </div>
                    <span className="hidden sm:inline text-[11px] text-slate-400">
                      {s.desc}
                    </span>
                    <span className="sm:hidden text-[10px] font-bold text-white">
                      Paso {s.num}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Renderizado de cada Paso */}
          {currentStep === 1 && (
            <StepRooms
              inputs={inputs}
              onChangeInputs={handleUpdateInputs}
              onNextStep={() => goToStep(2)}
            />
          )}

          {currentStep === 2 && (
            <StepConditions
              inputs={inputs}
              onChangeInputs={handleUpdateInputs}
              onPrevStep={() => goToStep(1)}
              onCalculate={() => goToStep(3)}
            />
          )}

          {currentStep === 3 && (
            <StepResults
              quoteData={quoteData}
              onReset={() => goToStep(1)}
              onEditInputs={() => goToStep(1)}
            />
          )}

        </div>

      </div>
    </section>
  );
}
