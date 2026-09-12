import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // Primera abierta por defecto

  const faqs = [
    {
      q: '¿Cuánto cobra un pintor por metro cuadrado (m²) en 2026?',
      a: 'En Argentina, el valor de mano de obra para pintura látex interior en paredes oscila actualmente entre $3.500 y $6.000 ARS por m² para dos manos terminadas. El promedio recomendado de mercado se sitúa en torno a los $4.500 ARS/m². Si la pared requiere reparaciones de fisuras, enduido completo o tratamiento de hongos, el precio tiene recargos proporcionales a la cantidad de horas extra de preparación.'
    },
    {
      q: '¿Cuántas manos de pintura son necesarias realmente?',
      a: 'El estándar profesional indiscutible es de 2 manos completas para lograr el poder cubritivo y la lavabilidad indicada por los fabricantes. Si vas a pintar con un color muy claro sobre una pared oscura o de color intenso, podrías requerir una tercera mano de remate para uniformar el tono.'
    },
    {
      q: '¿Conviene comprar los materiales por Mercado Libre o que los compre el pintor?',
      a: 'Comprar vos mismo los materiales por Mercado Libre suele ser entre un 15% y un 25% más económico. Te asegurás de comprar marcas de primera línea (Alba, Sherwin Williams, Plavicon, Tersuave), podés financiar en cuotas sin interés y recibís las latas pesadas en la puerta de tu casa. Cuando el pintor compra los materiales, es habitual que aplique un recargo por logística, acarreo y tiempo de gestión.'
    },
    {
      q: '¿Por qué el techo / cielorraso lleva una pintura distinta a las paredes?',
      a: 'El cielorraso requiere pintura látex especial para cielorrasos: tiene un acabado ultra mate (para evitar que la luz de las lámparas refleje ondulaciones del yeso), posee máxima transpirabilidad para no condensar vapor de agua y viene formulada con aditivos fungicidas antihongos de alta concentración.'
    },
    {
      q: '¿Cómo saber si mis paredes necesitan fijador sellador?',
      a: 'El fijador sellador al agua es obligatorio si: 1) La pared tiene revoque nuevo o yeso virgen; 2) Se aplicó enduido plástico en fisuras (el enduido es muy absorbente y deja manchas si no se fija); 3) La pared despide polvillo blanco al pasarle la mano. El fijador sella la porosidad e iguala la absorción.'
    },
    {
      q: '¿Cómo puedo usar este presupuesto para acordar con mi pintor?',
      a: 'Podés descargar el PDF generado o compartir el resumen por WhatsApp. Le mostrás al profesional los metros cuadrados netos calculados (con puertas y ventanas descontadas) y el rango de precio. Esto fija un marco de negociación transparente y profesional donde ambas partes están de acuerdo con los números.'
    }
  ];

  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24 border-t border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-[#080b11] relative transition-colors">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3.5 py-1 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
            <HelpCircle className="h-3.5 w-3.5 text-[#ff6a00]" />
            Preguntas Frecuentes (FAQ)
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Todo lo que necesitás saber antes de pintar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Respuestas claras a las dudas más comunes sobre mano de obra, materiales y costos.
          </p>
        </div>

        {/* Acordeón */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/60 backdrop-blur-md shadow-sm dark:shadow-none overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left text-sm md:text-base font-bold text-slate-900 dark:text-white hover:text-[#ea580c] dark:hover:text-[#ff7d1a] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#ff6a00] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
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
