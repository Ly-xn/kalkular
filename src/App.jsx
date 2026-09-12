import React from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { CalculatorWizard } from './components/Calculator/CalculatorWizard.jsx';
import { TransparencySection } from './components/TransparencySection.jsx';
import { WhyUsSection } from './components/WhyUsSection.jsx';
import { FaqSection } from './components/FaqSection.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col font-sans selection:bg-[#ff6a00] selection:text-white">
      {/* Floating Dock Navbar */}
      <Navbar onOpenCalculator={handleScrollToCalculator} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onStartCalculator={handleScrollToCalculator} />

        {/* Wizard Calculadora */}
        <CalculatorWizard />

        {/* Sección de Transparencia y SEO */}
        <TransparencySection />

        {/* Por qué elegirnos / Social Proof */}
        <WhyUsSection />

        {/* FAQ Preguntas Frecuentes */}
        <FaqSection />
      </main>

      {/* Footer con Disclaimer de Afiliados */}
      <Footer />
    </div>
  );
}
