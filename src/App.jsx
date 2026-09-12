import React from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { CalculatorWizard } from './components/Calculator/CalculatorWizard.jsx';
import { TransparencySection } from './components/TransparencySection.jsx';
import { WhyUsSection } from './components/WhyUsSection.jsx';
import { FaqSection } from './components/FaqSection.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  const [wizardKey, setWizardKey] = React.useState(0);
  
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
      {/* Floating Dock Navbar */}
      <Navbar 
        onOpenCalculator={handleScrollToCalculator} 
        onReset={handleResetAll} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onStartCalculator={handleScrollToCalculator} />

        {/* Wizard Calculadora */}
        <CalculatorWizard key={wizardKey} />

        {/* Sección de Transparencia y SEO */}
        <TransparencySection />

        {/* Por qué elegirnos / Social Proof */}
        <WhyUsSection />

        {/* FAQ Preguntas Frecuentes */}
        <FaqSection />
      </main>

      {/* Footer con Disclaimer de Afiliados */}
      <Footer 
        onOpenCalculator={handleScrollToCalculator} 
        onReset={handleResetAll} 
      />
    </div>
  );
}
