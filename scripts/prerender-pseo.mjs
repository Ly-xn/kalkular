import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PSEO_PAGES } from '../src/config/pseo.config.js';
import { FAQS_DATA, AC_FAQS_DATA } from '../src/data/faqs.data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const templatePath = path.join(distDir, 'index.html');

console.log('🚀 Iniciando script de Pre-renderizado Estático (SSG) de KalkulAR...');

if (!fs.existsSync(templatePath)) {
  console.error('❌ Error: No se encontró dist/index.html. Ejecutá vite build primero.');
  process.exit(1);
}

const FAVICON_TAGS_BLOCK = [
  '<link rel="icon" type="image/svg+xml" href="/favicon.svg" />',
  '<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />',
  '<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />',
  '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />',
  '<link rel="manifest" href="/site.webmanifest" />'
].join('\n    ');

let baseHtml = fs.readFileSync(templatePath, 'utf-8');
if (baseHtml.includes('href="data:image/svg+xml')) {
  baseHtml = baseHtml.replace(
    /<link\s+rel="icon"\s+type="image\/svg\+xml"\s+href="data:image\/svg\+xml[^"]*"\s*\/?>/i,
    FAVICON_TAGS_BLOCK
  );
}

/**
 * Genera el marcado Schema.org JSON-LD específico para la página
 */
