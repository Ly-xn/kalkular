import React, { useState, useEffect } from 'react';
import { Paintbrush, Calculator, ShieldCheck, HelpCircle, ArrowRight, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';

export function Navbar({ onOpenCalculator, onReset, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Calculadora', href: '#calculadora', icon: Calculator },
    { name: 'Materiales Recomendados', href: '#materiales', icon: Sparkles },
    { name: '¿Cómo Calculamos?', href: '#transparencia', icon: ShieldCheck },
    { name: 'Preguntas Frecuentes', href: '#faq', icon: HelpCircle },
  ];

  const handleLinkClick = (e, href) => {
    if (href === '#materiales') {
      e.preventDefault();
      const el = document.getElementById('materiales');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (onOpenCalculator) {
        onOpenCalculator();
      }
    } else if (href === '#calculadora') {
      e.preventDefault();
      if (onOpenCalculator) onOpenCalculator();
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:px-6 md:pt-4 transition-all duration-300">
      <div className="dock-pill relative w-full max-w-6xl rounded-2xl md:rounded-3xl">
        <div className="relative flex h-16 items-center justify-between px-3 md:px-5">
          {/* Logo con función de reset al estado inicial */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (onReset) onReset();
            }}
            className="group flex items-center gap-3 rounded-2xl pr-2 transition-transform hover:scale-[1.02] text-left cursor-pointer"
            title="Volver al inicio y reiniciar calculadora"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6a00] to-[#ea580c] shadow-[0_0_20px_-3px_rgba(255,106,0,0.6)]">
              <Paintbrush className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-slate-900 dark:text-white text-base md:text-xl flex items-center">
                Kalkul<span className="text-[#75AADB] font-black drop-shadow-[0_0_12px_rgba(117,170,219,0.4)]">AR</span>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-full bg-[#75AADB]/15 text-[#75AADB] border border-[#75AADB]/30 ml-1.5">
                  MVP
                </span>
              </span>
              <span className="hidden sm:inline text-[10px] text-slate-500 dark:text-slate-400 -mt-0.5">Calculadora de presupuestos</span>
            </div>
            
            {/* Status Dot */}
            <span className="hidden xl:flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 py-1 px-2.5 ml-2">
              <span className="dock-dot"></span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">100% Gratis</span>
            </span>
          </button>

          {/* Enlaces de Navegación Desktop */}
          <div className="hidden lg:flex items-center gap-1 rounded-2xl border border-slate-200/80 bg-slate-100/60 dark:border-white/[0.06] dark:bg-white/[0.03] p-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-white shadow-xs dark:shadow-none dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
                >
                  <Icon className="h-3.5 w-3.5 text-[#ff6a00]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* CTA, Switch de Tema & Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Botón Switch Modo Claro / Modo Oscuro */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-100/80 text-slate-700 hover:text-[#ff6a00] hover:bg-slate-200/80 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-[#ff7d1a] dark:hover:bg-white/[0.08] transition-all cursor-pointer shadow-xs"
              title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
              aria-label="Cambiar tema de color"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-yellow-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700 transition-transform hover:-rotate-12" />
              )}
            </button>

            <button
              onClick={onOpenCalculator}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#f97316] px-4 py-2 text-xs md:text-sm font-bold text-white shadow-[0_0_20px_-5px_rgba(255,106,0,0.5)] transition-all hover:scale-[1.03] hover:shadow-[0_0_25px_-3px_rgba(255,106,0,0.7)] active:scale-[0.98] cursor-pointer"
            >
              <span>Calcular Presupuesto</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-100 text-slate-700 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:text-white lg:hidden cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/80 dark:border-white/10 px-4 py-4 space-y-2 bg-white/95 text-slate-900 shadow-2xl dark:bg-[#0d1322]/95 dark:text-white backdrop-blur-2xl rounded-b-2xl">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLinkClick(e, link.href);
                  }}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <Icon className="h-4 w-4 text-[#ff6a00]" />
                  <span>{link.name}</span>
                </a>
              );
            })}

            {/* Toggle Tema Móvil */}
            <div className="pt-2 pb-1 border-t border-slate-200/80 dark:border-white/10">
              <button
                type="button"
                onClick={onToggleTheme}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {theme === 'dark' ? (
                    <Sun className="h-4 w-4 text-yellow-400" />
                  ) : (
                    <Moon className="h-4 w-4 text-slate-700" />
                  )}
                  <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono">
                  {theme === 'dark' ? 'Activar Claro ☀️' : 'Activar Oscuro 🌙'}
                </span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#ff6a00] py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 cursor-pointer"
              >
                <Calculator className="h-4 w-4" />
                <span>Comenzar a Calcular</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
