import React from 'react';

/**
 * Iconos vectoriales SVG de alta definición para materiales de pintura.
 * Diseñados con estética técnica industrial (viewBox 0 0 48 48).
 */

export function Latex20LIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Balde 20 Litros */}
      <path d="M10 15L14 41C14.2 42.2 15.2 43 16.4 43H31.6C32.8 43 33.8 42.2 34 41L38 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Reborde superior */}
      <rect x="8" y="11" width="32" height="4" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      {/* Asa metálica */}
      <path d="M10 15C10 7 17 5 24 5C31 5 38 7 38 15" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" strokeLinecap="round" />
      <circle cx="24" cy="5" r="2" fill="#ff6a00" />
      {/* Detalle de pintura / gota frontal */}
      <path d="M24 21V28M24 28C22.3 28 21 29.3 21 31C21 32.7 22.3 34 24 34C25.7 34 27 32.7 27 31C27 29.3 25.7 28 24 28Z" fill="#ff6a00" stroke="#ff6a00" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Líneas de volumen 20L */}
      <path d="M17 25H20M16.5 32H19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <path d="M28 24L32 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function Latex10LIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Balde / Lata 10 Litros */}
      <path d="M12 18L15 41C15.2 42.2 16.2 43 17.4 43H30.6C31.8 43 32.8 42.2 33 41L36 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="10" y="14" width="28" height="4" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      {/* Asa */}
      <path d="M12 18C12 10 18 8 24 8C30 8 36 10 36 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Etiqueta 10L */}
      <rect x="18" y="24" width="12" height="10" rx="2" stroke="#ff6a00" strokeWidth="1.8" fill="#ff6a00" fillOpacity="0.15" />
      <text x="24" y="31.5" textAnchor="middle" fill="#ff6a00" fontSize="7" fontWeight="bold" fontFamily="sans-serif">10L</text>
    </svg>
  );
}

export function Latex4LIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Lata de 4 Litros / Galón */}
      <rect x="14" y="17" width="20" height="24" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <rect x="12" y="13" width="24" height="4" rx="1.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      {/* Asa lateral / alambre */}
      <path d="M14 19C10 21 10 29 14 31" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M34 19C38 21 38 29 34 31" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Pincelada / Onda */}
      <path d="M18 25C21 23 27 27 30 25" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="32" r="3" fill="#ff6a00" fillOpacity="0.3" stroke="#ff6a00" strokeWidth="1.5" />
      <text x="24" y="34.5" textAnchor="middle" fill="#ff6a00" fontSize="6.5" fontWeight="black" fontFamily="sans-serif">4L</text>
    </svg>
  );
}

export function LatexCeilingIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Línea de Techo / Cielorraso */}
      <path d="M6 10H42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M9 6L6 10M17 6L14 10M25 6L22 10M33 6L30 10M41 6L38 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Rodillo pintando hacia arriba */}
      <rect x="16" y="14" width="16" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M32 17.5H35C36.1 17.5 37 18.4 37 19.5V26C37 27.1 36.1 28 35 28H28V36C28 37.1 27.1 38 26 38H22C20.9 38 20 37.1 20 36V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Escudo Antihongos 🛡️ */}
      <path d="M10 24C10 24 14 25 14 30C14 34 10 37 10 37C10 37 6 34 6 30C6 25 10 24 10 24Z" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.5 30.5L9.5 31.5L12 29" stroke="#10b981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FijadorSelladorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bidón químico / Fijador 4L */}
      <path d="M15 16H33V40C33 41.7 31.7 43 30 43H18C16.3 43 15 41.7 15 40V16Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      {/* Cuello y tapa del bidón */}
      <rect x="18" y="10" width="8" height="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      <line x1="17" y1="10" x2="27" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Asa moldeada en el cuerpo */}
      <path d="M29 16V25H33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="23" y="19" width="6" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
      {/* Gota penetrante en pared / sellado */}
      <path d="M24 29C24 29 20 33 20 35.5C20 37.7 21.8 39.5 24 39.5C26.2 39.5 28 37.7 28 35.5C28 33 24 29 24 29Z" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="24" cy="35" r="1.5" fill="#38bdf8" />
    </svg>
  );
}

export function EnduidoPlasticoIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Espátula de enduir / enmasillar flexible */}
      {/* Hoja metálica trapezoidal */}
      <path d="M12 9L15 25H33L36 9H12Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      {/* Remaches */}
      <circle cx="21" cy="22" r="1" fill="currentColor" />
      <circle cx="27" cy="22" r="1" fill="currentColor" />
      {/* Mango ergonómico */}
      <path d="M21 25V39C21 40.7 22.3 42 24 42C25.7 42 27 40.7 27 39V25H21Z" fill="#ff6a00" fillOpacity="0.2" stroke="#ff6a00" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="24" cy="37" r="1.5" fill="#ff6a00" />
      {/* Pastas de enduido alisada */}
      <path d="M9 9C15 6 33 6 39 9" stroke="#ff6a00" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 15C21 14 27 14 30 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function KitPintorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Rodillo de Pintor */}
      <rect x="8" y="9" width="22" height="9" rx="3" fill="#ff6a00" fillOpacity="0.25" stroke="#ff6a00" strokeWidth="2.2" />
      {/* Alambre y soporte */}
      <path d="M30 13.5H35C36.1 13.5 37 14.4 37 15.5V23C37 24.1 36.1 25 35 25H23V30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Mango del rodillo */}
      <rect x="20" y="30" width="6" height="12" rx="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
      {/* Pincel de recorte cruzado de fondo */}
      <path d="M14 25L9 36C8.5 37.5 9.5 39 11 39H15L17 25" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" opacity="0.8" />
      <path d="M10.5 39V43H14.5V39" stroke="currentColor" strokeWidth="1.8" opacity="0.8" />
      <path d="M14 13.5H24" stroke="#ff6a00" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

