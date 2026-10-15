import React from 'react';
import { FAQS_DATA } from '../../data/faqs.data.js';

export function JsonLdSchema({ pseoPage }) {
  const currentUrl = pseoPage ? `https://kalkular.com${pseoPage.path}` : 'https://kalkular.com/';
  const appName = pseoPage ? `${pseoPage.h1} | KalkulAR` : 'KalkulAR';
  const appDescription = pseoPage
    ? pseoPage.metaDescription
    : 'Calculadora técnica de pintura y presupuestos de mano de obra por m² en Argentina (2026). Cálculo preciso de litros de pintura, insumos y costos testigo de pintores.';

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: appName,
    url: currentUrl,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock'
    },
    description: appDescription,
    inLanguage: 'es-AR',
    creator: {
      '@type': 'Organization',
      name: 'KalkulAR',
      url: 'https://kalkular.com/'
    }
  };

  // FAQ Schema: si es una página pSEO, usar sus 3 FAQs específicas, si no, las 10 generales
  const faqsToUse = pseoPage?.seoContent?.faqs || FAQS_DATA;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsToUse.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  const breadcrumbElements = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: 'https://kalkular.com/'
    }
  ];

  if (pseoPage) {
    breadcrumbElements.push(
      {
        '@type': 'ListItem',
        position: 2,
        name: pseoPage.category === 'precios' ? 'Precios Mano de Obra' : 'Presupuestos por Ambiente',
        item: 'https://kalkular.com/#presupuestos-frecuentes'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pseoPage.h1,
        item: currentUrl
      }
    );
  } else {
    breadcrumbElements.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Calculadora de Pintura y Mano de Obra',
      item: 'https://kalkular.com/#calculadora'
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbElements
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
