import React from 'react';
import { Paintbrush, Snowflake, ArrowUp } from 'lucide-react';

export function Footer({ onOpenCalculator, onReset, isAcMode = false }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMaterialesClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('materiales');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (onOpenCalculator) {
      onOpenCalculator();
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-[#06080d] text-slate-600 dark:text-slate-400 text-xs py-12 transition-colors">
      <div className="mx-auto max-w-6xl px-4 md:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/5">
          {/* Brand con función de reset */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (onReset) onReset();
              else scrollToTop();
            }}
            className="flex items-center gap-3 text-left cursor-pointer group transition-transform hover:scale-[1.01]"
            title="Volver al inicio y reiniciar calculadora"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-white transition-all duration-300 ${
              isAcMode
                ? 'bg-gradient-to-br from-sky-500 to-blue-600 shadow-[0_0_15px_-3px_rgba(14,165,233,0.5)]'
                : 'bg-gradient-to-br from-[#ff6a00] to-[#ea580c] shadow-[0_0_15px_-3px_rgba(255,106,0,0.5)]'
            }`}>
              {isAcMode ? (
                <Snowflake className="h-5 w-5" />
              ) : (
                <Paintbrush className="h-5 w-5" />
              )}
            </div>
            <div>
              <span className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                Kalkul<span className="text-[#75AADB] font-black">AR</span>
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                La calculadora de presupuestos de pintura, herrería y climatización más transparente de Argentina.
              </p>
            </div>
          </button>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-600 dark:text-slate-400">
            <a 
              href="#calculadora" 
              onClick={(e) => {
                e.preventDefault();
                if (onOpenCalculator) onOpenCalculator();
              }}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Calculadora
            </a>
            <a 
              href="/calculadora-frigorias-aire-acondicionado" 
              className="hover:text-sky-600 dark:hover:text-sky-400 font-semibold transition-colors"
            >
              ❄️ Calculadora Frigorías
            </a>
            <a 
              href="/precios/instalacion-aire-acondicionado-argentina" 
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              Tarifas CACAAV
            </a>
            <a 
              href="#materiales" 
              onClick={handleMaterialesClick} 
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Materiales y Equipos
            </a>
            <a href="#transparencia" className="hover:text-slate-900 dark:hover:text-white transition-colors">Metodología</a>
            <a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">Preguntas Frecuentes</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all cursor-pointer shadow-sm dark:shadow-none"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        {/* Disclaimer de Afiliados de Mercado Libre */}
        <div className="rounded-2xl border border-slate-200 dark:border-white/5 bg-white/70 dark:bg-white/[0.015] p-4 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 shadow-sm dark:shadow-none transition-colors">
          <p>
            <strong className="text-slate-700 dark:text-slate-300">Aviso Legal y de Afiliación:</strong> KalkulAR es una herramienta digital de cálculo estimativo e informativo. Los precios de mano de obra de pintura, herrería e instalación termomecánica (referencia CACAAV) son valores promediados de mercado y pueden variar según la zona geográfica, accesibilidad del inmueble y profesional matriculado contratado. Participamos en el programa de afiliados de Mercado Libre, mediante el cual recomendamos insumos, pinturas, kits de instalación y equipos de aire acondicionado con enlace a su plataforma oficial. Las marcas comerciales (Alba, Sherwin Williams, Plavicon, Tersuave, Sika, BGH, Surrey, Philco, Samsung, LG, Electra, Mercado Libre) son propiedad de sus respectivos titulares.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400 pt-4">
          <p>© {new Date().getFullYear()} KalkulAR · Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Desarrollado para dar claridad y transparencia al rubro de la construcción.
          </p>
        </div>

      </div>
    </footer>
  );
}
