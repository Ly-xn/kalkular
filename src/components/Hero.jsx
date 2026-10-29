import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Snowflake, Paintbrush, Shield } from 'lucide-react';

const CATEGORY_ORDER = ['walls', 'rejas', 'ac'];

const HERO_CONTENT_BY_CATEGORY = {
  walls: {
    topBadge: 'Cotizador 3 en 1: Pintura · Herrería · Aires Acondicionados',
    topLabel: 'CALCULADORA DE PINTURA Y MANO DE OBRA POR M² EN ARGENTINA',
    h1Line1: '¿Cuánto te pueden cobrar por pintar tu casa?',
    h1Line2: 'Calculá tu presupuesto en minutos.',
    ctaText: 'Calcular Presupuesto de Pintura'
  },
  rejas: {
    topBadge: 'Herrería, Rejas y Portones · Tarifas por Metro 2026',
    topLabel: 'COTIZADOR DE HERRERÍA, REJAS Y PORTONES EN ARGENTINA',
    h1Line1: '¿Cuánto cuesta pintar rejas y portones hoy?',
    h1Line2: 'Cotizá mano de obra y esmalte 3 en 1.',
    ctaText: 'Calcular Pintura de Rejas'
  },
  ac: {
    topBadge: 'Climatización & Balance Térmico · Temporada 2026/2027',
    topLabel: 'CALCULADORA DE FRIGORÍAS E INSTALACIÓN SPLIT EN ARGENTINA',
    h1Line1: '¿Cuántas frigorías necesita tu ambiente?',
    h1Line2: 'Calculá frigorías e instalación al instante.',
    ctaText: 'Calcular Frigorías e Instalación'
  }
};

