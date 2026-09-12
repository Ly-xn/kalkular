import React from 'react';
import { Paintbrush, Heart, ShieldAlert, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06080d] text-slate-400 text-xs py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6a00] to-[#ea580c] text-white">
              <Paintbrush className="h-5 w-5" />
            </div>
            <div>
              <span className="text-base font-extrabold text-white tracking-tight">
                Kalkul<span className="text-[#75AADB] font-black">AR</span>
              </span>
              <p className="text-[11px] text-slate-500">
                La calculadora de presupuestos de pintura y materiales más transparente de Argentina.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
            <a href="#calculadora" className="hover:text-white transition-colors">Calculadora</a>
            <a href="#materiales" className="hover:text-white transition-colors">Materiales Mercado Libre</a>
            <a href="#transparencia" className="hover:text-white transition-colors">Metodología de Precios</a>
            <a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        {/* Disclaimer de Afiliados de Mercado Libre */}
        <div className="rounded-2xl border border-white/5 bg-white/[0.015] p-4 text-[11px] leading-relaxed text-slate-500">
          <p>
            <strong className="text-slate-400">Aviso Legal y de Afiliación:</strong> KalkulAR es una herramienta digital de cálculo estimativo e informativo. Los precios de mano de obra son referencias promediadas de mercado y pueden variar según la zona geográfica, accesibilidad del inmueble y profesional contratado. Participamos en el programa de afiliados de Mercado Libre, mediante el cual recomendamos insumos y pinturas con enlace a su plataforma oficial. Las marcas comerciales (Alba, Sherwin Williams, Plavicon, Tersuave, Sika, Mercado Libre) son propiedad de sus respectivos titulares.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 pt-4">
          <p>© {new Date().getFullYear()} KalkulAR · Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Desarrollado para dar claridad y transparencia al rubro de la construcción.
          </p>
        </div>

      </div>
    </footer>
  );
}
