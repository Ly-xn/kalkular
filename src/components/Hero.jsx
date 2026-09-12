import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, ShoppingBag, Clock, TrendingUp } from 'lucide-react';

export function Hero({ onStartCalculator }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#ff6a00]/15 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-[#ea580c]/10 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center md:px-8">
        
        {/* Top Badge estilo motoplan18 */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/10 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(255,106,0,0.3)]">
          <span className="dock-dot-orange"></span>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff7d1a]">
            #Calculá Tu Obra · Precios Transparentes 2026
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white">
          ¿Cuánto cuesta pintar tu casa?
          <br />
          <span className="bg-gradient-to-r from-[#ff7d1a] via-[#ff6a00] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-sm">
            Presupuesto y Materiales al Instante
          </span>
        </h1>

        {/* Subtitle enfocado en Marketing/SEO */}
        <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Evitá sobreprecios. Calculá en segundos el costo real de <strong className="text-slate-900 dark:text-white font-semibold">mano de obra por m²</strong> y recibí la lista exacta de pintura, rodillos y enduido para pedir con descuento en <span className="text-amber-500 dark:text-[#ffe600] font-bold">Mercado Libre</span>.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={onStartCalculator}
            className="flex h-13 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#ff6a00] to-[#ea580c] px-7 text-sm font-extrabold text-white shadow-[0_0_30px_-5px_rgba(255,106,0,0.5)] transition-all hover:scale-[1.03] hover:shadow-[0_0_35px_-3px_rgba(255,106,0,0.7)] active:scale-[0.98] cursor-pointer"
          >
            <Sparkles className="h-4 w-4" />
            <span>Calcular mi Presupuesto Ahora</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href="#transparencia"
            className="flex h-13 items-center justify-center gap-2 rounded-2xl border border-slate-300/80 bg-white/90 shadow-sm text-slate-700 backdrop-blur-md transition-all hover:border-[#ff6a00]/40 hover:bg-[#ff6a00]/10 hover:text-slate-900 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:text-white cursor-pointer"
          >
            <ShieldCheck className="h-4 w-4 text-[#ff7d1a]" />
            <span>¿Cómo calculamos?</span>
          </a>
        </div>

        {/* Micro Badges de Garantía */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#ff6a00]" />
            Sin registro ni datos personales
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#ff6a00]" />
            Fórmulas basadas en fabricantes líderes
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#ff6a00]" />
            Envío directo con Mercado Libre
          </span>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-white/10 dark:bg-[#111726]/70 backdrop-blur-md px-4 py-4 text-center transition-all hover:border-[#ff6a00]/40 hover:scale-[1.02]">
            <p className="text-2xl font-black text-[#ff6a00] md:text-3xl">+18.500</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">Presupuestos calculados</p>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-white/10 dark:bg-[#111726]/70 backdrop-blur-md px-4 py-4 text-center transition-all hover:border-[#ff6a00]/40 hover:scale-[1.02]">
            <p className="text-2xl font-black text-[#ff6a00] md:text-3xl">100%</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">Precios reales de mercado</p>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-white/10 dark:bg-[#111726]/70 backdrop-blur-md px-4 py-4 text-center transition-all hover:border-[#ff6a00]/40 hover:scale-[1.02]">
            <p className="text-2xl font-black text-[#ff6a00] md:text-3xl">4.9 ★</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">Precisión en materiales</p>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-white/10 dark:bg-[#111726]/70 backdrop-blur-md px-4 py-4 text-center transition-all hover:border-[#ff6a00]/40 hover:scale-[1.02]">
            <p className="text-2xl font-black text-[#ff6a00] md:text-3xl">0 Spam</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">100% Libre y gratuito</p>
          </div>
        </div>

        {/* Banner de Afiliación Mercado Libre integrado */}
        <div className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-2.5 text-xs text-slate-700 dark:text-slate-300">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ffe600] text-slate-900 font-extrabold text-[10px] shadow-xs">
            ML
          </span>
          <span>
            Los materiales calculados se conectan con <strong className="text-amber-600 dark:text-[#ffe600]">Mercado Libre</strong> para compra inmediata con cuotas y envío rápido a tu domicilio.
          </span>
        </div>

      </div>
    </section>
  );
}