export function Hero({
  onStartCalculator,
  pseoPage,
  isAcMode = false,
  activeCategory = 'walls',
  onSelectCategory,
  isAutoRotating = false,
  onStopAutoRotate
}) {
  const [isHoveringSelector, setIsHoveringSelector] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const isRejasMode = activeCategory === 'rejas';
  const currentHeroContent = HERO_CONTENT_BY_CATEGORY[activeCategory] || HERO_CONTENT_BY_CATEGORY.walls;

  // Pausa inteligente por Scroll (> 220px) para no rotar mientras el usuario lee o calcula abajo
  useEffect(() => {
    if (pseoPage || !isAutoRotating) return;

    const handleScroll = () => {
      const scrolledPastHero = window.scrollY > 220;
      setIsScrolledDown(prev => (prev !== scrolledPastHero ? scrolledPastHero : prev));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pseoPage, isAutoRotating]);

  const isRotationActive = !pseoPage && isAutoRotating && !isHoveringSelector && !isScrolledDown;

  // Ciclo de Auto-Rotación cada 3.8 segundos (walls -> rejas -> ac -> walls)
  useEffect(() => {
    if (!isRotationActive) return;

    const timer = setInterval(() => {
      if (onSelectCategory) {
        const currentIndex = CATEGORY_ORDER.indexOf(activeCategory);
        const nextCategory = CATEGORY_ORDER[(currentIndex + 1) % CATEGORY_ORDER.length];
        onSelectCategory(nextCategory);
      }
    }, 3800);

    return () => clearInterval(timer);
  }, [isRotationActive, activeCategory, onSelectCategory]);

  const handleSelectService = (cat) => {
    if (onStopAutoRotate) {
      onStopAutoRotate();
    }
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
  };

  const handleStartCalculatorClick = () => {
    if (onStopAutoRotate) {
      onStopAutoRotate();
    }
    if (onStartCalculator) {
      onStartCalculator();
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background glow effects */}
      <div className={`pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-[130px] transition-colors duration-500 ${
        isAcMode ? 'bg-sky-500/15' : 'bg-[#ff6a00]/15'
      }`} />
      <div className={`pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full blur-[120px] transition-colors duration-500 ${
        isAcMode ? 'bg-blue-600/10' : 'bg-[#ea580c]/10'
      }`} />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center md:px-8">
        
        {/* Top Badge Dual */}
        <div className={`mb-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md transition-all duration-500 ${
          isAcMode
            ? 'border-sky-500/30 bg-sky-500/10 shadow-[0_0_20px_-5px_rgba(14,165,233,0.3)]'
            : 'border-[#ff6a00]/30 bg-[#ff6a00]/10 shadow-[0_0_20px_-5px_rgba(255,106,0,0.3)]'
        }`}>
          {isAcMode ? (
            <Snowflake className="h-3.5 w-3.5 text-sky-500 dark:text-sky-400 animate-pulse" />
          ) : (
            <span className="dock-dot-orange"></span>
          )}
          <span className={`text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-500 ${
            isAcMode ? 'text-sky-600 dark:text-sky-400' : 'text-[#ff7d1a]'
          }`}>
            {pseoPage
              ? `${pseoPage.badge} · ${isAcMode ? 'Tarifas CACAAV 2026/2027' : 'Precios Testigo 2026'}`
              : currentHeroContent.topBadge}
          </span>
        </div>

        {/* Selector Principal "¿Qué querés presupuestar hoy?" en Home (/) */}
        {!pseoPage && (
          <div
            className="mb-7 w-full max-w-2xl"
            onMouseEnter={() => setIsHoveringSelector(true)}
            onMouseLeave={() => setIsHoveringSelector(false)}
          >
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2.5">
              ¿Qué querés presupuestar hoy?
            </p>
            <div
              role="tablist"
              aria-label="Seleccionar rubro a presupuestar"
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-[#111726]/90 p-1.5 shadow-md backdrop-blur-xl"
            >
              {/* Opción 1: Pintura y Paredes */}
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'walls'}
                onClick={() => handleSelectService('walls')}
                className={`relative overflow-hidden flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  activeCategory === 'walls'
                    ? 'bg-gradient-to-r from-[#ff6a00] to-[#ea580c] text-white shadow-md shadow-orange-500/25 scale-[1.01]'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-[#ff6a00]'
                }`}
              >
                <Paintbrush className="h-4 w-4 flex-shrink-0" />
                <span>Pintura y Paredes</span>
                {activeCategory === 'walls' && isRotationActive && (
                  <span className="pointer-events-none absolute bottom-0 left-2 right-2 h-[2px] overflow-hidden rounded-full bg-white/15">
                    <span key="progress-walls" className="block h-full bg-white/40 animate-hero-progress" />
                  </span>
                )}
              </button>

              {/* Opción 2: Rejas y Portones */}
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'rejas'}
                onClick={() => handleSelectService('rejas')}
                className={`relative overflow-hidden flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  activeCategory === 'rejas'
                    ? 'bg-gradient-to-r from-[#ff6a00] to-amber-600 text-white shadow-md shadow-orange-500/25 scale-[1.01]'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-[#ff6a00]'
                }`}
              >
                <Shield className="h-4 w-4 flex-shrink-0" />
                <span>Rejas y Portones</span>
                {activeCategory === 'rejas' && isRotationActive && (
                  <span className="pointer-events-none absolute bottom-0 left-2 right-2 h-[2px] overflow-hidden rounded-full bg-white/15">
                    <span key="progress-rejas" className="block h-full bg-white/40 animate-hero-progress" />
                  </span>
                )}
              </button>

              {/* Opción 3: Aires y Frigorías */}
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'ac'}
                onClick={() => handleSelectService('ac')}
                className={`relative overflow-hidden flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  activeCategory === 'ac'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25 scale-[1.01]'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-sky-500'
                }`}
              >
                <Snowflake className="h-4 w-4 flex-shrink-0" />
                <span>Aires y Frigorías</span>
                {activeCategory === 'ac' && isRotationActive && (
                  <span className="pointer-events-none absolute bottom-0 left-2 right-2 h-[2px] overflow-hidden rounded-full bg-white/15">
                    <span key="progress-ac" className="block h-full bg-white/40 animate-hero-progress" />
                  </span>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Contenedor Animado para H1 y Párrafo Descriptivo (CLS = 0) */}
        <div
          key={pseoPage ? pseoPage.slug : activeCategory}
          className="animate-fade-in-up flex w-full flex-col items-center justify-center min-h-[210px] sm:min-h-[230px]"
        >
          {/* Main Headline con Entidad Primaria SEO */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white">
            {pseoPage ? (
              <>
                <span className={`block text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] mb-2 sm:mb-3 ${
                  isAcMode ? 'text-sky-600 dark:text-sky-400' : 'text-[#ff7d1a]'
                }`}>
                  {isAcMode
                    ? 'Calculadora de Frigorías e Instalación Split en Argentina (2026/2027)'
                    : 'Calculadora de Pintura y Mano de Obra en Argentina (2026)'}
                </span>
                <span className="text-slate-900 dark:text-white">
                  {pseoPage.h1}
                </span>
              </>
            ) : (
              <>
                <span className={`block text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] mb-2 sm:mb-3 ${
                  isAcMode ? 'text-sky-600 dark:text-sky-400' : 'text-[#ff7d1a]'
                }`}>
                  {currentHeroContent.topLabel}
                </span>
                {currentHeroContent.h1Line1}
                <br />
                <span className={`bg-clip-text text-transparent drop-shadow-sm ${
                  isAcMode
                    ? 'bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600'
                    : 'bg-gradient-to-r from-[#ff7d1a] via-[#ff6a00] to-[#fbbf24]'
                }`}>
                  {currentHeroContent.h1Line2}
                </span>
              </>
            )}
          </h1>

          {/* Subtitle enfocado en Marketing/SEO */}
          <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {pseoPage ? (
              pseoPage.subtitle
            ) : isAcMode ? (
              <>
                Evitá comprar un equipo chico o pagar de más. Calculá las <strong className="text-slate-900 dark:text-white font-semibold">frigorías y watts reales por m³</strong>, mano de obra oficial CACAAV y el kit exacto en <span className="text-amber-500 dark:text-[#ffe600] font-bold">Mercado Libre</span>.
              </>
            ) : isRejasMode ? (
              <>
                Calculá por metro lineal o superficie el costo justo de <strong className="text-slate-900 dark:text-white font-semibold">lijado, antióxido y pintura</strong> para rejas, ventanas y portones con insumos en <span className="text-amber-500 dark:text-[#ffe600] font-bold">Mercado Libre</span>.
              </>
            ) : (
              <>
                Evitá sobreprecios. Calculá en segundos el <strong className="text-slate-900 dark:text-white font-semibold">costo real de mano de obra por m²</strong> y recibí la lista exacta de pintura y materiales en <span className="text-amber-500 dark:text-[#ffe600] font-bold">Mercado Libre</span>.
              </>
            )}
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            id="btn-calcular-presupuesto"
            onClick={handleStartCalculatorClick}
            className={`flex h-13 items-center justify-center gap-2 rounded-2xl px-7 text-sm font-extrabold text-white transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer ${
              isAcMode
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 shadow-[0_0_30px_-5px_rgba(14,165,233,0.5)] hover:shadow-[0_0_35px_-3px_rgba(14,165,233,0.7)]'
                : 'bg-gradient-to-r from-[#ff6a00] to-[#ea580c] shadow-[0_0_30px_-5px_rgba(255,106,0,0.5)] hover:shadow-[0_0_35px_-3px_rgba(255,106,0,0.7)]'
            }`}
          >
            {isAcMode ? <Snowflake className="h-4 w-4" /> : isRejasMode ? <Shield className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
            <span>
              {pseoPage
                ? isAcMode
                  ? 'Calcular Frigorías e Instalación'
                  : 'Calcular mi Presupuesto Ahora'
                : currentHeroContent.ctaText}
            </span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href="#transparencia"
            className={`flex h-13 items-center justify-center gap-2 rounded-2xl border border-slate-300/80 bg-white/90 px-5 shadow-sm text-slate-700 backdrop-blur-md transition-all hover:text-slate-900 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:text-white cursor-pointer ${
              isAcMode
                ? 'hover:border-sky-500/40 hover:bg-sky-500/10'
                : 'hover:border-[#ff6a00]/40 hover:bg-[#ff6a00]/10'
            }`}
          >
            <ShieldCheck className={`h-4 w-4 ${isAcMode ? 'text-sky-500 dark:text-sky-400' : 'text-[#ff7d1a]'}`} />
            <span>¿Cómo calculamos?</span>
          </a>
        </div>

        {/* Micro Badges de Garantía */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className={`h-3.5 w-3.5 ${isAcMode ? 'text-sky-500' : 'text-[#ff6a00]'}`} />
            Sin registro ni datos personales
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className={`h-3.5 w-3.5 ${isAcMode ? 'text-sky-500' : 'text-[#ff6a00]'}`} />
            {isAcMode ? 'Normativa térmica CACAAV / IRAM' : 'Fórmulas basadas en fabricantes líderes'}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className={`h-3.5 w-3.5 ${isAcMode ? 'text-sky-500' : 'text-[#ff6a00]'}`} />
            Envío directo con Mercado Libre
          </span>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          <div className={`rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-white/10 dark:bg-[#111726]/70 backdrop-blur-md px-4 py-4 text-center transition-all hover:scale-[1.02] ${
            isAcMode ? 'hover:border-sky-500/40' : 'hover:border-[#ff6a00]/40'
          }`}>
            <p className={`text-2xl font-black md:text-3xl ${isAcMode ? 'text-sky-600 dark:text-sky-400' : 'text-[#ff6a00]'}`}>+18.500</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">Presupuestos calculados</p>
          </div>

          <div className={`rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-white/10 dark:bg-[#111726]/70 backdrop-blur-md px-4 py-4 text-center transition-all hover:scale-[1.02] ${
            isAcMode ? 'hover:border-sky-500/40' : 'hover:border-[#ff6a00]/40'
          }`}>
            <p className={`text-2xl font-black md:text-3xl ${isAcMode ? 'text-sky-600 dark:text-sky-400' : 'text-[#ff6a00]'}`}>100%</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">Precios reales de mercado</p>
          </div>

          <div className={`rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-white/10 dark:bg-[#111726]/70 backdrop-blur-md px-4 py-4 text-center transition-all hover:scale-[1.02] ${
            isAcMode ? 'hover:border-sky-500/40' : 'hover:border-[#ff6a00]/40'
          }`}>
            <p className={`text-2xl font-black md:text-3xl ${isAcMode ? 'text-sky-600 dark:text-sky-400' : 'text-[#ff6a00]'}`}>4.9 ★</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
              {isAcMode ? 'Precisión termomecánica' : 'Precisión en materiales'}
            </p>
          </div>

          <div className={`rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-white/10 dark:bg-[#111726]/70 backdrop-blur-md px-4 py-4 text-center transition-all hover:scale-[1.02] ${
            isAcMode ? 'hover:border-sky-500/40' : 'hover:border-[#ff6a00]/40'
          }`}>
            <p className={`text-2xl font-black md:text-3xl ${isAcMode ? 'text-sky-600 dark:text-sky-400' : 'text-[#ff6a00]'}`}>0 Spam</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">100% Libre y gratuito</p>
          </div>
        </div>

        {/* Banner de Afiliación Mercado Libre integrado */}
        <div className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-2.5 text-xs text-slate-700 dark:text-slate-300">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ffe600] text-slate-900 font-extrabold text-[10px] shadow-xs">
            ML
          </span>
          <span>
            {isAcMode ? (
              <>
                Los equipos Split y kits de cañería se conectan con <strong className="text-amber-600 dark:text-[#ffe600]">Mercado Libre</strong> para compra segura con cuotas y envío gratis.
              </>
            ) : (
              <>
                Los materiales calculados se conectan con <strong className="text-amber-600 dark:text-[#ffe600]">Mercado Libre</strong> para compra inmediata con cuotas y envío rápido a tu domicilio.
              </>
            )}
          </span>
        </div>

      </div>
    </section>
  );
}
