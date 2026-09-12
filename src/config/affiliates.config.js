/**
 * Configuración de Afiliados de Mercado Libre
 * Aquí puedes cambiar tu ID de afiliado o pegar directamente el enlace de afiliado de cada producto.
 */

export const AFFILIATES_CONFIG = {
  // Configuración global de afiliado
  affiliateTag: 'kalkular-20', // Tu tag o ID de afiliado de Mercado Libre
  marketplaceCountry: 'MLA', // Argentina
  baseUrl: 'https://listado.mercadolibre.com.ar',

  // Generador de URL de búsqueda con tracking (usado como respaldo si no hay link directo)
  generateAffiliateSearchUrl: (keyword) => {
    const encoded = encodeURIComponent(keyword);
    return `https://listado.mercadolibre.com.ar/${encoded}_OrderId_PRICE_ASC#matt_tool=${AFFILIATES_CONFIG.affiliateTag}`;
  },

  // Base de datos de materiales recomendados y sus enlaces de referidos
  products: {
    // 1. Pintura Látex Interior 20 Litros
    latex20L: {
      id: 'latex20L',
      name: 'Pintura Látex Interior 20 Litros',
      brand: 'Alba / Sherwin Williams / Tersuave',
      tagline: 'Máximo poder cubritivo y lavable (Ideal para casas o ambientes grandes)',
      rating: 4.8,
      reviewsCount: 3420,
      estimatedPrice: '$85.000 - $115.000',
      badge: 'Más Vendido 🏆',
      category: 'Pintura Paredes',
      affiliateUrl: 'https://meli.la/21itkD7',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&auto=format&fit=crop&q=80'
    },

    // 2. Pintura Látex Interior 10 Litros
    latex10L: {
      id: 'latex10L',
      name: 'Pintura Látex Interior 10 Litros',
      brand: 'Sherwin Williams / Alba',
      tagline: 'Excelente rendimiento para habitaciones medianas',
      rating: 4.7,
      reviewsCount: 1850,
      estimatedPrice: '$48.000 - $62.000',
      badge: 'Tamaño Ideal',
      category: 'Pintura Paredes',
      affiliateUrl: 'https://meli.la/25t4d6m',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&auto=format&fit=crop&q=80'
    },

    // 3. Pintura Látex Interior 4 Litros
    latex4L: {
      id: 'latex4L',
      name: 'Pintura Látex Interior 4 Litros',
      brand: 'Alba / Tersuave',
      tagline: 'Ideal para ambientes chicos, dormitorios o retoques',
      rating: 4.6,
      reviewsCount: 2190,
      estimatedPrice: '$22.000 - $32.000',
      badge: 'Económico',
      category: 'Pintura Paredes',
      affiliateUrl: 'https://meli.la/2ZUkWFt',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&auto=format&fit=crop&q=80'
    },

    // 4. Pintura Cielorraso Antihongo 4L / 10L
    latexCeiling4L: {
      id: 'latexCeiling4L',
      name: 'Látex Cielorrasos Antihongo 4L / 10L',
      brand: 'Tersuave / Casablanca',
      tagline: 'Ultra mate antirreflejo y transpirable para evitar condensación',
      rating: 4.9,
      reviewsCount: 1410,
      estimatedPrice: '$26.000 - $55.000',
      badge: 'Antihongos 🛡️',
      category: 'Techos',
      affiliateUrl: 'https://meli.la/1gh1QJX',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&auto=format&fit=crop&q=80'
    },

    // 5. Fijador Sellador Concentrado al Agua
    fijadorSellador: {
      id: 'fijadorSellador',
      name: 'Fijador Sellador al Agua Concentrado 4L',
      brand: 'Tersuave / Alba / Casablanca',
      tagline: 'Fija el polvillo e iguala la absorción. Rinde hasta 120m²',
      rating: 4.8,
      reviewsCount: 980,
      estimatedPrice: '$15.000 - $22.000',
      badge: 'Indispensable',
      category: 'Preparación',
      affiliateUrl: 'https://meli.la/2P91okJ',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80'
    },

    // 6. Enduido Plástico Interior
    enduidoPlastico: {
      id: 'enduidoPlastico',
      name: 'Enduido Plástico Interior (4kg / 20kg)',
      brand: 'Sinteplast / Tersuave',
      tagline: 'Fácil de lijar para tapar grietas, fisuras y dejar paredes lisas',
      rating: 4.7,
      reviewsCount: 2200,
      estimatedPrice: '$11.000 - $28.000',
      badge: 'Acabado Perfecto',
      category: 'Reparación',
      affiliateUrl: 'https://meli.la/33t9wUz',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&auto=format&fit=crop&q=80'
    },

    // 7. Kit Completo de Pintor
    kitPintor: {
      id: 'kitPintor',
      name: 'Kit Completo de Pintor Profesional',
      brand: 'El Galgo / Rucar',
      tagline: 'Rodillo lana 22cm + Bandeja + Pincel cerda + Cinta',
      rating: 4.9,
      reviewsCount: 4120,
      estimatedPrice: '$20.000 - $29.000',
      badge: 'Combo Completo ⭐',
      category: 'Herramientas',
      affiliateUrl: 'https://meli.la/2VSZUx5',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&auto=format&fit=crop&q=80'
    },

    // 8. Cinta de Enmascarar de Pintor
    cintaEnmascarar: {
      id: 'cintaEnmascarar',
      name: 'Cinta de Enmascarar de Pintor (Pack rollos)',
      brand: '3M / Fijapel / SonFuertes',
      tagline: 'Protege zócalos, ventanas y marcos sin dejar residuos de pegamento',
      rating: 4.8,
      reviewsCount: 1650,
      estimatedPrice: '$8.500 - $12.000',
      badge: 'Protección',
      category: 'Insumos',
      affiliateUrl: 'https://meli.la/2pmvsgf',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&auto=format&fit=crop&q=80'
    },

    // 9. Lijas para Pared al Agua / Esmeril
    lijasPack: {
      id: 'lijasPack',
      name: 'Lijas para Pared al Agua / Esmeril (Pack x 5)',
      brand: 'Norton / Doble A',
      tagline: 'Granos 120 (reparaciones) y 180/240 (terminación ultra suave)',
      rating: 4.7,
      reviewsCount: 890,
      estimatedPrice: '$4.500 - $7.000',
      badge: 'Lijado',
      category: 'Insumos',
      affiliateUrl: 'https://meli.la/2cHbgCn',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&auto=format&fit=crop&q=80'
    },

    // 10. Plástico Cubre Todo Protector para Pisos y Muebles
    plasticoProtector: {
      id: 'plasticoProtector',
      name: 'Plástico Cubre Todo Protector (4x5m)',
      brand: 'Tesa / Polietileno',
      tagline: 'Evita salpicaduras de pintura en cerámicos, pisos flotantes y sillones',
      rating: 4.6,
      reviewsCount: 1100,
      estimatedPrice: '$4.500 - $7.500',
      badge: 'Cero Manchas',
      category: 'Protección',
      affiliateUrl: 'https://meli.la/2eQvYLk',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&auto=format&fit=crop&q=80'
    }
  }
};
