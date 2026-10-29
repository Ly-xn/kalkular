import React from 'react';
import { Shield, Sparkles, ShoppingBag, FileText, Check, Snowflake } from 'lucide-react';

export function WhyUsSection({ isAcMode = false }) {
  const paintReasons = [
    {
      icon: Shield,
      title: 'Evitá sobreprecios',
      description: 'Tené un rango de referencia objetivo de mano de obra para que ningún presupuesto te tome por sorpresa ni te cobren de más.',
      badge: 'Protección'
    },
    {
      icon: ShoppingBag,
      title: 'Comprá la pintura exacta',
      description: 'Optimizamos la combinación de latas (20L, 10L, 4L) para que no gastes de más ni te falte pintura a mitad del trabajo.',
      badge: 'Ahorro Real'
    },
    {
      icon: FileText,
      title: 'Presupuesto en PDF y WhatsApp',
      description: 'Descargá un comprobante prolijo o compartilo directamente con tu pintor de confianza para acordar el trabajo sin malentendidos.',
      badge: 'Profesional'
    },
    {
      icon: Sparkles,
      title: '100% Gratis y sin registro',
      description: 'Sin dejar tu email, sin spam ni llamadas de ventas. Entrás, calculás en 2 minutos y tenés tus números claros.',
      badge: 'Sin Vueltas'
    }
  ];

  const acReasons = [
    {
      icon: Shield,
      title: 'Evitá sobreprecios con tarifas CACAAV',
      description: 'Compará con los valores oficiales de mano de obra de técnicos matriculados en Argentina para instalación básica y adicionales.',
      badge: 'Norma CACAAV'
    },
    {
      icon: ShoppingBag,
      title: 'Comprá el equipo y kit de cobre exacto',
      description: 'Te indicamos el Split comercial ideal y el diámetro exacto de caños de cobre (1/4 y 3/8 o 1/2) para ahorrar hasta 35% en materiales.',
      badge: 'Ahorro Real'
    },
    {
      icon: FileText,
      title: 'Presupuesto en PDF y WhatsApp para tu técnico',
      description: 'Descargá el balance térmico en PDF o envialo por WhatsApp a tu instalador matriculado con el detalle de metros de cañería y pases.',
      badge: 'Profesional'
    },
    {
      icon: Snowflake,
      title: '100% Gratis y sin registro',
      description: 'Sin dejar tu email, sin spam ni llamadas de ventas. Calculás tus frigorías reales por m³ en segundos y elegís con seguridad.',
      badge: 'Sin Vueltas'
    }
  ];

  const paintRecentQuotes = [
    {
      title: 'Dormitorio 3x3m en Flores',
      m2: '32 m²',
      price: '$144.000 ARS',
      subtitle: 'Mano de obra estimada · 2 días',
      savings: 'Ahorró 2 latas de pintura'
    },
    {
      title: 'Living Comedor en Belgrano',
      m2: '55 m²',
      price: '$265.000 ARS',
      subtitle: 'Mano de obra estimada · 3 días',
      savings: 'Compró todo en Mercado Libre'
    },
    {
      title: 'Monoambiente en Córdoba',
      m2: '42 m²',
      price: '$189.000 ARS',
      subtitle: 'Mano de obra estimada · 2 días',
      savings: 'Incluyó cielorraso antihongo'
    }
  ];

  const acRecentQuotes = [
    {
      title: 'Dormitorio 4x3.5m en Palermo',
      m2: '35 m³ · 3000 fg',
      price: '$155.000 ARS',
      subtitle: 'Mano de obra matriculada · 3 hs',
      savings: 'Compró Kit 3m (1/4 y 3/8) en ML'
    },
    {
      title: 'Living Comedor 5x4m en Córdoba',
      m2: '52 m³ · 4500 fg',
      price: '$190.000 ARS',
      subtitle: 'Mano de obra + sol oeste',
      savings: 'Ahorró 35% en Kit de instalación'
    },
    {
      title: 'Monoambiente 30 m² en Rosario',
      m2: '78 m³ · 6000 fg',
      price: '$267.000 ARS',
      subtitle: 'Mano de obra + cablecanal',
      savings: 'Sumó protector digital 20A'
    }
  ];

  const reasons = isAcMode ? acReasons : paintReasons;
  const recentQuotes = isAcMode ? acRecentQuotes : paintRecentQuotes;

  return (
    <section className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0a0d14] relative transition-colors">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${
            isAcMode ? 'text-sky-600 dark:text-sky-400' : 'text-[#ea580c] dark:text-[#ff7d1a]'
          }`}>
            Por qué usar Kalkul<span className="text-[#75AADB]">AR</span>
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            {isAcMode ? (
              <>
                Climatizá tu hogar u oficina con <span className="text-sky-600 dark:text-sky-400">total confianza</span>
              </>
            ) : (
              <>
                Planificá tu pintura con <span className="text-[#ff6a00]">total confianza</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {isAcMode
              ? 'Miles de usuarios ya calcularon sus frigorías exactas y evitaron comprar equipos chicos o pagar de más.'
              : 'Miles de personas ya calcularon sus presupuestos y evitaron pagar de más.'}
          </p>
        </div>

        {/* Grid de Razones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className={`group rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111726]/60 p-6 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:bg-slate-50 dark:hover:bg-[#131b2e] hover:scale-[1.02] ${
                  isAcMode ? 'hover:border-sky-500/40' : 'hover:border-[#ff6a00]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform group-hover:scale-110 ${
                    isAcMode
                      ? 'border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-400'
                      : 'border-[#ff6a00]/20 bg-[#ff6a00]/10 text-[#ff7d1a]'
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                    {r.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {r.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Proof Wall / Casos de Presupuestos Resueltos */}
        <div className="mt-14 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-gradient-to-br dark:from-[#111726]/80 dark:to-[#0d1322] p-6 md:p-8 shadow-sm dark:shadow-none transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                isAcMode ? 'text-sky-600 dark:text-sky-400' : 'text-[#ea580c] dark:text-[#ff7d1a]'
              }`}>
                Casos de Ejemplo Recientes
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isAcMode
                  ? 'Balances térmicos e instalaciones calculadas por usuarios'
                  : 'Presupuestos calculados por nuestros usuarios'}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="dock-dot"></span>
              <span>Actualizado diariamente con precios de mercado</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentQuotes.map((q, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.02] p-4 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs mb-2">
                    <span className="font-bold text-slate-900 dark:text-white">{q.title}</span>
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded whitespace-nowrap ${
                      isAcMode
                        ? 'text-sky-600 dark:text-sky-400 bg-sky-500/10'
                        : 'text-[#ea580c] dark:text-[#ff7d1a] bg-[#ff6a00]/10'
                    }`}>
                      {q.m2}
                    </span>
                  </div>

                  <p className="text-xl font-black text-slate-900 dark:text-white mt-1">
                    {q.price}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {q.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <Check className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{q.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
