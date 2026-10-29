import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Snowflake } from 'lucide-react';
import { FAQS_DATA, AC_FAQS_DATA } from '../data/faqs.data.js';

export function FaqSection({ isAcMode = false }) {
  const [openIndex, setOpenIndex] = useState(0); // Primera abierta por defecto
  const faqsList = isAcMode ? AC_FAQS_DATA : FAQS_DATA;

  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24 border-t border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-[#080b11] relative transition-colors">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${
            isAcMode
              ? 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400'
              : 'border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-300'
          }`}>
            {isAcMode ? (
              <Snowflake className="h-3.5 w-3.5 text-sky-500" />
            ) : (
              <HelpCircle className="h-3.5 w-3.5 text-[#ff6a00]" />
            )}
            Preguntas Frecuentes (FAQ)
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {isAcMode
              ? 'Todo lo que necesitás saber sobre Frigorías e Instalación de Aires'
              : 'Todo lo que necesitás saber antes de pintar'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            {isAcMode
              ? 'Respuestas directas con costos de mano de obra CACAAV actualizados (2026/2027), conversión de Watts a Frigorías y recomendaciones técnicas de instalación.'
              : 'Respuestas directas con costos actualizados (2026), rendimientos técnicos y recomendaciones para ahorrar en mano de obra y materiales.'}
          </p>
        </div>

        {/* Acordeón con 10 FAQs estructuradas */}
        <div className="space-y-3">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id || index}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/60 backdrop-blur-md shadow-sm dark:shadow-none overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`w-full flex items-center justify-between p-4 md:p-5 text-left text-sm md:text-base font-bold text-slate-900 dark:text-white transition-colors cursor-pointer ${
                    isAcMode
                      ? 'hover:text-sky-600 dark:hover:text-sky-400'
                      : 'hover:text-[#ea580c] dark:hover:text-[#ff7d1a]'
                  }`}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 transition-transform duration-300 ${
                      isAcMode ? 'text-sky-500' : 'text-[#ff6a00]'
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
    </section>
  );
}
