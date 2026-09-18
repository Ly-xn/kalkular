import { jsPDF } from 'jspdf';

/**
 * Exporta el presupuesto de pintura en un documento PDF estructurado
 */
export function exportQuoteToPdf(quoteData, customerName = 'Cliente Particular') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const isRejas = quoteData.meta?.jobCategory === 'rejas';
  const primaryOrange = [255, 106, 0];
  const darkBg = [15, 23, 42];
  const grayText = [100, 116, 139];

  // Header / Membrete
  doc.setFillColor(...darkBg);
  doc.rect(0, 0, 210, 38, 'F');

  // Franja decorativa naranja
  doc.setFillColor(...primaryOrange);
  doc.rect(0, 38, 210, 3, 'F');

  // Logo / Título
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text(isRejas ? 'PRESUPUESTO HERRERÍA Y REJAS' : 'PRESUPUESTO DE PINTURA', 15, 20);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(255, 180, 120);
  doc.text(isRejas ? 'Tratamiento Anticorrosivo, Desoxidado & Esmalte 3 en 1' : 'Calculadora Inteligente de Obra & Materiales', 15, 27);

  // Metadata a la derecha
  doc.setFontSize(9);
  doc.setTextColor(200, 210, 230);
  doc.text(`Fecha: ${quoteData.meta.dateCalculated}`, 145, 18);
  doc.text(`Validez: 15 días corridos`, 145, 24);
  doc.text(`Destinado a: ${customerName}`, 145, 30);

  let y = 52;

  // Sección 1: Resumen de Superficie
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkBg);
  doc.text(isRejas ? '1. Detalle de la Herrería y Dimensiones' : '1. Detalle del Ambiente y Metros Cuadrados', 15, y);
  y += 7;

  doc.setDrawColor(220, 226, 235);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(15, y, 180, 28, 2, 2, 'FD');

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);

  if (isRejas) {
    doc.text(`Herrería seleccionada:`, 20, y + 8);
    doc.setFont('helvetica', 'bold');
    doc.text(`${quoteData.meta.roomLabel}`, 75, y + 8);

    doc.setFont('helvetica', 'normal');
    doc.text(`Desarrollo lineal:`, 20, y + 16);
    doc.text(`~${quoteData.surfaces.linearMeters} metros lineales (ml)`, 75, y + 16);

    doc.text(`Superficie vano:`, 20, y + 23);
    doc.text(`${quoteData.surfaces.totalM2} m² (lleno por vacío a 2 manos)`, 75, y + 23);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryOrange);
    doc.text(`Cómputo: ${quoteData.surfaces.totalM2} m²`, 135, y + 16);
  } else {
    doc.text(`Ambiente seleccionado:`, 20, y + 8);
    doc.setFont('helvetica', 'bold');
    doc.text(`${quoteData.meta.roomLabel}`, 75, y + 8);

    doc.setFont('helvetica', 'normal');
    doc.text(`Superficie Paredes:`, 20, y + 16);
    doc.text(`${quoteData.surfaces.wallM2} m² (2 manos)`, 75, y + 16);

    doc.text(`Superficie Cielorraso:`, 20, y + 23);
    doc.text(`${quoteData.surfaces.ceilingM2 > 0 ? quoteData.surfaces.ceilingM2 + ' m²' : 'No incluido'}`, 75, y + 23);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryOrange);
    doc.text(`Superficie Total: ${quoteData.surfaces.totalM2} m²`, 130, y + 16);
  }

  y += 38;

  // Sección 2: Presupuesto de Mano de Obra
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkBg);
  doc.text(isRejas ? '2. Estimación de Mano de Obra Especializada en Herrería' : '2. Estimación de Mano de Obra Profesional', 15, y);
  y += 7;

  doc.roundedRect(15, y, 180, 36, 2, 2, 'FD');

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Rango Mínimo (Referencia)', 25, y + 9);
  doc.text('Presupuesto Promedio Recomendado', 78, y + 9);
  doc.text('Rango Superior / Empresa', 145, y + 9);

  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(71, 85, 105);
  doc.text(`$${quoteData.labor.min.toLocaleString('es-AR')}`, 25, y + 18);

  doc.setFontSize(16);
  doc.setTextColor(...primaryOrange);
  doc.text(`$${quoteData.labor.recommended.toLocaleString('es-AR')}`, 78, y + 19);

  doc.setFontSize(13);
  doc.setTextColor(71, 85, 105);
  doc.text(`$${quoteData.labor.max.toLocaleString('es-AR')}`, 145, y + 18);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...grayText);
  doc.text(`Tiempo estimado de trabajo: ${quoteData.labor.estimatedDays} días hábiles (${quoteData.labor.workforceAdvice})`, 25, y + 29);

  y += 46;

  // Sección 3: Lista de Materiales Recomendados
  doc.setFontSize(13);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkBg);
  doc.text(isRejas ? '3. Materiales e Insumos para Herrería (Mercado Libre)' : '3. Lista de Materiales e Insumos Sugeridos (Mercado Libre)', 15, y);
  y += 6;

  // Tabla simple de materiales
  doc.setFillColor(241, 245, 249);
  doc.rect(15, y, 180, 7, 'F');
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(30, 41, 59);
  doc.text('Material / Insumo', 20, y + 5);
  doc.text('Cantidad Calculada', 115, y + 5);
  doc.text('Precio Aprox.', 165, y + 5);
  y += 8;

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);

  quoteData.materials.itemsList.slice(0, 6).forEach((item, index) => {
    if (y > 260) return; // Evitar overflow
    if (index % 2 === 1) {
      doc.setFillColor(250, 250, 250);
      doc.rect(15, y - 4, 180, 7, 'F');
    }
    doc.text(item.name.substring(0, 48), 20, y);
    doc.text(item.quantityLabel.substring(0, 28), 115, y);
    doc.text(item.estimatedPrice.substring(0, 20), 165, y);
    y += 7;
  });

  y += 4;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...darkBg);
  doc.text(`Costo estimado total de materiales: ~$${quoteData.materials.estimatedCost.toLocaleString('es-AR')} ARS`, 20, y);

  y += 12;

  // Pie de página / Recomendaciones de Obra
  doc.setDrawColor(255, 106, 0);
  doc.setLineWidth(0.5);
  doc.line(15, y, 195, y);
  y += 6;

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...grayText);
  doc.text('• Este presupuesto es un documento estimativo basado en precios promedio de mercado y rendimientos estándar.', 15, y);
  y += 4.5;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(190, 90, 10);
  if (isRejas) {
    doc.text('• HERRERÍA: El 70% del valor de mano de obra corresponde al desoxidado, cepillado y lijado manual de barrotes.', 15, y);
  } else {
    doc.text('• AVISO DE COLOR: No incluye color de pintura ni entonadores; recomendamos que el cliente elija el tono en persona.', 15, y);
  }
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...grayText);
  y += 4.5;
  doc.text('• Los enlaces a materiales de Mercado Libre garantizan productos compatibles con el metraje calculado.', 15, y);
  y += 4.5;
  doc.text('• Generado con KalkulAR | Calculadora de Presupuestos de Pintura | 100% Transparente y Gratuito.', 15, y);

  // Descarga del PDF
  const safeLabel = (quoteData.meta.roomLabel || 'Herreria').replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `Presupuesto_KalkulAR_${safeLabel}_${Date.now().toString().slice(-4)}.pdf`;
  doc.save(filename);
}