function buildJsonLdScripts(page = null) {
  const currentUrl = page ? `https://kalkular.com${page.path}` : 'https://kalkular.com/';
  const appName = page ? `${page.h1} | KalkulAR` : 'KalkulAR';
  const appDescription = page
    ? page.metaDescription
    : 'Calculadora técnica de pintura y presupuestos de mano de Obra por m² en Argentina (2026). Cálculo preciso de litros de pintura, insumos y costos testigo de pintores.';

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
      url: 'https://kalkular.com/',
      logo: 'https://kalkular.com/favicon-96x96.png'
    }
  };

  const isAc = page?.calculatorPreset?.jobCategory === 'ac';
  const faqsToUse = page?.seoContent?.faqs || (isAc ? AC_FAQS_DATA : FAQS_DATA);
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

  if (page) {
    const categoryLabel =
      page.category === 'precios'
        ? 'Precios Mano de Obra'
        : page.category === 'guia'
        ? 'Guías Técnicas de Climatización'
        : page.category === 'herramienta'
        ? 'Calculadoras Técnicas'
        : 'Presupuestos por Ambiente';

    breadcrumbElements.push(
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryLabel,
        item: 'https://kalkular.com/#presupuestos-frecuentes'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.h1,
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

  return `
    <script type="application/ld+json">${JSON.stringify(webAppSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
  `;
}

/**
 * Genera el cuerpo HTML estático accesible para rastreadores (Googlebot / Bingbot)
 */
function generateStaticBodyForPseo(page) {
  const { quickAnswer, metrics, editorialParagraphs, faqs } = page.seoContent;
  const isAc = page.calculatorPreset?.jobCategory === 'ac';

  const accentHex = isAc ? '#0284c7' : '#ea580c';
  const badgeBg = isAc ? '#f0f9ff' : '#fff7ed';
  const badgeBorder = isAc ? '#bae6fd' : '#fed7aa';
  const summaryBg = isAc ? '#f0f9ff' : '#fffaf0';
  const summaryBorder = isAc ? '#bae6fd' : '#ffedd5';
  const summaryTitleColor = isAc ? '#0369a1' : '#c2410c';
  const ctaBg = isAc ? '#0284c7' : '#ff6a00';

  const surfaceValue =
    typeof metrics.totalM2 === 'number'
      ? `${metrics.totalM2} m²`
      : metrics.totalM2 || metrics.linearMetersEquiv || 'A medida';

  const faqsHtml = faqs.map(f => `
    <article style="margin-bottom: 1.25rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">
      <h3 style="font-size: 1.1rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">${f.q}</h3>
      <p style="font-size: 0.95rem; color: #475569; line-height: 1.6;">${f.a}</p>
    </article>
  `).join('');

  const paragraphsHtml = editorialParagraphs.map(p => `
    <p style="font-size: 0.95rem; color: #334155; line-height: 1.7; margin-bottom: 1rem;">${p}</p>
  `).join('');

  return `
    <div id="seo-static-container" style="max-width: 960px; margin: 0 auto; padding: 2rem 1.5rem; font-family: system-ui, -apple-system, sans-serif;">
      <header style="text-align: center; margin-bottom: 2.5rem;">
        <span style="display: inline-block; background: ${badgeBg}; color: ${accentHex}; border: 1px solid ${badgeBorder}; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;">
          ${page.badge} · Precios Testigo 2026
        </span>
        <h1 style="font-size: 2.25rem; font-weight: 900; color: #0f172a; line-height: 1.2; margin: 0 0 1rem 0;">
          ${page.h1}
        </h1>
        <p style="font-size: 1.1rem; color: #64748b; max-width: 700px; margin: 0 auto; line-height: 1.6;">
          ${page.subtitle}
        </p>
      </header>

      <section style="background: ${summaryBg}; border: 2px solid ${summaryBorder}; border-radius: 1.25rem; padding: 1.5rem; margin-bottom: 2.5rem;">
        <h2 style="font-size: 0.85rem; font-weight: 800; color: ${summaryTitleColor}; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 0.5rem 0;">
          ${isAc ? 'Resumen Ejecutivo · Climatización y Tarifas CACAAV' : 'Resumen Ejecutivo · Costos en Argentina'}
        </h2>
        <p style="font-size: 1.05rem; font-weight: 500; color: #1e293b; line-height: 1.6; margin: 0;">
          ${quickAnswer}
        </p>
      </section>

      <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2.5rem;">
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.25rem; text-align: center;">
          <span style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase;">${isAc ? 'Dimensiones / Volumen' : 'Superficie / Metros'}</span>
          <p style="font-size: 1.5rem; font-weight: 900; color: #0f172a; margin: 0.25rem 0;">${surfaceValue}</p>
          <span style="font-size: 0.75rem; color: #94a3b8;">${isAc ? 'Parámetro térmico' : 'Total a pintar'}</span>
        </div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.25rem; text-align: center;">
          <span style="font-size: 0.75rem; font-weight: 700; color: ${accentHex}; text-transform: uppercase;">${isAc ? 'Mano de Obra CACAAV' : 'Mano de Obra Justa'}</span>
          <p style="font-size: 1.5rem; font-weight: 900; color: ${accentHex}; margin: 0.25rem 0;">${metrics.laborFairPrice}</p>
          <span style="font-size: 0.75rem; color: #94a3b8;">Rango: ${metrics.laborRange}</span>
        </div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.25rem; text-align: center;">
          <span style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase;">${isAc ? 'Equipo Recomendado' : 'Pintura Necesaria'}</span>
          <p style="font-size: 1.1rem; font-weight: 900; color: #0f172a; margin: 0.25rem 0;">${metrics.paintLiters}</p>
          <span style="font-size: 0.75rem; color: #94a3b8;">${isAc ? 'Capacidad comercial' : '2 manos completas'}</span>
        </div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.25rem; text-align: center;">
          <span style="font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase;">${isAc ? 'Tiempo de Instalación' : 'Tiempo Estimado'}</span>
          <p style="font-size: 1.5rem; font-weight: 900; color: #0f172a; margin: 0.25rem 0;">${metrics.estimatedDays}</p>
          <span style="font-size: 0.75rem; color: #94a3b8;">${isAc ? 'Técnico matriculado' : 'Pintor calificado'}</span>
        </div>
      </section>

      <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 1.75rem; margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #0f172a; margin: 0 0 1rem 0;">
          Cómo se calcula este trabajo en el mercado argentino
        </h2>
        ${paragraphsHtml}
      </section>

      <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 1.75rem; margin-bottom: 2.5rem;">
        <h2 style="font-size: 1.35rem; font-weight: 800; color: #0f172a; margin: 0 0 1.25rem 0;">
          Preguntas Frecuentes sobre ${page.h1}
        </h2>
        ${faqsHtml}
      </section>

      <footer style="text-align: center; padding: 1.5rem 0;">
        <a href="${isAc ? '/calculadora-frigorias-aire-acondicionado' : '/calculadora-pintura-mano-de-obra'}" style="display: inline-block; background: ${ctaBg}; color: #ffffff; font-weight: 800; font-size: 0.95rem; text-decoration: none; padding: 0.85rem 1.75rem; border-radius: 0.75rem;">
          ${isAc ? 'Calcular Frigorías e Instalación con Medidas Personalizadas' : 'Calcular Presupuesto con Medidas Personalizadas'}
        </a>
      </footer>
    </div>
  `;
}

/**
 * Procesa y genera los archivos físicos HTML
 */
let generatedCount = 0;

for (const page of PSEO_PAGES) {
  const cleanRelative = page.path.replace(/^\//, '');
  const targetFile = path.join(distDir, `${cleanRelative}.html`);
  const targetDir = path.dirname(targetFile);

  // Asegurar que el directorio contenedor exista (dist/presupuesto, dist/precios, dist/guia o dist)
  fs.mkdirSync(targetDir, { recursive: true });

  // Si existiera una subcarpeta previa con el mismo nombre (ej: dist/presupuesto/pintar-habitacion-3x3/)
  // eliminarla para que Vercel sirva el archivo .html plano y no emita redirecciones de carpeta (308)
  const oldDir = path.join(distDir, cleanRelative);
  if (fs.existsSync(oldDir) && fs.statSync(oldDir).isDirectory()) {
    try {
      fs.rmSync(oldDir, { recursive: true, force: true });
    } catch {}
  }

  let pageHtml = baseHtml;

  // 1. Reemplazar Title
  pageHtml = pageHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${page.title}</title>`
  );

  // 2. Reemplazar Canonical
  pageHtml = pageHtml.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="https://kalkular.com${page.path}" />`
  );

  // 3. Reemplazar Meta Description
  pageHtml = pageHtml.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${page.metaDescription}" />`
  );

  // 4. Reemplazar OpenGraph Tags
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${page.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${page.metaDescription}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="https://kalkular.com${page.path}" />`
  );

  // 5. Reemplazar Twitter Tags
  pageHtml = pageHtml.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${page.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${page.metaDescription}" />`
  );

  // 6. Inyectar JSON-LD específico antes de </head>
  const jsonLdHtml = buildJsonLdScripts(page);
  pageHtml = pageHtml.replace('</head>', `${jsonLdHtml}\n</head>`);

  // 7. Inyectar contenido HTML accesible dentro de <div id="root">
  const staticBody = generateStaticBodyForPseo(page);
  pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${staticBody}</div>`);

  fs.writeFileSync(targetFile, pageHtml, 'utf-8');
  generatedCount++;
  console.log(`  ✅ Generado archivo plano: ${cleanRelative}.html`);
}

// Actualizar también dist/index.html (Home) inyectando JSON-LD base
const homeJsonLd = buildJsonLdScripts(null);
let homeHtml = baseHtml;
if (!homeHtml.includes('application/ld+json')) {
  homeHtml = homeHtml.replace('</head>', `${homeJsonLd}\n</head>`);
  fs.writeFileSync(templatePath, homeHtml, 'utf-8');
  console.log('  ✅ dist/index.html (Home) enriquecido con Schema.org JSON-LD.');
}

// Sincronizar sitemap.xml
const sitemapPath = path.join(distDir, 'sitemap.xml');
const publicSitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');

const sitemapUrls = [
  { loc: 'https://kalkular.com/', priority: '1.0', changefreq: 'weekly' },
  ...PSEO_PAGES.map(p => ({
    loc: `https://kalkular.com${p.path}`,
    priority: p.category === 'precios' || p.category === 'herramienta' ? '0.9' : '0.8',
    changefreq: p.category === 'precios' || p.category === 'herramienta' ? 'weekly' : 'monthly'
  }))
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>2026-10-15</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
fs.writeFileSync(publicSitemapPath, sitemapContent, 'utf-8');
console.log(`  ✅ sitemap.xml actualizado en dist/ y public/ con las ${sitemapUrls.length} URLs canónicas.`);

console.log(`\n🎉 Pre-renderizado SSG finalizado con éxito: ${generatedCount} páginas programáticas generadas en dist/.`);