export function CintaEnmascararIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Rollo elíptico de cinta de pintor */}
      {/* Borde exterior del rollo */}
      <ellipse cx="24" cy="24" rx="16" ry="14" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.1" />
      {/* Centro / Buje de cartón */}
      <ellipse cx="24" cy="24" rx="8" ry="7" stroke="currentColor" strokeWidth="2" fill="#111726" />
      {/* Tira despegándose lista para pegar */}
      <path d="M35 15L43 9C43.8 8.4 45 9 45 10V18L38 24" fill="#ffe600" fillOpacity="0.3" stroke="#ffe600" strokeWidth="2" strokeLinejoin="round" />
      {/* Rayitas de textura papel crepé */}
      <path d="M13 18L15 20M11 25L14 26M15 32L17 33M31 16L33 17M33 30L35 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function LijasPackIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Pliego trasero */}
      <path d="M16 8H36C37.1 8 38 8.9 38 10V28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
      {/* Pliego del medio */}
      <path d="M12 13H32C33.1 13 34 13.9 34 15V33" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      {/* Pliego principal frontal con esquina doblada */}
      <path d="M8 18H26L32 24V40C32 41.1 31.1 42 30 42H10C8.9 42 8 41.1 8 40V18Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      {/* Esquina doblada (solapa) */}
      <path d="M26 18V24H32" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Puntos / Textura abrasiva de granos */}
      <circle cx="14" cy="24" r="1" fill="#ff6a00" />
      <circle cx="20" cy="25" r="1" fill="#ff6a00" />
      <circle cx="16" cy="30" r="1" fill="#ff6a00" />
      <circle cx="22" cy="31" r="1" fill="#ff6a00" />
      <circle cx="27" cy="30" r="1" fill="#ff6a00" />
      <circle cx="14" cy="36" r="1" fill="#ff6a00" />
      <circle cx="20" cy="37" r="1" fill="#ff6a00" />
      <circle cx="26" cy="36" r="1" fill="#ff6a00" />
    </svg>
  );
}

export function PlasticoProtectorIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Mueble / sillón o caja base a proteger */}
      <rect x="14" y="24" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" opacity="0.5" />
      {/* Plástico film protector drapeado cubriendo por encima */}
      <path d="M7 20C12 16 19 19 24 16C29 13 36 17 41 15L43 38C40 37 35 39 30 37C25 35 18 39 12 37L7 20Z" fill="#38bdf8" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="2.2" strokeLinejoin="round" />
      {/* Pliegues y reflejos del plástico */}
      <path d="M14 21L17 35" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />
      <path d="M24 18L26 34" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />
      <path d="M34 17L36 33" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />
      {/* Gotas de pintura rebotando sin manchar */}
      <circle cx="18" cy="11" r="2" fill="#ff6a00" />
      <path d="M29 8L28 11M31 10L28 11" stroke="#ff6a00" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Esmalte3en1Icon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Lata metálica esmalte 3 en 1 */}
      <rect x="13" y="16" width="22" height="25" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <rect x="11" y="12" width="26" height="4" rx="1.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      {/* Escudo 3 en 1 */}
      <path d="M24 22L30 25V31C30 35 24 38 24 38C24 38 18 35 18 31V25L24 22Z" fill="#ff6a00" fillOpacity="0.25" stroke="#ff6a00" strokeWidth="1.8" strokeLinejoin="round" />
      <text x="24" y="32" textAnchor="middle" fill="#ff6a00" fontSize="7" fontWeight="black" fontFamily="sans-serif">3:1</text>
    </svg>
  );
}

