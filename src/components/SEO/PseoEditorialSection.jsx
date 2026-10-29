import React, { useState } from 'react';
import { 
  Calculator, 
  Paintbrush, 
  Snowflake,
  HelpCircle, 
  ChevronDown, 
  ArrowLeft, 
  Sparkles 
} from 'lucide-react';

export function PseoEditorialSection({ pseoPage, onResetToGeneral, isAcMode = false }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!pseoPage || !pseoPage.seoContent) return null;

  const { quickAnswer, metrics, editorialParagraphs, faqs } = pseoPage.seoContent;
  const isAcPage = isAcMode || pseoPage.calculatorPreset?.jobCategory === 'ac';

  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-14 md:py-20 border-t border-slate-200 dark:border-white/10 bg-white/70 dark:bg-[#0c101c]/80 backdrop-blur-md transition-colors">
      <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-12">
        
        {/* Header con botón para volver a la calculadora general */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2 ${
              isAcPage
                ? 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400'
                : 'border-[#ff6a00]/30 bg-[#ff6a00]/10 text-[#ea580c] dark:text-[#ff7d1a]'
            }`}>
              {isAcPage ? (
                <Snowflake className="h-3.5 w-3.5 text-sky-500" />
              ) : (
                <Sparkles className="h-3.5 w-3.5 text-[#ff6a00]" />
              )}
              {isAcPage ? 'Guía Técnica Termomecánica CACAAV 2026/2027' : 'Guía Técnica Especializada 2026'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
              Análisis Técnico y Desglose de Costos
            </h2>
          </div>

          <a
            href="/"
            onClick={(e) => {
              if (onResetToGeneral) {
                e.preventDefault();
                onResetToGeneral();
              }
            }}
            className={`inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors shadow-xs ${
              isAcPage
                ? 'hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400'
                : 'hover:border-[#ff6a00] hover:text-[#ff6a00]'
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a Calculadora General</span>
          </a>
        </div>

        {/* Caja de Respuesta Directa (Featured Snippet) */}
        <div className={`rounded-3xl border-2 p-6 md:p-8 backdrop-blur-md shadow-sm ${
          isAcPage
            ? 'border-sky-500/30 bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-transparent'
            : 'border-[#ff6a00]/30 bg-gradient-to-br from-[#ff6a00]/10 via-amber-500/5 to-transparent'
        }`}>
          <div className="flex items-start gap-3.5">
            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white font-bold text-base shadow-sm ${
              isAcPage ? 'bg-sky-600' : 'bg-[#ff6a00]'
            }`}>
              AR
            </div>
            <div className="space-y-2">
              <h3 className={`text-xs font-black uppercase tracking-wider ${
                isAcPage ? 'text-sky-600 dark:text-sky-400' : 'text-[#ea580c] dark:text-[#ff7d1a]'
              }`}>
                Resumen Ejecutivo · Costos en Argentina (2026)
              </h3>
              <p className="text-sm md:text-base font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                {quickAnswer}
              </p>
            </div>
          </div>
        </div>

        {/* Métricas Clave de Este Preset */}
        {metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                {isAcPage ? 'Volumen / Parámetro' : 'Superficie / Metros'}
              </span>
              <p className="text-lg md:text-xl font-black text-slate-900 dark:text-white">
                {typeof metrics.totalM2 === 'number' ? `${metrics.totalM2} m²` : (metrics.totalM2 || metrics.linearMetersEquiv || 'A medida')}
              </p>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                {isAcPage ? (metrics.wallM2 || 'Balance térmico') : 'Total a pintar'}
              </span>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 text-center">
              <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                isAcPage ? 'text-sky-600 dark:text-sky-400' : 'text-[#ea580c] dark:text-[#ff7d1a]'
              }`}>
                {isAcPage ? 'Mano de Obra / Base' : 'Mano de Obra Justa'}
              </span>
              <p className={`text-lg md:text-xl font-black ${
                isAcPage ? 'text-sky-600 dark:text-sky-400' : 'text-[#ff6a00]'
              }`}>
                {metrics.laborFairPrice}
              </p>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Rango: {metrics.laborRange}</span>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                {isAcPage ? 'Capacidad / Kit' : 'Pintura Necesaria'}
              </span>
              <p className="text-sm md:text-base font-black text-slate-900 dark:text-white mt-1">
                {isAcPage ? (metrics.ceilingM2 || metrics.paintLiters) : metrics.paintLiters}
              </p>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                {isAcPage ? (metrics.paintLiters || 'Normativa CACAAV') : '2 manos completas'}
              </span>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Tiempo Estimado
              </span>
              <p className="text-lg md:text-xl font-black text-slate-900 dark:text-white">
                {metrics.estimatedDays}
              </p>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                {isAcPage ? 'Técnico Matriculado' : 'Pintor calificado'}
              </span>
            </div>
          </div>
        )}

        {/* Párrafos Editoriales */}
        {editorialParagraphs && editorialParagraphs.length > 0 && (
          <div className="space-y-4 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.02] p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              {isAcPage ? (
                <Snowflake className="h-5 w-5 text-sky-500" />
              ) : (
                <Paintbrush className="h-5 w-5 text-[#ff6a00]" />
              )}
              <span>Cómo se calcula este trabajo en el mercado argentino</span>
            </h3>
            {editorialParagraphs.map((par, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {par}
              </p>
            ))}
          </div>
        )}

        {/* FAQs Específicas de la Landing */}
        {faqs && faqs.length > 0 && (
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className={`h-5 w-5 ${isAcPage ? 'text-sky-500' : 'text-[#ff6a00]'}`} />
              <span>Preguntas Frecuentes sobre este presupuesto</span>
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/60 backdrop-blur-md overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className={`w-full flex items-center justify-between p-4 md:p-5 text-left text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors cursor-pointer ${
                        isAcPage ? 'hover:text-sky-600 dark:hover:text-sky-400' : 'hover:text-[#ff6a00]'
                      }`}
                    >
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 flex-shrink-0 transition-transform duration-300 ${
                          isAcPage ? 'text-sky-500' : 'text-[#ff6a00]'
                        } ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 md:px-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3 animate-fade-in">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA para ajustar medidas */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={scrollToCalculator}
            className={`inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer ${
              isAcPage
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 shadow-sky-500/25'
                : 'bg-gradient-to-r from-[#ff6a00] to-[#ea580c] shadow-orange-500/25'
            }`}
          >
            <Calculator className="h-4 w-4" />
            <span>Ajustar Medidas o Personalizar en la Calculadora</span>
          </button>
        </div>

      </div>
    </section>
  );
}
