// KalkulAR - Calculadora de Presupuestos de Pintura & Mano de Obra (Argentina)
// Despliegue en producción con Vercel

import React from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { CalculatorWizard } from './components/Calculator/CalculatorWizard.jsx';
import { PseoEditorialSection } from './components/SEO/PseoEditorialSection.jsx';
import { TransparencySection } from './components/TransparencySection.jsx';
import { LaborPriceGuideTable } from './components/SEO/LaborPriceGuideTable.jsx';
import { BrandComparisonTable } from './components/SEO/BrandComparisonTable.jsx';
import { PresetLinksGrid } from './components/SEO/PresetLinksGrid.jsx';
import { WhyUsSection } from './components/WhyUsSection.jsx';
import { FaqSection } from './components/FaqSection.jsx';
import { Footer } from './components/Footer.jsx';
import { FeedbackWidget } from './components/FeedbackWidget.jsx';
import { JsonLdSchema } from './components/SEO/JsonLdSchema.jsx';
import { getPseoPageByPath } from './config/pseo.config.js';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [wizardKey, setWizardKey] = React.useState(0);
  
  // Detección de ruta pSEO en el navegador
  const [currentPath, setCurrentPath] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  const activePseoPage = React.useMemo(() => {
    return getPseoPageByPath(currentPath);
  }, [currentPath]);

  // Escuchar navegación del historial (Atrás / Adelante)
  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sincronizar título del documento si se navega del lado del cliente
  React.useEffect(() => {
    if (activePseoPage) {
      document.title = activePseoPage.title;
    } else {
      document.title = 'KalkulAR | Calculadora de Pintura y Mano de Obra por m² en Argentina (2026)';
    }
  }, [activePseoPage]);
  
  // Modo Claro por defecto, con persistencia en localStorage
  const [theme, setTheme] = React.useState(() => {
    const saved = localStorage.getItem('kalkular-theme');
    return saved === 'dark' ? 'dark' : 'light';
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('kalkular-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleResetAll = () => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      setCurrentPath('/');
    }
    setWizardKey(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0a0d14] dark:text-slate-100 flex flex-col font-sans selection:bg-[#ff6a00] selection:text-white transition-colors duration-300">
      {/* Marcado de Datos Estructurados Schema.org / JSON-LD dinámico */}
      <JsonLdSchema pseoPage={activePseoPage} />

      {/* Floating Dock Navbar */}
      <Navbar 
        onOpenCalculator={handleScrollToCalculator} 
        onReset={handleResetAll} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section adaptado al Preset pSEO o al Home */}
        <Hero 
          onStartCalculator={handleScrollToCalculator} 
          pseoPage={activePseoPage}
        />

        {/* Wizard Calculadora pre-cargado con los datos del ambiente */}
        <CalculatorWizard 
          key={`${wizardKey}-${activePseoPage?.slug || 'home'}`} 
          initialPreset={activePseoPage?.calculatorPreset}
        />

        {/* Bloque Editorial Específico de la Landing Programática */}
        {activePseoPage && (
          <PseoEditorialSection 
            pseoPage={activePseoPage}
            onResetToGeneral={handleResetAll}
          />
        )}

        {/* Sección de Transparencia y Fórmulas */}
        <TransparencySection />

        {/* Guía de Costos Testigo de Mano de Obra en Argentina (SEO & Transparencia) */}
        <LaborPriceGuideTable />

        {/* Comparativa Técnica de Rendimiento de Marcas Líderes (SEO & Afiliados) */}
        <BrandComparisonTable />

        {/* Hub de Enlazado Interno: Grilla de Presupuestos Rápidos */}
        <PresetLinksGrid currentPath={currentPath} />

        {/* Por qué elegirnos / Social Proof */}
        <WhyUsSection />

        {/* FAQ Preguntas Frecuentes Sincronizadas con Google Rich Snippets */}
        <FaqSection />
      </main>

      {/* Footer con Disclaimer de Afiliados */}
      <Footer 
        onOpenCalculator={handleScrollToCalculator} 
        onReset={handleResetAll} 
      />

      {/* Botón Flotante de Sugerencias y Comentarios */}
      <FeedbackWidget />

      {/* Métricas y Monitoreo de Visitas de Vercel */}
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