export function ConvertidorOxidoIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Lata de convertidor anticorrosivo */}
      <rect x="14" y="17" width="20" height="24" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <rect x="12" y="13" width="24" height="4" rx="1.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      {/* Símbolo de protección química contra óxido */}
      <circle cx="24" cy="29" r="6" stroke="#ea580c" strokeWidth="2" fill="#ea580c" fillOpacity="0.15" />
      <path d="M20 25L28 33" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 22V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DesoxidanteFosfatizanteIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Botella química fosfatizante */}
      <path d="M17 18H31V41C31 42.1 30.1 43 29 43H19C17.9 43 17 42.1 17 41V18Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <rect x="21" y="9" width="6" height="9" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      <line x1="20" y1="9" x2="28" y2="9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Destello de reacción reactiva */}
      <path d="M24 26L25.5 29.5L29 31L25.5 32.5L24 36L22.5 32.5L19 31L22.5 29.5L24 26Z" fill="#38bdf8" stroke="#38bdf8" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function AguarrasMineralIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Botella solvente aguarrás */}
      <path d="M16 19H32V41C32 42.1 31.1 43 30 43H18C16.9 43 16 42.1 16 41V19Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M21 12H27V19H21V12Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      {/* Gota solvente pura */}
      <path d="M24 26C24 26 20 31 20 33.5C20 35.7 21.8 37.5 24 37.5C26.2 37.5 28 35.7 28 33.5C28 31 24 26 24 26Z" fill="#0284c7" fillOpacity="0.3" stroke="#0284c7" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function CepilloAlambreIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Mango de madera */}
      <path d="M8 22H24C25.1 22 26 22.9 26 24V26C26 27.1 25.1 28 24 28H8C6.9 28 6 27.1 6 26V24C6 22.9 6.9 22 8 22Z" fill="#d97706" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
      {/* Bloque porta cerdas */}
      <rect x="24" y="20" width="18" height="10" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      {/* Cerdas de alambre de acero */}
      <line x1="27" y1="30" x2="27" y2="40" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" />
      <line x1="31" y1="30" x2="31" y2="40" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="30" x2="35" y2="40" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" />
      <line x1="39" y1="30" x2="39" y2="40" stroke="#ff6a00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LijasTelaEsmerilIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Hojas de tela esmeril oscura para metales */}
      <rect x="14" y="10" width="22" height="28" rx="2" stroke="currentColor" strokeWidth="1.8" opacity="0.5" />
      <path d="M10 16H28L34 22V40C34 41.1 33.1 42 32 42H12C10.9 42 10 41.1 10 40V16Z" fill="#1e293b" fillOpacity="0.6" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M28 16V22H34" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Granos abrasivos oscuros de carburo/esmeril */}
      <circle cx="16" cy="24" r="1.2" fill="#ff6a00" />
      <circle cx="23" cy="26" r="1.2" fill="#ff6a00" />
      <circle cx="18" cy="32" r="1.2" fill="#ff6a00" />
      <circle cx="26" cy="33" r="1.2" fill="#ff6a00" />
      <circle cx="22" cy="38" r="1.2" fill="#ff6a00" />
    </svg>
  );
}

export function PincelCerdaMetalIcon({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Cerdas rectas del pincel */}
      <path d="M16 8H32V18H16V8Z" fill="#ff6a00" fillOpacity="0.3" stroke="#ff6a00" strokeWidth="2" strokeLinejoin="round" />
      <line x1="20" y1="8" x2="20" y2="18" stroke="#ff6a00" strokeWidth="1.5" opacity="0.6" />
      <line x1="24" y1="8" x2="24" y2="18" stroke="#ff6a00" strokeWidth="1.5" opacity="0.6" />
      <line x1="28" y1="8" x2="28" y2="18" stroke="#ff6a00" strokeWidth="1.5" opacity="0.6" />
      {/* Virola metálica */}
      <rect x="15" y="18" width="18" height="7" rx="1.5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
      {/* Mango estilizado */}
      <path d="M21 25L22 41C22 42.1 22.9 43 24 43C25.1 43 26 42.1 26 41L27 25H21Z" fill="#ea580c" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Selector de icono según el id del material
 */
export function getProductIcon(productId, className = "w-8 h-8") {
  switch (productId) {
    case 'latex20L':
      return <Latex20LIcon className={className} />;
    case 'latex10L':
      return <Latex10LIcon className={className} />;
    case 'latex4L':
      return <Latex4LIcon className={className} />;
    case 'latexCeiling4L':
      return <LatexCeilingIcon className={className} />;
    case 'fijadorSellador':
      return <FijadorSelladorIcon className={className} />;
    case 'enduidoPlastico':
      return <EnduidoPlasticoIcon className={className} />;
    case 'kitPintor':
      return <KitPintorIcon className={className} />;
    case 'cintaEnmascarar':
      return <CintaEnmascararIcon className={className} />;
    case 'lijasPack':
      return <LijasPackIcon className={className} />;
    case 'plasticoProtector':
      return <PlasticoProtectorIcon className={className} />;
    // Herrería y Rejas
    case 'esmalte3en1_4L':
    case 'esmalte3en1_1L':
      return <Esmalte3en1Icon className={className} />;
    case 'convertidorOxido1L':
      return <ConvertidorOxidoIcon className={className} />;
    case 'desoxidanteFosfatizante1L':
      return <DesoxidanteFosfatizanteIcon className={className} />;
    case 'aguarrasMineral1L':
      return <AguarrasMineralIcon className={className} />;
    case 'cepilloAlambre':
      return <CepilloAlambreIcon className={className} />;
    case 'lijasTelaEsmeril':
      return <LijasTelaEsmerilIcon className={className} />;
    case 'pincelCerdaMetal':
      return <PincelCerdaMetalIcon className={className} />;
    default:
      return <Latex20LIcon className={className} />;
  }
}