/**
 * Genera el texto formateado para compartir por WhatsApp
 */
export function buildWhatsAppShareUrl(quoteData) {
  const isRejas = quoteData.meta?.jobCategory === 'rejas';

  if (isRejas) {
    const text = `🛡️ *Presupuesto de Pintura para Rejas y Herrería*\n` +
      `📅 Fecha: ${quoteData.meta.dateCalculated}\n\n` +
      `📍 *Herrería:* ${quoteData.meta.roomLabel}\n` +
      `📏 *Desarrollo:* ~${quoteData.surfaces.linearMeters} ml (${quoteData.surfaces.totalM2} m² lleno por vacío a 2 manos)\n\n` +
      `💵 *Mano de Obra Estimada (Herrería & Desoxidado):*\n` +
      `• Mínimo: $${quoteData.labor.min.toLocaleString('es-AR')}\n` +
      `• Recomendado: $${quoteData.labor.recommended.toLocaleString('es-AR')}\n` +
      `• Máximo: $${quoteData.labor.max.toLocaleString('es-AR')}\n` +
      `⏱️ *Tiempo estimado:* ${quoteData.labor.estimatedDays} días hábiles\n\n` +
      `🛒 *Materiales estimados:* ~$${quoteData.materials.estimatedCost.toLocaleString('es-AR')}\n` +
      `• Esmalte 3 en 1: ${quoteData.materials.enamelContainersDescription || quoteData.materials.wallPaintContainers.description}\n` +
      `• Aguarrás Mineral: ${quoteData.materials.aguarrasLiters || 1}L\n` +
      `• Telas esmeril para metal + cepillo de alambre + pincel\n\n` +
      `💡 *Nota técnica:* El 70% de la mano de obra corresponde a la preparación y desoxidado barrote por barrote.\n\n` +
      `👉 Calculado gratis con KalkulAR (Calculadora de Presupuestos de Pintura)`;

    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  }

  const text = `🎨 *Presupuesto Estimado de Pintura*\n` +
    `📅 Fecha: ${quoteData.meta.dateCalculated}\n\n` +
    `📍 *Ambiente:* ${quoteData.meta.roomLabel}\n` +
    `📏 *Superficie Total:* ${quoteData.surfaces.totalM2} m² (${quoteData.surfaces.wallM2}m² paredes${quoteData.surfaces.ceilingM2 > 0 ? ` + ${quoteData.surfaces.ceilingM2}m² techo` : ''})\n\n` +
    `💵 *Mano de Obra Estimada:*\n` +
    `• Mínimo: $${quoteData.labor.min.toLocaleString('es-AR')}\n` +
    `• Recomendado: $${quoteData.labor.recommended.toLocaleString('es-AR')}\n` +
    `• Máximo: $${quoteData.labor.max.toLocaleString('es-AR')}\n` +
    `⏱️ *Tiempo estimado:* ${quoteData.labor.estimatedDays} días hábiles\n\n` +
    `🛒 *Materiales estimados:* ~$${quoteData.materials.estimatedCost.toLocaleString('es-AR')}\n` +
    `• Látex Paredes: ${quoteData.materials.wallPaintContainers.description}\n` +
    `${quoteData.surfaces.ceilingM2 > 0 ? `• Cielorraso: ${quoteData.materials.ceilingPaintContainers.description}\n` : ''}` +
    `• Kit pintor completo + cinta + lijas\n\n` +
    `⚠️ *Nota sobre el color:* El presupuesto no incluye color de pintura ni entonadores; recomendamos que el cliente elija la tonalidad en persona en la pinturería.\n\n` +
    `👉 Calculado gratis con KalkulAR (Calculadora de Presupuestos de Pintura)`;

  return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
}
