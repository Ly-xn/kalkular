import React from 'react';
import { Shield, Sparkles, ShoppingBag, FileText, CheckCircle2, ThumbsUp, Check } from 'lucide-react';

export function WhyUsSection() {
  const reasons = [
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

  const recentQuotes = [
    {
      title: 'Dormitorio 3x3m en Flores',
      m2: '32 m²',
      price: '$144.000 ARS',
      time: '2 días',
      savings: 'Ahorró 2 latas de pintura',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&auto=format&fit=crop&q=80'
    },
    {
      title: 'Living Comedor en Belgrano',
      m2: '55 m²',
      price: '$265.000 ARS',
      time: '3 días',
      savings: 'Compró todo en Mercado Libre',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80'
    },
    {
      title: 'Monoambiente en Córdoba',
      m2: '42 m²',
      price: '$189.000 ARS',
      time: '2 días',
      savings: 'Incluyó cielorraso antihongo',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&auto=format&fit=crop&q=80'
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-white/10 bg-[#0a0d14] relative">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff7d1a] mb-2">
            Por qué usar Kalkul<span className="text-[#75AADB]">AR</span>
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Planificá tu pintura con <span className="text-[#ff6a00]">total confianza</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400">
            Miles de personas ya calcularon sus presupuestos y evitaron pagar de más.
          </p>
        </div>

        {/* Grid de Razones estilo motoplan18 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="group rounded-3xl border border-white/10 bg-[#111726]/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#ff6a00]/40 hover:bg-[#131b2e] hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ff6a00]/20 bg-[#ff6a00]/10 text-[#ff7d1a] transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-slate-400">
                    {r.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {r.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Proof Wall / Casos de Presupuestos Resueltos */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111726]/80 to-[#0d1322] p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff7d1a] block mb-1">
                Casos de Ejemplo Recientes
              </span>
              <h3 className="text-lg font-bold text-white">
                Presupuestos calculados por nuestros usuarios
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="dock-dot"></span>
              <span>Actualizado diariamente con precios de mercado</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentQuotes.map((q, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-white">{q.title}</span>
                    <span className="text-[10px] font-mono text-[#ff7d1a] bg-[#ff6a00]/10 px-2 py-0.5 rounded">
                      {q.m2}
                    </span>
                  </div>

                  <p className="text-xl font-black text-white mt-1">
                    {q.price}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Mano de obra estimada · {q.time}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
                  <Check className="h-3.5 w-3.5" />
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
