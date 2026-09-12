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
    default:
      return <Latex20LIcon className={className} />;
  }
}
